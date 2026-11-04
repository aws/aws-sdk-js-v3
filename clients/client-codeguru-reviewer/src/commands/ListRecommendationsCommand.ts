// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { ListRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * Returns the list of all recommendations for a completed code review.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // import type { CodeGuruReviewerClientConfig } from "@aws-sdk/client-codeguru-reviewer";
 * const config = {}; // type is CodeGuruReviewerClientConfig
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListRecommendationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CodeReviewArn: "STRING_VALUE", // required
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   RecommendationSummaries: [ // RecommendationSummaries
 * //     { // RecommendationSummary
 * //       FilePath: "STRING_VALUE",
 * //       RecommendationId: "STRING_VALUE",
 * //       StartLine: Number("int"),
 * //       EndLine: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       RecommendationCategory: "AWSBestPractices" || "AWSCloudFormationIssues" || "DuplicateCode" || "CodeMaintenanceIssues" || "ConcurrencyIssues" || "InputValidations" || "PythonBestPractices" || "JavaBestPractices" || "ResourceLeaks" || "SecurityIssues" || "CodeInconsistencies",
 * //       RuleMetadata: { // RuleMetadata
 * //         RuleId: "STRING_VALUE",
 * //         RuleName: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         LongDescription: "STRING_VALUE",
 * //         RuleTags: [ // RuleTags
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Severity: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
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
export class ListRecommendationsCommand extends command<ListRecommendationsCommandInput, ListRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendations",
  ListRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationsRequest;
      output: ListRecommendationsResponse;
    };
    sdk: {
      input: ListRecommendationsCommandInput;
      output: ListRecommendationsCommandOutput;
    };
  };
}
