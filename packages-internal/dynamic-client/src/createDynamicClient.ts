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

import { awsEndpointFunctions } from "@aws-sdk/core/client";
import { customEndpointFunctions } from "@smithy/core/endpoints";

export type { ClientProtocolCtor };

/**
 * The runtime export surface produced from an AST.
 *
 * @public
 */
export type DynamicClientExports = Record<string, any>;

/**
 * The default runtime typecheck behavior: throw on input mismatches.
 *
 * @internal
 */
const DEFAULT_TYPECHECK: RuntimeTypecheckOptions = { input: "throw", output: "warn" };

/**
 * Converts a Smithy JSON AST into a runtime schema-based client.
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
  ] as ClientProtocolCtor[],
  typecheck: RuntimeTypecheckOptions = DEFAULT_TYPECHECK
): DynamicClientExports {
  customEndpointFunctions.aws = awsEndpointFunctions;

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
  // Export synthesized error classes (base + one per modeled error), keyed by
  // class name, mirroring a code-generated client's error class exports.
  for (const errorClassName in built.errorClasses) {
    if (!hasOwn(built.errorClasses, errorClassName)) continue;
    exports[errorClassName] = built.errorClasses[errorClassName];
  }

  return exports;
}

/**
 * Derives the service name used for client/command naming.
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
