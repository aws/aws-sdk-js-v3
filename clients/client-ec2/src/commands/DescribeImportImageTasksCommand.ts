// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeImportImageTasksRequest,
  DescribeImportImageTasksResult,
  DescribeImportImageTasksResultFilterSensitiveLog,
} from "../models/models_4";
import { de_DescribeImportImageTasksCommand, se_DescribeImportImageTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportImageTasksCommand}.
 */
export interface DescribeImportImageTasksCommandInput extends DescribeImportImageTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportImageTasksCommand}.
 */
export interface DescribeImportImageTasksCommandOutput extends DescribeImportImageTasksResult, __MetadataBearer {}

/**
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeImportImageTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ImportTaskIds: [ // ImportTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportImageTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportImageTasksResult
 * //   ImportImageTasks: [ // ImportImageTaskList
 * //     { // ImportImageTask
 * //       Architecture: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       Hypervisor: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       ImportTaskId: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       LicenseType: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       Progress: "STRING_VALUE",
 * //       SnapshotDetails: [ // SnapshotDetailList
 * //         { // SnapshotDetail
 * //           Description: "STRING_VALUE",
 * //           DeviceName: "STRING_VALUE",
 * //           DiskImageSize: Number("double"),
 * //           Format: "STRING_VALUE",
 * //           Progress: "STRING_VALUE",
 * //           SnapshotId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           UserBucket: { // UserBucketDetails
 * //             S3Bucket: "STRING_VALUE",
 * //             S3Key: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LicenseSpecifications: [ // ImportImageLicenseSpecificationListResponse
 * //         { // ImportImageLicenseConfigurationResponse
 * //           LicenseConfigurationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UsageOperation: "STRING_VALUE",
 * //       BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportImageTasksCommandInput - {@link DescribeImportImageTasksCommandInput}
 * @returns {@link DescribeImportImageTasksCommandOutput}
 * @see {@link DescribeImportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeImportImageTasksCommand extends $Command
  .classBuilder<
    DescribeImportImageTasksCommandInput,
    DescribeImportImageTasksCommandOutput,
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
  .s("AmazonEC2", "DescribeImportImageTasks", {})
  .n("EC2Client", "DescribeImportImageTasksCommand")
  .f(void 0, DescribeImportImageTasksResultFilterSensitiveLog)
  .ser(se_DescribeImportImageTasksCommand)
  .de(de_DescribeImportImageTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportImageTasksRequest;
      output: DescribeImportImageTasksResult;
    };
    sdk: {
      input: DescribeImportImageTasksCommandInput;
      output: DescribeImportImageTasksCommandOutput;
    };
  };
}
