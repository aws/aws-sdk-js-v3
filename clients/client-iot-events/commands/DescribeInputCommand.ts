import {
  IoTEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTEventsClient";
import {
  DescribeInputRequest,
  DescribeInputResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeInputCommand,
  serializeAws_restJson1_1DescribeInputCommand,
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

export type DescribeInputCommandInput = DescribeInputRequest;
export type DescribeInputCommandOutput = DescribeInputResponse;

export class DescribeInputCommand extends $Command<DescribeInputCommandInput, DescribeInputCommandOutput, IoTEventsClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInputCommandInput, DescribeInputCommandOutput> {
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
    input: DescribeInputCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeInputCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeInputCommandOutput> {
    return deserializeAws_restJson1_1DescribeInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
