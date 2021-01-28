import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterContainerInstanceCommand,
  serializeAws_json1_1DeregisterContainerInstanceCommand,
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

export type DeregisterContainerInstanceCommandInput = DeregisterContainerInstanceRequest;
export type DeregisterContainerInstanceCommandOutput = DeregisterContainerInstanceResponse & __MetadataBearer;

/**
 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
 * 			no longer available to run tasks.</p>
 * 		       <p>If you intend to use the container instance for some other purpose after
 * 			deregistration, you should stop all of the tasks running on the container instance
 * 			before deregistration. That prevents any orphaned tasks from consuming resources.</p>
 * 		       <p>Deregistering a container instance removes the instance from a cluster, but it does
 * 			not terminate the EC2 instance. If you are finished using the instance, be sure to
 * 			terminate it in the Amazon EC2 console to stop billing.</p>
 * 		       <note>
 * 			         <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
 * 				instance from your cluster (stopped container instances or instances with
 * 				disconnected agents are not automatically deregistered when terminated).</p>
 * 		       </note>
 */
export class DeregisterContainerInstanceCommand extends $Command<
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeregisterContainerInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterContainerInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterContainerInstanceResponse.filterSensitiveLog,
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
