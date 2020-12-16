import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DeleteCustomRoutingAcceleratorRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand,
  serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand,
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

export type DeleteCustomRoutingAcceleratorCommandInput = DeleteCustomRoutingAcceleratorRequest;
export type DeleteCustomRoutingAcceleratorCommandOutput = __MetadataBearer;

/**
 * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 * 	        <important>
 *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	</p>
 * 		          <p>The IP
 * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
 * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
 *          </important>
 */
export class DeleteCustomRoutingAcceleratorCommand extends $Command<
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomRoutingAcceleratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomRoutingAcceleratorCommandInput, DeleteCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DeleteCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomRoutingAcceleratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
