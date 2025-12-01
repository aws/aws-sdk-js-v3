// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTelemetryEnrichmentStatusOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { GetTelemetryEnrichmentStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryEnrichmentStatusCommand}.
 */
export interface GetTelemetryEnrichmentStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link GetTelemetryEnrichmentStatusCommand}.
 */
export interface GetTelemetryEnrichmentStatusCommandOutput
  extends GetTelemetryEnrichmentStatusOutput,
    __MetadataBearer {}

/**
 * <p> Returns the current status of the resource tags for telemetry feature, which enhances telemetry data with additional resource metadata from Amazon Web Services Resource Explorer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetTelemetryEnrichmentStatusCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetTelemetryEnrichmentStatusCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new GetTelemetryEnrichmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryEnrichmentStatusOutput
 * //   Status: "Running" || "Stopped" || "Impaired",
 * //   AwsResourceExplorerManagedViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTelemetryEnrichmentStatusCommandInput - {@link GetTelemetryEnrichmentStatusCommandInput}
 * @returns {@link GetTelemetryEnrichmentStatusCommandOutput}
 * @see {@link GetTelemetryEnrichmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryEnrichmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
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
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class GetTelemetryEnrichmentStatusCommand extends $Command
  .classBuilder<
    GetTelemetryEnrichmentStatusCommandInput,
    GetTelemetryEnrichmentStatusCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "GetTelemetryEnrichmentStatus", {})
  .n("ObservabilityAdminClient", "GetTelemetryEnrichmentStatusCommand")
  .sc(GetTelemetryEnrichmentStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTelemetryEnrichmentStatusOutput;
    };
    sdk: {
      input: GetTelemetryEnrichmentStatusCommandInput;
      output: GetTelemetryEnrichmentStatusCommandOutput;
    };
  };
}
