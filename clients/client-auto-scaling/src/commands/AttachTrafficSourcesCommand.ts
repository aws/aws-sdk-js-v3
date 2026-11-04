// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachTrafficSourcesResultType, AttachTrafficSourcesType } from "../models/models_0";
import { AttachTrafficSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandInput extends AttachTrafficSourcesType {}
/**
 * @public
 *
 * The output of {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandOutput extends AttachTrafficSourcesResultType, __MetadataBearer {}

/**
 * Attaches one or more traffic sources to the specified Auto Scaling group.
 *
 * You can use any of the following as traffic sources for an Auto Scaling group:
 *
 * - Application Load Balancer
 * - Classic Load Balancer
 * - Gateway Load Balancer
 * - Network Load Balancer
 * - VPC Lattice
 *
 * This operation is additive and does not detach existing traffic sources from the Auto Scaling group.
 *
 * After the operation completes, use the [DescribeTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html) API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the [DetachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachTrafficSources.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // AttachTrafficSourcesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSources: [ // TrafficSources // required
 *     { // TrafficSourceIdentifier
 *       Identifier: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 *   SkipZonalShiftValidation: true || false,
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachTrafficSourcesCommandInput - {@link AttachTrafficSourcesCommandInput}
 * @returns {@link AttachTrafficSourcesCommandOutput}
 * @see {@link AttachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link AttachTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InstanceRefreshInProgressFault} (client fault)
 *
 * The request failed because an active instance refresh already exists for the specified Auto Scaling group.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *
 * The service-linked role is not yet ready for use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To attach a target group to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified target group to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   TrafficSources: [
 *     {
 *       Identifier: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *     }
 *   ]
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachTrafficSourcesCommand extends command<AttachTrafficSourcesCommandInput, AttachTrafficSourcesCommandOutput>(
  _ep0,
  _mw0,
  "AttachTrafficSources",
  AttachTrafficSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachTrafficSourcesType;
      output: {};
    };
    sdk: {
      input: AttachTrafficSourcesCommandInput;
      output: AttachTrafficSourcesCommandOutput;
    };
  };
}
