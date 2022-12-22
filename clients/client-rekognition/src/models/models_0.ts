// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { RekognitionServiceException as __BaseException } from "./RekognitionServiceException";

/**
 * <p>You are not authorized to perform the action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Structure containing the estimated age range, in years, for a face.</p>
 *          <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age
 *       ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the
 *       face of a 6-year-old might have an estimated range of 4-8.</p>
 */
export interface AgeRange {
  /**
   * <p>The lowest estimated age.</p>
   */
  Low?: number;

  /**
   * <p>The highest estimated age.</p>
   */
  High?: number;
}

/**
 * <p>Provides the S3 bucket name and object name.</p>
 *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
 *       Amazon Rekognition operations.</p>
 *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
 *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
 *       Amazon Rekognition Developer Guide. </p>
 */
export interface S3Object {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>S3 object key name.</p>
   */
  Name?: string;

  /**
   * <p>If the bucket is versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

/**
 * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
 * </p>
 */
export interface GroundTruthManifest {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   */
  S3Object?: S3Object;
}

/**
 * <p>Assets are the images that you use to train and evaluate a model version.
 *          Assets can also contain validation information that you use to debug a failed model training.
 *          </p>
 */
export interface Asset {
  /**
   * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   * </p>
   */
  GroundTruthManifest?: GroundTruthManifest;
}

export enum Attribute {
  ALL = "ALL",
  DEFAULT = "DEFAULT",
}

/**
 * <p>Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects
 *       for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. </p>
 */
export interface AudioMetadata {
  /**
   * <p>The audio codec used to encode or decode the audio stream. </p>
   */
  Codec?: string;

  /**
   * <p>The duration of the audio stream in milliseconds.</p>
   */
  DurationMillis?: number;

  /**
   * <p>The sample rate for the audio stream.</p>
   */
  SampleRate?: number;

  /**
   * <p>The number of audio channels in the segment.</p>
   */
  NumberOfChannels?: number;
}

/**
 * <p>Indicates whether or not the face has a beard, and the confidence level in the
 *       determination.</p>
 */
export interface Beard {
  /**
   * <p>Boolean value that indicates whether the face has beard or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

/**
 * <p>
 *       A filter that allows you to control the black frame detection by specifying the black levels
 *       and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats,
 *       and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for.
 *       For more information, see <a>StartSegmentDetection</a>.
 *     </p>
 */
export interface BlackFrame {
  /**
   * <p>
   *       A threshold used to determine the maximum luminance value for a pixel to be considered black. In a full color range video,
   *       luminance values range from 0-255. A pixel value of 0 is pure black, and the most strict filter. The maximum black pixel
   *       value is computed as follows: max_black_pixel_value = minimum_luminance + MaxPixelThreshold *luminance_range.
   *     </p>
   *          <p>For example, for a full range video with BlackPixelThreshold = 0.1,  max_black_pixel_value is 0 + 0.1 * (255-0) = 25.5.</p>
   *          <p>The default value of MaxPixelThreshold is 0.2, which maps to a max_black_pixel_value of 51 for a full range video.
   *       You can lower this threshold to be more strict on black levels.</p>
   */
  MaxPixelThreshold?: number;

  /**
   * <p>
   *       The minimum percentage of pixels in a frame that need to have a luminance below the max_black_pixel_value for a frame to be considered
   *       a black frame. Luminance is calculated using the BT.709 matrix.
   *     </p>
   *          <p>The default value is 99, which means at least 99% of all pixels in the frame are black pixels as per the <code>MaxPixelThreshold</code>
   *       set. You can reduce this value to allow more noise on the black frame.</p>
   */
  MinCoveragePercentage?: number;
}

export enum BodyPart {
  FACE = "FACE",
  HEAD = "HEAD",
  LEFT_HAND = "LEFT_HAND",
  RIGHT_HAND = "RIGHT_HAND",
}

/**
 * <p>Identifies the bounding box around the label, face, text, object of interest, or
 *       personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code>
 *       (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note
 *       that the upper-left corner of the image is the origin (0,0). </p>
 *          <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall
 *       image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of
 *       the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700)
 *       and a <code>top</code> value of 0.25 (50/200).</p>
 *          <p>The <code>width</code> and <code>height</code> values represent the dimensions of the
 *       bounding box as a ratio of the overall image dimension. For example, if the input image is
 *       700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
 *          <note>
 *             <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is
 *         able to detect a face that is at the image edge and is only partially visible, the service
 *         can return coordinates that are outside the image bounds and, depending on the image edge,
 *         you might get negative values or values greater than 1 for the <code>left</code> or
 *           <code>top</code> values. </p>
 *          </note>
 */
export interface BoundingBox {
  /**
   * <p>Width of the bounding box as a ratio of the overall image width.</p>
   */
  Width?: number;

  /**
   * <p>Height of the bounding box as a ratio of the overall image height.</p>
   */
  Height?: number;

  /**
   * <p>Left coordinate of the bounding box as a ratio of overall image width.</p>
   */
  Left?: number;

  /**
   * <p>Top coordinate of the bounding box as a ratio of overall image height.</p>
   */
  Top?: number;
}

/**
 * <p>Information about an item of Personal Protective Equipment covering a corresponding body part. For more
 *          information, see <a>DetectProtectiveEquipment</a>.</p>
 */
export interface CoversBodyPart {
  /**
   * <p>The confidence that Amazon Rekognition has in the value of <code>Value</code>.</p>
   */
  Confidence?: number;

  /**
   * <p>True if the PPE covers the corresponding body part, otherwise false.</p>
   */
  Value?: boolean;
}

export enum ProtectiveEquipmentType {
  FACE_COVER = "FACE_COVER",
  HAND_COVER = "HAND_COVER",
  HEAD_COVER = "HEAD_COVER",
}

/**
 * <p>Information about an item of Personal Protective Equipment (PPE) detected by
 *          <a>DetectProtectiveEquipment</a>. For more
 *          information, see <a>DetectProtectiveEquipment</a>.</p>
 */
export interface EquipmentDetection {
  /**
   * <p>A bounding box surrounding the item of detected PPE.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>The confidence that Amazon Rekognition has that the bounding box (<code>BoundingBox</code>) contains an item of PPE.</p>
   */
  Confidence?: number;

  /**
   * <p>The type of detected PPE.</p>
   */
  Type?: ProtectiveEquipmentType | string;

  /**
   * <p>Information about the body part covered by the detected PPE.</p>
   */
  CoversBodyPart?: CoversBodyPart;
}

/**
 * <p>Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE.
 *          An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by
 *          <code>DetectProtectiveEquipment</code>. </p>
 */
export interface ProtectiveEquipmentBodyPart {
  /**
   * <p>The detected body part.</p>
   */
  Name?: BodyPart | string;

  /**
   * <p>The confidence that Amazon Rekognition has in the detection accuracy of the detected body part.
   *       </p>
   */
  Confidence?: number;

  /**
   * <p>An array of Personal Protective Equipment items detected around a body part.</p>
   */
  EquipmentDetections?: EquipmentDetection[];
}

export enum EmotionName {
  ANGRY = "ANGRY",
  CALM = "CALM",
  CONFUSED = "CONFUSED",
  DISGUSTED = "DISGUSTED",
  FEAR = "FEAR",
  HAPPY = "HAPPY",
  SAD = "SAD",
  SURPRISED = "SURPRISED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>The emotions that appear to be expressed on the face, and the confidence level in the
 *       determination. The API is only making a determination of the physical appearance of a person's
 *       face. It is not a determination of the person’s internal emotional state and should not be
 *       used in such a way. For example, a person pretending to have a sad face might not be sad
 *       emotionally.</p>
 */
export interface Emotion {
  /**
   * <p>Type of emotion detected.</p>
   */
  Type?: EmotionName | string;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export enum LandmarkType {
  chinBottom = "chinBottom",
  eyeLeft = "eyeLeft",
  eyeRight = "eyeRight",
  leftEyeBrowLeft = "leftEyeBrowLeft",
  leftEyeBrowRight = "leftEyeBrowRight",
  leftEyeBrowUp = "leftEyeBrowUp",
  leftEyeDown = "leftEyeDown",
  leftEyeLeft = "leftEyeLeft",
  leftEyeRight = "leftEyeRight",
  leftEyeUp = "leftEyeUp",
  leftPupil = "leftPupil",
  midJawlineLeft = "midJawlineLeft",
  midJawlineRight = "midJawlineRight",
  mouthDown = "mouthDown",
  mouthLeft = "mouthLeft",
  mouthRight = "mouthRight",
  mouthUp = "mouthUp",
  nose = "nose",
  noseLeft = "noseLeft",
  noseRight = "noseRight",
  rightEyeBrowLeft = "rightEyeBrowLeft",
  rightEyeBrowRight = "rightEyeBrowRight",
  rightEyeBrowUp = "rightEyeBrowUp",
  rightEyeDown = "rightEyeDown",
  rightEyeLeft = "rightEyeLeft",
  rightEyeRight = "rightEyeRight",
  rightEyeUp = "rightEyeUp",
  rightPupil = "rightPupil",
  upperJawlineLeft = "upperJawlineLeft",
  upperJawlineRight = "upperJawlineRight",
}

/**
 * <p>Indicates the location of the landmark on the face.</p>
 */
export interface Landmark {
  /**
   * <p>Type of landmark.</p>
   */
  Type?: LandmarkType | string;

  /**
   * <p>The x-coordinate of the landmark expressed as a ratio of the width of the image. The
   *       x-coordinate is measured from the left-side of the image. For example, if the image is 700
   *       pixels wide and the x-coordinate of the landmark is at 350 pixels, this value is 0.5.
   *     </p>
   */
  X?: number;

  /**
   * <p>The y-coordinate of the landmark expressed as a ratio of the height of the image. The
   *       y-coordinate is measured from the top of the image. For example, if the image height is 200
   *       pixels and the y-coordinate of the landmark is at 50 pixels, this value is 0.25.</p>
   */
  Y?: number;
}

/**
 * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
 */
export interface Pose {
  /**
   * <p>Value representing the face rotation on the roll axis.</p>
   */
  Roll?: number;

  /**
   * <p>Value representing the face rotation on the yaw axis.</p>
   */
  Yaw?: number;

  /**
   * <p>Value representing the face rotation on the pitch axis.</p>
   */
  Pitch?: number;
}

/**
 * <p>Identifies face image brightness and sharpness. </p>
 */
export interface ImageQuality {
  /**
   * <p>Value representing brightness of the face. The service returns a value between 0 and
   *       100 (inclusive). A higher value indicates a brighter face image.</p>
   */
  Brightness?: number;

  /**
   * <p>Value representing sharpness of the face. The service returns a value between 0 and 100
   *       (inclusive). A higher value indicates a sharper face image.</p>
   */
  Sharpness?: number;
}

/**
 * <p>Indicates whether or not the face is smiling, and the confidence level in the
 *       determination.</p>
 */
export interface Smile {
  /**
   * <p>Boolean value that indicates whether the face is smiling or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

/**
 * <p>Provides face metadata for target image faces that are analyzed by
 *         <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.</p>
 */
export interface ComparedFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Level of confidence that what the bounding box contains is a face.</p>
   */
  Confidence?: number;

  /**
   * <p>An array of facial landmarks.</p>
   */
  Landmarks?: Landmark[];

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
   */
  Pose?: Pose;

  /**
   * <p>Identifies face image brightness and sharpness. </p>
   */
  Quality?: ImageQuality;

  /**
   * <p> The emotions that appear to be expressed on the face, and the confidence level in the
   *       determination. Valid values include "Happy", "Sad", "Angry", "Confused", "Disgusted",
   *       "Surprised", "Calm", "Unknown", and "Fear". </p>
   */
  Emotions?: Emotion[];

  /**
   * <p> Indicates whether or not the face is smiling, and the confidence level in the
   *       determination. </p>
   */
  Smile?: Smile;
}

export enum KnownGenderType {
  Female = "Female",
  Male = "Male",
  Nonbinary = "Nonbinary",
  Unlisted = "Unlisted",
}

/**
 * <p>The known gender identity for the celebrity that matches the provided ID. The known
 *       gender identity can be Male, Female, Nonbinary, or Unlisted.</p>
 */
export interface KnownGender {
  /**
   * <p>A string value of the KnownGender info about the Celebrity.</p>
   */
  Type?: KnownGenderType | string;
}

/**
 * <p>Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.</p>
 */
export interface Celebrity {
  /**
   * <p>An array of URLs pointing to additional information about the celebrity. If there is no
   *       additional information about the celebrity, this list is empty.</p>
   */
  Urls?: string[];

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the celebrity. </p>
   */
  Id?: string;

  /**
   * <p>Provides information about the celebrity's face, such as its location on the
   *       image.</p>
   */
  Face?: ComparedFace;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the
   *       celebrity.</p>
   */
  MatchConfidence?: number;

  /**
   * <p>The known gender identity for the celebrity that matches the provided ID. The known
   *       gender identity can be Male, Female, Nonbinary, or Unlisted.</p>
   */
  KnownGender?: KnownGender;
}

/**
 * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
 *       the determination.</p>
 */
export interface Eyeglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing eye glasses or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

/**
 * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
 *       determination.</p>
 */
export interface EyeOpen {
  /**
   * <p>Boolean value that indicates whether the eyes on the face are open.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export enum GenderType {
  Female = "Female",
  Male = "Male",
}

/**
 * <p>The predicted gender of a detected face.
 *
 *     </p>
 *          <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical
 *       appearance of a face in a particular image. This kind of prediction is not designed to
 *       categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a
 *       determination. For example, a male actor wearing a long-haired wig and earrings for a role
 *       might be predicted as female.</p>
 *          <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases
 *       where aggregate gender distribution statistics need to be analyzed without identifying
 *       specific users. For example, the percentage of female users compared to male users on a social
 *       media platform. </p>
 *          <p>We don't recommend using gender binary predictions to make decisions that impact an
 *       individual's rights, privacy, or access to services.</p>
 */
export interface Gender {
  /**
   * <p>The predicted gender of the face.</p>
   */
  Value?: GenderType | string;

  /**
   * <p>Level of confidence in the prediction.</p>
   */
  Confidence?: number;
}

/**
 * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
 *       determination.</p>
 */
export interface MouthOpen {
  /**
   * <p>Boolean value that indicates whether the mouth on the face is open or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

/**
 * <p>Indicates whether or not the face has a mustache, and the confidence level in the
 *       determination.</p>
 */
export interface Mustache {
  /**
   * <p>Boolean value that indicates whether the face has mustache or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

/**
 * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
 *       the determination.</p>
 */
export interface Sunglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing sunglasses or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

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
 */
export interface FaceDetail {
  /**
   * <p>Bounding box of the face. Default attribute.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>The estimated age range, in years, for the face. Low represents the lowest estimated
   *       age and High represents the highest estimated age.</p>
   */
  AgeRange?: AgeRange;

  /**
   * <p>Indicates whether or not the face is smiling, and the confidence level in the
   *       determination.</p>
   */
  Smile?: Smile;

  /**
   * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
   *       the determination.</p>
   */
  Eyeglasses?: Eyeglasses;

  /**
   * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
   *       the determination.</p>
   */
  Sunglasses?: Sunglasses;

  /**
   * <p>The predicted gender of a detected face. </p>
   */
  Gender?: Gender;

  /**
   * <p>Indicates whether or not the face has a beard, and the confidence level in the
   *       determination.</p>
   */
  Beard?: Beard;

  /**
   * <p>Indicates whether or not the face has a mustache, and the confidence level in the
   *       determination.</p>
   */
  Mustache?: Mustache;

  /**
   * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
   *       determination.</p>
   */
  EyesOpen?: EyeOpen;

  /**
   * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
   *       determination.</p>
   */
  MouthOpen?: MouthOpen;

  /**
   * <p>The emotions that appear to be expressed on the face, and the confidence level in the
   *       determination. The API is only making a determination of the physical appearance of a person's
   *       face. It is not a determination of the person’s internal emotional state and should not be
   *       used in such a way. For example, a person pretending to have a sad face might not be sad
   *       emotionally.</p>
   */
  Emotions?: Emotion[];

  /**
   * <p>Indicates the location of landmarks on the face. Default attribute.</p>
   */
  Landmarks?: Landmark[];

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw. Default
   *       attribute.</p>
   */
  Pose?: Pose;

  /**
   * <p>Identifies image brightness and sharpness. Default attribute.</p>
   */
  Quality?: ImageQuality;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such
   *       as a tree). Default attribute.</p>
   */
  Confidence?: number;
}

/**
 * <p>Information about a recognized celebrity.</p>
 */
export interface CelebrityDetail {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   */
  Urls?: string[];

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the celebrity. </p>
   */
  Id?: string;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity. </p>
   */
  Confidence?: number;

  /**
   * <p>Bounding box around the body of a celebrity.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Face details for the recognized celebrity.</p>
   */
  Face?: FaceDetail;

