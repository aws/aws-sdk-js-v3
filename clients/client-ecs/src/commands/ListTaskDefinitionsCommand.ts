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
  ListTaskDefinitionsRequest,
  ListTaskDefinitionsRequestFilterSensitiveLog,
  ListTaskDefinitionsResponse,
  ListTaskDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTaskDefinitionsCommand,
  serializeAws_json1_1ListTaskDefinitionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandInput extends ListTaskDefinitionsRequest {}
/**
 * The output of {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandOutput extends ListTaskDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of task definitions that are registered to your account. You can filter
 * 			the results by family name with the <code>familyPrefix</code> parameter or by status
 * 			with the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
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
      inputFilterSensitiveLog: ListTaskDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTaskDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTaskDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTaskDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTaskDefinitionsCommandOutput> {
    return deserializeAws_json1_1ListTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
