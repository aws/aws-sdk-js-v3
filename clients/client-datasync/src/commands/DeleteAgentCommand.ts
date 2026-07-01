// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgentRequest, DeleteAgentResponse } from "../models/models_0";
import { DeleteAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentCommand}.
 */
export interface DeleteAgentCommandInput extends DeleteAgentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentCommand}.
 */
export interface DeleteAgentCommandOutput extends DeleteAgentResponse, __MetadataBearer {}

/**
 * <p>Removes an DataSync agent resource from your Amazon Web Services account.</p>
 *          <p>Keep in mind that this operation (which can't be undone) doesn't remove the agent's
 *       virtual machine (VM) or Amazon EC2 instance from your storage environment. For next
 *       steps, you can delete the VM or instance from your storage environment or reuse it to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/activate-agent.html">activate a new
 *         agent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DeleteAgentRequest
 *   AgentArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentCommandInput - {@link DeleteAgentCommandInput}
 * @returns {@link DeleteAgentCommandOutput}
 * @see {@link DeleteAgentCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class DeleteAgentCommand extends command<DeleteAgentCommandInput, DeleteAgentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgent",
  DeleteAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentCommandInput;
      output: DeleteAgentCommandOutput;
    };
  };
}
