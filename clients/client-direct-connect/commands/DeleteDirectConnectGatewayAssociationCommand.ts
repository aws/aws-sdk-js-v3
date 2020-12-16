import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand,
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

export type DeleteDirectConnectGatewayAssociationCommandInput = DeleteDirectConnectGatewayAssociationRequest;
export type DeleteDirectConnectGatewayAssociationCommandOutput = DeleteDirectConnectGatewayAssociationResult &
  __MetadataBearer;

/**
 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
 *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
 */
export class DeleteDirectConnectGatewayAssociationCommand extends $Command<
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDirectConnectGatewayAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDirectConnectGatewayAssociationCommandInput, DeleteDirectConnectGatewayAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDirectConnectGatewayAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
