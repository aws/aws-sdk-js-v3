// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopTelemetryEnrichmentOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { de_StopTelemetryEnrichmentCommand, se_StopTelemetryEnrichmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata. </p>
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
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class StopTelemetryEnrichmentCommand extends $Command
  .classBuilder<
    StopTelemetryEnrichmentCommandInput,
    StopTelemetryEnrichmentCommandOutput,
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
  .s("ObservabilityAdmin", "StopTelemetryEnrichment", {})
  .n("ObservabilityAdminClient", "StopTelemetryEnrichmentCommand")
  .f(void 0, void 0)
  .ser(se_StopTelemetryEnrichmentCommand)
  .de(de_StopTelemetryEnrichmentCommand)
  .build() {
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
