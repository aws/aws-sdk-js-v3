// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocateAddressRequest, AllocateAddressResult } from "../models/models_0";
import { de_AllocateAddressCommand, se_AllocateAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllocateAddressCommand}.
 */
export interface AllocateAddressCommandInput extends AllocateAddressRequest {}
/**
 * @public
 *
 * The output of {@link AllocateAddressCommand}.
 */
export interface AllocateAddressCommandOutput extends AllocateAddressResult, __MetadataBearer {}

/**
 * <p>Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate
 *          it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address
 *          pool and can be allocated to a different Amazon Web Services account.</p>
 *          <p>You can allocate an Elastic IP address from an address pool owned by Amazon Web Services or from an address pool created
 *        from a public IPv4 address range that you have brought to Amazon Web Services for use with your Amazon Web Services resources using bring your own
 *          IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>If you release an Elastic IP address, you might be able to recover it. You cannot recover
 *       an Elastic IP address that you released after it is allocated to another Amazon Web Services account. To attempt to recover an Elastic IP address that you released, specify
 *       it in this operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>You can allocate a carrier IP address which is a public IP address from a telecommunication carrier,
 *        to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AllocateAddressRequest
 *   Domain: "vpc" || "standard",
 *   Address: "STRING_VALUE",
 *   PublicIpv4Pool: "STRING_VALUE",
 *   NetworkBorderGroup: "STRING_VALUE",
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
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
 *   IpamPoolId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AllocateAddressCommand(input);
 * const response = await client.send(command);
 * // { // AllocateAddressResult
 * //   AllocationId: "STRING_VALUE",
 * //   PublicIpv4Pool: "STRING_VALUE",
 * //   NetworkBorderGroup: "STRING_VALUE",
 * //   Domain: "vpc" || "standard",
 * //   CustomerOwnedIp: "STRING_VALUE",
 * //   CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //   CarrierIp: "STRING_VALUE",
 * //   PublicIp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AllocateAddressCommandInput - {@link AllocateAddressCommandInput}
 * @returns {@link AllocateAddressCommandOutput}
 * @see {@link AllocateAddressCommandInput} for command's `input` shape.
 * @see {@link AllocateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To allocate an Elastic IP address
 * ```javascript
 * // This example allocates an Elastic IP address.
 * const input = { /* empty *\/ };
 * const command = new AllocateAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AllocationId: "eipalloc-64d5890a",
 *   Domain: "vpc",
 *   NetworkBorderGroup: "us-east-1",
 *   PublicIp: "203.0.113.0",
 *   PublicIpv4Pool: "amazon"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AllocateAddressCommand extends $Command
  .classBuilder<
    AllocateAddressCommandInput,
    AllocateAddressCommandOutput,
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
  .s("AmazonEC2", "AllocateAddress", {})
  .n("EC2Client", "AllocateAddressCommand")
  .f(void 0, void 0)
  .ser(se_AllocateAddressCommand)
  .de(de_AllocateAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllocateAddressRequest;
      output: AllocateAddressResult;
    };
    sdk: {
      input: AllocateAddressCommandInput;
      output: AllocateAddressCommandOutput;
    };
  };
}
