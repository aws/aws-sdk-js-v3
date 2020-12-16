import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  DisassociateTransitGatewayConnectPeerRequest,
  DisassociateTransitGatewayConnectPeerResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand,
  serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand,
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

export type DisassociateTransitGatewayConnectPeerCommandInput = DisassociateTransitGatewayConnectPeerRequest;
export type DisassociateTransitGatewayConnectPeerCommandOutput = DisassociateTransitGatewayConnectPeerResponse &
  __MetadataBearer;

/**
 * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
 */
export class DisassociateTransitGatewayConnectPeerCommand extends $Command<
  DisassociateTransitGatewayConnectPeerCommandInput,
  DisassociateTransitGatewayConnectPeerCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTransitGatewayConnectPeerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateTransitGatewayConnectPeerCommandInput, DisassociateTransitGatewayConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DisassociateTransitGatewayConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTransitGatewayConnectPeerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTransitGatewayConnectPeerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTransitGatewayConnectPeerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> {
    return deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
