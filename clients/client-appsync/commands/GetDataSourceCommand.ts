import {
  AppSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AppSyncClient";
import {
  GetDataSourceRequest,
  GetDataSourceResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1GetDataSourceCommand,
  serializeAws_restJson1_1GetDataSourceCommand,
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type GetDataSourceCommandInput = GetDataSourceRequest;
export type GetDataSourceCommandOutput = GetDataSourceResponse;

export class GetDataSourceCommand extends $Command<GetDataSourceCommandInput, GetDataSourceCommandOutput, AppSyncClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSourceCommandInput, GetDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDataSourceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetDataSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetDataSourceCommandOutput> {
    return deserializeAws_restJson1_1GetDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
