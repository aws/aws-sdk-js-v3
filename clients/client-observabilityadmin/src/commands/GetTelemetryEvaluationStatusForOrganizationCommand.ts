// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTelemetryEvaluationStatusForOrganizationOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import {
  de_GetTelemetryEvaluationStatusForOrganizationCommand,
  se_GetTelemetryEvaluationStatusForOrganizationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryEvaluationStatusForOrganizationCommand}.
 */
export interface GetTelemetryEvaluationStatusForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetTelemetryEvaluationStatusForOrganizationCommand}.
 */
export interface GetTelemetryEvaluationStatusForOrganizationCommandOutput
  extends GetTelemetryEvaluationStatusForOrganizationOutput,
    __MetadataBearer {}

/**
 * <p>
 *       This returns the onboarding status of the telemetry configuration feature for the organization. It can only be called by a Management Account of an Amazon Web Services Organization or an assigned Delegated Admin Account of Amazon CloudWatch telemetry config.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetTelemetryEvaluationStatusForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetTelemetryEvaluationStatusForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new GetTelemetryEvaluationStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryEvaluationStatusForOrganizationOutput
 * //   Status: "NOT_STARTED" || "STARTING" || "FAILED_START" || "RUNNING" || "STOPPING" || "FAILED_STOP" || "STOPPED",
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTelemetryEvaluationStatusForOrganizationCommandInput - {@link GetTelemetryEvaluationStatusForOrganizationCommandInput}
 * @returns {@link GetTelemetryEvaluationStatusForOrganizationCommandOutput}
 * @see {@link GetTelemetryEvaluationStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryEvaluationStatusForOrganizationCommandOutput} for command's `response` shape.
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
export class GetTelemetryEvaluationStatusForOrganizationCommand extends $Command
  .classBuilder<
    GetTelemetryEvaluationStatusForOrganizationCommandInput,
    GetTelemetryEvaluationStatusForOrganizationCommandOutput,
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
  .s("ObservabilityAdmin", "GetTelemetryEvaluationStatusForOrganization", {})
  .n("ObservabilityAdminClient", "GetTelemetryEvaluationStatusForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_GetTelemetryEvaluationStatusForOrganizationCommand)
  .de(de_GetTelemetryEvaluationStatusForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTelemetryEvaluationStatusForOrganizationOutput;
    };
    sdk: {
      input: GetTelemetryEvaluationStatusForOrganizationCommandInput;
      output: GetTelemetryEvaluationStatusForOrganizationCommandOutput;
    };
  };
}
