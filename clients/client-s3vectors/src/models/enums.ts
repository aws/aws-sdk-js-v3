// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DataType = {
  FLOAT32: "float32",
} as const;
/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * @public
 * @enum
 */
export const DistanceMetric = {
  COSINE: "cosine",
  EUCLIDEAN: "euclidean",
} as const;
/**
 * @public
 */
export type DistanceMetric = (typeof DistanceMetric)[keyof typeof DistanceMetric];

/**
 * @public
 * @enum
 */
export const SseType = {
  AES256: "AES256",
  AWS_KMS: "aws:kms",
} as const;
/**
 * @public
 */
export type SseType = (typeof SseType)[keyof typeof SseType];
