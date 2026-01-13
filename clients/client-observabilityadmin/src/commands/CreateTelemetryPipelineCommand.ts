// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTelemetryPipelineInput, CreateTelemetryPipelineOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { CreateTelemetryPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTelemetryPipelineCommand}.
 */
export interface CreateTelemetryPipelineCommandInput extends CreateTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link CreateTelemetryPipelineCommand}.
 */
export interface CreateTelemetryPipelineCommandOutput extends CreateTelemetryPipelineOutput, __MetadataBearer {}

/**
 * <p>Creates a telemetry pipeline for processing and transforming telemetry data. The pipeline defines how data flows from sources through processors to destinations, enabling data transformation and delivering capabilities. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateTelemetryPipelineInput
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // TelemetryPipelineConfiguration
 *     Body: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateTelemetryPipelineOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTelemetryPipelineCommandInput - {@link CreateTelemetryPipelineCommandInput}
 * @returns {@link CreateTelemetryPipelineCommandOutput}
 * @see {@link CreateTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateTelemetryPipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
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
export class CreateTelemetryPipelineCommand extends $Command
  .classBuilder<
    CreateTelemetryPipelineCommandInput,
    CreateTelemetryPipelineCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "CreateTelemetryPipeline", {})
  .n("ObservabilityAdminClient", "CreateTelemetryPipelineCommand")
  .sc(CreateTelemetryPipeline$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTelemetryPipelineInput;
      output: CreateTelemetryPipelineOutput;
    };
    sdk: {
      input: CreateTelemetryPipelineCommandInput;
      output: CreateTelemetryPipelineCommandOutput;
    };
  };
}
