// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistryRecordRequest, DeleteRegistryRecordResponse } from "../models/models_1";
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
 * <p>Deletes a registry record. The record's status transitions to <code>DELETING</code> and the record is removed asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteRegistryRecordCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteRegistryRecordCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
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
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
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
