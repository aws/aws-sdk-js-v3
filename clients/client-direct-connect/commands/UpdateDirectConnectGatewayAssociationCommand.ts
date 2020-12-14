import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  UpdateDirectConnectGatewayAssociationRequest,
  UpdateDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand,
  serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand,
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

export type UpdateDirectConnectGatewayAssociationCommandInput = UpdateDirectConnectGatewayAssociationRequest;
export type UpdateDirectConnectGatewayAssociationCommandOutput = UpdateDirectConnectGatewayAssociationResult &
  __MetadataBearer;

/**
 * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
 *          <p>Add or remove prefixes from the association.</p>
 */
export class UpdateDirectConnectGatewayAssociationCommand extends $Command<
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDirectConnectGatewayAssociationCommandInput) {
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
  ): Handler<UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateDirectConnectGatewayAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDirectConnectGatewayAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDirectConnectGatewayAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDirectConnectGatewayAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> {
    return deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
