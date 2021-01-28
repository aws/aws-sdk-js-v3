import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualRouterInput, DeleteVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualRouterCommand,
  serializeAws_restJson1DeleteVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
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

export type DeleteVirtualRouterCommandInput = DeleteVirtualRouterInput;
export type DeleteVirtualRouterCommandOutput = DeleteVirtualRouterOutput & __MetadataBearer;

/**
 * <p>Deletes an existing virtual router.</p>
 *          <p>You must delete any routes associated with the virtual router before you can delete the
 *          router itself.</p>
 */
export class DeleteVirtualRouterCommand extends $Command<
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVirtualRouterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVirtualRouterCommandInput, DeleteVirtualRouterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteVirtualRouterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualRouterOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVirtualRouterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVirtualRouterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVirtualRouterCommandOutput> {
    return deserializeAws_restJson1DeleteVirtualRouterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
