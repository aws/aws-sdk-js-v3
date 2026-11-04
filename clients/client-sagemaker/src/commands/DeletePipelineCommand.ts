// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePipelineRequest, DeletePipelineResponse } from "../models/models_2";
import { DeletePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandInput extends DeletePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandOutput extends DeletePipelineResponse, __MetadataBearer {}

/**
 * Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the `StopPipelineExecution` API. When you delete a pipeline, all instances of the pipeline are deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeletePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeletePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeletePipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeletePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DeletePipelineResponse
 * //   PipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePipelineCommandInput - {@link DeletePipelineCommandInput}
 * @returns {@link DeletePipelineCommandOutput}
 * @see {@link DeletePipelineCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class DeletePipelineCommand extends command<DeletePipelineCommandInput, DeletePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DeletePipeline",
  DeletePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePipelineRequest;
      output: DeletePipelineResponse;
    };
    sdk: {
      input: DeletePipelineCommandInput;
      output: DeletePipelineCommandOutput;
    };
  };
}
