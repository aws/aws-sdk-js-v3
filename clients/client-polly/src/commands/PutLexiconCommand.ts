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

import { PutLexiconInput, PutLexiconInputFilterSensitiveLog, PutLexiconOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_PutLexiconCommand, se_PutLexiconCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandInput extends PutLexiconInput {}
/**
 * @public
 *
 * The output of {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandOutput extends PutLexiconOutput, __MetadataBearer {}

/**
 * @public
 * <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If
 *       a lexicon with the same name already exists in the region, it is
 *       overwritten by the new lexicon. Lexicon operations have eventual
 *       consistency, therefore, it might take some time before the lexicon is
 *       available to the SynthesizeSpeech operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, PutLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, PutLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // PutLexiconInput
 *   Name: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 * };
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLexiconCommandInput - {@link PutLexiconCommandInput}
 * @returns {@link PutLexiconCommandOutput}
 * @see {@link PutLexiconCommandInput} for command's `input` shape.
 * @see {@link PutLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidLexiconException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's
 *       name is spelled correctly, and then try again.</p>
 *
 * @throws {@link LexiconSizeExceededException} (client fault)
 *  <p>The maximum size of the specified lexicon would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link MaxLexemeLengthExceededException} (client fault)
 *  <p>The maximum size of the lexeme would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link MaxLexiconsNumberExceededException} (client fault)
 *  <p>The maximum number of lexicons would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link UnsupportedPlsAlphabetException} (client fault)
 *  <p>The alphabet specified by the lexicon is not a supported alphabet.
 *       Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 *
 * @throws {@link UnsupportedPlsLanguageException} (client fault)
 *  <p>The language specified in the lexicon is unsupported. For a list of
 *       supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 * @example To save a lexicon
 * ```javascript
 * // Stores a pronunciation lexicon in an AWS Region.
 * const input = {
 *   "Content": "file://example.pls",
 *   "Name": "W3C"
 * };
 * const command = new PutLexiconCommand(input);
 * await client.send(command);
 * // example id: to-save-a-lexicon-1482272584088
 * ```
 *
 */
export class PutLexiconCommand extends $Command<
  PutLexiconCommandInput,
  PutLexiconCommandOutput,
  PollyClientResolvedConfig
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
  constructor(readonly input: PutLexiconCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLexiconCommandInput, PutLexiconCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutLexiconCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "PutLexiconCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLexiconInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Parrot_v1",
        operation: "PutLexicon",
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
  private serialize(input: PutLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutLexiconCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLexiconCommandOutput> {
    return de_PutLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
