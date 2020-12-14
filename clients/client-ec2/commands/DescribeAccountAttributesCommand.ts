import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAccountAttributesRequest, DescribeAccountAttributesResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeAccountAttributesCommand,
  serializeAws_ec2DescribeAccountAttributesCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeAccountAttributesCommandInput = DescribeAccountAttributesRequest;
export type DescribeAccountAttributesCommandOutput = DescribeAccountAttributesResult & __MetadataBearer;

/**
 * <p>Describes attributes of your AWS account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: Indicates whether your account can launch instances
 *           into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or
 *             <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *           that you can assign to a network interface.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-Classic. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-VPC.</p>
 *             </li>
 *          </ul>
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAccountAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAccountAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return deserializeAws_ec2DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
