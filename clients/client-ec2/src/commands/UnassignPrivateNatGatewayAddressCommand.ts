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
  UnassignPrivateNatGatewayAddressRequest,
  UnassignPrivateNatGatewayAddressRequestFilterSensitiveLog,
  UnassignPrivateNatGatewayAddressResult,
  UnassignPrivateNatGatewayAddressResultFilterSensitiveLog,
} from "../models/models_7";
import {
  deserializeAws_ec2UnassignPrivateNatGatewayAddressCommand,
  serializeAws_ec2UnassignPrivateNatGatewayAddressCommand,
} from "../protocols/Aws_ec2";

export interface UnassignPrivateNatGatewayAddressCommandInput extends UnassignPrivateNatGatewayAddressRequest {}
export interface UnassignPrivateNatGatewayAddressCommandOutput
  extends UnassignPrivateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * <p>Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p>
 *          <p>A private IP address will only be released at the end of MaxDrainDurationSeconds. The
 *             private IP addresses stay associated and support the existing connections but do not
 *             support any new connections (new connections are distributed across the remaining
 *             assigned private IP address). After the existing connections drain out, the private IP
 *             addresses get released. </p>
 *          <p></p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignPrivateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignPrivateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class UnassignPrivateNatGatewayAddressCommand extends $Command<
  UnassignPrivateNatGatewayAddressCommandInput,
  UnassignPrivateNatGatewayAddressCommandOutput,
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

  constructor(readonly input: UnassignPrivateNatGatewayAddressCommandInput) {
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
  ): Handler<UnassignPrivateNatGatewayAddressCommandInput, UnassignPrivateNatGatewayAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnassignPrivateNatGatewayAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UnassignPrivateNatGatewayAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnassignPrivateNatGatewayAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnassignPrivateNatGatewayAddressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UnassignPrivateNatGatewayAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UnassignPrivateNatGatewayAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UnassignPrivateNatGatewayAddressCommandOutput> {
    return deserializeAws_ec2UnassignPrivateNatGatewayAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
