import {
  GuardDutyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GuardDutyClient";
import {
  DescribePublishingDestinationRequest,
  DescribePublishingDestinationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribePublishingDestinationCommand,
  serializeAws_restJson1_1DescribePublishingDestinationCommand
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

export type DescribePublishingDestinationCommandInput = DescribePublishingDestinationRequest;
export type DescribePublishingDestinationCommandOutput = DescribePublishingDestinationResponse;

export class DescribePublishingDestinationCommand extends $Command<
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePublishingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePublishingDestinationCommandInput,
    DescribePublishingDestinationCommandOutput
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
    input: DescribePublishingDestinationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribePublishingDestinationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribePublishingDestinationCommandOutput> {
    return deserializeAws_restJson1_1DescribePublishingDestinationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
