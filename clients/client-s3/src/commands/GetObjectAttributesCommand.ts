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
  GetObjectAttributesOutput,
  GetObjectAttributesOutputFilterSensitiveLog,
  GetObjectAttributesRequest,
  GetObjectAttributesRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetObjectAttributesCommand,
  serializeAws_restXmlGetObjectAttributesCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface GetObjectAttributesCommandInput extends GetObjectAttributesRequest {}
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesOutput, __MetadataBearer {}

/**
 * <p>Retrieves all the metadata from an object without returning the object itself. This
 *          action is useful if you're interested only in an object's metadata. To use
 *             <code>GetObjectAttributes</code>, you must have READ access to the object.</p>
 *          <p>
 *             <code>GetObjectAttributes</code> combines the functionality of
 *             <code>GetObjectAcl</code>, <code>GetObjectLegalHold</code>,
 *             <code>GetObjectLockConfiguration</code>, <code>GetObjectRetention</code>,
 *             <code>GetObjectTagging</code>, <code>HeadObject</code>, and <code>ListParts</code>. All
 *          of the data returned with each of those individual calls can be returned with a single call
 *          to <code>GetObjectAttributes</code>.</p>
 *          <p>If you encrypt an object by using server-side encryption with customer-provided
 *             encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the
 *             metadata from the object, you must use the following headers:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>x-amz-server-side-encryption-customer-algorithm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>x-amz-server-side-encryption-customer-key</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>x-amz-server-side-encryption-customer-key-MD5</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
 *             (Using Customer-Provided Encryption Keys)</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Encryption request headers, such as
 *                      <code>x-amz-server-side-encryption</code>, should not be sent for GET requests
 *                   if your object uses server-side encryption with Amazon Web Services KMS keys stored in Amazon Web Services Key
 *                   Management Service (SSE-KMS) or server-side encryption with Amazon S3 managed
 *                   encryption keys (SSE-S3). If your object does use these types of keys, you'll get
 *                   an HTTP <code>400 Bad Request</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                     The last modified property in this case is the creation date of the object.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>Consider the following when using request headers:</p>
 *          <ul>
 *             <li>
 *                <p> If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code>
 *                headers are present in the request as follows, then Amazon S3 returns the HTTP
 *                   status code <code>200 OK</code> and the data requested:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>If-Match</code> condition evaluates to <code>true</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>If-Unmodified-Since</code> condition evaluates to
 *                         <code>false</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code>
 *                headers are present in the request as follows, then Amazon S3 returns the HTTP status code
 *                    <code>304 Not Modified</code>:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>If-None-Match</code> condition evaluates to
 *                      <code>false</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>If-Modified-Since</code> condition evaluates to
 *                         <code>true</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The permissions that you need to use this operation depend on whether the bucket is
 *          versioned. If the bucket is versioned, you need both the <code>s3:GetObjectVersion</code>
 *          and <code>s3:GetObjectVersionAttributes</code> permissions for this operation. If the
 *          bucket is not versioned, you need the <code>s3:GetObject</code> and
 *             <code>s3:GetObjectAttributes</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying
 *             Permissions in a Policy</a> in the <i>Amazon S3 User Guide</i>. If the
 *          object that you request does not exist, the error Amazon S3 returns depends on whether you also
 *          have the <code>s3:ListBucket</code> permission.</p>
 *          <ul>
 *             <li>
 *                <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3
 *                returns an HTTP status code <code>404 Not Found</code> ("no such key") error.</p>
 *             </li>
 *             <li>
 *                <p>If you don't have the <code>s3:ListBucket</code> permission, Amazon S3 returns an
 *                HTTP status code <code>403 Forbidden</code> ("access denied") error.</p>
 *             </li>
 *          </ul>
 *          <p>The following actions are related to <code>GetObjectAttributes</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html">GetObjectLegalHold</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html">GetObjectLockConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html">GetObjectRetention</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html">HeadObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAttributesCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAttributesCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class GetObjectAttributesCommand extends $Command<
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
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

  constructor(readonly input: GetObjectAttributesCommandInput) {
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
  ): Handler<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetObjectAttributesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetObjectAttributesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetObjectAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectAttributesCommandOutput> {
    return deserializeAws_restXmlGetObjectAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
