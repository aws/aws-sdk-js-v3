// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateIpamInternetRegistryAssociationRequest,
  CreateIpamInternetRegistryAssociationResult,
} from "../models/models_1";
import { CreateIpamInternetRegistryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIpamInternetRegistryAssociationCommand}.
 */
export interface CreateIpamInternetRegistryAssociationCommandInput extends CreateIpamInternetRegistryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpamInternetRegistryAssociationCommand}.
 */
export interface CreateIpamInternetRegistryAssociationCommandOutput extends CreateIpamInternetRegistryAssociationResult, __MetadataBearer {}

/**
 * <p>Creates an association between an IPAM and a Regional Internet Registry (RIR) for Resource Public Key Infrastructure (RPKI) management. You can use this association to create Route Origin Authorizations (ROAs) for IP address prefixes registered with the internet registry. Your IPAM must be in the Advanced tier to use this feature.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamInternetRegistryAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamInternetRegistryAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateIpamInternetRegistryAssociationRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Rir: "ripe" || "apnic" || "arin" || "lacnic", // required
 *   OrganizationHandle: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "ipam-internet-registry-association" || "secondary-interface" || "secondary-network" || "secondary-subnet" || "capacity-manager-data-export" || "vpn-concentrator" || "ipam-pool-allocation" || "capacity-reservation-cancellation-quote" || "application-status-check",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateIpamInternetRegistryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpamInternetRegistryAssociationResult
 * //   IpamInternetRegistryAssociation: { // IpamInternetRegistryAssociation
 * //     OwnerId: "STRING_VALUE",
 * //     IpamInternetRegistryAssociationId: "STRING_VALUE",
 * //     IpamInternetRegistryAssociationArn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Rir: "ripe" || "apnic" || "arin" || "lacnic",
 * //     OrganizationHandle: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     State: "pending-enable" || "create-in-progress" || "create-failed" || "enable-in-progress" || "enable-complete" || "enable-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     ChildRequestXml: "STRING_VALUE",
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
 * @param CreateIpamInternetRegistryAssociationCommandInput - {@link CreateIpamInternetRegistryAssociationCommandInput}
 * @returns {@link CreateIpamInternetRegistryAssociationCommandOutput}
 * @see {@link CreateIpamInternetRegistryAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIpamInternetRegistryAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateIpamInternetRegistryAssociationCommand extends command<CreateIpamInternetRegistryAssociationCommandInput, CreateIpamInternetRegistryAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIpamInternetRegistryAssociation",
  CreateIpamInternetRegistryAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpamInternetRegistryAssociationRequest;
      output: CreateIpamInternetRegistryAssociationResult;
    };
    sdk: {
      input: CreateIpamInternetRegistryAssociationCommandInput;
      output: CreateIpamInternetRegistryAssociationCommandOutput;
    };
  };
}