  /**
   * <p>Retrieves the known gender for the celebrity.</p>
   */
  KnownGender?: KnownGender;
}

/**
 * <p>Information about a detected celebrity and the time the celebrity was detected in a stored video.
 *         For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.</p>
 */
export interface CelebrityRecognition {
  /**
   * <p>The time, in milliseconds from the start of the video, that the celebrity was recognized.
   *          Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the celebrity first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>Information about a recognized celebrity.</p>
   */
  Celebrity?: CelebrityDetail;
}

export enum CelebrityRecognitionSortBy {
  ID = "ID",
  TIMESTAMP = "TIMESTAMP",
}

/**
 * <p>Type that describes the face Amazon Rekognition chose to compare with the faces in the target.
 *       This contains a bounding box for the selected face and confidence level that the bounding box
 *       contains a face. Note that Amazon Rekognition selects the largest face in the source image for this
 *       comparison. </p>
 */
export interface ComparedSourceImageFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Confidence level that the selected bounding box contains a face.</p>
   */
  Confidence?: number;
}

export enum QualityFilter {
  AUTO = "AUTO",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
}

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
 *          <p>If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes using the Bytes
 *       property is not supported. You must first upload the image to an Amazon S3 bucket and then
 *       call the operation using the S3Object property.</p>
 *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
 *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
 *       Amazon Rekognition Developer Guide. </p>
 */
export interface Image {
  /**
   * <p>Blob of image bytes up to 5 MBs.</p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Identifies an S3 object as the image source.</p>
   */
  S3Object?: S3Object;
}

export interface CompareFacesRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  SourceImage: Image | undefined;

  /**
   * <p>The target image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  TargetImage: Image | undefined;

  /**
   * <p>The minimum level of confidence in the face matches that a match must meet to be
   *       included in the <code>FaceMatches</code> array.</p>
   */
  SimilarityThreshold?: number;

  /**
   * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
   *       Filtered faces aren't compared. If you specify <code>AUTO</code>, Amazon Rekognition chooses the
   *       quality bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>,
   *       filtering removes all faces that don’t meet the chosen quality bar.
   *        The quality bar is
   *       based on a variety of common use cases. Low-quality detections can occur for a number of
   *       reasons. Some examples are an object that's misidentified as a face, a face that's too blurry,
   *       or a face with a pose that's too extreme to use. If you specify <code>NONE</code>, no
   *       filtering is performed. The default value is <code>NONE</code>. </p>
   *          <p>To use quality filtering, the collection you are using must be associated with version 3
   *       of the face model or higher.</p>
   */
  QualityFilter?: QualityFilter | string;
}

/**
 * <p>Provides information about a face in a target image that matches the source image face
 *       analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding
 *       box of the face in the target image. The <code>Similarity</code> property is the confidence
 *       that the source image face matches the face in the bounding box.</p>
 */
export interface CompareFacesMatch {
  /**
   * <p>Level of confidence that the faces match.</p>
   */
  Similarity?: number;

  /**
   * <p>Provides face metadata (bounding box and confidence that the bounding box actually
   *       contains a face).</p>
   */
  Face?: ComparedFace;
}

export enum OrientationCorrection {
  ROTATE_0 = "ROTATE_0",
  ROTATE_180 = "ROTATE_180",
  ROTATE_270 = "ROTATE_270",
  ROTATE_90 = "ROTATE_90",
}

export interface CompareFacesResponse {
  /**
   * <p>The face in the source image that was used for comparison.</p>
   */
  SourceImageFace?: ComparedSourceImageFace;

  /**
   * <p>An array of faces in the target image that match the source image face. Each
   *         <code>CompareFacesMatch</code> object provides the bounding box, the confidence level that
   *       the bounding box contains a face, and the similarity score for the face in the bounding box
   *       and the face in the source image.</p>
   */
  FaceMatches?: CompareFacesMatch[];

  /**
   * <p>An array of faces in the target image that did not match the source image
   *       face.</p>
   */
  UnmatchedFaces?: ComparedFace[];

  /**
   * <p>The value of <code>SourceImageOrientationCorrection</code> is always null.</p>
   *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format
   *       (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
   *       information to perform image correction. The bounding box coordinates are translated to
   *       represent object locations after the orientation information in the Exif metadata is used to
   *       correct the image orientation. Images in .png format don't contain Exif metadata.</p>
   *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images
   *       without orientation information in the image Exif metadata. The bounding box coordinates
   *       aren't translated and represent the object locations before the image is rotated. </p>
   */
  SourceImageOrientationCorrection?: OrientationCorrection | string;

  /**
   * <p>The value of <code>TargetImageOrientationCorrection</code> is always null.</p>
   *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format
   *       (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
   *       information to perform image correction. The bounding box coordinates are translated to
   *       represent object locations after the orientation information in the Exif metadata is used to
   *       correct the image orientation. Images in .png format don't contain Exif metadata.</p>
   *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images
   *       without orientation information in the image Exif metadata. The bounding box coordinates
   *       aren't translated and represent the object locations before the image is rotated. </p>
   */
  TargetImageOrientationCorrection?: OrientationCorrection | string;
}

/**
 * <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 */
export class ImageTooLargeException extends __BaseException {
  readonly name: "ImageTooLargeException" = "ImageTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageTooLargeException, __BaseException>) {
    super({
      name: "ImageTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageTooLargeException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The provided image format is not supported. </p>
 */
export class InvalidImageFormatException extends __BaseException {
  readonly name: "InvalidImageFormatException" = "InvalidImageFormatException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImageFormatException, __BaseException>) {
    super({
      name: "InvalidImageFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImageFormatException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 */
export class InvalidS3ObjectException extends __BaseException {
  readonly name: "InvalidS3ObjectException" = "InvalidS3ObjectException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3ObjectException, __BaseException>) {
    super({
      name: "InvalidS3ObjectException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3ObjectException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException" = "ProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>
 *             Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.
 *             Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection.
 *             You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification
 *             is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected
 *             and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
 *         </p>
 */
export interface ConnectedHomeSettings {
  /**
   * <p>
   *             Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *         </p>
   */
  Labels: string[] | undefined;

  /**
   * <p>
   *             The minimum confidence required to label an object in the video.
   *         </p>
   */
  MinConfidence?: number;
}

/**
 * <p>
 *             The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.
 *         </p>
 */
export interface ConnectedHomeSettingsForUpdate {
  /**
   * <p>
   *             Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *         </p>
   */
  Labels?: string[];

  /**
   * <p>
   *             The minimum confidence required to label an object in the video.
   *         </p>
   */
  MinConfidence?: number;
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
}

/**
 * <p>Provides information about a single type of inappropriate, unwanted, or
 *       offensive content found in an image or video. Each type of moderated content has a label
 *       within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition
 *       Developer Guide.</p>
 */
export interface ModerationLabel {
  /**
   * <p>Specifies the confidence that Amazon Rekognition has that the label has been correctly
   *       identified.</p>
   *          <p>If you don't specify the <code>MinConfidence</code> parameter in the call to
   *         <code>DetectModerationLabels</code>, the operation returns labels with a confidence value
   *       greater than or equal to 50 percent.</p>
   */
  Confidence?: number;

  /**
   * <p>The label name for the type of unsafe content detected in the image.</p>
   */
  Name?: string;

  /**
   * <p>The name for the parent label. Labels at the top level of the hierarchy have the parent
   *       label <code>""</code>.</p>
   */
  ParentName?: string;
}

/**
 * <p>Information about an inappropriate, unwanted, or offensive content label detection in a stored video.</p>
 */
export interface ContentModerationDetection {
  /**
   * <p>Time, in milliseconds from the beginning of the video, that the content moderation label was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the moderated content first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>The content moderation label detected by in the stored video.</p>
   */
  ModerationLabel?: ModerationLabel;
}

export enum ContentModerationSortBy {
  NAME = "NAME",
  TIMESTAMP = "TIMESTAMP",
}

/**
 * <p>The S3 bucket and folder location where training output is placed.</p>
 */
export interface OutputConfig {
  /**
   * <p>The S3 bucket where training output is placed.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The prefix applied to the training output files. </p>
   */
  S3KeyPrefix?: string;
}

export interface CopyProjectVersionRequest {
  /**
   * <p>The ARN of the source project in the trusting AWS account.</p>
   */
  SourceProjectArn: string | undefined;

  /**
   * <p>The ARN of the model version in the source project that you want to copy to a destination project.</p>
   */
  SourceProjectVersionArn: string | undefined;

  /**
   * <p>The ARN of the project in the trusted AWS account that you want to copy the model version to. </p>
   */
  DestinationProjectArn: string | undefined;

  /**
   * <p>A name for the version of the model that's copied to the destination project.</p>
   */
  VersionName: string | undefined;

  /**
   * <p>The S3 bucket and folder location where the training output for the source model version is placed.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The key-value tags to assign to the model version. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key).
   *          You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key,
   *          an alias for your KMS key, or an alias ARN.
   *          The key is used to encrypt training results
   *          and manifest files written to the output Amazon S3 bucket (<code>OutputConfig</code>).</p>
   *          <p>If you choose to use your own KMS key, you need the following permissions on the KMS key.</p>
   *          <ul>
   *             <li>
   *                <p>kms:CreateGrant</p>
   *             </li>
   *             <li>
   *                <p>kms:DescribeKey</p>
   *             </li>
   *             <li>
   *                <p>kms:GenerateDataKey</p>
   *             </li>
   *             <li>
   *                <p>kms:Decrypt</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value for <code>KmsKeyId</code>, images copied into the service are encrypted
   *          using a key that AWS owns and manages.</p>
   */
  KmsKeyId?: string;
}

export interface CopyProjectVersionResponse {
  /**
   * <p>The ARN of the copied model version in the destination project. </p>
   */
  ProjectVersionArn?: string;
}

/**
 * <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many Amazon Rekognition Video jobs concurrently, calls to start operations
 *             (<code>StartLabelDetection</code>, for example) will raise a <code>LimitExceededException</code> exception (HTTP status code: 400) until
 *             the number of concurrently running jobs is below the Amazon Rekognition service limit.  </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The specified resource is already being used.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The resource specified in the request cannot be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

export interface CreateCollectionRequest {
  /**
   * <p>ID for the collection that you are creating.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the collection. </p>
   */
  Tags?: Record<string, string>;
}

export interface CreateCollectionResponse {
  /**
   * <p>HTTP status code indicating the result of the operation.</p>
   */
  StatusCode?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on
   *       your resources. </p>
   */
  CollectionArn?: string;

  /**
   * <p>Version number of the face detection model associated with the collection you are
   *       creating.</p>
   */
  FaceModelVersion?: string;
}

/**
 * <p>A resource with the specified ID already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>
 * The source that Amazon Rekognition Custom Labels uses to create a dataset. To
 * use an Amazon Sagemaker format manifest file, specify the  S3 bucket location in the <code>GroundTruthManifest</code> field.
 * The S3 bucket must be in your AWS account.
 * To create a copy of an existing dataset,  specify the Amazon Resource Name (ARN) of
 * an existing dataset in <code>DatasetArn</code>.</p>
 *          <p>You need to specify a value for <code>DatasetArn</code> or <code>GroundTruthManifest</code>, but not both.
 *     if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs.
 *  </p>
 *          <p>For more information, see <a>CreateDataset</a>.</p>
 */
export interface DatasetSource {
  /**
   * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   * </p>
   */
  GroundTruthManifest?: GroundTruthManifest;

  /**
   * <p>
   * The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy.
   * </p>
   */
  DatasetArn?: string;
}

export enum DatasetType {
  TEST = "TEST",
  TRAIN = "TRAIN",
}

export interface CreateDatasetRequest {
  /**
   * <p>
   * The source files for the dataset. You can specify the ARN of an existing dataset or specify the Amazon S3 bucket location
   * of an Amazon Sagemaker format manifest file. If you don't specify <code>datasetSource</code>, an empty dataset is created.
   *   To add labeled images to the dataset,  You can use the console or call <a>UpdateDatasetEntries</a>.
   *
   * </p>
   */
  DatasetSource?: DatasetSource;

  /**
   * <p>
   * The type of the dataset. Specify <code>train</code> to create a training dataset. Specify <code>test</code>
   *    to create a test dataset.
   * </p>
   */
  DatasetType: DatasetType | string | undefined;

  /**
   * <p>
   * The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset.
   * </p>
   */
  ProjectArn: string | undefined;
}

export interface CreateDatasetResponse {
  /**
   * <p>
   * The ARN of the created  Amazon Rekognition Custom Labels dataset.
   * </p>
   */
  DatasetArn?: string;
}

export interface CreateProjectRequest {
  /**
   * <p>The name of the project to create.</p>
   */
  ProjectName: string | undefined;
}

export interface CreateProjectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new project. You can use the ARN to
   *       configure IAM access to the project. </p>
   */
  ProjectArn?: string;
}

/**
 * <p>The dataset used for testing. Optionally, if <code>AutoCreate</code> is set,  Amazon Rekognition Custom Labels uses the
 *          training dataset to create a test dataset with a temporary split of the training dataset. </p>
 */
export interface TestingData {
  /**
   * <p>The assets used for testing.</p>
   */
  Assets?: Asset[];

  /**
   * <p>If specified, Amazon Rekognition Custom Labels temporarily splits the training dataset (80%) to create a test dataset (20%) for the training job.
   *       After training completes, the test dataset is not stored and the training dataset reverts to its previous size.</p>
   */
  AutoCreate?: boolean;
}

/**
 * <p>The dataset used for training.</p>
 */
export interface TrainingData {
  /**
   * <p>A Sagemaker GroundTruth manifest file that contains the training images (assets).</p>
   */
  Assets?: Asset[];
}

export interface CreateProjectVersionRequest {
  /**
   * <p>The ARN of the Amazon Rekognition Custom Labels project that
   *          manages the model that you want to train.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>A name for the version of the model. This value must be unique.</p>
   */
  VersionName: string | undefined;

  /**
   * <p>The Amazon S3 bucket location to store the results of training.
   *       The S3 bucket can be in any AWS account as long as the caller has
   *       <code>s3:PutObject</code> permissions on the S3 bucket.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>Specifies an external manifest that the services uses to train the model.
   *          If you specify <code>TrainingData</code> you must also specify <code>TestingData</code>.
   *          The project must not have any associated datasets.
   *       </p>
   */
  TrainingData?: TrainingData;

  /**
   * <p>Specifies an external manifest that the service uses to test the model.
   *          If you specify <code>TestingData</code> you must also specify <code>TrainingData</code>.
   *          The project must not have any associated datasets.</p>
   */
  TestingData?: TestingData;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the model. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key).
   *          You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key,
   *          an alias for your KMS key, or an alias ARN.
   *          The key is used to encrypt training and test images copied into the service for model training.
   *          Your source images are unaffected. The key is also used to encrypt training results
   *          and manifest files written to the output Amazon S3 bucket (<code>OutputConfig</code>).</p>
   *          <p>If you choose to use your own KMS key, you need the following permissions on the KMS key.</p>
   *          <ul>
   *             <li>
   *                <p>kms:CreateGrant</p>
   *             </li>
   *             <li>
   *                <p>kms:DescribeKey</p>
   *             </li>
   *             <li>
   *                <p>kms:GenerateDataKey</p>
   *             </li>
   *             <li>
   *                <p>kms:Decrypt</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value for <code>KmsKeyId</code>, images copied into the service are encrypted
   *          using a key that AWS owns and manages.</p>
   */
  KmsKeyId?: string;
}

export interface CreateProjectVersionResponse {
  /**
   * <p>The ARN of the model version that was created. Use <code>DescribeProjectVersion</code>
   *          to get the current status of the training operation.</p>
   */
  ProjectVersionArn?: string;
}

/**
 * <p>
 *             Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
 *                 Note that if you opt out at the account level this setting is ignored on individual streams.
 *
 *         </p>
 */
export interface StreamProcessorDataSharingPreference {
  /**
   * <p>
   *             If this option is set to true, you choose to share data with Rekognition to improve model performance.
   *         </p>
   */
  OptIn: boolean | undefined;
}

/**
 * <p>Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface KinesisVideoStream {
  /**
   * <p>ARN of the Kinesis video stream stream that streams the source video.</p>
   */
  Arn?: string;
}

/**
 * <p>Information about the source streaming video. </p>
 */
export interface StreamProcessorInput {
  /**
   * <p>The Kinesis video stream input stream for the source streaming video.</p>
   */
  KinesisVideoStream?: KinesisVideoStream;
}

/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
 *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
 *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
 *             one for a person at second 2 and one for a pet at second 4.</p>
 *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
 */
export interface StreamProcessorNotificationChannel {
  /**
   * <p>
   *             The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
   *         </p>
   */
  SNSTopicArn: string | undefined;
}

/**
 * <p>The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface KinesisDataStream {
  /**
   * <p>ARN of the output Amazon Kinesis Data Streams stream.</p>
   */
  Arn?: string;
}

/**
 * <p>
 *             The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation.
 *             These results include the name of the stream processor resource, the session ID of the stream processing session,
 *             and labeled timestamps and bounding boxes for detected labels.
 *         </p>
 */
export interface S3Destination {
  /**
   * <p>
   *             The name of the Amazon S3 bucket you want to associate with the streaming video project. You must be the owner of the Amazon S3 bucket.
   *         </p>
   */
  Bucket?: string;

  /**
   * <p>
   *             The prefix value of the location within the bucket that you want the information to be published to.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Using prefixes</a>.
   *         </p>
   */
  KeyPrefix?: string;
}

/**
 * <p>Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more
 *            information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface StreamProcessorOutput {
  /**
   * <p>The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.</p>
   */
  KinesisDataStream?: KinesisDataStream;

  /**
   * <p>
   *             The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation.
   *         </p>
   */
  S3Destination?: S3Destination;
}

/**
 * <p>The X and Y coordinates of a point on an image or video frame. The X and Y values are
 *       ratios of the overall image size or video resolution. For example, if an input image is
 *       700x200 and the values are X=0.5 and Y=0.25, then the point is at the (350,50) pixel
 *       coordinate on the image.</p>
 *          <p>An array of <code>Point</code> objects makes up a <code>Polygon</code>. A
 *         <code>Polygon</code> is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>
 *             <code>Polygon</code> represents a fine-grained polygon around a detected item. For more
 *       information, see Geometry in the Amazon Rekognition Developer Guide. </p>
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   */
  X?: number;

  /**
   * <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
   */
  Y?: number;
}

/**
 * <p>Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a <code>BoundingBox</code>
 *       or <code>Polygon</code> to set a region of the screen.</p>
 *          <p>A word, face, or label is included in the region if it is more than half in that region. If there is more than
 *       one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region
 *       is kept in the results.</p>
 */
export interface RegionOfInterest {
  /**
   * <p>The box representing a region of interest on screen.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>
   *             Specifies a shape made up of up to 10 <code>Point</code> objects to define a region of interest.
   *         </p>
   */
  Polygon?: Point[];
}

/**
 * <p>Input face recognition parameters for an Amazon Rekognition stream processor.
 *             Includes the collection to use for face recognition and the face attributes to detect.
 *             Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.</p>
 */
export interface FaceSearchSettings {
  /**
   * <p>The ID of a collection that contains faces that you want to search for.</p>
   */
  CollectionId?: string;

  /**
   * <p>Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80.
   *         0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower than 80 are set to 80.</p>
   */
  FaceMatchThreshold?: number;
}

/**
 * <p>Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor.
 *             You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels. </p>
 */
export interface StreamProcessorSettings {
  /**
   * <p>Face search settings to use on a streaming video. </p>
   */
  FaceSearch?: FaceSearchSettings;

  /**
   * <p>
   *             Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.
   *             Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection.
   *             You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification
   *             is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected
   *             and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
   *         </p>
   */
  ConnectedHome?: ConnectedHomeSettings;
}

export interface CreateStreamProcessorRequest {
  /**
   * <p>Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is <code>StreamProcessorInput</code>. This is required for both face search and label detection stream processors.</p>
   */
  Input: StreamProcessorInput | undefined;

  /**
   * <p>Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is <code>StreamProcessorOutput</code>.
   *             This must be a <a>S3Destination</a> of an Amazon S3 bucket that you own for a label detection stream processor or a Kinesis data stream ARN for a face search stream processor.</p>
   */
  Output: StreamProcessorOutput | undefined;

  /**
   * <p>An identifier you assign to the stream processor. You can use <code>Name</code> to
   *             manage the stream processor. For example, you can get the current status of the stream processor by calling <a>DescribeStreamProcessor</a>.
   *             <code>Name</code> is idempotent. This is required for both face search and label detection stream processors.
   *        </p>
   */
  Name: string | undefined;

  /**
   * <p>Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.</p>
   */
  Settings: StreamProcessorSettings | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
   *             The IAM role provides Rekognition read permissions for a Kinesis stream.
   *             It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the stream processor. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
   *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
   *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
   *             one for a person at second 2 and one for a pet at second 4.</p>
   *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
   */
  NotificationChannel?: StreamProcessorNotificationChannel;

  /**
   * <p>
   *             The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
   *             You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.
   *             The key is used to encrypt results and data published to your Amazon S3 bucket, which includes  image frames and hero images. Your source images are unaffected.
   *         </p>
   *          <p>
   *             </p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
   *         </p>
   */
  RegionsOfInterest?: RegionOfInterest[];

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference;
}

export interface CreateStreamProcessorResponse {
  /**
   * <p>Amazon Resource Number for the newly created stream processor.</p>
   */
  StreamProcessorArn?: string;
}

/**
 * <p>Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.</p>
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the detected item's location on the
   *       image.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the detected item.</p>
   */
  Polygon?: Point[];
}

/**
 * <p>A custom label detected in an image by a call to <a>DetectCustomLabels</a>.</p>
 */
export interface CustomLabel {
  /**
   * <p>The name of the custom label.</p>
   */
  Name?: string;

