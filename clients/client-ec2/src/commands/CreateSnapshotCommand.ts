// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotRequest, Snapshot } from "../models/models_2";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends Snapshot, __MetadataBearer {}

/**
 * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for
 *   	backups, to make copies of EBS volumes, and to save data before shutting down an
 *   	instance.</p>
 *          <p>The location of the source EBS volume determines where you can create the snapshot.</p>
 *          <ul>
 *             <li>
 *                <p>If the source volume is in a Region, you must create the snapshot in the same
 *           Region as the volume.</p>
 *             </li>
 *             <li>
 *                <p>If the source volume is in a Local Zone, you can create the snapshot in the same Local
 *           Zone or in its parent Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>If the source volume is on an Outpost, you can create the snapshot on the same
 *           Outpost or in its parent Amazon Web Services Region.</p>
 *             </li>
 *          </ul>
 *          <p>When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the
 *       source volume are propagated to the snapshot.</p>
 *          <p>You can take a snapshot of an attached volume that is in use. However, snapshots only
 *       capture data that has been written to your Amazon EBS volume at the time the snapshot command is
 *       issued; this might exclude any data that has been cached by any applications or the operating
 *       system. If you can pause any file systems on the volume long enough to take a snapshot, your
 *       snapshot should be complete. However, if you cannot pause all file writes to the volume, you
 *       should unmount the volume from within the instance, issue the snapshot command, and then
 *       remount the volume to ensure a consistent and complete snapshot. You may remount and use your
 *       volume while the snapshot status is <code>pending</code>.</p>
 *          <p>When you create a snapshot for an EBS volume that serves as a root device, we recommend
 *       that you stop the instance before taking the snapshot.</p>
 *          <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that
 *       are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes
 *       and any associated snapshots always remain protected. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSnapshotRequest
 *   Description: "STRING_VALUE",
 *   OutpostArn: "STRING_VALUE",
 *   VolumeId: "STRING_VALUE", // required
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
 *   Location: "regional" || "local",
 *   DryRun: true || false,
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // Snapshot
 * //   OwnerAlias: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   StorageTier: "archive" || "standard",
 * //   RestoreExpiryTime: new Date("TIMESTAMP"),
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   TransferType: "time-based" || "standard",
 * //   CompletionDurationMinutes: Number("int"),
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   FullSnapshotSizeInBytes: Number("long"),
 * //   SnapshotId: "STRING_VALUE",
 * //   VolumeId: "STRING_VALUE",
 * //   State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //   StateMessage: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   Progress: "STRING_VALUE",
 * //   OwnerId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   VolumeSize: Number("int"),
 * //   Encrypted: true || false,
 * //   KmsKeyId: "STRING_VALUE",
 * //   DataEncryptionKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a snapshot
 * ```javascript
 * // This example creates a snapshot of the volume with a volume ID of ``vol-1234567890abcdef0`` and a short description to identify the snapshot.
 * const input = {
 *   Description: "This is my root volume snapshot.",
 *   VolumeId: "vol-1234567890abcdef0"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "This is my root volume snapshot.",
 *   OwnerId: "012345678910",
 *   SnapshotId: "snap-066877671789bd71b",
 *   StartTime: "2014-02-28T21:06:01.000Z",
 *   State: "pending",
 *   Tags:   [],
 *   VolumeId: "vol-1234567890abcdef0",
 *   VolumeSize: 8
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSnapshotCommand extends $Command
  .classBuilder<
    CreateSnapshotCommandInput,
    CreateSnapshotCommandOutput,
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
  .s("AmazonEC2", "CreateSnapshot", {})
  .n("EC2Client", "CreateSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotCommand)
  .de(de_CreateSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotRequest;
      output: Snapshot;
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
