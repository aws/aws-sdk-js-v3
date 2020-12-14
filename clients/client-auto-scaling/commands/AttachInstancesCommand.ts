import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachInstancesQuery } from "../models/models_0";
import {
  deserializeAws_queryAttachInstancesCommand,
  serializeAws_queryAttachInstancesCommand,
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

export type AttachInstancesCommandInput = AttachInstancesQuery;
export type AttachInstancesCommandOutput = __MetadataBearer;

/**
 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p>
 *         <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the
 *             number of instances being attached. If the number of instances being attached plus the
 *             desired capacity of the group exceeds the maximum size of the group, the operation
 *             fails.</p>
 *         <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are
 *             also registered with the load balancer. If there are target groups attached to your Auto Scaling
 *             group, the instances are also registered with the target groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class AttachInstancesCommand extends $Command<
  AttachInstancesCommandInput,
  AttachInstancesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachInstancesCommandInput) {
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
  ): Handler<AttachInstancesCommandInput, AttachInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachInstancesQuery.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachInstancesCommandOutput> {
    return deserializeAws_queryAttachInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
