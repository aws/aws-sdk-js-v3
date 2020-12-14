import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServiceCommand,
  serializeAws_json1_1UpdateServiceCommand,
} from "../protocols/Aws_json1_1";
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

export type UpdateServiceCommandInput = UpdateServiceRequest;
export type UpdateServiceCommandOutput = UpdateServiceResponse & __MetadataBearer;

/**
 * <important>
 * 			         <p>Updating the task placement strategies and constraints on an Amazon ECS service remains
 * 				in preview and is a Beta Service as defined by and subject to the Beta Service
 * 				Participation Service Terms located at <a href="https://aws.amazon.com/service-terms">https://aws.amazon.com/service-terms</a> ("Beta Terms"). These Beta Terms
 * 				apply to your participation in this preview.</p>
 * 		       </important>
 * 		       <p>Modifies the parameters of a service.</p>
 * 		       <p>For services using the rolling update (<code>ECS</code>) deployment controller, the
 * 			desired count, deployment configuration, network configuration, task placement
 * 			constraints and strategies, or task definition used can be updated.</p>
 * 		       <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller,
 * 			only the desired count, deployment configuration, task placement constraints and
 * 			strategies, and health check grace period can be updated using this API. If the network
 * 			configuration, platform version, or task definition need to be updated, a new AWS CodeDeploy
 * 			deployment should be created. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>AWS CodeDeploy API Reference</i>.</p>
 * 		       <p>For services using an external deployment controller, you can update only the desired
 * 			count, task placement constraints and strategies, and health check grace period using
 * 			this API. If the launch type, load balancer, network configuration, platform version, or
 * 			task definition need to be updated, you should create a new task set. For more
 * 			information, see <a>CreateTaskSet</a>.</p>
 * 		       <p>You can add to or subtract from the number of instantiations of a task definition in a
 * 			service by specifying the cluster that the service is running in and a new
 * 				<code>desiredCount</code> parameter.</p>
 * 		       <p>If you have updated the Docker image of your application, you can create a new task
 * 			definition with that image and deploy it to your service. The service scheduler uses the
 * 			minimum healthy percent and maximum percent parameters (in the service's deployment
 * 			configuration) to determine the deployment strategy.</p>
 * 		       <note>
 * 			         <p>If your updated Docker image uses the same tag as what is in the existing task
 * 				definition for your service (for example, <code>my_image:latest</code>), you do not
 * 				need to create a new revision of your task definition. You can update the service
 * 				using the <code>forceNewDeployment</code> option. The new tasks launched by the
 * 				deployment pull the current image/tag combination from your repository when they
 * 				start.</p>
 * 		       </note>
 * 		       <p>You can also update the deployment configuration of a service. When a deployment is
 * 			triggered by updating the task definition of a service, the service scheduler uses the
 * 			deployment configuration parameters, <code>minimumHealthyPercent</code> and
 * 				<code>maximumPercent</code>, to determine the deployment strategy.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during a deployment. For example, if
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. Tasks for
 * 					services that do not use a load balancer are considered healthy if they are in
 * 					the <code>RUNNING</code> state. Tasks for services that use a load balancer are
 * 					considered healthy if they are in the <code>RUNNING</code> state and the
 * 					container instance they are hosted on is reported as healthy by the load
 * 					balancer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during a deployment, which enables you to define the
 * 					deployment batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four older tasks
 * 					(provided that the cluster resources required to do this are available).</p>
 * 			         </li>
 *          </ul>
 * 		       <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent
 * 			of <code>docker stop</code> is issued to the containers running in the task. This
 * 			results in a <code>SIGTERM</code> and a 30-second timeout, after which
 * 				<code>SIGKILL</code> is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from
 * 			receiving it, no <code>SIGKILL</code> is sent.</p>
 * 		       <p>When the service scheduler launches new tasks, it determines task placement in your
 * 			cluster with the following logic:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Determine which of the container instances in your cluster can support your
 * 					service's task definition (for example, they have the required CPU, memory,
 * 					ports, and container instance attributes).</p>
 * 			         </li>
 *             <li>
 * 				           <p>By default, the service scheduler attempts to balance tasks across
 * 					Availability Zones in this manner (although you can choose a different placement
 * 					strategy):</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>Sort the valid container instances by the fewest number of running
 * 							tasks for this service in the same Availability Zone as the instance.
 * 							For example, if zone A has one running service task and zones B and C
 * 							each have zero, valid container instances in either zone B or C are
 * 							considered optimal for placement.</p>
 * 					             </li>
 *                   <li>
 * 						               <p>Place the new service task on a valid container instance in an optimal
 * 							Availability Zone (based on the previous steps), favoring container
 * 							instances with the fewest number of running tasks for this
 * 							service.</p>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *          </ul>
 * 		       <p>When the service scheduler stops running tasks, it attempts to maintain balance across
 * 			the Availability Zones in your cluster using the following logic: </p>
 * 		       <ul>
 *             <li>
 * 				           <p>Sort the container instances by the largest number of running tasks for this
 * 					service in the same Availability Zone as the instance. For example, if zone A
 * 					has one running service task and zones B and C each have two, container
 * 					instances in either zone B or C are considered optimal for termination.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Stop the task on a container instance in an optimal Availability Zone (based
 * 					on the previous steps), favoring container instances with the largest number of
 * 					running tasks for this service.</p>
 * 			         </li>
 *          </ul>
 */
export class UpdateServiceCommand extends $Command<
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceResponse.filterSensitiveLog,
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
