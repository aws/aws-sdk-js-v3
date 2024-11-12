// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  BlackFrame,
  BoundingBox,
  Celebrity,
  ComparedFace,
  ConnectedHomeSettingsForUpdate,
  DatasetChanges,
  DetectionFilter,
  FaceAttributes,
  FaceDetail,
  FaceMatch,
  Image,
  KinesisVideoStreamStartSelector,
  LabelDetectionFeatureName,
  LabelDetectionSettings,
  MediaAnalysisInput,
  MediaAnalysisOperationsConfig,
  MediaAnalysisOutputConfig,
  OrientationCorrection,
  ProjectVersionStatus,
  QualityFilter,
  RegionOfInterest,
  SegmentType,
  StreamProcessorDataSharingPreference,
  UserStatus,
  Video,
} from "./models_0";

import { RekognitionServiceException as __BaseException } from "./RekognitionServiceException";

/**
 * <p>Contains metadata for a UserID matched with a given face.</p>
 * @public
 */
export interface MatchedUser {
  /**
   * <p>A provided ID for the UserID. Unique within the collection.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The status of the user matched to a provided FaceID.</p>
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see
 *           <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
 *           For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.</p>
 * @public
 */
export interface NotificationChannel {
  /**
   * <p>The Amazon SNS topic to which Amazon Rekognition posts the completion status.</p>
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic. </p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutProjectPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that the project policy is attached to.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>A name for the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels
   *          generates and assigns a new <code>PolicyRevisionId</code> and then deletes the previous version of the
   *          policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>A resource policy to add to the model. The policy is a JSON structure that contains
   *          one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For
   *          more information about the contents of a JSON policy document, see
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON policy reference</a>. </p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutProjectPolicyResponse {
  /**
   * <p>The ID of the project policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeCelebritiesRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   * @public
   */
  Image: Image | undefined;
}

/**
 * @public
 */
export interface RecognizeCelebritiesResponse {
  /**
   * <p>Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64
   *       celebrities in an image. Each celebrity object includes the following attributes:
   *         <code>Face</code>, <code>Confidence</code>, <code>Emotions</code>, <code>Landmarks</code>,
   *         <code>Pose</code>, <code>Quality</code>, <code>Smile</code>, <code>Id</code>,
   *         <code>KnownGender</code>, <code>MatchConfidence</code>, <code>Name</code>,
   *       <code>Urls</code>.</p>
   * @public
   */
  CelebrityFaces?: Celebrity[] | undefined;

  /**
   * <p>Details about each unrecognized face in the image.</p>
   * @public
   */
  UnrecognizedFaces?: ComparedFace[] | undefined;

  /**
   * <note>
   *             <p>Support for estimating image orientation using the the OrientationCorrection field
   *         has ceased as of August 2021. Any returned values for this field included in an API response
   *         will always be NULL.</p>
   *          </note>
   *          <p>The orientation of the input image (counterclockwise direction). If your application
   *       displays the image, you can use this value to correct the orientation. The bounding box
   *       coordinates returned in <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code>
   *       represent face locations before the image orientation is corrected. </p>
   *          <note>
   *             <p>If the input image is in .jpeg format, it might contain exchangeable image (Exif)
   *         metadata that includes the image's orientation. If so, and the Exif metadata for the input
   *         image populates the orientation field, the value of <code>OrientationCorrection</code> is
   *         null. The <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> bounding box
   *         coordinates represent face locations after Exif metadata is used to correct the image
   *         orientation. Images in .png format don't contain Exif metadata. </p>
   *          </note>
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * @public
 */
export interface SearchFacesRequest {
  /**
   * <p>ID of the collection the face belongs to.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>ID of a face to find matches for in the collection.</p>
   * @public
   */
  FaceId: string | undefined;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces
   *       with the highest confidence in the match.</p>
   * @public
   */
  MaxFaces?: number | undefined;

  /**
   * <p>Optional value specifying the minimum confidence in the face match to return. For
   *       example, don't return any matches where confidence in matches is less than 70%. The default
   *       value is 80%. </p>
   * @public
   */
  FaceMatchThreshold?: number | undefined;
}

/**
 * @public
 */
export interface SearchFacesResponse {
  /**
   * <p>ID of the face that was searched for matches in a collection.</p>
   * @public
   */
  SearchedFaceId?: string | undefined;

