// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  NOT_SUPPORTED: "notSupported",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 */
export type ResourceType =
  | "AWS::DynamoDB::Stream"
  | "AWS::DynamoDB::Table"
  | "AWS::EC2::Snapshot"
  | "AWS::ECR::Repository"
  | "AWS::EFS::FileSystem"
  | "AWS::IAM::Role"
  | "AWS::IAM::User"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::RDS::DBClusterSnapshot"
  | "AWS::RDS::DBSnapshot"
  | "AWS::S3::Bucket"
  | "AWS::S3Express::DirectoryBucket"
  | "AWS::SNS::Topic"
  | "AWS::SQS::Queue"
  | "AWS::SecretsManager::Secret";

/**
 * @public
 */
export type Type =
  | "ACCOUNT"
  | "ACCOUNT_INTERNAL_ACCESS"
  | "ACCOUNT_UNUSED_ACCESS"
  | "ORGANIZATION"
  | "ORGANIZATION_INTERNAL_ACCESS"
  | "ORGANIZATION_UNUSED_ACCESS";

/**
 * @public
 */
export type AnalyzerStatus = "ACTIVE" | "CREATING" | "DISABLED" | "FAILED";

/**
 * @public
 */
export type ReasonCode =
  | "AWS_SERVICE_ACCESS_DISABLED"
  | "DELEGATED_ADMINISTRATOR_DEREGISTERED"
  | "ORGANIZATION_DELETED"
  | "SERVICE_LINKED_ROLE_CREATION_FAILED";

/**
 * @public
 * @enum
 */
export const AccessCheckPolicyType = {
  IDENTITY_POLICY: "IDENTITY_POLICY",
  RESOURCE_POLICY: "RESOURCE_POLICY",
} as const;
/**
 * @public
 */
export type AccessCheckPolicyType = (typeof AccessCheckPolicyType)[keyof typeof AccessCheckPolicyType];

/**
 * @public
 * @enum
 */
export const CheckAccessNotGrantedResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;
/**
 * @public
 */
export type CheckAccessNotGrantedResult =
  (typeof CheckAccessNotGrantedResult)[keyof typeof CheckAccessNotGrantedResult];

/**
 * @public
 * @enum
 */
export const CheckNoNewAccessResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;
/**
 * @public
 */
export type CheckNoNewAccessResult = (typeof CheckNoNewAccessResult)[keyof typeof CheckNoNewAccessResult];

/**
 * @public
 * @enum
 */
export const AccessCheckResourceType = {
  API_GATEWAY_REST_API: "AWS::ApiGateway::RestApi",
  BACKUP_VAULT: "AWS::Backup::BackupVault",
  CLOUDTRAIL_DASHBOARD: "AWS::CloudTrail::Dashboard",
  CLOUDTRAIL_EVENT_DATA_STORE: "AWS::CloudTrail::EventDataStore",
  CODE_ARTIFACT_DOMAIN: "AWS::CodeArtifact::Domain",
  DYNAMODB_STREAM: "AWS::DynamoDB::Stream",
  DYNAMODB_TABLE: "AWS::DynamoDB::Table",
  EFS_FILESYSTEM: "AWS::EFS::FileSystem",
  KINESIS_DATA_STREAM: "AWS::Kinesis::Stream",
  KINESIS_STREAM_CONSUMER: "AWS::Kinesis::StreamConsumer",
  KMS_KEY: "AWS::KMS::Key",
  LAMBDA_FUNCTION: "AWS::Lambda::Function",
  OPENSEARCHSERVICE_DOMAIN: "AWS::OpenSearchService::Domain",
  ROLE_TRUST: "AWS::IAM::AssumeRolePolicyDocument",
  S3EXPRESS_DIRECTORYBUCKET: "AWS::S3Express::DirectoryBucket",
  S3_ACCESS_POINT: "AWS::S3::AccessPoint",
  S3_BUCKET: "AWS::S3::Bucket",
  S3_EXPRESS_ACCESS_POINT: "AWS::S3Express::AccessPoint",
  S3_GLACIER: "AWS::S3::Glacier",
  S3_OUTPOSTS_ACCESS_POINT: "AWS::S3Outposts::AccessPoint",
  S3_OUTPOSTS_BUCKET: "AWS::S3Outposts::Bucket",
  S3_TABLE: "AWS::S3Tables::Table",
  S3_TABLE_BUCKET: "AWS::S3Tables::TableBucket",
  SECRETSMANAGER_SECRET: "AWS::SecretsManager::Secret",
  SNS_TOPIC: "AWS::SNS::Topic",
  SQS_QUEUE: "AWS::SQS::Queue",
} as const;
/**
 * @public
 */
export type AccessCheckResourceType = (typeof AccessCheckResourceType)[keyof typeof AccessCheckResourceType];

/**
 * @public
 * @enum
 */
export const CheckNoPublicAccessResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;
/**
 * @public
 */
export type CheckNoPublicAccessResult = (typeof CheckNoPublicAccessResult)[keyof typeof CheckNoPublicAccessResult];

/**
 * @public
 * @enum
 */
export const KmsGrantOperation = {
  CREATE_GRANT: "CreateGrant",
  DECRYPT: "Decrypt",
  DESCRIBE_KEY: "DescribeKey",
  ENCRYPT: "Encrypt",
  GENERATE_DATA_KEY: "GenerateDataKey",
  GENERATE_DATA_KEY_PAIR: "GenerateDataKeyPair",
  GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT: "GenerateDataKeyPairWithoutPlaintext",
  GENERATE_DATA_KEY_WITHOUT_PLAINTEXT: "GenerateDataKeyWithoutPlaintext",
  GET_PUBLIC_KEY: "GetPublicKey",
  REENCRYPT_FROM: "ReEncryptFrom",
  REENCRYPT_TO: "ReEncryptTo",
  RETIRE_GRANT: "RetireGrant",
  SIGN: "Sign",
  VERIFY: "Verify",
} as const;
/**
 * @public
 */
