// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompareFacesRequest, CompareFacesResponse } from "../models/models_0";
import { CompareFaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompareFacesCommand}.
 */
export interface CompareFacesCommandInput extends CompareFacesRequest {}
/**
 * @public
 *
 * The output of {@link CompareFacesCommand}.
 */
export interface CompareFacesCommandOutput extends CompareFacesResponse, __MetadataBearer {}

/**
 * Compares a face in the *source* input image with each of the 100 largest faces detected in the *target* input image.
 *
 * If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.
 *
 * > **Note:** CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use `CompareFaces` to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action.
 *
 * You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file.
 *
 * In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match.
 *
 * > **Note:** By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the `SimilarityThreshold` parameter.
 *
 * `CompareFaces` also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value.
 *
 * The `QualityFilter` input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use `QualityFilter` to set the quality bar by specifying `LOW`, `MEDIUM`, or `HIGH`. If you do not want to filter detected faces, specify `NONE`. The default value is `NONE`.
 *
 * If the image doesn't contain Exif metadata, `CompareFaces` returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.
 *
 * If no faces are detected in the source or target images, `CompareFaces` returns an `InvalidParameterException` error.
 *
 * > **Note:** This is a stateless API operation. That is, data returned by this operation doesn't persist.
 *
 * For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide.
 *
 * This operation requires permissions to perform the `rekognition:CompareFaces` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CompareFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CompareFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // CompareFacesRequest
 *   SourceImage: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   TargetImage: {
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: {
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   SimilarityThreshold: Number("float"),
 *   QualityFilter: "NONE" || "AUTO" || "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new CompareFacesCommand(input);
 * const response = await client.send(command);
 * // { // CompareFacesResponse
 * //   SourceImageFace: { // ComparedSourceImageFace
 * //     BoundingBox: { // BoundingBox
 * //       Width: Number("float"),
 * //       Height: Number("float"),
 * //       Left: Number("float"),
 * //       Top: Number("float"),
 * //     },
 * //     Confidence: Number("float"),
 * //   },
 * //   FaceMatches: [ // CompareFacesMatchList
 * //     { // CompareFacesMatch
 * //       Similarity: Number("float"),
 * //       Face: { // ComparedFace
 * //         BoundingBox: {
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Confidence: Number("float"),
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
 * //         Emotions: [ // Emotions
 * //           { // Emotion
 * //             Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         Smile: { // Smile
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   UnmatchedFaces: [ // CompareFacesUnmatchList
 * //     {
 * //       BoundingBox: "<BoundingBox>",
 * //       Confidence: Number("float"),
 * //       Landmarks: [
 * //         {
 * //           Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //           X: Number("float"),
 * //           Y: Number("float"),
 * //         },
 * //       ],
 * //       Pose: {
 * //         Roll: Number("float"),
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //       },
 * //       Quality: {
 * //         Brightness: Number("float"),
 * //         Sharpness: Number("float"),
 * //       },
 * //       Emotions: [
 * //         {
 * //           Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //           Confidence: Number("float"),
 * //         },
 * //       ],
 * //       Smile: {
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   SourceImageOrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * //   TargetImageOrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * // };
 *
 * ```
 *
 * @param CompareFacesCommandInput - {@link CompareFacesCommandInput}
 * @returns {@link CompareFacesCommandOutput}
 * @see {@link CompareFacesCommandInput} for command's `input` shape.
 * @see {@link CompareFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *
 * The input image size exceeds the allowed limit. If you are calling DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *
 * The provided image format is not supported.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Rekognition is unable to access the S3 object specified in the request.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To compare two images
 * ```javascript
 * // This operation compares the largest face detected in the source image with each face detected in the target image.
 * const input = {
 *   SimilarityThreshold: 90,
 *   SourceImage: {
 *     S3Object: {
 *       Bucket: "mybucket",
 *       Name: "mysourceimage"
 *     }
 *   },
 *   TargetImage: {
 *     S3Object: {
 *       Bucket: "mybucket",
 *       Name: "mytargetimage"
 *     }
 *   }
 * };
 * const command = new CompareFacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FaceMatches: [
 *     {
 *       Face: {
 *         BoundingBox: {
 *           Height: 0.33481481671333313,
 *           Left: 0.31888890266418457,
 *           Top: 0.4933333396911621,
 *           Width: 0.25
 *         },
 *         Confidence: 99.9991226196289
 *       },
 *       Similarity: 100
 *     }
 *   ],
 *   SourceImageFace: {
 *     BoundingBox: {
 *       Height: 0.33481481671333313,
 *       Left: 0.31888890266418457,
 *       Top: 0.4933333396911621,
 *       Width: 0.25
 *     },
 *     Confidence: 99.9991226196289
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CompareFacesCommand extends command<CompareFacesCommandInput, CompareFacesCommandOutput>(
  _ep0,
  _mw0,
  "CompareFaces",
  CompareFaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompareFacesRequest;
      output: CompareFacesResponse;
    };
    sdk: {
      input: CompareFacesCommandInput;
      output: CompareFacesCommandOutput;
    };
  };
}
