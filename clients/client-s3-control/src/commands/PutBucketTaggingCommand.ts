// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutBucketTaggingRequest } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutBucketTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketTaggingCommand}.
 */
export interface PutBucketTaggingCommandInput extends PutBucketTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketTaggingCommand}.
 */
export interface PutBucketTaggingCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Sets the tags for an S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using
 *             Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this,
 *          sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost
 *          of combined resources, organize your billing information according to resources with the
 *          same tag key values. For example, you can tag several resources with a specific application
 *          name, and then organize your billing information to see the total cost of that application
 *          across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost allocation and
 *             tagging</a>.</p>
 *          <note>
 *             <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new
 *             value overwrites the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html"> Using cost allocation in Amazon S3
 *                bucket tags</a>.</p>
 *          </note>
 *          <p>To use this action, you must have permissions to perform the
 *             <code>s3-outposts:PutBucketTagging</code> action. The Outposts bucket owner has this
 *          permission by default and can grant this permission to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             access permissions to your Amazon S3 resources</a>.</p>
 *          <p>
 *             <code>PutBucketTagging</code> has the following special errors:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>InvalidTagError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The tag provided was not a valid tag. This error can occur if
 *                      the tag did not pass input validation. For information about tag restrictions,
 *                      see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">
 *                         User-Defined Tag Restrictions</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">
 *                         Amazon Web Services-Generated Cost Allocation Tag Restrictions</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>MalformedXMLError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The XML provided does not match the schema.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>OperationAbortedError </code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: A conflicting conditional action is currently in progress
 *                      against this resource. Try again.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>InternalError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The service was unable to apply the provided tag to the
 *                      bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>PutBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutBucketTaggingRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   Tagging: { // Tagging
 *     TagSet: [ // S3TagSet // required
 *       { // S3Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketTaggingCommandInput - {@link PutBucketTaggingCommandInput}
 * @returns {@link PutBucketTaggingCommandOutput}
 * @see {@link PutBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link PutBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutBucketTaggingCommand extends $Command
  .classBuilder<
    PutBucketTaggingCommandInput,
    PutBucketTaggingCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "PutBucketTagging", {})
  .n("S3ControlClient", "PutBucketTaggingCommand")
  .sc(PutBucketTagging$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketTaggingRequest;
      output: {};
    };
    sdk: {
      input: PutBucketTaggingCommandInput;
      output: PutBucketTaggingCommandOutput;
    };
  };
}
