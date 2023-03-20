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
import { DescribeTasksRequest, DescribeTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTasksCommand,
  serializeAws_json1_1DescribeTasksCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeTasksCommand}.
 */
export interface DescribeTasksCommandInput extends DescribeTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTasksCommand}.
 */
export interface DescribeTasksCommandOutput extends DescribeTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a specified task or tasks.</p>
 *          <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTasksCommandInput - {@link DescribeTasksCommandInput}
 * @returns {@link DescribeTasksCommandOutput}
 * @see {@link DescribeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 * @example To describe a task
 * ```javascript
 * // This example provides a description of the specified task, using the task UUID as an identifier.
 * const input = {
 *   "tasks": [
 *     "c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
 *   ]
 * };
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "tasks": [
 *     {
 *       "clusterArn": "arn:aws:ecs:<region>:<aws_account_id>:cluster/default",
 *       "containerInstanceArn": "arn:aws:ecs:<region>:<aws_account_id>:container-instance/18f9eda5-27d7-4c19-b133-45adc516e8fb",
 *       "containers": [
 *         {
 *           "name": "ecs-demo",
 *           "containerArn": "arn:aws:ecs:<region>:<aws_account_id>:container/7c01765b-c588-45b3-8290-4ba38bd6c5a6",
 *           "lastStatus": "RUNNING",
 *           "networkBindings": [
 *             {
 *               "bindIP": "0.0.0.0",
 *               "containerPort": 80,
 *               "hostPort": 80
 *             }
 *           ],
 *           "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
 *         }
 *       ],
 *       "desiredStatus": "RUNNING",
 *       "lastStatus": "RUNNING",
 *       "overrides": {
 *         "containerOverrides": [
 *           {
 *             "name": "ecs-demo"
 *           }
 *         ]
 *       },
 *       "startedBy": "ecs-svc/9223370608528463088",
 *       "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8",
 *       "taskDefinitionArn": "arn:aws:ecs:<region>:<aws_account_id>:task-definition/amazon-ecs-sample:1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: a90b0cde-f965-4946-b55e-cfd8cc54e827
 * ```
 *
 */
export class DescribeTasksCommand extends $Command<
  DescribeTasksCommandInput,
  DescribeTasksCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeTasksCommandInput) {
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
  ): Handler<DescribeTasksCommandInput, DescribeTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTasksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTasksCommandOutput> {
    return deserializeAws_json1_1DescribeTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
