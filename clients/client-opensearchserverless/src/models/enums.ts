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
