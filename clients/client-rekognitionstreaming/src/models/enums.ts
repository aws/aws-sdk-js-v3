// smithy-typescript generated code
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
export const LightChallengeType = {
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type LightChallengeType = (typeof LightChallengeType)[keyof typeof LightChallengeType];
