// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LayerFailureCode = {
  InvalidLayerDigest: "InvalidLayerDigest",
  MissingLayerDigest: "MissingLayerDigest",
} as const;
/**
 * @public
 */
export type LayerFailureCode = (typeof LayerFailureCode)[keyof typeof LayerFailureCode];

/**
 * @public
 * @enum
 */
export const LayerAvailability = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type LayerAvailability = (typeof LayerAvailability)[keyof typeof LayerAvailability];

/**
 * @public
 * @enum
 */
export const ImageFailureCode = {
  ImageNotFound: "ImageNotFound",
  ImageReferencedByManifestList: "ImageReferencedByManifestList",
  ImageTagDoesNotMatchDigest: "ImageTagDoesNotMatchDigest",
  InvalidImageDigest: "InvalidImageDigest",
  InvalidImageTag: "InvalidImageTag",
  KmsError: "KmsError",
  MissingDigestAndTag: "MissingDigestAndTag",
} as const;
/**
 * @public
 */
export type ImageFailureCode = (typeof ImageFailureCode)[keyof typeof ImageFailureCode];

/**
 * @public
 * @enum
 */
export const RegistryAliasStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type RegistryAliasStatus = (typeof RegistryAliasStatus)[keyof typeof RegistryAliasStatus];
