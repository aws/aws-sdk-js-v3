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
  DetectCustomLabelsRequest,
  DetectCustomLabelsRequestFilterSensitiveLog,
  DetectCustomLabelsResponse,
  DetectCustomLabelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectCustomLabelsCommand,
  serializeAws_json1_1DetectCustomLabelsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DetectCustomLabelsCommandInput extends DetectCustomLabelsRequest {}
export interface DetectCustomLabelsCommandOutput extends DetectCustomLabelsResponse, __MetadataBearer {}

/**
 * <p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p>
 *          <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input
 *       parameter. </p>
 *          <p>You pass the input image as base64-encoded image bytes or as a reference to an image in
 *          an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing
 *          image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p> For each object that the model version detects on an image, the API returns a
 *          (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>).
 *          Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level
 *          of confidence that the image contains the object (<code>Confidence</code>), and
 *          object location information, if it exists,  for the label on the image (<code>Geometry</code>). </p>
 *          <p>To filter labels that are returned, specify a value for <code>MinConfidence</code>.
 *          <code>DetectCustomLabelsLabels</code> only returns labels with a confidence that's higher than
 *          the specified value.
 *
 *          The value of <code>MinConfidence</code> maps to the assumed threshold values
 *          created during training. For more information, see <i>Assumed threshold</i>
 *          in the Amazon Rekognition Custom Labels Developer Guide.
 *          Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of
 *          <code>MinConfidence</code> normalizes the threshold value to a percentage value (0-100). Confidence
 *          responses from <code>DetectCustomLabels</code> are also returned as a percentage.
 *          You can use <code>MinConfidence</code> to change the precision and recall or your model.
 *          For more information, see
 *          <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>
 *          <p>If you don't specify a value for <code>MinConfidence</code>,  <code>DetectCustomLabels</code>
 *       returns labels based on the assumed threshold of each label.</p>
 *          <p>This is a stateless API operation. That is, the operation does not persist any
 *          data.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:DetectCustomLabels</code> action. </p>
 *          <p>For more information, see
 *       <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectCustomLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectCustomLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DetectCustomLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectCustomLabelsCommandInput} for command's `input` shape.
 * @see {@link DetectCustomLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DetectCustomLabelsCommand extends $Command<
  DetectCustomLabelsCommandInput,
  DetectCustomLabelsCommandOutput,
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

  constructor(readonly input: DetectCustomLabelsCommandInput) {
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
  ): Handler<DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectCustomLabelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectCustomLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectCustomLabelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectCustomLabelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectCustomLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectCustomLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectCustomLabelsCommandOutput> {
    return deserializeAws_json1_1DetectCustomLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
