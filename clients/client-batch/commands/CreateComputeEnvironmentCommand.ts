import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { CreateComputeEnvironmentRequest, CreateComputeEnvironmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateComputeEnvironmentCommand,
  serializeAws_restJson1CreateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateComputeEnvironmentCommandInput = CreateComputeEnvironmentRequest;
export type CreateComputeEnvironmentCommandOutput = CreateComputeEnvironmentResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
 *    environments. <code>MANAGED</code> compute environments can use Amazon EC2 or AWS Fargate resources.
 *     <code>UNMANAGED</code> compute environments can only use EC2 resources.</p>
 *          <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources
 *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
 *    specify when you create the compute environment. You can choose either to use EC2 On-Demand Instances and EC2 Spot
 *    Instances, or to use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally
 *    set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage
 *    of the On-Demand price.</p>
 *          <note>
 *             <p>Multi-node parallel jobs are not supported on Spot Instances.</p>
 *          </note>
 *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have a lot of flexibility
 *    with how you configure your compute resources. For example, you can use custom AMI. However, you need to verify that
 *    your AMI meets the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
 *     <i>Amazon Elastic Container Service Developer Guide</i>. After you have created your unmanaged compute environment, you can use the
 *     <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that is associated with it. Then,
 *    manually launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS
 *     container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>AWS Batch doesn't upgrade the AMIs in a compute environment after it's created. For example, it doesn't update
 *     the AMIs when a newer version of the Amazon ECS-optimized AMI is available. Therefore, you're responsible for the
 *     management of the guest operating system (including updates and security patches) and any additional application
 *     software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs, complete
 *     these steps:</p>
 *             <ol>
 *                <li>
 *                   <p>Create a new compute environment with the new AMI.</p>
 *                </li>
 *                <li>
 *                   <p>Add the compute environment to an existing job queue.</p>
 *                </li>
 *                <li>
 *                   <p>Remove the earlier compute environment from your job queue.</p>
 *                </li>
 *                <li>
 *                   <p>Delete the earlier compute environment.</p>
 *                </li>
 *             </ol>
 *          </note>
 */
export class CreateComputeEnvironmentCommand extends $Command<
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateComputeEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateComputeEnvironmentCommandInput, CreateComputeEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateComputeEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateComputeEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateComputeEnvironmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateComputeEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateComputeEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComputeEnvironmentCommandOutput> {
    return deserializeAws_restJson1CreateComputeEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
