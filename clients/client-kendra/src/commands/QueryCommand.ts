// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { QueryRequest, QueryResult } from "../models/models_1";
import { de_QueryCommand, se_QueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryCommand}.
 */
export interface QueryCommandInput extends QueryRequest {}
/**
 * @public
 *
 * The output of {@link QueryCommand}.
 */
export interface QueryCommandOutput extends QueryResult, __MetadataBearer {}

/**
 * @public
 * <p>Searches an active index. Use this API to search your documents using query. The
 *             <code>Query</code> API enables to do faceted search and to filter results based on
 *          document attributes.</p>
 *          <p>It also enables you to provide user context that Amazon Kendra uses to enforce
 *          document access control in the search results.</p>
 *          <p>Amazon Kendra searches your index for text content and question and answer (FAQ)
 *          content. By default the response contains three types of results.</p>
 *          <ul>
 *             <li>
 *                <p>Relevant passages</p>
 *             </li>
 *             <li>
 *                <p>Matching FAQs</p>
 *             </li>
 *             <li>
 *                <p>Relevant documents</p>
 *             </li>
 *          </ul>
 *          <p>You can specify that the query return only one type of result using the
 *             <code>QueryResultTypeFilter</code> parameter.</p>
 *          <p>Each query returns the 100 most relevant results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, QueryCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, QueryCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // QueryRequest
 *   IndexId: "STRING_VALUE", // required
 *   QueryText: "STRING_VALUE",
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
 *   Facets: [ // FacetList
 *     { // Facet
 *       DocumentAttributeKey: "STRING_VALUE",
 *       Facets: [
 *         {
 *           DocumentAttributeKey: "STRING_VALUE",
 *           Facets: "<FacetList>",
 *           MaxResults: Number("int"),
 *         },
 *       ],
 *       MaxResults: Number("int"),
 *     },
 *   ],
 *   RequestedDocumentAttributes: [ // DocumentAttributeKeyList
 *     "STRING_VALUE",
 *   ],
 *   QueryResultTypeFilter: "DOCUMENT" || "QUESTION_ANSWER" || "ANSWER",
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
 *   SortingConfiguration: { // SortingConfiguration
 *     DocumentAttributeKey: "STRING_VALUE", // required
 *     SortOrder: "DESC" || "ASC", // required
 *   },
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
 *   VisitorId: "STRING_VALUE",
 *   SpellCorrectionConfiguration: { // SpellCorrectionConfiguration
 *     IncludeQuerySpellCheckSuggestions: true || false, // required
 *   },
 * };
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * // { // QueryResult
 * //   QueryId: "STRING_VALUE",
 * //   ResultItems: [ // QueryResultItemList
 * //     { // QueryResultItem
 * //       Id: "STRING_VALUE",
 * //       Type: "DOCUMENT" || "QUESTION_ANSWER" || "ANSWER",
 * //       Format: "TABLE" || "TEXT",
 * //       AdditionalAttributes: [ // AdditionalResultAttributeList
 * //         { // AdditionalResultAttribute
 * //           Key: "STRING_VALUE", // required
 * //           ValueType: "TEXT_WITH_HIGHLIGHTS_VALUE", // required
 * //           Value: { // AdditionalResultAttributeValue
 * //             TextWithHighlightsValue: { // TextWithHighlights
 * //               Text: "STRING_VALUE",
 * //               Highlights: [ // HighlightList
 * //                 { // Highlight
 * //                   BeginOffset: Number("int"), // required
 * //                   EndOffset: Number("int"), // required
 * //                   TopAnswer: true || false,
 * //                   Type: "STANDARD" || "THESAURUS_SYNONYM",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       DocumentId: "STRING_VALUE",
 * //       DocumentTitle: {
 * //         Text: "STRING_VALUE",
 * //         Highlights: [
 * //           {
 * //             BeginOffset: Number("int"), // required
 * //             EndOffset: Number("int"), // required
 * //             TopAnswer: true || false,
 * //             Type: "STANDARD" || "THESAURUS_SYNONYM",
 * //           },
 * //         ],
 * //       },
 * //       DocumentExcerpt: {
 * //         Text: "STRING_VALUE",
 * //         Highlights: [
 * //           {
 * //             BeginOffset: Number("int"), // required
 * //             EndOffset: Number("int"), // required
 * //             TopAnswer: true || false,
 * //             Type: "STANDARD" || "THESAURUS_SYNONYM",
 * //           },
 * //         ],
 * //       },
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
 * //       FeedbackToken: "STRING_VALUE",
 * //       TableExcerpt: { // TableExcerpt
 * //         Rows: [ // TableRowList
 * //           { // TableRow
 * //             Cells: [ // TableCellList
 * //               { // TableCell
 * //                 Value: "STRING_VALUE",
 * //                 TopAnswer: true || false,
 * //                 Highlighted: true || false,
 * //                 Header: true || false,
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         TotalNumberOfRows: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   FacetResults: [ // FacetResultList
 * //     { // FacetResult
 * //       DocumentAttributeKey: "STRING_VALUE",
 * //       DocumentAttributeValueType: "STRING_VALUE" || "STRING_LIST_VALUE" || "LONG_VALUE" || "DATE_VALUE",
 * //       DocumentAttributeValueCountPairs: [ // DocumentAttributeValueCountPairList
 * //         { // DocumentAttributeValueCountPair
 * //           DocumentAttributeValue: {
 * //             StringValue: "STRING_VALUE",
 * //             StringListValue: [
 * //               "STRING_VALUE",
 * //             ],
 * //             LongValue: Number("long"),
 * //             DateValue: new Date("TIMESTAMP"),
 * //           },
 * //           Count: Number("int"),
 * //           FacetResults: [
 * //             {
 * //               DocumentAttributeKey: "STRING_VALUE",
 * //               DocumentAttributeValueType: "STRING_VALUE" || "STRING_LIST_VALUE" || "LONG_VALUE" || "DATE_VALUE",
 * //               DocumentAttributeValueCountPairs: [
 * //                 {
 * //                   DocumentAttributeValue: {
 * //                     StringValue: "STRING_VALUE",
 * //                     StringListValue: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     LongValue: Number("long"),
 * //                     DateValue: new Date("TIMESTAMP"),
 * //                   },
 * //                   Count: Number("int"),
 * //                   FacetResults: "<FacetResultList>",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   TotalNumberOfResults: Number("int"),
 * //   Warnings: [ // WarningList
 * //     { // Warning
 * //       Message: "STRING_VALUE",
 * //       Code: "QUERY_LANGUAGE_INVALID_SYNTAX",
 * //     },
 * //   ],
 * //   SpellCorrectedQueries: [ // SpellCorrectedQueryList
 * //     { // SpellCorrectedQuery
 * //       SuggestedQueryText: "STRING_VALUE",
 * //       Corrections: [ // CorrectionList
 * //         { // Correction
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           Term: "STRING_VALUE",
 * //           CorrectedTerm: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   FeaturedResultsItems: [ // FeaturedResultsItemList
 * //     { // FeaturedResultsItem
 * //       Id: "STRING_VALUE",
 * //       Type: "DOCUMENT" || "QUESTION_ANSWER" || "ANSWER",
 * //       AdditionalAttributes: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           ValueType: "TEXT_WITH_HIGHLIGHTS_VALUE", // required
 * //           Value: {
 * //             TextWithHighlightsValue: {
 * //               Text: "STRING_VALUE",
 * //               Highlights: [
 * //                 {
 * //                   BeginOffset: Number("int"), // required
 * //                   EndOffset: Number("int"), // required
 * //                   TopAnswer: true || false,
 * //                   Type: "STANDARD" || "THESAURUS_SYNONYM",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       DocumentId: "STRING_VALUE",
 * //       DocumentTitle: {
 * //         Text: "STRING_VALUE",
 * //         Highlights: [
 * //           {
 * //             BeginOffset: Number("int"), // required
 * //             EndOffset: Number("int"), // required
 * //             TopAnswer: true || false,
 * //             Type: "STANDARD" || "THESAURUS_SYNONYM",
 * //           },
 * //         ],
 * //       },
 * //       DocumentExcerpt: "<TextWithHighlights>",
 * //       DocumentURI: "STRING_VALUE",
 * //       DocumentAttributes: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: {
 * //             StringValue: "STRING_VALUE",
 * //             StringListValue: [
 * //               "STRING_VALUE",
 * //             ],
 * //             LongValue: Number("long"),
 * //             DateValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       ],
 * //       FeedbackToken: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param QueryCommandInput - {@link QueryCommandInput}
 * @returns {@link QueryCommandOutput}
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Kendra service. Please see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a> for
 *             more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, KendraClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: QueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return de_QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
