// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCelebrityRecognitionRequest, GetCelebrityRecognitionResponse } from "../models/models_0";
import { GetCelebrityRecognition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCelebrityRecognitionCommand}.
 */
export interface GetCelebrityRecognitionCommandInput extends GetCelebrityRecognitionRequest {}
/**
 * @public
 *
 * The output of {@link GetCelebrityRecognitionCommand}.
 */
export interface GetCelebrityRecognitionCommandOutput extends GetCelebrityRecognitionResponse, __MetadataBearer {}

/**
 * Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by StartCelebrityRecognition.
 *
 * Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to StartCelebrityRecognition which returns a job identifier (`JobId`).
 *
 * When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to `StartCelebrityRecognition`. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call `GetCelebrityDetection` and pass the job identifier (`JobId`) from the initial call to `StartCelebrityDetection`.
 *
 * For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.
 *
 * `GetCelebrityRecognition` returns detected celebrities and the time(s) they are detected in an array (`Celebrities`) of CelebrityRecognition objects. Each `CelebrityRecognition` contains information about the celebrity in a CelebrityDetail object and the time, `Timestamp`, the celebrity was detected. This CelebrityDetail object stores information about the detected celebrity's face attributes, a face bounding box, known gender, the celebrity's name, and a confidence estimate.
 *
 * > **Note:** `GetCelebrityRecognition` only returns the default facial attributes (`BoundingBox`, `Confidence`, `Landmarks`, `Pose`, and `Quality`). The `BoundingBox` field only applies to the detected face instance. The other facial attributes listed in the `Face` object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide.
 *
 * By default, the `Celebrities` array is sorted by time (milliseconds from the start of the video). You can also sort the array by celebrity by specifying the value `ID` in the `SortBy` input parameter.
 *
 * The `CelebrityDetail` object includes the celebrity identifer and additional information urls. If you don't store the additional information urls, you can get them later by calling GetCelebrityInfo with the celebrity identifer.
 *
 * No information is returned for faces not recognized as celebrities.
 *
 * Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetCelebrityDetection` and populate the `NextToken` request parameter with the token value returned from the previous call to `GetCelebrityRecognition`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetCelebrityRecognitionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetCelebrityRecognitionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // GetCelebrityRecognitionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "ID" || "TIMESTAMP",
 * };
 * const command = new GetCelebrityRecognitionCommand(input);
 * const response = await client.send(command);
 * // { // GetCelebrityRecognitionResponse
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
 * //   Celebrities: [ // CelebrityRecognitions
 * //     { // CelebrityRecognition
 * //       Timestamp: Number("long"),
 * //       Celebrity: { // CelebrityDetail
 * //         Urls: [ // Urls
 * //           "STRING_VALUE",
 * //         ],
 * //         Name: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         Confidence: Number("float"),
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
 * //         KnownGender: { // KnownGender
 * //           Type: "Male" || "Female" || "Nonbinary" || "Unlisted",
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
 * @param GetCelebrityRecognitionCommandInput - {@link GetCelebrityRecognitionCommandInput}
 * @returns {@link GetCelebrityRecognitionCommandOutput}
 * @see {@link GetCelebrityRecognitionCommandInput} for command's `input` shape.
 * @see {@link GetCelebrityRecognitionCommandOutput} for command's `response` shape.
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
export class GetCelebrityRecognitionCommand extends command<GetCelebrityRecognitionCommandInput, GetCelebrityRecognitionCommandOutput>(
  _ep0,
  _mw0,
  "GetCelebrityRecognition",
  GetCelebrityRecognition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCelebrityRecognitionRequest;
      output: GetCelebrityRecognitionResponse;
    };
    sdk: {
      input: GetCelebrityRecognitionCommandInput;
      output: GetCelebrityRecognitionCommandOutput;
    };
  };
}