  /**
   * <p>The confidence that the model has in the detection of the custom label. The
   *       range is 0-100. A higher value indicates a higher confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The location of the detected object on the image that corresponds to the custom label.
   *          Includes an axis aligned coarse bounding box surrounding the object and a finer grain polygon
   *          for more accurate spatial information.</p>
   */
  Geometry?: Geometry;
}

/**
 * <p>
 * Describes updates or additions to a dataset. A Single update or addition
 * is an entry (JSON Line) that provides information about a single image. To update an existing entry,
 * you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update.
 *  If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry. </p>
 */
export interface DatasetChanges {
  /**
   * <p>A Base64-encoded binary data object
   *    containing one or JSON lines that either update the dataset or are additions to the dataset.  You change a dataset by calling <a>UpdateDatasetEntries</a>.
   *    If you are using an AWS SDK to call <code>UpdateDatasetEntries</code>, you don't need to encode <code>Changes</code> as the SDK encodes the data for you.
   *
   * </p>
   *          <p>For example JSON lines,
   *       see Image-Level labels in manifest files and
   *       and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
   *    </p>
   */
  GroundTruth: Uint8Array | undefined;
}

/**
 * <p>
 * Provides statistics about a dataset. For more information, see <a>DescribeDataset</a>.
 *
 * </p>
 */
export interface DatasetStats {
  /**
   * <p>
   * The total number of images in the dataset that have labels.
   * </p>
   */
  LabeledEntries?: number;

  /**
   * <p>
   * The total number of images in the dataset.
   * </p>
   */
  TotalEntries?: number;

  /**
   * <p>
   * The total number of labels declared in the dataset.
   * </p>
   */
  TotalLabels?: number;

  /**
   * <p>
   *          The total number of entries that contain at least one error.
   *       </p>
   */
  ErrorEntries?: number;
}

export enum DatasetStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

export enum DatasetStatusMessageCode {
  CLIENT_ERROR = "CLIENT_ERROR",
  SERVICE_ERROR = "SERVICE_ERROR",
  SUCCESS = "SUCCESS",
}

/**
 * <p>
 * A description for a dataset. For more information, see <a>DescribeDataset</a>.</p>
 *          <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code>
 * reflect the last operation on the dataset.
 * </p>
 */
export interface DatasetDescription {
  /**
   * <p>
   * The Unix timestamp for the time and date that the dataset was created.
   * </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>
   *    The Unix timestamp for the date and time that the dataset was last updated.
   * </p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>
   *    The status of the dataset.
   * </p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>
   *    The status message for the dataset.
   * </p>
   */
  StatusMessage?: string;

  /**
   * <p>
   *    The status message code for the dataset operation. If a service error occurs, try the
   *    API call again later. If a client error occurs, check the input parameters to the dataset
   *    API call that failed.
   * </p>
   */
  StatusMessageCode?: DatasetStatusMessageCode | string;

  /**
   * <p>
   * The status message code for the dataset.
   * </p>
   */
  DatasetStats?: DatasetStats;
}

/**
 * <p>
 *    Statistics about a label used in a dataset. For more information, see <a>DatasetLabelDescription</a>.
 * </p>
 */
export interface DatasetLabelStats {
  /**
   * <p>
   * The total number of images that use the label.
   * </p>
   */
  EntryCount?: number;

  /**
   * <p>
   * The total number of images that have the label assigned to a bounding box.
   * </p>
   */
  BoundingBoxCount?: number;
}

/**
 * <p>
 * Describes a dataset label. For more information, see <a>ListDatasetLabels</a>.
 * </p>
 */
export interface DatasetLabelDescription {
  /**
   * <p>
   * The name of the label.
   * </p>
   */
  LabelName?: string;

  /**
   * <p>
   * Statistics about the label.
   * </p>
   */
  LabelStats?: DatasetLabelStats;
}

/**
 * <p>
 *    Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see
 *    <a>ProjectDescription</a>.
 * </p>
 */
export interface DatasetMetadata {
  /**
   * <p>
   *    The Unix timestamp for the date and time that the dataset was created.
   * </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>
   *    The type of the dataset.
   * </p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>
   * The Amazon Resource Name (ARN) for the dataset.
   * </p>
   */
  DatasetArn?: string;

  /**
   * <p>
   *    The status for the dataset.
   * </p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>
   *    The status message for the dataset.
   * </p>
   */
  StatusMessage?: string;

  /**
   * <p>
   *    The status message code for the dataset operation. If a service error occurs, try the
   *    API call again later. If a client error occurs, check the input parameters to the dataset
   *    API call that failed.
   * </p>
   */
  StatusMessageCode?: DatasetStatusMessageCode | string;
}

export interface DeleteCollectionRequest {
  /**
   * <p>ID of the collection to delete.</p>
   */
  CollectionId: string | undefined;
}

export interface DeleteCollectionResponse {
  /**
   * <p>HTTP status code that indicates the result of the operation.</p>
   */
  StatusCode?: number;
}

export interface DeleteDatasetRequest {
  /**
   * <p>
   * The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete.
   * </p>
   */
  DatasetArn: string | undefined;
}

export interface DeleteDatasetResponse {}

export interface DeleteFacesRequest {
  /**
   * <p>Collection from which to remove the specific faces.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>An array of face IDs to delete.</p>
   */
  FaceIds: string[] | undefined;
}

export interface DeleteFacesResponse {
  /**
   * <p>An array of strings (face IDs) of the faces that were deleted.</p>
   */
  DeletedFaces?: string[];
}

export interface DeleteProjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that you want to delete.</p>
   */
  ProjectArn: string | undefined;
}

export enum ProjectStatus {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

export interface DeleteProjectResponse {
  /**
   * <p>The current status of the delete project operation.</p>
   */
  Status?: ProjectStatus | string;
}

export interface DeleteProjectPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the policy that you want to delete.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The ID of the project policy revision that you want to delete.</p>
   */
  PolicyRevisionId?: string;
}

export interface DeleteProjectPolicyResponse {}

/**
 * <p>The supplied revision id for the project policy is invalid.</p>
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
  readonly name: "InvalidPolicyRevisionIdException" = "InvalidPolicyRevisionIdException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyRevisionIdException, __BaseException>) {
    super({
      name: "InvalidPolicyRevisionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyRevisionIdException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

export interface DeleteProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version that you want to delete.</p>
   */
  ProjectVersionArn: string | undefined;
}

export enum ProjectVersionStatus {
  COPYING_COMPLETED = "COPYING_COMPLETED",
  COPYING_FAILED = "COPYING_FAILED",
  COPYING_IN_PROGRESS = "COPYING_IN_PROGRESS",
  DELETING = "DELETING",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  TRAINING_COMPLETED = "TRAINING_COMPLETED",
  TRAINING_FAILED = "TRAINING_FAILED",
  TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS",
}

export interface DeleteProjectVersionResponse {
  /**
   * <p>The status of the deletion operation.</p>
   */
  Status?: ProjectVersionStatus | string;
}

export interface DeleteStreamProcessorRequest {
  /**
   * <p>The name of the stream processor you want to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteStreamProcessorResponse {}

export interface DescribeCollectionRequest {
  /**
   * <p>The ID of the collection to describe.</p>
   */
  CollectionId: string | undefined;
}

export interface DescribeCollectionResponse {
  /**
   * <p>The number of faces that are indexed into the collection. To index faces into a
   *          collection, use <a>IndexFaces</a>.</p>
   */
  FaceCount?: number;

  /**
   * <p>The version of the face model that's used by the collection for face detection.</p>
   *          <p>For more information, see Model versioning in the
   *      Amazon Rekognition Developer Guide.</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  CollectionARN?: string;

  /**
   * <p>The number of milliseconds since the Unix epoch time until the creation of the collection.
   *          The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.</p>
   */
  CreationTimestamp?: Date;
}

export interface DescribeDatasetRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to describe.
   * </p>
   */
  DatasetArn: string | undefined;
}

export interface DescribeDatasetResponse {
  /**
   * <p>
   * The description for the dataset.
   * </p>
   */
  DatasetDescription?: DatasetDescription;
}

export interface DescribeProjectsRequest {
  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *          token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *          If you specify a value greater than 100, a ValidationException
   *          error occurs. The default value is 100. </p>
   */
  MaxResults?: number;

  /**
   * <p>A list of the projects that you want Amazon Rekognition Custom Labels to describe. If you don't specify a value,
   *       the response includes descriptions for all the projects in your AWS account.</p>
   */
  ProjectNames?: string[];
}

/**
 * <p>A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>.</p>
 */
export interface ProjectDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The Unix timestamp for the date and time that the project was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The current status of the project.</p>
   */
  Status?: ProjectStatus | string;

  /**
   * <p>
   *          Information about the training and test datasets in the project.
   *       </p>
   */
  Datasets?: DatasetMetadata[];
}

export interface DescribeProjectsResponse {
  /**
   * <p>A list of project descriptions. The list is sorted by the date and time the projects are created.</p>
   */
  ProjectDescriptions?: ProjectDescription[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
   *          You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>Pagination token in the request is not valid.</p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

export interface DescribeProjectVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that contains the models you want to describe.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>A list of model version names that you want to describe. You can add up to 10 model version names
   *          to the list. If you don't specify a value, all model descriptions are returned.  A version name is part of a
   *          model (ProjectVersion) ARN. For example, <code>my-model.2020-01-21T09.10.15</code> is the version name in the following ARN.
   *                <code>arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/<i>my-model.2020-01-21T09.10.15</i>/1234567890123</code>.</p>
   */
  VersionNames?: string[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *            results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
   *            You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call.
   *           The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException
   *           error occurs. The default value is 100. </p>
   */
  MaxResults?: number;
}

/**
 * <p>The S3 bucket that contains the training summary. The training summary includes
 *          aggregated evaluation metrics for the entire testing dataset and metrics for each
 *          individual label.  </p>
 *          <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>.
 *          </p>
 */
export interface Summary {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   */
  S3Object?: S3Object;
}

/**
 * <p>The evaluation results for the training of a model.</p>
 */
export interface EvaluationResult {
  /**
   * <p>The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision
   *          and recall performance of the model as a single value. A higher value indicates better precision
   *          and recall performance. A lower score indicates that precision, recall, or both are performing poorly.
   *
   *   </p>
   */
  F1Score?: number;

  /**
   * <p>The S3 bucket that contains the training summary.</p>
   */
  Summary?: Summary;
}

/**
 * <p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p>
 *          <p>The validation data includes error information for individual JSON Lines in the dataset.
 *          For more information, see <i>Debugging a Failed Model Training</i> in the
 *          Amazon Rekognition Custom Labels Developer Guide. </p>
 *          <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>)
 *          and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p>
 *          <p>The assets array contains a single <a>Asset</a> object.
 *          The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of
 *          the validation data.
 * </p>
 */
export interface ValidationData {
  /**
   * <p>The assets that comprise the validation data. </p>
   */
  Assets?: Asset[];
}

/**
 * <p>Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.</p>
 */
export interface TestingDataResult {
  /**
   * <p>The testing dataset that was supplied for training.</p>
   */
  Input?: TestingData;

  /**
   * <p>The subset of the dataset that was actually tested. Some images (assets) might not be tested due to
   *          file formatting and other issues. </p>
   */
  Output?: TestingData;

  /**
   * <p>The location of the data validation manifest. The data validation manifest is created for the test dataset during model training.</p>
   */
  Validation?: ValidationData;
}

/**
 * <p>Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.</p>
 */
export interface TrainingDataResult {
  /**
   * <p>The training assets that you supplied for training.</p>
   */
  Input?: TrainingData;

  /**
   * <p>The images (assets) that were actually trained by Amazon Rekognition Custom Labels. </p>
   */
  Output?: TrainingData;

  /**
   * <p>The location of the data validation manifest. The data validation manifest is created for the training dataset during model training.</p>
   */
  Validation?: ValidationData;
}

/**
 * <p>A description of a version of an Amazon Rekognition Custom Labels model.</p>
 */
export interface ProjectVersionDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version. </p>
   */
  ProjectVersionArn?: string;

  /**
   * <p>The Unix datetime for the date and time that training started.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The minimum number of inference units used by the model. For more information,
   *       see <a>StartProjectVersion</a>.</p>
   */
  MinInferenceUnits?: number;

  /**
   * <p>The current status of the model version.</p>
   */
  Status?: ProjectVersionStatus | string;

  /**
   * <p>A descriptive message for an error or warning that occurred.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The duration, in seconds, that you were billed for a successful training of the model version.
   *       This value is only returned if the model version has been successfully trained.</p>
   */
  BillableTrainingTimeInSeconds?: number;

  /**
   * <p>The Unix date and time that training of the model ended.</p>
   */
  TrainingEndTimestamp?: Date;

  /**
   * <p>The location where training results are saved.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>Contains information about the training results.</p>
   */
  TrainingDataResult?: TrainingDataResult;

  /**
   * <p>Contains information about the testing results.</p>
   */
  TestingDataResult?: TestingDataResult;

  /**
   * <p>The training results. <code>EvaluationResult</code> is only returned if training is successful.</p>
   */
  EvaluationResult?: EvaluationResult;

  /**
   * <p>The location of the summary manifest. The summary manifest provides aggregate data validation results for the training
   *          and test datasets.</p>
   */
  ManifestSummary?: GroundTruthManifest;

  /**
   * <p>The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The maximum number of inference units Amazon Rekognition Custom Labels uses to auto-scale the model.
   *          For more information, see <a>StartProjectVersion</a>.</p>
   */
  MaxInferenceUnits?: number;

  /**
   * <p>If the model version was copied from a different project, <code>SourceProjectVersionArn</code> contains the ARN of the source model version. </p>
   */
  SourceProjectVersionArn?: string;
}

export interface DescribeProjectVersionsResponse {
  /**
   * <p>A list of model descriptions. The list is sorted by the creation date and time of
   *          the model versions, latest to earliest.</p>
   */
  ProjectVersionDescriptions?: ProjectVersionDescription[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
   *          You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;
}

export interface DescribeStreamProcessorRequest {
  /**
   * <p>Name of the stream processor for which you want information.</p>
   */
  Name: string | undefined;
}

export enum StreamProcessorStatus {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

export interface DescribeStreamProcessorResponse {
  /**
   * <p>Name of the stream processor. </p>
   */
  Name?: string;

