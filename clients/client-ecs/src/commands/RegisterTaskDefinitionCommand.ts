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
  RegisterTaskDefinitionRequest,
  RegisterTaskDefinitionRequestFilterSensitiveLog,
  RegisterTaskDefinitionResponse,
  RegisterTaskDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterTaskDefinitionCommand,
  serializeAws_json1_1RegisterTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link RegisterTaskDefinitionCommand}.
 */
export interface RegisterTaskDefinitionCommandInput extends RegisterTaskDefinitionRequest {}
/**
 * The output of {@link RegisterTaskDefinitionCommand}.
 */
export interface RegisterTaskDefinitionCommandOutput extends RegisterTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Registers a new task definition from the supplied <code>family</code> and
 * 				<code>containerDefinitions</code>. Optionally, you can add data volumes to your
 * 			containers with the <code>volumes</code> parameter. For more information about task
 * 			definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
 * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter.
 * 			When you specify a role for a task, its containers can then use the latest versions
 * 			of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in
 * 			the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
 * 				Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can specify a Docker networking mode for the containers in your task definition
 * 			with the <code>networkMode</code> parameter. The available network modes correspond to
 * 			those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
 * 				settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
 * 			network mode, the task is allocated an elastic network interface, and you must specify a
 * 				<a>NetworkConfiguration</a> when you create a service or run a task with
 * 			the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new RegisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 * @example To register a task definition
 * ```javascript
 * // This example registers a task definition to the specified family.
 * const input = {
 *   "containerDefinitions": [
 *     {
 *       "name": "sleep",
 *       "command": [
 *         "sleep",
 *         "360"
 *       ],
 *       "cpu": 10,
 *       "essential": true,
 *       "image": "busybox",
 *       "memory": 10
 *     }
 *   ],
 *   "family": "sleep360",
 *   "taskRoleArn": "",
 *   "volumes": []
 * };
 * const command = new RegisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinition": {
 *     "containerDefinitions": [
 *       {
 *         "name": "sleep",
 *         "command": [
 *           "sleep",
 *           "360"
 *         ],
 *         "cpu": 10,
 *         "environment": [],
 *         "essential": true,
 *         "image": "busybox",
 *         "memory": 10,
 *         "mountPoints": [],
 *         "portMappings": [],
 *         "volumesFrom": []
 *       }
 *     ],
 *     "family": "sleep360",
 *     "revision": 1,
 *     "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:19",
 *     "volumes": []
 *   }
 * }
 * *\/
 * // example id: to-register-a-task-definition-1470764550877
 * ```
 *
 */
export class RegisterTaskDefinitionCommand extends $Command<
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
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

  constructor(readonly input: RegisterTaskDefinitionCommandInput) {
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
  ): Handler<RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "RegisterTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTaskDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterTaskDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1RegisterTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
