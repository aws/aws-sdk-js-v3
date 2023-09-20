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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectTargetedSentimentRequest,
  DetectTargetedSentimentRequestFilterSensitiveLog,
  DetectTargetedSentimentResponse,
  DetectTargetedSentimentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectTargetedSentimentCommand, se_DetectTargetedSentimentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectTargetedSentimentCommand}.
 */
export interface DetectTargetedSentimentCommandInput extends DetectTargetedSentimentRequest {}
/**
 * @public
 *
 * The output of {@link DetectTargetedSentimentCommand}.
 */
export interface DetectTargetedSentimentCommandOutput extends DetectTargetedSentimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectTargetedSentimentRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * // { // DetectTargetedSentimentResponse
 * //   Entities: [ // ListOfTargetedSentimentEntities
 * //     { // TargetedSentimentEntity
 * //       DescriptiveMentionIndex: [ // ListOfDescriptiveMentionIndices
 * //         Number("int"),
 * //       ],
 * //       Mentions: [ // ListOfMentions
 * //         { // TargetedSentimentMention
 * //           Score: Number("float"),
 * //           GroupScore: Number("float"),
 * //           Text: "STRING_VALUE",
 * //           Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "FACILITY" || "BRAND" || "COMMERCIAL_ITEM" || "MOVIE" || "MUSIC" || "BOOK" || "SOFTWARE" || "GAME" || "PERSONAL_TITLE" || "EVENT" || "DATE" || "QUANTITY" || "ATTRIBUTE" || "OTHER",
 * //           MentionSentiment: { // MentionSentiment
 * //             Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //             SentimentScore: { // SentimentScore
 * //               Positive: Number("float"),
 * //               Negative: Number("float"),
 * //               Neutral: Number("float"),
 * //               Mixed: Number("float"),
 * //             },
 * //           },
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectTargetedSentimentCommandInput - {@link DetectTargetedSentimentCommandInput}
 * @returns {@link DetectTargetedSentimentCommandOutput}
 * @see {@link DetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link DetectTargetedSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
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
export class DetectTargetedSentimentCommand extends $Command<
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
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
  constructor(readonly input: DetectTargetedSentimentCommandInput) {
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
  ): Handler<DetectTargetedSentimentCommandInput, DetectTargetedSentimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectTargetedSentimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectTargetedSentimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectTargetedSentimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectTargetedSentimentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DetectTargetedSentiment",
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
  private serialize(input: DetectTargetedSentimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectTargetedSentimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectTargetedSentimentCommandOutput> {
    return de_DetectTargetedSentimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
