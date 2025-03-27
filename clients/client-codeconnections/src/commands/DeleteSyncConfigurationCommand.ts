// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSyncConfigurationInput, DeleteSyncConfigurationOutput } from "../models/models_0";
import { de_DeleteSyncConfigurationCommand, se_DeleteSyncConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandInput extends DeleteSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandOutput extends DeleteSyncConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes the sync configuration for a specified repository and connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, DeleteSyncConfigurationCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, DeleteSyncConfigurationCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * const client = new CodeConnectionsClient(config);
 * const input = { // DeleteSyncConfigurationInput
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSyncConfigurationCommandInput - {@link DeleteSyncConfigurationCommandInput}
 * @returns {@link DeleteSyncConfigurationCommandOutput}
 * @see {@link DeleteSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class DeleteSyncConfigurationCommand extends $Command
  .classBuilder<
    DeleteSyncConfigurationCommandInput,
    DeleteSyncConfigurationCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "DeleteSyncConfiguration", {})
  .n("CodeConnectionsClient", "DeleteSyncConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSyncConfigurationCommand)
  .de(de_DeleteSyncConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSyncConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteSyncConfigurationCommandInput;
      output: DeleteSyncConfigurationCommandOutput;
    };
  };
}
