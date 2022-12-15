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
  DeleteServiceRequest,
  DeleteServiceRequestFilterSensitiveLog,
  DeleteServiceResponse,
  DeleteServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteServiceCommand,
  serializeAws_json1_1DeleteServiceCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteServiceCommandInput extends DeleteServiceRequest {}
export interface DeleteServiceCommandOutput extends DeleteServiceResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified service within a cluster. You can delete a service if you have no
 * 			running tasks in it and the desired task count is zero. If the service is actively
 * 			maintaining tasks, you can't delete it, and you must update the service to a desired
 * 			task count of zero. For more information, see <a>UpdateService</a>.</p>
 *          <note>
 *             <p>When you delete a service, if there are still running tasks that require cleanup,
 * 				the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the
 * 				service is no longer visible in the console or in the <a>ListServices</a>
 * 				API operation. After all tasks have transitioned to either <code>STOPPING</code> or
 * 					<code>STOPPED</code> status, the service status moves from <code>DRAINING</code>
 * 				to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or
 * 					<code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future,
 * 					<code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record
 * 				keeping, and <a>DescribeServices</a> calls on those services return a
 * 					<code>ServiceNotFoundException</code> error.</p>
 *          </note>
 *          <important>
 *             <p>If you attempt to create a new service with the same name as an existing service
 * 				in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an
 * 				error.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DeleteServiceCommand extends $Command<
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
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

  constructor(readonly input: DeleteServiceCommandInput) {
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
  ): Handler<DeleteServiceCommandInput, DeleteServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteServiceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteServiceCommandOutput> {
    return deserializeAws_json1_1DeleteServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
