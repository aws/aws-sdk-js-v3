// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDirectoryBucketsOutput, ListDirectoryBucketsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListDirectoryBuckets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDirectoryBucketsCommand}.
 */
export interface ListDirectoryBucketsCommandInput extends ListDirectoryBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectoryBucketsCommand}.
 */
export interface ListDirectoryBucketsCommandOutput extends ListDirectoryBucketsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request. For
 *       more information about directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">Directory buckets</a> in the
 *         <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets </b> - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
 *                </code>. Virtual-hosted-style requests aren't supported.
 * For more information about endpoints in Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html">Regional and Zonal endpoints for directory buckets in Availability Zones</a> in the
 *     <i>Amazon S3 User Guide</i>. For more information about endpoints in Local Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html">Concepts for directory buckets in Local Zones</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3express:ListAllMyDirectoryBuckets</code> permission in
 *             an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource.
 *             For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is
 *                 <code>s3express-control.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <note>
 *             <p> The <code>BucketRegion</code> response element is not part of the
 *           <code>ListDirectoryBuckets</code> Response Syntax.</p>
 *          </note>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListDirectoryBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListDirectoryBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListDirectoryBucketsRequest
 *   ContinuationToken: "STRING_VALUE",
 *   MaxDirectoryBuckets: Number("int"),
 * };
 * const command = new ListDirectoryBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectoryBucketsOutput
 * //   Buckets: [ // Buckets
 * //     { // Bucket
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       BucketRegion: "STRING_VALUE",
 * //       BucketArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ContinuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDirectoryBucketsCommandInput - {@link ListDirectoryBucketsCommandInput}
 * @returns {@link ListDirectoryBucketsCommandOutput}
 * @see {@link ListDirectoryBucketsCommandInput} for command's `input` shape.
 * @see {@link ListDirectoryBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class ListDirectoryBucketsCommand extends $Command
  .classBuilder<
    ListDirectoryBucketsCommandInput,
    ListDirectoryBucketsCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config)];
  })
  .s("AmazonS3", "ListDirectoryBuckets", {})
  .n("S3Client", "ListDirectoryBucketsCommand")
  .sc(ListDirectoryBuckets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDirectoryBucketsRequest;
      output: ListDirectoryBucketsOutput;
    };
    sdk: {
      input: ListDirectoryBucketsCommandInput;
      output: ListDirectoryBucketsCommandOutput;
    };
  };
}
