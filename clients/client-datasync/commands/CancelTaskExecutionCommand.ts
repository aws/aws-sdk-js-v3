import {
  DataSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataSyncClient";
import {
  CancelTaskExecutionRequest,
  CancelTaskExecutionResponse
} from "../models/index";
import {
  deserializeAws_json1_1CancelTaskExecutionCommand,
  serializeAws_json1_1CancelTaskExecutionCommand
} from "../protocols/Aws_json1_1";
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

export type CancelTaskExecutionCommandInput = CancelTaskExecutionRequest;
export type CancelTaskExecutionCommandOutput = CancelTaskExecutionResponse &
  __MetadataBearer;

export class CancelTaskExecutionCommand extends $Command<
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CancelTaskExecutionCommandInput,
    CancelTaskExecutionCommandOutput
  > {
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
    input: CancelTaskExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelTaskExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelTaskExecutionCommandOutput> {
    return deserializeAws_json1_1CancelTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
