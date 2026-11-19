// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const WebIdentityTokenSubjectModeType = {
  AWS_IDENTITY: "AWSIdentity",
  ORIGIN_IDENTITY: "OriginIdentity",
} as const;
/**
 * @public
 */
export type WebIdentityTokenSubjectModeType =
  (typeof WebIdentityTokenSubjectModeType)[keyof typeof WebIdentityTokenSubjectModeType];
