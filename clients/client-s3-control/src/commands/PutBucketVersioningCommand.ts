// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutBucketVersioningRequest } from "../models/models_1";
import { de_PutBucketVersioningCommand, se_PutBucketVersioningCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandInput extends PutBucketVersioningRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation sets the versioning state
 *             for
 *             S3 on Outposts
 *             buckets
 *             only. To set the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Sets the versioning state for an S3 on Outposts bucket. With
 *          S3
 *          Versioning,
 *          you can save multiple distinct copies of your
 *          objects
 *          and recover from unintended user actions and application failures.</p>
 *          <p>You can set the versioning state to one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Enabled</b> - Enables versioning for the objects in
 *                the bucket. All objects added to the bucket receive a unique version ID.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Suspended</b> - Suspends versioning for the objects
 *                in the bucket. All objects added to the bucket receive the version ID
 *                   <code>null</code>.</p>
 *             </li>
 *          </ul>
 *          <p>If you've never set versioning on your bucket, it has no versioning state. In that case,
 *          a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">
 *             GetBucketVersioning</a> request does not return a versioning state value.</p>
 *          <p>When you enable S3 Versioning, for each object in your bucket, you have a current
 *          version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle
 *          rules to expire noncurrent versions after a specified time period. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsLifecycleManaging.html"> Creating and managing
 *             a lifecycle configuration for your S3 on Outposts bucket</a> in the <i>Amazon S3
 *             User Guide</i>.</p>
 *          <p>If you have an object expiration lifecycle configuration in your non-versioned bucket
 *          and you want to maintain the same permanent delete behavior when you enable versioning, you
 *          must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration
 *          will manage the deletes of the noncurrent object versions in the version-enabled bucket.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3
 *             User Guide</i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html#API_control_PutBucketVersioning_Examples">Examples</a> section.</p>
 *          <p>The following operations are related to <code>PutBucketVersioning</code> for
 *          S3 on Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">GetBucketVersioning</a>
 *                </p>
 *             </li>
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
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketVersioningCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketVersioningCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutBucketVersioningRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   MFA: "STRING_VALUE",
 *   VersioningConfiguration: { // VersioningConfiguration
 *     MFADelete: "Enabled" || "Disabled",
 *     Status: "Enabled" || "Suspended",
 *   },
 * };
 * const command = new PutBucketVersioningCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketVersioningCommandInput - {@link PutBucketVersioningCommandInput}
 * @returns {@link PutBucketVersioningCommandOutput}
 * @see {@link PutBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link PutBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutBucketVersioningCommand extends $Command
  .classBuilder<
    PutBucketVersioningCommandInput,
    PutBucketVersioningCommandOutput,
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
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutBucketVersioning", {})
  .n("S3ControlClient", "PutBucketVersioningCommand")
  .f(void 0, void 0)
  .ser(se_PutBucketVersioningCommand)
  .de(de_PutBucketVersioningCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketVersioningRequest;
      output: {};
    };
    sdk: {
      input: PutBucketVersioningCommandInput;
      output: PutBucketVersioningCommandOutput;
    };
  };
}
