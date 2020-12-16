import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnConnectionRouteRequest } from "../models/models_1";
import {
  deserializeAws_ec2CreateVpnConnectionRouteCommand,
  serializeAws_ec2CreateVpnConnectionRouteCommand,
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

export type CreateVpnConnectionRouteCommandInput = CreateVpnConnectionRouteRequest;
export type CreateVpnConnectionRouteCommandOutput = __MetadataBearer;

/**
 * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 */
export class CreateVpnConnectionRouteCommand extends $Command<
  CreateVpnConnectionRouteCommandInput,
  CreateVpnConnectionRouteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpnConnectionRouteCommandInput) {
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
  ): Handler<CreateVpnConnectionRouteCommandInput, CreateVpnConnectionRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpnConnectionRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpnConnectionRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpnConnectionRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpnConnectionRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpnConnectionRouteCommandOutput> {
    return deserializeAws_ec2CreateVpnConnectionRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
