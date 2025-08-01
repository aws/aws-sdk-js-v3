// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTelemetryRuleInput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { de_DeleteTelemetryRuleCommand, se_DeleteTelemetryRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTelemetryRuleCommand}.
 */
export interface DeleteTelemetryRuleCommandInput extends DeleteTelemetryRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteTelemetryRuleCommand}.
 */
export interface DeleteTelemetryRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, DeleteTelemetryRuleCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, DeleteTelemetryRuleCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * const client = new ObservabilityAdminClient(config);
 * const input = { // DeleteTelemetryRuleInput
 *   RuleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTelemetryRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTelemetryRuleCommandInput - {@link DeleteTelemetryRuleCommandInput}
 * @returns {@link DeleteTelemetryRuleCommandOutput}
 * @see {@link DeleteTelemetryRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTelemetryRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The specified resource (such as a telemetry rule) could not be found.
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
export class DeleteTelemetryRuleCommand extends $Command
  .classBuilder<
    DeleteTelemetryRuleCommandInput,
    DeleteTelemetryRuleCommandOutput,
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
  .s("ObservabilityAdmin", "DeleteTelemetryRule", {})
  .n("ObservabilityAdminClient", "DeleteTelemetryRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTelemetryRuleCommand)
  .de(de_DeleteTelemetryRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTelemetryRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteTelemetryRuleCommandInput;
      output: DeleteTelemetryRuleCommandOutput;
    };
  };
}
