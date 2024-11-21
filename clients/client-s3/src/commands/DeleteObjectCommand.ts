// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteObjectOutput, DeleteObjectRequest } from "../models/models_0";
import { de_DeleteObjectCommand, se_DeleteObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandInput extends DeleteObjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandOutput extends DeleteObjectOutput, __MetadataBearer {}

/**
 * <p>Removes an object from a bucket. The behavior depends on the bucket's versioning state.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjects.html#DeletingObjects-best-practices">Best
 *             practices to consider before deleting an object</a>.</p>
 *          <p>To remove a specific version, you must use the <code>versionId</code> query parameter.
 *          Using this query parameter permanently deletes the version. If the object deleted is a
 *          delete marker, Amazon S3 sets the response header <code>x-amz-delete-marker</code> to true. If
 *          the object you want to delete is in a bucket where the bucket versioning configuration is
 *          MFA delete enabled, you must include the <code>x-amz-mfa</code> request header in the
 *          DELETE <code>versionId</code> request. Requests that include <code>x-amz-mfa</code> must
 *          use HTTPS. For more information about MFA delete and to see example requests, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html">Using MFA
 *             delete</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectDELETE.html#ExampleVersionObjectDelete">Sample
 *             request</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the <code>null</code> value of the version ID is supported by directory buckets. You can only specify <code>null</code> to the
 *                      <code>versionId</code> query parameter in the request.</p>
 *                </li>
 *                <li>
 *                   <p>For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com/<i>key-name</i>
 *                      </code>. Path-style requests are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>MFA delete is not supported by directory buckets.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The
 *                         following permissions are required in your policies when your
 *                            <code>DeleteObjects</code> request includes specific headers.</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>
 *                                  <code>s3:DeleteObject</code>
 *                               </b>
 *                               - To delete an object from a bucket, you must always have the
 *                                  <code>s3:DeleteObject</code> permission.</p>
 *                            <note>
 *                               <p>You can also use <a>PutBucketLifecycle</a> to delete
 *                                  objects in Amazon S3.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>
 *                                  <code>s3:DeleteObjectVersion</code>
 *                               </b> - To delete a specific version of an object from a
 *                               versioning-enabled bucket, you must have the
 *                                  <code>s3:DeleteObjectVersion</code> permission.</p>
 *                         </li>
 *                         <li>
 *                            <p>If you want to block users or accounts from removing or deleting
 *                               objects from your bucket, you must deny them the
 *                                  <code>s3:DeleteObject</code>, <code>s3:DeleteObjectVersion</code>,
 *                               and <code>s3:PutLifeCycleConfiguration</code> permissions.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory buckets permissions</b> -
 *                         To grant access to this API operation on a directory bucket, we recommend
 *                         that you use the <a>CreateSession</a> API operation for
 *                         session-based authorization.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>
 *                      <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>The following action is related to <code>DeleteObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MFA: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   BypassGovernanceRetention: true || false,
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE",
 *   IfMatchLastModifiedTime: new Date("TIMESTAMP"),
 *   IfMatchSize: Number("long"),
 * };
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectOutput
 * //   DeleteMarker: true || false,
 * //   VersionId: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param DeleteObjectCommandInput - {@link DeleteObjectCommandInput}
 * @returns {@link DeleteObjectCommandOutput}
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To delete an object (from a non-versioned bucket)
 * ```javascript
 * // The following example deletes an object from a non-versioned bucket.
 * const input = {
 *   "Bucket": "ExampleBucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-from-a-non-versioned-bucket-1481588533089
 * ```
 *
 * @example To delete an object
 * ```javascript
 * // The following example deletes an object from an S3 bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "objectkey.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-1472850136595
 * ```
 *
 */
export class DeleteObjectCommand extends $Command
  .classBuilder<
    DeleteObjectCommandInput,
    DeleteObjectCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "DeleteObject", {})
  .n("S3Client", "DeleteObjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteObjectCommand)
  .de(de_DeleteObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteObjectRequest;
      output: DeleteObjectOutput;
    };
    sdk: {
      input: DeleteObjectCommandInput;
      output: DeleteObjectCommandOutput;
    };
  };
}
