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
import { DescribeNetworkInterfacesRequest, DescribeNetworkInterfacesResult } from "../models/models_4";
import { de_DescribeNetworkInterfacesCommand, se_DescribeNetworkInterfacesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInterfacesCommand}.
 */
export interface DescribeNetworkInterfacesCommandInput extends DescribeNetworkInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInterfacesCommand}.
 */
export interface DescribeNetworkInterfacesCommandOutput extends DescribeNetworkInterfacesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your network interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInterfacesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NetworkInterfaceIds: [ // NetworkInterfaceIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInterfacesResult
 * //   NetworkInterfaces: [ // NetworkInterfaceList
 * //     { // NetworkInterface
 * //       Association: { // NetworkInterfaceAssociation
 * //         AllocationId: "STRING_VALUE",
 * //         AssociationId: "STRING_VALUE",
 * //         IpOwnerId: "STRING_VALUE",
 * //         PublicDnsName: "STRING_VALUE",
 * //         PublicIp: "STRING_VALUE",
 * //         CustomerOwnedIp: "STRING_VALUE",
 * //         CarrierIp: "STRING_VALUE",
 * //       },
 * //       Attachment: { // NetworkInterfaceAttachment
 * //         AttachTime: new Date("TIMESTAMP"),
 * //         AttachmentId: "STRING_VALUE",
 * //         DeleteOnTermination: true || false,
 * //         DeviceIndex: Number("int"),
 * //         NetworkCardIndex: Number("int"),
 * //         InstanceId: "STRING_VALUE",
 * //         InstanceOwnerId: "STRING_VALUE",
 * //         Status: "attaching" || "attached" || "detaching" || "detached",
 * //         EnaSrdSpecification: { // AttachmentEnaSrdSpecification
 * //           EnaSrdEnabled: true || false,
 * //           EnaSrdUdpSpecification: { // AttachmentEnaSrdUdpSpecification
 * //             EnaSrdUdpEnabled: true || false,
 * //           },
 * //         },
 * //       },
 * //       AvailabilityZone: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Groups: [ // GroupIdentifierList
 * //         { // GroupIdentifier
 * //           GroupName: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InterfaceType: "interface" || "natGateway" || "efa" || "trunk" || "load_balancer" || "network_load_balancer" || "vpc_endpoint" || "branch" || "transit_gateway" || "lambda" || "quicksight" || "global_accelerator_managed" || "api_gateway_managed" || "gateway_load_balancer" || "gateway_load_balancer_endpoint" || "iot_rules_managed" || "aws_codestar_connections_managed",
 * //       Ipv6Addresses: [ // NetworkInterfaceIpv6AddressesList
 * //         { // NetworkInterfaceIpv6Address
 * //           Ipv6Address: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MacAddress: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       PrivateIpAddresses: [ // NetworkInterfacePrivateIpAddressList
 * //         { // NetworkInterfacePrivateIpAddress
 * //           Association: {
 * //             AllocationId: "STRING_VALUE",
 * //             AssociationId: "STRING_VALUE",
 * //             IpOwnerId: "STRING_VALUE",
 * //             PublicDnsName: "STRING_VALUE",
 * //             PublicIp: "STRING_VALUE",
 * //             CustomerOwnedIp: "STRING_VALUE",
 * //             CarrierIp: "STRING_VALUE",
 * //           },
 * //           Primary: true || false,
 * //           PrivateDnsName: "STRING_VALUE",
 * //           PrivateIpAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv4Prefixes: [ // Ipv4PrefixesList
 * //         { // Ipv4PrefixSpecification
 * //           Ipv4Prefix: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv6Prefixes: [ // Ipv6PrefixesList
 * //         { // Ipv6PrefixSpecification
 * //           Ipv6Prefix: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RequesterId: "STRING_VALUE",
 * //       RequesterManaged: true || false,
 * //       SourceDestCheck: true || false,
 * //       Status: "available" || "associated" || "attaching" || "in-use" || "detaching",
 * //       SubnetId: "STRING_VALUE",
 * //       TagSet: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       DenyAllIgwTraffic: true || false,
 * //       Ipv6Native: true || false,
 * //       Ipv6Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInterfacesCommandInput - {@link DescribeNetworkInterfacesCommandInput}
 * @returns {@link DescribeNetworkInterfacesCommandOutput}
 * @see {@link DescribeNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a network interface
 * ```javascript
 * //
 * const input = {
 *   "NetworkInterfaceIds": [
 *     "eni-e5aa89a3"
 *   ]
 * };
 * const command = new DescribeNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkInterfaces": [
 *     {
 *       "Association": {
 *         "AssociationId": "eipassoc-0fbb766a",
 *         "IpOwnerId": "123456789012",
 *         "PublicDnsName": "ec2-203-0-113-12.compute-1.amazonaws.com",
 *         "PublicIp": "203.0.113.12"
 *       },
 *       "Attachment": {
 *         "AttachTime": "2013-11-30T23:36:42.000Z",
 *         "AttachmentId": "eni-attach-66c4350a",
 *         "DeleteOnTermination": false,
 *         "DeviceIndex": 1,
 *         "InstanceId": "i-1234567890abcdef0",
 *         "InstanceOwnerId": "123456789012",
 *         "Status": "attached"
 *       },
 *       "AvailabilityZone": "us-east-1d",
 *       "Description": "my network interface",
 *       "Groups": [
 *         {
 *           "GroupId": "sg-8637d3e3",
 *           "GroupName": "default"
 *         }
 *       ],
 *       "MacAddress": "02:2f:8f:b0:cf:75",
 *       "NetworkInterfaceId": "eni-e5aa89a3",
 *       "OwnerId": "123456789012",
 *       "PrivateDnsName": "ip-10-0-1-17.ec2.internal",
 *       "PrivateIpAddress": "10.0.1.17",
 *       "PrivateIpAddresses": [
 *         {
 *           "Association": {
 *             "AssociationId": "eipassoc-0fbb766a",
 *             "IpOwnerId": "123456789012",
 *             "PublicDnsName": "ec2-203-0-113-12.compute-1.amazonaws.com",
 *             "PublicIp": "203.0.113.12"
 *           },
 *           "Primary": true,
 *           "PrivateDnsName": "ip-10-0-1-17.ec2.internal",
 *           "PrivateIpAddress": "10.0.1.17"
 *         }
 *       ],
 *       "RequesterManaged": false,
 *       "SourceDestCheck": true,
 *       "Status": "in-use",
 *       "SubnetId": "subnet-b61f49f0",
 *       "TagSet": [],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-network-interfaces-1
 * ```
 *
 */
export class DescribeNetworkInterfacesCommand extends $Command<
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
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
  constructor(readonly input: DescribeNetworkInterfacesCommandInput) {
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
  ): Handler<DescribeNetworkInterfacesCommandInput, DescribeNetworkInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInterfacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInterfacesCommand";
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
  private serialize(input: DescribeNetworkInterfacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNetworkInterfacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInterfacesCommandOutput> {
    return de_DescribeNetworkInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
