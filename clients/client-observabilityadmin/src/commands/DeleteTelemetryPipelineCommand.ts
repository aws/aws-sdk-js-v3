// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTelemetryPipelineInput, DeleteTelemetryPipelineOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { DeleteTelemetryPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTelemetryPipelineCommand}.
 */
export interface DeleteTelemetryPipelineCommandInput extends DeleteTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link DeleteTelemetryPipelineCommand}.
 */
export interface DeleteTelemetryPipelineCommandOutput extends DeleteTelemetryPipelineOutput, __MetadataBearer {}

/**
 * <p>Deletes a telemetry pipeline and its associated resources. This operation stops data processing and removes the pipeline configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, DeleteTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, DeleteTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // DeleteTelemetryPipelineInput
 *   PipelineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTelemetryPipelineCommandInput - {@link DeleteTelemetryPipelineCommandInput}
 * @returns {@link DeleteTelemetryPipelineCommandOutput}
 * @see {@link DeleteTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteTelemetryPipelineCommandOutput} for command's `response` shape.
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
export class DeleteTelemetryPipelineCommand extends $Command
  .classBuilder<
    DeleteTelemetryPipelineCommandInput,
    DeleteTelemetryPipelineCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "DeleteTelemetryPipeline", {})
  .n("ObservabilityAdminClient", "DeleteTelemetryPipelineCommand")
  .sc(DeleteTelemetryPipeline$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTelemetryPipelineInput;
      output: {};
    };
    sdk: {
      input: DeleteTelemetryPipelineCommandInput;
      output: DeleteTelemetryPipelineCommandOutput;
    };
  };
}
