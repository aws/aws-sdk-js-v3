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
  AssociateNatGatewayAddressRequest,
  AssociateNatGatewayAddressRequestFilterSensitiveLog,
  AssociateNatGatewayAddressResult,
  AssociateNatGatewayAddressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateNatGatewayAddressCommand,
  serializeAws_ec2AssociateNatGatewayAddressCommand,
} from "../protocols/Aws_ec2";

export interface AssociateNatGatewayAddressCommandInput extends AssociateNatGatewayAddressRequest {}
export interface AssociateNatGatewayAddressCommandOutput extends AssociateNatGatewayAddressResult, __MetadataBearer {}

/**
 * <p>Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-eips">Elastic IP address quotas</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateNatGatewayAddressCommand extends $Command<
  AssociateNatGatewayAddressCommandInput,
  AssociateNatGatewayAddressCommandOutput,
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

  constructor(readonly input: AssociateNatGatewayAddressCommandInput) {
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
  ): Handler<AssociateNatGatewayAddressCommandInput, AssociateNatGatewayAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateNatGatewayAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateNatGatewayAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateNatGatewayAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateNatGatewayAddressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateNatGatewayAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateNatGatewayAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateNatGatewayAddressCommandOutput> {
    return deserializeAws_ec2AssociateNatGatewayAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
