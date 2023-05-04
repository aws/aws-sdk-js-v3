// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getSsecPlugin } from "@aws-sdk/middleware-ssec";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateMultipartUploadOutput,
  CreateMultipartUploadOutputFilterSensitiveLog,
  CreateMultipartUploadRequest,
  CreateMultipartUploadRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMultipartUploadCommand, se_CreateMultipartUploadCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link CreateMultipartUploadCommand}.
 */
export interface CreateMultipartUploadCommandInput extends CreateMultipartUploadRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultipartUploadCommand}.
 */
export interface CreateMultipartUploadCommandOutput extends CreateMultipartUploadOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action initiates a multipart upload and returns an upload ID. This upload ID is
 *          used to associate all of the parts in the specific multipart upload. You specify this
 *          upload ID in each of your subsequent upload part requests (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>). You also include this
 *          upload ID in the final request to either complete or abort the multipart upload
 *          request.</p>
 *          <p>For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload Overview</a>.</p>
 *          <p>If you have configured a lifecycle rule to abort incomplete multipart uploads, the
 *          upload must complete within the number of days specified in the bucket lifecycle
 *          configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort
 *          action and Amazon S3 aborts the multipart upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a>.</p>
 *          <p>For information about the permissions required to use the multipart upload API, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart
 *             Upload and Permissions</a>.</p>
 *          <p>For request signing, multipart upload is just a series of regular requests. You initiate
 *          a multipart upload, send one or more requests to upload parts, and then complete the
 *          multipart upload process. You sign each request individually. There is nothing special
 *          about signing multipart upload requests. For more information about signing, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a>.</p>
 *          <note>
 *             <p>After you initiate a multipart upload and upload one or more parts, to stop being
 *             charged for storing the uploaded parts, you must either complete or abort the multipart
 *             upload. Amazon S3 frees up the space used to store the parts and stop charging you for
 *             storing them only after you either complete or abort a multipart upload. </p>
 *          </note>
 *          <p>Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it
 *          writes it to disks in its data centers and decrypts it when you access it. Amazon S3
 *          automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a
 *          multipart upload, if you don't specify encryption information in your request, the
 *          encryption setting of the uploaded parts is set to the default encryption configuration of
 *          the destination bucket. By default, all buckets have a base level of encryption
 *          configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the
 *          destination bucket has a default encryption configuration that uses server-side encryption
 *          with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C),
 *          Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded
 *          parts. When you perform a CreateMultipartUpload operation, if you want to use a different
 *          type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the
 *          object with a KMS key, an Amazon S3 managed key, or a customer-provided key. If the encryption
 *          setting in your request is different from the default encryption configuration of the
 *          destination bucket, the encryption setting in your request takes precedence. If you choose
 *          to provide your own encryption key, the request headers you provide in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *          and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a> requests must match the headers you used in the request to
 *          initiate the upload by using <code>CreateMultipartUpload</code>. You can request that Amazon S3
 *          save the uploaded parts encrypted with server-side encryption with an Amazon S3 managed key
 *          (SSE-S3), an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key
 *          (SSE-C). </p>
 *          <p>To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester
 *          must have permission to the <code>kms:Decrypt</code> and <code>kms:GenerateDataKey*</code>
 *          actions on the key. These permissions are required because Amazon S3 must decrypt and read data
 *          from the encrypted file parts before it completes the multipart upload. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html#mpuAndPermissions">Multipart upload API
 *             and permissions</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">Protecting data using
 *             server-side encryption with Amazon Web Services KMS</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key,
 *          then you must have these permissions on the key policy. If your IAM user or role belongs
 *          to a different account than the key, then you must have the permissions on both the key
 *          policy and your IAM user or role.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using Server-Side
 *             Encryption</a>.</p>
 *          <dl>
 *             <dt>Access Permissions</dt>
 *             <dd>
 *                <p>When copying an object, you can optionally specify the accounts or groups that
 *                   should be granted specific permissions on the new object. There are two ways to
 *                   grant the permissions using the request headers:</p>
 *                <ul>
 *                   <li>
 *                      <p>Specify a canned ACL with the <code>x-amz-acl</code> request header. For
 *                         more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
 *                         ACL</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Specify access permissions explicitly with the
 *                            <code>x-amz-grant-read</code>, <code>x-amz-grant-read-acp</code>,
 *                            <code>x-amz-grant-write-acp</code>, and
 *                            <code>x-amz-grant-full-control</code> headers. These parameters map to
 *                         the set of permissions that Amazon S3 supports in an ACL. For more information,
 *                         see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>.</p>
 *                   </li>
 *                </ul>
 *                <p>You can use either a canned ACL or specify access permissions explicitly. You
 *                   cannot do both.</p>
 *             </dd>
 *             <dt>Server-Side- Encryption-Specific Request Headers</dt>
 *             <dd>
 *                <p>Amazon S3 encrypts data
 *                   by using server-side encryption with an Amazon S3 managed key (SSE-S3) by default. Server-side encryption is for data encryption at rest. Amazon S3 encrypts
 *                   your data as it writes it to disks in its data centers and decrypts it when you
 *                   access it. You can request that Amazon S3 encrypts
 *                   data at rest by using server-side encryption with other key options. The option you use depends on
 *                   whether you want to use KMS keys (SSE-KMS) or provide your own encryption keys
 *                   (SSE-C).</p>
 *                <ul>
 *                   <li>
 *                      <p>Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key
 *                         (<code>aws/s3</code>) and KMS customer managed keys stored in Key Management Service (KMS) – If you
 *                         want Amazon Web Services to manage the keys used to encrypt data, specify the following
 *                         headers in the request.</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption-aws-kms-key-id</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption-context</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                      <note>
 *                         <p>If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but
 *                            don't provide <code>x-amz-server-side-encryption-aws-kms-key-id</code>,
 *                            Amazon S3 uses the Amazon Web Services managed key (<code>aws/s3</code> key) in KMS to
 *                            protect the data.</p>
 *                      </note>
 *                      <important>
 *                         <p>All <code>GET</code> and <code>PUT</code> requests for an object protected
 *                            by KMS fail if you don't make them by using Secure Sockets Layer (SSL),
 *                            Transport Layer Security (TLS), or Signature Version 4.</p>
 *                      </important>
 *                      <p>For more information about server-side encryption with KMS keys
 *                         (SSE-KMS), see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">Protecting Data
 *                            Using Server-Side Encryption with KMS keys</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Use customer-provided encryption keys (SSE-C) – If you want to manage
 *                         your own encryption keys, provide all the following headers in the
 *                         request.</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption-customer-algorithm</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption-customer-key</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-server-side-encryption-customer-key-MD5</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                      <p>For more information about server-side encryption with customer-provided
 *                         encryption keys (SSE-C), see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">
 *                            Protecting data using server-side encryption with customer-provided
 *                            encryption keys (SSE-C)</a>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>Access-Control-List (ACL)-Specific Request Headers</dt>
 *             <dd>
 *                <p>You also can use the following access control–related headers with this
 *                   operation. By default, all objects are private. Only the owner has full access
 *                   control. When adding a new object, you can grant permissions to individual
 *                   Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then
 *                   added to the access control list (ACL) on the object. For more information, see
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Using ACLs</a>. With this operation, you can grant access permissions
 *                   using one of the following two methods:</p>
 *                <ul>
 *                   <li>
 *                      <p>Specify a canned ACL (<code>x-amz-acl</code>) — Amazon S3 supports a set of
 *                         predefined ACLs, known as <i>canned ACLs</i>. Each canned ACL
 *                         has a predefined set of grantees and permissions. For more information, see
 *                            <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
 *                         ACL</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Specify access permissions explicitly — To explicitly grant access
 *                         permissions to specific Amazon Web Services accounts or groups, use the following headers.
 *                         Each header maps to specific permissions that Amazon S3 supports in an ACL. For
 *                         more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL)
 *                            Overview</a>. In the header, you specify a list of grantees who get
 *                         the specific permission. To grant permissions explicitly, use:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-grant-read</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-grant-write</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-grant-read-acp</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-grant-write-acp</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>x-amz-grant-full-control</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                      <p>You specify each grantee as a type=value pair, where the type is one of
 *                         the following:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>id</code> – if the value specified is the canonical user ID
 *                               of an Amazon Web Services account</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>uri</code> – if you are granting permissions to a predefined
 *                               group</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>emailAddress</code> – if the value specified is the email
 *                               address of an Amazon Web Services account</p>
 *                            <note>
 *                               <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p>
 *                               <ul>
 *                                  <li>
 *                                     <p>US East (N. Virginia)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p>US West (N. California)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p> US West (Oregon)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p> Asia Pacific (Singapore)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p>Asia Pacific (Sydney)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p>Asia Pacific (Tokyo)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p>Europe (Ireland)</p>
 *                                  </li>
 *                                  <li>
 *                                     <p>South America (São Paulo)</p>
 *                                  </li>
 *                               </ul>
 *                               <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *                      <p>For example, the following <code>x-amz-grant-read</code> header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:</p>
 *                      <p>
 *                         <code>x-amz-grant-read: id="11112222333", id="444455556666" </code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>CreateMultipartUpload</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateMultipartUploadCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateMultipartUploadCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // CreateMultipartUploadRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *   Bucket: "STRING_VALUE", // required
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   Expires: new Date("TIMESTAMP"),
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServerSideEncryption: "AES256" || "aws:kms",
 *   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 *   WebsiteRedirectLocation: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   SSEKMSKeyId: "STRING_VALUE",
 *   SSEKMSEncryptionContext: "STRING_VALUE",
 *   BucketKeyEnabled: true || false,
 *   RequestPayer: "requester",
 *   Tagging: "STRING_VALUE",
 *   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 *   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *   ObjectLockLegalHoldStatus: "ON" || "OFF",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * };
 * const command = new CreateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultipartUploadOutput
 * //   AbortDate: new Date("TIMESTAMP"),
 * //   AbortRuleId: "STRING_VALUE",
 * //   Bucket: "STRING_VALUE",
 * //   Key: "STRING_VALUE",
 * //   UploadId: "STRING_VALUE",
 * //   ServerSideEncryption: "AES256" || "aws:kms",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   SSEKMSEncryptionContext: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * //   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * // };
 *
 * ```
 *
 * @param CreateMultipartUploadCommandInput - {@link CreateMultipartUploadCommandInput}
 * @returns {@link CreateMultipartUploadCommandOutput}
 * @see {@link CreateMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link CreateMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To initiate a multipart upload
 * ```javascript
 * // The following example initiates a multipart upload.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "largeobject"
 * };
 * const command = new CreateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Bucket": "examplebucket",
 *   "Key": "largeobject",
 *   "UploadId": "ibZBv_75gd9r8lH_gqXatLdxMVpAlj6ZQjEs.OwyF3953YdwbcQnMA2BLGn8Lx12fQNICtMw5KyteFeHw.Sjng--"
 * }
 * *\/
 * // example id: to-initiate-a-multipart-upload-1481836794513
 * ```
 *
 */
export class CreateMultipartUploadCommand extends $Command<
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
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
  constructor(readonly input: CreateMultipartUploadCommandInput) {
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
  ): Handler<CreateMultipartUploadCommandInput, CreateMultipartUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMultipartUploadCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "CreateMultipartUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMultipartUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMultipartUploadOutputFilterSensitiveLog,
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
  private serialize(input: CreateMultipartUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMultipartUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMultipartUploadCommandOutput> {
    return de_CreateMultipartUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
