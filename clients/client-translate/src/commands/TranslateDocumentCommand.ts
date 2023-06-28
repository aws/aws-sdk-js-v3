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

import {
  TranslateDocumentRequest,
  TranslateDocumentRequestFilterSensitiveLog,
  TranslateDocumentResponse,
  TranslateDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_TranslateDocumentCommand, se_TranslateDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TranslateDocumentCommand}.
 */
export interface TranslateDocumentCommandInput extends TranslateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link TranslateDocumentCommand}.
 */
export interface TranslateDocumentCommandOutput extends TranslateDocumentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Translates the input document from the source language to the target language.
 *       This synchronous operation supports plain text or HTML for the input document.
 *
 *       <code>TranslateDocument</code> supports translations from English to any supported language,
 *       and from any supported language to English. Therefore, specify either the source language code
 *       or the target language code as “en” (English).
 *     </p>
 *          <p>
 *             <code>TranslateDocument</code> does not support language auto-detection. </p>
 *          <p> If you set the <code>Formality</code> parameter, the request will fail if the target language does
 *        not support formality. For a list of target languages that support formality, see
 *        <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html">Setting formality</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateDocumentCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateDocumentCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // TranslateDocumentRequest
 *   Document: { // Document
 *     Content: "BLOB_VALUE", // required
 *     ContentType: "STRING_VALUE", // required
 *   },
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
 * const command = new TranslateDocumentCommand(input);
 * const response = await client.send(command);
 * // { // TranslateDocumentResponse
 * //   TranslatedDocument: { // TranslatedDocument
 * //     Content: "BLOB_VALUE", // required
 * //   },
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
 * @param TranslateDocumentCommandInput - {@link TranslateDocumentCommandInput}
 * @returns {@link TranslateDocumentCommandOutput}
 * @see {@link TranslateDocumentCommandInput} for command's `input` shape.
 * @see {@link TranslateDocumentCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
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
export class TranslateDocumentCommand extends $Command<
  TranslateDocumentCommandInput,
  TranslateDocumentCommandOutput,
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
  constructor(readonly input: TranslateDocumentCommandInput) {
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
  ): Handler<TranslateDocumentCommandInput, TranslateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TranslateDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "TranslateDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TranslateDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TranslateDocumentResponseFilterSensitiveLog,
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
  private serialize(input: TranslateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TranslateDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TranslateDocumentCommandOutput> {
    return de_TranslateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
