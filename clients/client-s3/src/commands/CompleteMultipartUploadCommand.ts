// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
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
  CompleteMultipartUploadOutput,
  CompleteMultipartUploadOutputFilterSensitiveLog,
  CompleteMultipartUploadRequest,
  CompleteMultipartUploadRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCompleteMultipartUploadCommand,
  serializeAws_restXmlCompleteMultipartUploadCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandInput extends CompleteMultipartUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandOutput extends CompleteMultipartUploadOutput, __MetadataBearer {}

/**
 * @public
 * <p>Completes a multipart upload by assembling previously uploaded parts.</p>
 *          <p>You first initiate the multipart upload and then upload all parts using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *          operation. After successfully uploading all relevant parts of an upload, you call this
 *          action to complete the upload. Upon receiving this request, Amazon S3 concatenates all
 *          the parts in ascending order by part number to create a new object. In the Complete
 *          Multipart Upload request, you must provide the parts list. You must ensure that the parts
 *          list is complete. This action concatenates the parts that you provide in the list. For
 *          each part in the list, you must provide the part number and the <code>ETag</code> value,
 *          returned after that part was uploaded.</p>
 *          <p>Processing of a Complete Multipart Upload request could take several minutes to
 *          complete. After Amazon S3 begins processing the request, it sends an HTTP response header that
 *          specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white
 *          space characters to keep the connection from timing out. Because a request could fail after
 *          the initial 200 OK response has been sent, it is important that you check the response body
 *          to determine whether the request succeeded.</p>
 *          <p>Note that if <code>CompleteMultipartUpload</code> fails, applications should be prepared
 *          to retry the failed requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ErrorBestPractices.html">Amazon S3 Error Best Practices</a>.</p>
 *          <important>
 *             <p>You cannot use <code>Content-Type: application/x-www-form-urlencoded</code> with Complete
 *             Multipart Upload requests. Also, if you do not provide a <code>Content-Type</code> header, <code>CompleteMultipartUpload</code> returns a 200 OK response.</p>
 *          </important>
 *          <p>For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *             Upload</a>.</p>
 *          <p>For information about permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and
 *          Permissions</a>.</p>
 *          <p>
 *             <code>CompleteMultipartUpload</code> has the following special errors:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>EntityTooSmall</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: Your proposed upload is smaller than the minimum allowed object
 *                      size. Each part must be at least 5 MB in size, except the last part.</p>
 *                   </li>
 *                   <li>
 *                      <p>400 Bad Request</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>InvalidPart</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: One or more of the specified parts could not be found. The part
 *                      might not have been uploaded, or the specified entity tag might not have
 *                      matched the part's entity tag.</p>
 *                   </li>
 *                   <li>
 *                      <p>400 Bad Request</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>InvalidPartOrder</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The list of parts was not in ascending order. The parts list
 *                      must be specified in order by part number.</p>
 *                   </li>
 *                   <li>
 *                      <p>400 Bad Request</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>NoSuchUpload</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The specified multipart upload does not exist. The upload ID
 *                      might be invalid, or the multipart upload might have been aborted or
 *                      completed.</p>
 *                   </li>
 *                   <li>
 *                      <p>404 Not Found</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following operations are related to <code>CompleteMultipartUpload</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
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
 * import { S3Client, CompleteMultipartUploadCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CompleteMultipartUploadCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = {
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MultipartUpload: {
 *     Parts: [
 *       {
 *         ETag: "STRING_VALUE",
 *         ChecksumCRC32: "STRING_VALUE",
 *         ChecksumCRC32C: "STRING_VALUE",
 *         ChecksumSHA1: "STRING_VALUE",
 *         ChecksumSHA256: "STRING_VALUE",
 *         PartNumber: Number("int"),
 *       },
 *     ],
 *   },
 *   UploadId: "STRING_VALUE", // required
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CompleteMultipartUploadCommandInput - {@link CompleteMultipartUploadCommandInput}
 * @returns {@link CompleteMultipartUploadCommandOutput}
 * @see {@link CompleteMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To complete multipart upload
 * ```javascript
 * // The following example completes a multipart upload.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "bigobject",
 *   "MultipartUpload": {
 *     "Parts": [
 *       {
 *         "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *         "PartNumber": "1"
 *       },
 *       {
 *         "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *         "PartNumber": "2"
 *       }
 *     ]
 *   },
 *   "UploadId": "7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Bucket": "acexamplebucket",
 *   "ETag": "\"4d9031c7644d8081c2829f4ea23c55f7-2\"",
 *   "Key": "bigobject",
 *   "Location": "https://examplebucket.s3.<Region>.amazonaws.com/bigobject"
 * }
 * *\/
 * // example id: to-complete-multipart-upload-1481851590483
 * ```
 *
 */
export class CompleteMultipartUploadCommand extends $Command<
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
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
  constructor(readonly input: CompleteMultipartUploadCommandInput) {
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
  ): Handler<CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteMultipartUploadCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getThrow200ExceptionsPlugin(configuration));
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "CompleteMultipartUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteMultipartUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CompleteMultipartUploadOutputFilterSensitiveLog,
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
  private serialize(input: CompleteMultipartUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCompleteMultipartUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteMultipartUploadCommandOutput> {
    return deserializeAws_restXmlCompleteMultipartUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
