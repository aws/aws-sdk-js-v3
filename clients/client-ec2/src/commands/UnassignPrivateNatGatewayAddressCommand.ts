// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignPrivateNatGatewayAddressRequest, UnassignPrivateNatGatewayAddressResult } from "../models/models_7";
import {
  de_UnassignPrivateNatGatewayAddressCommand,
  se_UnassignPrivateNatGatewayAddressCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnassignPrivateNatGatewayAddressCommand}.
 */
export interface UnassignPrivateNatGatewayAddressCommandInput extends UnassignPrivateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link UnassignPrivateNatGatewayAddressCommand}.
 */
export interface UnassignPrivateNatGatewayAddressCommandOutput
  extends UnassignPrivateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // UnassignPrivateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   PrivateIpAddresses: [ // IpList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxDrainDurationSeconds: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new UnassignPrivateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // UnassignPrivateNatGatewayAddressResult
 * //   NatGatewayId: "STRING_VALUE",
 * //   NatGatewayAddresses: [ // NatGatewayAddressList
 * //     { // NatGatewayAddress
 * //       AllocationId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       PrivateIp: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       IsPrimary: true || false,
 * //       FailureMessage: "STRING_VALUE",
 * //       Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnassignPrivateNatGatewayAddressCommandInput - {@link UnassignPrivateNatGatewayAddressCommandInput}
 * @returns {@link UnassignPrivateNatGatewayAddressCommandOutput}
 * @see {@link UnassignPrivateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: UnassignPrivateNatGatewayAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UnassignPrivateNatGatewayAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UnassignPrivateNatGatewayAddressCommandOutput> {
    return de_UnassignPrivateNatGatewayAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
