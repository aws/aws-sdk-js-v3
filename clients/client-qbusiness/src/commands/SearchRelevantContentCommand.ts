// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchRelevantContentRequest, SearchRelevantContentResponse } from "../models/models_1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { SearchRelevantContent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchRelevantContentCommand}.
 */
export interface SearchRelevantContentCommandInput extends SearchRelevantContentRequest {}
/**
 * @public
 *
 * The output of {@link SearchRelevantContentCommand}.
 */
export interface SearchRelevantContentCommandOutput extends SearchRelevantContentResponse, __MetadataBearer {}

/**
 * <p>Searches for relevant content in a Amazon Q Business application based on a query. This operation takes a search query text, the Amazon Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, SearchRelevantContentCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, SearchRelevantContentCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // SearchRelevantContentRequest
 *   applicationId: "STRING_VALUE", // required
 *   queryText: "STRING_VALUE", // required
 *   contentSource: { // ContentSource Union: only one key present
 *     retriever: { // RetrieverContentSource
 *       retrieverId: "STRING_VALUE", // required
 *     },
 *   },
 *   attributeFilter: { // AttributeFilter
 *     andAllFilters: [ // AttributeFilters
 *       {
 *         andAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         orAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         notFilter: "<AttributeFilter>",
 *         equalsTo: { // DocumentAttribute
 *           name: "STRING_VALUE", // required
 *           value: { // DocumentAttributeValue Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         containsAll: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         containsAny: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         greaterThan: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         greaterThanOrEquals: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         lessThan: "<DocumentAttribute>",
 *         lessThanOrEquals: "<DocumentAttribute>",
 *       },
 *     ],
 *     orAllFilters: [
 *       "<AttributeFilter>",
 *     ],
 *     notFilter: "<AttributeFilter>",
 *     equalsTo: "<DocumentAttribute>",
 *     containsAll: "<DocumentAttribute>",
 *     containsAny: "<DocumentAttribute>",
 *     greaterThan: "<DocumentAttribute>",
 *     greaterThanOrEquals: "<DocumentAttribute>",
 *     lessThan: "<DocumentAttribute>",
 *     lessThanOrEquals: "<DocumentAttribute>",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchRelevantContentCommand(input);
 * const response = await client.send(command);
 * // { // SearchRelevantContentResponse
 * //   relevantContent: [ // RelevantContentList
 * //     { // RelevantContent
 * //       content: "STRING_VALUE",
 * //       documentId: "STRING_VALUE",
 * //       documentTitle: "STRING_VALUE",
 * //       documentUri: "STRING_VALUE",
 * //       documentAttributes: [ // DocumentAttributes
 * //         { // DocumentAttribute
 * //           name: "STRING_VALUE", // required
 * //           value: { // DocumentAttributeValue Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             stringListValue: [ // DocumentAttributeStringListValue
 * //               "STRING_VALUE",
 * //             ],
 * //             longValue: Number("long"),
 * //             dateValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       ],
 * //       scoreAttributes: { // ScoreAttributes
 * //         scoreConfidence: "VERY_HIGH" || "HIGH" || "MEDIUM" || "LOW" || "NOT_AVAILABLE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchRelevantContentCommandInput - {@link SearchRelevantContentCommandInput}
 * @returns {@link SearchRelevantContentCommandOutput}
 * @see {@link SearchRelevantContentCommandInput} for command's `input` shape.
 * @see {@link SearchRelevantContentCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class SearchRelevantContentCommand extends $Command
  .classBuilder<
    SearchRelevantContentCommandInput,
    SearchRelevantContentCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "SearchRelevantContent", {})
  .n("QBusinessClient", "SearchRelevantContentCommand")
  .sc(SearchRelevantContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRelevantContentRequest;
      output: SearchRelevantContentResponse;
    };
    sdk: {
      input: SearchRelevantContentCommandInput;
      output: SearchRelevantContentCommandOutput;
    };
  };
}
