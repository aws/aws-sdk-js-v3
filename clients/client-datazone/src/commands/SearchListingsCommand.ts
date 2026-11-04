// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchListingsInput, SearchListingsOutput } from "../models/models_2";
import { SearchListings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchListingsCommand}.
 */
export interface SearchListingsCommandInput extends SearchListingsInput {}
/**
 * @public
 *
 * The output of {@link SearchListingsCommand}.
 */
export interface SearchListingsCommandOutput extends SearchListingsOutput, __MetadataBearer {}

/**
 * Searches listings in Amazon DataZone.
 *
 * SearchListings is a powerful capability that enables users to discover and explore published assets and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. SearchListings also supports filtering using various criteria such as creation date, owner, or status. This API is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently.
 *
 * SearchListings returns results in a paginated format. When the result set is large, the response will include a nextToken, which can be used to retrieve the next page of results.
 *
 * The SearchListings API gives users flexibility in specifying what kind of search is run.
 *
 * To run a standard free-text search, the `searchText` parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the [CreateFormType API documentation](https://docs.aws.amazon.com/datazone/latest/APIReference/API_CreateFormType.html). To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable.
 *
 * To run a filtered search, provide filter clause using the `filters` parameter. To filter on glossary terms, use the special attribute `__DataZoneGlossaryTerms`. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with `@amazon.datazone#sortable`), provide a filter using the `intValue` parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with `@amazon.datazone#searchable` for free-text search). Create/update timestamp filtering is supported using the special `creationTime`/`lastUpdatedTime` attributes. Filter types can be mixed and matched to power complex queries.
 *
 * To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchListingsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchListingsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // SearchListingsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   searchText: "STRING_VALUE",
 *   searchIn: [ // SearchInList
 *     { // SearchInItem
 *       attribute: "STRING_VALUE", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: { // FilterClause Union: only one key present
 *     filter: { // Filter
 *       attribute: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       intValue: Number("long"),
 *       operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *     },
 *     and: [ // FilterList
 *       {//  Union: only one key present
 *         filter: {
 *           attribute: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *           intValue: Number("long"),
 *           operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *         },
 *         and: [
 *           "<FilterClause>",
 *         ],
 *         or: [
 *           "<FilterClause>",
 *         ],
 *       },
 *     ],
 *     or: [
 *       "<FilterClause>",
 *     ],
 *   },
 *   aggregations: [ // AggregationList
 *     { // AggregationListItem
 *       attribute: "STRING_VALUE", // required
 *       displayValue: "STRING_VALUE",
 *     },
 *   ],
 *   sort: { // SearchSort
 *     attribute: "STRING_VALUE", // required
 *     order: "ASCENDING" || "DESCENDING",
 *   },
 *   additionalAttributes: [ // SearchOutputAdditionalAttributes
 *     "FORMS" || "TIME_SERIES_DATA_POINT_FORMS" || "TEXT_MATCH_RATIONALE",
 *   ],
 * };
 * const command = new SearchListingsCommand(input);
 * const response = await client.send(command);
 * // { // SearchListingsOutput
 * //   items: [ // SearchResultItems
 * //     { // SearchResultItem Union: only one key present
 * //       assetListing: { // AssetListingItem
 * //         listingId: "STRING_VALUE",
 * //         listingRevision: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         entityId: "STRING_VALUE",
 * //         entityRevision: "STRING_VALUE",
 * //         entityType: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         listingCreatedBy: "STRING_VALUE",
 * //         listingUpdatedBy: "STRING_VALUE",
 * //         glossaryTerms: [ // DetailedGlossaryTerms
 * //           { // DetailedGlossaryTerm
 * //             name: "STRING_VALUE",
 * //             shortDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         governedGlossaryTerms: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             shortDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         owningProjectId: "STRING_VALUE",
 * //         additionalAttributes: { // AssetListingItemAdditionalAttributes
 * //           forms: "STRING_VALUE",
 * //           matchRationale: [ // MatchRationale
 * //             { // MatchRationaleItem Union: only one key present
 * //               textMatches: [ // TextMatches
 * //                 { // TextMatchItem
 * //                   attribute: "STRING_VALUE",
 * //                   text: "STRING_VALUE",
 * //                   matchOffsets: [ // MatchOffsets
 * //                     { // MatchOffset
 * //                       startOffset: Number("int"),
 * //                       endOffset: Number("int"),
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           latestTimeSeriesDataPointForms: [ // TimeSeriesDataPointSummaryFormOutputList
 * //             { // TimeSeriesDataPointSummaryFormOutput
 * //               formName: "STRING_VALUE", // required
 * //               typeIdentifier: "STRING_VALUE", // required
 * //               typeRevision: "STRING_VALUE",
 * //               timestamp: new Date("TIMESTAMP"), // required
 * //               contentSummary: "STRING_VALUE",
 * //               id: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       dataProductListing: { // DataProductListingItem
 * //         listingId: "STRING_VALUE",
 * //         listingRevision: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         entityId: "STRING_VALUE",
 * //         entityRevision: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         listingCreatedBy: "STRING_VALUE",
 * //         listingUpdatedBy: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             shortDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         owningProjectId: "STRING_VALUE",
 * //         additionalAttributes: { // DataProductListingItemAdditionalAttributes
 * //           forms: "STRING_VALUE",
 * //           matchRationale: [
 * //             {//  Union: only one key present
 * //               textMatches: [
 * //                 {
 * //                   attribute: "STRING_VALUE",
 * //                   text: "STRING_VALUE",
 * //                   matchOffsets: [
 * //                     {
 * //                       startOffset: Number("int"),
 * //                       endOffset: Number("int"),
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         items: [ // ListingSummaryItems
 * //           { // ListingSummaryItem
 * //             listingId: "STRING_VALUE",
 * //             listingRevision: "STRING_VALUE",
 * //             glossaryTerms: [
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 shortDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   totalMatchCount: Number("int"),
 * //   aggregates: [ // AggregationOutputList
 * //     { // AggregationOutput
 * //       attribute: "STRING_VALUE",
 * //       displayValue: "STRING_VALUE",
 * //       items: [ // AggregationOutputItems
 * //         { // AggregationOutputItem
 * //           value: "STRING_VALUE",
 * //           count: Number("int"),
 * //           displayValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchListingsCommandInput - {@link SearchListingsCommandInput}
 * @returns {@link SearchListingsCommandOutput}
 * @see {@link SearchListingsCommandInput} for command's `input` shape.
 * @see {@link SearchListingsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class SearchListingsCommand extends command<SearchListingsCommandInput, SearchListingsCommandOutput>(
  _ep0,
  _mw0,
  "SearchListings",
  SearchListings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchListingsInput;
      output: SearchListingsOutput;
    };
    sdk: {
      input: SearchListingsCommandInput;
      output: SearchListingsCommandOutput;
    };
  };
}
