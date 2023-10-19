// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { Reservation } from "../models/models_4";
import { RunInstancesRequest, RunInstancesRequestFilterSensitiveLog } from "../models/models_7";
import { de_RunInstancesCommand, se_RunInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RunInstancesCommand}.
 */
export interface RunInstancesCommandInput extends RunInstancesRequest {}
/**
 * @public
 *
 * The output of {@link RunInstancesCommand}.
 */
export interface RunInstancesCommandOutput extends Reservation, __MetadataBearer {}

/**
 * @public
 * <p>Launches the specified number of instances using an AMI for which you have
 *             permissions.</p>
 *          <p>You can specify a number of options, or leave the default options. The following rules
 *             apply:</p>
 *          <ul>
 *             <li>
 *                <p>If you don't specify a subnet ID, we choose a default subnet from
 *                     your default VPC for you. If you don't have a default VPC, you must specify a
 *                     subnet ID in the request.</p>
 *             </li>
 *             <li>
 *                <p>All instances have a network interface with a primary private IPv4
 *                     address. If you don't specify this address, we choose one from the IPv4 range of
 *                     your subnet.</p>
 *             </li>
 *             <li>
 *                <p>Not all instance types support IPv6 addresses. For more information, see
 *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
 *                     types</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you don't specify a security group ID, we use the default security group.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security
 *                         groups</a>.</p>
 *             </li>
 *             <li>
 *                <p>If any of the AMIs have a product code attached for which the user has not
 *                     subscribed, the request fails.</p>
 *             </li>
 *          </ul>
 *          <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>,
 *             which is a resource that contains the parameters to launch an instance. When you launch
 *             an instance using <a>RunInstances</a>, you can specify the launch template
 *             instead of specifying the launch parameters.</p>
 *          <p>To ensure faster instance launches, break up large requests into smaller batches. For
 *             example, create five separate launch requests for 100 instances each instead of one
 *             launch request for 500 instances.</p>
 *          <p>An instance is ready for you to use when it's in the <code>running</code> state. You
 *             can check the state of your instance using <a>DescribeInstances</a>. You can
 *             tag instances and EBS volumes during launch, after launch, or both. For more
 *             information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *                 resources</a>.</p>
 *          <p>Linux instances have access to the public key of the key pair at boot. You can use
 *             this key to provide secure access to the instance. Amazon EC2 public images use this
 *             feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key
 *                 pairs</a>.</p>
 *          <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What to do if
 *                 an instance immediately terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting connecting to your instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RunInstancesRequest
 *   BlockDeviceMappings: [ // BlockDeviceMappingRequestList
 *     { // BlockDeviceMapping
 *       DeviceName: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *       Ebs: { // EbsBlockDevice
 *         DeleteOnTermination: true || false,
 *         Iops: Number("int"),
 *         SnapshotId: "STRING_VALUE",
 *         VolumeSize: Number("int"),
 *         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *         KmsKeyId: "STRING_VALUE",
 *         Throughput: Number("int"),
 *         OutpostArn: "STRING_VALUE",
 *         Encrypted: true || false,
 *       },
 *       NoDevice: "STRING_VALUE",
 *     },
 *   ],
 *   ImageId: "STRING_VALUE",
 *   InstanceType: "a1.medium" || "a1.large" || "a1.xlarge" || "a1.2xlarge" || "a1.4xlarge" || "a1.metal" || "c1.medium" || "c1.xlarge" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5.metal" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c5d.metal" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "c5n.metal" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "c6g.metal" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6gd.metal" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "c6i.32xlarge" || "c6i.metal" || "cc1.4xlarge" || "cc2.8xlarge" || "cg1.4xlarge" || "cr1.8xlarge" || "d2.xlarge" || "d2.2xlarge" || "d2.4xlarge" || "d2.8xlarge" || "d3.xlarge" || "d3.2xlarge" || "d3.4xlarge" || "d3.8xlarge" || "d3en.xlarge" || "d3en.2xlarge" || "d3en.4xlarge" || "d3en.6xlarge" || "d3en.8xlarge" || "d3en.12xlarge" || "dl1.24xlarge" || "f1.2xlarge" || "f1.4xlarge" || "f1.16xlarge" || "g2.2xlarge" || "g2.8xlarge" || "g3.4xlarge" || "g3.8xlarge" || "g3.16xlarge" || "g3s.xlarge" || "g4ad.xlarge" || "g4ad.2xlarge" || "g4ad.4xlarge" || "g4ad.8xlarge" || "g4ad.16xlarge" || "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g4dn.metal" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.12xlarge" || "g5.16xlarge" || "g5.24xlarge" || "g5.48xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "g5g.metal" || "hi1.4xlarge" || "hpc6a.48xlarge" || "hs1.8xlarge" || "h1.2xlarge" || "h1.4xlarge" || "h1.8xlarge" || "h1.16xlarge" || "i2.xlarge" || "i2.2xlarge" || "i2.4xlarge" || "i2.8xlarge" || "i3.large" || "i3.xlarge" || "i3.2xlarge" || "i3.4xlarge" || "i3.8xlarge" || "i3.16xlarge" || "i3.metal" || "i3en.large" || "i3en.xlarge" || "i3en.2xlarge" || "i3en.3xlarge" || "i3en.6xlarge" || "i3en.12xlarge" || "i3en.24xlarge" || "i3en.metal" || "im4gn.large" || "im4gn.xlarge" || "im4gn.2xlarge" || "im4gn.4xlarge" || "im4gn.8xlarge" || "im4gn.16xlarge" || "inf1.xlarge" || "inf1.2xlarge" || "inf1.6xlarge" || "inf1.24xlarge" || "is4gen.medium" || "is4gen.large" || "is4gen.xlarge" || "is4gen.2xlarge" || "is4gen.4xlarge" || "is4gen.8xlarge" || "m1.small" || "m1.medium" || "m1.large" || "m1.xlarge" || "m2.xlarge" || "m2.2xlarge" || "m2.4xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m4.16xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5.metal" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5d.metal" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5dn.metal" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m5n.metal" || "m5zn.large" || "m5zn.xlarge" || "m5zn.2xlarge" || "m5zn.3xlarge" || "m5zn.6xlarge" || "m5zn.12xlarge" || "m5zn.metal" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6g.metal" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "m6gd.metal" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m6i.metal" || "mac1.metal" || "p2.xlarge" || "p2.8xlarge" || "p2.16xlarge" || "p3.2xlarge" || "p3.8xlarge" || "p3.16xlarge" || "p3dn.24xlarge" || "p4d.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5.metal" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "r5b.large" || "r5b.xlarge" || "r5b.2xlarge" || "r5b.4xlarge" || "r5b.8xlarge" || "r5b.12xlarge" || "r5b.16xlarge" || "r5b.24xlarge" || "r5b.metal" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "r5d.metal" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5dn.metal" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r5n.metal" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "r6g.metal" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r6gd.metal" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "r6i.metal" || "t1.micro" || "t2.nano" || "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "t2.xlarge" || "t2.2xlarge" || "t3.nano" || "t3.micro" || "t3.small" || "t3.medium" || "t3.large" || "t3.xlarge" || "t3.2xlarge" || "t3a.nano" || "t3a.micro" || "t3a.small" || "t3a.medium" || "t3a.large" || "t3a.xlarge" || "t3a.2xlarge" || "t4g.nano" || "t4g.micro" || "t4g.small" || "t4g.medium" || "t4g.large" || "t4g.xlarge" || "t4g.2xlarge" || "u-6tb1.56xlarge" || "u-6tb1.112xlarge" || "u-9tb1.112xlarge" || "u-12tb1.112xlarge" || "u-6tb1.metal" || "u-9tb1.metal" || "u-12tb1.metal" || "u-18tb1.metal" || "u-24tb1.metal" || "vt1.3xlarge" || "vt1.6xlarge" || "vt1.24xlarge" || "x1.16xlarge" || "x1.32xlarge" || "x1e.xlarge" || "x1e.2xlarge" || "x1e.4xlarge" || "x1e.8xlarge" || "x1e.16xlarge" || "x1e.32xlarge" || "x2iezn.2xlarge" || "x2iezn.4xlarge" || "x2iezn.6xlarge" || "x2iezn.8xlarge" || "x2iezn.12xlarge" || "x2iezn.metal" || "x2gd.medium" || "x2gd.large" || "x2gd.xlarge" || "x2gd.2xlarge" || "x2gd.4xlarge" || "x2gd.8xlarge" || "x2gd.12xlarge" || "x2gd.16xlarge" || "x2gd.metal" || "z1d.large" || "z1d.xlarge" || "z1d.2xlarge" || "z1d.3xlarge" || "z1d.6xlarge" || "z1d.12xlarge" || "z1d.metal" || "x2idn.16xlarge" || "x2idn.24xlarge" || "x2idn.32xlarge" || "x2iedn.xlarge" || "x2iedn.2xlarge" || "x2iedn.4xlarge" || "x2iedn.8xlarge" || "x2iedn.16xlarge" || "x2iedn.24xlarge" || "x2iedn.32xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6a.metal" || "m6a.metal" || "i4i.large" || "i4i.xlarge" || "i4i.2xlarge" || "i4i.4xlarge" || "i4i.8xlarge" || "i4i.16xlarge" || "i4i.32xlarge" || "i4i.metal" || "x2idn.metal" || "x2iedn.metal" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "mac2.metal" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c6id.metal" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6id.metal" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6id.metal" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6a.metal" || "p4de.24xlarge" || "u-3tb1.56xlarge" || "u-18tb1.112xlarge" || "u-24tb1.112xlarge" || "trn1.2xlarge" || "trn1.32xlarge" || "hpc6id.32xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "c7g.metal" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "m7g.metal" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "r7g.metal" || "c6in.metal" || "m6in.metal" || "m6idn.metal" || "r6in.metal" || "r6idn.metal" || "inf2.xlarge" || "inf2.8xlarge" || "inf2.24xlarge" || "inf2.48xlarge" || "trn1n.32xlarge" || "i4g.large" || "i4g.xlarge" || "i4g.2xlarge" || "i4g.4xlarge" || "i4g.8xlarge" || "i4g.16xlarge" || "hpc7g.4xlarge" || "hpc7g.8xlarge" || "hpc7g.16xlarge" || "c7gn.medium" || "c7gn.large" || "c7gn.xlarge" || "c7gn.2xlarge" || "c7gn.4xlarge" || "c7gn.8xlarge" || "c7gn.12xlarge" || "c7gn.16xlarge" || "p5.48xlarge" || "m7i.large" || "m7i.xlarge" || "m7i.2xlarge" || "m7i.4xlarge" || "m7i.8xlarge" || "m7i.12xlarge" || "m7i.16xlarge" || "m7i.24xlarge" || "m7i.48xlarge" || "m7i-flex.large" || "m7i-flex.xlarge" || "m7i-flex.2xlarge" || "m7i-flex.4xlarge" || "m7i-flex.8xlarge" || "m7a.medium" || "m7a.large" || "m7a.xlarge" || "m7a.2xlarge" || "m7a.4xlarge" || "m7a.8xlarge" || "m7a.12xlarge" || "m7a.16xlarge" || "m7a.24xlarge" || "m7a.32xlarge" || "m7a.48xlarge" || "m7a.metal-48xl" || "hpc7a.12xlarge" || "hpc7a.24xlarge" || "hpc7a.48xlarge" || "hpc7a.96xlarge" || "c7gd.medium" || "c7gd.large" || "c7gd.xlarge" || "c7gd.2xlarge" || "c7gd.4xlarge" || "c7gd.8xlarge" || "c7gd.12xlarge" || "c7gd.16xlarge" || "m7gd.medium" || "m7gd.large" || "m7gd.xlarge" || "m7gd.2xlarge" || "m7gd.4xlarge" || "m7gd.8xlarge" || "m7gd.12xlarge" || "m7gd.16xlarge" || "r7gd.medium" || "r7gd.large" || "r7gd.xlarge" || "r7gd.2xlarge" || "r7gd.4xlarge" || "r7gd.8xlarge" || "r7gd.12xlarge" || "r7gd.16xlarge" || "r7a.medium" || "r7a.large" || "r7a.xlarge" || "r7a.2xlarge" || "r7a.4xlarge" || "r7a.8xlarge" || "r7a.12xlarge" || "r7a.16xlarge" || "r7a.24xlarge" || "r7a.32xlarge" || "r7a.48xlarge" || "c7i.large" || "c7i.xlarge" || "c7i.2xlarge" || "c7i.4xlarge" || "c7i.8xlarge" || "c7i.12xlarge" || "c7i.16xlarge" || "c7i.24xlarge" || "c7i.48xlarge" || "mac2-m2pro.metal" || "r7iz.large" || "r7iz.xlarge" || "r7iz.2xlarge" || "r7iz.4xlarge" || "r7iz.8xlarge" || "r7iz.12xlarge" || "r7iz.16xlarge" || "r7iz.32xlarge" || "c7a.medium" || "c7a.large" || "c7a.xlarge" || "c7a.2xlarge" || "c7a.4xlarge" || "c7a.8xlarge" || "c7a.12xlarge" || "c7a.16xlarge" || "c7a.24xlarge" || "c7a.32xlarge" || "c7a.48xlarge" || "c7a.metal-48xl" || "r7a.metal-48xl" || "r7i.large" || "r7i.xlarge" || "r7i.2xlarge" || "r7i.4xlarge" || "r7i.8xlarge" || "r7i.12xlarge" || "r7i.16xlarge" || "r7i.24xlarge" || "r7i.48xlarge",
 *   Ipv6AddressCount: Number("int"),
 *   Ipv6Addresses: [ // InstanceIpv6AddressList
 *     { // InstanceIpv6Address
 *       Ipv6Address: "STRING_VALUE",
 *       IsPrimaryIpv6: true || false,
 *     },
 *   ],
 *   KernelId: "STRING_VALUE",
 *   KeyName: "STRING_VALUE",
 *   MaxCount: Number("int"), // required
 *   MinCount: Number("int"), // required
 *   Monitoring: { // RunInstancesMonitoringEnabled
 *     Enabled: true || false, // required
 *   },
 *   Placement: { // Placement
 *     AvailabilityZone: "STRING_VALUE",
 *     Affinity: "STRING_VALUE",
 *     GroupName: "STRING_VALUE",
 *     PartitionNumber: Number("int"),
 *     HostId: "STRING_VALUE",
 *     Tenancy: "default" || "dedicated" || "host",
 *     SpreadDomain: "STRING_VALUE",
 *     HostResourceGroupArn: "STRING_VALUE",
 *     GroupId: "STRING_VALUE",
 *   },
 *   RamdiskId: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroups: [ // SecurityGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   SubnetId: "STRING_VALUE",
 *   UserData: "STRING_VALUE",
 *   AdditionalInfo: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DisableApiTermination: true || false,
 *   DryRun: true || false,
 *   EbsOptimized: true || false,
 *   IamInstanceProfile: { // IamInstanceProfileSpecification
 *     Arn: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *   },
 *   InstanceInitiatedShutdownBehavior: "stop" || "terminate",
 *   NetworkInterfaces: [ // InstanceNetworkInterfaceSpecificationList
 *     { // InstanceNetworkInterfaceSpecification
 *       AssociatePublicIpAddress: true || false,
 *       DeleteOnTermination: true || false,
 *       Description: "STRING_VALUE",
 *       DeviceIndex: Number("int"),
 *       Groups: [
 *         "STRING_VALUE",
 *       ],
 *       Ipv6AddressCount: Number("int"),
 *       Ipv6Addresses: [
 *         {
 *           Ipv6Address: "STRING_VALUE",
 *           IsPrimaryIpv6: true || false,
 *         },
 *       ],
 *       NetworkInterfaceId: "STRING_VALUE",
 *       PrivateIpAddress: "STRING_VALUE",
 *       PrivateIpAddresses: [ // PrivateIpAddressSpecificationList
 *         { // PrivateIpAddressSpecification
 *           Primary: true || false,
 *           PrivateIpAddress: "STRING_VALUE",
 *         },
 *       ],
 *       SecondaryPrivateIpAddressCount: Number("int"),
 *       SubnetId: "STRING_VALUE",
 *       AssociateCarrierIpAddress: true || false,
 *       InterfaceType: "STRING_VALUE",
 *       NetworkCardIndex: Number("int"),
 *       Ipv4Prefixes: [ // Ipv4PrefixList
 *         { // Ipv4PrefixSpecificationRequest
 *           Ipv4Prefix: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv4PrefixCount: Number("int"),
 *       Ipv6Prefixes: [ // Ipv6PrefixList
 *         { // Ipv6PrefixSpecificationRequest
 *           Ipv6Prefix: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv6PrefixCount: Number("int"),
 *       PrimaryIpv6: true || false,
 *     },
 *   ],
 *   PrivateIpAddress: "STRING_VALUE",
 *   ElasticGpuSpecification: [ // ElasticGpuSpecifications
 *     { // ElasticGpuSpecification
 *       Type: "STRING_VALUE", // required
 *     },
 *   ],
 *   ElasticInferenceAccelerators: [ // ElasticInferenceAccelerators
 *     { // ElasticInferenceAccelerator
 *       Type: "STRING_VALUE", // required
 *       Count: Number("int"),
 *     },
 *   ],
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
 *   LaunchTemplate: { // LaunchTemplateSpecification
 *     LaunchTemplateId: "STRING_VALUE",
 *     LaunchTemplateName: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   InstanceMarketOptions: { // InstanceMarketOptionsRequest
 *     MarketType: "spot",
 *     SpotOptions: { // SpotMarketOptions
 *       MaxPrice: "STRING_VALUE",
 *       SpotInstanceType: "one-time" || "persistent",
 *       BlockDurationMinutes: Number("int"),
 *       ValidUntil: new Date("TIMESTAMP"),
 *       InstanceInterruptionBehavior: "hibernate" || "stop" || "terminate",
 *     },
 *   },
 *   CreditSpecification: { // CreditSpecificationRequest
 *     CpuCredits: "STRING_VALUE", // required
 *   },
 *   CpuOptions: { // CpuOptionsRequest
 *     CoreCount: Number("int"),
 *     ThreadsPerCore: Number("int"),
 *     AmdSevSnp: "enabled" || "disabled",
 *   },
 *   CapacityReservationSpecification: { // CapacityReservationSpecification
 *     CapacityReservationPreference: "open" || "none",
 *     CapacityReservationTarget: { // CapacityReservationTarget
 *       CapacityReservationId: "STRING_VALUE",
 *       CapacityReservationResourceGroupArn: "STRING_VALUE",
 *     },
 *   },
 *   HibernationOptions: { // HibernationOptionsRequest
 *     Configured: true || false,
 *   },
 *   LicenseSpecifications: [ // LicenseSpecificationListRequest
 *     { // LicenseConfigurationRequest
 *       LicenseConfigurationArn: "STRING_VALUE",
 *     },
 *   ],
 *   MetadataOptions: { // InstanceMetadataOptionsRequest
 *     HttpTokens: "optional" || "required",
 *     HttpPutResponseHopLimit: Number("int"),
 *     HttpEndpoint: "disabled" || "enabled",
 *     HttpProtocolIpv6: "disabled" || "enabled",
 *     InstanceMetadataTags: "disabled" || "enabled",
 *   },
 *   EnclaveOptions: { // EnclaveOptionsRequest
 *     Enabled: true || false,
 *   },
 *   PrivateDnsNameOptions: { // PrivateDnsNameOptionsRequest
 *     HostnameType: "ip-name" || "resource-name",
 *     EnableResourceNameDnsARecord: true || false,
 *     EnableResourceNameDnsAAAARecord: true || false,
 *   },
 *   MaintenanceOptions: { // InstanceMaintenanceOptionsRequest
 *     AutoRecovery: "disabled" || "default",
 *   },
 *   DisableApiStop: true || false,
 *   EnablePrimaryIpv6: true || false,
 * };
 * const command = new RunInstancesCommand(input);
 * const response = await client.send(command);
 * // { // Reservation
 * //   Groups: [ // GroupIdentifierList
 * //     { // GroupIdentifier
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Instances: [ // InstanceList
 * //     { // Instance
 * //       AmiLaunchIndex: Number("int"),
 * //       ImageId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "a1.medium" || "a1.large" || "a1.xlarge" || "a1.2xlarge" || "a1.4xlarge" || "a1.metal" || "c1.medium" || "c1.xlarge" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5.metal" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c5d.metal" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "c5n.metal" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "c6g.metal" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6gd.metal" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "c6i.32xlarge" || "c6i.metal" || "cc1.4xlarge" || "cc2.8xlarge" || "cg1.4xlarge" || "cr1.8xlarge" || "d2.xlarge" || "d2.2xlarge" || "d2.4xlarge" || "d2.8xlarge" || "d3.xlarge" || "d3.2xlarge" || "d3.4xlarge" || "d3.8xlarge" || "d3en.xlarge" || "d3en.2xlarge" || "d3en.4xlarge" || "d3en.6xlarge" || "d3en.8xlarge" || "d3en.12xlarge" || "dl1.24xlarge" || "f1.2xlarge" || "f1.4xlarge" || "f1.16xlarge" || "g2.2xlarge" || "g2.8xlarge" || "g3.4xlarge" || "g3.8xlarge" || "g3.16xlarge" || "g3s.xlarge" || "g4ad.xlarge" || "g4ad.2xlarge" || "g4ad.4xlarge" || "g4ad.8xlarge" || "g4ad.16xlarge" || "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g4dn.metal" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.12xlarge" || "g5.16xlarge" || "g5.24xlarge" || "g5.48xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "g5g.metal" || "hi1.4xlarge" || "hpc6a.48xlarge" || "hs1.8xlarge" || "h1.2xlarge" || "h1.4xlarge" || "h1.8xlarge" || "h1.16xlarge" || "i2.xlarge" || "i2.2xlarge" || "i2.4xlarge" || "i2.8xlarge" || "i3.large" || "i3.xlarge" || "i3.2xlarge" || "i3.4xlarge" || "i3.8xlarge" || "i3.16xlarge" || "i3.metal" || "i3en.large" || "i3en.xlarge" || "i3en.2xlarge" || "i3en.3xlarge" || "i3en.6xlarge" || "i3en.12xlarge" || "i3en.24xlarge" || "i3en.metal" || "im4gn.large" || "im4gn.xlarge" || "im4gn.2xlarge" || "im4gn.4xlarge" || "im4gn.8xlarge" || "im4gn.16xlarge" || "inf1.xlarge" || "inf1.2xlarge" || "inf1.6xlarge" || "inf1.24xlarge" || "is4gen.medium" || "is4gen.large" || "is4gen.xlarge" || "is4gen.2xlarge" || "is4gen.4xlarge" || "is4gen.8xlarge" || "m1.small" || "m1.medium" || "m1.large" || "m1.xlarge" || "m2.xlarge" || "m2.2xlarge" || "m2.4xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m4.16xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5.metal" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5d.metal" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5dn.metal" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m5n.metal" || "m5zn.large" || "m5zn.xlarge" || "m5zn.2xlarge" || "m5zn.3xlarge" || "m5zn.6xlarge" || "m5zn.12xlarge" || "m5zn.metal" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6g.metal" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "m6gd.metal" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m6i.metal" || "mac1.metal" || "p2.xlarge" || "p2.8xlarge" || "p2.16xlarge" || "p3.2xlarge" || "p3.8xlarge" || "p3.16xlarge" || "p3dn.24xlarge" || "p4d.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5.metal" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "r5b.large" || "r5b.xlarge" || "r5b.2xlarge" || "r5b.4xlarge" || "r5b.8xlarge" || "r5b.12xlarge" || "r5b.16xlarge" || "r5b.24xlarge" || "r5b.metal" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "r5d.metal" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5dn.metal" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r5n.metal" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "r6g.metal" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r6gd.metal" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "r6i.metal" || "t1.micro" || "t2.nano" || "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "t2.xlarge" || "t2.2xlarge" || "t3.nano" || "t3.micro" || "t3.small" || "t3.medium" || "t3.large" || "t3.xlarge" || "t3.2xlarge" || "t3a.nano" || "t3a.micro" || "t3a.small" || "t3a.medium" || "t3a.large" || "t3a.xlarge" || "t3a.2xlarge" || "t4g.nano" || "t4g.micro" || "t4g.small" || "t4g.medium" || "t4g.large" || "t4g.xlarge" || "t4g.2xlarge" || "u-6tb1.56xlarge" || "u-6tb1.112xlarge" || "u-9tb1.112xlarge" || "u-12tb1.112xlarge" || "u-6tb1.metal" || "u-9tb1.metal" || "u-12tb1.metal" || "u-18tb1.metal" || "u-24tb1.metal" || "vt1.3xlarge" || "vt1.6xlarge" || "vt1.24xlarge" || "x1.16xlarge" || "x1.32xlarge" || "x1e.xlarge" || "x1e.2xlarge" || "x1e.4xlarge" || "x1e.8xlarge" || "x1e.16xlarge" || "x1e.32xlarge" || "x2iezn.2xlarge" || "x2iezn.4xlarge" || "x2iezn.6xlarge" || "x2iezn.8xlarge" || "x2iezn.12xlarge" || "x2iezn.metal" || "x2gd.medium" || "x2gd.large" || "x2gd.xlarge" || "x2gd.2xlarge" || "x2gd.4xlarge" || "x2gd.8xlarge" || "x2gd.12xlarge" || "x2gd.16xlarge" || "x2gd.metal" || "z1d.large" || "z1d.xlarge" || "z1d.2xlarge" || "z1d.3xlarge" || "z1d.6xlarge" || "z1d.12xlarge" || "z1d.metal" || "x2idn.16xlarge" || "x2idn.24xlarge" || "x2idn.32xlarge" || "x2iedn.xlarge" || "x2iedn.2xlarge" || "x2iedn.4xlarge" || "x2iedn.8xlarge" || "x2iedn.16xlarge" || "x2iedn.24xlarge" || "x2iedn.32xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6a.metal" || "m6a.metal" || "i4i.large" || "i4i.xlarge" || "i4i.2xlarge" || "i4i.4xlarge" || "i4i.8xlarge" || "i4i.16xlarge" || "i4i.32xlarge" || "i4i.metal" || "x2idn.metal" || "x2iedn.metal" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "mac2.metal" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c6id.metal" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6id.metal" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6id.metal" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6a.metal" || "p4de.24xlarge" || "u-3tb1.56xlarge" || "u-18tb1.112xlarge" || "u-24tb1.112xlarge" || "trn1.2xlarge" || "trn1.32xlarge" || "hpc6id.32xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "c7g.metal" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "m7g.metal" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "r7g.metal" || "c6in.metal" || "m6in.metal" || "m6idn.metal" || "r6in.metal" || "r6idn.metal" || "inf2.xlarge" || "inf2.8xlarge" || "inf2.24xlarge" || "inf2.48xlarge" || "trn1n.32xlarge" || "i4g.large" || "i4g.xlarge" || "i4g.2xlarge" || "i4g.4xlarge" || "i4g.8xlarge" || "i4g.16xlarge" || "hpc7g.4xlarge" || "hpc7g.8xlarge" || "hpc7g.16xlarge" || "c7gn.medium" || "c7gn.large" || "c7gn.xlarge" || "c7gn.2xlarge" || "c7gn.4xlarge" || "c7gn.8xlarge" || "c7gn.12xlarge" || "c7gn.16xlarge" || "p5.48xlarge" || "m7i.large" || "m7i.xlarge" || "m7i.2xlarge" || "m7i.4xlarge" || "m7i.8xlarge" || "m7i.12xlarge" || "m7i.16xlarge" || "m7i.24xlarge" || "m7i.48xlarge" || "m7i-flex.large" || "m7i-flex.xlarge" || "m7i-flex.2xlarge" || "m7i-flex.4xlarge" || "m7i-flex.8xlarge" || "m7a.medium" || "m7a.large" || "m7a.xlarge" || "m7a.2xlarge" || "m7a.4xlarge" || "m7a.8xlarge" || "m7a.12xlarge" || "m7a.16xlarge" || "m7a.24xlarge" || "m7a.32xlarge" || "m7a.48xlarge" || "m7a.metal-48xl" || "hpc7a.12xlarge" || "hpc7a.24xlarge" || "hpc7a.48xlarge" || "hpc7a.96xlarge" || "c7gd.medium" || "c7gd.large" || "c7gd.xlarge" || "c7gd.2xlarge" || "c7gd.4xlarge" || "c7gd.8xlarge" || "c7gd.12xlarge" || "c7gd.16xlarge" || "m7gd.medium" || "m7gd.large" || "m7gd.xlarge" || "m7gd.2xlarge" || "m7gd.4xlarge" || "m7gd.8xlarge" || "m7gd.12xlarge" || "m7gd.16xlarge" || "r7gd.medium" || "r7gd.large" || "r7gd.xlarge" || "r7gd.2xlarge" || "r7gd.4xlarge" || "r7gd.8xlarge" || "r7gd.12xlarge" || "r7gd.16xlarge" || "r7a.medium" || "r7a.large" || "r7a.xlarge" || "r7a.2xlarge" || "r7a.4xlarge" || "r7a.8xlarge" || "r7a.12xlarge" || "r7a.16xlarge" || "r7a.24xlarge" || "r7a.32xlarge" || "r7a.48xlarge" || "c7i.large" || "c7i.xlarge" || "c7i.2xlarge" || "c7i.4xlarge" || "c7i.8xlarge" || "c7i.12xlarge" || "c7i.16xlarge" || "c7i.24xlarge" || "c7i.48xlarge" || "mac2-m2pro.metal" || "r7iz.large" || "r7iz.xlarge" || "r7iz.2xlarge" || "r7iz.4xlarge" || "r7iz.8xlarge" || "r7iz.12xlarge" || "r7iz.16xlarge" || "r7iz.32xlarge" || "c7a.medium" || "c7a.large" || "c7a.xlarge" || "c7a.2xlarge" || "c7a.4xlarge" || "c7a.8xlarge" || "c7a.12xlarge" || "c7a.16xlarge" || "c7a.24xlarge" || "c7a.32xlarge" || "c7a.48xlarge" || "c7a.metal-48xl" || "r7a.metal-48xl" || "r7i.large" || "r7i.xlarge" || "r7i.2xlarge" || "r7i.4xlarge" || "r7i.8xlarge" || "r7i.12xlarge" || "r7i.16xlarge" || "r7i.24xlarge" || "r7i.48xlarge",
 * //       KernelId: "STRING_VALUE",
 * //       KeyName: "STRING_VALUE",
 * //       LaunchTime: new Date("TIMESTAMP"),
 * //       Monitoring: { // Monitoring
 * //         State: "disabled" || "disabling" || "enabled" || "pending",
 * //       },
 * //       Placement: { // Placement
 * //         AvailabilityZone: "STRING_VALUE",
 * //         Affinity: "STRING_VALUE",
 * //         GroupName: "STRING_VALUE",
 * //         PartitionNumber: Number("int"),
 * //         HostId: "STRING_VALUE",
 * //         Tenancy: "default" || "dedicated" || "host",
 * //         SpreadDomain: "STRING_VALUE",
 * //         HostResourceGroupArn: "STRING_VALUE",
 * //         GroupId: "STRING_VALUE",
 * //       },
 * //       Platform: "Windows",
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       ProductCodes: [ // ProductCodeList
 * //         { // ProductCode
 * //           ProductCodeId: "STRING_VALUE",
 * //           ProductCodeType: "devpay" || "marketplace",
 * //         },
 * //       ],
 * //       PublicDnsName: "STRING_VALUE",
 * //       PublicIpAddress: "STRING_VALUE",
 * //       RamdiskId: "STRING_VALUE",
 * //       State: { // InstanceState
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //       StateTransitionReason: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Architecture: "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 * //       BlockDeviceMappings: [ // InstanceBlockDeviceMappingList
 * //         { // InstanceBlockDeviceMapping
 * //           DeviceName: "STRING_VALUE",
 * //           Ebs: { // EbsInstanceBlockDevice
 * //             AttachTime: new Date("TIMESTAMP"),
 * //             DeleteOnTermination: true || false,
 * //             Status: "attaching" || "attached" || "detaching" || "detached",
 * //             VolumeId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ClientToken: "STRING_VALUE",
 * //       EbsOptimized: true || false,
 * //       EnaSupport: true || false,
 * //       Hypervisor: "ovm" || "xen",
 * //       IamInstanceProfile: { // IamInstanceProfile
 * //         Arn: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //       },
 * //       InstanceLifecycle: "spot" || "scheduled",
 * //       ElasticGpuAssociations: [ // ElasticGpuAssociationList
 * //         { // ElasticGpuAssociation
 * //           ElasticGpuId: "STRING_VALUE",
 * //           ElasticGpuAssociationId: "STRING_VALUE",
 * //           ElasticGpuAssociationState: "STRING_VALUE",
 * //           ElasticGpuAssociationTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ElasticInferenceAcceleratorAssociations: [ // ElasticInferenceAcceleratorAssociationList
 * //         { // ElasticInferenceAcceleratorAssociation
 * //           ElasticInferenceAcceleratorArn: "STRING_VALUE",
 * //           ElasticInferenceAcceleratorAssociationId: "STRING_VALUE",
 * //           ElasticInferenceAcceleratorAssociationState: "STRING_VALUE",
 * //           ElasticInferenceAcceleratorAssociationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       NetworkInterfaces: [ // InstanceNetworkInterfaceList
 * //         { // InstanceNetworkInterface
 * //           Association: { // InstanceNetworkInterfaceAssociation
 * //             CarrierIp: "STRING_VALUE",
 * //             CustomerOwnedIp: "STRING_VALUE",
 * //             IpOwnerId: "STRING_VALUE",
 * //             PublicDnsName: "STRING_VALUE",
 * //             PublicIp: "STRING_VALUE",
 * //           },
 * //           Attachment: { // InstanceNetworkInterfaceAttachment
 * //             AttachTime: new Date("TIMESTAMP"),
 * //             AttachmentId: "STRING_VALUE",
 * //             DeleteOnTermination: true || false,
 * //             DeviceIndex: Number("int"),
 * //             Status: "attaching" || "attached" || "detaching" || "detached",
 * //             NetworkCardIndex: Number("int"),
 * //           },
 * //           Description: "STRING_VALUE",
 * //           Groups: [
 * //             {
 * //               GroupName: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Addresses: [ // InstanceIpv6AddressList
 * //             { // InstanceIpv6Address
 * //               Ipv6Address: "STRING_VALUE",
 * //               IsPrimaryIpv6: true || false,
 * //             },
 * //           ],
 * //           MacAddress: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           OwnerId: "STRING_VALUE",
 * //           PrivateDnsName: "STRING_VALUE",
 * //           PrivateIpAddress: "STRING_VALUE",
 * //           PrivateIpAddresses: [ // InstancePrivateIpAddressList
 * //             { // InstancePrivateIpAddress
 * //               Association: {
 * //                 CarrierIp: "STRING_VALUE",
 * //                 CustomerOwnedIp: "STRING_VALUE",
 * //                 IpOwnerId: "STRING_VALUE",
 * //                 PublicDnsName: "STRING_VALUE",
 * //                 PublicIp: "STRING_VALUE",
 * //               },
 * //               Primary: true || false,
 * //               PrivateDnsName: "STRING_VALUE",
 * //               PrivateIpAddress: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SourceDestCheck: true || false,
 * //           Status: "available" || "associated" || "attaching" || "in-use" || "detaching",
 * //           SubnetId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           InterfaceType: "STRING_VALUE",
 * //           Ipv4Prefixes: [ // InstanceIpv4PrefixList
 * //             { // InstanceIpv4Prefix
 * //               Ipv4Prefix: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Prefixes: [ // InstanceIpv6PrefixList
 * //             { // InstanceIpv6Prefix
 * //               Ipv6Prefix: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OutpostArn: "STRING_VALUE",
 * //       RootDeviceName: "STRING_VALUE",
 * //       RootDeviceType: "ebs" || "instance-store",
 * //       SecurityGroups: "<GroupIdentifierList>",
 * //       SourceDestCheck: true || false,
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       SriovNetSupport: "STRING_VALUE",
 * //       StateReason: { // StateReason
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VirtualizationType: "hvm" || "paravirtual",
 * //       CpuOptions: { // CpuOptions
 * //         CoreCount: Number("int"),
 * //         ThreadsPerCore: Number("int"),
 * //         AmdSevSnp: "enabled" || "disabled",
 * //       },
 * //       CapacityReservationId: "STRING_VALUE",
 * //       CapacityReservationSpecification: { // CapacityReservationSpecificationResponse
 * //         CapacityReservationPreference: "open" || "none",
 * //         CapacityReservationTarget: { // CapacityReservationTargetResponse
 * //           CapacityReservationId: "STRING_VALUE",
 * //           CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       HibernationOptions: { // HibernationOptions
 * //         Configured: true || false,
 * //       },
 * //       Licenses: [ // LicenseList
 * //         { // LicenseConfiguration
 * //           LicenseConfigurationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MetadataOptions: { // InstanceMetadataOptionsResponse
 * //         State: "pending" || "applied",
 * //         HttpTokens: "optional" || "required",
 * //         HttpPutResponseHopLimit: Number("int"),
 * //         HttpEndpoint: "disabled" || "enabled",
 * //         HttpProtocolIpv6: "disabled" || "enabled",
 * //         InstanceMetadataTags: "disabled" || "enabled",
 * //       },
 * //       EnclaveOptions: { // EnclaveOptions
 * //         Enabled: true || false,
 * //       },
 * //       BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * //       PlatformDetails: "STRING_VALUE",
 * //       UsageOperation: "STRING_VALUE",
 * //       UsageOperationUpdateTime: new Date("TIMESTAMP"),
 * //       PrivateDnsNameOptions: { // PrivateDnsNameOptionsResponse
 * //         HostnameType: "ip-name" || "resource-name",
 * //         EnableResourceNameDnsARecord: true || false,
 * //         EnableResourceNameDnsAAAARecord: true || false,
 * //       },
 * //       Ipv6Address: "STRING_VALUE",
 * //       TpmSupport: "STRING_VALUE",
 * //       MaintenanceOptions: { // InstanceMaintenanceOptions
 * //         AutoRecovery: "disabled" || "default",
 * //       },
 * //       CurrentInstanceBootMode: "legacy-bios" || "uefi",
 * //     },
 * //   ],
 * //   OwnerId: "STRING_VALUE",
 * //   RequesterId: "STRING_VALUE",
 * //   ReservationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RunInstancesCommandInput - {@link RunInstancesCommandInput}
 * @returns {@link RunInstancesCommandOutput}
 * @see {@link RunInstancesCommandInput} for command's `input` shape.
 * @see {@link RunInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To launch an instance
 * ```javascript
 * // This example launches an instance using the specified AMI, instance type, security group, subnet, block device mapping, and tags.
 * const input = {
 *   "BlockDeviceMappings": [
 *     {
 *       "DeviceName": "/dev/sdh",
 *       "Ebs": {
 *         "VolumeSize": 100
 *       }
 *     }
 *   ],
 *   "ImageId": "ami-abc12345",
 *   "InstanceType": "t2.micro",
 *   "KeyName": "my-key-pair",
 *   "MaxCount": 1,
 *   "MinCount": 1,
 *   "SecurityGroupIds": [
 *     "sg-1a2b3c4d"
 *   ],
 *   "SubnetId": "subnet-6e7f829e",
 *   "TagSpecifications": [
 *     {
 *       "ResourceType": "instance",
 *       "Tags": [
 *         {
 *           "Key": "Purpose",
 *           "Value": "test"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new RunInstancesCommand(input);
 * await client.send(command);
 * // example id: to-launch-an-instance-1529360150806
 * ```
 *
 */
export class RunInstancesCommand extends $Command<
  RunInstancesCommandInput,
  RunInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RunInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunInstancesCommandInput, RunInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RunInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RunInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RunInstances",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RunInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RunInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunInstancesCommandOutput> {
    return de_RunInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
