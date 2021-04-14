import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeUtteranceRequest, RecognizeUtteranceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RecognizeUtteranceCommand,
  serializeAws_restJson1RecognizeUtteranceCommand,
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

export type RecognizeUtteranceCommandInput = Omit<RecognizeUtteranceRequest, "inputStream"> & {
  inputStream?: RecognizeUtteranceRequest["inputStream"] | string | Uint8Array | Buffer;
};
export type RecognizeUtteranceCommandOutput = RecognizeUtteranceResponse & __MetadataBearer;

/**
 * <p>Sends user input to Amazon Lex. You can send text or speech. Clients use
 *          this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex
 *          interprets the user input using the machine learning model built for
 *          the bot.</p>
 */
export class RecognizeUtteranceCommand extends $Command<
  RecognizeUtteranceCommandInput,
  RecognizeUtteranceCommandOutput,
  LexRuntimeV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecognizeUtteranceCommandInput) {
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
  ): Handler<RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "RecognizeUtteranceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeUtteranceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RecognizeUtteranceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecognizeUtteranceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RecognizeUtteranceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeUtteranceCommandOutput> {
    return deserializeAws_restJson1RecognizeUtteranceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
