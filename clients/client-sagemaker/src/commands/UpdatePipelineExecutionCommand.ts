// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePipelineExecutionRequest, UpdatePipelineExecutionResponse } from "../models/models_5";
import { UpdatePipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePipelineExecutionCommand}.
 */
export interface UpdatePipelineExecutionCommandInput extends UpdatePipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineExecutionCommand}.
 */
export interface UpdatePipelineExecutionCommandOutput extends UpdatePipelineExecutionResponse, __MetadataBearer {}

/**
 * Updates a pipeline execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdatePipelineExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 *   PipelineExecutionDescription: "STRING_VALUE",
 *   PipelineExecutionDisplayName: "STRING_VALUE",
 *   ParallelismConfiguration: { // ParallelismConfiguration
 *     MaxParallelExecutionSteps: Number("int"), // required
 *   },
 * };
 * const command = new UpdatePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineExecutionResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePipelineExecutionCommandInput - {@link UpdatePipelineExecutionCommandInput}
 * @returns {@link UpdatePipelineExecutionCommandOutput}
 * @see {@link UpdatePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineExecutionCommandOutput} for command's `response` shape.
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
export class UpdatePipelineExecutionCommand extends command<UpdatePipelineExecutionCommandInput, UpdatePipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePipelineExecution",
  UpdatePipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineExecutionRequest;
      output: UpdatePipelineExecutionResponse;
    };
    sdk: {
      input: UpdatePipelineExecutionCommandInput;
      output: UpdatePipelineExecutionCommandOutput;
    };
  };
}
