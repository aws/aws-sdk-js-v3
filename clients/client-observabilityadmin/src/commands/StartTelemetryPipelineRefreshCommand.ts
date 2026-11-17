// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTelemetryPipelineRefreshInput, StartTelemetryPipelineRefreshOutput } from "../models/models_0";
import { StartTelemetryPipelineRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTelemetryPipelineRefreshCommand}.
 */
export interface StartTelemetryPipelineRefreshCommandInput extends StartTelemetryPipelineRefreshInput {}
/**
 * @public
 *
 * The output of {@link StartTelemetryPipelineRefreshCommand}.
 */
export interface StartTelemetryPipelineRefreshCommandOutput extends StartTelemetryPipelineRefreshOutput, __MetadataBearer {}

/**
 * <p>Starts a refresh of an external-cloud telemetry pipeline. The refresh re-reads the connector's telemetry manifest and re-discovers the sources in scope.</p> <p>The pipeline must be in the <code>ACTIVE</code> or <code>UPDATE_FAILED</code> state, with no refresh already running. You can use <code>GetTelemetryPipeline</code> to track the refresh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StartTelemetryPipelineRefreshCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StartTelemetryPipelineRefreshCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // StartTelemetryPipelineRefreshInput
 *   PipelineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartTelemetryPipelineRefreshCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartTelemetryPipelineRefreshCommandInput - {@link StartTelemetryPipelineRefreshCommandInput}
 * @returns {@link StartTelemetryPipelineRefreshCommandOutput}
 * @see {@link StartTelemetryPipelineRefreshCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryPipelineRefreshCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
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
export class StartTelemetryPipelineRefreshCommand extends command<StartTelemetryPipelineRefreshCommandInput, StartTelemetryPipelineRefreshCommandOutput>(
  _ep0,
  _mw0,
  "StartTelemetryPipelineRefresh",
  StartTelemetryPipelineRefresh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTelemetryPipelineRefreshInput;
      output: {};
    };
    sdk: {
      input: StartTelemetryPipelineRefreshCommandInput;
      output: StartTelemetryPipelineRefreshCommandOutput;
    };
  };
}
