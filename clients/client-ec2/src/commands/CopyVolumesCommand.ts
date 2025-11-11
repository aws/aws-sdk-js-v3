// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyVolumesRequest, CopyVolumesResult } from "../models/models_1";
import { CopyVolumes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyVolumesCommand}.
 */
export interface CopyVolumesCommandInput extends CopyVolumesRequest {}
/**
 * @public
 *
 * The output of {@link CopyVolumesCommand}.
 */
export interface CopyVolumesCommandOutput extends CopyVolumesResult, __MetadataBearer {}

/**
 * <p>Creates a crash-consistent, point-in-time copy of an existing Amazon EBS volume within the same
 *       Availability Zone. The volume copy can be attached to an Amazon EC2 instance once it reaches the
 *       <code>available</code> state. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-copying-volume.html">Copy an Amazon EBS volume</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyVolumesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyVolumesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CopyVolumesRequest
 *   SourceVolumeId: "STRING_VALUE", // required
 *   Iops: Number("int"),
 *   Size: Number("int"),
 *   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *   DryRun: true || false,
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export",
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
 * const command = new CopyVolumesCommand(input);
 * const response = await client.send(command);
 * // { // CopyVolumesResult
 * //   Volumes: [ // VolumeList
 * //     { // Volume
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       SourceVolumeId: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //       FastRestored: true || false,
 * //       MultiAttachEnabled: true || false,
 * //       Throughput: Number("int"),
 * //       SseType: "sse-ebs" || "sse-kms" || "none",
 * //       Operator: { // OperatorResponse
 * //         Managed: true || false,
 * //         Principal: "STRING_VALUE",
 * //       },
 * //       VolumeInitializationRate: Number("int"),
 * //       VolumeId: "STRING_VALUE",
 * //       Size: Number("int"),
 * //       SnapshotId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       State: "creating" || "available" || "in-use" || "deleting" || "deleted" || "error",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       Attachments: [ // VolumeAttachmentList
 * //         { // VolumeAttachment
 * //           DeleteOnTermination: true || false,
 * //           AssociatedResource: "STRING_VALUE",
 * //           InstanceOwningService: "STRING_VALUE",
 * //           VolumeId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           Device: "STRING_VALUE",
 * //           State: "attaching" || "attached" || "detaching" || "detached" || "busy",
 * //           AttachTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CopyVolumesCommandInput - {@link CopyVolumesCommandInput}
 * @returns {@link CopyVolumesCommandOutput}
 * @see {@link CopyVolumesCommandInput} for command's `input` shape.
 * @see {@link CopyVolumesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CopyVolumesCommand extends $Command
  .classBuilder<
    CopyVolumesCommandInput,
    CopyVolumesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CopyVolumes", {})
  .n("EC2Client", "CopyVolumesCommand")
  .sc(CopyVolumes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyVolumesRequest;
      output: CopyVolumesResult;
    };
    sdk: {
      input: CopyVolumesCommandInput;
      output: CopyVolumesCommandOutput;
    };
  };
}
