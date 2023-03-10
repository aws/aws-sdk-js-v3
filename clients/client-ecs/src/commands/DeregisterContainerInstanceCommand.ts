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
  DeregisterContainerInstanceRequest,
  DeregisterContainerInstanceRequestFilterSensitiveLog,
  DeregisterContainerInstanceResponse,
  DeregisterContainerInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterContainerInstanceCommand,
  serializeAws_json1_1DeregisterContainerInstanceCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DeregisterContainerInstanceCommand}.
 */
export interface DeregisterContainerInstanceCommandInput extends DeregisterContainerInstanceRequest {}
/**
 * The output of {@link DeregisterContainerInstanceCommand}.
 */
export interface DeregisterContainerInstanceCommandOutput
  extends DeregisterContainerInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
 * 			no longer available to run tasks.</p>
 *          <p>If you intend to use the container instance for some other purpose after
 * 			deregistration, we recommend that you stop all of the tasks running on the container
 * 			instance before deregistration. That prevents any orphaned tasks from consuming
 * 			resources.</p>
 *          <p>Deregistering a container instance removes the instance from a cluster, but it doesn't
 * 			terminate the EC2 instance. If you are finished using the instance, be sure to terminate
 * 			it in the Amazon EC2 console to stop billing.</p>
 *          <note>
 *             <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
 * 				instance from your cluster (stopped container instances or instances with
 * 				disconnected agents aren't automatically deregistered when terminated).</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterContainerInstanceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @example To deregister a container instance from a cluster
 * ```javascript
 * // This example deregisters a container instance from the specified cluster in your default region. If there are still tasks running on the container instance, you must either stop those tasks before deregistering, or use the force option.
 * const input = {
 *   "cluster": "default",
 *   "containerInstance": "container_instance_UUID",
 *   "force": true
 * };
 * const command = new DeregisterContainerInstanceCommand(input);
 * await client.send(command);
 * // example id: bf624927-cf64-4f4b-8b7e-c024a4e682f6
 * ```
 *
 */
export class DeregisterContainerInstanceCommand extends $Command<
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
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

  constructor(readonly input: DeregisterContainerInstanceCommandInput) {
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
  ): Handler<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterContainerInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeregisterContainerInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterContainerInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterContainerInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterContainerInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterContainerInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterContainerInstanceCommandOutput> {
    return deserializeAws_json1_1DeregisterContainerInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