  /**
   * <p>ARN of the stream processor.</p>
   */
  StreamProcessorArn?: string;

  /**
   * <p>Current status of the stream processor.</p>
   */
  Status?: StreamProcessorStatus | string;

  /**
   * <p>Detailed status message about the stream processor.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Date and time the stream processor was created</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time, in Unix format, the stream processor was last updated. For example, when the stream
   *         processor moves from a running state to a failed state, or when the user starts or stops the stream processor.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Kinesis video stream that provides the source streaming video.</p>
   */
  Input?: StreamProcessorInput;

  /**
   * <p>Kinesis data stream to which Amazon Rekognition Video puts the analysis results.</p>
   */
  Output?: StreamProcessorOutput;

  /**
   * <p>ARN of the IAM role that allows access to the stream processor.</p>
   */
  RoleArn?: string;

  /**
   * <p>Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces
   *             in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.</p>
   */
  Settings?: StreamProcessorSettings;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
   *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
   *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
   *             one for a person at second 2 and one for a pet at second 4.</p>
   *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
   */
  NotificationChannel?: StreamProcessorNotificationChannel;

  /**
   * <p>
   *             The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   */
  RegionsOfInterest?: RegionOfInterest[];

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference;
}

export interface DetectCustomLabelsRequest {
  /**
   * <p>The ARN of the model version that you want to use.</p>
   */
  ProjectVersionArn: string | undefined;

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
   *          <p>If you use the
   *       AWS
   *       CLI to call Amazon Rekognition operations, passing image bytes using the Bytes
   *       property is not supported. You must first upload the image to an Amazon S3 bucket and then
   *       call the operation using the S3Object property.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of results you want the service to return in the response.
   *          The service returns the specified number of highest confidence labels ranked from highest confidence
   *       to lowest.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies the minimum confidence level for the labels to return.
   *          <code>DetectCustomLabels</code> doesn't return any labels with a confidence value that's lower than
   *          this specified value. If you specify a
   *       value of 0, <code>DetectCustomLabels</code> returns all labels, regardless of the assumed
   *          threshold applied to each label.
   *       If you don't specify a value for <code>MinConfidence</code>,  <code>DetectCustomLabels</code>
   *          returns labels based on the assumed threshold of each label.</p>
   */
  MinConfidence?: number;
}

export interface DetectCustomLabelsResponse {
  /**
   * <p>An array of custom labels detected in the input image.</p>
   */
  CustomLabels?: CustomLabel[];
}

/**
 * <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

export interface DetectFacesRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>An array of facial attributes you want to be returned. This can be the default list of
   *       attributes or all attributes. If you don't specify a value for <code>Attributes</code> or if
   *       you specify <code>["DEFAULT"]</code>, the API returns the following subset of facial
   *       attributes: <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
   *         <code>Quality</code>, and <code>Landmarks</code>. If you provide <code>["ALL"]</code>, all
   *       facial attributes are returned, but the operation takes longer to complete.</p>
   *          <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical AND
   *       operator to determine which attributes to return (in this case, all attributes). </p>
   */
  Attributes?: (Attribute | string)[];
}

export interface DetectFacesResponse {
  /**
   * <p>Details of each face found in the image. </p>
   */
  FaceDetails?: FaceDetail[];

  /**
   * <p>The value of <code>OrientationCorrection</code> is always null.</p>
   *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format
   *       (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
   *       information to perform image correction. The bounding box coordinates are translated to
   *       represent object locations after the orientation information in the Exif metadata is used to
   *       correct the image orientation. Images in .png format don't contain Exif metadata.</p>
   *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images
   *       without orientation information in the image Exif metadata. The bounding box coordinates
   *       aren't translated and represent the object locations before the image is rotated. </p>
   */
  OrientationCorrection?: OrientationCorrection | string;
}

/**
 * <p>A set of parameters that allow you to filter out certain results from your returned results.</p>
 */
export interface DetectionFilter {
  /**
   * <p>Sets the confidence of word detection. Words with detection confidence below this will be
   *       excluded from the result. Values should be between 0 and 100. The default MinConfidence is
   *       80.</p>
   */
  MinConfidence?: number;

  /**
   * <p>Sets the minimum height of the word bounding box. Words with bounding box heights lesser than
   *       this value will be excluded from the result. Value is relative to the video frame height.</p>
   */
  MinBoundingBoxHeight?: number;

  /**
   * <p>Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than
   *       this value will be excluded from the result. Value is relative to the video frame width.</p>
   */
  MinBoundingBoxWidth?: number;
}

export enum DetectLabelsFeatureName {
  GENERAL_LABELS = "GENERAL_LABELS",
  IMAGE_PROPERTIES = "IMAGE_PROPERTIES",
}

/**
 * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
 *       exclusive, or a combination of both and can be applied to individual l
 *       abels or entire label categories.</p>
 */
export interface GeneralLabelsSettings {
  /**
   * <p>The labels that should be included in the return from DetectLabels.</p>
   */
  LabelInclusionFilters?: string[];

  /**
   * <p>The labels that should be excluded from the return from DetectLabels.</p>
   */
  LabelExclusionFilters?: string[];

  /**
   * <p>The label categories that should be included in the return from DetectLabels.</p>
   */
  LabelCategoryInclusionFilters?: string[];

  /**
   * <p>The label categories that should be excluded from the return from DetectLabels.</p>
   */
  LabelCategoryExclusionFilters?: string[];
}

/**
 * <p>Settings for the IMAGE_PROPERTIES feature type.</p>
 */
export interface DetectLabelsImagePropertiesSettings {
  /**
   * <p>The maximum number of dominant colors to return when detecting labels in an image. The default value is 10.</p>
   */
  MaxDominantColors?: number;
}

/**
 * <p>Settings for the DetectLabels request. Settings can include
 *       filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive
 *       or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters
 *       allow specification of a maximum number of dominant colors.</p>
 */
export interface DetectLabelsSettings {
  /**
   * <p>Contains the specified filters for GENERAL_LABELS.</p>
   */
  GeneralLabels?: GeneralLabelsSettings;

  /**
   * <p>Contains the chosen number of maximum dominant colors in an image.</p>
   */
  ImageProperties?: DetectLabelsImagePropertiesSettings;
}

export interface DetectLabelsRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing image bytes is not supported. Images stored in an
   *       S3 Bucket do not need to be base64-encoded.</p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of labels you want the service to return in the response. The service
   *       returns the specified number of highest confidence labels. </p>
   */
  MaxLabels?: number;

  /**
   * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   *       return any labels with confidence lower than this specified value.</p>
   *          <p>If <code>MinConfidence</code> is not specified, the operation returns labels with a
   *       confidence values greater than or equal to 55 percent.</p>
   */
  MinConfidence?: number;

  /**
   * <p>A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection
   *       feature, while specifying IMAGE_PROPERTIES returns information regarding image color and quality.
   *       If no option is specified GENERAL_LABELS is used by default.</p>
   */
  Features?: (DetectLabelsFeatureName | string)[];

  /**
   * <p>A list of the filters to be applied to returned detected labels and image properties. Specified
   *       filters can be inclusive, exclusive, or a combination of both. Filters can be used for individual
   *       labels or label categories. The exact label names or label categories must be supplied. For
   *       a full list of labels and label categories, see LINK HERE.</p>
   */
  Settings?: DetectLabelsSettings;
}

/**
 * <p>A description of the dominant colors in an image.</p>
 */
export interface DominantColor {
  /**
   * <p>The Red RGB value for a dominant color.</p>
   */
  Red?: number;

  /**
   * <p>The Blue RGB value for a dominant color.</p>
   */
  Blue?: number;

  /**
   * <p>The Green RGB value for a dominant color.</p>
   */
  Green?: number;

  /**
   * <p>The Hex code equivalent of the RGB values for a dominant color.</p>
   */
  HexCode?: string;

  /**
   * <p>The CSS color name of a dominant color.</p>
   */
  CSSColor?: string;

  /**
   * <p>One of 12 simplified color names applied to a dominant color.</p>
   */
  SimplifiedColor?: string;

  /**
   * <p>The percentage of image pixels that have a given dominant color.</p>
   */
  PixelPercent?: number;
}

/**
 * <p>The quality of an image provided for label detection, with regard to brightness, sharpness, and contrast.</p>
 */
export interface DetectLabelsImageQuality {
  /**
   * <p>The brightness of an image provided for label detection.</p>
   */
  Brightness?: number;

  /**
   * <p>The sharpness of an image provided for label detection.</p>
   */
  Sharpness?: number;

  /**
   * <p>The contrast of an image provided for label detection.</p>
   */
  Contrast?: number;
}

/**
 * <p>The background of the image with regard to image quality and dominant colors.</p>
 */
export interface DetectLabelsImageBackground {
  /**
   * <p>The quality of the image background as defined by brightness and sharpness.</p>
   */
  Quality?: DetectLabelsImageQuality;

  /**
   * <p>The dominant colors found in the background of an image, defined with RGB values,
   *       CSS color name, simplified color name, and PixelPercentage (the percentage of
   *       image pixels that have a particular color).</p>
   */
  DominantColors?: DominantColor[];
}

/**
 * <p>The foreground of the image with regard to image quality and dominant colors.</p>
 */
export interface DetectLabelsImageForeground {
  /**
   * <p>The quality of the image foreground as defined by brightness and sharpness.</p>
   */
  Quality?: DetectLabelsImageQuality;

  /**
   * <p>The dominant colors found in the foreground of an image, defined with RGB values,
   *       CSS color name, simplified color name, and PixelPercentage (the percentage of image
   *       pixels that have a particular color).</p>
   */
  DominantColors?: DominantColor[];
}

/**
 * <p>Information about the quality and dominant colors of an input image.
 *       Quality and color information is returned for the entire image, foreground, and background.</p>
 */
export interface DetectLabelsImageProperties {
  /**
   * <p>Information about the quality of the image foreground as defined by brightness,
   *       sharpness, and contrast. The higher the value the greater the brightness,
   *       sharpness, and contrast respectively.</p>
   */
  Quality?: DetectLabelsImageQuality;

  /**
   * <p>Information about the dominant colors found in an image, described with RGB values,
   *       CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels
   *       that have a particular color).</p>
   */
  DominantColors?: DominantColor[];

  /**
   * <p>Information about the properties of an image’s foreground, including the
   *       foreground’s quality and dominant colors, including the quality and dominant colors of the image.</p>
   */
  Foreground?: DetectLabelsImageForeground;

  /**
   * <p>Information about the properties of an image’s background, including
   *       the background’s quality and dominant colors, including the quality
   *       and dominant colors of the image.</p>
   */
  Background?: DetectLabelsImageBackground;
}

/**
 * <p>A potential alias of for a given label.</p>
 */
export interface LabelAlias {
  /**
   * <p>The name of an alias for a given label.</p>
   */
  Name?: string;
}

/**
 * <p>The category that applies to a given label.</p>
 */
export interface LabelCategory {
  /**
   * <p>The name of a category that applies to a given label.</p>
   */
  Name?: string;
}

/**
 * <p>An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by
 *       Amazon Rekognition Video (<a>GetLabelDetection</a>).</p>
 */
export interface Instance {
  /**
   * <p>The position of the label instance on the image.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the bounding box.</p>
   */
  Confidence?: number;

  /**
   * <p>The dominant colors found in an individual instance of a label.</p>
   */
  DominantColors?: DominantColor[];
}

/**
 * <p>A parent label for a label. A label can have 0, 1, or more parents. </p>
 */
export interface Parent {
  /**
   * <p>The name of the parent label.</p>
   */
  Name?: string;
}

/**
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of
 *       confidence.</p>
 *          <p>
 *     </p>
 */
export interface Label {
  /**
   * <p>The name (label) of the object or scene.</p>
   */
  Name?: string;

  /**
   * <p>Level of confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>If <code>Label</code> represents an object, <code>Instances</code> contains the bounding boxes for each instance of the detected object.
   *       Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The parent labels for a label. The response includes all ancestor labels.</p>
   */
  Parents?: Parent[];

  /**
   * <p>A list of potential aliases for a given label.</p>
   */
  Aliases?: LabelAlias[];

  /**
   * <p>A list of the categories associated with a given label.</p>
   */
  Categories?: LabelCategory[];
}

export interface DetectLabelsResponse {
  /**
   * <p>An array of labels for the real-world objects detected. </p>
   */
  Labels?: Label[];

  /**
   * <p>The value of <code>OrientationCorrection</code> is always null.</p>
   *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format
   *       (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
   *       information to perform image correction. The bounding box coordinates are translated to
   *       represent object locations after the orientation information in the Exif metadata is used to
   *       correct the image orientation. Images in .png format don't contain Exif metadata.</p>
   *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images
   *       without orientation information in the image Exif metadata. The bounding box coordinates
   *       aren't translated and represent the object locations before the image is rotated. </p>
   */
  OrientationCorrection?: OrientationCorrection | string;

  /**
   * <p>Version number of the label detection model that was used to detect labels.</p>
   */
  LabelModelVersion?: string;

  /**
   * <p>Information about the properties of the input image, such as brightness, sharpness, contrast, and dominant colors.</p>
   */
  ImageProperties?: DetectLabelsImageProperties;
}

/**
 * <p>Allows you to set attributes of the image. Currently, you can declare an image as free of
 *       personally identifiable information.</p>
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Sets whether the input image is free of personally identifiable information.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

/**
 * <p>Sets up the flow definition the image will be sent to if one of the conditions is met. You
 *       can also set certain attributes of the image before review.</p>
 */
export interface HumanLoopConfig {
  /**
   * <p>The name of the human review used for this image. This should be kept unique within a
   *       region.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by
   *       using the Amazon Sagemaker <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html">CreateFlowDefinition</a> Operation. </p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Sets attributes of the input data.</p>
   */
  DataAttributes?: HumanLoopDataAttributes;
}

export interface DetectModerationLabelsRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   *       return any labels with a confidence level lower than this specified value.</p>
   *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels with
   *       confidence values greater than or equal to 50 percent.</p>
   */
  MinConfidence?: number;

  /**
   * <p>Sets up the configuration for human evaluation, including the FlowDefinition the image
   *       will be sent to.</p>
   */
  HumanLoopConfig?: HumanLoopConfig;
}

/**
 * <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the
 *       input did not trigger human review.</p>
 */
export interface HumanLoopActivationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   */
  HumanLoopArn?: string;

  /**
   * <p>Shows if and why human review was needed.</p>
   */
  HumanLoopActivationReasons?: string[];

  /**
   * <p>Shows the result of condition evaluations, including those conditions which activated a
   *       human review.</p>
   */
  HumanLoopActivationConditionsEvaluationResults?: __LazyJsonString | string;
}

export interface DetectModerationLabelsResponse {
  /**
   * <p>Array of detected Moderation labels and the time, in milliseconds from the start of the
   *       video, they were detected.</p>
   */
  ModerationLabels?: ModerationLabel[];

  /**
   * <p>Version number of the moderation detection model that was used to detect unsafe
   *       content.</p>
   */
  ModerationModelVersion?: string;

