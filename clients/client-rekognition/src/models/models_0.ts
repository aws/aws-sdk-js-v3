// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  Attribute,
  BodyPart,
  CelebrityRecognitionSortBy,
  ChallengeType,
  ContentClassifier,
  ContentModerationAggregateBy,
  ContentModerationSortBy,
  CustomizationFeature,
  DatasetStatus,
  DatasetStatusMessageCode,
  DatasetType,
  DetectLabelsFeatureName,
  EmotionName,
  FaceAttributes,
  FaceSearchSortBy,
  FeedbackCode,
  GenderType,
  KnownGenderType,
  LabelDetectionAggregateBy,
  LabelDetectionFeatureName,
  LabelDetectionSortBy,
  LandmarkType,
  LivenessSessionStatus,
  MediaAnalysisJobFailureCode,
  MediaAnalysisJobStatus,
  OrientationCorrection,
  PersonTrackingSortBy,
  ProjectAutoUpdate,
  ProjectStatus,
  ProjectVersionStatus,
  ProtectiveEquipmentType,
  QualityFilter,
  Reason,
  SegmentType,
  StreamProcessorStatus,
  TechnicalCueType,
  TextTypes,
  UnsearchedFaceReason,
  UnsuccessfulFaceAssociationReason,
  UnsuccessfulFaceDeletionReason,
  UnsuccessfulFaceDisassociationReason,
  UserStatus,
  VideoColorRange,
  VideoJobStatus,
} from "./enums";

/**
 * Structure containing the estimated age range, in years, for a face.
 *
 * Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.
 *
 * @public
 */
export interface AgeRange {
  /**
   * The lowest estimated age.
   *
   * @public
   */
  Low?: number | undefined;

  /**
   * The highest estimated age.
   *
   * @public
   */
  High?: number | undefined;
}

/**
 * Provides the S3 bucket name and object name.
 *
 * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
 *
 * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface S3Object {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * S3 object key name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If the bucket is versioning enabled, you can specify the object version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
 *
 * @public
 */
export interface GroundTruthManifest {
  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training.
 *
 * @public
 */
export interface Asset {
  /**
   * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   *
   * @public
   */
  GroundTruthManifest?: GroundTruthManifest | undefined;
}

/**
 * Provides face metadata for the faces that are associated to a specific UserID.
 *
 * @public
 */
export interface AssociatedFace {
  /**
   * Unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFacesRequest {
  /**
   * The ID of an existing collection containing the UserID.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * The ID for the existing UserID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * An array of FaceIDs to associate with the UserID.
   *
   * @public
   */
  FaceIds: string[] | undefined;

  /**
   * An optional value specifying the minimum confidence in the UserID match to return. The default value is 75.
   *
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * Idempotent token used to identify the request to `AssociateFaces`. If you use the same token with multiple `AssociateFaces` requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully associated.
 *
 * @public
 */
export interface UnsuccessfulFaceAssociation {
  /**
   * A unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;

  /**
   * A provided ID for the UserID. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * Match confidence with the UserID, provides information regarding if a face association was unsuccessful because it didn't meet UserMatchThreshold.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The reason why the association was unsuccessful.
   *
   * @public
   */
  Reasons?: UnsuccessfulFaceAssociationReason[] | undefined;
}

/**
 * @public
 */
export interface AssociateFacesResponse {
  /**
   * An array of AssociatedFace objects containing FaceIDs that have been successfully associated with the UserID. Returned if the AssociateFaces action is successful.
   *
   * @public
   */
  AssociatedFaces?: AssociatedFace[] | undefined;

  /**
   * An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully associated along with the reasons. Returned if the AssociateFaces action is successful.
   *
   * @public
   */
  UnsuccessfulFaceAssociations?: UnsuccessfulFaceAssociation[] | undefined;

  /**
   * The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * Metadata information about an audio stream. An array of `AudioMetadata` objects for the audio streams found in a stored video is returned by GetSegmentDetection.
 *
 * @public
 */
export interface AudioMetadata {
  /**
   * The audio codec used to encode or decode the audio stream.
   *
   * @public
   */
  Codec?: string | undefined;

  /**
   * The duration of the audio stream in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The sample rate for the audio stream.
   *
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * The number of audio channels in the segment.
   *
   * @public
   */
  NumberOfChannels?: number | undefined;
}

/**
 * Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The `left` (x-coordinate) and `top` (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
 *
 * The `top` and `left` values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a `left` value of 0.5 (350/700) and a `top` value of 0.25 (50/200).
 *
 * The `width` and `height` values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.
 *
 * > **Note:** The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the `left` or `top` values.
 *
 * @public
 */
export interface BoundingBox {
  /**
   * Width of the bounding box as a ratio of the overall image width.
   *
   * @public
   */
  Width?: number | undefined;

  /**
   * Height of the bounding box as a ratio of the overall image height.
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * Left coordinate of the bounding box as a ratio of overall image width.
   *
   * @public
   */
  Left?: number | undefined;

  /**
   * Top coordinate of the bounding box as a ratio of overall image height.
   *
   * @public
   */
  Top?: number | undefined;
}

/**
 * An image that is picked from the Face Liveness video and returned for audit trail purposes, returned as Base64-encoded bytes.
 *
 * @public
 */
export interface AuditImage {
  /**
   * The Base64-encoded bytes representing an image selected from the Face Liveness video and returned for audit purposes.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object?: S3Object | undefined;

  /**
   * Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The `left` (x-coordinate) and `top` (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
   *
   * The `top` and `left` values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a `left` value of 0.5 (350/700) and a `top` value of 0.25 (50/200).
   *
   * The `width` and `height` values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.
   *
   * > **Note:** The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the `left` or `top` values.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;
}

/**
 * Indicates whether or not the face has a beard, and the confidence level in the determination.
 *
 * @public
 */
export interface Beard {
  /**
   * Boolean value that indicates whether the face has beard or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see StartSegmentDetection.
 *
 * @public
 */
export interface BlackFrame {
  /**
   * A threshold used to determine the maximum luminance value for a pixel to be considered black. In a full color range video, luminance values range from 0-255. A pixel value of 0 is pure black, and the most strict filter. The maximum black pixel value is computed as follows: max_black_pixel_value = minimum_luminance + MaxPixelThreshold *luminance_range.
   *
   * For example, for a full range video with BlackPixelThreshold = 0.1, max_black_pixel_value is 0 + 0.1 * (255-0) = 25.5.
   *
   * The default value of MaxPixelThreshold is 0.2, which maps to a max_black_pixel_value of 51 for a full range video. You can lower this threshold to be more strict on black levels.
   *
   * @public
   */
  MaxPixelThreshold?: number | undefined;

  /**
   * The minimum percentage of pixels in a frame that need to have a luminance below the max_black_pixel_value for a frame to be considered a black frame. Luminance is calculated using the BT.709 matrix.
   *
   * The default value is 99, which means at least 99% of all pixels in the frame are black pixels as per the `MaxPixelThreshold` set. You can reduce this value to allow more noise on the black frame.
   *
   * @public
   */
  MinCoveragePercentage?: number | undefined;
}

/**
 * Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see DetectProtectiveEquipment.
 *
 * @public
 */
export interface CoversBodyPart {
  /**
   * The confidence that Amazon Rekognition has in the value of `Value`.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * True if the PPE covers the corresponding body part, otherwise false.
   *
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * Information about an item of Personal Protective Equipment (PPE) detected by DetectProtectiveEquipment. For more information, see DetectProtectiveEquipment.
 *
 * @public
 */
export interface EquipmentDetection {
  /**
   * A bounding box surrounding the item of detected PPE.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * The confidence that Amazon Rekognition has that the bounding box (`BoundingBox`) contains an item of PPE.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The type of detected PPE.
   *
   * @public
   */
  Type?: ProtectiveEquipmentType | undefined;

  /**
   * Information about the body part covered by the detected PPE.
   *
   * @public
   */
  CoversBodyPart?: CoversBodyPart | undefined;
}

/**
 * Information about a body part detected by DetectProtectiveEquipment that contains PPE. An array of `ProtectiveEquipmentBodyPart` objects is returned for each person detected by `DetectProtectiveEquipment`.
 *
 * @public
 */
export interface ProtectiveEquipmentBodyPart {
  /**
   * The detected body part.
   *
   * @public
   */
  Name?: BodyPart | undefined;

  /**
   * The confidence that Amazon Rekognition has in the detection accuracy of the detected body part.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * An array of Personal Protective Equipment items detected around a body part.
   *
   * @public
   */
  EquipmentDetections?: EquipmentDetection[] | undefined;
}

/**
 * The API returns a prediction of an emotion based on a person's facial expressions, along with the confidence level for the predicted emotion. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. The API is not intended to be used, and you may not use it, in a manner that violates the EU Artificial Intelligence Act or any other applicable law.
 *
 * @public
 */
export interface Emotion {
  /**
   * Type of emotion detected.
   *
   * @public
   */
  Type?: EmotionName | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates the location of the landmark on the face.
 *
 * @public
 */
export interface Landmark {
  /**
   * Type of landmark.
   *
   * @public
   */
  Type?: LandmarkType | undefined;

  /**
   * The x-coordinate of the landmark expressed as a ratio of the width of the image. The x-coordinate is measured from the left-side of the image. For example, if the image is 700 pixels wide and the x-coordinate of the landmark is at 350 pixels, this value is 0.5.
   *
   * @public
   */
  X?: number | undefined;

  /**
   * The y-coordinate of the landmark expressed as a ratio of the height of the image. The y-coordinate is measured from the top of the image. For example, if the image height is 200 pixels and the y-coordinate of the landmark is at 50 pixels, this value is 0.25.
   *
   * @public
   */
  Y?: number | undefined;
}

/**
 * Indicates the pose of the face as determined by its pitch, roll, and yaw.
 *
 * @public
 */
export interface Pose {
  /**
   * Value representing the face rotation on the roll axis.
   *
   * @public
   */
  Roll?: number | undefined;

  /**
   * Value representing the face rotation on the yaw axis.
   *
   * @public
   */
  Yaw?: number | undefined;

  /**
   * Value representing the face rotation on the pitch axis.
   *
   * @public
   */
  Pitch?: number | undefined;
}

/**
 * Identifies face image brightness and sharpness.
 *
 * @public
 */
export interface ImageQuality {
  /**
   * Value representing brightness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a brighter face image.
   *
   * @public
   */
  Brightness?: number | undefined;

  /**
   * Value representing sharpness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a sharper face image.
   *
   * @public
   */
  Sharpness?: number | undefined;
}

/**
 * Indicates whether or not the face is smiling, and the confidence level in the determination.
 *
 * @public
 */
export interface Smile {
  /**
   * Boolean value that indicates whether the face is smiling or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Provides face metadata for target image faces that are analyzed by `CompareFaces` and `RecognizeCelebrities`.
 *
 * @public
 */
export interface ComparedFace {
  /**
   * Bounding box of the face.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Level of confidence that what the bounding box contains is a face.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * An array of facial landmarks.
   *
   * @public
   */
  Landmarks?: Landmark[] | undefined;

  /**
   * Indicates the pose of the face as determined by its pitch, roll, and yaw.
   *
   * @public
   */
  Pose?: Pose | undefined;

  /**
   * Identifies face image brightness and sharpness.
   *
   * @public
   */
  Quality?: ImageQuality | undefined;

  /**
   * The emotions that appear to be expressed on the face, and the confidence level in the determination. Valid values include "Happy", "Sad", "Angry", "Confused", "Disgusted", "Surprised", "Calm", "Unknown", and "Fear".
   *
   * @public
   */
  Emotions?: Emotion[] | undefined;

  /**
   * Indicates whether or not the face is smiling, and the confidence level in the determination.
   *
   * @public
   */
  Smile?: Smile | undefined;
}

/**
 * The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted.
 *
 * @public
 */
export interface KnownGender {
  /**
   * A string value of the KnownGender info about the Celebrity.
   *
   * @public
   */
  Type?: KnownGenderType | undefined;
}

/**
 * Provides information about a celebrity recognized by the RecognizeCelebrities operation.
 *
 * @public
 */
export interface Celebrity {
  /**
   * An array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty.
   *
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * The name of the celebrity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the celebrity.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Provides information about the celebrity's face, such as its location on the image.
   *
   * @public
   */
  Face?: ComparedFace | undefined;

  /**
   * The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity.
   *
   * @public
   */
  MatchConfidence?: number | undefined;

  /**
   * The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted.
   *
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * Indicates the direction the eyes are gazing in (independent of the head pose) as determined by its pitch and yaw.
 *
 * @public
 */
export interface EyeDirection {
  /**
   * Value representing eye direction on the yaw axis.
   *
   * @public
   */
  Yaw?: number | undefined;

  /**
   * Value representing eye direction on the pitch axis.
   *
   * @public
   */
  Pitch?: number | undefined;

  /**
   * The confidence that the service has in its predicted eye direction.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
 *
 * @public
 */
export interface Eyeglasses {
  /**
   * Boolean value that indicates whether the face is wearing eye glasses or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
 *
 * @public
 */
export interface EyeOpen {
  /**
   * Boolean value that indicates whether the eyes on the face are open.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * `FaceOccluded` should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. `FaceOccluded` should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others.
 *
 * You can use `FaceOccluded` to determine if an obstruction on a face negatively impacts using the image for face matching.
 *
 * @public
 */
export interface FaceOccluded {
  /**
   * True if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. False if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * The confidence that the service has detected the presence of a face occlusion.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * The predicted gender of a detected face.
 *
 * Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.
 *
 * Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform.
 *
 * We don't recommend using gender binary predictions to make decisions that impact an individual's rights, privacy, or access to services.
 *
 * @public
 */
export interface Gender {
  /**
   * The predicted gender of the face.
   *
   * @public
   */
  Value?: GenderType | undefined;

  /**
   * Level of confidence in the prediction.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
 *
 * @public
 */
export interface MouthOpen {
  /**
   * Boolean value that indicates whether the mouth on the face is open or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates whether or not the face has a mustache, and the confidence level in the determination.
 *
 * @public
 */
export interface Mustache {
  /**
   * Boolean value that indicates whether the face has mustache or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
 *
 * @public
 */
export interface Sunglasses {
  /**
   * Boolean value that indicates whether the face is wearing sunglasses or not.
   *
   * @public
   */
  Value?: boolean | undefined;

  /**
   * Level of confidence in the determination.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Structure containing attributes of the face that the algorithm detected.
 *
 * A `FaceDetail` object contains either the default facial attributes or all facial attributes. The default attributes are `BoundingBox`, `Confidence`, `Landmarks`, `Pose`, and `Quality`.
 *
 * GetFaceDetection is the only Amazon Rekognition Video stored video operation that can return a `FaceDetail` object with all attributes. To specify which attributes to return, use the `FaceAttributes` input parameter for StartFaceDetection. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a `FaceAttributes` input parameter:
 *
 * - GetCelebrityRecognition
 * - GetPersonTracking
 * - GetFaceSearch
 *
 * The Amazon Rekognition Image DetectFaces and IndexFaces operations can return all facial attributes. To specify which attributes to return, use the `Attributes` input parameter for `DetectFaces`. For `IndexFaces`, use the `DetectAttributes` input parameter.
 *
 * @public
 */
export interface FaceDetail {
  /**
   * Bounding box of the face. Default attribute.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * The estimated age range, in years, for the face. Low represents the lowest estimated age and High represents the highest estimated age.
   *
   * @public
   */
  AgeRange?: AgeRange | undefined;

  /**
   * Indicates whether or not the face is smiling, and the confidence level in the determination.
   *
   * @public
   */
  Smile?: Smile | undefined;

  /**
   * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
   *
   * @public
   */
  Eyeglasses?: Eyeglasses | undefined;

  /**
   * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
   *
   * @public
   */
  Sunglasses?: Sunglasses | undefined;

