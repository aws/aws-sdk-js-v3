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
import { DescribeTargetHealthInput, DescribeTargetHealthOutput } from "../models/models_0";
import { DescribeTargetHealth } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandInput extends DescribeTargetHealthInput {}
/**
 * @public
 *
 * The output of {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandOutput extends DescribeTargetHealthOutput, __MetadataBearer {}

/**
 * <p>Describes the health of the specified targets or all of your targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTargetHealthInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Targets: [ // TargetDescriptions
 *     { // TargetDescription
 *       Id: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       AvailabilityZone: "STRING_VALUE",
 *     },
 *   ],
 *   Include: [ // ListOfDescribeTargetHealthIncludeOptions
 *     "AnomalyDetection" || "All",
 *   ],
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTargetHealthOutput
 * //   TargetHealthDescriptions: [ // TargetHealthDescriptions
 * //     { // TargetHealthDescription
 * //       Target: { // TargetDescription
 * //         Id: "STRING_VALUE", // required
 * //         Port: Number("int"),
 * //         AvailabilityZone: "STRING_VALUE",
 * //       },
 * //       HealthCheckPort: "STRING_VALUE",
 * //       TargetHealth: { // TargetHealth
 * //         State: "initial" || "healthy" || "unhealthy" || "unhealthy.draining" || "unused" || "draining" || "unavailable",
 * //         Reason: "Elb.RegistrationInProgress" || "Elb.InitialHealthChecking" || "Target.ResponseCodeMismatch" || "Target.Timeout" || "Target.FailedHealthChecks" || "Target.NotRegistered" || "Target.NotInUse" || "Target.DeregistrationInProgress" || "Target.InvalidState" || "Target.IpUnusable" || "Target.HealthCheckDisabled" || "Elb.InternalError",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       AnomalyDetection: { // AnomalyDetection
 * //         Result: "anomalous" || "normal",
 * //         MitigationInEffect: "yes" || "no",
 * //       },
 * //       AdministrativeOverride: { // AdministrativeOverride
 * //         State: "unknown" || "no_override" || "zonal_shift_active" || "zonal_shift_delegated_to_dns",
 * //         Reason: "AdministrativeOverride.Unknown" || "AdministrativeOverride.NoOverride" || "AdministrativeOverride.ZonalShiftActive" || "AdministrativeOverride.ZonalShiftDelegatedToDns",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTargetHealthCommandInput - {@link DescribeTargetHealthCommandInput}
 * @returns {@link DescribeTargetHealthCommandOutput}
 * @see {@link DescribeTargetHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link HealthUnavailableException} (server fault)
 *  <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To describe the health of the targets for a target group
 * ```javascript
 * // This example describes the health of the targets for the specified target group. One target is healthy but the other is not specified in an action, so it can't receive traffic from the load balancer.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetHealthDescriptions: [
 *     {
 *       Target: {
 *         Id: "i-0f76fade",
 *         Port: 80
 *       },
 *       TargetHealth: {
 *         Description: "Given target group is not configured to receive traffic from ELB",
 *         Reason: "Target.NotInUse",
 *         State: "unused"
 *       }
 *     },
 *     {
 *       HealthCheckPort: "80",
 *       Target: {
 *         Id: "i-0f76fade",
 *         Port: 80
 *       },
 *       TargetHealth: {
 *         State: "healthy"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe the health of a target
 * ```javascript
 * // This example describes the health of the specified target. This target is healthy.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   Targets: [
 *     {
 *       Id: "i-0f76fade",
 *       Port: 80
 *     }
 *   ]
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetHealthDescriptions: [
 *     {
 *       HealthCheckPort: "80",
 *       Target: {
 *         Id: "i-0f76fade",
 *         Port: 80
 *       },
 *       TargetHealth: {
 *         State: "healthy"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTargetHealthCommand extends $Command
  .classBuilder<
    DescribeTargetHealthCommandInput,
    DescribeTargetHealthCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DescribeTargetHealth", {})
  .n("ElasticLoadBalancingV2Client", "DescribeTargetHealthCommand")
  .sc(DescribeTargetHealth)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTargetHealthInput;
      output: DescribeTargetHealthOutput;
    };
    sdk: {
      input: DescribeTargetHealthCommandInput;
      output: DescribeTargetHealthCommandOutput;
    };
  };
}
