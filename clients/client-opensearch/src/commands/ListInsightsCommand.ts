// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInsightsRequest, ListInsightsResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInsightsCommand}.
 */
export interface ListInsightsCommandInput extends ListInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListInsightsCommand}.
 */
export interface ListInsightsCommandOutput extends ListInsightsResponse, __MetadataBearer {}

/**
 * <p>Lists insights for an Amazon OpenSearch Service domain or Amazon Web Services account.
 *             Returns a paginated list of insights based on the specified entity, filters, time range,
 *             and sort order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListInsightsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListInsightsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListInsightsRequest
 *   Entity: { // InsightEntity
 *     Type: "Account" || "DomainName", // required
 *     Value: "STRING_VALUE",
 *   },
 *   TimeRange: { // InsightTimeRange
 *     From: Number("long"), // required
 *     To: Number("long"), // required
 *   },
 *   SortOrder: "ASC" || "DESC",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListInsightsResponse
 * //   Insights: [ // InsightList
 * //     { // Insight
 * //       InsightId: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Type: "EVENT" || "RECOMMENDATION",
 * //       Priority: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW",
 * //       Status: "ACTIVE" || "RESOLVED" || "DISMISSED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       IsExperimental: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInsightsCommandInput - {@link ListInsightsCommandInput}
 * @returns {@link ListInsightsCommandOutput}
 * @see {@link ListInsightsCommandInput} for command's `input` shape.
 * @see {@link ListInsightsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class ListInsightsCommand extends $Command
  .classBuilder<
    ListInsightsCommandInput,
    ListInsightsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListInsights", {})
  .n("OpenSearchClient", "ListInsightsCommand")
  .sc(ListInsights$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInsightsRequest;
      output: ListInsightsResponse;
    };
    sdk: {
      input: ListInsightsCommandInput;
      output: ListInsightsCommandOutput;
    };
  };
}
