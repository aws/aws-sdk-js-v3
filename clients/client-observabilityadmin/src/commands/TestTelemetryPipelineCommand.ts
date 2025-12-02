// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestTelemetryPipelineInput, TestTelemetryPipelineOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { TestTelemetryPipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestTelemetryPipelineCommand}.
 */
export interface TestTelemetryPipelineCommandInput extends TestTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link TestTelemetryPipelineCommand}.
 */
export interface TestTelemetryPipelineCommandOutput extends TestTelemetryPipelineOutput, __MetadataBearer {}

/**
 * <p>Tests a pipeline configuration with sample records to validate data processing before deployment. This operation helps ensure your pipeline configuration works as expected. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, TestTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, TestTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // TestTelemetryPipelineInput
 *   Records: [ // Records // required
 *     { // Record
 *       Data: "STRING_VALUE",
 *       Type: "STRING" || "JSON",
 *     },
 *   ],
 *   Configuration: { // TelemetryPipelineConfiguration
 *     Body: "STRING_VALUE", // required
 *   },
 * };
 * const command = new TestTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // { // TestTelemetryPipelineOutput
 * //   Results: [ // PipelineOutputs
 * //     { // PipelineOutput
 * //       Record: { // Record
 * //         Data: "STRING_VALUE",
 * //         Type: "STRING" || "JSON",
 * //       },
 * //       Error: { // PipelineOutputError
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestTelemetryPipelineCommandInput - {@link TestTelemetryPipelineCommandInput}
 * @returns {@link TestTelemetryPipelineCommandOutput}
 * @see {@link TestTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link TestTelemetryPipelineCommandOutput} for command's `response` shape.
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
export class TestTelemetryPipelineCommand extends $Command
  .classBuilder<
    TestTelemetryPipelineCommandInput,
    TestTelemetryPipelineCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "TestTelemetryPipeline", {})
  .n("ObservabilityAdminClient", "TestTelemetryPipelineCommand")
  .sc(TestTelemetryPipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestTelemetryPipelineInput;
      output: TestTelemetryPipelineOutput;
    };
    sdk: {
      input: TestTelemetryPipelineCommandInput;
      output: TestTelemetryPipelineCommandOutput;
    };
  };
}
