// smithy-typescript generated code
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
