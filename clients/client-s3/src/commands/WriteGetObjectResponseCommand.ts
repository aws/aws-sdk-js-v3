// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { WriteGetObjectResponseRequest, WriteGetObjectResponseRequestFilterSensitiveLog } from "../models/models_1";
import { de_WriteGetObjectResponseCommand, se_WriteGetObjectResponseCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
export type WriteGetObjectResponseCommandInputType = Omit<WriteGetObjectResponseRequest, "Body"> & {
  /**
   * For *`WriteGetObjectResponseRequest["Body"]`*, see {@link WriteGetObjectResponseRequest.Body}.
   */
  Body?: WriteGetObjectResponseRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * @public
 *
 * The input for {@link WriteGetObjectResponseCommand}.
 */
export interface WriteGetObjectResponseCommandInput extends WriteGetObjectResponseCommandInputType {}
/**
 * @public
 *
 * The output of {@link WriteGetObjectResponseCommand}.
 */
export interface WriteGetObjectResponseCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Passes transformed objects to a <code>GetObject</code> operation when using Object Lambda access points. For
 *          information about Object Lambda access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with
 *             Object Lambda access points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This operation supports metadata that can be returned by <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>, in addition to
 *             <code>RequestRoute</code>, <code>RequestToken</code>, <code>StatusCode</code>,
 *             <code>ErrorCode</code>, and <code>ErrorMessage</code>. The <code>GetObject</code>
 *          response metadata is supported so that the <code>WriteGetObjectResponse</code> caller,
 *          typically an Lambda function, can provide the same metadata when it internally invokes
 *             <code>GetObject</code>. When <code>WriteGetObjectResponse</code> is called by a
 *          customer-owned Lambda function, the metadata returned to the end user
 *             <code>GetObject</code> call might differ from what Amazon S3 would normally return.</p>
 *          <p>You can include any number of metadata headers. When including a metadata header, it
 *          should be prefaced with <code>x-amz-meta</code>. For example,
 *             <code>x-amz-meta-my-custom-header: MyCustomValue</code>. The primary use case for this
 *          is to forward <code>GetObject</code> metadata.</p>
 *          <p>Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to
 *          detect and redact personally identifiable information (PII) and decompress S3 objects.
 *          These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and
 *          can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point.</p>
 *          <p>Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a
 *          natural language processing (NLP) service using machine learning to find insights and
 *          relationships in text. It automatically detects personally identifiable information (PII)
 *          such as names, addresses, dates, credit card numbers, and social security numbers from
 *          documents in your Amazon S3 bucket. </p>
 *          <p>Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural
 *          language processing (NLP) service using machine learning to find insights and relationships
 *          in text. It automatically redacts personally identifiable information (PII) such as names,
 *          addresses, dates, credit card numbers, and social security numbers from documents in your
 *          Amazon S3 bucket. </p>
 *          <p>Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is
 *          equipped to decompress objects stored in S3 in one of six compressed file formats including
 *          bzip2, gzip, snappy, zlib, zstandard and ZIP. </p>
 *          <p>For information on how to view and use these functions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-examples.html">Using Amazon Web Services built Lambda
 *             functions</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, WriteGetObjectResponseCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, WriteGetObjectResponseCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // WriteGetObjectResponseRequest
 *   RequestRoute: "STRING_VALUE", // required
 *   RequestToken: "STRING_VALUE", // required
 *   Body: "STREAMING_BLOB_VALUE",
 *   StatusCode: Number("int"),
 *   ErrorCode: "STRING_VALUE",
 *   ErrorMessage: "STRING_VALUE",
 *   AcceptRanges: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentLength: Number("long"),
 *   ContentRange: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   DeleteMarker: true || false,
 *   ETag: "STRING_VALUE",
 *   Expires: new Date("TIMESTAMP"),
 *   Expiration: "STRING_VALUE",
 *   LastModified: new Date("TIMESTAMP"),
 *   MissingMeta: Number("int"),
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 *   ObjectLockLegalHoldStatus: "ON" || "OFF",
 *   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *   PartsCount: Number("int"),
 *   ReplicationStatus: "COMPLETE" || "PENDING" || "FAILED" || "REPLICA",
 *   RequestCharged: "requester",
 *   Restore: "STRING_VALUE",
 *   ServerSideEncryption: "AES256" || "aws:kms" || "aws:kms:dsse",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSEKMSKeyId: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 *   TagCount: Number("int"),
 *   VersionId: "STRING_VALUE",
 *   BucketKeyEnabled: true || false,
 * };
 * const command = new WriteGetObjectResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param WriteGetObjectResponseCommandInput - {@link WriteGetObjectResponseCommandInput}
 * @returns {@link WriteGetObjectResponseCommandOutput}
 * @see {@link WriteGetObjectResponseCommandInput} for command's `input` shape.
 * @see {@link WriteGetObjectResponseCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class WriteGetObjectResponseCommand extends $Command<
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseObjectLambdaEndpoint: { type: "staticContextParams", value: true },
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
  constructor(readonly input: WriteGetObjectResponseCommandInput) {
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
  ): Handler<WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, WriteGetObjectResponseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "WriteGetObjectResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WriteGetObjectResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: WriteGetObjectResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_WriteGetObjectResponseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WriteGetObjectResponseCommandOutput> {
    return de_WriteGetObjectResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
