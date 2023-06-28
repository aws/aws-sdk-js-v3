// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@smithy/smithy-client";

import { RekognitionServiceException as __BaseException } from "./RekognitionServiceException";

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * <p>Provides face metadata for the faces that are associated to a specific UserID.</p>
 */
export interface AssociatedFace {
  /**
   * <p>Unique identifier assigned to the face.</p>
   */
  FaceId?: string;
}

/**
 * @public
 */
export interface AssociateFacesRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>The ID for the existing UserID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>An array of FaceIDs to associate with the UserID.</p>
   */
  FaceIds: string[] | undefined;

  /**
   * <p>An optional value specifying the minimum confidence in the UserID match to return. The
   *       default value is 75.</p>
   */
  UserMatchThreshold?: number;

  /**
   * <p>Idempotent token used to identify the request to <code>AssociateFaces</code>. If you use
   *       the same token with multiple <code>AssociateFaces</code> requests, the same response is returned.
   *       Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulFaceAssociationReason = {
  ASSOCIATED_TO_A_DIFFERENT_USER: "ASSOCIATED_TO_A_DIFFERENT_USER",
  FACE_NOT_FOUND: "FACE_NOT_FOUND",
  LOW_MATCH_CONFIDENCE: "LOW_MATCH_CONFIDENCE",
} as const;

/**
 * @public
 */
export type UnsuccessfulFaceAssociationReason =
  (typeof UnsuccessfulFaceAssociationReason)[keyof typeof UnsuccessfulFaceAssociationReason];

/**
 * @public
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully associated.</p>
 */
export interface UnsuccessfulFaceAssociation {
  /**
   * <p>A unique identifier assigned to the face. </p>
   */
  FaceId?: string;

  /**
   * <p>A provided ID for the UserID. Unique within the collection. </p>
   */
  UserId?: string;

  /**
   * <p>Match confidence with the UserID, provides information regarding if a face association was
   *       unsuccessful because it didn't meet UserMatchThreshold.</p>
   */
  Confidence?: number;

  /**
   * <p> The reason why the association was unsuccessful. </p>
   */
  Reasons?: (UnsuccessfulFaceAssociationReason | string)[];
}

/**
 * @public
 * @enum
 */
