// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchListingsInput, SearchListingsOutput, SearchListingsOutputFilterSensitiveLog } from "../models/models_2";
import { de_SearchListingsCommand, se_SearchListingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches listings (records of an asset at a given time) in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchListingsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchListingsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
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
 *       value: "STRING_VALUE", // required
 *     },
 *     and: [ // FilterList
 *       {//  Union: only one key present
 *         filter: {
 *           attribute: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class SearchListingsCommand extends $Command
  .classBuilder<
    SearchListingsCommandInput,
    SearchListingsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "SearchListings", {})
  .n("DataZoneClient", "SearchListingsCommand")
  .f(void 0, SearchListingsOutputFilterSensitiveLog)
  .ser(se_SearchListingsCommand)
  .de(de_SearchListingsCommand)
  .build() {
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
