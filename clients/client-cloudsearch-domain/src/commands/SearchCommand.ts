// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchRequest, SearchResponse } from "../models/models_0";
import { Search } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchRequest {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p>
 *       <ul>
 *          <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li>
 *          <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li>
 *          <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li>
 *          <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li>
 *       </ul>
 *       <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 *       <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, SearchCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, SearchCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * // import type { CloudSearchDomainClientConfig } from "@aws-sdk/client-cloudsearch-domain";
 * const config = {}; // type is CloudSearchDomainClientConfig
 * const client = new CloudSearchDomainClient(config);
 * const input = { // SearchRequest
 *   cursor: "STRING_VALUE",
 *   expr: "STRING_VALUE",
 *   facet: "STRING_VALUE",
 *   filterQuery: "STRING_VALUE",
 *   highlight: "STRING_VALUE",
 *   partial: true || false,
 *   query: "STRING_VALUE", // required
 *   queryOptions: "STRING_VALUE",
 *   queryParser: "simple" || "structured" || "lucene" || "dismax",
 *   return: "STRING_VALUE",
 *   size: Number("long"),
 *   sort: "STRING_VALUE",
 *   start: Number("long"),
 *   stats: "STRING_VALUE",
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchResponse
 * //   status: { // SearchStatus
 * //     timems: Number("long"),
 * //     rid: "STRING_VALUE",
 * //   },
 * //   hits: { // Hits
 * //     found: Number("long"),
 * //     start: Number("long"),
 * //     cursor: "STRING_VALUE",
 * //     hit: [ // HitList
 * //       { // Hit
 * //         id: "STRING_VALUE",
 * //         fields: { // Fields
 * //           "<keys>": [ // FieldValue
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         exprs: { // Exprs
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         highlights: { // Highlights
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   facets: { // Facets
 * //     "<keys>": { // BucketInfo
 * //       buckets: [ // BucketList
 * //         { // Bucket
 * //           value: "STRING_VALUE",
 * //           count: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   stats: { // Stats
 * //     "<keys>": { // FieldStats
 * //       min: "STRING_VALUE",
 * //       max: "STRING_VALUE",
 * //       count: Number("long"),
 * //       missing: Number("long"),
 * //       sum: Number("double"),
 * //       sumOfSquares: Number("double"),
 * //       mean: "STRING_VALUE",
 * //       stddev: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
 *
 * @throws {@link SearchException} (client fault)
 *  <p>Information about any problems encountered while processing a search request.</p>
 *
 * @throws {@link CloudSearchDomainServiceException}
 * <p>Base exception class for all service exceptions from CloudSearchDomain service.</p>
 *
 *
 * @public
 */
export class SearchCommand extends $Command
  .classBuilder<
    SearchCommandInput,
    SearchCommandOutput,
    CloudSearchDomainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchDomainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudSearch2013", "Search", {})
  .n("CloudSearchDomainClient", "SearchCommand")
  .sc(Search)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRequest;
      output: SearchResponse;
    };
    sdk: {
      input: SearchCommandInput;
      output: SearchCommandOutput;
    };
  };
}
