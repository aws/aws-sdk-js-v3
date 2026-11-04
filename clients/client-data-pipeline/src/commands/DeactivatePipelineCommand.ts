// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivatePipelineInput, DeactivatePipelineOutput } from "../models/models_0";
import { DeactivatePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deactivates the specified running pipeline. The pipeline is set to the `DEACTIVATING` state until the deactivation process completes.
 *
 * To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.
 *
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
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *
 * The specified pipeline has been deleted.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The specified pipeline was not found. Verify that you used the correct user and account identifiers.
 *
 * @throws {@link DataPipelineServiceException}
 *
 * Base exception class for all service exceptions from DataPipeline service.
 *
 * @public
 */
export class DeactivatePipelineCommand extends command<DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DeactivatePipeline",
  DeactivatePipeline$
) {
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
