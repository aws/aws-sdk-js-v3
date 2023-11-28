// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  QueryAssistantRequest,
  QueryAssistantRequestFilterSensitiveLog,
  QueryAssistantResponse,
  QueryAssistantResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_QueryAssistantCommand, se_QueryAssistantCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandInput extends QueryAssistantRequest {}
/**
 * @public
 *
 * The output of {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandOutput extends QueryAssistantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs a manual search against the specified assistant. To retrieve recommendations for
 *       an assistant, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, QueryAssistantCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, QueryAssistantCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // QueryAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 *   queryText: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sessionId: "STRING_VALUE",
 *   queryCondition: [ // QueryConditionExpression
 *     { // QueryCondition Union: only one key present
 *       single: { // QueryConditionItem
 *         field: "STRING_VALUE", // required
 *         comparator: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new QueryAssistantCommand(input);
 * const response = await client.send(command);
 * // { // QueryAssistantResponse
 * //   results: [ // QueryResultsList // required
 * //     { // ResultData
 * //       resultId: "STRING_VALUE", // required
 * //       document: { // Document
 * //         contentReference: { // ContentReference
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           contentArn: "STRING_VALUE",
 * //           contentId: "STRING_VALUE",
 * //         },
 * //         title: { // DocumentText
 * //           text: "STRING_VALUE",
 * //           highlights: [ // Highlights
 * //             { // Highlight
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         excerpt: {
 * //           text: "STRING_VALUE",
 * //           highlights: [
 * //             {
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       relevanceScore: Number("double"),
 * //       data: { // DataSummary
 * //         reference: { // DataReference Union: only one key present
 * //           contentReference: {
 * //             knowledgeBaseArn: "STRING_VALUE",
 * //             knowledgeBaseId: "STRING_VALUE",
 * //             contentArn: "STRING_VALUE",
 * //             contentId: "STRING_VALUE",
 * //           },
 * //           generativeReference: { // GenerativeReference
 * //             modelId: "STRING_VALUE",
 * //             generationId: "STRING_VALUE",
 * //           },
 * //         },
 * //         details: { // DataDetails Union: only one key present
 * //           contentData: { // ContentDataDetails
 * //             textData: { // TextData
 * //               title: {
 * //                 text: "STRING_VALUE",
 * //                 highlights: [
 * //                   {
 * //                     beginOffsetInclusive: Number("int"),
 * //                     endOffsetExclusive: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //               excerpt: {
 * //                 text: "STRING_VALUE",
 * //                 highlights: [
 * //                   {
 * //                     beginOffsetInclusive: Number("int"),
 * //                     endOffsetExclusive: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             rankingData: { // RankingData
 * //               relevanceScore: Number("double"),
 * //               relevanceLevel: "STRING_VALUE",
 * //             },
 * //           },
 * //           generativeData: { // GenerativeDataDetails
 * //             completion: "STRING_VALUE", // required
 * //             references: [ // DataSummaryList // required
 * //               {
 * //                 reference: {//  Union: only one key present
 * //                   contentReference: "<ContentReference>",
 * //                   generativeReference: {
 * //                     modelId: "STRING_VALUE",
 * //                     generationId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 details: {//  Union: only one key present
 * //                   contentData: {
 * //                     textData: {
 * //                       title: "<DocumentText>",
 * //                       excerpt: "<DocumentText>",
 * //                     },
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   generativeData: {
 * //                     completion: "STRING_VALUE", // required
 * //                     references: [ // required
 * //                       "<DataSummary>",
 * //                     ],
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   sourceContentData: { // SourceContentDataDetails
 * //                     id: "STRING_VALUE", // required
 * //                     type: "STRING_VALUE", // required
 * //                     textData: {
 * //                       title: "<DocumentText>",
 * //                       excerpt: "<DocumentText>",
 * //                     },
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             rankingData: {
 * //               relevanceScore: Number("double"),
 * //               relevanceLevel: "STRING_VALUE",
 * //             },
 * //           },
 * //           sourceContentData: {
 * //             id: "STRING_VALUE", // required
 * //             type: "STRING_VALUE", // required
 * //             textData: {
 * //               title: "<DocumentText>",
 * //               excerpt: "<DocumentText>",
 * //             },
 * //             rankingData: "<RankingData>", // required
 * //           },
 * //         },
 * //       },
 * //       type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryAssistantCommandInput - {@link QueryAssistantCommandInput}
 * @returns {@link QueryAssistantCommandOutput}
 * @see {@link QueryAssistantCommandInput} for command's `input` shape.
 * @see {@link QueryAssistantCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request reached the service more than 15 minutes after the date stamp on the request
 *       or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or
 *       the date stamp on the request is more than 15 minutes in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 */
export class QueryAssistantCommand extends $Command<
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
  QConnectClientResolvedConfig
> {
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
  constructor(readonly input: QueryAssistantCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryAssistantCommandInput, QueryAssistantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QueryAssistantCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "QueryAssistantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryAssistantRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryAssistantResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "QueryAssistant",
      },
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
  private serialize(input: QueryAssistantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryAssistantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryAssistantCommandOutput> {
    return de_QueryAssistantCommand(output, context);
  }
}
