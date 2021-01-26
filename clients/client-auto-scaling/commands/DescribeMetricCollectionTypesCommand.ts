import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeMetricCollectionTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeMetricCollectionTypesCommand,
  serializeAws_queryDescribeMetricCollectionTypesCommand,
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

export type DescribeMetricCollectionTypesCommandInput = {};
export type DescribeMetricCollectionTypesCommandOutput = DescribeMetricCollectionTypesAnswer & __MetadataBearer;

/**
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
 *             explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
 */
export class DescribeMetricCollectionTypesCommand extends $Command<
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMetricCollectionTypesCommandInput) {
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
  ): Handler<DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeMetricCollectionTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeMetricCollectionTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMetricCollectionTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeMetricCollectionTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMetricCollectionTypesCommandOutput> {
    return deserializeAws_queryDescribeMetricCollectionTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
