import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudWatchClient";
import {
  DescribeAnomalyDetectorsInput,
  DescribeAnomalyDetectorsOutput
} from "../models/index";
import {
  deserializeAws_queryDescribeAnomalyDetectorsCommand,
  serializeAws_queryDescribeAnomalyDetectorsCommand
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

export type DescribeAnomalyDetectorsCommandInput = DescribeAnomalyDetectorsInput;
export type DescribeAnomalyDetectorsCommandOutput = DescribeAnomalyDetectorsOutput &
  __MetadataBearer;

export class DescribeAnomalyDetectorsCommand extends $Command<
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnomalyDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAnomalyDetectorsCommandInput,
    DescribeAnomalyDetectorsCommandOutput
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
    input: DescribeAnomalyDetectorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAnomalyDetectorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAnomalyDetectorsCommandOutput> {
    return deserializeAws_queryDescribeAnomalyDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
