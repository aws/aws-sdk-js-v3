// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateHealthCheckRequest, CreateHealthCheckResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateHealthCheck } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHealthCheckCommand}.
 */
export interface CreateHealthCheckCommandInput extends CreateHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link CreateHealthCheckCommand}.
 */
export interface CreateHealthCheckCommandOutput extends CreateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Creates a new health check.</p>
 *          <p>For information about adding health checks to resource record sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a> in <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p>
 *          <p>
 *             <b>ELB Load Balancers</b>
 *          </p>
 *          <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load
 * 			balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you
 * 			register an EC2 instance with a load balancer, you configure settings for an ELB health
 * 			check, which performs a similar function to a Route 53 health check.</p>
 *          <p>
 *             <b>Private Hosted Zones</b>
 *          </p>
 *          <p>You can associate health checks with failover resource record sets in a private hosted
 * 			zone. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>Route 53 health checkers are outside the VPC. To check the health of an
 * 					endpoint within a VPC by IP address, you must assign a public IP address to the
 * 					instance in the VPC.</p>
 *             </li>
 *             <li>
 *                <p>You can configure a health checker to check the health of an external resource
 * 					that the instance relies on, such as a database server.</p>
 *             </li>
 *             <li>
 *                <p>You can create a CloudWatch metric, associate an alarm with the metric, and
 * 					then create a health check that is based on the state of the alarm. For example,
 * 					you might create a CloudWatch metric that checks the status of the Amazon EC2
 * 						<code>StatusCheckFailed</code> metric, add an alarm to the metric, and then
 * 					create a health check that is based on the state of the alarm. For information
 * 					about creating CloudWatch metrics and alarms by using the CloudWatch console,
 * 					see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon
 * 						CloudWatch User Guide</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateHealthCheckRequest
 *   CallerReference: "STRING_VALUE", // required
 *   HealthCheckConfig: { // HealthCheckConfig
 *     IPAddress: "STRING_VALUE",
 *     Port: Number("int"),
 *     Type: "HTTP" || "HTTPS" || "HTTP_STR_MATCH" || "HTTPS_STR_MATCH" || "TCP" || "CALCULATED" || "CLOUDWATCH_METRIC" || "RECOVERY_CONTROL", // required
 *     ResourcePath: "STRING_VALUE",
 *     FullyQualifiedDomainName: "STRING_VALUE",
 *     SearchString: "STRING_VALUE",
 *     RequestInterval: Number("int"),
 *     FailureThreshold: Number("int"),
 *     MeasureLatency: true || false,
 *     Inverted: true || false,
 *     Disabled: true || false,
 *     HealthThreshold: Number("int"),
 *     ChildHealthChecks: [ // ChildHealthCheckList
 *       "STRING_VALUE",
 *     ],
 *     EnableSNI: true || false,
 *     Regions: [ // HealthCheckRegionList
 *       "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 *     ],
 *     AlarmIdentifier: { // AlarmIdentifier
 *       Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1", // required
 *       Name: "STRING_VALUE", // required
 *     },
 *     InsufficientDataHealthStatus: "Healthy" || "Unhealthy" || "LastKnownStatus",
 *     RoutingControlArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateHealthCheckCommand(input);
 * const response = await client.send(command);
 * // { // CreateHealthCheckResponse
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
 * //         Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1", // required
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
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHealthCheckCommandInput - {@link CreateHealthCheckCommandInput}
 * @returns {@link CreateHealthCheckCommandOutput}
 * @see {@link CreateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link CreateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HealthCheckAlreadyExists} (client fault)
 *  <p> The health check you're attempting to create already exists. Amazon Route 53 returns
 * 			this error when you submit a request that has the following values:</p>
 *          <ul>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as an existing health check,
 * 					and one or more values that differ from the existing health check that has the
 * 					same caller reference.</p>
 *             </li>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as a health check that you
 * 					created and later deleted, regardless of the other settings in the
 * 					request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link TooManyHealthChecks} (client fault)
 *  <p>This health check can't be created because the current account has reached the limit
 * 			on the number of active health checks.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *          <p>You have reached the maximum number of active health checks for an Amazon Web Services account. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateHealthCheckCommand extends $Command
  .classBuilder<
    CreateHealthCheckCommandInput,
    CreateHealthCheckCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "CreateHealthCheck", {})
  .n("Route53Client", "CreateHealthCheckCommand")
  .sc(CreateHealthCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHealthCheckRequest;
      output: CreateHealthCheckResponse;
    };
    sdk: {
      input: CreateHealthCheckCommandInput;
      output: CreateHealthCheckCommandOutput;
    };
  };
}
