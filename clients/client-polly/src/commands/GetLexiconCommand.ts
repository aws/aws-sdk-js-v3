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

import { GetLexiconInput, GetLexiconOutput, GetLexiconOutputFilterSensitiveLog } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_GetLexiconCommand, se_GetLexiconCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandInput extends GetLexiconInput {}
/**
 * @public
 *
 * The output of {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandOutput extends GetLexiconOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the content of the specified pronunciation lexicon stored
 *       in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // GetLexiconInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetLexiconCommand(input);
 * const response = await client.send(command);
 * // { // GetLexiconOutput
 * //   Lexicon: { // Lexicon
 * //     Content: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   LexiconAttributes: { // LexiconAttributes
 * //     Alphabet: "STRING_VALUE",
 * //     LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE",
 * //     LastModified: new Date("TIMESTAMP"),
 * //     LexiconArn: "STRING_VALUE",
 * //     LexemesCount: Number("int"),
 * //     Size: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLexiconCommandInput - {@link GetLexiconCommandInput}
 * @returns {@link GetLexiconCommandOutput}
 * @see {@link GetLexiconCommandInput} for command's `input` shape.
 * @see {@link GetLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 * @example To retrieve a lexicon
 * ```javascript
 * // Returns the content of the specified pronunciation lexicon stored in an AWS Region.
 * const input = {
 *   "Name": ""
 * };
 * const command = new GetLexiconCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Lexicon": {
 *     "Content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<lexicon version=\"1.0\" \r\n      xmlns=\"http://www.w3.org/2005/01/pronunciation-lexicon\"\r\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n      xsi:schemaLocation=\"http://www.w3.org/2005/01/pronunciation-lexicon \r\n        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd\"\r\n      alphabet=\"ipa\" \r\n      xml:lang=\"en-US\">\r\n  <lexeme>\r\n    <grapheme>W3C</grapheme>\r\n    <alias>World Wide Web Consortium</alias>\r\n  </lexeme>\r\n</lexicon>",
 *     "Name": "example"
 *   },
 *   "LexiconAttributes": {
 *     "Alphabet": "ipa",
 *     "LanguageCode": "en-US",
 *     "LastModified": 1478542980.117,
 *     "LexemesCount": 1,
 *     "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
 *     "Size": 503
 *   }
 * }
 * *\/
 * // example id: to-retrieve-a-lexicon-1481912870836
 * ```
 *
 */
export class GetLexiconCommand extends $Command<
  GetLexiconCommandInput,
  GetLexiconCommandOutput,
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
  constructor(readonly input: GetLexiconCommandInput) {
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
  ): Handler<GetLexiconCommandInput, GetLexiconCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetLexiconCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "GetLexiconCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetLexiconOutputFilterSensitiveLog,
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
  private serialize(input: GetLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLexiconCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLexiconCommandOutput> {
    return de_GetLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