  /**
   * <p>An array of faces that matched the input face, along with the confidence in the
   *       match.</p>
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;

  /**
   * <p>Version number of the face detection model associated with the input collection
   *         (<code>CollectionId</code>).</p>
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface SearchFacesByImageRequest {
  /**
   * <p>ID of the collection to search.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces
   *       with the highest confidence in the match.</p>
   * @public
   */
  MaxFaces?: number | undefined;

  /**
   * <p>(Optional) Specifies the minimum confidence in the face match to return. For example,
   *       don't return any matches where confidence in matches is less than 70%. The default value is
   *       80%.</p>
   * @public
   */
  FaceMatchThreshold?: number | undefined;

  /**
   * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
   *       Filtered faces aren't searched for in the collection. If you specify <code>AUTO</code>,
   *       Amazon Rekognition chooses the quality bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or
   *         <code>HIGH</code>, filtering removes all faces that don’t meet the chosen quality bar.
   *        The quality bar is
   *       based on a variety of common use cases. Low-quality detections can occur for a number of
   *       reasons. Some examples are an object that's misidentified as a face, a face that's too blurry,
   *       or a face with a pose that's too extreme to use. If you specify <code>NONE</code>, no
   *       filtering is performed. The default value is <code>NONE</code>. </p>
   *          <p>To use quality filtering, the collection you are using must be associated with version 3
   *       of the face model or higher.</p>
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * @public
 */
export interface SearchFacesByImageResponse {
  /**
   * <p>The bounding box around the face in the input image that Amazon Rekognition used for the
   *       search.</p>
   * @public
   */
  SearchedFaceBoundingBox?: BoundingBox | undefined;

  /**
   * <p>The level of confidence that the <code>searchedFaceBoundingBox</code>, contains a
   *       face.</p>
   * @public
   */
  SearchedFaceConfidence?: number | undefined;

  /**
   * <p>An array of faces that match the input face, along with the confidence in the
   *       match.</p>
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;

  /**
   * <p>Version number of the face detection model associated with the input collection
   *         (<code>CollectionId</code>).</p>
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a
   *       FaceId is provided, UserId isn’t required to be present in the Collection.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the existing User.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>ID for the existing face.</p>
   * @public
   */
  FaceId?: string | undefined;

  /**
   * <p>Optional value that specifies the minimum confidence in the matched UserID to return.
   *       Default value of 80.</p>
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * <p>Maximum number of identities to return.</p>
   * @public
   */
  MaxUsers?: number | undefined;
}

/**
 * <p>Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for
 *       search.</p>
 * @public
 */
export interface SearchedFace {
  /**
   * <p> Unique identifier assigned to the face.</p>
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * <p>Contains metadata about a User searched for within a collection.</p>
 * @public
 */
export interface SearchedUser {
  /**
   * <p> A provided ID for the UserID. Unique within the collection. </p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>Provides UserID metadata along with the confidence in the match of this UserID with the
 *       input face.</p>
 * @public
 */
export interface UserMatch {
  /**
   * <p> Describes the UserID metadata.</p>
   * @public
   */
  Similarity?: number | undefined;

  /**
   * <p> Confidence in the match of this UserID with the input face. </p>
   * @public
   */
  User?: MatchedUser | undefined;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * <p>An array of UserMatch objects that matched the input face along with the confidence in the
   *       match. Array will be empty if there are no matches.</p>
   * @public
   */
  UserMatches?: UserMatch[] | undefined;

  /**
   * <p>Version number of the face detection model associated with the input CollectionId.</p>
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * <p>Contains the ID of a face that was used to search for matches in a collection.</p>
   * @public
   */
  SearchedFace?: SearchedFace | undefined;

  /**
   * <p>Contains the ID of the UserID that was used to search for matches in a collection.</p>
   * @public
   */
  SearchedUser?: SearchedUser | undefined;
}

/**
 * @public
 */
export interface SearchUsersByImageRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>Provides the input image either as bytes or an S3 object.</p>
   *          <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code>
   *       property. For example, you would use the <code>Bytes</code> property to pass an image loaded
   *       from a local file system. Image bytes passed by using the <code>Bytes</code> property must be
   *       base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to
   *       call Amazon Rekognition API operations. </p>
   *          <p>For more information, see Analyzing an Image Loaded from a Local File System
   *       in the Amazon Rekognition Developer Guide.</p>
   *          <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the
   *         <code>S3Object</code> property. Images stored in an S3 bucket do not need to be
   *       base64-encoded.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the
   *       Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and
   *       then call the operation using the S3Object property.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Specifies the minimum confidence in the UserID match to return. Default value is
   *       80.</p>
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * <p>Maximum number of UserIDs to return.</p>
   * @public
   */
  MaxUsers?: number | undefined;