export type KmsGrantOperation = (typeof KmsGrantOperation)[keyof typeof KmsGrantOperation];

/**
 * @public
 * @enum
 */
export const AclPermission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;
/**
 * @public
 */
export type AclPermission = (typeof AclPermission)[keyof typeof AclPermission];

/**
 * @public
 * @enum
 */
export const AccessPreviewStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type AccessPreviewStatus = (typeof AccessPreviewStatus)[keyof typeof AccessPreviewStatus];

/**
 * @public
 * @enum
 */
export const AccessPreviewStatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
} as const;
/**
 * @public
 */
export type AccessPreviewStatusReasonCode =
  (typeof AccessPreviewStatusReasonCode)[keyof typeof AccessPreviewStatusReasonCode];

/**
 * @public
 */
export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

/**
 * @public
 * @enum
 */
export const ResourceControlPolicyRestriction = {
  APPLICABLE: "APPLICABLE",
  APPLIED: "APPLIED",
  FAILED_TO_EVALUATE_RCP: "FAILED_TO_EVALUATE_RCP",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type ResourceControlPolicyRestriction =
  (typeof ResourceControlPolicyRestriction)[keyof typeof ResourceControlPolicyRestriction];

/**
 * @public
 */
export type FindingSourceType = "BUCKET_ACL" | "POLICY" | "S3_ACCESS_POINT" | "S3_ACCESS_POINT_ACCOUNT";

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  UNUSED_PERMISSION_RECOMMENDATION: "UnusedPermissionRecommendation",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const RecommendedRemediationAction = {
  CREATE_POLICY: "CREATE_POLICY",
  DETACH_POLICY: "DETACH_POLICY",
} as const;
/**
 * @public
 */
export type RecommendedRemediationAction =
  (typeof RecommendedRemediationAction)[keyof typeof RecommendedRemediationAction];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const InternalAccessType = {
  INTRA_ACCOUNT: "INTRA_ACCOUNT",
  INTRA_ORG: "INTRA_ORG",
} as const;
/**
 * @public
 */
export type InternalAccessType = (typeof InternalAccessType)[keyof typeof InternalAccessType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ServiceControlPolicyRestriction = {
  APPLICABLE: "APPLICABLE",
  APPLIED: "APPLIED",
  FAILED_TO_EVALUATE_SCP: "FAILED_TO_EVALUATE_SCP",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type ServiceControlPolicyRestriction =
  (typeof ServiceControlPolicyRestriction)[keyof typeof ServiceControlPolicyRestriction];

/**
 * @public
 * @enum
 */
export const FindingType = {
  EXTERNAL_ACCESS: "ExternalAccess",
  INTERNAL_ACCESS: "InternalAccess",
  UNUSED_IAM_ROLE: "UnusedIAMRole",
  UNUSED_IAM_USER_ACCESS_KEY: "UnusedIAMUserAccessKey",
  UNUSED_IAM_USER_PASSWORD: "UnusedIAMUserPassword",
  UNUSED_PERMISSION: "UnusedPermission",
} as const;
/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 * @enum
 */
export const JobErrorCode = {
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  RESOURCE_NOT_FOUND_ERROR: "RESOURCE_NOT_FOUND_ERROR",
  SERVICE_ERROR: "SERVICE_ERROR",
  SERVICE_QUOTA_EXCEEDED_ERROR: "SERVICE_QUOTA_EXCEEDED_ERROR",
} as const;
/**
 * @public
 */
export type JobErrorCode = (typeof JobErrorCode)[keyof typeof JobErrorCode];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const FindingChangeType = {
  CHANGED: "CHANGED",
  NEW: "NEW",
  UNCHANGED: "UNCHANGED",
} as const;
/**
 * @public
 */
export type FindingChangeType = (typeof FindingChangeType)[keyof typeof FindingChangeType];

/**
 * @public
 */
export type OrderBy = "ASC" | "DESC";

/**
 * @public
 */
export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * @public
 * @enum
 */
export const Locale = {
  DE: "DE",
  EN: "EN",
  ES: "ES",
  FR: "FR",
  IT: "IT",
  JA: "JA",
  KO: "KO",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;
/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  IDENTITY_POLICY: "IDENTITY_POLICY",
  RESOURCE_CONTROL_POLICY: "RESOURCE_CONTROL_POLICY",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  SERVICE_CONTROL_POLICY: "SERVICE_CONTROL_POLICY",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ValidatePolicyResourceType = {
  DYNAMODB_TABLE: "AWS::DynamoDB::Table",
  ROLE_TRUST: "AWS::IAM::AssumeRolePolicyDocument",
  S3_ACCESS_POINT: "AWS::S3::AccessPoint",
  S3_BUCKET: "AWS::S3::Bucket",
  S3_MULTI_REGION_ACCESS_POINT: "AWS::S3::MultiRegionAccessPoint",
  S3_OBJECT_LAMBDA_ACCESS_POINT: "AWS::S3ObjectLambda::AccessPoint",
} as const;
/**
 * @public
 */
export type ValidatePolicyResourceType = (typeof ValidatePolicyResourceType)[keyof typeof ValidatePolicyResourceType];

/**
 * @public
 * @enum
 */
export const ValidatePolicyFindingType = {
  ERROR: "ERROR",
  SECURITY_WARNING: "SECURITY_WARNING",
  SUGGESTION: "SUGGESTION",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ValidatePolicyFindingType = (typeof ValidatePolicyFindingType)[keyof typeof ValidatePolicyFindingType];
