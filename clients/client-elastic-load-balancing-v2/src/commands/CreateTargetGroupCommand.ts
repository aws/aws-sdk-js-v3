// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTargetGroupInput, CreateTargetGroupOutput } from "../models/models_0";
import { de_CreateTargetGroupCommand, se_CreateTargetGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTargetGroupCommand}.
 */
export interface CreateTargetGroupCommandInput extends CreateTargetGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateTargetGroupCommand}.
 */
export interface CreateTargetGroupCommandOutput extends CreateTargetGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a target group.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target
 *             groups for your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups
 *             for your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your
 *             Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple target groups with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateTargetGroupInput
 *   Name: "STRING_VALUE", // required
 *   Protocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 *   ProtocolVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   VpcId: "STRING_VALUE",
 *   HealthCheckProtocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 *   HealthCheckPort: "STRING_VALUE",
 *   HealthCheckEnabled: true || false,
 *   HealthCheckPath: "STRING_VALUE",
 *   HealthCheckIntervalSeconds: Number("int"),
 *   HealthCheckTimeoutSeconds: Number("int"),
 *   HealthyThresholdCount: Number("int"),
 *   UnhealthyThresholdCount: Number("int"),
 *   Matcher: { // Matcher
 *     HttpCode: "STRING_VALUE",
 *     GrpcCode: "STRING_VALUE",
 *   },
 *   TargetType: "instance" || "ip" || "lambda" || "alb",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   IpAddressType: "ipv4" || "ipv6",
 * };
 * const command = new CreateTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateTargetGroupOutput
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
 * @param CreateTargetGroupCommandInput - {@link CreateTargetGroupCommandInput}
 * @returns {@link CreateTargetGroupCommandOutput}
 * @see {@link CreateTargetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link DuplicateTargetGroupNameException} (client fault)
 *  <p>A target group with the specified name already exists.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags for this resource.</p>
 *
 * @throws {@link TooManyTargetGroupsException} (client fault)
 *  <p>You've reached the limit on the number of target groups for your Amazon Web Services
 *       account.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example To create a target group
 * ```javascript
 * // This example creates a target group that you can use to route traffic to targets using HTTP on port 80. This target group uses the default health check configuration.
 * const input = {
 *   "Name": "my-targets",
 *   "Port": 80,
 *   "Protocol": "HTTP",
 *   "VpcId": "vpc-3ac0fb5f"
 * };
 * const command = new CreateTargetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetGroups": [
 *     {
 *       "HealthCheckIntervalSeconds": 30,
 *       "HealthCheckPath": "/",
 *       "HealthCheckPort": "traffic-port",
 *       "HealthCheckProtocol": "HTTP",
 *       "HealthCheckTimeoutSeconds": 5,
 *       "HealthyThresholdCount": 5,
 *       "Matcher": {
 *         "HttpCode": "200"
 *       },
 *       "Port": 80,
 *       "Protocol": "HTTP",
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "TargetGroupName": "my-targets",
 *       "UnhealthyThresholdCount": 2,
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-target-group-1
 * ```
 *
 */
export class CreateTargetGroupCommand extends $Command
  .classBuilder<
    CreateTargetGroupCommandInput,
    CreateTargetGroupCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "CreateTargetGroup", {})
  .n("ElasticLoadBalancingV2Client", "CreateTargetGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateTargetGroupCommand)
  .de(de_CreateTargetGroupCommand)
  .build() {}
