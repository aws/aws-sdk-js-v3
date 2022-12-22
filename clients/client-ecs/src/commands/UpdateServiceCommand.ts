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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  UpdateServiceRequest,
  UpdateServiceRequestFilterSensitiveLog,
  UpdateServiceResponse,
  UpdateServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServiceCommand,
  serializeAws_json1_1UpdateServiceCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a service.</p>
 *          <p>For services using the rolling update (<code>ECS</code>) you can update the desired
 * 			count, deployment configuration, network configuration, load balancers, service
 * 			registries, enable ECS managed tags option, propagate tags option, task placement
 * 			constraints and strategies, and task definition. When you update any of these
 * 			parameters, Amazon ECS starts new tasks with the new configuration. </p>
 *          <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller,
 * 			only the desired count, deployment configuration, health check grace period, task
 * 			placement constraints and strategies, enable ECS managed tags option, and propagate tags
 * 			can be updated using this API. If the network configuration, platform version, task
 * 			definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more
 * 			information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p>
 *          <p>For services using an external deployment controller, you can update only the desired
 * 			count, task placement constraints and strategies, health check grace period, enable ECS
 * 			managed tags option, and propagate tags option, using this API. If the launch type, load
 * 			balancer, network configuration, platform version, or task definition need to be
 * 			updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p>
 *          <p>You can add to or subtract from the number of instantiations of a task definition in a
 * 			service by specifying the cluster that the service is running in and a new
 * 				<code>desiredCount</code> parameter.</p>
 *          <p>If you have updated the Docker image of your application, you can create a new task
 * 			definition with that image and deploy it to your service. The service scheduler uses the
 * 			minimum healthy percent and maximum percent parameters (in the service's deployment
 * 			configuration) to determine the deployment strategy.</p>
 *          <note>
 *             <p>If your updated Docker image uses the same tag as what is in the existing task
 * 				definition for your service (for example, <code>my_image:latest</code>), you don't
 * 				need to create a new revision of your task definition. You can update the service
 * 				using the <code>forceNewDeployment</code> option. The new tasks launched by the
 * 				deployment pull the current image/tag combination from your repository when they
 * 				start.</p>
 *          </note>
 *          <p>You can also update the deployment configuration of a service. When a deployment is
 * 			triggered by updating the task definition of a service, the service scheduler uses the
 * 			deployment configuration parameters, <code>minimumHealthyPercent</code> and
 * 				<code>maximumPercent</code>, to determine the deployment strategy.</p>
 *          <ul>
 *             <li>
 *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during a deployment. For example, if
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. Tasks for
 * 					services that don't use a load balancer are considered healthy if they're in the
 * 						<code>RUNNING</code> state. Tasks for services that use a load balancer are
 * 					considered healthy if they're in the <code>RUNNING</code> state and are reported
 * 					as healthy by the load balancer.</p>
 *             </li>
 *             <li>
 *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during a deployment. You can use it to define the
 * 					deployment batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four older tasks
 * 					(provided that the cluster resources required to do this are available).</p>
 *             </li>
 *          </ul>
 *          <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent
 * 			of <code>docker stop</code> is issued to the containers running in the task. This
 * 			results in a <code>SIGTERM</code> and a 30-second timeout. After this,
 * 				<code>SIGKILL</code> is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from
 * 			receiving it, no <code>SIGKILL</code> is sent.</p>
 *          <p>When the service scheduler launches new tasks, it determines task placement in your
 * 			cluster with the following logic.</p>
 *          <ul>
 *             <li>
 *                <p>Determine which of the container instances in your cluster can support your
 * 					service's task definition. For example, they have the required CPU, memory,
 * 					ports, and container instance attributes.</p>
 *             </li>
 *             <li>
 *                <p>By default, the service scheduler attempts to balance tasks across
 * 					Availability Zones in this manner even though you can choose a different
 * 					placement strategy.</p>
 *                <ul>
 *                   <li>
 *                      <p>Sort the valid container instances by the fewest number of running
 * 							tasks for this service in the same Availability Zone as the instance.
 * 							For example, if zone A has one running service task and zones B and C
 * 							each have zero, valid container instances in either zone B or C are
 * 							considered optimal for placement.</p>
 *                   </li>
 *                   <li>
 *                      <p>Place the new service task on a valid container instance in an optimal
 * 							Availability Zone (based on the previous steps), favoring container
 * 							instances with the fewest number of running tasks for this
 * 							service.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>When the service scheduler stops running tasks, it attempts to maintain balance across
 * 			the Availability Zones in your cluster using the following logic: </p>
 *          <ul>
 *             <li>
 *                <p>Sort the container instances by the largest number of running tasks for this
 * 					service in the same Availability Zone as the instance. For example, if zone A
 * 					has one running service task and zones B and C each have two, container
 * 					instances in either zone B or C are considered optimal for termination.</p>
 *             </li>
 *             <li>
 *                <p>Stop the task on a container instance in an optimal Availability Zone (based
 * 					on the previous steps), favoring container instances with the largest number of
 * 					running tasks for this service.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must have a service-linked role when you update any of the following service
 * 				properties. If you specified a custom IAM role when you created the service, Amazon ECS
 * 				automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your
 * 				service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>loadBalancers,</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>serviceRegistries</code>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class UpdateServiceCommand extends $Command<
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: UpdateServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceCommandOutput> {
    return deserializeAws_json1_1UpdateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
