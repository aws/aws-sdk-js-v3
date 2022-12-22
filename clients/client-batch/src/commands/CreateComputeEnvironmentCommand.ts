// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  CreateComputeEnvironmentRequest,
  CreateComputeEnvironmentRequestFilterSensitiveLog,
  CreateComputeEnvironmentResponse,
  CreateComputeEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateComputeEnvironmentCommand,
  serializeAws_restJson1CreateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateComputeEnvironmentCommandInput extends CreateComputeEnvironmentRequest {}
export interface CreateComputeEnvironmentCommandOutput extends CreateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
 *    environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources.
 *     <code>UNMANAGED</code> compute environments can only use EC2 resources.</p>
 *          <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources
 *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
 *    specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot
 *    Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can
 *    optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a
 *    specified percentage of the On-Demand price.</p>
 *          <note>
 *             <p>Multi-node parallel jobs aren't supported on Spot Instances.</p>
 *          </note>
 *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how
 *    you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of
 *    your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
 *    <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch
 *    your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the
 *    <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>To create a compute environment that uses EKS resources, the caller must have permissions to call
 *     <code>eks:DescribeCluster</code>.</p>
 *          </note>
 *          <note>
 *             <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it
 *     also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is
 *     available. You're responsible for the management of the guest operating system. This includes any updates and
 *     security patches. You're also responsible for any additional application software or utilities that you install on
 *     the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete
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
 *             <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see
 *      <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
 *      environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these
 *     rules:</p>
 *             <ul>
 *                <li>
 *                   <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p>
 *                </li>
 *                <li>
 *                   <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code>
 *       or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p>
 *                </li>
 *                <li>
 *                   <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to
 *        <code>true</code>.</p>
 *                </li>
 *                <li>
 *                   <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html">
 *                         <code>ec2Configuration</code>
 *                      </a>), or in the launch
 *       template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's
 *       supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID
 *       in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the
 *       <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the
 *       AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the
 *       <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different
 *       launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by
 *       setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version
 *       to the launch template (if <code>$Latest</code>).</p>
 *                </li>
 *             </ul>
 *             <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be
 *     re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to
 *     <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up
 *     at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class CreateComputeEnvironmentCommand extends $Command<
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateComputeEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateComputeEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateComputeEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateComputeEnvironmentResponseFilterSensitiveLog,
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
