// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTelemetryRulesInput, ListTelemetryRulesOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { de_ListTelemetryRulesCommand, se_ListTelemetryRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTelemetryRulesCommand}.
 */
export interface ListTelemetryRulesCommandInput extends ListTelemetryRulesInput {}
/**
 * @public
 *
 * The output of {@link ListTelemetryRulesCommand}.
 */
export interface ListTelemetryRulesCommandOutput extends ListTelemetryRulesOutput, __MetadataBearer {}

/**
 * <p>
 *       Lists all telemetry rules in your account. You can filter the results by specifying a rule name prefix.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListTelemetryRulesCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListTelemetryRulesCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListTelemetryRulesInput
 *   RuleNamePrefix: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTelemetryRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListTelemetryRulesOutput
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
 * @param ListTelemetryRulesCommandInput - {@link ListTelemetryRulesCommandInput}
 * @returns {@link ListTelemetryRulesCommandOutput}
 * @see {@link ListTelemetryRulesCommandInput} for command's `input` shape.
 * @see {@link ListTelemetryRulesCommandOutput} for command's `response` shape.
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
export class ListTelemetryRulesCommand extends $Command
  .classBuilder<
    ListTelemetryRulesCommandInput,
    ListTelemetryRulesCommandOutput,
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
  .s("ObservabilityAdmin", "ListTelemetryRules", {})
  .n("ObservabilityAdminClient", "ListTelemetryRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListTelemetryRulesCommand)
  .de(de_ListTelemetryRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTelemetryRulesInput;
      output: ListTelemetryRulesOutput;
    };
    sdk: {
      input: ListTelemetryRulesCommandInput;
      output: ListTelemetryRulesCommandOutput;
    };
  };
}
