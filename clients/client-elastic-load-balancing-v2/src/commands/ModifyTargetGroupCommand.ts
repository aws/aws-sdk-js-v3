// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/models_0";
import { ModifyTargetGroup } from "../schemas/schemas_1_Target";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTargetGroupCommand}.
 */
export interface ModifyTargetGroupCommandInput extends ModifyTargetGroupInput {}
/**
 * @public
 *
 * The output of {@link ModifyTargetGroupCommand}.
 */
export interface ModifyTargetGroupCommandOutput extends ModifyTargetGroupOutput, __MetadataBearer {}

/**
 * <p>Modifies the health checks used when evaluating the health state of the targets in the
 *       specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyTargetGroupInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   HealthCheckProtocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 *   HealthCheckPort: "STRING_VALUE",
 *   HealthCheckPath: "STRING_VALUE",
 *   HealthCheckEnabled: true || false,
 *   HealthCheckIntervalSeconds: Number("int"),
 *   HealthCheckTimeoutSeconds: Number("int"),
 *   HealthyThresholdCount: Number("int"),
 *   UnhealthyThresholdCount: Number("int"),
 *   Matcher: { // Matcher
 *     HttpCode: "STRING_VALUE",
 *     GrpcCode: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTargetGroupOutput
 * //   TargetGroups: [ // TargetGroups
 * //     { // TargetGroup
 * //       TargetGroupArn: "STRING_VALUE",
 * //       TargetGroupName: "STRING_VALUE",
 * //       Protocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 * //       Port: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       HealthCheckProtocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 * //       HealthCheckPort: "STRING_VALUE",
 * //       HealthCheckEnabled: true || false,
 * //       HealthCheckIntervalSeconds: Number("int"),
 * //       HealthCheckTimeoutSeconds: Number("int"),
 * //       HealthyThresholdCount: Number("int"),
 * //       UnhealthyThresholdCount: Number("int"),
 * //       HealthCheckPath: "STRING_VALUE",
 * //       Matcher: { // Matcher
 * //         HttpCode: "STRING_VALUE",
 * //         GrpcCode: "STRING_VALUE",
 * //       },
 * //       LoadBalancerArns: [ // LoadBalancerArns
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetType: "instance" || "ip" || "lambda" || "alb",
 * //       ProtocolVersion: "STRING_VALUE",
 * //       IpAddressType: "ipv4" || "ipv6",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyTargetGroupCommandInput - {@link ModifyTargetGroupCommandInput}
 * @returns {@link ModifyTargetGroupCommandOutput}
 * @see {@link ModifyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To modify the health check configuration for a target group
 * ```javascript
 * // This example changes the configuration of the health checks used to evaluate the health of the targets for the specified target group.
 * const input = {
 *   HealthCheckPort: "443",
 *   HealthCheckProtocol: "HTTPS",
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f"
 * };
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetGroups: [
 *     {
 *       HealthCheckIntervalSeconds: 30,
 *       HealthCheckPort: "443",
 *       HealthCheckProtocol: "HTTPS",
 *       HealthCheckTimeoutSeconds: 5,
 *       HealthyThresholdCount: 5,
 *       LoadBalancerArns: [
 *         "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 *       ],
 *       Matcher: {
 *         HttpCode: "200"
 *       },
 *       Port: 443,
 *       Protocol: "HTTPS",
 *       TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f",
 *       TargetGroupName: "my-https-targets",
 *       UnhealthyThresholdCount: 2,
 *       VpcId: "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyTargetGroupCommand extends $Command
  .classBuilder<
    ModifyTargetGroupCommandInput,
    ModifyTargetGroupCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "ModifyTargetGroup", {})
  .n("ElasticLoadBalancingV2Client", "ModifyTargetGroupCommand")
  .sc(ModifyTargetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTargetGroupInput;
      output: ModifyTargetGroupOutput;
    };
    sdk: {
      input: ModifyTargetGroupCommandInput;
      output: ModifyTargetGroupCommandOutput;
    };
  };
}
