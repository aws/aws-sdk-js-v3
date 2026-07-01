// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIRecommendationJobRequest, DeleteAIRecommendationJobResponse } from "../models/models_2";
import { DeleteAIRecommendationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIRecommendationJobCommand}.
 */
export interface DeleteAIRecommendationJobCommandInput extends DeleteAIRecommendationJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIRecommendationJobCommand}.
 */
export interface DeleteAIRecommendationJobCommandOutput extends DeleteAIRecommendationJobResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified AI recommendation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAIRecommendationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAIRecommendationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAIRecommendationJobRequest
 *   AIRecommendationJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIRecommendationJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAIRecommendationJobResponse
 * //   AIRecommendationJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAIRecommendationJobCommandInput - {@link DeleteAIRecommendationJobCommandInput}
 * @returns {@link DeleteAIRecommendationJobCommandOutput}
 * @see {@link DeleteAIRecommendationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteAIRecommendationJobCommandOutput} for command's `response` shape.
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
export class DeleteAIRecommendationJobCommand extends command<DeleteAIRecommendationJobCommandInput, DeleteAIRecommendationJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIRecommendationJob",
  DeleteAIRecommendationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIRecommendationJobRequest;
      output: DeleteAIRecommendationJobResponse;
    };
    sdk: {
      input: DeleteAIRecommendationJobCommandInput;
      output: DeleteAIRecommendationJobCommandOutput;
    };
  };
}
