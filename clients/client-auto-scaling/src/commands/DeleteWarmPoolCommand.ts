// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWarmPoolAnswer, DeleteWarmPoolType } from "../models/models_0";
import { DeleteWarmPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWarmPoolCommand}.
 */
export interface DeleteWarmPoolCommandInput extends DeleteWarmPoolType {}
/**
 * @public
 *
 * The output of {@link DeleteWarmPoolCommand}.
 */
export interface DeleteWarmPoolCommandOutput extends DeleteWarmPoolAnswer, __MetadataBearer {}

/**
 * Deletes the warm pool for the specified Auto Scaling group.
 *
 * For more information, see [Warm pools for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteWarmPoolType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteWarmPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWarmPoolCommandInput - {@link DeleteWarmPoolCommandInput}
 * @returns {@link DeleteWarmPoolCommandOutput}
 * @see {@link DeleteWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see [DescribeAccountLimits](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html) in the *Amazon EC2 Auto Scaling API Reference*.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *
 * The operation can't be performed because the resource is in use.
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *
 * The operation can't be performed because there are scaling activities in progress.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @public
 */
export class DeleteWarmPoolCommand extends command<DeleteWarmPoolCommandInput, DeleteWarmPoolCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWarmPool",
  DeleteWarmPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWarmPoolType;
      output: {};
    };
    sdk: {
      input: DeleteWarmPoolCommandInput;
      output: DeleteWarmPoolCommandOutput;
    };
  };
}
