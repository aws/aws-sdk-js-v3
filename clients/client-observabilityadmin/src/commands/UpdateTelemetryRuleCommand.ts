// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTelemetryRuleInput, UpdateTelemetryRuleOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { UpdateTelemetryRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTelemetryRuleCommand}.
 */
export interface UpdateTelemetryRuleCommandInput extends UpdateTelemetryRuleInput {}
/**
 * @public
 *
 * The output of {@link UpdateTelemetryRuleCommand}.
 */
export interface UpdateTelemetryRuleCommandOutput extends UpdateTelemetryRuleOutput, __MetadataBearer {}

/**
 * <p> Updates an existing telemetry rule in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, UpdateTelemetryRuleCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, UpdateTelemetryRuleCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // UpdateTelemetryRuleInput
 *   RuleIdentifier: "STRING_VALUE", // required
 *   Rule: { // TelemetryRule
 *     ResourceType: "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function",
 *     TelemetryType: "Logs" || "Metrics" || "Traces", // required
 *     DestinationConfiguration: { // TelemetryDestinationConfiguration
 *       DestinationType: "cloud-watch-logs",
 *       DestinationPattern: "STRING_VALUE",
 *       RetentionInDays: Number("int"),
 *       VPCFlowLogParameters: { // VPCFlowLogParameters
 *         LogFormat: "STRING_VALUE",
 *         TrafficType: "STRING_VALUE",
 *         MaxAggregationInterval: Number("int"),
 *       },
 *     },
 *     Scope: "STRING_VALUE",
 *     SelectionCriteria: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateTelemetryRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTelemetryRuleOutput
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTelemetryRuleCommandInput - {@link UpdateTelemetryRuleCommandInput}
 * @returns {@link UpdateTelemetryRuleCommandOutput}
 * @see {@link UpdateTelemetryRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateTelemetryRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
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
export class UpdateTelemetryRuleCommand extends $Command
  .classBuilder<
    UpdateTelemetryRuleCommandInput,
    UpdateTelemetryRuleCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "UpdateTelemetryRule", {})
  .n("ObservabilityAdminClient", "UpdateTelemetryRuleCommand")
  .sc(UpdateTelemetryRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTelemetryRuleInput;
      output: UpdateTelemetryRuleOutput;
    };
    sdk: {
      input: UpdateTelemetryRuleCommandInput;
      output: UpdateTelemetryRuleCommandOutput;
    };
  };
}
