import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient";
import {
  DescribeStackDriftDetectionStatusInput,
  DescribeStackDriftDetectionStatusOutput
} from "../models/index";
import {
  deserializeAws_queryDescribeStackDriftDetectionStatusCommand,
  serializeAws_queryDescribeStackDriftDetectionStatusCommand
} from "../protocols/Aws_query";
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

export type DescribeStackDriftDetectionStatusCommandInput = DescribeStackDriftDetectionStatusInput;
export type DescribeStackDriftDetectionStatusCommandOutput = DescribeStackDriftDetectionStatusOutput &
  __MetadataBearer;

export class DescribeStackDriftDetectionStatusCommand extends $Command<
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStackDriftDetectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStackDriftDetectionStatusCommandInput,
    DescribeStackDriftDetectionStatusCommandOutput
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
    input: DescribeStackDriftDetectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackDriftDetectionStatusCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput> {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
