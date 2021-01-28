import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualGatewayInput, DeleteVirtualGatewayOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualGatewayCommand,
  serializeAws_restJson1DeleteVirtualGatewayCommand,
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

export type DeleteVirtualGatewayCommandInput = DeleteVirtualGatewayInput;
export type DeleteVirtualGatewayCommandOutput = DeleteVirtualGatewayOutput & __MetadataBearer;

/**
 * <p>Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway
 *          routes are associated to it.</p>
 */
export class DeleteVirtualGatewayCommand extends $Command<
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVirtualGatewayCommandInput) {
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
  ): Handler<DeleteVirtualGatewayCommandInput, DeleteVirtualGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteVirtualGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVirtualGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVirtualGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVirtualGatewayCommandOutput> {
    return deserializeAws_restJson1DeleteVirtualGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
