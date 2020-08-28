import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/index";
import {
  deserializeAws_restJson1ListSpeechSynthesisTasksCommand,
  serializeAws_restJson1ListSpeechSynthesisTasksCommand,
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

export type ListSpeechSynthesisTasksCommandInput = ListSpeechSynthesisTasksInput;
export type ListSpeechSynthesisTasksCommandOutput = ListSpeechSynthesisTasksOutput & __MetadataBearer;

export class ListSpeechSynthesisTasksCommand extends $Command<
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSpeechSynthesisTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListSpeechSynthesisTasksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSpeechSynthesisTasksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSpeechSynthesisTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSpeechSynthesisTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpeechSynthesisTasksCommandOutput> {
    return deserializeAws_restJson1ListSpeechSynthesisTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
