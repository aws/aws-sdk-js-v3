import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnEndpointRequest, CreateClientVpnEndpointResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateClientVpnEndpointCommand,
  serializeAws_ec2CreateClientVpnEndpointCommand,
} from "../protocols/Aws_ec2";
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

export type CreateClientVpnEndpointCommandInput = CreateClientVpnEndpointRequest;
export type CreateClientVpnEndpointCommandOutput = CreateClientVpnEndpointResult & __MetadataBearer;

/**
 * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
 * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
 * 			are terminated.</p>
 */
export class CreateClientVpnEndpointCommand extends $Command<
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClientVpnEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClientVpnEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClientVpnEndpointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateClientVpnEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClientVpnEndpointCommandOutput> {
    return deserializeAws_ec2CreateClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
