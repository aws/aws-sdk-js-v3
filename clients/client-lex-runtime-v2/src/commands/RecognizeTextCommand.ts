import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeTextRequest, RecognizeTextResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RecognizeTextCommand,
  serializeAws_restJson1RecognizeTextCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface RecognizeTextCommandInput extends RecognizeTextRequest {}
export interface RecognizeTextCommandOutput extends RecognizeTextResponse, __MetadataBearer {}

/**
 * <p>Sends user input to Amazon Lex V2. Client applications use this API to send
 *          requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex V2 returns the next message to convey to the user
 *          and an optional response card to display.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RecognizeTextCommand extends $Command<
  RecognizeTextCommandInput,
  RecognizeTextCommandOutput,
  LexRuntimeV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecognizeTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecognizeTextCommandInput, RecognizeTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "RecognizeTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RecognizeTextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecognizeTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RecognizeTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeTextCommandOutput> {
    return deserializeAws_restJson1RecognizeTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
