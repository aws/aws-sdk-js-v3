import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StartSpeechSynthesisTaskCommand,
  serializeAws_restJson1StartSpeechSynthesisTaskCommand,
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

export type StartSpeechSynthesisTaskCommandInput = StartSpeechSynthesisTaskInput;
export type StartSpeechSynthesisTaskCommandOutput = StartSpeechSynthesisTaskOutput & __MetadataBearer;

export class StartSpeechSynthesisTaskCommand extends $Command<
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSpeechSynthesisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "StartSpeechSynthesisTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSpeechSynthesisTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartSpeechSynthesisTaskOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSpeechSynthesisTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSpeechSynthesisTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSpeechSynthesisTaskCommandOutput> {
    return deserializeAws_restJson1StartSpeechSynthesisTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
