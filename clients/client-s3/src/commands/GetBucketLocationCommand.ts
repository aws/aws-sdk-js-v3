// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandInput extends GetBucketLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, __MetadataBearer {}

/**
 * <important>
 *             <p>Using the <code>GetBucketLocation</code> operation is no longer a best practice. To return the
 *         Region that a bucket resides in, we recommend that you use the
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html">HeadBucket</a>
 *         operation instead. For backward compatibility, Amazon S3 continues to support the
 *         <code>GetBucketLocation</code> operation.</p>
 *          </important>
 *          <p>Returns the Region the bucket resides in. You set the bucket's Region using the
 *         <code>LocationConstraint</code> request parameter in a <code>CreateBucket</code> request. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>.</p>
 *          <note>
 *             <p>In a bucket's home Region, calls to the <code>GetBucketLocation</code> operation are governed
 *         by the bucket's policy. In other Regions, the bucket policy doesn't apply, which means that
 *         cross-account access won't be authorized. However, calls to the <code>HeadBucket</code> operation
 *         always return the bucket’s location through an HTTP response header, whether access to the bucket
 *         is authorized or not. Therefore, we recommend using the <code>HeadBucket</code> operation for
 *         bucket Region discovery and to avoid using the <code>GetBucketLocation</code> operation.</p>
 *          </note>
 *          <p>When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.</p>
 *          <p>When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
 * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
 * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
 *             Error Codes</a>.</p>
 *          <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>The following operations are related to <code>GetBucketLocation</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLocationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLocationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketLocationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLocationOutput
 * //   LocationConstraint: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "EU" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-2" || "us-gov-east-1" || "us-gov-west-1" || "us-west-1" || "us-west-2",
 * // };
 *
 * ```
 *
 * @param GetBucketLocationCommandInput - {@link GetBucketLocationCommandInput}
 * @returns {@link GetBucketLocationCommandOutput}
 * @see {@link GetBucketLocationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To get bucket location
 * ```javascript
 * // The following example returns bucket location.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LocationConstraint: "us-west-2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketLocationCommand extends $Command
  .classBuilder<
    GetBucketLocationCommandInput,
    GetBucketLocationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config)];
  })
  .s("AmazonS3", "GetBucketLocation", {})
  .n("S3Client", "GetBucketLocationCommand")
  .sc(GetBucketLocation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketLocationRequest;
      output: GetBucketLocationOutput;
    };
    sdk: {
      input: GetBucketLocationCommandInput;
      output: GetBucketLocationCommandOutput;
    };
  };
}
