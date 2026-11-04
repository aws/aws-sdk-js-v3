// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTelemetryEvaluationInput } from "../models/models_0";
import { StartTelemetryEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTelemetryEvaluationCommand}.
 */
export interface StartTelemetryEvaluationCommandInput extends StartTelemetryEvaluationInput {}
/**
 * @public
 *
 * The output of {@link StartTelemetryEvaluationCommand}.
 */
export interface StartTelemetryEvaluationCommandOutput extends __MetadataBearer {}

/**
 * This action begins onboarding the caller Amazon Web Services account to the telemetry config feature.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StartTelemetryEvaluationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StartTelemetryEvaluationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // StartTelemetryEvaluationInput
 *   Regions: [ // Regions
 *     "STRING_VALUE",
 *   ],
 *   AllRegions: true || false,
 * };
 * const command = new StartTelemetryEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartTelemetryEvaluationCommandInput - {@link StartTelemetryEvaluationCommandInput}
 * @returns {@link StartTelemetryEvaluationCommandOutput}
 * @see {@link StartTelemetryEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link ObservabilityAdminServiceException}
 *
 * Base exception class for all service exceptions from ObservabilityAdmin service.
 *
 * @public
 */
export class StartTelemetryEvaluationCommand extends command<StartTelemetryEvaluationCommandInput, StartTelemetryEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "StartTelemetryEvaluation",
  StartTelemetryEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTelemetryEvaluationInput;
      output: {};
    };
    sdk: {
      input: StartTelemetryEvaluationCommandInput;
      output: StartTelemetryEvaluationCommandOutput;
    };
  };
}
