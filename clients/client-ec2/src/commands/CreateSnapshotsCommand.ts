// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotsRequest, CreateSnapshotsResult } from "../models/models_2";
import { de_CreateSnapshotsCommand, se_CreateSnapshotsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotsCommand}.
 */
export interface CreateSnapshotsCommandInput extends CreateSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotsCommand}.
 */
export interface CreateSnapshotsCommandOutput extends CreateSnapshotsResult, __MetadataBearer {}

/**
 * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
 *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
 *     each that is crash-consistent across the instance.</p>
 *          <p>You can include all of the volumes currently attached to the instance, or you can exclude
 *     the root volume or specific data (non-root) volumes from the multi-volume snapshot set.</p>
 *          <p>You can create multi-volume snapshots of instances in a Region and instances on an
 *   	Outpost. If you create snapshots from an instance in a Region, the snapshots must be stored
 *   	in the same Region as the instance. If you create snapshots from an instance on an Outpost,
 *   	the snapshots can be stored on the same Outpost as the instance, or in the Region for that
 *   	Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSnapshotsRequest
 *   Description: "STRING_VALUE",
 *   InstanceSpecification: { // InstanceSpecification
 *     InstanceId: "STRING_VALUE", // required
 *     ExcludeBootVolume: true || false,
 *     ExcludeDataVolumeIds: [ // VolumeIdStringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   OutpostArn: "STRING_VALUE",
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
 *   CopyTagsFromSource: "volume",
 * };
 * const command = new CreateSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotsResult
 * //   Snapshots: [ // SnapshotSet
 * //     { // SnapshotInfo
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Encrypted: true || false,
 * //       VolumeId: "STRING_VALUE",
 * //       State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //       VolumeSize: Number("int"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Progress: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       SseType: "sse-ebs" || "sse-kms" || "none",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSnapshotsCommandInput - {@link CreateSnapshotsCommandInput}
 * @returns {@link CreateSnapshotsCommandOutput}
 * @see {@link CreateSnapshotsCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateSnapshotsCommand extends $Command
  .classBuilder<
    CreateSnapshotsCommandInput,
    CreateSnapshotsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateSnapshots", {})
  .n("EC2Client", "CreateSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotsCommand)
  .de(de_CreateSnapshotsCommand)
  .build() {}