  /**
   * <p>Shows the results of the human in the loop evaluation.</p>
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
}

/**
 * <p>The number of in-progress human reviews you have has exceeded the number allowed.</p>
 */
export class HumanLoopQuotaExceededException extends __BaseException {
  readonly name: "HumanLoopQuotaExceededException" = "HumanLoopQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The quota code.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The service code.</p>
   */
  ServiceCode?: string;

  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HumanLoopQuotaExceededException, __BaseException>) {
    super({
      name: "HumanLoopQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HumanLoopQuotaExceededException.prototype);
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>.
 *          You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections.
 *          Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from
 *          <code>DetectProtectiveEquipment</code>.
 *          The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons
 *          were detected as not wearing PPE, and the persons in which a determination could not be made. For more information,
 *          see <a>ProtectiveEquipmentSummary</a>.</p>
 */
export interface ProtectiveEquipmentSummarizationAttributes {
  /**
   * <p>The minimum confidence level for which you want summary information.
   *          The confidence level applies to person detection, body part detection, equipment detection, and body part coverage.
   *          Amazon Rekognition doesn't return summary information with a confidence than this specified value. There isn't a
   *          default value.</p>
   *          <p>Specify a <code>MinConfidence</code> value that is between 50-100% as <code>DetectProtectiveEquipment</code>
   *          returns predictions only where the detection confidence is between 50% - 100%.
   *          If you specify a value that is less than 50%, the results are the same specifying a value of 50%.</p>
   *          <p>
   *       </p>
   */
  MinConfidence: number | undefined;

  /**
   * <p>An array of personal protective equipment types for which you want summary information.
   *          If a person is detected wearing a required requipment type, the person's ID is added to the
   *          <code>PersonsWithRequiredEquipment</code> array field returned in <a>ProtectiveEquipmentSummary</a>
   *          by <code>DetectProtectiveEquipment</code>.  </p>
   */
  RequiredEquipmentTypes: (ProtectiveEquipmentType | string)[] | undefined;
}

export interface DetectProtectiveEquipmentRequest {
  /**
   * <p>The image in which you want to detect PPE on detected persons. The image can be passed as image bytes or you can
   *          reference an image stored in an Amazon S3 bucket. </p>
   */
  Image: Image | undefined;

  /**
   * <p>An array of PPE types that you want to summarize.</p>
   */
  SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}

/**
 * <p>A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns
 *          all persons detected in the input
 *          image in an array of <code>ProtectiveEquipmentPerson</code> objects.</p>
 */
export interface ProtectiveEquipmentPerson {
  /**
   * <p>An array of body parts detected on a person's body (including body parts without PPE). </p>
   */
  BodyParts?: ProtectiveEquipmentBodyPart[];

  /**
   * <p>A bounding box around the detected person.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>The confidence that Amazon Rekognition has that the bounding box contains a person.</p>
   */
  Confidence?: number;

  /**
   * <p>The identifier for the detected person. The identifier is only unique for a single call to
   *          <code>DetectProtectiveEquipment</code>.</p>
   */
  Id?: number;
}

/**
 * <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call
 *          to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in
 *          the <code>SummarizationAttributes</code>
 *          (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter.
 *          The summary includes which persons were detected wearing the required personal protective equipment
 *          (<code>PersonsWithRequiredEquipment</code>),
 *          which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>),
 *          and the persons in which a determination
 *          could not be made (<code>PersonsIndeterminate</code>).</p>
 *          <p>To get a total for each category, use the size of the field array. For example,
 *          to find out how many people were detected as wearing the specified PPE,
 *          use the size of the <code>PersonsWithRequiredEquipment</code> array.
 *          If you want to find out more about a person, such as the
 *          location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element.
 *          Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned
 *          in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>
 */
export interface ProtectiveEquipmentSummary {
  /**
   * <p>An array of IDs for persons who are wearing detected personal protective equipment.
   *       </p>
   */
  PersonsWithRequiredEquipment?: number[];

  /**
   * <p>An array of IDs for persons who are not wearing all of the types of PPE specified in the <code>RequiredEquipmentTypes</code> field of
   *          the detected personal protective equipment.
   *       </p>
   */
  PersonsWithoutRequiredEquipment?: number[];

  /**
   * <p>An array of IDs for persons where it was not possible to determine if they are wearing personal protective equipment.
   *       </p>
   */
  PersonsIndeterminate?: number[];
}

export interface DetectProtectiveEquipmentResponse {
  /**
   * <p>The version number of the PPE detection model used to detect PPE in the image.</p>
   */
  ProtectiveEquipmentModelVersion?: string;

  /**
   * <p>An array of persons detected in the image (including persons not wearing PPE).</p>
   */
  Persons?: ProtectiveEquipmentPerson[];

  /**
   * <p>Summary information for the types of PPE specified in the <code>SummarizationAttributes</code> input
   *       parameter.</p>
   */
  Summary?: ProtectiveEquipmentSummary;
}

/**
 * <p>A set of optional parameters that you can use to set the criteria that the text must meet
 *       to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and
 *       minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image
 *       to look for text in. </p>
 */
export interface DetectTextFilters {
  /**
   * <p>A set of parameters that allow you to filter out certain results from your returned results.</p>
   */
  WordFilter?: DetectionFilter;

  /**
   * <p> A Filter focusing on a certain area of the image. Uses a <code>BoundingBox</code> object
   *       to set the region of the image.</p>
   */
  RegionsOfInterest?: RegionOfInterest[];
}

export interface DetectTextRequest {
  /**
   * <p>The input image as base64-encoded bytes or an Amazon S3 object. If you use the AWS
   *       CLI to call Amazon Rekognition operations, you can't pass image bytes. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>Optional parameters that let you set the criteria that the text must meet to be included
   *       in your response.</p>
   */
  Filters?: DetectTextFilters;
}

export enum TextTypes {
  LINE = "LINE",
  WORD = "WORD",
}

/**
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p>
 *          <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the
 *       image. </p>
 *          <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line
 *       and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which
 *       the word appears. The word <code>Id</code> is also an index for the word within a line of
 *       words. </p>
 *          <p>For more information, see Detecting text in the Amazon Rekognition Developer
 *       Guide.</p>
 */
export interface TextDetection {
  /**
   * <p>The word or line of text recognized by Amazon Rekognition. </p>
   */
  DetectedText?: string;

  /**
   * <p>The type of text that was detected.</p>
   */
  Type?: TextTypes | string;

  /**
   * <p>The identifier for the detected text. The identifier is only unique for a single call
   *       to <code>DetectText</code>. </p>
   */
  Id?: number;

  /**
   * <p>The Parent identifier for the detected text identified by the value of <code>ID</code>.
   *       If the type of detected text is <code>LINE</code>, the value of <code>ParentId</code> is
   *         <code>Null</code>. </p>
   */
  ParentId?: number;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy
   *       of the geometry points around the detected text.</p>
   */
  Confidence?: number;

  /**
   * <p>The location of the detected text on the image. Includes an axis aligned coarse
   *       bounding box surrounding the text and a finer grain polygon for more accurate spatial
   *       information.</p>
   */
  Geometry?: Geometry;
}

export interface DetectTextResponse {
  /**
   * <p>An array of text that was detected in the input image.</p>
   */
  TextDetections?: TextDetection[];

  /**
   * <p>The model version used to detect text.</p>
   */
  TextModelVersion?: string;
}

/**
 * <p>
 *          A training dataset or a test dataset used in a dataset distribution operation.
 *          For more information, see <a>DistributeDatasetEntries</a>.
 *       </p>
 */
export interface DistributeDataset {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want to use.
   *       </p>
   */
  Arn: string | undefined;
}

export interface DistributeDatasetEntriesRequest {
  /**
   * <p>The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to
   *          the same project. The test dataset must be empty.
   *          </p>
   */
  Datasets: DistributeDataset[] | undefined;
}

export interface DistributeDatasetEntriesResponse {}

/**
 * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
 *       image, and external image ID that you assigned. </p>
 */
export interface Face {
  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the face.</p>
   */
  FaceId?: string;

  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the input image.</p>
   */
  ImageId?: string;

  /**
   * <p>Identifier that you assign to all the faces in the input image.</p>
   */
  ExternalImageId?: string;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such
   *       as a tree).</p>
   */
  Confidence?: number;

  /**
   * <p> The version of the face detect and storage model that was used when indexing the face
   *       vector. </p>
   */
  IndexFacesModelVersion?: string;
}

export enum FaceAttributes {
  ALL = "ALL",
  DEFAULT = "DEFAULT",
}

/**
 * <p>Information about a face detected in a video analysis request and the time the face was detected in the video. </p>
 */
export interface FaceDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the face was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the face first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>The face properties for the detected face.</p>
   */
  Face?: FaceDetail;
}

/**
 * <p>Provides face metadata. In addition, it also provides the confidence in the match of
 *       this face with the input face.</p>
 */
export interface FaceMatch {
  /**
   * <p>Confidence in the match of this face with the input face.</p>
   */
  Similarity?: number;

  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the source
   *       image, and external image ID that you assigned.</p>
   */
  Face?: Face;
}

/**
 * <p>Object containing both the face metadata (stored in the backend database), and facial
 *       attributes that are detected but aren't stored in the database.</p>
 */
export interface FaceRecord {
  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
   *       image, and external image ID that you assigned. </p>
   */
  Face?: Face;

  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   */
  FaceDetail?: FaceDetail;
}

export enum FaceSearchSortBy {
  INDEX = "INDEX",
  TIMESTAMP = "TIMESTAMP",
}

export interface GetCelebrityInfoRequest {
  /**
   * <p>The ID for the celebrity. You get the celebrity ID from a call to the <a>RecognizeCelebrities</a> operation, which recognizes celebrities in an image.
   *     </p>
   */
  Id: string | undefined;
}

export interface GetCelebrityInfoResponse {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   */
  Urls?: string[];

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * <p>Retrieves the known gender for the celebrity.</p>
   */
  KnownGender?: KnownGender;
}

export interface GetCelebrityRecognitionRequest {
  /**
   * <p>Job identifier for the required celebrity recognition analysis. You can get the job identifer from
   *       a call to <code>StartCelebrityRecognition</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination
   *       token in the response. You can use this pagination token to retrieve the next set of celebrities. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for celebrities returned in <code>Celebrities</code> field. Specify <code>ID</code> to sort by the celebrity identifier,
   *         specify <code>TIMESTAMP</code> to sort by the time the celebrity was recognized.</p>
   */
  SortBy?: CelebrityRecognitionSortBy | string;
}

export enum VideoJobStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

export enum VideoColorRange {
  FULL = "FULL",
  LIMITED = "LIMITED",
}

/**
 * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in
 *             every page of paginated responses from a Amazon Rekognition video operation.</p>
 */
export interface VideoMetadata {
  /**
   * <p>Type of compression used in the analyzed video. </p>
   */
  Codec?: string;

  /**
   * <p>Length of the video in milliseconds.</p>
   */
  DurationMillis?: number;

  /**
   * <p>Format of the analyzed video. Possible values are MP4, MOV and AVI. </p>
   */
  Format?: string;

  /**
   * <p>Number of frames per second in the video.</p>
   */
  FrameRate?: number;

  /**
   * <p>Vertical pixel dimension of the video.</p>
   */
  FrameHeight?: number;

  /**
   * <p>Horizontal pixel dimension of the video.</p>
   */
  FrameWidth?: number;

  /**
   * <p>
   *       A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255).
   *     </p>
   */
  ColorRange?: VideoColorRange | string;
}

export interface GetCelebrityRecognitionResponse {
  /**
   * <p>The current status of the celebrity recognition job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *       every page of paginated responses from a Amazon Rekognition Video operation.</p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
   *       to retrieve the next set of celebrities.</p>
   */
  NextToken?: string;

  /**
   * <p>Array of celebrities recognized in the video.</p>
   */
  Celebrities?: CelebrityRecognition[];
}

export interface GetContentModerationRequest {
  /**
   * <p>The identifier for the inappropriate, unwanted, or offensive content moderation job. Use <code>JobId</code> to identify the job in
   *        a subsequent call to <code>GetContentModeration</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *     If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *     The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition
   *         returns a pagination token in the response. You can use this pagination token
   *         to retrieve the next set of content moderation labels.</p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for elements in the <code>ModerationLabelDetections</code> array.
   *        Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
   *        Use <code>NAME</code> to alphabetically group elements for a label together.
   *        Within each label group, the array element are sorted by detection confidence.
   *        The default sort is by <code>TIMESTAMP</code>.</p>
   */
  SortBy?: ContentModerationSortBy | string;
}

export interface GetContentModerationResponse {
  /**
   * <p>The current status of the content moderation analysis job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code>
   *      is returned in every page of paginated responses from <code>GetContentModeration</code>. </p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were detected.</p>
   */
  ModerationLabels?: ContentModerationDetection[];

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *      request to retrieve the next set of content moderation labels. </p>
   */
  NextToken?: string;

  /**
   * <p>Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive content.</p>
   */
  ModerationModelVersion?: string;
}

export interface GetFaceDetectionRequest {
  /**
   * <p>Unique identifier for the face detection job. The <code>JobId</code> is returned from <code>StartFaceDetection</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *        The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video returns a pagination
   *        token in the response. You can use this pagination token to retrieve the next set of faces.</p>
   */
  NextToken?: string;
}

export interface GetFaceDetectionResponse {
  /**
   * <p>The current status of the face detection job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition video operation.</p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of faces detected in the video. Each element contains a detected face's details and the time,
   *        in milliseconds from the start of the video, the face was detected. </p>
   */
  Faces?: FaceDetection[];
}

export interface GetFaceSearchRequest {
  /**
   * <p>The job identifer for the search request. You get the job identifier from an initial call to <code>StartFaceSearch</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination
   *       token in the response. You can use this pagination token to retrieve the next set of search results. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for grouping faces in the response. Use <code>TIMESTAMP</code> to group faces by the time
   *       that they are recognized. Use <code>INDEX</code> to sort by recognized faces. </p>
   */
  SortBy?: FaceSearchSortBy | string;
}

/**
 * <p>Details about a person detected in a video analysis request.</p>
 */
export interface PersonDetail {
  /**
   * <p>Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.</p>
   */
  Index?: number;

  /**
   * <p>Bounding box around the detected person.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Face details for the detected person.</p>
   */
  Face?: FaceDetail;
}

/**
 * <p>Information about a person whose face matches a face(s) in an Amazon Rekognition collection.
 *       Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for
 *       when the person was detected in a video. An array of <code>PersonMatch</code> objects is
 *       returned by <a>GetFaceSearch</a>. </p>
 */
export interface PersonMatch {
  /**
   * <p>The time, in milliseconds from the beginning of the video, that the person was matched in
   *       the video.</p>
   */
  Timestamp?: number;

  /**
   * <p>Information about the matched person.</p>
   */
  Person?: PersonDetail;

  /**
   * <p>Information about the faces in the input collection that match the face of a person in the
   *       video.</p>
   */
  FaceMatches?: FaceMatch[];
}

export interface GetFaceSearchResponse {
  /**
   * <p>The current status of the face search job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results. </p>
   */
  NextToken?: string;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses
   *       from a Amazon Rekognition Video operation. </p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>An array of persons,  <a>PersonMatch</a>,
   *       in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information
   *        for when persons are matched in the video.
   *       You specify the input collection in an initial call to <code>StartFaceSearch</code>.
   *       Each  <code>Persons</code> element includes a time the person was matched,
   *       face match details (<code>FaceMatches</code>) for matching faces in the collection,
   *        and person information (<code>Person</code>) for the matched person. </p>
   */
  Persons?: PersonMatch[];
}

export enum LabelDetectionAggregateBy {
  SEGMENTS = "SEGMENTS",
  TIMESTAMPS = "TIMESTAMPS",
}

export enum LabelDetectionSortBy {
  NAME = "NAME",
  TIMESTAMP = "TIMESTAMP",
}

export interface GetLabelDetectionRequest {
  /**
   * <p>Job identifier for the label detection operation for which you want results returned. You get the job identifer from
   *       an initial call to <code>StartlabelDetection</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *        The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of labels. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for elements in the <code>Labels</code> array.
   *       Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
   *       Use <code>NAME</code> to alphabetically group elements for a label together.
   *       Within each label group, the array element are sorted by detection confidence.
   *       The default sort is by <code>TIMESTAMP</code>.</p>
   */
  SortBy?: LabelDetectionSortBy | string;

  /**
   * <p>Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments.</p>
   */
  AggregateBy?: LabelDetectionAggregateBy | string;
}

/**
 * <p>Information about a label detected in a video analysis request and the time the label was detected in the video. </p>
 */
export interface LabelDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the label was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the label first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>Details about the detected label.</p>
   */
  Label?: Label;

  /**
   * <p>The time in milliseconds defining the start of the timeline segment containing a continuously detected label.</p>
   */
  StartTimestampMillis?: number;

  /**
   * <p>The time in milliseconds defining the end of the timeline segment containing a continuously detected label.</p>
   */
  EndTimestampMillis?: number;

  /**
   * <p>The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.</p>
   */
  DurationMillis?: number;
}

export interface GetLabelDetectionResponse {
  /**
   * <p>The current status of the label detection job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition video operation.</p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
   *         to retrieve the next set of labels.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of labels detected in the video. Each element contains the detected label and the time,
   *         in milliseconds from the start of the video, that the label was detected. </p>
   */
  Labels?: LabelDetection[];

  /**
   * <p>Version number of the label detection model that was used to detect labels.</p>
   */
  LabelModelVersion?: string;
}

export enum PersonTrackingSortBy {
  INDEX = "INDEX",
  TIMESTAMP = "TIMESTAMP",
}

export interface GetPersonTrackingRequest {
  /**
   * <p>The identifier for a job that tracks persons in a video. You get the <code>JobId</code> from a call to <code>StartPersonTracking</code>.
   *         </p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination
   *        token in the response. You can use this pagination token to retrieve the next set of persons. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for elements in the <code>Persons</code> array. Use <code>TIMESTAMP</code> to sort array elements
   *        by the time persons are detected. Use <code>INDEX</code> to sort by the tracked persons.
   *        If you sort by <code>INDEX</code>, the array elements for each person are sorted by detection confidence.
   *        The default sort is by <code>TIMESTAMP</code>.</p>
   */
  SortBy?: PersonTrackingSortBy | string;
}

/**
 * <p>Details and path tracking information for a single time a person's path is tracked in a video.
 *             Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects
 *             with elements for each time a person's path is tracked in a video. </p>
 *          <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
 */
export interface PersonDetection {
  /**
   * <p>The time, in milliseconds from the start of the video, that the person's path was tracked.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the person's path first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>Details about a person whose path was tracked in a video.</p>
   */
  Person?: PersonDetail;
}

export interface GetPersonTrackingResponse {
  /**
   * <p>The current status of the person tracking job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition Video operation.</p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of the persons detected in the video and the time(s) their path was tracked throughout the video.
   *         An array element will exist for each time a person's path is tracked. </p>
   */
  Persons?: PersonDetection[];
}

export interface GetSegmentDetectionRequest {
  /**
   * <p>Job identifier for the text detection operation for which you want results returned.
   *       You get the job identifer from an initial call to <code>StartSegmentDetection</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *       request to retrieve the next set of text.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about a shot detection segment detected in a video. For more information,
 *       see <a>SegmentDetection</a>.</p>
 */
export interface ShotSegment {
  /**
   * <p>An Identifier for a shot detection segment detected in a video. </p>
   */
  Index?: number;

