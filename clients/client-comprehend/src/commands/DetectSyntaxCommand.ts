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
  DetectSyntaxRequest,
  DetectSyntaxRequestFilterSensitiveLog,
  DetectSyntaxResponse,
  DetectSyntaxResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectSyntaxCommand, se_DetectSyntaxCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectSyntaxCommand}.
 */
export interface DetectSyntaxCommandInput extends DetectSyntaxRequest {}
/**
 * @public
 *
 * The output of {@link DetectSyntaxCommand}.
 */
export interface DetectSyntaxCommandOutput extends DetectSyntaxResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects text for syntax and the part of speech of words in the document. For more
 *       information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectSyntaxRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt", // required
 * };
 * const command = new DetectSyntaxCommand(input);
 * const response = await client.send(command);
 * // { // DetectSyntaxResponse
 * //   SyntaxTokens: [ // ListOfSyntaxTokens
 * //     { // SyntaxToken
 * //       TokenId: Number("int"),
 * //       Text: "STRING_VALUE",
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       PartOfSpeech: { // PartOfSpeechTag
 * //         Tag: "ADJ" || "ADP" || "ADV" || "AUX" || "CONJ" || "CCONJ" || "DET" || "INTJ" || "NOUN" || "NUM" || "O" || "PART" || "PRON" || "PROPN" || "PUNCT" || "SCONJ" || "SYM" || "VERB",
 * //         Score: Number("float"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectSyntaxCommandInput - {@link DetectSyntaxCommandInput}
 * @returns {@link DetectSyntaxCommandOutput}
 * @see {@link DetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link DetectSyntaxCommandOutput} for command's `response` shape.
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
export class DetectSyntaxCommand extends $Command<
  DetectSyntaxCommandInput,
  DetectSyntaxCommandOutput,
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
  constructor(readonly input: DetectSyntaxCommandInput) {
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
  ): Handler<DetectSyntaxCommandInput, DetectSyntaxCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DetectSyntaxCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectSyntaxCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectSyntaxRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectSyntaxResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DetectSyntax",
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
  private serialize(input: DetectSyntaxCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectSyntaxCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectSyntaxCommandOutput> {
    return de_DetectSyntaxCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
