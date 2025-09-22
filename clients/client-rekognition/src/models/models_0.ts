// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { RekognitionServiceException as __BaseException } from "./RekognitionServiceException";

/**
 * <p>You are not authorized to perform the action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
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
 * @public
 */
export interface AgeRange {
  /**
   * <p>The lowest estimated age.</p>
   * @public
   */
  Low?: number | undefined;

  /**
   * <p>The highest estimated age.</p>
   * @public
   */
  High?: number | undefined;
}

/**
 * <p>Provides the S3 bucket name and object name.</p>
 *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
 *       Amazon Rekognition operations.</p>
 *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
 *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
 *       Amazon Rekognition Developer Guide. </p>
 * @public
 */
export interface S3Object {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>S3 object key name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If the bucket is versioning enabled, you can specify the object version. </p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
 * </p>
 * @public
 */
export interface GroundTruthManifest {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * <p>Assets are the images that you use to train and evaluate a model version.
 *          Assets can also contain validation information that you use to debug a failed model training.
 *          </p>
 * @public
 */
export interface Asset {
  /**
   * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   * </p>
   * @public
   */
  GroundTruthManifest?: GroundTruthManifest | undefined;
}

/**
 * <p>Provides face metadata for the faces that are associated to a specific UserID.</p>
 * @public
 */
export interface AssociatedFace {
  /**
   * <p>Unique identifier assigned to the face.</p>
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFacesRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>The ID for the existing UserID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>An array of FaceIDs to associate with the UserID.</p>
   * @public
   */
  FaceIds: string[] | undefined;

  /**
   * <p>An optional value specifying the minimum confidence in the UserID match to return. The
   *       default value is 75.</p>
   * @public
   */
  UserMatchThreshold?: number | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>AssociateFaces</code>. If you use
   *       the same token with multiple <code>AssociateFaces</code> requests, the same response is
   *       returned. Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully
 *       associated.</p>
 * @public
 */
export interface UnsuccessfulFaceAssociation {
  /**
   * <p>A unique identifier assigned to the face. </p>
   * @public
   */
  FaceId?: string | undefined;

  /**
   * <p>A provided ID for the UserID. Unique within the collection. </p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>Match confidence with the UserID, provides information regarding if a face association was
   *       unsuccessful because it didn't meet UserMatchThreshold.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p> The reason why the association was unsuccessful. </p>
   * @public
   */
  Reasons?: UnsuccessfulFaceAssociationReason[] | undefined;
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
   * <p>An array of AssociatedFace objects containing FaceIDs that have been successfully associated
   *       with the UserID. Returned if the AssociateFaces action is successful.</p>
   * @public
   */
  AssociatedFaces?: AssociatedFace[] | undefined;

  /**
   * <p>An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully
   *       associated along with the reasons. Returned if the AssociateFaces action is successful.</p>
   * @public
   */
  UnsuccessfulFaceAssociations?: UnsuccessfulFaceAssociation[] | undefined;

  /**
   * <p>The status of an update made to a UserID. Reflects if the UserID has been updated for
   *       every requested change.</p>
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * <p> A User with the same Id already exists within the collection, or the update or deletion
 *       of the User caused an inconsistent state. ** </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
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
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
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
 * <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
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
 * <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
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
 * <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException" = "ProvisionedThroughputExceededException";
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
 * <p>The resource specified in the request cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
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
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
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
 * <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "server" = "server";
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
 * <p>Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects
 *       for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. </p>
 * @public
 */
export interface AudioMetadata {
  /**
   * <p>The audio codec used to encode or decode the audio stream. </p>
   * @public
   */
  Codec?: string | undefined;

  /**
   * <p>The duration of the audio stream in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The sample rate for the audio stream.</p>
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * <p>The number of audio channels in the segment.</p>
   * @public
   */
  NumberOfChannels?: number | undefined;
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
 * @public
 */
export interface BoundingBox {
  /**
   * <p>Width of the bounding box as a ratio of the overall image width.</p>
   * @public
   */
  Width?: number | undefined;

  /**
   * <p>Height of the bounding box as a ratio of the overall image height.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Left coordinate of the bounding box as a ratio of overall image width.</p>
   * @public
   */
  Left?: number | undefined;

  /**
   * <p>Top coordinate of the bounding box as a ratio of overall image height.</p>
   * @public
   */
  Top?: number | undefined;
}

/**
 * <p>An image that is picked from the Face Liveness video and returned for audit trail
 *       purposes, returned as Base64-encoded bytes.</p>
 * @public
 */
export interface AuditImage {
  /**
   * <p>The Base64-encoded bytes representing an image selected from the Face Liveness video and
   *       returned for audit purposes.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object?: S3Object | undefined;

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
   * @public
   */
  BoundingBox?: BoundingBox | undefined;
}

/**
 * <p>Indicates whether or not the face has a beard, and the confidence level in the
 *       determination.</p>
 * @public
 */
export interface Beard {
  /**
   * <p>Boolean value that indicates whether the face has beard or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>
 *       A filter that allows you to control the black frame detection by specifying the black levels
 *       and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats,
 *       and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for.
 *       For more information, see <a>StartSegmentDetection</a>.
 *     </p>
 * @public
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
   * @public
   */
  MaxPixelThreshold?: number | undefined;

  /**
   * <p>
   *       The minimum percentage of pixels in a frame that need to have a luminance below the max_black_pixel_value for a frame to be considered
   *       a black frame. Luminance is calculated using the BT.709 matrix.
   *     </p>
   *          <p>The default value is 99, which means at least 99% of all pixels in the frame are black pixels as per the <code>MaxPixelThreshold</code>
   *       set. You can reduce this value to allow more noise on the black frame.</p>
   * @public
   */
  MinCoveragePercentage?: number | undefined;
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
 * <p>Information about an item of Personal Protective Equipment covering a corresponding body part. For more
 *          information, see <a>DetectProtectiveEquipment</a>.</p>
 * @public
 */
export interface CoversBodyPart {
  /**
   * <p>The confidence that Amazon Rekognition has in the value of <code>Value</code>.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>True if the PPE covers the corresponding body part, otherwise false.</p>
   * @public
   */
  Value?: boolean | undefined;
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
 * <p>Information about an item of Personal Protective Equipment (PPE) detected by
 *          <a>DetectProtectiveEquipment</a>. For more
 *          information, see <a>DetectProtectiveEquipment</a>.</p>
 * @public
 */
export interface EquipmentDetection {
  /**
   * <p>A bounding box surrounding the item of detected PPE.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>The confidence that Amazon Rekognition has that the bounding box (<code>BoundingBox</code>) contains an item of PPE.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The type of detected PPE.</p>
   * @public
   */
  Type?: ProtectiveEquipmentType | undefined;

  /**
   * <p>Information about the body part covered by the detected PPE.</p>
   * @public
   */
  CoversBodyPart?: CoversBodyPart | undefined;
}

/**
 * <p>Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE.
 *          An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by
 *          <code>DetectProtectiveEquipment</code>. </p>
 * @public
 */
export interface ProtectiveEquipmentBodyPart {
  /**
   * <p>The detected body part.</p>
   * @public
   */
  Name?: BodyPart | undefined;

  /**
   * <p>The confidence that Amazon Rekognition has in the detection accuracy of the detected body part.
   *       </p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>An array of Personal Protective Equipment items detected around a body part.</p>
   * @public
   */
  EquipmentDetections?: EquipmentDetection[] | undefined;
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
 * <p>The API returns a prediction of an emotion based on a person's facial expressions, along with
 *       the confidence level for the predicted emotion. It is not a determination of the person’s internal emotional
 *       state and should not be used in such a way. For example, a person pretending to have a sad face might not
 *       be sad emotionally. The API is not intended to be used, and you may not use it, in a manner that violates
 *       the EU Artificial Intelligence Act or any other applicable law.</p>
 * @public
 */
export interface Emotion {
  /**
   * <p>Type of emotion detected.</p>
   * @public
   */
  Type?: EmotionName | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
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
 * <p>Indicates the location of the landmark on the face.</p>
 * @public
 */
export interface Landmark {
  /**
   * <p>Type of landmark.</p>
   * @public
   */
  Type?: LandmarkType | undefined;

  /**
   * <p>The x-coordinate of the landmark expressed as a ratio of the width of the image. The
   *       x-coordinate is measured from the left-side of the image. For example, if the image is 700
   *       pixels wide and the x-coordinate of the landmark is at 350 pixels, this value is 0.5.
   *     </p>
   * @public
   */
  X?: number | undefined;

  /**
   * <p>The y-coordinate of the landmark expressed as a ratio of the height of the image. The
   *       y-coordinate is measured from the top of the image. For example, if the image height is 200
   *       pixels and the y-coordinate of the landmark is at 50 pixels, this value is 0.25.</p>
   * @public
   */
  Y?: number | undefined;
}

/**
 * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
 * @public
 */
export interface Pose {
  /**
   * <p>Value representing the face rotation on the roll axis.</p>
   * @public
   */
  Roll?: number | undefined;

  /**
   * <p>Value representing the face rotation on the yaw axis.</p>
   * @public
   */
  Yaw?: number | undefined;

  /**
   * <p>Value representing the face rotation on the pitch axis.</p>
   * @public
   */
  Pitch?: number | undefined;
}

/**
 * <p>Identifies face image brightness and sharpness. </p>
 * @public
 */
export interface ImageQuality {
  /**
   * <p>Value representing brightness of the face. The service returns a value between 0 and
   *       100 (inclusive). A higher value indicates a brighter face image.</p>
   * @public
   */
  Brightness?: number | undefined;

  /**
   * <p>Value representing sharpness of the face. The service returns a value between 0 and 100
   *       (inclusive). A higher value indicates a sharper face image.</p>
   * @public
   */
  Sharpness?: number | undefined;
}

/**
 * <p>Indicates whether or not the face is smiling, and the confidence level in the
 *       determination.</p>
 * @public
 */
export interface Smile {
  /**
   * <p>Boolean value that indicates whether the face is smiling or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Provides face metadata for target image faces that are analyzed by
 *         <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.</p>
 * @public
 */
export interface ComparedFace {
  /**
   * <p>Bounding box of the face.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Level of confidence that what the bounding box contains is a face.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>An array of facial landmarks.</p>
   * @public
   */
  Landmarks?: Landmark[] | undefined;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
   * @public
   */
  Pose?: Pose | undefined;

  /**
   * <p>Identifies face image brightness and sharpness. </p>
   * @public
   */
  Quality?: ImageQuality | undefined;

  /**
   * <p> The emotions that appear to be expressed on the face, and the confidence level in the
   *       determination. Valid values include "Happy", "Sad", "Angry", "Confused", "Disgusted",
   *       "Surprised", "Calm", "Unknown", and "Fear". </p>
   * @public
   */
  Emotions?: Emotion[] | undefined;

  /**
   * <p> Indicates whether or not the face is smiling, and the confidence level in the
   *       determination. </p>
   * @public
   */
  Smile?: Smile | undefined;
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
 * <p>The known gender identity for the celebrity that matches the provided ID. The known
 *       gender identity can be Male, Female, Nonbinary, or Unlisted.</p>
 * @public
 */
export interface KnownGender {
  /**
   * <p>A string value of the KnownGender info about the Celebrity.</p>
   * @public
   */
  Type?: KnownGenderType | undefined;
}

/**
 * <p>Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.</p>
 * @public
 */
export interface Celebrity {
  /**
   * <p>An array of URLs pointing to additional information about the celebrity. If there is no
   *       additional information about the celebrity, this list is empty.</p>
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * <p>The name of the celebrity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A unique identifier for the celebrity. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Provides information about the celebrity's face, such as its location on the
   *       image.</p>
   * @public
   */
  Face?: ComparedFace | undefined;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the
   *       celebrity.</p>
   * @public
   */
  MatchConfidence?: number | undefined;

  /**
   * <p>The known gender identity for the celebrity that matches the provided ID. The known
   *       gender identity can be Male, Female, Nonbinary, or Unlisted.</p>
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * <p>Indicates the direction the eyes are gazing in (independent of the head pose) as
 *       determined by its pitch and yaw. </p>
 * @public
 */
export interface EyeDirection {
  /**
   * <p>Value representing eye direction on the yaw axis.</p>
   * @public
   */
  Yaw?: number | undefined;

  /**
   * <p>Value representing eye direction on the pitch axis.</p>
   * @public
   */
  Pitch?: number | undefined;

  /**
   * <p>The confidence that the service has in its predicted eye direction.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
 *       the determination.</p>
 * @public
 */
export interface Eyeglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing eye glasses or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
 *       determination.</p>
 * @public
 */
export interface EyeOpen {
  /**
   * <p>Boolean value that indicates whether the eyes on the face are open.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>
 *             <code>FaceOccluded</code> should return "true" with a high confidence score if a detected
 *       face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark
 *       sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return
 *       "false" with a high confidence score if common occurrences that do not impact face
 *       verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair,
 *       and others. </p>
 *          <p>You can use <code>FaceOccluded</code> to determine if an obstruction on a face negatively
 *       impacts using the image for face matching.</p>
 * @public
 */
export interface FaceOccluded {
  /**
   * <p>True if a detected face’s eyes, nose, and mouth are partially captured or if they are
   *       covered by masks, dark sunglasses, cell phones, hands, or other objects. False if common
   *       occurrences that do not impact face verification are detected, such as eye glasses, lightly
   *       tinted sunglasses, strands of hair, and others.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>The confidence that the service has detected the presence of a face occlusion.</p>
   * @public
   */
  Confidence?: number | undefined;
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
 * @public
 */
export interface Gender {
  /**
   * <p>The predicted gender of the face.</p>
   * @public
   */
  Value?: GenderType | undefined;

  /**
   * <p>Level of confidence in the prediction.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
 *       determination.</p>
 * @public
 */
export interface MouthOpen {
  /**
   * <p>Boolean value that indicates whether the mouth on the face is open or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Indicates whether or not the face has a mustache, and the confidence level in the
 *       determination.</p>
 * @public
 */
export interface Mustache {
  /**
   * <p>Boolean value that indicates whether the face has mustache or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
 *       the determination.</p>
 * @public
 */
export interface Sunglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing sunglasses or not.</p>
   * @public
   */
  Value?: boolean | undefined;

