// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
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
  DetectLabelsRequest,
  DetectLabelsRequestFilterSensitiveLog,
  DetectLabelsResponse,
  DetectLabelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectLabelsCommand,
  serializeAws_json1_1DetectLabelsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DetectLabelsCommandInput extends DetectLabelsRequest {}
export interface DetectLabelsCommandOutput extends DetectLabelsResponse, __MetadataBearer {}

/**
 * <p>Detects instances of real-world entities within an image (JPEG or PNG) provided as
 *       input. This includes objects like flower, tree, and table; events like wedding, graduation,
 *       and birthday party; and concepts like landscape, evening, and nature. </p>
 *          <p>For an example, see Analyzing images stored in an Amazon S3 bucket in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>You pass the input image as base64-encoded image bytes or as a reference to an image in
 *       an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p>
 *             <b>Optional Parameters</b>
 *          </p>
 *          <p>You can specify one or both of the <code>GENERAL_LABELS</code> and
 *         <code>IMAGE_PROPERTIES</code> feature types when calling the DetectLabels API. Including
 *         <code>GENERAL_LABELS</code> will ensure the response includes the labels detected in the
 *       input image, while including <code>IMAGE_PROPERTIES </code>will ensure the response includes
 *       information about the image quality and color.</p>
 *          <p>When using <code>GENERAL_LABELS</code> and/or <code>IMAGE_PROPERTIES</code> you can
 *       provide filtering criteria to the Settings parameter. You can filter with sets of individual
 *       labels or with label categories. You can specify inclusive filters, exclusive filters, or a
 *       combination of inclusive and exclusive filters. For more information on filtering see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detect-labels-image.html">Detecting
 *         Labels in an Image</a>.</p>
 *          <p>You can specify <code>MinConfidence</code> to control the confidence threshold for the
 *       labels returned. The default is 55%. You can also add the <code>MaxLabels</code> parameter to
 *       limit the number of labels returned. The default and upper limit is 1000 labels.</p>
 *          <p>
 *             <b>Response Elements</b>
 *          </p>
 *          <p> For each object, scene, and concept the API returns one or more labels. The API
 *       returns the following types of information regarding labels:</p>
 *          <ul>
 *             <li>
 *                <p> Name - The name of the detected label. </p>
 *             </li>
 *             <li>
 *                <p> Confidence - The level of confidence in the label assigned to a detected object.
 *         </p>
 *             </li>
 *             <li>
 *                <p> Parents - The ancestor labels for a detected label. DetectLabels returns a
 *           hierarchical taxonomy of detected labels. For example, a detected car might be assigned
 *           the label car. The label car has two parent labels: Vehicle (its parent) and
 *           Transportation (its grandparent). The response includes the all ancestors for a label,
 *           where every ancestor is a unique label. In the previous example, Car, Vehicle, and
 *           Transportation are returned as unique labels in the response. </p>
 *             </li>
 *             <li>
 *                <p> Aliases - Possible Aliases for the label. </p>
 *             </li>
 *             <li>
 *                <p> Categories - The label categories that the detected label belongs to. </p>
 *             </li>
 *             <li>
 *                <p> BoundingBox — Bounding boxes are described for all instances of detected common
 *           object labels, returned in an array of Instance objects. An Instance object contains a
 *           BoundingBox object, describing the location of the label on the input image. It also
 *           includes the confidence for the accuracy of the detected bounding box. </p>
 *             </li>
 *          </ul>
 *          <p> The API returns the following information regarding the image, as part of the
 *       ImageProperties structure:</p>
 *          <ul>
 *             <li>
 *                <p>Quality - Information about the Sharpness, Brightness, and Contrast of the input
 *           image, scored between 0 to 100. Image quality is returned for the entire image, as well as
 *           the background and the foreground. </p>
 *             </li>
 *             <li>
 *                <p>Dominant Color - An array of the dominant colors in the image. </p>
 *             </li>
 *             <li>
 *                <p>Foreground - Information about the sharpness, brightness, and dominant colors of the input image’s foreground. </p>
 *             </li>
 *             <li>
 *                <p>Background - Information about the sharpness, brightness, and dominant colors of the input image’s background.</p>
 *             </li>
 *          </ul>
 *          <p>The list of returned labels will include at least one label for every detected object,
 *       along with information about that label. In the following example, suppose the input image has
 *       a lighthouse, the sea, and a rock. The response includes all three labels, one for each
 *       object, as well as the confidence in the label:</p>
 *          <p>
 *             <code>{Name: lighthouse, Confidence: 98.4629}</code>
 *          </p>
 *          <p>
 *             <code>{Name: rock,Confidence: 79.2097}</code>
 *          </p>
 *          <p>
 *             <code> {Name: sea,Confidence: 75.061}</code>
 *          </p>
 *          <p>The list of labels can include multiple labels for the same object. For example, if the
 *       input image shows a flower (for example, a tulip), the operation might return the following
 *       three labels. </p>
 *          <p>
 *             <code>{Name: flower,Confidence: 99.0562}</code>
 *          </p>
 *          <p>
 *             <code>{Name: plant,Confidence: 99.0562}</code>
 *          </p>
 *          <p>
 *             <code>{Name: tulip,Confidence: 99.0562}</code>
 *          </p>
 *          <p>In this example, the detection algorithm more precisely identifies the flower as a
 *       tulip.</p>
 *          <note>
 *             <p>If the object detected is a person, the operation doesn't provide the same facial
 *         details that the <a>DetectFaces</a> operation provides.</p>
 *          </note>
 *          <p>This is a stateless API operation. That is, the operation does not persist any
 *       data.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:DetectLabels</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DetectLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectLabelsCommandInput} for command's `input` shape.
 * @see {@link DetectLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DetectLabelsCommand extends $Command<
  DetectLabelsCommandInput,
  DetectLabelsCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, DetectLabelsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectLabelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectLabelsResponseFilterSensitiveLog,
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
