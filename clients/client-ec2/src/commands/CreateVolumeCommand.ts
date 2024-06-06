// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVolumeRequest, Volume } from "../models/models_2";
import { de_CreateVolumeCommand, se_CreateVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandInput extends CreateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandOutput extends Volume, __MetadataBearer {}

/**
 * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p>
 *          <p>You can create a new empty volume or restore a volume from an EBS snapshot.
 *       Any Amazon Web Services Marketplace product codes from the snapshot are propagated to the volume.</p>
 *          <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that
 *       support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically
 *       encrypted. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 *          <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-creating-volume.html">Create an Amazon EBS volume</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVolumeRequest
 *   AvailabilityZone: "STRING_VALUE", // required
 *   Encrypted: true || false,
 *   Iops: Number("int"),
 *   KmsKeyId: "STRING_VALUE",
 *   OutpostArn: "STRING_VALUE",
 *   Size: Number("int"),
 *   SnapshotId: "STRING_VALUE",
 *   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *   DryRun: true || false,
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
 *   MultiAttachEnabled: true || false,
 *   Throughput: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * // { // Volume
 * //   Attachments: [ // VolumeAttachmentList
 * //     { // VolumeAttachment
 * //       AttachTime: new Date("TIMESTAMP"),
 * //       Device: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       State: "attaching" || "attached" || "detaching" || "detached" || "busy",
 * //       VolumeId: "STRING_VALUE",
 * //       DeleteOnTermination: true || false,
 * //       AssociatedResource: "STRING_VALUE",
 * //       InstanceOwningService: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AvailabilityZone: "STRING_VALUE",
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Encrypted: true || false,
 * //   KmsKeyId: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * //   Size: Number("int"),
 * //   SnapshotId: "STRING_VALUE",
 * //   State: "creating" || "available" || "in-use" || "deleting" || "deleted" || "error",
 * //   VolumeId: "STRING_VALUE",
 * //   Iops: Number("int"),
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //   FastRestored: true || false,
 * //   MultiAttachEnabled: true || false,
 * //   Throughput: Number("int"),
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * // };
 *
 * ```
 *
 * @param CreateVolumeCommandInput - {@link CreateVolumeCommandInput}
 * @returns {@link CreateVolumeCommandOutput}
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To create a new volume
 * ```javascript
 * // This example creates an 80 GiB General Purpose (SSD) volume in the Availability Zone ``us-east-1a``.
 * const input = {
 *   "AvailabilityZone": "us-east-1a",
 *   "Size": 80,
 *   "VolumeType": "gp2"
 * };
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AvailabilityZone": "us-east-1a",
 *   "CreateTime": "2016-08-29T18:52:32.724Z",
 *   "Encrypted": false,
 *   "Iops": 240,
 *   "Size": 80,
 *   "SnapshotId": "",
 *   "State": "creating",
 *   "VolumeId": "vol-6b60b7c7",
 *   "VolumeType": "gp2"
 * }
 * *\/
 * // example id: to-create-a-new-volume-1472496724296
 * ```
 *
 * @example To create a new Provisioned IOPS (SSD) volume from a snapshot
 * ```javascript
 * // This example creates a new Provisioned IOPS (SSD) volume with 1000 provisioned IOPS from a snapshot in the Availability Zone ``us-east-1a``.
 * const input = {
 *   "AvailabilityZone": "us-east-1a",
 *   "Iops": 1000,
 *   "SnapshotId": "snap-066877671789bd71b",
 *   "VolumeType": "io1"
 * };
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attachments": [],
 *   "AvailabilityZone": "us-east-1a",
 *   "CreateTime": "2016-08-29T18:52:32.724Z",
 *   "Iops": 1000,
 *   "Size": 500,
 *   "SnapshotId": "snap-066877671789bd71b",
 *   "State": "creating",
 *   "Tags": [],
 *   "VolumeId": "vol-1234567890abcdef0",
 *   "VolumeType": "io1"
 * }
 * *\/
 * // example id: to-create-a-new-provisioned-iops-ssd-volume-from-a-snapshot-1472498975176
 * ```
 *
 */
export class CreateVolumeCommand extends $Command
  .classBuilder<
    CreateVolumeCommandInput,
    CreateVolumeCommandOutput,
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
  .s("AmazonEC2", "CreateVolume", {})
  .n("EC2Client", "CreateVolumeCommand")
  .f(void 0, void 0)
  .ser(se_CreateVolumeCommand)
  .de(de_CreateVolumeCommand)
  .build() {}
