// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { StopTelemetryEvaluationForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTelemetryEvaluationForOrganizationCommand}.
 */
export interface StopTelemetryEvaluationForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link StopTelemetryEvaluationForOrganizationCommand}.
 */
export interface StopTelemetryEvaluationForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopTelemetryEvaluationForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopTelemetryEvaluationForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StopTelemetryEvaluationForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryEvaluationForOrganizationCommandInput - {@link StopTelemetryEvaluationForOrganizationCommandInput}
 * @returns {@link StopTelemetryEvaluationForOrganizationCommandOutput}
 * @see {@link StopTelemetryEvaluationForOrganizationCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryEvaluationForOrganizationCommandOutput} for command's `response` shape.
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
export class StopTelemetryEvaluationForOrganizationCommand extends command<StopTelemetryEvaluationForOrganizationCommandInput, StopTelemetryEvaluationForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "StopTelemetryEvaluationForOrganization",
  StopTelemetryEvaluationForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopTelemetryEvaluationForOrganizationCommandInput;
      output: StopTelemetryEvaluationForOrganizationCommandOutput;
    };
  };
}
