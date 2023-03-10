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
  DescribeTaskDefinitionRequest,
  DescribeTaskDefinitionRequestFilterSensitiveLog,
  DescribeTaskDefinitionResponse,
  DescribeTaskDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTaskDefinitionCommand,
  serializeAws_json1_1DescribeTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeTaskDefinitionCommand}.
 */
export interface DescribeTaskDefinitionCommandInput extends DescribeTaskDefinitionRequest {}
/**
 * The output of {@link DescribeTaskDefinitionCommand}.
 */
export interface DescribeTaskDefinitionCommandOutput extends DescribeTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Describes a task definition. You can specify a <code>family</code> and
 * 				<code>revision</code> to find information about a specific task definition, or you
 * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
 * 			family.</p>
 *          <note>
 *             <p>You can only describe <code>INACTIVE</code> task definitions while an active task
 * 				or service references them.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskDefinitionCommandOutput} for command's `response` shape.
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
 * @example To describe a task definition
 * ```javascript
 * // This example provides a description of the specified task definition.
 * const input = {
 *   "taskDefinition": "hello_world:8"
 * };
 * const command = new DescribeTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinition": {
 *     "containerDefinitions": [
 *       {
 *         "name": "wordpress",
 *         "cpu": 10,
 *         "environment": [],
 *         "essential": true,
 *         "image": "wordpress",
 *         "links": [
 *           "mysql"
 *         ],
 *         "memory": 500,
 *         "mountPoints": [],
 *         "portMappings": [
 *           {
 *             "containerPort": 80,
 *             "hostPort": 80
 *           }
 *         ],
 *         "volumesFrom": []
 *       },
 *       {
 *         "name": "mysql",
 *         "cpu": 10,
 *         "environment": [
 *           {
 *             "name": "MYSQL_ROOT_PASSWORD",
 *             "value": "password"
 *           }
 *         ],
 *         "essential": true,
 *         "image": "mysql",
 *         "memory": 500,
 *         "mountPoints": [],
 *         "portMappings": [],
 *         "volumesFrom": []
 *       }
 *     ],
 *     "family": "hello_world",
 *     "revision": 8,
 *     "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/hello_world:8",
 *     "volumes": []
 *   }
 * }
 * *\/
 * // example id: 4c21eeb1-f1da-4a08-8c44-297fc8d0ea88
 * ```
 *
 */
export class DescribeTaskDefinitionCommand extends $Command<
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
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

  constructor(readonly input: DescribeTaskDefinitionCommandInput) {
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
  ): Handler<DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTaskDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTaskDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
