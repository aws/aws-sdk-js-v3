// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeBundleTasksRequest,
  DescribeBundleTasksResult,
  DescribeBundleTasksResultFilterSensitiveLog,
} from "../models/models_4";
import { de_DescribeBundleTasksCommand, se_DescribeBundleTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBundleTasksCommand}.
 */
export interface DescribeBundleTasksCommandInput extends DescribeBundleTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBundleTasksCommand}.
 */
export interface DescribeBundleTasksCommandOutput extends DescribeBundleTasksResult, __MetadataBearer {}

/**
 * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
 *          <note>
 *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no
 *         longer in the list, you can still register an AMI from it. Just use
 *           <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided
 *         to the bundle task.</p>
 *          </note>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested structures,
 *         might vary. Applications should not assume the elements appear in a particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeBundleTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeBundleTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeBundleTasksRequest
 *   BundleIds: [ // BundleIdStringList
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
 * };
 * const command = new DescribeBundleTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBundleTasksResult
 * //   BundleTasks: [ // BundleTaskList
 * //     { // BundleTask
 * //       InstanceId: "STRING_VALUE",
 * //       BundleId: "STRING_VALUE",
 * //       State: "pending" || "waiting-for-shutdown" || "bundling" || "storing" || "cancelling" || "complete" || "failed",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       Storage: { // Storage
 * //         S3: { // S3Storage
 * //           AWSAccessKeyId: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           UploadPolicy: new Uint8Array(),
 * //           UploadPolicySignature: "STRING_VALUE",
 * //         },
 * //       },
 * //       Progress: "STRING_VALUE",
 * //       BundleTaskError: { // BundleTaskError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBundleTasksCommandInput - {@link DescribeBundleTasksCommandInput}
 * @returns {@link DescribeBundleTasksCommandOutput}
 * @see {@link DescribeBundleTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeBundleTasksCommand extends $Command
  .classBuilder<
    DescribeBundleTasksCommandInput,
    DescribeBundleTasksCommandOutput,
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
  .s("AmazonEC2", "DescribeBundleTasks", {})
  .n("EC2Client", "DescribeBundleTasksCommand")
  .f(void 0, DescribeBundleTasksResultFilterSensitiveLog)
  .ser(se_DescribeBundleTasksCommand)
  .de(de_DescribeBundleTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBundleTasksRequest;
      output: DescribeBundleTasksResult;
    };
    sdk: {
      input: DescribeBundleTasksCommandInput;
      output: DescribeBundleTasksCommandOutput;
    };
  };
}
