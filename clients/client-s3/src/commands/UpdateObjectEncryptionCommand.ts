// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateObjectEncryptionRequest, UpdateObjectEncryptionResponse } from "../models/models_1";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { UpdateObjectEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateObjectEncryptionCommand}.
 */
export interface UpdateObjectEncryptionCommandInput extends UpdateObjectEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateObjectEncryptionCommand}.
 */
export interface UpdateObjectEncryptionCommandOutput extends UpdateObjectEncryptionResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets or Amazon S3 on Outposts buckets.
 *       </p>
 *          </note>
 *          <p>
 *       Updates the server-side encryption type of an existing encrypted object in a general purpose bucket.
 *       You can use the <code>UpdateObjectEncryption</code> operation to change encrypted objects from
 *       server-side encryption with Amazon S3 managed keys (SSE-S3) to server-side encryption with Key Management Service (KMS)
 *       keys (SSE-KMS), or to apply S3 Bucket Keys. You can also use the <code>UpdateObjectEncryption</code> operation
 *       to change the customer-managed KMS key used to encrypt your data so that you can comply with custom
 *       key-rotation standards.
 *     </p>
 *          <p>Using the <code>UpdateObjectEncryption</code> operation, you can atomically update the server-side
 *       encryption type of an existing object in a general purpose bucket without any data movement. The
 *       <code>UpdateObjectEncryption</code> operation uses envelope encryption to re-encrypt the data key used to
 *       encrypt and decrypt your object with your newly specified server-side encryption type. In other words,
 *       when you use the <code>UpdateObjectEncryption</code> operation, your data isn't copied, archived
 *       objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes aren't
 *       restored, and objects in the S3 Intelligent-Tiering storage class aren't moved between tiers.
 *       Additionally, the <code>UpdateObjectEncryption</code> operation preserves all object metadata
 *       properties, including the storage class, creation date, last modified date, ETag, and checksum
 *       properties. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/update-sse-encryption.html">
 *         Updating server-side encryption for existing objects</a> in the
 *       <i>Amazon S3 User Guide</i>.</p>
 *          <p>By default, all <code>UpdateObjectEncryption</code> requests that specify a  customer-managed
 *       KMS key are restricted to KMS keys that are owned by the  bucket owner's Amazon Web Services account. If you're
 *       using Organizations, you can request the ability to use KMS keys owned by other member
 *       accounts  within your organization by contacting Amazon Web Services Support.</p>
 *          <note>
 *             <p>Source objects that are unencrypted, or encrypted with either dual-layer server-side encryption
 *         with KMS keys (DSSE-KMS) or server-side encryption with customer-provided keys (SSE-C) aren't
 *         supported by this operation. Additionally, you cannot specify SSE-S3 encryption as the requested
 *         new encryption type <code>UpdateObjectEncryption</code> request.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>To use the <code>UpdateObjectEncryption</code> operation, you must have the following
 *                 permissions:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>s3:PutObject</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>s3:UpdateObjectEncryption</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>kms:Encrypt</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>kms:Decrypt</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>kms:GenerateDataKey</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>kms:ReEncrypt*</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>If you're using Organizations, to use this operation with customer-managed
 *                 KMS keys from other Amazon Web Services accounts within your organization, you must have the
 *                 <code>organizations:DescribeAccount</code> permission.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <dl>
 *             <dt>Errors</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>You might receive an <code>InvalidRequest</code> error for several reasons. Depending
 *                 on the reason for the error, you might receive one of the following messages:</p>
 *                      <ul>
 *                         <li>
 *                            <p>The <code>UpdateObjectEncryption</code> operation doesn't supported unencrypted
 *                     source objects. Only source objects encrypted with SSE-S3 or SSE-KMS are supported.</p>
 *                         </li>
 *                         <li>
 *                            <p>The <code>UpdateObjectEncryption</code> operation doesn't support source objects
 *                     with the encryption type DSSE-KMS or SSE-C. Only source objects encrypted with SSE-S3
 *                     or SSE-KMS are supported.</p>
 *                         </li>
 *                         <li>
 *                            <p>The <code>UpdateObjectEncryption</code> operation doesn't support updating the
 *                     encryption type to DSSE-KMS or SSE-C. Modify the request to specify SSE-KMS
 *                     for the updated encryption type, and then try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>Requests that modify an object encryption configuration require Amazon Web Services Signature
 *                     Version 4. Modify the request to use Amazon Web Services Signature Version 4, and then try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>Requests that modify an object encryption configuration require a valid new
 *                     encryption type. Valid values are <code>SSEKMS</code>. Modify the request to specify
 *                     SSE-KMS for the updated encryption type, and then try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>Requests that modify an object's encryption type to SSE-KMS require an Amazon Web Services KMS key
 *                     Amazon Resource Name (ARN). Modify the request to specify a KMS key ARN, and then
 *                     try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>Requests that modify an object's encryption type to SSE-KMS require a valid
 *                     Amazon Web Services KMS key Amazon Resource Name (ARN). Confirm that you have a correctly formatted
 *                     KMS key ARN in your request, and then try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>The <code>BucketKeyEnabled</code> value isn't valid. Valid values are
 *                     <code>true</code> or <code>false</code>. Modify the request to specify a valid value,
 *                     and then try again.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>You might receive an <code>AccessDenied</code> error for several reasons. Depending on
 *                 the reason for the error, you might receive one of the following messages:</p>
 *                      <ul>
 *                         <li>
 *                            <p>The Amazon Web Services KMS key in the request must be owned by the same account as the bucket. Modify
 *                     the request to specify a KMS key from the same account, and then try again.</p>
 *                         </li>
 *                         <li>
 *                            <p>The bucket owner's account was approved to make <code>UpdateObjectEncryption</code> requests
 *                     that use any Amazon Web Services KMS key in their organization, but the bucket owner's account isn't part of
 *                     an organization in Organizations. Make sure that the bucket owner's account and the
 *                     specified KMS key belong to the same organization, and then try again. </p>
 *                         </li>
 *                         <li>
 *                            <p>The specified Amazon Web Services KMS key must be from the same organization in Organizations as
 *                     the bucket. Specify a KMS key that belongs to the same organization as the bucket, and then
 *                     try again. </p>
 *                         </li>
 *                         <li>
 *                            <p>The encryption type for the specified object can’t be updated because that object is
 *                     protected by S3 Object Lock. If the object has a governance-mode retention period or a legal
 *                     hold, you must first remove the Object Lock status on the object before you issue your
 *                     <code>UpdateObjectEncryption</code> request. You can't use the <code>UpdateObjectEncryption</code>
 *                     operation with objects that have an Object Lock compliance mode retention period applied to them.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UpdateObjectEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UpdateObjectEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // UpdateObjectEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ObjectEncryption: { // ObjectEncryption Union: only one key present
 *     SSEKMS: { // SSEKMSEncryption
 *       KMSKeyArn: "STRING_VALUE", // required
 *       BucketKeyEnabled: true || false,
 *     },
 *   },
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME",
 * };
 * const command = new UpdateObjectEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateObjectEncryptionResponse
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param UpdateObjectEncryptionCommandInput - {@link UpdateObjectEncryptionCommandInput}
 * @returns {@link UpdateObjectEncryptionCommandOutput}
 * @see {@link UpdateObjectEncryptionCommandInput} for command's `input` shape.
 * @see {@link UpdateObjectEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>
 *       You might receive this error for several reasons. For details, see the description of this API
 *       operation.</p>
 *
 * @throws {@link InvalidRequest} (client fault)
 *  <p>A parameter or header in your request isn't valid. For details, see the description of this API
 *       operation.</p>
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class UpdateObjectEncryptionCommand extends $Command
  .classBuilder<
    UpdateObjectEncryptionCommandInput,
    UpdateObjectEncryptionCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: {'httpHeader': 'x-amz-sdk-checksum-algorithm', 'name': 'ChecksumAlgorithm'},
        requestChecksumRequired: true,
      }),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "UpdateObjectEncryption", {})
  .n("S3Client", "UpdateObjectEncryptionCommand")
  .sc(UpdateObjectEncryption$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateObjectEncryptionRequest;
      output: UpdateObjectEncryptionResponse;
    };
    sdk: {
      input: UpdateObjectEncryptionCommandInput;
      output: UpdateObjectEncryptionCommandOutput;
    };
  };
}
