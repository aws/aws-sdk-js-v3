import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupEgressRequest } from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeSecurityGroupEgressCommand,
  serializeAws_ec2AuthorizeSecurityGroupEgressCommand,
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

export type AuthorizeSecurityGroupEgressCommandInput = AuthorizeSecurityGroupEgressRequest;
export type AuthorizeSecurityGroupEgressCommandOutput = __MetadataBearer;

/**
 * <p>[VPC only] Adds the specified egress rules to a security group for use with a VPC.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
 *       address ranges, or to the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For the TCP and UDP protocols, you must also specify the destination port or port range.
 *        For the ICMP protocol, you must also specify the ICMP type and code.
 *        You can use -1 for the type or code to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 */
export class AuthorizeSecurityGroupEgressCommand extends $Command<
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeSecurityGroupEgressCommandInput) {
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
  ): Handler<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeSecurityGroupEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AuthorizeSecurityGroupEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput> {
    return deserializeAws_ec2AuthorizeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
