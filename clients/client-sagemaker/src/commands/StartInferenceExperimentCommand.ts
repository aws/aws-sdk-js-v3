// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartInferenceExperimentRequest, StartInferenceExperimentResponse } from "../models/models_4";
import { StartInferenceExperiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartInferenceExperimentCommand}.
 */
export interface StartInferenceExperimentCommandInput extends StartInferenceExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StartInferenceExperimentCommand}.
 */
export interface StartInferenceExperimentCommandOutput extends StartInferenceExperimentResponse, __MetadataBearer {}

/**
 * Starts an inference experiment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartInferenceExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartInferenceExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StartInferenceExperimentRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartInferenceExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StartInferenceExperimentResponse
 * //   InferenceExperimentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartInferenceExperimentCommandInput - {@link StartInferenceExperimentCommandInput}
 * @returns {@link StartInferenceExperimentCommandOutput}
 * @see {@link StartInferenceExperimentCommandInput} for command's `input` shape.
 * @see {@link StartInferenceExperimentCommandOutput} for command's `response` shape.
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
export class StartInferenceExperimentCommand extends command<StartInferenceExperimentCommandInput, StartInferenceExperimentCommandOutput>(
  _ep0,
  _mw0,
  "StartInferenceExperiment",
  StartInferenceExperiment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInferenceExperimentRequest;
      output: StartInferenceExperimentResponse;
    };
    sdk: {
      input: StartInferenceExperimentCommandInput;
      output: StartInferenceExperimentCommandOutput;
    };
  };
}