  /**
   * <p>The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.</p>
   */
  Confidence?: number;
}

export enum TechnicalCueType {
  BLACK_FRAMES = "BlackFrames",
  COLOR_BARS = "ColorBars",
  CONTENT = "Content",
  END_CREDITS = "EndCredits",
  OPENING_CREDITS = "OpeningCredits",
  SLATE = "Slate",
  STUDIO_LOGO = "StudioLogo",
}

/**
 * <p>Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.</p>
 */
export interface TechnicalCueSegment {
  /**
   * <p>The type of the technical cue.</p>
   */
  Type?: TechnicalCueType | string;

  /**
   * <p>The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.</p>
   */
  Confidence?: number;
}

export enum SegmentType {
  SHOT = "SHOT",
  TECHNICAL_CUE = "TECHNICAL_CUE",
}

/**
 * <p>A technical cue or shot detection segment detected in a video. An array
 *     of <code>SegmentDetection</code> objects containing all segments detected in a stored video
 *       is returned by <a>GetSegmentDetection</a>.
 *     </p>
 */
export interface SegmentDetection {
  /**
   * <p>The type of the  segment. Valid values are <code>TECHNICAL_CUE</code> and <code>SHOT</code>.</p>
   */
  Type?: SegmentType | string;

  /**
   * <p>The start time of the detected segment in milliseconds from the start of the video. This value
   *       is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of
   *       100 millis.</p>
   */
  StartTimestampMillis?: number;

  /**
   * <p>The end time of the detected segment, in milliseconds, from the start of the video.
   *     This value is rounded down.</p>
   */
  EndTimestampMillis?: number;

  /**
   * <p>The duration of the detected segment in milliseconds. </p>
   */
  DurationMillis?: number;

  /**
   * <p>The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment.
   *       <code>StartTimecode</code> is in <i>HH:MM:SS:fr</i> format
   *       (and <i>;fr</i> for drop frame-rates). </p>
   */
  StartTimecodeSMPTE?: string;

  /**
   * <p>The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment.
   *       <code>EndTimecode</code> is in <i>HH:MM:SS:fr</i> format
   *       (and <i>;fr</i> for drop frame-rates).</p>
   */
  EndTimecodeSMPTE?: string;

  /**
   * <p>The duration of the timecode for the detected segment in SMPTE format.</p>
   */
  DurationSMPTE?: string;

  /**
   * <p>If the segment is a technical cue, contains information about the technical cue.</p>
   */
  TechnicalCueSegment?: TechnicalCueSegment;

  /**
   * <p>If the segment is a shot detection, contains information about the shot detection.</p>
   */
  ShotSegment?: ShotSegment;

  /**
   * <p>
   *       The frame number of the start of a video segment, using a frame index that starts with 0.
   *     </p>
   */
  StartFrameNumber?: number;

  /**
   * <p>
   *       The frame number at the end of a video segment, using a frame index that starts with 0.
   *     </p>
   */
  EndFrameNumber?: number;

  /**
   * <p>
   *       The duration of a video segment, expressed in frames.
   *     </p>
   */
  DurationFrames?: number;
}

/**
 * <p>Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>.
 *       An array of <code>SegmentTypeInfo</code> objects is returned  by the response from <a>GetSegmentDetection</a>.</p>
 */
export interface SegmentTypeInfo {
  /**
   * <p>The type of a segment (technical cue or shot detection).</p>
   */
  Type?: SegmentType | string;

  /**
   * <p>The version of the model used to detect segments.</p>
   */
  ModelVersion?: string;
}

export interface GetSegmentDetectionResponse {
  /**
   * <p>Current status of the segment detection job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Currently, Amazon Rekognition Video returns a single   object in the
   *       <code>VideoMetadata</code> array. The object
   *       contains information about the video stream in the input file that Amazon Rekognition Video chose to analyze.
   *       The <code>VideoMetadata</code> object includes the video codec, video format and other information.
   *       Video metadata is returned in each page of information returned by <code>GetSegmentDetection</code>.</p>
   */
  VideoMetadata?: VideoMetadata[];

  /**
   * <p>An array of
   *        objects. There can be multiple audio streams.
   *       Each <code>AudioMetadata</code> object contains metadata for a single audio stream.
   *       Audio information in an <code>AudioMetadata</code> objects includes
   *       the audio codec, the number of audio channels, the duration of the audio stream,
   *       and the sample rate. Audio metadata is returned in each page of information returned
   *       by <code>GetSegmentDetection</code>.</p>
   */
  AudioMetadata?: AudioMetadata[];

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns
   *       a pagination token in the response. You can use this pagination token to retrieve the next set of text.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of segments detected in a video.  The array is sorted by the segment types (TECHNICAL_CUE or SHOT)
   *       specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>. Within
   *       each segment type the array is sorted by timestamp values.</p>
   */
  Segments?: SegmentDetection[];

  /**
   * <p>An array containing the segment types requested in the call to <code>StartSegmentDetection</code>.
   *     </p>
   */
  SelectedSegmentTypes?: SegmentTypeInfo[];
}

export interface GetTextDetectionRequest {
  /**
   * <p>Job identifier for the text detection operation for which you want results returned.
   *         You get the job identifer from an initial call to <code>StartTextDetection</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns
   *       a pagination token in the response. You can use this pagination token to retrieve the next set of text.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about text detected in a video. Incudes the detected text,
 *         the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.</p>
 */
export interface TextDetectionResult {
  /**
   * <p>The time, in milliseconds from the start of the video, that the text was detected.
   *        Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the text first appears.</p>
   */
  Timestamp?: number;

  /**
   * <p>Details about text detected in a video.</p>
   */
  TextDetection?: TextDetection;
}

export interface GetTextDetectionResponse {
  /**
   * <p>Current status of the text detection job.</p>
   */
  JobStatus?: VideoJobStatus | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in
   *             every page of paginated responses from a Amazon Rekognition video operation.</p>
   */
  VideoMetadata?: VideoMetadata;

  /**
   * <p>An array of text detected in the video. Each element contains the detected text, the time in milliseconds
   *       from the start of the video that the text was detected, and where it was detected on the screen.</p>
   */
  TextDetections?: TextDetectionResult[];

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *         request to retrieve the next set of text.</p>
   */
  NextToken?: string;

  /**
   * <p>Version number of the text detection model that was used to detect text.</p>
   */
  TextModelVersion?: string;
}

/**
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

export interface IndexFacesRequest {
  /**
   * <p>The ID of an existing collection to which you want to add the faces that are detected
   *       in the input images.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes isn't supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>The ID you want to assign to all the faces detected in the image.</p>
   */
  ExternalImageId?: string;

  /**
   * <p>An array of facial attributes that you want to be returned. This can be the default
   *       list of attributes or all attributes. If you don't specify a value for <code>Attributes</code>
   *       or if you specify <code>["DEFAULT"]</code>, the API returns the following subset of facial
   *       attributes: <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
   *         <code>Quality</code>, and <code>Landmarks</code>. If you provide <code>["ALL"]</code>, all
   *       facial attributes are returned, but the operation takes longer to complete.</p>
   *          <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical AND
   *       operator to determine which attributes to return (in this case, all attributes). </p>
   */
  DetectionAttributes?: (Attribute | string)[];

  /**
   * <p>The maximum number of faces to index. The value of <code>MaxFaces</code> must be greater
   *       than or equal to 1. <code>IndexFaces</code> returns no more than 100 detected faces in an
   *       image, even if you specify a larger value for <code>MaxFaces</code>.</p>
   *          <p>If <code>IndexFaces</code> detects more faces than the value of <code>MaxFaces</code>, the
   *       faces with the lowest quality are filtered out first. If there are still more faces than the
   *       value of <code>MaxFaces</code>, the faces with the smallest bounding boxes are filtered out
   *       (up to the number that's needed to satisfy the value of <code>MaxFaces</code>). Information
   *       about the unindexed faces is available in the <code>UnindexedFaces</code> array. </p>
   *          <p>The faces that are returned by <code>IndexFaces</code> are sorted by the largest face
   *       bounding box size to the smallest size, in descending order.</p>
   *          <p>
   *             <code>MaxFaces</code> can be used with a collection associated with any version of the
   *       face model.</p>
   */
  MaxFaces?: number;

  /**
   * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
   *       Filtered faces aren't indexed. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality
   *       bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>, filtering
   *       removes all faces that don’t meet the chosen quality bar. The default value is
   *         <code>AUTO</code>.
   *       The quality bar is based on a variety of common use cases. Low-quality detections can occur
   *       for a number of reasons. Some examples are an object that's misidentified as a face, a face
   *       that's too blurry, or a face with a pose that's too extreme to use. If you specify
   *         <code>NONE</code>, no filtering is performed. </p>
   *          <p>To use quality filtering, the collection you are using must be associated with version 3
   *       of the face model or higher.</p>
   */
  QualityFilter?: QualityFilter | string;
}

export enum Reason {
  EXCEEDS_MAX_FACES = "EXCEEDS_MAX_FACES",
  EXTREME_POSE = "EXTREME_POSE",
  LOW_BRIGHTNESS = "LOW_BRIGHTNESS",
  LOW_CONFIDENCE = "LOW_CONFIDENCE",
  LOW_FACE_QUALITY = "LOW_FACE_QUALITY",
  LOW_SHARPNESS = "LOW_SHARPNESS",
  SMALL_BOUNDING_BOX = "SMALL_BOUNDING_BOX",
}

/**
 * <p>A face that <a>IndexFaces</a> detected, but didn't index. Use the
 *         <code>Reasons</code> response attribute to determine why a face wasn't indexed.</p>
 */
export interface UnindexedFace {
  /**
   * <p>An array of reasons that specify why a face wasn't indexed. </p>
   *          <ul>
   *             <li>
   *                <p>EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is
   *           turned too far away from the camera.</p>
   *             </li>
   *             <li>
   *                <p>EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified
   *           by the <code>MaxFaces</code> input parameter for <code>IndexFaces</code>.</p>
   *             </li>
   *             <li>
   *                <p>LOW_BRIGHTNESS - The image is too dark.</p>
   *             </li>
   *             <li>
   *                <p>LOW_SHARPNESS - The image is too blurry.</p>
   *             </li>
   *             <li>
   *                <p>LOW_CONFIDENCE - The face was detected with a low confidence.</p>
   *             </li>
   *             <li>
   *                <p>SMALL_BOUNDING_BOX - The bounding box around the face is too small.</p>
   *             </li>
   *          </ul>
   */
  Reasons?: (Reason | string)[];

  /**
   * <p>The
   *       structure that contains attributes of a face that
   *       <code>IndexFaces</code>detected, but didn't index. </p>
   */
  FaceDetail?: FaceDetail;
}

export interface IndexFacesResponse {
  /**
   * <p>An array of faces detected and added to the collection. For more information,
   *       see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. </p>
   */
  FaceRecords?: FaceRecord[];

  /**
   * <p>If your collection is associated with a face detection model that's later than version
   *       3.0, the value of <code>OrientationCorrection</code> is always null and no orientation
   *       information is returned.</p>
   *          <p>If your collection is associated with a face detection model that's version 3.0 or
   *       earlier, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the input image is in .jpeg format, it might contain exchangeable image file format
   *           (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
   *           information to perform image correction - the bounding box coordinates are translated to
   *           represent object locations after the orientation information in the Exif metadata is used
   *           to correct the image orientation. Images in .png format don't contain Exif metadata. The
   *           value of <code>OrientationCorrection</code> is null.</p>
   *             </li>
   *             <li>
   *                <p>If the image doesn't contain orientation information in its Exif metadata, Amazon Rekognition
   *           returns an estimated orientation (ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270). Amazon Rekognition
   *           doesn’t perform image correction for images. The bounding box coordinates aren't
   *           translated and represent the object locations before the image is rotated.</p>
   *             </li>
   *          </ul>
   *          <p>Bounding box information is returned in the <code>FaceRecords</code> array. You can get
   *       the version of the face detection model by calling <a>DescribeCollection</a>. </p>
   */
  OrientationCorrection?: OrientationCorrection | string;

  /**
   * <p>The version number of the face detection model that's associated with the input
   *       collection (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>An array of faces that were detected in the image but weren't indexed. They weren't
   *       indexed because the quality filter identified them as low quality, or the
   *         <code>MaxFaces</code> request parameter filtered them out. To use the quality filter, you
   *       specify the <code>QualityFilter</code> request parameter.</p>
   */
  UnindexedFaces?: UnindexedFace[];
}

/**
 * <p>Specifies the starting point in a Kinesis stream to start processing. You can use the
 *             producer timestamp or the fragment number. One of either producer timestamp or fragment
 *             number is required. If you use the producer timestamp, you must put the time in
 *             milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>. </p>
 */
export interface KinesisVideoStreamStartSelector {
  /**
   * <p> The timestamp from the producer corresponding to the fragment, in milliseconds,
   *             expressed in unix time format. </p>
   */
  ProducerTimestamp?: number;

  /**
   * <p>
   *             The unique identifier of the fragment. This value monotonically increases based on the ingestion order.
   *         </p>
   */
  FragmentNumber?: string;
}

export enum LabelDetectionFeatureName {
  GENERAL_LABELS = "GENERAL_LABELS",
}

/**
 * <p>Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.</p>
 */
export interface LabelDetectionSettings {
  /**
   * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
   *       exclusive, or a combination of both and can be applied to individual l
   *       abels or entire label categories.</p>
   */
  GeneralLabels?: GeneralLabelsSettings;
}

export interface ListCollectionsRequest {
  /**
   * <p>Pagination token from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of collection IDs to return. </p>
   */
  MaxResults?: number;
}

export interface ListCollectionsResponse {
  /**
   * <p>An array of collection IDs.</p>
   */
  CollectionIds?: string[];

  /**
   * <p>If the result is truncated, the response provides a <code>NextToken</code> that you can
   *       use in the subsequent request to fetch the next set of collection IDs.</p>
   */
  NextToken?: string;

  /**
   * <p>Version numbers of the face detection models associated with the collections in the
   *       array <code>CollectionIds</code>. For example, the value of <code>FaceModelVersions[2]</code>
   *       is the version number for the face detection model used by the collection in
   *         <code>CollectionId[2]</code>.</p>
   */
  FaceModelVersions?: string[];
}

export interface ListDatasetEntriesRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) for the dataset that you want to use.
   * </p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>Specifies a label filter for the response. The response includes an entry only if one or more of the labels in <code>ContainsLabels</code> exist in the entry.
   *       </p>
   */
  ContainsLabels?: string[];

  /**
   * <p>
   *    Specify <code>true</code> to get only the JSON Lines where the image is labeled.
   *    Specify <code>false</code> to get only the JSON Lines where the image isn't labeled. If you
   *    don't specify <code>Labeled</code>, <code>ListDatasetEntries</code> returns JSON Lines for labeled and unlabeled
   *    images.
   * </p>
   */
  Labeled?: boolean;

  /**
   * <p>If specified, <code>ListDatasetEntries</code> only returns JSON Lines where the value of <code>SourceRefContains</code> is
   *    part of the <code>source-ref</code> field. The <code>source-ref</code> field contains the Amazon S3 location of the image.
   *    You can use <code>SouceRefContains</code> for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific folder.</p>
   */
  SourceRefContains?: string;

  /**
   * <p>Specifies an error filter for the response. Specify <code>True</code> to only include entries that have errors.
   *       </p>
   */
  HasErrors?: boolean;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *       If you specify a value greater than 100, a ValidationException
   *       error occurs. The default value is 100. </p>
   */
  MaxResults?: number;
}

export interface ListDatasetEntriesResponse {
  /**
   * <p>
   * A list of entries (images) in the dataset.
   * </p>
   */
  DatasetEntries?: string[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   */
  NextToken?: string;
}

export interface ListDatasetLabelsRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to use.
   * </p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *       If you specify a value greater than 100, a ValidationException
   *       error occurs. The default value is 100. </p>
   */
  MaxResults?: number;
}

export interface ListDatasetLabelsResponse {
  /**
   * <p>
   * A list of the labels in the dataset.
   * </p>
   */
  DatasetLabelDescriptions?: DatasetLabelDescription[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   */
  NextToken?: string;
}

export interface ListFacesRequest {
  /**
   * <p>ID of the collection from which to list the faces.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Rekognition returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of faces.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of faces to return.</p>
   */
  MaxResults?: number;
}

export interface ListFacesResponse {
  /**
   * <p>An array of <code>Face</code> objects. </p>
   */
  Faces?: Face[];

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the
   *       subsequent request to retrieve the next set of faces.</p>
   */
  NextToken?: string;

  /**
   * <p>Version number of the face detection model associated with the input collection
   *         (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;
}

export interface ListProjectPoliciesRequest {
  /**
   * <p>The ARN of the project for which you want to list the project policies.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more results to retrieve),
   *          Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token
   *          to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 5. If you specify a value greater than 5, a ValidationException error
   *          occurs. The default value is 5. </p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p>
 *          <p> </p>
 */
export interface ProjectPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the project to which the project policy is attached.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The revision ID of the project policy.</p>
   */
  PolicyRevisionId?: string;

