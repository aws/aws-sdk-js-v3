// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AnomalyDetectorStatusCode = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AnomalyDetectorStatusCode = (typeof AnomalyDetectorStatusCode)[keyof typeof AnomalyDetectorStatusCode];
