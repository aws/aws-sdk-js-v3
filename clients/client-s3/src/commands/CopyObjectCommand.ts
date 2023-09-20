// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getSsecPlugin } from "@aws-sdk/middleware-ssec";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CopyObjectOutput,
  CopyObjectOutputFilterSensitiveLog,
  CopyObjectRequest,
  CopyObjectRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_CopyObjectCommand, se_CopyObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyObjectCommand}.
 */
export interface CopyObjectCommandInput extends CopyObjectRequest {}
/**
 * @public
 *
 * The output of {@link CopyObjectCommand}.
 */
export interface CopyObjectCommandOutput extends CopyObjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a copy of an object that is already stored in Amazon S3.</p>
 *          <note>
 *             <p>You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your
 *             object up to 5 GB in size in a single atomic action using this API. However, to copy an
 *             object greater than 5 GB, you must use the multipart upload Upload Part - Copy
 *             (UploadPartCopy) API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjctsUsingRESTMPUapi.html">Copy Object Using the
 *                REST Multipart Upload API</a>.</p>
 *          </note>
 *          <p>All copy requests must be authenticated. Additionally, you must have
 *             <i>read</i> access to the source object and <i>write</i>
 *          access to the destination bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>. Both the
 *          Region that you want to copy the object from and the Region that you want to copy the
 *          object to must be enabled for your account.</p>
 *          <p>A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3
 *          is copying the files. If the error occurs before the copy action starts, you receive a
 *          standard Amazon S3 error. If the error occurs during the copy operation, the error response is
 *          embedded in the <code>200 OK</code> response. This means that a <code>200 OK</code>
 *          response can contain either a success or an error. If you call the S3 API directly, make
 *          sure to design your application to parse the contents of the response and handle it
 *          appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the
 *          embedded error and apply error handling per your configuration settings (including
 *          automatically retrying the request as appropriate). If the condition persists, the SDKs
 *          throws an exception (or, for the SDKs that don't use exceptions, they return the
 *          error).</p>
 *          <p>If the copy is successful, you receive a response with information about the copied
 *          object.</p>
 *          <note>
 *             <p>If the request is an HTTP 1.1 request, the response is chunk encoded. If it were not,
 *             it would not contain the content-length, and you would need to read the entire
 *             body.</p>
 *          </note>
 *          <p>The copy request charge is based on the storage class and Region that you specify for
 *          the destination object. The request can also result in a data retrieval charge for the
 *          source if the source storage class bills for data retrieval. For pricing information, see
 *             <a href="http://aws.amazon.com/s3/pricing/">Amazon S3 pricing</a>.</p>
 *          <important>
 *             <p>Amazon S3 transfer acceleration does not support cross-Region copies. If you request a
 *             cross-Region copy using a transfer acceleration endpoint, you get a 400 <code>Bad
 *                Request</code> error. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer
 *             Acceleration</a>.</p>
 *          </important>
 *          <dl>
 *             <dt>Metadata</dt>
 *             <dd>
 *                <p>When copying an object, you can preserve all metadata (the default) or specify
 *                   new metadata. However, the access control list (ACL) is not preserved and is set
 *                   to private for the user making the request. To override the default ACL setting,
 *                   specify a new ACL when generating a copy request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Using
 *                      ACLs</a>. </p>
 *                <p>To specify whether you want the object metadata copied from the source object
 *                   or replaced with metadata provided in the request, you can optionally add the
 *                      <code>x-amz-metadata-directive</code> header. When you grant permissions, you
 *                   can use the <code>s3:x-amz-metadata-directive</code> condition key to enforce
 *                   certain metadata behavior when objects are uploaded. For more information, see
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html">Specifying Conditions in a
 *                      Policy</a> in the <i>Amazon S3 User Guide</i>. For a complete list
 *                   of Amazon S3-specific condition keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html">Actions, Resources, and Condition
 *                      Keys for Amazon S3</a>.</p>
 *                <note>
 *                   <p>
 *                      <code>x-amz-website-redirect-location</code> is unique to each object and
 *                      must be specified in the request headers to copy the value.</p>
 *                </note>
 *             </dd>
 *             <dt>x-amz-copy-source-if Headers</dt>
 *             <dd>
 *                <p>To only copy an object under certain conditions, such as whether the
 *                      <code>Etag</code> matches or whether the object was modified before or after a
 *                   specified date, use the following request parameters:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-match</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-none-match</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-unmodified-since</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-modified-since</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <p> If both the <code>x-amz-copy-source-if-match</code> and
 *                      <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the
 *                   request and evaluate as follows, Amazon S3 returns <code>200 OK</code> and copies the
 *                   data:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-match</code> condition evaluates to
 *                         true</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to
 *                         false</p>
 *                   </li>
 *                </ul>
 *                <p>If both the <code>x-amz-copy-source-if-none-match</code> and
 *                      <code>x-amz-copy-source-if-modified-since</code> headers are present in the
 *                   request and evaluate as follows, Amazon S3 returns the <code>412 Precondition
 *                      Failed</code> response code:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-none-match</code> condition evaluates to
 *                         false</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-copy-source-if-modified-since</code> condition evaluates to
 *                         true</p>
 *                   </li>
 *                </ul>
 *                <note>
 *                   <p>All headers with the <code>x-amz-</code> prefix, including
 *                         <code>x-amz-copy-source</code>, must be signed.</p>
 *                </note>
 *             </dd>
 *             <dt>Server-side encryption</dt>
 *             <dd>
 *                <p>Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket.
 *                   When copying an object, if you don't specify encryption information in your copy
 *                   request, the encryption setting of the target object is set to the default
 *                   encryption configuration of the destination bucket. By default, all buckets have a
 *                   base level of encryption configuration that uses server-side encryption with Amazon S3
 *                   managed keys (SSE-S3). If the destination bucket has a default encryption
 *                   configuration that uses server-side encryption with Key Management Service (KMS) keys
 *                   (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or
 *                   server-side encryption with customer-provided encryption keys (SSE-C), Amazon S3 uses
 *                   the corresponding KMS key, or a customer-provided key to encrypt the target
 *                   object copy.</p>
 *                <p>When you perform a <code>CopyObject</code> operation, if you want to use a
 *                   different type of encryption setting for the target object, you can use other
 *                   appropriate encryption-related headers to encrypt the target object with a
 *                   KMS key, an Amazon S3 managed key, or a customer-provided key. With server-side
 *                   encryption, Amazon S3 encrypts your data as it writes your data to disks in its data
 *                   centers and decrypts the data when you access it. If the encryption setting in
 *                   your request is different from the default encryption configuration of the
 *                   destination bucket, the encryption setting in your request takes precedence. If
 *                   the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the
 *                   necessary encryption information in your request so that Amazon S3 can decrypt the
 *                   object for copying. For more information about server-side encryption, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Using
 *                      Server-Side Encryption</a>.</p>
 *                <p>If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the
 *                   object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the
 *                      <i>Amazon S3 User Guide</i>.</p>
 *             </dd>
 *             <dt>Access Control List (ACL)-Specific Request Headers</dt>
 *             <dd>
 *                <p>When copying an object, you can optionally use headers to grant ACL-based
 *                   permissions. By default, all objects are private. Only the owner has full access
 *                   control. When adding a new object, you can grant permissions to individual
 *                   Amazon Web Services accounts or to predefined groups that are defined by Amazon S3. These permissions
 *                   are then added to the ACL on the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control
 *                      List (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST
 *                      API</a>. </p>
 *                <p>If the bucket that you're copying objects to uses the bucket owner enforced
 *                   setting for S3 Object Ownership, ACLs are disabled and no longer affect
 *                   permissions. Buckets that use this setting only accept <code>PUT</code> requests
 *                   that don't specify an ACL or <code>PUT</code> requests that specify bucket owner
 *                   full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL
 *                   or an equivalent form of this ACL expressed in the XML format.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling
 *                      ownership of objects and disabling ACLs</a> in the
 *                      <i>Amazon S3 User Guide</i>.</p>
 *                <note>
 *                   <p>If your bucket uses the bucket owner enforced setting for Object Ownership,
 *                      all objects written to the bucket by any account will be owned by the bucket
 *                      owner.</p>
 *                </note>
 *             </dd>
 *             <dt>Checksums</dt>
 *             <dd>
 *                <p>When copying an object, if it has a checksum, that checksum will be copied to
 *                   the new object by default. When you copy the object over, you can optionally
 *                   specify a different checksum algorithm to use with the
 *                      <code>x-amz-checksum-algorithm</code> header.</p>
 *             </dd>
 *             <dt>Storage Class Options</dt>
 *             <dd>
 *                <p>You can use the <code>CopyObject</code> action to change the storage class of
 *                   an object that is already stored in Amazon S3 by using the <code>StorageClass</code>
 *                   parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in
 *                   the <i>Amazon S3 User Guide</i>.</p>
 *                <p>If the source object's storage class is GLACIER or
 *                      DEEP_ARCHIVE, or the object's storage class is
 *                      INTELLIGENT_TIERING and it's <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html#intel-tiering-tier-definition"> S3 Intelligent-Tiering access tier</a> is
 *                   Archive Access or Deep Archive Access, you must restore a copy of this object
 *                   before you can use it as a source object for the copy operation. For more
 *                   information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. For
 *                   more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjectsExamples.html">Copying
 *                   Objects</a>.</p>
 *             </dd>
 *             <dt>Versioning</dt>
 *             <dd>
 *                <p>By default, <code>x-amz-copy-source</code> header identifies the current
 *                   version of an object to copy. If the current version is a delete marker, Amazon S3
 *                   behaves as if the object was deleted. To copy a different version, use the
 *                      <code>versionId</code> subresource.</p>
 *                <p>If you enable versioning on the target bucket, Amazon S3 generates a unique version
 *                   ID for the object being copied. This version ID is different from the version ID
 *                   of the source object. Amazon S3 returns the version ID of the copied object in the
 *                      <code>x-amz-version-id</code> response header in the response.</p>
 *                <p>If you do not enable versioning or suspend it on the target bucket, the version
 *                   ID that Amazon S3 generates is always null.</p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>CopyObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CopyObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CopyObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // CopyObjectRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *   Bucket: "STRING_VALUE", // required
 *   CacheControl: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   CopySource: "STRING_VALUE", // required
 *   CopySourceIfMatch: "STRING_VALUE",
 *   CopySourceIfModifiedSince: new Date("TIMESTAMP"),
 *   CopySourceIfNoneMatch: "STRING_VALUE",
 *   CopySourceIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   Expires: new Date("TIMESTAMP"),
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataDirective: "COPY" || "REPLACE",
 *   TaggingDirective: "COPY" || "REPLACE",
 *   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
 *   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 *   WebsiteRedirectLocation: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   SSEKMSKeyId: "STRING_VALUE",
 *   SSEKMSEncryptionContext: "STRING_VALUE",
 *   BucketKeyEnabled: true || false,
 *   CopySourceSSECustomerAlgorithm: "STRING_VALUE",
 *   CopySourceSSECustomerKey: "STRING_VALUE",
 *   CopySourceSSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   Tagging: "STRING_VALUE",
 *   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 *   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *   ObjectLockLegalHoldStatus: "ON" || "OFF",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ExpectedSourceBucketOwner: "STRING_VALUE",
 * };
 * const command = new CopyObjectCommand(input);
 * const response = await client.send(command);
 * // { // CopyObjectOutput
 * //   CopyObjectResult: { // CopyObjectResult
 * //     ETag: "STRING_VALUE",
 * //     LastModified: new Date("TIMESTAMP"),
 * //     ChecksumCRC32: "STRING_VALUE",
 * //     ChecksumCRC32C: "STRING_VALUE",
 * //     ChecksumSHA1: "STRING_VALUE",
 * //     ChecksumSHA256: "STRING_VALUE",
 * //   },
 * //   Expiration: "STRING_VALUE",
 * //   CopySourceVersionId: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   SSEKMSEncryptionContext: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param CopyObjectCommandInput - {@link CopyObjectCommandInput}
 * @returns {@link CopyObjectCommandOutput}
 * @see {@link CopyObjectCommandInput} for command's `input` shape.
 * @see {@link CopyObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link ObjectNotInActiveTierError} (client fault)
 *  <p>The source object of the COPY action is not in the active tier and is only stored in
 *          Amazon S3 Glacier.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To copy an object
 * ```javascript
 * // The following example copies an object from one bucket to another.
 * const input = {
 *   "Bucket": "destinationbucket",
 *   "CopySource": "/sourcebucket/HappyFacejpg",
 *   "Key": "HappyFaceCopyjpg"
 * };
 * const command = new CopyObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CopyObjectResult": {
 *     "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *     "LastModified": "2016-12-15T17:38:53.000Z"
 *   }
 * }
 * *\/
 * // example id: to-copy-an-object-1481823186878
 * ```
 *
 */
export class CopyObjectCommand extends $Command<
  CopyObjectCommandInput,
  CopyObjectCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CopyObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyObjectCommandInput, CopyObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyObjectCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getThrow200ExceptionsPlugin(configuration));
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "CopyObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyObjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyObjectOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "CopyObject",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CopyObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyObjectCommandOutput> {
    return de_CopyObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
