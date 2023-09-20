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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetFaceDetectionRequest, GetFaceDetectionResponse } from "../models/models_0";
import { de_GetFaceDetectionCommand, se_GetFaceDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFaceDetectionCommand}.
 */
export interface GetFaceDetectionCommandInput extends GetFaceDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetFaceDetectionCommand}.
 */
export interface GetFaceDetectionCommandOutput extends GetFaceDetectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p>
 *          <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a>
 *      which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to
 *      the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results
 *      of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      If so, call  <a>GetFaceDetection</a> and pass the job identifier
 *      (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p>
 *          <p>
 *             <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p>
 *          <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than
 *    specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *    of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token
 *     value returned from the previous call to <code>GetFaceDetection</code>.</p>
 *          <p>Note that for the <code>GetFaceDetection</code> operation, the returned values for
 *         <code>FaceOccluded</code> and <code>EyeDirection</code> will always be "null".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetFaceDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetFaceDetectionCommand(input);
 * const response = await client.send(command);
 * // { // GetFaceDetectionResponse
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   VideoMetadata: { // VideoMetadata
 * //     Codec: "STRING_VALUE",
 * //     DurationMillis: Number("long"),
 * //     Format: "STRING_VALUE",
 * //     FrameRate: Number("float"),
 * //     FrameHeight: Number("long"),
 * //     FrameWidth: Number("long"),
 * //     ColorRange: "FULL" || "LIMITED",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * //   Faces: [ // FaceDetections
 * //     { // FaceDetection
 * //       Timestamp: Number("long"),
 * //       Face: { // FaceDetail
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         AgeRange: { // AgeRange
 * //           Low: Number("int"),
 * //           High: Number("int"),
 * //         },
 * //         Smile: { // Smile
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Eyeglasses: { // Eyeglasses
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Sunglasses: { // Sunglasses
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Gender: { // Gender
 * //           Value: "Male" || "Female",
 * //           Confidence: Number("float"),
 * //         },
 * //         Beard: { // Beard
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Mustache: { // Mustache
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyesOpen: { // EyeOpen
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         MouthOpen: { // MouthOpen
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Emotions: [ // Emotions
 * //           { // Emotion
 * //             Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         Landmarks: [ // Landmarks
 * //           { // Landmark
 * //             Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //         Pose: { // Pose
 * //           Roll: Number("float"),
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //         },
 * //         Quality: { // ImageQuality
 * //           Brightness: Number("float"),
 * //           Sharpness: Number("float"),
 * //         },
 * //         Confidence: Number("float"),
 * //         FaceOccluded: { // FaceOccluded
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyeDirection: { // EyeDirection
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //           Confidence: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   JobId: "STRING_VALUE",
 * //   Video: { // Video
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   JobTag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFaceDetectionCommandInput - {@link GetFaceDetectionCommandInput}
 * @returns {@link GetFaceDetectionCommandOutput}
 * @see {@link GetFaceDetectionCommandInput} for command's `input` shape.
 * @see {@link GetFaceDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 */
export class GetFaceDetectionCommand extends $Command<
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
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
  constructor(readonly input: GetFaceDetectionCommandInput) {
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
  ): Handler<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFaceDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetFaceDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "GetFaceDetection",
      },
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
  private serialize(input: GetFaceDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFaceDetectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFaceDetectionCommandOutput> {
    return de_GetFaceDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
