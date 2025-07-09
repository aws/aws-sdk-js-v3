// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCapacityReservationBySplittingRequest,
  CreateCapacityReservationBySplittingResult,
} from "../models/models_1";
import {
  de_CreateCapacityReservationBySplittingCommand,
  se_CreateCapacityReservationBySplittingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityReservationBySplittingCommand}.
 */
export interface CreateCapacityReservationBySplittingCommandInput extends CreateCapacityReservationBySplittingRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityReservationBySplittingCommand}.
 */
export interface CreateCapacityReservationBySplittingCommandOutput
  extends CreateCapacityReservationBySplittingResult,
    __MetadataBearer {}

/**
 * <p> Create a new Capacity Reservation by splitting the capacity of the source Capacity
 * 			Reservation. The new Capacity Reservation will have the same attributes as the source
 * 			Capacity Reservation except for tags. The source Capacity Reservation must be
 * 				<code>active</code> and owned by your Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationBySplittingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationBySplittingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateCapacityReservationBySplittingRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   SourceCapacityReservationId: "STRING_VALUE", // required
 *   InstanceCount: Number("int"), // required
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
 * };
 * const command = new CreateCapacityReservationBySplittingCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityReservationBySplittingResult
 * //   SourceCapacityReservation: { // CapacityReservation
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [ // CapacityAllocations
 * //       { // CapacityAllocation
 * //         AllocationType: "used" || "future",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //     ReservationType: "default" || "capacity-block",
 * //     UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //     CommitmentInfo: { // CapacityReservationCommitmentInfo
 * //       CommittedInstanceCount: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     DeliveryPreference: "fixed" || "incremental",
 * //     CapacityBlockId: "STRING_VALUE",
 * //   },
 * //   DestinationCapacityReservation: {
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [
 * //       {
 * //         AllocationType: "used" || "future",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //     ReservationType: "default" || "capacity-block",
 * //     UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //     CommitmentInfo: {
 * //       CommittedInstanceCount: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     DeliveryPreference: "fixed" || "incremental",
 * //     CapacityBlockId: "STRING_VALUE",
 * //   },
 * //   InstanceCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateCapacityReservationBySplittingCommandInput - {@link CreateCapacityReservationBySplittingCommandInput}
 * @returns {@link CreateCapacityReservationBySplittingCommandOutput}
 * @see {@link CreateCapacityReservationBySplittingCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationBySplittingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateCapacityReservationBySplittingCommand extends $Command
  .classBuilder<
    CreateCapacityReservationBySplittingCommandInput,
    CreateCapacityReservationBySplittingCommandOutput,
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
  .s("AmazonEC2", "CreateCapacityReservationBySplitting", {})
  .n("EC2Client", "CreateCapacityReservationBySplittingCommand")
  .f(void 0, void 0)
  .ser(se_CreateCapacityReservationBySplittingCommand)
  .de(de_CreateCapacityReservationBySplittingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityReservationBySplittingRequest;
      output: CreateCapacityReservationBySplittingResult;
    };
    sdk: {
      input: CreateCapacityReservationBySplittingCommandInput;
      output: CreateCapacityReservationBySplittingCommandOutput;
    };
  };
}
