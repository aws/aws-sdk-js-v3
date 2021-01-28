import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAutoScalingNotificationTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingNotificationTypesCommand,
  serializeAws_queryDescribeAutoScalingNotificationTypesCommand,
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

export type DescribeAutoScalingNotificationTypesCommandInput = {};
export type DescribeAutoScalingNotificationTypesCommandOutput = DescribeAutoScalingNotificationTypesAnswer &
  __MetadataBearer;

/**
 * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
 */
export class DescribeAutoScalingNotificationTypesCommand extends $Command<
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAutoScalingNotificationTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutoScalingNotificationTypesCommandInput, DescribeAutoScalingNotificationTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAutoScalingNotificationTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeAutoScalingNotificationTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAutoScalingNotificationTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAutoScalingNotificationTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput> {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
