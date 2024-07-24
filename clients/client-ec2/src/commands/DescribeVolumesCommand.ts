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
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumesResult
 * //   Volumes: [ // VolumeList
 * //     { // Volume
 * //       Attachments: [ // VolumeAttachmentList
 * //         { // VolumeAttachment
 * //           AttachTime: new Date("TIMESTAMP"),
 * //           Device: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           State: "attaching" || "attached" || "detaching" || "detached" || "busy",
 * //           VolumeId: "STRING_VALUE",
 * //           DeleteOnTermination: true || false,
 * //           AssociatedResource: "STRING_VALUE",
 * //           InstanceOwningService: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       Size: Number("int"),
 * //       SnapshotId: "STRING_VALUE",
 * //       State: "creating" || "available" || "in-use" || "deleting" || "deleted" || "error",
 * //       VolumeId: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
