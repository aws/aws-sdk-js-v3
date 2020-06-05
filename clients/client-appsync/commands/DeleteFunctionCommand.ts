import {
  AppSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppSyncClient";
import { DeleteFunctionRequest, DeleteFunctionResponse } from "../models/index";
import {
  deserializeAws_restJson1DeleteFunctionCommand,
  serializeAws_restJson1DeleteFunctionCommand
} from "../protocols/Aws_restJson1";
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

export type DeleteFunctionCommandInput = DeleteFunctionRequest;
export type DeleteFunctionCommandOutput = DeleteFunctionResponse &
  __MetadataBearer;

export class DeleteFunctionCommand extends $Command<
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFunctionCommandInput, DeleteFunctionCommandOutput> {
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
    input: DeleteFunctionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFunctionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFunctionCommandOutput> {
    return deserializeAws_restJson1DeleteFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
