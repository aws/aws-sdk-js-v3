// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTelemetryRuleForOrganizationInput, UpdateTelemetryRuleForOrganizationOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { UpdateTelemetryRuleForOrganization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTelemetryRuleForOrganizationCommand}.
 */
export interface UpdateTelemetryRuleForOrganizationCommandInput extends UpdateTelemetryRuleForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link UpdateTelemetryRuleForOrganizationCommand}.
 */
export interface UpdateTelemetryRuleForOrganizationCommandOutput
  extends UpdateTelemetryRuleForOrganizationOutput,
    __MetadataBearer {}

/**
 * <p> Updates an existing telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, UpdateTelemetryRuleForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, UpdateTelemetryRuleForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // UpdateTelemetryRuleForOrganizationInput
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
 * const command = new UpdateTelemetryRuleForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTelemetryRuleForOrganizationOutput
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTelemetryRuleForOrganizationCommandInput - {@link UpdateTelemetryRuleForOrganizationCommandInput}
 * @returns {@link UpdateTelemetryRuleForOrganizationCommandOutput}
 * @see {@link UpdateTelemetryRuleForOrganizationCommandInput} for command's `input` shape.
 * @see {@link UpdateTelemetryRuleForOrganizationCommandOutput} for command's `response` shape.
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
export class UpdateTelemetryRuleForOrganizationCommand extends $Command
  .classBuilder<
    UpdateTelemetryRuleForOrganizationCommandInput,
    UpdateTelemetryRuleForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "UpdateTelemetryRuleForOrganization", {})
  .n("ObservabilityAdminClient", "UpdateTelemetryRuleForOrganizationCommand")
  .sc(UpdateTelemetryRuleForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTelemetryRuleForOrganizationInput;
      output: UpdateTelemetryRuleForOrganizationOutput;
    };
    sdk: {
      input: UpdateTelemetryRuleForOrganizationCommandInput;
      output: UpdateTelemetryRuleForOrganizationCommandOutput;
    };
  };
}
