// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetectFacesRequest, DetectFacesResponse } from "../models/models_0";
import { de_DetectFacesCommand, se_DetectFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectFacesCommand}.
 */
export interface DetectFacesCommandInput extends DetectFacesRequest {}
/**
 * @public
 *
 * The output of {@link DetectFacesCommand}.
 */
export interface DetectFacesCommandOutput extends DetectFacesResponse, __MetadataBearer {}

/**
 * <p>Detects faces within an image that is provided as input.</p>
 *          <p>
 *             <code>DetectFaces</code> detects the 100 largest faces in the image. For each face
 *       detected, the operation returns face details. These details include a bounding box of the
 *       face, a confidence value (that the bounding box contains a face), and a fixed set of
 *       attributes such as facial landmarks (for example, coordinates of eye and mouth), pose,
 *       presence of facial occlusion, and so on.</p>
 *          <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or
 *       obscured faces, the algorithm might not detect the faces or might detect faces with lower
 *       confidence. </p>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
 *       passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <note>
 *             <p>This is a stateless API operation. That is, the operation does not persist any
 *         data.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the <code>rekognition:DetectFaces</code>
 *       action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DetectFacesRequest
 *   Image: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   Attributes: [ // Attributes
 *     "DEFAULT" || "ALL" || "AGE_RANGE" || "BEARD" || "EMOTIONS" || "EYE_DIRECTION" || "EYEGLASSES" || "EYES_OPEN" || "GENDER" || "MOUTH_OPEN" || "MUSTACHE" || "FACE_OCCLUDED" || "SMILE" || "SUNGLASSES",
 *   ],
 * };
 * const command = new DetectFacesCommand(input);
 * const response = await client.send(command);
 * // { // DetectFacesResponse
 * //   FaceDetails: [ // FaceDetailList
 * //     { // FaceDetail
 * //       BoundingBox: { // BoundingBox
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //       AgeRange: { // AgeRange
 * //         Low: Number("int"),
 * //         High: Number("int"),
 * //       },
 * //       Smile: { // Smile
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Eyeglasses: { // Eyeglasses
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Sunglasses: { // Sunglasses
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Gender: { // Gender
 * //         Value: "Male" || "Female",
 * //         Confidence: Number("float"),
 * //       },
 * //       Beard: { // Beard
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Mustache: { // Mustache
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       EyesOpen: { // EyeOpen
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       MouthOpen: { // MouthOpen
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Emotions: [ // Emotions
 * //         { // Emotion
 * //           Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //           Confidence: Number("float"),
 * //         },
 * //       ],
 * //       Landmarks: [ // Landmarks
 * //         { // Landmark
 * //           Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //           X: Number("float"),
 * //           Y: Number("float"),
 * //         },
 * //       ],
 * //       Pose: { // Pose
 * //         Roll: Number("float"),
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //       },
 * //       Quality: { // ImageQuality
 * //         Brightness: Number("float"),
 * //         Sharpness: Number("float"),
 * //       },
 * //       Confidence: Number("float"),
 * //       FaceOccluded: { // FaceOccluded
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       EyeDirection: { // EyeDirection
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //         Confidence: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   OrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * // };
 *
 * ```
 *
 * @param DetectFacesCommandInput - {@link DetectFacesCommandInput}
 * @returns {@link DetectFacesCommandOutput}
 * @see {@link DetectFacesCommandInput} for command's `input` shape.
 * @see {@link DetectFacesCommandOutput} for command's `response` shape.
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
 * @public
 * @example To detect faces in an image
 * ```javascript
 * // This operation detects faces in an image stored in an AWS S3 bucket.
 * const input = {
 *   "Image": {
 *     "S3Object": {
 *       "Bucket": "mybucket",
 *       "Name": "myphoto"
 *     }
 *   }
 * };
 * const command = new DetectFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceDetails": [
 *     {
 *       "BoundingBox": {
 *         "Height": 0.18000000715255737,
 *         "Left": 0.5555555820465088,
 *         "Top": 0.33666667342185974,
 *         "Width": 0.23999999463558197
 *       },
 *       "Confidence": 100,
 *       "Landmarks": [
 *         {
 *           "Type": "eyeLeft",
 *           "X": 0.6394737362861633,
 *           "Y": 0.40819624066352844
 *         },
 *         {
 *           "Type": "eyeRight",
 *           "X": 0.7266660928726196,
 *           "Y": 0.41039225459098816
 *         },
 *         {
 *           "Type": "eyeRight",
 *           "X": 0.6912462115287781,
 *           "Y": 0.44240960478782654
 *         },
 *         {
 *           "Type": "mouthDown",
 *           "X": 0.6306198239326477,
 *           "Y": 0.46700039505958557
 *         },
 *         {
 *           "Type": "mouthUp",
 *           "X": 0.7215608954429626,
 *           "Y": 0.47114261984825134
 *         }
 *       ],
 *       "Pose": {
 *         "Pitch": 4.050806522369385,
 *         "Roll": 0.9950747489929199,
 *         "Yaw": 13.693790435791016
 *       },
 *       "Quality": {
 *         "Brightness": 37.60169982910156,
 *         "Sharpness": 80
 *       }
 *     }
 *   ],
 *   "OrientationCorrection": "ROTATE_0"
 * }
 * *\/
 * // example id: to-detect-faces-in-an-image-1481841782793
 * ```
 *
 */
export class DetectFacesCommand extends $Command
  .classBuilder<
    DetectFacesCommandInput,
    DetectFacesCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DetectFaces", {})
  .n("RekognitionClient", "DetectFacesCommand")
  .f(void 0, void 0)
  .ser(se_DetectFacesCommand)
  .de(de_DetectFacesCommand)
  .build() {}
