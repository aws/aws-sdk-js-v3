// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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
} from "@smithy/types";

import {
  UploadPartOutput,
  UploadPartOutputFilterSensitiveLog,
  UploadPartRequest,
  UploadPartRequestFilterSensitiveLog,
} from "../models/models_1";
import { de_UploadPartCommand, se_UploadPartCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
export type UploadPartCommandInputType = Omit<UploadPartRequest, "Body"> & {
  /**
   * For *`UploadPartRequest["Body"]`*, see {@link UploadPartRequest.Body}.
   */
  Body?: UploadPartRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * @public
 *
 * The input for {@link UploadPartCommand}.
 */
export interface UploadPartCommandInput extends UploadPartCommandInputType {}
/**
 * @public
 *
 * The output of {@link UploadPartCommand}.
 */
export interface UploadPartCommandOutput extends UploadPartOutput, __MetadataBearer {}

/**
 * @public
 * <p>Uploads a part in a multipart upload.</p>
 *          <note>
 *             <p>In this operation, you provide part data in your request. However, you have an option
 *             to specify your existing Amazon S3 object as a data source for the part you are uploading. To
 *             upload a part from an existing object, you use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a> operation.
 *          </p>
 *          </note>
 *          <p>You must initiate a multipart upload (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>)
 *          before you can upload any part. In response to your initiate request, Amazon S3 returns an
 *          upload ID, a unique identifier, that you must include in your upload part request.</p>
 *          <p>Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely
 *          identifies a part and also defines its position within the object being created. If you
 *          upload a new part using the same part number that was used with a previous part, the
 *          previously uploaded part is overwritten.</p>
 *          <p>For information about maximum and minimum part sizes and other multipart upload
 *          specifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Multipart upload limits</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To ensure that data is not corrupted when traversing the network, specify the
 *             <code>Content-MD5</code> header in the upload part request. Amazon S3 checks the part data
 *          against the provided MD5 value. If they do not match, Amazon S3 returns an error. </p>
 *          <p>If the upload request is signed with Signature Version 4, then Amazon Web Services S3 uses the
 *             <code>x-amz-content-sha256</code> header as a checksum instead of
 *             <code>Content-MD5</code>. For more information see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">Authenticating
 *             Requests: Using the Authorization Header (Amazon Web Services Signature Version 4)</a>. </p>
 *          <p>
 *             <b>Note:</b> After you initiate multipart upload and upload
 *          one or more parts, you must either complete or abort multipart upload in order to stop
 *          getting charged for storage of the uploaded parts. Only after you either complete or abort
 *          multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts
 *          storage.</p>
 *          <p>For more information on multipart uploads, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload Overview</a> in the
 *             <i>Amazon S3 User Guide </i>.</p>
 *          <p>For information on the permissions required to use the multipart upload API, go to
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart
 *             Upload and Permissions</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it
 *          writes it to disks in its data centers and decrypts it when you access it. You have three
 *          mutually exclusive options to protect data using server-side encryption in Amazon S3, depending
 *          on how you choose to manage the encryption keys. Specifically, the encryption key options
 *          are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and Customer-Provided Keys
 *          (SSE-C). Amazon S3 encrypts data with server-side encryption using Amazon S3 managed keys (SSE-S3) by
 *          default. You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption
 *          with other key options. The option you use depends on whether you want to use KMS keys
 *          (SSE-KMS) or provide your own encryption key (SSE-C). If you choose to provide your own
 *          encryption key, the request headers you provide in the request must match the headers you
 *          used in the request to initiate the upload by using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>.
 *          For more information, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
 *             Encryption</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>Server-side encryption is supported by the S3 Multipart Upload actions. Unless you are
 *          using a customer-provided encryption key (SSE-C), you don't need to specify the encryption
 *          parameters in each UploadPart request. Instead, you only need to specify the server-side
 *          encryption parameters in the initial Initiate Multipart request. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>.</p>
 *          <p>If you requested server-side encryption using a customer-provided encryption key (SSE-C)
 *          in your initiate multipart upload request, you must provide identical encryption
 *          information in each part upload using the following headers.</p>
 *          <ul>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-algorithm</p>
 *             </li>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-key</p>
 *             </li>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-key-MD5</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>UploadPart</code> has the following special errors:</p>
 *          <ul>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: NoSuchUpload</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The specified multipart upload does not exist. The upload
 *                         ID might be invalid, or the multipart upload might have been aborted or
 *                         completed.</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i> HTTP Status Code: 404 Not Found </i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>SOAP Fault Code Prefix: Client</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following operations are related to <code>UploadPart</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
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
 * import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UploadPartCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // UploadPartRequest
 *   Body: "STREAMING_BLOB_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   ContentLength: Number("long"),
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   PartNumber: Number("int"), // required
 *   UploadId: "STRING_VALUE", // required
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new UploadPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadPartOutput
 * //   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
 * //   ETag: "STRING_VALUE",
 * //   ChecksumCRC32: "STRING_VALUE",
 * //   ChecksumCRC32C: "STRING_VALUE",
 * //   ChecksumSHA1: "STRING_VALUE",
 * //   ChecksumSHA256: "STRING_VALUE",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param UploadPartCommandInput - {@link UploadPartCommandInput}
 * @returns {@link UploadPartCommandOutput}
 * @see {@link UploadPartCommandInput} for command's `input` shape.
 * @see {@link UploadPartCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To upload a part
 * ```javascript
 * // The following example uploads part 1 of a multipart upload. The example specifies a file name for the part data. The Upload ID is same that is returned by the initiate multipart upload.
 * const input = {
 *   "Body": "fileToUpload",
 *   "Bucket": "examplebucket",
 *   "Key": "examplelargeobject",
 *   "PartNumber": "1",
 *   "UploadId": "xadcOB_7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new UploadPartCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\""
 * }
 * *\/
 * // example id: to-upload-a-part-1481847914943
 * ```
 *
 */
export class UploadPartCommand extends $Command<
  UploadPartCommandInput,
  UploadPartCommandOutput,
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
  constructor(readonly input: UploadPartCommandInput) {
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
  ): Handler<UploadPartCommandInput, UploadPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UploadPartCommand.getEndpointParameterInstructions()));
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
    const commandName = "UploadPartCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadPartRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UploadPartOutputFilterSensitiveLog,
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
  private serialize(input: UploadPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadPartCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadPartCommandOutput> {
    return de_UploadPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
