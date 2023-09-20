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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateNatGatewayAddressRequest, DisassociateNatGatewayAddressResult } from "../models/models_5";
import { de_DisassociateNatGatewayAddressCommand, se_DisassociateNatGatewayAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateNatGatewayAddressCommand}.
 */
export interface DisassociateNatGatewayAddressCommandInput extends DisassociateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNatGatewayAddressCommand}.
 */
export interface DisassociateNatGatewayAddressCommandOutput
  extends DisassociateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway.
 *             You cannot disassociate your primary EIP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p>
 *          <p>An EIP is released only at the end of MaxDrainDurationSeconds. It stays
 *             associated and supports the existing connections but does not support any new connections
 *             (new connections are distributed across the remaining associated EIPs). As the existing
 *             connections drain out, the EIPs (and the corresponding private IP addresses mapped to them)
 *             are released.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   AssociationIds: [ // EipAssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxDrainDurationSeconds: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DisassociateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateNatGatewayAddressResult
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
 * @param DisassociateNatGatewayAddressCommandInput - {@link DisassociateNatGatewayAddressCommandInput}
 * @returns {@link DisassociateNatGatewayAddressCommandOutput}
 * @see {@link DisassociateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateNatGatewayAddress",
      },
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
  private serialize(input: DisassociateNatGatewayAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateNatGatewayAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateNatGatewayAddressCommandOutput> {
    return de_DisassociateNatGatewayAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
