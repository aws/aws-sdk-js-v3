// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLaunchTemplateVersionsRequest,
  DescribeLaunchTemplateVersionsResult,
  DescribeLaunchTemplateVersionsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  de_DescribeLaunchTemplateVersionsCommand,
  se_DescribeLaunchTemplateVersionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchTemplateVersionsCommand}.
 */
export interface DescribeLaunchTemplateVersionsCommandInput extends DescribeLaunchTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchTemplateVersionsCommand}.
 */
export interface DescribeLaunchTemplateVersionsCommandOutput
  extends DescribeLaunchTemplateVersionsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more versions of a specified launch template. You can describe all
 *             versions, individual versions, or a range of versions. You can also describe all the
 *             latest versions or all the default versions of all the launch templates in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLaunchTemplateVersionsRequest
 *   DryRun: true || false,
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 *   Versions: [ // VersionStringList
 *     "STRING_VALUE",
 *   ],
 *   MinVersion: "STRING_VALUE",
 *   MaxVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResolveAlias: true || false,
 * };
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLaunchTemplateVersionsResult
 * //   LaunchTemplateVersions: [ // LaunchTemplateVersionSet
 * //     { // LaunchTemplateVersion
 * //       LaunchTemplateId: "STRING_VALUE",
 * //       LaunchTemplateName: "STRING_VALUE",
 * //       VersionNumber: Number("long"),
 * //       VersionDescription: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       DefaultVersion: true || false,
 * //       LaunchTemplateData: { // ResponseLaunchTemplateData
 * //         KernelId: "STRING_VALUE",
 * //         EbsOptimized: true || false,
 * //         IamInstanceProfile: { // LaunchTemplateIamInstanceProfileSpecification
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         BlockDeviceMappings: [ // LaunchTemplateBlockDeviceMappingList
 * //           { // LaunchTemplateBlockDeviceMapping
 * //             DeviceName: "STRING_VALUE",
 * //             VirtualName: "STRING_VALUE",
 * //             Ebs: { // LaunchTemplateEbsBlockDevice
 * //               Encrypted: true || false,
 * //               DeleteOnTermination: true || false,
 * //               Iops: Number("int"),
 * //               KmsKeyId: "STRING_VALUE",
 * //               SnapshotId: "STRING_VALUE",
 * //               VolumeSize: Number("int"),
 * //               VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //               Throughput: Number("int"),
 * //             },
 * //             NoDevice: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NetworkInterfaces: [ // LaunchTemplateInstanceNetworkInterfaceSpecificationList
 * //           { // LaunchTemplateInstanceNetworkInterfaceSpecification
 * //             AssociateCarrierIpAddress: true || false,
 * //             AssociatePublicIpAddress: true || false,
 * //             DeleteOnTermination: true || false,
 * //             Description: "STRING_VALUE",
 * //             DeviceIndex: Number("int"),
 * //             Groups: [ // GroupIdStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             InterfaceType: "STRING_VALUE",
 * //             Ipv6AddressCount: Number("int"),
 * //             Ipv6Addresses: [ // InstanceIpv6AddressList
 * //               { // InstanceIpv6Address
 * //                 Ipv6Address: "STRING_VALUE",
 * //                 IsPrimaryIpv6: true || false,
 * //               },
 * //             ],
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //             PrivateIpAddress: "STRING_VALUE",
 * //             PrivateIpAddresses: [ // PrivateIpAddressSpecificationList
 * //               { // PrivateIpAddressSpecification
 * //                 Primary: true || false,
 * //                 PrivateIpAddress: "STRING_VALUE",
 * //               },
 * //             ],
 * //             SecondaryPrivateIpAddressCount: Number("int"),
 * //             SubnetId: "STRING_VALUE",
 * //             NetworkCardIndex: Number("int"),
 * //             Ipv4Prefixes: [ // Ipv4PrefixListResponse
 * //               { // Ipv4PrefixSpecificationResponse
 * //                 Ipv4Prefix: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Ipv4PrefixCount: Number("int"),
 * //             Ipv6Prefixes: [ // Ipv6PrefixListResponse
 * //               { // Ipv6PrefixSpecificationResponse
 * //                 Ipv6Prefix: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Ipv6PrefixCount: Number("int"),
 * //             PrimaryIpv6: true || false,
 * //             EnaSrdSpecification: { // LaunchTemplateEnaSrdSpecification
 * //               EnaSrdEnabled: true || false,
 * //               EnaSrdUdpSpecification: { // LaunchTemplateEnaSrdUdpSpecification
 * //                 EnaSrdUdpEnabled: true || false,
 * //               },
 * //             },
 * //             ConnectionTrackingSpecification: { // ConnectionTrackingSpecification
 * //               TcpEstablishedTimeout: Number("int"),
 * //               UdpTimeout: Number("int"),
 * //               UdpStreamTimeout: Number("int"),
 * //             },
 * //           },
 * //         ],
 * //         ImageId: "STRING_VALUE",
 * //         InstanceType: "a1.medium" || "a1.large" || "a1.xlarge" || "a1.2xlarge" || "a1.4xlarge" || "a1.metal" || "c1.medium" || "c1.xlarge" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5.metal" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c5d.metal" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "c5n.metal" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "c6g.metal" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6gd.metal" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "c6i.32xlarge" || "c6i.metal" || "cc1.4xlarge" || "cc2.8xlarge" || "cg1.4xlarge" || "cr1.8xlarge" || "d2.xlarge" || "d2.2xlarge" || "d2.4xlarge" || "d2.8xlarge" || "d3.xlarge" || "d3.2xlarge" || "d3.4xlarge" || "d3.8xlarge" || "d3en.xlarge" || "d3en.2xlarge" || "d3en.4xlarge" || "d3en.6xlarge" || "d3en.8xlarge" || "d3en.12xlarge" || "dl1.24xlarge" || "f1.2xlarge" || "f1.4xlarge" || "f1.16xlarge" || "g2.2xlarge" || "g2.8xlarge" || "g3.4xlarge" || "g3.8xlarge" || "g3.16xlarge" || "g3s.xlarge" || "g4ad.xlarge" || "g4ad.2xlarge" || "g4ad.4xlarge" || "g4ad.8xlarge" || "g4ad.16xlarge" || "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g4dn.metal" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.12xlarge" || "g5.16xlarge" || "g5.24xlarge" || "g5.48xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "g5g.metal" || "hi1.4xlarge" || "hpc6a.48xlarge" || "hs1.8xlarge" || "h1.2xlarge" || "h1.4xlarge" || "h1.8xlarge" || "h1.16xlarge" || "i2.xlarge" || "i2.2xlarge" || "i2.4xlarge" || "i2.8xlarge" || "i3.large" || "i3.xlarge" || "i3.2xlarge" || "i3.4xlarge" || "i3.8xlarge" || "i3.16xlarge" || "i3.metal" || "i3en.large" || "i3en.xlarge" || "i3en.2xlarge" || "i3en.3xlarge" || "i3en.6xlarge" || "i3en.12xlarge" || "i3en.24xlarge" || "i3en.metal" || "im4gn.large" || "im4gn.xlarge" || "im4gn.2xlarge" || "im4gn.4xlarge" || "im4gn.8xlarge" || "im4gn.16xlarge" || "inf1.xlarge" || "inf1.2xlarge" || "inf1.6xlarge" || "inf1.24xlarge" || "is4gen.medium" || "is4gen.large" || "is4gen.xlarge" || "is4gen.2xlarge" || "is4gen.4xlarge" || "is4gen.8xlarge" || "m1.small" || "m1.medium" || "m1.large" || "m1.xlarge" || "m2.xlarge" || "m2.2xlarge" || "m2.4xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m4.16xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5.metal" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5d.metal" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5dn.metal" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m5n.metal" || "m5zn.large" || "m5zn.xlarge" || "m5zn.2xlarge" || "m5zn.3xlarge" || "m5zn.6xlarge" || "m5zn.12xlarge" || "m5zn.metal" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6g.metal" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "m6gd.metal" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m6i.metal" || "mac1.metal" || "p2.xlarge" || "p2.8xlarge" || "p2.16xlarge" || "p3.2xlarge" || "p3.8xlarge" || "p3.16xlarge" || "p3dn.24xlarge" || "p4d.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5.metal" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "r5b.large" || "r5b.xlarge" || "r5b.2xlarge" || "r5b.4xlarge" || "r5b.8xlarge" || "r5b.12xlarge" || "r5b.16xlarge" || "r5b.24xlarge" || "r5b.metal" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "r5d.metal" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5dn.metal" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r5n.metal" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "r6g.metal" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r6gd.metal" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "r6i.metal" || "t1.micro" || "t2.nano" || "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "t2.xlarge" || "t2.2xlarge" || "t3.nano" || "t3.micro" || "t3.small" || "t3.medium" || "t3.large" || "t3.xlarge" || "t3.2xlarge" || "t3a.nano" || "t3a.micro" || "t3a.small" || "t3a.medium" || "t3a.large" || "t3a.xlarge" || "t3a.2xlarge" || "t4g.nano" || "t4g.micro" || "t4g.small" || "t4g.medium" || "t4g.large" || "t4g.xlarge" || "t4g.2xlarge" || "u-6tb1.56xlarge" || "u-6tb1.112xlarge" || "u-9tb1.112xlarge" || "u-12tb1.112xlarge" || "u-6tb1.metal" || "u-9tb1.metal" || "u-12tb1.metal" || "u-18tb1.metal" || "u-24tb1.metal" || "vt1.3xlarge" || "vt1.6xlarge" || "vt1.24xlarge" || "x1.16xlarge" || "x1.32xlarge" || "x1e.xlarge" || "x1e.2xlarge" || "x1e.4xlarge" || "x1e.8xlarge" || "x1e.16xlarge" || "x1e.32xlarge" || "x2iezn.2xlarge" || "x2iezn.4xlarge" || "x2iezn.6xlarge" || "x2iezn.8xlarge" || "x2iezn.12xlarge" || "x2iezn.metal" || "x2gd.medium" || "x2gd.large" || "x2gd.xlarge" || "x2gd.2xlarge" || "x2gd.4xlarge" || "x2gd.8xlarge" || "x2gd.12xlarge" || "x2gd.16xlarge" || "x2gd.metal" || "z1d.large" || "z1d.xlarge" || "z1d.2xlarge" || "z1d.3xlarge" || "z1d.6xlarge" || "z1d.12xlarge" || "z1d.metal" || "x2idn.16xlarge" || "x2idn.24xlarge" || "x2idn.32xlarge" || "x2iedn.xlarge" || "x2iedn.2xlarge" || "x2iedn.4xlarge" || "x2iedn.8xlarge" || "x2iedn.16xlarge" || "x2iedn.24xlarge" || "x2iedn.32xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6a.metal" || "m6a.metal" || "i4i.large" || "i4i.xlarge" || "i4i.2xlarge" || "i4i.4xlarge" || "i4i.8xlarge" || "i4i.16xlarge" || "i4i.32xlarge" || "i4i.metal" || "x2idn.metal" || "x2iedn.metal" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "mac2.metal" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c6id.metal" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6id.metal" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6id.metal" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6a.metal" || "p4de.24xlarge" || "u-3tb1.56xlarge" || "u-18tb1.112xlarge" || "u-24tb1.112xlarge" || "trn1.2xlarge" || "trn1.32xlarge" || "hpc6id.32xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "c7g.metal" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "m7g.metal" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "r7g.metal" || "c6in.metal" || "m6in.metal" || "m6idn.metal" || "r6in.metal" || "r6idn.metal" || "inf2.xlarge" || "inf2.8xlarge" || "inf2.24xlarge" || "inf2.48xlarge" || "trn1n.32xlarge" || "i4g.large" || "i4g.xlarge" || "i4g.2xlarge" || "i4g.4xlarge" || "i4g.8xlarge" || "i4g.16xlarge" || "hpc7g.4xlarge" || "hpc7g.8xlarge" || "hpc7g.16xlarge" || "c7gn.medium" || "c7gn.large" || "c7gn.xlarge" || "c7gn.2xlarge" || "c7gn.4xlarge" || "c7gn.8xlarge" || "c7gn.12xlarge" || "c7gn.16xlarge" || "p5.48xlarge" || "m7i.large" || "m7i.xlarge" || "m7i.2xlarge" || "m7i.4xlarge" || "m7i.8xlarge" || "m7i.12xlarge" || "m7i.16xlarge" || "m7i.24xlarge" || "m7i.48xlarge" || "m7i-flex.large" || "m7i-flex.xlarge" || "m7i-flex.2xlarge" || "m7i-flex.4xlarge" || "m7i-flex.8xlarge" || "m7a.medium" || "m7a.large" || "m7a.xlarge" || "m7a.2xlarge" || "m7a.4xlarge" || "m7a.8xlarge" || "m7a.12xlarge" || "m7a.16xlarge" || "m7a.24xlarge" || "m7a.32xlarge" || "m7a.48xlarge" || "m7a.metal-48xl" || "hpc7a.12xlarge" || "hpc7a.24xlarge" || "hpc7a.48xlarge" || "hpc7a.96xlarge" || "c7gd.medium" || "c7gd.large" || "c7gd.xlarge" || "c7gd.2xlarge" || "c7gd.4xlarge" || "c7gd.8xlarge" || "c7gd.12xlarge" || "c7gd.16xlarge" || "m7gd.medium" || "m7gd.large" || "m7gd.xlarge" || "m7gd.2xlarge" || "m7gd.4xlarge" || "m7gd.8xlarge" || "m7gd.12xlarge" || "m7gd.16xlarge" || "r7gd.medium" || "r7gd.large" || "r7gd.xlarge" || "r7gd.2xlarge" || "r7gd.4xlarge" || "r7gd.8xlarge" || "r7gd.12xlarge" || "r7gd.16xlarge" || "r7a.medium" || "r7a.large" || "r7a.xlarge" || "r7a.2xlarge" || "r7a.4xlarge" || "r7a.8xlarge" || "r7a.12xlarge" || "r7a.16xlarge" || "r7a.24xlarge" || "r7a.32xlarge" || "r7a.48xlarge" || "c7i.large" || "c7i.xlarge" || "c7i.2xlarge" || "c7i.4xlarge" || "c7i.8xlarge" || "c7i.12xlarge" || "c7i.16xlarge" || "c7i.24xlarge" || "c7i.48xlarge" || "mac2-m2pro.metal" || "r7iz.large" || "r7iz.xlarge" || "r7iz.2xlarge" || "r7iz.4xlarge" || "r7iz.8xlarge" || "r7iz.12xlarge" || "r7iz.16xlarge" || "r7iz.32xlarge" || "c7a.medium" || "c7a.large" || "c7a.xlarge" || "c7a.2xlarge" || "c7a.4xlarge" || "c7a.8xlarge" || "c7a.12xlarge" || "c7a.16xlarge" || "c7a.24xlarge" || "c7a.32xlarge" || "c7a.48xlarge" || "c7a.metal-48xl" || "r7a.metal-48xl" || "r7i.large" || "r7i.xlarge" || "r7i.2xlarge" || "r7i.4xlarge" || "r7i.8xlarge" || "r7i.12xlarge" || "r7i.16xlarge" || "r7i.24xlarge" || "r7i.48xlarge" || "dl2q.24xlarge" || "mac2-m2.metal" || "i4i.12xlarge" || "i4i.24xlarge" || "c7i.metal-24xl" || "c7i.metal-48xl" || "m7i.metal-24xl" || "m7i.metal-48xl" || "r7i.metal-24xl" || "r7i.metal-48xl" || "r7iz.metal-16xl" || "r7iz.metal-32xl" || "c7gd.metal" || "m7gd.metal" || "r7gd.metal" || "g6.xlarge" || "g6.2xlarge" || "g6.4xlarge" || "g6.8xlarge" || "g6.12xlarge" || "g6.16xlarge" || "g6.24xlarge" || "g6.48xlarge" || "gr6.4xlarge" || "gr6.8xlarge" || "c7i-flex.large" || "c7i-flex.xlarge" || "c7i-flex.2xlarge" || "c7i-flex.4xlarge" || "c7i-flex.8xlarge" || "u7i-12tb.224xlarge" || "u7in-16tb.224xlarge" || "u7in-24tb.224xlarge" || "u7in-32tb.224xlarge",
 * //         KeyName: "STRING_VALUE",
 * //         Monitoring: { // LaunchTemplatesMonitoring
 * //           Enabled: true || false,
 * //         },
 * //         Placement: { // LaunchTemplatePlacement
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Affinity: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //           HostId: "STRING_VALUE",
 * //           Tenancy: "default" || "dedicated" || "host",
 * //           SpreadDomain: "STRING_VALUE",
 * //           HostResourceGroupArn: "STRING_VALUE",
 * //           PartitionNumber: Number("int"),
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //         RamDiskId: "STRING_VALUE",
 * //         DisableApiTermination: true || false,
 * //         InstanceInitiatedShutdownBehavior: "stop" || "terminate",
 * //         UserData: "STRING_VALUE",
 * //         TagSpecifications: [ // LaunchTemplateTagSpecificationList
 * //           { // LaunchTemplateTagSpecification
 * //             ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 * //             Tags: [ // TagList
 * //               { // Tag
 * //                 Key: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         ElasticGpuSpecifications: [ // ElasticGpuSpecificationResponseList
 * //           { // ElasticGpuSpecificationResponse
 * //             Type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ElasticInferenceAccelerators: [ // LaunchTemplateElasticInferenceAcceleratorResponseList
 * //           { // LaunchTemplateElasticInferenceAcceleratorResponse
 * //             Type: "STRING_VALUE",
 * //             Count: Number("int"),
 * //           },
 * //         ],
 * //         SecurityGroupIds: [ // ValueStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         InstanceMarketOptions: { // LaunchTemplateInstanceMarketOptions
 * //           MarketType: "spot" || "capacity-block",
 * //           SpotOptions: { // LaunchTemplateSpotMarketOptions
 * //             MaxPrice: "STRING_VALUE",
 * //             SpotInstanceType: "one-time" || "persistent",
 * //             BlockDurationMinutes: Number("int"),
 * //             ValidUntil: new Date("TIMESTAMP"),
 * //             InstanceInterruptionBehavior: "hibernate" || "stop" || "terminate",
 * //           },
 * //         },
 * //         CreditSpecification: { // CreditSpecification
 * //           CpuCredits: "STRING_VALUE",
 * //         },
 * //         CpuOptions: { // LaunchTemplateCpuOptions
 * //           CoreCount: Number("int"),
 * //           ThreadsPerCore: Number("int"),
 * //           AmdSevSnp: "enabled" || "disabled",
 * //         },
 * //         CapacityReservationSpecification: { // LaunchTemplateCapacityReservationSpecificationResponse
 * //           CapacityReservationPreference: "open" || "none",
 * //           CapacityReservationTarget: { // CapacityReservationTargetResponse
 * //             CapacityReservationId: "STRING_VALUE",
 * //             CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //           },
 * //         },
 * //         LicenseSpecifications: [ // LaunchTemplateLicenseList
 * //           { // LaunchTemplateLicenseConfiguration
 * //             LicenseConfigurationArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         HibernationOptions: { // LaunchTemplateHibernationOptions
 * //           Configured: true || false,
 * //         },
 * //         MetadataOptions: { // LaunchTemplateInstanceMetadataOptions
 * //           State: "pending" || "applied",
 * //           HttpTokens: "optional" || "required",
 * //           HttpPutResponseHopLimit: Number("int"),
 * //           HttpEndpoint: "disabled" || "enabled",
 * //           HttpProtocolIpv6: "disabled" || "enabled",
 * //           InstanceMetadataTags: "disabled" || "enabled",
 * //         },
 * //         EnclaveOptions: { // LaunchTemplateEnclaveOptions
 * //           Enabled: true || false,
 * //         },
 * //         InstanceRequirements: { // InstanceRequirements
 * //           VCpuCount: { // VCpuCountRange
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           MemoryMiB: { // MemoryMiB
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           CpuManufacturers: [ // CpuManufacturerSet
 * //             "intel" || "amd" || "amazon-web-services",
 * //           ],
 * //           MemoryGiBPerVCpu: { // MemoryGiBPerVCpu
 * //             Min: Number("double"),
 * //             Max: Number("double"),
 * //           },
 * //           ExcludedInstanceTypes: [ // ExcludedInstanceTypeSet
 * //             "STRING_VALUE",
 * //           ],
 * //           InstanceGenerations: [ // InstanceGenerationSet
 * //             "current" || "previous",
 * //           ],
 * //           SpotMaxPricePercentageOverLowestPrice: Number("int"),
 * //           OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //           BareMetal: "included" || "required" || "excluded",
 * //           BurstablePerformance: "included" || "required" || "excluded",
 * //           RequireHibernateSupport: true || false,
 * //           NetworkInterfaceCount: { // NetworkInterfaceCount
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           LocalStorage: "included" || "required" || "excluded",
 * //           LocalStorageTypes: [ // LocalStorageTypeSet
 * //             "hdd" || "ssd",
 * //           ],
 * //           TotalLocalStorageGB: { // TotalLocalStorageGB
 * //             Min: Number("double"),
 * //             Max: Number("double"),
 * //           },
 * //           BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbps
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           AcceleratorTypes: [ // AcceleratorTypeSet
 * //             "gpu" || "fpga" || "inference",
 * //           ],
 * //           AcceleratorCount: { // AcceleratorCount
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           AcceleratorManufacturers: [ // AcceleratorManufacturerSet
 * //             "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 * //           ],
 * //           AcceleratorNames: [ // AcceleratorNameSet
 * //             "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
 * //           ],
 * //           AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiB
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           NetworkBandwidthGbps: { // NetworkBandwidthGbps
 * //             Min: Number("double"),
 * //             Max: Number("double"),
 * //           },
 * //           AllowedInstanceTypes: [ // AllowedInstanceTypeSet
 * //             "STRING_VALUE",
 * //           ],
 * //           MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 * //         },
 * //         PrivateDnsNameOptions: { // LaunchTemplatePrivateDnsNameOptions
 * //           HostnameType: "ip-name" || "resource-name",
 * //           EnableResourceNameDnsARecord: true || false,
 * //           EnableResourceNameDnsAAAARecord: true || false,
 * //         },
 * //         MaintenanceOptions: { // LaunchTemplateInstanceMaintenanceOptions
 * //           AutoRecovery: "default" || "disabled",
 * //         },
 * //         DisableApiStop: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLaunchTemplateVersionsCommandInput - {@link DescribeLaunchTemplateVersionsCommandInput}
 * @returns {@link DescribeLaunchTemplateVersionsCommandOutput}
 * @see {@link DescribeLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the versions for a launch template
 * ```javascript
 * // This example describes the versions for the specified launch template.
 * const input = {
 *   "LaunchTemplateId": "068f72b72934aff71"
 * };
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplateVersions": [
 *     {
 *       "CreateTime": "2017-11-20T13:12:32.000Z",
 *       "CreatedBy": "arn:aws:iam::123456789102:root",
 *       "DefaultVersion": false,
 *       "LaunchTemplateData": {
 *         "ImageId": "ami-6057e21a",
 *         "InstanceType": "t2.medium",
 *         "KeyName": "kp-us-east",
 *         "NetworkInterfaces": [
 *           {
 *             "DeviceIndex": 0,
 *             "Groups": [
 *               "sg-7c227019"
 *             ],
 *             "SubnetId": "subnet-1a2b3c4d"
 *           }
 *         ]
 *       },
 *       "LaunchTemplateId": "lt-068f72b72934aff71",
 *       "LaunchTemplateName": "Webservers",
 *       "VersionNumber": 2
 *     },
 *     {
 *       "CreateTime": "2017-11-20T12:52:33.000Z",
 *       "CreatedBy": "arn:aws:iam::123456789102:root",
 *       "DefaultVersion": true,
 *       "LaunchTemplateData": {
 *         "ImageId": "ami-aabbcc11",
 *         "InstanceType": "t2.medium",
 *         "KeyName": "kp-us-east",
 *         "NetworkInterfaces": [
 *           {
 *             "AssociatePublicIpAddress": true,
 *             "DeleteOnTermination": false,
 *             "DeviceIndex": 0,
 *             "Groups": [
 *               "sg-7c227019"
 *             ],
 *             "SubnetId": "subnet-7b16de0c"
 *           }
 *         ],
 *         "UserData": ""
 *       },
 *       "LaunchTemplateId": "lt-068f72b72934aff71",
 *       "LaunchTemplateName": "Webservers",
 *       "VersionNumber": 1
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-versions-for-a-launch-template-1529344425048
 * ```
 *
 */
export class DescribeLaunchTemplateVersionsCommand extends $Command
  .classBuilder<
    DescribeLaunchTemplateVersionsCommandInput,
    DescribeLaunchTemplateVersionsCommandOutput,
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
  .s("AmazonEC2", "DescribeLaunchTemplateVersions", {})
  .n("EC2Client", "DescribeLaunchTemplateVersionsCommand")
  .f(void 0, DescribeLaunchTemplateVersionsResultFilterSensitiveLog)
  .ser(se_DescribeLaunchTemplateVersionsCommand)
  .de(de_DescribeLaunchTemplateVersionsCommand)
  .build() {}
