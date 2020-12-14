import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetTextDetectionRequest, GetTextDetectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetTextDetectionCommand,
  serializeAws_json1_1GetTextDetectionCommand,
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

export type GetTextDetectionCommandInput = GetTextDetectionRequest;
export type GetTextDetectionCommandOutput = GetTextDetectionResponse & __MetadataBearer;

/**
 * <p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p>
 *          <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by
 *      calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>)
 *      When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service
 *      topic registered in the initial call to <code>StartTextDetection</code>. To get the results
 *      of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call
 *      of <code>StartLabelDetection</code>.</p>
 *          <p>
 *             <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by
 *        the time the text was detected, up to 50 words per frame of video.</p>
 *          <p>Each element of the array includes the detected text, the precentage confidence in the acuracy
 *        of the detected text, the time the text was detected, bounding box information for where the text
 *        was located, and unique identifiers for words and their lines.</p>
 *          <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than
 *      specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains
 *      a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code>
 *      and populate the <code>NextToken</code> request parameter with the token value returned from the previous
 *      call to <code>GetTextDetection</code>.</p>
 */
export class GetTextDetectionCommand extends $Command<
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTextDetectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTextDetectionCommandInput, GetTextDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetTextDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTextDetectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTextDetectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTextDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTextDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTextDetectionCommandOutput> {
    return deserializeAws_json1_1GetTextDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
