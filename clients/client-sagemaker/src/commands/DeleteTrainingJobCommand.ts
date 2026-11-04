// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrainingJobRequest } from "../models/models_2";
import { DeleteTrainingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrainingJobCommand}.
 */
export interface DeleteTrainingJobCommandInput extends DeleteTrainingJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrainingJobCommand}.
 */
export interface DeleteTrainingJobCommandOutput extends __MetadataBearer {}

/**
 * Deletes a training job. After SageMaker deletes a training job, all of the metadata for the training job is lost. You can delete only training jobs that are in a terminal state (`Stopped`, `Failed`, or `Completed`) and don't retain an `Available` [managed warm pool](https://docs.aws.amazon.com/sagemaker/latest/dg/train-warm-pools.html). You cannot delete a job that is in the `InProgress` or `Stopping` state. After deleting the job, you can reuse its name to create another training job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteTrainingJobRequest
 *   TrainingJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrainingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrainingJobCommandInput - {@link DeleteTrainingJobCommandInput}
 * @returns {@link DeleteTrainingJobCommandOutput}
 * @see {@link DeleteTrainingJobCommandInput} for command's `input` shape.
 * @see {@link DeleteTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Resource being accessed is in use.
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
export class DeleteTrainingJobCommand extends command<DeleteTrainingJobCommandInput, DeleteTrainingJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrainingJob",
  DeleteTrainingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrainingJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrainingJobCommandInput;
      output: DeleteTrainingJobCommandOutput;
    };
  };
}