  /**
   * <p>The JSON document for the project policy.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>The Unix datetime for the creation of the project policy.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The Unix datetime for when the project policy was last updated. </p>
   */
  LastUpdatedTimestamp?: Date;
}

export interface ListProjectPoliciesResponse {
  /**
   * <p>A list of project policies attached to the project.</p>
   */
  ProjectPolicies?: ProjectPolicy[];

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the
   *       subsequent request to retrieve the next set of project policies.</p>
   */
  NextToken?: string;
}

export interface ListStreamProcessorsRequest {
  /**
   * <p>If the previous response was incomplete (because there are more stream processors to retrieve), Amazon Rekognition Video
   *             returns a pagination token in the response. You can use this pagination token to retrieve the next set of stream processors. </p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is 1000. </p>
   */
  MaxResults?: number;
}

/**
 * <p>An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>.  The request
 *         parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.
 *
 *         </p>
 */
export interface StreamProcessor {
  /**
   * <p>Name of the Amazon Rekognition stream processor. </p>
   */
  Name?: string;

  /**
   * <p>Current status of the Amazon Rekognition stream processor.</p>
   */
  Status?: StreamProcessorStatus | string;
}

export interface ListStreamProcessorsResponse {
  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *             request to retrieve the next set of stream processors. </p>
   */
  NextToken?: string;

  /**
   * <p>List of stream processors that you have created.</p>
   */
  StreamProcessors?: StreamProcessor[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that contains
   *       the tags that you want a list of. </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p> A list of key-value tags assigned to the resource. </p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The format of the project policy document that you supplied to
 *       <code>PutProjectPolicy</code> is incorrect. </p>
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException" = "MalformedPolicyDocumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see
 *           <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
 *           For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.</p>
 */
export interface NotificationChannel {
  /**
   * <p>The Amazon SNS topic to which Amazon Rekognition posts the completion status.</p>
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic. </p>
   */
  RoleArn: string | undefined;
}

export interface PutProjectPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that the project policy is attached to.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>A name for the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels
   *          generates and assigns a new <code>PolicyRevisionId</code> and then deletes the previous version of the
   *          policy.</p>
   */
  PolicyRevisionId?: string;

  /**
   * <p>A resource policy to add to the model. The policy is a JSON structure that contains
   *          one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For
   *          more information about the contents of a JSON policy document, see
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON policy reference</a>. </p>
   */
  PolicyDocument: string | undefined;
}

export interface PutProjectPolicyResponse {
  /**
   * <p>The ID of the project policy.</p>
   */
  PolicyRevisionId?: string;
}

export interface RecognizeCelebritiesRequest {
  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;
}

export interface RecognizeCelebritiesResponse {
  /**
   * <p>Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64
   *       celebrities in an image. Each celebrity object includes the following attributes:
   *         <code>Face</code>, <code>Confidence</code>, <code>Emotions</code>, <code>Landmarks</code>,
   *         <code>Pose</code>, <code>Quality</code>, <code>Smile</code>, <code>Id</code>,
   *         <code>KnownGender</code>, <code>MatchConfidence</code>, <code>Name</code>,
   *       <code>Urls</code>.</p>
   */
  CelebrityFaces?: Celebrity[];

  /**
   * <p>Details about each unrecognized face in the image.</p>
   */
  UnrecognizedFaces?: ComparedFace[];

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
   */
  OrientationCorrection?: OrientationCorrection | string;
}

export interface SearchFacesRequest {
  /**
   * <p>ID of the collection the face belongs to.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>ID of a face to find matches for in the collection.</p>
   */
  FaceId: string | undefined;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces
   *       with the highest confidence in the match.</p>
   */
  MaxFaces?: number;

  /**
   * <p>Optional value specifying the minimum confidence in the face match to return. For
   *       example, don't return any matches where confidence in matches is less than 70%. The default
   *       value is 80%. </p>
   */
  FaceMatchThreshold?: number;
}

export interface SearchFacesResponse {
  /**
   * <p>ID of the face that was searched for matches in a collection.</p>
   */
  SearchedFaceId?: string;

  /**
   * <p>An array of faces that matched the input face, along with the confidence in the
   *       match.</p>
   */
  FaceMatches?: FaceMatch[];

  /**
   * <p>Version number of the face detection model associated with the input collection
   *         (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;
}

export interface SearchFacesByImageRequest {
  /**
   * <p>ID of the collection to search.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces
   *       with the highest confidence in the match.</p>
   */
  MaxFaces?: number;

  /**
   * <p>(Optional) Specifies the minimum confidence in the face match to return. For example,
   *       don't return any matches where confidence in matches is less than 70%. The default value is
   *       80%.</p>
   */
  FaceMatchThreshold?: number;

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
   */
  QualityFilter?: QualityFilter | string;
}

export interface SearchFacesByImageResponse {
  /**
   * <p>The bounding box around the face in the input image that Amazon Rekognition used for the
   *       search.</p>
   */
  SearchedFaceBoundingBox?: BoundingBox;

  /**
   * <p>The level of confidence that the <code>searchedFaceBoundingBox</code>, contains a
   *       face.</p>
   */
  SearchedFaceConfidence?: number;

  /**
   * <p>An array of faces that match the input face, along with the confidence in the
   *       match.</p>
   */
  FaceMatches?: FaceMatch[];

  /**
   * <p>Version number of the face detection model associated with the input collection
   *         (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;
}

/**
 * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
 *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
 */
export interface Video {
  /**
   * <p>The Amazon S3 bucket name and file name for the video.</p>
   */
  S3Object?: S3Object;
}

export interface StartCelebrityRecognitionRequest {
  /**
   * <p>The video in which you want to recognize celebrities. The video must be stored
   *       in an Amazon S3 bucket.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *     <code>StartCelebrityRecognition</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
   *       celebrity recognition analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;
}

export interface StartCelebrityRecognitionResponse {
  /**
   * <p>The identifier for the celebrity recognition analysis job. Use <code>JobId</code> to identify the job in
   *       a subsequent call to <code>GetCelebrityRecognition</code>.</p>
   */
  JobId?: string;
}

/**
 * <p>The file size or duration of the supplied media is too large. The maximum file size is 10GB.
 *         The maximum duration is 6 hours. </p>
 */
export class VideoTooLargeException extends __BaseException {
  readonly name: "VideoTooLargeException" = "VideoTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   */
  Logref?: string;
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

export interface StartContentModerationRequest {
  /**
   * <p>The video in which you want to detect inappropriate, unwanted, or offensive content. The video must be stored
   *       in an Amazon S3 bucket.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label. Confidence
   *       represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition doesn't return any moderated content labels with a confidence level
   *       lower than this specified value. If you don't specify <code>MinConfidence</code>, <code>GetContentModeration</code>
   *        returns labels with confidence values greater than or equal to 50 percent.</p>
   */
  MinConfidence?: number;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartContentModeration</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
   *       content analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;
}

export interface StartContentModerationResponse {
  /**
   * <p>The identifier for the content analysis job. Use <code>JobId</code> to identify the job in
   *       a subsequent call to <code>GetContentModeration</code>.</p>
   */
  JobId?: string;
}

export interface StartFaceDetectionRequest {
  /**
   * <p>The video in which you want to detect faces. The video must be stored
   *       in an Amazon S3 bucket.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartFaceDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the
   *          face detection operation. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>The face attributes you want returned.</p>
   *          <p>
   *             <code>DEFAULT</code> - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. </p>
   *          <p>
   *             <code>ALL</code> - All facial attributes are returned.</p>
   */
  FaceAttributes?: FaceAttributes | string;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;
}

export interface StartFaceDetectionResponse {
  /**
   * <p>The identifier for the face detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetFaceDetection</code>.</p>
   */
  JobId?: string;
}

export interface StartFaceSearchRequest {
  /**
   * <p>The video you want to search. The video must be stored in an Amazon S3 bucket. </p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartFaceSearch</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%.
   *       The default value is 80%.</p>
   */
  FaceMatchThreshold?: number;

  /**
   * <p>ID of the collection that contains the faces you want to search for.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;
}

export interface StartFaceSearchResponse {
  /**
   * <p>The identifier for the search job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetFaceSearch</code>. </p>
   */
  JobId?: string;
}

export interface StartLabelDetectionRequest {
  /**
   * <p>The video in which you want to detect labels. The video must be stored
   *       in an Amazon S3 bucket.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartLabelDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence
   *        represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence.
   *        100 is the highest confidence.  Amazon Rekognition Video doesn't return any labels with a confidence level
   *        lower than this specified value.</p>
   *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels and
   *       bounding boxes (if detected)  with confidence values greater than or equal to 50
   *       percent.</p>
   */
  MinConfidence?: number;

  /**
   * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the label detection
   *         operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;

  /**
   * <p>The features to return after video analysis. You can specify that GENERAL_LABELS are returned.</p>
   */
  Features?: (LabelDetectionFeatureName | string)[];

  /**
   * <p>The settings for a StartLabelDetection request.Contains the specified parameters for the label detection request of an asynchronous label analysis operation.
   *       Settings can include filters for GENERAL_LABELS.</p>
   */
  Settings?: LabelDetectionSettings;
}

export interface StartLabelDetectionResponse {
  /**
   * <p>The identifier for the label detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetLabelDetection</code>. </p>
   */
  JobId?: string;
}

export interface StartPersonTrackingRequest {
  /**
   * <p>The video in which you want to detect people. The video must be stored
   *       in an Amazon S3 bucket.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartPersonTracking</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the people detection
   *         operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;
}

export interface StartPersonTrackingResponse {
  /**
   * <p>The identifier for the person detection job. Use <code>JobId</code> to identify the job in
   *     a subsequent call to <code>GetPersonTracking</code>.</p>
   */
  JobId?: string;
}

export interface StartProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name(ARN) of the model version that you want to start.</p>
   */
  ProjectVersionArn: string | undefined;

  /**
   * <p>The minimum number of inference units to use. A single
   *       inference unit represents 1 hour of processing. </p>
   *          <p>For information about the number
   *             of transactions per second (TPS) that an inference unit can support, see
   *             <i>Running a trained Amazon Rekognition Custom Labels model</i> in the
   *             Amazon Rekognition Custom Labels Guide.
   *          </p>
   *          <p>Use a higher number to increase the TPS throughput of your model. You are charged for the number
   *       of inference units that you use.
   *     </p>
   */
  MinInferenceUnits: number | undefined;

  /**
   * <p>The maximum number of inference units to use for auto-scaling the model. If you don't
   *          specify a value, Amazon Rekognition Custom Labels doesn't auto-scale the model.</p>
   */
  MaxInferenceUnits?: number;
}

export interface StartProjectVersionResponse {
  /**
   * <p>The current running status of the model. </p>
   */
  Status?: ProjectVersionStatus | string;
}

/**
 * <p>Filters for the shot detection segments returned by <code>GetSegmentDetection</code>.
 *       For more information, see <a>StartSegmentDetectionFilters</a>.</p>
 */
export interface StartShotDetectionFilter {
  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence
   *       represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition Video doesn't return any segments with a confidence level
   *       lower than this specified value.</p>
   *          <p>If you don't specify <code>MinSegmentConfidence</code>, the <code>GetSegmentDetection</code> returns
   *         segments with confidence values greater than or equal to 50 percent.</p>
   */
  MinSegmentConfidence?: number;
}

/**
 * <p>Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information,
 *       see <a>StartSegmentDetectionFilters</a>.</p>
 */
export interface StartTechnicalCueDetectionFilter {
  /**
   * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence
   *       represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence.
   *       100 is the highest confidence.  Amazon Rekognition Video doesn't return any segments with a confidence level
   *       lower than this specified value.</p>
   *          <p>If you don't specify <code>MinSegmentConfidence</code>, <code>GetSegmentDetection</code> returns
   *       segments with confidence values greater than or equal to 50 percent.</p>
   */
  MinSegmentConfidence?: number;

  /**
   * <p>
   *       A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame.
   *       Videos can come from multiple sources, formats, and time periods, with different standards and varying noise levels for black frames that need to be accounted for.
   *     </p>
   */
  BlackFrame?: BlackFrame;
}

/**
 * <p>Filters applied to the technical cue or shot detection segments.
 *       For more information, see <a>StartSegmentDetection</a>.
 *     </p>
 */
export interface StartSegmentDetectionFilters {
  /**
   * <p>Filters that are specific to technical cues.</p>
   */
  TechnicalCueFilter?: StartTechnicalCueDetectionFilter;

  /**
   * <p>Filters that are specific to shot detections.</p>
   */
  ShotFilter?: StartShotDetectionFilter;
}

export interface StartSegmentDetectionRequest {
  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple
   *       <code>StartSegmentDetection</code> requests, the same <code>JobId</code> is returned. Use
   *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the
   *       segment detection operation. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
   *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
   */
  JobTag?: string;

  /**
   * <p>Filters for technical cue or shot detection.</p>
   */
  Filters?: StartSegmentDetectionFilters;

  /**
   * <p>An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT.</p>
   */
  SegmentTypes: (SegmentType | string)[] | undefined;
}

export interface StartSegmentDetectionResponse {
  /**
   * <p>Unique identifier for the segment detection job. The <code>JobId</code> is returned from <code>StartSegmentDetection</code>.
   *     </p>
   */
  JobId?: string;
}

/**
 * <p>This is a required parameter for label detection stream processors and should not be used
 *             to start a face search stream processor.</p>
 */
export interface StreamProcessingStartSelector {
  /**
   * <p>
   *             Specifies the starting point in the stream to start processing. This can be done with a producer timestamp or a fragment number in a Kinesis stream.
   *         </p>
   */
  KVSStreamStartSelector?: KinesisVideoStreamStartSelector;
}

/**
 * <p>
 *             Specifies when to stop processing the stream. You can specify a maximum amount
 *             of time to process the video.
 *         </p>
 */
export interface StreamProcessingStopSelector {
  /**
   * <p>
   *             Specifies the maximum amount of time in seconds that you want the stream to be processed. The largest amount of time is 2 minutes. The default is 10 seconds.
   *         </p>
   */
  MaxDurationInSeconds?: number;
}

export interface StartStreamProcessorRequest {
  /**
   * <p>The name of the stream processor to start processing.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *             Specifies the starting point in the Kinesis stream to start processing.
   *             You can use the producer timestamp or the fragment number. If you use the producer timestamp, you must put the time in milliseconds.
   *             For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>.
   *         </p>
   *          <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>
   */
  StartSelector?: StreamProcessingStartSelector;

  /**
   * <p>
   *             Specifies when to stop processing the stream. You can specify a
   *             maximum amount of time to process the video.
   *         </p>
   *          <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>
   */
  StopSelector?: StreamProcessingStopSelector;
}

export interface StartStreamProcessorResponse {
  /**
   * <p>
   *             A unique identifier for the stream processing session.
   *         </p>
   */
  SessionId?: string;
}

/**
 * <p>Set of optional parameters that let you set the criteria text must meet to be included in your response.
 *       <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code>
 *       lets you set a specific region of the screen to look for text in.</p>
 */
export interface StartTextDetectionFilters {
  /**
   * <p>Filters focusing on qualities of the text, such as confidence or size.</p>
   */
  WordFilter?: DetectionFilter;

  /**
   * <p>Filter focusing on a certain area of the frame. Uses a <code>BoundingBox</code> object to set the region
   *       of the screen.</p>
   */
  RegionsOfInterest?: RegionOfInterest[];
}

export interface StartTextDetectionRequest {
  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video: Video | undefined;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple <code>StartTextDetection</code>
   *       requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job
   *         from being accidentaly started more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see
   *           <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.
   *           For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.</p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>An identifier returned in the completion status published by your Amazon Simple Notification Service topic.  For example, you can use <code>JobTag</code> to group related jobs
   *       and identify them in the completion notification.</p>
   */
  JobTag?: string;

  /**
   * <p>Optional parameters that let you set criteria the text must meet to be included in your response.</p>
   */
  Filters?: StartTextDetectionFilters;
}

export interface StartTextDetectionResponse {
  /**
   * <p>Identifier for the text detection job.  Use <code>JobId</code> to identify the job in a subsequent call to <code>GetTextDetection</code>.</p>
   */
  JobId?: string;
}

export interface StopProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version that you want to delete.</p>
   *          <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>
   */
  ProjectVersionArn: string | undefined;
}

export interface StopProjectVersionResponse {
  /**
   * <p>The current status of the stop operation. </p>
   */
  Status?: ProjectVersionStatus | string;
}

export interface StopStreamProcessorRequest {
  /**
   * <p>The name of a stream processor created by <a>CreateStreamProcessor</a>.</p>
   */
  Name: string | undefined;
}

export interface StopStreamProcessorResponse {}

export interface TagResourceRequest {
  /**
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   *       assign the tags to. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p> The key-value tags to assign to the resource. </p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to
   *       remove the tags from. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p> A list of the tags that you want to remove. </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDatasetEntriesRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to update.
   * </p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>
   *    The changes that you want to make to the dataset.
   * </p>
   */
  Changes: DatasetChanges | undefined;
}

export interface UpdateDatasetEntriesResponse {}

export enum StreamProcessorParameterToDelete {
  ConnectedHomeMinConfidence = "ConnectedHomeMinConfidence",
  RegionsOfInterest = "RegionsOfInterest",
}

/**
 * <p>
 *             The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence.
 *         </p>
 */
export interface StreamProcessorSettingsForUpdate {
  /**
   * <p>
   *             The label detection settings you want to use for your stream processor.
   *         </p>
   */
  ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate;
}

export interface UpdateStreamProcessorRequest {
  /**
   * <p>
   *             Name of the stream processor that you want to update.
   *         </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *             The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence.
   *         </p>
   */
  SettingsForUpdate?: StreamProcessorSettingsForUpdate;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   */
  RegionsOfInterestForUpdate?: RegionOfInterest[];

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   */
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;

