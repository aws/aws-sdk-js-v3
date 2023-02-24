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
  RevokeSecurityGroupEgressRequest,
  RevokeSecurityGroupEgressRequestFilterSensitiveLog,
  RevokeSecurityGroupEgressResult,
  RevokeSecurityGroupEgressResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RevokeSecurityGroupEgressCommand,
  serializeAws_ec2RevokeSecurityGroupEgressCommand,
} from "../protocols/Aws_ec2";

export interface RevokeSecurityGroupEgressCommandInput extends RevokeSecurityGroupEgressRequest {}
export interface RevokeSecurityGroupEgressCommandOutput extends RevokeSecurityGroupEgressResult, __MetadataBearer {}

/**
 * <p>[VPC only] Removes the specified outbound (egress) rules from a security group for EC2-VPC.
 *        This action does not apply to security groups for use in EC2-Classic.</p>
 *          <p>You can specify rules using either rule IDs or security group rule properties. If you use
 *          rule properties, the values that you specify (for example, ports) must match the existing rule's
 *          values exactly. Each rule has a protocol, from and to ports, and destination (CIDR range,
 *          security group, or prefix list). For the TCP and UDP protocols, you must also specify the
 *          destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type
 *          and code. If the security group rule has a description, you do not need to specify the description
 *          to revoke the rule.</p>
 *          <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is
 *          returned, and the output describes the security group rules that were not revoked.</p>
 *          <p>Amazon Web Services recommends that you describe the security group to verify that the rules were removed.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However,
 *          a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RevokeSecurityGroupEgressCommand extends $Command<
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeSecurityGroupEgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSecurityGroupEgressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeSecurityGroupEgressResultFilterSensitiveLog,
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