  /**
   * The predicted gender of a detected face.
   *
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * Indicates whether or not the face has a beard, and the confidence level in the determination.
   *
   * @public
   */
  Beard?: Beard | undefined;

  /**
   * Indicates whether or not the face has a mustache, and the confidence level in the determination.
   *
   * @public
   */
  Mustache?: Mustache | undefined;

  /**
   * Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
   *
   * @public
   */
  EyesOpen?: EyeOpen | undefined;

  /**
   * Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
   *
   * @public
   */
  MouthOpen?: MouthOpen | undefined;

  /**
   * The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
   *
   * @public
   */
  Emotions?: Emotion[] | undefined;

  /**
   * Indicates the location of landmarks on the face. Default attribute.
   *
   * @public
   */
  Landmarks?: Landmark[] | undefined;

  /**
   * Indicates the pose of the face as determined by its pitch, roll, and yaw. Default attribute.
   *
   * @public
   */
  Pose?: Pose | undefined;

  /**
   * Identifies image brightness and sharpness. Default attribute.
   *
   * @public
   */
  Quality?: ImageQuality | undefined;

  /**
   * Confidence level that the bounding box contains a face (and not a different object such as a tree). Default attribute.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * `FaceOccluded` should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. `FaceOccluded` should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others.
   *
   * @public
   */
  FaceOccluded?: FaceOccluded | undefined;

  /**
   * Indicates the direction the eyes are gazing in, as defined by pitch and yaw.
   *
   * @public
   */
  EyeDirection?: EyeDirection | undefined;
}

/**
 * Information about a recognized celebrity.
 *
 * @public
 */
export interface CelebrityDetail {
  /**
   * An array of URLs pointing to additional celebrity information.
   *
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * The name of the celebrity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for the celebrity.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * Bounding box around the body of a celebrity.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Face details for the recognized celebrity.
   *
   * @public
   */
  Face?: FaceDetail | undefined;

  /**
   * Retrieves the known gender for the celebrity.
   *
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface CelebrityRecognition {
  /**
   * The time, in milliseconds from the start of the video, that the celebrity was recognized. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the celebrity first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * Information about a recognized celebrity.
   *
   * @public
   */
  Celebrity?: CelebrityDetail | undefined;
}

/**
 * Describes the type and version of the challenge being used for the Face Liveness session.
 *
 * @public
 */
export interface Challenge {
  /**
   * The type of the challenge being used for the Face Liveness session.
   *
   * @public
   */
  Type: ChallengeType | undefined;

  /**
   * The version of the challenge being used for the Face Liveness session.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * Object specifying the acceptable range of challenge versions.
 *
 * @public
 */
export interface Versions {
  /**
   * The desired minimum version for the challenge.
   *
   * @public
   */
  Minimum?: string | undefined;

  /**
   * The desired maximum version for the challenge.
   *
   * @public
   */
  Maximum?: string | undefined;
}

/**
 * An ordered list of preferred challenge type and versions.
 *
 * @public
 */
export interface ChallengePreference {
  /**
   * The types of challenges that have been selected for the Face Liveness session.
   *
   * @public
   */
  Type: ChallengeType | undefined;

  /**
   * The version of the challenges that have been selected for the Face Liveness session.
   *
   * @public
   */
  Versions?: Versions | undefined;
}

/**
 * Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.
 *
 * @public
 */
export interface ComparedSourceImageFace {
  /**
   * Bounding box of the face.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Confidence level that the selected bounding box contains a face.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Provides the input image either as bytes or an S3 object.
 *
 * You pass image bytes to an Amazon Rekognition API operation by using the `Bytes` property. For example, you would use the `Bytes` property to pass an image loaded from a local file system. Image bytes passed by using the `Bytes` property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations.
 *
 * For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.
 *
 * You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the `S3Object` property. Images stored in an S3 bucket do not need to be base64-encoded.
 *
 * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
 *
 * If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.
 *
 * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface Image {
  /**
   * Blob of image bytes up to 5 MBs. Note that the maximum image size you can pass to `DetectCustomLabels` is 4MB.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Identifies an S3 object as the image source.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * @public
 */
export interface CompareFacesRequest {
  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  SourceImage: Image | undefined;

  /**
   * The target image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  TargetImage: Image | undefined;

  /**
   * The minimum level of confidence in the face matches that a match must meet to be included in the `FaceMatches` array.
   *
   * @public
   */
  SimilarityThreshold?: number | undefined;

  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't compared. If you specify `AUTO`, Amazon Rekognition chooses the quality bar. If you specify `LOW`, `MEDIUM`, or `HIGH`, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify `NONE`, no filtering is performed. The default value is `NONE`.
   *
   * To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.
   *
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * Provides information about a face in a target image that matches the source image face analyzed by `CompareFaces`. The `Face` property contains the bounding box of the face in the target image. The `Similarity` property is the confidence that the source image face matches the face in the bounding box.
 *
 * @public
 */
export interface CompareFacesMatch {
  /**
   * Level of confidence that the faces match.
   *
   * @public
   */
  Similarity?: number | undefined;

  /**
   * Provides face metadata (bounding box and confidence that the bounding box actually contains a face).
   *
   * @public
   */
  Face?: ComparedFace | undefined;
}

/**
 * @public
 */
export interface CompareFacesResponse {
  /**
   * The face in the source image that was used for comparison.
   *
   * @public
   */
  SourceImageFace?: ComparedSourceImageFace | undefined;

  /**
   * An array of faces in the target image that match the source image face. Each `CompareFacesMatch` object provides the bounding box, the confidence level that the bounding box contains a face, and the similarity score for the face in the bounding box and the face in the source image.
   *
   * @public
   */
  FaceMatches?: CompareFacesMatch[] | undefined;

  /**
   * An array of faces in the target image that did not match the source image face.
   *
   * @public
   */
  UnmatchedFaces?: ComparedFace[] | undefined;

  /**
   * The value of `SourceImageOrientationCorrection` is always null.
   *
   * If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.
   *
   * Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.
   *
   * @public
   */
  SourceImageOrientationCorrection?: OrientationCorrection | undefined;

  /**
   * The value of `TargetImageOrientationCorrection` is always null.
   *
   * If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.
   *
   * Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.
   *
   * @public
   */
  TargetImageOrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for CreateStreamProcessor. Including this setting in the `CreateStreamProcessor` request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
 *
 * @public
 */
export interface ConnectedHomeSettings {
  /**
   * Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *
   * @public
   */
  Labels: string[] | undefined;

  /**
   * The minimum confidence required to label an object in the video.
   *
   * @public
   */
  MinConfidence?: number | undefined;
}

/**
 * The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.
 *
 * @public
 */
export interface ConnectedHomeSettingsForUpdate {
  /**
   * Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * The minimum confidence required to label an object in the video.
   *
   * @public
   */
  MinConfidence?: number | undefined;
}

/**
 * Contains information regarding the confidence and name of a detected content type.
 *
 * @public
 */
export interface ContentType {
  /**
   * The confidence level of the label given
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The name of the label
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface ModerationLabel {
  /**
   * Specifies the confidence that Amazon Rekognition has that the label has been correctly identified.
   *
   * If you don't specify the `MinConfidence` parameter in the call to `DetectModerationLabels`, the operation returns labels with a confidence value greater than or equal to 50 percent.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The label name for the type of unsafe content detected in the image.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name for the parent label. Labels at the top level of the hierarchy have the parent label `""`.
   *
   * @public
   */
  ParentName?: string | undefined;

  /**
   * The level of the moderation label with regard to its taxonomy, from 1 to 3.
   *
   * @public
   */
  TaxonomyLevel?: number | undefined;
}

/**
 * Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
 *
 * @public
 */
export interface ContentModerationDetection {
  /**
   * Time, in milliseconds from the beginning of the video, that the content moderation label was detected. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the moderated content first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * The content moderation label detected by in the stored video.
   *
   * @public
   */
  ModerationLabel?: ModerationLabel | undefined;

  /**
   * The time in milliseconds defining the start of the timeline segment containing a continuously detected moderation label.
   *
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * The time in milliseconds defining the end of the timeline segment containing a continuously detected moderation label.
   *
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * A list of predicted results for the type of content an image contains. For example, the image content might be from animation, sports, or a video game.
   *
   * @public
   */
  ContentTypes?: ContentType[] | undefined;
}

/**
 * The S3 bucket and folder location where training output is placed.
 *
 * @public
 */
export interface OutputConfig {
  /**
   * The S3 bucket where training output is placed.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The prefix applied to the training output files.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CopyProjectVersionRequest {
  /**
   * The ARN of the source project in the trusting AWS account.
   *
   * @public
   */
  SourceProjectArn: string | undefined;

  /**
   * The ARN of the model version in the source project that you want to copy to a destination project.
   *
   * @public
   */
  SourceProjectVersionArn: string | undefined;

  /**
   * The ARN of the project in the trusted AWS account that you want to copy the model version to.
   *
   * @public
   */
  DestinationProjectArn: string | undefined;

  /**
   * A name for the version of the model that's copied to the destination project.
   *
   * @public
   */
  VersionName: string | undefined;

