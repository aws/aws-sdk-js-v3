// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTelemetryRuleInput, CreateTelemetryRuleOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { CreateTelemetryRule } from "../schemas/schemas_1_Telemetry";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTelemetryRuleCommand}.
 */
export interface CreateTelemetryRuleCommandInput extends CreateTelemetryRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateTelemetryRuleCommand}.
 */
export interface CreateTelemetryRuleCommandOutput extends CreateTelemetryRuleOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a telemetry rule that defines how telemetry should be configured for Amazon Web Services resources in your account. The rule specifies which resources should have telemetry enabled and how that telemetry data should be collected based on resource type, telemetry type, and selection criteria.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateTelemetryRuleCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateTelemetryRuleCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateTelemetryRuleInput
 *   RuleName: "STRING_VALUE", // required
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
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTelemetryRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateTelemetryRuleOutput
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTelemetryRuleCommandInput - {@link CreateTelemetryRuleCommandInput}
 * @returns {@link CreateTelemetryRuleCommandOutput}
 * @see {@link CreateTelemetryRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTelemetryRuleCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *       The requested operation conflicts with the current state of the specified resource or with another request.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *       The requested operation would exceed the allowed quota for the specified resource type.
 *     </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *       The request throughput limit was exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class CreateTelemetryRuleCommand extends $Command
  .classBuilder<
    CreateTelemetryRuleCommandInput,
    CreateTelemetryRuleCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "CreateTelemetryRule", {})
  .n("ObservabilityAdminClient", "CreateTelemetryRuleCommand")
  .sc(CreateTelemetryRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTelemetryRuleInput;
      output: CreateTelemetryRuleOutput;
    };
    sdk: {
      input: CreateTelemetryRuleCommandInput;
      output: CreateTelemetryRuleCommandOutput;
    };
  };
}
