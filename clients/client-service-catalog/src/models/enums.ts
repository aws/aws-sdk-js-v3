// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PortfolioShareType = {
  AWS_ORGANIZATIONS: "AWS_ORGANIZATIONS",
  AWS_SERVICECATALOG: "AWS_SERVICECATALOG",
  IMPORTED: "IMPORTED",
} as const;
/**
 * @public
 */
export type PortfolioShareType = (typeof PortfolioShareType)[keyof typeof PortfolioShareType];

/**
 * @public
 * @enum
 */
export const AccessLevelFilterKey = {
  ACCOUNT: "Account",
  ROLE: "Role",
  USER: "User",
} as const;
/**
 * @public
 */
export type AccessLevelFilterKey = (typeof AccessLevelFilterKey)[keyof typeof AccessLevelFilterKey];

/**
 * @public
 * @enum
 */
export const AccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;
/**
 * @public
 */
export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  IAM: "IAM",
  IAM_PATTERN: "IAM_PATTERN",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ServiceActionAssociationErrorCode = {
  DuplicateResourceException: "DUPLICATE_RESOURCE",
  InternalFailure: "INTERNAL_FAILURE",
  InvalidParameterException: "INVALID_PARAMETER",
  LimitExceededException: "LIMIT_EXCEEDED",
  ResourceNotFoundException: "RESOURCE_NOT_FOUND",
  ThrottlingException: "THROTTLING",
} as const;
/**
 * @public
 */
export type ServiceActionAssociationErrorCode =
  (typeof ServiceActionAssociationErrorCode)[keyof typeof ServiceActionAssociationErrorCode];

/**
 * @public
 * @enum
 */
export const CopyOption = {
  CopyTags: "CopyTags",
} as const;
/**
 * @public
 */
export type CopyOption = (typeof CopyOption)[keyof typeof CopyOption];

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactPropertyName = {
  Id: "Id",
} as const;
/**
 * @public
 */
export type ProvisioningArtifactPropertyName =
  (typeof ProvisioningArtifactPropertyName)[keyof typeof ProvisioningArtifactPropertyName];

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const OrganizationNodeType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
} as const;
/**
 * @public
 */
export type OrganizationNodeType = (typeof OrganizationNodeType)[keyof typeof OrganizationNodeType];

/**
 * @public
 * @enum
 */
export const ProductType = {
  CLOUD_FORMATION_TEMPLATE: "CLOUD_FORMATION_TEMPLATE",
  EXTERNAL: "EXTERNAL",
  MARKETPLACE: "MARKETPLACE",
  TERRAFORM_CLOUD: "TERRAFORM_CLOUD",
  TERRAFORM_OPEN_SOURCE: "TERRAFORM_OPEN_SOURCE",
} as const;
/**
 * @public
 */
export type ProductType = (typeof ProductType)[keyof typeof ProductType];

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactType = {
  CLOUD_FORMATION_TEMPLATE: "CLOUD_FORMATION_TEMPLATE",
  EXTERNAL: "EXTERNAL",
  MARKETPLACE_AMI: "MARKETPLACE_AMI",
  MARKETPLACE_CAR: "MARKETPLACE_CAR",
  TERRAFORM_CLOUD: "TERRAFORM_CLOUD",
  TERRAFORM_OPEN_SOURCE: "TERRAFORM_OPEN_SOURCE",
} as const;
/**
 * @public
 */
export type ProvisioningArtifactType = (typeof ProvisioningArtifactType)[keyof typeof ProvisioningArtifactType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  CODESTAR: "CODESTAR",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const LastSyncStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LastSyncStatus = (typeof LastSyncStatus)[keyof typeof LastSyncStatus];

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactGuidance = {
  DEFAULT: "DEFAULT",
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type ProvisioningArtifactGuidance =
  (typeof ProvisioningArtifactGuidance)[keyof typeof ProvisioningArtifactGuidance];

/**
 * @public
 * @enum
 */
export const ProvisionedProductPlanType = {
  CLOUDFORMATION: "CLOUDFORMATION",
} as const;
/**
 * @public
 */
export type ProvisionedProductPlanType = (typeof ProvisionedProductPlanType)[keyof typeof ProvisionedProductPlanType];

/**
 * @public
 * @enum
 */
export const ServiceActionDefinitionKey = {
  AssumeRole: "AssumeRole",
  Name: "Name",
  Parameters: "Parameters",
  Version: "Version",
} as const;
/**
 * @public
 */
export type ServiceActionDefinitionKey = (typeof ServiceActionDefinitionKey)[keyof typeof ServiceActionDefinitionKey];

/**
 * @public
 * @enum
 */
export const ServiceActionDefinitionType = {
  SsmAutomation: "SSM_AUTOMATION",
} as const;
/**
 * @public
 */
export type ServiceActionDefinitionType =
  (typeof ServiceActionDefinitionType)[keyof typeof ServiceActionDefinitionType];

/**
 * @public
 * @enum
 */
export const CopyProductStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CopyProductStatus = (typeof CopyProductStatus)[keyof typeof CopyProductStatus];

/**
 * @public
 * @enum
 */
export const DescribePortfolioShareType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ORGANIZATION_MEMBER_ACCOUNT: "ORGANIZATION_MEMBER_ACCOUNT",
} as const;
/**
 * @public
 */
export type DescribePortfolioShareType = (typeof DescribePortfolioShareType)[keyof typeof DescribePortfolioShareType];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const ProvisionedProductStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PLAN_IN_PROGRESS: "PLAN_IN_PROGRESS",
  TAINTED: "TAINTED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;
/**
 * @public
 */
export type ProvisionedProductStatus = (typeof ProvisionedProductStatus)[keyof typeof ProvisionedProductStatus];

/**
 * @public
 * @enum
 */
export const ProvisionedProductPlanStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESS: "CREATE_SUCCESS",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  EXECUTE_SUCCESS: "EXECUTE_SUCCESS",
} as const;
/**
 * @public
 */
