// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterTargetsInput, RegisterTargetsOutput } from "../models/models_0";
import { RegisterTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandInput extends RegisterTargetsInput {}
/**
 * @public
 *
 * The output of {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandOutput extends RegisterTargetsOutput, __MetadataBearer {}

/**
 * Registers the specified targets with the specified target group.
 *
 * If the target is an EC2 instance, it must be in the `running` state when you register it.
 *
 * By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.
 *
 * For more information, see the following:
 *
 * - [Register targets for your Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-register-targets.html)
 * - [Register targets for your Network Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html)
 * - [Register targets for your Gateway Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-group-register-targets.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RegisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RegisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // RegisterTargetsInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Targets: [ // TargetDescriptions // required
 *     { // TargetDescription
 *       Id: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       AvailabilityZone: "STRING_VALUE",
 *       QuicServerId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterTargetsCommandInput - {@link RegisterTargetsCommandInput}
 * @returns {@link RegisterTargetsCommandOutput}
 * @see {@link RegisterTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidTargetException} (client fault)
 *
 * The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *
 * The specified target group does not exist.
 *
 * @throws {@link TooManyRegistrationsForTargetIdException} (client fault)
 *
 * You've reached the limit on the number of times a target can be registered with a load balancer.
 *
 * @throws {@link TooManyTargetsException} (client fault)
 *
 * You've reached the limit on the number of targets.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @example To register targets with a target group
 * ```javascript
 * // This example registers the specified instances with the specified target group.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   Targets: [
 *     {
 *       Id: "i-80c8dd94"
 *     },
 *     {
 *       Id: "i-ceddcd4d"
 *     }
 *   ]
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To register targets with a target group using port overrides
 * ```javascript
 * // This example registers the specified instance with the specified target group using multiple ports. This enables you to register ECS containers on the same instance as targets in the target group.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-new-targets/3bb63f11dfb0faf9",
 *   Targets: [
 *     {
 *       Id: "i-80c8dd94",
 *       Port: 80
 *     },
 *     {
 *       Id: "i-80c8dd94",
 *       Port: 766
 *     }
 *   ]
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterTargetsCommand extends command<RegisterTargetsCommandInput, RegisterTargetsCommandOutput>(
  _ep0,
  _mw0,
  "RegisterTargets",
  RegisterTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTargetsInput;
      output: {};
    };
    sdk: {
      input: RegisterTargetsCommandInput;
      output: RegisterTargetsCommandOutput;
    };
  };
}
