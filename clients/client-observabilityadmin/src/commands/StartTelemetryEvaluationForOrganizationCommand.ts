// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { StartTelemetryEvaluationForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTelemetryEvaluationForOrganizationCommand}.
 */
export interface StartTelemetryEvaluationForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link StartTelemetryEvaluationForOrganizationCommand}.
 */
export interface StartTelemetryEvaluationForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p> This actions begins onboarding the organization and all member accounts to the telemetry config feature. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StartTelemetryEvaluationForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StartTelemetryEvaluationForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StartTelemetryEvaluationForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartTelemetryEvaluationForOrganizationCommandInput - {@link StartTelemetryEvaluationForOrganizationCommandInput}
 * @returns {@link StartTelemetryEvaluationForOrganizationCommandOutput}
 * @see {@link StartTelemetryEvaluationForOrganizationCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryEvaluationForOrganizationCommandOutput} for command's `response` shape.
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
export class StartTelemetryEvaluationForOrganizationCommand extends $Command
  .classBuilder<
    StartTelemetryEvaluationForOrganizationCommandInput,
    StartTelemetryEvaluationForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "StartTelemetryEvaluationForOrganization", {})
  .n("ObservabilityAdminClient", "StartTelemetryEvaluationForOrganizationCommand")
  .sc(StartTelemetryEvaluationForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StartTelemetryEvaluationForOrganizationCommandInput;
      output: StartTelemetryEvaluationForOrganizationCommandOutput;
    };
  };
}
