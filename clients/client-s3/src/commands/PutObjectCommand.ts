// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getCheckContentLengthHeaderPlugin } from "@aws-sdk/middleware-sdk-s3";
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
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import {
  PutObjectOutput,
  PutObjectOutputFilterSensitiveLog,
  PutObjectRequest,
  PutObjectRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_PutObjectCommand, se_PutObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutObjectCommand}.
 */
export interface PutObjectCommandInput extends Omit<PutObjectRequest, "Body"> {
  Body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutObjectCommand}.
 */
export interface PutObjectCommandOutput extends PutObjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object
 *          to it.</p>
 *          <note>
 *             <p>Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the
 *             entire object to the bucket. You cannot use <code>PutObject</code> to only update a
 *             single piece of metadata for an existing object. You must put the entire object with
 *             updated metadata if you want to update some values.</p>
 *          </note>
 *          <p>Amazon S3 is a distributed system. If it receives multiple write requests for the same object
 *          simultaneously, it overwrites all but the last object written. To prevent objects from
 *          being deleted or overwritten, you can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Amazon S3 Object
 *             Lock</a>.</p>
 *          <p>To ensure that data is not corrupted traversing the network, use the
 *             <code>Content-MD5</code> header. When you use this header, Amazon S3 checks the object
 *          against the provided MD5 value and, if they do not match, returns an error. Additionally,
 *          you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to
 *          the calculated MD5 value.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To successfully complete the <code>PutObject</code> request, you must have the
 *                      <code>s3:PutObject</code> in your IAM permissions.</p>
 *                </li>
 *                <li>
 *                   <p>To successfully change the objects acl of your <code>PutObject</code> request,
 *                   you must have the <code>s3:PutObjectAcl</code> in your IAM permissions.</p>
 *                </li>
 *                <li>
 *                   <p>To successfully set the tag-set with your <code>PutObject</code> request, you
 *                   must have the <code>s3:PutObjectTagging</code> in your IAM permissions.</p>
 *                </li>
 *                <li>
 *                   <p> The <code>Content-MD5</code> header is required for any request to upload an
 *                   object with a retention period configured using Amazon S3 Object Lock. For more
 *                   information about Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock
 *                      Overview</a> in the <i>Amazon S3 User Guide</i>. </p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>You have four mutually exclusive options to protect data using server-side encryption in
 *          Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the
 *          encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or
 *          DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side
 *          encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to
 *          encrypt data at rest by using server-side encryption with other key options. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
 *             Encryption</a>.</p>
 *          <p>When adding a new object, you can use headers to grant ACL-based permissions to
 *          individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are
 *          then added to the ACL on the object. By default, all objects are private. Only the owner
 *          has full access control. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>
 *          and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing
 *             ACLs Using the REST API</a>. </p>
 *          <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting
 *          for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that
 *          use this setting only accept PUT requests that don't specify an ACL or PUT requests that
 *          specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code>
 *          canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that
 *          contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a
 *             <code>400</code> error with the error code <code>AccessControlListNotSupported</code>.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of
 *             objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for Object Ownership, all
 *             objects written to the bucket by any account will be owned by the bucket owner.</p>
 *          </note>
 *          <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
 *          STANDARD storage class provides high durability and high availability. Depending on
 *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
 *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID
 *          for the object being stored. Amazon S3 returns this ID in the response. When you enable
 *          versioning for a bucket, if Amazon S3 receives multiple write requests for the same object
 *          simultaneously, it stores all of the objects. For more information about versioning, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
 *             Versioning-Enabled Buckets</a>. For information about returning the versioning state
 *          of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
 *          <p>For more information about related Amazon S3 APIs, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutObjectRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *   Body: "STREAMING_BLOB_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentLength: Number("long"),
 *   ContentMD5: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   Expires: new Date("TIMESTAMP"),
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
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
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectOutput
 * //   Expiration: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   ChecksumCRC32: "STRING_VALUE",
 * //   ChecksumCRC32C: "STRING_VALUE",
 * //   ChecksumSHA1: "STRING_VALUE",
 * //   ChecksumSHA256: "STRING_VALUE",
 * //   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
 * //   VersionId: "STRING_VALUE",
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
 * @param PutObjectCommandInput - {@link PutObjectCommandInput}
 * @returns {@link PutObjectCommandOutput}
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To upload an object (specify optional headers)
 * ```javascript
 * // The following example uploads an object. The request specifies optional request headers to directs S3 to use specific storage class and use server-side encryption.
 * const input = {
 *   "Body": "HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "ServerSideEncryption": "AES256",
 *   "StorageClass": "STANDARD_IA"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "ServerSideEncryption": "AES256",
 *   "VersionId": "CG612hodqujkf8FaaNfp8U..FIhLROcp"
 * }
 * *\/
 * // example id: to-upload-an-object-(specify-optional-headers)
 * ```
 *
 * @example To create an object.
 * ```javascript
 * // The following example creates an object. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "objectkey"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "Bvq0EDKxOcXLJXNo_Lkz37eM3R4pfzyQ"
 * }
 * *\/
 * // example id: to-create-an-object-1483147613675
 * ```
 *
 * @example To upload object and specify user-defined metadata
 * ```javascript
 * // The following example creates an object. The request also specifies optional metadata. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject",
 *   "Metadata": {
 *     "metadata1": "value1",
 *     "metadata2": "value2"
 *   }
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
 * }
 * *\/
 * // example id: to-upload-object-and-specify-user-defined-metadata-1483396974757
 * ```
 *
 * @example To upload an object and specify server-side encryption and object tags
 * ```javascript
 * // The following example uploads an object. The request specifies the optional server-side encryption option. The request also specifies optional object tags. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject",
 *   "ServerSideEncryption": "AES256",
 *   "Tagging": "key1=value1&key2=value2"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "ServerSideEncryption": "AES256",
 *   "VersionId": "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-server-side-encryption-and-object-tags-1483398331831
 * ```
 *
 * @example To upload an object and specify optional tags
 * ```javascript
 * // The following example uploads an object. The request specifies optional object tags. The bucket is versioned, therefore S3 returns version ID of the newly created object.
 * const input = {
 *   "Body": "c:\\HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "Tagging": "key1=value1&key2=value2"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "psM2sYY4.o1501dSx8wMvnkOzSBB.V4a"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-optional-tags-1481762310955
 * ```
 *
 * @example To upload an object
 * ```javascript
 * // The following example uploads an object to a versioning-enabled bucket. The source file is specified using Windows file syntax. S3 returns VersionId of the newly created object.
 * const input = {
 *   "Body": "HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "tpf3zF08nBplQK1XLOefGskR7mGDwcDk"
 * }
 * *\/
 * // example id: to-upload-an-object-1481760101010
 * ```
 *
 * @example To upload an object and specify canned ACL.
 * ```javascript
 * // The following example uploads and object. The request specifies optional canned ACL (access control list) to all READ access to authenticated users. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "ACL": "authenticated-read",
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-canned-acl-1483397779571
 * ```
 *
 */
export class PutObjectCommand extends $Command<PutObjectCommandInput, PutObjectCommandOutput, S3ClientResolvedConfig> {
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
  constructor(readonly input: PutObjectCommandInput) {
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
  ): Handler<PutObjectCommandInput, PutObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutObjectCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getCheckContentLengthHeaderPlugin(configuration));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: false,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutObjectOutputFilterSensitiveLog,
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
  private serialize(input: PutObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectCommandOutput> {
    return de_PutObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
