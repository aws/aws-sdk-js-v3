// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/models_5";
import { de_DescribeVolumesCommand, se_DescribeVolumesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVolumesCommand}.
 */
export interface DescribeVolumesCommandInput extends DescribeVolumesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumesCommand}.
 */
export interface DescribeVolumesCommandOutput extends DescribeVolumesResult, __MetadataBearer {}

/**
 * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
 *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
 *       more manageable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html">Amazon EBS volumes</a> in the <i>Amazon EBS User Guide</i>.</p>
 *          <important>
 *             <p>We strongly recommend using only paginated requests. Unpaginated requests are
 *         susceptible to throttling and timeouts.</p>
 *          </important>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *         structures, might vary. Applications should not assume the elements appear in a
 *         particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumesRequest
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumesResult
 * //   NextToken: "STRING_VALUE",
 * //   Volumes: [ // VolumeList
 * //     { // Volume
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
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
 * @param DescribeVolumesCommandInput - {@link DescribeVolumesCommandInput}
 * @returns {@link DescribeVolumesCommandOutput}
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe all volumes
 * ```javascript
 * // This example describes all of your volumes in the default region.
 * const input = { /* empty *\/ };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "",
 *   Volumes: [
 *     {
 *       Attachments: [
 *         {
 *           AttachTime: "2013-12-18T22:35:00.000Z",
 *           DeleteOnTermination: true,
 *           Device: "/dev/sda1",
 *           InstanceId: "i-1234567890abcdef0",
 *           State: "attached",
 *           VolumeId: "vol-049df61146c4d7901"
 *         }
 *       ],
 *       AvailabilityZone: "us-east-1a",
 *       CreateTime: "2013-12-18T22:35:00.084Z",
 *       Size: 8,
 *       SnapshotId: "snap-1234567890abcdef0",
 *       State: "in-use",
 *       VolumeId: "vol-049df61146c4d7901",
 *       VolumeType: "standard"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe volumes that are attached to a specific instance
 * ```javascript
 * // This example describes all volumes that are both attached to the instance with the ID i-1234567890abcdef0 and set to delete when the instance terminates.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "attachment.instance-id",
 *       Values: [
 *         "i-1234567890abcdef0"
 *       ]
 *     },
 *     {
 *       Name: "attachment.delete-on-termination",
 *       Values: [
 *         "true"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Volumes: [
 *     {
 *       Attachments: [
 *         {
 *           AttachTime: "2013-12-18T22:35:00.000Z",
 *           DeleteOnTermination: true,
 *           Device: "/dev/sda1",
 *           InstanceId: "i-1234567890abcdef0",
 *           State: "attached",
 *           VolumeId: "vol-049df61146c4d7901"
 *         }
 *       ],
 *       AvailabilityZone: "us-east-1a",
 *       CreateTime: "2013-12-18T22:35:00.084Z",
 *       Size: 8,
 *       SnapshotId: "snap-1234567890abcdef0",
 *       State: "in-use",
 *       VolumeId: "vol-049df61146c4d7901",
 *       VolumeType: "standard"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeVolumesCommand extends $Command
  .classBuilder<
    DescribeVolumesCommandInput,
    DescribeVolumesCommandOutput,
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
  .s("AmazonEC2", "DescribeVolumes", {})
  .n("EC2Client", "DescribeVolumesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVolumesCommand)
  .de(de_DescribeVolumesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVolumesRequest;
      output: DescribeVolumesResult;
    };
    sdk: {
      input: DescribeVolumesCommandInput;
      output: DescribeVolumesCommandOutput;
    };
  };
}
