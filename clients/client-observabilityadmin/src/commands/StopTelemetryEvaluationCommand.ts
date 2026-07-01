// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { StopTelemetryEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTelemetryEvaluationCommand}.
 */
export interface StopTelemetryEvaluationCommandInput {}
/**
 * @public
 *
 * The output of {@link StopTelemetryEvaluationCommand}.
 */
export interface StopTelemetryEvaluationCommandOutput extends __MetadataBearer {}

/**
 * <p> This action begins offboarding the caller Amazon Web Services account from the telemetry config feature. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopTelemetryEvaluationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopTelemetryEvaluationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StopTelemetryEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryEvaluationCommandInput - {@link StopTelemetryEvaluationCommandInput}
 * @returns {@link StopTelemetryEvaluationCommandOutput}
 * @see {@link StopTelemetryEvaluationCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryEvaluationCommandOutput} for command's `response` shape.
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
export class StopTelemetryEvaluationCommand extends command<StopTelemetryEvaluationCommandInput, StopTelemetryEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "StopTelemetryEvaluation",
  StopTelemetryEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopTelemetryEvaluationCommandInput;
      output: StopTelemetryEvaluationCommandOutput;
    };
  };
}
