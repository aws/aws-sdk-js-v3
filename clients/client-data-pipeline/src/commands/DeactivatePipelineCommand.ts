// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivatePipelineInput, DeactivatePipelineOutput } from "../models/models_0";
import { DeactivatePipeline } from "../schemas/schemas_5_DeactivatePipeline";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivatePipelineCommand}.
 */
export interface DeactivatePipelineCommandInput extends DeactivatePipelineInput {}
/**
 * @public
 *
 * The output of {@link DeactivatePipelineCommand}.
 */
export interface DeactivatePipelineCommandOutput extends DeactivatePipelineOutput, __MetadataBearer {}

/**
 * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code>
 *           state until the deactivation process completes.</p>
 *         <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution.
 *           Optionally, you can specify the date and time to resume the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DeactivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DeactivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // DeactivatePipelineInput
 *   pipelineId: "STRING_VALUE", // required
 *   cancelActive: true || false,
 * };
 * const command = new DeactivatePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivatePipelineCommandInput - {@link DeactivatePipelineCommandInput}
 * @returns {@link DeactivatePipelineCommandOutput}
 * @see {@link DeactivatePipelineCommandInput} for command's `input` shape.
 * @see {@link DeactivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *  <p>The specified pipeline has been deleted.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 *
 * @public
 */
export class DeactivatePipelineCommand extends $Command
  .classBuilder<
    DeactivatePipelineCommandInput,
    DeactivatePipelineCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "DeactivatePipeline", {})
  .n("DataPipelineClient", "DeactivatePipelineCommand")
  .sc(DeactivatePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivatePipelineInput;
      output: {};
    };
    sdk: {
      input: DeactivatePipelineCommandInput;
      output: DeactivatePipelineCommandOutput;
    };
  };
}
