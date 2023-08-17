// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DetectTextRequest, DetectTextResponse } from "../models/models_0";
import { de_DetectTextCommand, se_DetectTextCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectTextCommand}.
 */
export interface DetectTextCommandInput extends DetectTextRequest {}
/**
 * @public
 *
 * The output of {@link DetectTextCommand}.
 */
export interface DetectTextCommandOutput extends DetectTextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Detects text in the input image and converts it into machine-readable text.</p>
 *          <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an
 *       Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a
 *       reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not
 *       supported. The image must be either a .png or .jpeg formatted file. </p>
 *          <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each
 *         <code>TextDetection</code> element provides information about a single word or line of text
 *       that was detected in the image. </p>
 *          <p>A word is one or more script characters that are not separated by spaces.
 *         <code>DetectText</code> can detect up to 100 words in an image.</p>
 *          <p>A line is a string of equally spaced words. A line isn't necessarily a complete
 *       sentence. For example, a driver's license number is detected as a line. A line ends when there
 *       is no aligned text after it. Also, a line ends when there is a large gap between words,
 *       relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition
 *       may detect multiple lines in text aligned in the same direction. Periods don't represent the
 *       end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation
 *       returns multiple lines.</p>
 *          <p>To determine whether a <code>TextDetection</code> element is a line of text or a word,
 *       use the <code>TextDetection</code> object <code>Type</code> field. </p>
 *          <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal
 *       axis.</p>
 *          <p>For more information, see Detecting text in the Amazon Rekognition Developer
 *       Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectTextCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectTextCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DetectTextRequest
 *   Image: { // Image
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   Filters: { // DetectTextFilters
 *     WordFilter: { // DetectionFilter
 *       MinConfidence: Number("float"),
 *       MinBoundingBoxHeight: Number("float"),
 *       MinBoundingBoxWidth: Number("float"),
 *     },
 *     RegionsOfInterest: [ // RegionsOfInterest
 *       { // RegionOfInterest
 *         BoundingBox: { // BoundingBox
 *           Width: Number("float"),
 *           Height: Number("float"),
 *           Left: Number("float"),
 *           Top: Number("float"),
 *         },
 *         Polygon: [ // Polygon
 *           { // Point
 *             X: Number("float"),
 *             Y: Number("float"),
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new DetectTextCommand(input);
 * const response = await client.send(command);
 * // { // DetectTextResponse
 * //   TextDetections: [ // TextDetectionList
 * //     { // TextDetection
 * //       DetectedText: "STRING_VALUE",
 * //       Type: "LINE" || "WORD",
 * //       Id: Number("int"),
 * //       ParentId: Number("int"),
 * //       Confidence: Number("float"),
 * //       Geometry: { // Geometry
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Polygon: [ // Polygon
 * //           { // Point
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   TextModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetectTextCommandInput - {@link DetectTextCommandInput}
 * @returns {@link DetectTextCommandOutput}
 * @see {@link DetectTextCommandInput} for command's `input` shape.
 * @see {@link DetectTextCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *  <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *  <p>The provided image format is not supported. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 */
export class DetectTextCommand extends $Command<
  DetectTextCommandInput,
  DetectTextCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(getEndpointPlugin(configuration, DetectTextCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DetectTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectTextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectTextCommandOutput> {
    return de_DetectTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
