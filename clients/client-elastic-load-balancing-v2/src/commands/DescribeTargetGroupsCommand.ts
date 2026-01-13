// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTargetGroupsInput, DescribeTargetGroupsOutput } from "../models/models_0";
import { DescribeTargetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTargetGroupsCommand}.
 */
export interface DescribeTargetGroupsCommandInput extends DescribeTargetGroupsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTargetGroupsCommand}.
 */
export interface DescribeTargetGroupsCommandOutput extends DescribeTargetGroupsOutput, __MetadataBearer {}

/**
 * <p>Describes the specified target groups or all of your target groups. By default, all target
 *       groups are described. Alternatively, you can specify one of the following to filter the
 *       results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
 *       one or more target groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTargetGroupsInput
 *   LoadBalancerArn: "STRING_VALUE",
 *   TargetGroupArns: [ // TargetGroupArns
 *     "STRING_VALUE",
 *   ],
 *   Names: [ // TargetGroupNames
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTargetGroupsOutput
 * //   TargetGroups: [ // TargetGroups
 * //     { // TargetGroup
 * //       TargetGroupArn: "STRING_VALUE",
 * //       TargetGroupName: "STRING_VALUE",
 * //       Protocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE" || "QUIC" || "TCP_QUIC",
 * //       Port: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       HealthCheckProtocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE" || "QUIC" || "TCP_QUIC",
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
 * //       TargetControlPort: Number("int"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTargetGroupsCommandInput - {@link DescribeTargetGroupsCommandInput}
 * @returns {@link DescribeTargetGroupsCommandOutput}
 * @see {@link DescribeTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To describe a target group
 * ```javascript
 * // This example describes the specified target group.
 * const input = {
 *   TargetGroupArns: [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new DescribeTargetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetGroups: [
 *     {
 *       HealthCheckIntervalSeconds: 30,
 *       HealthCheckPath: "/",
 *       HealthCheckPort: "traffic-port",
 *       HealthCheckProtocol: "HTTP",
 *       HealthCheckTimeoutSeconds: 5,
 *       HealthyThresholdCount: 5,
 *       LoadBalancerArns: [
 *         "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 *       ],
 *       Matcher: {
 *         HttpCode: "200"
 *       },
 *       Port: 80,
 *       Protocol: "HTTP",
 *       TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       TargetGroupName: "my-targets",
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
export class DescribeTargetGroupsCommand extends $Command
  .classBuilder<
    DescribeTargetGroupsCommandInput,
    DescribeTargetGroupsCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DescribeTargetGroups", {})
  .n("ElasticLoadBalancingV2Client", "DescribeTargetGroupsCommand")
  .sc(DescribeTargetGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTargetGroupsInput;
      output: DescribeTargetGroupsOutput;
    };
    sdk: {
      input: DescribeTargetGroupsCommandInput;
      output: DescribeTargetGroupsCommandOutput;
    };
  };
}
