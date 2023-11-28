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
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRecommendationsCommand, se_GetRecommendationsCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves recommendations for the specified session. To avoid retrieving the same
 *       recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the
 *         <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns
 *       recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetRecommendationsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetRecommendationsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // GetRecommendationsRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   waitTimeSeconds: Number("int"),
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   recommendations: [ // RecommendationList // required
 * //     { // RecommendationData
 * //       recommendationId: "STRING_VALUE", // required
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
 * //       relevanceLevel: "STRING_VALUE",
 * //       type: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   triggers: [ // RecommendationTriggerList
 * //     { // RecommendationTrigger
 * //       id: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       data: { // RecommendationTriggerData Union: only one key present
 * //         query: { // QueryRecommendationTriggerData
 * //           text: "STRING_VALUE",
 * //         },
 * //       },
 * //       recommendationIds: [ // RecommendationIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetRecommendationsCommand extends $Command<
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
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
  constructor(readonly input: GetRecommendationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "GetRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetRecommendationsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "GetRecommendations",
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
  private serialize(input: GetRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecommendationsCommandOutput> {
    return de_GetRecommendationsCommand(output, context);
  }
}
