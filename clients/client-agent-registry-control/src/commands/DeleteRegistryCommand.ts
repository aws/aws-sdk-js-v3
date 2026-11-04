// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistryRequest, DeleteRegistryResponse } from "../models/models_0";
import { DeleteRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandInput extends DeleteRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandOutput extends DeleteRegistryResponse, __MetadataBearer {}

/**
 * Deletes a registry. Deletion is asynchronous: the registry transitions to the DELETING status and is removed along with its registry records.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, DeleteRegistryCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, DeleteRegistryCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // DeleteRegistryRequest
 *   registryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistryResponse
 * //   status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteRegistryCommandInput - {@link DeleteRegistryCommandInput}
 * @returns {@link DeleteRegistryCommandOutput}
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The caller is not authorized to perform the requested action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an unexpected internal error; the caller may retry.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling; the caller may retry after a delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation of one or more input fields.
 *
 * @throws {@link AgentRegistryControlServiceException}
 *
 * Base exception class for all service exceptions from AgentRegistryControl service.
 *
 * @public
 */
export class DeleteRegistryCommand extends command<DeleteRegistryCommandInput, DeleteRegistryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistry",
  DeleteRegistry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistryRequest;
      output: DeleteRegistryResponse;
    };
    sdk: {
      input: DeleteRegistryCommandInput;
      output: DeleteRegistryCommandOutput;
    };
  };
}
