// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchRequest, SearchResponse } from "../models/models_0";
import { Search$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:
 *
 * - `simple`: search all `text` and `text-array` fields for the specified string. Search for phrases, individual terms, and prefixes.
 * - `structured`: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.
 * - `lucene`: specify search criteria using the Apache Lucene query parser syntax.
 * - `dismax`: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.
 *
 * For more information, see [Searching Your Data](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * The endpoint for submitting `Search` requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.
 *
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
 *
 * Information about any problems encountered while processing a search request.
 *
 * @throws {@link CloudSearchDomainServiceException}
 *
 * Base exception class for all service exceptions from CloudSearchDomain service.
 *
 * @public
 */
export class SearchCommand extends command<SearchCommandInput, SearchCommandOutput>(
  _ep0,
  _mw0,
  "Search",
  Search$
) {
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
