// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopInferenceRecommendationsJobRequest } from "../models/models_4";
import { StopInferenceRecommendationsJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopInferenceRecommendationsJobCommand}.
 */
export interface StopInferenceRecommendationsJobCommandInput extends StopInferenceRecommendationsJobRequest {}
/**
 * @public
 *
 * The output of {@link StopInferenceRecommendationsJobCommand}.
 */
export interface StopInferenceRecommendationsJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops an Inference Recommender job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopInferenceRecommendationsJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopInferenceRecommendationsJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopInferenceRecommendationsJobRequest
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new StopInferenceRecommendationsJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopInferenceRecommendationsJobCommandInput - {@link StopInferenceRecommendationsJobCommandInput}
 * @returns {@link StopInferenceRecommendationsJobCommandOutput}
 * @see {@link StopInferenceRecommendationsJobCommandInput} for command's `input` shape.
 * @see {@link StopInferenceRecommendationsJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StopInferenceRecommendationsJobCommand extends command<StopInferenceRecommendationsJobCommandInput, StopInferenceRecommendationsJobCommandOutput>(
  _ep0,
  _mw0,
  "StopInferenceRecommendationsJob",
  StopInferenceRecommendationsJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopInferenceRecommendationsJobRequest;
      output: {};
    };
    sdk: {
      input: StopInferenceRecommendationsJobCommandInput;
      output: StopInferenceRecommendationsJobCommandOutput;
    };
  };
}