  /**
   * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
   *       Filtered faces aren't searched for in the collection. The default value is NONE.</p>
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * <p>Contains data regarding the input face used for a search.</p>
 * @public
 */
export interface SearchedFaceDetails {
  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   *          <p>A <code>FaceDetail</code> object contains either the default facial attributes or all
   *       facial attributes. The default attributes are <code>BoundingBox</code>,
   *         <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and
   *       <code>Quality</code>.</p>
   *          <p>
   *             <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can
   *       return a <code>FaceDetail</code> object with all attributes. To specify which attributes to
   *       return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default
   *       attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input
   *       parameter:</p>
   *          <ul>
   *             <li>
   *                <p>GetCelebrityRecognition</p>
   *             </li>
   *             <li>
   *                <p>GetPersonTracking</p>
   *             </li>
   *             <li>
   *                <p>GetFaceSearch</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations
   *       can return all facial attributes. To specify which attributes to return, use the
   *         <code>Attributes</code> input parameter for <code>DetectFaces</code>. For
   *         <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
}

/**
 * @public
 * @enum
 */
export const UnsearchedFaceReason = {
  EXCEEDS_MAX_FACES: "EXCEEDS_MAX_FACES",
  EXTREME_POSE: "EXTREME_POSE",
  FACE_NOT_LARGEST: "FACE_NOT_LARGEST",
  LOW_BRIGHTNESS: "LOW_BRIGHTNESS",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  LOW_FACE_QUALITY: "LOW_FACE_QUALITY",
  LOW_SHARPNESS: "LOW_SHARPNESS",
  SMALL_BOUNDING_BOX: "SMALL_BOUNDING_BOX",
} as const;

/**
 * @public
 */
export type UnsearchedFaceReason = (typeof UnsearchedFaceReason)[keyof typeof UnsearchedFaceReason];

/**
 * <p>Face details inferred from the image but not used for search. The response attribute
 *       contains reasons for why a face wasn't used for Search. </p>
 * @public
 */
export interface UnsearchedFace {
  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   *          <p>A <code>FaceDetail</code> object contains either the default facial attributes or all
   *       facial attributes. The default attributes are <code>BoundingBox</code>,
   *         <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and
   *       <code>Quality</code>.</p>
   *          <p>
   *             <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can
   *       return a <code>FaceDetail</code> object with all attributes. To specify which attributes to
   *       return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default
   *       attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input
   *       parameter:</p>
   *          <ul>
   *             <li>
   *                <p>GetCelebrityRecognition</p>
   *             </li>
   *             <li>
   *                <p>GetPersonTracking</p>
   *             </li>
   *             <li>
   *                <p>GetFaceSearch</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations
   *       can return all facial attributes. To specify which attributes to return, use the
   *         <code>Attributes</code> input parameter for <code>DetectFaces</code>. For
   *         <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
   * @public
   */
  FaceDetails?: FaceDetail | undefined;

  /**
   * <p> Reasons why a face wasn't used for Search. </p>
   * @public
   */
  Reasons?: UnsearchedFaceReason[] | undefined;
}

/**
 * @public
 */
export interface SearchUsersByImageResponse {
  /**
   * <p>An array of UserID objects that matched the input face, along with the confidence in the
   *       match. The returned structure will be empty if there are no matches. Returned if the
   *       SearchUsersByImageResponse action is successful.</p>
   * @public
   */
  UserMatches?: UserMatch[] | undefined;

  /**
   * <p>Version number of the face detection model associated with the input collection
   *       CollectionId.</p>
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * <p>A list of FaceDetail objects containing the BoundingBox for the largest face in image, as
   *       well as the confidence in the bounding box, that was searched for matches. If no valid face is
   *       detected in the image the response will contain no SearchedFace object.</p>
   * @public
   */
  SearchedFace?: SearchedFaceDetails | undefined;

