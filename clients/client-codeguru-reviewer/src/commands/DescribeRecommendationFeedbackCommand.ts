// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRecommendationFeedbackRequest, DescribeRecommendationFeedbackResponse } from "../models/models_0";
import {
  de_DescribeRecommendationFeedbackCommand,
  se_DescribeRecommendationFeedbackCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationFeedbackCommand}.
 */
export interface DescribeRecommendationFeedbackCommandInput extends DescribeRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationFeedbackCommand}.
 */
export interface DescribeRecommendationFeedbackCommandOutput
  extends DescribeRecommendationFeedbackResponse,
    __MetadataBearer {}

/**
 * <p>Describes the customer feedback for a CodeGuru Reviewer recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // DescribeRecommendationFeedbackRequest
 *   CodeReviewArn: "STRING_VALUE", // required
 *   RecommendationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 * };
 * const command = new DescribeRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationFeedbackResponse
 * //   RecommendationFeedback: { // RecommendationFeedback
 * //     CodeReviewArn: "STRING_VALUE",
 * //     RecommendationId: "STRING_VALUE",
 * //     Reactions: [ // Reactions
 * //       "ThumbsUp" || "ThumbsDown",
 * //     ],
 * //     UserId: "STRING_VALUE",
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationFeedbackCommandInput - {@link DescribeRecommendationFeedbackCommandInput}
 * @returns {@link DescribeRecommendationFeedbackCommandOutput}
 * @see {@link DescribeRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationFeedbackCommandOutput} for command's `response` shape.
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
export class DescribeRecommendationFeedbackCommand extends $Command
  .classBuilder<
    DescribeRecommendationFeedbackCommandInput,
    DescribeRecommendationFeedbackCommandOutput,
    CodeGuruReviewerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruReviewerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGuruFrontendService", "DescribeRecommendationFeedback", {})
  .n("CodeGuruReviewerClient", "DescribeRecommendationFeedbackCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRecommendationFeedbackCommand)
  .de(de_DescribeRecommendationFeedbackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecommendationFeedbackRequest;
      output: DescribeRecommendationFeedbackResponse;
    };
    sdk: {
      input: DescribeRecommendationFeedbackCommandInput;
      output: DescribeRecommendationFeedbackCommandOutput;
    };
  };
}
