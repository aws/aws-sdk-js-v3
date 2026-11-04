// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0";
import { ListRecommendationFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendationFeedbackCommand}.
 */
export interface ListRecommendationFeedbackCommandInput extends ListRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationFeedbackCommand}.
 */
export interface ListRecommendationFeedbackCommandOutput extends ListRecommendationFeedbackResponse, __MetadataBearer {}

/**
 * Returns a list of [RecommendationFeedbackSummary](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html) objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // import type { CodeGuruReviewerClientConfig } from "@aws-sdk/client-codeguru-reviewer";
 * const config = {}; // type is CodeGuruReviewerClientConfig
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListRecommendationFeedbackRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CodeReviewArn: "STRING_VALUE", // required
 *   UserIds: [ // UserIds
 *     "STRING_VALUE",
 *   ],
 *   RecommendationIds: [ // RecommendationIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationFeedbackResponse
 * //   RecommendationFeedbackSummaries: [ // RecommendationFeedbackSummaries
 * //     { // RecommendationFeedbackSummary
 * //       RecommendationId: "STRING_VALUE",
 * //       Reactions: [ // Reactions
 * //         "ThumbsUp" || "ThumbsDown",
 * //       ],
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationFeedbackCommandInput - {@link ListRecommendationFeedbackCommandInput}
 * @returns {@link ListRecommendationFeedbackCommandOutput}
 * @see {@link ListRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationFeedbackCommandOutput} for command's `response` shape.
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
export class ListRecommendationFeedbackCommand extends command<ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendationFeedback",
  ListRecommendationFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationFeedbackRequest;
      output: ListRecommendationFeedbackResponse;
    };
    sdk: {
      input: ListRecommendationFeedbackCommandInput;
      output: ListRecommendationFeedbackCommandOutput;
    };
  };
}
