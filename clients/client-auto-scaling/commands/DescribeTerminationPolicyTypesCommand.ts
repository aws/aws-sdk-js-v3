import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeTerminationPolicyTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeTerminationPolicyTypesCommand,
  serializeAws_queryDescribeTerminationPolicyTypesCommand,
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

export type DescribeTerminationPolicyTypesCommandInput = {};
export type DescribeTerminationPolicyTypesCommandOutput = DescribeTerminationPolicyTypesAnswer & __MetadataBearer;

/**
 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling which Auto Scaling
 *                 instances terminate during scale in</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class DescribeTerminationPolicyTypesCommand extends $Command<
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTerminationPolicyTypesCommandInput) {
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
  ): Handler<DescribeTerminationPolicyTypesCommandInput, DescribeTerminationPolicyTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeTerminationPolicyTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeTerminationPolicyTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTerminationPolicyTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTerminationPolicyTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTerminationPolicyTypesCommandOutput> {
    return deserializeAws_queryDescribeTerminationPolicyTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
