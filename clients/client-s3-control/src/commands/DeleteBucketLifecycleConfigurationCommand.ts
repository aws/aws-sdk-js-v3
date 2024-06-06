// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBucketLifecycleConfigurationRequest } from "../models/models_0";
import {
  de_DeleteBucketLifecycleConfigurationCommand,
  se_DeleteBucketLifecycleConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketLifecycleConfigurationCommand}.
 */
export interface DeleteBucketLifecycleConfigurationCommandInput extends DeleteBucketLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketLifecycleConfigurationCommand}.
 */
export interface DeleteBucketLifecycleConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete
 *             an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Deletes the lifecycle configuration from the specified Outposts bucket.
 *          Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource
 *          associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer
 *          automatically deletes any objects on the basis of rules contained in the deleted lifecycle
 *          configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3-outposts:PutLifecycleConfiguration</code> action. By default, the bucket owner
 *          has this permission and the Outposts bucket owner can grant this permission to
 *          others.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
 *          <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteBucketLifecycleConfigurationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new DeleteBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketLifecycleConfigurationCommandInput - {@link DeleteBucketLifecycleConfigurationCommandInput}
 * @returns {@link DeleteBucketLifecycleConfigurationCommandOutput}
 * @see {@link DeleteBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class DeleteBucketLifecycleConfigurationCommand extends $Command
  .classBuilder<
    DeleteBucketLifecycleConfigurationCommandInput,
    DeleteBucketLifecycleConfigurationCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteBucketLifecycleConfiguration", {})
  .n("S3ControlClient", "DeleteBucketLifecycleConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBucketLifecycleConfigurationCommand)
  .de(de_DeleteBucketLifecycleConfigurationCommand)
  .build() {}
