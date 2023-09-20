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
import { ListTaskDefinitionsRequest, ListTaskDefinitionsResponse } from "../models/models_0";
import { de_ListTaskDefinitionsCommand, se_ListTaskDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandInput extends ListTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandOutput extends ListTaskDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of task definitions that are registered to your account. You can filter
 * 			the results by family name with the <code>familyPrefix</code> parameter or by status
 * 			with the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListTaskDefinitionsRequest
 *   familyPrefix: "STRING_VALUE",
 *   status: "ACTIVE" || "INACTIVE" || "DELETE_IN_PROGRESS",
 *   sort: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskDefinitionsResponse
 * //   taskDefinitionArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskDefinitionsCommandInput - {@link ListTaskDefinitionsCommandInput}
 * @returns {@link ListTaskDefinitionsCommandOutput}
 * @see {@link ListTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To list your registered task definitions
 * ```javascript
 * // This example lists all of your registered task definitions.
 * const input = {};
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinitionArns": [
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep300:2",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
 *   ]
 * }
 * *\/
 * // example id: b381ebaf-7eba-4d60-b99b-7f6ae49d3d60
 * ```
 *
 * @example To list the registered task definitions in a family
 * ```javascript
 * // This example lists the task definition revisions of a specified family.
 * const input = {
 *   "familyPrefix": "wordpress"
 * };
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinitionArns": [
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
 *   ]
 * }
 * *\/
 * // example id: 734e7afd-753a-4bc2-85d0-badddce10910
 * ```
 *
 */
export class ListTaskDefinitionsCommand extends $Command<
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
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
  constructor(readonly input: ListTaskDefinitionsCommandInput) {
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
  ): Handler<ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListTaskDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "ListTaskDefinitions",
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
  private serialize(input: ListTaskDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTaskDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTaskDefinitionsCommandOutput> {
    return de_ListTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
