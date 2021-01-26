import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateContainerAgentRequest, UpdateContainerAgentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateContainerAgentCommand,
  serializeAws_json1_1UpdateContainerAgentCommand,
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

export type UpdateContainerAgentCommandInput = UpdateContainerAgentRequest;
export type UpdateContainerAgentCommandOutput = UpdateContainerAgentResponse & __MetadataBearer;

/**
 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
 * 			Amazon ECS container agent does not interrupt running tasks or services on the container
 * 			instance. The process for updating the agent differs depending on whether your container
 * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
 * 		       <p>
 * 			         <code>UpdateContainerAgent</code> requires the Amazon ECS-optimized AMI or Amazon Linux with
 * 			the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS
 * 			container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually Updating the Amazon ECS Container Agent</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class UpdateContainerAgentCommand extends $Command<
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateContainerAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContainerAgentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateContainerAgentResponse.filterSensitiveLog,
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
