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
  HeadObjectOutput,
  HeadObjectOutputFilterSensitiveLog,
  HeadObjectRequest,
  HeadObjectRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_HeadObjectCommand, se_HeadObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link HeadObjectCommand}.
 */
export interface HeadObjectCommandInput extends HeadObjectRequest {}
/**
 * @public
 *
 * The output of {@link HeadObjectCommand}.
 */
export interface HeadObjectCommandOutput extends HeadObjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>The HEAD action retrieves metadata from an object without returning the object itself.
 *          This action is useful if you're only interested in an object's metadata. To use HEAD, you
 *          must have READ access to the object.</p>
 *          <p>A <code>HEAD</code> request has the same options as a <code>GET</code> action on an
 *          object. The response is identical to the <code>GET</code> response except that there is no
 *          response body. Because of this, if the <code>HEAD</code> request generates an error, it
 *          returns a generic <code>400 Bad Request</code>, <code>403 Forbidden</code> or <code>404 Not
 *             Found</code> code. It is not possible to retrieve the exact exception beyond these error
 *          codes.</p>
 *          <p>If you encrypt an object by using server-side encryption with customer-provided
 *          encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the
 *          metadata from the object, you must use the following headers:</p>
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
 *          <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
 *             (Using Customer-Provided Encryption Keys)</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>,
 *                   should not be sent for GET requests if your object uses server-side encryption
 *                   with KMS keys (SSE-KMS) or server-side encryption with Amazon S3–managed encryption
 *                   keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400
 *                   BadRequest error.</p>
 *                </li>
 *                <li>
 *                   <p> The last modified property in this case is the creation date of the
 *                   object.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>Request headers are limited to 8 KB in size. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonRequestHeaders.html">Common
 *             Request Headers</a>.</p>
 *          <p>Consider the following when using request headers:</p>
 *          <ul>
 *             <li>
 *                <p> Consideration 1 – If both of the <code>If-Match</code> and
 *                   <code>If-Unmodified-Since</code> headers are present in the request as
 *                follows:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>If-Match</code> condition evaluates to <code>true</code>, and;</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>If-Unmodified-Since</code> condition evaluates to
 *                      <code>false</code>;</p>
 *                   </li>
 *                </ul>
 *                <p>Then Amazon S3 returns <code>200 OK</code> and the data requested.</p>
 *             </li>
 *             <li>
 *                <p> Consideration 2 – If both of the <code>If-None-Match</code> and
 *                   <code>If-Modified-Since</code> headers are present in the request as
 *                follows:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>If-None-Match</code> condition evaluates to <code>false</code>,
 *                      and;</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>If-Modified-Since</code> condition evaluates to
 *                      <code>true</code>;</p>
 *                   </li>
 *                </ul>
 *                <p>Then Amazon S3 returns the <code>304 Not Modified</code> response code.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>You need the relevant read object (or version) permission for this operation. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a
 *             Policy</a>. If the object you request does not exist, the error Amazon S3 returns depends
 *          on whether you also have the s3:ListBucket permission.</p>
 *          <ul>
 *             <li>
 *                <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 returns
 *                an HTTP status code 404 ("no such key") error.</p>
 *             </li>
 *             <li>
 *                <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 returns an HTTP
 *                status code 403 ("access denied") error.</p>
 *             </li>
 *          </ul>
 *          <p>The following actions are related to <code>HeadObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // HeadObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 *   IfModifiedSince: new Date("TIMESTAMP"),
 *   IfNoneMatch: "STRING_VALUE",
 *   IfUnmodifiedSince: new Date("TIMESTAMP"),
 *   Key: "STRING_VALUE", // required
 *   Range: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   PartNumber: Number("int"),
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumMode: "ENABLED",
 * };
 * const command = new HeadObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param HeadObjectCommandInput - {@link HeadObjectCommandInput}
 * @returns {@link HeadObjectCommandOutput}
 * @see {@link HeadObjectCommandInput} for command's `input` shape.
 * @see {@link HeadObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *  <p>The specified content does not exist.</p>
 *
 *
 * @example To retrieve metadata of an object without returning the object itself
 * ```javascript
 * // The following example retrieves an object metadata.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new HeadObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AcceptRanges": "bytes",
 *   "ContentLength": "3191",
 *   "ContentType": "image/jpeg",
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "LastModified": "Thu, 15 Dec 2016 01:19:41 GMT",
 *   "Metadata": {},
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-retrieve-metadata-of-an-object-without-returning-the-object-itself-1481834820480
 * ```
 *
 */
export class HeadObjectCommand extends $Command<
  HeadObjectCommandInput,
  HeadObjectCommandOutput,
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
  constructor(readonly input: HeadObjectCommandInput) {
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
  ): Handler<HeadObjectCommandInput, HeadObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, HeadObjectCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "HeadObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HeadObjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: HeadObjectOutputFilterSensitiveLog,
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
  private serialize(input: HeadObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HeadObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HeadObjectCommandOutput> {
    return de_HeadObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
