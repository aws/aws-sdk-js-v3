// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IndexFacesRequest, IndexFacesResponse } from "../models/models_0";
import { IndexFaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IndexFacesCommand}.
 */
export interface IndexFacesCommandInput extends IndexFacesRequest {}
/**
 * @public
 *
 * The output of {@link IndexFacesCommand}.
 */
export interface IndexFacesCommandOutput extends IndexFacesResponse, __MetadataBearer {}

/**
 * Detects faces in the input image and adds them to the specified collection.
 *
 * Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations.
 *
 * For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide.
 *
 * To get the number of faces in a collection, call DescribeCollection.
 *
 * If you're using version 1.0 of the face detection model, `IndexFaces` indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image.
 *
 * If you're using version 4 or later of the face model, image orientation information is not returned in the `OrientationCorrection` field.
 *
 * To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of `FaceModelVersion` in the response from `IndexFaces`
 *
 * For more information, see Model Versioning in the Amazon Rekognition Developer Guide.
 *
 * If you provide the optional `ExternalImageId` for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the ListFaces operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.
 *
 * You can specify the maximum number of faces to index with the `MaxFaces` input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background.
 *
 * The `QualityFilter` input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, `IndexFaces` chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use `QualityFilter`, to set the quality bar by specifying `LOW`, `MEDIUM`, or `HIGH`. If you do not want to filter detected faces, specify `NONE`.
 *
 * > **Note:** To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call DescribeCollection.
 *
 * Information about faces detected in an image, but not indexed, is returned in an array of UnindexedFace objects, `UnindexedFaces`. Faces aren't indexed for reasons such as:
 *
 * - The number of faces detected exceeds the value of the `MaxFaces` request parameter.
 * - The face is too small compared to the image dimensions.
 * - The face is too blurry.
 * - The image is too dark.
 * - The face has an extreme pose.
 * - The face doesn’t have enough detail to be suitable for face search.
 *
 * In response, the `IndexFaces` operation returns an array of metadata for all detected faces, `FaceRecords`. This includes:
 *
 * - The bounding box, `BoundingBox`, of the detected face.
 * - A confidence value, `Confidence`, which indicates the confidence that the bounding box contains a face.
 * - A face ID, `FaceId`, assigned by the service for each face that's detected and stored.
 * - An image ID, `ImageId`, assigned by the service for the input image.
 *
 * If you request `ALL` or specific facial attributes (e.g., `FACE_OCCLUDED`) by using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth), facial occlusion, and other facial attributes.
 *
 * If you provide the same image, specify the same collection, and use the same external ID in the `IndexFaces` operation, Amazon Rekognition doesn't save duplicate face metadata.
 *
 * The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file.
 *
 * This operation requires permissions to perform the `rekognition:IndexFaces` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, IndexFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, IndexFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // IndexFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   Image: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   ExternalImageId: "STRING_VALUE",
 *   DetectionAttributes: [ // Attributes
 *     "DEFAULT" || "ALL" || "AGE_RANGE" || "BEARD" || "EMOTIONS" || "EYE_DIRECTION" || "EYEGLASSES" || "EYES_OPEN" || "GENDER" || "MOUTH_OPEN" || "MUSTACHE" || "FACE_OCCLUDED" || "SMILE" || "SUNGLASSES",
 *   ],
 *   MaxFaces: Number("int"),
 *   QualityFilter: "NONE" || "AUTO" || "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new IndexFacesCommand(input);
 * const response = await client.send(command);
 * // { // IndexFacesResponse
 * //   FaceRecords: [ // FaceRecordList
 * //     { // FaceRecord
 * //       Face: { // Face
 * //         FaceId: "STRING_VALUE",
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         ImageId: "STRING_VALUE",
 * //         ExternalImageId: "STRING_VALUE",
 * //         Confidence: Number("float"),
 * //         IndexFacesModelVersion: "STRING_VALUE",
 * //         UserId: "STRING_VALUE",
 * //       },
 * //       FaceDetail: { // FaceDetail
 * //         BoundingBox: {
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
 * //   OrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * //   FaceModelVersion: "STRING_VALUE",
 * //   UnindexedFaces: [ // UnindexedFaces
 * //     { // UnindexedFace
 * //       Reasons: [ // Reasons
 * //         "EXCEEDS_MAX_FACES" || "EXTREME_POSE" || "LOW_BRIGHTNESS" || "LOW_SHARPNESS" || "LOW_CONFIDENCE" || "SMALL_BOUNDING_BOX" || "LOW_FACE_QUALITY",
 * //       ],
 * //       FaceDetail: {
 * //         BoundingBox: {
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         AgeRange: {
 * //           Low: Number("int"),
 * //           High: Number("int"),
 * //         },
 * //         Smile: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Eyeglasses: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Sunglasses: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Gender: {
 * //           Value: "Male" || "Female",
 * //           Confidence: Number("float"),
 * //         },
 * //         Beard: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Mustache: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyesOpen: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         MouthOpen: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Emotions: [
 * //           {
 * //             Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         Landmarks: [
 * //           {
 * //             Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //         Pose: {
 * //           Roll: Number("float"),
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //         },
 * //         Quality: {
 * //           Brightness: Number("float"),
 * //           Sharpness: Number("float"),
 * //         },
 * //         Confidence: Number("float"),
 * //         FaceOccluded: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyeDirection: {
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //           Confidence: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param IndexFacesCommandInput - {@link IndexFacesCommandInput}
 * @returns {@link IndexFacesCommandOutput}
 * @see {@link IndexFacesCommandInput} for command's `input` shape.
 * @see {@link IndexFacesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The size of the collection exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To add a face to a collection
 * ```javascript
 * // This operation detects faces in an image and adds them to the specified Rekognition collection.
 * const input = {
 *   CollectionId: "myphotos",
 *   DetectionAttributes:   [],
 *   ExternalImageId: "myphotoid",
 *   Image: {
 *     S3Object: {
 *       Bucket: "mybucket",
 *       Name: "myphoto"
 *     }
 *   }
 * };
 * const command = new IndexFacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FaceRecords: [
 *     {
 *       Face: {
 *         BoundingBox: {
 *           Height: 0.33481481671333313,
 *           Left: 0.31888890266418457,
 *           Top: 0.4933333396911621,
 *           Width: 0.25
 *         },
 *         Confidence: 99.9991226196289,
 *         FaceId: "ff43d742-0c13-5d16-a3e8-03d3f58e980b",
 *         ImageId: "465f4e93-763e-51d0-b030-b9667a2d94b1"
 *       },
 *       FaceDetail: {
 *         BoundingBox: {
 *           Height: 0.33481481671333313,
 *           Left: 0.31888890266418457,
 *           Top: 0.4933333396911621,
 *           Width: 0.25
 *         },
 *         Confidence: 99.9991226196289,
 *         Landmarks: [
 *           {
 *             Type: "eyeLeft",
 *             X: 0.3976764678955078,
 *             Y: 0.6248345971107483
 *           },
 *           {
 *             Type: "eyeRight",
 *             X: 0.4810936450958252,
 *             Y: 0.6317117214202881
 *           },
 *           {
 *             Type: "noseLeft",
 *             X: 0.41986238956451416,
 *             Y: 0.7111940383911133
 *           },
 *           {
 *             Type: "mouthDown",
 *             X: 0.40525302290916443,
 *             Y: 0.7497701048851013
 *           },
 *           {
 *             Type: "mouthUp",
 *             X: 0.4753248989582062,
 *             Y: 0.7558549642562866
 *           }
 *         ],
 *         Pose: {
 *           Pitch: -9.713645935058594,
 *           Roll: 4.707281112670898,
 *           Yaw: -24.438663482666016
 *         },
 *         Quality: {
 *           Brightness: 29.23358917236328,
 *           Sharpness: 80
 *         }
 *       }
 *     },
 *     {
 *       Face: {
 *         BoundingBox: {
 *           Height: 0.32592591643333435,
 *           Left: 0.5144444704055786,
 *           Top: 0.15111111104488373,
 *           Width: 0.24444444477558136
 *         },
 *         Confidence: 99.99950408935547,
 *         FaceId: "8be04dba-4e58-520d-850e-9eae4af70eb2",
 *         ImageId: "465f4e93-763e-51d0-b030-b9667a2d94b1"
 *       },
 *       FaceDetail: {
 *         BoundingBox: {
 *           Height: 0.32592591643333435,
 *           Left: 0.5144444704055786,
 *           Top: 0.15111111104488373,
 *           Width: 0.24444444477558136
 *         },
 *         Confidence: 99.99950408935547,
 *         Landmarks: [
 *           {
 *             Type: "eyeLeft",
 *             X: 0.6006892323493958,
 *             Y: 0.290842205286026
 *           },
 *           {
 *             Type: "eyeRight",
 *             X: 0.6808141469955444,
 *             Y: 0.29609042406082153
 *           },
 *           {
 *             Type: "noseLeft",
 *             X: 0.6395332217216492,
 *             Y: 0.3522595763206482
 *           },
 *           {
 *             Type: "mouthDown",
 *             X: 0.5892083048820496,
 *             Y: 0.38689887523651123
 *           },
 *           {
 *             Type: "mouthUp",
 *             X: 0.674560010433197,
 *             Y: 0.394125759601593
 *           }
 *         ],
 *         Pose: {
 *           Pitch: -4.683138370513916,
 *           Roll: 2.1029529571533203,
 *           Yaw: 6.716655254364014
 *         },
 *         Quality: {
 *           Brightness: 34.951698303222656,
 *           Sharpness: 160
 *         }
 *       }
 *     }
 *   ],
 *   OrientationCorrection: "ROTATE_0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class IndexFacesCommand extends command<IndexFacesCommandInput, IndexFacesCommandOutput>(
  _ep0,
  _mw0,
  "IndexFaces",
  IndexFaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IndexFacesRequest;
      output: IndexFacesResponse;
    };
    sdk: {
      input: IndexFacesCommandInput;
      output: IndexFacesCommandOutput;
    };
  };
}
