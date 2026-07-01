// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTelemetryEvaluationStatusForOrganizationOutput } from "../models/models_0";
import { GetTelemetryEvaluationStatusForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetTelemetryEvaluationStatusForOrganizationCommandOutput extends GetTelemetryEvaluationStatusForOrganizationOutput, __MetadataBearer {}

/**
 * <p> This returns the onboarding status of the telemetry configuration feature for the organization. It can only be called by a Management Account of an Amazon Web Services Organization or an assigned Delegated Admin Account of Amazon CloudWatch telemetry config. </p>
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
 * //   HomeRegion: "STRING_VALUE",
 * //   RegionStatuses: [ // RegionStatuses
 * //     { // RegionStatus
 * //       Region: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       RuleArn: "STRING_VALUE",
 * //     },
 * //   ],
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
export class GetTelemetryEvaluationStatusForOrganizationCommand extends command<GetTelemetryEvaluationStatusForOrganizationCommandInput, GetTelemetryEvaluationStatusForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "GetTelemetryEvaluationStatusForOrganization",
  GetTelemetryEvaluationStatusForOrganization$
) {
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
