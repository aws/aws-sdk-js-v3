import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectConnectGatewayCommand,
  serializeAws_json1_1CreateDirectConnectGatewayCommand,
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

export type CreateDirectConnectGatewayCommandInput = CreateDirectConnectGatewayRequest;
export type CreateDirectConnectGatewayCommandOutput = CreateDirectConnectGatewayResult & __MetadataBearer;

/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       AWS Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 */
export class CreateDirectConnectGatewayCommand extends $Command<
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectConnectGatewayCommandInput) {
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
  ): Handler<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectConnectGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectConnectGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectConnectGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayCommandOutput> {
    return deserializeAws_json1_1CreateDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
