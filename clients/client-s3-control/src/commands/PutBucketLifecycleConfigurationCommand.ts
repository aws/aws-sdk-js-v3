// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutBucketLifecycleConfigurationRequest } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutBucketLifecycleConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketLifecycleConfigurationCommand}.
 */
export interface PutBucketLifecycleConfigurationCommandInput extends PutBucketLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketLifecycleConfigurationCommand}.
 */
export interface PutBucketLifecycleConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a
 *             lifecycle configuration to an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>.
 *          </p>
 *          </note>
 *          <p>Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an
 *          existing lifecycle configuration. Outposts buckets only support lifecycle configurations
 *          that delete/expire objects after a certain period of time and abort incomplete multipart
 *          uploads.</p>
 *          <p></p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html#API_control_PutBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to
 *          <code>PutBucketLifecycleConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutBucketLifecycleConfigurationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   LifecycleConfiguration: { // LifecycleConfiguration
 *     Rules: [ // LifecycleRules
 *       { // LifecycleRule
 *         Expiration: { // LifecycleExpiration
 *           Date: new Date("TIMESTAMP"),
 *           Days: Number("int"),
 *           ExpiredObjectDeleteMarker: true || false,
 *         },
 *         ID: "STRING_VALUE",
 *         Filter: { // LifecycleRuleFilter
 *           Prefix: "STRING_VALUE",
 *           Tag: { // S3Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *           And: { // LifecycleRuleAndOperator
 *             Prefix: "STRING_VALUE",
 *             Tags: [ // S3TagSet
 *               {
 *                 Key: "STRING_VALUE", // required
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *             ObjectSizeGreaterThan: Number("long"),
 *             ObjectSizeLessThan: Number("long"),
 *           },
 *           ObjectSizeGreaterThan: Number("long"),
 *           ObjectSizeLessThan: Number("long"),
 *         },
 *         Status: "Enabled" || "Disabled", // required
 *         Transitions: [ // TransitionList
 *           { // Transition
 *             Date: new Date("TIMESTAMP"),
 *             Days: Number("int"),
 *             StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
 *           },
 *         ],
 *         NoncurrentVersionTransitions: [ // NoncurrentVersionTransitionList
 *           { // NoncurrentVersionTransition
 *             NoncurrentDays: Number("int"),
 *             StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
 *           },
 *         ],
 *         NoncurrentVersionExpiration: { // NoncurrentVersionExpiration
 *           NoncurrentDays: Number("int"),
 *           NewerNoncurrentVersions: Number("int"),
 *         },
 *         AbortIncompleteMultipartUpload: { // AbortIncompleteMultipartUpload
 *           DaysAfterInitiation: Number("int"),
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new PutBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketLifecycleConfigurationCommandInput - {@link PutBucketLifecycleConfigurationCommandInput}
 * @returns {@link PutBucketLifecycleConfigurationCommandOutput}
 * @see {@link PutBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutBucketLifecycleConfigurationCommand extends $Command
  .classBuilder<
    PutBucketLifecycleConfigurationCommandInput,
    PutBucketLifecycleConfigurationCommandOutput,
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutBucketLifecycleConfiguration", {})
  .n("S3ControlClient", "PutBucketLifecycleConfigurationCommand")
  .sc(PutBucketLifecycleConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketLifecycleConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutBucketLifecycleConfigurationCommandInput;
      output: PutBucketLifecycleConfigurationCommandOutput;
    };
  };
}
