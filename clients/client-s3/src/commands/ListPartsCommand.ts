// smithy-typescript generated code
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

import { ListPartsOutput, ListPartsRequest, ListPartsRequestFilterSensitiveLog } from "../models/models_0";
import { de_ListPartsCommand, se_ListPartsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPartsCommand}.
 */
export interface ListPartsCommandInput extends ListPartsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartsCommand}.
 */
export interface ListPartsCommandOutput extends ListPartsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the parts that have been uploaded for a specific multipart upload. This operation
 *          must include the upload ID, which you obtain by sending the initiate multipart upload
 *          request (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>).
 *          This request returns a maximum of 1,000 uploaded parts. The default number of parts
 *          returned is 1,000 parts. You can restrict the number of parts returned by specifying the
 *             <code>max-parts</code> request parameter. If your multipart upload consists of more than
 *          1,000 parts, the response returns an <code>IsTruncated</code> field with the value of true,
 *          and a <code>NextPartNumberMarker</code> element. In subsequent <code>ListParts</code>
 *          requests you can include the part-number-marker query string parameter and set its value to
 *          the <code>NextPartNumberMarker</code> field value from the previous response.</p>
 *          <p>If the upload was created using a checksum algorithm, you will need to have permission
 *          to the <code>kms:Decrypt</code> action for the request to succeed. </p>
 *          <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *             Upload</a>.</p>
 *          <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload
 *             and Permissions</a>.</p>
 *          <p>The following operations are related to <code>ListParts</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
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
 * import { S3Client, ListPartsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListPartsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListPartsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MaxParts: Number("int"),
 *   PartNumberMarker: "STRING_VALUE",
 *   UploadId: "STRING_VALUE", // required
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartsOutput
 * //   AbortDate: new Date("TIMESTAMP"),
 * //   AbortRuleId: "STRING_VALUE",
 * //   Bucket: "STRING_VALUE",
 * //   Key: "STRING_VALUE",
 * //   UploadId: "STRING_VALUE",
 * //   PartNumberMarker: "STRING_VALUE",
 * //   NextPartNumberMarker: "STRING_VALUE",
 * //   MaxParts: Number("int"),
 * //   IsTruncated: true || false,
 * //   Parts: [ // Parts
 * //     { // Part
 * //       PartNumber: Number("int"),
 * //       LastModified: new Date("TIMESTAMP"),
 * //       ETag: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       ChecksumCRC32: "STRING_VALUE",
 * //       ChecksumCRC32C: "STRING_VALUE",
 * //       ChecksumSHA1: "STRING_VALUE",
 * //       ChecksumSHA256: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Initiator: { // Initiator
 * //     ID: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //   },
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 * //   RequestCharged: "requester",
 * //   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * // };
 *
 * ```
 *
 * @param ListPartsCommandInput - {@link ListPartsCommandInput}
 * @returns {@link ListPartsCommandOutput}
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To list parts of a multipart upload.
 * ```javascript
 * // The following example lists parts uploaded for a specific multipart upload.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "bigobject",
 *   "UploadId": "example7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Initiator": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   "Owner": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   "Parts": [
 *     {
 *       "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *       "LastModified": "2016-12-16T00:11:42.000Z",
 *       "PartNumber": "1",
 *       "Size": 26246026
 *     },
 *     {
 *       "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *       "LastModified": "2016-12-16T00:15:01.000Z",
 *       "PartNumber": "2",
 *       "Size": 26246026
 *     }
 *   ],
 *   "StorageClass": "STANDARD"
 * }
 * *\/
 * // example id: to-list-parts-of-a-multipart-upload-1481852006923
 * ```
 *
 */
export class ListPartsCommand extends $Command<ListPartsCommandInput, ListPartsCommandOutput, S3ClientResolvedConfig> {
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
  constructor(readonly input: ListPartsCommandInput) {
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
  ): Handler<ListPartsCommandInput, ListPartsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPartsCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListPartsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "ListParts",
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
  private serialize(input: ListPartsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPartsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartsCommandOutput> {
    return de_ListPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
