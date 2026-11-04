// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPersonTrackingRequest, GetPersonTrackingResponse } from "../models/models_0";
import { GetPersonTracking$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** *End of support notice:* On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this [blog post](https://aws.amazon.com/blogs/machine-learning/transitioning-from-amazon-rekognition-people-pathing-exploring-other-alternatives/).
 *
 * Gets the path tracking results of a Amazon Rekognition Video analysis started by StartPersonTracking.
 *
 * The person path tracking operation is started by a call to `StartPersonTracking` which returns a job identifier (`JobId`). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to `StartPersonTracking`.
 *
 * To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetPersonTracking and pass the job identifier (`JobId`) from the initial call to `StartPersonTracking`.
 *
 * `GetPersonTracking` returns an array, `Persons`, of tracked persons and the time(s) their paths were tracked in the video.
 *
 * > **Note:**
 * >
 * > `GetPersonTracking` only returns the default facial attributes (`BoundingBox`, `Confidence`, `Landmarks`, `Pose`, and `Quality`). The other facial attributes listed in the `Face` object of the following response syntax are not returned.
 * >
 * > For more information, see FaceDetail in the Amazon Rekognition Developer Guide.
 *
 * By default, the array is sorted by the time(s) a person's path is tracked in the video. You can sort by tracked persons by specifying `INDEX` for the `SortBy` input parameter.
 *
 * Use the `MaxResults` parameter to limit the number of items returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetPersonTracking` and populate the `NextToken` request parameter with the token value returned from the previous call to `GetPersonTracking`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 * //           EyeDirection: { // EyeDirection
 * //             Yaw: Number("float"),
 * //             Pitch: Number("float"),
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * Pagination token in the request is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @public
 */
export class GetPersonTrackingCommand extends command<GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput>(
  _ep0,
  _mw0,
  "GetPersonTracking",
  GetPersonTracking$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPersonTrackingRequest;
      output: GetPersonTrackingResponse;
    };
    sdk: {
      input: GetPersonTrackingCommandInput;
      output: GetPersonTrackingCommandOutput;
    };
  };
}
