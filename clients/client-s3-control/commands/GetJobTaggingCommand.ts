import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetJobTaggingRequest, GetJobTaggingResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetJobTaggingCommand,
  serializeAws_restXmlGetJobTaggingCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type GetJobTaggingCommandInput = GetJobTaggingRequest;
export type GetJobTaggingCommandOutput = GetJobTaggingResult & __MetadataBearer;

/**
 * <p>Returns the tags on an S3 Batch Operations job. To use this operation, you must have
 *          permission to perform the <code>s3:GetJobTagging</code> action. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
 *             access and labeling jobs using tags</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetJobTaggingCommand extends $Command<
  GetJobTaggingCommandInput,
  GetJobTaggingCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobTaggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobTaggingCommandInput, GetJobTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetJobTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobTaggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobTaggingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetJobTaggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobTaggingCommandOutput> {
    return deserializeAws_restXmlGetJobTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
