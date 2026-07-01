// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListPerformanceAnalysisReportRecommendationsRequest,
  ListPerformanceAnalysisReportRecommendationsResponse,
} from "../models/models_0";
import { ListPerformanceAnalysisReportRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPerformanceAnalysisReportRecommendationsCommand}.
 */
export interface ListPerformanceAnalysisReportRecommendationsCommandInput extends ListPerformanceAnalysisReportRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPerformanceAnalysisReportRecommendationsCommand}.
 */
export interface ListPerformanceAnalysisReportRecommendationsCommandOutput extends ListPerformanceAnalysisReportRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves recommendations for a performance analysis report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListPerformanceAnalysisReportRecommendationsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListPerformanceAnalysisReportRecommendationsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // ListPerformanceAnalysisReportRecommendationsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 *   RecommendationIds: [ // RecommendationIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPerformanceAnalysisReportRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPerformanceAnalysisReportRecommendationsResponse
 * //   Recommendations: [ // RecommendationList
 * //     { // Recommendation
 * //       RecommendationId: "STRING_VALUE",
 * //       RecommendationDescription: "STRING_VALUE",
 * //       RecommendationDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPerformanceAnalysisReportRecommendationsCommandInput - {@link ListPerformanceAnalysisReportRecommendationsCommandInput}
 * @returns {@link ListPerformanceAnalysisReportRecommendationsCommandOutput}
 * @see {@link ListPerformanceAnalysisReportRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListPerformanceAnalysisReportRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 *
 * @public
 */
export class ListPerformanceAnalysisReportRecommendationsCommand extends command<ListPerformanceAnalysisReportRecommendationsCommandInput, ListPerformanceAnalysisReportRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ListPerformanceAnalysisReportRecommendations",
  ListPerformanceAnalysisReportRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPerformanceAnalysisReportRecommendationsRequest;
      output: ListPerformanceAnalysisReportRecommendationsResponse;
    };
    sdk: {
      input: ListPerformanceAnalysisReportRecommendationsCommandInput;
      output: ListPerformanceAnalysisReportRecommendationsCommandOutput;
    };
  };
}