  /**
   * <p>Level of confidence in the determination.</p>
   * @public
   */
  Confidence?: number | undefined;
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
 * @public
 */
export interface FaceDetail {
  /**
   * <p>Bounding box of the face. Default attribute.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>The estimated age range, in years, for the face. Low represents the lowest estimated
   *       age and High represents the highest estimated age.</p>
   * @public
   */
  AgeRange?: AgeRange | undefined;

  /**
   * <p>Indicates whether or not the face is smiling, and the confidence level in the
   *       determination.</p>
   * @public
   */
  Smile?: Smile | undefined;

  /**
   * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
   *       the determination.</p>
   * @public
   */
  Eyeglasses?: Eyeglasses | undefined;

  /**
   * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
   *       the determination.</p>
   * @public
   */
  Sunglasses?: Sunglasses | undefined;

  /**
   * <p>The predicted gender of a detected face. </p>
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>Indicates whether or not the face has a beard, and the confidence level in the
   *       determination.</p>
   * @public
   */
  Beard?: Beard | undefined;

  /**
   * <p>Indicates whether or not the face has a mustache, and the confidence level in the
   *       determination.</p>
   * @public
   */
  Mustache?: Mustache | undefined;

  /**
   * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
   *       determination.</p>
   * @public
   */
  EyesOpen?: EyeOpen | undefined;

  /**
   * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
   *       determination.</p>
   * @public
   */
  MouthOpen?: MouthOpen | undefined;

  /**
   * <p>The emotions that appear to be expressed on the face, and the confidence level in the
   *       determination. The API is only making a determination of the physical appearance of a person's
   *       face. It is not a determination of the person’s internal emotional state and should not be
   *       used in such a way. For example, a person pretending to have a sad face might not be sad
   *       emotionally.</p>
   * @public
   */
  Emotions?: Emotion[] | undefined;

  /**
   * <p>Indicates the location of landmarks on the face. Default attribute.</p>
   * @public
   */
  Landmarks?: Landmark[] | undefined;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw. Default
   *       attribute.</p>
   * @public
   */
  Pose?: Pose | undefined;

  /**
   * <p>Identifies image brightness and sharpness. Default attribute.</p>
   * @public
   */
  Quality?: ImageQuality | undefined;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such
   *       as a tree). Default attribute.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>
   *             <code>FaceOccluded</code> should return "true" with a high confidence score if a detected
   *       face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark
   *       sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return
   *       "false" with a high confidence score if common occurrences that do not impact face
   *       verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair,
   *       and others. </p>
   * @public
   */
  FaceOccluded?: FaceOccluded | undefined;

  /**
   * <p>Indicates the direction the eyes are gazing in, as defined by pitch and yaw.</p>
   * @public
   */
  EyeDirection?: EyeDirection | undefined;
}

/**
 * <p>Information about a recognized celebrity.</p>
 * @public
 */
export interface CelebrityDetail {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * <p>The name of the celebrity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier for the celebrity. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity. </p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>Bounding box around the body of a celebrity.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Face details for the recognized celebrity.</p>
   * @public
   */
  Face?: FaceDetail | undefined;

  /**
   * <p>Retrieves the known gender for the celebrity.</p>
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * <p>Information about a detected celebrity and the time the celebrity was detected in a stored video.
 *         For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.</p>
 * @public
 */
export interface CelebrityRecognition {
  /**
   * <p>The time, in milliseconds from the start of the video, that the celebrity was recognized.
   *          Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the celebrity first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>Information about a recognized celebrity.</p>
   * @public
   */
  Celebrity?: CelebrityDetail | undefined;
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
 * @enum
 */
export const ChallengeType = {
  FACE_MOVEMENT_AND_LIGHT_CHALLENGE: "FaceMovementAndLightChallenge",
  FACE_MOVEMENT_CHALLENGE: "FaceMovementChallenge",
} as const;

/**
 * @public
 */
export type ChallengeType = (typeof ChallengeType)[keyof typeof ChallengeType];

/**
 * <p>Describes the type and version of the challenge being used for the Face Liveness session.</p>
 * @public
 */
export interface Challenge {
  /**
   * <p>The type of the challenge being used for the Face Liveness session.</p>
   * @public
   */
  Type: ChallengeType | undefined;

  /**
   * <p>The version of the challenge being used for the Face Liveness session.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * <p>Object specifying the acceptable range of challenge versions.</p>
 * @public
 */
export interface Versions {
  /**
   * <p>The desired minimum version for the challenge.</p>
   * @public
   */
  Minimum?: string | undefined;

  /**
   * <p>The desired maximum version for the challenge.</p>
   * @public
   */
  Maximum?: string | undefined;
}

/**
 * <p>An ordered list of preferred challenge type and versions.</p>
 * @public
 */
export interface ChallengePreference {
  /**
   * <p>The types of challenges that have been selected for the Face Liveness session.</p>
   * @public
   */
  Type: ChallengeType | undefined;

  /**
   * <p>The version of the challenges that have been selected for the Face Liveness session.</p>
   * @public
   */
  Versions?: Versions | undefined;
}

/**
 * <p>Type that describes the face Amazon Rekognition chose to compare with the faces in the target.
 *       This contains a bounding box for the selected face and confidence level that the bounding box
 *       contains a face. Note that Amazon Rekognition selects the largest face in the source image for this
 *       comparison. </p>
 * @public
 */
export interface ComparedSourceImageFace {
  /**
   * <p>Bounding box of the face.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Confidence level that the selected bounding box contains a face.</p>
   * @public
   */
  Confidence?: number | undefined;
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
export interface Image {
  /**
   * <p>Blob of image bytes up to 5 MBs. Note that the maximum image size you can
   *       pass to <code>DetectCustomLabels</code> is 4MB. </p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Identifies an S3 object as the image source.</p>
   * @public
   */
  S3Object?: S3Object | undefined;
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
   * @public
   */
  SourceImage: Image | undefined;

  /**
   * <p>The target image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   * @public
   */
  TargetImage: Image | undefined;

  /**
   * <p>The minimum level of confidence in the face matches that a match must meet to be
   *       included in the <code>FaceMatches</code> array.</p>
   * @public
   */
  SimilarityThreshold?: number | undefined;

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
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
}

/**
 * <p>Provides information about a face in a target image that matches the source image face
 *       analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding
 *       box of the face in the target image. The <code>Similarity</code> property is the confidence
 *       that the source image face matches the face in the bounding box.</p>
 * @public
 */
export interface CompareFacesMatch {
  /**
   * <p>Level of confidence that the faces match.</p>
   * @public
   */
  Similarity?: number | undefined;

  /**
   * <p>Provides face metadata (bounding box and confidence that the bounding box actually
   *       contains a face).</p>
   * @public
   */
  Face?: ComparedFace | undefined;
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
   * @public
   */
  SourceImageFace?: ComparedSourceImageFace | undefined;

  /**
   * <p>An array of faces in the target image that match the source image face. Each
   *         <code>CompareFacesMatch</code> object provides the bounding box, the confidence level that
   *       the bounding box contains a face, and the similarity score for the face in the bounding box
   *       and the face in the source image.</p>
   * @public
   */
  FaceMatches?: CompareFacesMatch[] | undefined;

  /**
   * <p>An array of faces in the target image that did not match the source image
   *       face.</p>
   * @public
   */
  UnmatchedFaces?: ComparedFace[] | undefined;

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
   * @public
   */
  SourceImageOrientationCorrection?: OrientationCorrection | undefined;

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
   * @public
   */
  TargetImageOrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 * @public
 */
export class ImageTooLargeException extends __BaseException {
  readonly name: "ImageTooLargeException" = "ImageTooLargeException";
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
 * <p>The provided image format is not supported. </p>
 * @public
 */
export class InvalidImageFormatException extends __BaseException {
  readonly name: "InvalidImageFormatException" = "InvalidImageFormatException";
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
 * <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 * @public
 */
export class InvalidS3ObjectException extends __BaseException {
  readonly name: "InvalidS3ObjectException" = "InvalidS3ObjectException";
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
 * <p>
 *             Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.
 *             Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection.
 *             You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification
 *             is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected
 *             and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
 *         </p>
 * @public
 */
export interface ConnectedHomeSettings {
  /**
   * <p>
   *             Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *         </p>
   * @public
   */
  Labels: string[] | undefined;

  /**
   * <p>
   *             The minimum confidence required to label an object in the video.
   *         </p>
   * @public
   */
  MinConfidence?: number | undefined;
}

/**
 * <p>
 *             The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.
 *         </p>
 * @public
 */
export interface ConnectedHomeSettingsForUpdate {
  /**
   * <p>
   *             Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *         </p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>
   *             The minimum confidence required to label an object in the video.
   *         </p>
   * @public
   */
  MinConfidence?: number | undefined;
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
 * <p>Contains information regarding the confidence and name of a detected content type.</p>
 * @public
 */
export interface ContentType {
  /**
   * <p>The confidence level of the label given</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The name of the label</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Provides information about a single type of inappropriate, unwanted, or
 *       offensive content found in an image or video. Each type of moderated content has a label
 *       within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition
 *       Developer Guide.</p>
 * @public
 */
export interface ModerationLabel {
  /**
   * <p>Specifies the confidence that Amazon Rekognition has that the label has been correctly
   *       identified.</p>
   *          <p>If you don't specify the <code>MinConfidence</code> parameter in the call to
   *         <code>DetectModerationLabels</code>, the operation returns labels with a confidence value
   *       greater than or equal to 50 percent.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The label name for the type of unsafe content detected in the image.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name for the parent label. Labels at the top level of the hierarchy have the parent
   *       label <code>""</code>.</p>
   * @public
   */
  ParentName?: string | undefined;

  /**
   * <p>The level of the moderation label with regard to its taxonomy, from 1 to 3.</p>
   * @public
   */
  TaxonomyLevel?: number | undefined;
}

/**
 * <p>Information about an inappropriate, unwanted, or offensive content label detection in a stored video.</p>
 * @public
 */
export interface ContentModerationDetection {
  /**
   * <p>Time, in milliseconds from the beginning of the video, that the content moderation label was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the moderated content first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>The content moderation label detected by in the stored video.</p>
   * @public
   */
  ModerationLabel?: ModerationLabel | undefined;

  /**
   * <p>The time in milliseconds defining the start of the timeline segment containing a
   *       continuously detected moderation label.</p>
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * <p> The time in milliseconds defining the end of the timeline segment containing a
   *       continuously detected moderation label. </p>
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * <p> The time duration of a segment in milliseconds, I.e. time elapsed from
   *       StartTimestampMillis to EndTimestampMillis. </p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>A list of predicted results for the type of content an image contains. For example,
   *       the image content might be from animation, sports, or a video game.</p>
   * @public
   */
  ContentTypes?: ContentType[] | undefined;
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
 * <p>The S3 bucket and folder location where training output is placed.</p>
 * @public
 */
export interface OutputConfig {
  /**
   * <p>The S3 bucket where training output is placed.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The prefix applied to the training output files. </p>
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CopyProjectVersionRequest {
  /**
   * <p>The ARN of the source project in the trusting AWS account.</p>
   * @public
   */
  SourceProjectArn: string | undefined;

  /**
   * <p>The ARN of the model version in the source project that you want to copy to a destination project.</p>
   * @public
   */
  SourceProjectVersionArn: string | undefined;

  /**
   * <p>The ARN of the project in the trusted AWS account that you want to copy the model version to. </p>
   * @public
   */
  DestinationProjectArn: string | undefined;

  /**
   * <p>A name for the version of the model that's copied to the destination project.</p>
   * @public
   */
  VersionName: string | undefined;

  /**
   * <p>The S3 bucket and folder location where the training output for the source model version is placed.</p>
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The key-value tags to assign to the model version. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CopyProjectVersionResponse {
  /**
   * <p>The ARN of the copied model version in the destination project. </p>
   * @public
   */
  ProjectVersionArn?: string | undefined;
}

/**
 * <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
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
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
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
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the collection. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCollectionResponse {
  /**
   * <p>HTTP status code indicating the result of the operation.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on
   *       your resources. </p>
   * @public
   */
  CollectionArn?: string | undefined;

  /**
   * <p>Version number of the face detection model associated with the collection you are
   *       creating.</p>
   * @public
   */
  FaceModelVersion?: string | undefined;
}

/**
 * <p>A resource with the specified ID already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
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
 * @public
 */
export interface DatasetSource {
  /**
   * <p>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
   * </p>
   * @public
   */
  GroundTruthManifest?: GroundTruthManifest | undefined;

  /**
   * <p>
   * The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy.
   * </p>
   * @public
   */
  DatasetArn?: string | undefined;
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
   * @public
   */
  DatasetSource?: DatasetSource | undefined;

  /**
   * <p>
   * The type of the dataset. Specify <code>TRAIN</code> to create a training dataset. Specify <code>TEST</code>
   *    to create a test dataset.
   * </p>
   * @public
   */
  DatasetType: DatasetType | undefined;

  /**
   * <p>
   * The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset.
   * </p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>A set of tags (key-value pairs) that you want to attach to the dataset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>
   * The ARN of the created  Amazon Rekognition Custom Labels dataset.
   * </p>
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * <p>Contains settings that specify the location of an Amazon S3 bucket used to store the output of
 *       a Face Liveness session. Note that the S3 bucket must be located in the caller's AWS account
 *       and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are
 *       auto-generated by the Face Liveness system. </p>
 * @public
 */
export interface LivenessOutputConfig {
  /**
   * <p>The path to an AWS Amazon S3 bucket used to store Face Liveness session results.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix prepended to the output files for the Face Liveness session results.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * <p>A session settings object. It contains settings for the operation to be performed. It
 *       accepts arguments for OutputConfig and AuditImagesLimit.</p>
 * @public
 */
export interface CreateFaceLivenessSessionRequestSettings {
  /**
   * <p>Can specify the location of an Amazon S3 bucket, where reference and audit images will be
   *       stored. Note that the Amazon S3 bucket must be located in the caller's AWS account and in the
   *       same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are
   *       auto-generated by the Face Liveness system. Requires that the caller has the
   *         <code>s3:PutObject</code> permission on the Amazon S3 bucket.</p>
   * @public
   */
  OutputConfig?: LivenessOutputConfig | undefined;

