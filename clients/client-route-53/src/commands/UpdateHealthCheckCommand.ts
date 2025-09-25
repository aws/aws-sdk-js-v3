// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHealthCheckRequest, UpdateHealthCheckResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHealthCheck } from "../schemas/schemas_3_Health";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHealthCheckCommand}.
 */
export interface UpdateHealthCheckCommandInput extends UpdateHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHealthCheckCommand}.
 */
export interface UpdateHealthCheckCommandOutput extends UpdateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Updates an existing health check. Note that some values can't be updated. </p>
 *          <p>For more information about updating health checks, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating,
 * 				Updating, and Deleting Health Checks</a> in the <i>Amazon Route 53
 * 				Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateHealthCheckRequest
 *   HealthCheckId: "STRING_VALUE", // required
 *   HealthCheckVersion: Number("long"),
 *   IPAddress: "STRING_VALUE",
 *   Port: Number("int"),
 *   ResourcePath: "STRING_VALUE",
 *   FullyQualifiedDomainName: "STRING_VALUE",
 *   SearchString: "STRING_VALUE",
 *   FailureThreshold: Number("int"),
 *   Inverted: true || false,
 *   Disabled: true || false,
 *   HealthThreshold: Number("int"),
 *   ChildHealthChecks: [ // ChildHealthCheckList
 *     "STRING_VALUE",
 *   ],
 *   EnableSNI: true || false,
 *   Regions: [ // HealthCheckRegionList
 *     "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 *   ],
 *   AlarmIdentifier: { // AlarmIdentifier
 *     Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6", // required
 *     Name: "STRING_VALUE", // required
 *   },
 *   InsufficientDataHealthStatus: "Healthy" || "Unhealthy" || "LastKnownStatus",
 *   ResetElements: [ // ResettableElementNameList
 *     "FullyQualifiedDomainName" || "Regions" || "ResourcePath" || "ChildHealthChecks",
 *   ],
 * };
 * const command = new UpdateHealthCheckCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHealthCheckResponse
 * //   HealthCheck: { // HealthCheck
 * //     Id: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     LinkedService: { // LinkedService
 * //       ServicePrincipal: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //     HealthCheckConfig: { // HealthCheckConfig
 * //       IPAddress: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       Type: "HTTP" || "HTTPS" || "HTTP_STR_MATCH" || "HTTPS_STR_MATCH" || "TCP" || "CALCULATED" || "CLOUDWATCH_METRIC" || "RECOVERY_CONTROL", // required
 * //       ResourcePath: "STRING_VALUE",
 * //       FullyQualifiedDomainName: "STRING_VALUE",
 * //       SearchString: "STRING_VALUE",
 * //       RequestInterval: Number("int"),
 * //       FailureThreshold: Number("int"),
 * //       MeasureLatency: true || false,
 * //       Inverted: true || false,
 * //       Disabled: true || false,
 * //       HealthThreshold: Number("int"),
 * //       ChildHealthChecks: [ // ChildHealthCheckList
 * //         "STRING_VALUE",
 * //       ],
 * //       EnableSNI: true || false,
 * //       Regions: [ // HealthCheckRegionList
 * //         "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 * //       ],
 * //       AlarmIdentifier: { // AlarmIdentifier
 * //         Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       InsufficientDataHealthStatus: "Healthy" || "Unhealthy" || "LastKnownStatus",
 * //       RoutingControlArn: "STRING_VALUE",
 * //     },
 * //     HealthCheckVersion: Number("long"), // required
 * //     CloudWatchAlarmConfiguration: { // CloudWatchAlarmConfiguration
 * //       EvaluationPeriods: Number("int"), // required
 * //       Threshold: Number("double"), // required
 * //       ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold", // required
 * //       Period: Number("int"), // required
 * //       MetricName: "STRING_VALUE", // required
 * //       Namespace: "STRING_VALUE", // required
 * //       Statistic: "Average" || "Sum" || "SampleCount" || "Maximum" || "Minimum", // required
 * //       Dimensions: [ // DimensionList
 * //         { // Dimension
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateHealthCheckCommandInput - {@link UpdateHealthCheckCommandInput}
 * @returns {@link UpdateHealthCheckCommandOutput}
 * @see {@link UpdateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link UpdateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HealthCheckVersionMismatch} (client fault)
 *  <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of
 * 				<code>HealthCheckVersion</code> in the health check.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class UpdateHealthCheckCommand extends $Command
  .classBuilder<
    UpdateHealthCheckCommandInput,
    UpdateHealthCheckCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "UpdateHealthCheck", {})
  .n("Route53Client", "UpdateHealthCheckCommand")
  .sc(UpdateHealthCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHealthCheckRequest;
      output: UpdateHealthCheckResponse;
    };
    sdk: {
      input: UpdateHealthCheckCommandInput;
      output: UpdateHealthCheckCommandOutput;
    };
  };
}
