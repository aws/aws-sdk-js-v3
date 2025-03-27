// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTelemetryEvaluationStatusOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import {
  de_GetTelemetryEvaluationStatusCommand,
  se_GetTelemetryEvaluationStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryEvaluationStatusCommand}.
 */
export interface GetTelemetryEvaluationStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link GetTelemetryEvaluationStatusCommand}.
 */
export interface GetTelemetryEvaluationStatusCommandOutput
  extends GetTelemetryEvaluationStatusOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Returns the current onboarding status of the telemetry config feature, including the status of the feature and reason the feature failed to start or stop.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetTelemetryEvaluationStatusCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetTelemetryEvaluationStatusCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new GetTelemetryEvaluationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryEvaluationStatusOutput
 * //   Status: "NOT_STARTED" || "STARTING" || "FAILED_START" || "RUNNING" || "STOPPING" || "FAILED_STOP" || "STOPPED",
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTelemetryEvaluationStatusCommandInput - {@link GetTelemetryEvaluationStatusCommandInput}
 * @returns {@link GetTelemetryEvaluationStatusCommandOutput}
 * @see {@link GetTelemetryEvaluationStatusCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryEvaluationStatusCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for AWS resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class GetTelemetryEvaluationStatusCommand extends $Command
  .classBuilder<
    GetTelemetryEvaluationStatusCommandInput,
    GetTelemetryEvaluationStatusCommandOutput,
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
  .s("ObservabilityAdmin", "GetTelemetryEvaluationStatus", {})
  .n("ObservabilityAdminClient", "GetTelemetryEvaluationStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetTelemetryEvaluationStatusCommand)
  .de(de_GetTelemetryEvaluationStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTelemetryEvaluationStatusOutput;
    };
    sdk: {
      input: GetTelemetryEvaluationStatusCommandInput;
      output: GetTelemetryEvaluationStatusCommandOutput;
    };
  };
}
