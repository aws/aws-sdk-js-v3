// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterImageRequest, RegisterImageResult } from "../models/models_7";
import { de_RegisterImageCommand, se_RegisterImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterImageCommand}.
 */
export interface RegisterImageCommandInput extends RegisterImageRequest {}
/**
 * @public
 *
 * The output of {@link RegisterImageCommand}.
 */
export interface RegisterImageCommandOutput extends RegisterImageResult, __MetadataBearer {}

/**
 * <p>Registers an AMI. When you're creating an instance-store backed AMI, registering the AMI
 *       is the final step in the creation process. For more information about creating AMIs, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot">Create an AMI from a snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-instance-store.html">Create an instance-store
 *         backed AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <note>
 *             <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers the AMI
 *         in a single request, so you don't have to register the AMI yourself. We recommend that you
 *         always use <a>CreateImage</a> unless you have a specific reason to use
 *         RegisterImage.</p>
 *          </note>
 *          <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI
 *       backed by an instance store volume invalidates its registration. If you make changes to an
 *       image, deregister the previous image and register the new image.</p>
 *          <p>
 *             <b>Register a snapshot of a root device volume</b>
 *          </p>
 *          <p>You can use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from a snapshot
 *       of a root device volume. You specify the snapshot using a block device mapping. You can't set
 *       the encryption state of the volume using the block device mapping. If the snapshot is
 *       encrypted, or encryption by default is enabled, the root volume of an instance launched from
 *       the AMI is encrypted.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot">Create an AMI from a snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with EBS-backed AMIs</a>
 *       in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>
 *             <b>Amazon Web Services Marketplace product codes</b>
 *          </p>
 *          <p>If any snapshots have Amazon Web Services Marketplace product codes, they are copied to the new AMI.</p>
 *          <p>In most cases, AMIs for Windows, RedHat, SUSE, and SQL Server require correct licensing
 *       information to be present on the AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand AMI billing
 *         information</a> in the <i>Amazon EC2 User Guide</i>. When creating an AMI from
 *       a snapshot, the <code>RegisterImage</code> operation derives the correct billing information
 *       from the snapshot's metadata, but this requires the appropriate metadata to be present. To
 *       verify if the correct billing information was applied, check the <code>PlatformDetails</code>
 *       field on the new AMI. If the field is empty or doesn't match the expected operating system
 *       code (for example, Windows, RedHat, SUSE, or SQL), the AMI creation was unsuccessful, and you
 *       should discard the AMI and instead create the AMI from an instance using <a>CreateImage</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#how-to-create-ebs-ami">Create an AMI
 *         from an instance </a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched
 *       from an AMI with a billing product code, make sure that the Reserved Instance has the matching
 *       billing product code. If you purchase a Reserved Instance without the matching billing product
 *       code, the Reserved Instance will not be applied to the On-Demand Instance. For information
 *       about how to obtain the platform details and billing information of an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand AMI
 *         billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterImageRequest
 *   ImageLocation: "STRING_VALUE",
 *   BillingProducts: [ // BillingProductList
 *     "STRING_VALUE",
 *   ],
 *   BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 *   TpmSupport: "v2.0",
 *   UefiData: "STRING_VALUE",
 *   ImdsSupport: "v2.0",
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
 *   DryRun: true || false,
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Architecture: "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 *   KernelId: "STRING_VALUE",
 *   RamdiskId: "STRING_VALUE",
 *   RootDeviceName: "STRING_VALUE",
 *   BlockDeviceMappings: [ // BlockDeviceMappingRequestList
 *     { // BlockDeviceMapping
 *       Ebs: { // EbsBlockDevice
 *         DeleteOnTermination: true || false,
 *         Iops: Number("int"),
 *         SnapshotId: "STRING_VALUE",
 *         VolumeSize: Number("int"),
 *         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *         KmsKeyId: "STRING_VALUE",
 *         Throughput: Number("int"),
 *         OutpostArn: "STRING_VALUE",
 *         AvailabilityZone: "STRING_VALUE",
 *         Encrypted: true || false,
 *         VolumeInitializationRate: Number("int"),
 *         AvailabilityZoneId: "STRING_VALUE",
 *       },
 *       NoDevice: "STRING_VALUE",
 *       DeviceName: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *     },
 *   ],
 *   VirtualizationType: "STRING_VALUE",
 *   SriovNetSupport: "STRING_VALUE",
 *   EnaSupport: true || false,
 * };
 * const command = new RegisterImageCommand(input);
 * const response = await client.send(command);
 * // { // RegisterImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterImageCommandInput - {@link RegisterImageCommandInput}
 * @returns {@link RegisterImageCommandOutput}
 * @see {@link RegisterImageCommandInput} for command's `input` shape.
 * @see {@link RegisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RegisterImageCommand extends $Command
  .classBuilder<
    RegisterImageCommandInput,
    RegisterImageCommandOutput,
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
  .s("AmazonEC2", "RegisterImage", {})
  .n("EC2Client", "RegisterImageCommand")
  .f(void 0, void 0)
  .ser(se_RegisterImageCommand)
  .de(de_RegisterImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterImageRequest;
      output: RegisterImageResult;
    };
    sdk: {
      input: RegisterImageCommandInput;
      output: RegisterImageCommandOutput;
    };
  };
}
