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
  BatchDetectSyntaxRequest,
  BatchDetectSyntaxRequestFilterSensitiveLog,
  BatchDetectSyntaxResponse,
  BatchDetectSyntaxResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectSyntaxCommand, se_BatchDetectSyntaxCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectSyntaxCommand}.
 */
export interface BatchDetectSyntaxCommandInput extends BatchDetectSyntaxRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectSyntaxCommand}.
 */
export interface BatchDetectSyntaxCommandOutput extends BatchDetectSyntaxResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects the text of a batch of documents for the syntax and part of speech of the words
 *       in the document and returns information about them. For more information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectSyntaxRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt", // required
 * };
 * const command = new BatchDetectSyntaxCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectSyntaxResponse
 * //   ResultList: [ // ListOfDetectSyntaxResult // required
 * //     { // BatchDetectSyntaxItemResult
 * //       Index: Number("int"),
 * //       SyntaxTokens: [ // ListOfSyntaxTokens
 * //         { // SyntaxToken
 * //           TokenId: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           PartOfSpeech: { // PartOfSpeechTag
 * //             Tag: "ADJ" || "ADP" || "ADV" || "AUX" || "CONJ" || "CCONJ" || "DET" || "INTJ" || "NOUN" || "NUM" || "O" || "PART" || "PRON" || "PROPN" || "PUNCT" || "SCONJ" || "SYM" || "VERB",
 * //             Score: Number("float"),
 * //           },
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
 * @param BatchDetectSyntaxCommandInput - {@link BatchDetectSyntaxCommandInput}
 * @returns {@link BatchDetectSyntaxCommandOutput}
 * @see {@link BatchDetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link BatchDetectSyntaxCommandOutput} for command's `response` shape.
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
export class BatchDetectSyntaxCommand extends $Command<
  BatchDetectSyntaxCommandInput,
  BatchDetectSyntaxCommandOutput,
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
  constructor(readonly input: BatchDetectSyntaxCommandInput) {
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
  ): Handler<BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectSyntaxCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectSyntaxCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectSyntaxRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectSyntaxResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "BatchDetectSyntax",
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
  private serialize(input: BatchDetectSyntaxCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDetectSyntaxCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDetectSyntaxCommandOutput> {
    return de_BatchDetectSyntaxCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
