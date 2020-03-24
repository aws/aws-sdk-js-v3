import {
  MediaConvertClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaConvertClient";
import { DeleteQueueRequest, DeleteQueueResponse } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteQueueCommand,
  serializeAws_restJson1_1DeleteQueueCommand
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
  HttpHandlerOptions as __HttpHandlerOptions,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DeleteQueueCommandInput = DeleteQueueRequest;
export type DeleteQueueCommandOutput = DeleteQueueResponse;

export class DeleteQueueCommand extends $Command<
  DeleteQueueCommandInput,
  DeleteQueueCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueueCommandInput, DeleteQueueCommandOutput> {
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
    input: DeleteQueueCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteQueueCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteQueueCommandOutput> {
    return deserializeAws_restJson1_1DeleteQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
