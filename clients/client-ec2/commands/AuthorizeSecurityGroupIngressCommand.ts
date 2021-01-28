import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupIngressRequest } from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeSecurityGroupIngressCommand,
  serializeAws_ec2AuthorizeSecurityGroupIngressCommand,
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

export type AuthorizeSecurityGroupIngressCommandInput = AuthorizeSecurityGroupIngressRequest;
export type AuthorizeSecurityGroupIngressCommandOutput = __MetadataBearer;

/**
 * <p>Adds the specified ingress rules to a security group.</p>
 *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR
 *        address ranges, or from the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For TCP and UDP, you must also specify the destination port or port range.
 *        For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 *        You can use -1 to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
 *          However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 */
export class AuthorizeSecurityGroupIngressCommand extends $Command<
  AuthorizeSecurityGroupIngressCommandInput,
  AuthorizeSecurityGroupIngressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeSecurityGroupIngressCommandInput) {
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
  ): Handler<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeSecurityGroupIngressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeSecurityGroupIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AuthorizeSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput> {
    return deserializeAws_ec2AuthorizeSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
