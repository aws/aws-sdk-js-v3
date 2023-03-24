// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { QueryRequest, QueryResult } from "../models/models_1";
import { deserializeAws_json1_1QueryCommand, serializeAws_json1_1QueryCommand } from "../protocols/Aws_json1_1";

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
 * const input = {
 *   IndexId: "STRING_VALUE", // required
 *   QueryText: "STRING_VALUE",
 *   AttributeFilter: {
 *     AndAllFilters: [
 *       {
 *         AndAllFilters: [
 *           {
 *             AndAllFilters: "<AttributeFilter>",
 *             OrAllFilters: [
 *               "<AttributeFilterList>",
 *             ],
 *             NotFilter: {
 *               AndAllFilters: "<AttributeFilter>",
 *               OrAllFilters: [
 *                 "<AttributeFilterList>",
 *               ],
 *               NotFilter: {
 *                 AndAllFilters: "<AttributeFilter>",
 *                 OrAllFilters: "<AttributeFilter>",
 *                 NotFilter: "<AttributeFilter>",
 *                 EqualsTo: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 ContainsAll: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 ContainsAny: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 GreaterThan: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 GreaterThanOrEquals: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 LessThan: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 LessThanOrEquals: {
 *                   Key: "STRING_VALUE", // required
 *                   Value: {
 *                     StringValue: "STRING_VALUE",
 *                     StringListValue: [
 *                       "STRING_VALUE",
 *                     ],
 *                     LongValue: Number("long"),
 *                     DateValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *               },
 *               EqualsTo: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               ContainsAll: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               ContainsAny: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               GreaterThan: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               GreaterThanOrEquals: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               LessThan: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               LessThanOrEquals: {
 *                 Key: "STRING_VALUE", // required
 *                 Value: {
 *                   StringValue: "STRING_VALUE",
 *                   StringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   LongValue: Number("long"),
 *                   DateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *             },
 *             EqualsTo: "<AttributeFilter>",
 *             ContainsAll: "<AttributeFilter>",
 *             ContainsAny: "<AttributeFilter>",
 *             GreaterThan: "<AttributeFilter>",
 *             GreaterThanOrEquals: "<AttributeFilter>",
 *             LessThan: "<AttributeFilter>",
 *             LessThanOrEquals: "<AttributeFilter>",
 *           },
 *         ],
 *         OrAllFilters: "<AttributeFilter>",
 *         NotFilter: "<AttributeFilter>",
 *         EqualsTo: "<AttributeFilter>",
 *         ContainsAll: "<AttributeFilter>",
 *         ContainsAny: "<AttributeFilter>",
 *         GreaterThan: "<AttributeFilter>",
 *         GreaterThanOrEquals: "<AttributeFilter>",
 *         LessThan: "<AttributeFilter>",
 *         LessThanOrEquals: "<AttributeFilter>",
 *       },
 *     ],
 *     OrAllFilters: "<AttributeFilter>",
 *     NotFilter: "<AttributeFilter>",
 *     EqualsTo: "<AttributeFilter>",
 *     ContainsAll: "<AttributeFilter>",
 *     ContainsAny: "<AttributeFilter>",
 *     GreaterThan: "<AttributeFilter>",
 *     GreaterThanOrEquals: "<AttributeFilter>",
 *     LessThan: "<AttributeFilter>",
 *     LessThanOrEquals: "<AttributeFilter>",
 *   },
 *   Facets: [
 *     {
 *       DocumentAttributeKey: "STRING_VALUE",
 *       Facets: [
 *         {
 *           DocumentAttributeKey: "STRING_VALUE",
 *           Facets: [
 *             "<FacetList>",
 *           ],
 *           MaxResults: Number("int"),
 *         },
 *       ],
 *       MaxResults: Number("int"),
 *     },
 *   ],
 *   RequestedDocumentAttributes: [
 *     "STRING_VALUE",
 *   ],
 *   QueryResultTypeFilter: "DOCUMENT" || "QUESTION_ANSWER" || "ANSWER",
 *   DocumentRelevanceOverrideConfigurations: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Relevance: {
 *         Freshness: true || false,
 *         Importance: Number("int"),
 *         Duration: "STRING_VALUE",
 *         RankOrder: "ASCENDING" || "DESCENDING",
 *         ValueImportanceMap: {
 *           "<keys>": Number("int"),
 *         },
 *       },
 *     },
 *   ],
 *   PageNumber: Number("int"),
 *   PageSize: Number("int"),
 *   SortingConfiguration: {
 *     DocumentAttributeKey: "STRING_VALUE", // required
 *     SortOrder: "DESC" || "ASC", // required
 *   },
 *   UserContext: {
 *     Token: "STRING_VALUE",
 *     UserId: "STRING_VALUE",
 *     Groups: [
 *       "STRING_VALUE",
 *     ],
 *     DataSourceGroups: [
 *       {
 *         GroupId: "STRING_VALUE", // required
 *         DataSourceId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   VisitorId: "STRING_VALUE",
 *   SpellCorrectionConfiguration: {
 *     IncludeQuerySpellCheckSuggestions: true || false, // required
 *   },
 * };
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
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
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/aws.amazon.com/contact-us"> Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Kendra service. Please see
 *             Quotas[hyperlink Kendra Quotas pg] for more information, or contact <a href="http://aws.amazon.com/aws.amazon.com/contact-us"> Support</a> to inquire about
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
    return serializeAws_json1_1QueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return deserializeAws_json1_1QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