export const UserStatus = {
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

/**
 * @public
 */
export interface AssociateFacesResponse {
  /**
   * <p>An array of AssociatedFace objects containing FaceIDs that are successfully associated
   *       with the UserID is returned. Returned if the AssociateFaces action is successful.</p>
   */
  AssociatedFaces?: AssociatedFace[];

  /**
   * <p>An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully
   *       associated along with the reasons. Returned if the AssociateFaces action is successful.</p>
   */
  UnsuccessfulFaceAssociations?: UnsuccessfulFaceAssociation[];

  /**
   * <p>The status of an update made to a UserID. Reflects if the UserID has been updated for
   *       every requested change.</p>
   */
  UserStatus?: UserStatus | string;
}

/**
 * @public
 * <p>
 *       A User with the same Id already exists within the collection, or the update or deletion of the User caused an inconsistent state. **
 *     </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
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
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * @public
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

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
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
 * @public
 * @enum
 */
export const Attribute = {
  AGE_RANGE: "AGE_RANGE",
  ALL: "ALL",
  BEARD: "BEARD",
  DEFAULT: "DEFAULT",
  EMOTIONS: "EMOTIONS",
  EYEGLASSES: "EYEGLASSES",
  EYES_OPEN: "EYES_OPEN",
  EYE_DIRECTION: "EYE_DIRECTION",
  FACE_OCCLUDED: "FACE_OCCLUDED",
  GENDER: "GENDER",
  MOUTH_OPEN: "MOUTH_OPEN",
  MUSTACHE: "MUSTACHE",
  SMILE: "SMILE",
  SUNGLASSES: "SUNGLASSES",
} as const;

/**
 * @public
 */
export type Attribute = (typeof Attribute)[keyof typeof Attribute];

/**
 * @public
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
 * @public
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
 * @public
 * <p>An image that is picked from the Face Liveness video and returned for audit trail purposes, returned as Base64-encoded bytes.</p>
 */
export interface AuditImage {
  /**
   * <p>The Base64-encoded bytes representing an image selected from the Face Liveness video and returned for audit purposes.</p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   */
  S3Object?: S3Object;

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
  BoundingBox?: BoundingBox;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const BodyPart = {
  FACE: "FACE",
  HEAD: "HEAD",
  LEFT_HAND: "LEFT_HAND",
  RIGHT_HAND: "RIGHT_HAND",
} as const;

/**
 * @public
 */
export type BodyPart = (typeof BodyPart)[keyof typeof BodyPart];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ProtectiveEquipmentType = {
  FACE_COVER: "FACE_COVER",
  HAND_COVER: "HAND_COVER",
  HEAD_COVER: "HEAD_COVER",
} as const;

/**
 * @public
 */
export type ProtectiveEquipmentType = (typeof ProtectiveEquipmentType)[keyof typeof ProtectiveEquipmentType];

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const EmotionName = {
  ANGRY: "ANGRY",
  CALM: "CALM",
  CONFUSED: "CONFUSED",
  DISGUSTED: "DISGUSTED",
  FEAR: "FEAR",
  HAPPY: "HAPPY",
  SAD: "SAD",
  SURPRISED: "SURPRISED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type EmotionName = (typeof EmotionName)[keyof typeof EmotionName];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const LandmarkType = {
  chinBottom: "chinBottom",
  eyeLeft: "eyeLeft",
  eyeRight: "eyeRight",
  leftEyeBrowLeft: "leftEyeBrowLeft",
  leftEyeBrowRight: "leftEyeBrowRight",
  leftEyeBrowUp: "leftEyeBrowUp",
  leftEyeDown: "leftEyeDown",
  leftEyeLeft: "leftEyeLeft",
  leftEyeRight: "leftEyeRight",
  leftEyeUp: "leftEyeUp",
  leftPupil: "leftPupil",
  midJawlineLeft: "midJawlineLeft",
  midJawlineRight: "midJawlineRight",
  mouthDown: "mouthDown",
  mouthLeft: "mouthLeft",
  mouthRight: "mouthRight",
  mouthUp: "mouthUp",
  nose: "nose",
  noseLeft: "noseLeft",
  noseRight: "noseRight",
  rightEyeBrowLeft: "rightEyeBrowLeft",
  rightEyeBrowRight: "rightEyeBrowRight",
  rightEyeBrowUp: "rightEyeBrowUp",
  rightEyeDown: "rightEyeDown",
  rightEyeLeft: "rightEyeLeft",
  rightEyeRight: "rightEyeRight",
  rightEyeUp: "rightEyeUp",
  rightPupil: "rightPupil",
  upperJawlineLeft: "upperJawlineLeft",
  upperJawlineRight: "upperJawlineRight",
} as const;

/**
 * @public
 */
export type LandmarkType = (typeof LandmarkType)[keyof typeof LandmarkType];

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const KnownGenderType = {
  Female: "Female",
  Male: "Male",
  Nonbinary: "Nonbinary",
  Unlisted: "Unlisted",
} as const;

/**
 * @public
 */
export type KnownGenderType = (typeof KnownGenderType)[keyof typeof KnownGenderType];

/**
 * @public
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
 * @public
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
 * @public
 * <p>Indicates the direction the eyes are gazing in (independent of the head pose) as determined by its pitch and yaw. </p>
 */
export interface EyeDirection {
  /**
   * <p>Value representing eye direction on the yaw axis.</p>
   */
  Yaw?: number;

  /**
   * <p>Value representing eye direction on the pitch axis.</p>
   */
  Pitch?: number;

  /**
   * <p>The confidence that the service has in its predicted eye direction.</p>
   */
  Confidence?: number;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 * <p>
 *             <code>FaceOccluded</code> should return "true" with a high confidence score if a detected
 *       face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark
 *       sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return
 *       "false" with a high confidence score if common occurrences that do not impact face
 *       verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair,
 *       and others. </p>
 *          <p>You can use <code>FaceOccluded</code> to determine if an obstruction on a face negatively
 *       impacts using the image for face matching.</p>
 */
export interface FaceOccluded {
  /**
   * <p>True if a detected face’s eyes, nose, and mouth are partially captured or if they are
   *       covered by masks, dark sunglasses, cell phones, hands, or other objects. False if common
   *       occurrences that do not impact face verification are detected, such as eye glasses, lightly
   *       tinted sunglasses, strands of hair, and others.</p>
   */
  Value?: boolean;

  /**
   * <p>The confidence that the service has detected the presence of a face occlusion.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * @enum
 */
export const GenderType = {
  Female: "Female",
  Male: "Male",
} as const;

/**
 * @public
 */
export type GenderType = (typeof GenderType)[keyof typeof GenderType];

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

  /**
   * <p>
   *             <code>FaceOccluded</code> should return "true" with a high confidence score if a detected
   *       face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark
   *       sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return
   *       "false" with a high confidence score if common occurrences that do not impact face
   *       verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair,
   *       and others. </p>
   */
  FaceOccluded?: FaceOccluded;

  /**
   * <p>Indicates the direction the eyes are gazing in, as defined by pitch and yaw.</p>
   */
  EyeDirection?: EyeDirection;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const CelebrityRecognitionSortBy = {
  ID: "ID",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type CelebrityRecognitionSortBy = (typeof CelebrityRecognitionSortBy)[keyof typeof CelebrityRecognitionSortBy];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const QualityFilter = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type QualityFilter = (typeof QualityFilter)[keyof typeof QualityFilter];

/**
 * @public
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
 */
export interface Image {
  /**
   * <p>Blob of image bytes up to 5 MBs. Note that the maximum image size you can pass to
   *         <code>DetectCustomLabels</code> is 4MB. </p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Identifies an S3 object as the image source.</p>
   */
  S3Object?: S3Object;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 * @enum
 */
export const OrientationCorrection = {
  ROTATE_0: "ROTATE_0",
  ROTATE_180: "ROTATE_180",
  ROTATE_270: "ROTATE_270",
  ROTATE_90: "ROTATE_90",
} as const;

/**
 * @public
 */
export type OrientationCorrection = (typeof OrientationCorrection)[keyof typeof OrientationCorrection];

/**
 * @public
 */
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;

/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * @enum
 */
export const ContentModerationAggregateBy = {
  SEGMENTS: "SEGMENTS",
  TIMESTAMPS: "TIMESTAMPS",
} as const;

/**
 * @public
 */
export type ContentModerationAggregateBy =
  (typeof ContentModerationAggregateBy)[keyof typeof ContentModerationAggregateBy];

/**
 * @public
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
 * @public
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

  /**
   * <p>The time in milliseconds defining the start of the timeline
   *       segment containing a continuously detected moderation label.</p>
   */
  StartTimestampMillis?: number;

  /**
   * <p> The time in milliseconds defining the end of the
   *       timeline segment containing a continuously detected moderation label. </p>
   */
  EndTimestampMillis?: number;

  /**
   * <p> The time duration of a segment in milliseconds,
   *       I.e. time elapsed from StartTimestampMillis to EndTimestampMillis. </p>
   */
  DurationMillis?: number;
}

/**
 * @public
 * @enum
 */
export const ContentModerationSortBy = {
  NAME: "NAME",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type ContentModerationSortBy = (typeof ContentModerationSortBy)[keyof typeof ContentModerationSortBy];

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface CopyProjectVersionResponse {
  /**
   * <p>The ARN of the copied model version in the destination project. </p>
   */
  ProjectVersionArn?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 */
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

/**
 * @public
 */
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DatasetType = {
  TEST: "TEST",
  TRAIN: "TRAIN",
} as const;

/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 */
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

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>
   * The ARN of the created  Amazon Rekognition Custom Labels dataset.
   * </p>
   */
  DatasetArn?: string;
}

/**
 * @public
 * <p>Contains settings that specify the location of an Amazon S3 bucket used
 *       to store the output of a Face Liveness session. Note that the S3 bucket must be located
 *       in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are
 *       auto-generated by the Face Liveness system. </p>
 */
export interface LivenessOutputConfig {
  /**
   * <p>The path to an AWS Amazon S3 bucket used to store Face Liveness session results.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix prepended to the output files for the Face Liveness session results.</p>
   */
  S3KeyPrefix?: string;
}

/**
 * @public
 * <p>A session settings object. It contains settings for the operation
 *       to be performed. It accepts arguments for OutputConfig and AuditImagesLimit.</p>
 */
export interface CreateFaceLivenessSessionRequestSettings {
  /**
   * <p>Can specify the location of an Amazon S3 bucket, where reference and audit images will be
   *       stored. Note that the Amazon S3 bucket must be located in the caller's AWS account and in the
   *       same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are
   *       auto-generated by the Face Liveness system. Requires that the caller has the
   *         <code>s3:PutObject</code> permission on the Amazon S3 bucket.</p>
   */
  OutputConfig?: LivenessOutputConfig;

  /**
   * <p>Number of audit images to be returned back. Takes an integer between 0-4. Any integer less
   *       than 0 will return 0, any integer above 4 will return 4 images in the response. By default, it
   *       is set to 0. The limit is best effort and is based on the actual duration of the
   *       selfie-video.</p>
   */
  AuditImagesLimit?: number;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionRequest {
  /**
   * <p> The identifier for your AWS Key Management Service key (AWS KMS key).
   *       Used to encrypt audit images and reference images.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A session settings object. It contains settings for the operation to be performed. For
   *       Face Liveness, it accepts <code>OutputConfig</code> and <code>AuditImagesLimit</code>.</p>
   */
  Settings?: CreateFaceLivenessSessionRequestSettings;

  /**
   * <p>Idempotent token is used to recognize the Face Liveness request. If the same token is used
   *       with multiple <code>CreateFaceLivenessSession</code> requests, the same session is returned.
   *       This token is employed to avoid unintentionally creating the same session multiple
   *       times.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionResponse {
  /**
   * <p>A unique 128-bit UUID identifying a Face Liveness session.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of the project to create.</p>
   */
  ProjectName: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new project. You can use the ARN to
   *       configure IAM access to the project. </p>
   */
  ProjectArn?: string;
}

/**
 * @public
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
 * @public
 * <p>The dataset used for training.</p>
 */
export interface TrainingData {
  /**
   * <p>A Sagemaker GroundTruth manifest file that contains the training images (assets).</p>
   */
  Assets?: Asset[];
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface CreateProjectVersionResponse {
  /**
   * <p>The ARN of the model version that was created. Use <code>DescribeProjectVersion</code>
   *          to get the current status of the training operation.</p>
   */
  ProjectVersionArn?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>Information about the source streaming video. </p>
 */
export interface StreamProcessorInput {
  /**
   * <p>The Kinesis video stream input stream for the source streaming video.</p>
   */
  KinesisVideoStream?: KinesisVideoStream;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface CreateStreamProcessorResponse {
  /**
   * <p>Amazon Resource Number for the newly created stream processor.</p>
   */
  StreamProcessorArn?: string;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The ID of an existing collection to which the new UserID needs to be created.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the UserID to be created. This ID needs to be unique within the collection.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>CreateUser</code>. If you use the
   *       same token with multiple <code>CreateUser</code> requests, the same response is returned.
   *       Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const DatasetStatusMessageCode = {
  CLIENT_ERROR: "CLIENT_ERROR",
  SERVICE_ERROR: "SERVICE_ERROR",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DatasetStatusMessageCode = (typeof DatasetStatusMessageCode)[keyof typeof DatasetStatusMessageCode];

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * <p>ID of the collection to delete.</p>
   */
  CollectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * <p>HTTP status code that indicates the result of the operation.</p>
   */
  StatusCode?: number;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>
   * The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete.
   * </p>
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
   * <p>Collection from which to remove the specific faces.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>An array of face IDs to delete.</p>
   */
  FaceIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulFaceDeletionReason = {
  ASSOCIATED_TO_AN_EXISTING_USER: "ASSOCIATED_TO_AN_EXISTING_USER",
  FACE_NOT_FOUND: "FACE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type UnsuccessfulFaceDeletionReason =
  (typeof UnsuccessfulFaceDeletionReason)[keyof typeof UnsuccessfulFaceDeletionReason];

/**
 * @public
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully deleted.</p>
 */
export interface UnsuccessfulFaceDeletion {
  /**
   * <p> A unique identifier assigned to the face.</p>
   */
  FaceId?: string;

  /**
   * <p> A provided ID for the UserID. Unique within the collection. </p>
   */
  UserId?: string;

  /**
   * <p>The reason why the deletion was unsuccessful. </p>
   */
  Reasons?: (UnsuccessfulFaceDeletionReason | string)[];
}

/**
 * @public
 */
export interface DeleteFacesResponse {
  /**
   * <p>An array of strings (face IDs) of the faces that were deleted.</p>
   */
  DeletedFaces?: string[];

  /**
   * <p>An array of any faces that weren't deleted.</p>
   */
  UnsuccessfulFaceDeletions?: UnsuccessfulFaceDeletion[];
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that you want to delete.</p>
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * <p>The current status of the delete project operation.</p>
   */
  Status?: ProjectStatus | string;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface DeleteProjectPolicyResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteProjectVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version that you want to delete.</p>
   */
  ProjectVersionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectVersionStatus = {
  COPYING_COMPLETED: "COPYING_COMPLETED",
  COPYING_FAILED: "COPYING_FAILED",
  COPYING_IN_PROGRESS: "COPYING_IN_PROGRESS",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TRAINING_COMPLETED: "TRAINING_COMPLETED",
  TRAINING_FAILED: "TRAINING_FAILED",
  TRAINING_IN_PROGRESS: "TRAINING_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ProjectVersionStatus = (typeof ProjectVersionStatus)[keyof typeof ProjectVersionStatus];

/**
 * @public
 */
export interface DeleteProjectVersionResponse {
  /**
   * <p>The status of the deletion operation.</p>
   */
  Status?: ProjectVersionStatus | string;
}

/**
 * @public
 */
export interface DeleteStreamProcessorRequest {
  /**
   * <p>The name of the stream processor you want to delete.</p>
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
   * <p>The ID of an existing collection from which the UserID needs to be deleted. </p>
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the UserID to be deleted. </p>
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>DeleteUser</code>. If you use the
   *       same token with multiple <code>DeleteUser </code>requests, the same response is returned.
   *       Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   */
  ClientRequestToken?: string;
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
   * <p>The ID of the collection to describe.</p>
   */
  CollectionId: string | undefined;
}

/**
 * @public
 */
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

  /**
   * <p>The number of UserIDs assigned to the specified colleciton.</p>
   */
  UserCount?: number;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to describe.
   * </p>
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>
   * The description for the dataset.
   * </p>
   */
  DatasetDescription?: DatasetDescription;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface DescribeStreamProcessorRequest {
  /**
   * <p>Name of the stream processor for which you want information.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamProcessorStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type StreamProcessorStatus = (typeof StreamProcessorStatus)[keyof typeof StreamProcessorStatus];

/**
 * @public
 */
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

/**
 * @public
 */
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
   *          <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the
   *       Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and
   *       then call the operation using the S3Object property.</p>
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

/**
 * @public
 */
export interface DetectCustomLabelsResponse {
  /**
   * <p>An array of custom labels detected in the input image.</p>
   */
  CustomLabels?: CustomLabel[];
}

/**
 * @public
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

/**
 * @public
 */
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
   * <p>An array of facial attributes you want to be returned. A <code>DEFAULT</code> subset of
   *       facial attributes - <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
   *         <code>Quality</code>, and <code>Landmarks</code> - will always be returned. You can request
   *       for specific facial attributes (in addition to the default list) - by using [<code>"DEFAULT",
   *         "FACE_OCCLUDED"</code>] or just [<code>"FACE_OCCLUDED"</code>]. You can request for all
   *       facial attributes by using [<code>"ALL"]</code>. Requesting more attributes may increase
   *       response time.</p>
   *          <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical "AND"
   *       operator to determine which attributes to return (in this case, all attributes). </p>
   */
  Attributes?: (Attribute | string)[];
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DetectLabelsFeatureName = {
  GENERAL_LABELS: "GENERAL_LABELS",
  IMAGE_PROPERTIES: "IMAGE_PROPERTIES",
} as const;

/**
 * @public
 */
export type DetectLabelsFeatureName = (typeof DetectLabelsFeatureName)[keyof typeof DetectLabelsFeatureName];

/**
 * @public
 * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
 *       exclusive, or a combination of both and can be applied to individual labels or entire label categories.
 *       To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>.</p>
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
 * @public
 * <p>Settings for the IMAGE_PROPERTIES feature type.</p>
 */
export interface DetectLabelsImagePropertiesSettings {
  /**
   * <p>The maximum number of dominant colors to return when detecting labels in an image. The default value is 10.</p>
   */
  MaxDominantColors?: number;
}

/**
 * @public
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

/**
 * @public
 */
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
   *       a full list of labels and label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting labels</a>.</p>
   */
  Settings?: DetectLabelsSettings;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>A potential alias of for a given label.</p>
 */
export interface LabelAlias {
  /**
   * <p>The name of an alias for a given label.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The category that applies to a given label.</p>
 */
export interface LabelCategory {
  /**
   * <p>The name of a category that applies to a given label.</p>
   */
  Name?: string;
}

/**
 * @public
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
 * @public
 * <p>A parent label for a label. A label can have 0, 1, or more parents. </p>
 */
export interface Parent {
  /**
   * <p>The name of the parent label.</p>
   */
  Name?: string;
}

/**
 * @public
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

/**
 * @public
 */
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
 * @public
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
 * @public
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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
 * @public
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
 * @public
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

/**
 * @public
 */
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
 * @public
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
 * @public
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 * @enum
 */
export const TextTypes = {
  LINE: "LINE",
  WORD: "WORD",
} as const;

/**
 * @public
 */
export type TextTypes = (typeof TextTypes)[keyof typeof TextTypes];

/**
 * @public
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

/**
 * @public
 */
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
 * @public
 * <p>Provides face metadata for the faces that are disassociated from a specific UserID.</p>
 */
export interface DisassociatedFace {
  /**
   * <p>Unique identifier assigned to the face.</p>
   */
  FaceId?: string;
}

/**
 * @public
 */
export interface DisassociateFacesRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the existing UserID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>DisassociateFaces</code>. If you
   *       use the same token with multiple <code>DisassociateFaces</code> requests, the same response is
   *       returned. Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An array of face IDs to disassociate from the UserID. </p>
   */
  FaceIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulFaceDisassociationReason = {
  ASSOCIATED_TO_A_DIFFERENT_USER: "ASSOCIATED_TO_A_DIFFERENT_USER",
  FACE_NOT_FOUND: "FACE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type UnsuccessfulFaceDisassociationReason =
  (typeof UnsuccessfulFaceDisassociationReason)[keyof typeof UnsuccessfulFaceDisassociationReason];

/**
 * @public
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully disassociated.</p>
 */
export interface UnsuccessfulFaceDisassociation {
  /**
   * <p>A unique identifier assigned to the face. </p>
   */
  FaceId?: string;

  /**
   * <p>A provided ID for the UserID. Unique within the collection. </p>
   */
  UserId?: string;

  /**
   * <p>The reason why the deletion was unsuccessful. </p>
   */
  Reasons?: (UnsuccessfulFaceDisassociationReason | string)[];
}

/**
 * @public
 */
export interface DisassociateFacesResponse {
  /**
   * <p>An array of DissociatedFace objects containing FaceIds that are successfully disassociated
   *       with the UserID is returned. Returned if the DisassociatedFaces action is successful.</p>
   */
  DisassociatedFaces?: DisassociatedFace[];

  /**
   * <p>An array of UnsuccessfulDisassociation objects containing FaceIds that are not
   *       successfully associated, along with the reasons for the failure to associate. Returned if the
   *       DisassociateFaces action is successful.</p>
   */
  UnsuccessfulFaceDisassociations?: UnsuccessfulFaceDisassociation[];

  /**
   * <p>The status of an update made to a User. Reflects if the User has been updated for every requested change.</p>
   */
  UserStatus?: UserStatus | string;
}

/**
 * @public
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

/**
 * @public
 */
export interface DistributeDatasetEntriesRequest {
  /**
   * <p>The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to
   *          the same project. The test dataset must be empty.
   *          </p>
   */
  Datasets: DistributeDataset[] | undefined;
}

/**
 * @public
 */
export interface DistributeDatasetEntriesResponse {}

/**
 * @public
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

  /**
   * <p>Unique identifier assigned to the user.</p>
   */
  UserId?: string;
}

/**
 * @public
 * @enum
 */
export const FaceAttributes = {
  ALL: "ALL",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type FaceAttributes = (typeof FaceAttributes)[keyof typeof FaceAttributes];

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const FaceSearchSortBy = {
  INDEX: "INDEX",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type FaceSearchSortBy = (typeof FaceSearchSortBy)[keyof typeof FaceSearchSortBy];

/**
 * @public
 */
export interface GetCelebrityInfoRequest {
  /**
   * <p>The ID for the celebrity. You get the celebrity ID from a call to the <a>RecognizeCelebrities</a> operation, which recognizes celebrities in an image.
   *     </p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 * @enum
 */
export const VideoJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type VideoJobStatus = (typeof VideoJobStatus)[keyof typeof VideoJobStatus];

/**
 * @public
 * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
 *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
 */
export interface Video {
  /**
   * <p>The Amazon S3 bucket name and file name for the video.</p>
   */
  S3Object?: S3Object;
}

/**
 * @public
 * @enum
 */
export const VideoColorRange = {
  FULL: "FULL",
  LIMITED: "LIMITED",
} as const;

/**
 * @public
 */
export type VideoColorRange = (typeof VideoColorRange)[keyof typeof VideoColorRange];

/**
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the celebrity recognition operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartCelebrityRecognition.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartCelebrityRecognition and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 */
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

  /**
   * <p>Defines how to aggregate results of the StartContentModeration request.
   *       Default aggregation option is TIMESTAMPS.
   *       SEGMENTS mode aggregates moderation labels over time.</p>
   */
  AggregateBy?: ContentModerationAggregateBy | string;
}

/**
 * @public
 * <p>Contains metadata about a content moderation request,
 *       including the SortBy and AggregateBy options.</p>
 */
export interface GetContentModerationRequestMetadata {
  /**
   * <p>The sorting method chosen for a GetContentModeration request.</p>
   */
  SortBy?: ContentModerationSortBy | string;

  /**
   * <p>The aggregation method chosen for a GetContentModeration request.</p>
   */
  AggregateBy?: ContentModerationAggregateBy | string;
}

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the content moderation operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartContentModeration.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartContentModeration and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;

  /**
   * <p>Information about the paramters used when getting a response. Includes
   *       information on aggregation and sorting methods.</p>
   */
  GetRequestMetadata?: GetContentModerationRequestMetadata;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the face detection operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartFaceDetection.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartFaceDetection and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 */
export interface GetFaceLivenessSessionResultsRequest {
  /**
   * <p>A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an
   *       idempotency token for all operations associated with the session.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LivenessSessionStatus = {
  CREATED: "CREATED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LivenessSessionStatus = (typeof LivenessSessionStatus)[keyof typeof LivenessSessionStatus];

/**
 * @public
 */
export interface GetFaceLivenessSessionResultsResponse {
  /**
   * <p>The sessionId for which this request was called.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>Represents a status corresponding to the state of the session. Possible statuses are:
   *       CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.</p>
   */
  Status: LivenessSessionStatus | string | undefined;

  /**
   * <p>Probabalistic confidence score for if the person in the given video was live, represented as a
   *       float value between 0 to 100.</p>
   */
  Confidence?: number;

  /**
   * <p>A high-quality image from the Face Liveness video that can be used for face comparison or
   *       search. It includes a bounding box of the face and the Base64-encoded bytes that return an
   *       image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image
   *       will be uploaded to an S3Object specified in the output configuration. In case the reference
   *       image is not returned, it's recommended to retry the Liveness check.</p>
   */
  ReferenceImage?: AuditImage;

  /**
   * <p>A set of images from the Face Liveness video that can be used for audit purposes. It
   *       includes a bounding box of the face and the Base64-encoded bytes that return an image. If the
   *       CreateFaceLivenessSession request included an OutputConfig argument, the image will be
   *       uploaded to an S3Object specified in the output configuration.</p>
   */
  AuditImages?: AuditImage[];
}

/**
 * @public
 * <p>Occurs when a given sessionId is not found.</p>
 */
export class SessionNotFoundException extends __BaseException {
  readonly name: "SessionNotFoundException" = "SessionNotFoundException";
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
  constructor(opts: __ExceptionOptionType<SessionNotFoundException, __BaseException>) {
    super({
      name: "SessionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * @public
 */
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
 * @public
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
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the face search operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartFaceSearch.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartFaceSearch and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 * @enum
 */
export const LabelDetectionAggregateBy = {
  SEGMENTS: "SEGMENTS",
  TIMESTAMPS: "TIMESTAMPS",
} as const;

/**
 * @public
 */
export type LabelDetectionAggregateBy = (typeof LabelDetectionAggregateBy)[keyof typeof LabelDetectionAggregateBy];

/**
 * @public
 * @enum
 */
export const LabelDetectionSortBy = {
  NAME: "NAME",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type LabelDetectionSortBy = (typeof LabelDetectionSortBy)[keyof typeof LabelDetectionSortBy];

/**
 * @public
 */
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
 * @public
 * <p>Contains metadata about a label detection request,
 *       including the SortBy and AggregateBy options.</p>
 */
export interface GetLabelDetectionRequestMetadata {
  /**
   * <p>The sorting method chosen for a GetLabelDetection request.</p>
   */
  SortBy?: LabelDetectionSortBy | string;

  /**
   * <p>The aggregation method chosen for a GetLabelDetection request.</p>
   */
  AggregateBy?: LabelDetectionAggregateBy | string;
}

/**
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the label detection operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartLabelDetection.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartLabelDetection and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;

  /**
   * <p>Information about the paramters used when getting a response. Includes
   *       information on aggregation and sorting methods.</p>
   */
  GetRequestMetadata?: GetLabelDetectionRequestMetadata;
}

/**
 * @public
 * @enum
 */
export const PersonTrackingSortBy = {
  INDEX: "INDEX",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type PersonTrackingSortBy = (typeof PersonTrackingSortBy)[keyof typeof PersonTrackingSortBy];

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the person tracking operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartPersonTracking.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartCelebrityRecognition and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 * @enum
 */
export const TechnicalCueType = {
  BLACK_FRAMES: "BlackFrames",
  COLOR_BARS: "ColorBars",
  CONTENT: "Content",
  END_CREDITS: "EndCredits",
  OPENING_CREDITS: "OpeningCredits",
  SLATE: "Slate",
  STUDIO_LOGO: "StudioLogo",
} as const;

/**
 * @public
 */
export type TechnicalCueType = (typeof TechnicalCueType)[keyof typeof TechnicalCueType];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const SegmentType = {
  SHOT: "SHOT",
  TECHNICAL_CUE: "TECHNICAL_CUE",
} as const;

/**
 * @public
 */
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType];

/**
 * @public
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
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the segment detection operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartSegmentDetection.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartSegmentDetection and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Job identifier for the text detection operation for which you
   *       want to obtain results. The job identifer is returned by an initial call
   *       to StartTextDetection.</p>
   */
  JobId?: string;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   */
  Video?: Video;

  /**
   * <p>A job identifier specified in the call to StartTextDetection and
   *       returned in the job completion notification sent to your
   *       Amazon Simple Notification Service topic.</p>
   */
  JobTag?: string;
}

/**
 * @public
 */
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
   * <p>An array of facial attributes you want to be returned. A <code>DEFAULT</code> subset of
   *       facial attributes - <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
   *         <code>Quality</code>, and <code>Landmarks</code> - will always be returned. You can request
   *       for specific facial attributes (in addition to the default list) - by using <code>["DEFAULT",
   *         "FACE_OCCLUDED"]</code> or just <code>["FACE_OCCLUDED"]</code>. You can request for all
   *       facial attributes by using <code>["ALL"]</code>. Requesting more attributes may increase
   *       response time.</p>
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

/**
 * @public
 * @enum
 */
export const Reason = {
  EXCEEDS_MAX_FACES: "EXCEEDS_MAX_FACES",
  EXTREME_POSE: "EXTREME_POSE",
  LOW_BRIGHTNESS: "LOW_BRIGHTNESS",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  LOW_FACE_QUALITY: "LOW_FACE_QUALITY",
  LOW_SHARPNESS: "LOW_SHARPNESS",
  SMALL_BOUNDING_BOX: "SMALL_BOUNDING_BOX",
} as const;

/**
 * @public
 */
export type Reason = (typeof Reason)[keyof typeof Reason];

/**
 * @public
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 * @enum
 */
export const LabelDetectionFeatureName = {
  GENERAL_LABELS: "GENERAL_LABELS",
} as const;

/**
 * @public
 */
export type LabelDetectionFeatureName = (typeof LabelDetectionFeatureName)[keyof typeof LabelDetectionFeatureName];

/**
 * @public
 * <p>Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.</p>
 */
export interface LabelDetectionSettings {
  /**
   * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
   *       exclusive, or a combination of both and can be applied to individual labels or entire label categories.
   *       To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>.</p>
   */
  GeneralLabels?: GeneralLabelsSettings;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

  /**
   * <p>An array of user IDs to match when listing faces in a collection.</p>
   */
  UserId?: string;

  /**
   * <p>An array of face IDs to match when listing faces in a collection.</p>
   */
  FaceIds?: string[];
}

/**
 * @public
 */
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that contains
   *       the tags that you want a list of. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of key-value tags assigned to the resource. </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The ID of an existing collection.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>Maximum number of UsersID to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>Pagingation token to receive the next set of UsersID.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Metadata of the user stored in a collection.</p>
 */
export interface User {
  /**
   * <p> A provided ID for the User. Unique within the collection.</p>
   */
  UserId?: string;

  /**
   * <p> Communicates if the UserID has been updated with latest set of faces to be associated
   *       with the UserID. </p>
   */
  UserStatus?: UserStatus | string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>List of UsersID associated with the specified collection.</p>
   */
  Users?: User[];

  /**
   * <p>A pagination token to be used with the subsequent request if the response is truncated.</p>
   */
  NextToken?: string;
}

/**
 * @public
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
 * @public
 * <p>Contains metadata for a UserID matched with a given face.</p>
 */
export interface MatchedUser {
  /**
   * <p>A provided ID for the UserID. Unique within the collection.</p>
   */
  UserId?: string;

  /**
   * <p>The status of the user matched to a provided FaceID.</p>
   */
  UserStatus?: UserStatus | string;
}

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface PutProjectPolicyResponse {
  /**
   * <p>The ID of the project policy.</p>
   */
  PolicyRevisionId?: string;
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a
   *       FaceId is provided, UserId isn’t required to be present in the Collection.</p>
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the existing User.</p>
   */
  UserId?: string;

  /**
   * <p>ID for the existing face.</p>
   */
  FaceId?: string;

  /**
   * <p>Optional value that specifies the minimum confidence in the matched UserID to return.
   *       Default value of 80.</p>
   */
  UserMatchThreshold?: number;

  /**
   * <p>Maximum number of identities to return.</p>
   */
  MaxUsers?: number;
}

/**
 * @public
 * <p>Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for search.</p>
 */
export interface SearchedFace {
  /**
   * <p> Unique identifier assigned to the face.</p>
   */
  FaceId?: string;
}

/**
 * @public
 * <p>Contains metadata about a User searched for within a collection.</p>
 */
export interface SearchedUser {
  /**
   * <p> A provided ID for the UserID. Unique within the collection. </p>
   */
  UserId?: string;
}

/**
 * @public
 * <p>Provides UserID metadata along with the confidence in the match of this UserID with the
 *       input face.</p>
 */
export interface UserMatch {
  /**
   * <p> Describes the UserID metadata.</p>
   */
  Similarity?: number;

  /**
   * <p> Confidence in the match of this UserID with the input face. </p>
   */
  User?: MatchedUser;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * <p>An array of UserMatch objects that matched the input face along with the confidence in
   *       the match. Array will be empty if there are no matches.</p>
   */
  UserMatches?: UserMatch[];

  /**
   * <p>Version number of the face detection model associated with the input
   *       CollectionId.</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>Contains the ID of a face that was used to search for matches in a collection.</p>
   */
  SearchedFace?: SearchedFace;

  /**
   * <p>Contains the ID of the UserID that was used to search for matches in a collection.</p>
   */
  SearchedUser?: SearchedUser;
}

/**
 * @public
 */
export interface SearchUsersByImageRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
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
   */
  Image: Image | undefined;

  /**
   * <p>Specifies the minimum confidence in the UserID match to return. Default value is
   *       80.</p>
   */
  UserMatchThreshold?: number;

  /**
   * <p>Maximum number of UserIDs to return.</p>
   */
  MaxUsers?: number;

  /**
   * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
   *       Filtered faces aren't searched for in the collection. The default value is NONE.</p>
   */
  QualityFilter?: QualityFilter | string;
}

/**
 * @public
 * <p>Contains data regarding the input face used for a search.</p>
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
   */
  FaceDetail?: FaceDetail;
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
 * @public
 * <p>Face details inferred from the image but not used for search. The response attribute
 *       contains reasons for why a face wasn't used for Search. </p>
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
   */
  FaceDetails?: FaceDetail;

  /**
   * <p> Reasons why a face wasn't used for Search. </p>
   */
  Reasons?: (UnsearchedFaceReason | string)[];
}

/**
 * @public
 */
export interface SearchUsersByImageResponse {
  /**
   * <p>An array of UserID objects that matched the input face, along with the confidence in the
   *       match. The returned structure will be empty if there are no matches. Returned if the
   *       SearchUsersByImageResponse action is successful.</p>
   */
  UserMatches?: UserMatch[];

  /**
   * <p>Version number of the face detection model associated with the input collection
   *       CollectionId.</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>A list of FaceDetail objects containing the BoundingBox for the largest face in image,
   *       as well as the confidence in the bounding box, that was searched for matches. If no valid
   *       face is detected in the image the response will contain no SearchedFace object.</p>
   */
  SearchedFace?: SearchedFaceDetails;

  /**
   * <p>List of UnsearchedFace objects. Contains the face details infered from the specified
   *       image but not used for search. Contains reasons that describe why a face wasn't used for
   *       Search. </p>
   */
  UnsearchedFaces?: UnsearchedFace[];
}

/**
 * @public
 */
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

/**
 * @internal
 */
export const AuditImageFilterSensitiveLog = (obj: AuditImage): any => ({
  ...obj,
  ...(obj.Bytes && { Bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFaceLivenessSessionResultsResponseFilterSensitiveLog = (
  obj: GetFaceLivenessSessionResultsResponse
): any => ({
  ...obj,
  ...(obj.ReferenceImage && { ReferenceImage: AuditImageFilterSensitiveLog(obj.ReferenceImage) }),
  ...(obj.AuditImages && { AuditImages: obj.AuditImages.map((item) => AuditImageFilterSensitiveLog(item)) }),
});
