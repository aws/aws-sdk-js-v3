import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListPartsOutput, ListPartsRequest } from "../models/models_0";
import { deserializeAws_restXmlListPartsCommand, serializeAws_restXmlListPartsCommand } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
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

export type ListPartsCommandInput = ListPartsRequest;
export type ListPartsCommandOutput = ListPartsOutput & __MetadataBearer;

/**
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
 *
 *          <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *             Upload</a>.</p>
 *
 *          <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload API and
 *          Permissions</a>.</p>
 *
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListPartsCommand extends $Command<ListPartsCommandInput, ListPartsCommandOutput, S3ClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

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
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListPartsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPartsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPartsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListPartsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartsCommandOutput> {
    return deserializeAws_restXmlListPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
