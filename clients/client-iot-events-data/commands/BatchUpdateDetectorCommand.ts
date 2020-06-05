import {
  IoTEventsDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTEventsDataClient";
import {
  BatchUpdateDetectorRequest,
  BatchUpdateDetectorResponse
} from "../models/index";
import {
  deserializeAws_restJson1BatchUpdateDetectorCommand,
  serializeAws_restJson1BatchUpdateDetectorCommand
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

export type BatchUpdateDetectorCommandInput = BatchUpdateDetectorRequest;
export type BatchUpdateDetectorCommandOutput = BatchUpdateDetectorResponse &
  __MetadataBearer;

export class BatchUpdateDetectorCommand extends $Command<
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchUpdateDetectorCommandInput,
    BatchUpdateDetectorCommandOutput
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
    input: BatchUpdateDetectorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateDetectorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateDetectorCommandOutput> {
    return deserializeAws_restJson1BatchUpdateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
