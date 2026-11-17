// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopThirdPartyTelemetryEnrichmentInput,
  StopThirdPartyTelemetryEnrichmentOutput,
} from "../models/models_0";
import { StopThirdPartyTelemetryEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopThirdPartyTelemetryEnrichmentCommand}.
 */
export interface StopThirdPartyTelemetryEnrichmentCommandInput extends StopThirdPartyTelemetryEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link StopThirdPartyTelemetryEnrichmentCommand}.
 */
export interface StopThirdPartyTelemetryEnrichmentCommandOutput extends StopThirdPartyTelemetryEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Stops a third-party telemetry enrichment. CloudWatch stops adding resource metadata from the third-party telemetry source to your telemetry.</p> <p>To use this operation, you must have the <code>config:DeleteServiceLinkedConfigurationRecorder</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopThirdPartyTelemetryEnrichmentCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopThirdPartyTelemetryEnrichmentCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // StopThirdPartyTelemetryEnrichmentInput
 *   TelemetryEnrichmentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopThirdPartyTelemetryEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // StopThirdPartyTelemetryEnrichmentOutput
 * //   Name: "STRING_VALUE", // required
 * //   TelemetrySource: "Azure", // required
 * //   Status: "Initializing" || "Running" || "Stopped" || "Impaired", // required
 * //   StatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopThirdPartyTelemetryEnrichmentCommandInput - {@link StopThirdPartyTelemetryEnrichmentCommandInput}
 * @returns {@link StopThirdPartyTelemetryEnrichmentCommandOutput}
 * @see {@link StopThirdPartyTelemetryEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StopThirdPartyTelemetryEnrichmentCommandOutput} for command's `response` shape.
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
export class StopThirdPartyTelemetryEnrichmentCommand extends command<StopThirdPartyTelemetryEnrichmentCommandInput, StopThirdPartyTelemetryEnrichmentCommandOutput>(
  _ep0,
  _mw0,
  "StopThirdPartyTelemetryEnrichment",
  StopThirdPartyTelemetryEnrichment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopThirdPartyTelemetryEnrichmentInput;
      output: StopThirdPartyTelemetryEnrichmentOutput;
    };
    sdk: {
      input: StopThirdPartyTelemetryEnrichmentCommandInput;
      output: StopThirdPartyTelemetryEnrichmentCommandOutput;
    };
  };
}
