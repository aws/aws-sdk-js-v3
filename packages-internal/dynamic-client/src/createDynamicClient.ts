import { SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import {
  AwsSmithyRpcV2CborProtocol,
  AwsEc2QueryProtocol,
  AwsQueryProtocol,
  AwsRestXmlProtocol,
  AwsRestJsonProtocol,
  AwsJson1_0Protocol,
  AwsJson1_1Protocol,
} from "@aws-sdk/core/protocols";
import { createAggregatedClient } from "@smithy/core/client";
import type { RuntimeTypecheckOptions } from "@smithy/typecheck";
import { hasOwn } from "@aws-sdk/core/util";

import { ModelIndex, parseShapeId } from "./ast/ModelIndex";
import type { SmithyAst } from "./ast/types";
import { buildSigV4Auth } from "./auth/sigv4";
import { buildClient } from "./client/buildClient";
import { buildCommands } from "./command/buildCommands";
import { buildEndpointProvider } from "./endpoint/buildEndpointProvider";
import { selectProtocol } from "./protocol/selectProtocol";
import type { ClientProtocolCtor } from "./protocol/types";
import { SchemaBuilder } from "./schema/SchemaBuilder";

export type { ClientProtocolCtor };

/**
 * The runtime export surface produced from an AST. Mirrors the symbol export
 * surface of a code-generated schema-based client (types excepted): the client
 * class (keyed by `<Service>Client`), one `<Op>Command` constructor per
 * operation, and one `<Shape>$` static schema per named shape.
 *
 * @public
 */
export type DynamicClientExports = Record<string, any>;

/**
 * The default runtime typecheck behavior: throw on input mismatches. Because
 * the dynamic client produces no static types, runtime validation is the only
 * safety net — fail loudly by default.
 *
 * @internal
 */
const DEFAULT_TYPECHECK: RuntimeTypecheckOptions = { input: "throw", output: "warn" };

/**
 * Converts a Smithy JSON AST into a runtime schema-based client.
 *
 * The returned object mirrors the export surface of a generated client. The
 * protocol is selected from the service's protocol traits, choosing from the
 * supplied `protocols` list (default: the in-repo RPCv2 CBOR protocol). A
 * higher-level factory can wrap this function with a larger `protocols` array
 * to support additional protocols.
 *
 * Because no static types are produced, a runtime typecheck (RTTC) middleware
 * is installed automatically to validate inputs and outputs against the
 * schemas. Defaults to logging mismatches as warnings; pass
 * `{ input: false, output: false }` to disable, or a logger channel / `"throw"`
 * to change severity.
 *
 * @param ast - the Smithy JSON AST.
 * @param protocols - candidate client protocol constructors, in caller
 *   preference order.
 * @param typecheck - runtime typecheck behavior.
 *
 * @public
 */
export function createDynamicClient(
  ast: SmithyAst,
  protocols: ClientProtocolCtor[] = [
    AwsSmithyRpcV2CborProtocol,
    AwsEc2QueryProtocol,
    AwsQueryProtocol,
    AwsRestXmlProtocol,
    AwsRestJsonProtocol,
    AwsJson1_0Protocol,
    AwsJson1_1Protocol,
  ],
  typecheck: RuntimeTypecheckOptions = DEFAULT_TYPECHECK
): DynamicClientExports {
  const index = new ModelIndex(ast);
  const serviceName = deriveServiceName(index);
  const serviceShapeName = parseShapeId(index.getServiceId()).name;
  const clientName = `${serviceName}Client`;

  const built = new SchemaBuilder(index).build();
  const { protocol, protocolSettings } = selectProtocol(index, protocols, built.errorTypeRegistries);
  const endpointProvider = buildEndpointProvider(index.getService());

  const commands = buildCommands(serviceShapeName, clientName, built.operations, index.getOperationIds());

  const sigV4Auth = buildSigV4Auth(index);
  const ClientClass = buildClient({ protocol, protocolSettings, endpointProvider, typecheck, sigV4Auth });

  // The aggregated client is a subclass that exposes operation methods directly
  // (e.g. `client.listTables({})` instead of `client.send(new ListTablesCommand({}))`).
  // It mirrors the non-modular interface (e.g. `DynamoDB` vs `DynamoDBClient`).
  const AggregatedClass = class extends (ClientClass as any) {};
  createAggregatedClient(commands, AggregatedClass as any);

  const exports: DynamicClientExports = {
    [clientName]: ClientClass,
    [serviceName]: AggregatedClass,
  };
  for (const commandName in commands) {
    if (!hasOwn(commands, commandName)) continue;
    exports[commandName] = commands[commandName];
  }
  for (const schemaSymbol in built.schemas) {
    if (!hasOwn(built.schemas, schemaSymbol)) continue;
    exports[schemaSymbol] = built.schemas[schemaSymbol];
  }
  for (const operationSymbol in built.operations) {
    if (!hasOwn(built.operations, operationSymbol)) continue;
    exports[operationSymbol] = built.operations[operationSymbol];
  }

  return exports;
}

/**
 * Derives the service name used for client/command naming.
 *
 * Prefers the `sdkId` from the `aws.api#service` trait (split on spaces,
 * capitalize each word, join), which mirrors the smithy-typescript codegen
 * behavior via `AwsServiceIdIntegration`. Falls back to the shape name
 * (the portion after `#` in the shape ID).
 *
 * @internal
 */
function deriveServiceName(index: ModelIndex): string {
  const service = index.getService();
  const awsServiceTrait = service?.traits?.["aws.api#service"] as { sdkId?: string } | undefined;
  if (awsServiceTrait?.sdkId) {
    return awsServiceTrait.sdkId
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }
  return parseShapeId(index.getServiceId()).name;
}
