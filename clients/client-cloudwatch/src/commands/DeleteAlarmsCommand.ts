// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAlarmsInput } from "../models/models_0";
import { DeleteAlarms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation. Log alarms cannot be batch deleted.
 *
 * If you specify any incorrect alarm names, the alarms you specify with correct names are still deleted. Other syntax errors might result in no alarms being deleted. To confirm that alarms were deleted successfully, you can use the [DescribeAlarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html) operation after using `DeleteAlarms`.
 *
 * > **Note:**
 * >
 * > It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.
 * >
 * > To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the `AlarmRule` of one of the alarms to `false`.
 * >
 * > Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAlarmsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
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
 * @throws {@link ResourceConflict} (client fault)
 *
 * The operation could not be completed because the request conflicts with the current state of the alarm or its underlying scheduled query resource.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * The named resource does not exist.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DeleteAlarmsCommand extends command<DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAlarms",
  DeleteAlarms$
) {
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
