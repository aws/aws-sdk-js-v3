// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchInput, SearchOutput } from "../models/models_2";
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
export interface SearchCommandInput extends SearchInput {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * <p>Searches for assets in Amazon DataZone.</p> <p>Search in Amazon DataZone is a powerful capability that enables users to discover and explore data assets, glossary terms, and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. Search can be scoped to specific types of resources (like assets, glossary terms, or data products) and can be filtered using various criteria such as creation date, owner, or status. The search functionality is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently.</p> <p>Many search commands in Amazon DataZone are paginated, including <code>search</code> and <code>search-types</code>. When the result set is large, Amazon DataZone returns a <code>nextToken</code> in the response. This token can be used to retrieve the next page of results. </p> <p>Prerequisites:</p> <ul> <li> <p>The --domain-identifier must refer to an existing Amazon DataZone domain. </p> </li> <li> <p>--search-scope must be one of: ASSET, GLOSSARY_TERM, DATA_PRODUCT, or GLOSSARY.</p> </li> <li> <p>The user must have search permissions in the specified domain.</p> </li> <li> <p>If using --filters, ensure that the JSON is well-formed and that each filter includes valid attribute and value keys. </p> </li> <li> <p>For paginated results, be prepared to use --next-token to fetch additional pages.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // SearchInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchScope: "ASSET" || "GLOSSARY" || "GLOSSARY_TERM" || "DATA_PRODUCT", // required
 *   searchText: "STRING_VALUE",
 *   searchIn: [ // SearchInList
 *     { // SearchInItem
 *       attribute: "STRING_VALUE", // required
 *     },
 *   ],
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
 *   sort: { // SearchSort
 *     attribute: "STRING_VALUE", // required
 *     order: "ASCENDING" || "DESCENDING",
 *   },
 *   additionalAttributes: [ // SearchOutputAdditionalAttributes
 *     "FORMS" || "TIME_SERIES_DATA_POINT_FORMS" || "TEXT_MATCH_RATIONALE",
 *   ],
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchOutput
 * //   items: [ // SearchInventoryResultItems
 * //     { // SearchInventoryResultItem Union: only one key present
 * //       glossaryItem: { // GlossaryItem
 * //         domainId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         owningProjectId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         status: "DISABLED" || "ENABLED", // required
 * //         usageRestrictions: [ // GlossaryUsageRestrictions
 * //           "ASSET_GOVERNED_TERMS",
 * //         ],
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //         additionalAttributes: { // GlossaryItemAdditionalAttributes
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
 * //         },
 * //       },
 * //       glossaryTermItem: { // GlossaryTermItem
 * //         domainId: "STRING_VALUE", // required
 * //         glossaryId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         shortDescription: "STRING_VALUE",
 * //         usageRestrictions: [
 * //           "ASSET_GOVERNED_TERMS",
 * //         ],
 * //         longDescription: "STRING_VALUE",
 * //         termRelations: { // TermRelations
 * //           isA: [ // GlossaryTerms
 * //             "STRING_VALUE",
 * //           ],
 * //           classifies: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         status: "ENABLED" || "DISABLED", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //         additionalAttributes: { // GlossaryTermItemAdditionalAttributes
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
 * //       },
 * //       assetItem: { // AssetItem
 * //         domainId: "STRING_VALUE", // required
 * //         identifier: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         typeIdentifier: "STRING_VALUE", // required
 * //         typeRevision: "STRING_VALUE", // required
 * //         externalIdentifier: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //         firstRevisionCreatedBy: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           "STRING_VALUE",
 * //         ],
 * //         owningProjectId: "STRING_VALUE", // required
 * //         additionalAttributes: { // AssetItemAdditionalAttributes
 * //           formsOutput: [ // FormOutputList
 * //             { // FormOutput
 * //               formName: "STRING_VALUE", // required
 * //               typeName: "STRING_VALUE",
 * //               typeRevision: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //             },
 * //           ],
 * //           readOnlyFormsOutput: [
 * //             {
 * //               formName: "STRING_VALUE", // required
 * //               typeName: "STRING_VALUE",
 * //               typeRevision: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //             },
 * //           ],
 * //           latestTimeSeriesDataPointFormsOutput: [ // TimeSeriesDataPointSummaryFormOutputList
 * //             { // TimeSeriesDataPointSummaryFormOutput
 * //               formName: "STRING_VALUE", // required
 * //               typeIdentifier: "STRING_VALUE", // required
 * //               typeRevision: "STRING_VALUE",
 * //               timestamp: new Date("TIMESTAMP"), // required
 * //               contentSummary: "STRING_VALUE",
 * //               id: "STRING_VALUE",
 * //             },
 * //           ],
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
 * //         governedGlossaryTerms: [ // GovernedGlossaryTerms
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       dataProductItem: { // DataProductResultItem
 * //         domainId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         owningProjectId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           "STRING_VALUE",
 * //         ],
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //         firstRevisionCreatedBy: "STRING_VALUE",
 * //         additionalAttributes: { // DataProductItemAdditionalAttributes
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
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   totalMatchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
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
export class SearchCommand extends $Command
  .classBuilder<
    SearchCommandInput,
    SearchCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "Search", {})
  .n("DataZoneClient", "SearchCommand")
  .sc(Search)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchInput;
      output: SearchOutput;
    };
    sdk: {
      input: SearchCommandInput;
      output: SearchCommandOutput;
    };
  };
}
