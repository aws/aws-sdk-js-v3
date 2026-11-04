// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRecommendationFeedbackRequest, PutRecommendationFeedbackResponse } from "../models/models_0";
import { PutRecommendationFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRecommendationFeedbackCommand}.
 */
export interface PutRecommendationFeedbackCommandInput extends PutRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutRecommendationFeedbackCommand}.
 */
export interface PutRecommendationFeedbackCommandOutput extends PutRecommendationFeedbackResponse, __MetadataBearer {}

/**
 * Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // import type { CodeGuruReviewerClientConfig } from "@aws-sdk/client-codeguru-reviewer";
 * const config = {}; // type is CodeGuruReviewerClientConfig
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // PutRecommendationFeedbackRequest
 *   CodeReviewArn: "STRING_VALUE", // required
 *   RecommendationId: "STRING_VALUE", // required
 *   Reactions: [ // Reactions // required
 *     "ThumbsUp" || "ThumbsDown",
 *   ],
 * };
 * const command = new PutRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRecommendationFeedbackCommandInput - {@link PutRecommendationFeedbackCommandInput}
 * @returns {@link PutRecommendationFeedbackCommandOutput}
 * @see {@link PutRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CodeGuruReviewerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruReviewer service.
 *
 * @public
 */
export class PutRecommendationFeedbackCommand extends command<PutRecommendationFeedbackCommandInput, PutRecommendationFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "PutRecommendationFeedback",
  PutRecommendationFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecommendationFeedbackRequest;
      output: {};
    };
    sdk: {
      input: PutRecommendationFeedbackCommandInput;
      output: PutRecommendationFeedbackCommandOutput;
    };
  };
}
