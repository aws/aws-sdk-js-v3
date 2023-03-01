// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetLexiconInput,
  GetLexiconInputFilterSensitiveLog,
  GetLexiconOutput,
  GetLexiconOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1GetLexiconCommand,
  serializeAws_restJson1GetLexiconCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandInput extends GetLexiconInput {}
/**
 * The output of {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandOutput extends GetLexiconOutput, __MetadataBearer {}

/**
 * <p>Returns the content of the specified pronunciation lexicon stored
 *       in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new GetLexiconCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLexiconCommandInput} for command's `input` shape.
 * @see {@link GetLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
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
      inputFilterSensitiveLog: GetLexiconInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetLexiconOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLexiconCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLexiconCommandOutput> {
    return deserializeAws_restJson1GetLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
