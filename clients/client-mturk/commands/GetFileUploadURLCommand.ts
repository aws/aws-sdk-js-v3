import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetFileUploadURLRequest, GetFileUploadURLResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetFileUploadURLCommand,
  serializeAws_json1_1GetFileUploadURLCommand,
} from "../protocols/Aws_json1_1";
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

export type GetFileUploadURLCommandInput = GetFileUploadURLRequest;
export type GetFileUploadURLCommandOutput = GetFileUploadURLResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>GetFileUploadURL</code>
 *             operation generates and returns a temporary URL. You use the
 *             temporary URL to retrieve a file uploaded by a Worker as an answer to
 *             a FileUploadAnswer question for a HIT. The temporary URL is generated
 *             the instant the GetFileUploadURL operation is called, and is valid
 *             for 60 seconds. You can get a temporary file upload URL any time
 *             until the HIT is disposed. After the HIT is disposed, any uploaded
 *             files are deleted, and cannot be retrieved.
 *
 *             Pending Deprecation on December 12, 2017. The Answer Specification
 *             structure will no longer  support the <code>FileUploadAnswer</code>
 *             element to be used for the QuestionForm data structure.
 *             Instead, we recommend that Requesters who want to create HITs asking
 *             Workers to upload files to use Amazon S3.
 *
 *         </p>
 */
export class GetFileUploadURLCommand extends $Command<
  GetFileUploadURLCommandInput,
  GetFileUploadURLCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFileUploadURLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetFileUploadURLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFileUploadURLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFileUploadURLResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFileUploadURLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFileUploadURLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFileUploadURLCommandOutput> {
    return deserializeAws_json1_1GetFileUploadURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
