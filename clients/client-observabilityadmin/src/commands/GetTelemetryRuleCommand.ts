// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTelemetryRuleInput, GetTelemetryRuleOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { GetTelemetryRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryRuleCommand}.
 */
export interface GetTelemetryRuleCommandInput extends GetTelemetryRuleInput {}
/**
 * @public
 *
 * The output of {@link GetTelemetryRuleCommand}.
 */
export interface GetTelemetryRuleCommandOutput extends GetTelemetryRuleOutput, __MetadataBearer {}

/**
 * <p> Retrieves the details of a specific telemetry rule in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetTelemetryRuleCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetTelemetryRuleCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // GetTelemetryRuleInput
 *   RuleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTelemetryRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryRuleOutput
 * //   RuleName: "STRING_VALUE",
 * //   RuleArn: "STRING_VALUE",
 * //   CreatedTimeStamp: Number("long"),
 * //   LastUpdateTimeStamp: Number("long"),
 * //   TelemetryRule: { // TelemetryRule
 * //     ResourceType: "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function" || "AWS::CloudTrail" || "AWS::EKS::Cluster" || "AWS::WAFv2::WebACL" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::BedrockAgentCore::Runtime" || "AWS::BedrockAgentCore::Browser" || "AWS::BedrockAgentCore::CodeInterpreter",
 * //     TelemetryType: "Logs" || "Metrics" || "Traces", // required
 * //     TelemetrySourceTypes: [ // TelemetrySourceTypes
 * //       "VPC_FLOW_LOGS" || "ROUTE53_RESOLVER_QUERY_LOGS" || "EKS_AUDIT_LOGS" || "EKS_AUTHENTICATOR_LOGS" || "EKS_CONTROLLER_MANAGER_LOGS" || "EKS_SCHEDULER_LOGS" || "EKS_API_LOGS",
 * //     ],
 * //     DestinationConfiguration: { // TelemetryDestinationConfiguration
 * //       DestinationType: "cloud-watch-logs",
 * //       DestinationPattern: "STRING_VALUE",
 * //       RetentionInDays: Number("int"),
 * //       VPCFlowLogParameters: { // VPCFlowLogParameters
 * //         LogFormat: "STRING_VALUE",
 * //         TrafficType: "STRING_VALUE",
 * //         MaxAggregationInterval: Number("int"),
 * //       },
 * //       CloudtrailParameters: { // CloudtrailParameters
 * //         AdvancedEventSelectors: [ // AdvancedEventSelectors // required
 * //           { // AdvancedEventSelector
 * //             Name: "STRING_VALUE",
 * //             FieldSelectors: [ // FieldSelectors // required
 * //               { // AdvancedFieldSelector
 * //                 Field: "STRING_VALUE", // required
 * //                 Equals: [ // StringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 StartsWith: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 EndsWith: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NotEquals: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NotStartsWith: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NotEndsWith: "<StringList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ELBLoadBalancerLoggingParameters: { // ELBLoadBalancerLoggingParameters
 * //         OutputFormat: "plain" || "json",
 * //         FieldDelimiter: "STRING_VALUE",
 * //       },
 * //       WAFLoggingParameters: { // WAFLoggingParameters
 * //         RedactedFields: [ // RedactedFields
 * //           { // FieldToMatch
 * //             SingleHeader: { // SingleHeader
 * //               Name: "STRING_VALUE",
 * //             },
 * //             UriPath: "STRING_VALUE",
 * //             QueryString: "STRING_VALUE",
 * //             Method: "STRING_VALUE",
 * //           },
 * //         ],
 * //         LoggingFilter: { // LoggingFilter
 * //           Filters: [ // Filters
 * //             { // Filter
 * //               Behavior: "KEEP" || "DROP",
 * //               Requirement: "MEETS_ALL" || "MEETS_ANY",
 * //               Conditions: [ // Conditions
 * //                 { // Condition
 * //                   ActionCondition: { // ActionCondition
 * //                     Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "EXCLUDED_AS_COUNT",
 * //                   },
 * //                   LabelNameCondition: { // LabelNameCondition
 * //                     LabelName: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           DefaultBehavior: "KEEP" || "DROP",
 * //         },
 * //         LogType: "WAF_LOGS",
 * //       },
 * //       LogDeliveryParameters: { // LogDeliveryParameters
 * //         LogTypes: [ // LogTypes
 * //           "APPLICATION_LOGS" || "USAGE_LOGS",
 * //         ],
 * //       },
 * //     },
 * //     Scope: "STRING_VALUE",
 * //     SelectionCriteria: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTelemetryRuleCommandInput - {@link GetTelemetryRuleCommandInput}
 * @returns {@link GetTelemetryRuleCommandOutput}
 * @see {@link GetTelemetryRuleCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryRuleCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class GetTelemetryRuleCommand extends $Command
  .classBuilder<
    GetTelemetryRuleCommandInput,
    GetTelemetryRuleCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "GetTelemetryRule", {})
  .n("ObservabilityAdminClient", "GetTelemetryRuleCommand")
  .sc(GetTelemetryRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTelemetryRuleInput;
      output: GetTelemetryRuleOutput;
    };
    sdk: {
      input: GetTelemetryRuleCommandInput;
      output: GetTelemetryRuleCommandOutput;
    };
  };
}
