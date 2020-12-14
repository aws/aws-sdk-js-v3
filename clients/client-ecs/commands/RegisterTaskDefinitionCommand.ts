import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RegisterTaskDefinitionRequest, RegisterTaskDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterTaskDefinitionCommand,
  serializeAws_json1_1RegisterTaskDefinitionCommand,
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

export type RegisterTaskDefinitionCommandInput = RegisterTaskDefinitionRequest;
export type RegisterTaskDefinitionCommandOutput = RegisterTaskDefinitionResponse & __MetadataBearer;

/**
 * <p>Registers a new task definition from the supplied <code>family</code> and
 * 				<code>containerDefinitions</code>. Optionally, you can add data volumes to your
 * 			containers with the <code>volumes</code> parameter. For more information about task
 * 			definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
 * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter.
 * 			When you specify an IAM role for a task, its containers can then use the latest versions
 * 			of the AWS CLI or SDKs to make API requests to the AWS services that are specified in
 * 			the IAM policy associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
 * 				Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>You can specify a Docker networking mode for the containers in your task definition
 * 			with the <code>networkMode</code> parameter. The available network modes correspond to
 * 			those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
 * 				settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
 * 			network mode, the task is allocated an elastic network interface, and you must specify a
 * 				<a>NetworkConfiguration</a> when you create a service or run a task with
 * 			the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class RegisterTaskDefinitionCommand extends $Command<
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "RegisterTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTaskDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTaskDefinitionResponse.filterSensitiveLog,
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
