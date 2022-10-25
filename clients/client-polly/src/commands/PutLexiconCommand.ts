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
  PutLexiconInput,
  PutLexiconInputFilterSensitiveLog,
  PutLexiconOutput,
  PutLexiconOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1PutLexiconCommand,
  serializeAws_restJson1PutLexiconCommand,
} from "../protocols/Aws_restJson1";

export interface PutLexiconCommandInput extends PutLexiconInput {}
export interface PutLexiconCommandOutput extends PutLexiconOutput, __MetadataBearer {}

/**
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
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLexiconCommandInput} for command's `input` shape.
 * @see {@link PutLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
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
      outputFilterSensitiveLog: PutLexiconOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutLexiconCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLexiconCommandOutput> {
    return deserializeAws_restJson1PutLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
