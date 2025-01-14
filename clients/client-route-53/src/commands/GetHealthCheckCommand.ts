// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHealthCheckRequest, GetHealthCheckResponse } from "../models/models_0";
import { de_GetHealthCheckCommand, se_GetHealthCheckCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHealthCheckCommand}.
 */
export interface GetHealthCheckCommandInput extends GetHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckCommand}.
 */
export interface GetHealthCheckCommandOutput extends GetHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified health check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetHealthCheckRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new GetHealthCheckCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckResponse
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
 * //         Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "ap-southeast-7", // required
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
 * @param GetHealthCheckCommandInput - {@link GetHealthCheckCommandInput}
 * @returns {@link GetHealthCheckCommandOutput}
 * @see {@link GetHealthCheckCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link IncompatibleVersion} (client fault)
 *  <p>The resource you're trying to access is unsupported on this Amazon Route 53
 * 			endpoint.</p>
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
 * @public
 */
export class GetHealthCheckCommand extends $Command
  .classBuilder<
    GetHealthCheckCommandInput,
    GetHealthCheckCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "GetHealthCheck", {})
  .n("Route53Client", "GetHealthCheckCommand")
  .f(void 0, void 0)
  .ser(se_GetHealthCheckCommand)
  .de(de_GetHealthCheckCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHealthCheckRequest;
      output: GetHealthCheckResponse;
    };
    sdk: {
      input: GetHealthCheckCommandInput;
      output: GetHealthCheckCommandOutput;
    };
  };
}
