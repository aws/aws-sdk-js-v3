import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateServiceCommand,
  serializeAws_json1_1CreateServiceCommand,
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

export type CreateServiceCommandInput = CreateServiceRequest;
export type CreateServiceCommandOutput = CreateServiceResponse & __MetadataBearer;

/**
 * <p>Runs and maintains a desired number of tasks from a specified task definition. If the
 * 			number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS
 * 			runs another copy of the task in the specified cluster. To update an existing service,
 * 			see the UpdateService action.</p>
 * 		       <p>In addition to maintaining the desired count of tasks in your service, you can
 * 			optionally run your service behind one or more load balancers. The load balancers
 * 			distribute traffic across the tasks that are associated with the service. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service Load Balancing</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>Tasks for services that <i>do not</i> use a load balancer are considered
 * 			healthy if they're in the <code>RUNNING</code> state. Tasks for services that
 * 				<i>do</i> use a load balancer are considered healthy if they're in the
 * 				<code>RUNNING</code> state and the container instance that they're hosted on is
 * 			reported as healthy by the load balancer.</p>
 * 		       <p>There are two service scheduler strategies available:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>REPLICA</code> - The replica scheduling strategy places and
 * 					maintains the desired number of tasks across your cluster. By default, the
 * 					service scheduler spreads tasks across Availability Zones. You can use task
 * 					placement strategies and constraints to customize task placement decisions. For
 * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the
 * 						<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one
 * 					task on each active container instance that meets all of the task placement
 * 					constraints that you specify in your cluster. The service scheduler also
 * 					evaluates the task placement constraints for running tasks and will stop tasks
 * 					that do not meet the placement constraints. When using this strategy, you don't
 * 					need to specify a desired number of tasks, a task placement strategy, or use
 * 					Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the
 * 						<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>You can optionally specify a deployment configuration for your service. The deployment
 * 			is triggered by changing properties, such as the task definition or the desired count of
 * 			a service, with an <a>UpdateService</a> operation. The default value for a
 * 			replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a
 * 			daemon service for <code>minimumHealthyPercent</code> is 0%.</p>
 * 		       <p>If a service is using the <code>ECS</code> deployment controller, the minimum healthy
 * 			percent represents a lower limit on the number of tasks in a service that must remain in
 * 			the <code>RUNNING</code> state during a deployment, as a percentage of the desired
 * 			number of tasks (rounded up to the nearest integer), and while any container instances
 * 			are in the <code>DRAINING</code> state if the service contains tasks using the
 * 			EC2 launch type. This parameter enables you to deploy without using
 * 			additional cluster capacity. For example, if your service has a desired number of four
 * 			tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks
 * 			to free up cluster capacity before starting two new tasks. Tasks for services that
 * 				<i>do not</i> use a load balancer are considered healthy if they're in
 * 			the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a
 * 			load balancer are considered healthy if they're in the <code>RUNNING</code> state and
 * 			they're reported as healthy by the load balancer. The default value for minimum healthy
 * 			percent is 100%.</p>
 * 		       <p>If a service is using the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the
 * 			number of tasks in a service that are allowed in the <code>RUNNING</code> or
 * 				<code>PENDING</code> state during a deployment, as a percentage of the desired
 * 			number of tasks (rounded down to the nearest integer), and while any container instances
 * 			are in the <code>DRAINING</code> state if the service contains tasks using the
 * 			EC2 launch type. This parameter enables you to define the deployment batch
 * 			size. For example, if your service has a desired number of four tasks and a maximum
 * 			percent value of 200%, the scheduler may start four new tasks before stopping the four
 * 			older tasks (provided that the cluster resources required to do this are available). The
 * 			default value for maximum percent is 200%.</p>
 * 		       <p>If a service is using either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code>
 * 			deployment controller types and tasks that use the EC2 launch type, the
 * 				<b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit
 * 			on the number of the tasks in the service that remain in the <code>RUNNING</code> state
 * 			while the container instances are in the <code>DRAINING</code> state. If the tasks in
 * 			the service use the Fargate launch type, the minimum healthy percent and
 * 			maximum percent values aren't used, although they're currently visible when describing
 * 			your service.</p>
 * 		       <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you
 * 			can specify only parameters that aren't controlled at the task set level. The only
 * 			required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>When the service scheduler launches new tasks, it determines task placement in your
 * 			cluster using the following logic:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Determine which of the container instances in your cluster can support your
 * 					service's task definition (for example, they have the required CPU, memory,
 * 					ports, and container instance attributes).</p>
 * 			         </li>
 *             <li>
 * 				           <p>By default, the service scheduler attempts to balance tasks across
 * 					Availability Zones in this manner (although you can choose a different placement
 * 					strategy) with the <code>placementStrategy</code> parameter):</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>Sort the valid container instances, giving priority to instances that
 * 							have the fewest number of running tasks for this service in their
 * 							respective Availability Zone. For example, if zone A has one running
 * 							service task and zones B and C each have zero, valid container instances
 * 							in either zone B or C are considered optimal for placement.</p>
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
 */
export class CreateServiceCommand extends $Command<
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceCommandInput) {
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
  ): Handler<CreateServiceCommandInput, CreateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceCommandOutput> {
    return deserializeAws_json1_1CreateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
