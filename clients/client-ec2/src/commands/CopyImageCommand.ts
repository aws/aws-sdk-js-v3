// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyImageRequest, CopyImageResult } from "../models/models_1";
import { CopyImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyImageCommand}.
 */
export interface CopyImageCommandInput extends CopyImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageCommand}.
 */
export interface CopyImageCommandOutput extends CopyImageResult, __MetadataBearer {}

/**
 * <p>Initiates an AMI copy operation. You must specify the source AMI ID and both the source
 *       and destination locations. The copy operation must be initiated in the destination
 *       Region.</p>
 *          <p class="title">
 *             <b>CopyImage supports the following source to destination copies:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Region to Region</p>
 *             </li>
 *             <li>
 *                <p>Region to Outpost</p>
 *             </li>
 *             <li>
 *                <p>Parent Region to Local Zone</p>
 *             </li>
 *             <li>
 *                <p>Local Zone to parent Region</p>
 *             </li>
 *             <li>
 *                <p>Between Local Zones with the same parent Region (only supported for certain Local
 *           Zones)</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>CopyImage does not support the following source to destination copies:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Local Zone to non-parent Regions</p>
 *             </li>
 *             <li>
 *                <p>Between Local Zones with different parent Regions</p>
 *             </li>
 *             <li>
 *                <p>Local Zone to Outpost</p>
 *             </li>
 *             <li>
 *                <p>Outpost to Local Zone</p>
 *             </li>
 *             <li>
 *                <p>Outpost to Region</p>
 *             </li>
 *             <li>
 *                <p>Between Outposts</p>
 *             </li>
 *             <li>
 *                <p>Within same Outpost</p>
 *             </li>
 *             <li>
 *                <p>Cross-partition copies (use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a> instead)</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Destination specification</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Region to Region: The destination Region is the Region in which you initiate the copy
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>Region to Outpost: Specify the destination using the
 *             <code>DestinationOutpostArn</code> parameter (the ARN of the Outpost)</p>
 *             </li>
 *             <li>
 *                <p>Region to Local Zone, and Local Zone to Local Zone copies: Specify the destination
 *           using the <code>DestinationAvailabilityZone</code> parameter (the name of the destination
 *           Local Zone) or <code>DestinationAvailabilityZoneId</code> parameter (the ID of the
 *           destination Local Zone).</p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Snapshot encryption</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Region to Outpost: Backing snapshots copied to an Outpost are encrypted by default
 *           using the default encryption key for the Region or the key that you specify. Outposts do
 *           not support unencrypted snapshots.</p>
 *             </li>
 *             <li>
 *                <p>Region to Local Zone, and Local Zone to Local Zone: Not all Local Zones require
 *           encrypted snapshots. In Local Zones that require encrypted snapshots, backing snapshots
 *           are automatically encrypted during copy. In Local Zones where encryption is not required,
 *           snapshots retain their original encryption state (encrypted or unencrypted) by
 *           default.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, including the required permissions for copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copy an Amazon EC2 AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CopyImageRequest
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   SourceRegion: "STRING_VALUE", // required
 *   DestinationOutpostArn: "STRING_VALUE",
 *   CopyImageTags: true || false,
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
 *   SnapshotCopyCompletionDurationMinutes: Number("long"),
 *   DestinationAvailabilityZone: "STRING_VALUE",
 *   DestinationAvailabilityZoneId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyImageCommandInput - {@link CopyImageCommandInput}
 * @returns {@link CopyImageCommandOutput}
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To copy an AMI to another region
 * ```javascript
 * // This example copies the specified AMI from the us-east-1 region to the current region.
 * const input = {
 *   Description: "",
 *   Name: "My server",
 *   SourceImageId: "ami-5731123e",
 *   SourceRegion: "us-east-1"
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ImageId: "ami-438bea42"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyImageCommand extends $Command
  .classBuilder<
    CopyImageCommandInput,
    CopyImageCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CopyImage", {})
  .n("EC2Client", "CopyImageCommand")
  .sc(CopyImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyImageRequest;
      output: CopyImageResult;
    };
    sdk: {
      input: CopyImageCommandInput;
      output: CopyImageCommandOutput;
    };
  };
}
