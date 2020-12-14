import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeClientVpnIngressRequest, AuthorizeClientVpnIngressResult } from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeClientVpnIngressCommand,
  serializeAws_ec2AuthorizeClientVpnIngressCommand,
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

export type AuthorizeClientVpnIngressCommandInput = AuthorizeClientVpnIngressRequest;
export type AuthorizeClientVpnIngressCommandOutput = AuthorizeClientVpnIngressResult & __MetadataBearer;

/**
 * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
 * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
 * 			enable clients to access resources in AWS or on-premises networks.</p>
 */
export class AuthorizeClientVpnIngressCommand extends $Command<
  AuthorizeClientVpnIngressCommandInput,
  AuthorizeClientVpnIngressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeClientVpnIngressCommandInput) {
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
  ): Handler<AuthorizeClientVpnIngressCommandInput, AuthorizeClientVpnIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeClientVpnIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeClientVpnIngressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeClientVpnIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeClientVpnIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AuthorizeClientVpnIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeClientVpnIngressCommandOutput> {
    return deserializeAws_ec2AuthorizeClientVpnIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
