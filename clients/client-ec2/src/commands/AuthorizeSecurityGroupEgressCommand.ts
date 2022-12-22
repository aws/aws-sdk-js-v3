// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AuthorizeSecurityGroupEgressRequest,
  AuthorizeSecurityGroupEgressRequestFilterSensitiveLog,
  AuthorizeSecurityGroupEgressResult,
  AuthorizeSecurityGroupEgressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeSecurityGroupEgressCommand,
  serializeAws_ec2AuthorizeSecurityGroupEgressCommand,
} from "../protocols/Aws_ec2";

export interface AuthorizeSecurityGroupEgressCommandInput extends AuthorizeSecurityGroupEgressRequest {}
export interface AuthorizeSecurityGroupEgressCommandOutput
  extends AuthorizeSecurityGroupEgressResult,
    __MetadataBearer {}

/**
 * <p>[VPC only] Adds the specified outbound (egress) rules to a security group for use with a VPC.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
 *             address ranges, or to the instances that are associated with the specified source
 *             security groups. When specifying an outbound rule for your security group in a VPC, the
 *             <code>IpPermissions</code> must include a destination for the traffic.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For the TCP and UDP protocols, you must also specify the destination port or port range.
 *        For the ICMP protocol, you must also specify the ICMP type and code.
 *        You can use -1 for the type or code to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
 *          <p>For information about VPC security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AuthorizeSecurityGroupEgressCommand extends $Command<
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeSecurityGroupEgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeSecurityGroupEgressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeSecurityGroupEgressResultFilterSensitiveLog,
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
