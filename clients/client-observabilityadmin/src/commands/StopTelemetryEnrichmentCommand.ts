// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTelemetryEnrichmentOutput } from "../models/models_0";
import { StopTelemetryEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTelemetryEnrichmentCommand}.
 */
export interface StopTelemetryEnrichmentCommandInput {}
/**
 * @public
 *
 * The output of {@link StopTelemetryEnrichmentCommand}.
 */
export interface StopTelemetryEnrichmentCommandOutput extends StopTelemetryEnrichmentOutput, __MetadataBearer {}

/**
 * Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopTelemetryEnrichmentCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopTelemetryEnrichmentCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StopTelemetryEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // StopTelemetryEnrichmentOutput
 * //   Status: "Running" || "Stopped" || "Impaired",
 * // };
 *
 * ```
 *
 * @param StopTelemetryEnrichmentCommandInput - {@link StopTelemetryEnrichmentCommandInput}
 * @returns {@link StopTelemetryEnrichmentCommandOutput}
 * @see {@link StopTelemetryEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation conflicts with the current state of the specified resource or with another request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ObservabilityAdminServiceException}
 *
 * Base exception class for all service exceptions from ObservabilityAdmin service.
 *
 * @public
 */
export class StopTelemetryEnrichmentCommand extends command<StopTelemetryEnrichmentCommandInput, StopTelemetryEnrichmentCommandOutput>(
  _ep0,
  _mw0,
  "StopTelemetryEnrichment",
  StopTelemetryEnrichment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: StopTelemetryEnrichmentOutput;
    };
    sdk: {
      input: StopTelemetryEnrichmentCommandInput;
      output: StopTelemetryEnrichmentCommandOutput;
    };
  };
}
