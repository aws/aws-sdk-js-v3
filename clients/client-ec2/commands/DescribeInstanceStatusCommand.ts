import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceStatusRequest, DescribeInstanceStatusResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeInstanceStatusCommand,
  serializeAws_ec2DescribeInstanceStatusCommand,
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

export type DescribeInstanceStatusCommandInput = DescribeInstanceStatusRequest;
export type DescribeInstanceStatusCommandOutput = DescribeInstanceStatusResult & __MetadataBearer;

/**
 * <p>Describes the status of the specified instances or all of your instances. By default,
 *             only running instances are described, unless you specifically indicate to return the
 *             status of all instances.</p>
 *         <p>Instance status includes the following components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Status checks</b> - Amazon EC2 performs status
 *                     checks on running EC2 instances to identify hardware and software issues. For
 *                     more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status checks for your instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshooting
 *                         instances with failed status checks</a> in the <i>Amazon Elastic
 *                         Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Scheduled events</b> - Amazon EC2 can schedule
 *                     events (such as reboot, stop, or terminate) for your instances related to
 *                     hardware issues, software updates, or system maintenance. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled events for your instances</a> in the <i>Amazon Elastic
 *                         Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Instance state</b> - You can manage your instances
 *                     from the moment you launch them through their termination. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance
 *                         lifecycle</a> in the <i>Amazon Elastic Compute Cloud User
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export class DescribeInstanceStatusCommand extends $Command<
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceStatusCommandInput) {
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
  ): Handler<DescribeInstanceStatusCommandInput, DescribeInstanceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceStatusCommandOutput> {
    return deserializeAws_ec2DescribeInstanceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
