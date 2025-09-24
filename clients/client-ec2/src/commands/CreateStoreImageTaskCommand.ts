// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStoreImageTaskRequest, CreateStoreImageTaskResult } from "../models/models_2";
import { CreateStoreImageTask } from "../schemas/schemas_257_CreateStoreImageTask";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStoreImageTaskCommand}.
 */
export interface CreateStoreImageTaskCommandInput extends CreateStoreImageTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateStoreImageTaskCommand}.
 */
export interface CreateStoreImageTaskCommandOutput extends CreateStoreImageTaskResult, __MetadataBearer {}

/**
 * <p>Stores an AMI as a single object in an Amazon S3 bucket.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         S3</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateStoreImageTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateStoreImageTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateStoreImageTaskRequest
 *   ImageId: "STRING_VALUE", // required
 *   Bucket: "STRING_VALUE", // required
 *   S3ObjectTags: [ // S3ObjectTagList
 *     { // S3ObjectTag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new CreateStoreImageTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateStoreImageTaskResult
 * //   ObjectKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStoreImageTaskCommandInput - {@link CreateStoreImageTaskCommandInput}
 * @returns {@link CreateStoreImageTaskCommandOutput}
 * @see {@link CreateStoreImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateStoreImageTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateStoreImageTaskCommand extends $Command
  .classBuilder<
    CreateStoreImageTaskCommandInput,
    CreateStoreImageTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateStoreImageTask", {})
  .n("EC2Client", "CreateStoreImageTaskCommand")
  .sc(CreateStoreImageTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStoreImageTaskRequest;
      output: CreateStoreImageTaskResult;
    };
    sdk: {
      input: CreateStoreImageTaskCommandInput;
      output: CreateStoreImageTaskCommandOutput;
    };
  };
}