  /**
   * <p>Number of audit images to be returned back. Takes an integer between 0-4. Any integer less
   *       than 0 will return 0, any integer above 4 will return 4 images in the response. By default, it
   *       is set to 0. The limit is best effort and is based on the actual duration of the
   *       selfie-video.</p>
   * @public
   */
  AuditImagesLimit?: number | undefined;

  /**
   * <p>Indicates preferred challenge types and versions for the Face Liveness session to be created.</p>
   * @public
   */
  ChallengePreferences?: ChallengePreference[] | undefined;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionRequest {
  /**
   * <p> The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt
   *       audit images and reference images.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A session settings object. It contains settings for the operation to be performed. For
   *       Face Liveness, it accepts <code>OutputConfig</code> and <code>AuditImagesLimit</code>.</p>
   * @public
   */
  Settings?: CreateFaceLivenessSessionRequestSettings | undefined;

  /**
   * <p>Idempotent token is used to recognize the Face Liveness request. If the same token is used
   *       with multiple <code>CreateFaceLivenessSession</code> requests, the same session is returned.
   *       This token is employed to avoid unintentionally creating the same session multiple
   *       times.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateFaceLivenessSessionResponse {
  /**
   * <p>A unique 128-bit UUID identifying a Face Liveness session.
   *       A new sessionID must be used for every Face Liveness check. If a given sessionID is used for subsequent
   *       Face Liveness checks, the checks will fail. Additionally, a SessionId expires 3 minutes after it's sent,
   *       making all Liveness data associated with the session (e.g., sessionID, reference image, audit images, etc.) unavailable.
   *     </p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectAutoUpdate = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ProjectAutoUpdate = (typeof ProjectAutoUpdate)[keyof typeof ProjectAutoUpdate];

/**
 * @public
 * @enum
 */
export const CustomizationFeature = {
  CONTENT_MODERATION: "CONTENT_MODERATION",
  CUSTOM_LABELS: "CUSTOM_LABELS",
} as const;

/**
 * @public
 */
export type CustomizationFeature = (typeof CustomizationFeature)[keyof typeof CustomizationFeature];

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of the project to create.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default.</p>
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * <p>Specifies whether automatic retraining should be attempted for the versions of the
   *          project. Automatic retraining is done as a best effort. Required argument for Content
   *          Moderation. Applicable only to adapters.</p>
   * @public
   */
  AutoUpdate?: ProjectAutoUpdate | undefined;

  /**
   * <p>A set of tags (key-value pairs) that you want to attach to the project.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new project. You can use the ARN to
   *       configure IAM access to the project. </p>
   * @public
   */
  ProjectArn?: string | undefined;
}

/**
 * <p>Configuration options for Content Moderation training.</p>
 * @public
 */
export interface CustomizationFeatureContentModerationConfig {
  /**
   * <p>The confidence level you plan to use to identify if unsafe content is present during inference.</p>
   * @public
   */
  ConfidenceThreshold?: number | undefined;
}

/**
 * <p>Feature specific configuration for the training job. Configuration provided for the job must match
 *          the feature type parameter associated with project. If configuration
 *          and feature type do not match an InvalidParameterException is returned.</p>
 * @public
 */
export interface CustomizationFeatureConfig {
  /**
   * <p>Configuration options for Custom Moderation training.</p>
   * @public
   */
  ContentModeration?: CustomizationFeatureContentModerationConfig | undefined;
}

/**
 * <p>The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition uses the
 *          training dataset to create a test dataset with a temporary split of the training dataset. </p>
 * @public
 */
export interface TestingData {
  /**
   * <p>The assets used for testing.</p>
   * @public
   */
  Assets?: Asset[] | undefined;

  /**
   * <p>If specified, Rekognition splits training dataset to create a test dataset for
   *          the training job.</p>
   * @public
   */
  AutoCreate?: boolean | undefined;
}

/**
 * <p>The dataset used for training.</p>
 * @public
 */
export interface TrainingData {
  /**
   * <p>A manifest file that contains references to the training images and ground-truth
   *          annotations.</p>
   * @public
   */
  Assets?: Asset[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectVersionRequest {
  /**
   * <p>The ARN of the Amazon Rekognition project that will manage the project version you want to
   *          train.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>A name for the version of the project version. This value must be unique.</p>
   * @public
   */
  VersionName: string | undefined;

  /**
   * <p>The Amazon S3 bucket location to store the results of training. The bucket can be any S3
   *          bucket in your AWS account. You need <code>s3:PutObject</code> permission on the bucket.
   *       </p>
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>Specifies an external manifest that the services uses to train the project version.
   *          If you specify <code>TrainingData</code> you must also specify <code>TestingData</code>.
   *          The project must not have any associated datasets. </p>
   * @public
   */
  TrainingData?: TrainingData | undefined;

  /**
   * <p>Specifies an external manifest that the service uses to test the project version. If
   *          you specify <code>TestingData</code> you must also specify <code>TrainingData</code>. The
   *          project must not have any associated datasets.</p>
   * @public
   */
  TestingData?: TestingData | undefined;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the project version. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key). You can supply
   *          the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for
   *          your KMS key, or an alias ARN. The key is used to encrypt training images, test images, and manifest files copied
   *          into the service for the project version. Your source images are unaffected. The
   *          key is also used to encrypt training results and manifest files written to the output Amazon S3
   *          bucket (<code>OutputConfig</code>).</p>
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A description applied to the project version being created.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Feature-specific configuration of the training job. If the job configuration does not match the feature type associated with the project, an InvalidParameterException is returned.</p>
   * @public
   */
  FeatureConfig?: CustomizationFeatureConfig | undefined;
}

/**
 * @public
 */
export interface CreateProjectVersionResponse {
  /**
   * <p>The ARN of the model or the project version that was created. Use
   *             <code>DescribeProjectVersion</code> to get the current status of the training
   *          operation.</p>
   * @public
   */
  ProjectVersionArn?: string | undefined;
}

/**
 * <p>
 *             Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
 *                 Note that if you opt out at the account level this setting is ignored on individual streams.
 *
 *         </p>
 * @public
 */
export interface StreamProcessorDataSharingPreference {
  /**
   * <p>
   *             If this option is set to true, you choose to share data with Rekognition to improve model performance.
   *         </p>
   * @public
   */
  OptIn: boolean | undefined;
}

/**
 * <p>Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 * @public
 */
export interface KinesisVideoStream {
  /**
   * <p>ARN of the Kinesis video stream stream that streams the source video.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about the source streaming video. </p>
 * @public
 */
export interface StreamProcessorInput {
  /**
   * <p>The Kinesis video stream input stream for the source streaming video.</p>
   * @public
   */
  KinesisVideoStream?: KinesisVideoStream | undefined;
}

/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
 *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
 *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
 *             one for a person at second 2 and one for a pet at second 4.</p>
 *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
 * @public
 */
export interface StreamProcessorNotificationChannel {
  /**
   * <p>
   *             The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
   *         </p>
   * @public
   */
  SNSTopicArn: string | undefined;
}

/**
 * <p>The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 * @public
 */
export interface KinesisDataStream {
  /**
   * <p>ARN of the output Amazon Kinesis Data Streams stream.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>
 *             The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation.
 *             These results include the name of the stream processor resource, the session ID of the stream processing session,
 *             and labeled timestamps and bounding boxes for detected labels.
 *         </p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>
   *             The name of the Amazon S3 bucket you want to associate with the streaming video project. You must be the owner of the Amazon S3 bucket.
   *         </p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>
   *             The prefix value of the location within the bucket that you want the information to be published to.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Using prefixes</a>.
   *         </p>
   * @public
   */
  KeyPrefix?: string | undefined;
}

/**
 * <p>Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more
 *            information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 * @public
 */
export interface StreamProcessorOutput {
  /**
   * <p>The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.</p>
   * @public
   */
  KinesisDataStream?: KinesisDataStream | undefined;

  /**
   * <p>
   *             The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation.
   *         </p>
   * @public
   */
  S3Destination?: S3Destination | undefined;
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
 * @public
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   * @public
   */
  X?: number | undefined;

  /**
   * <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
   * @public
   */
  Y?: number | undefined;
}

/**
 * <p>Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a <code>BoundingBox</code>
 *       or <code>Polygon</code> to set a region of the screen.</p>
 *          <p>A word, face, or label is included in the region if it is more than half in that region. If there is more than
 *       one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region
 *       is kept in the results.</p>
 * @public
 */
export interface RegionOfInterest {
  /**
   * <p>The box representing a region of interest on screen.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>
   *             Specifies a shape made up of up to 10 <code>Point</code> objects to define a region of interest.
   *         </p>
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * <p>Input face recognition parameters for an Amazon Rekognition stream processor.
 *             Includes the collection to use for face recognition and the face attributes to detect.
 *             Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.</p>
 * @public
 */
export interface FaceSearchSettings {
  /**
   * <p>The ID of a collection that contains faces that you want to search for.</p>
   * @public
   */
  CollectionId?: string | undefined;

  /**
   * <p>Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80.
   *         0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower than 80 are set to 80.</p>
   * @public
   */
  FaceMatchThreshold?: number | undefined;
}

/**
 * <p>Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor.
 *             You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels. </p>
 * @public
 */
export interface StreamProcessorSettings {
  /**
   * <p>Face search settings to use on a streaming video. </p>
   * @public
   */
  FaceSearch?: FaceSearchSettings | undefined;

  /**
   * <p>
   *             Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.
   *             Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection.
   *             You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification
   *             is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected
   *             and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.
   *         </p>
   * @public
   */
  ConnectedHome?: ConnectedHomeSettings | undefined;
}

/**
 * @public
 */
export interface CreateStreamProcessorRequest {
  /**
   * <p>Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is <code>StreamProcessorInput</code>. This is required for both face search and label detection stream processors.</p>
   * @public
   */
  Input: StreamProcessorInput | undefined;

  /**
   * <p>Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is <code>StreamProcessorOutput</code>.
   *             This must be a <a>S3Destination</a> of an Amazon S3 bucket that you own for a label detection stream processor or a Kinesis data stream ARN for a face search stream processor.</p>
   * @public
   */
  Output: StreamProcessorOutput | undefined;

  /**
   * <p>An identifier you assign to the stream processor. You can use <code>Name</code> to
   *             manage the stream processor. For example, you can get the current status of the stream processor by calling <a>DescribeStreamProcessor</a>.
   *             <code>Name</code> is idempotent. This is required for both face search and label detection stream processors.
   *        </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.</p>
   * @public
   */
  Settings: StreamProcessorSettings | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
   *             The IAM role provides Rekognition read permissions for a Kinesis stream.
   *             It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p> A set of tags (key-value pairs) that you want to attach to the stream processor. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
   *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
   *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
   *             one for a person at second 2 and one for a pet at second 4.</p>
   *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
   * @public
   */
  NotificationChannel?: StreamProcessorNotificationChannel | undefined;

  /**
   * <p>
   *             The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
   *             You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.
   *             The key is used to encrypt results and data published to your Amazon S3 bucket, which includes  image frames and hero images. Your source images are unaffected.
   *         </p>
   *          <p>
   *             </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
   *         </p>
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   * @public
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference | undefined;
}

/**
 * @public
 */
export interface CreateStreamProcessorResponse {
  /**
   * <p>Amazon Resource Number for the newly created stream processor.</p>
   * @public
   */
  StreamProcessorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The ID of an existing collection to which the new UserID needs to be created.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the UserID to be created. This ID needs to be unique within the collection.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>CreateUser</code>. If you use the
   *       same token with multiple <code>CreateUser</code> requests, the same response is returned. Use
   *       ClientRequestToken to prevent the same request from being processed more than once.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * <p>Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.</p>
 * @public
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the detected item's location on the
   *       image.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the detected item.</p>
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * <p>A custom label detected in an image by a call to <a>DetectCustomLabels</a>.</p>
 * @public
 */
export interface CustomLabel {
  /**
   * <p>The name of the custom label.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The confidence that the model has in the detection of the custom label. The
   *       range is 0-100. A higher value indicates a higher confidence.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The location of the detected object on the image that corresponds to the custom label.
   *          Includes an axis aligned coarse bounding box surrounding the object and a finer grain polygon
   *          for more accurate spatial information.</p>
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * <p>
 * Describes updates or additions to a dataset. A Single update or addition
 * is an entry (JSON Line) that provides information about a single image. To update an existing entry,
 * you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update.
 *  If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry. </p>
 * @public
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
   * @public
   */
  GroundTruth: Uint8Array | undefined;
}

/**
 * <p>
 * Provides statistics about a dataset. For more information, see <a>DescribeDataset</a>.
 *
 * </p>
 * @public
 */
export interface DatasetStats {
  /**
   * <p>
   * The total number of images in the dataset that have labels.
   * </p>
   * @public
   */
  LabeledEntries?: number | undefined;

  /**
   * <p>
   * The total number of images in the dataset.
   * </p>
   * @public
   */
  TotalEntries?: number | undefined;

  /**
   * <p>
   * The total number of labels declared in the dataset.
   * </p>
   * @public
   */
  TotalLabels?: number | undefined;

  /**
   * <p>
   *          The total number of entries that contain at least one error.
   *       </p>
   * @public
   */
  ErrorEntries?: number | undefined;
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
 * <p>
 * A description for a dataset. For more information, see <a>DescribeDataset</a>.</p>
 *          <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code>
 * reflect the last operation on the dataset.
 * </p>
 * @public
 */
export interface DatasetDescription {
  /**
   * <p>
   * The Unix timestamp for the time and date that the dataset was created.
   * </p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>
   *    The Unix timestamp for the date and time that the dataset was last updated.
   * </p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The status of the dataset.
   * </p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>
   *    The status message for the dataset.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   *    The status message code for the dataset operation. If a service error occurs, try the
   *    API call again later. If a client error occurs, check the input parameters to the dataset
   *    API call that failed.
   * </p>
   * @public
   */
  StatusMessageCode?: DatasetStatusMessageCode | undefined;

  /**
   * <p>
   * The status message code for the dataset.
   * </p>
   * @public
   */
  DatasetStats?: DatasetStats | undefined;
}

/**
 * <p>
 *    Statistics about a label used in a dataset. For more information, see <a>DatasetLabelDescription</a>.
 * </p>
 * @public
 */
export interface DatasetLabelStats {
  /**
   * <p>
   * The total number of images that use the label.
   * </p>
   * @public
   */
  EntryCount?: number | undefined;

