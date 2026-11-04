// smithy-typescript generated code
import type {
  AcceptRuleBehavior,
  AttributeEntityType,
  AuthenticationType,
  AuthType,
  BlueprintCategory,
  ChangeAction,
  ComputeEnvironments,
  ConfigurableActionTypeAuthorization,
  ConnectionScope,
  ConnectionStatus,
  ConnectionType,
  DataProductItemType,
  DataProductStatus,
  DataSourceErrorType,
  DataSourceRunStatus,
  DataSourceStatus,
  DataZoneEntityType,
  DeploymentMode,
  DeploymentStatus,
  DeploymentType,
  DesignationType,
  DomainStatus,
  DomainUnitDesignation,
  DomainVersion,
  EnableSetting,
  EntityType,
  EnvironmentStatus,
  FilterExpressionType,
  FilterStatus,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GlueConnectionType,
  GovernanceType,
  GovernedEntityType,
  GroupProfileStatus,
  HyperPodOrchestrator,
  ListingStatus,
  ManagedPolicyType,
  NotebookStatus,
  NotebookType,
  OAuth2GrantType,
  OverallDeploymentStatus,
  PackageManager,
  ProjectDesignation,
  ProjectStatus,
  Protocol,
  ResolutionStrategy,
  ResourceTagSource,
  RuleScopeSelectionMode,
  S3Permission,
  Status,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  Timezone,
  UserAssignment,
  UserDesignation,
} from "./enums";

/**
 * Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted.
 *
 * @public
 */
export interface AcceptChoice {
  /**
   * Specifies the target (for example, a column name) where a prediction can be accepted.
   *
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * Specifies the prediction (aka, the automatically generated piece of metadata) that can be accepted.
   *
   * @public
   */
  predictionChoice?: number | undefined;

  /**
   * The edit of the prediction.
   *
   * @public
   */
  editedValue?: string | undefined;
}

/**
 * The accepted asset scope.
 *
 * @public
 */
export interface AcceptedAssetScope {
  /**
   * The asset ID of the accepted asset scope.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The filter IDs of the accepted asset scope.
   *
   * @public
   */
  filterIds: string[] | undefined;
}

/**
 * Specifies the rule and the threshold under which a prediction can be accepted.
 *
 * @public
 */
export interface AcceptRule {
  /**
   * Specifies whether you want to accept the top prediction for all targets or none.
   *
   * @public
   */
  rule?: AcceptRuleBehavior | undefined;

  /**
   * The confidence score that specifies the condition at which a prediction can be accepted.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the asset.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision that is to be made to the asset.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * Specifies the rule (or the conditions) under which a prediction can be accepted.
   *
   * @public
   */
  acceptRule?: AcceptRule | undefined;

  /**
   * Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted.
   *
   * @public
   */
  acceptChoices?: AcceptChoice[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsOutput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The revision that is to be made to the asset.
   *
   * @public
   */
  revision: string | undefined;
}

/**
 * The asset permissions.
 *
 * @public
 */
export type Permissions =
  | Permissions.S3Member
  | Permissions.$UnknownMember;

/**
 * @public
 */
export namespace Permissions {
  /**
   * The S3 details of the asset permissions.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Permission[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Permission[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The asset permissions.
 *
 * @public
 */
export interface AssetPermission {
  /**
   * The asset ID as part of the asset permissions.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The details as part of the asset permissions.
   *
   * @public
   */
  permissions: Permissions | undefined;
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestInput {
  /**
   * The Amazon DataZone domain where the specified subscription request is being accepted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The unique identifier of the subscription request that is to be accepted.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A description that specifies the reason for accepting the specified subscription request.
   *
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * The asset scopes of the accept subscription request.
   *
   * @public
   */
  assetScopes?: AcceptedAssetScope[] | undefined;

  /**
   * The asset permissions of the accept subscription request.
   *
   * @public
   */
  assetPermissions?: AssetPermission[] | undefined;
}

/**
 * The details of a metadata form.
 *
 * @public
 */
export interface FormOutput {
  /**
   * The name of the metadata form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The name of the metadata form type.
   *
   * @public
   */
  typeName?: string | undefined;

  /**
   * The revision of the metadata form type.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The content of the metadata form.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * The asset scope.
 *
 * @public
 */
export interface AssetScope {
  /**
   * The asset ID of the asset scope.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The filter IDs of the asset scope.
   *
   * @public
   */
  filterIds: string[] | undefined;

  /**
   * The status of the asset scope.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The name of the materialized asset scope.
   *
   * @public
   */
  scopeName?: string | undefined;

  /**
   * The error message of the asset scope.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Details of a glossary term attached to the inventory asset.
 *
 * @public
 */
export interface DetailedGlossaryTerm {
  /**
   * The name of a glossary term attached to the inventory asset.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The shoft description of a glossary term attached to the inventory asset.
   *
   * @public
   */
  shortDescription?: string | undefined;
}

/**
 * The details of the published asset for which the subscription grant is created.
 *
 * @public
 */
export interface SubscribedAssetListing {
  /**
   * The identifier of the published asset for which the subscription grant is created.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The revision of the published asset for which the subscription grant is created.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The type of the published asset for which the subscription grant is created.
   *
   * @public
   */
  entityType?: string | undefined;

  /**
   * The forms attached to the published asset for which the subscription grant is created.
   *
   * @public
   */
  forms?: string | undefined;

  /**
   * The glossary terms attached to the published asset for which the subscription grant is created.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The asset scope of the subscribed asset listing.
   *
   * @public
   */
  assetScope?: AssetScope | undefined;

