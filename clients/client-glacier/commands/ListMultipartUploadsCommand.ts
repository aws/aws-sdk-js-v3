import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListMultipartUploadsInput, ListMultipartUploadsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListMultipartUploadsCommand,
  serializeAws_restJson1ListMultipartUploadsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListMultipartUploadsCommandInput = ListMultipartUploadsInput;
export type ListMultipartUploadsCommandOutput = ListMultipartUploadsOutput & __MetadataBearer;

/**
 * <p>This operation lists in-progress multipart uploads for the specified vault. An
 *          in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted.
 *          The list returned in the List Multipart Upload response has no guaranteed order. </p>
 *
 *          <p>The List Multipart Uploads operation supports pagination. By default, this operation
 *          returns up to 50 multipart uploads in the response. You should always check the response
 *          for a <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of multipart uploads that
 *          begins at a specific upload, set the <code>marker</code> request parameter to the value you
 *          obtained from a previous List Multipart Upload request. You can also limit the number of
 *          uploads returned in the response by specifying the <code>limit</code> parameter in the
 *          request.</p>
 *
 *          <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads
 *          for a vault and does not require a multipart upload ID. The List Parts operation requires a
 *          multipart upload ID since parts are associated with a single upload.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads
 *          </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 */
export class ListMultipartUploadsCommand extends $Command<
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMultipartUploadsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListMultipartUploadsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMultipartUploadsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListMultipartUploadsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultipartUploadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMultipartUploadsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultipartUploadsCommandOutput> {
    return deserializeAws_restJson1ListMultipartUploadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
