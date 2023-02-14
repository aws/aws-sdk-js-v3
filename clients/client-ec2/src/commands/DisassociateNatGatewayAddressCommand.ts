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
  DisassociateNatGatewayAddressRequest,
  DisassociateNatGatewayAddressRequestFilterSensitiveLog,
  DisassociateNatGatewayAddressResult,
  DisassociateNatGatewayAddressResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateNatGatewayAddressCommand,
  serializeAws_ec2DisassociateNatGatewayAddressCommand,
} from "../protocols/Aws_ec2";

export interface DisassociateNatGatewayAddressCommandInput extends DisassociateNatGatewayAddressRequest {}
export interface DisassociateNatGatewayAddressCommandOutput
  extends DisassociateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * <p>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway. You cannot disassociate your primary EIP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p>
 *          <p>An EIP will only be released at the end of MaxDrainDurationSeconds. The EIPs stay
 *             associated and support the existing connections but do not support any new connections
 *             (new connections are distributed across the remaining associated EIPs). As the existing
 *             connections drain out, the EIPs (and the corresponding private IPs mapped to them) get
 *             released.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisassociateNatGatewayAddressCommand extends $Command<
  DisassociateNatGatewayAddressCommandInput,
  DisassociateNatGatewayAddressCommandOutput,
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

  constructor(readonly input: DisassociateNatGatewayAddressCommandInput) {
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
  ): Handler<DisassociateNatGatewayAddressCommandInput, DisassociateNatGatewayAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateNatGatewayAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateNatGatewayAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateNatGatewayAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateNatGatewayAddressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateNatGatewayAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateNatGatewayAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateNatGatewayAddressCommandOutput> {
    return deserializeAws_ec2DisassociateNatGatewayAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
