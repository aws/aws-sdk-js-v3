// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType,
} from "../models/models_0";
import { BatchPutScheduledUpdateGroupAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutScheduledUpdateGroupActionCommand}.
 */
export interface BatchPutScheduledUpdateGroupActionCommandInput extends BatchPutScheduledUpdateGroupActionType {}
/**
 * @public
 *
 * The output of {@link BatchPutScheduledUpdateGroupActionCommand}.
 */
export interface BatchPutScheduledUpdateGroupActionCommandOutput
  extends BatchPutScheduledUpdateGroupActionAnswer,
    __MetadataBearer {}

/**
 * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // BatchPutScheduledUpdateGroupActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledUpdateGroupActions: [ // ScheduledUpdateGroupActionRequests // required
 *     { // ScheduledUpdateGroupActionRequest
 *       ScheduledActionName: "STRING_VALUE", // required
 *       StartTime: new Date("TIMESTAMP"),
 *       EndTime: new Date("TIMESTAMP"),
 *       Recurrence: "STRING_VALUE",
 *       MinSize: Number("int"),
 *       MaxSize: Number("int"),
 *       DesiredCapacity: Number("int"),
 *       TimeZone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchPutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutScheduledUpdateGroupActionAnswer
 * //   FailedScheduledUpdateGroupActions: [ // FailedScheduledUpdateGroupActionRequests
 * //     { // FailedScheduledUpdateGroupActionRequest
 * //       ScheduledActionName: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutScheduledUpdateGroupActionCommandInput - {@link BatchPutScheduledUpdateGroupActionCommandInput}
 * @returns {@link BatchPutScheduledUpdateGroupActionCommandOutput}
 * @see {@link BatchPutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link BatchPutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @public
 */
export class BatchPutScheduledUpdateGroupActionCommand extends $Command
  .classBuilder<
    BatchPutScheduledUpdateGroupActionCommandInput,
    BatchPutScheduledUpdateGroupActionCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "BatchPutScheduledUpdateGroupAction", {})
  .n("AutoScalingClient", "BatchPutScheduledUpdateGroupActionCommand")
  .sc(BatchPutScheduledUpdateGroupAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutScheduledUpdateGroupActionType;
      output: BatchPutScheduledUpdateGroupActionAnswer;
    };
    sdk: {
      input: BatchPutScheduledUpdateGroupActionCommandInput;
      output: BatchPutScheduledUpdateGroupActionCommandOutput;
    };
  };
}