  /**
   * <p>
   *             A list of parameters you want to delete from the stream processor.
   *         </p>
   */
  ParametersToDelete?: (StreamProcessorParameterToDelete | string)[];
}

export interface UpdateStreamProcessorResponse {}

/**
 * @internal
 */
export const AgeRangeFilterSensitiveLog = (obj: AgeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectFilterSensitiveLog = (obj: S3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroundTruthManifestFilterSensitiveLog = (obj: GroundTruthManifest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetFilterSensitiveLog = (obj: Asset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioMetadataFilterSensitiveLog = (obj: AudioMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BeardFilterSensitiveLog = (obj: Beard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlackFrameFilterSensitiveLog = (obj: BlackFrame): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoundingBoxFilterSensitiveLog = (obj: BoundingBox): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoversBodyPartFilterSensitiveLog = (obj: CoversBodyPart): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EquipmentDetectionFilterSensitiveLog = (obj: EquipmentDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectiveEquipmentBodyPartFilterSensitiveLog = (obj: ProtectiveEquipmentBodyPart): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmotionFilterSensitiveLog = (obj: Emotion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LandmarkFilterSensitiveLog = (obj: Landmark): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoseFilterSensitiveLog = (obj: Pose): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageQualityFilterSensitiveLog = (obj: ImageQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmileFilterSensitiveLog = (obj: Smile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComparedFaceFilterSensitiveLog = (obj: ComparedFace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KnownGenderFilterSensitiveLog = (obj: KnownGender): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CelebrityFilterSensitiveLog = (obj: Celebrity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EyeglassesFilterSensitiveLog = (obj: Eyeglasses): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EyeOpenFilterSensitiveLog = (obj: EyeOpen): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenderFilterSensitiveLog = (obj: Gender): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MouthOpenFilterSensitiveLog = (obj: MouthOpen): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MustacheFilterSensitiveLog = (obj: Mustache): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SunglassesFilterSensitiveLog = (obj: Sunglasses): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceDetailFilterSensitiveLog = (obj: FaceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CelebrityDetailFilterSensitiveLog = (obj: CelebrityDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CelebrityRecognitionFilterSensitiveLog = (obj: CelebrityRecognition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComparedSourceImageFaceFilterSensitiveLog = (obj: ComparedSourceImageFace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompareFacesRequestFilterSensitiveLog = (obj: CompareFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompareFacesMatchFilterSensitiveLog = (obj: CompareFacesMatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompareFacesResponseFilterSensitiveLog = (obj: CompareFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectedHomeSettingsFilterSensitiveLog = (obj: ConnectedHomeSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectedHomeSettingsForUpdateFilterSensitiveLog = (obj: ConnectedHomeSettingsForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModerationLabelFilterSensitiveLog = (obj: ModerationLabel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentModerationDetectionFilterSensitiveLog = (obj: ContentModerationDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputConfigFilterSensitiveLog = (obj: OutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyProjectVersionRequestFilterSensitiveLog = (obj: CopyProjectVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyProjectVersionResponseFilterSensitiveLog = (obj: CopyProjectVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCollectionRequestFilterSensitiveLog = (obj: CreateCollectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCollectionResponseFilterSensitiveLog = (obj: CreateCollectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSourceFilterSensitiveLog = (obj: DatasetSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestingDataFilterSensitiveLog = (obj: TestingData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingDataFilterSensitiveLog = (obj: TrainingData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectVersionRequestFilterSensitiveLog = (obj: CreateProjectVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectVersionResponseFilterSensitiveLog = (obj: CreateProjectVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorDataSharingPreferenceFilterSensitiveLog = (
  obj: StreamProcessorDataSharingPreference
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisVideoStreamFilterSensitiveLog = (obj: KinesisVideoStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorInputFilterSensitiveLog = (obj: StreamProcessorInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorNotificationChannelFilterSensitiveLog = (obj: StreamProcessorNotificationChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisDataStreamFilterSensitiveLog = (obj: KinesisDataStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationFilterSensitiveLog = (obj: S3Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorOutputFilterSensitiveLog = (obj: StreamProcessorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PointFilterSensitiveLog = (obj: Point): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionOfInterestFilterSensitiveLog = (obj: RegionOfInterest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceSearchSettingsFilterSensitiveLog = (obj: FaceSearchSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorSettingsFilterSensitiveLog = (obj: StreamProcessorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamProcessorRequestFilterSensitiveLog = (obj: CreateStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamProcessorResponseFilterSensitiveLog = (obj: CreateStreamProcessorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeometryFilterSensitiveLog = (obj: Geometry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomLabelFilterSensitiveLog = (obj: CustomLabel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetChangesFilterSensitiveLog = (obj: DatasetChanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetStatsFilterSensitiveLog = (obj: DatasetStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetDescriptionFilterSensitiveLog = (obj: DatasetDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetLabelStatsFilterSensitiveLog = (obj: DatasetLabelStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetLabelDescriptionFilterSensitiveLog = (obj: DatasetLabelDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetMetadataFilterSensitiveLog = (obj: DatasetMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCollectionRequestFilterSensitiveLog = (obj: DeleteCollectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCollectionResponseFilterSensitiveLog = (obj: DeleteCollectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetResponseFilterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFacesRequestFilterSensitiveLog = (obj: DeleteFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFacesResponseFilterSensitiveLog = (obj: DeleteFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectPolicyRequestFilterSensitiveLog = (obj: DeleteProjectPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectPolicyResponseFilterSensitiveLog = (obj: DeleteProjectPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectVersionRequestFilterSensitiveLog = (obj: DeleteProjectVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectVersionResponseFilterSensitiveLog = (obj: DeleteProjectVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamProcessorRequestFilterSensitiveLog = (obj: DeleteStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamProcessorResponseFilterSensitiveLog = (obj: DeleteStreamProcessorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCollectionRequestFilterSensitiveLog = (obj: DescribeCollectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCollectionResponseFilterSensitiveLog = (obj: DescribeCollectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectsRequestFilterSensitiveLog = (obj: DescribeProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDescriptionFilterSensitiveLog = (obj: ProjectDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectsResponseFilterSensitiveLog = (obj: DescribeProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectVersionsRequestFilterSensitiveLog = (obj: DescribeProjectVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SummaryFilterSensitiveLog = (obj: Summary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluationResultFilterSensitiveLog = (obj: EvaluationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationDataFilterSensitiveLog = (obj: ValidationData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestingDataResultFilterSensitiveLog = (obj: TestingDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingDataResultFilterSensitiveLog = (obj: TrainingDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectVersionDescriptionFilterSensitiveLog = (obj: ProjectVersionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectVersionsResponseFilterSensitiveLog = (obj: DescribeProjectVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStreamProcessorRequestFilterSensitiveLog = (obj: DescribeStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStreamProcessorResponseFilterSensitiveLog = (obj: DescribeStreamProcessorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectCustomLabelsRequestFilterSensitiveLog = (obj: DetectCustomLabelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectCustomLabelsResponseFilterSensitiveLog = (obj: DetectCustomLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectFacesRequestFilterSensitiveLog = (obj: DetectFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectFacesResponseFilterSensitiveLog = (obj: DetectFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectionFilterFilterSensitiveLog = (obj: DetectionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneralLabelsSettingsFilterSensitiveLog = (obj: GeneralLabelsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsImagePropertiesSettingsFilterSensitiveLog = (
  obj: DetectLabelsImagePropertiesSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsSettingsFilterSensitiveLog = (obj: DetectLabelsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsRequestFilterSensitiveLog = (obj: DetectLabelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DominantColorFilterSensitiveLog = (obj: DominantColor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsImageQualityFilterSensitiveLog = (obj: DetectLabelsImageQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsImageBackgroundFilterSensitiveLog = (obj: DetectLabelsImageBackground): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsImageForegroundFilterSensitiveLog = (obj: DetectLabelsImageForeground): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsImagePropertiesFilterSensitiveLog = (obj: DetectLabelsImageProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelAliasFilterSensitiveLog = (obj: LabelAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelCategoryFilterSensitiveLog = (obj: LabelCategory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParentFilterSensitiveLog = (obj: Parent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelFilterSensitiveLog = (obj: Label): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectLabelsResponseFilterSensitiveLog = (obj: DetectLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HumanLoopDataAttributesFilterSensitiveLog = (obj: HumanLoopDataAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HumanLoopConfigFilterSensitiveLog = (obj: HumanLoopConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectModerationLabelsRequestFilterSensitiveLog = (obj: DetectModerationLabelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HumanLoopActivationOutputFilterSensitiveLog = (obj: HumanLoopActivationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectModerationLabelsResponseFilterSensitiveLog = (obj: DetectModerationLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectiveEquipmentSummarizationAttributesFilterSensitiveLog = (
  obj: ProtectiveEquipmentSummarizationAttributes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectProtectiveEquipmentRequestFilterSensitiveLog = (obj: DetectProtectiveEquipmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectiveEquipmentPersonFilterSensitiveLog = (obj: ProtectiveEquipmentPerson): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectiveEquipmentSummaryFilterSensitiveLog = (obj: ProtectiveEquipmentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectProtectiveEquipmentResponseFilterSensitiveLog = (obj: DetectProtectiveEquipmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectTextFiltersFilterSensitiveLog = (obj: DetectTextFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectTextRequestFilterSensitiveLog = (obj: DetectTextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextDetectionFilterSensitiveLog = (obj: TextDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectTextResponseFilterSensitiveLog = (obj: DetectTextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributeDatasetFilterSensitiveLog = (obj: DistributeDataset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributeDatasetEntriesRequestFilterSensitiveLog = (obj: DistributeDatasetEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributeDatasetEntriesResponseFilterSensitiveLog = (obj: DistributeDatasetEntriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceFilterSensitiveLog = (obj: Face): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceDetectionFilterSensitiveLog = (obj: FaceDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceMatchFilterSensitiveLog = (obj: FaceMatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaceRecordFilterSensitiveLog = (obj: FaceRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCelebrityInfoRequestFilterSensitiveLog = (obj: GetCelebrityInfoRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCelebrityInfoResponseFilterSensitiveLog = (obj: GetCelebrityInfoResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCelebrityRecognitionRequestFilterSensitiveLog = (obj: GetCelebrityRecognitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoMetadataFilterSensitiveLog = (obj: VideoMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCelebrityRecognitionResponseFilterSensitiveLog = (obj: GetCelebrityRecognitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContentModerationRequestFilterSensitiveLog = (obj: GetContentModerationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContentModerationResponseFilterSensitiveLog = (obj: GetContentModerationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFaceDetectionRequestFilterSensitiveLog = (obj: GetFaceDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFaceDetectionResponseFilterSensitiveLog = (obj: GetFaceDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFaceSearchRequestFilterSensitiveLog = (obj: GetFaceSearchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PersonDetailFilterSensitiveLog = (obj: PersonDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PersonMatchFilterSensitiveLog = (obj: PersonMatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFaceSearchResponseFilterSensitiveLog = (obj: GetFaceSearchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLabelDetectionRequestFilterSensitiveLog = (obj: GetLabelDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelDetectionFilterSensitiveLog = (obj: LabelDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLabelDetectionResponseFilterSensitiveLog = (obj: GetLabelDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPersonTrackingRequestFilterSensitiveLog = (obj: GetPersonTrackingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PersonDetectionFilterSensitiveLog = (obj: PersonDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPersonTrackingResponseFilterSensitiveLog = (obj: GetPersonTrackingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSegmentDetectionRequestFilterSensitiveLog = (obj: GetSegmentDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShotSegmentFilterSensitiveLog = (obj: ShotSegment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TechnicalCueSegmentFilterSensitiveLog = (obj: TechnicalCueSegment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentDetectionFilterSensitiveLog = (obj: SegmentDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentTypeInfoFilterSensitiveLog = (obj: SegmentTypeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSegmentDetectionResponseFilterSensitiveLog = (obj: GetSegmentDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTextDetectionRequestFilterSensitiveLog = (obj: GetTextDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextDetectionResultFilterSensitiveLog = (obj: TextDetectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTextDetectionResponseFilterSensitiveLog = (obj: GetTextDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexFacesRequestFilterSensitiveLog = (obj: IndexFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnindexedFaceFilterSensitiveLog = (obj: UnindexedFace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexFacesResponseFilterSensitiveLog = (obj: IndexFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisVideoStreamStartSelectorFilterSensitiveLog = (obj: KinesisVideoStreamStartSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelDetectionSettingsFilterSensitiveLog = (obj: LabelDetectionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCollectionsRequestFilterSensitiveLog = (obj: ListCollectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCollectionsResponseFilterSensitiveLog = (obj: ListCollectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetEntriesRequestFilterSensitiveLog = (obj: ListDatasetEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetEntriesResponseFilterSensitiveLog = (obj: ListDatasetEntriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetLabelsRequestFilterSensitiveLog = (obj: ListDatasetLabelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetLabelsResponseFilterSensitiveLog = (obj: ListDatasetLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFacesRequestFilterSensitiveLog = (obj: ListFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFacesResponseFilterSensitiveLog = (obj: ListFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectPoliciesRequestFilterSensitiveLog = (obj: ListProjectPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectPolicyFilterSensitiveLog = (obj: ProjectPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectPoliciesResponseFilterSensitiveLog = (obj: ListProjectPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamProcessorsRequestFilterSensitiveLog = (obj: ListStreamProcessorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorFilterSensitiveLog = (obj: StreamProcessor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamProcessorsResponseFilterSensitiveLog = (obj: ListStreamProcessorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationChannelFilterSensitiveLog = (obj: NotificationChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProjectPolicyRequestFilterSensitiveLog = (obj: PutProjectPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProjectPolicyResponseFilterSensitiveLog = (obj: PutProjectPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecognizeCelebritiesRequestFilterSensitiveLog = (obj: RecognizeCelebritiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecognizeCelebritiesResponseFilterSensitiveLog = (obj: RecognizeCelebritiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFacesRequestFilterSensitiveLog = (obj: SearchFacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFacesResponseFilterSensitiveLog = (obj: SearchFacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFacesByImageRequestFilterSensitiveLog = (obj: SearchFacesByImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFacesByImageResponseFilterSensitiveLog = (obj: SearchFacesByImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoFilterSensitiveLog = (obj: Video): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCelebrityRecognitionRequestFilterSensitiveLog = (obj: StartCelebrityRecognitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCelebrityRecognitionResponseFilterSensitiveLog = (obj: StartCelebrityRecognitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContentModerationRequestFilterSensitiveLog = (obj: StartContentModerationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContentModerationResponseFilterSensitiveLog = (obj: StartContentModerationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFaceDetectionRequestFilterSensitiveLog = (obj: StartFaceDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFaceDetectionResponseFilterSensitiveLog = (obj: StartFaceDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFaceSearchRequestFilterSensitiveLog = (obj: StartFaceSearchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFaceSearchResponseFilterSensitiveLog = (obj: StartFaceSearchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartLabelDetectionRequestFilterSensitiveLog = (obj: StartLabelDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartLabelDetectionResponseFilterSensitiveLog = (obj: StartLabelDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPersonTrackingRequestFilterSensitiveLog = (obj: StartPersonTrackingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPersonTrackingResponseFilterSensitiveLog = (obj: StartPersonTrackingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartProjectVersionRequestFilterSensitiveLog = (obj: StartProjectVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartProjectVersionResponseFilterSensitiveLog = (obj: StartProjectVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartShotDetectionFilterFilterSensitiveLog = (obj: StartShotDetectionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTechnicalCueDetectionFilterFilterSensitiveLog = (obj: StartTechnicalCueDetectionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSegmentDetectionFiltersFilterSensitiveLog = (obj: StartSegmentDetectionFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSegmentDetectionRequestFilterSensitiveLog = (obj: StartSegmentDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSegmentDetectionResponseFilterSensitiveLog = (obj: StartSegmentDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessingStartSelectorFilterSensitiveLog = (obj: StreamProcessingStartSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessingStopSelectorFilterSensitiveLog = (obj: StreamProcessingStopSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStreamProcessorRequestFilterSensitiveLog = (obj: StartStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStreamProcessorResponseFilterSensitiveLog = (obj: StartStreamProcessorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTextDetectionFiltersFilterSensitiveLog = (obj: StartTextDetectionFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTextDetectionRequestFilterSensitiveLog = (obj: StartTextDetectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTextDetectionResponseFilterSensitiveLog = (obj: StartTextDetectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopProjectVersionRequestFilterSensitiveLog = (obj: StopProjectVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopProjectVersionResponseFilterSensitiveLog = (obj: StopProjectVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStreamProcessorRequestFilterSensitiveLog = (obj: StopStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStreamProcessorResponseFilterSensitiveLog = (obj: StopStreamProcessorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetEntriesRequestFilterSensitiveLog = (obj: UpdateDatasetEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetEntriesResponseFilterSensitiveLog = (obj: UpdateDatasetEntriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamProcessorSettingsForUpdateFilterSensitiveLog = (obj: StreamProcessorSettingsForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamProcessorRequestFilterSensitiveLog = (obj: UpdateStreamProcessorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamProcessorResponseFilterSensitiveLog = (obj: UpdateStreamProcessorResponse): any => ({
  ...obj,
});
