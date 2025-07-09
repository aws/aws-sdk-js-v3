// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResult } from "../models/models_7";
import { de_ProvisionByoipCidrCommand, se_ProvisionByoipCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvisionByoipCidrCommand}.
 */
export interface ProvisionByoipCidrCommandInput extends ProvisionByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionByoipCidrCommand}.
 */
export interface ProvisionByoipCidrCommandOutput extends ProvisionByoipCidrResult, __MetadataBearer {}

/**
 * <p>Provisions an IPv4 or IPv6 address range for use with your Amazon Web Services resources through bring your own IP
 *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
 *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
 *          <p>Amazon Web Services verifies that you own the address range and are authorized to advertise it.
 *          You must ensure that the address range is registered to you and that you created an
 *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
 *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
 *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
 *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
 *          with either the specific address from the address pool or the ID of the address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ProvisionByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   CidrAuthorizationContext: { // CidrAuthorizationContext
 *     Message: "STRING_VALUE", // required
 *     Signature: "STRING_VALUE", // required
 *   },
 *   PubliclyAdvertisable: true || false,
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   PoolTagSpecifications: [ // TagSpecificationList
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
 *   MultiRegion: true || false,
 *   NetworkBorderGroup: "STRING_VALUE",
 * };
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionByoipCidrResult
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AsnAssociations: [ // AsnAssociationSet
 * //       { // AsnAssociation
 * //         Asn: "STRING_VALUE",
 * //         Cidr: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //         State: "disassociated" || "failed-disassociation" || "failed-association" || "pending-disassociation" || "pending-association" || "associated",
 * //       },
 * //     ],
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //     NetworkBorderGroup: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionByoipCidrCommandInput - {@link ProvisionByoipCidrCommandInput}
 * @returns {@link ProvisionByoipCidrCommandOutput}
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ProvisionByoipCidrCommand extends $Command
  .classBuilder<
    ProvisionByoipCidrCommandInput,
    ProvisionByoipCidrCommandOutput,
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
  .s("AmazonEC2", "ProvisionByoipCidr", {})
  .n("EC2Client", "ProvisionByoipCidrCommand")
  .f(void 0, void 0)
  .ser(se_ProvisionByoipCidrCommand)
  .de(de_ProvisionByoipCidrCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionByoipCidrRequest;
      output: ProvisionByoipCidrResult;
    };
    sdk: {
      input: ProvisionByoipCidrCommandInput;
      output: ProvisionByoipCidrCommandOutput;
    };
  };
}
