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
  RegisterTransitGatewayMulticastGroupMembersRequest,
  RegisterTransitGatewayMulticastGroupMembersRequestFilterSensitiveLog,
  RegisterTransitGatewayMulticastGroupMembersResult,
  RegisterTransitGatewayMulticastGroupMembersResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand,
  serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand,
} from "../protocols/Aws_ec2";

export interface RegisterTransitGatewayMulticastGroupMembersCommandInput
  extends RegisterTransitGatewayMulticastGroupMembersRequest {}
export interface RegisterTransitGatewayMulticastGroupMembersCommandOutput
  extends RegisterTransitGatewayMulticastGroupMembersResult,
    __MetadataBearer {}

/**
 * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
 *             with a supported EC2 instance that receives multicast traffic. For information about
 *             supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *          <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
 *             to the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RegisterTransitGatewayMulticastGroupMembersCommand extends $Command<
  RegisterTransitGatewayMulticastGroupMembersCommandInput,
  RegisterTransitGatewayMulticastGroupMembersCommandOutput,
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

  constructor(readonly input: RegisterTransitGatewayMulticastGroupMembersCommandInput) {
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
    RegisterTransitGatewayMulticastGroupMembersCommandInput,
    RegisterTransitGatewayMulticastGroupMembersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RegisterTransitGatewayMulticastGroupMembersCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterTransitGatewayMulticastGroupMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterTransitGatewayMulticastGroupMembersCommandOutput> {
    return deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
