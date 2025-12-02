// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTelemetryPipelineInput, GetTelemetryPipelineOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { GetTelemetryPipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryPipelineCommand}.
 */
export interface GetTelemetryPipelineCommandInput extends GetTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link GetTelemetryPipelineCommand}.
 */
export interface GetTelemetryPipelineCommandOutput extends GetTelemetryPipelineOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific telemetry pipeline, including its configuration, status, and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // GetTelemetryPipelineInput
 *   PipelineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryPipelineOutput
 * //   Pipeline: { // TelemetryPipeline
 * //     CreatedTimeStamp: Number("long"),
 * //     LastUpdateTimeStamp: Number("long"),
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Configuration: { // TelemetryPipelineConfiguration
 * //       Body: "STRING_VALUE", // required
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     StatusReason: { // TelemetryPipelineStatusReason
 * //       Description: "STRING_VALUE",
 * //     },
 * //     Tags: { // TagMapOutput
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTelemetryPipelineCommandInput - {@link GetTelemetryPipelineCommandInput}
 * @returns {@link GetTelemetryPipelineCommandOutput}
 * @see {@link GetTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryPipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class GetTelemetryPipelineCommand extends $Command
  .classBuilder<
    GetTelemetryPipelineCommandInput,
    GetTelemetryPipelineCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "GetTelemetryPipeline", {})
  .n("ObservabilityAdminClient", "GetTelemetryPipelineCommand")
  .sc(GetTelemetryPipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTelemetryPipelineInput;
      output: GetTelemetryPipelineOutput;
    };
    sdk: {
      input: GetTelemetryPipelineCommandInput;
      output: GetTelemetryPipelineCommandOutput;
    };
  };
}
