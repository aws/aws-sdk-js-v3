// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetryPipelineExecutionRequest, RetryPipelineExecutionResponse } from "../models/models_4";
import { RetryPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetryPipelineExecutionCommand}.
 */
export interface RetryPipelineExecutionCommandInput extends RetryPipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link RetryPipelineExecutionCommand}.
 */
export interface RetryPipelineExecutionCommandOutput extends RetryPipelineExecutionResponse, __MetadataBearer {}

/**
 * Retry the execution of the pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RetryPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RetryPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // RetryPipelineExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   ParallelismConfiguration: { // ParallelismConfiguration
 *     MaxParallelExecutionSteps: Number("int"), // required
 *   },
 * };
 * const command = new RetryPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // RetryPipelineExecutionResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryPipelineExecutionCommandInput - {@link RetryPipelineExecutionCommandInput}
 * @returns {@link RetryPipelineExecutionCommandOutput}
 * @see {@link RetryPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link RetryPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
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
export class RetryPipelineExecutionCommand extends command<RetryPipelineExecutionCommandInput, RetryPipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "RetryPipelineExecution",
  RetryPipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetryPipelineExecutionRequest;
      output: RetryPipelineExecutionResponse;
    };
    sdk: {
      input: RetryPipelineExecutionCommandInput;
      output: RetryPipelineExecutionCommandOutput;
    };
  };
}
