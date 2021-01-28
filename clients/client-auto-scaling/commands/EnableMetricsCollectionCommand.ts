import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { EnableMetricsCollectionQuery } from "../models/models_0";
import {
  deserializeAws_queryEnableMetricsCollectionCommand,
  serializeAws_queryEnableMetricsCollectionCommand,
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

export type EnableMetricsCollectionCommandInput = EnableMetricsCollectionQuery;
export type EnableMetricsCollectionCommandOutput = __MetadataBearer;

/**
 * <p>Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class EnableMetricsCollectionCommand extends $Command<
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableMetricsCollectionCommandInput) {
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
  ): Handler<EnableMetricsCollectionCommandInput, EnableMetricsCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "EnableMetricsCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableMetricsCollectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableMetricsCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableMetricsCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableMetricsCollectionCommandOutput> {
    return deserializeAws_queryEnableMetricsCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
