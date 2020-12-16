import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnConnectionRequest, CreateVpnConnectionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateVpnConnectionCommand,
  serializeAws_ec2CreateVpnConnectionCommand,
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

export type CreateVpnConnectionCommandInput = CreateVpnConnectionRequest;
export type CreateVpnConnectionCommandOutput = CreateVpnConnectionResult & __MetadataBearer;

/**
 * <p>Creates a VPN connection between an existing virtual private gateway or transit gateway and a
 *             customer gateway. The supported connection type is <code>ipsec.1</code>.</p>
 *         <p>The response includes information that you need to give to your network administrator
 *             to configure your customer gateway.</p>
 *         <important>
 *             <p>We strongly recommend that you use HTTPS when calling this operation because the
 *                 response contains sensitive cryptographic information for configuring your customer
 *                 gateway device.</p>
 *         </important>
 *         <p>If you decide to shut down your VPN connection for any reason and later create a new
 *             VPN connection, you must reconfigure your customer gateway with the new information
 *             returned from this call.</p>
 *         <p>This is an idempotent operation. If you perform the operation more than once, Amazon
 *             EC2 doesn't return an error.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 */
export class CreateVpnConnectionCommand extends $Command<
  CreateVpnConnectionCommandInput,
  CreateVpnConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpnConnectionCommandInput) {
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
  ): Handler<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpnConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpnConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpnConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpnConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpnConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpnConnectionCommandOutput> {
    return deserializeAws_ec2CreateVpnConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