  /**
   * The asset permissions.
   *
   * @public
   */
  permissions?: Permissions | undefined;
}

/**
 * The listing of the asset in a data product.
 *
 * @public
 */
export interface AssetInDataProductListingItem {
  /**
   * The entity ID of the listing of the asset in a data product.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The entity revision of the listing of the asset in a data product.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The entity type of the listing of the asset in a data product.
   *
   * @public
   */
  entityType?: string | undefined;
}

/**
 * The data product listing.
 *
 * @public
 */
export interface SubscribedProductListing {
  /**
   * The ID of the data product listing.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The revision of the data product listing.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The glossary terms of the data product listing.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The name of the data product listing.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data product listing.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The data assets of the data product listing.
   *
   * @public
   */
  assetListings?: AssetInDataProductListingItem[] | undefined;
}

/**
 * The published asset for which the subscription grant is created.
 *
 * @public
 */
export type SubscribedListingItem =
  | SubscribedListingItem.AssetListingMember
  | SubscribedListingItem.ProductListingMember
  | SubscribedListingItem.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedListingItem {
  /**
   * The asset for which the subscription grant is created.
   *
   * @public
   */
  export interface AssetListingMember {
    assetListing: SubscribedAssetListing;
    productListing?: never;
    $unknown?: never;
  }

  /**
   * The data product listing.
   *
   * @public
   */
  export interface ProductListingMember {
    assetListing?: never;
    productListing: SubscribedProductListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    productListing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assetListing: (value: SubscribedAssetListing) => T;
    productListing: (value: SubscribedProductListing) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of the published asset for which the subscription grant is created.
 *
 * @public
 */
export interface SubscribedListing {
  /**
   * The identifier of the published asset for which the subscription grant is created.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The revision of the published asset for which the subscription grant is created.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The name of the published asset for which the subscription grant is created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the published asset for which the subscription grant is created.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The published asset for which the subscription grant is created.
   *
   * @public
   */
  item: SubscribedListingItem | undefined;

  /**
   * The identifier of the project of the published asset for which the subscription grant is created.
   *
   * @public
   */
  ownerProjectId: string | undefined;

  /**
   * The name of the project that owns the published asset for which the subscription grant is created.
   *
   * @public
   */
  ownerProjectName?: string | undefined;
}

/**
 * The group that subscribes to the asset.
 *
 * @public
 */
export interface SubscribedGroup {
  /**
   * The ID of the subscribed group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the subscribed group.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The IAM principal that subscribes to the asset.
 *
 * @public
 */
export interface SubscribedIamPrincipal {
  /**
   * The ARN of the subscribed IAM principal.
   *
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * The project that has the subscription grant.
 *
 * @public
 */
export interface SubscribedProject {
  /**
   * The identifier of the project that has the subscription grant.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the project that has the subscription grant.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The details of the IAM user profile.
 *
 * @public
 */
export interface IamUserProfileDetails {
  /**
   * The ARN of the IAM user.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The principal ID as part of the IAM user profile details.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The session name for IAM role sessions.
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * The identifier of the group profile associated with the IAM user profile. This links the user to a specific group profile within the Amazon DataZone domain.
   *
   * @public
   */
  groupProfileId?: string | undefined;
}

/**
 * The SSO user profile detail.
 *
 * @public
 */
export interface SsoUserProfileDetails {
  /**
   * The username as part of the SSO user profile detail.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The first name as part of the SSO user profile detail.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The last name as part of the SSO user profile detail.
   *
   * @public
   */
  lastName?: string | undefined;
}

/**
 * The user profile details.
 *
 * @public
 */
export type UserProfileDetails =
  | UserProfileDetails.IamMember
  | UserProfileDetails.SsoMember
  | UserProfileDetails.$UnknownMember;

/**
 * @public
 */
export namespace UserProfileDetails {
  /**
   * The IAM details of the user profile.
   *
   * @public
   */
  export interface IamMember {
    iam: IamUserProfileDetails;
    sso?: never;
    $unknown?: never;
  }

  /**
   * The SSO details of the user profile.
   *
   * @public
   */
  export interface SsoMember {
    iam?: never;
    sso: SsoUserProfileDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iam?: never;
    sso?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    iam: (value: IamUserProfileDetails) => T;
    sso: (value: SsoUserProfileDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The subscribed user.
 *
 * @public
 */
export interface SubscribedUser {
  /**
   * The ID of the subscribed user.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The subscribed user details.
   *
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * The principal that has the subscription grant for the asset.
 *
 * @public
 */
export type SubscribedPrincipal =
  | SubscribedPrincipal.GroupMember
  | SubscribedPrincipal.IamMember
  | SubscribedPrincipal.ProjectMember
  | SubscribedPrincipal.UserMember
  | SubscribedPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipal {
  /**
   * The project that has the subscription grant.
   *
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProject;
    user?: never;
    group?: never;
    iam?: never;
    $unknown?: never;
  }

  /**
   * The subscribed user.
   *
   * @public
   */
  export interface UserMember {
    project?: never;
    user: SubscribedUser;
    group?: never;
    iam?: never;
    $unknown?: never;
  }

  /**
   * The subscribed group.
   *
   * @public
   */
  export interface GroupMember {
    project?: never;
    user?: never;
    group: SubscribedGroup;
    iam?: never;
    $unknown?: never;
  }

  /**
   * The subscribed IAM principal.
   *
   * @public
   */
  export interface IamMember {
    project?: never;
    user?: never;
    group?: never;
    iam: SubscribedIamPrincipal;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    user?: never;
    group?: never;
    iam?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    project: (value: SubscribedProject) => T;
    user: (value: SubscribedUser) => T;
    group: (value: SubscribedGroup) => T;
    iam: (value: SubscribedIamPrincipal) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestOutput {
  /**
   * The identifier of the subscription request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies the Amazon DataZone user that accepted the specified subscription request.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * Specifies the Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The unique identifier of the Amazon DataZone domain where the specified subscription request was accepted.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Specifies the status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * The timestamp that specifies when the subscription request was accepted.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Specifies the timestamp when subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Specifies the reason for requesting a subscription to the asset.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * Specifies the Amazon DataZone users who are subscribed to the asset specified in the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * Specifies the asset for which the subscription request was created.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * Specifes the ID of the Amazon DataZone user who reviewed the subscription request.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * Specifies the reason for accepting the subscription request.
   *
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * The ID of the existing subscription.
   *
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * The metadata form in the subscription request.
   *
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * The account information within an account pool.
 *
 * @public
 */
export interface AccountInfo {
  /**
   * The account ID.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The regions supported for an account within an account pool.
   *
   * @public
   */
  supportedRegions: string[] | undefined;

  /**
   * The account name.
   *
   * @public
   */
  awsAccountName?: string | undefined;
}

/**
 * The summary of the account pool.
 *
 * @public
 */
export interface AccountPoolSummary {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the account pool.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the account pool.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The mechanism used to resolve the account selection from the account pool.
   *
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * The user who created the account pool.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The user who updated the account pool.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * The custom Amazon Web Services Lambda handler within an account pool.
 *
 * @public
 */
export interface CustomAccountPoolHandler {
  /**
   * The ARN of the Amazon Web Services Lambda function for the custom Amazon Web Services Lambda handler.
   *
   * @public
   */
  lambdaFunctionArn: string | undefined;

  /**
   * The ARN of the IAM role that enables Amazon SageMaker Unified Studio to invoke the Amazon Web Services Lambda funtion if the account source is the custom account pool handler.
   *
   * @public
   */
  lambdaExecutionRoleArn?: string | undefined;
}

/**
 * The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
 *
 * @public
 */
export type AccountSource =
  | AccountSource.AccountsMember
  | AccountSource.CustomAccountPoolHandlerMember
  | AccountSource.$UnknownMember;

/**
 * @public
 */
export namespace AccountSource {
  /**
   * The static list of accounts within an account pool.
   *
   * @public
   */
  export interface AccountsMember {
    accounts: AccountInfo[];
    customAccountPoolHandler?: never;
    $unknown?: never;
  }

  /**
   * The custom Amazon Web Services Lambda handler within an account pool.
   *
   * @public
   */
  export interface CustomAccountPoolHandlerMember {
    accounts?: never;
    customAccountPoolHandler: CustomAccountPoolHandler;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accounts?: never;
    customAccountPoolHandler?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accounts: (value: AccountInfo[]) => T;
    customAccountPoolHandler: (value: CustomAccountPoolHandler) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The parameters of the console link specified as part of the environment action.
 *
 * @public
 */
export interface AwsConsoleLinkParameters {
  /**
   * The URI of the console link specified as part of the environment action.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * The parameters of the environment action.
 *
 * @public
 */
export type ActionParameters =
  | ActionParameters.AwsConsoleLinkMember
  | ActionParameters.$UnknownMember;

/**
 * @public
 */
export namespace ActionParameters {
  /**
   * The console link specified as part of the environment action.
   *
   * @public
   */
  export interface AwsConsoleLinkMember {
    awsConsoleLink: AwsConsoleLinkParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsConsoleLink?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsConsoleLink: (value: AwsConsoleLinkParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The properties of the domain unit owners group.
 *
 * @public
 */
export interface OwnerGroupProperties {
  /**
   * The ID of the domain unit owners group.
   *
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * The properties of the owner user.
 *
 * @public
 */
export interface OwnerUserProperties {
  /**
   * The ID of the owner user.
   *
   * @public
   */
  userIdentifier: string | undefined;
}

/**
 * The properties of a domain unit's owner.
 *
 * @public
 */
export type OwnerProperties =
  | OwnerProperties.GroupMember
  | OwnerProperties.UserMember
  | OwnerProperties.$UnknownMember;

/**
 * @public
 */
export namespace OwnerProperties {
  /**
   * Specifies that the domain unit owner is a user.
   *
   * @public
   */
  export interface UserMember {
    user: OwnerUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * Specifies that the domain unit owner is a group.
   *
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: OwnerGroupProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: OwnerUserProperties) => T;
    group: (value: OwnerGroupProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AddEntityOwnerInput {
  /**
   * The ID of the domain in which you want to add the entity owner.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of an entity.
   *
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * The ID of the entity to which you want to add an owner.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The owner that you want to add to the entity.
   *
   * @public
   */
  owner: OwnerProperties | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddEntityOwnerOutput {}

/**
 * Additional details on the queried entity that can be requested in the response.
 *
 * @public
 */
export interface AdditionalAttributes {
  /**
   * Names of forms on the query entity that can be requested in the response.
   *
   * @public
   */
  formNames?: string[] | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface AddToProjectMemberPoolPolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateAssetTypePolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateDomainUnitPolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the policy of creating an environment.
 *
 * @public
 */
export interface Unit {}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateEnvironmentProfilePolicyGrantDetail {
  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateFormTypePolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateGlossaryPolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export interface CreateProjectPolicyGrantDetail {
  /**
   * Specifies whether the policy grant is applied to child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * Specifies whether to create a project from project profile policy grant details.
 *
 * @public
 */
export interface CreateProjectFromProjectProfilePolicyGrantDetail {
  /**
   * Specifies whether to include child domain units when creating a project from project profile policy grant details
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;

  /**
   * Specifies project profiles when creating a project from project profile policy grant details
   *
   * @public
   */
  projectProfiles?: string[] | undefined;
}

/**
 * The grant details of the override domain unit owners policy.
 *
 * @public
 */
export interface OverrideDomainUnitOwnersPolicyGrantDetail {
  /**
   * Specifies whether the policy is inherited by child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The details of the override project owners policy grant.
 *
 * @public
 */
export interface OverrideProjectOwnersPolicyGrantDetail {
  /**
   * Specifies whether the policy is inherited by child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * Specifies the domain unit(s) whose projects can use this asset type while creating asset or asset revisions.
 *
 * @public
 */
export interface UseAssetTypePolicyGrantDetail {
  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * The details of the policy grant.
 *
 * @public
 */
export type PolicyGrantDetail =
  | PolicyGrantDetail.AddToProjectMemberPoolMember
  | PolicyGrantDetail.CreateAssetTypeMember
  | PolicyGrantDetail.CreateDomainUnitMember
  | PolicyGrantDetail.CreateEnvironmentMember
  | PolicyGrantDetail.CreateEnvironmentFromBlueprintMember
  | PolicyGrantDetail.CreateEnvironmentProfileMember
  | PolicyGrantDetail.CreateFormTypeMember
  | PolicyGrantDetail.CreateGlossaryMember
  | PolicyGrantDetail.CreateProjectMember
  | PolicyGrantDetail.CreateProjectFromProjectProfileMember
  | PolicyGrantDetail.DelegateCreateEnvironmentProfileMember
  | PolicyGrantDetail.OverrideDomainUnitOwnersMember
  | PolicyGrantDetail.OverrideProjectOwnersMember
  | PolicyGrantDetail.UseAssetTypeMember
  | PolicyGrantDetail.$UnknownMember;

/**
 * @public
 */
export namespace PolicyGrantDetail {
  /**
   * Specifies that this is a create domain unit policy.
   *
   * @public
   */
  export interface CreateDomainUnitMember {
    createDomainUnit: CreateDomainUnitPolicyGrantDetail;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies whether to override domain unit owners.
   *
   * @public
   */
  export interface OverrideDomainUnitOwnersMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners: OverrideDomainUnitOwnersPolicyGrantDetail;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that the policy grant is to be added to the members of the project.
   *
   * @public
   */
  export interface AddToProjectMemberPoolMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool: AddToProjectMemberPoolPolicyGrantDetail;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies whether to override project owners.
   *
   * @public
   */
  export interface OverrideProjectOwnersMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners: OverrideProjectOwnersPolicyGrantDetail;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create glossary policy.
   *
   * @public
   */
  export interface CreateGlossaryMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary: CreateGlossaryPolicyGrantDetail;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create form type policy.
   *
   * @public
   */
  export interface CreateFormTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType: CreateFormTypePolicyGrantDetail;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create asset type policy.
   *
   * @public
   */
  export interface CreateAssetTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType: CreateAssetTypePolicyGrantDetail;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create project policy.
   *
   * @public
   */
  export interface CreateProjectMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject: CreateProjectPolicyGrantDetail;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create environment profile policy.
   *
   * @public
   */
  export interface CreateEnvironmentProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile: CreateEnvironmentProfilePolicyGrantDetail;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is the delegation of the create environment profile policy.
   *
   * @public
   */
  export interface DelegateCreateEnvironmentProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile: Unit;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies that this is a create environment policy.
   *
   * @public
   */
  export interface CreateEnvironmentMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment: Unit;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * The details of the policy of creating an environment.
   *
   * @public
   */
  export interface CreateEnvironmentFromBlueprintMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint: Unit;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies whether to create a project from project profile.
   *
   * @public
   */
  export interface CreateProjectFromProjectProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile: CreateProjectFromProjectProfilePolicyGrantDetail;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * Specifies the domain unit(s) whose projects can use this asset type while creating asset or asset revisions.
   *
   * @public
   */
  export interface UseAssetTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType: UseAssetTypePolicyGrantDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    createDomainUnit: (value: CreateDomainUnitPolicyGrantDetail) => T;
    overrideDomainUnitOwners: (value: OverrideDomainUnitOwnersPolicyGrantDetail) => T;
    addToProjectMemberPool: (value: AddToProjectMemberPoolPolicyGrantDetail) => T;
    overrideProjectOwners: (value: OverrideProjectOwnersPolicyGrantDetail) => T;
    createGlossary: (value: CreateGlossaryPolicyGrantDetail) => T;
    createFormType: (value: CreateFormTypePolicyGrantDetail) => T;
    createAssetType: (value: CreateAssetTypePolicyGrantDetail) => T;
    createProject: (value: CreateProjectPolicyGrantDetail) => T;
    createEnvironmentProfile: (value: CreateEnvironmentProfilePolicyGrantDetail) => T;
    delegateCreateEnvironmentProfile: (value: Unit) => T;
    createEnvironment: (value: Unit) => T;
    createEnvironmentFromBlueprint: (value: Unit) => T;
    createProjectFromProjectProfile: (value: CreateProjectFromProjectProfilePolicyGrantDetail) => T;
    useAssetType: (value: UseAssetTypePolicyGrantDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The grant filter for all domain units.
 *
 * @public
 */
export interface AllDomainUnitsGrantFilter {}

/**
 * The grant filter for the domain unit. In the current release of Amazon DataZone, the only supported filter is the `allDomainUnitsGrantFilter`.
 *
 * @public
 */
export type DomainUnitGrantFilter =
  | DomainUnitGrantFilter.AllDomainUnitsGrantFilterMember
  | DomainUnitGrantFilter.$UnknownMember;

/**
 * @public
 */
export namespace DomainUnitGrantFilter {
  /**
   * Specifies a grant filter containing all domain units.
   *
   * @public
   */
  export interface AllDomainUnitsGrantFilterMember {
    allDomainUnitsGrantFilter: AllDomainUnitsGrantFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    allDomainUnitsGrantFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    allDomainUnitsGrantFilter: (value: AllDomainUnitsGrantFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The domain unit principal to whom the policy is granted.
 *
 * @public
 */
export interface DomainUnitPolicyGrantPrincipal {
  /**
   * Specifes the designation of the domain unit users.
   *
   * @public
   */
  domainUnitDesignation: DomainUnitDesignation | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitIdentifier?: string | undefined;

  /**
   * The grant filter for the domain unit.
   *
   * @public
   */
  domainUnitGrantFilter?: DomainUnitGrantFilter | undefined;
}

/**
 * The group principal to whom the policy is granted.
 *
 * @public
 */
export type GroupPolicyGrantPrincipal =
  | GroupPolicyGrantPrincipal.GroupIdentifierMember
  | GroupPolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace GroupPolicyGrantPrincipal {
  /**
   * The ID Of the group of the group principal.
   *
   * @public
   */
  export interface GroupIdentifierMember {
    groupIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    groupIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    groupIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The domain unit filter of the project grant filter.
 *
 * @public
 */
export interface DomainUnitFilterForProject {
  /**
   * The domain unit ID to use in the filter.
   *
   * @public
   */
  domainUnit: string | undefined;

  /**
   * Specifies whether to include child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The project grant filter.
 *
 * @public
 */
export type ProjectGrantFilter =
  | ProjectGrantFilter.DomainUnitFilterMember
  | ProjectGrantFilter.$UnknownMember;

/**
 * @public
 */
export namespace ProjectGrantFilter {
  /**
   * The domain unit filter of the project grant filter.
   *
   * @public
   */
  export interface DomainUnitFilterMember {
    domainUnitFilter: DomainUnitFilterForProject;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    domainUnitFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    domainUnitFilter: (value: DomainUnitFilterForProject) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The project policy grant principal.
 *
 * @public
 */
export interface ProjectPolicyGrantPrincipal {
  /**
   * The project designation of the project policy grant principal.
   *
   * @public
   */
  projectDesignation: ProjectDesignation | undefined;

  /**
   * The ID of the user-created designation granted to the project principal. Required when `projectDesignation` is `USER_CREATED_DESIGNATION`; must not be provided otherwise.
   *
   * @public
   */
  userCreatedDesignationId?: string | undefined;

  /**
   * The project ID of the project policy grant principal.
   *
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * The project grant filter of the project policy grant principal.
   *
   * @public
   */
  projectGrantFilter?: ProjectGrantFilter | undefined;
}

/**
 * The all users grant filter.
 *
 * @public
 */
export interface AllUsersGrantFilter {}

/**
 * The user policy grant principal.
 *
 * @public
 */
export type UserPolicyGrantPrincipal =
  | UserPolicyGrantPrincipal.AllUsersGrantFilterMember
  | UserPolicyGrantPrincipal.UserIdentifierMember
  | UserPolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace UserPolicyGrantPrincipal {
  /**
   * The user ID of the user policy grant principal.
   *
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    allUsersGrantFilter?: never;
    $unknown?: never;
  }

  /**
   * The all users grant filter of the user policy grant principal.
   *
   * @public
   */
  export interface AllUsersGrantFilterMember {
    userIdentifier?: never;
    allUsersGrantFilter: AllUsersGrantFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userIdentifier?: never;
    allUsersGrantFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userIdentifier: (value: string) => T;
    allUsersGrantFilter: (value: AllUsersGrantFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The policy grant principal.
 *
 * @public
 */
export type PolicyGrantPrincipal =
  | PolicyGrantPrincipal.DomainUnitMember
  | PolicyGrantPrincipal.GroupMember
  | PolicyGrantPrincipal.ProjectMember
  | PolicyGrantPrincipal.UserMember
  | PolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace PolicyGrantPrincipal {
  /**
   * The user of the policy grant principal.
   *
   * @public
   */
  export interface UserMember {
    user: UserPolicyGrantPrincipal;
    group?: never;
    project?: never;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * The group of the policy grant principal.
   *
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: GroupPolicyGrantPrincipal;
    project?: never;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * The project of the policy grant principal.
   *
   * @public
   */
  export interface ProjectMember {
    user?: never;
    group?: never;
    project: ProjectPolicyGrantPrincipal;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * The domain unit of the policy grant principal.
   *
   * @public
   */
  export interface DomainUnitMember {
    user?: never;
    group?: never;
    project?: never;
    domainUnit: DomainUnitPolicyGrantPrincipal;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    project?: never;
    domainUnit?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: UserPolicyGrantPrincipal) => T;
    group: (value: GroupPolicyGrantPrincipal) => T;
    project: (value: ProjectPolicyGrantPrincipal) => T;
    domainUnit: (value: DomainUnitPolicyGrantPrincipal) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AddPolicyGrantInput {
  /**
   * The ID of the domain where you want to add a policy grant.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of entity (resource) to which the grant is added.
   *
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * The ID of the entity (resource) to which you want to add a policy grant.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of policy that you want to grant.
   *
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * The principal to whom the permissions are granted.
   *
   * @public
   */
  principal: PolicyGrantPrincipal | undefined;

  /**
   * The details of the policy grant.
   *
   * @public
   */
  detail: PolicyGrantDetail | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddPolicyGrantOutput {
  /**
   * The ID of the policy grant that was added to a specified entity.
   *
   * @public
   */
  grantId?: string | undefined;
}

/**
 * An aggregation list item.
 *
 * @public
 */
export interface AggregationListItem {
  /**
   * An attribute on which to compute aggregations.
   *
   * @public
   */
  attribute: string | undefined;

  /**
   * The display value of the aggregation list item. Supported values include `value` and `glossaryTerm.name`.
   *
   * @public
   */
  displayValue?: string | undefined;
}

/**
 * An aggregation output item.
 *
 * @public
 */
export interface AggregationOutputItem {
  /**
   * The attribute value of the aggregation output item.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The count of the aggregation output item.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The display value of the aggregation. If the attribute being aggregated corresponds to the id of a public resource, the service automatically resolves the id to the provided display value.
   *
   * @public
   */
  displayValue?: string | undefined;
}

/**
 * The aggregation for an attribute.
 *
 * @public
 */
export interface AggregationOutput {
  /**
   * The attribute for this aggregation.
   *
   * @public
   */
  attribute?: string | undefined;

  /**
   * The display value of the aggregation output item.
   *
   * @public
   */
  displayValue?: string | undefined;

  /**
   * A list of aggregation output items.
   *
   * @public
   */
  items?: AggregationOutputItem[] | undefined;
}

/**
 * The Amazon Q properties of the connection.
 *
 * @public
 */
export interface AmazonQPropertiesInput {
  /**
   * Specifies whether Amazon Q is enabled for the connection.
   *
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * The profile ARN of the connection's Amazon Q properties.
   *
   * @public
   */
  profileArn?: string | undefined;

  /**
   * The authentication mode of the connection's Amazon Q properties.
   *
   * @public
   */
  authMode?: string | undefined;
}

/**
 * The Amazon Q properties of the connection.
 *
 * @public
 */
export interface AmazonQPropertiesOutput {
  /**
   * Specifies whether Amazon Q is enabled for the connection.
   *
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * The profile ARN of the connection's Amazon Q properties.
   *
   * @public
   */
  profileArn?: string | undefined;

  /**
   * The authentication mode of the connection's Amazon Q properties.
   *
   * @public
   */
  authMode?: string | undefined;
}

/**
 * The Amazon Q properties of the connection.
 *
 * @public
 */
export interface AmazonQPropertiesPatch {
  /**
   * Specifies whether Amazon Q is enabled for the connection.
   *
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * The profile ARN of the connection's Amazon Q properties.
   *
   * @public
   */
  profileArn?: string | undefined;

  /**
   * The authentication mode of the connection's Amazon Q properties.
   *
   * @public
   */
  authMode?: string | undefined;
}

/**
 * The details of an asset published in an Amazon DataZone catalog.
 *
 * @public
 */
export interface AssetListingDetails {
  /**
   * The identifier of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  listingId: string | undefined;

  /**
   * The status of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  listingStatus: ListingStatus | undefined;
}

/**
 * The details of a metadata form.
 *
 * @public
 */
export interface FormInput {
  /**
   * The name of the metadata form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The ID of the metadata form type.
   *
   * @public
   */
  typeIdentifier?: string | undefined;

  /**
   * The revision of the metadata form type.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The content of the metadata form.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * The configuration of the business name generation.
 *
 * @public
 */
export interface BusinessNameGenerationConfiguration {
  /**
   * Specifies whether the business name generation is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * The configuration of the prediction.
 *
 * @public
 */
export interface PredictionConfiguration {
  /**
   * The business name generation mechanism.
   *
   * @public
   */
  businessNameGeneration?: BusinessNameGenerationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetInput {
  /**
   * Asset name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Amazon DataZone domain where the asset is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The external identifier of the asset.
   *
   * If the value for the `externalIdentifier` parameter is specified, it must be a unique value.
   *
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * The unique identifier of this asset's type.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision of this asset's type.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * Asset description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Glossary terms attached to the asset.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * Metadata forms attached to the asset.
   *
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * The unique identifier of the project that owns this asset.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The configuration of the automatically generated business-friendly metadata for the asset.
   *
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The summary of the time series data points form.
 *
 * @public
 */
export interface TimeSeriesDataPointSummaryFormOutput {
  /**
   * The name of the time series data points summary form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The type ID of the time series data points summary form.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The type revision of the time series data points summary form.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The timestamp of the time series data points summary form.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The content of the summary of the time series data points form.
   *
   * @public
   */
  contentSummary?: string | undefined;

  /**
   * The ID of the time series data points summary form.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetOutput {
  /**
   * The unique identifier of the created asset.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the created asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the created asset type.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision type of the asset.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * The external identifier of the asset.
   *
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * The revision of the asset.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of the created asset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the asset was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user that created this asset in the catalog.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the first revision of the asset took place.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user that made the first revision of the asset.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * The glossary terms that are attached to the created asset.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The glossary terms in a restricted glossary.
   *
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * The ID of the Amazon DataZone project that owns the created asset.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the asset was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The details of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * The metadata forms that are attached to the created asset.
   *
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * The read-only metadata forms that are attached to the created asset.
   *
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * The latest data point that was imported into the time series form for the asset.
   *
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * The configuration of the automatically generated business-friendly metadata for the asset.
   *
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionInput {
  /**
   * Te revised name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the domain where the asset is being revised.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the asset.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision type of the asset.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The revised description of the asset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms to be attached to the asset as part of asset revision.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The metadata forms to be attached to the asset as part of asset revision.
   *
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * The configuration of the automatically generated business-friendly metadata for the asset.
   *
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionOutput {
  /**
   * The unique identifier of the asset revision.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The revised name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the revision type.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision type of the asset.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * The external identifier of the asset.
   *
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * The revision of the asset.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The revised asset description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the asset revision occured.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who performed the asset revision.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the first asset revision occured.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who performed the first asset revision.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * The glossary terms that were attached to the asset as part of asset revision.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The glossary terms in a restricted glossary.
   *
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * The unique identifier of the revised project that owns the asset.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The unique identifier of the Amazon DataZone domain where the asset was revised.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The details of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * The metadata forms that were attached to the asset as part of the asset revision.
   *
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * The read-only metadata forms that were attached to the asset as part of the asset revision.
   *
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * The latest data point that was imported into the time series form for the asset.
   *
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * The configuration of the automatically generated business-friendly metadata for the asset.
   *
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAssetInput {
  /**
   * The ID of the Amazon DataZone domain in which the asset is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the asset that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetOutput {}

/**
 * @public
 */
export interface GetAssetInput {
  /**
   * The ID of the Amazon DataZone domain to which the asset belongs.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone asset.
   *
   * This parameter supports either the value of `assetId` or `externalIdentifier` as input. If you are passing the value of `externalIdentifier`, you must prefix this value with `externalIdentifer%2F`.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the Amazon DataZone asset.
   *
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetOutput {
  /**
   * The ID of the asset.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the asset type.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision of the asset type.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * The external ID of the asset.
   *
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * The revision of the asset.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of the Amazon DataZone asset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the asset was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the asset.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the first revision of the asset was created.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the first revision of the asset.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * The business glossary terms attached to the asset.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The restricted glossary terms attached to an asset.
   *
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * The ID of the project that owns the asset.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The ID of the Amazon DataZone domain to which the asset belongs.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The listing of the asset.
   *
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * The metadata forms attached to the asset.
   *
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * The read-only metadata forms attached to the asset.
   *
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * The latest data point that was imported into the time series form for the asset.
   *
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * The column configuration of the asset filter.
 *
 * @public
 */
export interface ColumnFilterConfiguration {
  /**
   * Specifies whether to include column names.
   *
   * @public
   */
  includedColumnNames?: string[] | undefined;
}

/**
 * Specifies whether the value is equal to an expression.
 *
 * @public
 */
export interface EqualToExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be equal to an expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies whether the value is greater than an expression.
 *
 * @public
 */
export interface GreaterThanExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be greater than an expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies whether the value is greater than or equal to an expression.
 *
 * @public
 */
export interface GreaterThanOrEqualToExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be greater than or equal to an expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies whether values are in the expression.
 *
 * @public
 */
export interface InExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The values that might be in the expression.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Specifies that the expression is not null.
 *
 * @public
 */
export interface IsNotNullExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;
}

/**
 * Specifies that the expression is null.
 *
 * @public
 */
export interface IsNullExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;
}

/**
 * Specifies that a value is less than an expression.
 *
 * @public
 */
export interface LessThanExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be less than the expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies that a value is less than or equal to an expression.
 *
 * @public
 */
export interface LessThanOrEqualToExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be less than or equal to an expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies that a value is like the expression.
 *
 * @public
 */
export interface LikeExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might be like the expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies that a value is not equal to the expression.
 *
 * @public
 */
export interface NotEqualToExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might not be equal to the expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies that a value is not in the expression.
 *
 * @public
 */
export interface NotInExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might not be in the expression.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Specifies that a value might be not like the expression.
 *
 * @public
 */
export interface NotLikeExpression {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The value that might not be like the expression.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The row filter expression.
 *
 * @public
 */
export type RowFilterExpression =
  | RowFilterExpression.EqualToMember
  | RowFilterExpression.GreaterThanMember
  | RowFilterExpression.GreaterThanOrEqualToMember
  | RowFilterExpression.InMember
  | RowFilterExpression.IsNotNullMember
  | RowFilterExpression.IsNullMember
  | RowFilterExpression.LessThanMember
  | RowFilterExpression.LessThanOrEqualToMember
  | RowFilterExpression.LikeMember
  | RowFilterExpression.NotEqualToMember
  | RowFilterExpression.NotInMember
  | RowFilterExpression.NotLikeMember
  | RowFilterExpression.$UnknownMember;

/**
 * @public
 */
export namespace RowFilterExpression {
  /**
   * The 'equal to' clause of the row filter expression.
   *
   * @public
   */
  export interface EqualToMember {
    equalTo: EqualToExpression;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'no equal to' clause of the row filter expression.
   *
   * @public
   */
  export interface NotEqualToMember {
    equalTo?: never;
    notEqualTo: NotEqualToExpression;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'greater than' clause of the row filter expression.
   *
   * @public
   */
  export interface GreaterThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan: GreaterThanExpression;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'less than' clause of the row filter expression.
   *
   * @public
   */
  export interface LessThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan: LessThanExpression;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'greater than or equal to' clause of the filter expression.
   *
   * @public
   */
  export interface GreaterThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo: GreaterThanOrEqualToExpression;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'less than or equal to' clause of the row filter expression.
   *
   * @public
   */
  export interface LessThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo: LessThanOrEqualToExpression;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'is null' clause of the row filter expression.
   *
   * @public
   */
  export interface IsNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull: IsNullExpression;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'is not null' clause of the row filter expression.
   *
   * @public
   */
  export interface IsNotNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull: IsNotNullExpression;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'in' clause of the row filter expression.
   *
   * @public
   */
  export interface InMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in: InExpression;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'not in' clause of the row filter expression.
   *
   * @public
   */
  export interface NotInMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn: NotInExpression;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'like' clause of the row filter expression.
   *
   * @public
   */
  export interface LikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like: LikeExpression;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * The 'not like' clause of the row filter expression.
   *
   * @public
   */
  export interface NotLikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike: NotLikeExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equalTo: (value: EqualToExpression) => T;
    notEqualTo: (value: NotEqualToExpression) => T;
    greaterThan: (value: GreaterThanExpression) => T;
    lessThan: (value: LessThanExpression) => T;
    greaterThanOrEqualTo: (value: GreaterThanOrEqualToExpression) => T;
    lessThanOrEqualTo: (value: LessThanOrEqualToExpression) => T;
    isNull: (value: IsNullExpression) => T;
    isNotNull: (value: IsNotNullExpression) => T;
    in: (value: InExpression) => T;
    notIn: (value: NotInExpression) => T;
    like: (value: LikeExpression) => T;
    notLike: (value: NotLikeExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The summary of the asset filter.
 *
 * @public
 */
export interface AssetFilterSummary {
  /**
   * The ID of the asset filter.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where the asset filter lives.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the asset filter.
   *
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * The effective column names of the asset filter.
   *
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * The effective row filter of the asset filter.
   *
   * @public
   */
  effectiveRowFilter?: string | undefined;

  /**
   * The timestamp at which the asset filter was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The error message that is displayed if the action does not succeed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The offset of a matched term.
 *
 * @public
 */
export interface MatchOffset {
  /**
   * The 0-indexed number indicating the start position (inclusive) of a matched term.
   *
   * @public
   */
  startOffset?: number | undefined;

  /**
   * The 0-indexed number indicating the end position (exclusive) of a matched term.
   *
   * @public
   */
  endOffset?: number | undefined;
}

/**
 * A structure indicating matched terms for an attribute.
 *
 * @public
 */
export interface TextMatchItem {
  /**
   * The name of the attribute.
   *
   * @public
   */
  attribute?: string | undefined;

  /**
   * Snippet of attribute text containing highlighted content.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * List of offsets indicating matching terms in the TextMatchItem text.
   *
   * @public
   */
  matchOffsets?: MatchOffset[] | undefined;
}

/**
 * A rationale indicating why this item was matched by search.
 *
 * @public
 */
export type MatchRationaleItem =
  | MatchRationaleItem.TextMatchesMember
  | MatchRationaleItem.$UnknownMember;

/**
 * @public
 */
export namespace MatchRationaleItem {
  /**
   * A list of TextMatchItems.
   *
   * @public
   */
  export interface TextMatchesMember {
    textMatches: TextMatchItem[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textMatches?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textMatches: (value: TextMatchItem[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The additional attributes of an inventory asset.
 *
 * @public
 */
export interface AssetItemAdditionalAttributes {
  /**
   * The forms included in the additional attributes of an inventory asset.
   *
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * The read-only forms included in the additional attributes of an inventory asset.
   *
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * The latest time series data points forms included in the additional attributes of an asset.
   *
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * List of rationales indicating why this item was matched by search.
   *
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * A Amazon DataZone inventory asset.
 *
 * @public
 */
export interface AssetItem {
  /**
   * The identifier of the Amazon DataZone domain in which the inventory asset exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * the identifier of the Amazon DataZone inventory asset.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the Amazon DataZone inventory asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the asset type of the specified Amazon DataZone inventory asset.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision of the inventory asset type.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * The external identifier of the Amazon DataZone inventory asset.
   *
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * The description of an Amazon DataZone inventory asset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the Amazon DataZone inventory asset was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the inventory asset.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the first revision of the inventory asset was created.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the first revision of the inventory asset.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * The glossary terms attached to the Amazon DataZone inventory asset.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The identifier of the Amazon DataZone project that owns the inventory asset.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The additional attributes of a Amazon DataZone inventory asset.
   *
   * @public
   */
  additionalAttributes?: AssetItemAdditionalAttributes | undefined;

  /**
   * The restricted glossary terms accociated with an asset.
   *
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;
}

/**
 * An asset published in an Amazon DataZone catalog.
 *
 * @public
 */
export interface AssetListing {
  /**
   * The identifier of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The revision of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  assetRevision?: string | undefined;

  /**
   * The type of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  assetType?: string | undefined;

  /**
   * The timestamp of when an asset published in an Amazon DataZone catalog was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The metadata forms attached to an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  forms?: string | undefined;

  /**
   * The latest time series data points forms included in the additional attributes of an asset.
   *
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * The glossary terms attached to an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The restricted glossary terms associated with an asset.
   *
   * @public
   */
  governedGlossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The identifier of the project where an asset published in an Amazon DataZone catalog exists.
   *
   * @public
   */
  owningProjectId?: string | undefined;
}

/**
 * Additional attributes of an inventory asset.
 *
 * @public
 */
export interface AssetListingItemAdditionalAttributes {
  /**
   * The metadata forms that form additional attributes of the metadata asset.
   *
   * @public
   */
  forms?: string | undefined;

  /**
   * List of rationales indicating why this item was matched by search.
   *
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;

  /**
   * The latest time series data points forms included in the additional attributes of an asset.
   *
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * The details of an asset published in an Amazon DataZone catalog.
 *
 * @public
 */
export interface AssetListingItem {
  /**
   * The identifier of the listing (asset published in Amazon DataZone catalog).
   *
   * @public
   */
  listingId?: string | undefined;

  /**
   * The revision of the listing (asset published in Amazon DataZone catalog).
   *
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * The name of the inventory asset.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The identifier of the inventory asset.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The revision of the inventory asset.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The type of the inventory asset.
   *
   * @public
   */
  entityType?: string | undefined;

  /**
   * The description of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when an asset published in an Amazon DataZone catalog was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the listing.
   *
   * @public
   */
  listingCreatedBy?: string | undefined;

  /**
   * The Amazon DataZone user who updated the listing.
   *
   * @public
   */
  listingUpdatedBy?: string | undefined;

  /**
   * Glossary terms attached to the inventory asset.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The restricted glossary terms associated with an asset.
   *
   * @public
   */
  governedGlossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The identifier of the project that owns the inventory asset.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The additional attributes of an asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  additionalAttributes?: AssetListingItemAdditionalAttributes | undefined;
}

/**
 * The revision of an inventory asset.
 *
 * @public
 */
export interface AssetRevision {
  /**
   * The Amazon DataZone user who created the inventory asset.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the inventory asset revision.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The revision details of the inventory asset.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The Amazon DataZone user who created the asset revision.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when an inventory asset revison was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * The name map for assets.
 *
 * @public
 */
export interface AssetTargetNameMap {
  /**
   * The identifier of the inventory asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The target name in the asset target name map.
   *
   * @public
   */
  targetName: string | undefined;
}

/**
 * The details of the form entry.
 *
 * @public
 */
export interface FormEntryInput {
  /**
   * The type ID of the form entry.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The type revision of the form entry.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * Specifies whether a form entry is required.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeInput {
  /**
   * The unique identifier of the Amazon DataZone domain where the custom asset type is being created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the custom asset type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The descripton of the custom asset type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metadata forms that are to be attached to the custom asset type.
   *
   * @public
   */
  formsInput: Record<string, FormEntryInput> | undefined;

  /**
   * The identifier of the Amazon DataZone project that is to own the custom asset type.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * The details of the form entry.
 *
 * @public
 */
export interface FormEntryOutput {
  /**
   * The name of the type of the form entry.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The type revision of the form entry.
   *
   * @public
   */
  typeRevision: string | undefined;

  /**
   * Specifies whether a form entry is required.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeOutput {
  /**
   * The ID of the Amazon DataZone domain in which the asset type was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the asset type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the custom asset type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of the custom asset type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metadata forms that are attached to the asset type.
   *
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * The ID of the Amazon DataZone project that currently owns this asset type.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain where the asset type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The ID of the Amazon DataZone project where the asset type was originally created.
   *
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * The timestamp of when the asset type is to be created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who creates this custom asset type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the custom type was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user that created the custom asset type.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeInput {
  /**
   * The ID of the Amazon DataZone domain in which the asset type is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the asset type that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeOutput {}

/**
 * @public
 */
export interface GetAssetTypeInput {
  /**
   * The ID of the Amazon DataZone domain in which the asset type exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset type.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the asset type.
   *
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetTypeOutput {
  /**
   * The ID of the Amazon DataZone domain in which the asset type exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the asset type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the asset type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of the asset type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metadata forms attached to the asset type.
   *
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * The ID of the Amazon DataZone project that owns the asset type.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the asset type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The ID of the Amazon DataZone project in which the asset type was originally created.
   *
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * The timestamp of when the asset type was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the asset type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the asset type was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user that updated the asset type.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * The details of the asset type.
 *
 * @public
 */
export interface AssetTypeItem {
  /**
   * The identifier of the Amazon DataZone domain where the asset type exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the asset type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the asset type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of the asset type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The forms included in the details of the asset type.
   *
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * The identifier of the Amazon DataZone project that owns the asset type.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain where the asset type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The identifier of the Amazon DataZone project where the asset type exists.
   *
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * The timestamp of when the asset type was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the asset type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the asset type was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who updated the asset type.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * The asset type for the rule details.
 *
 * @public
 */
export interface AssetTypesForRule {
  /**
   * The selection mode for the rule.
   *
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * The specific asset types that are included in the rule.
   *
   * @public
   */
  specificAssetTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleInput {
  /**
   * The ID of the Amazon DataZone domain in which the environment role is associated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone environment.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ARN of the environment role.
   *
   * @public
   */
  environmentRoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleOutput {}

/**
 * @public
 */
export interface AssociateGovernedTermsInput {
  /**
   * The ID of the domain where governed terms are to be associated with an asset.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset with which you want to associate a governed term.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset with which you want to associate a governed term.
   *
   * @public
   */
  entityType: GovernedEntityType | undefined;

  /**
   * The glossary terms in a restricted glossary.
   *
   * @public
   */
  governedGlossaryTerms: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateGovernedTermsOutput {}

/**
 * The Amazon Athena properties of a connection.
 *
 * @public
 */
export interface AthenaPropertiesInput {
  /**
   * The Amazon Athena workgroup name of a connection.
   *
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * The Amazon Athena properties of a connection.
 *
 * @public
 */
export interface AthenaPropertiesOutput {
  /**
   * The Amazon Athena workgroup name of a connection.
   *
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * The Amazon Athena properties patch of a connection.
 *
 * @public
 */
export interface AthenaPropertiesPatch {
  /**
   * The Amazon Athena workgroup name of a connection.
   *
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * The attribute error.
 *
 * @public
 */
export interface AttributeError {
  /**
   * The attribute ID as part of the attribute error.
   *
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * The code generated as part of the attribute error.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The message generated as part of the attribute error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The attribute input.
 *
 * @public
 */
export interface AttributeInput {
  /**
   * The ID of the attribute.
   *
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * The metadata forms as part of the attribute input.
   *
   * @public
   */
  forms: FormInput[] | undefined;
}

/**
 * The authorization code properties of a connection.
 *
 * @public
 */
export interface AuthorizationCodeProperties {
  /**
   * The authorization code of a connection.
   *
   * @public
   */
  authorizationCode?: string | undefined;

  /**
   * The redirect URI of a connection.
   *
   * @public
   */
  redirectUri?: string | undefined;
}

/**
 * The OAuth2Client application.
 *
 * @public
 */
export interface OAuth2ClientApplication {
  /**
   * The user managed client application client ID in the OAuth2Client application.
   *
   * @public
   */
  userManagedClientApplicationClientId?: string | undefined;

  /**
   * The Amazon Web Services managed client application reference in the OAuth2Client application.
   *
   * @public
   */
  aWSManagedClientApplicationReference?: string | undefined;
}

/**
 * The GlueOAuth2 credentials of a connection.
 *
 * @public
 */
export interface GlueOAuth2Credentials {
  /**
   * The user managed client application client secret of the connection.
   *
   * @public
   */
  userManagedClientApplicationClientSecret?: string | undefined;

  /**
   * The access token of a connection.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The refresh token of the connection.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * The jwt token of the connection.
   *
   * @public
   */
  jwtToken?: string | undefined;
}

/**
 * The OAuth2 properties.
 *
 * @public
 */
export interface OAuth2Properties {
  /**
   * The OAuth2 grant type of the OAuth2 properties.
   *
   * @public
   */
  oAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * The OAuth2 client application of the OAuth2 properties.
   *
   * @public
   */
  oAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * The OAuth2 token URL of the OAuth2 properties.
   *
   * @public
   */
  tokenUrl?: string | undefined;

  /**
   * The OAuth2 token URL parameter map of the OAuth2 properties.
   *
   * @public
   */
  tokenUrlParametersMap?: Record<string, string> | undefined;

  /**
   * The authorization code properties of the OAuth2 properties.
   *
   * @public
   */
  authorizationCodeProperties?: AuthorizationCodeProperties | undefined;

  /**
   * The OAuth2 credentials of the OAuth2 properties.
   *
   * @public
   */
  oAuth2Credentials?: GlueOAuth2Credentials | undefined;
}

/**
 * The authentication configuration of a connection.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * The authentication type of a connection.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The secret ARN of a connection.
   *
   * @public
   */
  secretArn?: string | undefined;

  /**
   * The oAuth2 properties of a connection.
   *
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * The basic authentication credentials of a connection.
 *
 * @public
 */
export interface BasicAuthenticationCredentials {
  /**
   * The user name for the connecion.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The password for a connection.
   *
   * @public
   */
  password?: string | undefined;
}

/**
 * The authentication configuration of a connection.
 *
 * @public
 */
export interface AuthenticationConfigurationInput {
  /**
   * The authentication type of a connection.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The oAuth2 properties of a connection.
   *
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;

  /**
   * The secret ARN of a connection.
   *
   * @public
   */
  secretArn?: string | undefined;

  /**
   * The KMS key ARN of a connection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The basic authentication credentials of a connection.
   *
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;

  /**
   * The custom authentication credentials of a connection.
   *
   * @public
   */
  customAuthenticationCredentials?: Record<string, string> | undefined;
}

/**
 * The authentication configuration patch of a connection.
 *
 * @public
 */
export interface AuthenticationConfigurationPatch {
  /**
   * The secret ARN of a connection.
   *
   * @public
   */
  secretArn?: string | undefined;

  /**
   * The basic authentication credentials of a connection.
   *
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;
}

/**
 * The account ID of a project.
 *
 * @public
 */
export type AwsAccount =
  | AwsAccount.AwsAccountIdMember
  | AwsAccount.AwsAccountIdPathMember
  | AwsAccount.$UnknownMember;

/**
 * @public
 */
export namespace AwsAccount {
  /**
   * The account ID of a project.
   *
   * @public
   */
  export interface AwsAccountIdMember {
    awsAccountId: string;
    awsAccountIdPath?: never;
    $unknown?: never;
  }

  /**
   * The account ID path of a project.
   *
   * @public
   */
  export interface AwsAccountIdPathMember {
    awsAccountId?: never;
    awsAccountIdPath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsAccountId?: never;
    awsAccountIdPath?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsAccountId: (value: string) => T;
    awsAccountIdPath: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The location of a project.
 *
 * @public
 */
export interface AwsLocation {
  /**
   * The access role of a connection.
   *
   * @public
   */
  accessRole?: string | undefined;

  /**
   * The account ID of a connection.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Region of a connection.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The IAM connection ID of a connection.
   *
   * @public
   */
  iamConnectionId?: string | undefined;
}

/**
 * The results of the BatchGetAttribute action.
 *
 * @public
 */
export interface BatchGetAttributeOutput {
  /**
   * The attribute ID.
   *
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * The metadata forms that are part of the results of the BatchGetAttribute action.
   *
   * @public
   */
  forms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttributesMetadataInput {
  /**
   * The domain ID where you want to get the attribute metadata.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The entity type for which you want to get attribute metadata.
   *
   * @public
   */
  entityType: AttributeEntityType | undefined;

  /**
   * The entity ID for which you want to get attribute metadata.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The entity revision for which you want to get attribute metadata.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The attribute identifier.
   *
   * @public
   */
  attributeIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttributesMetadataOutput {
  /**
   * The results of the BatchGetAttributesMetadata action.
   *
   * @public
   */
  attributes?: BatchGetAttributeOutput[] | undefined;

  /**
   * The errors generated when the BatchGetAttributesMetadata action is invoked.
   *
   * @public
   */
  errors: AttributeError[] | undefined;
}

/**
 * The results of the BatchPutAttribute action.
 *
 * @public
 */
export interface BatchPutAttributeOutput {
  /**
   * The attribute ID.
   *
   * @public
   */
  attributeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface BatchPutAttributesMetadataInput {
  /**
   * The domain ID where you want to write the attribute metadata.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The entity type for which you want to write the attribute metadata.
   *
   * @public
   */
  entityType: AttributeEntityType | undefined;

  /**
   * The entity ID for which you want to write the attribute metadata.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The attributes of the metadata.
   *
   * @public
   */
  attributes: AttributeInput[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAttributesMetadataOutput {
  /**
   * The errors generated when the BatchPutAttributeMetadata action is invoked.
   *
   * @public
   */
  errors?: AttributeError[] | undefined;

  /**
   * The results of the BatchPutAttributeMetadata action.
   *
   * @public
   */
  attributes?: BatchPutAttributeOutput[] | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunInput {
  /**
   * The ID of the Amazon DataZone domain in which the metadata generation run is to be cancelled.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the metadata generation run.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunOutput {}

/**
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * The unique identifier of the Amazon DataZone domain where the subscription request is being cancelled.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The unique identifier of the subscription that is being cancelled.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * The identifier of the subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies the Amazon DataZone user who is cancelling the subscription.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user that cancelled the subscription.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The unique identifier of the Amazon DataZone domain where the subscription is being cancelled.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the request to cancel the subscription.
   *
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * The timestamp that specifies when the request to cancel the subscription was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp that specifies when the subscription was cancelled.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon DataZone user who is made a subscriber to the specified asset by the subscription that is being cancelled.
   *
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * The asset to which a subscription is being cancelled.
   *
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * The unique ID of the subscripton request for the subscription that is being cancelled.
   *
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * Specifies whether the permissions to the asset are retained after the subscription is cancelled.
   *
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * The information about a cell in a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface CellInformation {}

/**
 * Part of the provisioning properties of the environment blueprint.
 *
 * @public
 */
export interface CloudFormationProperties {
  /**
   * The template URL of the cloud formation provisioning properties of the environment blueprint.
   *
   * @public
   */
  templateUrl: string | undefined;
}

/**
 * The compute configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface ComputeConfig {
  /**
   * The instance type for the notebook run compute.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The environment version for the notebook run compute.
   *
   * @public
   */
  environmentVersion?: string | undefined;
}

/**
 * The details of the parameters for the configurable environment action.
 *
 * @public
 */
export interface ConfigurableActionParameter {
  /**
   * The key of the configurable action parameter.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of the configurable action parameter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The configurable action of a Amazon DataZone environment.
 *
 * @public
 */
export interface ConfigurableEnvironmentAction {
  /**
   * The type of a configurable action in a Amazon DataZone environment.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The authentication type of a configurable action of a Amazon DataZone environment.
   *
   * @public
   */
  auth?: ConfigurableActionTypeAuthorization | undefined;

  /**
   * The parameters of a configurable action in a Amazon DataZone environment.
   *
   * @public
   */
  parameters: ConfigurableActionParameter[] | undefined;
}

/**
 * The configuration of a connection.
 *
 * @public
 */
export interface Configuration {
  /**
   * The classification of the connection configuration.
   *
   * @public
   */
  classification?: string | undefined;

  /**
   * The properties of the connection configuration.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * The credentials of a connection.
 *
 * @public
 */
export interface ConnectionCredentials {
  /**
   * The access key ID of a connection.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The secret access key of a connection.
   *
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * The session token of a connection credentials.
   *
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * The expiration of the connection credentials.
   *
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * Contains the Git connection properties that you specify when creating a Git connection.
 *
 * @public
 */
export interface GitPropertiesInput {
  /**
   * The ARN of the CodeConnections connection used to connect to the Git repository.
   *
   * @public
   */
  codeConnectionArn: string | undefined;

  /**
   * The ID of the Git repository. This is the owner and repository name, for example, owner/repo-name.
   *
   * @public
   */
  repositoryId: string | undefined;

  /**
   * The default branch of the Git repository.
   *
   * @public
   */
  defaultBranch: string | undefined;
}

/**
 * Physical connection requirements of a connection.
 *
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * The subnet ID of the physical connection requirements of a connection.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The subnet ID list of the physical connection requirements of a connection.
   *
   * @public
   */
  subnetIdList?: string[] | undefined;

  /**
   * The group ID list of the physical connection requirements of a connection.
   *
   * @public
   */
  securityGroupIdList?: string[] | undefined;

  /**
   * The availability zone of the physical connection requirements of a connection.
   *
   * @public
   */
  availabilityZone?: string | undefined;
}

/**
 * The Amazon Web Services Glue connecton input.
 *
 * @public
 */
export interface GlueConnectionInput {
  /**
   * The connection properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * The physical connection requirements for the Amazon Web Services Glue connection.
   *
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * The name of the Amazon Web Services Glue connection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the Amazon Web Services Glue connection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The connection type of the Amazon Web Services Glue connection.
   *
   * @public
   */
  connectionType?: GlueConnectionType | undefined;

  /**
   * The match criteria of the Amazon Web Services Glue connection.
   *
   * @public
   */
  matchCriteria?: string | undefined;

  /**
   * Speciefies whether to validate credentials of the Amazon Web Services Glue connection.
   *
   * @public
   */
  validateCredentials?: boolean | undefined;

  /**
   * Speciefies whether to validate for compute environments of the Amazon Web Services Glue connection.
   *
   * @public
   */
  validateForComputeEnvironments?: ComputeEnvironments[] | undefined;

  /**
   * The Spark properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * The Amazon Athena properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * The Python properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * The authentication configuration of the Amazon Web Services Glue connection.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * The Amazon Web Services Glue properties of a connection.
 *
 * @public
 */
export interface GluePropertiesInput {
  /**
   * The Amazon Web Services Glue connection.
   *
   * @public
   */
  glueConnectionInput?: GlueConnectionInput | undefined;
}

/**
 * The hyper pod properties of a Amazon Web Services Glue properties patch.
 *
 * @public
 */
export interface HyperPodPropertiesInput {
  /**
   * The cluster name the hyper pod properties.
   *
   * @public
   */
  clusterName: string | undefined;
}

/**
 * The IAM properties of a connection.
 *
 * @public
 */
export interface IamPropertiesInput {
  /**
   * Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;

  /**
   * The ARN of the IAM role to associate with the connection as the project user role. To use this operation, you must have `iam:PassRole` permission for this role.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * The lakehouse properties of a connection.
 *
 * @public
 */
export interface LakehousePropertiesInput {
  /**
   * Specifies whether to enable Glue lineage sync for tables managed by Glue crawlers.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * The MLflow properties of a connection.
 *
 * @public
 */
export interface MlflowPropertiesInput {
  /**
   * The tracking server ARN as part of the MLflow properties of a connection.
   *
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * The username and password of a connection.
 *
 * @public
 */
export interface UsernamePassword {
  /**
   * The password of a connection.
   *
   * @public
   */
  password: string | undefined;

  /**
   * The username of a connection.
   *
   * @public
   */
  username: string | undefined;
}

/**
 * Amazon Redshift credentials of a connection.
 *
 * @public
 */
export type RedshiftCredentials =
  | RedshiftCredentials.SecretArnMember
  | RedshiftCredentials.UsernamePasswordMember
  | RedshiftCredentials.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftCredentials {
  /**
   * The secret ARN of the Amazon Redshift credentials of a connection.
   *
   * @public
   */
  export interface SecretArnMember {
    secretArn: string;
    usernamePassword?: never;
    $unknown?: never;
  }

  /**
   * The username and password of the Amazon Redshift credentials of a connection.
   *
   * @public
   */
  export interface UsernamePasswordMember {
    secretArn?: never;
    usernamePassword: UsernamePassword;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    secretArn?: never;
    usernamePassword?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    secretArn: (value: string) => T;
    usernamePassword: (value: UsernamePassword) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The lineage sync schedule.
 *
 * @public
 */
export interface LineageSyncSchedule {
  /**
   * The lineage sync schedule.
   *
   * @public
   */
  schedule?: string | undefined;
}

/**
 * The Amaon Redshift lineage sync configuration.
 *
 * @public
 */
export interface RedshiftLineageSyncConfigurationInput {
  /**
   * Specifies whether the Amaon Redshift lineage sync configuration is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The schedule of the Amaon Redshift lineage sync configuration.
   *
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * The Amazon Redshift storage properties.
 *
 * @public
 */
export type RedshiftStorageProperties =
  | RedshiftStorageProperties.ClusterNameMember
  | RedshiftStorageProperties.WorkgroupNameMember
  | RedshiftStorageProperties.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftStorageProperties {
  /**
   * The cluster name in the Amazon Redshift storage properties.
   *
   * @public
   */
  export interface ClusterNameMember {
    clusterName: string;
    workgroupName?: never;
    $unknown?: never;
  }

  /**
   * The workgroup name in the Amazon Redshift storage properties.
   *
   * @public
   */
  export interface WorkgroupNameMember {
    clusterName?: never;
    workgroupName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    clusterName?: never;
    workgroupName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    clusterName: (value: string) => T;
    workgroupName: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon Redshift properties.
 *
 * @public
 */
export interface RedshiftPropertiesInput {
  /**
   * The Amazon Redshift storage.
   *
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * The Amazon Redshift database name.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * The Amazon Redshift host.
   *
   * @public
   */
  host?: string | undefined;

  /**
   * The Amaon Redshift port.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The Amaon Redshift credentials.
   *
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * The lineage sync of the Amazon Redshift.
   *
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * The Amazon S3 properties of a connection.
 *
 * @public
 */
export interface S3PropertiesInput {
  /**
   * The Amazon S3 URI that's part of the Amazon S3 properties of a connection.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.
   *
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;

  /**
   * Specifies whether to register the Amazon S3 Access Grant location.
   *
   * @public
   */
  registerS3AccessGrantLocation?: boolean | undefined;
}

/**
 * Contains the network and authentication settings for a connection, including connection credentials, physical network requirements, and compute-environment validation options.
 *
 * @public
 */
export interface ConnectivityProperties {
  /**
   * The connection properties for this configuration.
   *
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * The physical network requirements for the connection, such as the subnet, security group, and VPC settings needed to reach the data source.
   *
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * The name of the connectivity configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the connectivity configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether to validate credentials for the connectivity configuration. Defaults to true if not specified.
   *
   * @public
   */
  validateCredentials?: boolean | undefined;

  /**
   * The compute environments to use when validating connectivity. The service validates that the connection is reachable from each specified environment.
   *
   * @public
   */
  validateForComputeEnvironments?: ComputeEnvironments[] | undefined;

  /**
   * The Spark properties for this configuration.
   *
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * The Athena properties for this configuration.
   *
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * The Python properties for this configuration.
   *
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * The authentication settings for this configuration.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * Contains the configuration for mapping user identities to Snowflake users, including the username attribute and optional prefix applied during the mapping.
 *
 * @public
 */
export interface IdentityMapping {
  /**
   * The username attribute used for the identity mapping.
   *
   * @public
   */
  usernameAttribute: string | undefined;

  /**
   * The prefix used for the identity mapping.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Contains the settings for configuring lineage sync on a Snowflake connection, including the schedule, timezone, and enabled state.
 *
 * @public
 */
export interface LineageSyncInput {
  /**
   * The timezone of the lineage sync schedule.
   *
   * @public
   */
  timezone?: Timezone | undefined;

  /**
   * Specifies whether lineage sync is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The schedule of the lineage sync.
   *
   * @public
   */
  schedule?: string | undefined;
}

/**
 * Contains the Snowflake-specific settings required when creating or updating a connection, including the Snowflake role, identity mapping, and lineage sync configuration.
 *
 * @public
 */
export interface SnowflakePropertiesInput {
  /**
   * The connectivity properties of the Snowflake connection.
   *
   * @public
   */
  connectivityProperties?: ConnectivityProperties | undefined;

  /**
   * The Snowflake role used to access Snowflake resources.
   *
   * @public
   */
  snowflakeRole: string | undefined;

  /**
   * The identity mapping configuration for the Snowflake connection.
   *
   * @public
   */
  identityMapping: IdentityMapping | undefined;

  /**
   * The lineage sync configuration for the Snowflake connection.
   *
   * @public
   */
  lineageSync?: LineageSyncInput | undefined;
}

/**
 * The Spark EMR properties.
 *
 * @public
 */
export interface SparkEmrPropertiesInput {
  /**
   * The compute ARN of Spark EMR.
   *
   * @public
   */
  computeArn?: string | undefined;

  /**
   * The instance profile ARN of Spark EMR.
   *
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * The java virtual env of the Spark EMR.
   *
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * The log URI of the Spark EMR.
   *
   * @public
   */
  logUri?: string | undefined;

  /**
   * The Python virtual env of the Spark EMR.
   *
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * The runtime role of the Spark EMR.
   *
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * The certificates S3 URI of the Spark EMR.
   *
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * The managed endpoint ARN of the EMR on EKS cluster.
   *
   * @public
   */
  managedEndpointArn?: string | undefined;
}

/**
 * The Spark Amazon Web Services Glue args.
 *
 * @public
 */
export interface SparkGlueArgs {
  /**
   * The connection in the Spark Amazon Web Services Glue args.
   *
   * @public
   */
  connection?: string | undefined;
}

/**
 * The Spark Amazon Web Services Glue properties.
 *
 * @public
 */
export interface SparkGluePropertiesInput {
  /**
   * The additional args in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue properties. Specify either `glueConnectionName` or `glueConnectionNames`, but not both.
   *
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * The Amazon Web Services Glue connection names in the Spark Amazon Web Services Glue properties. Specify either `glueConnectionName` or `glueConnectionNames`, but not both.
   *
   * @public
   */
  glueConnectionNames?: string[] | undefined;

  /**
   * The Amazon Web Services Glue version in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * The idle timeout in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * The Java virtual env in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * The number of workers in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * The Python virtual env in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * The worker type in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  workerType?: string | undefined;
}

/**
 * The VPC connection properties used when creating a connection.
 *
 * @public
 */
export interface VpcPropertiesInput {
  /**
   * The identifier of the VPC. Must match the pattern `^vpc-[a-z0-9]+$`. Maximum length of 32.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs of the VPC connection. You can specify between 1 and 16 subnet IDs.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The security group ID of the VPC connection. Must match the pattern `^sg-[a-z0-9]+$`. Maximum length of 32.
   *
   * @public
   */
  securityGroupId?: string | undefined;
}

/**
 * The Amazon MWAA properties.
 *
 * @public
 */
export interface WorkflowsMwaaPropertiesInput {
  /**
   * The MWAA environment name.
   *
   * @public
   */
  mwaaEnvironmentName?: string | undefined;
}

/**
 * The MWAA serverless properties.
 *
 * @public
 */
export interface WorkflowsServerlessPropertiesInput {}

/**
 * The properties of a connection.
 *
 * @public
 */
export type ConnectionPropertiesInput =
  | ConnectionPropertiesInput.AmazonQPropertiesMember
  | ConnectionPropertiesInput.AthenaPropertiesMember
  | ConnectionPropertiesInput.GitPropertiesMember
  | ConnectionPropertiesInput.GluePropertiesMember
  | ConnectionPropertiesInput.HyperPodPropertiesMember
  | ConnectionPropertiesInput.IamPropertiesMember
  | ConnectionPropertiesInput.LakehousePropertiesMember
  | ConnectionPropertiesInput.MlflowPropertiesMember
  | ConnectionPropertiesInput.RedshiftPropertiesMember
  | ConnectionPropertiesInput.S3PropertiesMember
  | ConnectionPropertiesInput.SnowflakePropertiesMember
  | ConnectionPropertiesInput.SparkEmrPropertiesMember
  | ConnectionPropertiesInput.SparkGluePropertiesMember
  | ConnectionPropertiesInput.VpcPropertiesMember
  | ConnectionPropertiesInput.WorkflowsMwaaPropertiesMember
  | ConnectionPropertiesInput.WorkflowsServerlessPropertiesMember
  | ConnectionPropertiesInput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesInput {
  /**
   * The Amazon Athena properties of a connection.
   *
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesInput;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Web Services Glue properties of a connection.
   *
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesInput;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The hyper pod properties of a connection.
   *
   * @public
   */
  export interface HyperPodPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties: HyperPodPropertiesInput;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The IAM properties of a connection.
   *
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties: IamPropertiesInput;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Redshift properties of a connection.
   *
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesInput;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Spark EMR properties of a connection.
   *
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesInput;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Spark Amazon Web Services Glue properties of a connection.
   *
   * @public
   */
  export interface SparkGluePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties: SparkGluePropertiesInput;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon S3 properties of a connection.
   *
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties: S3PropertiesInput;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Snowflake-specific connection properties to use when creating the connection.
   *
   * @public
   */
  export interface SnowflakePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties: SnowflakePropertiesInput;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Q properties of the connection.
   *
   * @public
   */
  export interface AmazonQPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties: AmazonQPropertiesInput;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The MLflow properties of a connection.
   *
   * @public
   */
  export interface MlflowPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesInput;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon MWAA properties of a connection.
   *
   * @public
   */
  export interface WorkflowsMwaaPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties: WorkflowsMwaaPropertiesInput;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The MWAA serverless properties of a connection.
   *
   * @public
   */
  export interface WorkflowsServerlessPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties: WorkflowsServerlessPropertiesInput;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The lakehouse properties of a connection.
   *
   * @public
   */
  export interface LakehousePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties: LakehousePropertiesInput;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The VPC properties of a connection.
   *
   * @public
   */
  export interface VpcPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties: VpcPropertiesInput;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Git properties of a connection.
   *
   * @public
   */
  export interface GitPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties: GitPropertiesInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesInput) => T;
    glueProperties: (value: GluePropertiesInput) => T;
    hyperPodProperties: (value: HyperPodPropertiesInput) => T;
    iamProperties: (value: IamPropertiesInput) => T;
    redshiftProperties: (value: RedshiftPropertiesInput) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesInput) => T;
    sparkGlueProperties: (value: SparkGluePropertiesInput) => T;
    s3Properties: (value: S3PropertiesInput) => T;
    snowflakeProperties: (value: SnowflakePropertiesInput) => T;
    amazonQProperties: (value: AmazonQPropertiesInput) => T;
    mlflowProperties: (value: MlflowPropertiesInput) => T;
    workflowsMwaaProperties: (value: WorkflowsMwaaPropertiesInput) => T;
    workflowsServerlessProperties: (value: WorkflowsServerlessPropertiesInput) => T;
    lakehouseProperties: (value: LakehousePropertiesInput) => T;
    vpcProperties: (value: VpcPropertiesInput) => T;
    gitProperties: (value: GitPropertiesInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The properties of a Git connection returned by get and list operations, including connection status and any error details.
 *
 * @public
 */
export interface GitPropertiesOutput {
  /**
   * The ARN of the CodeConnections connection used to connect to the Git repository.
   *
   * @public
   */
  codeConnectionArn: string | undefined;

  /**
   * The ID of the Git repository. This is the owner and repository name, for example, owner/repo-name.
   *
   * @public
   */
  repositoryId: string | undefined;

  /**
   * The default branch of the Git repository.
   *
   * @public
   */
  defaultBranch: string | undefined;

  /**
   * The status of the Git connection.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The error message that describes why the Git connection failed. This member is populated when the connection status is CREATE_FAILED or UPDATE_FAILED.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The properties of the Amazon Web Services Glue connection.
 *
 * @public
 */
export interface GluePropertiesOutput {
  /**
   * The status of a connection.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The error message generated if the action is not completed successfully.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The hyper pod properties of a Amazon Web Services Glue properties patch.
 *
 * @public
 */
export interface HyperPodPropertiesOutput {
  /**
   * The cluster name the hyper pod properties.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The cluster ARN of the hyper pod properties.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The orchestrator of the hyper pod properties.
   *
   * @public
   */
  orchestrator?: HyperPodOrchestrator | undefined;
}

/**
 * The IAM properties of a connection.
 *
 * @public
 */
export interface IamPropertiesOutput {
  /**
   * The environment ID of the connection.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * The lakehouse properties of a connection.
 *
 * @public
 */
export interface LakehousePropertiesOutput {
  /**
   * Specifies whether Glue lineage sync is enabled for tables managed by Glue crawlers.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * The MLflow properties of a connection.
 *
 * @public
 */
export interface MlflowPropertiesOutput {
  /**
   * The tracking server ARN as part of the MLflow properties of a connection.
   *
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * The Amaon Redshift lineage sync configuration.
 *
 * @public
 */
export interface RedshiftLineageSyncConfigurationOutput {
  /**
   * The lineage job ID of the Amaon Redshift lineage sync configuration.
   *
   * @public
   */
  lineageJobId?: string | undefined;

  /**
   * Specifies whether the Amaon Redshift lineage sync configuration is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The schedule of teh Amaon Redshift lineage sync configuration.
   *
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * The Amazon Redshift properties.
 *
 * @public
 */
export interface RedshiftPropertiesOutput {
  /**
   * The storage in the Amazon Redshift properties.
   *
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * The Amazon Redshift credentials.
   *
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * Specifies whether Amaon Redshift properties has a provisioned secret.
   *
   * @public
   */
  isProvisionedSecret?: boolean | undefined;

  /**
   * The jdbcIam URL of the Amazon Redshift properties.
   *
   * @public
   */
  jdbcIamUrl?: string | undefined;

  /**
   * The jdbcURL of the Amazon Redshift properties.
   *
   * @public
   */
  jdbcUrl?: string | undefined;

  /**
   * The redshiftTempDir of the Amazon Redshift properties.
   *
   * @public
   */
  redshiftTempDir?: string | undefined;

  /**
   * The lineage syn of the Amazon Redshift properties.
   *
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationOutput | undefined;

  /**
   * The status in the Amazon Redshift properties.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The Amazon Redshift database name.
   *
   * @public
   */
  databaseName?: string | undefined;
}

/**
 * The Amazon S3 properties of a connection.
 *
 * @public
 */
export interface S3PropertiesOutput {
  /**
   * The Amazon S3 URI that's part of the Amazon S3 properties of a connection.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.
   *
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;

  /**
   * Specifies whether to register the Amazon S3 Access Grant location.
   *
   * @public
   */
  registerS3AccessGrantLocation?: boolean | undefined;

  /**
   * The status of the Amazon S3 connection.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The error message that gets displayed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Contains the current state of lineage sync for a Snowflake connection, including the schedule, timezone, enabled state, and the ID of the associated lineage job.
 *
 * @public
 */
export interface LineageSyncOutput {
  /**
   * The ID of the lineage sync job.
   *
   * @public
   */
  lineageJobId?: string | undefined;

  /**
   * The timezone of the lineage sync schedule.
   *
   * @public
   */
  timezone?: Timezone | undefined;

  /**
   * Specifies whether lineage sync is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The schedule of the lineage sync.
   *
   * @public
   */
  schedule?: string | undefined;
}

/**
 * Contains the Snowflake-specific settings returned for an existing connection, including the current role, identity mapping, lineage sync state, and connection status.
 *
 * @public
 */
export interface SnowflakePropertiesOutput {
  /**
   * The Snowflake role used to access Snowflake resources.
   *
   * @public
   */
  snowflakeRole: string | undefined;

  /**
   * The identity mapping configuration for the Snowflake connection.
   *
   * @public
   */
  identityMapping: IdentityMapping | undefined;

  /**
   * The lineage sync configuration for the Snowflake connection.
   *
   * @public
   */
  lineageSync: LineageSyncOutput | undefined;

  /**
   * The status of the Snowflake connection.
   *
   * @public
   */
  status: ConnectionStatus | undefined;

  /**
   * An error message returned if the Snowflake connection failed to establish or validate.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The managed endpoint credentials of the EMR on EKS cluster.
 *
 * @public
 */
export interface ManagedEndpointCredentials {
  /**
   * The identifier of the managed endpoint credentials.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the managed endpoint credentials.
   *
   * @public
   */
  token?: string | undefined;
}

/**
 * The Spark EMR properties.
 *
 * @public
 */
export interface SparkEmrPropertiesOutput {
  /**
   * The compute ARN of the Spark EMR.
   *
   * @public
   */
  computeArn?: string | undefined;

  /**
   * The credentials of the Spark EMR.
   *
   * @public
   */
  credentials?: UsernamePassword | undefined;

  /**
   * The credential expiration of the Spark EMR.
   *
   * @public
   */
  credentialsExpiration?: Date | undefined;

  /**
   * The governance type of the Spark EMR.
   *
   * @public
   */
  governanceType?: GovernanceType | undefined;

  /**
   * The instance profile ARN of the Spark EMR.
   *
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * The Java virtual env of the Spark EMR.
   *
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * The livy endpoint of the Spark EMR.
   *
   * @public
   */
  livyEndpoint?: string | undefined;

  /**
   * The log URI of the Spark EMR.
   *
   * @public
   */
  logUri?: string | undefined;

  /**
   * The Python virtual env of the Spark EMR.
   *
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * The runtime role of the Spark EMR.
   *
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * The trusted certificate S3 URL of the Spark EMR.
   *
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * The certificate data of the EMR on EKS cluster.
   *
   * @public
   */
  certificateData?: string | undefined;

  /**
   * The managed endpoint ARN of the EMR on EKS cluster.
   *
   * @public
   */
  managedEndpointArn?: string | undefined;

  /**
   * The managed endpoint credentials of the EMR on EKS cluster.
   *
   * @public
   */
  managedEndpointCredentials?: ManagedEndpointCredentials | undefined;
}

/**
 * The Spark Amazon Web Services Glue properties.
 *
 * @public
 */
export interface SparkGluePropertiesOutput {
  /**
   * The additional args in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * The Amazon Web Services Glue connection names in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  glueConnectionNames?: string[] | undefined;

  /**
   * The Amazon Web Services Glue version in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * The idle timeout in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * The Java virtual env in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * The number of workers in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * The Python virtual env in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * The worker type in the Spark Amazon Web Services Glue properties.
   *
   * @public
   */
  workerType?: string | undefined;
}

/**
 * The VPC connection properties returned in responses.
 *
 * @public
 */
export interface VpcPropertiesOutput {
  /**
   * The identifier of the VPC.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs of the VPC connection.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The status of the VPC connection.
   *
   * @public
   */
  status: ConnectionStatus | undefined;

  /**
   * The security group ID of the VPC connection.
   *
   * @public
   */
  securityGroupId?: string | undefined;

  /**
   * The Amazon Web Services Glue connection names associated with the VPC connection.
   *
   * @public
   */
  glueConnectionNames?: string[] | undefined;
}

/**
 * The Amazon MWAA properties.
 *
 * @public
 */
export interface WorkflowsMwaaPropertiesOutput {
  /**
   * The MWAA environment name.
   *
   * @public
   */
  mwaaEnvironmentName?: string | undefined;
}

/**
 * The MWAA serverless properties.
 *
 * @public
 */
export interface WorkflowsServerlessPropertiesOutput {}

/**
 * The properties of a connection.
 *
 * @public
 */
export type ConnectionPropertiesOutput =
  | ConnectionPropertiesOutput.AmazonQPropertiesMember
  | ConnectionPropertiesOutput.AthenaPropertiesMember
  | ConnectionPropertiesOutput.GitPropertiesMember
  | ConnectionPropertiesOutput.GluePropertiesMember
  | ConnectionPropertiesOutput.HyperPodPropertiesMember
  | ConnectionPropertiesOutput.IamPropertiesMember
  | ConnectionPropertiesOutput.LakehousePropertiesMember
  | ConnectionPropertiesOutput.MlflowPropertiesMember
  | ConnectionPropertiesOutput.RedshiftPropertiesMember
  | ConnectionPropertiesOutput.S3PropertiesMember
  | ConnectionPropertiesOutput.SnowflakePropertiesMember
  | ConnectionPropertiesOutput.SparkEmrPropertiesMember
  | ConnectionPropertiesOutput.SparkGluePropertiesMember
  | ConnectionPropertiesOutput.VpcPropertiesMember
  | ConnectionPropertiesOutput.WorkflowsMwaaPropertiesMember
  | ConnectionPropertiesOutput.WorkflowsServerlessPropertiesMember
  | ConnectionPropertiesOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesOutput {
  /**
   * The Amazon Athena properties of a connection.
   *
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesOutput;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Web Services Glue properties of a connection.
   *
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesOutput;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The hyper pod properties of a connection.
   *
   * @public
   */
  export interface HyperPodPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties: HyperPodPropertiesOutput;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The IAM properties of a connection.
   *
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties: IamPropertiesOutput;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Redshift properties of a connection.
   *
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesOutput;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Spark EMR properties of a connection.
   *
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesOutput;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Spark Amazon Web Services Glue properties of a connection.
   *
   * @public
   */
  export interface SparkGluePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties: SparkGluePropertiesOutput;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon S3 properties of a connection.
   *
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties: S3PropertiesOutput;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Snowflake-specific connection properties for an existing connection.
   *
   * @public
   */
  export interface SnowflakePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties: SnowflakePropertiesOutput;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Q properties of the connection.
   *
   * @public
   */
  export interface AmazonQPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties: AmazonQPropertiesOutput;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The MLflow properties of a connection.
   *
   * @public
   */
  export interface MlflowPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesOutput;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon MWAA properties of a connection.
   *
   * @public
   */
  export interface WorkflowsMwaaPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties: WorkflowsMwaaPropertiesOutput;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The MWAA serverless properties of a connection.
   *
   * @public
   */
  export interface WorkflowsServerlessPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties: WorkflowsServerlessPropertiesOutput;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The lakehouse properties of a connection.
   *
   * @public
   */
  export interface LakehousePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties: LakehousePropertiesOutput;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The VPC properties of a connection.
   *
   * @public
   */
  export interface VpcPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties: VpcPropertiesOutput;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Git properties of a connection.
   *
   * @public
   */
  export interface GitPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties: GitPropertiesOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    workflowsMwaaProperties?: never;
    workflowsServerlessProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesOutput) => T;
    glueProperties: (value: GluePropertiesOutput) => T;
    hyperPodProperties: (value: HyperPodPropertiesOutput) => T;
    iamProperties: (value: IamPropertiesOutput) => T;
    redshiftProperties: (value: RedshiftPropertiesOutput) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesOutput) => T;
    sparkGlueProperties: (value: SparkGluePropertiesOutput) => T;
    s3Properties: (value: S3PropertiesOutput) => T;
    snowflakeProperties: (value: SnowflakePropertiesOutput) => T;
    amazonQProperties: (value: AmazonQPropertiesOutput) => T;
    mlflowProperties: (value: MlflowPropertiesOutput) => T;
    workflowsMwaaProperties: (value: WorkflowsMwaaPropertiesOutput) => T;
    workflowsServerlessProperties: (value: WorkflowsServerlessPropertiesOutput) => T;
    lakehouseProperties: (value: LakehousePropertiesOutput) => T;
    vpcProperties: (value: VpcPropertiesOutput) => T;
    gitProperties: (value: GitPropertiesOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The properties used to update an existing Git connection, such as the CodeConnections ARN or the default branch.
 *
 * @public
 */
export interface GitPropertiesPatch {
  /**
   * The ARN of the CodeConnections connection used to connect to the Git repository.
   *
   * @public
   */
  codeConnectionArn?: string | undefined;

  /**
   * The default branch of the Git repository.
   *
   * @public
   */
  defaultBranch?: string | undefined;
}

/**
 * The Amazon Web Services Glue connection patch.
 *
 * @public
 */
export interface GlueConnectionPatch {
  /**
   * The description of the Amazon Web Services Glue connection patch.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The properties of the Amazon Web Services Glue connection patch.
   *
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * The authentication configuration of the Amazon Web Services Glue connection patch.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationPatch | undefined;
}

/**
 * The Amazon Web Services Glue properties patch of a connection.
 *
 * @public
 */
export interface GluePropertiesPatch {
  /**
   * The Amazon Web Services Glue properties patch of a connection.
   *
   * @public
   */
  glueConnectionInput?: GlueConnectionPatch | undefined;
}

/**
 * The IAM properties patch of a connection.
 *
 * @public
 */
export interface IamPropertiesPatch {
  /**
   * Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * The lakehouse properties of a connection properties patch.
 *
 * @public
 */
export interface LakehousePropertiesPatch {
  /**
   * Specifies whether to enable Glue lineage sync for tables managed by Glue crawlers.
   *
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * The MLflow properties of a connection.
 *
 * @public
 */
export interface MlflowPropertiesPatch {
  /**
   * The tracking server ARN as part of the MLflow properties of a connection.
   *
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * Amazon Redshift properties patch.
 *
 * @public
 */
export interface RedshiftPropertiesPatch {
  /**
   * The storage in the Amazon Redshift properties patch.
   *
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * The name in the Amazon Redshift properties patch.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * The host in the Amazon Redshift properties patch.
   *
   * @public
   */
  host?: string | undefined;

  /**
   * The port in the Amazon Redshift properties patch.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The credentials in the Amazon Redshift properties patch.
   *
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * The lineage sync in the Amazon Redshift properties patch.
   *
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * The Amazon S3 properties patch of a connection.
 *
 * @public
 */
export interface S3PropertiesPatch {
  /**
   * The Amazon S3 URI that's part of the Amazon S3 properties patch of a connection.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties patch of a connection.
   *
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;

  /**
   * Specifies whether to register the Amazon S3 Access Grant location.
   *
   * @public
   */
  registerS3AccessGrantLocation?: boolean | undefined;
}

/**
 * Contains the connectivity settings to update on an existing connection. Include only the fields you want to change.
 *
 * @public
 */
export interface ConnectivityPropertiesPatch {
  /**
   * A description of the connectivity properties update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The connection properties to update.
   *
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * The authentication settings to update.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationPatch | undefined;
}

/**
 * Contains the Snowflake-specific settings to update on an existing connection. Include only the fields you want to change.
 *
 * @public
 */
export interface SnowflakePropertiesPatch {
  /**
   * The connectivity properties patch of the Snowflake connection.
   *
   * @public
   */
  connectivityPropertiesPatch?: ConnectivityPropertiesPatch | undefined;

  /**
   * The Snowflake role used to access Snowflake resources.
   *
   * @public
   */
  snowflakeRole?: string | undefined;

  /**
   * The lineage sync configuration for the Snowflake connection.
   *
   * @public
   */
  lineageSync?: LineageSyncInput | undefined;
}

/**
 * The Spark EMR properties patch.
 *
 * @public
 */
export interface SparkEmrPropertiesPatch {
  /**
   * The compute ARN in the Spark EMR properties patch.
   *
   * @public
   */
  computeArn?: string | undefined;

  /**
   * The instance profile ARN in the Spark EMR properties patch.
   *
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * The Java virtual evn in the Spark EMR properties patch.
   *
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * The log URI in the Spark EMR properties patch.
   *
   * @public
   */
  logUri?: string | undefined;

  /**
   * The Python virtual env in the Spark EMR properties patch.
   *
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * The runtime role in the Spark EMR properties patch.
   *
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * The trusted certificates S3 URI in the Spark EMR properties patch.
   *
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * The managed endpoint ARN of the EMR on EKS cluster.
   *
   * @public
   */
  managedEndpointArn?: string | undefined;
}

/**
 * The VPC connection properties used when updating a connection.
 *
 * @public
 */
export interface VpcPropertiesPatch {
  /**
   * The identifier of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The subnet IDs of the VPC connection.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security group ID of the VPC connection.
   *
   * @public
   */
  securityGroupId?: string | undefined;
}

/**
 * The connection properties patch.
 *
 * @public
 */
export type ConnectionPropertiesPatch =
  | ConnectionPropertiesPatch.AmazonQPropertiesMember
  | ConnectionPropertiesPatch.AthenaPropertiesMember
  | ConnectionPropertiesPatch.GitPropertiesMember
  | ConnectionPropertiesPatch.GluePropertiesMember
  | ConnectionPropertiesPatch.IamPropertiesMember
  | ConnectionPropertiesPatch.LakehousePropertiesMember
  | ConnectionPropertiesPatch.MlflowPropertiesMember
  | ConnectionPropertiesPatch.RedshiftPropertiesMember
  | ConnectionPropertiesPatch.S3PropertiesMember
  | ConnectionPropertiesPatch.SnowflakePropertiesMember
  | ConnectionPropertiesPatch.SparkEmrPropertiesMember
  | ConnectionPropertiesPatch.VpcPropertiesMember
  | ConnectionPropertiesPatch.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesPatch {
  /**
   * The Amazon Athena properties of a connection properties patch.
   *
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesPatch;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Web Services Glue properties of a connection properties patch.
   *
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesPatch;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The IAM properties of a connection properties patch.
   *
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties: IamPropertiesPatch;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Redshift properties of a connection properties patch.
   *
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesPatch;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Spark EMR properties of a connection properties patch.
   *
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesPatch;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon S3 properties of a connection properties patch.
   *
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties: S3PropertiesPatch;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Snowflake-specific connection properties to update.
   *
   * @public
   */
  export interface SnowflakePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties: SnowflakePropertiesPatch;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Q properties of the connection.
   *
   * @public
   */
  export interface AmazonQPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties: AmazonQPropertiesPatch;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The MLflow properties of a connection.
   *
   * @public
   */
  export interface MlflowPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesPatch;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The lakehouse properties of a connection properties patch.
   *
   * @public
   */
  export interface LakehousePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties: LakehousePropertiesPatch;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The VPC properties of a connection properties patch.
   *
   * @public
   */
  export interface VpcPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties: VpcPropertiesPatch;
    gitProperties?: never;
    $unknown?: never;
  }

  /**
   * The Git properties of a connection properties patch.
   *
   * @public
   */
  export interface GitPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties: GitPropertiesPatch;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    snowflakeProperties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    lakehouseProperties?: never;
    vpcProperties?: never;
    gitProperties?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesPatch) => T;
    glueProperties: (value: GluePropertiesPatch) => T;
    iamProperties: (value: IamPropertiesPatch) => T;
    redshiftProperties: (value: RedshiftPropertiesPatch) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesPatch) => T;
    s3Properties: (value: S3PropertiesPatch) => T;
    snowflakeProperties: (value: SnowflakePropertiesPatch) => T;
    amazonQProperties: (value: AmazonQPropertiesPatch) => T;
    mlflowProperties: (value: MlflowPropertiesPatch) => T;
    lakehouseProperties: (value: LakehousePropertiesPatch) => T;
    vpcProperties: (value: VpcPropertiesPatch) => T;
    gitProperties: (value: GitPropertiesPatch) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon Web Services Glue connection.
 *
 * @public
 */
export interface GlueConnection {
  /**
   * The name of the Amazon Web Services Glue connection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the Amazon Web Services Glue connection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the Amazon Web Services Glue connection.
   *
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * The match criteria of the Amazon Web Services Glue connection.
   *
   * @public
   */
  matchCriteria?: string[] | undefined;

  /**
   * The properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * The Spark properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * The Amazon Athena properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * The Python properties of the Amazon Web Services Glue connection.
   *
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * The physical connection requirements of the Amazon Web Services Glue connection.
   *
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * The creation time of the Amazon Web Services Glue connection.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The timestamp at which the Amazon Web Services Glue connection was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The user who last updated the Amazon Web Services Glue connection.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The status of the Amazon Web Services Glue connection.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The status reason of the Amazon Web Services Glue connection.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The last validation time of the Amazon Web Services Glue connection.
   *
   * @public
   */
  lastConnectionValidationTime?: Date | undefined;

  /**
   * The authentication configuration of the Amazon Web Services Glue connection.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * The connection schema version of the Amazon Web Services Glue connection.
   *
   * @public
   */
  connectionSchemaVersion?: number | undefined;

  /**
   * The compatible compute environments of the Amazon Web Services Glue connection.
   *
   * @public
   */
  compatibleComputeEnvironments?: ComputeEnvironments[] | undefined;
}

/**
 * The physical endpoints of a connection.
 *
 * @public
 */
export interface PhysicalEndpoint {
  /**
   * The location of a connection.
   *
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * The Amazon Web Services Glue connection name.
   *
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * The Amazon Web Services Glue connection names in the physical endpoint.
   *
   * @public
   */
  glueConnectionNames?: string[] | undefined;

  /**
   * The Amazon Web Services Glue connection.
   *
   * @public
   */
  glueConnection?: GlueConnection | undefined;

  /**
   * Specified whether trusted identity propagation for the connection is enabled.
   *
   * @public
   */
  enableTrustedIdentityPropagation?: boolean | undefined;

  /**
   * The host in the physical endpoints of a connection.
   *
   * @public
   */
  host?: string | undefined;

  /**
   * The port in the physical endpoints of a connection.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The protocol in the physical endpoints of a connection.
   *
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * The stage in the physical endpoints of a connection.
   *
   * @public
   */
  stage?: string | undefined;
}

/**
 * The summary of a connection.
 *
 * @public
 */
export interface ConnectionSummary {
  /**
   * The configurations of a connection summary.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * The ID of a connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The domain ID of a connection.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The domain unit ID of a connection.
   *
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * The environment ID of a connection.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The connection name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The connection physical endpoints.
   *
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * The connection project ID.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * The connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * The connection type.
   *
   * @public
   */
  type: ConnectionType | undefined;

  /**
   * The scope of the connection.
   *
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * @public
 */
export interface CreateAccountPoolInput {
  /**
   * The ID of the domain where the account pool is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the account pool.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the account pool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The mechanism used to resolve the account selection from the account pool.
   *
   * @public
   */
  resolutionStrategy: ResolutionStrategy | undefined;

  /**
   * The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
   *
   * @public
   */
  accountSource: AccountSource | undefined;
}

/**
 * @public
 */
export interface CreateAccountPoolOutput {
  /**
   * The ID of the domain where the account pool is created.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The name of the account pool.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the account pool.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description of the account pool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The mechanism used to resolve the account selection from the account pool.
   *
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
   *
   * @public
   */
  accountSource: AccountSource | undefined;

  /**
   * The user who created the account pool.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp at which the account pool was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the account pool was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user who last updated the account pool.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the domain where the account pool is created.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * The location where the connection is created.
   *
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configurations of the connection.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * A connection description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the domain where the connection is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment where the connection is created.
   *
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * The connection name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesInput | undefined;

  /**
   * Specifies whether the trusted identity propagation is enabled.
   *
   * @public
   */
  enableTrustedIdentityPropagation?: boolean | undefined;

  /**
   * The scope of the connection.
   *
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The configurations of the connection.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * The connection description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the domain where the connection is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the domain unit where the connection is created.
   *
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * The ID of the environment where the connection is created.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The connection name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The physical endpoints of the connection.
   *
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * The ID of the project where the connection is created.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * The connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * The connection type.
   *
   * @public
   */
  type: ConnectionType | undefined;

  /**
   * The scope of the connection.
   *
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * The data product.
 *
 * @public
 */
export interface DataProductItem {
  /**
   * The type of the data product.
   *
   * @public
   */
  itemType: DataProductItemType | undefined;

  /**
   * The ID of the data product.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the data product.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The glossary terms of the data product.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataProductInput {
  /**
   * The ID of the domain where the data product is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the data product.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the owning project of the data product.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The description of the data product.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms of the data product.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The metadata forms of the data product.
   *
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * The data assets of the data product.
   *
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductOutput {
  /**
   * The ID of the domain where the data product lives.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data product.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The revision of the data product.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The ID of the owning project of the data product.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The name of the data product.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the data product.
   *
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * The description of the data product.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms of the data product.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The data assets of the data product.
   *
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * The metadata forms of the data product.
   *
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * The timestamp at which the data product was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data product.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the first revision of the data product was created.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The user who created the first revision of the data product.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionInput {
  /**
   * The ID of the domain where the data product revision is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data product revision.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the data product revision.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the data product revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms of the data product revision.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The data assets of the data product revision.
   *
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * The metadata forms of the data product revision.
   *
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionOutput {
  /**
   * The ID of the domain where data product revision is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data product revision.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The revision of the data product revision.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The ID of the owning project of the data product revision.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The name of the data product revision.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the data product revision.
   *
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * The description of the data product revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms of the data product revision.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The data assets of the data product revision.
   *
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * The metadata forms of the data product revision.
   *
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * The timestamp at which the data product revision is created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data product revision.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the first revision of the data product is created.
   *
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * The user who created the first revision of the data product.
   *
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * A filter expression in Amazon DataZone.
 *
 * @public
 */
export interface FilterExpression {
  /**
   * The search filter explresison type.
   *
   * @public
   */
  type: FilterExpressionType | undefined;

  /**
   * The search filter expression.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * The relational filter configuration for the data source.
 *
 * @public
 */
export interface RelationalFilterConfiguration {
  /**
   * The database name specified in the relational filter configuration for the data source.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The schema name specified in the relational filter configuration for the data source.
   *
   * @public
   */
  schemaName?: string | undefined;

  /**
   * The filter expressions specified in the relational filter configuration for the data source.
   *
   * @public
   */
  filterExpressions?: FilterExpression[] | undefined;
}

/**
 * The configuration details of the Amazon Web Services Glue data source.
 *
 * @public
 */
export interface GlueRunConfigurationInput {
  /**
   * The data access role included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * The relational filter configurations included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * Specifies whether to automatically import data quality metrics as part of the data source run.
   *
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * The catalog name in the Amazon Web Services Glue run configuration.
   *
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * The details of the credentials required to access an Amazon Redshift cluster.
 *
 * @public
 */
export interface RedshiftCredentialConfiguration {
  /**
   * The ARN of a secret manager for an Amazon Redshift cluster.
   *
   * @public
   */
  secretManagerArn: string | undefined;
}

/**
 * The details of the Amazon Redshift cluster storage.
 *
 * @public
 */
export interface RedshiftClusterStorage {
  /**
   * The name of an Amazon Redshift cluster.
   *
   * @public
   */
  clusterName: string | undefined;
}

/**
 * The details of the Amazon Redshift Serverless workgroup storage.
 *
 * @public
 */
export interface RedshiftServerlessStorage {
  /**
   * The name of the Amazon Redshift Serverless workgroup.
   *
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
 *
 * @public
 */
export type RedshiftStorage =
  | RedshiftStorage.RedshiftClusterSourceMember
  | RedshiftStorage.RedshiftServerlessSourceMember
  | RedshiftStorage.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftStorage {
  /**
   * The details of the Amazon Redshift cluster source.
   *
   * @public
   */
  export interface RedshiftClusterSourceMember {
    redshiftClusterSource: RedshiftClusterStorage;
    redshiftServerlessSource?: never;
    $unknown?: never;
  }

  /**
   * The details of the Amazon Redshift Serverless workgroup source.
   *
   * @public
   */
  export interface RedshiftServerlessSourceMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource: RedshiftServerlessStorage;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    redshiftClusterSource: (value: RedshiftClusterStorage) => T;
    redshiftServerlessSource: (value: RedshiftServerlessStorage) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration details of the Amazon Redshift data source.
 *
 * @public
 */
export interface RedshiftRunConfigurationInput {
  /**
   * The data access role included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * The relational filger configurations included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * The details of the credentials required to access an Amazon Redshift cluster.
   *
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
   *
   * @public
   */
  redshiftStorage?: RedshiftStorage | undefined;
}

/**
 * The Amazon SageMaker run configuration.
 *
 * @public
 */
export interface SageMakerRunConfigurationInput {
  /**
   * The tracking assets of the Amazon SageMaker run.
   *
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * The configuration of the data source.
 *
 * @public
 */
export type DataSourceConfigurationInput =
  | DataSourceConfigurationInput.GlueRunConfigurationMember
  | DataSourceConfigurationInput.RedshiftRunConfigurationMember
  | DataSourceConfigurationInput.SageMakerRunConfigurationMember
  | DataSourceConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationInput {
  /**
   * The configuration of the Amazon Web Services Glue data source.
   *
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationInput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration of the Amazon Redshift data source.
   *
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationInput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The Amazon SageMaker run configuration.
   *
   * @public
   */
  export interface SageMakerRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration: SageMakerRunConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationInput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationInput) => T;
    sageMakerRunConfiguration: (value: SageMakerRunConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The recommendation to be updated as part of the `UpdateDataSource` action.
 *
 * @public
 */
export interface RecommendationConfiguration {
  /**
   * Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
   *
   * @public
   */
  enableBusinessNameGeneration?: boolean | undefined;
}

/**
 * The details of the schedule of the data source runs.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * The timezone of the data source run.
   *
   * @public
   */
  timezone?: Timezone | undefined;

  /**
   * The schedule of the data source runs.
   *
   * @public
   */
  schedule?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceInput {
  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain where the data source is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the Amazon DataZone project in which you want to add this data source.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
   *
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionIdentifier?: string | undefined;

  /**
   * The type of the data source. In Amazon DataZone, you can use data sources to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone. In the current release of Amazon DataZone, you can create and run data sources for Amazon Web Services Glue and Amazon Redshift.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Specifies the configuration of the data source. It can be set to either `glueRunConfiguration` or `redshiftRunConfiguration`.
   *
   * @public
   */
  configuration?: DataSourceConfigurationInput | undefined;

  /**
   * Specifies whether the business name generation is to be enabled for this data source.
   *
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * Specifies whether the data source is enabled.
   *
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * The schedule of the data source runs.
   *
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
   *
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * The metadata forms that are to be attached to the assets that this data source works with.
   *
   * @public
   */
  assetFormsInput?: FormInput[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The configuration details of the Amazon Web Services Glue data source.
 *
 * @public
 */
export interface GlueRunConfigurationOutput {
  /**
   * The Amazon Web Services account ID included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services region included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The data access role included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * The relational filter configurations included in the configuration details of the Amazon Web Services Glue data source.
   *
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * Specifies whether to automatically import data quality metrics as part of the data source run.
   *
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * The catalog name in the Amazon Web Services Glue run configuration.
   *
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * The configuration details of the Amazon Redshift data source.
 *
 * @public
 */
export interface RedshiftRunConfigurationOutput {
  /**
   * The ID of the Amazon Web Services account included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services region included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The data access role included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * The relational filger configurations included in the configuration details of the Amazon Redshift data source.
   *
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * The details of the credentials required to access an Amazon Redshift cluster.
   *
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
   *
   * @public
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * The Amazon SageMaker run configuration.
 *
 * @public
 */
export interface SageMakerRunConfigurationOutput {
  /**
   * The Amazon SageMaker account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon SageMaker Region.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The tracking assets of the Amazon SageMaker.
   *
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * The configuration of the data source.
 *
 * @public
 */
export type DataSourceConfigurationOutput =
  | DataSourceConfigurationOutput.GlueRunConfigurationMember
  | DataSourceConfigurationOutput.RedshiftRunConfigurationMember
  | DataSourceConfigurationOutput.SageMakerRunConfigurationMember
  | DataSourceConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationOutput {
  /**
   * The configuration of the Amazon Web Services Glue data source.
   *
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationOutput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration of the Amazon Redshift data source.
   *
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The Amazon SageMaker run configuration.
   *
   * @public
   */
  export interface SageMakerRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration: SageMakerRunConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationOutput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationOutput) => T;
    sageMakerRunConfiguration: (value: SageMakerRunConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of the error message that is returned if the operation cannot be successfully completed.
 *
 * @public
 */
export interface DataSourceErrorMessage {
  /**
   * The type of the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorType: DataSourceErrorType | undefined;

  /**
   * The details of the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorDetail?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceOutput {
  /**
   * The unique identifier of the data source.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * The type of the data source.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the data source is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the Amazon DataZone project to which the data source is added.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * Specifies the configuration of the data source. It can be set to either `glueRunConfiguration` or `redshiftRunConfiguration`.
   *
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * Specifies whether the business name generation is to be enabled for this data source.
   *
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * Specifies whether the data source is enabled.
   *
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
   *
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * The metadata forms attached to the assets that this data source creates.
   *
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * The schedule of the data source runs.
   *
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * The status of the last run of this data source.
   *
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * The timestamp that specifies when the data source was last run.
   *
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The timestamp of when the data source was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the data source was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateDesignationInput {
  /**
   * The identifier of the Amazon DataZone domain in which the designation is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the designation. The name must be unique within the domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the designation and its intended use.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Cedar permit policy that defines what actions holders of this
   * designation are allowed to perform.
   * @public
   */
  policy: string | undefined;

  /**
   * Whether deletion protection is enabled for this designation. Defaults to true when omitted.
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * A designation defines a named role with a Cedar permit policy that controls
 * what actions members holding this designation can perform within a project.
 * @public
 */
export interface CreateDesignationOutput {
  /**
   * The identifier of the Amazon DataZone domain in which the designation was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique ID of the designation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the designation. The name is unique within the domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the designation and its intended use.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The classification of this designation. MANAGED designations are
   * system-defined and cannot be modified or deleted.
   * @public
   */
  designationType: DesignationType | undefined;

  /**
   * The Cedar permit policy that governs what actions holders of this
   * designation are allowed to perform.
   * @public
   */
  policy: string | undefined;

  /**
   * Whether deletion protection is enabled for this designation. When true,
   * DeleteDesignation is rejected until protection is disabled via UpdateDesignation.
   * @public
   */
  deletionProtection: boolean | undefined;

  /**
   * The identifier of the Amazon DataZone user who created the designation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time when the designation was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the designation was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * The single sign-on details in Amazon DataZone.
 *
 * @public
 */
export interface SingleSignOn {
  /**
   * The type of single sign-on in Amazon DataZone.
   *
   * @public
   */
  type?: AuthType | undefined;

  /**
   * The single sign-on user assignment in Amazon DataZone.
   *
   * @public
   */
  userAssignment?: UserAssignment | undefined;

  /**
   * The ARN of the IDC instance.
   *
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * The name of the Amazon DataZone domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Amazon DataZone domain.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The single-sign on configuration of the Amazon DataZone domain.
   *
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain.
   *
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The tags specified for the Amazon DataZone domain.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The version of the domain that is created.
   *
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * The service role of the domain that is created.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the root domain unit.
   *
   * @public
   */
  rootDomainUnitId?: string | undefined;

  /**
   * The name of the Amazon DataZone domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the Amazon DataZone domain.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The single-sign on configuration of the Amazon DataZone domain.
   *
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain.
   *
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * The ARN of the Amazon DataZone domain.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The status of the Amazon DataZone domain.
   *
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * The URL of the data portal for this Amazon DataZone domain.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The tags specified for the Amazon DataZone domain.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The version of the domain that is created.
   *
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * Te service role of the domain that is created.
   *
   * @public
   */
  serviceRole?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainUnitInput {
  /**
   * The ID of the domain where you want to crate a domain unit.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the domain unit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the parent domain unit.
   *
   * @public
   */
  parentDomainUnitIdentifier: string | undefined;

  /**
   * The description of the domain unit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The properties of a domain unit group.
 *
 * @public
 */
export interface DomainUnitGroupProperties {
  /**
   * The ID of the domain unit group.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * The properties of the domain unit user.
 *
 * @public
 */
export interface DomainUnitUserProperties {
  /**
   * The ID of teh domain unit user.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * The properties of the domain unit owner.
 *
 * @public
 */
export type DomainUnitOwnerProperties =
  | DomainUnitOwnerProperties.GroupMember
  | DomainUnitOwnerProperties.UserMember
  | DomainUnitOwnerProperties.$UnknownMember;

/**
 * @public
 */
export namespace DomainUnitOwnerProperties {
  /**
   * Indicates that the domain unit owner is a user.
   *
   * @public
   */
  export interface UserMember {
    user: DomainUnitUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the domain unit owner is a group.
   *
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: DomainUnitGroupProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: DomainUnitUserProperties) => T;
    group: (value: DomainUnitGroupProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDomainUnitOutput {
  /**
   * The ID of the domain unit.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where the domain unit was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the domain unit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the parent domain unit.
   *
   * @public
   */
  parentDomainUnitId?: string | undefined;

  /**
   * The description of the domain unit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The owners of the domain unit.
   *
   * @public
   */
  owners: DomainUnitOwnerProperties[] | undefined;

  /**
   * The IDs of the ancestor domain units.
   *
   * @public
   */
  ancestorDomainUnitIds: string[] | undefined;

  /**
   * The timestamp at which the domain unit was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the domain unit.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * The parameter details of an evironment profile.
 *
 * @public
 */
export interface EnvironmentParameter {
  /**
   * The name of an environment profile parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of an environment profile parameter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * The identifier of the Amazon DataZone project in which this environment is created.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the environment is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The description of the Amazon DataZone environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the Amazon DataZone environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the environment profile that is used to create this Amazon DataZone environment.
   *
   * @public
   */
  environmentProfileIdentifier?: string | undefined;

  /**
   * The user parameters of this Amazon DataZone environment.
   *
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * The glossary terms that can be used in this Amazon DataZone environment.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The ID of the account in which the environment is being created.
   *
   * @public
   */
  environmentAccountIdentifier?: string | undefined;

  /**
   * The region of the account in which the environment is being created.
   *
   * @public
   */
  environmentAccountRegion?: string | undefined;

  /**
   * The ID of the blueprint with which the environment is being created.
   *
   * > **Note:** This parameter is only valid for V1 domains. If provided for a V2 domain, the service returns a ValidationException.
   *
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * The deployment order of the environment.
   *
   * @public
   */
  deploymentOrder?: number | undefined;

  /**
   * The configuration ID of the environment.
   *
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * The configuration name of the environment.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * The deployment properties of the Amazon DataZone blueprint.
 *
 * @public
 */
export interface DeploymentProperties {
  /**
   * The start timeout of the environment blueprint deployment.
   *
   * @public
   */
  startTimeoutMinutes?: number | undefined;

  /**
   * The end timeout of the environment blueprint deployment.
   *
   * @public
   */
  endTimeoutMinutes?: number | undefined;
}

/**
 * The failure reasons for the environment deployment.
 *
 * @public
 */
export interface EnvironmentError {
  /**
   * The error code for the failure reason for the environment deployment.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The error message for the failure reason for the environment deployment.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The details of the last deployment of the environment.
 *
 * @public
 */
export interface Deployment {
  /**
   * The identifier of the last deployment of the environment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The type of the last deployment of the environment.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * The status of the last deployment of the environment.
   *
   * @public
   */
  deploymentStatus?: DeploymentStatus | undefined;

  /**
   * The failure reason of the last deployment of the environment.
   *
   * @public
   */
  failureReason?: EnvironmentError | undefined;

  /**
   * The messages of the last deployment of the environment.
   *
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Specifies whether the last deployment of the environment is complete.
   *
   * @public
   */
  isDeploymentComplete?: boolean | undefined;
}

/**
 * The details of a provisioned resource of this Amazon DataZone environment.
 *
 * @public
 */
export interface Resource {
  /**
   * The provider of a provisioned resource of this Amazon DataZone environment.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * The name of a provisioned resource of this Amazon DataZone environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of a provisioned resource of this Amazon DataZone environment.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The type of a provisioned resource of this Amazon DataZone environment.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * The provisioning properties of an environment blueprint.
 *
 * @public
 */
export type ProvisioningProperties =
  | ProvisioningProperties.CloudFormationMember
  | ProvisioningProperties.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningProperties {
  /**
   * The cloud formation properties included as part of the provisioning properties of an environment blueprint.
   *
   * @public
   */
  export interface CloudFormationMember {
    cloudFormation: CloudFormationProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudFormation: (value: CloudFormationProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of user parameters of an environment blueprint.
 *
 * @public
 */
export interface CustomParameter {
  /**
   * The key name of the parameter.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The description of the parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The filed type of the parameter.
   *
   * @public
   */
  fieldType: string | undefined;

  /**
   * The default value of the parameter.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * Specifies whether the parameter is editable.
   *
   * @public
   */
  isEditable?: boolean | undefined;

  /**
   * Specifies whether the custom parameter is optional.
   *
   * @public
   */
  isOptional?: boolean | undefined;

  /**
   * Specifies whether a parameter value can be updated after creation.
   *
   * @public
   */
  isUpdateSupported?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * The ID of the Amazon DataZone project in which this environment is created.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of this Amazon DataZone environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the environment is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon DataZone user who created this environment.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when this environment was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of this environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of this Amazon DataZone environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the environment profile with which this Amazon DataZone environment was created.
   *
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * The Amazon Web Services account in which the Amazon DataZone environment is created.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region in which the Amazon DataZone environment is created.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The provider of this Amazon DataZone environment.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The provisioned resources of this Amazon DataZone environment.
   *
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * The status of this Amazon DataZone environment.
   *
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * The configurable actions of this Amazon DataZone environment.
   *
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * The glossary terms that can be used in this Amazon DataZone environment.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The user parameters of this Amazon DataZone environment.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The details of the last deployment of this Amazon DataZone environment.
   *
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * The provisioning properties of this Amazon DataZone environment.
   *
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * The deployment properties of this Amazon DataZone environment.
   *
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * The ID of the blueprint with which this Amazon DataZone environment was created.
   *
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * The configuration ID of the environment.
   *
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * The configuration name of the environment.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionInput {
  /**
   * The ID of the Amazon DataZone domain in which the environment action is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment in which the environment action is created.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The name of the environment action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The parameters of the environment action.
   *
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * The description of the environment action that is being created in the environment.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionOutput {
  /**
   * The ID of the domain in which the environment action is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the environment in which the environment is created.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ID of the environment action.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the environment action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The parameters of the environment action.
   *
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * The description of the environment action.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentBlueprintInput {
  /**
   * The identifier of the domain in which this blueprint is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of this Amazon DataZone blueprint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Amazon DataZone blueprint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provisioning properties of this Amazon DataZone blueprint.
   *
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * The user parameters of this Amazon DataZone blueprint.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The category of the Amazon DataZone blueprint. The only valid value is `TOOLING`, which creates a blueprint that provisions the tooling resources of a project.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentBlueprintOutput {
  /**
   * The ID of this Amazon DataZone blueprint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of this Amazon DataZone blueprint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of this Amazon DataZone blueprint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provider of this Amazon DataZone blueprint.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The provisioning properties of this Amazon DataZone blueprint.
   *
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * The deployment properties of this Amazon DataZone blueprint.
   *
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * The user parameters of this Amazon DataZone blueprint.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The glossary terms attached to this Amazon DataZone blueprint.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The category of the Amazon DataZone blueprint. The only valid value is `TOOLING`, which indicates a blueprint that provisions the tooling resources of a project.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;

  /**
   * The timestamp at which the environment blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when this blueprint was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileInput {
  /**
   * The ID of the Amazon DataZone domain in which this environment profile is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of this Amazon DataZone environment profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of this Amazon DataZone environment profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the blueprint with which this environment profile is created.
   *
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * The identifier of the project in which to create the environment profile.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The user parameters of this Amazon DataZone environment profile.
   *
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * The Amazon Web Services account in which the Amazon DataZone environment is created.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region in which this environment profile is created.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileOutput {
  /**
   * The ID of this Amazon DataZone environment profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which this environment profile is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Web Services account ID in which this Amazon DataZone environment profile is created.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region in which this Amazon DataZone environment profile is created.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The Amazon DataZone user who created this environment profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when this environment profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when this environment profile was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of this Amazon DataZone environment profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of this Amazon DataZone environment profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the blueprint with which this environment profile is created.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The ID of the Amazon DataZone project in which this environment profile is created.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * The user parameters of this Amazon DataZone environment profile.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * The model of the API.
 *
 * @public
 */
export type Model =
  | Model.SmithyMember
  | Model.$UnknownMember;

/**
 * @public
 */
export namespace Model {
  /**
   * Indicates the smithy model of the API.
   *
   * @public
   */
  export interface SmithyMember {
    smithy: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    smithy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    smithy: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateFormTypeInput {
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of this Amazon DataZone metadata form type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The model of this Amazon DataZone metadata form type.
   *
   * @public
   */
  model: Model | undefined;

  /**
   * The ID of the Amazon DataZone project that owns this metadata form type.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The status of this Amazon DataZone metadata form type.
   *
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * The description of this Amazon DataZone metadata form type.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateFormTypeOutput {
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of this Amazon DataZone metadata form type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of this Amazon DataZone metadata form type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The description of this Amazon DataZone metadata form type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the project that owns this Amazon DataZone metadata form type.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which this metadata form type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The ID of the project in which this Amazon DataZone metadata form type was originally created.
   *
   * @public
   */
  originProjectId?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryInput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of this business glossary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the project that currently owns business glossary.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The description of this business glossary.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of this business glossary.
   *
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * The usage restriction of the restricted glossary.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryOutput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of this business glossary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of this business glossary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the project that currently owns this business glossary.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The description of this business glossary.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of this business glossary.
   *
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * The usage restriction of the restricted glossary.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * The details of the term relations.
 *
 * @public
 */
export interface TermRelations {
  /**
   * The `isA` property of the term relations.
   *
   * @public
   */
  isA?: string[] | undefined;

  /**
   * The classifies of the term relations.
   *
   * @public
   */
  classifies?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermInput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary term is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the business glossary in which this term is created.
   *
   * @public
   */
  glossaryIdentifier: string | undefined;

  /**
   * The name of this business glossary term.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of this business glossary term.
   *
   * @public
   */
  status?: GlossaryTermStatus | undefined;

  /**
   * The short description of this business glossary term.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The long description of this business glossary term.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The term relations of this business glossary term.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermOutput {
  /**
   * The ID of this business glossary term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which this business glossary term is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the business glossary in which this term is created.
   *
   * @public
   */
  glossaryId: string | undefined;

  /**
   * The name of this business glossary term.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of this business glossary term.
   *
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * The short description of this business glossary term.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The long description of this business glossary term.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The term relations of this business glossary term.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * The usage restriction of the restricted glossary.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * @public
 */
export interface CreateGroupProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the group for which the group profile is created.
   *
   * @public
   */
  groupIdentifier?: string | undefined;

  /**
   * The ARN of the IAM role that will be associated with the group profile. This role defines the permissions that group members will assume when accessing Amazon DataZone resources.
   *
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupProfileOutput {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile is created.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the group profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the group profile.
   *
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * The name of the group for which group profile is created.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The ARN of the IAM role principal. This role is associated with the group profile.
   *
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * The unique identifier of the IAM role principal. This principal is associated with the group profile.
   *
   * @public
   */
  rolePrincipalId?: string | undefined;
}

/**
 * @public
 */
export interface CreateListingChangeSetInput {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of an entity.
   *
   * @public
   */
  entityType: EntityType | undefined;

  /**
   * The revision of an asset.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * Specifies whether to publish or unpublish a listing.
   *
   * @public
   */
  action: ChangeAction | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateListingChangeSetOutput {
  /**
   * The ID of the listing (a record of an asset at a given time).
   *
   * @public
   */
  listingId: string | undefined;

  /**
   * The revision of a listing.
   *
   * @public
   */
  listingRevision: string | undefined;

  /**
   * Specifies the status of the listing.
   *
   * @public
   */
  status: ListingStatus | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to create the notebook.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The name of the notebook. The name must be between 1 and 256 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The metadata for the notebook, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters for the notebook, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The package configuration for a notebook run environment in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface PackageConfig {
  /**
   * The package manager for the notebook run environment. The default value is `UV`.
   *
   * @public
   */
  packageManager: PackageManager | undefined;

  /**
   * The package specification content for the notebook run environment. The maximum length is 10240 characters.
   *
   * @public
   */
  packageSpecification?: string | undefined;
}

/**
 * The environment configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface EnvironmentConfig {
  /**
   * The image version for the notebook run environment.
   *
   * @public
   */
  imageVersion?: string | undefined;

  /**
   * The package configuration for the notebook run environment.
   *
   * @public
   */
  packageConfig?: PackageConfig | undefined;
}

/**
 * The error details of a notebook in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotebookError {
  /**
   * The error message. The maximum length is 256 characters.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The Git metadata for a notebook sync operation in Amazon SageMaker Unified Studio. Contains information about the Git repository, branch, and commit associated with the notebook.
 *
 * @public
 */
export interface GitMetadata {
  /**
   * The identifier of the Git connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The name of the Git repository.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The name of the Git branch.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The commit hash in the Git repository.
   *
   * @public
   */
  commitHash: string | undefined;

  /**
   * The name of the file in the Git repository.
   *
   * @public
   */
  fileName?: string | undefined;

  /**
   * The timestamp of when the commit was made.
   *
   * @public
   */
  committedAt?: Date | undefined;

  /**
   * The commit message associated with the Git commit.
   *
   * @public
   */
  commitMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookOutput {
  /**
   * The identifier of the notebook.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the notebook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ordered list of cells in the notebook.
   *
   * @public
   */
  cellOrder: CellInformation[] | undefined;

  /**
   * The status of the notebook.
   *
   * @public
   */
  status: NotebookStatus | undefined;

  /**
   * The type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the notebook was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the user who locked the notebook.
   *
   * @public
   */
  lockedBy?: string | undefined;

  /**
   * The timestamp of when the notebook was locked.
   *
   * @public
   */
  lockedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook lock expires.
   *
   * @public
   */
  lockExpiresAt?: Date | undefined;

  /**
   * The identifier of the compute associated with the notebook.
   *
   * @public
   */
  computeId?: string | undefined;

  /**
   * The metadata of the notebook.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters of the notebook.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The environment configuration of the notebook.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * The error details if the notebook creation failed.
   *
   * @public
   */
  error?: NotebookError | undefined;

  /**
   * The Git metadata associated with the notebook.
   *
   * @public
   */
  gitMetadata?: GitMetadata | undefined;
}

/**
 * The details about a project member.
 *
 * @public
 */
export type Member =
  | Member.GroupIdentifierMember
  | Member.UserIdentifierMember
  | Member.$UnknownMember;

/**
 * @public
 */
export namespace Member {
  /**
   * The user ID of a project member.
   *
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    groupIdentifier?: never;
    $unknown?: never;
  }

  /**
   * The ID of the group of a project member.
   *
   * @public
   */
  export interface GroupIdentifierMember {
    userIdentifier?: never;
    groupIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userIdentifier?: never;
    groupIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userIdentifier: (value: string) => T;
    groupIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A map of user or group profiles to designations that need to be assigned in the project.
 *
 * @public
 */
export interface ProjectMembershipAssignment {
  /**
   * The details about a project member.
   *
   * @public
   */
  member: Member | undefined;

  /**
   * The designation of the project membership.
   *
   * @public
   */
  designation: UserDesignation | undefined;

  /**
   * The ID of the user-created designation to assign to this member when creating the project. Required when `designation` is `USER_CREATED_DESIGNATION`; must not be provided otherwise.
   *
   * @public
   */
  userCreatedDesignationId?: string | undefined;
}

/**
 * Specifies the account/Region that is to be used during project creation for a particular blueprint.
 *
 * @public
 */
export interface EnvironmentResolvedAccount {
  /**
   * The ID of the resolved account.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The name of the resolved Region.
   *
   * @public
   */
  regionName: string | undefined;

  /**
   * The ID of the account pool.
   *
   * @public
   */
  sourceAccountPoolId?: string | undefined;
}

/**
 * The environment configuration user parameters.
 *
 * @public
 */
export interface EnvironmentConfigurationUserParameter {
  /**
   * The ID of the environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * Specifies the account/Region that is to be used during project creation for a particular blueprint.
   *
   * @public
   */
  environmentResolvedAccount?: EnvironmentResolvedAccount | undefined;

  /**
   * The environment configuration name.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;

  /**
   * The environment parameters.
   *
   * @public
   */
  environmentParameters?: EnvironmentParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * The ID of the Amazon DataZone domain in which this project is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the Amazon DataZone project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Amazon DataZone project.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The resource tags of the project.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The glossary terms that can be used in this Amazon DataZone project.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The ID of the domain unit. This parameter is not required and if it is not specified, then the project is created at the root domain unit level.
   *
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * The user parameters of the project.
   *
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * The category of the project. Set to 'ADMIN' designates this as an administrative project for the Amazon DataZone domain.
   *
   * @public
   */
  projectCategory?: string | undefined;

  /**
   * The default project IAM role that is used to access project resources and run computes such as Glue and Sagemaker.
   *
   * @public
   */
  projectExecutionRole?: string | undefined;

  /**
   * The members to be assigned to the project.
   *
   * @public
   */
  membershipAssignments?: ProjectMembershipAssignment[] | undefined;
}

/**
 * The environment deployment details.
 *
 * @public
 */
export interface EnvironmentDeploymentDetails {
  /**
   * The overall deployment status of the environment.
   *
   * @public
   */
  overallDeploymentStatus?: OverallDeploymentStatus | undefined;

  /**
   * Environment failure reasons.
   *
   * @public
   */
  environmentFailureReasons?: Record<string, EnvironmentError[]> | undefined;
}

/**
 * Specifies the error message that is returned if the operation cannot be successfully completed.
 *
 * @public
 */
export interface ProjectDeletionError {
  /**
   * The code of the project deletion error.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The message of the project deletion error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The resource tag of the project.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key of the resource tag of the project.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the resource tag of the project.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The source of the resource tag of the project.
   *
   * @public
   */
  source: ResourceTagSource | undefined;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * The identifier of the Amazon DataZone domain in which the project was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the Amazon DataZone project.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the Amazon DataZone project that was created.
   *
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  failureReasons?: ProjectDeletionError[] | undefined;

  /**
   * The Amazon DataZone user who created the project.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the project was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the project was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The resource tags of the project.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;

  /**
   * The glossary terms that can be used in the project.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * The project profile ID.
   *
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * The user parameters of the project.
   *
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * The environment deployment details.
   *
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;

  /**
   * The category of the project.
   *
   * @public
   */
  projectCategory?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipInput {
  /**
   * The ID of the Amazon DataZone domain in which project membership is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the project for which this project membership was created.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The project member whose project membership was created.
   *
   * @public
   */
  member: Member | undefined;

  /**
   * The designation of the project membership.
   *
   * @public
   */
  designation: UserDesignation | undefined;

  /**
   * The ID of the user-created designation to assign to the project member. Required when `designation` is `USER_CREATED_DESIGNATION`; must not be provided otherwise.
   *
   * @public
   */
  userCreatedDesignationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipOutput {}

/**
 * The Amazon Web Services Region.
 *
 * @public
 */
export type Region =
  | Region.RegionNameMember
  | Region.RegionNamePathMember
  | Region.$UnknownMember;

/**
 * @public
 */
export namespace Region {
  /**
   * The Amazon Web Services Region name.
   *
   * @public
   */
  export interface RegionNameMember {
    regionName: string;
    regionNamePath?: never;
    $unknown?: never;
  }

  /**
   * The region name path.
   *
   * @public
   */
  export interface RegionNamePathMember {
    regionName?: never;
    regionNamePath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    regionName?: never;
    regionNamePath?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    regionName: (value: string) => T;
    regionNamePath: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The environment configuration parameter.
 *
 * @public
 */
export interface EnvironmentConfigurationParameter {
  /**
   * The name of the environment configuration parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the environment configuration parameter.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Specifies whether the environment parameter is editable.
   *
   * @public
   */
  isEditable?: boolean | undefined;
}

/**
 * The details of the environment configuration parameter.
 *
 * @public
 */
export interface EnvironmentConfigurationParametersDetails {
  /**
   * Ssm path environment configuration parameters.
   *
   * @public
   */
  ssmPath?: string | undefined;

  /**
   * The parameter overrides.
   *
   * @public
   */
  parameterOverrides?: EnvironmentConfigurationParameter[] | undefined;

  /**
   * The resolved environment configuration parameters.
   *
   * @public
   */
  resolvedParameters?: EnvironmentConfigurationParameter[] | undefined;
}

/**
 * The configuration of an environment.
 *
 * @public
 */
export interface EnvironmentConfiguration {
  /**
   * The environment name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The environment blueprint ID.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The environment description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The deployment mode of the environment.
   *
   * @public
   */
  deploymentMode?: DeploymentMode | undefined;

  /**
   * The configuration parameters of the environment.
   *
   * @public
   */
  configurationParameters?: EnvironmentConfigurationParametersDetails | undefined;

  /**
   * The Amazon Web Services account of the environment.
   *
   * @public
   */
  awsAccount?: AwsAccount | undefined;

  /**
   * The account pools used by a custom project profile.
   *
   * @public
   */
  accountPools?: string[] | undefined;

  /**
   * The Amazon Web Services Region of the environment.
   *
   * @public
   */
  awsRegion?: Region | undefined;

  /**
   * The deployment order of the environment.
   *
   * @public
   */
  deploymentOrder?: number | undefined;
}

/**
 * The resource tag parameter of the project profile.
 *
 * @public
 */
export interface ResourceTagParameter {
  /**
   * The key of the resource tag parameter of the project profile.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the resource tag parameter key of the project profile.
   *
   * @public
   */
  value: string | undefined;

  /**
   * Specifies whether the value of the resource tag parameter of the project profile is editable at the project level.
   *
   * @public
   */
  isValueEditable: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProjectProfileInput {
  /**
   * A domain ID of the project profile.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * Project profile name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of a project profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Project profile status.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The resource tags of the project profile.
   *
   * @public
   */
  projectResourceTags?: ResourceTagParameter[] | undefined;

  /**
   * Specifies whether custom project resource tags are supported.
   *
   * @public
   */
  allowCustomProjectResourceTags?: boolean | undefined;

  /**
   * Field viewable through the UI that provides a project user with the allowed resource tag specifications.
   *
   * @public
   */
  projectResourceTagsDescription?: string | undefined;

  /**
   * Environment configurations of the project profile.
   *
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * A domain unit ID of the project profile.
   *
   * @public
   */
  domainUnitIdentifier?: string | undefined;
}
