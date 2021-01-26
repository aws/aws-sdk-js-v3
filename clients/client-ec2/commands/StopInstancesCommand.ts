import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StopInstancesRequest, StopInstancesResult } from "../models/models_5";
import { deserializeAws_ec2StopInstancesCommand, serializeAws_ec2StopInstancesCommand } from "../protocols/Aws_ec2";
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

export type StopInstancesCommandInput = StopInstancesRequest;
export type StopInstancesCommandOutput = StopInstancesResult & __MetadataBearer;

/**
 * <p>Stops an Amazon EBS-backed instance.</p>
 *         <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for
 *                 hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>We don't charge usage for a stopped instance, or data transfer fees; however, your
 *             root partition Amazon EBS volume remains and continues to persist your data, and you are
 *             charged for Amazon EBS volume usage. Every time you start your Windows instance, Amazon
 *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
 *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
 *             even if you are still within the same 60-minute period when it was stopped. Every time
 *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
 *             usage, and thereafter charges per second for instance usage.</p>
 *         <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop
 *             action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate
 *             Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the <i>Amazon Elastic
 *                 Compute Cloud User Guide</i>.</p>
 *         <p>When you stop or hibernate an instance, we shut it down. You can restart your instance
 *             at any time. Before stopping or hibernating an instance, make sure it is in a state from
 *             which it can be restarted. Stopping an instance does not preserve data stored in RAM,
 *             but hibernating an instance does preserve data stored in RAM. If an instance cannot
 *             hibernate successfully, a normal shutdown occurs.</p>
 *         <p>Stopping and hibernating an instance is different to rebooting or terminating it. For
 *             example, when you stop or hibernate an instance, the root device and any other devices
 *             attached to the instance persist. When you terminate an instance, the root device and
 *             any other devices attached during the instance launch are automatically deleted. For
 *             more information about the differences between rebooting, stopping, hibernating, and
 *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If
 *             your instance appears stuck in the stopping state after a period of time, there may be
 *             an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshooting
 *                 stopping your instance</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>.</p>
 */
export class StopInstancesCommand extends $Command<
  StopInstancesCommandInput,
  StopInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopInstancesCommandInput) {
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
  ): Handler<StopInstancesCommandInput, StopInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StopInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2StopInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopInstancesCommandOutput> {
    return deserializeAws_ec2StopInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
