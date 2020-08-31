import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeInstanceRefreshesAnswer, DescribeInstanceRefreshesType } from "../models/index";
import {
  deserializeAws_queryDescribeInstanceRefreshesCommand,
  serializeAws_queryDescribeInstanceRefreshesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeInstanceRefreshesCommandInput = DescribeInstanceRefreshesType;
export type DescribeInstanceRefreshesCommandOutput = DescribeInstanceRefreshesAnswer & __MetadataBearer;

export class DescribeInstanceRefreshesCommand extends $Command<
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceRefreshesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceRefreshesCommandInput, DescribeInstanceRefreshesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeInstanceRefreshesType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceRefreshesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceRefreshesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInstanceRefreshesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceRefreshesCommandOutput> {
    return deserializeAws_queryDescribeInstanceRefreshesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