  /**
   * <p>List of UnsearchedFace objects. Contains the face details infered from the specified image
   *       but not used for search. Contains reasons that describe why a face wasn't used for Search.
   *     </p>
   * @public
   */
  UnsearchedFaces?: UnsearchedFace[] | undefined;
}

/**
 * @public
 */
export interface StartCelebrityRecognitionRequest {
  /**
   * <p>The video in which you want to recognize celebrities. The video must be stored
   *       in an Amazon S3 bucket.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *     <code>StartCelebrityRecognition</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
   *       celebrity recognition analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartCelebrityRecognitionResponse {
  /**
   * <p>The identifier for the celebrity recognition analysis job. Use <code>JobId</code> to identify the job in
   *       a subsequent call to <code>GetCelebrityRecognition</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * <p>The file size or duration of the supplied media is too large. The maximum file size is 10GB.
 *         The maximum duration is 6 hours. </p>
 * @public
 */
export class VideoTooLargeException extends __BaseException {
  readonly name: "VideoTooLargeException" = "VideoTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VideoTooLargeException, __BaseException>) {
    super({
      name: "VideoTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VideoTooLargeException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * @public
 */
export interface StartContentModerationRequest {
  /**
   * <p>The video in which you want to detect inappropriate, unwanted, or offensive content. The video must be stored
   *       in an Amazon S3 bucket.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label. Confidence
   *       represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition doesn't return any moderated content labels with a confidence level
   *       lower than this specified value. If you don't specify <code>MinConfidence</code>, <code>GetContentModeration</code>
   *        returns labels with confidence values greater than or equal to 50 percent.</p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartContentModeration</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
   *       content analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartContentModerationResponse {
  /**
   * <p>The identifier for the content analysis job. Use <code>JobId</code> to identify the job in
   *       a subsequent call to <code>GetContentModeration</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceDetectionRequest {
  /**
   * <p>The video in which you want to detect faces. The video must be stored
   *       in an Amazon S3 bucket.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartFaceDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the
   *          face detection operation. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>The face attributes you want returned.</p>
   *          <p>
   *             <code>DEFAULT</code> - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. </p>
   *          <p>
   *             <code>ALL</code> - All facial attributes are returned.</p>
   * @public
   */
  FaceAttributes?: FaceAttributes | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceDetectionResponse {
  /**
   * <p>The identifier for the face detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetFaceDetection</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceSearchRequest {
  /**
   * <p>The video you want to search. The video must be stored in an Amazon S3 bucket. </p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartFaceSearch</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%.
   *       The default value is 80%.</p>
   * @public
   */
  FaceMatchThreshold?: number | undefined;

  /**
   * <p>ID of the collection that contains the faces you want to search for.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartFaceSearchResponse {
  /**
   * <p>The identifier for the search job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetFaceSearch</code>. </p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartLabelDetectionRequest {
  /**
   * <p>The video in which you want to detect labels. The video must be stored
   *       in an Amazon S3 bucket.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartLabelDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence
   *        represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence.
   *        100 is the highest confidence.  Amazon Rekognition Video doesn't return any labels with a confidence level
   *        lower than this specified value.</p>
   *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels and
   *       bounding boxes (if detected)  with confidence values greater than or equal to 50
   *       percent.</p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the label detection
   *         operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>The features to return after video analysis. You can specify that GENERAL_LABELS are returned.</p>
   * @public
   */
  Features?: LabelDetectionFeatureName[] | undefined;

  /**
   * <p>The settings for a StartLabelDetection request.Contains the specified parameters for the label detection request of an asynchronous label analysis operation.
   *       Settings can include filters for GENERAL_LABELS.</p>
   * @public
   */
  Settings?: LabelDetectionSettings | undefined;
}

/**
 * @public
 */
export interface StartLabelDetectionResponse {
  /**
   * <p>The identifier for the label detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetLabelDetection</code>. </p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartMediaAnalysisJobRequest {
  /**
   * <p>Idempotency token used to prevent the accidental creation of duplicate versions. If
   *             you use the same token with multiple <code>StartMediaAnalysisJobRequest</code> requests, the same
   *             response is returned. Use <code>ClientRequestToken</code> to prevent the same request from being
   *             processed more than once.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name of the job. Does not have to be unique.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Configuration options for the media analysis job to be created.</p>
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * <p>Input data to be analyzed by the job.</p>
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * <p>The Amazon S3 bucket location to store the results.</p>
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * <p>The identifier of customer managed AWS KMS key (name or ARN). The key
   *         is used to encrypt images copied into the service. The key is also used
   *         to encrypt results and manifest files written to the output Amazon S3 bucket.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartMediaAnalysisJobResponse {
  /**
   * <p>Identifier for the created job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StartPersonTrackingRequest {
  /**
   * <p>The video in which you want to detect people. The video must be stored
   *       in an Amazon S3 bucket.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartPersonTracking</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the people detection
   *         operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface StartPersonTrackingResponse {
  /**
   * <p>The identifier for the person detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetPersonTracking</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name(ARN) of the model version that you want to start.</p>
   * @public
   */
  ProjectVersionArn: string | undefined;

  /**
   * <p>The minimum number of inference units to use. A single
   *       inference unit represents 1 hour of processing. </p>
   *          <p>Use a higher number to increase the TPS throughput of your model. You are charged for the number
   *       of inference units that you use.
   *     </p>
   * @public
   */
  MinInferenceUnits: number | undefined;

  /**
   * <p>The maximum number of inference units to use for auto-scaling the model. If you don't
   *          specify a value, Amazon Rekognition Custom Labels doesn't auto-scale the model.</p>
   * @public
   */
  MaxInferenceUnits?: number | undefined;
}

/**
 * @public
 */
export interface StartProjectVersionResponse {
  /**
   * <p>The current running status of the model. </p>
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * <p>Filters for the shot detection segments returned by <code>GetSegmentDetection</code>.
 *       For more information, see <a>StartSegmentDetectionFilters</a>.</p>
 * @public
 */
export interface StartShotDetectionFilter {
  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence
   *       represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition Video doesn't return any segments with a confidence level
   *       lower than this specified value.</p>
   *          <p>If you don't specify <code>MinSegmentConfidence</code>, the <code>GetSegmentDetection</code> returns
   *         segments with confidence values greater than or equal to 50 percent.</p>
   * @public
   */
  MinSegmentConfidence?: number | undefined;
}

/**
 * <p>Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information,
 *       see <a>StartSegmentDetectionFilters</a>.</p>
 * @public
 */
export interface StartTechnicalCueDetectionFilter {
  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence
   *       represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition Video doesn't return any segments with a confidence level
   *       lower than this specified value.</p>
   *          <p>If you don't specify <code>MinSegmentConfidence</code>, <code>GetSegmentDetection</code> returns
   *       segments with confidence values greater than or equal to 50 percent.</p>
   * @public
   */
  MinSegmentConfidence?: number | undefined;

  /**
   * <p>
   *       A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame.
   *       Videos can come from multiple sources, formats, and time periods, with different standards and varying noise levels for black frames that need to be accounted for.
   *     </p>
   * @public
   */
  BlackFrame?: BlackFrame | undefined;
}

/**
 * <p>Filters applied to the technical cue or shot detection segments.
 *       For more information, see <a>StartSegmentDetection</a>.
 *     </p>
 * @public
 */
export interface StartSegmentDetectionFilters {
  /**
   * <p>Filters that are specific to technical cues.</p>
   * @public
   */
  TechnicalCueFilter?: StartTechnicalCueDetectionFilter | undefined;

  /**
   * <p>Filters that are specific to shot detections.</p>
   * @public
   */
  ShotFilter?: StartShotDetectionFilter | undefined;
}

/**
 * @public
 */
export interface StartSegmentDetectionRequest {
  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartSegmentDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the
   *       segment detection operation. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>Filters for technical cue or shot detection.</p>
   * @public
   */
  Filters?: StartSegmentDetectionFilters | undefined;

  /**
   * <p>An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT.</p>
   * @public
   */
  SegmentTypes: SegmentType[] | undefined;
}

/**
 * @public
 */
export interface StartSegmentDetectionResponse {
  /**
   * <p>Unique identifier for the segment detection job. The <code>JobId</code> is returned from <code>StartSegmentDetection</code>.
   *     </p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * <p>This is a required parameter for label detection stream processors and should not be used
 *             to start a face search stream processor.</p>
 * @public
 */
export interface StreamProcessingStartSelector {
  /**
   * <p>
   *             Specifies the starting point in the stream to start processing. This can be done with a producer timestamp or a fragment number in a Kinesis stream.
   *         </p>
   * @public
   */
  KVSStreamStartSelector?: KinesisVideoStreamStartSelector | undefined;
}

/**
 * <p>
 *             Specifies when to stop processing the stream. You can specify a maximum amount
 *             of time to process the video.
 *         </p>
 * @public
 */
export interface StreamProcessingStopSelector {
  /**
   * <p>
   *             Specifies the maximum amount of time in seconds that you want the stream to be processed. The largest amount of time is 2 minutes. The default is 10 seconds.
   *         </p>
   * @public
   */
  MaxDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartStreamProcessorRequest {
  /**
   * <p>The name of the stream processor to start processing.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             Specifies the starting point in the Kinesis stream to start processing.
   *             You can use the producer timestamp or the fragment number. If you use the producer timestamp, you must put the time in milliseconds.
   *             For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>.
   *         </p>
   *          <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>
   * @public
   */
  StartSelector?: StreamProcessingStartSelector | undefined;

  /**
   * <p>
   *             Specifies when to stop processing the stream. You can specify a
   *             maximum amount of time to process the video.
   *         </p>
   *          <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>
   * @public
   */
  StopSelector?: StreamProcessingStopSelector | undefined;
}

/**
 * @public
 */
export interface StartStreamProcessorResponse {
  /**
   * <p>
   *             A unique identifier for the stream processing session.
   *         </p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * <p>Set of optional parameters that let you set the criteria text must meet to be included in your response.
 *       <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code>
 *       lets you set a specific region of the screen to look for text in.</p>
 * @public
 */
export interface StartTextDetectionFilters {
  /**
   * <p>Filters focusing on qualities of the text, such as confidence or size.</p>
   * @public
   */
  WordFilter?: DetectionFilter | undefined;

  /**
   * <p>Filter focusing on a certain area of the frame. Uses a <code>BoundingBox</code> object to set the region
   *       of the screen.</p>
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;
}

/**
 * @public
 */
export interface StartTextDetectionRequest {
  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple <code>StartTextDetection</code>
   *       requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job
   *         from being accidentaly started more than once.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see
   *           <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
   *           For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.</p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>An identifier returned in the completion status published by your Amazon Simple Notification Service topic.  For example, you can use <code>JobTag</code> to group related jobs
   *       and identify them in the completion notification.</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>Optional parameters that let you set criteria the text must meet to be included in your response.</p>
   * @public
   */
  Filters?: StartTextDetectionFilters | undefined;
}

/**
 * @public
 */
export interface StartTextDetectionResponse {
  /**
   * <p>Identifier for the text detection job.  Use <code>JobId</code> to identify the job in a subsequent call to <code>GetTextDetection</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version that you want to stop.</p>
   *          <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>
   * @public
   */
  ProjectVersionArn: string | undefined;
}

/**
 * @public
 */
export interface StopProjectVersionResponse {
  /**
   * <p>The current status of the stop operation. </p>
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * @public
 */
export interface StopStreamProcessorRequest {
  /**
   * <p>The name of a stream processor created by <a>CreateStreamProcessor</a>.</p>
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
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   *       assign the tags to. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> The key-value tags to assign to the resource. </p>
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
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   *       remove the tags from. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A list of the tags that you want to remove. </p>
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
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to update.
   * </p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>
   *    The changes that you want to make to the dataset.
   * </p>
   * @public
   */
  Changes: DatasetChanges | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetEntriesResponse {}

/**
 * @public
 * @enum
 */
export const StreamProcessorParameterToDelete = {
  ConnectedHomeMinConfidence: "ConnectedHomeMinConfidence",
  RegionsOfInterest: "RegionsOfInterest",
} as const;

/**
 * @public
 */
export type StreamProcessorParameterToDelete =
  (typeof StreamProcessorParameterToDelete)[keyof typeof StreamProcessorParameterToDelete];

/**
 * <p>
 *             The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence.
 *         </p>
 * @public
 */
export interface StreamProcessorSettingsForUpdate {
  /**
   * <p>
   *             The label detection settings you want to use for your stream processor.
   *         </p>
   * @public
   */
  ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateStreamProcessorRequest {
  /**
   * <p>
   *             Name of the stream processor that you want to update.
   *         </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence.
   *         </p>
   * @public
   */
  SettingsForUpdate?: StreamProcessorSettingsForUpdate | undefined;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   * @public
   */
  RegionsOfInterestForUpdate?: RegionOfInterest[] | undefined;

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   * @public
   */
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference | undefined;

  /**
   * <p>
   *             A list of parameters you want to delete from the stream processor.
   *         </p>
   * @public
   */
  ParametersToDelete?: StreamProcessorParameterToDelete[] | undefined;
}

/**
 * @public
 */
export interface UpdateStreamProcessorResponse {}
