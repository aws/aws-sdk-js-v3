// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackInstanceRefreshAnswer, RollbackInstanceRefreshType } from "../models/models_0";
import { RollbackInstanceRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RollbackInstanceRefreshCommand}.
 */
export interface RollbackInstanceRefreshCommandInput extends RollbackInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link RollbackInstanceRefreshCommand}.
 */
export interface RollbackInstanceRefreshCommandOutput extends RollbackInstanceRefreshAnswer, __MetadataBearer {}

/**
 * Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh.
 *
 * This operation is part of the [instance refresh feature](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html) in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.
 *
 * A rollback is not supported in the following situations:
 *
 * - There is no desired configuration specified for the instance refresh.
 * - The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the `ImageId` property.
 * - The Auto Scaling group uses the launch template's `$Latest` or `$Default` version.
 *
 * When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the [DescribeInstanceRefreshes](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeInstanceRefreshes.html) API operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, RollbackInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, RollbackInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // RollbackInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new RollbackInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // RollbackInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RollbackInstanceRefreshCommandInput - {@link RollbackInstanceRefreshCommandInput}
 * @returns {@link RollbackInstanceRefreshCommandOutput}
 * @see {@link RollbackInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link RollbackInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ActiveInstanceRefreshNotFoundFault} (client fault)
 *
 * The request failed because an active instance refresh or rollback for the specified Auto Scaling group was not found.
 *
 * @throws {@link IrreversibleInstanceRefreshFault} (client fault)
 *
 * The request failed because a desired configuration was not found or an incompatible launch template (uses a Systems Manager parameter instead of an AMI ID) or launch template version (`$Latest` or `$Default`) is present on the Auto Scaling group.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see [DescribeAccountLimits](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html) in the *Amazon EC2 Auto Scaling API Reference*.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @public
 */
export class RollbackInstanceRefreshCommand extends command<RollbackInstanceRefreshCommandInput, RollbackInstanceRefreshCommandOutput>(
  _ep0,
  _mw0,
  "RollbackInstanceRefresh",
  RollbackInstanceRefresh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackInstanceRefreshType;
      output: RollbackInstanceRefreshAnswer;
    };
    sdk: {
      input: RollbackInstanceRefreshCommandInput;
      output: RollbackInstanceRefreshCommandOutput;
    };
  };
}