  /**
   * The S3 bucket and folder location where the training output for the source model version is placed.
   *
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * The key-value tags to assign to the model version.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training results and manifest files written to the output Amazon S3 bucket (`OutputConfig`).
   *
   * If you choose to use your own KMS key, you need the following permissions on the KMS key.
   *
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - kms:Decrypt
   *
   * If you don't specify a value for `KmsKeyId`, images copied into the service are encrypted using a key that AWS owns and manages.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CopyProjectVersionResponse {
  /**
   * The ARN of the copied model version in the destination project.
   *
   * @public
   */
  ProjectVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCollectionRequest {
  /**
   * ID for the collection that you are creating.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the collection.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCollectionResponse {
  /**
   * HTTP status code indicating the result of the operation.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources.
   *
   * @public
   */
  CollectionArn?: string | undefined;

  /**
   * Version number of the face detection model associated with the collection you are creating.
   *
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * The source that Amazon Rekognition Custom Labels uses to create a dataset. To use an Amazon Sagemaker format manifest file, specify the S3 bucket location in the `GroundTruthManifest` field. The S3 bucket must be in your AWS account. To create a copy of an existing dataset, specify the Amazon Resource Name (ARN) of an existing dataset in `DatasetArn`.
 *
 * You need to specify a value for `DatasetArn` or `GroundTruthManifest`, but not both. if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs.
 *
 * For more information, see CreateDataset.
 *
 * @public
 */
export interface DatasetSource {
  /**
   * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   *
   * @public
   */
  GroundTruthManifest?: GroundTruthManifest | undefined;

  /**
   * The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy.
   *
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The source files for the dataset. You can specify the ARN of an existing dataset or specify the Amazon S3 bucket location of an Amazon Sagemaker format manifest file. If you don't specify `datasetSource`, an empty dataset is created. To add labeled images to the dataset, You can use the console or call UpdateDatasetEntries.
   *
   * @public
   */
  DatasetSource?: DatasetSource | undefined;

  /**
   * The type of the dataset. Specify `TRAIN` to create a training dataset. Specify `TEST` to create a test dataset.
   *
   * @public
   */
  DatasetType: DatasetType | undefined;

  /**
   * The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the dataset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The ARN of the created Amazon Rekognition Custom Labels dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * Contains settings that specify the location of an Amazon S3 bucket used to store the output of a Face Liveness session. Note that the S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system.
 *
 * @public
 */
export interface LivenessOutputConfig {
  /**
   * The path to an AWS Amazon S3 bucket used to store Face Liveness session results.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The prefix prepended to the output files for the Face Liveness session results.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * A session settings object. It contains settings for the operation to be performed. It accepts arguments for OutputConfig and AuditImagesLimit.
 *
 * @public
 */
export interface CreateFaceLivenessSessionRequestSettings {
  /**
   * Can specify the location of an Amazon S3 bucket, where reference and audit images will be stored. Note that the Amazon S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system. Requires that the caller has the `s3:PutObject` permission on the Amazon S3 bucket.
   *
   * @public
   */
  OutputConfig?: LivenessOutputConfig | undefined;

  /**
   * Number of audit images to be returned back. Takes an integer between 0-4. Any integer less than 0 will return 0, any integer above 4 will return 4 images in the response. By default, it is set to 0. The limit is best effort and is based on the actual duration of the selfie-video.
   *
   * @public
   */
  AuditImagesLimit?: number | undefined;

  /**
   * Indicates preferred challenge types and versions for the Face Liveness session to be created.
   *
   * @public
   */
  ChallengePreferences?: ChallengePreference[] | undefined;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionRequest {
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit images and reference images.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A session settings object. It contains settings for the operation to be performed. For Face Liveness, it accepts `OutputConfig` and `AuditImagesLimit`.
   *
   * @public
   */
  Settings?: CreateFaceLivenessSessionRequestSettings | undefined;

  /**
   * Idempotent token is used to recognize the Face Liveness request. If the same token is used with multiple `CreateFaceLivenessSession` requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionResponse {
  /**
   * A unique 128-bit UUID identifying a Face Liveness session. A new sessionID must be used for every Face Liveness check. If a given sessionID is used for subsequent Face Liveness checks, the checks will fail. Additionally, a SessionId expires 3 minutes after it's sent, making all Liveness data associated with the session (e.g., sessionID, reference image, audit images, etc.) unavailable.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * The name of the project to create.
   *
   * @public
   */
  ProjectName: string | undefined;

  /**
   * Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default.
   *
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining is done as a best effort. Required argument for Content Moderation. Applicable only to adapters.
   *
   * @public
   */
  AutoUpdate?: ProjectAutoUpdate | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the project.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * The Amazon Resource Name (ARN) of the new project. You can use the ARN to configure IAM access to the project.
   *
   * @public
   */
  ProjectArn?: string | undefined;
}

/**
 * Configuration options for Content Moderation training.
 *
 * @public
 */
export interface CustomizationFeatureContentModerationConfig {
  /**
   * The confidence level you plan to use to identify if unsafe content is present during inference.
   *
   * @public
   */
  ConfidenceThreshold?: number | undefined;
}

/**
 * Feature specific configuration for the training job. Configuration provided for the job must match the feature type parameter associated with project. If configuration and feature type do not match an InvalidParameterException is returned.
 *
 * @public
 */
export interface CustomizationFeatureConfig {
  /**
   * Configuration options for Custom Moderation training.
   *
   * @public
   */
  ContentModeration?: CustomizationFeatureContentModerationConfig | undefined;
}

/**
 * The dataset used for testing. Optionally, if `AutoCreate` is set, Amazon Rekognition uses the training dataset to create a test dataset with a temporary split of the training dataset.
 *
 * @public
 */
export interface TestingData {
  /**
   * The assets used for testing.
   *
   * @public
   */
  Assets?: Asset[] | undefined;

  /**
   * If specified, Rekognition splits training dataset to create a test dataset for the training job.
   *
   * @public
   */
  AutoCreate?: boolean | undefined;
}

/**
 * The dataset used for training.
 *
 * @public
 */
export interface TrainingData {
  /**
   * A manifest file that contains references to the training images and ground-truth annotations.
   *
   * @public
   */
  Assets?: Asset[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectVersionRequest {
  /**
   * The ARN of the Amazon Rekognition project that will manage the project version you want to train.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * A name for the version of the project version. This value must be unique.
   *
   * @public
   */
  VersionName: string | undefined;

  /**
   * The Amazon S3 bucket location to store the results of training. The bucket can be any S3 bucket in your AWS account. You need `s3:PutObject` permission on the bucket.
   *
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * Specifies an external manifest that the services uses to train the project version. If you specify `TrainingData` you must also specify `TestingData`. The project must not have any associated datasets.
   *
   * @public
   */
  TrainingData?: TrainingData | undefined;

  /**
   * Specifies an external manifest that the service uses to test the project version. If you specify `TestingData` you must also specify `TrainingData`. The project must not have any associated datasets.
   *
   * @public
   */
  TestingData?: TestingData | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the project version.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training images, test images, and manifest files copied into the service for the project version. Your source images are unaffected. The key is also used to encrypt training results and manifest files written to the output Amazon S3 bucket (`OutputConfig`).
   *
   * If you choose to use your own KMS key, you need the following permissions on the KMS key.
   *
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - kms:Decrypt
   *
   * If you don't specify a value for `KmsKeyId`, images copied into the service are encrypted using a key that AWS owns and manages.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A description applied to the project version being created.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * Feature-specific configuration of the training job. If the job configuration does not match the feature type associated with the project, an InvalidParameterException is returned.
   *
   * @public
   */
  FeatureConfig?: CustomizationFeatureConfig | undefined;
}

/**
 * @public
 */
export interface CreateProjectVersionResponse {
  /**
   * The ARN of the model or the project version that was created. Use `DescribeProjectVersion` to get the current status of the training operation.
   *
   * @public
   */
  ProjectVersionArn?: string | undefined;
}

/**
 * Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
 *
 * @public
 */
export interface StreamProcessorDataSharingPreference {
  /**
   * If this option is set to true, you choose to share data with Rekognition to improve model performance.
   *
   * @public
   */
  OptIn: boolean | undefined;
}

/**
 * Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface KinesisVideoStream {
  /**
   * ARN of the Kinesis video stream stream that streams the source video.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about the source streaming video.
 *
 * @public
 */
export interface StreamProcessorInput {
  /**
   * The Kinesis video stream input stream for the source streaming video.
   *
   * @public
   */
  KinesisVideoStream?: KinesisVideoStream | undefined;
}

/**
 * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.
 *
 * Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.
 *
 * Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.
 *
 * @public
 */
export interface StreamProcessorNotificationChannel {
  /**
   * The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
   *
   * @public
   */
  SNSTopicArn: string | undefined;
}

/**
 * The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface KinesisDataStream {
  /**
   * ARN of the output Amazon Kinesis Data Streams stream.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The name of the Amazon S3 bucket you want to associate with the streaming video project. You must be the owner of the Amazon S3 bucket.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The prefix value of the location within the bucket that you want the information to be published to. For more information, see [Using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html).
   *
   * @public
   */
  KeyPrefix?: string | undefined;
}

/**
 * Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface StreamProcessorOutput {
  /**
   * The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.
   *
   * @public
   */
  KinesisDataStream?: KinesisDataStream | undefined;

  /**
   * The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation.
   *
   * @public
   */
  S3Destination?: S3Destination | undefined;
}

/**
 * The X and Y coordinates of a point on an image or video frame. The X and Y values are ratios of the overall image size or video resolution. For example, if an input image is 700x200 and the values are X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.
 *
 * An array of `Point` objects makes up a `Polygon`. A `Polygon` is returned by DetectText and by DetectCustomLabels `Polygon` represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface Point {
  /**
   * The value of the X coordinate for a point on a `Polygon`.
   *
   * @public
   */
  X?: number | undefined;

  /**
   * The value of the Y coordinate for a point on a `Polygon`.
   *
   * @public
   */
  Y?: number | undefined;
}

/**
 * Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a `BoundingBox` or `Polygon` to set a region of the screen.
 *
 * A word, face, or label is included in the region if it is more than half in that region. If there is more than one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region is kept in the results.
 *
 * @public
 */
export interface RegionOfInterest {
  /**
   * The box representing a region of interest on screen.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Specifies a shape made up of up to 10 `Point` objects to define a region of interest.
   *
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * Input face recognition parameters for an Amazon Rekognition stream processor. Includes the collection to use for face recognition and the face attributes to detect. Defining the settings is required in the request parameter for CreateStreamProcessor.
 *
 * @public
 */
export interface FaceSearchSettings {
  /**
   * The ID of a collection that contains faces that you want to search for.
   *
   * @public
   */
  CollectionId?: string | undefined;

  /**
   * Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower than 80 are set to 80.
   *
   * @public
   */
  FaceMatchThreshold?: number | undefined;
}

/**
 * Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor. You can use `FaceSearch` to recognize faces in a streaming video, or you can use `ConnectedHome` to detect labels.
 *
 * @public
 */
export interface StreamProcessorSettings {
  /**
   * Face search settings to use on a streaming video.
   *
   * @public
   */
  FaceSearch?: FaceSearchSettings | undefined;

  /**
   * Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for CreateStreamProcessor. Including this setting in the `CreateStreamProcessor` request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
   *
   * @public
   */
  ConnectedHome?: ConnectedHomeSettings | undefined;
}

/**
 * @public
 */
export interface CreateStreamProcessorRequest {
  /**
   * Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is `StreamProcessorInput`. This is required for both face search and label detection stream processors.
   *
   * @public
   */
  Input: StreamProcessorInput | undefined;

  /**
   * Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is `StreamProcessorOutput`. This must be a S3Destination of an Amazon S3 bucket that you own for a label detection stream processor or a Kinesis data stream ARN for a face search stream processor.
   *
   * @public
   */
  Output: StreamProcessorOutput | undefined;

  /**
   * An identifier you assign to the stream processor. You can use `Name` to manage the stream processor. For example, you can get the current status of the stream processor by calling DescribeStreamProcessor. `Name` is idempotent. This is required for both face search and label detection stream processors.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Input parameters used in a streaming video analyzed by a stream processor. You can use `FaceSearch` to recognize faces in a streaming video, or you can use `ConnectedHome` to detect labels.
   *
   * @public
   */
  Settings: StreamProcessorSettings | undefined;

  /**
   * The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the stream processor.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.
   *
   * Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.
   *
   * Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.
   *
   * @public
   */
  NotificationChannel?: StreamProcessorNotificationChannel | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor. You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt results and data published to your Amazon S3 bucket, which includes image frames and hero images. Your source images are unaffected.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
   *
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;

  /**
   * Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
   *
   * @public
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference | undefined;
}

/**
 * @public
 */
export interface CreateStreamProcessorResponse {
  /**
   * Amazon Resource Number for the newly created stream processor.
   *
   * @public
   */
  StreamProcessorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The ID of an existing collection to which the new UserID needs to be created.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * ID for the UserID to be created. This ID needs to be unique within the collection.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Idempotent token used to identify the request to `CreateUser`. If you use the same token with multiple `CreateUser` requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * Information about where an object (DetectCustomLabels) or text (DetectText) is located on an image.
 *
 * @public
 */
export interface Geometry {
  /**
   * An axis-aligned coarse representation of the detected item's location on the image.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Within the bounding box, a fine-grained polygon around the detected item.
   *
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * A custom label detected in an image by a call to DetectCustomLabels.
 *
 * @public
 */
export interface CustomLabel {
  /**
   * The name of the custom label.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The confidence that the model has in the detection of the custom label. The range is 0-100. A higher value indicates a higher confidence.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The location of the detected object on the image that corresponds to the custom label. Includes an axis aligned coarse bounding box surrounding the object and a finer grain polygon for more accurate spatial information.
   *
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * Describes updates or additions to a dataset. A Single update or addition is an entry (JSON Line) that provides information about a single image. To update an existing entry, you match the `source-ref` field of the update entry with the `source-ref` filed of the entry that you want to update. If the `source-ref` field doesn't match an existing entry, the entry is added to dataset as a new entry.
 *
 * @public
 */
export interface DatasetChanges {
  /**
   * A Base64-encoded binary data object containing one or JSON lines that either update the dataset or are additions to the dataset. You change a dataset by calling UpdateDatasetEntries. If you are using an AWS SDK to call `UpdateDatasetEntries`, you don't need to encode `Changes` as the SDK encodes the data for you.
   *
   * For example JSON lines, see Image-Level labels in manifest files and and Object localization in manifest files in the *Amazon Rekognition Custom Labels Developer Guide*.
   *
   * @public
   */
  GroundTruth: Uint8Array | undefined;
}

/**
 * Provides statistics about a dataset. For more information, see DescribeDataset.
 *
 * @public
 */
export interface DatasetStats {
  /**
   * The total number of images in the dataset that have labels.
   *
   * @public
   */
  LabeledEntries?: number | undefined;

  /**
   * The total number of images in the dataset.
   *
   * @public
   */
  TotalEntries?: number | undefined;

  /**
   * The total number of labels declared in the dataset.
   *
   * @public
   */
  TotalLabels?: number | undefined;

  /**
   * The total number of entries that contain at least one error.
   *
   * @public
   */
  ErrorEntries?: number | undefined;
}

/**
 * A description for a dataset. For more information, see DescribeDataset.
 *
 * The status fields `Status`, `StatusMessage`, and `StatusMessageCode` reflect the last operation on the dataset.
 *
 * @public
 */
export interface DatasetDescription {
  /**
   * The Unix timestamp for the time and date that the dataset was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The Unix timestamp for the date and time that the dataset was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The status of the dataset.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * The status message for the dataset.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed.
   *
   * @public
   */
  StatusMessageCode?: DatasetStatusMessageCode | undefined;

  /**
   * The status message code for the dataset.
   *
   * @public
   */
  DatasetStats?: DatasetStats | undefined;
}

/**
 * Statistics about a label used in a dataset. For more information, see DatasetLabelDescription.
 *
 * @public
 */
export interface DatasetLabelStats {
  /**
   * The total number of images that use the label.
   *
   * @public
   */
  EntryCount?: number | undefined;

  /**
   * The total number of images that have the label assigned to a bounding box.
   *
   * @public
   */
  BoundingBoxCount?: number | undefined;
}

/**
 * Describes a dataset label. For more information, see ListDatasetLabels.
 *
 * @public
 */
export interface DatasetLabelDescription {
  /**
   * The name of the label.
   *
   * @public
   */
  LabelName?: string | undefined;

  /**
   * Statistics about the label.
   *
   * @public
   */
  LabelStats?: DatasetLabelStats | undefined;
}

/**
 * Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see ProjectDescription.
 *
 * @public
 */
export interface DatasetMetadata {
  /**
   * The Unix timestamp for the date and time that the dataset was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The type of the dataset.
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The status for the dataset.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * The status message for the dataset.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed.
   *
   * @public
   */
  StatusMessageCode?: DatasetStatusMessageCode | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * ID of the collection to delete.
   *
   * @public
   */
  CollectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * HTTP status code that indicates the result of the operation.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {}

/**
 * @public
 */
export interface DeleteFacesRequest {
  /**
   * Collection from which to remove the specific faces.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * An array of face IDs to delete.
   *
   * @public
   */
  FaceIds: string[] | undefined;
}

/**
 * Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully deleted.
 *
 * @public
 */
export interface UnsuccessfulFaceDeletion {
  /**
   * A unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;

  /**
   * A provided ID for the UserID. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The reason why the deletion was unsuccessful.
   *
   * @public
   */
  Reasons?: UnsuccessfulFaceDeletionReason[] | undefined;
}

/**
 * @public
 */
export interface DeleteFacesResponse {
  /**
   * An array of strings (face IDs) of the faces that were deleted.
   *
   * @public
   */
  DeletedFaces?: string[] | undefined;

  /**
   * An array of any faces that weren't deleted.
   *
   * @public
   */
  UnsuccessfulFaceDeletions?: UnsuccessfulFaceDeletion[] | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * The Amazon Resource Name (ARN) of the project that you want to delete.
   *
   * @public
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * The current status of the delete project operation.
   *
   * @public
   */
  Status?: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * The name of the policy that you want to delete.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The ID of the project policy revision that you want to delete.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectPolicyResponse {}

/**
 * @public
 */
export interface DeleteProjectVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the project version that you want to delete.
   *
   * @public
   */
  ProjectVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectVersionResponse {
  /**
   * The status of the deletion operation.
   *
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteStreamProcessorRequest {
  /**
   * The name of the stream processor you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamProcessorResponse {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The ID of an existing collection from which the UserID needs to be deleted.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * ID for the UserID to be deleted.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Idempotent token used to identify the request to `DeleteUser`. If you use the same token with multiple `DeleteUser`requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 */
export interface DescribeCollectionRequest {
  /**
   * The ID of the collection to describe.
   *
   * @public
   */
  CollectionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCollectionResponse {
  /**
   * The number of faces that are indexed into the collection. To index faces into a collection, use IndexFaces.
   *
   * @public
   */
  FaceCount?: number | undefined;

  /**
   * The version of the face model that's used by the collection for face detection.
   *
   * For more information, see Model versioning in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection.
   *
   * @public
   */
  CollectionARN?: string | undefined;

  /**
   * The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The number of UserIDs assigned to the specified colleciton.
   *
   * @public
   */
  UserCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset that you want to describe.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The description for the dataset.
   *
   * @public
   */
  DatasetDescription?: DatasetDescription | undefined;
}

/**
 * @public
 */
export interface DescribeProjectsRequest {
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of the projects that you want Rekognition to describe. If you don't specify a value, the response includes descriptions for all the projects in your AWS account.
   *
   * @public
   */
  ProjectNames?: string[] | undefined;

  /**
   * Specifies the type of customization to filter projects by. If no value is specified, CUSTOM_LABELS is used as a default.
   *
   * @public
   */
  Features?: CustomizationFeature[] | undefined;
}

/**
 * A description of an Amazon Rekognition Custom Labels project. For more information, see DescribeProjects.
 *
 * @public
 */
export interface ProjectDescription {
  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn?: string | undefined;

  /**
   * The Unix timestamp for the date and time that the project was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The current status of the project.
   *
   * @public
   */
  Status?: ProjectStatus | undefined;

  /**
   * Information about the training and test datasets in the project.
   *
   * @public
   */
  Datasets?: DatasetMetadata[] | undefined;

  /**
   * Specifies the project that is being customized.
   *
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to adapters.
   *
   * @public
   */
  AutoUpdate?: ProjectAutoUpdate | undefined;
}

/**
 * @public
 */
export interface DescribeProjectsResponse {
  /**
   * A list of project descriptions. The list is sorted by the date and time the projects are created.
   *
   * @public
   */
  ProjectDescriptions?: ProjectDescription[] | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the project that contains the model/adapter you want to describe.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * A list of model or project version names that you want to describe. You can add up to 10 model or project version names to the list. If you don't specify a value, all project version descriptions are returned. A version name is part of a project version ARN. For example, `my-model.2020-01-21T09.10.15` is the version name in the following ARN. `arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/my-model.2020-01-21T09.10.15/1234567890123`.
   *
   * @public
   */
  VersionNames?: string[] | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label.
 *
 * You get the training summary S3 bucket location by calling DescribeProjectVersions.
 *
 * @public
 */
export interface Summary {
  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * The evaluation results for the training of a model.
 *
 * @public
 */
export interface EvaluationResult {
  /**
   * The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision and recall performance of the model as a single value. A higher value indicates better precision and recall performance. A lower score indicates that precision, recall, or both are performing poorly.
   *
   * @public
   */
  F1Score?: number | undefined;

  /**
   * The S3 bucket that contains the training summary.
   *
   * @public
   */
  Summary?: Summary | undefined;
}

/**
 * Contains the Amazon S3 bucket location of the validation data for a model training job.
 *
 * The validation data includes error information for individual JSON Lines in the dataset. For more information, see *Debugging a Failed Model Training* in the Amazon Rekognition Custom Labels Developer Guide.
 *
 * You get the `ValidationData` object for the training dataset (TrainingDataResult) and the test dataset (TestingDataResult) by calling DescribeProjectVersions.
 *
 * The assets array contains a single Asset object. The GroundTruthManifest field of the Asset object contains the S3 bucket location of the validation data.
 *
 * @public
 */
export interface ValidationData {
  /**
   * The assets that comprise the validation data.
   *
   * @public
   */
  Assets?: Asset[] | undefined;
}

/**
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
 *
 * @public
 */
export interface TestingDataResult {
  /**
   * The testing dataset that was supplied for training.
   *
   * @public
   */
  Input?: TestingData | undefined;

  /**
   * The subset of the dataset that was actually tested. Some images (assets) might not be tested due to file formatting and other issues.
   *
   * @public
   */
  Output?: TestingData | undefined;

  /**
   * The location of the data validation manifest. The data validation manifest is created for the test dataset during model training.
   *
   * @public
   */
  Validation?: ValidationData | undefined;
}

/**
 * The data validation manifest created for the training dataset during model training.
 *
 * @public
 */
export interface TrainingDataResult {
  /**
   * The training data that you supplied.
   *
   * @public
   */
  Input?: TrainingData | undefined;

  /**
   * Reference to images (assets) that were actually used during training with trained model predictions.
   *
   * @public
   */
  Output?: TrainingData | undefined;

  /**
   * A manifest that you supplied for training, with validation results for each line.
   *
   * @public
   */
  Validation?: ValidationData | undefined;
}

/**
 * A description of a version of a Amazon Rekognition project version.
 *
 * @public
 */
export interface ProjectVersionDescription {
  /**
   * The Amazon Resource Name (ARN) of the project version.
   *
   * @public
   */
  ProjectVersionArn?: string | undefined;

  /**
   * The Unix datetime for the date and time that training started.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The minimum number of inference units used by the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.
   *
   * @public
   */
  MinInferenceUnits?: number | undefined;

  /**
   * The current status of the model version.
   *
   * @public
   */
  Status?: ProjectVersionStatus | undefined;

  /**
   * A descriptive message for an error or warning that occurred.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The duration, in seconds, that you were billed for a successful training of the model version. This value is only returned if the model version has been successfully trained.
   *
   * @public
   */
  BillableTrainingTimeInSeconds?: number | undefined;

  /**
   * The Unix date and time that training of the model ended.
   *
   * @public
   */
  TrainingEndTimestamp?: Date | undefined;

  /**
   * The location where training results are saved.
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * Contains information about the training results.
   *
   * @public
   */
  TrainingDataResult?: TrainingDataResult | undefined;

  /**
   * Contains information about the testing results.
   *
   * @public
   */
  TestingDataResult?: TestingDataResult | undefined;

  /**
   * The training results. `EvaluationResult` is only returned if training is successful.
   *
   * @public
   */
  EvaluationResult?: EvaluationResult | undefined;

  /**
   * The location of the summary manifest. The summary manifest provides aggregate data validation results for the training and test datasets.
   *
   * @public
   */
  ManifestSummary?: GroundTruthManifest | undefined;

  /**
   * The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.
   *
   * @public
   */
  MaxInferenceUnits?: number | undefined;

  /**
   * If the model version was copied from a different project, `SourceProjectVersionArn` contains the ARN of the source model version.
   *
   * @public
   */
  SourceProjectVersionArn?: string | undefined;

  /**
   * A user-provided description of the project version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The feature that was customized.
   *
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * The base detection model version used to create the project version.
   *
   * @public
   */
  BaseModelVersion?: string | undefined;

  /**
   * Feature specific configuration that was applied during training.
   *
   * @public
   */
  FeatureConfig?: CustomizationFeatureConfig | undefined;
}

/**
 * @public
 */
export interface DescribeProjectVersionsResponse {
  /**
   * A list of project version descriptions. The list is sorted by the creation date and time of the project versions, latest to earliest.
   *
   * @public
   */
  ProjectVersionDescriptions?: ProjectVersionDescription[] | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamProcessorRequest {
  /**
   * Name of the stream processor for which you want information.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamProcessorResponse {
  /**
   * Name of the stream processor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * ARN of the stream processor.
   *
   * @public
   */
  StreamProcessorArn?: string | undefined;

  /**
   * Current status of the stream processor.
   *
   * @public
   */
  Status?: StreamProcessorStatus | undefined;

  /**
   * Detailed status message about the stream processor.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Date and time the stream processor was created
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves from a running state to a failed state, or when the user starts or stops the stream processor.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * Kinesis video stream that provides the source streaming video.
   *
   * @public
   */
  Input?: StreamProcessorInput | undefined;

  /**
   * Kinesis data stream to which Amazon Rekognition Video puts the analysis results.
   *
   * @public
   */
  Output?: StreamProcessorOutput | undefined;

  /**
   * ARN of the IAM role that allows access to the stream processor.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Input parameters used in a streaming video analyzed by a stream processor. You can use `FaceSearch` to recognize faces in a streaming video, or you can use `ConnectedHome` to detect labels.
   *
   * @public
   */
  Settings?: StreamProcessorSettings | undefined;

  /**
   * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.
   *
   * Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.
   *
   * Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.
   *
   * @public
   */
  NotificationChannel?: StreamProcessorNotificationChannel | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;

  /**
   * Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
   *
   * @public
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference | undefined;
}

/**
 * @public
 */
export interface DetectCustomLabelsRequest {
  /**
   * The ARN of the model version that you want to use. Only models associated with Custom Labels projects accepted by the operation. If a provided ARN refers to a model version associated with a project for a different feature type, then an InvalidParameterException is returned.
   *
   * @public
   */
  ProjectVersionArn: string | undefined;

  /**
   * Provides the input image either as bytes or an S3 object.
   *
   * You pass image bytes to an Amazon Rekognition API operation by using the `Bytes` property. For example, you would use the `Bytes` property to pass an image loaded from a local file system. Image bytes passed by using the `Bytes` property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations.
   *
   * For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.
   *
   * You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the `S3Object` property. Images stored in an S3 bucket do not need to be base64-encoded.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Maximum number of results you want the service to return in the response. The service returns the specified number of highest confidence labels ranked from highest confidence to lowest.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies the minimum confidence level for the labels to return. `DetectCustomLabels` doesn't return any labels with a confidence value that's lower than this specified value. If you specify a value of 0, `DetectCustomLabels` returns all labels, regardless of the assumed threshold applied to each label. If you don't specify a value for `MinConfidence`, `DetectCustomLabels` returns labels based on the assumed threshold of each label.
   *
   * @public
   */
  MinConfidence?: number | undefined;
}

/**
 * @public
 */
export interface DetectCustomLabelsResponse {
  /**
   * An array of custom labels detected in the input image.
   *
   * @public
   */
  CustomLabels?: CustomLabel[] | undefined;
}

/**
 * @public
 */
export interface DetectFacesRequest {
  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * An array of facial attributes you want to be returned. A `DEFAULT` subset of facial attributes - `BoundingBox`, `Confidence`, `Pose`, `Quality`, and `Landmarks` - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using [`"DEFAULT", "FACE_OCCLUDED"`] or just [`"FACE_OCCLUDED"`]. You can request for all facial attributes by using [`"ALL"]`. Requesting more attributes may increase response time.
   *
   * If you provide both, `["ALL", "DEFAULT"]`, the service uses a logical "AND" operator to determine which attributes to return (in this case, all attributes).
   *
   * Note that while the FaceOccluded and EyeDirection attributes are supported when using `DetectFaces`, they aren't supported when analyzing videos with `StartFaceDetection` and `GetFaceDetection`.
   *
   * @public
   */
  Attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DetectFacesResponse {
  /**
   * Details of each face found in the image.
   *
   * @public
   */
  FaceDetails?: FaceDetail[] | undefined;

  /**
   * The value of `OrientationCorrection` is always null.
   *
   * If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.
   *
   * Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.
   *
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * A set of parameters that allow you to filter out certain results from your returned results.
 *
 * @public
 */
export interface DetectionFilter {
  /**
   * Sets the confidence of word detection. Words with detection confidence below this will be excluded from the result. Values should be between 0 and 100. The default MinConfidence is 80.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * Sets the minimum height of the word bounding box. Words with bounding box heights lesser than this value will be excluded from the result. Value is relative to the video frame height.
   *
   * @public
   */
  MinBoundingBoxHeight?: number | undefined;

  /**
   * Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than this value will be excluded from the result. Value is relative to the video frame width.
   *
   * @public
   */
  MinBoundingBoxWidth?: number | undefined;
}

/**
 * Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see [Detecting Labels](https://docs.aws.amazon.com/rekognition/latest/dg/labels.html).
 *
 * @public
 */
export interface GeneralLabelsSettings {
  /**
   * The labels that should be included in the return from DetectLabels.
   *
   * @public
   */
  LabelInclusionFilters?: string[] | undefined;

  /**
   * The labels that should be excluded from the return from DetectLabels.
   *
   * @public
   */
  LabelExclusionFilters?: string[] | undefined;

  /**
   * The label categories that should be included in the return from DetectLabels.
   *
   * @public
   */
  LabelCategoryInclusionFilters?: string[] | undefined;

  /**
   * The label categories that should be excluded from the return from DetectLabels.
   *
   * @public
   */
  LabelCategoryExclusionFilters?: string[] | undefined;
}

/**
 * Settings for the IMAGE_PROPERTIES feature type.
 *
 * @public
 */
export interface DetectLabelsImagePropertiesSettings {
  /**
   * The maximum number of dominant colors to return when detecting labels in an image. The default value is 10.
   *
   * @public
   */
  MaxDominantColors?: number | undefined;
}

/**
 * Settings for the DetectLabels request. Settings can include filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification of a maximum number of dominant colors.
 *
 * @public
 */
export interface DetectLabelsSettings {
  /**
   * Contains the specified filters for GENERAL_LABELS.
   *
   * @public
   */
  GeneralLabels?: GeneralLabelsSettings | undefined;

  /**
   * Contains the chosen number of maximum dominant colors in an image.
   *
   * @public
   */
  ImageProperties?: DetectLabelsImagePropertiesSettings | undefined;
}

/**
 * @public
 */
export interface DetectLabelsRequest {
  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. Images stored in an S3 Bucket do not need to be base64-encoded.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.
   *
   * @public
   */
  MaxLabels?: number | undefined;

  /**
   * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value.
   *
   * If `MinConfidence` is not specified, the operation returns labels with a confidence values greater than or equal to 55 percent. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection feature, while specifying IMAGE_PROPERTIES returns information regarding image color and quality. If no option is specified GENERAL_LABELS is used by default.
   *
   * @public
   */
  Features?: DetectLabelsFeatureName[] | undefined;

  /**
   * A list of the filters to be applied to returned detected labels and image properties. Specified filters can be inclusive, exclusive, or a combination of both. Filters can be used for individual labels or label categories. The exact label names or label categories must be supplied. For a full list of labels and label categories, see [Detecting labels](https://docs.aws.amazon.com/rekognition/latest/dg/labels.html).
   *
   * @public
   */
  Settings?: DetectLabelsSettings | undefined;
}

/**
 * A description of the dominant colors in an image.
 *
 * @public
 */
export interface DominantColor {
  /**
   * The Red RGB value for a dominant color.
   *
   * @public
   */
  Red?: number | undefined;

  /**
   * The Blue RGB value for a dominant color.
   *
   * @public
   */
  Blue?: number | undefined;

  /**
   * The Green RGB value for a dominant color.
   *
   * @public
   */
  Green?: number | undefined;

  /**
   * The Hex code equivalent of the RGB values for a dominant color.
   *
   * @public
   */
  HexCode?: string | undefined;

  /**
   * The CSS color name of a dominant color.
   *
   * @public
   */
  CSSColor?: string | undefined;

  /**
   * One of 12 simplified color names applied to a dominant color.
   *
   * @public
   */
  SimplifiedColor?: string | undefined;

  /**
   * The percentage of image pixels that have a given dominant color.
   *
   * @public
   */
  PixelPercent?: number | undefined;
}

/**
 * The quality of an image provided for label detection, with regard to brightness, sharpness, and contrast.
 *
 * @public
 */
export interface DetectLabelsImageQuality {
  /**
   * The brightness of an image provided for label detection.
   *
   * @public
   */
  Brightness?: number | undefined;

  /**
   * The sharpness of an image provided for label detection.
   *
   * @public
   */
  Sharpness?: number | undefined;

  /**
   * The contrast of an image provided for label detection.
   *
   * @public
   */
  Contrast?: number | undefined;
}

/**
 * The background of the image with regard to image quality and dominant colors.
 *
 * @public
 */
export interface DetectLabelsImageBackground {
  /**
   * The quality of the image background as defined by brightness and sharpness.
   *
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * The dominant colors found in the background of an image, defined with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).
   *
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * The foreground of the image with regard to image quality and dominant colors.
 *
 * @public
 */
export interface DetectLabelsImageForeground {
  /**
   * The quality of the image foreground as defined by brightness and sharpness.
   *
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * The dominant colors found in the foreground of an image, defined with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).
   *
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * Information about the quality and dominant colors of an input image. Quality and color information is returned for the entire image, foreground, and background.
 *
 * @public
 */
export interface DetectLabelsImageProperties {
  /**
   * Information about the quality of the image foreground as defined by brightness, sharpness, and contrast. The higher the value the greater the brightness, sharpness, and contrast respectively.
   *
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * Information about the dominant colors found in an image, described with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).
   *
   * @public
   */
  DominantColors?: DominantColor[] | undefined;

  /**
   * Information about the properties of an image’s foreground, including the foreground’s quality and dominant colors, including the quality and dominant colors of the image.
   *
   * @public
   */
  Foreground?: DetectLabelsImageForeground | undefined;

  /**
   * Information about the properties of an image’s background, including the background’s quality and dominant colors, including the quality and dominant colors of the image.
   *
   * @public
   */
  Background?: DetectLabelsImageBackground | undefined;
}

/**
 * A potential alias of for a given label.
 *
 * @public
 */
export interface LabelAlias {
  /**
   * The name of an alias for a given label.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The category that applies to a given label.
 *
 * @public
 */
export interface LabelCategory {
  /**
   * The name of a category that applies to a given label.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * An instance of a label returned by Amazon Rekognition Image (DetectLabels) or by Amazon Rekognition Video (GetLabelDetection).
 *
 * @public
 */
export interface Instance {
  /**
   * The position of the label instance on the image.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * The confidence that Amazon Rekognition has in the accuracy of the bounding box.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The dominant colors found in an individual instance of a label.
   *
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * A parent label for a label. A label can have 0, 1, or more parents.
 *
 * @public
 */
export interface Parent {
  /**
   * The name of the parent label.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.
 *
 * @public
 */
export interface Label {
  /**
   * The name (label) of the object or scene.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Level of confidence.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * If `Label` represents an object, `Instances` contains the bounding boxes for each instance of the detected object. Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * The parent labels for a label. The response includes all ancestor labels.
   *
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * A list of potential aliases for a given label.
   *
   * @public
   */
  Aliases?: LabelAlias[] | undefined;

  /**
   * A list of the categories associated with a given label.
   *
   * @public
   */
  Categories?: LabelCategory[] | undefined;
}

/**
 * @public
 */
export interface DetectLabelsResponse {
  /**
   * An array of labels for the real-world objects detected.
   *
   * @public
   */
  Labels?: Label[] | undefined;

  /**
   * The value of `OrientationCorrection` is always null.
   *
   * If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.
   *
   * Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.
   *
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;

  /**
   * Version number of the label detection model that was used to detect labels.
   *
   * @public
   */
  LabelModelVersion?: string | undefined;

  /**
   * Information about the properties of the input image, such as brightness, sharpness, contrast, and dominant colors.
   *
   * @public
   */
  ImageProperties?: DetectLabelsImageProperties | undefined;
}

/**
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
 *
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * Sets whether the input image is free of personally identifiable information.
   *
   * @public
   */
  ContentClassifiers?: ContentClassifier[] | undefined;
}

/**
 * Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
 *
 * @public
 */
export interface HumanLoopConfig {
  /**
   * The name of the human review used for this image. This should be kept unique within a region.
   *
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by using the Amazon Sagemaker [CreateFlowDefinition](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html) Operation.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * Sets attributes of the input data.
   *
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * @public
 */
export interface DetectModerationLabelsRequest {
  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value.
   *
   * If you don't specify `MinConfidence`, the operation returns labels with confidence values greater than or equal to 50 percent.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * Sets up the configuration for human evaluation, including the FlowDefinition the image will be sent to.
   *
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * Identifier for the custom adapter. Expects the ProjectVersionArn as a value. Use the CreateProject or CreateProjectVersion APIs to create a custom adapter.
   *
   * @public
   */
  ProjectVersion?: string | undefined;
}

/**
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
 *
 * @public
 */
export interface HumanLoopActivationOutput {
  /**
   * The Amazon Resource Name (ARN) of the HumanLoop created.
   *
   * @public
   */
  HumanLoopArn?: string | undefined;

  /**
   * Shows if and why human review was needed.
   *
   * @public
   */
  HumanLoopActivationReasons?: string[] | undefined;

  /**
   * Shows the result of condition evaluations, including those conditions which activated a human review.
   *
   * @public
   */
  HumanLoopActivationConditionsEvaluationResults?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface DetectModerationLabelsResponse {
  /**
   * Array of detected Moderation labels. For video operations, this includes the time, in milliseconds from the start of the video, they were detected.
   *
   * @public
   */
  ModerationLabels?: ModerationLabel[] | undefined;

  /**
   * Version number of the base moderation detection model that was used to detect unsafe content.
   *
   * @public
   */
  ModerationModelVersion?: string | undefined;

  /**
   * Shows the results of the human in the loop evaluation.
   *
   * @public
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput | undefined;

  /**
   * Identifier of the custom adapter that was used during inference. If during inference the adapter was EXPIRED, then the parameter will not be returned, indicating that a base moderation detection project version was used.
   *
   * @public
   */
  ProjectVersion?: string | undefined;

  /**
   * A list of predicted results for the type of content an image contains. For example, the image content might be from animation, sports, or a video game.
   *
   * @public
   */
  ContentTypes?: ContentType[] | undefined;
}

/**
 * Specifies summary attributes to return from a call to DetectProtectiveEquipment. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the `Summary` (ProtectiveEquipmentSummary) field of the response from `DetectProtectiveEquipment`. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see ProtectiveEquipmentSummary.
 *
 * @public
 */
export interface ProtectiveEquipmentSummarizationAttributes {
  /**
   * The minimum confidence level for which you want summary information. The confidence level applies to person detection, body part detection, equipment detection, and body part coverage. Amazon Rekognition doesn't return summary information with a confidence than this specified value. There isn't a default value.
   *
   * Specify a `MinConfidence` value that is between 50-100% as `DetectProtectiveEquipment` returns predictions only where the detection confidence is between 50% - 100%. If you specify a value that is less than 50%, the results are the same specifying a value of 50%.
   *
   * @public
   */
  MinConfidence: number | undefined;

  /**
   * An array of personal protective equipment types for which you want summary information. If a person is detected wearing a required requipment type, the person's ID is added to the `PersonsWithRequiredEquipment` array field returned in ProtectiveEquipmentSummary by `DetectProtectiveEquipment`.
   *
   * @public
   */
  RequiredEquipmentTypes: ProtectiveEquipmentType[] | undefined;
}

/**
 * @public
 */
export interface DetectProtectiveEquipmentRequest {
  /**
   * The image in which you want to detect PPE on detected persons. The image can be passed as image bytes or you can reference an image stored in an Amazon S3 bucket.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * An array of PPE types that you want to summarize.
   *
   * @public
   */
  SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes | undefined;
}

/**
 * A person detected by a call to DetectProtectiveEquipment. The API returns all persons detected in the input image in an array of `ProtectiveEquipmentPerson` objects.
 *
 * @public
 */
export interface ProtectiveEquipmentPerson {
  /**
   * An array of body parts detected on a person's body (including body parts without PPE).
   *
   * @public
   */
  BodyParts?: ProtectiveEquipmentBodyPart[] | undefined;

  /**
   * A bounding box around the detected person.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * The confidence that Amazon Rekognition has that the bounding box contains a person.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The identifier for the detected person. The identifier is only unique for a single call to `DetectProtectiveEquipment`.
   *
   * @public
   */
  Id?: number | undefined;
}

/**
 * Summary information for required items of personal protective equipment (PPE) detected on persons by a call to DetectProtectiveEquipment. You specify the required type of PPE in the `SummarizationAttributes` (ProtectiveEquipmentSummarizationAttributes) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (`PersonsWithRequiredEquipment`), which persons were detected as not wearing the required PPE (`PersonsWithoutRequiredEquipment`), and the persons in which a determination could not be made (`PersonsIndeterminate`).
 *
 * To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the `PersonsWithRequiredEquipment` array. If you want to find out more about a person, such as the location (BoundingBox) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a ProtectiveEquipmentPerson object returned in the `Persons` array by `DetectProtectiveEquipment`.
 *
 * @public
 */
export interface ProtectiveEquipmentSummary {
  /**
   * An array of IDs for persons who are wearing detected personal protective equipment.
   *
   * @public
   */
  PersonsWithRequiredEquipment?: number[] | undefined;

  /**
   * An array of IDs for persons who are not wearing all of the types of PPE specified in the `RequiredEquipmentTypes` field of the detected personal protective equipment.
   *
   * @public
   */
  PersonsWithoutRequiredEquipment?: number[] | undefined;

  /**
   * An array of IDs for persons where it was not possible to determine if they are wearing personal protective equipment.
   *
   * @public
   */
  PersonsIndeterminate?: number[] | undefined;
}

/**
 * @public
 */
export interface DetectProtectiveEquipmentResponse {
  /**
   * The version number of the PPE detection model used to detect PPE in the image.
   *
   * @public
   */
  ProtectiveEquipmentModelVersion?: string | undefined;

  /**
   * An array of persons detected in the image (including persons not wearing PPE).
   *
   * @public
   */
  Persons?: ProtectiveEquipmentPerson[] | undefined;

  /**
   * Summary information for the types of PPE specified in the `SummarizationAttributes` input parameter.
   *
   * @public
   */
  Summary?: ProtectiveEquipmentSummary | undefined;
}

/**
 * A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. `WordFilter` looks at a word’s height, width, and minimum confidence. `RegionOfInterest` lets you set a specific region of the image to look for text in.
 *
 * @public
 */
export interface DetectTextFilters {
  /**
   * A set of parameters that allow you to filter out certain results from your returned results.
   *
   * @public
   */
  WordFilter?: DetectionFilter | undefined;

  /**
   * A Filter focusing on a certain area of the image. Uses a `BoundingBox` object to set the region of the image.
   *
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;
}

/**
 * @public
 */
export interface DetectTextRequest {
  /**
   * The input image as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Rekognition operations, you can't pass image bytes.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Optional parameters that let you set the criteria that the text must meet to be included in your response.
   *
   * @public
   */
  Filters?: DetectTextFilters | undefined;
}

/**
 * Information about a word or line of text detected by DetectText.
 *
 * The `DetectedText` field contains the text that Amazon Rekognition detected in the image.
 *
 * Every word and line has an identifier (`Id`). Each word belongs to a line and has a parent identifier (`ParentId`) that identifies the line of text in which the word appears. The word `Id` is also an index for the word within a line of words.
 *
 * For more information, see Detecting text in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface TextDetection {
  /**
   * The word or line of text recognized by Amazon Rekognition.
   *
   * @public
   */
  DetectedText?: string | undefined;

  /**
   * The type of text that was detected.
   *
   * @public
   */
  Type?: TextTypes | undefined;

  /**
   * The identifier for the detected text. The identifier is only unique for a single call to `DetectText`.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The Parent identifier for the detected text identified by the value of `ID`. If the type of detected text is `LINE`, the value of `ParentId` is `Null`.
   *
   * @public
   */
  ParentId?: number | undefined;

  /**
   * The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy of the geometry points around the detected text.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The location of the detected text on the image. Includes an axis aligned coarse bounding box surrounding the text and a finer grain polygon for more accurate spatial information.
   *
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * @public
 */
export interface DetectTextResponse {
  /**
   * An array of text that was detected in the input image.
   *
   * @public
   */
  TextDetections?: TextDetection[] | undefined;

  /**
   * The model version used to detect text.
   *
   * @public
   */
  TextModelVersion?: string | undefined;
}

/**
 * Provides face metadata for the faces that are disassociated from a specific UserID.
 *
 * @public
 */
export interface DisassociatedFace {
  /**
   * Unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFacesRequest {
  /**
   * The ID of an existing collection containing the UserID.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * ID for the existing UserID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Idempotent token used to identify the request to `DisassociateFaces`. If you use the same token with multiple `DisassociateFaces` requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An array of face IDs to disassociate from the UserID.
   *
   * @public
   */
  FaceIds: string[] | undefined;
}

/**
 * Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully disassociated.
 *
 * @public
 */
export interface UnsuccessfulFaceDisassociation {
  /**
   * A unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;

  /**
   * A provided ID for the UserID. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The reason why the deletion was unsuccessful.
   *
   * @public
   */
  Reasons?: UnsuccessfulFaceDisassociationReason[] | undefined;
}

/**
 * @public
 */
export interface DisassociateFacesResponse {
  /**
   * An array of DissociatedFace objects containing FaceIds that are successfully disassociated with the UserID is returned. Returned if the DisassociatedFaces action is successful.
   *
   * @public
   */
  DisassociatedFaces?: DisassociatedFace[] | undefined;

  /**
   * An array of UnsuccessfulDisassociation objects containing FaceIds that are not successfully associated, along with the reasons for the failure to associate. Returned if the DisassociateFaces action is successful.
   *
   * @public
   */
  UnsuccessfulFaceDisassociations?: UnsuccessfulFaceDisassociation[] | undefined;

  /**
   * The status of an update made to a User. Reflects if the User has been updated for every requested change.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * A training dataset or a test dataset used in a dataset distribution operation. For more information, see DistributeDatasetEntries.
 *
 * @public
 */
export interface DistributeDataset {
  /**
   * The Amazon Resource Name (ARN) of the dataset that you want to use.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DistributeDatasetEntriesRequest {
  /**
   * The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to the same project. The test dataset must be empty.
   *
   * @public
   */
  Datasets: DistributeDataset[] | undefined;
}

/**
 * @public
 */
export interface DistributeDatasetEntriesResponse {}

/**
 * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.
 *
 * @public
 */
export interface Face {
  /**
   * Unique identifier that Amazon Rekognition assigns to the face.
   *
   * @public
   */
  FaceId?: string | undefined;

  /**
   * Bounding box of the face.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Unique identifier that Amazon Rekognition assigns to the input image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Identifier that you assign to all the faces in the input image.
   *
   * @public
   */
  ExternalImageId?: string | undefined;

  /**
   * Confidence level that the bounding box contains a face (and not a different object such as a tree).
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The version of the face detect and storage model that was used when indexing the face vector.
   *
   * @public
   */
  IndexFacesModelVersion?: string | undefined;

  /**
   * Unique identifier assigned to the user.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Information about a face detected in a video analysis request and the time the face was detected in the video.
 *
 * @public
 */
export interface FaceDetection {
  /**
   * Time, in milliseconds from the start of the video, that the face was detected. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the face first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * The face properties for the detected face.
   *
   * @public
   */
  Face?: FaceDetail | undefined;
}

/**
 * Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
 *
 * @public
 */
export interface FaceMatch {
  /**
   * Confidence in the match of this face with the input face.
   *
   * @public
   */
  Similarity?: number | undefined;

  /**
   * Describes the face properties such as the bounding box, face ID, image ID of the source image, and external image ID that you assigned.
   *
   * @public
   */
  Face?: Face | undefined;
}

/**
 * Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
 *
 * @public
 */
export interface FaceRecord {
  /**
   * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.
   *
   * @public
   */
  Face?: Face | undefined;

  /**
   * Structure containing attributes of the face that the algorithm detected.
   *
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
}

/**
 * Describes a condition that was detected in the Face Liveness video and that contributed to the confidence score returned for the session.
 *
 * @public
 */
export interface FeedbackItem {
  /**
   * A code identifying the condition that was detected during the Face Liveness session.
   *
   * @public
   */
  Code: FeedbackCode | undefined;

  /**
   * A human-readable description of the detected condition, suitable for displaying to an end user before they retry a Face Liveness check. Use `Code` rather than this message for programmatic decisions, because the message text can change.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface GetCelebrityInfoRequest {
  /**
   * The ID for the celebrity. You get the celebrity ID from a call to the RecognizeCelebrities operation, which recognizes celebrities in an image.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCelebrityInfoResponse {
  /**
   * An array of URLs pointing to additional celebrity information.
   *
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * The name of the celebrity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Retrieves the known gender for the celebrity.
   *
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * @public
 */
export interface GetCelebrityRecognitionRequest {
  /**
   * Job identifier for the required celebrity recognition analysis. You can get the job identifer from a call to `StartCelebrityRecognition`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of celebrities.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort to use for celebrities returned in `Celebrities` field. Specify `ID` to sort by the celebrity identifier, specify `TIMESTAMP` to sort by the time the celebrity was recognized.
   *
   * @public
   */
  SortBy?: CelebrityRecognitionSortBy | undefined;
}

/**
 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
 *
 * @public
 */
export interface Video {
  /**
   * The Amazon S3 bucket name and file name for the video.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * Information about a video that Amazon Rekognition analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition video operation.
 *
 * @public
 */
export interface VideoMetadata {
  /**
   * Type of compression used in the analyzed video.
   *
   * @public
   */
  Codec?: string | undefined;

  /**
   * Length of the video in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * Format of the analyzed video. Possible values are MP4, MOV and AVI.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * Number of frames per second in the video.
   *
   * @public
   */
  FrameRate?: number | undefined;

  /**
   * Vertical pixel dimension of the video.
   *
   * @public
   */
  FrameHeight?: number | undefined;

  /**
   * Horizontal pixel dimension of the video.
   *
   * @public
   */
  FrameWidth?: number | undefined;

  /**
   * A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255).
   *
   * @public
   */
  ColorRange?: VideoColorRange | undefined;
}

/**
 * @public
 */
export interface GetCelebrityRecognitionResponse {
  /**
   * The current status of the celebrity recognition job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition Video analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition Video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of celebrities.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Array of celebrities recognized in the video.
   *
   * @public
   */
  Celebrities?: CelebrityRecognition[] | undefined;

  /**
   * Job identifier for the celebrity recognition operation for which you want to obtain results. The job identifer is returned by an initial call to StartCelebrityRecognition.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetContentModerationRequest {
  /**
   * The identifier for the inappropriate, unwanted, or offensive content moderation job. Use `JobId` to identify the job in a subsequent call to `GetContentModeration`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of content moderation labels.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort to use for elements in the `ModerationLabelDetections` array. Use `TIMESTAMP` to sort array elements by the time labels are detected. Use `NAME` to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by `TIMESTAMP`.
   *
   * @public
   */
  SortBy?: ContentModerationSortBy | undefined;

  /**
   * Defines how to aggregate results of the StartContentModeration request. Default aggregation option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.
   *
   * @public
   */
  AggregateBy?: ContentModerationAggregateBy | undefined;
}

/**
 * Contains metadata about a content moderation request, including the SortBy and AggregateBy options.
 *
 * @public
 */
export interface GetContentModerationRequestMetadata {
  /**
   * The sorting method chosen for a GetContentModeration request.
   *
   * @public
   */
  SortBy?: ContentModerationSortBy | undefined;

  /**
   * The aggregation method chosen for a GetContentModeration request.
   *
   * @public
   */
  AggregateBy?: ContentModerationAggregateBy | undefined;
}

/**
 * @public
 */
export interface GetContentModerationResponse {
  /**
   * The current status of the content moderation analysis job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition analyzed. `Videometadata` is returned in every page of paginated responses from `GetContentModeration`.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were detected.
   *
   * @public
   */
  ModerationLabels?: ContentModerationDetection[] | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of content moderation labels.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive content.
   *
   * @public
   */
  ModerationModelVersion?: string | undefined;

  /**
   * Job identifier for the content moderation operation for which you want to obtain results. The job identifer is returned by an initial call to StartContentModeration.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartContentModeration and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * Information about the paramters used when getting a response. Includes information on aggregation and sorting methods.
   *
   * @public
   */
  GetRequestMetadata?: GetContentModerationRequestMetadata | undefined;
}

/**
 * @public
 */
export interface GetFaceDetectionRequest {
  /**
   * Unique identifier for the face detection job. The `JobId` is returned from `StartFaceDetection`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFaceDetectionResponse {
  /**
   * The current status of the face detection job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition Video analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of faces detected in the video. Each element contains a detected face's details and the time, in milliseconds from the start of the video, the face was detected.
   *
   * @public
   */
  Faces?: FaceDetection[] | undefined;

  /**
   * Job identifier for the face detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartFaceDetection.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartFaceDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetFaceLivenessSessionResultsRequest {
  /**
   * A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an idempotency token for all operations associated with the session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Contains metadata about the client that streamed the video for a Face Liveness session.
 *
 * @public
 */
export interface SessionMetadata {
  /**
   * The type of SDK that was used to stream the video for the Face Liveness session.
   *
   * > **Note:** This value is self-reported by the client that streamed the session, and Amazon Rekognition doesn't verify it. Don't rely on it for authentication, authorization, or any other security decision.
   *
   * @public
   */
  SDKType: string | undefined;
}

/**
 * @public
 */
export interface GetFaceLivenessSessionResultsResponse {
  /**
   * The sessionId for which this request was called.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.
   *
   * @public
   */
  Status: LivenessSessionStatus | undefined;

  /**
   * Probabalistic confidence score for if the person in the given video was live, represented as a float value between 0 to 100.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * A high-quality image from the Face Liveness video that can be used for face comparison or search. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. In case the reference image is not returned, it's recommended to retry the Liveness check.
   *
   * @public
   */
  ReferenceImage?: AuditImage | undefined;

  /**
   * A set of images from the Face Liveness video that can be used for audit purposes. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined, raw bytes are sent instead.
   *
   * @public
   */
  AuditImages?: AuditImage[] | undefined;

  /**
   * Contains information regarding the challenge type used for the Face Liveness check.
   *
   * @public
   */
  Challenge?: Challenge | undefined;

  /**
   * A list of conditions that were detected in the Face Liveness video and that contributed to the returned `Confidence` score. Each item contains a code and a human-readable message. Feedback is returned only for sessions with a `Status` of `SUCCEEDED`, and the list is empty when no such conditions were detected.
   *
   * @public
   */
  Feedback?: FeedbackItem[] | undefined;

  /**
   * Metadata about the client that streamed the video for the Face Liveness session.
   *
   * @public
   */
  Metadata?: SessionMetadata | undefined;
}

/**
 * @public
 */
export interface GetFaceSearchRequest {
  /**
   * The job identifer for the search request. You get the job identifier from an initial call to `StartFaceSearch`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of search results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort to use for grouping faces in the response. Use `TIMESTAMP` to group faces by the time that they are recognized. Use `INDEX` to sort by recognized faces.
   *
   * @public
   */
  SortBy?: FaceSearchSortBy | undefined;
}

/**
 * Details about a person detected in a video analysis request.
 *
 * @public
 */
export interface PersonDetail {
  /**
   * Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * Bounding box around the detected person.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Face details for the detected person.
   *
   * @public
   */
  Face?: FaceDetail | undefined;
}

/**
 * Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (FaceMatch), information about the person (PersonDetail), and the time stamp for when the person was detected in a video. An array of `PersonMatch` objects is returned by GetFaceSearch.
 *
 * @public
 */
export interface PersonMatch {
  /**
   * The time, in milliseconds from the beginning of the video, that the person was matched in the video.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * Information about the matched person.
   *
   * @public
   */
  Person?: PersonDetail | undefined;

  /**
   * Information about the faces in the input collection that match the face of a person in the video.
   *
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;
}

/**
 * @public
 */
export interface GetFaceSearchResponse {
  /**
   * The current status of the face search job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition Video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * An array of persons, PersonMatch, in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information for when persons are matched in the video. You specify the input collection in an initial call to `StartFaceSearch`. Each `Persons` element includes a time the person was matched, face match details (`FaceMatches`) for matching faces in the collection, and person information (`Person`) for the matched person.
   *
   * @public
   */
  Persons?: PersonMatch[] | undefined;

  /**
   * Job identifier for the face search operation for which you want to obtain results. The job identifer is returned by an initial call to StartFaceSearch.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartFaceSearch and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetLabelDetectionRequest {
  /**
   * Job identifier for the label detection operation for which you want results returned. You get the job identifer from an initial call to `StartlabelDetection`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of labels.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort to use for elements in the `Labels` array. Use `TIMESTAMP` to sort array elements by the time labels are detected. Use `NAME` to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by `TIMESTAMP`.
   *
   * @public
   */
  SortBy?: LabelDetectionSortBy | undefined;

  /**
   * Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments.
   *
   * @public
   */
  AggregateBy?: LabelDetectionAggregateBy | undefined;
}

/**
 * Contains metadata about a label detection request, including the SortBy and AggregateBy options.
 *
 * @public
 */
export interface GetLabelDetectionRequestMetadata {
  /**
   * The sorting method chosen for a GetLabelDetection request.
   *
   * @public
   */
  SortBy?: LabelDetectionSortBy | undefined;

  /**
   * The aggregation method chosen for a GetLabelDetection request.
   *
   * @public
   */
  AggregateBy?: LabelDetectionAggregateBy | undefined;
}

/**
 * Information about a label detected in a video analysis request and the time the label was detected in the video.
 *
 * @public
 */
export interface LabelDetection {
  /**
   * Time, in milliseconds from the start of the video, that the label was detected. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the label first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * Details about the detected label.
   *
   * @public
   */
  Label?: Label | undefined;

  /**
   * The time in milliseconds defining the start of the timeline segment containing a continuously detected label.
   *
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * The time in milliseconds defining the end of the timeline segment containing a continuously detected label.
   *
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.
   *
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetLabelDetectionResponse {
  /**
   * The current status of the label detection job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition Video analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of labels.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of labels detected in the video. Each element contains the detected label and the time, in milliseconds from the start of the video, that the label was detected.
   *
   * @public
   */
  Labels?: LabelDetection[] | undefined;

  /**
   * Version number of the label detection model that was used to detect labels.
   *
   * @public
   */
  LabelModelVersion?: string | undefined;

  /**
   * Job identifier for the label detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartLabelDetection.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartLabelDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * Information about the paramters used when getting a response. Includes information on aggregation and sorting methods.
   *
   * @public
   */
  GetRequestMetadata?: GetLabelDetectionRequestMetadata | undefined;
}

/**
 * @public
 */
export interface GetMediaAnalysisJobRequest {
  /**
   * Unique identifier for the media analysis job for which you want to retrieve results.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Details about the error that resulted in failure of the job.
 *
 * @public
 */
export interface MediaAnalysisJobFailureDetails {
  /**
   * Error code for the failed job.
   *
   * @public
   */
  Code?: MediaAnalysisJobFailureCode | undefined;

  /**
   * Human readable error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains input information for a media analysis job.
 *
 * @public
 */
export interface MediaAnalysisInput {
  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object: S3Object | undefined;
}

/**
 * Summary that provides statistics on input manifest and errors identified in the input manifest.
 *
 * @public
 */
export interface MediaAnalysisManifestSummary {
  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * Configuration for Moderation Labels Detection.
 *
 * @public
 */
export interface MediaAnalysisDetectModerationLabelsConfig {
  /**
   * Specifies the minimum confidence level for the moderation labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * Specifies the custom moderation model to be used during the label detection job. If not provided the pre-trained model is used.
   *
   * @public
   */
  ProjectVersion?: string | undefined;
}

/**
 * Configuration options for a media analysis job. Configuration is operation-specific.
 *
 * @public
 */
export interface MediaAnalysisOperationsConfig {
  /**
   * Contains configuration options for a DetectModerationLabels job.
   *
   * @public
   */
  DetectModerationLabels?: MediaAnalysisDetectModerationLabelsConfig | undefined;
}

/**
 * Output configuration provided in the job creation request.
 *
 * @public
 */
export interface MediaAnalysisOutputConfig {
  /**
   * Specifies the Amazon S3 bucket to contain the output of the media analysis job.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for storage.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * Object containing information about the model versions of selected features in a given job.
 *
 * @public
 */
export interface MediaAnalysisModelVersions {
  /**
   * The Moderation base model version.
   *
   * @public
   */
  Moderation?: string | undefined;
}

/**
 * Contains the results for a media analysis job created with StartMediaAnalysisJob.
 *
 * @public
 */
export interface MediaAnalysisResults {
  /**
   * Provides the S3 bucket name and object name.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  S3Object?: S3Object | undefined;

  /**
   * Information about the model versions for the features selected in a given job.
   *
   * @public
   */
  ModelVersions?: MediaAnalysisModelVersions | undefined;
}

/**
 * @public
 */
export interface GetMediaAnalysisJobResponse {
  /**
   * The identifier for the media analysis job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The name of the media analysis job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Operation configurations that were provided during job creation.
   *
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * The current status of the media analysis job.
   *
   * @public
   */
  Status: MediaAnalysisJobStatus | undefined;

  /**
   * Details about the error that resulted in failure of the job.
   *
   * @public
   */
  FailureDetails?: MediaAnalysisJobFailureDetails | undefined;

  /**
   * The Unix date and time when the job was started.
   *
   * @public
   */
  CreationTimestamp: Date | undefined;

  /**
   * The Unix date and time when the job finished.
   *
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * Reference to the input manifest that was provided in the job creation request.
   *
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * Output configuration that was provided in the creation request.
   *
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * KMS Key that was provided in the creation request.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Output manifest that contains prediction results.
   *
   * @public
   */
  Results?: MediaAnalysisResults | undefined;

  /**
   * The summary manifest provides statistics on input manifest and errors identified in the input manifest.
   *
   * @public
   */
  ManifestSummary?: MediaAnalysisManifestSummary | undefined;
}

/**
 * @public
 */
export interface GetPersonTrackingRequest {
  /**
   * The identifier for a job that tracks persons in a video. You get the `JobId` from a call to `StartPersonTracking`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of persons.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort to use for elements in the `Persons` array. Use `TIMESTAMP` to sort array elements by the time persons are detected. Use `INDEX` to sort by the tracked persons. If you sort by `INDEX`, the array elements for each person are sorted by detection confidence. The default sort is by `TIMESTAMP`.
   *
   * @public
   */
  SortBy?: PersonTrackingSortBy | undefined;
}

/**
 * Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of `PersonDetection` objects with elements for each time a person's path is tracked in a video.
 *
 * For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide.
 *
 * @public
 */
export interface PersonDetection {
  /**
   * The time, in milliseconds from the start of the video, that the person's path was tracked. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the person's path first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * Details about a person whose path was tracked in a video.
   *
   * @public
   */
  Person?: PersonDetail | undefined;
}

/**
 * @public
 */
export interface GetPersonTrackingResponse {
  /**
   * The current status of the person tracking job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition Video analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition Video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of the persons detected in the video and the time(s) their path was tracked throughout the video. An array element will exist for each time a person's path is tracked.
   *
   * @public
   */
  Persons?: PersonDetection[] | undefined;

  /**
   * Job identifier for the person tracking operation for which you want to obtain results. The job identifer is returned by an initial call to StartPersonTracking.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDetectionRequest {
  /**
   * Job identifier for the text detection operation for which you want results returned. You get the job identifer from an initial call to `StartSegmentDetection`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a shot detection segment detected in a video. For more information, see SegmentDetection.
 *
 * @public
 */
export interface ShotSegment {
  /**
   * An Identifier for a shot detection segment detected in a video.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Information about a technical cue segment. For more information, see SegmentDetection.
 *
 * @public
 */
export interface TechnicalCueSegment {
  /**
   * The type of the technical cue.
   *
   * @public
   */
  Type?: TechnicalCueType | undefined;

  /**
   * The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * A technical cue or shot detection segment detected in a video. An array of `SegmentDetection` objects containing all segments detected in a stored video is returned by GetSegmentDetection.
 *
 * @public
 */
export interface SegmentDetection {
  /**
   * The type of the segment. Valid values are `TECHNICAL_CUE` and `SHOT`.
   *
   * @public
   */
  Type?: SegmentType | undefined;

  /**
   * The start time of the detected segment in milliseconds from the start of the video. This value is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of 100 millis.
   *
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * The end time of the detected segment, in milliseconds, from the start of the video. This value is rounded down.
   *
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * The duration of the detected segment in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment. `StartTimecode` is in *HH:MM:SS:fr* format (and *;fr* for drop frame-rates).
   *
   * @public
   */
  StartTimecodeSMPTE?: string | undefined;

  /**
   * The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment. `EndTimecode` is in *HH:MM:SS:fr* format (and *;fr* for drop frame-rates).
   *
   * @public
   */
  EndTimecodeSMPTE?: string | undefined;

  /**
   * The duration of the timecode for the detected segment in SMPTE format.
   *
   * @public
   */
  DurationSMPTE?: string | undefined;

  /**
   * If the segment is a technical cue, contains information about the technical cue.
   *
   * @public
   */
  TechnicalCueSegment?: TechnicalCueSegment | undefined;

  /**
   * If the segment is a shot detection, contains information about the shot detection.
   *
   * @public
   */
  ShotSegment?: ShotSegment | undefined;

  /**
   * The frame number of the start of a video segment, using a frame index that starts with 0.
   *
   * @public
   */
  StartFrameNumber?: number | undefined;

  /**
   * The frame number at the end of a video segment, using a frame index that starts with 0.
   *
   * @public
   */
  EndFrameNumber?: number | undefined;

  /**
   * The duration of a video segment, expressed in frames.
   *
   * @public
   */
  DurationFrames?: number | undefined;
}

/**
 * Information about the type of a segment requested in a call to StartSegmentDetection. An array of `SegmentTypeInfo` objects is returned by the response from GetSegmentDetection.
 *
 * @public
 */
export interface SegmentTypeInfo {
  /**
   * The type of a segment (technical cue or shot detection).
   *
   * @public
   */
  Type?: SegmentType | undefined;

  /**
   * The version of the model used to detect segments.
   *
   * @public
   */
  ModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDetectionResponse {
  /**
   * Current status of the segment detection job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Currently, Amazon Rekognition Video returns a single object in the `VideoMetadata` array. The object contains information about the video stream in the input file that Amazon Rekognition Video chose to analyze. The `VideoMetadata` object includes the video codec, video format and other information. Video metadata is returned in each page of information returned by `GetSegmentDetection`.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata[] | undefined;

  /**
   * An array of objects. There can be multiple audio streams. Each `AudioMetadata` object contains metadata for a single audio stream. Audio information in an `AudioMetadata` objects includes the audio codec, the number of audio channels, the duration of the audio stream, and the sample rate. Audio metadata is returned in each page of information returned by `GetSegmentDetection`.
   *
   * @public
   */
  AudioMetadata?: AudioMetadata[] | undefined;

  /**
   * If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of text.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of segments detected in a video. The array is sorted by the segment types (TECHNICAL_CUE or SHOT) specified in the `SegmentTypes` input parameter of `StartSegmentDetection`. Within each segment type the array is sorted by timestamp values.
   *
   * @public
   */
  Segments?: SegmentDetection[] | undefined;

  /**
   * An array containing the segment types requested in the call to `StartSegmentDetection`.
   *
   * @public
   */
  SelectedSegmentTypes?: SegmentTypeInfo[] | undefined;

  /**
   * Job identifier for the segment detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartSegmentDetection.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartSegmentDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetTextDetectionRequest {
  /**
   * Job identifier for the text detection operation for which you want results returned. You get the job identifer from an initial call to `StartTextDetection`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of text.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
 *
 * @public
 */
export interface TextDetectionResult {
  /**
   * The time, in milliseconds from the start of the video, that the text was detected. Note that `Timestamp` is not guaranteed to be accurate to the individual frame where the text first appears.
   *
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * Details about text detected in a video.
   *
   * @public
   */
  TextDetection?: TextDetection | undefined;
}

/**
 * @public
 */
export interface GetTextDetectionResponse {
  /**
   * Current status of the text detection job.
   *
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * If the job fails, `StatusMessage` provides a descriptive error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about a video that Amazon Rekognition analyzed. `Videometadata` is returned in every page of paginated responses from a Amazon Rekognition video operation.
   *
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * An array of text detected in the video. Each element contains the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
   *
   * @public
   */
  TextDetections?: TextDetectionResult[] | undefined;

  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Version number of the text detection model that was used to detect text.
   *
   * @public
   */
  TextModelVersion?: string | undefined;

  /**
   * Job identifier for the text detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartTextDetection.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video?: Video | undefined;

  /**
   * A job identifier specified in the call to StartTextDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface IndexFacesRequest {
  /**
   * The ID of an existing collection to which you want to add the faces that are detected in the input images.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes isn't supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * The ID you want to assign to all the faces detected in the image.
   *
   * @public
   */
  ExternalImageId?: string | undefined;

  /**
   * An array of facial attributes you want to be returned. A `DEFAULT` subset of facial attributes - `BoundingBox`, `Confidence`, `Pose`, `Quality`, and `Landmarks` - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using `["DEFAULT", "FACE_OCCLUDED"]` or just `["FACE_OCCLUDED"]`. You can request for all facial attributes by using `["ALL"]`. Requesting more attributes may increase response time.
   *
   * If you provide both, `["ALL", "DEFAULT"]`, the service uses a logical AND operator to determine which attributes to return (in this case, all attributes).
   *
   * @public
   */
  DetectionAttributes?: Attribute[] | undefined;

  /**
   * The maximum number of faces to index. The value of `MaxFaces` must be greater than or equal to 1. `IndexFaces` returns no more than 100 detected faces in an image, even if you specify a larger value for `MaxFaces`.
   *
   * If `IndexFaces` detects more faces than the value of `MaxFaces`, the faces with the lowest quality are filtered out first. If there are still more faces than the value of `MaxFaces`, the faces with the smallest bounding boxes are filtered out (up to the number that's needed to satisfy the value of `MaxFaces`). Information about the unindexed faces is available in the `UnindexedFaces` array.
   *
   * The faces that are returned by `IndexFaces` are sorted by the largest face bounding box size to the smallest size, in descending order.
   *
   * `MaxFaces` can be used with a collection associated with any version of the face model.
   *
   * @public
   */
  MaxFaces?: number | undefined;

  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't indexed. If you specify `AUTO`, Amazon Rekognition chooses the quality bar. If you specify `LOW`, `MEDIUM`, or `HIGH`, filtering removes all faces that don’t meet the chosen quality bar. The default value is `AUTO`. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify `NONE`, no filtering is performed.
   *
   * To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.
   *
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * A face that IndexFaces detected, but didn't index. Use the `Reasons` response attribute to determine why a face wasn't indexed.
 *
 * @public
 */
export interface UnindexedFace {
  /**
   * An array of reasons that specify why a face wasn't indexed.
   *
   * - EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned too far away from the camera.
   * - EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the `MaxFaces` input parameter for `IndexFaces`.
   * - LOW_BRIGHTNESS - The image is too dark.
   * - LOW_SHARPNESS - The image is too blurry.
   * - LOW_CONFIDENCE - The face was detected with a low confidence.
   * - SMALL_BOUNDING_BOX - The bounding box around the face is too small.
   *
   * @public
   */
  Reasons?: Reason[] | undefined;

  /**
   * The structure that contains attributes of a face that `IndexFaces`detected, but didn't index.
   *
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
}

/**
 * @public
 */
export interface IndexFacesResponse {
  /**
   * An array of faces detected and added to the collection. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  FaceRecords?: FaceRecord[] | undefined;

  /**
   * If your collection is associated with a face detection model that's later than version 3.0, the value of `OrientationCorrection` is always null and no orientation information is returned.
   *
   * If your collection is associated with a face detection model that's version 3.0 or earlier, the following applies:
   *
   * - If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. The value of `OrientationCorrection` is null.
   * - If the image doesn't contain orientation information in its Exif metadata, Amazon Rekognition returns an estimated orientation (ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270). Amazon Rekognition doesn’t perform image correction for images. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.
   *
   * Bounding box information is returned in the `FaceRecords` array. You can get the version of the face detection model by calling DescribeCollection.
   *
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;

  /**
   * The version number of the face detection model that's associated with the input collection (`CollectionId`).
   *
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * An array of faces that were detected in the image but weren't indexed. They weren't indexed because the quality filter identified them as low quality, or the `MaxFaces` request parameter filtered them out. To use the quality filter, you specify the `QualityFilter` request parameter.
   *
   * @public
   */
  UnindexedFaces?: UnindexedFace[] | undefined;
}

/**
 * Specifies the starting point in a Kinesis stream to start processing. You can use the producer timestamp or the fragment number. One of either producer timestamp or fragment number is required. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see [Fragment](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html).
 *
 * @public
 */
export interface KinesisVideoStreamStartSelector {
  /**
   * The timestamp from the producer corresponding to the fragment, in milliseconds, expressed in unix time format.
   *
   * @public
   */
  ProducerTimestamp?: number | undefined;

  /**
   * The unique identifier of the fragment. This value monotonically increases based on the ingestion order.
   *
   * @public
   */
  FragmentNumber?: string | undefined;
}

/**
 * Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.
 *
 * @public
 */
export interface LabelDetectionSettings {
  /**
   * Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see [Detecting Labels](https://docs.aws.amazon.com/rekognition/latest/dg/labels.html).
   *
   * @public
   */
  GeneralLabels?: GeneralLabelsSettings | undefined;
}

/**
 * @public
 */
export interface ListCollectionsRequest {
  /**
   * Pagination token from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of collection IDs to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCollectionsResponse {
  /**
   * An array of collection IDs.
   *
   * @public
   */
  CollectionIds?: string[] | undefined;

  /**
   * If the result is truncated, the response provides a `NextToken` that you can use in the subsequent request to fetch the next set of collection IDs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Version numbers of the face detection models associated with the collections in the array `CollectionIds`. For example, the value of `FaceModelVersions[2]` is the version number for the face detection model used by the collection in `CollectionId[2]`.
   *
   * @public
   */
  FaceModelVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDatasetEntriesRequest {
  /**
   * The Amazon Resource Name (ARN) for the dataset that you want to use.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * Specifies a label filter for the response. The response includes an entry only if one or more of the labels in `ContainsLabels` exist in the entry.
   *
   * @public
   */
  ContainsLabels?: string[] | undefined;

  /**
   * Specify `true` to get only the JSON Lines where the image is labeled. Specify `false` to get only the JSON Lines where the image isn't labeled. If you don't specify `Labeled`, `ListDatasetEntries` returns JSON Lines for labeled and unlabeled images.
   *
   * @public
   */
  Labeled?: boolean | undefined;

  /**
   * If specified, `ListDatasetEntries` only returns JSON Lines where the value of `SourceRefContains` is part of the `source-ref` field. The `source-ref` field contains the Amazon S3 location of the image. You can use `SouceRefContains` for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific folder.
   *
   * @public
   */
  SourceRefContains?: string | undefined;

  /**
   * Specifies an error filter for the response. Specify `True` to only include entries that have errors.
   *
   * @public
   */
  HasErrors?: boolean | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetEntriesResponse {
  /**
   * A list of entries (images) in the dataset.
   *
   * @public
   */
  DatasetEntries?: string[] | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetLabelsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset that you want to use.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetLabelsResponse {
  /**
   * A list of the labels in the dataset.
   *
   * @public
   */
  DatasetLabelDescriptions?: DatasetLabelDescription[] | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacesRequest {
  /**
   * ID of the collection from which to list the faces.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of faces to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of user IDs to filter results with when listing faces in a collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * An array of face IDs to filter results with when listing faces in a collection.
   *
   * @public
   */
  FaceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFacesResponse {
  /**
   * An array of `Face` objects.
   *
   * @public
   */
  Faces?: Face[] | undefined;

  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Version number of the face detection model associated with the input collection (`CollectionId`).
   *
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaAnalysisJobsRequest {
  /**
   * Pagination token, if the previous response was incomplete.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value user can specify is 100. If user specifies a value greater than 100, an `InvalidParameterException` error occurs. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Description for a media analysis job.
 *
 * @public
 */
export interface MediaAnalysisJobDescription {
  /**
   * The identifier for a media analysis job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The name of a media analysis job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Operation configurations that were provided during job creation.
   *
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * The status of the media analysis job being retrieved.
   *
   * @public
   */
  Status: MediaAnalysisJobStatus | undefined;

  /**
   * Details about the error that resulted in failure of the job.
   *
   * @public
   */
  FailureDetails?: MediaAnalysisJobFailureDetails | undefined;

  /**
   * The Unix date and time when the job was started.
   *
   * @public
   */
  CreationTimestamp: Date | undefined;

  /**
   * The Unix date and time when the job finished.
   *
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * Reference to the input manifest that was provided in the job creation request.
   *
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * Output configuration that was provided in the creation request.
   *
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * KMS Key that was provided in the creation request.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Output manifest that contains prediction results.
   *
   * @public
   */
  Results?: MediaAnalysisResults | undefined;

  /**
   * Provides statistics on input manifest and errors identified in the input manifest.
   *
   * @public
   */
  ManifestSummary?: MediaAnalysisManifestSummary | undefined;
}

/**
 * @public
 */
export interface ListMediaAnalysisJobsResponse {
  /**
   * Pagination token, if the previous response was incomplete.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Contains a list of all media analysis jobs.
   *
   * @public
   */
  MediaAnalysisJobs: MediaAnalysisJobDescription[] | undefined;
}

/**
 * @public
 */
export interface ListProjectPoliciesRequest {
  /**
   * The ARN of the project for which you want to list the project policies.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 5. If you specify a value greater than 5, a ValidationException error occurs. The default value is 5.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a project policy in the response from ListProjectPolicies.
 *
 * @public
 */
export interface ProjectPolicy {
  /**
   * The Amazon Resource Name (ARN) of the project to which the project policy is attached.
   *
   * @public
   */
  ProjectArn?: string | undefined;

  /**
   * The name of the project policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The revision ID of the project policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * The JSON document for the project policy.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The Unix datetime for the creation of the project policy.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The Unix datetime for when the project policy was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectPoliciesResponse {
  /**
   * A list of project policies attached to the project.
   *
   * @public
   */
  ProjectPolicies?: ProjectPolicy[] | undefined;

  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of project policies.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamProcessorsRequest {
  /**
   * If the previous response was incomplete (because there are more stream processors to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of stream processors.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to CreateStreamProcessor. The request parameters for `CreateStreamProcessor` describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.
 *
 * @public
 */
export interface StreamProcessor {
  /**
   * Name of the Amazon Rekognition stream processor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Current status of the Amazon Rekognition stream processor.
   *
   * @public
   */
  Status?: StreamProcessorStatus | undefined;
}

/**
 * @public
 */
export interface ListStreamProcessorsResponse {
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of stream processors.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of stream processors that you have created.
   *
   * @public
   */
  StreamProcessors?: StreamProcessor[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the model, collection, or stream processor that contains the tags that you want a list of.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of key-value tags assigned to the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The ID of an existing collection.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * Maximum number of UsersID to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagingation token to receive the next set of UsersID.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Metadata of the user stored in a collection.
 *
 * @public
 */
export interface User {
  /**
   * A provided ID for the User. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * Communicates if the UserID has been updated with latest set of faces to be associated with the UserID.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * List of UsersID associated with the specified collection.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * A pagination token to be used with the subsequent request if the response is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains metadata for a UserID matched with a given face.
 *
 * @public
 */
export interface MatchedUser {
  /**
   * A provided ID for the UserID. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The status of the user matched to a provided FaceID.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see [Calling Amazon Rekognition Video operations](https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html). Note that the Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see [Giving access to multiple Amazon SNS topics](https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics).
 *
 * @public
 */
export interface NotificationChannel {
  /**
   * The Amazon SNS topic to which Amazon Rekognition posts the completion status.
   *
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutProjectPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the project that the project policy is attached to.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * A name for the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels generates and assigns a new `PolicyRevisionId` and then deletes the previous version of the policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * A resource policy to add to the model. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see [IAM JSON policy reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html).
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutProjectPolicyResponse {
  /**
   * The ID of the project policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeCelebritiesRequest {
  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;
}

/**
 * @public
 */
export interface RecognizeCelebritiesResponse {
  /**
   * Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64 celebrities in an image. Each celebrity object includes the following attributes: `Face`, `Confidence`, `Emotions`, `Landmarks`, `Pose`, `Quality`, `Smile`, `Id`, `KnownGender`, `MatchConfidence`, `Name`, `Urls`.
   *
   * @public
   */
  CelebrityFaces?: Celebrity[] | undefined;

  /**
   * Details about each unrecognized face in the image.
   *
   * @public
   */
  UnrecognizedFaces?: ComparedFace[] | undefined;

  /**
   * > **Note:** Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021. Any returned values for this field included in an API response will always be NULL.
   *
   * The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in `CelebrityFaces` and `UnrecognizedFaces` represent face locations before the image orientation is corrected.
   *
   * > **Note:** If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If so, and the Exif metadata for the input image populates the orientation field, the value of `OrientationCorrection` is null. The `CelebrityFaces` and `UnrecognizedFaces` bounding box coordinates represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.
   *
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * @public
 */
export interface SearchFacesRequest {
  /**
   * ID of the collection the face belongs to.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * ID of a face to find matches for in the collection.
   *
   * @public
   */
  FaceId: string | undefined;

  /**
   * Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
   *
   * @public
   */
  MaxFaces?: number | undefined;

  /**
   * Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.
   *
   * @public
   */
  FaceMatchThreshold?: number | undefined;
}

/**
 * @public
 */
export interface SearchFacesResponse {
  /**
   * ID of the face that was searched for matches in a collection.
   *
   * @public
   */
  SearchedFaceId?: string | undefined;

  /**
   * An array of faces that matched the input face, along with the confidence in the match.
   *
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;

  /**
   * Version number of the face detection model associated with the input collection (`CollectionId`).
   *
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface SearchFacesByImageRequest {
  /**
   * ID of the collection to search.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
   *
   * If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the `Bytes` field. For more information, see Images in the Amazon Rekognition developer guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
   *
   * @public
   */
  MaxFaces?: number | undefined;

  /**
   * (Optional) Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.
   *
   * @public
   */
  FaceMatchThreshold?: number | undefined;

  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. If you specify `AUTO`, Amazon Rekognition chooses the quality bar. If you specify `LOW`, `MEDIUM`, or `HIGH`, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify `NONE`, no filtering is performed. The default value is `NONE`.
   *
   * To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.
   *
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * @public
 */
export interface SearchFacesByImageResponse {
  /**
   * The bounding box around the face in the input image that Amazon Rekognition used for the search.
   *
   * @public
   */
  SearchedFaceBoundingBox?: BoundingBox | undefined;

  /**
   * The level of confidence that the `searchedFaceBoundingBox`, contains a face.
   *
   * @public
   */
  SearchedFaceConfidence?: number | undefined;

  /**
   * An array of faces that match the input face, along with the confidence in the match.
   *
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;

  /**
   * Version number of the face detection model associated with the input collection (`CollectionId`).
   *
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a FaceId is provided, UserId isn’t required to be present in the Collection.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * ID for the existing User.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * ID for the existing face.
   *
   * @public
   */
  FaceId?: string | undefined;

  /**
   * Optional value that specifies the minimum confidence in the matched UserID to return. Default value of 80.
   *
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * Maximum number of identities to return.
   *
   * @public
   */
  MaxUsers?: number | undefined;
}

/**
 * Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for search.
 *
 * @public
 */
export interface SearchedFace {
  /**
   * Unique identifier assigned to the face.
   *
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * Contains metadata about a User searched for within a collection.
 *
 * @public
 */
export interface SearchedUser {
  /**
   * A provided ID for the UserID. Unique within the collection.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Provides UserID metadata along with the confidence in the match of this UserID with the input face.
 *
 * @public
 */
export interface UserMatch {
  /**
   * Describes the UserID metadata.
   *
   * @public
   */
  Similarity?: number | undefined;

  /**
   * Confidence in the match of this UserID with the input face.
   *
   * @public
   */
  User?: MatchedUser | undefined;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * An array of UserMatch objects that matched the input face along with the confidence in the match. Array will be empty if there are no matches.
   *
   * @public
   */
  UserMatches?: UserMatch[] | undefined;

  /**
   * Version number of the face detection model associated with the input CollectionId.
   *
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * Contains the ID of a face that was used to search for matches in a collection.
   *
   * @public
   */
  SearchedFace?: SearchedFace | undefined;

  /**
   * Contains the ID of the UserID that was used to search for matches in a collection.
   *
   * @public
   */
  SearchedUser?: SearchedUser | undefined;
}

/**
 * @public
 */
export interface SearchUsersByImageRequest {
  /**
   * The ID of an existing collection containing the UserID.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * Provides the input image either as bytes or an S3 object.
   *
   * You pass image bytes to an Amazon Rekognition API operation by using the `Bytes` property. For example, you would use the `Bytes` property to pass an image loaded from a local file system. Image bytes passed by using the `Bytes` property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations.
   *
   * For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.
   *
   * You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the `S3Object` property. Images stored in an S3 bucket do not need to be base64-encoded.
   *
   * The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.
   *
   * If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.
   *
   * For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide.
   *
   * @public
   */
  Image: Image | undefined;

  /**
   * Specifies the minimum confidence in the UserID match to return. Default value is 80.
   *
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * Maximum number of UserIDs to return.
   *
   * @public
   */
  MaxUsers?: number | undefined;

  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. The default value is NONE.
   *
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * Contains data regarding the input face used for a search.
 *
 * @public
 */
export interface SearchedFaceDetails {
  /**
   * Structure containing attributes of the face that the algorithm detected.
   *
   * A `FaceDetail` object contains either the default facial attributes or all facial attributes. The default attributes are `BoundingBox`, `Confidence`, `Landmarks`, `Pose`, and `Quality`.
   *
   * GetFaceDetection is the only Amazon Rekognition Video stored video operation that can return a `FaceDetail` object with all attributes. To specify which attributes to return, use the `FaceAttributes` input parameter for StartFaceDetection. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a `FaceAttributes` input parameter:
   *
   * - GetCelebrityRecognition
   * - GetPersonTracking
   * - GetFaceSearch
   *
   * The Amazon Rekognition Image DetectFaces and IndexFaces operations can return all facial attributes. To specify which attributes to return, use the `Attributes` input parameter for `DetectFaces`. For `IndexFaces`, use the `DetectAttributes` input parameter.
   *
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
}

/**
 * Face details inferred from the image but not used for search. The response attribute contains reasons for why a face wasn't used for Search.
 *
 * @public
 */
export interface UnsearchedFace {
  /**
   * Structure containing attributes of the face that the algorithm detected.
   *
   * A `FaceDetail` object contains either the default facial attributes or all facial attributes. The default attributes are `BoundingBox`, `Confidence`, `Landmarks`, `Pose`, and `Quality`.
   *
   * GetFaceDetection is the only Amazon Rekognition Video stored video operation that can return a `FaceDetail` object with all attributes. To specify which attributes to return, use the `FaceAttributes` input parameter for StartFaceDetection. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a `FaceAttributes` input parameter:
   *
   * - GetCelebrityRecognition
   * - GetPersonTracking
   * - GetFaceSearch
   *
   * The Amazon Rekognition Image DetectFaces and IndexFaces operations can return all facial attributes. To specify which attributes to return, use the `Attributes` input parameter for `DetectFaces`. For `IndexFaces`, use the `DetectAttributes` input parameter.
   *
   * @public
   */
  FaceDetails?: FaceDetail | undefined;

  /**
   * Reasons why a face wasn't used for Search.
   *
   * @public
   */
  Reasons?: UnsearchedFaceReason[] | undefined;
}

/**
 * @public
 */
export interface SearchUsersByImageResponse {
  /**
   * An array of UserID objects that matched the input face, along with the confidence in the match. The returned structure will be empty if there are no matches. Returned if the SearchUsersByImageResponse action is successful.
   *
   * @public
   */
  UserMatches?: UserMatch[] | undefined;

  /**
   * Version number of the face detection model associated with the input collection CollectionId.
   *
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * A list of FaceDetail objects containing the BoundingBox for the largest face in image, as well as the confidence in the bounding box, that was searched for matches. If no valid face is detected in the image the response will contain no SearchedFace object.
   *
   * @public
   */
  SearchedFace?: SearchedFaceDetails | undefined;

  /**
   * List of UnsearchedFace objects. Contains the face details infered from the specified image but not used for search. Contains reasons that describe why a face wasn't used for Search.
   *
   * @public
   */
  UnsearchedFaces?: UnsearchedFace[] | undefined;
}

/**
 * @public
 */
export interface StartCelebrityRecognitionRequest {
  /**
   * The video in which you want to recognize celebrities. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartCelebrityRecognition` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the celebrity recognition analysis to. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartCelebrityRecognitionResponse {
  /**
   * The identifier for the celebrity recognition analysis job. Use `JobId` to identify the job in a subsequent call to `GetCelebrityRecognition`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartContentModerationRequest {
  /**
   * The video in which you want to detect inappropriate, unwanted, or offensive content. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label. Confidence represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition doesn't return any moderated content labels with a confidence level lower than this specified value. If you don't specify `MinConfidence`, `GetContentModeration` returns labels with confidence values greater than or equal to 50 percent.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartContentModeration` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the content analysis to. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartContentModerationResponse {
  /**
   * The identifier for the content analysis job. Use `JobId` to identify the job in a subsequent call to `GetContentModeration`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceDetectionRequest {
  /**
   * The video in which you want to detect faces. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartFaceDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the face detection operation. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * The face attributes you want returned.
   *
   * `DEFAULT` - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks.
   *
   * `ALL` - All facial attributes are returned.
   *
   * @public
   */
  FaceAttributes?: FaceAttributes | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceDetectionResponse {
  /**
   * The identifier for the face detection job. Use `JobId` to identify the job in a subsequent call to `GetFaceDetection`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceSearchRequest {
  /**
   * The video you want to search. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartFaceSearch` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.
   *
   * @public
   */
  FaceMatchThreshold?: number | undefined;

  /**
   * ID of the collection that contains the faces you want to search for.
   *
   * @public
   */
  CollectionId: string | undefined;

  /**
   * The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceSearchResponse {
  /**
   * The identifier for the search job. Use `JobId` to identify the job in a subsequent call to `GetFaceSearch`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartLabelDetectionRequest {
  /**
   * The video in which you want to detect labels. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartLabelDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any labels with a confidence level lower than this specified value.
   *
   * If you don't specify `MinConfidence`, the operation returns labels and bounding boxes (if detected) with confidence values greater than or equal to 50 percent.
   *
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the label detection operation to. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * The features to return after video analysis. You can specify that GENERAL_LABELS are returned.
   *
   * @public
   */
  Features?: LabelDetectionFeatureName[] | undefined;

  /**
   * The settings for a StartLabelDetection request.Contains the specified parameters for the label detection request of an asynchronous label analysis operation. Settings can include filters for GENERAL_LABELS.
   *
   * @public
   */
  Settings?: LabelDetectionSettings | undefined;
}

/**
 * @public
 */
export interface StartLabelDetectionResponse {
  /**
   * The identifier for the label detection job. Use `JobId` to identify the job in a subsequent call to `GetLabelDetection`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartMediaAnalysisJobRequest {
  /**
   * Idempotency token used to prevent the accidental creation of duplicate versions. If you use the same token with multiple `StartMediaAnalysisJobRequest` requests, the same response is returned. Use `ClientRequestToken` to prevent the same request from being processed more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the job. Does not have to be unique.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Configuration options for the media analysis job to be created.
   *
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * Input data to be analyzed by the job.
   *
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * The Amazon S3 bucket location to store the results.
   *
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * The identifier of customer managed AWS KMS key (name or ARN). The key is used to encrypt images copied into the service. The key is also used to encrypt results and manifest files written to the output Amazon S3 bucket.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartMediaAnalysisJobResponse {
  /**
   * Identifier for the created job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StartPersonTrackingRequest {
  /**
   * The video in which you want to detect people. The video must be stored in an Amazon S3 bucket.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartPersonTracking` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the people detection operation to. The Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartPersonTrackingResponse {
  /**
   * The identifier for the person detection job. Use `JobId` to identify the job in a subsequent call to `GetPersonTracking`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartProjectVersionRequest {
  /**
   * The Amazon Resource Name(ARN) of the model version that you want to start.
   *
   * @public
   */
  ProjectVersionArn: string | undefined;

  /**
   * The minimum number of inference units to use. A single inference unit represents 1 hour of processing.
   *
   * Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use.
   *
   * @public
   */
  MinInferenceUnits: number | undefined;

  /**
   * The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Rekognition Custom Labels doesn't auto-scale the model.
   *
   * @public
   */
  MaxInferenceUnits?: number | undefined;
}

/**
 * @public
 */
export interface StartProjectVersionResponse {
  /**
   * The current running status of the model.
   *
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * Filters for the shot detection segments returned by `GetSegmentDetection`. For more information, see StartSegmentDetectionFilters.
 *
 * @public
 */
export interface StartShotDetectionFilter {
  /**
   * Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence level lower than this specified value.
   *
   * If you don't specify `MinSegmentConfidence`, the `GetSegmentDetection` returns segments with confidence values greater than or equal to 50 percent.
   *
   * @public
   */
  MinSegmentConfidence?: number | undefined;
}

/**
 * Filters for the technical segments returned by GetSegmentDetection. For more information, see StartSegmentDetectionFilters.
 *
 * @public
 */
export interface StartTechnicalCueDetectionFilter {
  /**
   * Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence level lower than this specified value.
   *
   * If you don't specify `MinSegmentConfidence`, `GetSegmentDetection` returns segments with confidence values greater than or equal to 50 percent.
   *
   * @public
   */
  MinSegmentConfidence?: number | undefined;

  /**
   * A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. Videos can come from multiple sources, formats, and time periods, with different standards and varying noise levels for black frames that need to be accounted for.
   *
   * @public
   */
  BlackFrame?: BlackFrame | undefined;
}

/**
 * Filters applied to the technical cue or shot detection segments. For more information, see StartSegmentDetection.
 *
 * @public
 */
export interface StartSegmentDetectionFilters {
  /**
   * Filters that are specific to technical cues.
   *
   * @public
   */
  TechnicalCueFilter?: StartTechnicalCueDetectionFilter | undefined;

  /**
   * Filters that are specific to shot detections.
   *
   * @public
   */
  ShotFilter?: StartShotDetectionFilter | undefined;
}

/**
 * @public
 */
export interface StartSegmentDetectionRequest {
  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartSegmentDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidently started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the segment detection operation. Note that the Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * Filters for technical cue or shot detection.
   *
   * @public
   */
  Filters?: StartSegmentDetectionFilters | undefined;

  /**
   * An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT.
   *
   * @public
   */
  SegmentTypes: SegmentType[] | undefined;
}

/**
 * @public
 */
export interface StartSegmentDetectionResponse {
  /**
   * Unique identifier for the segment detection job. The `JobId` is returned from `StartSegmentDetection`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.
 *
 * @public
 */
export interface StreamProcessingStartSelector {
  /**
   * Specifies the starting point in the stream to start processing. This can be done with a producer timestamp or a fragment number in a Kinesis stream.
   *
   * @public
   */
  KVSStreamStartSelector?: KinesisVideoStreamStartSelector | undefined;
}

/**
 * Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video.
 *
 * @public
 */
export interface StreamProcessingStopSelector {
  /**
   * Specifies the maximum amount of time in seconds that you want the stream to be processed. The largest amount of time is 2 minutes. The default is 10 seconds.
   *
   * @public
   */
  MaxDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartStreamProcessorRequest {
  /**
   * The name of the stream processor to start processing.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the starting point in the Kinesis stream to start processing. You can use the producer timestamp or the fragment number. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see [Fragment](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html).
   *
   * This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.
   *
   * @public
   */
  StartSelector?: StreamProcessingStartSelector | undefined;

  /**
   * Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video.
   *
   * This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.
   *
   * @public
   */
  StopSelector?: StreamProcessingStopSelector | undefined;
}

/**
 * @public
 */
export interface StartStreamProcessorResponse {
  /**
   * A unique identifier for the stream processing session.
   *
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * Set of optional parameters that let you set the criteria text must meet to be included in your response. `WordFilter` looks at a word's height, width and minimum confidence. `RegionOfInterest` lets you set a specific region of the screen to look for text in.
 *
 * @public
 */
export interface StartTextDetectionFilters {
  /**
   * Filters focusing on qualities of the text, such as confidence or size.
   *
   * @public
   */
  WordFilter?: DetectionFilter | undefined;

  /**
   * Filter focusing on a certain area of the frame. Uses a `BoundingBox` object to set the region of the screen.
   *
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;
}

/**
 * @public
 */
export interface StartTextDetectionRequest {
  /**
   * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use `Video` to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
   *
   * @public
   */
  Video: Video | undefined;

  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple `StartTextDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidentaly started more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see [Calling Amazon Rekognition Video operations](https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html). Note that the Amazon SNS topic must have a topic name that begins with *AmazonRekognition* if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see [Giving access to multiple Amazon SNS topics](https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics).
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * An identifier returned in the completion status published by your Amazon Simple Notification Service topic. For example, you can use `JobTag` to group related jobs and identify them in the completion notification.
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * Optional parameters that let you set criteria the text must meet to be included in your response.
   *
   * @public
   */
  Filters?: StartTextDetectionFilters | undefined;
}

/**
 * @public
 */
export interface StartTextDetectionResponse {
  /**
   * Identifier for the text detection job. Use `JobId` to identify the job in a subsequent call to `GetTextDetection`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopProjectVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the model version that you want to stop.
   *
   * This operation requires permissions to perform the `rekognition:StopProjectVersion` action.
   *
   * @public
   */
  ProjectVersionArn: string | undefined;
}

/**
 * @public
 */
export interface StopProjectVersionResponse {
  /**
   * The current status of the stop operation.
   *
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * @public
 */
export interface StopStreamProcessorRequest {
  /**
   * The name of a stream processor created by CreateStreamProcessor.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopStreamProcessorResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to assign the tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value tags to assign to the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to remove the tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of the tags that you want to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDatasetEntriesRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset that you want to update.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The changes that you want to make to the dataset.
   *
   * @public
   */
  Changes: DatasetChanges | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetEntriesResponse {}

/**
 * The stream processor settings that you want to update. `ConnectedHome` settings can be updated to detect different labels with a different minimum confidence.
 *
 * @public
 */
export interface StreamProcessorSettingsForUpdate {
  /**
   * The label detection settings you want to use for your stream processor.
   *
   * @public
   */
  ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate | undefined;
}
