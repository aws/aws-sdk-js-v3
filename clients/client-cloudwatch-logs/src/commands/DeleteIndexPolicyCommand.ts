// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIndexPolicyRequest, DeleteIndexPolicyResponse } from "../models/models_0";
import { de_DeleteIndexPolicyCommand, se_DeleteIndexPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIndexPolicyCommand}.
 */
export interface DeleteIndexPolicyCommandInput extends DeleteIndexPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIndexPolicyCommand}.
 */
export interface DeleteIndexPolicyCommandOutput extends DeleteIndexPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a log-group level field index policy that was applied to a single log group. The
 *       indexing of the log events that happened before you delete the policy will still be used for
 *       as many as 30 days to improve CloudWatch Logs Insights queries.</p>
 *          <p>You can't use this operation to delete an account-level index policy. Instead, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteAccountPolicy.html">DeletAccountPolicy</a>.</p>
 *          <p>If you delete a log-group level field index policy and there is an account-level field
 *       index policy, in a few minutes the log group begins using that account-wide policy to index
 *       new incoming log events. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteIndexPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteIndexPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteIndexPolicyRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIndexPolicyCommandInput - {@link DeleteIndexPolicyCommandInput}
 * @returns {@link DeleteIndexPolicyCommandOutput}
 * @see {@link DeleteIndexPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DeleteIndexPolicyCommand extends $Command
  .classBuilder<
    DeleteIndexPolicyCommandInput,
    DeleteIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteIndexPolicy", {})
  .n("CloudWatchLogsClient", "DeleteIndexPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIndexPolicyCommand)
  .de(de_DeleteIndexPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIndexPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteIndexPolicyCommandInput;
      output: DeleteIndexPolicyCommandOutput;
    };
  };
}
