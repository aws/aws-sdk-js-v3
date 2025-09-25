// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFaceSearchRequest, GetFaceSearchResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetFaceSearch } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFaceSearchCommand}.
 */
export interface GetFaceSearchCommandInput extends GetFaceSearchRequest {}
/**
 * @public
 *
 * The output of {@link GetFaceSearchCommand}.
 */
export interface GetFaceSearchCommandOutput extends GetFaceSearchResponse, __MetadataBearer {}

/**
 * <p>Gets the face search results for Amazon Rekognition Video face search started by
 *       <a>StartFaceSearch</a>. The search returns faces in a collection that match the faces
 *     of persons detected in a video. It also includes the time(s) that faces are matched in the video.</p>
 *          <p>Face search in a video is an asynchronous operation. You start face search by calling
 *       to <a>StartFaceSearch</a> which returns a job identifier (<code>JobId</code>).
 *       When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service
 *       topic registered in the initial call to <code>StartFaceSearch</code>.
 *       To get the search results, first check that the status value published to the Amazon SNS
 *       topic is <code>SUCCEEDED</code>. If so, call  <code>GetFaceSearch</code> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>.</p>
 *          <p>For more information, see Searching Faces in a Collection in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>The search results are retured in an array, <code>Persons</code>, of
 *     <a>PersonMatch</a> objects. Each<code>PersonMatch</code> element contains
 *     details about the matching faces in the input collection, person information (facial attributes,
 *     bounding boxes, and person identifer)
 *     for the matched person, and the time the person was matched in the video.</p>
 *          <note>
 *             <p>
 *                <code>GetFaceSearch</code> only returns the default
 *         facial attributes (<code>BoundingBox</code>, <code>Confidence</code>,
 *         <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed
 *         in the <code>Face</code> object of the following response syntax are not returned. For more information,
 *         see FaceDetail in the Amazon Rekognition Developer Guide. </p>
 *          </note>
 *          <p>By default, the <code>Persons</code> array is sorted by the time, in milliseconds from the
 *     start of the video, persons are matched.
 *     You can also sort by persons by specifying <code>INDEX</code> for the <code>SORTBY</code> input
 *     parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceSearchCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceSearchCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // GetFaceSearchRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "INDEX" || "TIMESTAMP",
 * };
 * const command = new GetFaceSearchCommand(input);
 * const response = await client.send(command);
 * // { // GetFaceSearchResponse
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   VideoMetadata: { // VideoMetadata
 * //     Codec: "STRING_VALUE",
 * //     DurationMillis: Number("long"),
 * //     Format: "STRING_VALUE",
 * //     FrameRate: Number("float"),
 * //     FrameHeight: Number("long"),
 * //     FrameWidth: Number("long"),
 * //     ColorRange: "FULL" || "LIMITED",
 * //   },
 * //   Persons: [ // PersonMatches
 * //     { // PersonMatch
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
 * //       FaceMatches: [ // FaceMatchList
 * //         { // FaceMatch
 * //           Similarity: Number("float"),
 * //           Face: { // Face
 * //             FaceId: "STRING_VALUE",
 * //             BoundingBox: "<BoundingBox>",
 * //             ImageId: "STRING_VALUE",
 * //             ExternalImageId: "STRING_VALUE",
 * //             Confidence: Number("float"),
 * //             IndexFacesModelVersion: "STRING_VALUE",
 * //             UserId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
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
 * @param GetFaceSearchCommandInput - {@link GetFaceSearchCommandInput}
 * @returns {@link GetFaceSearchCommandOutput}
 * @see {@link GetFaceSearchCommandInput} for command's `input` shape.
 * @see {@link GetFaceSearchCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetFaceSearchCommand extends $Command
  .classBuilder<
    GetFaceSearchCommandInput,
    GetFaceSearchCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "GetFaceSearch", {})
  .n("RekognitionClient", "GetFaceSearchCommand")
  .sc(GetFaceSearch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFaceSearchRequest;
      output: GetFaceSearchResponse;
    };
    sdk: {
      input: GetFaceSearchCommandInput;
      output: GetFaceSearchCommandOutput;
    };
  };
}
