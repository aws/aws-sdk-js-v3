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
import { CreateDhcpOptionsRequest, CreateDhcpOptionsResult } from "../models/models_1";
import { de_CreateDhcpOptionsCommand, se_CreateDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDhcpOptionsCommand}.
 */
export interface CreateDhcpOptionsCommandInput extends CreateDhcpOptionsRequest {}
/**
 * @public
 *
 * The output of {@link CreateDhcpOptionsCommand}.
 */
export interface CreateDhcpOptionsCommandOutput extends CreateDhcpOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a set of DHCP options for your VPC. After creating the set, you must
 * 				associate it with the VPC, causing all existing and new instances that you launch in
 * 				the VPC to use this set of DHCP options. The following are the individual DHCP
 * 				options you can specify. For more information about the options, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>domain-name-servers</code> - The IP addresses of up to four domain name
 *                     servers, or AmazonProvidedDNS. The default DHCP option set specifies
 *                     AmazonProvidedDNS. If specifying more than one domain name server, specify the
 *                     IP addresses in a single parameter, separated by commas. To have your instance
 *                     receive a custom DNS hostname as specified in <code>domain-name</code>, you must
 *                     set <code>domain-name-servers</code> to a custom DNS server.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>domain-name</code> - If you're using AmazonProvidedDNS in
 *                    <code>us-east-1</code>, specify <code>ec2.internal</code>. If you're using
 *                    AmazonProvidedDNS in another Region, specify
 *                    <code>region.compute.internal</code> (for example,
 *                    <code>ap-northeast-1.compute.internal</code>). Otherwise, specify a domain
 *                    name (for example, <code>ExampleCompany.com</code>). This value is used to complete
 *                    unqualified DNS hostnames. <b>Important</b>: Some
 *                    Linux operating systems accept multiple domain names separated by spaces.
 *                    However, Windows and other Linux operating systems treat the value as a single
 *                    domain, which results in unexpected behavior. If your DHCP options set is
 *                    associated with a VPC that has instances with multiple operating systems,
 *                    specify only one domain name.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ntp-servers</code> - The IP addresses of up to four Network Time Protocol (NTP)
 *                    servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name
 *                    servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that
 *                    you specify 2 (broadcast and multicast are not currently supported). For more information
 *                    about these node types, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Your VPC automatically starts out with a set of DHCP options that includes only a DNS
 * 			server that we provide (AmazonProvidedDNS). If you create a set of options, and if your
 * 			VPC has an internet gateway, make sure to set the <code>domain-name-servers</code>
 * 			option either to <code>AmazonProvidedDNS</code> or to a domain name server of your
 * 			choice. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the
 * 			<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateDhcpOptionsRequest
 *   DhcpConfigurations: [ // NewDhcpConfigurationList // required
 *     { // NewDhcpConfiguration
 *       Key: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new CreateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * // { // CreateDhcpOptionsResult
 * //   DhcpOptions: { // DhcpOptions
 * //     DhcpConfigurations: [ // DhcpConfigurationList
 * //       { // DhcpConfiguration
 * //         Key: "STRING_VALUE",
 * //         Values: [ // DhcpConfigurationValueList
 * //           { // AttributeValue
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DhcpOptionsId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDhcpOptionsCommandInput - {@link CreateDhcpOptionsCommandInput}
 * @returns {@link CreateDhcpOptionsCommandOutput}
 * @see {@link CreateDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link CreateDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a DHCP options set
 * ```javascript
 * // This example creates a DHCP options set.
 * const input = {
 *   "DhcpConfigurations": [
 *     {
 *       "Key": "domain-name-servers",
 *       "Values": [
 *         "10.2.5.1",
 *         "10.2.5.2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new CreateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DhcpOptions": {
 *     "DhcpConfigurations": [
 *       {
 *         "Key": "domain-name-servers",
 *         "Values": [
 *           {
 *             "Value": "10.2.5.2"
 *           },
 *           {
 *             "Value": "10.2.5.1"
 *           }
 *         ]
 *       }
 *     ],
 *     "DhcpOptionsId": "dopt-d9070ebb"
 *   }
 * }
 * *\/
 * // example id: ec2-create-dhcp-options-1
 * ```
 *
 */
export class CreateDhcpOptionsCommand extends $Command<
  CreateDhcpOptionsCommandInput,
  CreateDhcpOptionsCommandOutput,
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
  constructor(readonly input: CreateDhcpOptionsCommandInput) {
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
  ): Handler<CreateDhcpOptionsCommandInput, CreateDhcpOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDhcpOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateDhcpOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateDhcpOptions",
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
  private serialize(input: CreateDhcpOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDhcpOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDhcpOptionsCommandOutput> {
    return de_CreateDhcpOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