  /**
   * <p>
   * The total number of images that have the label assigned to a bounding box.
   * </p>
   * @public
   */
  BoundingBoxCount?: number | undefined;
}

/**
 * <p>
 * Describes a dataset label. For more information, see <a>ListDatasetLabels</a>.
 * </p>
 * @public
 */
export interface DatasetLabelDescription {
  /**
   * <p>
   * The name of the label.
   * </p>
   * @public
   */
  LabelName?: string | undefined;

  /**
   * <p>
   * Statistics about the label.
   * </p>
   * @public
   */
  LabelStats?: DatasetLabelStats | undefined;
}

/**
 * <p>
 *    Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see
 *    <a>ProjectDescription</a>.
 * </p>
 * @public
 */
export interface DatasetMetadata {
  /**
   * <p>
   *    The Unix timestamp for the date and time that the dataset was created.
   * </p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>
   *    The type of the dataset.
   * </p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>
   * The Amazon Resource Name (ARN) for the dataset.
   * </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>
   *    The status for the dataset.
   * </p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>
   *    The status message for the dataset.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   *    The status message code for the dataset operation. If a service error occurs, try the
   *    API call again later. If a client error occurs, check the input parameters to the dataset
   *    API call that failed.
   * </p>
   * @public
   */
  StatusMessageCode?: DatasetStatusMessageCode | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * <p>ID of the collection to delete.</p>
   * @public
   */
  CollectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * <p>HTTP status code that indicates the result of the operation.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>
   * The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete.
   * </p>
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
   * <p>Collection from which to remove the specific faces.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>An array of face IDs to delete.</p>
   * @public
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
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully
 *       deleted.</p>
 * @public
 */
export interface UnsuccessfulFaceDeletion {
  /**
   * <p> A unique identifier assigned to the face.</p>
   * @public
   */
  FaceId?: string | undefined;

  /**
   * <p> A provided ID for the UserID. Unique within the collection. </p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The reason why the deletion was unsuccessful. </p>
   * @public
   */
  Reasons?: UnsuccessfulFaceDeletionReason[] | undefined;
}

/**
 * @public
 */
export interface DeleteFacesResponse {
  /**
   * <p>An array of strings (face IDs) of the faces that were deleted.</p>
   * @public
   */
  DeletedFaces?: string[] | undefined;

  /**
   * <p>An array of any faces that weren't deleted.</p>
   * @public
   */
  UnsuccessfulFaceDeletions?: UnsuccessfulFaceDeletion[] | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that you want to delete.</p>
   * @public
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
   * @public
   */
  Status?: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the policy that you want to delete.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The ID of the project policy revision that you want to delete.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectPolicyResponse {}

/**
 * <p>The supplied revision id for the project policy is invalid.</p>
 * @public
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
  readonly name: "InvalidPolicyRevisionIdException" = "InvalidPolicyRevisionIdException";
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
   * <p>The Amazon Resource Name (ARN) of the project version that you want to
   *          delete.</p>
   * @public
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
  DEPRECATED: "DEPRECATED",
  EXPIRED: "EXPIRED",
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
   * @public
   */
  Status?: ProjectVersionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteStreamProcessorRequest {
  /**
   * <p>The name of the stream processor you want to delete.</p>
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
   * <p>The ID of an existing collection from which the UserID needs to be deleted. </p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the UserID to be deleted. </p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>DeleteUser</code>. If you use the
   *       same token with multiple <code>DeleteUser </code>requests, the same response is returned. Use
   *       ClientRequestToken to prevent the same request from being processed more than once.</p>
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
   * <p>The ID of the collection to describe.</p>
   * @public
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
   * @public
   */
  FaceCount?: number | undefined;

  /**
   * <p>The version of the face model that's used by the collection for face detection.</p>
   *          <p>For more information, see Model versioning in the
   *      Amazon Rekognition Developer Guide.</p>
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   * @public
   */
  CollectionARN?: string | undefined;

  /**
   * <p>The number of milliseconds since the Unix epoch time until the creation of the collection.
   *          The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The number of UserIDs assigned to the specified colleciton.</p>
   * @public
   */
  UserCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to describe.
   * </p>
   * @public
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
   * @public
   */
  DatasetDescription?: DatasetDescription | undefined;
}

/**
 * @public
 */
export interface DescribeProjectsRequest {
  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Rekognition returns a pagination token in the response. You can use this pagination
   *          token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *          If you specify a value greater than 100, a ValidationException
   *          error occurs. The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A list of the projects that you want Rekognition to describe. If you don't specify a value,
   *       the response includes descriptions for all the projects in your AWS account.</p>
   * @public
   */
  ProjectNames?: string[] | undefined;

  /**
   * <p>Specifies the type of customization to filter projects by. If no value is specified,
   *          CUSTOM_LABELS is used as a default.</p>
   * @public
   */
  Features?: CustomizationFeature[] | undefined;
}

/**
 * <p>A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>.</p>
 * @public
 */
export interface ProjectDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn?: string | undefined;

  /**
   * <p>The Unix timestamp for the date and time that the project was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The current status of the project.</p>
   * @public
   */
  Status?: ProjectStatus | undefined;

  /**
   * <p>
   *          Information about the training and test datasets in the project.
   *       </p>
   * @public
   */
  Datasets?: DatasetMetadata[] | undefined;

