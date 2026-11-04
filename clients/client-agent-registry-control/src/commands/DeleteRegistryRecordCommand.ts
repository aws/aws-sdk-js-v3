// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistryRecordRequest, DeleteRegistryRecordResponse } from "../models/models_0";
import { DeleteRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistryRecordCommand}.
 */
export interface DeleteRegistryRecordCommandInput extends DeleteRegistryRecordRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryRecordCommand}.
 */
export interface DeleteRegistryRecordCommandOutput extends DeleteRegistryRecordResponse, __MetadataBearer {}

/**
 * Deletes a registry record
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, DeleteRegistryRecordCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, DeleteRegistryRecordCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // DeleteRegistryRecordRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistryRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRegistryRecordCommandInput - {@link DeleteRegistryRecordCommandInput}
 * @returns {@link DeleteRegistryRecordCommandOutput}
 * @see {@link DeleteRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryRecordCommandOutput} for command's `response` shape.
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
export class DeleteRegistryRecordCommand extends command<DeleteRegistryRecordCommandInput, DeleteRegistryRecordCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistryRecord",
  DeleteRegistryRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistryRecordRequest;
      output: {};
    };
    sdk: {
      input: DeleteRegistryRecordCommandInput;
      output: DeleteRegistryRecordCommandOutput;
    };
  };
}
