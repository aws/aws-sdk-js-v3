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
  CreateServiceRequest,
  CreateServiceRequestFilterSensitiveLog,
  CreateServiceResponse,
  CreateServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateServiceCommand,
  serializeAws_json1_1CreateServiceCommand,
} from "../protocols/Aws_json1_1";

export interface CreateServiceCommandInput extends CreateServiceRequest {}
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Runs and maintains your desired number of tasks from a specified task definition. If
 * 			the number of tasks running in a service drops below the <code>desiredCount</code>,
 * 			Amazon ECS runs another copy of the task in the specified cluster. To update an existing
 * 			service, see the <a>UpdateService</a> action.</p>
 *          <p>In addition to maintaining the desired count of tasks in your service, you can
 * 			optionally run your service behind one or more load balancers. The load balancers
 * 			distribute traffic across the tasks that are associated with the service. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>Tasks for services that don't use a load balancer are considered healthy if they're in
 * 			the <code>RUNNING</code> state. Tasks for services that use a load balancer are
 * 			considered healthy if they're in the <code>RUNNING</code> state and are reported as
 * 			healthy by the load balancer.</p>
 *          <p>There are two service scheduler strategies available:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>REPLICA</code> - The replica scheduling strategy places and
 * 					maintains your desired number of tasks across your cluster. By default, the
 * 					service scheduler spreads tasks across Availability Zones. You can use task
 * 					placement strategies and constraints to customize task placement decisions. For
 * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one
 * 					task on each active container instance that meets all of the task placement
 * 					constraints that you specify in your cluster. The service scheduler also
 * 					evaluates the task placement constraints for running tasks. It also stops tasks
 * 					that don't meet the placement constraints. When using this strategy, you don't
 * 					need to specify a desired number of tasks, a task placement strategy, or use
 * 					Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>You can optionally specify a deployment configuration for your service. The deployment
 * 			is initiated by changing properties. For example, the deployment might be initiated by
 * 			the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for
 * 				<code>minimumHealthyPercent</code> is 100%. The default value for a daemon service
 * 			for <code>minimumHealthyPercent</code> is 0%.</p>
 *          <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy
 * 			percent represents a lower limit on the number of tasks in a service that must remain in
 * 			the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a
 * 			percentage of your desired number of tasks (rounded up to the nearest integer). This
 * 			happens when any of your container instances are in the <code>DRAINING</code> state if
 * 			the service contains tasks using the EC2 launch type. Using this
 * 			parameter, you can deploy without using additional cluster capacity. For example, if you
 * 			set your service to have desired number of four tasks and a minimum healthy percent of
 * 			50%, the scheduler might stop two existing tasks to free up cluster capacity before
 * 			starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services
 * 			that don't use a load balancer are considered healthy . If they're in the
 * 				<code>RUNNING</code> state and reported as healthy by the load balancer, tasks for
 * 			services that <i>do</i> use a load balancer are considered healthy . The
 * 			default value for minimum healthy percent is 100%.</p>
 *          <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the
 * 			number of tasks in a service that are allowed in the <code>RUNNING</code> or
 * 				<code>PENDING</code> state during a deployment. Specifically, it represents it as a
 * 			percentage of the desired number of tasks (rounded down to the nearest integer). This
 * 			happens when any of your container instances are in the <code>DRAINING</code> state if
 * 			the service contains tasks using the EC2 launch type. Using this
 * 			parameter, you can define the deployment batch size. For example, if your service has a
 * 			desired number of four tasks and a maximum percent value of 200%, the scheduler may
 * 			start four new tasks before stopping the four older tasks (provided that the cluster
 * 			resources required to do this are available). The default value for maximum percent is
 * 			200%.</p>
 *          <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code>
 * 			deployment controller types and tasks that use the EC2 launch type, the
 * 				<b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit
 * 			on the number of the tasks in the service that remain in the <code>RUNNING</code> state.
 * 			This is while the container instances are in the <code>DRAINING</code> state. If the
 * 			tasks in the service use the Fargate launch type, the minimum healthy
 * 			percent and maximum percent values aren't used. This is the case even if they're
 * 			currently visible when describing your service.</p>
 *          <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you
 * 			can specify only parameters that aren't controlled at the task set level. The only
 * 			required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>When the service scheduler launches new tasks, it determines task placement. For
 * 			information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS
 * 				task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class CreateServiceCommand extends $Command<
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceResponseFilterSensitiveLog,
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
