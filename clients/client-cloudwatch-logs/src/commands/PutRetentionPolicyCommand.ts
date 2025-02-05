// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRetentionPolicyRequest } from "../models/models_0";
import { de_PutRetentionPolicyCommand, se_PutRetentionPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the retention of the specified log group. With a retention policy, you can
 *       configure the number of days for which to retain log events in the specified log
 *       group.</p>
 *          <note>
 *             <p>CloudWatch Logs doesn't immediately delete log events when they reach their retention
 *         setting. It typically takes up to 72 hours after that before log events are deleted, but in
 *         rare situations might take longer.</p>
 *             <p>To illustrate, imagine that you change a log group to have a longer retention setting
 *         when it contains log events that are past the expiration date, but haven't been deleted.
 *         Those log events will take up to 72 hours to be deleted after the new retention date is
 *         reached. To make sure that log data is deleted permanently, keep a log group at its lower
 *         retention setting until 72 hours after the previous retention period ends. Alternatively,
 *         wait to change the retention setting until you confirm that the earlier log events are
 *         deleted. </p>
 *             <p>When log events reach their retention setting they are marked for deletion. After
 *         they are marked for deletion, they do not add to your archival storage costs anymore, even if
 *         they are not actually deleted until later. These log events marked for deletion are also not
 *         included when you use an API to retrieve the <code>storedBytes</code> value to see how many bytes a log group is storing.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutRetentionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutRetentionPolicyRequest
 *   logGroupName: "STRING_VALUE", // required
 *   retentionInDays: Number("int"), // required
 * };
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRetentionPolicyCommandInput - {@link PutRetentionPolicyCommandInput}
 * @returns {@link PutRetentionPolicyCommandOutput}
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
 * @public
 */
export class PutRetentionPolicyCommand extends $Command
  .classBuilder<
    PutRetentionPolicyCommandInput,
    PutRetentionPolicyCommandOutput,
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
  .s("Logs_20140328", "PutRetentionPolicy", {})
  .n("CloudWatchLogsClient", "PutRetentionPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutRetentionPolicyCommand)
  .de(de_PutRetentionPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutRetentionPolicyCommandInput;
      output: PutRetentionPolicyCommandOutput;
    };
  };
}
