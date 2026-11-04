// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTrainingJobRequest } from "../models/models_4";
import { StopTrainingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTrainingJobCommand}.
 */
export interface StopTrainingJobCommandInput extends StopTrainingJobRequest {}
/**
 * @public
 *
 * The output of {@link StopTrainingJobCommand}.
 */
export interface StopTrainingJobCommandOutput extends __MetadataBearer {}

/**
 * Stops a training job. To stop a job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.
 *
 * When it receives a `StopTrainingJob` request, SageMaker changes the status of the job to `Stopping`. After SageMaker stops the job, it sets the status to `Stopped`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopTrainingJobRequest
 *   TrainingJobName: "STRING_VALUE", // required
 * };
 * const command = new StopTrainingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTrainingJobCommandInput - {@link StopTrainingJobCommandInput}
 * @returns {@link StopTrainingJobCommandOutput}
 * @see {@link StopTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StopTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class StopTrainingJobCommand extends command<StopTrainingJobCommandInput, StopTrainingJobCommandOutput>(
  _ep0,
  _mw0,
  "StopTrainingJob",
  StopTrainingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTrainingJobRequest;
      output: {};
    };
    sdk: {
      input: StopTrainingJobCommandInput;
      output: StopTrainingJobCommandOutput;
    };
  };
}
