import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeSecurityGroupEgressRequest, RevokeSecurityGroupEgressResult } from "../models/models_5";
import {
  deserializeAws_ec2RevokeSecurityGroupEgressCommand,
  serializeAws_ec2RevokeSecurityGroupEgressCommand,
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

export type RevokeSecurityGroupEgressCommandInput = RevokeSecurityGroupEgressRequest;
export type RevokeSecurityGroupEgressCommandOutput = RevokeSecurityGroupEgressResult & __MetadataBearer;

/**
 * <p>[VPC only] Removes the specified egress rules from a security group for EC2-VPC.
 *        This action does not apply to security groups for use in EC2-Classic. To remove a rule, the
 *        values that you specify (for example, ports) must match the existing rule's values
 *        exactly.</p>
 *          <note>
 *             <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is
 *                 returned, and the output describes the security group rules that were not revoked. </p>
 *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
 *                 that the rule has been removed.</p>
 *          </note>
 *          <p>Each rule consists of the protocol and the IPv4 or IPv6 CIDR range or source security
 *       group. For the TCP and UDP protocols, you must also specify the destination port or range of
 *       ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule
 *       has a description, you do not have to specify the description to revoke the rule.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
 */
export class RevokeSecurityGroupEgressCommand extends $Command<
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSecurityGroupEgressCommandInput) {
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
  ): Handler<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSecurityGroupEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeSecurityGroupEgressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RevokeSecurityGroupEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeSecurityGroupEgressCommandOutput> {
    return deserializeAws_ec2RevokeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
