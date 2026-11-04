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
 * Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListRecommendationsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListRecommendationsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListRecommendationsRequest
 *   InsightId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Locale: "DE_DE" || "EN_US" || "EN_GB" || "ES_ES" || "FR_FR" || "IT_IT" || "JA_JP" || "KO_KR" || "PT_BR" || "ZH_CN" || "ZH_TW",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   Recommendations: [ // Recommendations
 * //     { // Recommendation
 * //       Description: "STRING_VALUE",
 * //       Link: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       RelatedEvents: [ // RecommendationRelatedEvents
 * //         { // RecommendationRelatedEvent
 * //           Name: "STRING_VALUE",
 * //           Resources: [ // RecommendationRelatedEventResources
 * //             { // RecommendationRelatedEventResource
 * //               Name: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       RelatedAnomalies: [ // RecommendationRelatedAnomalies
 * //         { // RecommendationRelatedAnomaly
 * //           Resources: [ // RecommendationRelatedAnomalyResources
 * //             { // RecommendationRelatedAnomalyResource
 * //               Name: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SourceDetails: [ // RelatedAnomalySourceDetails
 * //             { // RecommendationRelatedAnomalySourceDetail
 * //               CloudWatchMetrics: [ // RecommendationRelatedCloudWatchMetricsSourceDetails
 * //                 { // RecommendationRelatedCloudWatchMetricsSourceDetail
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           AnomalyId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Category: "STRING_VALUE",
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
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
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
