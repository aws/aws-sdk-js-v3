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
  DeleteTaskDefinitionsRequest,
  DeleteTaskDefinitionsRequestFilterSensitiveLog,
  DeleteTaskDefinitionsResponse,
  DeleteTaskDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTaskDefinitionsCommand,
  serializeAws_json1_1DeleteTaskDefinitionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandInput extends DeleteTaskDefinitionsRequest {}
/**
 * The output of {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandOutput extends DeleteTaskDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more task definitions.</p>
 *          <p>You must deregister a task definition revision before you delete it. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p>
 *          <p>When you delete a task definition revision, it is immediately transitions from the
 * 		<code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services
 * 		that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run
 * 		without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task
 * 		definition revision can still scale up or down by modifying the service's desired
 * 		count.</p>
 *          <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks
 * 			or create new services. You also can't update an existing service to reference a
 * 			<code>DELETE_IN_PROGRESS</code> task definition revision.</p>
 *          <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until
 * 			all the associated tasks and services have been terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DeleteTaskDefinitionsCommand extends $Command<
  DeleteTaskDefinitionsCommandInput,
  DeleteTaskDefinitionsCommandOutput,
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

  constructor(readonly input: DeleteTaskDefinitionsCommandInput) {
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
  ): Handler<DeleteTaskDefinitionsCommandInput, DeleteTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteTaskDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTaskDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTaskDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTaskDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTaskDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTaskDefinitionsCommandOutput> {
    return deserializeAws_json1_1DeleteTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
