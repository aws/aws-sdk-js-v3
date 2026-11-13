// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNetworkingFlexCostAllocationPolicyRequest } from "../models/models_1";
import type { CreateNetworkingFlexCostAllocationPolicyResult } from "../models/models_2";
import { CreateNetworkingFlexCostAllocationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface CreateNetworkingFlexCostAllocationPolicyCommandInput extends CreateNetworkingFlexCostAllocationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface CreateNetworkingFlexCostAllocationPolicyCommandOutput extends CreateNetworkingFlexCostAllocationPolicyResult, __MetadataBearer {}

/**
 * <p>Creates a flex cost allocation policy for Networking Flexible Cost Allocation (FCA), a feature of
 *             Amazon Virtual Private Cloud (Amazon VPC). The policy allocates the charges of a shared networking
 *             resource at the reporting granularity that you specify. You can create a policy for one of the following
 *             resource types: NAT gateways, Amazon VPC peering connections, or EC2 instances. Policies can
 *             allocate data transfer charges for all three types, and data processing charges for NAT gateways.</p>
 *          <p>You can have up to 100 policies per account in each Amazon Web Services Region, plus one additional
 *             policy per network resource type created by a declarative policy, for a maximum of 103 policies in an
 *             Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkingFlexCostAllocationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkingFlexCostAllocationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkingFlexCostAllocationPolicyRequest
 *   NetworkResourceType: "natgw" || "pcx" || "ec2", // required
 *   NatFcaPolicyDocument: { // NatFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // FlexCostAllocationReportingGranularityList // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // FlexCostAllocationCostDimensionList // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: { // FlexCostAllocationCidrRangeSpecifications
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // FlexCostAllocationCidrMappingList // required
 *         { // FlexCostAllocationCidrMapping
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   InstanceFcaPolicyDocument: { // InstanceFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: {
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // required
 *         {
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   PcxFcaPolicyDocument: { // PcxFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: {
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // required
 *         {
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   ShowBackEnabled: true || false,
 *   Description: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fca-policy" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "ipam-internet-registry-association" || "secondary-interface" || "secondary-network" || "secondary-subnet" || "capacity-manager-data-export" || "vpn-concentrator" || "ipam-pool-allocation" || "capacity-reservation-cancellation-quote" || "application-status-check" || "capacity-reservation-modification-quote" || "metric-category",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CreateNetworkingFlexCostAllocationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkingFlexCostAllocationPolicyResult
 * //   FcaPolicyId: "STRING_VALUE",
 * //   FcaPolicyArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ExpectedEffectiveAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateNetworkingFlexCostAllocationPolicyCommandInput - {@link CreateNetworkingFlexCostAllocationPolicyCommandInput}
 * @returns {@link CreateNetworkingFlexCostAllocationPolicyCommandOutput}
 * @see {@link CreateNetworkingFlexCostAllocationPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkingFlexCostAllocationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateNetworkingFlexCostAllocationPolicyCommand extends command<CreateNetworkingFlexCostAllocationPolicyCommandInput, CreateNetworkingFlexCostAllocationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateNetworkingFlexCostAllocationPolicy",
  CreateNetworkingFlexCostAllocationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkingFlexCostAllocationPolicyRequest;
      output: CreateNetworkingFlexCostAllocationPolicyResult;
    };
    sdk: {
      input: CreateNetworkingFlexCostAllocationPolicyCommandInput;
      output: CreateNetworkingFlexCostAllocationPolicyCommandOutput;
    };
  };
}
