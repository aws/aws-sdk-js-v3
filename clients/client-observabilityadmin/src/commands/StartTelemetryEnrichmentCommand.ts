// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartTelemetryEnrichmentOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { StartTelemetryEnrichment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTelemetryEnrichmentCommand}.
 */
export interface StartTelemetryEnrichmentCommandInput {}
/**
 * @public
 *
 * The output of {@link StartTelemetryEnrichmentCommand}.
 */
export interface StartTelemetryEnrichmentCommandOutput extends StartTelemetryEnrichmentOutput, __MetadataBearer {}

/**
 * <p> Enables the resource tags for telemetry feature for your account, which enhances telemetry data with additional resource metadata from Amazon Web Services Resource Explorer to provide richer context for monitoring and observability. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StartTelemetryEnrichmentCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StartTelemetryEnrichmentCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StartTelemetryEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // StartTelemetryEnrichmentOutput
 * //   Status: "Running" || "Stopped" || "Impaired",
 * //   AwsResourceExplorerManagedViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTelemetryEnrichmentCommandInput - {@link StartTelemetryEnrichmentCommandInput}
 * @returns {@link StartTelemetryEnrichmentCommandOutput}
 * @see {@link StartTelemetryEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryEnrichmentCommandOutput} for command's `response` shape.
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
export class StartTelemetryEnrichmentCommand extends $Command
  .classBuilder<
    StartTelemetryEnrichmentCommandInput,
    StartTelemetryEnrichmentCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "StartTelemetryEnrichment", {})
  .n("ObservabilityAdminClient", "StartTelemetryEnrichmentCommand")
  .sc(StartTelemetryEnrichment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: StartTelemetryEnrichmentOutput;
    };
    sdk: {
      input: StartTelemetryEnrichmentCommandInput;
      output: StartTelemetryEnrichmentCommandOutput;
    };
  };
}
