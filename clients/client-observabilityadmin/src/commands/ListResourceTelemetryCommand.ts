// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourceTelemetryInput, ListResourceTelemetryOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { ListResourceTelemetry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceTelemetryCommand}.
 */
export interface ListResourceTelemetryCommandInput extends ListResourceTelemetryInput {}
/**
 * @public
 *
 * The output of {@link ListResourceTelemetryCommand}.
 */
export interface ListResourceTelemetryCommandOutput extends ListResourceTelemetryOutput, __MetadataBearer {}

/**
 * <p> Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry configurations</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListResourceTelemetryCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListResourceTelemetryCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListResourceTelemetryInput
 *   ResourceIdentifierPrefix: "STRING_VALUE",
 *   ResourceTypes: [ // ResourceTypes
 *     "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function" || "AWS::CloudTrail" || "AWS::EKS::Cluster" || "AWS::WAFv2::WebACL" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::BedrockAgentCore::Runtime" || "AWS::BedrockAgentCore::Browser" || "AWS::BedrockAgentCore::CodeInterpreter",
 *   ],
 *   TelemetryConfigurationState: { // TelemetryConfigurationState
 *     "<keys>": "Enabled" || "Disabled" || "NotApplicable",
 *   },
 *   ResourceTags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceTelemetryCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceTelemetryOutput
 * //   TelemetryConfigurations: [ // TelemetryConfigurations
 * //     { // TelemetryConfiguration
 * //       AccountIdentifier: "STRING_VALUE",
 * //       TelemetryConfigurationState: { // TelemetryConfigurationState
 * //         "<keys>": "Enabled" || "Disabled" || "NotApplicable",
 * //       },
 * //       ResourceType: "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function" || "AWS::CloudTrail" || "AWS::EKS::Cluster" || "AWS::WAFv2::WebACL" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::BedrockAgentCore::Runtime" || "AWS::BedrockAgentCore::Browser" || "AWS::BedrockAgentCore::CodeInterpreter",
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       ResourceTags: { // TagMapOutput
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LastUpdateTimeStamp: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceTelemetryCommandInput - {@link ListResourceTelemetryCommandInput}
 * @returns {@link ListResourceTelemetryCommandOutput}
 * @see {@link ListResourceTelemetryCommandInput} for command's `input` shape.
 * @see {@link ListResourceTelemetryCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
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
export class ListResourceTelemetryCommand extends $Command
  .classBuilder<
    ListResourceTelemetryCommandInput,
    ListResourceTelemetryCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "ListResourceTelemetry", {})
  .n("ObservabilityAdminClient", "ListResourceTelemetryCommand")
  .sc(ListResourceTelemetry$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceTelemetryInput;
      output: ListResourceTelemetryOutput;
    };
    sdk: {
      input: ListResourceTelemetryCommandInput;
      output: ListResourceTelemetryCommandOutput;
    };
  };
}
