import {
  MediaLiveClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaLiveClient";
import {
  BatchUpdateScheduleRequest,
  BatchUpdateScheduleResponse
} from "../models/index";
import {
  deserializeAws_restJson1BatchUpdateScheduleCommand,
  serializeAws_restJson1BatchUpdateScheduleCommand
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

export type BatchUpdateScheduleCommandInput = BatchUpdateScheduleRequest;
export type BatchUpdateScheduleCommandOutput = BatchUpdateScheduleResponse &
  __MetadataBearer;

export class BatchUpdateScheduleCommand extends $Command<
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchUpdateScheduleCommandInput,
    BatchUpdateScheduleCommandOutput
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
    input: BatchUpdateScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateScheduleCommandOutput> {
    return deserializeAws_restJson1BatchUpdateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
