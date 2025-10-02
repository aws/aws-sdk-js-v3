// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRecommendationFeedbackRequest, PutRecommendationFeedbackResponse } from "../models/models_0";
import { de_PutRecommendationFeedbackCommand, se_PutRecommendationFeedbackCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with
 *          different reactions the previous feedback is overwritten.</p>
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
export class PutRecommendationFeedbackCommand extends $Command
  .classBuilder<
    PutRecommendationFeedbackCommandInput,
    PutRecommendationFeedbackCommandOutput,
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
  .s("AWSGuruFrontendService", "PutRecommendationFeedback", {})
  .n("CodeGuruReviewerClient", "PutRecommendationFeedbackCommand")
  .f(void 0, void 0)
  .ser(se_PutRecommendationFeedbackCommand)
  .de(de_PutRecommendationFeedbackCommand)
  .build() {
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
