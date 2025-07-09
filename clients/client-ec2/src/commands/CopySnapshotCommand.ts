// smithy-typescript generated code
import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopySnapshotRequest, CopySnapshotRequestFilterSensitiveLog, CopySnapshotResult } from "../models/models_1";
import { de_CopySnapshotCommand, se_CopySnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandInput extends CopySnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy a
 *       snapshot within the same Region, from one Region to another, or from a Region to an Outpost.
 *       You can't copy a snapshot from an Outpost to a Region, from one Outpost to another, or within
 *       the same Outpost.</p>
 *          <p>You can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs).</p>
 *          <p>When copying snapshots to a Region, copies of encrypted EBS snapshots remain encrypted.
 *     	Copies of unencrypted snapshots remain unencrypted, unless you enable encryption for the
 *     	snapshot copy operation. By default, encrypted snapshot copies use the default KMS key;
 *     	however, you can specify a different KMS key. To copy an encrypted
 *     	snapshot that has been shared from another account, you must have permissions for the KMS key
 *     	used to encrypt the snapshot.</p>
 *          <p>Snapshots copied to an Outpost are encrypted by default using the default encryption key
 *       for the Region, or a different key that you specify in the request using <b>KmsKeyId</b>. Outposts do not support unencrypted snapshots. For more information,
 *       see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#ami">Amazon EBS
 *         local snapshots on Outposts</a> in the <i>Amazon EBS User Guide</i>.</p>
 *          <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not
 *       be used for any purpose.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-copy-snapshot.html">Copy an Amazon EBS snapshot</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopySnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopySnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CopySnapshotRequest
 *   Description: "STRING_VALUE",
 *   DestinationOutpostArn: "STRING_VALUE",
 *   DestinationRegion: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   PresignedUrl: "STRING_VALUE",
 *   SourceRegion: "STRING_VALUE", // required
 *   SourceSnapshotId: "STRING_VALUE", // required
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
 *   CompletionDurationMinutes: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopySnapshotResult
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopySnapshotCommandInput - {@link CopySnapshotCommandInput}
 * @returns {@link CopySnapshotCommandOutput}
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To copy a snapshot
 * ```javascript
 * // This example copies a snapshot with the snapshot ID of ``snap-066877671789bd71b`` from the ``us-west-2`` region to the ``us-east-1`` region and adds a short description to identify the snapshot.
 * const input = {
 *   Description: "This is my copied snapshot.",
 *   DestinationRegion: "us-east-1",
 *   SourceRegion: "us-west-2",
 *   SourceSnapshotId: "snap-066877671789bd71b"
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SnapshotId: "snap-066877671789bd71b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopySnapshotCommand extends $Command
  .classBuilder<
    CopySnapshotCommandInput,
    CopySnapshotCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCopySnapshotPresignedUrlPlugin(config),
    ];
  })
  .s("AmazonEC2", "CopySnapshot", {})
  .n("EC2Client", "CopySnapshotCommand")
  .f(CopySnapshotRequestFilterSensitiveLog, void 0)
  .ser(se_CopySnapshotCommand)
  .de(de_CopySnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopySnapshotRequest;
      output: CopySnapshotResult;
    };
    sdk: {
      input: CopySnapshotCommandInput;
      output: CopySnapshotCommandOutput;
    };
  };
}
