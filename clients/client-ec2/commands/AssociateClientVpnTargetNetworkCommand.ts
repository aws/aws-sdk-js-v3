import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateClientVpnTargetNetworkRequest, AssociateClientVpnTargetNetworkResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateClientVpnTargetNetworkCommand,
  serializeAws_ec2AssociateClientVpnTargetNetworkCommand,
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

export type AssociateClientVpnTargetNetworkCommandInput = AssociateClientVpnTargetNetworkRequest;
export type AssociateClientVpnTargetNetworkCommandOutput = AssociateClientVpnTargetNetworkResult & __MetadataBearer;

/**
 * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
 * 	        <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
 */
export class AssociateClientVpnTargetNetworkCommand extends $Command<
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateClientVpnTargetNetworkCommandInput) {
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
  ): Handler<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateClientVpnTargetNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateClientVpnTargetNetworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateClientVpnTargetNetworkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateClientVpnTargetNetworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2AssociateClientVpnTargetNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
