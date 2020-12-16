import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayConnectPeerRequest, CreateTransitGatewayConnectPeerResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayConnectPeerCommand,
  serializeAws_ec2CreateTransitGatewayConnectPeerCommand,
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

export type CreateTransitGatewayConnectPeerCommandInput = CreateTransitGatewayConnectPeerRequest;
export type CreateTransitGatewayConnectPeerCommandOutput = CreateTransitGatewayConnectPeerResult & __MetadataBearer;

/**
 * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a
 *             transit gateway and an appliance.</p>
 *         <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a> in the <i>Transit Gateways Guide</i>.</p>
 */
export class CreateTransitGatewayConnectPeerCommand extends $Command<
  CreateTransitGatewayConnectPeerCommandInput,
  CreateTransitGatewayConnectPeerCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayConnectPeerCommandInput) {
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
  ): Handler<CreateTransitGatewayConnectPeerCommandInput, CreateTransitGatewayConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayConnectPeerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayConnectPeerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayConnectPeerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayConnectPeerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayConnectPeerCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
