// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTelemetryRulesForOrganizationInput, ListTelemetryRulesForOrganizationOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import {
  de_ListTelemetryRulesForOrganizationCommand,
  se_ListTelemetryRulesForOrganizationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTelemetryRulesForOrganizationCommand}.
 */
export interface ListTelemetryRulesForOrganizationCommandInput extends ListTelemetryRulesForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link ListTelemetryRulesForOrganizationCommand}.
 */
export interface ListTelemetryRulesForOrganizationCommandOutput
  extends ListTelemetryRulesForOrganizationOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Lists all telemetry rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListTelemetryRulesForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListTelemetryRulesForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListTelemetryRulesForOrganizationInput
 *   RuleNamePrefix: "STRING_VALUE",
 *   SourceAccountIds: [ // AccountIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   SourceOrganizationUnitIds: [ // OrganizationUnitIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTelemetryRulesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListTelemetryRulesForOrganizationOutput
 * //   TelemetryRuleSummaries: [ // TelemetryRuleSummaries
 * //     { // TelemetryRuleSummary
 * //       RuleName: "STRING_VALUE",
 * //       RuleArn: "STRING_VALUE",
 * //       CreatedTimeStamp: Number("long"),
 * //       LastUpdateTimeStamp: Number("long"),
 * //       ResourceType: "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function",
 * //       TelemetryType: "Logs" || "Metrics" || "Traces",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTelemetryRulesForOrganizationCommandInput - {@link ListTelemetryRulesForOrganizationCommandInput}
 * @returns {@link ListTelemetryRulesForOrganizationCommandOutput}
 * @see {@link ListTelemetryRulesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListTelemetryRulesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
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
export class ListTelemetryRulesForOrganizationCommand extends $Command
  .classBuilder<
    ListTelemetryRulesForOrganizationCommandInput,
    ListTelemetryRulesForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ObservabilityAdmin", "ListTelemetryRulesForOrganization", {})
  .n("ObservabilityAdminClient", "ListTelemetryRulesForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_ListTelemetryRulesForOrganizationCommand)
  .de(de_ListTelemetryRulesForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTelemetryRulesForOrganizationInput;
      output: ListTelemetryRulesForOrganizationOutput;
    };
    sdk: {
      input: ListTelemetryRulesForOrganizationCommandInput;
      output: ListTelemetryRulesForOrganizationCommandOutput;
    };
  };
}
