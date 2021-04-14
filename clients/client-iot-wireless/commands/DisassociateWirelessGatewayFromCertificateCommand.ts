import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessGatewayFromCertificateRequest,
  DisassociateWirelessGatewayFromCertificateResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand,
  serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand,
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

export type DisassociateWirelessGatewayFromCertificateCommandInput = DisassociateWirelessGatewayFromCertificateRequest;
export type DisassociateWirelessGatewayFromCertificateCommandOutput = DisassociateWirelessGatewayFromCertificateResponse &
  __MetadataBearer;

/**
 * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
 */
export class DisassociateWirelessGatewayFromCertificateCommand extends $Command<
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateWirelessGatewayFromCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateWirelessGatewayFromCertificateCommandInput,
    DisassociateWirelessGatewayFromCertificateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessGatewayFromCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessGatewayFromCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessGatewayFromCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWirelessGatewayFromCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> {
    return deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
