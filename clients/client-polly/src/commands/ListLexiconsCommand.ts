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

import { ListLexiconsInput, ListLexiconsOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_ListLexiconsCommand, se_ListLexiconsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLexiconsCommand}.
 */
export interface ListLexiconsCommandInput extends ListLexiconsInput {}
/**
 * @public
 *
 * The output of {@link ListLexiconsCommand}.
 */
export interface ListLexiconsCommandOutput extends ListLexiconsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListLexiconsCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListLexiconsCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // ListLexiconsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * // { // ListLexiconsOutput
 * //   Lexicons: [ // LexiconDescriptionList
 * //     { // LexiconDescription
 * //       Name: "STRING_VALUE",
 * //       Attributes: { // LexiconAttributes
 * //         Alphabet: "STRING_VALUE",
 * //         LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
 * //         LastModified: new Date("TIMESTAMP"),
 * //         LexiconArn: "STRING_VALUE",
 * //         LexemesCount: Number("int"),
 * //         Size: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLexiconsCommandInput - {@link ListLexiconsCommandInput}
 * @returns {@link ListLexiconsCommandOutput}
 * @see {@link ListLexiconsCommandInput} for command's `input` shape.
 * @see {@link ListLexiconsCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The NextToken is invalid. Verify that it's spelled correctly, and
 *       then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 * @example To list all lexicons in a region
 * ```javascript
 * // Returns a list of pronunciation lexicons stored in an AWS Region.
 * const input = {};
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Lexicons": [
 *     {
 *       "Attributes": {
 *         "Alphabet": "ipa",
 *         "LanguageCode": "en-US",
 *         "LastModified": 1478542980.117,
 *         "LexemesCount": 1,
 *         "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
 *         "Size": 503
 *       },
 *       "Name": "example"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-all-lexicons-in-a-region-1481842106487
 * ```
 *
 */
export class ListLexiconsCommand extends $Command<
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput,
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
  constructor(readonly input: ListLexiconsCommandInput) {
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
  ): Handler<ListLexiconsCommandInput, ListLexiconsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLexiconsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListLexiconsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Parrot_v1",
        operation: "ListLexicons",
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
  private serialize(input: ListLexiconsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLexiconsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLexiconsCommandOutput> {
    return de_ListLexiconsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
