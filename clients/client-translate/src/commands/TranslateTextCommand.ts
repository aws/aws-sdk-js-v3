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

import { TranslateTextRequest, TranslateTextResponse } from "../models/models_0";
import { de_TranslateTextCommand, se_TranslateTextCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TranslateTextCommand}.
 */
export interface TranslateTextCommandInput extends TranslateTextRequest {}
/**
 * @public
 *
 * The output of {@link TranslateTextCommand}.
 */
export interface TranslateTextCommandOutput extends TranslateTextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // TranslateTextRequest
 *   Text: "STRING_VALUE", // required
 *   TerminologyNames: [ // ResourceNameList
 *     "STRING_VALUE",
 *   ],
 *   SourceLanguageCode: "STRING_VALUE", // required
 *   TargetLanguageCode: "STRING_VALUE", // required
 *   Settings: { // TranslationSettings
 *     Formality: "FORMAL" || "INFORMAL",
 *     Profanity: "MASK",
 *   },
 * };
 * const command = new TranslateTextCommand(input);
 * const response = await client.send(command);
 * // { // TranslateTextResponse
 * //   TranslatedText: "STRING_VALUE", // required
 * //   SourceLanguageCode: "STRING_VALUE", // required
 * //   TargetLanguageCode: "STRING_VALUE", // required
 * //   AppliedTerminologies: [ // AppliedTerminologyList
 * //     { // AppliedTerminology
 * //       Name: "STRING_VALUE",
 * //       Terms: [ // TermList
 * //         { // Term
 * //           SourceText: "STRING_VALUE",
 * //           TargetText: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   AppliedSettings: { // TranslationSettings
 * //     Formality: "FORMAL" || "INFORMAL",
 * //     Profanity: "MASK",
 * //   },
 * // };
 *
 * ```
 *
 * @param TranslateTextCommandInput - {@link TranslateTextCommandInput}
 * @returns {@link TranslateTextCommandOutput}
 * @see {@link TranslateTextCommandInput} for command's `input` shape.
 * @see {@link TranslateTextCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link DetectedLanguageLowConfidenceException} (client fault)
 *  <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a
 *       low confidence level is acceptable for your application, you can use the language in the
 *       exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer
 *         Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The Amazon Translate service is temporarily unavailable. Wait a bit and then retry your
 *       request.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link UnsupportedLanguagePairException} (client fault)
 *  <p>Amazon Translate does not support translation from the language of the source text into the requested
 *       target language. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>. </p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class TranslateTextCommand extends $Command<
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
  TranslateClientResolvedConfig
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
  constructor(readonly input: TranslateTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TranslateTextCommandInput, TranslateTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TranslateTextCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "TranslateTextCommand";
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
  private serialize(input: TranslateTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TranslateTextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TranslateTextCommandOutput> {
    return de_TranslateTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