  /**
   * <p>Specifies the project that is being customized.</p>
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * <p>Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to adapters. </p>
   * @public
   */
  AutoUpdate?: ProjectAutoUpdate | undefined;
}

/**
 * @public
 */
export interface DescribeProjectsResponse {
  /**
   * <p>A list of project descriptions. The list is sorted by the date and time the projects are created.</p>
   * @public
   */
  ProjectDescriptions?: ProjectDescription[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Amazon Rekognition returns a pagination token in the response.
   *          You can use this pagination token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Pagination token in the request is not valid.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
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
   * <p>The Amazon Resource Name (ARN) of the project that contains the model/adapter you want
   *          to describe.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>A list of model or project version names that you want to describe. You can add
   *          up to 10 model or project version names to the list. If you don't specify a value, all
   *          project version descriptions are returned. A version name is part of a project version ARN. For example, <code>my-model.2020-01-21T09.10.15</code> is
   *          the version name in the following ARN.
   *                <code>arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/<i>my-model.2020-01-21T09.10.15</i>/1234567890123</code>.</p>
   * @public
   */
  VersionNames?: string[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *            results to retrieve), Amazon Rekognition returns a pagination token in the response.
   *            You can use this pagination token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call.
   *           The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException
   *           error occurs. The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The S3 bucket that contains the training summary. The training summary includes
 *          aggregated evaluation metrics for the entire testing dataset and metrics for each
 *          individual label.  </p>
 *          <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>.
 *          </p>
 * @public
 */
export interface Summary {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * <p>The evaluation results for the training of a model.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision
   *          and recall performance of the model as a single value. A higher value indicates better precision
   *          and recall performance. A lower score indicates that precision, recall, or both are performing poorly.
   *
   *   </p>
   * @public
   */
  F1Score?: number | undefined;

  /**
   * <p>The S3 bucket that contains the training summary.</p>
   * @public
   */
  Summary?: Summary | undefined;
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
 * @public
 */
export interface ValidationData {
  /**
   * <p>The assets that comprise the validation data. </p>
   * @public
   */
  Assets?: Asset[] | undefined;
}

/**
 * <p>Sagemaker Groundtruth format manifest files for the input, output and validation
 *          datasets that are used and created during testing.</p>
 * @public
 */
export interface TestingDataResult {
  /**
   * <p>The testing dataset that was supplied for training.</p>
   * @public
   */
  Input?: TestingData | undefined;

  /**
   * <p>The subset of the dataset that was actually tested. Some images (assets) might not be tested due to
   *          file formatting and other issues. </p>
   * @public
   */
  Output?: TestingData | undefined;

  /**
   * <p>The location of the data validation manifest. The data validation manifest is created for the test dataset during model training.</p>
   * @public
   */
  Validation?: ValidationData | undefined;
}

/**
 * <p>The data
 *          validation manifest created for the training dataset during model training.</p>
 * @public
 */
export interface TrainingDataResult {
  /**
   * <p>The training data that you supplied.</p>
   * @public
   */
  Input?: TrainingData | undefined;

  /**
   * <p>Reference to images (assets) that were actually used during training with trained model
   *          predictions.</p>
   * @public
   */
  Output?: TrainingData | undefined;

  /**
   * <p>A manifest that you supplied for training, with validation results for each
   *          line.</p>
   * @public
   */
  Validation?: ValidationData | undefined;
}

/**
 * <p>A description of a version of a Amazon Rekognition project version.</p>
 * @public
 */
export interface ProjectVersionDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the project version. </p>
   * @public
   */
  ProjectVersionArn?: string | undefined;

  /**
   * <p>The Unix datetime for the date and time that training started.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The minimum number of inference units used by the model. Applies only to Custom Labels
   *          projects. For more information, see <a>StartProjectVersion</a>.</p>
   * @public
   */
  MinInferenceUnits?: number | undefined;

  /**
   * <p>The current status of the model version.</p>
   * @public
   */
  Status?: ProjectVersionStatus | undefined;

  /**
   * <p>A descriptive message for an error or warning that occurred.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The duration, in seconds, that you were billed for a successful training of the model version.
   *       This value is only returned if the model version has been successfully trained.</p>
   * @public
   */
  BillableTrainingTimeInSeconds?: number | undefined;

  /**
   * <p>The Unix date and time that training of the model ended.</p>
   * @public
   */
  TrainingEndTimestamp?: Date | undefined;

  /**
   * <p>The location where training results are saved.</p>
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>Contains information about the training results.</p>
   * @public
   */
  TrainingDataResult?: TrainingDataResult | undefined;

  /**
   * <p>Contains information about the testing results.</p>
   * @public
   */
  TestingDataResult?: TestingDataResult | undefined;

  /**
   * <p>The training results. <code>EvaluationResult</code> is only returned if training is successful.</p>
   * @public
   */
  EvaluationResult?: EvaluationResult | undefined;

  /**
   * <p>The location of the summary manifest. The summary manifest provides aggregate data validation results for the training
   *          and test datasets.</p>
   * @public
   */
  ManifestSummary?: GroundTruthManifest | undefined;

  /**
   * <p>The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training. </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies
   *          only to Custom Labels projects. For more information, see <a>StartProjectVersion</a>.</p>
   * @public
   */
  MaxInferenceUnits?: number | undefined;

  /**
   * <p>If the model version was copied from a different project, <code>SourceProjectVersionArn</code> contains the ARN of the source model version. </p>
   * @public
   */
  SourceProjectVersionArn?: string | undefined;

  /**
   * <p>A user-provided description of the project version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The feature that was customized.</p>
   * @public
   */
  Feature?: CustomizationFeature | undefined;

  /**
   * <p>The base detection model version used to create the project version.</p>
   * @public
   */
  BaseModelVersion?: string | undefined;

  /**
   * <p>Feature specific configuration that was applied during training.</p>
   * @public
   */
  FeatureConfig?: CustomizationFeatureConfig | undefined;
}

/**
 * @public
 */
export interface DescribeProjectVersionsResponse {
  /**
   * <p>A list of project version descriptions. The list is sorted by the creation date and
   *          time of the project versions, latest to earliest.</p>
   * @public
   */
  ProjectVersionDescriptions?: ProjectVersionDescription[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *          results to retrieve), Amazon Rekognition returns a pagination token in the response.
   *          You can use this pagination token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamProcessorRequest {
  /**
   * <p>Name of the stream processor for which you want information.</p>
   * @public
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
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>ARN of the stream processor.</p>
   * @public
   */
  StreamProcessorArn?: string | undefined;

  /**
   * <p>Current status of the stream processor.</p>
   * @public
   */
  Status?: StreamProcessorStatus | undefined;

  /**
   * <p>Detailed status message about the stream processor.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Date and time the stream processor was created</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The time, in Unix format, the stream processor was last updated. For example, when the stream
   *         processor moves from a running state to a failed state, or when the user starts or stops the stream processor.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>Kinesis video stream that provides the source streaming video.</p>
   * @public
   */
  Input?: StreamProcessorInput | undefined;

  /**
   * <p>Kinesis data stream to which Amazon Rekognition Video puts the analysis results.</p>
   * @public
   */
  Output?: StreamProcessorOutput | undefined;

  /**
   * <p>ARN of the IAM role that allows access to the stream processor.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces
   *             in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.</p>
   * @public
   */
  Settings?: StreamProcessorSettings | undefined;

  /**
   * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p>
   *          <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition
   *             detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications,
   *             one for a person at second 2 and one for a pet at second 4.</p>
   *          <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
   * @public
   */
  NotificationChannel?: StreamProcessorNotificationChannel | undefined;

  /**
   * <p>
   *             The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors.
   *         </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   * @public
   */
  DataSharingPreference?: StreamProcessorDataSharingPreference | undefined;
}

/**
 * @public
 */
export interface DetectCustomLabelsRequest {
  /**
   * <p>The ARN of the model version that you want to use. Only models associated with Custom
   *          Labels projects accepted by the operation. If a provided ARN refers to a model version
   *          associated with a project for a different feature type, then an InvalidParameterException
   *          is returned.</p>
   * @public
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
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of results you want the service to return in the response.
   *          The service returns the specified number of highest confidence labels ranked from highest confidence
   *       to lowest.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies the minimum confidence level for the labels to return.
   *          <code>DetectCustomLabels</code> doesn't return any labels with a confidence value that's lower than
   *          this specified value. If you specify a
   *       value of 0, <code>DetectCustomLabels</code> returns all labels, regardless of the assumed
   *          threshold applied to each label.
   *       If you don't specify a value for <code>MinConfidence</code>,  <code>DetectCustomLabels</code>
   *          returns labels based on the assumed threshold of each label.</p>
   * @public
   */
  MinConfidence?: number | undefined;
}

/**
 * @public
 */
export interface DetectCustomLabelsResponse {
  /**
   * <p>An array of custom labels detected in the input image.</p>
   * @public
   */
  CustomLabels?: CustomLabel[] | undefined;
}

/**
 * <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
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
   * @public
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
   *          <p>Note that while the FaceOccluded and EyeDirection attributes are supported when using
   *         <code>DetectFaces</code>, they aren't supported when analyzing videos with
   *         <code>StartFaceDetection</code> and <code>GetFaceDetection</code>.</p>
   * @public
   */
  Attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DetectFacesResponse {
  /**
   * <p>Details of each face found in the image. </p>
   * @public
   */
  FaceDetails?: FaceDetail[] | undefined;

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
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;
}

/**
 * <p>A set of parameters that allow you to filter out certain results from your returned results.</p>
 * @public
 */
export interface DetectionFilter {
  /**
   * <p>Sets the confidence of word detection. Words with detection confidence below this will be
   *       excluded from the result. Values should be between 0 and 100. The default MinConfidence is
   *       80.</p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>Sets the minimum height of the word bounding box. Words with bounding box heights lesser than
   *       this value will be excluded from the result. Value is relative to the video frame height.</p>
   * @public
   */
  MinBoundingBoxHeight?: number | undefined;

  /**
   * <p>Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than
   *       this value will be excluded from the result. Value is relative to the video frame width.</p>
   * @public
   */
  MinBoundingBoxWidth?: number | undefined;
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
 * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
 *       exclusive, or a combination of both and can be applied to individual labels or entire label
 *       categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>.</p>
 * @public
 */
export interface GeneralLabelsSettings {
  /**
   * <p>The labels that should be included in the return from DetectLabels.</p>
   * @public
   */
  LabelInclusionFilters?: string[] | undefined;

  /**
   * <p>The labels that should be excluded from the return from DetectLabels.</p>
   * @public
   */
  LabelExclusionFilters?: string[] | undefined;

  /**
   * <p>The label categories that should be included in the return from DetectLabels.</p>
   * @public
   */
  LabelCategoryInclusionFilters?: string[] | undefined;

  /**
   * <p>The label categories that should be excluded from the return from DetectLabels.</p>
   * @public
   */
  LabelCategoryExclusionFilters?: string[] | undefined;
}

/**
 * <p>Settings for the IMAGE_PROPERTIES feature type.</p>
 * @public
 */
export interface DetectLabelsImagePropertiesSettings {
  /**
   * <p>The maximum number of dominant colors to return when detecting labels in an image. The
   *       default value is 10.</p>
   * @public
   */
  MaxDominantColors?: number | undefined;
}

/**
 * <p>Settings for the DetectLabels request. Settings can include filters for both
 *       GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and
 *       applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification
 *       of a maximum number of dominant colors.</p>
 * @public
 */
export interface DetectLabelsSettings {
  /**
   * <p>Contains the specified filters for GENERAL_LABELS.</p>
   * @public
   */
  GeneralLabels?: GeneralLabelsSettings | undefined;

  /**
   * <p>Contains the chosen number of maximum dominant colors in an image.</p>
   * @public
   */
  ImageProperties?: DetectLabelsImagePropertiesSettings | undefined;
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
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Maximum number of labels you want the service to return in the response. The service
   *       returns the specified number of highest confidence labels. Only valid when GENERAL_LABELS is
   *       specified as a feature type in the Feature input parameter.</p>
   * @public
   */
  MaxLabels?: number | undefined;

  /**
   * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   *       return any labels with confidence lower than this specified value.</p>
   *          <p>If <code>MinConfidence</code> is not specified, the operation returns labels with a
   *       confidence values greater than or equal to 55 percent. Only valid when GENERAL_LABELS is
   *       specified as a feature type in the Feature input parameter.</p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label
   *       detection feature, while specifying IMAGE_PROPERTIES returns information regarding image color
   *       and quality. If no option is specified GENERAL_LABELS is used by default.</p>
   * @public
   */
  Features?: DetectLabelsFeatureName[] | undefined;

  /**
   * <p>A list of the filters to be applied to returned detected labels and image properties.
   *       Specified filters can be inclusive, exclusive, or a combination of both. Filters can be used
   *       for individual labels or label categories. The exact label names or label categories must be
   *       supplied. For a full list of labels and label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting labels</a>.</p>
   * @public
   */
  Settings?: DetectLabelsSettings | undefined;
}

/**
 * <p>A description of the dominant colors in an image.</p>
 * @public
 */
export interface DominantColor {
  /**
   * <p>The Red RGB value for a dominant color.</p>
   * @public
   */
  Red?: number | undefined;

  /**
   * <p>The Blue RGB value for a dominant color.</p>
   * @public
   */
  Blue?: number | undefined;

  /**
   * <p>The Green RGB value for a dominant color.</p>
   * @public
   */
  Green?: number | undefined;

  /**
   * <p>The Hex code equivalent of the RGB values for a dominant color.</p>
   * @public
   */
  HexCode?: string | undefined;

  /**
   * <p>The CSS color name of a dominant color.</p>
   * @public
   */
  CSSColor?: string | undefined;

  /**
   * <p>One of 12 simplified color names applied to a dominant color.</p>
   * @public
   */
  SimplifiedColor?: string | undefined;

  /**
   * <p>The percentage of image pixels that have a given dominant color.</p>
   * @public
   */
  PixelPercent?: number | undefined;
}

/**
 * <p>The quality of an image provided for label detection, with regard to brightness,
 *       sharpness, and contrast.</p>
 * @public
 */
export interface DetectLabelsImageQuality {
  /**
   * <p>The brightness of an image provided for label detection.</p>
   * @public
   */
  Brightness?: number | undefined;

  /**
   * <p>The sharpness of an image provided for label detection.</p>
   * @public
   */
  Sharpness?: number | undefined;

  /**
   * <p>The contrast of an image provided for label detection.</p>
   * @public
   */
  Contrast?: number | undefined;
}

/**
 * <p>The background of the image with regard to image quality and dominant colors.</p>
 * @public
 */
export interface DetectLabelsImageBackground {
  /**
   * <p>The quality of the image background as defined by brightness and sharpness.</p>
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * <p>The dominant colors found in the background of an image, defined with RGB values, CSS
   *       color name, simplified color name, and PixelPercentage (the percentage of image pixels that
   *       have a particular color).</p>
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * <p>The foreground of the image with regard to image quality and dominant colors.</p>
 * @public
 */
export interface DetectLabelsImageForeground {
  /**
   * <p>The quality of the image foreground as defined by brightness and sharpness.</p>
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * <p>The dominant colors found in the foreground of an image, defined with RGB values, CSS
   *       color name, simplified color name, and PixelPercentage (the percentage of image pixels that
   *       have a particular color).</p>
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * <p>Information about the quality and dominant colors of an input image. Quality and color
 *       information is returned for the entire image, foreground, and background.</p>
 * @public
 */
export interface DetectLabelsImageProperties {
  /**
   * <p>Information about the quality of the image foreground as defined by brightness, sharpness,
   *       and contrast. The higher the value the greater the brightness, sharpness, and contrast
   *       respectively.</p>
   * @public
   */
  Quality?: DetectLabelsImageQuality | undefined;

  /**
   * <p>Information about the dominant colors found in an image, described with RGB values, CSS
   *       color name, simplified color name, and PixelPercentage (the percentage of image pixels that
   *       have a particular color).</p>
   * @public
   */
  DominantColors?: DominantColor[] | undefined;

  /**
   * <p>Information about the properties of an image’s foreground, including the foreground’s
   *       quality and dominant colors, including the quality and dominant colors of the image.</p>
   * @public
   */
  Foreground?: DetectLabelsImageForeground | undefined;

  /**
   * <p>Information about the properties of an image’s background, including the background’s
   *       quality and dominant colors, including the quality and dominant colors of the image.</p>
   * @public
   */
  Background?: DetectLabelsImageBackground | undefined;
}

/**
 * <p>A potential alias of for a given label.</p>
 * @public
 */
export interface LabelAlias {
  /**
   * <p>The name of an alias for a given label.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The category that applies to a given label.</p>
 * @public
 */
export interface LabelCategory {
  /**
   * <p>The name of a category that applies to a given label.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by
 *       Amazon Rekognition Video (<a>GetLabelDetection</a>).</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The position of the label instance on the image.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the bounding box.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The dominant colors found in an individual instance of a label.</p>
   * @public
   */
  DominantColors?: DominantColor[] | undefined;
}

/**
 * <p>A parent label for a label. A label can have 0, 1, or more parents. </p>
 * @public
 */
export interface Parent {
  /**
   * <p>The name of the parent label.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Structure containing details about the detected label, including the name, detected
 *       instances, parent labels, and level of confidence.</p>
 *          <p> </p>
 * @public
 */
export interface Label {
  /**
   * <p>The name (label) of the object or scene.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Level of confidence.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>If <code>Label</code> represents an object, <code>Instances</code> contains the bounding
   *       boxes for each instance of the detected object. Bounding boxes are returned for common object
   *       labels such as people, cars, furniture, apparel or pets.</p>
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * <p>The parent labels for a label. The response includes all ancestor labels.</p>
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * <p>A list of potential aliases for a given label.</p>
   * @public
   */
  Aliases?: LabelAlias[] | undefined;

  /**
   * <p>A list of the categories associated with a given label.</p>
   * @public
   */
  Categories?: LabelCategory[] | undefined;
}

/**
 * @public
 */
export interface DetectLabelsResponse {
  /**
   * <p>An array of labels for the real-world objects detected. </p>
   * @public
   */
  Labels?: Label[] | undefined;

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
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;

  /**
   * <p>Version number of the label detection model that was used to detect labels.</p>
   * @public
   */
  LabelModelVersion?: string | undefined;

  /**
   * <p>Information about the properties of the input image, such as brightness, sharpness,
   *       contrast, and dominant colors.</p>
   * @public
   */
  ImageProperties?: DetectLabelsImageProperties | undefined;
}

/**
 * <p>Allows you to set attributes of the image. Currently, you can declare an image as free of
 *       personally identifiable information.</p>
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Sets whether the input image is free of personally identifiable information.</p>
   * @public
   */
  ContentClassifiers?: ContentClassifier[] | undefined;
}

/**
 * <p>Sets up the flow definition the image will be sent to if one of the conditions is met. You
 *       can also set certain attributes of the image before review.</p>
 * @public
 */
export interface HumanLoopConfig {
  /**
   * <p>The name of the human review used for this image. This should be kept unique within a
   *       region.</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by
   *       using the Amazon Sagemaker <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html">CreateFlowDefinition</a> Operation. </p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Sets attributes of the input data.</p>
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
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
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   *       return any labels with a confidence level lower than this specified value.</p>
   *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels with
   *       confidence values greater than or equal to 50 percent.</p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>Sets up the configuration for human evaluation, including the FlowDefinition the image
   *       will be sent to.</p>
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * <p>Identifier for the custom adapter. Expects the ProjectVersionArn as a value.
   *          Use the CreateProject or CreateProjectVersion APIs to create a custom adapter.</p>
   * @public
   */
  ProjectVersion?: string | undefined;
}

/**
 * <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the
 *       input did not trigger human review.</p>
 * @public
 */
export interface HumanLoopActivationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   * @public
   */
  HumanLoopArn?: string | undefined;

  /**
   * <p>Shows if and why human review was needed.</p>
   * @public
   */
  HumanLoopActivationReasons?: string[] | undefined;

  /**
   * <p>Shows the result of condition evaluations, including those conditions which activated a
   *       human review.</p>
   * @public
   */
  HumanLoopActivationConditionsEvaluationResults?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface DetectModerationLabelsResponse {
  /**
   * <p>Array of detected Moderation labels. For video operations, this includes the time,
   *       in milliseconds from the start of the video, they were detected.</p>
   * @public
   */
  ModerationLabels?: ModerationLabel[] | undefined;

  /**
   * <p>Version number of the base moderation detection model that was used to detect unsafe
   *       content.</p>
   * @public
   */
  ModerationModelVersion?: string | undefined;

  /**
   * <p>Shows the results of the human in the loop evaluation.</p>
   * @public
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput | undefined;

  /**
   * <p>Identifier of the custom adapter that was used during inference. If
   *          during inference the adapter was EXPIRED, then the parameter will not be returned,
   *          indicating that a base moderation detection project version was used.</p>
   * @public
   */
  ProjectVersion?: string | undefined;

  /**
   * <p>A list of predicted results for the type of content an image contains. For example,
   *       the image content might be from animation, sports, or a video game.</p>
   * @public
   */
  ContentTypes?: ContentType[] | undefined;
}

/**
 * <p>The number of in-progress human reviews you have has exceeded the number allowed.</p>
 * @public
 */
export class HumanLoopQuotaExceededException extends __BaseException {
  readonly name: "HumanLoopQuotaExceededException" = "HumanLoopQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
   */
  ServiceCode?: string | undefined;

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
 * @public
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
   * @public
   */
  MinConfidence: number | undefined;

  /**
   * <p>An array of personal protective equipment types for which you want summary information.
   *          If a person is detected wearing a required requipment type, the person's ID is added to the
   *          <code>PersonsWithRequiredEquipment</code> array field returned in <a>ProtectiveEquipmentSummary</a>
   *          by <code>DetectProtectiveEquipment</code>.  </p>
   * @public
   */
  RequiredEquipmentTypes: ProtectiveEquipmentType[] | undefined;
}

/**
 * @public
 */
export interface DetectProtectiveEquipmentRequest {
  /**
   * <p>The image in which you want to detect PPE on detected persons. The image can be passed as image bytes or you can
   *          reference an image stored in an Amazon S3 bucket. </p>
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>An array of PPE types that you want to summarize.</p>
   * @public
   */
  SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes | undefined;
}

/**
 * <p>A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns
 *          all persons detected in the input
 *          image in an array of <code>ProtectiveEquipmentPerson</code> objects.</p>
 * @public
 */
export interface ProtectiveEquipmentPerson {
  /**
   * <p>An array of body parts detected on a person's body (including body parts without PPE). </p>
   * @public
   */
  BodyParts?: ProtectiveEquipmentBodyPart[] | undefined;

  /**
   * <p>A bounding box around the detected person.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>The confidence that Amazon Rekognition has that the bounding box contains a person.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The identifier for the detected person. The identifier is only unique for a single call to
   *          <code>DetectProtectiveEquipment</code>.</p>
   * @public
   */
  Id?: number | undefined;
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
 * @public
 */
export interface ProtectiveEquipmentSummary {
  /**
   * <p>An array of IDs for persons who are wearing detected personal protective equipment.
   *       </p>
   * @public
   */
  PersonsWithRequiredEquipment?: number[] | undefined;

  /**
   * <p>An array of IDs for persons who are not wearing all of the types of PPE specified in the <code>RequiredEquipmentTypes</code> field of
   *          the detected personal protective equipment.
   *       </p>
   * @public
   */
  PersonsWithoutRequiredEquipment?: number[] | undefined;

  /**
   * <p>An array of IDs for persons where it was not possible to determine if they are wearing personal protective equipment.
   *       </p>
   * @public
   */
  PersonsIndeterminate?: number[] | undefined;
}

/**
 * @public
 */
export interface DetectProtectiveEquipmentResponse {
  /**
   * <p>The version number of the PPE detection model used to detect PPE in the image.</p>
   * @public
   */
  ProtectiveEquipmentModelVersion?: string | undefined;

  /**
   * <p>An array of persons detected in the image (including persons not wearing PPE).</p>
   * @public
   */
  Persons?: ProtectiveEquipmentPerson[] | undefined;

  /**
   * <p>Summary information for the types of PPE specified in the <code>SummarizationAttributes</code> input
   *       parameter.</p>
   * @public
   */
  Summary?: ProtectiveEquipmentSummary | undefined;
}

/**
 * <p>A set of optional parameters that you can use to set the criteria that the text must meet
 *       to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and
 *       minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image
 *       to look for text in. </p>
 * @public
 */
export interface DetectTextFilters {
  /**
   * <p>A set of parameters that allow you to filter out certain results from your returned results.</p>
   * @public
   */
  WordFilter?: DetectionFilter | undefined;

  /**
   * <p> A Filter focusing on a certain area of the image. Uses a <code>BoundingBox</code> object
   *       to set the region of the image.</p>
   * @public
   */
  RegionsOfInterest?: RegionOfInterest[] | undefined;
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
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>Optional parameters that let you set the criteria that the text must meet to be included
   *       in your response.</p>
   * @public
   */
  Filters?: DetectTextFilters | undefined;
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
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p>
 *          <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the
 *       image. </p>
 *          <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line
 *       and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which
 *       the word appears. The word <code>Id</code> is also an index for the word within a line of
 *       words. </p>
 *          <p>For more information, see Detecting text in the Amazon Rekognition Developer
 *       Guide.</p>
 * @public
 */
export interface TextDetection {
  /**
   * <p>The word or line of text recognized by Amazon Rekognition. </p>
   * @public
   */
  DetectedText?: string | undefined;

  /**
   * <p>The type of text that was detected.</p>
   * @public
   */
  Type?: TextTypes | undefined;

  /**
   * <p>The identifier for the detected text. The identifier is only unique for a single call
   *       to <code>DetectText</code>. </p>
   * @public
   */
  Id?: number | undefined;

  /**
   * <p>The Parent identifier for the detected text identified by the value of <code>ID</code>.
   *       If the type of detected text is <code>LINE</code>, the value of <code>ParentId</code> is
   *         <code>Null</code>. </p>
   * @public
   */
  ParentId?: number | undefined;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy
   *       of the geometry points around the detected text.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The location of the detected text on the image. Includes an axis aligned coarse
   *       bounding box surrounding the text and a finer grain polygon for more accurate spatial
   *       information.</p>
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * @public
 */
export interface DetectTextResponse {
  /**
   * <p>An array of text that was detected in the input image.</p>
   * @public
   */
  TextDetections?: TextDetection[] | undefined;

  /**
   * <p>The model version used to detect text.</p>
   * @public
   */
  TextModelVersion?: string | undefined;
}

/**
 * <p>Provides face metadata for the faces that are disassociated from a specific UserID.</p>
 * @public
 */
export interface DisassociatedFace {
  /**
   * <p>Unique identifier assigned to the face.</p>
   * @public
   */
  FaceId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFacesRequest {
  /**
   * <p>The ID of an existing collection containing the UserID.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>ID for the existing UserID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Idempotent token used to identify the request to <code>DisassociateFaces</code>. If you
   *       use the same token with multiple <code>DisassociateFaces</code> requests, the same response is
   *       returned. Use ClientRequestToken to prevent the same request from being processed more than
   *       once.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An array of face IDs to disassociate from the UserID. </p>
   * @public
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
 * <p>Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully
 *       disassociated.</p>
 * @public
 */
export interface UnsuccessfulFaceDisassociation {
  /**
   * <p>A unique identifier assigned to the face. </p>
   * @public
   */
  FaceId?: string | undefined;

  /**
   * <p>A provided ID for the UserID. Unique within the collection. </p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The reason why the deletion was unsuccessful. </p>
   * @public
   */
  Reasons?: UnsuccessfulFaceDisassociationReason[] | undefined;
}

/**
 * @public
 */
export interface DisassociateFacesResponse {
  /**
   * <p>An array of DissociatedFace objects containing FaceIds that are successfully disassociated
   *       with the UserID is returned. Returned if the DisassociatedFaces action is successful.</p>
   * @public
   */
  DisassociatedFaces?: DisassociatedFace[] | undefined;

  /**
   * <p>An array of UnsuccessfulDisassociation objects containing FaceIds that are not
   *       successfully associated, along with the reasons for the failure to associate. Returned if the
   *       DisassociateFaces action is successful.</p>
   * @public
   */
  UnsuccessfulFaceDisassociations?: UnsuccessfulFaceDisassociation[] | undefined;

  /**
   * <p>The status of an update made to a User. Reflects if the User has been updated for every
   *       requested change.</p>
   * @public
   */
  UserStatus?: UserStatus | undefined;
}

/**
 * <p>
 *          A training dataset or a test dataset used in a dataset distribution operation.
 *          For more information, see <a>DistributeDatasetEntries</a>.
 *       </p>
 * @public
 */
export interface DistributeDataset {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want to use.
   *       </p>
   * @public
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
   * @public
   */
  Datasets: DistributeDataset[] | undefined;
}

/**
 * @public
 */
export interface DistributeDatasetEntriesResponse {}

/**
 * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
 *       image, and external image ID that you assigned. </p>
 * @public
 */
export interface Face {
  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the face.</p>
   * @public
   */
  FaceId?: string | undefined;

  /**
   * <p>Bounding box of the face.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the input image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>Identifier that you assign to all the faces in the input image.</p>
   * @public
   */
  ExternalImageId?: string | undefined;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such
   *       as a tree).</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p> The version of the face detect and storage model that was used when indexing the face
   *       vector. </p>
   * @public
   */
  IndexFacesModelVersion?: string | undefined;

  /**
   * <p>Unique identifier assigned to the user.</p>
   * @public
   */
  UserId?: string | undefined;
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
 * <p>Information about a face detected in a video analysis request and the time the face was detected in the video. </p>
 * @public
 */
export interface FaceDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the face was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the face first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>The face properties for the detected face.</p>
   * @public
   */
  Face?: FaceDetail | undefined;
}

/**
 * <p>Provides face metadata. In addition, it also provides the confidence in the match of
 *       this face with the input face.</p>
 * @public
 */
export interface FaceMatch {
  /**
   * <p>Confidence in the match of this face with the input face.</p>
   * @public
   */
  Similarity?: number | undefined;

  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the source
   *       image, and external image ID that you assigned.</p>
   * @public
   */
  Face?: Face | undefined;
}

/**
 * <p>Object containing both the face metadata (stored in the backend database), and facial
 *       attributes that are detected but aren't stored in the database.</p>
 * @public
 */
export interface FaceRecord {
  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
   *       image, and external image ID that you assigned. </p>
   * @public
   */
  Face?: Face | undefined;

  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
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
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCelebrityInfoResponse {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   * @public
   */
  Urls?: string[] | undefined;

  /**
   * <p>The name of the celebrity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Retrieves the known gender for the celebrity.</p>
   * @public
   */
  KnownGender?: KnownGender | undefined;
}

/**
 * @public
 */
export interface GetCelebrityRecognitionRequest {
  /**
   * <p>Job identifier for the required celebrity recognition analysis. You can get the job identifer from
   *       a call to <code>StartCelebrityRecognition</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination
   *       token in the response. You can use this pagination token to retrieve the next set of celebrities. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort to use for celebrities returned in <code>Celebrities</code> field. Specify <code>ID</code> to sort by the celebrity identifier,
   *         specify <code>TIMESTAMP</code> to sort by the time the celebrity was recognized.</p>
   * @public
   */
  SortBy?: CelebrityRecognitionSortBy | undefined;
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
 * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
 *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
 * @public
 */
export interface Video {
  /**
   * <p>The Amazon S3 bucket name and file name for the video.</p>
   * @public
   */
  S3Object?: S3Object | undefined;
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
 * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in
 *             every page of paginated responses from a Amazon Rekognition video operation.</p>
 * @public
 */
export interface VideoMetadata {
  /**
   * <p>Type of compression used in the analyzed video. </p>
   * @public
   */
  Codec?: string | undefined;

  /**
   * <p>Length of the video in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>Format of the analyzed video. Possible values are MP4, MOV and AVI. </p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>Number of frames per second in the video.</p>
   * @public
   */
  FrameRate?: number | undefined;

  /**
   * <p>Vertical pixel dimension of the video.</p>
   * @public
   */
  FrameHeight?: number | undefined;

  /**
   * <p>Horizontal pixel dimension of the video.</p>
   * @public
   */
  FrameWidth?: number | undefined;

  /**
   * <p>
   *       A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255).
   *     </p>
   * @public
   */
  ColorRange?: VideoColorRange | undefined;
}

/**
 * @public
 */
export interface GetCelebrityRecognitionResponse {
  /**
   * <p>The current status of the celebrity recognition job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *       every page of paginated responses from a Amazon Rekognition Video operation.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
   *       to retrieve the next set of celebrities.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Array of celebrities recognized in the video.</p>
   * @public
   */
  Celebrities?: CelebrityRecognition[] | undefined;

  /**
   * <p>Job identifier for the celebrity recognition operation for which you want to obtain
   *       results. The job identifer is returned by an initial call to StartCelebrityRecognition.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartCelebrityRecognition and returned in the
   *       job completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetContentModerationRequest {
  /**
   * <p>The identifier for the inappropriate, unwanted, or offensive content moderation job. Use <code>JobId</code> to identify the job in
   *        a subsequent call to <code>GetContentModeration</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *     If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *     The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition
   *         returns a pagination token in the response. You can use this pagination token
   *         to retrieve the next set of content moderation labels.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort to use for elements in the <code>ModerationLabelDetections</code> array.
   *        Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
   *        Use <code>NAME</code> to alphabetically group elements for a label together.
   *        Within each label group, the array element are sorted by detection confidence.
   *        The default sort is by <code>TIMESTAMP</code>.</p>
   * @public
   */
  SortBy?: ContentModerationSortBy | undefined;

  /**
   * <p>Defines how to aggregate results of the StartContentModeration request. Default
   *       aggregation option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.</p>
   * @public
   */
  AggregateBy?: ContentModerationAggregateBy | undefined;
}

/**
 * <p>Contains metadata about a content moderation request, including the SortBy and AggregateBy
 *       options.</p>
 * @public
 */
export interface GetContentModerationRequestMetadata {
  /**
   * <p>The sorting method chosen for a GetContentModeration request.</p>
   * @public
   */
  SortBy?: ContentModerationSortBy | undefined;

  /**
   * <p>The aggregation method chosen for a GetContentModeration request.</p>
   * @public
   */
  AggregateBy?: ContentModerationAggregateBy | undefined;
}

/**
 * @public
 */
export interface GetContentModerationResponse {
  /**
   * <p>The current status of the content moderation analysis job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code>
   *      is returned in every page of paginated responses from <code>GetContentModeration</code>. </p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were detected.</p>
   * @public
   */
  ModerationLabels?: ContentModerationDetection[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *      request to retrieve the next set of content moderation labels. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive content.</p>
   * @public
   */
  ModerationModelVersion?: string | undefined;

  /**
   * <p>Job identifier for the content moderation operation for which you want to obtain results.
   *       The job identifer is returned by an initial call to StartContentModeration.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartContentModeration and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>Information about the paramters used when getting a response. Includes information on
   *       aggregation and sorting methods.</p>
   * @public
   */
  GetRequestMetadata?: GetContentModerationRequestMetadata | undefined;
}

/**
 * @public
 */
export interface GetFaceDetectionRequest {
  /**
   * <p>Unique identifier for the face detection job. The <code>JobId</code> is returned from <code>StartFaceDetection</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *        The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video returns a pagination
   *        token in the response. You can use this pagination token to retrieve the next set of faces.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFaceDetectionResponse {
  /**
   * <p>The current status of the face detection job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition video operation.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of faces detected in the video. Each element contains a detected face's details and the time,
   *        in milliseconds from the start of the video, the face was detected. </p>
   * @public
   */
  Faces?: FaceDetection[] | undefined;

  /**
   * <p>Job identifier for the face detection operation for which you want to obtain results. The
   *       job identifer is returned by an initial call to StartFaceDetection.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartFaceDetection and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetFaceLivenessSessionResultsRequest {
  /**
   * <p>A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an
   *       idempotency token for all operations associated with the session.</p>
   * @public
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
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>Represents a status corresponding to the state of the session. Possible statuses are:
   *       CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.</p>
   * @public
   */
  Status: LivenessSessionStatus | undefined;

  /**
   * <p>Probabalistic confidence score for if the person in the given video was live, represented
   *       as a float value between 0 to 100.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>A high-quality image from the Face Liveness video that can be used for face comparison or
   *       search. It includes a bounding box of the face and the Base64-encoded bytes that return an
   *       image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image
   *       will be uploaded to an S3Object specified in the output configuration. In case the reference
   *       image is not returned, it's recommended to retry the Liveness check.</p>
   * @public
   */
  ReferenceImage?: AuditImage | undefined;

  /**
   * <p>A set of images from the Face Liveness video that can be used for audit purposes. It
   *       includes a bounding box of the face and the Base64-encoded bytes that return an image. If the
   *       CreateFaceLivenessSession request included an OutputConfig argument, the image will be
   *       uploaded to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined,
   *       raw bytes are sent instead.</p>
   * @public
   */
  AuditImages?: AuditImage[] | undefined;

  /**
   * <p>Contains information regarding the challenge type used for the Face Liveness check.</p>
   * @public
   */
  Challenge?: Challenge | undefined;
}

/**
 * <p>Occurs when a given sessionId is not found.</p>
 * @public
 */
export class SessionNotFoundException extends __BaseException {
  readonly name: "SessionNotFoundException" = "SessionNotFoundException";
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
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination
   *       token in the response. You can use this pagination token to retrieve the next set of search results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort to use for grouping faces in the response. Use <code>TIMESTAMP</code> to group faces by the time
   *       that they are recognized. Use <code>INDEX</code> to sort by recognized faces. </p>
   * @public
   */
  SortBy?: FaceSearchSortBy | undefined;
}

/**
 * <p>Details about a person detected in a video analysis request.</p>
 * @public
 */
export interface PersonDetail {
  /**
   * <p>Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>Bounding box around the detected person.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Face details for the detected person.</p>
   * @public
   */
  Face?: FaceDetail | undefined;
}

/**
 * <p>Information about a person whose face matches a face(s) in an Amazon Rekognition collection.
 *       Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for
 *       when the person was detected in a video. An array of <code>PersonMatch</code> objects is
 *       returned by <a>GetFaceSearch</a>. </p>
 * @public
 */
export interface PersonMatch {
  /**
   * <p>The time, in milliseconds from the beginning of the video, that the person was matched in
   *       the video.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>Information about the matched person.</p>
   * @public
   */
  Person?: PersonDetail | undefined;

  /**
   * <p>Information about the faces in the input collection that match the face of a person in the
   *       video.</p>
   * @public
   */
  FaceMatches?: FaceMatch[] | undefined;
}

/**
 * @public
 */
export interface GetFaceSearchResponse {
  /**
   * <p>The current status of the face search job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses
   *       from a Amazon Rekognition Video operation. </p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>An array of persons,  <a>PersonMatch</a>,
   *       in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information
   *        for when persons are matched in the video.
   *       You specify the input collection in an initial call to <code>StartFaceSearch</code>.
   *       Each  <code>Persons</code> element includes a time the person was matched,
   *       face match details (<code>FaceMatches</code>) for matching faces in the collection,
   *        and person information (<code>Person</code>) for the matched person. </p>
   * @public
   */
  Persons?: PersonMatch[] | undefined;

  /**
   * <p>Job identifier for the face search operation for which you want to obtain results. The job
   *       identifer is returned by an initial call to StartFaceSearch.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartFaceSearch and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
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
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *        The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of labels. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort to use for elements in the <code>Labels</code> array.
   *       Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
   *       Use <code>NAME</code> to alphabetically group elements for a label together.
   *       Within each label group, the array element are sorted by detection confidence.
   *       The default sort is by <code>TIMESTAMP</code>.</p>
   * @public
   */
  SortBy?: LabelDetectionSortBy | undefined;

  /**
   * <p>Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments.</p>
   * @public
   */
  AggregateBy?: LabelDetectionAggregateBy | undefined;
}

/**
 * <p>Contains metadata about a label detection request, including the SortBy and AggregateBy
 *       options.</p>
 * @public
 */
export interface GetLabelDetectionRequestMetadata {
  /**
   * <p>The sorting method chosen for a GetLabelDetection request.</p>
   * @public
   */
  SortBy?: LabelDetectionSortBy | undefined;

  /**
   * <p>The aggregation method chosen for a GetLabelDetection request.</p>
   * @public
   */
  AggregateBy?: LabelDetectionAggregateBy | undefined;
}

/**
 * <p>Information about a label detected in a video analysis request and the time the label was detected in the video. </p>
 * @public
 */
export interface LabelDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the label was detected.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the label first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>Details about the detected label.</p>
   * @public
   */
  Label?: Label | undefined;

  /**
   * <p>The time in milliseconds defining the start of the timeline segment containing a continuously detected label.</p>
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * <p>The time in milliseconds defining the end of the timeline segment containing a continuously detected label.</p>
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * <p>The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.</p>
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetLabelDetectionResponse {
  /**
   * <p>The current status of the label detection job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition video operation.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
   *         to retrieve the next set of labels.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of labels detected in the video. Each element contains the detected label and the time,
   *         in milliseconds from the start of the video, that the label was detected. </p>
   * @public
   */
  Labels?: LabelDetection[] | undefined;

  /**
   * <p>Version number of the label detection model that was used to detect labels.</p>
   * @public
   */
  LabelModelVersion?: string | undefined;

  /**
   * <p>Job identifier for the label detection operation for which you want to obtain results. The
   *       job identifer is returned by an initial call to StartLabelDetection.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartLabelDetection and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>Information about the paramters used when getting a response. Includes information on
   *       aggregation and sorting methods.</p>
   * @public
   */
  GetRequestMetadata?: GetLabelDetectionRequestMetadata | undefined;
}

/**
 * @public
 */
export interface GetMediaAnalysisJobRequest {
  /**
   * <p>Unique identifier for the media analysis job for which you want to retrieve results.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaAnalysisJobFailureCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_KMS_KEY: "INVALID_KMS_KEY",
  INVALID_MANIFEST: "INVALID_MANIFEST",
  INVALID_OUTPUT_CONFIG: "INVALID_OUTPUT_CONFIG",
  INVALID_S3_OBJECT: "INVALID_S3_OBJECT",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_NOT_READY: "RESOURCE_NOT_READY",
  THROTTLED: "THROTTLED",
} as const;

/**
 * @public
 */
export type MediaAnalysisJobFailureCode =
  (typeof MediaAnalysisJobFailureCode)[keyof typeof MediaAnalysisJobFailureCode];

/**
 * <p>Details about the error that resulted in failure of the job.</p>
 * @public
 */
export interface MediaAnalysisJobFailureDetails {
  /**
   * <p>Error code for the failed job.</p>
   * @public
   */
  Code?: MediaAnalysisJobFailureCode | undefined;

  /**
   * <p>Human readable error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains input information for a media analysis job.</p>
 * @public
 */
export interface MediaAnalysisInput {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object: S3Object | undefined;
}

/**
 * <p>Summary that provides statistics on input manifest and errors identified in the input manifest.</p>
 * @public
 */
export interface MediaAnalysisManifestSummary {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * <p>Configuration for Moderation Labels Detection.</p>
 * @public
 */
export interface MediaAnalysisDetectModerationLabelsConfig {
  /**
   * <p>Specifies the minimum confidence level for the moderation labels to return. Amazon Rekognition
   *             doesn't return any labels with a confidence level lower than this specified value.
   *         </p>
   * @public
   */
  MinConfidence?: number | undefined;

  /**
   * <p>Specifies the custom moderation model to be used during the label detection job.
   *         If not provided the pre-trained model is used.</p>
   * @public
   */
  ProjectVersion?: string | undefined;
}

/**
 * <p>Configuration options for a media analysis job. Configuration is operation-specific.</p>
 * @public
 */
export interface MediaAnalysisOperationsConfig {
  /**
   * <p>Contains configuration options for a DetectModerationLabels job.</p>
   * @public
   */
  DetectModerationLabels?: MediaAnalysisDetectModerationLabelsConfig | undefined;
}

/**
 * <p>Output configuration provided in the job creation request.</p>
 * @public
 */
export interface MediaAnalysisOutputConfig {
  /**
   * <p>Specifies the Amazon S3 bucket to contain the output of the media analysis job.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have
   *             designated for storage.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * <p>Object containing information about the model versions of selected features in a given job.</p>
 * @public
 */
export interface MediaAnalysisModelVersions {
  /**
   * <p>The Moderation base model version.</p>
   * @public
   */
  Moderation?: string | undefined;
}

/**
 * <p>Contains the results for a media analysis job created with StartMediaAnalysisJob.</p>
 * @public
 */
export interface MediaAnalysisResults {
  /**
   * <p>Provides the S3 bucket name and object name.</p>
   *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
   *       Amazon Rekognition operations.</p>
   *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
   *       access the S3 object. For more information, see How Amazon Rekognition works with IAM in the
   *       Amazon Rekognition Developer Guide. </p>
   * @public
   */
  S3Object?: S3Object | undefined;

  /**
   * <p>Information about the model versions for the features selected in a given job.</p>
   * @public
   */
  ModelVersions?: MediaAnalysisModelVersions | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaAnalysisJobStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type MediaAnalysisJobStatus = (typeof MediaAnalysisJobStatus)[keyof typeof MediaAnalysisJobStatus];

/**
 * @public
 */
export interface GetMediaAnalysisJobResponse {
  /**
   * <p>The identifier for the media analysis job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The name of the media analysis job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Operation configurations that were provided during job creation.</p>
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * <p>The current status of the media analysis job.</p>
   * @public
   */
  Status: MediaAnalysisJobStatus | undefined;

  /**
   * <p>Details about the error that resulted in failure of the job.</p>
   * @public
   */
  FailureDetails?: MediaAnalysisJobFailureDetails | undefined;

  /**
   * <p>The Unix date and time when the job was started.</p>
   * @public
   */
  CreationTimestamp: Date | undefined;

  /**
   * <p>The Unix date and time when the job finished.</p>
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * <p>Reference to the input manifest that was provided in the job creation request.</p>
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * <p>Output configuration that was provided in the creation request.</p>
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * <p>KMS Key that was provided in the creation request.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Output manifest that contains prediction results.</p>
   * @public
   */
  Results?: MediaAnalysisResults | undefined;

  /**
   * <p>The summary manifest provides statistics on input manifest and errors identified in the input manifest.</p>
   * @public
   */
  ManifestSummary?: MediaAnalysisManifestSummary | undefined;
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
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
   *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
   *       The default value is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination
   *        token in the response. You can use this pagination token to retrieve the next set of persons. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort to use for elements in the <code>Persons</code> array. Use <code>TIMESTAMP</code> to sort array elements
   *        by the time persons are detected. Use <code>INDEX</code> to sort by the tracked persons.
   *        If you sort by <code>INDEX</code>, the array elements for each person are sorted by detection confidence.
   *        The default sort is by <code>TIMESTAMP</code>.</p>
   * @public
   */
  SortBy?: PersonTrackingSortBy | undefined;
}

/**
 * <p>Details and path tracking information for a single time a person's path is tracked in a video.
 *             Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects
 *             with elements for each time a person's path is tracked in a video. </p>
 *          <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
 * @public
 */
export interface PersonDetection {
  /**
   * <p>The time, in milliseconds from the start of the video, that the person's path was tracked.
   *           Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the person's path first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>Details about a person whose path was tracked in a video.</p>
   * @public
   */
  Person?: PersonDetail | undefined;
}

/**
 * @public
 */
export interface GetPersonTrackingResponse {
  /**
   * <p>The current status of the person tracking job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
   *        every page of paginated responses from a Amazon Rekognition Video operation.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of the persons detected in the video and the time(s) their path was tracked throughout the video.
   *         An array element will exist for each time a person's path is tracked. </p>
   * @public
   */
  Persons?: PersonDetection[] | undefined;

  /**
   * <p>Job identifier for the person tracking operation for which you want to obtain results. The
   *       job identifer is returned by an initial call to StartPersonTracking.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartCelebrityRecognition and returned in the
   *       job completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDetectionRequest {
  /**
   * <p>Job identifier for the text detection operation for which you want results returned.
   *       You get the job identifer from an initial call to <code>StartSegmentDetection</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *       request to retrieve the next set of text.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a shot detection segment detected in a video. For more information,
 *       see <a>SegmentDetection</a>.</p>
 * @public
 */
export interface ShotSegment {
  /**
   * <p>An Identifier for a shot detection segment detected in a video. </p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.</p>
   * @public
   */
  Confidence?: number | undefined;
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
 * <p>Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.</p>
 * @public
 */
export interface TechnicalCueSegment {
  /**
   * <p>The type of the technical cue.</p>
   * @public
   */
  Type?: TechnicalCueType | undefined;

  /**
   * <p>The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.</p>
   * @public
   */
  Confidence?: number | undefined;
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
 * <p>A technical cue or shot detection segment detected in a video. An array
 *     of <code>SegmentDetection</code> objects containing all segments detected in a stored video
 *       is returned by <a>GetSegmentDetection</a>.
 *     </p>
 * @public
 */
export interface SegmentDetection {
  /**
   * <p>The type of the  segment. Valid values are <code>TECHNICAL_CUE</code> and <code>SHOT</code>.</p>
   * @public
   */
  Type?: SegmentType | undefined;

  /**
   * <p>The start time of the detected segment in milliseconds from the start of the video. This value
   *       is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of
   *       100 millis.</p>
   * @public
   */
  StartTimestampMillis?: number | undefined;

  /**
   * <p>The end time of the detected segment, in milliseconds, from the start of the video.
   *     This value is rounded down.</p>
   * @public
   */
  EndTimestampMillis?: number | undefined;

  /**
   * <p>The duration of the detected segment in milliseconds. </p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment.
   *       <code>StartTimecode</code> is in <i>HH:MM:SS:fr</i> format
   *       (and <i>;fr</i> for drop frame-rates). </p>
   * @public
   */
  StartTimecodeSMPTE?: string | undefined;

  /**
   * <p>The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment.
   *       <code>EndTimecode</code> is in <i>HH:MM:SS:fr</i> format
   *       (and <i>;fr</i> for drop frame-rates).</p>
   * @public
   */
  EndTimecodeSMPTE?: string | undefined;

  /**
   * <p>The duration of the timecode for the detected segment in SMPTE format.</p>
   * @public
   */
  DurationSMPTE?: string | undefined;

  /**
   * <p>If the segment is a technical cue, contains information about the technical cue.</p>
   * @public
   */
  TechnicalCueSegment?: TechnicalCueSegment | undefined;

  /**
   * <p>If the segment is a shot detection, contains information about the shot detection.</p>
   * @public
   */
  ShotSegment?: ShotSegment | undefined;

  /**
   * <p>
   *       The frame number of the start of a video segment, using a frame index that starts with 0.
   *     </p>
   * @public
   */
  StartFrameNumber?: number | undefined;

  /**
   * <p>
   *       The frame number at the end of a video segment, using a frame index that starts with 0.
   *     </p>
   * @public
   */
  EndFrameNumber?: number | undefined;

  /**
   * <p>
   *       The duration of a video segment, expressed in frames.
   *     </p>
   * @public
   */
  DurationFrames?: number | undefined;
}

/**
 * <p>Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>.
 *       An array of <code>SegmentTypeInfo</code> objects is returned  by the response from <a>GetSegmentDetection</a>.</p>
 * @public
 */
export interface SegmentTypeInfo {
  /**
   * <p>The type of a segment (technical cue or shot detection).</p>
   * @public
   */
  Type?: SegmentType | undefined;

  /**
   * <p>The version of the model used to detect segments.</p>
   * @public
   */
  ModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDetectionResponse {
  /**
   * <p>Current status of the segment detection job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Currently, Amazon Rekognition Video returns a single   object in the
   *       <code>VideoMetadata</code> array. The object
   *       contains information about the video stream in the input file that Amazon Rekognition Video chose to analyze.
   *       The <code>VideoMetadata</code> object includes the video codec, video format and other information.
   *       Video metadata is returned in each page of information returned by <code>GetSegmentDetection</code>.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata[] | undefined;

  /**
   * <p>An array of
   *        objects. There can be multiple audio streams.
   *       Each <code>AudioMetadata</code> object contains metadata for a single audio stream.
   *       Audio information in an <code>AudioMetadata</code> objects includes
   *       the audio codec, the number of audio channels, the duration of the audio stream,
   *       and the sample rate. Audio metadata is returned in each page of information returned
   *       by <code>GetSegmentDetection</code>.</p>
   * @public
   */
  AudioMetadata?: AudioMetadata[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns
   *       a pagination token in the response. You can use this pagination token to retrieve the next set of text.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of segments detected in a video.  The array is sorted by the segment types (TECHNICAL_CUE or SHOT)
   *       specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>. Within
   *       each segment type the array is sorted by timestamp values.</p>
   * @public
   */
  Segments?: SegmentDetection[] | undefined;

  /**
   * <p>An array containing the segment types requested in the call to <code>StartSegmentDetection</code>.
   *     </p>
   * @public
   */
  SelectedSegmentTypes?: SegmentTypeInfo[] | undefined;

  /**
   * <p>Job identifier for the segment detection operation for which you want to obtain results.
   *       The job identifer is returned by an initial call to StartSegmentDetection.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartSegmentDetection and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface GetTextDetectionRequest {
  /**
   * <p>Job identifier for the text detection operation for which you want results returned.
   *         You get the job identifer from an initial call to <code>StartTextDetection</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns
   *       a pagination token in the response. You can use this pagination token to retrieve the next set of text.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about text detected in a video. Incudes the detected text,
 *         the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.</p>
 * @public
 */
export interface TextDetectionResult {
  /**
   * <p>The time, in milliseconds from the start of the video, that the text was detected.
   *        Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the text first appears.</p>
   * @public
   */
  Timestamp?: number | undefined;

  /**
   * <p>Details about text detected in a video.</p>
   * @public
   */
  TextDetection?: TextDetection | undefined;
}

/**
 * @public
 */
export interface GetTextDetectionResponse {
  /**
   * <p>Current status of the text detection job.</p>
   * @public
   */
  JobStatus?: VideoJobStatus | undefined;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in
   *             every page of paginated responses from a Amazon Rekognition video operation.</p>
   * @public
   */
  VideoMetadata?: VideoMetadata | undefined;

  /**
   * <p>An array of text detected in the video. Each element contains the detected text, the time in milliseconds
   *       from the start of the video that the text was detected, and where it was detected on the screen.</p>
   * @public
   */
  TextDetections?: TextDetectionResult[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *         request to retrieve the next set of text.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Version number of the text detection model that was used to detect text.</p>
   * @public
   */
  TextModelVersion?: string | undefined;

  /**
   * <p>Job identifier for the text detection operation for which you want to obtain results. The
   *       job identifer is returned by an initial call to StartTextDetection.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
   *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
   * @public
   */
  Video?: Video | undefined;

  /**
   * <p>A job identifier specified in the call to StartTextDetection and returned in the job
   *       completion notification sent to your Amazon Simple Notification Service topic.</p>
   * @public
   */
  JobTag?: string | undefined;
}

/**
 * @public
 */
export interface IndexFacesRequest {
  /**
   * <p>The ID of an existing collection to which you want to add the faces that are detected
   *       in the input images.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
   *       call Amazon Rekognition operations, passing base64-encoded image bytes isn't supported. </p>
   *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to
   *       base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see
   *       Images in the Amazon Rekognition developer guide.</p>
   * @public
   */
  Image: Image | undefined;

  /**
   * <p>The ID you want to assign to all the faces detected in the image.</p>
   * @public
   */
  ExternalImageId?: string | undefined;

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
   * @public
   */
  DetectionAttributes?: Attribute[] | undefined;

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
   * @public
   */
  MaxFaces?: number | undefined;

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
   * @public
   */
  QualityFilter?: QualityFilter | undefined;
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
 * <p>A face that <a>IndexFaces</a> detected, but didn't index. Use the
 *         <code>Reasons</code> response attribute to determine why a face wasn't indexed.</p>
 * @public
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
   * @public
   */
  Reasons?: Reason[] | undefined;

  /**
   * <p>The
   *       structure that contains attributes of a face that
   *       <code>IndexFaces</code>detected, but didn't index. </p>
   * @public
   */
  FaceDetail?: FaceDetail | undefined;
}

/**
 * @public
 */
export interface IndexFacesResponse {
  /**
   * <p>An array of faces detected and added to the collection. For more information,
   *       see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. </p>
   * @public
   */
  FaceRecords?: FaceRecord[] | undefined;

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
   * @public
   */
  OrientationCorrection?: OrientationCorrection | undefined;

  /**
   * <p>The version number of the face detection model that's associated with the input
   *       collection (<code>CollectionId</code>).</p>
   * @public
   */
  FaceModelVersion?: string | undefined;

  /**
   * <p>An array of faces that were detected in the image but weren't indexed. They weren't
   *       indexed because the quality filter identified them as low quality, or the
   *         <code>MaxFaces</code> request parameter filtered them out. To use the quality filter, you
   *       specify the <code>QualityFilter</code> request parameter.</p>
   * @public
   */
  UnindexedFaces?: UnindexedFace[] | undefined;
}

/**
 * <p>Indicates that a provided manifest file is empty or larger than the allowed limit.</p>
 * @public
 */
export class InvalidManifestException extends __BaseException {
  readonly name: "InvalidManifestException" = "InvalidManifestException";
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
  constructor(opts: __ExceptionOptionType<InvalidManifestException, __BaseException>) {
    super({
      name: "InvalidManifestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidManifestException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Specifies the starting point in a Kinesis stream to start processing. You can use the
 *             producer timestamp or the fragment number. One of either producer timestamp or fragment
 *             number is required. If you use the producer timestamp, you must put the time in
 *             milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>. </p>
 * @public
 */
export interface KinesisVideoStreamStartSelector {
  /**
   * <p> The timestamp from the producer corresponding to the fragment, in milliseconds,
   *             expressed in unix time format. </p>
   * @public
   */
  ProducerTimestamp?: number | undefined;

  /**
   * <p>
   *             The unique identifier of the fragment. This value monotonically increases based on the ingestion order.
   *         </p>
   * @public
   */
  FragmentNumber?: string | undefined;
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
 * <p>Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.</p>
 * @public
 */
export interface LabelDetectionSettings {
  /**
   * <p>Contains filters for the object labels returned by DetectLabels. Filters can be inclusive,
   *       exclusive, or a combination of both and can be applied to individual labels or entire label
   *       categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>.</p>
   * @public
   */
  GeneralLabels?: GeneralLabelsSettings | undefined;
}

/**
 * @public
 */
export interface ListCollectionsRequest {
  /**
   * <p>Pagination token from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of collection IDs to return. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCollectionsResponse {
  /**
   * <p>An array of collection IDs.</p>
   * @public
   */
  CollectionIds?: string[] | undefined;

  /**
   * <p>If the result is truncated, the response provides a <code>NextToken</code> that you can
   *       use in the subsequent request to fetch the next set of collection IDs.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Version numbers of the face detection models associated with the collections in the
   *       array <code>CollectionIds</code>. For example, the value of <code>FaceModelVersions[2]</code>
   *       is the version number for the face detection model used by the collection in
   *         <code>CollectionId[2]</code>.</p>
   * @public
   */
  FaceModelVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDatasetEntriesRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) for the dataset that you want to use.
   * </p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>Specifies a label filter for the response. The response includes an entry only if one or more of the labels in <code>ContainsLabels</code> exist in the entry.
   *       </p>
   * @public
   */
  ContainsLabels?: string[] | undefined;

  /**
   * <p>
   *    Specify <code>true</code> to get only the JSON Lines where the image is labeled.
   *    Specify <code>false</code> to get only the JSON Lines where the image isn't labeled. If you
   *    don't specify <code>Labeled</code>, <code>ListDatasetEntries</code> returns JSON Lines for labeled and unlabeled
   *    images.
   * </p>
   * @public
   */
  Labeled?: boolean | undefined;

  /**
   * <p>If specified, <code>ListDatasetEntries</code> only returns JSON Lines where the value of <code>SourceRefContains</code> is
   *    part of the <code>source-ref</code> field. The <code>source-ref</code> field contains the Amazon S3 location of the image.
   *    You can use <code>SouceRefContains</code> for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific folder.</p>
   * @public
   */
  SourceRefContains?: string | undefined;

  /**
   * <p>Specifies an error filter for the response. Specify <code>True</code> to only include entries that have errors.
   *       </p>
   * @public
   */
  HasErrors?: boolean | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *       If you specify a value greater than 100, a ValidationException
   *       error occurs. The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetEntriesResponse {
  /**
   * <p>
   * A list of entries (images) in the dataset.
   * </p>
   * @public
   */
  DatasetEntries?: string[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetLabelsRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to use.
   * </p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *       If you specify a value greater than 100, a ValidationException
   *       error occurs. The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetLabelsResponse {
  /**
   * <p>
   * A list of the labels in the dataset.
   * </p>
   * @public
   */
  DatasetLabelDescriptions?: DatasetLabelDescription[] | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacesRequest {
  /**
   * <p>ID of the collection from which to list the faces.</p>
   * @public
   */
  CollectionId: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Rekognition returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of faces.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of faces to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of user IDs to filter results with when listing faces in a collection.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>An array of face IDs to filter results with when listing faces in a collection.</p>
   * @public
   */
  FaceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFacesResponse {
  /**
   * <p>An array of <code>Face</code> objects. </p>
   * @public
   */
  Faces?: Face[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the
   *       subsequent request to retrieve the next set of faces.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListMediaAnalysisJobsRequest {
  /**
   * <p>Pagination token, if the previous response was incomplete.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value user can specify is 100.
   *         If user specifies a value greater than 100, an <code>InvalidParameterException</code> error occurs. The default value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Description for a media analysis job.</p>
 * @public
 */
export interface MediaAnalysisJobDescription {
  /**
   * <p>The identifier for a media analysis job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The name of a media analysis job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Operation configurations that were provided during job creation.</p>
   * @public
   */
  OperationsConfig: MediaAnalysisOperationsConfig | undefined;

  /**
   * <p>The status of the media analysis job being retrieved.</p>
   * @public
   */
  Status: MediaAnalysisJobStatus | undefined;

  /**
   * <p>Details about the error that resulted in failure of the job.</p>
   * @public
   */
  FailureDetails?: MediaAnalysisJobFailureDetails | undefined;

  /**
   * <p>The Unix date and time when the job was started.</p>
   * @public
   */
  CreationTimestamp: Date | undefined;

  /**
   * <p>The Unix date and time when the job finished.</p>
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * <p>Reference to the input manifest that was provided in the job creation request.</p>
   * @public
   */
  Input: MediaAnalysisInput | undefined;

  /**
   * <p>Output configuration that was provided in the creation request.</p>
   * @public
   */
  OutputConfig: MediaAnalysisOutputConfig | undefined;

  /**
   * <p>KMS Key that was provided in the creation request.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Output manifest that contains prediction results.</p>
   * @public
   */
  Results?: MediaAnalysisResults | undefined;

  /**
   * <p>Provides statistics on input manifest and errors identified in the input manifest.</p>
   * @public
   */
  ManifestSummary?: MediaAnalysisManifestSummary | undefined;
}

/**
 * @public
 */
export interface ListMediaAnalysisJobsResponse {
  /**
   * <p>Pagination token, if the previous response was incomplete.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Contains a list of all media analysis jobs.</p>
   * @public
   */
  MediaAnalysisJobs: MediaAnalysisJobDescription[] | undefined;
}

/**
 * @public
 */
export interface ListProjectPoliciesRequest {
  /**
   * <p>The ARN of the project for which you want to list the project policies.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more results to retrieve),
   *          Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token
   *          to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 5. If you specify a value greater than 5, a ValidationException error
   *          occurs. The default value is 5. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p>
 *          <p> </p>
 * @public
 */
export interface ProjectPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the project to which the project policy is attached.</p>
   * @public
   */
  ProjectArn?: string | undefined;

  /**
   * <p>The name of the project policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The revision ID of the project policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>The JSON document for the project policy.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The Unix datetime for the creation of the project policy.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The Unix datetime for when the project policy was last updated. </p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectPoliciesResponse {
  /**
   * <p>A list of project policies attached to the project.</p>
   * @public
   */
  ProjectPolicies?: ProjectPolicy[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the
   *       subsequent request to retrieve the next set of project policies.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamProcessorsRequest {
  /**
   * <p>If the previous response was incomplete (because there are more stream processors to retrieve), Amazon Rekognition Video
   *             returns a pagination token in the response. You can use this pagination token to retrieve the next set of stream processors. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is 1000. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>.  The request
 *         parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.
 *
 *         </p>
 * @public
 */
export interface StreamProcessor {
  /**
   * <p>Name of the Amazon Rekognition stream processor. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Current status of the Amazon Rekognition stream processor.</p>
   * @public
   */
  Status?: StreamProcessorStatus | undefined;
}

/**
 * @public
 */
export interface ListStreamProcessorsResponse {
  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
   *             request to retrieve the next set of stream processors. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of stream processors that you have created.</p>
   * @public
   */
  StreamProcessors?: StreamProcessor[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> Amazon Resource Name (ARN) of the model, collection, or stream processor that contains
   *       the tags that you want a list of. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of key-value tags assigned to the resource. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}
