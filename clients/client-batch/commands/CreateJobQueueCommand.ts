import {
  BatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BatchClient";
import { CreateJobQueueRequest, CreateJobQueueResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateJobQueueCommand,
  serializeAws_restJson1_1CreateJobQueueCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateJobQueueCommandInput = CreateJobQueueRequest;
export type CreateJobQueueCommandOutput = CreateJobQueueResponse;

export class CreateJobQueueCommand extends $Command<
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateJobQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobQueueCommandInput, CreateJobQueueCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

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
    input: CreateJobQueueCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateJobQueueCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateJobQueueCommandOutput> {
    return deserializeAws_restJson1_1CreateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
