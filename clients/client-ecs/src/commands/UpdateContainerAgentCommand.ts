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
  UpdateContainerAgentRequest,
  UpdateContainerAgentRequestFilterSensitiveLog,
  UpdateContainerAgentResponse,
  UpdateContainerAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateContainerAgentCommand,
  serializeAws_json1_1UpdateContainerAgentCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateContainerAgentCommandInput extends UpdateContainerAgentRequest {}
export interface UpdateContainerAgentCommandOutput extends UpdateContainerAgentResponse, __MetadataBearer {}

/**
 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
 * 			Amazon ECS container agent doesn't interrupt running tasks or services on the container
 * 			instance. The process for updating the agent differs depending on whether your container
 * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
 *          <note>
 *             <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances
 * 				using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent,
 * 				you can update the <code>ecs-init</code> package. This updates the agent. For more
 * 				information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the
 * 					Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          </note>
 *          <note>
 *             <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not
 * 				apply to Windows container instances. We recommend that you launch new container
 * 				instances to update the agent version in your Windows clusters.</p>
 *          </note>
 *          <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon
 * 			Linux AMI with the <code>ecs-init</code> service installed and running. For help
 * 			updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerAgentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerAgentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateContainerAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerAgentCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class UpdateContainerAgentCommand extends $Command<
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
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

  constructor(readonly input: UpdateContainerAgentCommandInput) {
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
  ): Handler<UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContainerAgentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateContainerAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContainerAgentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateContainerAgentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContainerAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateContainerAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContainerAgentCommandOutput> {
    return deserializeAws_json1_1UpdateContainerAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
