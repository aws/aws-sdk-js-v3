// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Type = {
  AmazonCustomerByEmail: "AmazonCustomerByEmail",
  CanonicalUser: "CanonicalUser",
  Group: "Group",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const ActionCode = {
  ArchiveRetrieval: "ArchiveRetrieval",
  InventoryRetrieval: "InventoryRetrieval",
  Select: "Select",
} as const;
/**
 * @public
 */
export type ActionCode = (typeof ActionCode)[keyof typeof ActionCode];

/**
 * @public
 * @enum
 */
export const CannedACL = {
  AuthenticatedRead: "authenticated-read",
  AwsExecRead: "aws-exec-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  BucketOwnerRead: "bucket-owner-read",
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
} as const;
/**
 * @public
 */
export type CannedACL = (typeof CannedACL)[keyof typeof CannedACL];

/**
 * @public
 * @enum
 */
export const FileHeaderInfo = {
  Ignore: "IGNORE",
  None: "NONE",
  Use: "USE",
} as const;
/**
 * @public
 */
export type FileHeaderInfo = (typeof FileHeaderInfo)[keyof typeof FileHeaderInfo];

/**
 * @public
 * @enum
 */
export const QuoteFields = {
  Always: "ALWAYS",
  AsNeeded: "ASNEEDED",
} as const;
/**
 * @public
 */
export type QuoteFields = (typeof QuoteFields)[keyof typeof QuoteFields];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "aws:kms",
  S3: "AES256",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  ReducedRedundancy: "REDUCED_REDUNDANCY",
  Standard: "STANDARD",
  StandardInfrequentAccess: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const ExpressionType = {
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type ExpressionType = (typeof ExpressionType)[keyof typeof ExpressionType];

/**
 * @public
 * @enum
 */
export const StatusCode = {
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode];
