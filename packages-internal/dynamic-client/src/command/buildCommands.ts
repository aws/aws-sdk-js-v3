import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions, Pluggable, StaticOperationSchema } from "@smithy/types";

import { parseShapeId } from "../ast/ModelIndex";

/**
 * Endpoint built-in parameter instructions shared by every command. Mirrors the
 * `commonParams` emitted by the code generator. The endpoint middleware resolves
 * these from the client config (handling both static values and async providers).
 *
 * @internal
 */
const commonParams: EndpointParameterInstructions = {
  Region: { type: "builtInParams", name: "region" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  AccountId: { type: "builtInParams", name: "accountId" },
  AccountIdEndpointMode: { type: "builtInParams", name: "accountIdEndpointMode" },
};

/**
 * No per-operation endpoint parameters or middleware are derived from the model
 * at this checkpoint.
 *
 * @internal
 */
const emptyEndpointParams: EndpointParameterInstructions = {};

/**
 * @internal
 */
const emptyMiddleware = (): Pluggable<any, any>[] => [];

/**
 * Builds a `<OperationName>Command` constructor for every operation, using the
 * shared `@smithy/core` command factory so that the resulting commands are
 * indistinguishable from code-generated commands at runtime.
 *
 * @param serviceName - the service shape name (e.g. `RpcV2Protocol`).
 * @param clientName - the SDK client name (e.g. `RpcV2ProtocolClient`).
 * @param operationSchemas - operation static schemas keyed by `<OpName>$`.
 * @param operationIds - absolute operation shape IDs, used to derive names.
 *
 * @returns a map of `<OperationName>Command` to command constructor.
 *
 * @internal
 */
export function buildCommands(
  serviceName: string,
  clientName: string,
  operationSchemas: Record<string, StaticOperationSchema>,
  operationIds: string[]
): Record<string, new (input: any) => any> {
  const command = makeBuilder<any, any, any>(commonParams, serviceName, clientName, getEndpointPlugin);
  const commands: Record<string, new (input: any) => any> = {};

  for (const operationId of operationIds) {
    const { name } = parseShapeId(operationId);
    const schema = operationSchemas[name + "$"];
    if (!schema) {
      continue;
    }
    const CommandCtor = command(emptyEndpointParams, emptyMiddleware, name, schema);
    commands[name + "Command"] = CommandCtor as new (input: any) => any;
  }

  return commands;
}
