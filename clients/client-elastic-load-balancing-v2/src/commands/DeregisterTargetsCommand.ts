// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterTargetsInput, DeregisterTargetsOutput } from "../models/models_0";
import { DeregisterTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandInput extends DeregisterTargetsInput {}
/**
 * @public
 *
 * The output of {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandOutput extends DeregisterTargetsOutput, __MetadataBearer {}

/**
 * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
 *
 * The load balancer stops sending requests to targets that are deregistering, but uses connection draining to ensure that in-flight traffic completes on the existing connections. This deregistration delay is configured by default but can be updated for each target group.
 *
 * For more information, see the following:
 *
 * - [Deregistration delay](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html#deregistration-delay) in the *Application Load Balancers User Guide*
 * - [Deregistration delay](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/edit-target-group-attributes.html#deregistration-delay) in the *Network Load Balancers User Guide*
 * - [Deregistration delay](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/edit-target-group-attributes.html#deregistration-delay) in the *Gateway Load Balancers User Guide*
 *
 * Note: If the specified target does not exist, the action returns successfully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeregisterTargetsInput
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
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterTargetsCommandInput - {@link DeregisterTargetsCommandInput}
 * @returns {@link DeregisterTargetsCommandOutput}
 * @see {@link DeregisterTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @example To deregister a target from a target group
 * ```javascript
 * // This example deregisters the specified instance from the specified target group.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   Targets: [
 *     {
 *       Id: "i-0f76fade"
 *     }
 *   ]
 * };
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterTargetsCommand extends command<DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterTargets",
  DeregisterTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTargetsInput;
      output: {};
    };
    sdk: {
      input: DeregisterTargetsCommandInput;
      output: DeregisterTargetsCommandOutput;
    };
  };
}
