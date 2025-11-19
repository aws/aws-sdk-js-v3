// smithy-typescript generated code
import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/models_0";
import { CopySnapshot } from "../schemas/schemas_0";

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
 * <p>Creates an exact copy of an Amazon EBS snapshot.</p>
 *          <p>The location of the source snapshot determines whether you can copy it or not,
 *       and the allowed destinations for the snapshot copy.</p>
 *          <ul>
 *             <li>
 *                <p>If the source snapshot is in a Region, you can copy it within that Region,
 *           to another Region, to an Outpost associated with that Region, or to a Local
 *           Zone in that Region.</p>
 *             </li>
 *             <li>
 *                <p>If the source snapshot is in a Local Zone, you can copy it within that Local Zone,
 *           to another Local Zone in the same zone group, or to the parent Region of the Local
 *           Zone.</p>
 *             </li>
 *             <li>
 *                <p>If the source snapshot is on an Outpost, you can't copy it.</p>
 *             </li>
 *          </ul>
 *          <p>When copying snapshots to a Region, the encryption outcome for the snapshot copy depends on the
 *       Amazon EBS encryption by default setting for the destination Region, the encryption status of the source
 *       snapshot, and the encryption parameters you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-copy-snapshot.html#creating-encrypted-snapshots">
 *         Encryption and snapshot copying</a>.</p>
 *          <p>Snapshots copied to an Outpost must be encrypted. Unencrypted snapshots are not supported
 *       on Outposts. For more information, <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#considerations">
 *         Amazon EBS local snapshots on Outposts</a>.</p>
 *          <note>
 *             <p>Snapshots copies have an arbitrary source volume ID. Do not use this volume ID for
 *         any purpose.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-copy-snapshot.html">Copy an Amazon EBS snapshot</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopySnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopySnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   CompletionDurationMinutes: Number("int"),
 *   DestinationAvailabilityZone: "STRING_VALUE",
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCopySnapshotPresignedUrlPlugin(config),
    ];
  })
  .s("AmazonEC2", "CopySnapshot", {})
  .n("EC2Client", "CopySnapshotCommand")
  .sc(CopySnapshot)
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
