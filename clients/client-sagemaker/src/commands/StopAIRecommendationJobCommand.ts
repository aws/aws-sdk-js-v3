// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopAIRecommendationJobRequest, StopAIRecommendationJobResponse } from "../models/models_4";
import { StopAIRecommendationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopAIRecommendationJobCommand}.
 */
export interface StopAIRecommendationJobCommandInput extends StopAIRecommendationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAIRecommendationJobCommand}.
 */
export interface StopAIRecommendationJobCommandOutput extends StopAIRecommendationJobResponse, __MetadataBearer {}

/**
 * <p>Stops a running AI recommendation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopAIRecommendationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopAIRecommendationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopAIRecommendationJobRequest
 *   AIRecommendationJobName: "STRING_VALUE", // required
 * };
 * const command = new StopAIRecommendationJobCommand(input);
 * const response = await client.send(command);
 * // { // StopAIRecommendationJobResponse
 * //   AIRecommendationJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StopAIRecommendationJobCommandInput - {@link StopAIRecommendationJobCommandInput}
 * @returns {@link StopAIRecommendationJobCommandOutput}
 * @see {@link StopAIRecommendationJobCommandInput} for command's `input` shape.
 * @see {@link StopAIRecommendationJobCommandOutput} for command's `response` shape.
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
export class StopAIRecommendationJobCommand extends command<StopAIRecommendationJobCommandInput, StopAIRecommendationJobCommandOutput>(
  _ep0,
  _mw0,
  "StopAIRecommendationJob",
  StopAIRecommendationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAIRecommendationJobRequest;
      output: StopAIRecommendationJobResponse;
    };
    sdk: {
      input: StopAIRecommendationJobCommandInput;
      output: StopAIRecommendationJobCommandOutput;
    };
  };
}
