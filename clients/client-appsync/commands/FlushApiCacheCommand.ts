import {
  AppSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppSyncClient";
import { FlushApiCacheRequest, FlushApiCacheResponse } from "../models/index";
import {
  deserializeAws_restJson1_1FlushApiCacheCommand,
  serializeAws_restJson1_1FlushApiCacheCommand
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

export type FlushApiCacheCommandInput = FlushApiCacheRequest;
export type FlushApiCacheCommandOutput = FlushApiCacheResponse;

export class FlushApiCacheCommand extends $Command<
  FlushApiCacheCommandInput,
  FlushApiCacheCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FlushApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlushApiCacheCommandInput, FlushApiCacheCommandOutput> {
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
    input: FlushApiCacheCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1FlushApiCacheCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<FlushApiCacheCommandOutput> {
    return deserializeAws_restJson1_1FlushApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
