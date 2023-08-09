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
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_1";
import { de_CreateDefaultSubnetCommand, se_CreateDefaultSubnetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDefaultSubnetCommand}.
 */
export interface CreateDefaultSubnetCommandInput extends CreateDefaultSubnetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDefaultSubnetCommand}.
 */
export interface CreateDefaultSubnetCommandOutput extends CreateDefaultSubnetResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
 *             specified Availability Zone in your default VPC. You can have only one default subnet
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Create a default
 *                 subnet</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateDefaultSubnetRequest
 *   AvailabilityZone: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   Ipv6Native: true || false,
 * };
 * const command = new CreateDefaultSubnetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDefaultSubnetResult
 * //   Subnet: { // Subnet
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     AvailableIpAddressCount: Number("int"),
 * //     CidrBlock: "STRING_VALUE",
 * //     DefaultForAz: true || false,
 * //     EnableLniAtDeviceIndex: Number("int"),
 * //     MapPublicIpOnLaunch: true || false,
 * //     MapCustomerOwnedIpOnLaunch: true || false,
 * //     CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //     State: "pending" || "available",
 * //     SubnetId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     AssignIpv6AddressOnCreation: true || false,
 * //     Ipv6CidrBlockAssociationSet: [ // SubnetIpv6CidrBlockAssociationSet
 * //       { // SubnetIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetArn: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     EnableDns64: true || false,
 * //     Ipv6Native: true || false,
 * //     PrivateDnsNameOptionsOnLaunch: { // PrivateDnsNameOptionsOnLaunch
 * //       HostnameType: "ip-name" || "resource-name",
 * //       EnableResourceNameDnsARecord: true || false,
 * //       EnableResourceNameDnsAAAARecord: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDefaultSubnetCommandInput - {@link CreateDefaultSubnetCommandInput}
 * @returns {@link CreateDefaultSubnetCommandOutput}
 * @see {@link CreateDefaultSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateDefaultSubnetCommand extends $Command<
  CreateDefaultSubnetCommandInput,
  CreateDefaultSubnetCommandOutput,
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
  constructor(readonly input: CreateDefaultSubnetCommandInput) {
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
  ): Handler<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDefaultSubnetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateDefaultSubnetCommand";
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
  private serialize(input: CreateDefaultSubnetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDefaultSubnetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDefaultSubnetCommandOutput> {
    return de_CreateDefaultSubnetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
