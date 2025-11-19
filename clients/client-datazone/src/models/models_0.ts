// smithy-typescript generated code
import {
  AcceptRuleBehavior,
  AttributeEntityType,
  AuthenticationType,
  AuthType,
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
  OAuth2GrantType,
  OverallDeploymentStatus,
  ProjectDesignation,
  ProjectStatus,
  Protocol,
  ResolutionStrategy,
  ResourceTagSource,
  RuleAction,
  RuleScopeSelectionMode,
  RuleTargetType,
  RuleType,
  S3Permission,
  Status,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  Timezone,
  UserAssignment,
  UserDesignation,
  UserProfileStatus,
  UserProfileType,
  UserType,
} from "./enums";

/**
 * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted.</p>
 * @public
 */
export interface AcceptChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be accepted.</p>
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) that can be accepted.</p>
   * @public
   */
  predictionChoice?: number | undefined;

  /**
   * <p>The edit of the prediction.</p>
   * @public
   */
  editedValue?: string | undefined;
}

/**
 * <p>The accepted asset scope.</p>
 * @public
 */
export interface AcceptedAssetScope {
  /**
   * <p>The asset ID of the accepted asset scope.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The filter IDs of the accepted asset scope.</p>
   * @public
   */
  filterIds: string[] | undefined;
}

/**
 * <p>Specifies the rule and the threshold under which a prediction can be accepted.</p>
 * @public
 */
export interface AcceptRule {
  /**
   * <p>Specifies whether you want to accept the top prediction for all targets or none.</p>
   * @public
   */
  rule?: AcceptRuleBehavior | undefined;

