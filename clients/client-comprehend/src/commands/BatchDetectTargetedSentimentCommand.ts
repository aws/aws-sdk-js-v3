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
} from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  BatchDetectTargetedSentimentRequest,
  BatchDetectTargetedSentimentRequestFilterSensitiveLog,
  BatchDetectTargetedSentimentResponse,
  BatchDetectTargetedSentimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_BatchDetectTargetedSentimentCommand,
  se_BatchDetectTargetedSentimentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectTargetedSentimentCommand}.
 */
export interface BatchDetectTargetedSentimentCommandInput extends BatchDetectTargetedSentimentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectTargetedSentimentCommand}.
 */
export interface BatchDetectTargetedSentimentCommandOutput
  extends BatchDetectTargetedSentimentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Inspects a batch of documents and returns a sentiment analysis
 *       for each entity identified in the documents.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectTargetedSentimentRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectTargetedSentimentResponse
 * //   ResultList: [ // ListOfDetectTargetedSentimentResult // required
 * //     { // BatchDetectTargetedSentimentItemResult
 * //       Index: Number("int"),
 * //       Entities: [ // ListOfTargetedSentimentEntities
 * //         { // TargetedSentimentEntity
 * //           DescriptiveMentionIndex: [ // ListOfDescriptiveMentionIndices
 * //             Number("int"),
 * //           ],
 * //           Mentions: [ // ListOfMentions
 * //             { // TargetedSentimentMention
 * //               Score: Number("float"),
 * //               GroupScore: Number("float"),
 * //               Text: "STRING_VALUE",
 * //               Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "FACILITY" || "BRAND" || "COMMERCIAL_ITEM" || "MOVIE" || "MUSIC" || "BOOK" || "SOFTWARE" || "GAME" || "PERSONAL_TITLE" || "EVENT" || "DATE" || "QUANTITY" || "ATTRIBUTE" || "OTHER",
 * //               MentionSentiment: { // MentionSentiment
 * //                 Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //                 SentimentScore: { // SentimentScore
 * //                   Positive: Number("float"),
 * //                   Negative: Number("float"),
 * //                   Neutral: Number("float"),
 * //                   Mixed: Number("float"),
 * //                 },
 * //               },
 * //               BeginOffset: Number("int"),
 * //               EndOffset: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ErrorList: [ // BatchItemErrorList // required
 * //     { // BatchItemError
 * //       Index: Number("int"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDetectTargetedSentimentCommandInput - {@link BatchDetectTargetedSentimentCommandInput}
 * @returns {@link BatchDetectTargetedSentimentCommandOutput}
 * @see {@link BatchDetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link BatchDetectTargetedSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link BatchSizeLimitExceededException} (client fault)
 *  <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class BatchDetectTargetedSentimentCommand extends $Command<
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
  ComprehendClientResolvedConfig
> {
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
  constructor(readonly input: BatchDetectTargetedSentimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDetectTargetedSentimentCommandInput, BatchDetectTargetedSentimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectTargetedSentimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectTargetedSentimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectTargetedSentimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectTargetedSentimentResponseFilterSensitiveLog,
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
  private serialize(input: BatchDetectTargetedSentimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDetectTargetedSentimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetectTargetedSentimentCommandOutput> {
    return de_BatchDetectTargetedSentimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
