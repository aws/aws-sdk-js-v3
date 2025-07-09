// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVpnConnectionRequest,
  CreateVpnConnectionRequestFilterSensitiveLog,
  CreateVpnConnectionResult,
  CreateVpnConnectionResultFilterSensitiveLog,
} from "../models/models_3";
import { de_CreateVpnConnectionCommand, se_CreateVpnConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpnConnectionCommand}.
 */
export interface CreateVpnConnectionCommandInput extends CreateVpnConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnConnectionCommand}.
 */
export interface CreateVpnConnectionCommandOutput extends CreateVpnConnectionResult, __MetadataBearer {}

/**
 * <p>Creates a VPN connection between an existing virtual private gateway or transit
 *             gateway and a customer gateway. The supported connection type is
 *             <code>ipsec.1</code>.</p>
 *          <p>The response includes information that you need to give to your network administrator
 *             to configure your customer gateway.</p>
 *          <important>
 *             <p>We strongly recommend that you use HTTPS when calling this operation because the
 *                 response contains sensitive cryptographic information for configuring your customer
 *                 gateway device.</p>
 *          </important>
 *          <p>If you decide to shut down your VPN connection for any reason and later create a new
 *             VPN connection, you must reconfigure your customer gateway with the new information
 *             returned from this call.</p>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon
 *             EC2 doesn't return an error.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpnConnectionRequest
 *   CustomerGatewayId: "STRING_VALUE", // required
 *   Type: "STRING_VALUE", // required
 *   VpnGatewayId: "STRING_VALUE",
 *   TransitGatewayId: "STRING_VALUE",
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
 *   PreSharedKeyStorage: "STRING_VALUE",
 *   DryRun: true || false,
 *   Options: { // VpnConnectionOptionsSpecification
 *     EnableAcceleration: true || false,
 *     TunnelInsideIpVersion: "ipv4" || "ipv6",
 *     TunnelOptions: [ // VpnTunnelOptionsSpecificationsList
 *       { // VpnTunnelOptionsSpecification
 *         TunnelInsideCidr: "STRING_VALUE",
 *         TunnelInsideIpv6Cidr: "STRING_VALUE",
 *         PreSharedKey: "STRING_VALUE",
 *         Phase1LifetimeSeconds: Number("int"),
 *         Phase2LifetimeSeconds: Number("int"),
 *         RekeyMarginTimeSeconds: Number("int"),
 *         RekeyFuzzPercentage: Number("int"),
 *         ReplayWindowSize: Number("int"),
 *         DPDTimeoutSeconds: Number("int"),
 *         DPDTimeoutAction: "STRING_VALUE",
 *         Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsRequestList
 *           { // Phase1EncryptionAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsRequestList
 *           { // Phase2EncryptionAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsRequestList
 *           { // Phase1IntegrityAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsRequestList
 *           { // Phase2IntegrityAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersRequestList
 *           { // Phase1DHGroupNumbersRequestListValue
 *             Value: Number("int"),
 *           },
 *         ],
 *         Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersRequestList
 *           { // Phase2DHGroupNumbersRequestListValue
 *             Value: Number("int"),
 *           },
 *         ],
 *         IKEVersions: [ // IKEVersionsRequestList
 *           { // IKEVersionsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         StartupAction: "STRING_VALUE",
 *         LogOptions: { // VpnTunnelLogOptionsSpecification
 *           CloudWatchLogOptions: { // CloudWatchLogOptionsSpecification
 *             LogEnabled: true || false,
 *             LogGroupArn: "STRING_VALUE",
 *             LogOutputFormat: "STRING_VALUE",
 *           },
 *         },
 *         EnableTunnelLifecycleControl: true || false,
 *       },
 *     ],
 *     LocalIpv4NetworkCidr: "STRING_VALUE",
 *     RemoteIpv4NetworkCidr: "STRING_VALUE",
 *     LocalIpv6NetworkCidr: "STRING_VALUE",
 *     RemoteIpv6NetworkCidr: "STRING_VALUE",
 *     OutsideIpAddressType: "STRING_VALUE",
 *     TransportTransitGatewayAttachmentId: "STRING_VALUE",
 *     StaticRoutesOnly: true || false,
 *   },
 * };
 * const command = new CreateVpnConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpnConnectionResult
 * //   VpnConnection: { // VpnConnection
 * //     Category: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     CoreNetworkAttachmentArn: "STRING_VALUE",
 * //     GatewayAssociationState: "associated" || "not-associated" || "associating" || "disassociating",
 * //     Options: { // VpnConnectionOptions
 * //       EnableAcceleration: true || false,
 * //       StaticRoutesOnly: true || false,
 * //       LocalIpv4NetworkCidr: "STRING_VALUE",
 * //       RemoteIpv4NetworkCidr: "STRING_VALUE",
 * //       LocalIpv6NetworkCidr: "STRING_VALUE",
 * //       RemoteIpv6NetworkCidr: "STRING_VALUE",
 * //       OutsideIpAddressType: "STRING_VALUE",
 * //       TransportTransitGatewayAttachmentId: "STRING_VALUE",
 * //       TunnelInsideIpVersion: "ipv4" || "ipv6",
 * //       TunnelOptions: [ // TunnelOptionsList
 * //         { // TunnelOption
 * //           OutsideIpAddress: "STRING_VALUE",
 * //           TunnelInsideCidr: "STRING_VALUE",
 * //           TunnelInsideIpv6Cidr: "STRING_VALUE",
 * //           PreSharedKey: "STRING_VALUE",
 * //           Phase1LifetimeSeconds: Number("int"),
 * //           Phase2LifetimeSeconds: Number("int"),
 * //           RekeyMarginTimeSeconds: Number("int"),
 * //           RekeyFuzzPercentage: Number("int"),
 * //           ReplayWindowSize: Number("int"),
 * //           DpdTimeoutSeconds: Number("int"),
 * //           DpdTimeoutAction: "STRING_VALUE",
 * //           Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsList
 * //             { // Phase1EncryptionAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsList
 * //             { // Phase2EncryptionAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsList
 * //             { // Phase1IntegrityAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsList
 * //             { // Phase2IntegrityAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersList
 * //             { // Phase1DHGroupNumbersListValue
 * //               Value: Number("int"),
 * //             },
 * //           ],
 * //           Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersList
 * //             { // Phase2DHGroupNumbersListValue
 * //               Value: Number("int"),
 * //             },
 * //           ],
 * //           IkeVersions: [ // IKEVersionsList
 * //             { // IKEVersionsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           StartupAction: "STRING_VALUE",
 * //           LogOptions: { // VpnTunnelLogOptions
 * //             CloudWatchLogOptions: { // CloudWatchLogOptions
 * //               LogEnabled: true || false,
 * //               LogGroupArn: "STRING_VALUE",
 * //               LogOutputFormat: "STRING_VALUE",
 * //             },
 * //           },
 * //           EnableTunnelLifecycleControl: true || false,
 * //         },
 * //       ],
 * //     },
 * //     Routes: [ // VpnStaticRouteList
 * //       { // VpnStaticRoute
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         Source: "Static",
 * //         State: "pending" || "available" || "deleting" || "deleted",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VgwTelemetry: [ // VgwTelemetryList
 * //       { // VgwTelemetry
 * //         AcceptedRouteCount: Number("int"),
 * //         LastStatusChange: new Date("TIMESTAMP"),
 * //         OutsideIpAddress: "STRING_VALUE",
 * //         Status: "UP" || "DOWN",
 * //         StatusMessage: "STRING_VALUE",
 * //         CertificateArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreSharedKeyArn: "STRING_VALUE",
 * //     VpnConnectionId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CustomerGatewayConfiguration: "STRING_VALUE",
 * //     Type: "ipsec.1",
 * //     CustomerGatewayId: "STRING_VALUE",
 * //     VpnGatewayId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpnConnectionCommandInput - {@link CreateVpnConnectionCommandInput}
 * @returns {@link CreateVpnConnectionCommandOutput}
 * @see {@link CreateVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpnConnectionCommand extends $Command
  .classBuilder<
    CreateVpnConnectionCommandInput,
    CreateVpnConnectionCommandOutput,
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
  .s("AmazonEC2", "CreateVpnConnection", {})
  .n("EC2Client", "CreateVpnConnectionCommand")
  .f(CreateVpnConnectionRequestFilterSensitiveLog, CreateVpnConnectionResultFilterSensitiveLog)
  .ser(se_CreateVpnConnectionCommand)
  .de(de_CreateVpnConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpnConnectionRequest;
      output: CreateVpnConnectionResult;
    };
    sdk: {
      input: CreateVpnConnectionCommandInput;
      output: CreateVpnConnectionCommandOutput;
    };
  };
}
