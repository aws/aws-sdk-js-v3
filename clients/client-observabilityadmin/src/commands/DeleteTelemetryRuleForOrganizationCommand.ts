// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTelemetryRuleForOrganizationInput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import {
  de_DeleteTelemetryRuleForOrganizationCommand,
  se_DeleteTelemetryRuleForOrganizationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTelemetryRuleForOrganizationCommand}.
 */
export interface DeleteTelemetryRuleForOrganizationCommandInput extends DeleteTelemetryRuleForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link DeleteTelemetryRuleForOrganizationCommand}.
 */
export interface DeleteTelemetryRuleForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       Deletes an organization-wide telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, DeleteTelemetryRuleForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, DeleteTelemetryRuleForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // DeleteTelemetryRuleForOrganizationInput
 *   RuleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTelemetryRuleForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTelemetryRuleForOrganizationCommandInput - {@link DeleteTelemetryRuleForOrganizationCommandInput}
 * @returns {@link DeleteTelemetryRuleForOrganizationCommandOutput}
 * @see {@link DeleteTelemetryRuleForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteTelemetryRuleForOrganizationCommandOutput} for command's `response` shape.
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
export class DeleteTelemetryRuleForOrganizationCommand extends $Command
  .classBuilder<
    DeleteTelemetryRuleForOrganizationCommandInput,
    DeleteTelemetryRuleForOrganizationCommandOutput,
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
  .s("ObservabilityAdmin", "DeleteTelemetryRuleForOrganization", {})
  .n("ObservabilityAdminClient", "DeleteTelemetryRuleForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTelemetryRuleForOrganizationCommand)
  .de(de_DeleteTelemetryRuleForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTelemetryRuleForOrganizationInput;
      output: {};
    };
    sdk: {
      input: DeleteTelemetryRuleForOrganizationCommandInput;
      output: DeleteTelemetryRuleForOrganizationCommandOutput;
    };
  };
}
