import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  ApplySecurityGroupsToClientVpnTargetNetworkResult,
} from "../models/models_0";
import {
  deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand,
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

export type ApplySecurityGroupsToClientVpnTargetNetworkCommandInput = ApplySecurityGroupsToClientVpnTargetNetworkRequest;
export type ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput = ApplySecurityGroupsToClientVpnTargetNetworkResult &
  __MetadataBearer;

/**
 * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
 * 			security groups with the specified security groups.</p>
 */
export class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command<
  ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput) {
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
  ): Handler<
    ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ApplySecurityGroupsToClientVpnTargetNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplySecurityGroupsToClientVpnTargetNetworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApplySecurityGroupsToClientVpnTargetNetworkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
