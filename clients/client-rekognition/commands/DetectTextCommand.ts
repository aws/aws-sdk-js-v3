import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectTextRequest, DetectTextResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DetectTextCommand,
  serializeAws_json1_1DetectTextCommand,
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

export type DetectTextCommandInput = DetectTextRequest;
export type DetectTextCommandOutput = DetectTextResponse & __MetadataBearer;

/**
 * <p>Detects text in the input image and converts it into machine-readable text.</p>
 *          <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an
 *       Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a
 *       reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not
 *       supported. The image must be either a .png or .jpeg formatted file. </p>
 *          <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each
 *         <code>TextDetection</code> element provides information about a single word or line of text
 *       that was detected in the image. </p>
 *          <p>A word is one or more ISO basic latin script characters that are not separated by spaces.
 *         <code>DetectText</code> can detect up to 50 words in an image.</p>
 *          <p>A line is a string of equally spaced words. A line isn't necessarily a complete
 *       sentence. For example, a driver's license number is detected as a line. A line ends when there
 *       is no aligned text after it. Also, a line ends when there is a large gap between words,
 *       relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition
 *       may detect multiple lines in text aligned in the same direction. Periods don't represent the
 *       end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation
 *       returns multiple lines.</p>
 *          <p>To determine whether a <code>TextDetection</code> element is a line of text or a word,
 *       use the <code>TextDetection</code> object <code>Type</code> field. </p>
 *          <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal axis.</p>
 *
 *          <p>For more information, see DetectText in the Amazon Rekognition Developer Guide.</p>
 */
export class DetectTextCommand extends $Command<
  DetectTextCommandInput,
  DetectTextCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectTextCommandInput) {
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
  ): Handler<DetectTextCommandInput, DetectTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectTextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectTextCommandOutput> {
    return deserializeAws_json1_1DetectTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
