import {
  SQSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SQSClient";
import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/index";
import {
  deserializeAws_queryReceiveMessageCommand,
  serializeAws_queryReceiveMessageCommand
} from "../protocols/Aws_query";
import { getReceiveMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type ReceiveMessageCommandInput = ReceiveMessageRequest;
export type ReceiveMessageCommandOutput = ReceiveMessageResult &
  __MetadataBearer;

export class ReceiveMessageCommand extends $Command<
  ReceiveMessageCommandInput,
  ReceiveMessageCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReceiveMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReceiveMessageCommandInput, ReceiveMessageCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getReceiveMessagePlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ReceiveMessageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryReceiveMessageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReceiveMessageCommandOutput> {
    return deserializeAws_queryReceiveMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
