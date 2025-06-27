// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAlarmsInput } from "../models/models_0";
import { de_DeleteAlarmsCommand, se_DeleteAlarmsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlarmsCommand}.
 */
export interface DeleteAlarmsCommandInput extends DeleteAlarmsInput {}
/**
 * @public
 *
 * The output of {@link DeleteAlarmsCommand}.
 */
export interface DeleteAlarmsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation.
 *             However, this total can include no more than one composite alarm. For example, you could
 *             delete 99 metric alarms and one composite alarms with one operation, but you can't
 *             delete two composite alarms with one operation.</p>
 *          <p> If you specify any incorrect alarm names, the alarms you specify with correct names are still deleted. Other syntax errors might result
 *             in no alarms being deleted. To confirm that alarms were deleted successfully, you can use the
 *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p>
 *          <note>
 *             <p>It is possible to create a loop or cycle of composite alarms, where composite
 *                 alarm A depends on composite alarm B, and composite alarm B also depends on
 *                 composite alarm A. In this scenario, you can't delete any composite alarm that is
 *                 part of the cycle because there is always still a composite alarm that depends on
 *                 that alarm that you want to delete.</p>
 *             <p>To get out of such a situation, you must break the cycle by changing the rule of
 *                 one of the composite alarms in the cycle to remove a dependency that creates the
 *                 cycle. The simplest change to make to break a cycle is to change the
 *                 <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p>
 *             <p>Additionally, the evaluation of composite alarms stops if CloudWatch
 *                 detects a cycle in the evaluation path. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAlarmsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteAlarmsInput
 *   AlarmNames: [ // AlarmNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteAlarmsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlarmsCommandInput - {@link DeleteAlarmsCommandInput}
 * @returns {@link DeleteAlarmsCommandOutput}
 * @see {@link DeleteAlarmsCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DeleteAlarmsCommand extends $Command
  .classBuilder<
    DeleteAlarmsCommandInput,
    DeleteAlarmsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "DeleteAlarms", {})
  .n("CloudWatchClient", "DeleteAlarmsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAlarmsCommand)
  .de(de_DeleteAlarmsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlarmsInput;
      output: {};
    };
    sdk: {
      input: DeleteAlarmsCommandInput;
      output: DeleteAlarmsCommandOutput;
    };
  };
}
