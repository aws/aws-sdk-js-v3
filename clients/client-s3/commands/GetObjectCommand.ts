import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectOutput, GetObjectRequest } from "../models/models_0";
import { deserializeAws_restXmlGetObjectCommand, serializeAws_restXmlGetObjectCommand } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getSsecPlugin } from "@aws-sdk/middleware-ssec";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetObjectCommandInput = GetObjectRequest;
export type GetObjectCommandOutput = GetObjectOutput & __MetadataBearer;

/**
 * <p>Retrieves objects from Amazon S3. To use <code>GET</code>, you must have <code>READ</code>
 *          access to the object. If you grant <code>READ</code> access to the anonymous user, you can
 *          return the object without using an authorization header.</p>
 *
 *          <p>An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer
 *          file system. You can, however, create a logical hierarchy by using object key names that
 *          imply a folder structure. For example, instead of naming an object <code>sample.jpg</code>,
 *          you can name it <code>photos/2006/February/sample.jpg</code>.</p>
 *
 *          <p>To get an object from such a logical hierarchy, specify the full key name for the object
 *          in the <code>GET</code> operation. For a virtual hosted-style request example, if you have
 *          the object <code>photos/2006/February/sample.jpg</code>, specify the resource as
 *             <code>/photos/2006/February/sample.jpg</code>. For a path-style request example, if you
 *          have the object <code>photos/2006/February/sample.jpg</code> in the bucket named
 *             <code>examplebucket</code>, specify the resource as
 *             <code>/examplebucket/photos/2006/February/sample.jpg</code>. For more information about
 *          request types, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingSpecifyBucket">HTTP Host Header Bucket Specification</a>.</p>
 *
 *          <p>To distribute large files to many people, you can save bandwidth costs by using
 *          BitTorrent. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3Torrent.html">Amazon S3
 *             Torrent</a>. For more information about returning the ACL of an object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>.</p>
 *
 *          <p>If the object you are retrieving is stored in the S3 Glacier or
 *          S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or
 *          S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a
 *          copy using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. Otherwise, this operation returns an
 *             <code>InvalidObjectStateError</code> error. For information about restoring archived
 *          objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived
 *             Objects</a>.</p>
 *
 *          <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>, should not
 *          be sent for GET requests if your object uses server-side encryption with CMKs stored in AWS
 *          KMS (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your
 *          object does use these types of keys, you’ll get an HTTP 400 BadRequest error.</p>
 *          <p>If you encrypt an object by using server-side encryption with customer-provided
 *          encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object,
 *          you must use the following headers:</p>
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
 *          <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using
 *             Customer-Provided Encryption Keys)</a>.</p>
 *
 *          <p>Assuming you have permission to read object tags (permission for the
 *             <code>s3:GetObjectVersionTagging</code> action), the response also returns the
 *             <code>x-amz-tagging-count</code> header that provides the count of number of tags
 *          associated with the object. You can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> to retrieve
 *          the tag set associated with an object.</p>
 *
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>You need the <code>s3:GetObject</code> permission for this operation. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions
 *             in a Policy</a>. If the object you request does not exist, the error Amazon S3 returns
 *          depends on whether you also have the <code>s3:ListBucket</code> permission.</p>
 *          <ul>
 *             <li>
 *                <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 will
 *                return an HTTP status code 404 ("no such key") error.</p>
 *             </li>
 *             <li>
 *                <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 will return an
 *                HTTP status code 403 ("access denied") error.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>By default, the GET operation returns the current version of an object. To return a
 *          different version, use the <code>versionId</code> subresource.</p>
 *
 *          <note>
 *             <p>If the current version of the object is a delete marker, Amazon S3 behaves as if the
 *             object was deleted and includes <code>x-amz-delete-marker: true</code> in the
 *             response.</p>
 *          </note>
 *
 *
 *          <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a>. </p>
 *
 *          <p>
 *             <b>Overriding Response Header Values</b>
 *          </p>
 *          <p>There are times when you want to override certain response header values in a GET
 *          response. For example, you might override the Content-Disposition response header value in
 *          your GET request.</p>
 *
 *          <p>You can override values for a set of response headers using the following query
 *          parameters. These response header values are sent only on a successful request, that is,
 *          when status code 200 OK is returned. The set of headers you can override using these
 *          parameters is a subset of the headers that Amazon S3 accepts when you create an object. The
 *          response headers that you can override for the GET response are <code>Content-Type</code>,
 *             <code>Content-Language</code>, <code>Expires</code>, <code>Cache-Control</code>,
 *             <code>Content-Disposition</code>, and <code>Content-Encoding</code>. To override these
 *          header values in the GET response, you use the following request parameters.</p>
 *
 *          <note>
 *             <p>You must sign the request, either using an Authorization header or a presigned URL,
 *             when using these parameters. They cannot be used with an unsigned (anonymous)
 *             request.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>response-content-type</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-language</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-expires</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-cache-control</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-disposition</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-encoding</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Additional Considerations about Request Headers</b>
 *          </p>
 *
 *          <p>If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are
 *          present in the request as follows: <code>If-Match</code> condition evaluates to
 *             <code>true</code>, and; <code>If-Unmodified-Since</code> condition evaluates to
 *             <code>false</code>; then, S3 returns 200 OK and the data requested. </p>
 *
 *          <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are
 *          present in the request as follows:<code> If-None-Match</code> condition evaluates to
 *             <code>false</code>, and; <code>If-Modified-Since</code> condition evaluates to
 *             <code>true</code>; then, S3 returns 304 Not Modified response code.</p>
 *
 *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
 *
 *          <p>The following operations are related to <code>GetObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetObjectCommand extends $Command<GetObjectCommandInput, GetObjectCommandOutput, S3ClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetObjectCommandInput) {
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
  ): Handler<GetObjectCommandInput, GetObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetObjectOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectCommandOutput> {
    return deserializeAws_restXmlGetObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
