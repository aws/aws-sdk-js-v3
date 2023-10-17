// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTasksRequest, ListTasksResponse } from "../models/models_0";
import { de_ListTasksCommand, se_ListTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of tasks. You can filter the results by cluster, task definition
 * 			family, container instance, launch type, what IAM principal started the task, or by the
 * 			desired status of the task.</p>
 *          <p>Recently stopped tasks might appear in the returned results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListTasksRequest
 *   cluster: "STRING_VALUE",
 *   containerInstance: "STRING_VALUE",
 *   family: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startedBy: "STRING_VALUE",
 *   serviceName: "STRING_VALUE",
 *   desiredStatus: "RUNNING" || "PENDING" || "STOPPED",
 *   launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTasksResponse
 * //   taskArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTasksCommandInput - {@link ListTasksCommandInput}
 * @returns {@link ListTasksCommandOutput}
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To list the tasks in a cluster
 * ```javascript
 * // This example lists all of the tasks in a cluster.
 * const input = {
 *   "cluster": "default"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskArns": [
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84",
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/6b809ef6-c67e-4467-921f-ee261c15a0a1"
 *   ]
 * }
 * *\/
 * // example id: 9a6ec707-1a77-45d0-b2eb-516b5dd9e924
 * ```
 *
 * @example To list the tasks on a particular container instance
 * ```javascript
 * // This example lists the tasks of a specified container instance. Specifying a ``containerInstance`` value limits  the  results  to  tasks  that belong to that container instance.
 * const input = {
 *   "cluster": "default",
 *   "containerInstance": "f6bbb147-5370-4ace-8c73-c7181ded911f"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskArns": [
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84"
 *   ]
 * }
 * *\/
 * // example id: 024bf3b7-9cbb-44e3-848f-9d074e1fecce
 * ```
 *
 */
export class ListTasksCommand extends $Command<ListTasksCommandInput, ListTasksCommandOutput, ECSClientResolvedConfig> {
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
  constructor(readonly input: ListTasksCommandInput) {
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
  ): Handler<ListTasksCommandInput, ListTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTasksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "ListTasks",
      },
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
  private serialize(input: ListTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTasksCommandOutput> {
    return de_ListTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