  /**
   * <p>The confidence score that specifies the condition at which a prediction can be accepted.</p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>Specifies the rule (or the conditions) under which a prediction can be accepted.</p>
   * @public
   */
  acceptRule?: AcceptRule | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted.</p>
   * @public
   */
  acceptChoices?: AcceptChoice[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The asset permissions.</p>
 * @public
 */
export type Permissions = Permissions.S3Member | Permissions.$UnknownMember;

/**
 * @public
 */
export namespace Permissions {
  /**
   * <p>The S3 details of the asset permissions.</p>
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
 * <p>The asset permissions.</p>
 * @public
 */
export interface AssetPermission {
  /**
   * <p>The asset ID as part of the asset permissions.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The details as part of the asset permissions.</p>
   * @public
   */
  permissions: Permissions | undefined;
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestInput {
  /**
   * <p>The Amazon DataZone domain where the specified subscription request is being accepted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription request that is to be accepted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A description that specifies the reason for accepting the specified subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The asset scopes of the accept subscription request.</p>
   * @public
   */
  assetScopes?: AcceptedAssetScope[] | undefined;

  /**
   * <p>The asset permissions of the accept subscription request.</p>
   * @public
   */
  assetPermissions?: AssetPermission[] | undefined;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormOutput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The name of the metadata form type.</p>
   * @public
   */
  typeName?: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>The asset scope.</p>
 * @public
 */
export interface AssetScope {
  /**
   * <p>The asset ID of the asset scope.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The filter IDs of the asset scope.</p>
   * @public
   */
  filterIds: string[] | undefined;

  /**
   * <p>The status of the asset scope.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The error message of the asset scope.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Details of a glossary term attached to the inventory asset.</p>
 * @public
 */
export interface DetailedGlossaryTerm {
  /**
   * <p>The name of a glossary term attached to the inventory asset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The shoft description of a glossary term attached to the inventory asset.</p>
   * @public
   */
  shortDescription?: string | undefined;
}

/**
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAssetListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The type of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityType?: string | undefined;

  /**
   * <p>The forms attached to the published asset for which the subscription grant is created.</p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The glossary terms attached to the published asset for which the subscription grant is created.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The asset scope of the subscribed asset listing.</p>
   * @public
   */
  assetScope?: AssetScope | undefined;

  /**
   * <p>The asset permissions.</p>
   * @public
   */
  permissions?: Permissions | undefined;
}

/**
 * <p>The listing of the asset in a data product.</p>
 * @public
 */
export interface AssetInDataProductListingItem {
  /**
   * <p>The entity ID of the listing of the asset in a data product.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The entity revision of the listing of the asset in a data product.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The entity type of the listing of the asset in a data product.</p>
   * @public
   */
  entityType?: string | undefined;
}

/**
 * <p>The data product listing.</p>
 * @public
 */
export interface SubscribedProductListing {
  /**
   * <p>The ID of the data product listing.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the data product listing.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The glossary terms of the data product listing.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The name of the data product listing.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the data product listing.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The data assets of the data product listing.</p>
   * @public
   */
  assetListings?: AssetInDataProductListingItem[] | undefined;
}

/**
 * <p>The published asset for which the subscription grant is created.</p>
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
   * <p>The asset for which the subscription grant is created.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: SubscribedAssetListing;
    productListing?: never;
    $unknown?: never;
  }

  /**
   * <p>The data product listing.</p>
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
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is created.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The name of the published asset for which the subscription grant is created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the published asset for which the subscription grant is created.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The published asset for which the subscription grant is created.</p>
   * @public
   */
  item: SubscribedListingItem | undefined;

  /**
   * <p>The identifier of the project of the published asset for which the subscription grant is created.</p>
   * @public
   */
  ownerProjectId: string | undefined;

  /**
   * <p>The name of the project that owns the published asset for which the subscription grant is created.</p>
   * @public
   */
  ownerProjectName?: string | undefined;
}

/**
 * <p>The group that subscribes to the asset.</p>
 * @public
 */
export interface SubscribedGroup {
  /**
   * <p>The ID of the subscribed group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the subscribed group.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The project that has the subscription grant.</p>
 * @public
 */
export interface SubscribedProject {
  /**
   * <p>The identifier of the project that has the subscription grant.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the project that has the subscription grant.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The details of the IAM user profile.</p>
 * @public
 */
export interface IamUserProfileDetails {
  /**
   * <p>The ARN of the IAM user.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The principal ID as part of the IAM user profile details.</p>
   * @public
   */
  principalId?: string | undefined;
}

/**
 * <p>The SSO user profile detail.</p>
 * @public
 */
export interface SsoUserProfileDetails {
  /**
   * <p>The username as part of the SSO user profile detail. </p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The first name as part of the SSO user profile detail.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The last name as part of the SSO user profile detail.</p>
   * @public
   */
  lastName?: string | undefined;
}

/**
 * <p>The user profile details.</p>
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
   * <p>The IAM details of the user profile.</p>
   * @public
   */
  export interface IamMember {
    iam: IamUserProfileDetails;
    sso?: never;
    $unknown?: never;
  }

  /**
   * <p>The SSO details of the user profile.</p>
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
 * <p>The subscribed user.</p>
 * @public
 */
export interface SubscribedUser {
  /**
   * <p>The ID of the subscribed user.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The subscribed user details.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * <p>The principal that has the subscription grant for the asset.</p>
 * @public
 */
export type SubscribedPrincipal =
  | SubscribedPrincipal.GroupMember
  | SubscribedPrincipal.ProjectMember
  | SubscribedPrincipal.UserMember
  | SubscribedPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipal {
  /**
   * <p>The project that has the subscription grant.</p>
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProject;
    user?: never;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The subscribed user.</p>
   * @public
   */
  export interface UserMember {
    project?: never;
    user: SubscribedUser;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The subscribed group.</p>
   * @public
   */
  export interface GroupMember {
    project?: never;
    user?: never;
    group: SubscribedGroup;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    user?: never;
    group?: never;
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
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user that accepted the specified subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the specified subscription request was accepted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Specifies the status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp that specifies when the subscription request was accepted.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Specifies the timestamp when subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies the reason for requesting a subscription to the asset.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone users who are subscribed to the asset specified in the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>Specifies the asset for which the subscription request was created.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>Specifes the ID of the Amazon DataZone user who reviewed the subscription request.</p>
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * <p>Specifies the reason for accepting the subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The ID of the existing subscription.</p>
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * <p>The metadata form in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * <p>The account information within an account pool.</p>
 * @public
 */
export interface AccountInfo {
  /**
   * <p>The account ID.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The regions supported for an account within an account pool. </p>
   * @public
   */
  supportedRegions: string[] | undefined;

  /**
   * <p>The account name.</p>
   * @public
   */
  awsAccountName?: string | undefined;
}

/**
 * <p>The summary of the account pool.</p>
 * @public
 */
export interface AccountPoolSummary {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the account pool.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the account pool.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The mechanism used to resolve the account selection from the account pool.</p>
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The user who created the account pool.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The user who updated the account pool.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * <p>The custom Amazon Web Services Lambda handler within an account pool.</p>
 * @public
 */
export interface CustomAccountPoolHandler {
  /**
   * <p>The ARN of the Amazon Web Services Lambda function for the custom Amazon Web Services Lambda handler.</p>
   * @public
   */
  lambdaFunctionArn: string | undefined;

  /**
   * <p>The ARN of the IAM role that enables Amazon SageMaker Unified Studio to invoke the Amazon Web Services Lambda funtion if the account source is the custom account pool handler.</p>
   * @public
   */
  lambdaExecutionRoleArn?: string | undefined;
}

/**
 * <p>The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler. </p>
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
   * <p>The static list of accounts within an account pool.</p>
   * @public
   */
  export interface AccountsMember {
    accounts: AccountInfo[];
    customAccountPoolHandler?: never;
    $unknown?: never;
  }

  /**
   * <p>The custom Amazon Web Services Lambda handler within an account pool.</p>
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
 * <p>The parameters of the console link specified as part of the environment action.</p>
 * @public
 */
export interface AwsConsoleLinkParameters {
  /**
   * <p>The URI of the console link specified as part of the environment action.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The parameters of the environment action.</p>
 * @public
 */
export type ActionParameters = ActionParameters.AwsConsoleLinkMember | ActionParameters.$UnknownMember;

/**
 * @public
 */
export namespace ActionParameters {
  /**
   * <p>The console link specified as part of the environment action.</p>
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
 * <p>The properties of the domain unit owners group.</p>
 * @public
 */
export interface OwnerGroupProperties {
  /**
   * <p>The ID of the domain unit owners group.</p>
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * <p>The properties of the owner user.</p>
 * @public
 */
export interface OwnerUserProperties {
  /**
   * <p>The ID of the owner user.</p>
   * @public
   */
  userIdentifier: string | undefined;
}

/**
 * <p>The properties of a domain unit's owner.</p>
 * @public
 */
export type OwnerProperties = OwnerProperties.GroupMember | OwnerProperties.UserMember | OwnerProperties.$UnknownMember;

/**
 * @public
 */
export namespace OwnerProperties {
  /**
   * <p>Specifies that the domain unit owner is a user.</p>
   * @public
   */
  export interface UserMember {
    user: OwnerUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that the domain unit owner is a group.</p>
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
   * <p>The ID of the domain in which you want to add the entity owner.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of an entity.</p>
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * <p>The ID of the entity to which you want to add an owner.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The owner that you want to add to the entity.</p>
   * @public
   */
  owner: OwnerProperties | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddEntityOwnerOutput {}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface AddToProjectMemberPoolPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateAssetTypePolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateDomainUnitPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy of creating an environment.</p>
 * @public
 */
export interface Unit {}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateEnvironmentProfilePolicyGrantDetail {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateFormTypePolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateGlossaryPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateProjectPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>Specifies whether to create a project from project profile policy grant details.</p>
 * @public
 */
export interface CreateProjectFromProjectProfilePolicyGrantDetail {
  /**
   * <p>Specifies whether to include child domain units when creating a project from project profile policy grant details</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;

  /**
   * <p>Specifies project profiles when creating a project from project profile policy grant details</p>
   * @public
   */
  projectProfiles?: string[] | undefined;
}

/**
 * <p>The grant details of the override domain unit owners policy.</p>
 * @public
 */
export interface OverrideDomainUnitOwnersPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy is inherited by child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the override project owners policy grant.</p>
 * @public
 */
export interface OverrideProjectOwnersPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy is inherited by child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>Specifies the domain unit(s) whose projects can use this asset type while creating asset or asset revisions.</p>
 * @public
 */
export interface UseAssetTypePolicyGrantDetail {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * <p>The details of the policy grant.</p>
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
   * <p>Specifies that this is a create domain unit policy.</p>
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
   * <p>Specifies whether to override domain unit owners.</p>
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
   * <p>Specifies that the policy grant is to be added to the members of the project.</p>
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
   * <p>Specifies whether to override project owners.</p>
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
   * <p> Specifies that this is a create glossary policy.</p>
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
   * <p>Specifies that this is a create form type policy.</p>
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
   * <p>Specifies that this is a create asset type policy.</p>
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
   * <p>Specifies that this is a create project policy.</p>
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
   * <p>Specifies that this is a create environment profile policy.</p>
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
   * <p>Specifies that this is the delegation of the create environment profile policy.</p>
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
   * <p>Specifies that this is a create environment policy.</p>
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
   * <p>The details of the policy of creating an environment.</p>
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
   * <p>Specifies whether to create a project from project profile.</p>
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
   * <p> Specifies the domain unit(s) whose projects can use this asset type while creating asset or asset revisions.</p>
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
 * <p>The grant filter for all domain units.</p>
 * @public
 */
export interface AllDomainUnitsGrantFilter {}

/**
 * <p>The grant filter for the domain unit. In the current release of Amazon DataZone, the only supported filter is the <code>allDomainUnitsGrantFilter</code>.</p>
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
   * <p>Specifies a grant filter containing all domain units.</p>
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
 * <p>The domain unit principal to whom the policy is granted.</p>
 * @public
 */
export interface DomainUnitPolicyGrantPrincipal {
  /**
   * <p>Specifes the designation of the domain unit users.</p>
   * @public
   */
  domainUnitDesignation: DomainUnitDesignation | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitIdentifier?: string | undefined;

  /**
   * <p>The grant filter for the domain unit.</p>
   * @public
   */
  domainUnitGrantFilter?: DomainUnitGrantFilter | undefined;
}

/**
 * <p>The group principal to whom the policy is granted.</p>
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
   * <p>The ID Of the group of the group principal.</p>
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
 * <p>The domain unit filter of the project grant filter.</p>
 * @public
 */
export interface DomainUnitFilterForProject {
  /**
   * <p>The domain unit ID to use in the filter.</p>
   * @public
   */
  domainUnit: string | undefined;

  /**
   * <p>Specifies whether to include child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The project grant filter.</p>
 * @public
 */
export type ProjectGrantFilter = ProjectGrantFilter.DomainUnitFilterMember | ProjectGrantFilter.$UnknownMember;

/**
 * @public
 */
export namespace ProjectGrantFilter {
  /**
   * <p>The domain unit filter of the project grant filter.</p>
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
 * <p>The project policy grant principal.</p>
 * @public
 */
export interface ProjectPolicyGrantPrincipal {
  /**
   * <p>The project designation of the project policy grant principal.</p>
   * @public
   */
  projectDesignation: ProjectDesignation | undefined;

  /**
   * <p>The project ID of the project policy grant principal.</p>
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * <p>The project grant filter of the project policy grant principal.</p>
   * @public
   */
  projectGrantFilter?: ProjectGrantFilter | undefined;
}

/**
 * <p>The all users grant filter.</p>
 * @public
 */
export interface AllUsersGrantFilter {}

/**
 * <p>The user policy grant principal.</p>
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
   * <p>The user ID of the user policy grant principal.</p>
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    allUsersGrantFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>The all users grant filter of the user policy grant principal.</p>
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
 * <p>The policy grant principal.</p>
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
   * <p>The user of the policy grant principal.</p>
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
   * <p>The group of the policy grant principal.</p>
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
   * <p>The project of the policy grant principal.</p>
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
   * <p>The domain unit of the policy grant principal.</p>
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
   * <p>The ID of the domain where you want to add a policy grant.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of entity (resource) to which the grant is added.</p>
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * <p>The ID of the entity (resource) to which you want to add a policy grant.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of policy that you want to grant.</p>
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * <p>The principal to whom the permissions are granted.</p>
   * @public
   */
  principal: PolicyGrantPrincipal | undefined;

  /**
   * <p>The details of the policy grant.</p>
   * @public
   */
  detail: PolicyGrantDetail | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddPolicyGrantOutput {
  /**
   * <p>The ID of the policy grant that was added to a specified entity.</p>
   * @public
   */
  grantId?: string | undefined;
}

/**
 * <p>An aggregation list item.</p>
 * @public
 */
export interface AggregationListItem {
  /**
   * <p>An attribute on which to compute aggregations.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>The display value of the aggregation list item. Supported values include <code>value</code> and <code>glossaryTerm.name</code>.</p>
   * @public
   */
  displayValue?: string | undefined;
}

/**
 * <p>An aggregation output item.</p>
 * @public
 */
export interface AggregationOutputItem {
  /**
   * <p>The attribute value of the aggregation output item.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The count of the aggregation output item.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The display value of the aggregation. If the attribute being aggregated corresponds to the id of a public resource, the service automatically resolves the id to the provided display value.</p>
   * @public
   */
  displayValue?: string | undefined;
}

/**
 * <p>The aggregation for an attribute.</p>
 * @public
 */
export interface AggregationOutput {
  /**
   * <p>The attribute for this aggregation.</p>
   * @public
   */
  attribute?: string | undefined;

  /**
   * <p>The display value of the aggregation output item.</p>
   * @public
   */
  displayValue?: string | undefined;

  /**
   * <p>A list of aggregation output items.</p>
   * @public
   */
  items?: AggregationOutputItem[] | undefined;
}

/**
 * <p>The Amazon Q properties of the connection.</p>
 * @public
 */
export interface AmazonQPropertiesInput {
  /**
   * <p>Specifies whether Amazon Q is enabled for the connection.</p>
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * <p>The profile ARN of the connection's Amazon Q properties.</p>
   * @public
   */
  profileArn?: string | undefined;

  /**
   * <p>The authentication mode of the connection's Amazon Q properties.</p>
   * @public
   */
  authMode?: string | undefined;
}

/**
 * <p>The Amazon Q properties of the connection.</p>
 * @public
 */
export interface AmazonQPropertiesOutput {
  /**
   * <p>Specifies whether Amazon Q is enabled for the connection.</p>
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * <p>The profile ARN of the connection's Amazon Q properties.</p>
   * @public
   */
  profileArn?: string | undefined;

  /**
   * <p>The authentication mode of the connection's Amazon Q properties.</p>
   * @public
   */
  authMode?: string | undefined;
}

/**
 * <p>The Amazon Q properties of the connection.</p>
 * @public
 */
export interface AmazonQPropertiesPatch {
  /**
   * <p>Specifies whether Amazon Q is enabled for the connection.</p>
   * @public
   */
  isEnabled: boolean | undefined;

  /**
   * <p>The profile ARN of the connection's Amazon Q properties.</p>
   * @public
   */
  profileArn?: string | undefined;

  /**
   * <p>The authentication mode of the connection's Amazon Q properties.</p>
   * @public
   */
  authMode?: string | undefined;
}

/**
 * <p>The details of an asset published in an Amazon DataZone catalog. </p>
 * @public
 */
export interface AssetListingDetails {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The status of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingStatus: ListingStatus | undefined;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormInput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the metadata form type.</p>
   * @public
   */
  typeIdentifier?: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>The configuration of the business name generation.</p>
 * @public
 */
export interface BusinessNameGenerationConfiguration {
  /**
   * <p>Specifies whether the business name generation is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The configuration of the prediction.</p>
 * @public
 */
export interface PredictionConfiguration {
  /**
   * <p>The business name generation mechanism.</p>
   * @public
   */
  businessNameGeneration?: BusinessNameGenerationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetInput {
  /**
   * <p>Asset name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Amazon DataZone domain where the asset is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The external identifier of the asset.</p> <p>If the value for the <code>externalIdentifier</code> parameter is specified, it must be a unique value.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The unique identifier of this asset's type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of this asset's type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>Asset description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>Metadata forms attached to the asset.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The unique identifier of the project that owns this asset.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The summary of the time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointSummaryFormOutput {
  /**
   * <p>The name of the time series data points summary form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The type ID of the time series data points summary form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the time series data points summary form.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The timestamp of the time series data points summary form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the summary of the time series data points form.</p>
   * @public
   */
  contentSummary?: string | undefined;

  /**
   * <p>The ID of the time series data points summary form.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetOutput {
  /**
   * <p>The unique identifier of the created asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the created asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the created asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the created asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that created this asset in the catalog.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the asset took place.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that made the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms that are attached to the created asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The glossary terms in a restricted glossary.</p>
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns the created asset. </p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms that are attached to the created asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that are attached to the created asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionInput {
  /**
   * <p>Te revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier of the domain where the asset is being revised.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The revised description of the asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The metadata forms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionOutput {
  /**
   * <p>The unique identifier of the asset revision.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The revised asset description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset revision occured.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who performed the asset revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first asset revision occured.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who performed the first asset revision.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms that were attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The glossary terms in a restricted glossary.</p>
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * <p>The unique identifier of the revised project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the asset was revised.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms that were attached to the asset as part of the asset revision.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that were attached to the asset as part of the asset revision.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAssetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone asset.</p> <p>This parameter supports either the value of <code>assetId</code> or <code>externalIdentifier</code> as input. If you are passing the value of <code>externalIdentifier</code>, you must prefix this value with <code>externalIdentifer%2F</code>.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the Amazon DataZone asset.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetOutput {
  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external ID of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the Amazon DataZone asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The business glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The restricted glossary terms attached to an asset.</p>
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The listing of the asset.</p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms attached to the asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms attached to the asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * <p>The column configuration of the asset filter.</p>
 * @public
 */
export interface ColumnFilterConfiguration {
  /**
   * <p>Specifies whether to include column names.</p>
   * @public
   */
  includedColumnNames?: string[] | undefined;
}

/**
 * <p>Specifies whether the value is equal to an expression.</p>
 * @public
 */
export interface EqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than an expression.</p>
 * @public
 */
export interface GreaterThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than or equal to an expression.</p>
 * @public
 */
export interface GreaterThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether values are in the expression.</p>
 * @public
 */
export interface InExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The values that might be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that the expression is not null.</p>
 * @public
 */
export interface IsNotNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that the expression is null.</p>
 * @public
 */
export interface IsNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that a value is less than an expression.</p>
 * @public
 */
export interface LessThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is less than or equal to an expression.</p>
 * @public
 */
export interface LessThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is like the expression.</p>
 * @public
 */
export interface LikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not equal to the expression.</p>
 * @public
 */
export interface NotEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be equal to the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not in the expression.</p>
 * @public
 */
export interface NotInExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that a value might be not like the expression.</p>
 * @public
 */
export interface NotLikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The row filter expression.</p>
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
   * <p>The 'equal to' clause of the row filter expression.</p>
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
   * <p>The 'no equal to' clause of the row filter expression.</p>
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
   * <p>The 'greater than' clause of the row filter expression.</p>
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
   * <p>The 'less than' clause of the row filter expression.</p>
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
   * <p>The 'greater than or equal to' clause of the filter expression.</p>
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
   * <p>The 'less than or equal to' clause of the row filter expression.</p>
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
   * <p>The 'is null' clause of the row filter expression.</p>
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
   * <p>The 'is not null' clause of the row filter expression.</p>
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
   * <p>The 'in' clause of the row filter expression.</p>
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
   * <p>The 'not in' clause of the row filter expression.</p>
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
   * <p>The 'like' clause of the row filter expression.</p>
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
   * <p>The 'not like' clause of the row filter expression.</p>
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
 * <p>The summary of the asset filter.</p>
 * @public
 */
export interface AssetFilterSummary {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the asset filter lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The name of the asset filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the asset filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the asset filter.</p>
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * <p>The effective column names of the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * <p>The effective row filter of the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string | undefined;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The error message that is displayed if the action does not succeed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The offset of a matched term.</p>
 * @public
 */
export interface MatchOffset {
  /**
   * <p>The 0-indexed number indicating the start position (inclusive) of a matched term.</p>
   * @public
   */
  startOffset?: number | undefined;

  /**
   * <p>The 0-indexed number indicating the end position (exclusive) of a matched term.</p>
   * @public
   */
  endOffset?: number | undefined;
}

/**
 * <p>A structure indicating matched terms for an attribute.</p>
 * @public
 */
export interface TextMatchItem {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  attribute?: string | undefined;

  /**
   * <p>Snippet of attribute text containing highlighted content.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>List of offsets indicating matching terms in the TextMatchItem text.</p>
   * @public
   */
  matchOffsets?: MatchOffset[] | undefined;
}

/**
 * <p>A rationale indicating why this item was matched by search. </p>
 * @public
 */
export type MatchRationaleItem = MatchRationaleItem.TextMatchesMember | MatchRationaleItem.$UnknownMember;

/**
 * @public
 */
export namespace MatchRationaleItem {
  /**
   * <p>A list of TextMatchItems.</p>
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
 * <p>The additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetItemAdditionalAttributes {
  /**
   * <p>The forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The read-only forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an asset.</p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>List of rationales indicating why this item was matched by search.</p>
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * <p>A Amazon DataZone inventory asset.</p>
 * @public
 */
export interface AssetItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the inventory asset exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>the identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone inventory asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the asset type of the specified Amazon DataZone inventory asset.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the inventory asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The description of an Amazon DataZone inventory asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the Amazon DataZone inventory asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the inventory asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the first revision of the inventory asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms attached to the Amazon DataZone inventory asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The additional attributes of a Amazon DataZone inventory asset. </p>
   * @public
   */
  additionalAttributes?: AssetItemAdditionalAttributes | undefined;

  /**
   * <p>The restricted glossary terms accociated with an asset.</p>
   * @public
   */
  governedGlossaryTerms?: string[] | undefined;
}

/**
 * <p>An asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListing {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The revision of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetRevision?: string | undefined;

  /**
   * <p>The type of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetType?: string | undefined;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The metadata forms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The glossary terms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The restricted glossary terms associated with an asset.</p>
   * @public
   */
  governedGlossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The identifier of the project where an asset published in an Amazon DataZone catalog exists. </p>
   * @public
   */
  owningProjectId?: string | undefined;
}

/**
 * <p>Additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetListingItemAdditionalAttributes {
  /**
   * <p>The metadata forms that form additional attributes of the metadata asset.</p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>List of rationales indicating why this item was matched by search.</p>
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * <p>The details of an asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListingItem {
  /**
   * <p>The identifier of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingId?: string | undefined;

  /**
   * <p>The revision of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * <p>The name of the inventory asset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the inventory asset.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The type of the inventory asset.</p>
   * @public
   */
  entityType?: string | undefined;

  /**
   * <p>The description of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the listing.</p>
   * @public
   */
  listingCreatedBy?: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the listing.</p>
   * @public
   */
  listingUpdatedBy?: string | undefined;

  /**
   * <p>Glossary terms attached to the inventory asset.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The restricted glossary terms associated with an asset.</p>
   * @public
   */
  governedGlossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The identifier of the project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The additional attributes of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  additionalAttributes?: AssetListingItemAdditionalAttributes | undefined;
}

/**
 * <p>The revision of an inventory asset.</p>
 * @public
 */
export interface AssetRevision {
  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the inventory asset revision.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The revision details of the inventory asset.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when an inventory asset revison was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * <p>The name map for assets.</p>
 * @public
 */
export interface AssetTargetNameMap {
  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The target name in the asset target name map.</p>
   * @public
   */
  targetName: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryInput {
  /**
   * <p>The type ID of the form entry.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeInput {
  /**
   * <p>The unique identifier of the Amazon DataZone domain where the custom asset type is being created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the custom asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descripton of the custom asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms that are to be attached to the custom asset type.</p>
   * @public
   */
  formsInput: Record<string, FormEntryInput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that is to own the custom asset type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryOutput {
  /**
   * <p>The name of the type of the form entry.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the custom asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the custom asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms that are attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that currently owns this asset type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain where the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project where the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type is to be created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who creates this custom asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the custom type was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that created the custom asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset type that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that updated the asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * <p>The details of the asset type.</p>
 * @public
 */
export interface AssetTypeItem {
  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The forms included in the details of the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project where the asset type exists.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who updated the asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * <p>The asset type for the rule details.</p>
 * @public
 */
export interface AssetTypesForRule {
  /**
   * <p>The selection mode for the rule.</p>
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * <p>The specific asset types that are included in the rule.</p>
   * @public
   */
  specificAssetTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment role is associated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ARN of the environment role.</p>
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
   * <p>The ID of the domain where governed terms are to be associated with an asset.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset with which you want to associate a governed term.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset with which you want to associate a governed term.</p>
   * @public
   */
  entityType: GovernedEntityType | undefined;

  /**
   * <p>The glossary terms in a restricted glossary.</p>
   * @public
   */
  governedGlossaryTerms: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateGovernedTermsOutput {}

/**
 * <p>The Amazon Athena properties of a connection.</p>
 * @public
 */
export interface AthenaPropertiesInput {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * <p>The Amazon Athena properties of a connection.</p>
 * @public
 */
export interface AthenaPropertiesOutput {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * <p>The Amazon Athena properties patch of a connection.</p>
 * @public
 */
export interface AthenaPropertiesPatch {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * <p>The attribute error.</p>
 * @public
 */
export interface AttributeError {
  /**
   * <p>The attribute ID as part of the attribute error.</p>
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * <p>The code generated as part of the attribute error.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The message generated as part of the attribute error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The attribute input.</p>
 * @public
 */
export interface AttributeInput {
  /**
   * <p>The ID of the attribute.</p>
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * <p>The metadata forms as part of the attribute input.</p>
   * @public
   */
  forms: FormInput[] | undefined;
}

/**
 * <p>The authorization code properties of a connection.</p>
 * @public
 */
export interface AuthorizationCodeProperties {
  /**
   * <p>The authorization code of a connection.</p>
   * @public
   */
  authorizationCode?: string | undefined;

  /**
   * <p>The redirect URI of a connection.</p>
   * @public
   */
  redirectUri?: string | undefined;
}

/**
 * <p>The OAuth2Client application.</p>
 * @public
 */
export interface OAuth2ClientApplication {
  /**
   * <p>The user managed client application client ID in the OAuth2Client application.</p>
   * @public
   */
  userManagedClientApplicationClientId?: string | undefined;

  /**
   * <p>The Amazon Web Services managed client application reference in the OAuth2Client application.</p>
   * @public
   */
  aWSManagedClientApplicationReference?: string | undefined;
}

/**
 * <p>The GlueOAuth2 credentials of a connection.</p>
 * @public
 */
export interface GlueOAuth2Credentials {
  /**
   * <p>The user managed client application client secret of the connection. </p>
   * @public
   */
  userManagedClientApplicationClientSecret?: string | undefined;

  /**
   * <p>The access token of a connection.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The refresh token of the connection.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The jwt token of the connection.</p>
   * @public
   */
  jwtToken?: string | undefined;
}

/**
 * <p>The OAuth2 properties.</p>
 * @public
 */
export interface OAuth2Properties {
  /**
   * <p>The OAuth2 grant type of the OAuth2 properties.</p>
   * @public
   */
  oAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * <p>The OAuth2 client application of the OAuth2 properties.</p>
   * @public
   */
  oAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * <p>The OAuth2 token URL of the OAuth2 properties.</p>
   * @public
   */
  tokenUrl?: string | undefined;

  /**
   * <p>The OAuth2 token URL parameter map of the OAuth2 properties.</p>
   * @public
   */
  tokenUrlParametersMap?: Record<string, string> | undefined;

  /**
   * <p>The authorization code properties of the OAuth2 properties.</p>
   * @public
   */
  authorizationCodeProperties?: AuthorizationCodeProperties | undefined;

  /**
   * <p>The OAuth2 credentials of the OAuth2 properties.</p>
   * @public
   */
  oAuth2Credentials?: GlueOAuth2Credentials | undefined;
}

/**
 * <p>The authentication configuration of a connection.</p>
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The authentication type of a connection.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The oAuth2 properties of a connection.</p>
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * <p>The basic authentication credentials of a connection.</p>
 * @public
 */
export interface BasicAuthenticationCredentials {
  /**
   * <p>The user name for the connecion.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The password for a connection.</p>
   * @public
   */
  password?: string | undefined;
}

/**
 * <p>The authentication configuration of a connection.</p>
 * @public
 */
export interface AuthenticationConfigurationInput {
  /**
   * <p>The authentication type of a connection.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The oAuth2 properties of a connection.</p>
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;

  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The KMS key ARN of a connection.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The basic authentication credentials of a connection.</p>
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;

  /**
   * <p>The custom authentication credentials of a connection.</p>
   * @public
   */
  customAuthenticationCredentials?: Record<string, string> | undefined;
}

/**
 * <p>The authentication configuration patch of a connection. </p>
 * @public
 */
export interface AuthenticationConfigurationPatch {
  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The basic authentication credentials of a connection.</p>
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;
}

/**
 * <p>The account ID of a project.</p>
 * @public
 */
export type AwsAccount = AwsAccount.AwsAccountIdMember | AwsAccount.AwsAccountIdPathMember | AwsAccount.$UnknownMember;

/**
 * @public
 */
export namespace AwsAccount {
  /**
   * <p>The account ID of a project.</p>
   * @public
   */
  export interface AwsAccountIdMember {
    awsAccountId: string;
    awsAccountIdPath?: never;
    $unknown?: never;
  }

  /**
   * <p>The account ID path of a project.</p>
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
 * <p>The location of a project.</p>
 * @public
 */
export interface AwsLocation {
  /**
   * <p>The access role of a connection.</p>
   * @public
   */
  accessRole?: string | undefined;

  /**
   * <p>The account ID of a connection.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Region of a connection.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>The IAM connection ID of a connection.</p>
   * @public
   */
  iamConnectionId?: string | undefined;
}

/**
 * <p>The results of the BatchGetAttribute action.</p>
 * @public
 */
export interface BatchGetAttributeOutput {
  /**
   * <p>The attribute ID.</p>
   * @public
   */
  attributeIdentifier: string | undefined;

  /**
   * <p>The metadata forms that are part of the results of the BatchGetAttribute action.</p>
   * @public
   */
  forms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttributesMetadataInput {
  /**
   * <p>The domain ID where you want to get the attribute metadata.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The entity type for which you want to get attribute metadata.</p>
   * @public
   */
  entityType: AttributeEntityType | undefined;

  /**
   * <p>The entity ID for which you want to get attribute metadata.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The entity revision for which you want to get attribute metadata.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The attribute identifier.</p>
   * @public
   */
  attributeIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttributesMetadataOutput {
  /**
   * <p>The results of the BatchGetAttributesMetadata action.</p>
   * @public
   */
  attributes?: BatchGetAttributeOutput[] | undefined;

  /**
   * <p>The errors generated when the BatchGetAttributesMetadata action is invoked.</p>
   * @public
   */
  errors: AttributeError[] | undefined;
}

/**
 * <p>The results of the BatchPutAttribute action.</p>
 * @public
 */
export interface BatchPutAttributeOutput {
  /**
   * <p>The attribute ID.</p>
   * @public
   */
  attributeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface BatchPutAttributesMetadataInput {
  /**
   * <p>The domain ID where you want to write the attribute metadata.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The entity type for which you want to write the attribute metadata.</p>
   * @public
   */
  entityType: AttributeEntityType | undefined;

  /**
   * <p>The entity ID for which you want to write the attribute metadata.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The attributes of the metadata.</p>
   * @public
   */
  attributes: AttributeInput[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAttributesMetadataOutput {
  /**
   * <p>The errors generated when the BatchPutAttributeMetadata action is invoked.</p>
   * @public
   */
  errors?: AttributeError[] | undefined;

  /**
   * <p>The results of the BatchPutAttributeMetadata action.</p>
   * @public
   */
  attributes?: BatchPutAttributeOutput[] | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run is to be cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
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
   * <p>The unique identifier of the Amazon DataZone domain where the subscription request is being cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription that is being cancelled.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who is cancelling the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user that cancelled the subscription.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the subscription is being cancelled.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the request to cancel the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp that specifies when the request to cancel the subscription was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp that specifies when the subscription was cancelled.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon DataZone user who is made a subscriber to the specified asset by the subscription that is being cancelled.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The asset to which a subscription is being cancelled.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The unique ID of the subscripton request for the subscription that is being cancelled.</p>
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * <p>Specifies whether the permissions to the asset are retained after the subscription is cancelled.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * <p>Part of the provisioning properties of the environment blueprint.</p>
 * @public
 */
export interface CloudFormationProperties {
  /**
   * <p>The template URL of the cloud formation provisioning properties of the environment blueprint.</p>
   * @public
   */
  templateUrl: string | undefined;
}

/**
 * <p>The details of the parameters for the configurable environment action.</p>
 * @public
 */
export interface ConfigurableActionParameter {
  /**
   * <p>The key of the configurable action parameter.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The value of the configurable action parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The configurable action of a Amazon DataZone environment.</p>
 * @public
 */
export interface ConfigurableEnvironmentAction {
  /**
   * <p>The type of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The authentication type of a configurable action of a Amazon DataZone environment. </p>
   * @public
   */
  auth?: ConfigurableActionTypeAuthorization | undefined;

  /**
   * <p>The parameters of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  parameters: ConfigurableActionParameter[] | undefined;
}

/**
 * <p>The credentials of a connection.</p>
 * @public
 */
export interface ConnectionCredentials {
  /**
   * <p>The access key ID of a connection.</p>
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * <p>The secret access key of a connection.</p>
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * <p>The session token of a connection credentials.</p>
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * <p>The expiration of the connection credentials.</p>
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * <p>Physical connection requirements of a connection.</p>
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID of the physical connection requirements of a connection. </p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The subnet ID list of the physical connection requirements of a connection. </p>
   * @public
   */
  subnetIdList?: string[] | undefined;

  /**
   * <p>The group ID list of the physical connection requirements of a connection. </p>
   * @public
   */
  securityGroupIdList?: string[] | undefined;

  /**
   * <p>The availability zone of the physical connection requirements of a connection. </p>
   * @public
   */
  availabilityZone?: string | undefined;
}

/**
 * <p>The Amazon Web Services Glue connecton input.</p>
 * @public
 */
export interface GlueConnectionInput {
  /**
   * <p>The connection properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The physical connection requirements for the Amazon Web Services Glue connection.</p>
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The name of the Amazon Web Services Glue connection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon Web Services Glue connection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The connection type of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionType?: GlueConnectionType | undefined;

  /**
   * <p>The match criteria of the Amazon Web Services Glue connection.</p>
   * @public
   */
  matchCriteria?: string | undefined;

  /**
   * <p>Speciefies whether to validate credentials of the Amazon Web Services Glue connection.</p>
   * @public
   */
  validateCredentials?: boolean | undefined;

  /**
   * <p>Speciefies whether to validate for compute environments of the Amazon Web Services Glue connection.</p>
   * @public
   */
  validateForComputeEnvironments?: ComputeEnvironments[] | undefined;

  /**
   * <p>The Spark properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Athena properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * <p>The Python properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * <p>The Amazon Web Services Glue properties of a connection.</p>
 * @public
 */
export interface GluePropertiesInput {
  /**
   * <p>The Amazon Web Services Glue connection.</p>
   * @public
   */
  glueConnectionInput?: GlueConnectionInput | undefined;
}

/**
 * <p>The hyper pod properties of a Amazon Web Services Glue properties patch.</p>
 * @public
 */
export interface HyperPodPropertiesInput {
  /**
   * <p>The cluster name the hyper pod properties.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * <p>The IAM properties of a connection.</p>
 * @public
 */
export interface IamPropertiesInput {
  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>The MLflow properties of a connection.</p>
 * @public
 */
export interface MlflowPropertiesInput {
  /**
   * <p>The tracking server ARN as part of the MLflow properties of a connection.</p>
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * <p>The username and password of a connection.</p>
 * @public
 */
export interface UsernamePassword {
  /**
   * <p>The password of a connection.</p>
   * @public
   */
  password: string | undefined;

  /**
   * <p>The username of a connection.</p>
   * @public
   */
  username: string | undefined;
}

/**
 * <p>Amazon Redshift credentials of a connection.</p>
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
   * <p>The secret ARN of the Amazon Redshift credentials of a connection.</p>
   * @public
   */
  export interface SecretArnMember {
    secretArn: string;
    usernamePassword?: never;
    $unknown?: never;
  }

  /**
   * <p>The username and password of the Amazon Redshift credentials of a connection.</p>
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
 * <p>The lineage sync schedule.</p>
 * @public
 */
export interface LineageSyncSchedule {
  /**
   * <p>The lineage sync schedule.</p>
   * @public
   */
  schedule?: string | undefined;
}

/**
 * <p>The Amaon Redshift lineage sync configuration.</p>
 * @public
 */
export interface RedshiftLineageSyncConfigurationInput {
  /**
   * <p>Specifies whether the Amaon Redshift lineage sync configuration is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The schedule of the Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * <p>The Amazon Redshift storage properties.</p>
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
   * <p>The cluster name in the Amazon Redshift storage properties.</p>
   * @public
   */
  export interface ClusterNameMember {
    clusterName: string;
    workgroupName?: never;
    $unknown?: never;
  }

  /**
   * <p>The workgroup name in the Amazon Redshift storage properties.</p>
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
 * <p>The Amazon Redshift properties.</p>
 * @public
 */
export interface RedshiftPropertiesInput {
  /**
   * <p>The Amazon Redshift storage.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The Amazon Redshift database name.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The Amazon Redshift host.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The Amaon Redshift port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Amaon Redshift credentials.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>The lineage sync of the Amazon Redshift.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * <p>The Amazon S3 properties of a connection.</p>
 * @public
 */
export interface S3PropertiesInput {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;
}

/**
 * <p>The Spark EMR properties.</p>
 * @public
 */
export interface SparkEmrPropertiesInput {
  /**
   * <p>The compute ARN of Spark EMR.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The instance profile ARN of Spark EMR.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The java virtual env of the Spark EMR.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The log URI of the Spark EMR.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env of the Spark EMR.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role of the Spark EMR.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The certificates S3 URI of the Spark EMR.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * <p>The managed endpoint ARN of the EMR on EKS cluster.</p>
   * @public
   */
  managedEndpointArn?: string | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue args.</p>
 * @public
 */
export interface SparkGlueArgs {
  /**
   * <p>The connection in the Spark Amazon Web Services Glue args.</p>
   * @public
   */
  connection?: string | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue properties. </p>
 * @public
 */
export interface SparkGluePropertiesInput {
  /**
   * <p>The additional args in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue version in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * <p>The idle timeout in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * <p>The Java virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The number of workers in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * <p>The Python virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The worker type in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  workerType?: string | undefined;
}

/**
 * <p>The properties of a connection.</p>
 * @public
 */
export type ConnectionPropertiesInput =
  | ConnectionPropertiesInput.AmazonQPropertiesMember
  | ConnectionPropertiesInput.AthenaPropertiesMember
  | ConnectionPropertiesInput.GluePropertiesMember
  | ConnectionPropertiesInput.HyperPodPropertiesMember
  | ConnectionPropertiesInput.IamPropertiesMember
  | ConnectionPropertiesInput.MlflowPropertiesMember
  | ConnectionPropertiesInput.RedshiftPropertiesMember
  | ConnectionPropertiesInput.S3PropertiesMember
  | ConnectionPropertiesInput.SparkEmrPropertiesMember
  | ConnectionPropertiesInput.SparkGluePropertiesMember
  | ConnectionPropertiesInput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesInput {
  /**
   * <p>The Amazon Athena properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The hyper pod properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark Amazon Web Services Glue properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Q properties of the connection.</p>
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
    amazonQProperties: AmazonQPropertiesInput;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The MLflow properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesInput;
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
    amazonQProperties?: never;
    mlflowProperties?: never;
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
    amazonQProperties: (value: AmazonQPropertiesInput) => T;
    mlflowProperties: (value: MlflowPropertiesInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The properties of the Amazon Web Services Glue connection.</p>
 * @public
 */
export interface GluePropertiesOutput {
  /**
   * <p>The status of a connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The error message generated if the action is not completed successfully.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The hyper pod properties of a Amazon Web Services Glue properties patch.</p>
 * @public
 */
export interface HyperPodPropertiesOutput {
  /**
   * <p>The cluster name the hyper pod properties.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The cluster ARN of the hyper pod properties.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The orchestrator of the hyper pod properties.</p>
   * @public
   */
  orchestrator?: HyperPodOrchestrator | undefined;
}

/**
 * <p>The IAM properties of a connection.</p>
 * @public
 */
export interface IamPropertiesOutput {
  /**
   * <p>The environment ID of the connection.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>The MLflow properties of a connection.</p>
 * @public
 */
export interface MlflowPropertiesOutput {
  /**
   * <p>The tracking server ARN as part of the MLflow properties of a connection.</p>
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * <p>The Amaon Redshift lineage sync configuration.</p>
 * @public
 */
export interface RedshiftLineageSyncConfigurationOutput {
  /**
   * <p>The lineage job ID of the Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  lineageJobId?: string | undefined;

  /**
   * <p>Specifies whether the Amaon Redshift lineage sync configuration is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The schedule of teh Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * <p>The Amazon Redshift properties.</p>
 * @public
 */
export interface RedshiftPropertiesOutput {
  /**
   * <p>The storage in the Amazon Redshift properties.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The Amazon Redshift credentials.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>Specifies whether Amaon Redshift properties has a provisioned secret.</p>
   * @public
   */
  isProvisionedSecret?: boolean | undefined;

  /**
   * <p>The jdbcIam URL of the Amazon Redshift properties.</p>
   * @public
   */
  jdbcIamUrl?: string | undefined;

  /**
   * <p>The jdbcURL of the Amazon Redshift properties. </p>
   * @public
   */
  jdbcUrl?: string | undefined;

  /**
   * <p>The redshiftTempDir of the Amazon Redshift properties.</p>
   * @public
   */
  redshiftTempDir?: string | undefined;

  /**
   * <p>The lineage syn of the Amazon Redshift properties.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationOutput | undefined;

  /**
   * <p>The status in the Amazon Redshift properties.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The Amazon Redshift database name.</p>
   * @public
   */
  databaseName?: string | undefined;
}

/**
 * <p>The Amazon S3 properties of a connection.</p>
 * @public
 */
export interface S3PropertiesOutput {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;

  /**
   * <p>The status of the Amazon S3 connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The error message that gets displayed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The managed endpoint credentials of the EMR on EKS cluster.</p>
 * @public
 */
export interface ManagedEndpointCredentials {
  /**
   * <p>The identifier of the managed endpoint credentials.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the managed endpoint credentials.</p>
   * @public
   */
  token?: string | undefined;
}

/**
 * <p>The Spark EMR properties.</p>
 * @public
 */
export interface SparkEmrPropertiesOutput {
  /**
   * <p>The compute ARN of the Spark EMR.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The credentials of the Spark EMR.</p>
   * @public
   */
  credentials?: UsernamePassword | undefined;

  /**
   * <p>The credential expiration of the Spark EMR.</p>
   * @public
   */
  credentialsExpiration?: Date | undefined;

  /**
   * <p>The governance type of the Spark EMR.</p>
   * @public
   */
  governanceType?: GovernanceType | undefined;

  /**
   * <p>The instance profile ARN of the Spark EMR.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The Java virtual env of the Spark EMR.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The livy endpoint of the Spark EMR.</p>
   * @public
   */
  livyEndpoint?: string | undefined;

  /**
   * <p>The log URI of the Spark EMR.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env of the Spark EMR.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role of the Spark EMR.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The trusted certificate S3 URL of the Spark EMR.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * <p>The certificate data of the EMR on EKS cluster.</p>
   * @public
   */
  certificateData?: string | undefined;

  /**
   * <p>The managed endpoint ARN of the EMR on EKS cluster.</p>
   * @public
   */
  managedEndpointArn?: string | undefined;

  /**
   * <p>The managed endpoint credentials of the EMR on EKS cluster.</p>
   * @public
   */
  managedEndpointCredentials?: ManagedEndpointCredentials | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue properties. </p>
 * @public
 */
export interface SparkGluePropertiesOutput {
  /**
   * <p>The additional args in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue version in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * <p>The idle timeout in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * <p>The Java virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The number of workers in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * <p>The Python virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The worker type in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  workerType?: string | undefined;
}

/**
 * <p>The properties of a connection.</p>
 * @public
 */
export type ConnectionPropertiesOutput =
  | ConnectionPropertiesOutput.AmazonQPropertiesMember
  | ConnectionPropertiesOutput.AthenaPropertiesMember
  | ConnectionPropertiesOutput.GluePropertiesMember
  | ConnectionPropertiesOutput.HyperPodPropertiesMember
  | ConnectionPropertiesOutput.IamPropertiesMember
  | ConnectionPropertiesOutput.MlflowPropertiesMember
  | ConnectionPropertiesOutput.RedshiftPropertiesMember
  | ConnectionPropertiesOutput.S3PropertiesMember
  | ConnectionPropertiesOutput.SparkEmrPropertiesMember
  | ConnectionPropertiesOutput.SparkGluePropertiesMember
  | ConnectionPropertiesOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesOutput {
  /**
   * <p>The Amazon Athena properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The hyper pod properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark Amazon Web Services Glue properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Q properties of the connection.</p>
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
    amazonQProperties: AmazonQPropertiesOutput;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The MLflow properties of a connection.</p>
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
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesOutput;
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
    amazonQProperties?: never;
    mlflowProperties?: never;
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
    amazonQProperties: (value: AmazonQPropertiesOutput) => T;
    mlflowProperties: (value: MlflowPropertiesOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The Amazon Web Services Glue connection patch.</p>
 * @public
 */
export interface GlueConnectionPatch {
  /**
   * <p>The description of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The properties of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationPatch | undefined;
}

/**
 * <p>The Amazon Web Services Glue properties patch of a connection.</p>
 * @public
 */
export interface GluePropertiesPatch {
  /**
   * <p>The Amazon Web Services Glue properties patch of a connection.</p>
   * @public
   */
  glueConnectionInput?: GlueConnectionPatch | undefined;
}

/**
 * <p>The IAM properties patch of a connection.</p>
 * @public
 */
export interface IamPropertiesPatch {
  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>The MLflow properties of a connection.</p>
 * @public
 */
export interface MlflowPropertiesPatch {
  /**
   * <p>The tracking server ARN as part of the MLflow properties of a connection.</p>
   * @public
   */
  trackingServerArn?: string | undefined;
}

/**
 * <p>Amazon Redshift properties patch.</p>
 * @public
 */
export interface RedshiftPropertiesPatch {
  /**
   * <p>The storage in the Amazon Redshift properties patch.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The name in the Amazon Redshift properties patch.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The host in the Amazon Redshift properties patch.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The port in the Amazon Redshift properties patch.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The credentials in the Amazon Redshift properties patch.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>The lineage sync in the Amazon Redshift properties patch.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * <p>The Amazon S3 properties patch of a connection.</p>
 * @public
 */
export interface S3PropertiesPatch {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties patch of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties patch of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;
}

/**
 * <p>The Spark EMR properties patch.</p>
 * @public
 */
export interface SparkEmrPropertiesPatch {
  /**
   * <p>The compute ARN in the Spark EMR properties patch.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The instance profile ARN in the Spark EMR properties patch.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The Java virtual evn in the Spark EMR properties patch.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The log URI in the Spark EMR properties patch.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env in the Spark EMR properties patch.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role in the Spark EMR properties patch.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The trusted certificates S3 URI in the Spark EMR properties patch.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;

  /**
   * <p>The managed endpoint ARN of the EMR on EKS cluster.</p>
   * @public
   */
  managedEndpointArn?: string | undefined;
}

/**
 * <p>The connection properties patch.</p>
 * @public
 */
export type ConnectionPropertiesPatch =
  | ConnectionPropertiesPatch.AmazonQPropertiesMember
  | ConnectionPropertiesPatch.AthenaPropertiesMember
  | ConnectionPropertiesPatch.GluePropertiesMember
  | ConnectionPropertiesPatch.IamPropertiesMember
  | ConnectionPropertiesPatch.MlflowPropertiesMember
  | ConnectionPropertiesPatch.RedshiftPropertiesMember
  | ConnectionPropertiesPatch.S3PropertiesMember
  | ConnectionPropertiesPatch.SparkEmrPropertiesMember
  | ConnectionPropertiesPatch.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesPatch {
  /**
   * <p>The Amazon Athena properties of a connection properties patch.</p>
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesPatch;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection properties patch.</p>
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesPatch;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection properties patch.</p>
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties: IamPropertiesPatch;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection properties patch.</p>
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesPatch;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection properties patch.</p>
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesPatch;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection properties patch.</p>
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties: S3PropertiesPatch;
    amazonQProperties?: never;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Q properties of the connection.</p>
   * @public
   */
  export interface AmazonQPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties: AmazonQPropertiesPatch;
    mlflowProperties?: never;
    $unknown?: never;
  }

  /**
   * <p>The MLflow properties of a connection.</p>
   * @public
   */
  export interface MlflowPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    amazonQProperties?: never;
    mlflowProperties: MlflowPropertiesPatch;
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
    amazonQProperties?: never;
    mlflowProperties?: never;
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
    amazonQProperties: (value: AmazonQPropertiesPatch) => T;
    mlflowProperties: (value: MlflowPropertiesPatch) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The Amazon Web Services Glue connection.</p>
 * @public
 */
export interface GlueConnection {
  /**
   * <p>The name of the Amazon Web Services Glue connection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon Web Services Glue connection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * <p>The match criteria of the Amazon Web Services Glue connection.</p>
   * @public
   */
  matchCriteria?: string[] | undefined;

  /**
   * <p>The properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The Spark properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Athena properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * <p>The Python properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * <p>The physical connection requirements of the Amazon Web Services Glue connection.</p>
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The creation time of the Amazon Web Services Glue connection.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The timestamp at which the Amazon Web Services Glue connection was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The user who last updated the Amazon Web Services Glue connection.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p>The status of the Amazon Web Services Glue connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The status reason of the Amazon Web Services Glue connection.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The last validation time of the Amazon Web Services Glue connection.</p>
   * @public
   */
  lastConnectionValidationTime?: Date | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * <p>The connection schema version of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionSchemaVersion?: number | undefined;

  /**
   * <p>The compatible compute environments of the Amazon Web Services Glue connection.</p>
   * @public
   */
  compatibleComputeEnvironments?: ComputeEnvironments[] | undefined;
}

/**
 * <p>The physical endpoints of a connection.</p>
 * @public
 */
export interface PhysicalEndpoint {
  /**
   * <p>The location of a connection.</p>
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name.</p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue connection.</p>
   * @public
   */
  glueConnection?: GlueConnection | undefined;

  /**
   * <p>Specified whether trusted identity propagation for the connection is enabled.</p>
   * @public
   */
  enableTrustedIdentityPropagation?: boolean | undefined;

  /**
   * <p>The host in the physical endpoints of a connection.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The port in the physical endpoints of a connection.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The protocol in the physical endpoints of a connection.</p>
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * <p>The stage in the physical endpoints of a connection.</p>
   * @public
   */
  stage?: string | undefined;
}

/**
 * <p>The summary of a connection.</p>
 * @public
 */
export interface ConnectionSummary {
  /**
   * <p>The ID of a connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The domain ID of a connection.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The domain unit ID of a connection.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The environment ID of a connection.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The connection physical endpoints.</p>
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * <p>The connection project ID.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * <p>The connection type.</p>
   * @public
   */
  type: ConnectionType | undefined;

  /**
   * <p>The scope of the connection.</p>
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * @public
 */
export interface CreateAccountPoolInput {
  /**
   * <p>The ID of the domain where the account pool is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the account pool.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the account pool.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The mechanism used to resolve the account selection from the account pool.</p>
   * @public
   */
  resolutionStrategy: ResolutionStrategy | undefined;

  /**
   * <p>The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler. </p>
   * @public
   */
  accountSource: AccountSource | undefined;
}

/**
 * @public
 */
export interface CreateAccountPoolOutput {
  /**
   * <p>The ID of the domain where the account pool is created.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The name of the account pool.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the account pool.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The description of the account pool.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The mechanism used to resolve the account selection from the account pool.</p>
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * <p>The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler. </p>
   * @public
   */
  accountSource: AccountSource | undefined;

  /**
   * <p>The user who created the account pool.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp at which the account pool was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which the account pool was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The user who last updated the account pool.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the domain where the account pool is created.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * <p>The location where the connection is created.</p>
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A connection description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the domain where the connection is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment where the connection is created.</p>
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesInput | undefined;

  /**
   * <p>Specifies whether the trusted identity propagation is enabled.</p>
   * @public
   */
  enableTrustedIdentityPropagation?: boolean | undefined;

  /**
   * <p>The scope of the connection.</p>
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The connection description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the domain where the connection is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the domain unit where the connection is created.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The ID of the environment where the connection is created.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The physical endpoints of the connection.</p>
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * <p>The ID of the project where the connection is created.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * <p>The connection type.</p>
   * @public
   */
  type: ConnectionType | undefined;

  /**
   * <p>The scope of the connection.</p>
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * <p>The data product.</p>
 * @public
 */
export interface DataProductItem {
  /**
   * <p>The type of the data product.</p>
   * @public
   */
  itemType: DataProductItemType | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataProductInput {
  /**
   * <p>The ID of the domain where the data product is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The description of the data product.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The metadata forms of the data product.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The data assets of the data product.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductOutput {
  /**
   * <p>The ID of the domain where the data product lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data product.</p>
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * <p>The description of the data product.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The timestamp at which the data product was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the first revision of the data product was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The user who created the first revision of the data product.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionInput {
  /**
   * <p>The ID of the domain where the data product revision is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the data product revision.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data product revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product revision.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product revision.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionOutput {
  /**
   * <p>The ID of the domain where data product revision is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the data product revision.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The ID of the owning project of the data product revision.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the data product revision.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data product revision.</p>
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * <p>The description of the data product revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product revision.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product revision.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The timestamp at which the data product revision is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the first revision of the data product is created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The user who created the first revision of the data product.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * <p>A filter expression in Amazon DataZone.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>The search filter explresison type.</p>
   * @public
   */
  type: FilterExpressionType | undefined;

  /**
   * <p>The search filter expression.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>The relational filter configuration for the data source.</p>
 * @public
 */
export interface RelationalFilterConfiguration {
  /**
   * <p>The database name specified in the relational filter configuration for the data source.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The schema name specified in the relational filter configuration for the data source.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The filter expressions specified in the relational filter configuration for the data source.</p>
   * @public
   */
  filterExpressions?: FilterExpression[] | undefined;
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * <p>The catalog name in the Amazon Web Services Glue run configuration.</p>
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
 * @public
 */
export interface RedshiftCredentialConfiguration {
  /**
   * <p>The ARN of a secret manager for an Amazon Redshift cluster.</p>
   * @public
   */
  secretManagerArn: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift cluster storage.</p>
 * @public
 */
export interface RedshiftClusterStorage {
  /**
   * <p>The name of an Amazon Redshift cluster.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift Serverless workgroup storage.</p>
 * @public
 */
export interface RedshiftServerlessStorage {
  /**
   * <p>The name of the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.</p>
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
   * <p>The details of the Amazon Redshift cluster source.</p>
   * @public
   */
  export interface RedshiftClusterSourceMember {
    redshiftClusterSource: RedshiftClusterStorage;
    redshiftServerlessSource?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of the Amazon Redshift Serverless workgroup source.</p>
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
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.</p>
   * @public
   */
  redshiftStorage?: RedshiftStorage | undefined;
}

/**
 * <p>The Amazon SageMaker run configuration.</p>
 * @public
 */
export interface SageMakerRunConfigurationInput {
  /**
   * <p>The tracking assets of the Amazon SageMaker run.</p>
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * <p>The configuration of the data source.</p>
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
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationInput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationInput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon SageMaker run configuration.</p>
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
 * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code> action.</p>
 * @public
 */
export interface RecommendationConfiguration {
  /**
   * <p>Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.</p>
   * @public
   */
  enableBusinessNameGeneration?: boolean | undefined;
}

/**
 * <p>The details of the schedule of the data source runs.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>The timezone of the data source run. </p>
   * @public
   */
  timezone?: Timezone | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceInput {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain where the data source is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project in which you want to add this data source.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes assets. </p>
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionIdentifier?: string | undefined;

  /**
   * <p>The type of the data source. In Amazon DataZone, you can use data sources to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone. In the current release of Amazon DataZone, you can create and run data sources for Amazon Web Services Glue and Amazon Redshift.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationInput | undefined;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The metadata forms that are to be attached to the assets that this data source works with.</p>
   * @public
   */
  assetFormsInput?: FormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationOutput {
  /**
   * <p>The Amazon Web Services account ID included in the configuration details of the Amazon Web Services Glue data source. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Web Services Glue data source. </p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data source. </p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * <p>The catalog name in the Amazon Web Services Glue run configuration.</p>
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationOutput {
  /**
   * <p>The ID of the Amazon Web Services account included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.</p>
   * @public
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * <p>The Amazon SageMaker run configuration.</p>
 * @public
 */
export interface SageMakerRunConfigurationOutput {
  /**
   * <p>The Amazon SageMaker account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon SageMaker Region.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The tracking assets of the Amazon SageMaker.</p>
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * <p>The configuration of the data source.</p>
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
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationOutput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon SageMaker run configuration.</p>
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
 * <p>The details of the error message that is returned if the operation cannot be successfully completed.</p>
 * @public
 */
export interface DataSourceErrorMessage {
  /**
   * <p>The type of the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  errorType: DataSourceErrorType | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  errorDetail?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceOutput {
  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project to which the data source is added.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes assets. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The metadata forms attached to the assets that this data source creates.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The status of the last run of this data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp that specifies when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when the data source was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>The single sign-on details in Amazon DataZone.</p>
 * @public
 */
export interface SingleSignOn {
  /**
   * <p>The type of single sign-on in Amazon DataZone.</p>
   * @public
   */
  type?: AuthType | undefined;

  /**
   * <p>The single sign-on user assignment in Amazon DataZone.</p>
   * @public
   */
  userAssignment?: UserAssignment | undefined;

  /**
   * <p>The ARN of the IDC instance.</p>
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the domain that is created.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * <p>The service role of the domain that is created.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the root domain unit.</p>
   * @public
   */
  rootDomainUnitId?: string | undefined;

  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * <p>The ARN of the Amazon DataZone domain.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The status of the Amazon DataZone domain.</p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the domain that is created.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * <p>Te service role of the domain that is created.</p>
   * @public
   */
  serviceRole?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainUnitInput {
  /**
   * <p>The ID of the domain where you want to crate a domain unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the domain unit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitIdentifier: string | undefined;

  /**
   * <p>The description of the domain unit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The properties of a domain unit group.</p>
 * @public
 */
export interface DomainUnitGroupProperties {
  /**
   * <p>The ID of the domain unit group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>The properties of the domain unit user.</p>
 * @public
 */
export interface DomainUnitUserProperties {
  /**
   * <p>The ID of teh domain unit user.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>The properties of the domain unit owner.</p>
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
   * <p>Indicates that the domain unit owner is a user.</p>
   * @public
   */
  export interface UserMember {
    user: DomainUnitUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that the domain unit owner is a group.</p>
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
   * <p>The ID of the domain unit.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the domain unit was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the domain unit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitId?: string | undefined;

  /**
   * <p>The description of the domain unit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The owners of the domain unit.</p>
   * @public
   */
  owners: DomainUnitOwnerProperties[] | undefined;

  /**
   * <p>The IDs of the ancestor domain units.</p>
   * @public
   */
  ancestorDomainUnitIds: string[] | undefined;

  /**
   * <p>The timestamp at which the domain unit was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the domain unit.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * <p>The parameter details of an evironment profile.</p>
 * @public
 */
export interface EnvironmentParameter {
  /**
   * <p>The name of an environment profile parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of an environment profile parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The identifier of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The description of the Amazon DataZone environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the Amazon DataZone environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the environment profile that is used to create this Amazon DataZone environment.</p>
   * @public
   */
  environmentProfileIdentifier?: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountIdentifier?: string | undefined;

  /**
   * <p>The region of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountRegion?: string | undefined;

  /**
   * <p>The ID of the blueprint with which the environment is being created.</p>
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * <p>The deployment order of the environment.</p>
   * @public
   */
  deploymentOrder?: number | undefined;

  /**
   * <p>The configuration ID of the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * <p>The deployment properties of the Amazon DataZone blueprint.</p>
 * @public
 */
export interface DeploymentProperties {
  /**
   * <p>The start timeout of the environment blueprint deployment.</p>
   * @public
   */
  startTimeoutMinutes?: number | undefined;

  /**
   * <p>The end timeout of the environment blueprint deployment.</p>
   * @public
   */
  endTimeoutMinutes?: number | undefined;
}

/**
 * <p>The failure reasons for the environment deployment.</p>
 * @public
 */
export interface EnvironmentError {
  /**
   * <p>The error code for the failure reason for the environment deployment.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message for the failure reason for the environment deployment.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of the last deployment of the environment.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The identifier of the last deployment of the environment.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The type of the last deployment of the environment.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>The status of the last deployment of the environment.</p>
   * @public
   */
  deploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>The failure reason of the last deployment of the environment.</p>
   * @public
   */
  failureReason?: EnvironmentError | undefined;

  /**
   * <p>The messages of the last deployment of the environment.</p>
   * @public
   */
  messages?: string[] | undefined;

  /**
   * <p>Specifies whether the last deployment of the environment is complete.</p>
   * @public
   */
  isDeploymentComplete?: boolean | undefined;
}

/**
 * <p>The details of a provisioned resource of this Amazon DataZone environment.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The provider of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  provider?: string | undefined;

  /**
   * <p>The name of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>The provisioning properties of an environment blueprint.</p>
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
   * <p>The cloud formation properties included as part of the provisioning properties of an environment blueprint.</p>
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
 * <p>The details of user parameters of an environment blueprint.</p>
 * @public
 */
export interface CustomParameter {
  /**
   * <p>The key name of the parameter.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The description of the parameter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The filed type of the parameter.</p>
   * @public
   */
  fieldType: string | undefined;

  /**
   * <p>The default value of the parameter.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>Specifies whether the parameter is editable.</p>
   * @public
   */
  isEditable?: boolean | undefined;

  /**
   * <p>Specifies whether the custom parameter is optional.</p>
   * @public
   */
  isOptional?: boolean | undefined;

  /**
   * <p>Specifies whether a parameter value can be updated after creation. </p>
   * @public
   */
  isUpdateSupported?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of this Amazon DataZone environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created this environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this environment was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of this environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the environment profile with which this Amazon DataZone environment was created.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The provider of this Amazon DataZone environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * <p>The status of this Amazon DataZone environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The configurable actions of this Amazon DataZone environment.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The details of the last deployment of this Amazon DataZone environment.</p>
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties of this Amazon DataZone environment.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The ID of the blueprint with which this Amazon DataZone environment was created.</p>
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * <p>The configuration ID of the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment action is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the environment action is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action that is being created in the environment.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionOutput {
  /**
   * <p>The ID of the domain in which the environment action is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the environment in which the environment is created.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentBlueprintInput {
  /**
   * <p>The identifier of the domain in which this blueprint is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone blueprint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone blueprint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone blueprint.</p>
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone blueprint.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentBlueprintOutput {
  /**
   * <p>The ID of this Amazon DataZone blueprint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of this Amazon DataZone blueprint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone blueprint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provider of this Amazon DataZone blueprint.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone blueprint.</p>
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties of this Amazon DataZone blueprint.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone blueprint.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The glossary terms attached to this Amazon DataZone blueprint.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The timestamp at which the environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * <p>The identifier of the project in which to create the environment profile.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which this environment profile is created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileOutput {
  /**
   * <p>The ID of this Amazon DataZone environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID in which this Amazon DataZone environment profile is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which this Amazon DataZone environment profile is created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created this environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when this environment profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * <p>The model of the API.</p>
 * @public
 */
export type Model = Model.SmithyMember | Model.$UnknownMember;

/**
 * @public
 */
export namespace Model {
  /**
   * <p>Indicates the smithy model of the API.</p>
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
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The model of this Amazon DataZone metadata form type.</p>
   * @public
   */
  model: Model | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns this metadata form type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The status of this Amazon DataZone metadata form type.</p>
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateFormTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of this Amazon DataZone metadata form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the project that owns this Amazon DataZone metadata form type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the project in which this Amazon DataZone metadata form type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns business glossary.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * <p>The usage restriction of the restricted glossary.</p>
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of this business glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns this business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * <p>The usage restriction of the restricted glossary.</p>
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * <p>The details of the term relations.</p>
 * @public
 */
export interface TermRelations {
  /**
   * <p>The <code>isA</code> property of the term relations.</p>
   * @public
   */
  isA?: string[] | undefined;

  /**
   * <p>The classifies of the term relations.</p>
   * @public
   */
  classifies?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status?: GlossaryTermStatus | undefined;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermOutput {
  /**
   * <p>The ID of this business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * <p>The usage restriction of the restricted glossary.</p>
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * @public
 */
export interface CreateGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group for which the group profile is created.</p>
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * <p> A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the group profile.</p>
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * <p>The name of the group for which group profile is created.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 */
export interface CreateListingChangeSetInput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of an entity.</p>
   * @public
   */
  entityType: EntityType | undefined;

  /**
   * <p>The revision of an asset.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>Specifies whether to publish or unpublish a listing.</p>
   * @public
   */
  action: ChangeAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateListingChangeSetOutput {
  /**
   * <p>The ID of the listing (a record of an asset at a given time).</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The revision of a listing.</p>
   * @public
   */
  listingRevision: string | undefined;

  /**
   * <p>Specifies the status of the listing.</p>
   * @public
   */
  status: ListingStatus | undefined;
}

/**
 * <p>Specifies the account/Region that is to be used during project creation for a particular blueprint.</p>
 * @public
 */
export interface EnvironmentResolvedAccount {
  /**
   * <p>The ID of the resolved account.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The name of the resolved Region.</p>
   * @public
   */
  regionName: string | undefined;

  /**
   * <p>The ID of the account pool.</p>
   * @public
   */
  sourceAccountPoolId?: string | undefined;
}

/**
 * <p>The environment configuration user parameters.</p>
 * @public
 */
export interface EnvironmentConfigurationUserParameter {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>Specifies the account/Region that is to be used during project creation for a particular blueprint.</p>
   * @public
   */
  environmentResolvedAccount?: EnvironmentResolvedAccount | undefined;

  /**
   * <p>The environment configuration name.</p>
   * @public
   */
  environmentConfigurationName?: string | undefined;

  /**
   * <p>The environment parameters.</p>
   * @public
   */
  environmentParameters?: EnvironmentParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this project is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The resource tags of the project.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone project.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit. This parameter is not required and if it is not specified, then the project is created at the root domain unit level.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The ID of the project profile.</p>
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * <p>The user parameters of the project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;
}

/**
 * <p>The environment deployment details.</p>
 * @public
 */
export interface EnvironmentDeploymentDetails {
  /**
   * <p>The overall deployment status of the environment.</p>
   * @public
   */
  overallDeploymentStatus?: OverallDeploymentStatus | undefined;

  /**
   * <p>Environment failure reasons.</p>
   * @public
   */
  environmentFailureReasons?: Record<string, EnvironmentError[]> | undefined;
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
 * @public
 */
export interface ProjectDeletionError {
  /**
   * <p>The code of the project deletion error.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The message of the project deletion error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The resource tag of the project.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key of the resource tag of the project.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the resource tag of the project.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The source of the resource tag of the project.</p>
   * @public
   */
  source: ResourceTagSource | undefined;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the project was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the Amazon DataZone project that was created.</p>
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[] | undefined;

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The resource tags of the project.</p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The glossary terms that can be used in the project.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The project profile ID.</p>
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * <p>The user parameters of the project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * <p>The environment deployment details.</p>
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;
}

/**
 * <p>The details about a project member.</p>
 * @public
 */
export type Member = Member.GroupIdentifierMember | Member.UserIdentifierMember | Member.$UnknownMember;

/**
 * @public
 */
export namespace Member {
  /**
   * <p>The user ID of a project member.</p>
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    groupIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the group of a project member.</p>
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
 * @public
 */
export interface CreateProjectMembershipInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which project membership is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project for which this project membership was created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The project member whose project membership was created.</p>
   * @public
   */
  member: Member | undefined;

  /**
   * <p>The designation of the project membership.</p>
   * @public
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipOutput {}

/**
 * <p>The Amazon Web Services Region.</p>
 * @public
 */
export type Region = Region.RegionNameMember | Region.RegionNamePathMember | Region.$UnknownMember;

/**
 * @public
 */
export namespace Region {
  /**
   * <p>The Amazon Web Services Region name.</p>
   * @public
   */
  export interface RegionNameMember {
    regionName: string;
    regionNamePath?: never;
    $unknown?: never;
  }

  /**
   * <p>The region name path.</p>
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
 * <p>The environment configuration parameter.</p>
 * @public
 */
export interface EnvironmentConfigurationParameter {
  /**
   * <p>The name of the environment configuration parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the environment configuration parameter.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>Specifies whether the environment parameter is editable.</p>
   * @public
   */
  isEditable?: boolean | undefined;
}

/**
 * <p>The details of the environment configuration parameter.</p>
 * @public
 */
export interface EnvironmentConfigurationParametersDetails {
  /**
   * <p>Ssm path environment configuration parameters.</p>
   * @public
   */
  ssmPath?: string | undefined;

  /**
   * <p>The parameter overrides.</p>
   * @public
   */
  parameterOverrides?: EnvironmentConfigurationParameter[] | undefined;

  /**
   * <p>The resolved environment configuration parameters.</p>
   * @public
   */
  resolvedParameters?: EnvironmentConfigurationParameter[] | undefined;
}

/**
 * <p>The configuration of an environment.</p>
 * @public
 */
export interface EnvironmentConfiguration {
  /**
   * <p>The environment name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The environment blueprint ID.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The environment description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deployment mode of the environment.</p>
   * @public
   */
  deploymentMode?: DeploymentMode | undefined;

  /**
   * <p>The configuration parameters of the environment.</p>
   * @public
   */
  configurationParameters?: EnvironmentConfigurationParametersDetails | undefined;

  /**
   * <p>The Amazon Web Services account of the environment.</p>
   * @public
   */
  awsAccount?: AwsAccount | undefined;

  /**
   * <p>The account pools used by a custom project profile.</p>
   * @public
   */
  accountPools?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Region of the environment.</p>
   * @public
   */
  awsRegion?: Region | undefined;

  /**
   * <p>The deployment order of the environment.</p>
   * @public
   */
  deploymentOrder?: number | undefined;
}

/**
 * <p>The resource tag parameter of the project profile.</p>
 * @public
 */
export interface ResourceTagParameter {
  /**
   * <p>The key of the resource tag parameter of the project profile.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the resource tag parameter key of the project profile.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>Specifies whether the value of the resource tag parameter of the project profile is editable at the project level.</p>
   * @public
   */
  isValueEditable: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProjectProfileInput {
  /**
   * <p>A domain ID of the project profile.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Project profile name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of a project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Project profile status.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The resource tags of the project profile.</p>
   * @public
   */
  projectResourceTags?: ResourceTagParameter[] | undefined;

  /**
   * <p>Specifies whether custom project resource tags are supported.</p>
   * @public
   */
  allowCustomProjectResourceTags?: boolean | undefined;

  /**
   * <p>Field viewable through the UI that provides a project user with the allowed resource tag specifications.</p>
   * @public
   */
  projectResourceTagsDescription?: string | undefined;

  /**
   * <p>Environment configurations of the project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>A domain unit ID of the project profile.</p>
   * @public
   */
  domainUnitIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectProfileOutput {
  /**
   * <p>The ID of the domain where a project profile is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Project profile ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Project profile name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A project profile description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Project profile status.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The resource tags of the project profile.</p>
   * @public
   */
  projectResourceTags?: ResourceTagParameter[] | undefined;

  /**
   * <p>Specifies whether custom project resource tags are supported.</p>
   * @public
   */
  allowCustomProjectResourceTags?: boolean | undefined;

  /**
   * <p>Field viewable through the UI that provides a project user with the allowed resource tag specifications.</p>
   * @public
   */
  projectResourceTagsDescription?: string | undefined;

  /**
   * <p>Environment configurations of a project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>A user who created a project profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>A timestamp at which a project profile is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A timestamp when a project profile was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ID of the domain unit where a project profile is created.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * <p>The enforcement details of a glossary term.</p>
 * @public
 */
export interface GlossaryTermEnforcementDetail {
  /**
   * <p>The ID of the required glossary term.</p>
   * @public
   */
  requiredGlossaryTermIds?: string[] | undefined;
}

/**
 * <p>The reference of a metadata form.</p>
 * @public
 */
export interface MetadataFormReference {
  /**
   * <p>The type ID of the metadata form reference.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the metadata form reference.</p>
   * @public
   */
  typeRevision: string | undefined;
}

/**
 * <p>The enforcement details of a metadata form.</p>
 * @public
 */
export interface MetadataFormEnforcementDetail {
  /**
   * <p>The required metadata forms.</p>
   * @public
   */
  requiredMetadataForms?: MetadataFormReference[] | undefined;
}

/**
 * <p>The details of a rule.</p>
 * @public
 */
export type RuleDetail =
  | RuleDetail.GlossaryTermEnforcementDetailMember
  | RuleDetail.MetadataFormEnforcementDetailMember
  | RuleDetail.$UnknownMember;

/**
 * @public
 */
export namespace RuleDetail {
  /**
   * <p>The enforcement detail of the metadata form.</p>
   * @public
   */
  export interface MetadataFormEnforcementDetailMember {
    metadataFormEnforcementDetail: MetadataFormEnforcementDetail;
    glossaryTermEnforcementDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>The enforcement details of a glossary term that's part of the metadata rule.</p>
   * @public
   */
  export interface GlossaryTermEnforcementDetailMember {
    metadataFormEnforcementDetail?: never;
    glossaryTermEnforcementDetail: GlossaryTermEnforcementDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataFormEnforcementDetail?: never;
    glossaryTermEnforcementDetail?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataFormEnforcementDetail: (value: MetadataFormEnforcementDetail) => T;
    glossaryTermEnforcementDetail: (value: GlossaryTermEnforcementDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies projects in which the rule is created.</p>
 * @public
 */
export interface ProjectsForRule {
  /**
   * <p>The selection mode of the rule.</p>
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * <p>The specific projects in which the rule is created.</p>
   * @public
   */
  specificProjects?: string[] | undefined;
}

/**
 * <p>The scope of a rule.</p>
 * @public
 */
export interface RuleScope {
  /**
   * <p>The asset type included in the rule scope.</p>
   * @public
   */
  assetType?: AssetTypesForRule | undefined;

  /**
   * <p>The data product included in the rule scope.</p>
   * @public
   */
  dataProduct?: boolean | undefined;

  /**
   * <p>The project included in the rule scope.</p>
   * @public
   */
  project?: ProjectsForRule | undefined;
}

/**
 * <p>The target for the domain unit.</p>
 * @public
 */
export interface DomainUnitTarget {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>Specifies whether to apply a rule to the child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The target of the rule.</p>
 * @public
 */
export type RuleTarget = RuleTarget.DomainUnitTargetMember | RuleTarget.$UnknownMember;

/**
 * @public
 */
export namespace RuleTarget {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  export interface DomainUnitTargetMember {
    domainUnitTarget: DomainUnitTarget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    domainUnitTarget?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    domainUnitTarget: (value: DomainUnitTarget) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRuleInput {
  /**
   * <p>The ID of the domain where the rule is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The target of the rule.</p>
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action: RuleAction | undefined;

  /**
   * <p>The scope of the rule.</p>
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * <p>The detail of the rule.</p>
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleOutput {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the rule.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>The target of the rule.</p>
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action: RuleAction | undefined;

  /**
   * <p>The scope of the rule.</p>
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * <p>The detail of the rule.</p>
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * <p>The target type of the rule.</p>
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the rule is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who creates the rule.</p>
   * @public
   */
  createdBy: string | undefined;
}

/**
 * <p>A revision to be made to an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevisionInput {
  /**
   * <p>An identifier of revision to be made to an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The details of a revision to be made to an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is to be granted.</p>
 * @public
 */
export type GrantedEntityInput = GrantedEntityInput.ListingMember | GrantedEntityInput.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntityInput {
  /**
   * <p>The listing for which a subscription is to be granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevisionInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    listing: (value: ListingRevisionInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the subscription grant is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   * @public
   */
  subscriptionTargetIdentifier?: string | undefined;

  /**
   * <p>The entity to which the subscription is to be granted.</p>
   * @public
   */
  grantedEntity: GrantedEntityInput | undefined;

  /**
   * <p>The names of the assets for which the subscription grant is created.</p>
   * @public
   */
  assetTargetNames?: AssetTargetNameMap[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
 * @public
 */
export interface FailureCause {
  /**
   * <p>The description of the error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The details of the asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAsset {
  /**
   * <p>The identifier of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetRevision: string | undefined;

  /**
   * <p>The status of the asset for which the subscription grant is created.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>The target name of the asset for which the subscription grant is created.</p>
   * @public
   */
  targetName?: string | undefined;

  /**
   * <p>The failure cause included in the details of the asset for which the subscription grant is created.</p>
   * @public
   */
  failureCause?: FailureCause | undefined;

  /**
   * <p>The timestamp of when the subscription grant to the asset is created.</p>
   * @public
   */
  grantedTimestamp?: Date | undefined;

  /**
   * <p>The failure timestamp included in the details of the asset for which the subscription grant is created.</p>
   * @public
   */
  failureTimestamp?: Date | undefined;

  /**
   * <p>The asset scope of the subscribed asset.</p>
   * @public
   */
  assetScope?: AssetScope | undefined;

  /**
   * <p>The asset permissions.</p>
   * @public
   */
  permissions?: Permissions | undefined;
}

/**
 * <p>A revision of an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevision {
  /**
   * <p>An identifier of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The details of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is granted.</p>
 * @public
 */
export type GrantedEntity = GrantedEntity.ListingMember | GrantedEntity.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntity {
  /**
   * <p>The listing for which a subscription is granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevision;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    listing: (value: ListingRevision) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriptionGrantOutput {
  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription grant.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A timestamp of when the subscription grant is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A timestamp of when the subscription grant was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The environment ID for which subscription grant is created.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is granted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * <p>The identifier of the subscription grant.</p>
   *
   * @deprecated Multiple subscriptions can exist for a single grant
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * <p>The published asset for which the subscription grant is to be created.</p>
 * @public
 */
export interface SubscribedListingInput {
  /**
   * <p>The identifier of the published asset for which the subscription grant is to be created.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The details of the subscribed group.</p>
 * @public
 */
export interface SubscribedGroupInput {
  /**
   * <p>The ID of the subscribed group.</p>
   * @public
   */
  identifier?: string | undefined;
}

/**
 * <p>The project that is to be given a subscription grant.</p>
 * @public
 */
export interface SubscribedProjectInput {
  /**
   * <p>The identifier of the project that is to be given a subscription grant.</p>
   * @public
   */
  identifier?: string | undefined;
}

/**
 * <p>The subscribed user.</p>
 * @public
 */
export interface SubscribedUserInput {
  /**
   * <p>The ID of the subscribed user.</p>
   * @public
   */
  identifier?: string | undefined;
}

/**
 * <p>The principal that is to be given a subscriptiong grant.</p>
 * @public
 */
export type SubscribedPrincipalInput =
  | SubscribedPrincipalInput.GroupMember
  | SubscribedPrincipalInput.ProjectMember
  | SubscribedPrincipalInput.UserMember
  | SubscribedPrincipalInput.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipalInput {
  /**
   * <p>The project that is to be given a subscription grant.</p>
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProjectInput;
    user?: never;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The subscribed user.</p>
   * @public
   */
  export interface UserMember {
    project?: never;
    user: SubscribedUserInput;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The subscribed group.</p>
   * @public
   */
  export interface GroupMember {
    project?: never;
    user?: never;
    group: SubscribedGroupInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    project: (value: SubscribedProjectInput) => T;
    user: (value: SubscribedUserInput) => T;
    group: (value: SubscribedGroupInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriptionRequestInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription request is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The Amazon DataZone principals for whom the subscription request is created.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipalInput[] | undefined;

  /**
   * <p>The published asset for which the subscription grant is to be created.</p>
   * @public
   */
  subscribedListings: SubscribedListingInput[] | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata form included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormInput[] | undefined;

  /**
   * <p>The asset permissions of the subscription request.</p>
   * @public
   */
  assetPermissions?: AssetPermission[] | undefined;

  /**
   * <p>The asset scopes of the subscription request.</p>
   * @public
   */
  assetScopes?: AcceptedAssetScope[] | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionRequestOutput {
  /**
   * <p>The ID of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in whcih the subscription request is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>A timestamp of when the subscription request is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals of the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The published asset for which the subscription grant is to be created.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The ID of the reviewer of the subscription request.</p>
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * <p>The decision comment of the subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The ID of the existing subscription.</p>
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * <p>The metadata form included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * <p>The details of the subscription target configuration.</p>
 * @public
 */
export interface SubscriptionTargetForm {
  /**
   * <p>The form name included in the subscription target configuration.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The content of the subscription target configuration.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which subscription target is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which subscription target is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The configuration of the subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The authorized principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The manage access role that is used to create the subscription target.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The asset types that can be included in the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetOutput {
  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorised principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>???</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment in which the subscription target was created.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription target.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The timestamp of when the subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The manage access role with which the subscription target was created.</p>
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * <p>The asset types that can be included in the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration of the subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface CreateUserProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user for which the user profile is created.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The user type of the user for which the user profile is created.</p>
   * @public
   */
  userType?: UserType | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the user profile.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus | undefined;

  /**
   * <p>The user profile details.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface DeleteDataProductInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data product is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data product that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProductOutput {}

/**
 * @public
 */
export interface GetDataProductInput {
  /**
   * <p>The ID of the domain where the data product lives.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetDataProductOutput {
  /**
   * <p>The ID of the domain where the data product lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data product.</p>
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * <p>The description of the data product.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The timestamp at which the data product is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the first revision of the data product is created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The user who created the first revision of the data product.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}
