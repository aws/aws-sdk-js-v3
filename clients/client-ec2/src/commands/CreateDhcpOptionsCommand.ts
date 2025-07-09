// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDhcpOptionsRequest, CreateDhcpOptionsResult } from "../models/models_1";
import { de_CreateDhcpOptionsCommand, se_CreateDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a custom set of DHCP options. After you create a DHCP option set, you associate
 * 	       it with a VPC. After you associate a DHCP option set with a VPC, all existing and newly
 * 	       launched instances in the VPC use this set of DHCP options.</p>
 *          <p>The following are the individual DHCP options you can specify. For more information, see
 *            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP option sets</a>
 *            in the <i>Amazon VPC User Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>domain-name</code> - If you're using AmazonProvidedDNS in <code>us-east-1</code>,
 *                    specify <code>ec2.internal</code>. If you're using AmazonProvidedDNS in any other Region,
 *                    specify <code>region.compute.internal</code>. Otherwise, specify a custom domain name.
 *                    This value is used to complete unqualified DNS hostnames.</p>
 *                <p>Some Linux operating systems accept multiple domain names separated by spaces.
 *                    However, Windows and other Linux operating systems treat the value as a single
 *                    domain, which results in unexpected behavior. If your DHCP option set is
 *                    associated with a VPC that has instances running operating systems that treat
 *                    the value as a single domain, specify only one domain name.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>domain-name-servers</code> - The IP addresses of up to four DNS servers,
 *                    or AmazonProvidedDNS. To specify multiple domain name servers in a single parameter,
 *                    separate the IP addresses using commas. To have your instances receive custom DNS
 *                    hostnames as specified in <code>domain-name</code>, you must specify a custom DNS
 *                    server.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ntp-servers</code> - The IP addresses of up to eight Network Time Protocol (NTP)
 *                    servers (four IPv4 addresses and four IPv6 addresses).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name
 *                    servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that
 *                    you specify 2. Broadcast and multicast are not supported. For more information about
 *                    NetBIOS node types, see <a href="https://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ipv6-address-preferred-lease-time</code> - A value (in seconds, minutes, hours, or years) for how frequently a running instance with an IPv6 assigned to it goes through DHCPv6 lease renewal.
 *                    Acceptable values are between 140 and 2147483647 seconds (approximately 68 years). If no value is entered, the default lease time is 140 seconds. If you use long-term addressing for EC2 instances, you can increase the lease time and avoid frequent
 *                    lease renewal requests. Lease renewal typically occurs when half of the lease time has elapsed.</p>
 *             </li>
 *          </ul>
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
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
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
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DhcpOptionsId: "STRING_VALUE",
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
 *
 * @example To create a DHCP options set
 * ```javascript
 * // This example creates a DHCP options set.
 * const input = {
 *   DhcpConfigurations: [
 *     {
 *       Key: "domain-name-servers",
 *       Values: [
 *         "10.2.5.1",
 *         "10.2.5.2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new CreateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DhcpOptions: {
 *     DhcpConfigurations: [
 *       {
 *         Key: "domain-name-servers",
 *         Values: [
 *           {
 *             Value: "10.2.5.2"
 *           },
 *           {
 *             Value: "10.2.5.1"
 *           }
 *         ]
 *       }
 *     ],
 *     DhcpOptionsId: "dopt-d9070ebb"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDhcpOptionsCommand extends $Command
  .classBuilder<
    CreateDhcpOptionsCommandInput,
    CreateDhcpOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateDhcpOptions", {})
  .n("EC2Client", "CreateDhcpOptionsCommand")
  .f(void 0, void 0)
  .ser(se_CreateDhcpOptionsCommand)
  .de(de_CreateDhcpOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDhcpOptionsRequest;
      output: CreateDhcpOptionsResult;
    };
    sdk: {
      input: CreateDhcpOptionsCommandInput;
      output: CreateDhcpOptionsCommandOutput;
    };
  };
}
