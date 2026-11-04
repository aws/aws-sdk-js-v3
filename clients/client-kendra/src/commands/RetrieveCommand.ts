// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetrieveRequest, RetrieveResult } from "../models/models_0";
import { Retrieve$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetrieveCommand}.
 */
export interface RetrieveCommandInput extends RetrieveRequest {}
/**
 * @public
 *
 * The output of {@link RetrieveCommand}.
 */
export interface RetrieveCommandOutput extends RetrieveResult, __MetadataBearer {}

/**
 * Retrieves relevant passages or text excerpts given an input query.
 *
 * This API is similar to the [Query](https://docs.aws.amazon.com/kendra/latest/APIReference/API_Query.html) API. However, by default, the `Query` API only returns excerpt passages of up to 100 token words. With the `Retrieve` API, you can retrieve longer passages of up to 200 token words and up to 100 semantically relevant passages. This doesn't include question-answer or FAQ type responses from your index. The passages are text excerpts that can be semantically extracted from multiple documents and multiple parts of the same document. If in extreme cases your documents produce zero passages using the `Retrieve` API, you can alternatively use the `Query` API and its types of responses.
 *
 * You can also do the following:
 *
 * - Override boosting at the index level
 * - Filter based on document fields or attributes
 * - Filter based on the user or their group access to documents
 * - View the confidence score bucket for a retrieved passage result. The confidence bucket provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query.
 *
 *   > **Note:** Confidence score buckets are currently available only for English.
 *
 * You can also include certain fields in the response that might provide useful additional information.
 *
 * The `Retrieve` API shares the number of [query capacity units](https://docs.aws.amazon.com/kendra/latest/APIReference/API_CapacityUnitsConfiguration.html) that you set for your index. For more information on what's included in a single capacity unit and the default base capacity for an index, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html).
 *
 * > **Important:** If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use `ATTRIBUTE_FILTER` to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use `USER_TOKEN` to configure user context policy, Amazon Kendra returns a `ValidationException` error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, RetrieveCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, RetrieveCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // RetrieveRequest
 *   IndexId: "STRING_VALUE", // required
 *   QueryText: "STRING_VALUE", // required
 *   AttributeFilter: { // AttributeFilter
 *     AndAllFilters: [ // AttributeFilterList
 *       {
 *         AndAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         OrAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         NotFilter: "<AttributeFilter>",
 *         EqualsTo: { // DocumentAttribute
 *           Key: "STRING_VALUE", // required
 *           Value: { // DocumentAttributeValue
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAll: {
 *           Key: "STRING_VALUE", // required
 *           Value: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAny: {
 *           Key: "STRING_VALUE", // required
 *           Value: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThan: {
 *           Key: "STRING_VALUE", // required
 *           Value: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThanOrEquals: {
 *           Key: "STRING_VALUE", // required
 *           Value: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         LessThan: "<DocumentAttribute>",
 *         LessThanOrEquals: "<DocumentAttribute>",
 *       },
 *     ],
 *     OrAllFilters: [
 *       "<AttributeFilter>",
 *     ],
 *     NotFilter: "<AttributeFilter>",
 *     EqualsTo: "<DocumentAttribute>",
 *     ContainsAll: "<DocumentAttribute>",
 *     ContainsAny: "<DocumentAttribute>",
 *     GreaterThan: "<DocumentAttribute>",
 *     GreaterThanOrEquals: "<DocumentAttribute>",
 *     LessThan: "<DocumentAttribute>",
 *     LessThanOrEquals: "<DocumentAttribute>",
 *   },
 *   RequestedDocumentAttributes: [ // DocumentAttributeKeyList
 *     "STRING_VALUE",
 *   ],
 *   DocumentRelevanceOverrideConfigurations: [ // DocumentRelevanceOverrideConfigurationList
 *     { // DocumentRelevanceConfiguration
 *       Name: "STRING_VALUE", // required
 *       Relevance: { // Relevance
 *         Freshness: true || false,
 *         Importance: Number("int"),
 *         Duration: "STRING_VALUE",
 *         RankOrder: "ASCENDING" || "DESCENDING",
 *         ValueImportanceMap: { // ValueImportanceMap
 *           "<keys>": Number("int"),
 *         },
 *       },
 *     },
 *   ],
 *   PageNumber: Number("int"),
 *   PageSize: Number("int"),
 *   UserContext: { // UserContext
 *     Token: "STRING_VALUE",
 *     UserId: "STRING_VALUE",
 *     Groups: [ // Groups
 *       "STRING_VALUE",
 *     ],
 *     DataSourceGroups: [ // DataSourceGroups
 *       { // DataSourceGroup
 *         GroupId: "STRING_VALUE", // required
 *         DataSourceId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new RetrieveCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveResult
 * //   QueryId: "STRING_VALUE",
 * //   ResultItems: [ // RetrieveResultItemList
 * //     { // RetrieveResultItem
 * //       Id: "STRING_VALUE",
 * //       DocumentId: "STRING_VALUE",
 * //       DocumentTitle: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       DocumentURI: "STRING_VALUE",
 * //       DocumentAttributes: [ // DocumentAttributeList
 * //         { // DocumentAttribute
 * //           Key: "STRING_VALUE", // required
 * //           Value: { // DocumentAttributeValue
 * //             StringValue: "STRING_VALUE",
 * //             StringListValue: [ // DocumentAttributeStringListValue
 * //               "STRING_VALUE",
 * //             ],
 * //             LongValue: Number("long"),
 * //             DateValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       ],
 * //       ScoreAttributes: { // ScoreAttributes
 * //         ScoreConfidence: "VERY_HIGH" || "HIGH" || "MEDIUM" || "LOW" || "NOT_AVAILABLE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RetrieveCommandInput - {@link RetrieveCommandInput}
 * @returns {@link RetrieveCommandOutput}
 * @see {@link RetrieveCommandInput} for command's `input` shape.
 * @see {@link RetrieveCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Please ensure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred with the request. Please fix any inconsistences with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Kendra service. Please wait a few minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you want to use doesn’t exist. Please check you have provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the set limits for your Amazon Kendra service. Please see [Quotas](https://docs.aws.amazon.com/kendra/latest/dg/quotas.html) for more information, or contact [Support](http://aws.amazon.com/contact-us/) to inquire about an increase of limits.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the Amazon Kendra service. Please provide the correct input and try again.
 *
 * @throws {@link KendraServiceException}
 *
 * Base exception class for all service exceptions from Kendra service.
 *
 * @public
 */
export class RetrieveCommand extends command<RetrieveCommandInput, RetrieveCommandOutput>(
  _ep0,
  _mw0,
  "Retrieve",
  Retrieve$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveRequest;
      output: RetrieveResult;
    };
    sdk: {
      input: RetrieveCommandInput;
      output: RetrieveCommandOutput;
    };
  };
}
