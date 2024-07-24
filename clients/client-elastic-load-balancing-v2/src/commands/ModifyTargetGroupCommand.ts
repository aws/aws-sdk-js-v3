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
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/models_0";
import { de_ModifyTargetGroupCommand, se_ModifyTargetGroupCommand } from "../protocols/Aws_query";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "ModifyTargetGroup", {})
  .n("ElasticLoadBalancingV2Client", "ModifyTargetGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTargetGroupCommand)
  .de(de_ModifyTargetGroupCommand)
  .build() {}
