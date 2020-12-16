import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAdjustmentTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeAdjustmentTypesCommand,
  serializeAws_queryDescribeAdjustmentTypesCommand,
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

export type DescribeAdjustmentTypesCommandInput = {};
export type DescribeAdjustmentTypesCommandOutput = DescribeAdjustmentTypesAnswer & __MetadataBearer;

/**
 * <p>Describes the available adjustment types for Amazon EC2 Auto Scaling scaling policies. These settings
 *             apply to step scaling policies and simple scaling policies; they do not apply to target
 *             tracking scaling policies.</p>
 *         <p>The following adjustment types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>ChangeInCapacity</p>
 *             </li>
 *             <li>
 *                 <p>ExactCapacity</p>
 *             </li>
 *             <li>
 *                 <p>PercentChangeInCapacity</p>
 *             </li>
 *          </ul>
 */
export class DescribeAdjustmentTypesCommand extends $Command<
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAdjustmentTypesCommandInput) {
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
  ): Handler<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAdjustmentTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeAdjustmentTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAdjustmentTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAdjustmentTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAdjustmentTypesCommandOutput> {
    return deserializeAws_queryDescribeAdjustmentTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
