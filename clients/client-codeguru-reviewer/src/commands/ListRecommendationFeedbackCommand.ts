// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0";
import { ListRecommendationFeedback } from "../schemas/schemas_1_Repository";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation
 *          feedback for all CodeGuru Reviewer users.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request was not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruReviewerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruReviewer service.</p>
 *
 *
 * @public
 */
export class ListRecommendationFeedbackCommand extends $Command
  .classBuilder<
    ListRecommendationFeedbackCommandInput,
    ListRecommendationFeedbackCommandOutput,
    CodeGuruReviewerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruReviewerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGuruFrontendService", "ListRecommendationFeedback", {})
  .n("CodeGuruReviewerClient", "ListRecommendationFeedbackCommand")
  .sc(ListRecommendationFeedback)
  .build() {
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
