// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomerGatewayRequest, CreateCustomerGatewayResult } from "../models/models_1";
import { de_CreateCustomerGatewayCommand, se_CreateCustomerGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomerGatewayCommand}.
 */
export interface CreateCustomerGatewayCommandInput extends CreateCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomerGatewayCommand}.
 */
export interface CreateCustomerGatewayCommandOutput extends CreateCustomerGatewayResult, __MetadataBearer {}

/**
 * <p>Provides information to Amazon Web Services about your customer gateway device. The
 *             customer gateway device is the appliance at your end of the VPN connection. You
 *             must provide the IP address of the customer gateway device’s external
 *             interface. The IP address must be static and can be behind a device performing network
 *             address translation (NAT).</p>
 *          <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
 *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network.
 *             If you don't have an ASN already, you can use a private ASN. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html">Customer gateway
 *                 options for your Site-to-Site VPN connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 *          <p>To create more than one customer gateway with the same VPN type, IP address, and
 *             BGP ASN, specify a unique device name for each customer gateway. An identical request
 *             returns information about the existing customer gateway; it doesn't create a new customer
 *             gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateCustomerGatewayRequest
 *   BgpAsn: Number("int"),
 *   PublicIp: "STRING_VALUE",
 *   CertificateArn: "STRING_VALUE",
 *   Type: "ipsec.1", // required
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
 *   DeviceName: "STRING_VALUE",
 *   IpAddress: "STRING_VALUE",
 *   BgpAsnExtended: Number("long"),
 *   DryRun: true || false,
 * };
 * const command = new CreateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomerGatewayResult
 * //   CustomerGateway: { // CustomerGateway
 * //     CertificateArn: "STRING_VALUE",
 * //     DeviceName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BgpAsnExtended: "STRING_VALUE",
 * //     CustomerGatewayId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     IpAddress: "STRING_VALUE",
 * //     BgpAsn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCustomerGatewayCommandInput - {@link CreateCustomerGatewayCommandInput}
 * @returns {@link CreateCustomerGatewayCommandOutput}
 * @see {@link CreateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a customer gateway
 * ```javascript
 * // This example creates a customer gateway with the specified IP address for its outside interface.
 * const input = {
 *   BgpAsn: 65534,
 *   PublicIp: "12.1.2.3",
 *   Type: "ipsec.1"
 * };
 * const command = new CreateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomerGateway: {
 *     BgpAsn: "65534",
 *     CustomerGatewayId: "cgw-0e11f167",
 *     IpAddress: "12.1.2.3",
 *     State: "available",
 *     Type: "ipsec.1"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCustomerGatewayCommand extends $Command
  .classBuilder<
    CreateCustomerGatewayCommandInput,
    CreateCustomerGatewayCommandOutput,
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
  .s("AmazonEC2", "CreateCustomerGateway", {})
  .n("EC2Client", "CreateCustomerGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomerGatewayCommand)
  .de(de_CreateCustomerGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomerGatewayRequest;
      output: CreateCustomerGatewayResult;
    };
    sdk: {
      input: CreateCustomerGatewayCommandInput;
      output: CreateCustomerGatewayCommandOutput;
    };
  };
}
