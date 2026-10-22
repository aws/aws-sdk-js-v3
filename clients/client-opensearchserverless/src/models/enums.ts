// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessPolicyType = {
  /**
   * data policy type
   */
  data: "data",
} as const;
/**
 * @public
 */
export type AccessPolicyType = (typeof AccessPolicyType)[keyof typeof AccessPolicyType];

/**
 * @public
 * @enum
 */
export const AutoscalingStatus = {
  ACTION_SCALING_DOWN: "ACTION_SCALING_DOWN",
  ACTION_SCALING_UP: "ACTION_SCALING_UP",
  NO_ACTION: "NO_ACTION",
} as const;
/**
 * @public
 */
export type AutoscalingStatus = (typeof AutoscalingStatus)[keyof typeof AutoscalingStatus];

/**
 * @public
 * @enum
 */
export const DeletionProtection = {
  /**
   * Deletion protection disabled
   */
  DISABLED: "DISABLED",
  /**
   * Deletion protection enabled
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DeletionProtection = (typeof DeletionProtection)[keyof typeof DeletionProtection];

/**
 * @public
 * @enum
 */
export const StandbyReplicas = {
  /**
   * Standby replicas disabled
   */
  DISABLED: "DISABLED",
  /**
   * Standby replicas enabled
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type StandbyReplicas = (typeof StandbyReplicas)[keyof typeof StandbyReplicas];

/**
 * @public
 * @enum
 */
export const CollectionStatus = {
  /**
   * Collection resource is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Creating collection resource
   */
  CREATING: "CREATING",
  /**
   * Deleting collection resource
   */
  DELETING: "DELETING",
  /**
   * Collection resource create or delete failed
   */
  FAILED: "FAILED",
  /**
   * Collection resource update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Updating collection resource
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CollectionStatus = (typeof CollectionStatus)[keyof typeof CollectionStatus];

/**
 * @public
 * @enum
 */
export const CollectionType = {
  /**
   * Search collection type
   */
  SEARCH: "SEARCH",
  /**
   * Timeseries collection type
   */
  TIMESERIES: "TIMESERIES",
  /**
   * Vectorsearch collection type
   */
  VECTORSEARCH: "VECTORSEARCH",
} as const;
/**
 * @public
 */
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType];

/**
 * @public
 * @enum
 */
export const ServerlessVectorAccelerationStatus = {
  /**
   * Serverless vector acceleration is allowed but not enabled by default
   */
  ALLOWED: "ALLOWED",
  /**
   * Serverless vector acceleration is disabled
   */
  DISABLED: "DISABLED",
  /**
   * Serverless vector acceleration is enabled by default
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ServerlessVectorAccelerationStatus =
  (typeof ServerlessVectorAccelerationStatus)[keyof typeof ServerlessVectorAccelerationStatus];

/**
 * @public
 * @enum
 */
export const ServerlessGeneration = {
  CLASSIC: "CLASSIC",
  NEXTGEN: "NEXTGEN",
} as const;
/**
 * @public
 */
export type ServerlessGeneration = (typeof ServerlessGeneration)[keyof typeof ServerlessGeneration];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyType = {
  /**
   * retention policy type
   */
  retention: "retention",
} as const;
/**
 * @public
 */
export type LifecyclePolicyType = (typeof LifecyclePolicyType)[keyof typeof LifecyclePolicyType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  /**
   * index resource type
   */
  index: "index",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const VpcEndpointStatus = {
  /**
   * VPCEndpoint resource is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Deleting VPCEndpoint resource
   */
  DELETING: "DELETING",
  /**
   * VPCEndpoint resource create or delete failed
   */
  FAILED: "FAILED",
  /**
   * Pending VPCEndpoint resource
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type VpcEndpointStatus = (typeof VpcEndpointStatus)[keyof typeof VpcEndpointStatus];

/**
 * @public
 * @enum
 */
export const IngestionJobStatus = {
  /**
   * Ingestion job is provisioned and ingesting
   */
  ACTIVE: "ACTIVE",
  /**
   * Ingestion job was cancelled
   */
  CANCELLED: "CANCELLED",
  /**
   * Ingestion job is being cancelled
   */
  CANCELLING: "CANCELLING",
  /**
   * Ingestion job cancellation failed
   */
  CANCEL_FAILED: "CANCEL_FAILED",
  /**
   * Bulk ingestion finished; job is complete
   */
  COMPLETED: "COMPLETED",
  /**
   * Ingestion job creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Ingestion job is being created
   */
  CREATING: "CREATING",
  /**
   * Ingestion job failed terminally (no retry)
   */
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * @public
 * @enum
 */
export const IamIdentityCenterGroupAttribute = {
  /**
   * Group ID
   */
  GroupId: "GroupId",
  /**
   * Group Name
   */
  GroupName: "GroupName",
} as const;
/**
 * @public
 */
export type IamIdentityCenterGroupAttribute =
  (typeof IamIdentityCenterGroupAttribute)[keyof typeof IamIdentityCenterGroupAttribute];

/**
 * @public
 * @enum
 */
export const IamIdentityCenterUserAttribute = {
  /**
   * Email
   */
  Email: "Email",
  /**
   * User ID
   */
  UserId: "UserId",
  /**
   * User Name
   */
  UserName: "UserName",
} as const;
/**
 * @public
 */
export type IamIdentityCenterUserAttribute =
  (typeof IamIdentityCenterUserAttribute)[keyof typeof IamIdentityCenterUserAttribute];

/**
 * @public
 * @enum
 */
export const IngestionAlertCode = {
  DESTINATION_ACCESS_DENIED: "DESTINATION_ACCESS_DENIED",
  DESTINATION_RESOURCE_NOT_FOUND: "DESTINATION_RESOURCE_NOT_FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  SOURCE_ACCESS_DENIED: "SOURCE_ACCESS_DENIED",
  SOURCE_RESOURCE_NOT_FOUND: "SOURCE_RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type IngestionAlertCode = (typeof IngestionAlertCode)[keyof typeof IngestionAlertCode];

/**
 * @public
 * @enum
 */
export const IngestionFailureCode = {
  DESTINATION_ACCESS_DENIED: "DESTINATION_ACCESS_DENIED",
  DESTINATION_RESOURCE_NOT_FOUND: "DESTINATION_RESOURCE_NOT_FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  SOURCE_ACCESS_DENIED: "SOURCE_ACCESS_DENIED",
  SOURCE_RESOURCE_NOT_FOUND: "SOURCE_RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type IngestionFailureCode = (typeof IngestionFailureCode)[keyof typeof IngestionFailureCode];

/**
 * @public
 * @enum
 */
export const IngestionState = {
  /**
   * Ingestion runtime failure (terminal)
   */
  FAILED: "FAILED",
  /**
   * Bulk ingestion finished
   */
  INGESTION_COMPLETE: "INGESTION_COMPLETE",
  /**
   * Documents are being read, chunked and indexed
   */
  INGESTION_IN_PROGRESS: "INGESTION_IN_PROGRESS",
  /**
   * Bulk source scan in progress
   */
  SCANNING: "SCANNING",
  /**
   * Ingestion is initializing
   */
  STARTING: "STARTING",
  /**
   * Ingestion halted (recoverable)
   */
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type IngestionState = (typeof IngestionState)[keyof typeof IngestionState];

/**
 * @public
 * @enum
 */
export const InitialScan = {
  /**
   * Skip the one-time delta scan and process SQS notifications only
   */
  DISABLED: "DISABLED",
  /**
   * Perform a one-time delta scan of existing S3 objects before processing SQS notifications
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type InitialScan = (typeof InitialScan)[keyof typeof InitialScan];

/**
 * @public
 * @enum
 */
export const IngestionStreamStatus = {
  /**
   * Ingestion stream is provisioned and ingesting
   */
  ACTIVE: "ACTIVE",
  /**
   * Ingestion stream creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Ingestion stream is being created
   */
  CREATING: "CREATING",
  /**
   * Ingestion stream was deleted
   */
  DELETED: "DELETED",
  /**
   * Ingestion stream deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Ingestion stream is being deleted
   */
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type IngestionStreamStatus = (typeof IngestionStreamStatus)[keyof typeof IngestionStreamStatus];

/**
 * @public
 * @enum
 */
export const SecurityConfigType = {
  /**
   * iam federation
   */
  iamfederation: "iamfederation",
  /**
   * iam identity center
   */
  iamidentitycenter: "iamidentitycenter",
  /**
   * saml provider
   */
  saml: "saml",
} as const;
/**
 * @public
 */
export type SecurityConfigType = (typeof SecurityConfigType)[keyof typeof SecurityConfigType];

/**
 * @public
 * @enum
 */
export const SecurityPolicyType = {
  /**
   * encryption policy type
   */
  encryption: "encryption",
  /**
   * network policy type
   */
  network: "network",
} as const;
/**
 * @public
 */
export type SecurityPolicyType = (typeof SecurityPolicyType)[keyof typeof SecurityPolicyType];
