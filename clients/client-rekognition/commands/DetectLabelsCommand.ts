import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectLabelsRequest, DetectLabelsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DetectLabelsCommand,
  serializeAws_json1_1DetectLabelsCommand,
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

export type DetectLabelsCommandInput = DetectLabelsRequest;
export type DetectLabelsCommandOutput = DetectLabelsResponse & __MetadataBearer;

/**
 * <p>Detects instances of real-world entities within an image (JPEG or PNG)
 *        provided as input. This includes objects like flower, tree, and table; events like
 *        wedding, graduation, and birthday party; and concepts like landscape, evening, and nature.
 *      </p>
 *
 *          <p>For an example, see Analyzing Images Stored in an Amazon S3 Bucket in the Amazon Rekognition Developer Guide.</p>
 *          <note>
 *
 *             <p>
 *                <code>DetectLabels</code> does not support the detection of activities. However, activity detection
 *         is supported for label detection in videos. For more information, see StartLabelDetection in the Amazon Rekognition Developer Guide.</p>
 *          </note>
 *
 *          <p>You pass the input image as base64-encoded image bytes or as a reference to an image in
 *       an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p> For each object, scene, and concept the API returns one or more labels. Each label
 *       provides the object name, and the level of confidence that the image contains the object. For
 *       example, suppose the input image has a lighthouse, the sea, and a rock. The response includes
 *       all three labels, one for each object. </p>
 *
 *          <p>
 *             <code>{Name: lighthouse, Confidence: 98.4629}</code>
 *          </p>
 *          <p>
 *             <code>{Name: rock,Confidence: 79.2097}</code>
 *          </p>
 *          <p>
 *             <code> {Name: sea,Confidence: 75.061}</code>
 *          </p>
 *          <p>In the preceding example, the operation returns one label for each of the three
 *       objects. The operation can also return multiple labels for the same object in the image. For
 *       example, if the input image shows a flower (for example, a tulip), the operation might return
 *       the following three labels. </p>
 *          <p>
 *             <code>{Name: flower,Confidence: 99.0562}</code>
 *          </p>
 *          <p>
 *             <code>{Name: plant,Confidence: 99.0562}</code>
 *          </p>
 *          <p>
 *             <code>{Name: tulip,Confidence: 99.0562}</code>
 *          </p>
 *
 *          <p>In this example, the detection algorithm more precisely identifies the flower as a
 *       tulip.</p>
 *          <p>In response, the API returns an array of labels. In addition, the response also
 *       includes the orientation correction. Optionally, you can specify <code>MinConfidence</code> to
 *       control the confidence threshold for the labels returned. The default is 55%. You can also add
 *       the <code>MaxLabels</code> parameter to limit the number of labels returned. </p>
 *          <note>
 *             <p>If the object detected is a person, the operation doesn't provide the same facial
 *         details that the <a>DetectFaces</a> operation provides.</p>
 *          </note>
 *          <p>
 *             <code>DetectLabels</code> returns bounding boxes for instances of common object labels in an array of
 *       <a>Instance</a> objects. An <code>Instance</code> object contains a
 *       <a>BoundingBox</a> object, for the location of the label on the image. It also includes
 *       the confidence by which the bounding box was detected.</p>
 *          <p>
 *             <code>DetectLabels</code> also returns a hierarchical taxonomy of detected labels. For example,
 *       a detected car might be assigned the label <i>car</i>. The label <i>car</i>
 *       has two parent labels: <i>Vehicle</i> (its parent) and <i>Transportation</i> (its
 *       grandparent).
 *       The response returns the entire list of ancestors for a label. Each ancestor is a unique label in the response.
 *       In the previous example, <i>Car</i>, <i>Vehicle</i>, and <i>Transportation</i>
 *       are returned as unique labels in the response.
 *       </p>
 *          <p>This is a stateless API operation. That is, the operation does not persist any
 *       data.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:DetectLabels</code> action. </p>
 */
export class DetectLabelsCommand extends $Command<
  DetectLabelsCommandInput,
  DetectLabelsCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectLabelsCommandInput) {
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
  ): Handler<DetectLabelsCommandInput, DetectLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectLabelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectLabelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectLabelsCommandOutput> {
    return deserializeAws_json1_1DetectLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