export type ProvisionedProductPlanStatus =
  (typeof ProvisionedProductPlanStatus)[keyof typeof ProvisionedProductPlanStatus];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const ResourceAttribute = {
  CREATIONPOLICY: "CREATIONPOLICY",
  DELETIONPOLICY: "DELETIONPOLICY",
  METADATA: "METADATA",
  PROPERTIES: "PROPERTIES",
  TAGS: "TAGS",
  UPDATEPOLICY: "UPDATEPOLICY",
} as const;
/**
 * @public
 */
export type ResourceAttribute = (typeof ResourceAttribute)[keyof typeof ResourceAttribute];

/**
 * @public
 * @enum
 */
export const RequiresRecreation = {
  ALWAYS: "ALWAYS",
  CONDITIONALLY: "CONDITIONALLY",
  NEVER: "NEVER",
} as const;
/**
 * @public
 */
export type RequiresRecreation = (typeof RequiresRecreation)[keyof typeof RequiresRecreation];

/**
 * @public
 * @enum
 */
export const Replacement = {
  CONDITIONAL: "CONDITIONAL",
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type Replacement = (typeof Replacement)[keyof typeof Replacement];

/**
 * @public
 * @enum
 */
export const RecordStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  IN_PROGRESS_IN_ERROR: "IN_PROGRESS_IN_ERROR",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus];

/**
 * @public
 * @enum
 */
export const StackInstanceStatus = {
  CURRENT: "CURRENT",
  INOPERABLE: "INOPERABLE",
  OUTDATED: "OUTDATED",
} as const;
/**
 * @public
 */
export type StackInstanceStatus = (typeof StackInstanceStatus)[keyof typeof StackInstanceStatus];

/**
 * @public
 * @enum
 */
export const EngineWorkflowStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type EngineWorkflowStatus = (typeof EngineWorkflowStatus)[keyof typeof EngineWorkflowStatus];

/**
 * @public
 * @enum
 */
export const ProductViewFilterBy = {
  FullTextSearch: "FullTextSearch",
  Owner: "Owner",
  ProductType: "ProductType",
  SourceProductId: "SourceProductId",
} as const;
/**
 * @public
 */
export type ProductViewFilterBy = (typeof ProductViewFilterBy)[keyof typeof ProductViewFilterBy];

/**
 * @public
 * @enum
 */
export const ProductViewSortBy = {
  CreationDate: "CreationDate",
  Title: "Title",
  VersionCount: "VersionCount",
} as const;
/**
 * @public
 */
export type ProductViewSortBy = (typeof ProductViewSortBy)[keyof typeof ProductViewSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const ProductSource = {
  ACCOUNT: "ACCOUNT",
} as const;
/**
 * @public
 */
export type ProductSource = (typeof ProductSource)[keyof typeof ProductSource];

/**
 * @public
 * @enum
 */
export const ProvisionedProductViewFilterBy = {
  SearchQuery: "SearchQuery",
} as const;
/**
 * @public
 */
export type ProvisionedProductViewFilterBy =
  (typeof ProvisionedProductViewFilterBy)[keyof typeof ProvisionedProductViewFilterBy];

/**
 * @public
 * @enum
 */
export const StackSetOperationType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type StackSetOperationType = (typeof StackSetOperationType)[keyof typeof StackSetOperationType];

/**
 * @public
 * @enum
 */
export const PropertyKey = {
  LaunchRole: "LAUNCH_ROLE",
  Owner: "OWNER",
} as const;
/**
 * @public
 */
export type PropertyKey = (typeof PropertyKey)[keyof typeof PropertyKey];
