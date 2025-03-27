// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteScheduledActionAnswer, BatchDeleteScheduledActionType } from "../models/models_0";
import { de_BatchDeleteScheduledActionCommand, se_BatchDeleteScheduledActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteScheduledActionCommand}.
 */
export interface BatchDeleteScheduledActionCommandInput extends BatchDeleteScheduledActionType {}
/**
 * @public
 *
 * The output of {@link BatchDeleteScheduledActionCommand}.
 */
export interface BatchDeleteScheduledActionCommandOutput extends BatchDeleteScheduledActionAnswer, __MetadataBearer {}

/**
 * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchDeleteScheduledActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchDeleteScheduledActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // BatchDeleteScheduledActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledActionNames: [ // ScheduledActionNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteScheduledActionAnswer
 * //   FailedScheduledActions: [ // FailedScheduledUpdateGroupActionRequests
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
 * @param BatchDeleteScheduledActionCommandInput - {@link BatchDeleteScheduledActionCommandInput}
 * @returns {@link BatchDeleteScheduledActionCommandOutput}
 * @see {@link BatchDeleteScheduledActionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
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
export class BatchDeleteScheduledActionCommand extends $Command
  .classBuilder<
    BatchDeleteScheduledActionCommandInput,
    BatchDeleteScheduledActionCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "BatchDeleteScheduledAction", {})
  .n("AutoScalingClient", "BatchDeleteScheduledActionCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteScheduledActionCommand)
  .de(de_BatchDeleteScheduledActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteScheduledActionType;
      output: BatchDeleteScheduledActionAnswer;
    };
    sdk: {
      input: BatchDeleteScheduledActionCommandInput;
      output: BatchDeleteScheduledActionCommandOutput;
    };
  };
}
