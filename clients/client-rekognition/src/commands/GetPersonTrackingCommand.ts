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

import { GetPersonTrackingRequest, GetPersonTrackingResponse } from "../models/models_0";
import { de_GetPersonTrackingCommand, se_GetPersonTrackingCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link GetPersonTrackingCommand}.
 */
export interface GetPersonTrackingCommandInput extends GetPersonTrackingRequest {}
/**
 * @public
 *
 * The output of {@link GetPersonTrackingCommand}.
 */
export interface GetPersonTrackingCommandOutput extends GetPersonTrackingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the path tracking results of a Amazon Rekognition Video analysis started by <a>StartPersonTracking</a>.</p>
 *          <p>The person path tracking operation is started by a call to <code>StartPersonTracking</code>
 *      which returns a job identifier (<code>JobId</code>). When the operation finishes, Amazon Rekognition Video publishes a completion status to
 *      the Amazon Simple Notification Service topic registered in the initial call to <code>StartPersonTracking</code>.</p>
 *          <p>To get the results of the person path tracking operation, first check
 *        that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      If so, call  <a>GetPersonTracking</a> and pass the job identifier
 *      (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
 *          <p>
 *             <code>GetPersonTracking</code> returns an array, <code>Persons</code>, of tracked persons and the time(s) their
 *        paths were tracked in the video. </p>
 *          <note>
 *             <p>
 *                <code>GetPersonTracking</code> only returns the default
 *        facial attributes (<code>BoundingBox</code>, <code>Confidence</code>,
 *        <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed
 *        in the <code>Face</code> object of the following response syntax are not returned. </p>
 *             <p>For more information, see FaceDetail in the Amazon Rekognition Developer Guide.</p>
 *          </note>
 *          <p>By default, the array is sorted by the time(s) a person's path is tracked in the video.
 *       You can sort by tracked persons by specifying <code>INDEX</code> for the <code>SortBy</code> input parameter.</p>
 *          <p>Use the <code>MaxResults</code> parameter to limit the number of items returned. If there are more results than
 *    specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *    of results. To get the next page of results, call <code>GetPersonTracking</code> and populate the <code>NextToken</code> request parameter with the token
 *     value returned from the previous call to <code>GetPersonTracking</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetPersonTrackingRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "INDEX" || "TIMESTAMP",
 * };
 * const command = new GetPersonTrackingCommand(input);
 * const response = await client.send(command);
 * // { // GetPersonTrackingResponse
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
 * //   Persons: [ // PersonDetections
 * //     { // PersonDetection
 * //       Timestamp: Number("long"),
 * //       Person: { // PersonDetail
 * //         Index: Number("long"),
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Face: { // FaceDetail
 * //           BoundingBox: {
 * //             Width: Number("float"),
 * //             Height: Number("float"),
 * //             Left: Number("float"),
 * //             Top: Number("float"),
 * //           },
 * //           AgeRange: { // AgeRange
 * //             Low: Number("int"),
 * //             High: Number("int"),
 * //           },
 * //           Smile: { // Smile
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           Eyeglasses: { // Eyeglasses
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           Sunglasses: { // Sunglasses
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           Gender: { // Gender
 * //             Value: "Male" || "Female",
 * //             Confidence: Number("float"),
 * //           },
 * //           Beard: { // Beard
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           Mustache: { // Mustache
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           EyesOpen: { // EyeOpen
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           MouthOpen: { // MouthOpen
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
 * //           Emotions: [ // Emotions
 * //             { // Emotion
 * //               Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //               Confidence: Number("float"),
 * //             },
 * //           ],
 * //           Landmarks: [ // Landmarks
 * //             { // Landmark
 * //               Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //               X: Number("float"),
 * //               Y: Number("float"),
 * //             },
 * //           ],
 * //           Pose: { // Pose
 * //             Roll: Number("float"),
 * //             Yaw: Number("float"),
 * //             Pitch: Number("float"),
 * //           },
 * //           Quality: { // ImageQuality
 * //             Brightness: Number("float"),
 * //             Sharpness: Number("float"),
 * //           },
 * //           Confidence: Number("float"),
 * //           FaceOccluded: { // FaceOccluded
 * //             Value: true || false,
 * //             Confidence: Number("float"),
 * //           },
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
 * @param GetPersonTrackingCommandInput - {@link GetPersonTrackingCommandInput}
 * @returns {@link GetPersonTrackingCommandOutput}
 * @see {@link GetPersonTrackingCommandInput} for command's `input` shape.
 * @see {@link GetPersonTrackingCommandOutput} for command's `response` shape.
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
export class GetPersonTrackingCommand extends $Command<
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
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
  constructor(readonly input: GetPersonTrackingCommandInput) {
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
  ): Handler<GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPersonTrackingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetPersonTrackingCommand";
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
  private serialize(input: GetPersonTrackingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPersonTrackingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPersonTrackingCommandOutput> {
    return de_GetPersonTrackingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
