// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
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
 * import { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeStarConnectionsClient(config);
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
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 * @public
 */
export class DeleteSyncConfigurationCommand extends $Command
  .classBuilder<
    DeleteSyncConfigurationCommandInput,
    DeleteSyncConfigurationCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "DeleteSyncConfiguration", {})
  .n("CodeStarConnectionsClient", "DeleteSyncConfigurationCommand")
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
