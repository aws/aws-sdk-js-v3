// smithy-typescript generated code
import type {
  BlueprintCategory,
  ConfigurationStatus,
  ConnectionScope,
  ConnectionType,
  DataAssetActivityStatus,
  DataProductStatus,
  DataSourceRunStatus,
  DataSourceRunType,
  DataSourceStatus,
  DataZoneEntityType,
  DesignationType,
  DomainStatus,
  DomainVersion,
  EdgeDirection,
  EnableSetting,
  EnvironmentStatus,
  FilterStatus,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GovernedEntityType,
  GroupProfileStatus,
  JobRunMode,
  JobRunStatus,
  JobType,
  LineageEventProcessingStatus,
  LineageImportStatus,
  ListingStatus,
  ManagedPolicyType,
  MetadataGenerationRunStatus,
  MetadataGenerationRunType,
  MetadataGenerationTargetType,
  NotificationResourceType,
  NotificationRole,
  NotificationType,
  OpenLineageRunState,
  ProjectStatus,
  ResolutionStrategy,
  RuleAction,
  RuleScopeSelectionMode,
  RuleTargetType,
  RuleType,
  SelfGrantStatus,
  SortFieldAccountPool,
  SortFieldConnection,
  SortFieldProject,
  SortKey,
  SortOrder,
  Status,
  SubscriptionGrantCreationMode,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  TaskStatus,
  TimeSeriesEntityType,
  UserDesignation,
  UserProfileStatus,
  UserProfileType,
  UserType,
} from "./enums";
import type {
  AcceptedAssetScope,
  AccountInfo,
  AccountPoolSummary,
  AccountSource,
  ActionParameters,
  AssetFilterSummary,
  AssetListing,
  AssetPermission,
  AssetRevision,
  AssetScope,
  AssetTargetNameMap,
  AssetTypesForRule,
  ConfigurableEnvironmentAction,
  Configuration,
  ConnectionCredentials,
  ConnectionPropertiesOutput,
  ConnectionSummary,
  CustomParameter,
  DataProductItem,
  DataSourceConfigurationInput,
  DataSourceConfigurationOutput,
  DataSourceErrorMessage,
  Deployment,
  DeploymentProperties,
  DetailedGlossaryTerm,
  DomainUnitOwnerProperties,
  EnvironmentConfiguration,
  EnvironmentConfigurationUserParameter,
  EnvironmentDeploymentDetails,
  FormInput,
  FormOutput,
  MatchRationaleItem,
  Member,
  Model,
  Permissions,
  PhysicalEndpoint,
  PolicyGrantDetail,
  PolicyGrantPrincipal,
  ProjectDeletionError,
  ProvisioningProperties,
  RecommendationConfiguration,
  Resource,
  ResourceTag,
  ResourceTagParameter,
  ScheduleConfiguration,
  SingleSignOn,
  SubscribedListing,
  SubscribedPrincipal,
  TermRelations,
  TimeSeriesDataPointSummaryFormOutput,
  UserProfileDetails,
} from "./models_0";

/**
 * @public
 */
export interface CreateProjectProfileOutput {
  /**
   * The ID of the domain where a project profile is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Project profile ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Project profile name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A project profile description.
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
   * Environment configurations of a project profile.
   *
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * A user who created a project profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * A timestamp at which a project profile is created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * A timestamp when a project profile was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ID of the domain unit where a project profile is created.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * The enforcement details of a glossary term.
 *
 * @public
 */
export interface GlossaryTermEnforcementDetail {
  /**
   * The ID of the required glossary term.
   *
   * @public
   */
  requiredGlossaryTermIds?: string[] | undefined;
}

/**
 * The reference of a metadata form.
 *
 * @public
 */
export interface MetadataFormReference {
  /**
   * The type ID of the metadata form reference.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The type revision of the metadata form reference.
   *
   * @public
   */
  typeRevision: string | undefined;
}

/**
 * The enforcement details of a metadata form.
 *
 * @public
 */
export interface MetadataFormEnforcementDetail {
  /**
   * The required metadata forms.
   *
   * @public
   */
  requiredMetadataForms?: MetadataFormReference[] | undefined;
}

/**
 * The details of a rule.
 *
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
   * The enforcement detail of the metadata form.
   *
   * @public
   */
  export interface MetadataFormEnforcementDetailMember {
    metadataFormEnforcementDetail: MetadataFormEnforcementDetail;
    glossaryTermEnforcementDetail?: never;
    $unknown?: never;
  }

  /**
   * The enforcement details of a glossary term that's part of the metadata rule.
   *
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
 * Specifies projects in which the rule is created.
 *
 * @public
 */
export interface ProjectsForRule {
  /**
   * The selection mode of the rule.
   *
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * The specific projects in which the rule is created.
   *
   * @public
   */
  specificProjects?: string[] | undefined;
}

/**
 * The scope of a rule.
 *
 * @public
 */
export interface RuleScope {
  /**
   * The asset type included in the rule scope.
   *
   * @public
   */
  assetType?: AssetTypesForRule | undefined;

  /**
   * The data product included in the rule scope.
   *
   * @public
   */
  dataProduct?: boolean | undefined;

  /**
   * The project included in the rule scope.
   *
   * @public
   */
  project?: ProjectsForRule | undefined;
}

/**
 * The target for the domain unit.
 *
 * @public
 */
export interface DomainUnitTarget {
  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * Specifies whether to apply a rule to the child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * The target of the rule.
 *
 * @public
 */
export type RuleTarget =
  | RuleTarget.DomainUnitTargetMember
  | RuleTarget.$UnknownMember;

/**
 * @public
 */
export namespace RuleTarget {
  /**
   * The ID of the domain unit.
   *
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
   * The ID of the domain where the rule is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The target of the rule.
   *
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action: RuleAction | undefined;

  /**
   * The scope of the rule.
   *
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * The detail of the rule.
   *
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * The description of the rule.
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
 * @public
 */
export interface CreateRuleOutput {
  /**
   * The ID of the rule.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The target of the rule.
   *
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action: RuleAction | undefined;

  /**
   * The scope of the rule.
   *
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * The detail of the rule.
   *
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * The target type of the rule.
   *
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the rule is created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who creates the rule.
   *
   * @public
   */
  createdBy: string | undefined;
}

/**
 * A revision to be made to an asset published in a Amazon DataZone catalog.
 *
 * @public
 */
export interface ListingRevisionInput {
  /**
   * An identifier of revision to be made to an asset published in a Amazon DataZone catalog.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The details of a revision to be made to an asset published in a Amazon DataZone catalog.
   *
   * @public
   */
  revision: string | undefined;
}

/**
 * The details of a listing for which a subscription is to be granted.
 *
 * @public
 */
export type GrantedEntityInput =
  | GrantedEntityInput.ListingMember
  | GrantedEntityInput.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntityInput {
  /**
   * The listing for which a subscription is to be granted.
   *
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
   * The ID of the Amazon DataZone domain in which the subscription grant is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment in which the subscription grant is created.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the subscription target for which the subscription grant is created.
   *
   * @public
   */
  subscriptionTargetIdentifier?: string | undefined;

  /**
   * The entity to which the subscription is to be granted.
   *
   * @public
   */
  grantedEntity: GrantedEntityInput | undefined;

  /**
   * The names of the assets for which the subscription grant is created.
   *
   * @public
   */
  assetTargetNames?: AssetTargetNameMap[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Specifies the error message that is returned if the operation cannot be successfully completed.
 *
 * @public
 */
export interface FailureCause {
  /**
   * The description of the error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The details of the asset for which the subscription grant is created.
 *
 * @public
 */
export interface SubscribedAsset {
  /**
   * The identifier of the asset for which the subscription grant is created.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The revision of the asset for which the subscription grant is created.
   *
   * @public
   */
  assetRevision: string | undefined;

  /**
   * The status of the asset for which the subscription grant is created.
   *
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * The target name of the asset for which the subscription grant is created.
   *
   * @public
   */
  targetName?: string | undefined;

  /**
   * The failure cause included in the details of the asset for which the subscription grant is created.
   *
   * @public
   */
  failureCause?: FailureCause | undefined;

  /**
   * The timestamp of when the subscription grant to the asset is created.
   *
   * @public
   */
  grantedTimestamp?: Date | undefined;

  /**
   * The failure timestamp included in the details of the asset for which the subscription grant is created.
   *
   * @public
   */
  failureTimestamp?: Date | undefined;

  /**
   * The asset scope of the subscribed asset.
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
 * A revision of an asset published in a Amazon DataZone catalog.
 *
 * @public
 */
export interface ListingRevision {
  /**
   * An identifier of a revision of an asset published in a Amazon DataZone catalog.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The details of a revision of an asset published in a Amazon DataZone catalog.
   *
   * @public
   */
  revision: string | undefined;
}

/**
 * The details of a listing for which a subscription is granted.
 *
 * @public
 */
export type GrantedEntity =
  | GrantedEntity.ListingMember
  | GrantedEntity.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntity {
  /**
   * The listing for which a subscription is granted.
   *
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
   * The ID of the subscription grant.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription grant.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription grant.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription grant is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A timestamp of when the subscription grant is created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * A timestamp of when the subscription grant was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The environment ID for which subscription grant is created.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The ID of the subscription target for which the subscription grant is created.
   *
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * The entity to which the subscription is granted.
   *
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * The status of the subscription grant.
   *
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * The assets for which the subscription grant is created.
   *
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * The identifier of the subscription grant.
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * The published asset for which the subscription grant is to be created.
 *
 * @public
 */
export interface SubscribedListingInput {
  /**
   * The identifier of the published asset for which the subscription grant is to be created.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The details of the subscribed group.
 *
 * @public
 */
export interface SubscribedGroupInput {
  /**
   * The ID of the subscribed group.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * The details of the subscribed IAM principal.
 *
 * @public
 */
export interface SubscribedIamPrincipalInput {
  /**
   * The ARN of the subscribed IAM principal.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * The project that is to be given a subscription grant.
 *
 * @public
 */
export interface SubscribedProjectInput {
  /**
   * The identifier of the project that is to be given a subscription grant.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * The subscribed user.
 *
 * @public
 */
export interface SubscribedUserInput {
  /**
   * The ID of the subscribed user.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * The principal that is to be given a subscriptiong grant.
 *
 * @public
 */
export type SubscribedPrincipalInput =
  | SubscribedPrincipalInput.GroupMember
  | SubscribedPrincipalInput.IamMember
  | SubscribedPrincipalInput.ProjectMember
  | SubscribedPrincipalInput.UserMember
  | SubscribedPrincipalInput.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipalInput {
  /**
   * The project that is to be given a subscription grant.
   *
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProjectInput;
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
    user: SubscribedUserInput;
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
    group: SubscribedGroupInput;
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
    iam: SubscribedIamPrincipalInput;
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
    project: (value: SubscribedProjectInput) => T;
    user: (value: SubscribedUserInput) => T;
    group: (value: SubscribedGroupInput) => T;
    iam: (value: SubscribedIamPrincipalInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriptionRequestInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription request is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The Amazon DataZone principals for whom the subscription request is created.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipalInput[] | undefined;

  /**
   * The published asset for which the subscription grant is to be created.
   *
   * @public
   */
  subscribedListings: SubscribedListingInput[] | undefined;

  /**
   * The reason for the subscription request.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The metadata form included in the subscription request.
   *
   * @public
   */
  metadataForms?: FormInput[] | undefined;

  /**
   * The asset permissions of the subscription request.
   *
   * @public
   */
  assetPermissions?: AssetPermission[] | undefined;

  /**
   * The asset scopes of the subscription request.
   *
   * @public
   */
  assetScopes?: AcceptedAssetScope[] | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionRequestOutput {
  /**
   * The ID of the subscription request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription request.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in whcih the subscription request is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * A timestamp of when the subscription request is created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the subscription request.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * The subscribed principals of the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * The published asset for which the subscription grant is to be created.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * The ID of the reviewer of the subscription request.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * The decision comment of the subscription request.
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
   * The metadata form included in the subscription request.
   *
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * The details of the subscription target configuration.
 *
 * @public
 */
export interface SubscriptionTargetForm {
  /**
   * The form name included in the subscription target configuration.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The content of the subscription target configuration.
   *
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetInput {
  /**
   * The ID of the Amazon DataZone domain in which subscription target is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment in which subscription target is created.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The name of the subscription target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the subscription target.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The configuration of the subscription target.
   *
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * The authorized principals of the subscription target.
   *
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * The manage access role that is used to create the subscription target.
   *
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * The asset types that can be included in the subscription target.
   *
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * The provider of the subscription target.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetOutput {
  /**
   * The ID of the subscription target.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The authorised principals of the subscription target.
   *
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription target was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * ???
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of the environment in which the subscription target was created.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name of the subscription target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the subscription target.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription target.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription target.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the subscription target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription target was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The manage access role with which the subscription target was created.
   *
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * The asset types that can be included in the subscription target.
   *
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * The configuration of the subscription target.
   *
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * The provider of the subscription target.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface CreateUserProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which a user profile is created.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the user for which the user profile is created.
   *
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * The user type of the user for which the user profile is created.
   *
   * @public
   */
  userType?: UserType | undefined;

  /**
   * The session name for IAM role sessions.
   *
   * @public
   */
  sessionName?: string | undefined;

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
export interface CreateUserProfileOutput {
  /**
   * The identifier of the Amazon DataZone domain in which a user profile is created.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the user profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the user profile.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The status of the user profile.
   *
   * @public
   */
  status?: UserProfileStatus | undefined;

  /**
   * The user profile details.
   *
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface DeleteDataProductInput {
  /**
   * The ID of the Amazon DataZone domain in which the data product is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data product that is deleted.
   *
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
   * The ID of the domain where the data product lives.
   *
   * @public
   */
  domainIdentifier: string | undefined;

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
}

/**
 * @public
 */
export interface GetDataProductOutput {
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
   * The timestamp at which the data product is created.
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
 * The additional attributes of an Amazon DataZone data product.
 *
 * @public
 */
export interface DataProductItemAdditionalAttributes {
  /**
   * List of rationales indicating why this item was matched by search.
   *
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * The summary of the listing of the data product.
 *
 * @public
 */
export interface ListingSummary {
  /**
   * The ID of the data product listing.
   *
   * @public
   */
  listingId?: string | undefined;

  /**
   * The revision of the data product listing.
   *
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * The glossary terms of the data product.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;
}

/**
 * The data product listing.
 *
 * @public
 */
export interface DataProductListing {
  /**
   * The ID of the data product listing.
   *
   * @public
   */
  dataProductId?: string | undefined;

  /**
   * The revision of the data product listing.
   *
   * @public
   */
  dataProductRevision?: string | undefined;

  /**
   * The timestamp at which the data product listing was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The metadata forms of the data product listing.
   *
   * @public
   */
  forms?: string | undefined;

  /**
   * The glossary terms of the data product listing.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The ID of the owning project of the data product listing.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The data assets of the data product listing.
   *
   * @public
   */
  items?: ListingSummary[] | undefined;
}

/**
 * The additional attributes of the asset of the data product.
 *
 * @public
 */
export interface DataProductListingItemAdditionalAttributes {
  /**
   * The metadata forms of the asset of the data product.
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
}

/**
 * The results of the data product summary.
 *
 * @public
 */
export interface ListingSummaryItem {
  /**
   * The ID of the data product listing.
   *
   * @public
   */
  listingId?: string | undefined;

  /**
   * The revision of the data product listing.
   *
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * The glossary terms of the data product listing.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;
}

/**
 * The asset of the data product listing.
 *
 * @public
 */
export interface DataProductListingItem {
  /**
   * The ID of the listing.
   *
   * @public
   */
  listingId?: string | undefined;

  /**
   * The revision of the listing.
   *
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * The name of the asset of the data product.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The entity ID of the asset of the asset of the data product.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The revision of the asset of the asset of the data product.
   *
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * The description of the asset of the asset of the data product.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the asset of the data product listing was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the listing was created.
   *
   * @public
   */
  listingCreatedBy?: string | undefined;

  /**
   * The user who updated the listing.
   *
   * @public
   */
  listingUpdatedBy?: string | undefined;

  /**
   * The glossary terms of the asset of the asset of the data product.
   *
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * The ID of the owning project of the asset of the data product.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The additional attributes of the asset of the data product.
   *
   * @public
   */
  additionalAttributes?: DataProductListingItemAdditionalAttributes | undefined;

  /**
   * The data of the asset of the data product.
   *
   * @public
   */
  items?: ListingSummaryItem[] | undefined;
}

/**
 * The data product.
 *
 * @public
 */
export interface DataProductResultItem {
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
  owningProjectId: string | undefined;

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
   * The timestamp at which first revision of the data product was created.
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

  /**
   * The additional attributes of an Amazon DataZone data product.
   *
   * @public
   */
  additionalAttributes?: DataProductItemAdditionalAttributes | undefined;
}

/**
 * The data product revision.
 *
 * @public
 */
export interface DataProductRevision {
  /**
   * The ID of the domain where the data product revision lives.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the data product revision.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The data product revision.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The timestamp at which the data product revision was created.
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
}

/**
 * @public
 */
export interface DeleteDataSourceInput {
  /**
   * The ID of the Amazon DataZone domain in which the data source is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data source that is deleted.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @deprecated (since 2024-12-02) This field is no longer required for idempotency.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source.
   *
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * The details for the self granting status.
 *
 * @public
 */
export interface SelfGrantStatusDetail {
  /**
   * The name of the database used for the data source.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The name of the schema used in the data source.
   *
   * @public
   */
  schemaName?: string | undefined;

  /**
   * The self granting status of the data source.
   *
   * @public
   */
  status: SelfGrantStatus | undefined;

  /**
   * The reason for why the operation failed.
   *
   * @public
   */
  failureCause?: string | undefined;
}

/**
 * The details of the self granting status.
 *
 * @public
 */
export interface GlueSelfGrantStatusOutput {
  /**
   * The details for the self granting status for a Glue data source.
   *
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * The details for the self granting status for an Amazon Redshift data source.
 *
 * @public
 */
export interface RedshiftSelfGrantStatusOutput {
  /**
   * The details for the self granting status for an Amazon Redshift data source.
   *
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * The details for the self granting status for a data source.
 *
 * @public
 */
export type SelfGrantStatusOutput =
  | SelfGrantStatusOutput.GlueSelfGrantStatusMember
  | SelfGrantStatusOutput.RedshiftSelfGrantStatusMember
  | SelfGrantStatusOutput.$UnknownMember;

/**
 * @public
 */
export namespace SelfGrantStatusOutput {
  /**
   * The details for the self granting status for a Glue data source.
   *
   * @public
   */
  export interface GlueSelfGrantStatusMember {
    glueSelfGrantStatus: GlueSelfGrantStatusOutput;
    redshiftSelfGrantStatus?: never;
    $unknown?: never;
  }

  /**
   * The details for the self granting status for an Amazon Redshift data source.
   *
   * @public
   */
  export interface RedshiftSelfGrantStatusMember {
    glueSelfGrantStatus?: never;
    redshiftSelfGrantStatus: RedshiftSelfGrantStatusOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueSelfGrantStatus?: never;
    redshiftSelfGrantStatus?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glueSelfGrantStatus: (value: GlueSelfGrantStatusOutput) => T;
    redshiftSelfGrantStatus: (value: RedshiftSelfGrantStatusOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeleteDataSourceOutput {
  /**
   * The ID of the data source that is deleted.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of this data source.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * The type of this data source.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name of the data source that is deleted.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the data source that is deleted.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the data source is deleted.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project in which this data source exists and from which it's deleted.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of the environemnt associated with this data source.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The ID of the connection that is deleted.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The configuration of the data source that is deleted.
   *
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * The enable setting of the data source that specifies whether the data source is enabled or disabled.
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
   * The asset data forms associated with this data source.
   *
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * The schedule of runs for this data source.
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
   * The timestamp of when the data source was last run.
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
   * The timestamp of when this data source was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when this data source was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Specifies the status of the self-granting functionality.
   *
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;

  /**
   * Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source.
   *
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDataSourceInput {
  /**
   * The ID of the Amazon DataZone domain in which the data source exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone data source.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceOutput {
  /**
   * The ID of the data source.
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
   * The ID of the Amazon DataZone domain in which the data source exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project where the data source creates and publishes assets.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of the environment where this data source creates and publishes assets,
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
   * The configuration of the data source.
   *
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * The recommendation configuration of the data source.
   *
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * Specifies whether this data source is enabled or not.
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
   * The metadata forms attached to the assets created by this data source.
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
   * The status of the last run of the data source.
   *
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * The timestamp of the last run of the data source.
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
   * The number of assets created by the data source during its last run.
   *
   * @public
   */
  lastRunAssetCount?: number | undefined;

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

  /**
   * Specifies the status of the self-granting functionality.
   *
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesInput {
  /**
   * The identifier of the Amazon DataZone domain in which to list the data sources.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project in which to list data sources.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The identifier of the environment in which to list the data sources.
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
   * The type of the data source.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * When the number of data sources is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of data sources, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSources` to list the next set of data sources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of data sources to return in a single call to `ListDataSources`. When the number of data sources to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListDataSources` to list the next set of data sources.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of the data source.
 *
 * @public
 */
export interface DataSourceSummary {
  /**
   * The ID of the Amazon DataZone domain in which the data source exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the environment in which the data source exists.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The connection ID that's part of the data source summary.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The ID of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the data source.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * Specifies whether the data source is enabled.
   *
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * The details of the schedule of the data source runs.
   *
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * The status of the last data source run.
   *
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * The timestamp of when the data source run was last performed.
   *
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * The details of the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The count of the assets created during the last data source run.
   *
   * @public
   */
  lastRunAssetCount?: number | undefined;

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

  /**
   * The data source description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesOutput {
  /**
   * The results of the `ListDataSources` action.
   *
   * @public
   */
  items: DataSourceSummary[] | undefined;

  /**
   * When the number of data sources is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of data sources, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSources` to list the next set of data sources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceInput {
  /**
   * The identifier of the domain in which to update a data source.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data source to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The enable setting to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * The publish on import setting to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * The asset forms to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  assetFormsInput?: FormInput[] | undefined;

  /**
   * The schedule to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * The configuration to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  configuration?: DataSourceConfigurationInput | undefined;

  /**
   * The recommendation to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source.
   *
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceOutput {
  /**
   * The identifier of the data source to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * The type to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a data source is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project where data source is to be updated.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the environment in which a data source is to be updated.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The connection ID.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The configuration to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * The recommendation to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * The enable setting to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * The publish on import setting to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * The asset forms to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * The schedule to be updated as part of the `UpdateDataSource` action.
   *
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * The last run status of the data source.
   *
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * The timestamp of when the data source was last run.
   *
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * The last run error message of the data source.
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
   * The timestamp of when the data source was updated.
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

  /**
   * Specifies the status of the self-granting functionality.
   *
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;

  /**
   * Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source.
   *
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * The run lineage summary of a data source.
 *
 * @public
 */
export interface DataSourceRunLineageSummary {
  /**
   * The import status that's part of the run lineage summary of a data source.
   *
   * @public
   */
  importStatus?: LineageImportStatus | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRunInput {
  /**
   * The ID of the domain in which this data source run was performed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data source run.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The asset statistics from the data source run.
 *
 * @public
 */
export interface RunStatisticsForAssets {
  /**
   * The `added` statistic for the data source run.
   *
   * @public
   */
  added?: number | undefined;

  /**
   * The `updated` statistic for the data source run.
   *
   * @public
   */
  updated?: number | undefined;

  /**
   * The `unchanged` statistic for the data source run.
   *
   * @public
   */
  unchanged?: number | undefined;

  /**
   * The `skipped` statistic for the data source run.
   *
   * @public
   */
  skipped?: number | undefined;

  /**
   * The `failed` statistic for the data source run.
   *
   * @public
   */
  failed?: number | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRunOutput {
  /**
   * The ID of the domain in which this data source run was performed.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data source for this data source run.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The ID of the data source run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the project in which this data source run occured.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The status of this data source run.
   *
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * The type of this data source run.
   *
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * The configuration snapshot of the data source run.
   *
   * @public
   */
  dataSourceConfigurationSnapshot?: string | undefined;

  /**
   * The asset statistics from this data source run.
   *
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * The summary of the data lineage.
   *
   * @public
   */
  lineageSummary?: DataSourceRunLineageSummary | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The timestamp of when the data source run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when this data source run was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The timestamp of when this data source run started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when this data source run stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunsInput {
  /**
   * The identifier of the Amazon DataZone domain in which to invoke the `ListDataSourceRuns` action.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data source.
   *
   * @public
   */
  dataSourceIdentifier: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status?: DataSourceRunStatus | undefined;

  /**
   * When the number of runs is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of runs, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSourceRuns` to list the next set of runs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of runs to return in a single call to `ListDataSourceRuns`. When the number of runs to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListDataSourceRuns` to list the next set of runs.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a data source run.
 *
 * @public
 */
export interface DataSourceRunSummary {
  /**
   * The identifier of the data source run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the data source of the data source run.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The type of the data source run.
   *
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * The status of the data source run.
   *
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * The project ID of the data source run.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The asset statistics from the data source run.
   *
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * The details of the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The timestamp of when a data source run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when a data source run was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The timestamp of when a data source run was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when a data source run was stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The run lineage summary of a data source.
   *
   * @public
   */
  lineageSummary?: DataSourceRunLineageSummary | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunsOutput {
  /**
   * The results of the `ListDataSourceRuns` action.
   *
   * @public
   */
  items: DataSourceRunSummary[] | undefined;

  /**
   * When the number of runs is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of runs, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSourceRuns` to list the next set of runs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceRunInput {
  /**
   * The identifier of the Amazon DataZone domain in which to start a data source run.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data source.
   *
   * @public
   */
  dataSourceIdentifier: string | undefined;

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
export interface StartDataSourceRunOutput {
  /**
   * The identifier of the Amazon DataZone domain in which to start a data source run.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The identifier of the data source run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The status of the data source run.
   *
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * The type of the data source run.
   *
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * The configuration snapshot of the data source that is being run.
   *
   * @public
   */
  dataSourceConfigurationSnapshot?: string | undefined;

  /**
   * Specifies run statistics for assets.
   *
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The timestamp of when data source run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the data source run was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The timestamp of when the data source run was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when the data source run was stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;
}

/**
 * The data lineage information.
 *
 * @public
 */
export interface LineageInfo {
  /**
   * The data lineage event ID.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The data lineage event status.
   *
   * @public
   */
  eventStatus?: LineageEventProcessingStatus | undefined;

  /**
   * The data lineage error message.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The activity details of the data source run.
 *
 * @public
 */
export interface DataSourceRunActivity {
  /**
   * The database included in the data source run activity.
   *
   * @public
   */
  database: string | undefined;

  /**
   * The identifier of the data source for the data source run activity.
   *
   * @public
   */
  dataSourceRunId: string | undefined;

  /**
   * The technical name included in the data source run activity.
   *
   * @public
   */
  technicalName: string | undefined;

  /**
   * The status of the asset included in the data source run activity.
   *
   * @public
   */
  dataAssetStatus: DataAssetActivityStatus | undefined;

  /**
   * The project ID included in the data source run activity.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the asset included in the data source run activity.
   *
   * @public
   */
  dataAssetId?: string | undefined;

  /**
   * The technical description included in the data source run activity.
   *
   * @public
   */
  technicalDescription?: string | undefined;

  /**
   * The details of the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * The data lineage summary.
   *
   * @public
   */
  lineageSummary?: LineageInfo | undefined;

  /**
   * The timestamp of when data source run activity was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when data source run activity was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAccountPoolInput {
  /**
   * The ID of the domain where the account pool is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the account pool to be deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountPoolOutput {}

/**
 * @public
 */
export interface DeleteAssetFilterInput {
  /**
   * The ID of the domain where you want to delete an asset filter.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The ID of the asset filter that you want to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * The ID of the domain where the connection is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the connection that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionOutput {
  /**
   * The status of the action.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataExportConfigurationInput {
  /**
   * The domain ID for which you want to delete the data export configuration.
   *
   * @public
   */
  domainIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataExportConfigurationOutput {}

/**
 * @public
 */
export interface DeleteDesignationInput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation to delete.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The unique ID of the designation to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDesignationOutput {}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * The ID of the Amazon DataZone domain in which the environment is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment that is to be deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentActionInput {
  /**
   * The ID of the Amazon DataZone domain in which an environment action is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment where an environment action is deleted.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the environment action that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintInput {
  /**
   * The ID of the Amazon DataZone domain in which the blueprint is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the blueprint that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentProfileInput {
  /**
   * The ID of the Amazon DataZone domain in which the environment profile is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment profile that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLineageEventInput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the lineage event.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLineageEventOutput {
  /**
   * The ID of the lineage event.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The progressing status of the lineage event.
   *
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * The ID of the Amazon DataZone domain in which the project is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that is to be deleted.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies the optional flag to delete all child entities within the project.
   *
   * @public
   */
  skipDeletionCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProjectOutput {}

/**
 * @public
 */
export interface DeleteProjectMembershipInput {
  /**
   * The ID of the Amazon DataZone domain where project membership is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone project the membership to which is deleted.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The project member whose project membership is deleted.
   *
   * @public
   */
  member: Member | undefined;
}

/**
 * @public
 */
export interface DeleteProjectMembershipOutput {}

/**
 * @public
 */
export interface DeleteProjectProfileInput {
  /**
   * The ID of the domain where a project profile is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the project profile that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectProfileOutput {}

/**
 * @public
 */
export interface DeleteSubscriptionGrantInput {
  /**
   * The ID of the Amazon DataZone domain where the subscription grant is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the subscription grant that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionGrantOutput {
  /**
   * The ID of the subscription grant that is deleted.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription grant that is deleted.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription grant that is deleted.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription grant is deleted.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The timestamp of when the subscription grant that is deleted was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription grant that is deleted was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ID of the environment in which the subscription grant is deleted.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The ID of the subscription target associated with the subscription grant that is deleted.
   *
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * The entity to which the subscription is deleted.
   *
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * The status of the subscription grant that is deleted.
   *
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * The assets for which the subsctiption grant that is deleted gave access.
   *
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * The identifier of the subsctiption whose subscription grant is to be deleted.
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionRequestInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription request is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the subscription request that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionTargetInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription target is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone environment in which the subscription target is deleted.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the subscription target that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTimeSeriesDataPointsInput {
  /**
   * The ID of the Amazon DataZone domain that houses the asset for which you want to delete a time series form.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset for which you want to delete a time series form.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset for which you want to delete a time series form.
   *
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * The name of the time series form that you want to delete.
   *
   * @public
   */
  formName: string | undefined;

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
export interface DeleteTimeSeriesDataPointsOutput {}

/**
 * @public
 */
export interface DisassociateEnvironmentRoleInput {
  /**
   * The ID of the Amazon DataZone domain in which an environment role is disassociated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment.
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
export interface DisassociateEnvironmentRoleOutput {}

/**
 * @public
 */
export interface DisassociateGovernedTermsInput {
  /**
   * The ID of the domain where you want to disassociate restricted terms from an asset.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of an asset from which you want to disassociate restricted terms.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset from which you want to disassociate restricted terms.
   *
   * @public
   */
  entityType: GovernedEntityType | undefined;

  /**
   * The restricted glossary terms that you want to disassociate from an asset.
   *
   * @public
   */
  governedGlossaryTerms: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateGovernedTermsOutput {}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * The identifier of the Amazon Web Services domain that is to be deleted.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies whether to skip the check that prevents deletion of a domain that still contains resources. When you use this parameter, Amazon DataZone deletes the domain but might not remove its associated resources, which can leave orphaned resources behind. To delete a domain and fully clean up its associated resources, use `cascadeDelete` instead. You can't use this parameter together with `cascadeDelete`.
   *
   * @public
   */
  skipDeletionCheck?: boolean | undefined;

  /**
   * Specifies whether to delete the domain along with all of its associated resources. When you use this parameter, Amazon DataZone deletes the domain and cleanly removes its associated resources without leaving orphaned resources behind. Amazon DataZone reports deletion progress in the `deleteProgress` field. Amazon DataZone reports any resources that it can't delete in the `failureReasons` field of the `GetDomain` response. You can't use this parameter together with `skipDeletionCheck`. If you don't specify a value, the default is `false`.
   *
   * @public
   */
  cascadeDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * The status of the domain.
   *
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * The progress of a domain deletion, including the number of projects that Amazon DataZone successfully deleted. Amazon DataZone returns this structure in the response to a `GetDomain` request while a cascade deletion is in progress.
 *
 * @public
 */
export interface DeleteProgress {
  /**
   * The number of projects that Amazon DataZone successfully deleted during the domain deletion.
   *
   * @public
   */
  successfullyDeletedProjectCount?: number | undefined;
}

/**
 * The details of a resource deletion failure during a cascade deletion of the domain.
 *
 * @public
 */
export interface FailureReason {
  /**
   * The identifier of the resource that failed to delete.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The error message associated with the resource that failed to delete.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * The identifier of the specified Amazon DataZone domain.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * The identifier of the specified Amazon DataZone domain.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the root domain in Amazon Datazone.
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
   * The single sing-on option of the specified Amazon DataZone domain.
   *
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * The domain execution role with which the Amazon DataZone domain is created.
   *
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * The ARN of the specified Amazon DataZone domain.
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
   * The status of the specified Amazon DataZone domain.
   *
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * The URL of the data portal for this Amazon DataZone domain.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The timestamp of when the Amazon DataZone domain was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the Amazon DataZone domain was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The tags specified for the Amazon DataZone domain.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The version of the domain.
   *
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * The service role of the domain.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The list of failure reasons for resources that Amazon DataZone could not delete during a cascade deletion of the domain.
   *
   * @public
   */
  failureReasons?: FailureReason[] | undefined;

  /**
   * The progress of the current domain deletion, including the number of projects that Amazon DataZone successfully deleted.
   *
   * @public
   */
  deleteProgress?: DeleteProgress | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * The status of the data source.
   *
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * The maximum number of domains to return in a single call to `ListDomains`. When the number of domains to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListDomains` to list the next set of domains.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of domains is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of domains, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDomains` to list the next set of domains.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a Amazon DataZone domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A name of an Amazon DataZone domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of an Amazon DataZone domain.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the Amazon DataZone domain.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The identifier of the Amazon Web Services account that manages the domain.
   *
   * @public
   */
  managedAccountId: string | undefined;

  /**
   * The status of the Amazon DataZone domain.
   *
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * The data portal URL for the Amazon DataZone domain.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * A timestamp of when a Amazon DataZone domain was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * A timestamp of when a Amazon DataZone domain was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The domain version.
   *
   * @public
   */
  domainVersion?: DomainVersion | undefined;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * The results of the `ListDomains` action.
   *
   * @public
   */
  items: DomainSummary[] | undefined;

  /**
   * When the number of domains is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of domains, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDomains` to list the next set of domains.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainInput {
  /**
   * The ID of the Amazon Web Services domain that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The description to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The single sign-on option to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * The domain execution role to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * The service role of the domain.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The name to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  name?: string | undefined;

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
export interface UpdateDomainOutput {
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
   * The description to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The single sign-on option of the Amazon DataZone domain.
   *
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * The domain execution role to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * The service role of the domain.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The name to be updated as part of the `UpdateDomain` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the timestamp of when the domain was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDomainUnitInput {
  /**
   * The ID of the domain where you want to delete a domain unit.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the domain unit that you want to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainUnitOutput {}

/**
 * @public
 */
export interface GetDomainUnitInput {
  /**
   * The ID of the domain where you want to get a domain unit.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the domain unit that you want to get.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainUnitOutput {
  /**
   * The ID of the domain unit.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain in which the domain unit lives.
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
   * The time stamp at which the domain unit was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the domain unit was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user who created the domain unit.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The user who last updated the domain unit.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainUnitsForParentInput {
  /**
   * The ID of the domain in which you want to list domain units for a parent domain unit.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the parent domain unit.
   *
   * @public
   */
  parentDomainUnitIdentifier: string | undefined;

  /**
   * The maximum number of domain units to return in a single call to ListDomainUnitsForParent. When the number of domain units to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDomainUnitsForParent to list the next set of domain units.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of domain units is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domain units, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set of domain units.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of the domain unit.
 *
 * @public
 */
export interface DomainUnitSummary {
  /**
   * The name of the domain unit summary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the domain unit summary.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListDomainUnitsForParentOutput {
  /**
   * The results returned by this action.
   *
   * @public
   */
  items: DomainUnitSummary[] | undefined;

  /**
   * When the number of domain units is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domain units, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set of domain units.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainUnitInput {
  /**
   * The ID of the domain where you want to update a domain unit.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the domain unit that you want to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The description of the domain unit that you want to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the domain unit that you want to update.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainUnitOutput {
  /**
   * The ID of the domain unit that you want to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where you want to update the domain unit.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the domain unit that you want to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The owners of the domain unit that you want to update.
   *
   * @public
   */
  owners: DomainUnitOwnerProperties[] | undefined;

  /**
   * The description of the domain unit that you want to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the parent domain unit.
   *
   * @public
   */
  parentDomainUnitId?: string | undefined;

  /**
   * The time stamp at which the domain unit that you want to update was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the domain unit was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user who created the domain unit that you want to update.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The user who last updated the domain unit.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationInput {
  /**
   * The ID of the Amazon DataZone domain in which the blueprint configuration is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the blueprint the configuration of which is deleted.
   *
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationOutput {}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationInput {
  /**
   * The ID of the Amazon DataZone domain where this blueprint exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * He ID of the blueprint.
   *
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * The Lake Formation configuration of the Data Lake blueprint.
 *
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * The role that is used to manage read/write access to the chosen Amazon S3 bucket(s) for Data Lake using Amazon Web Services Lake Formation hybrid access mode.
   *
   * @public
   */
  locationRegistrationRole?: string | undefined;

  /**
   * Specifies certain Amazon S3 locations if you do not want Amazon DataZone to automatically register them in hybrid mode.
   *
   * @public
   */
  locationRegistrationExcludeS3Locations?: string[] | undefined;
}

/**
 * The provisioning configuration of the blueprint.
 *
 * @public
 */
export type ProvisioningConfiguration =
  | ProvisioningConfiguration.LakeFormationConfigurationMember
  | ProvisioningConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningConfiguration {
  /**
   * The Lake Formation configuration of the Data Lake blueprint.
   *
   * @public
   */
  export interface LakeFormationConfigurationMember {
    lakeFormationConfiguration: LakeFormationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lakeFormationConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lakeFormationConfiguration: (value: LakeFormationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of the resource configuration.
 *
 * @public
 */
export interface ResourceConfiguration {
  /**
   * The identifier of the resource configuration.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the resource configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Region of the resource configuration.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The parameters of the resource configuration.
   *
   * @public
   */
  parameters: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationOutput {
  /**
   * The ID of the Amazon DataZone domain where this blueprint exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the blueprint.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The ARN of the provisioning role with which this blueprint is created.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * The environment role permissions boundary.
   *
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * The ARN of the manage access role with which this blueprint is created.
   *
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * The Amazon Web Services regions in which this blueprint is enabled.
   *
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * The regional parameters of the blueprint.
   *
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * Specifies whether user-provided resource configurations are allowed for the environment blueprint.
   *
   * @public
   */
  allowUserProvidedConfigurations?: boolean | undefined;

  /**
   * The timestamp of when this blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when this blueprint was upated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The resource configurations of the environment blueprint.
   *
   * @public
   */
  resourceConfigurations?: ResourceConfiguration[] | undefined;

  /**
   * The provisioning configuration of a blueprint.
   *
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of blueprint configurations to return in a single call to `ListEnvironmentBlueprintConfigurations`. When the number of configurations to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEnvironmentBlueprintConfigurations` to list the next set of configurations.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of blueprint configurations is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of configurations, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentBlueprintConfigurations` to list the next set of configurations.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration details of an environment blueprint.
 *
 * @public
 */
export interface EnvironmentBlueprintConfigurationItem {
  /**
   * The identifier of the Amazon DataZone domain in which an environment blueprint exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the environment blueprint.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The ARN of the provisioning role specified in the environment blueprint configuration.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * The environment role permission boundary.
   *
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * The ARN of the manage access role specified in the environment blueprint configuration.
   *
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * The enabled Amazon Web Services Regions specified in a blueprint configuration.
   *
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * The regional parameters of the environment blueprint.
   *
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * Specifies whether user-provided resource configurations are allowed for the environment blueprint.
   *
   * @public
   */
  allowUserProvidedConfigurations?: boolean | undefined;

  /**
   * The timestamp of when an environment blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the environment blueprint was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The resource configurations of the environment blueprint.
   *
   * @public
   */
  resourceConfigurations?: ResourceConfiguration[] | undefined;

  /**
   * The provisioning configuration of a blueprint.
   *
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsOutput {
  /**
   * The results of the `ListEnvironmentBlueprintConfigurations` action.
   *
   * @public
   */
  items?: EnvironmentBlueprintConfigurationItem[] | undefined;

  /**
   * When the number of blueprint configurations is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of configurations, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentBlueprintConfigurations` to list the next set of configurations.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The resource configuration that is used to configure the environment blueprint.
 *
 * @public
 */
export interface PutResourceConfiguration {
  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the resource configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Region of the resource configuration.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The parameters of the resource configuration.
   *
   * @public
   */
  parameters: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment blueprint.
   *
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * The ARN of the provisioning role.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * The ARN of the manage access role.
   *
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * The environment role permissions boundary.
   *
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * Specifies the enabled Amazon Web Services Regions.
   *
   * @public
   */
  enabledRegions: string[] | undefined;

  /**
   * The regional parameters in the environment blueprint.
   *
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The resource configurations of the environment blueprint.
   *
   * @public
   */
  resourceConfigurations?: PutResourceConfiguration[] | undefined;

  /**
   * Specifies whether user-provided resource configurations are allowed for the environment blueprint.
   *
   * @public
   */
  allowUserProvidedConfigurations?: boolean | undefined;

  /**
   * Region-agnostic environment blueprint parameters.
   *
   * @public
   */
  globalParameters?: Record<string, string> | undefined;

  /**
   * The provisioning configuration of a blueprint.
   *
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationOutput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the environment blueprint.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The ARN of the provisioning role.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * The environment role permissions boundary.
   *
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * The ARN of the manage access role.
   *
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * Specifies the enabled Amazon Web Services Regions.
   *
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * The regional parameters in the environment blueprint.
   *
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * Specifies whether user-provided resource configurations are allowed for the environment blueprint.
   *
   * @public
   */
  allowUserProvidedConfigurations?: boolean | undefined;

  /**
   * The timestamp of when the environment blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the environment blueprint was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The resource configurations of the environment blueprint.
   *
   * @public
   */
  resourceConfigurations?: ResourceConfiguration[] | undefined;

  /**
   * The provisioning configuration of a blueprint.
   *
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeInput {
  /**
   * The ID of the Amazon DataZone domain in which the metadata form type is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the metadata form type that is deleted.
   *
   * @public
   */
  formTypeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeOutput {}

/**
 * @public
 */
export interface GetFormTypeInput {
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the metadata form type.
   *
   * @public
   */
  formTypeIdentifier: string | undefined;

  /**
   * The revision of this metadata form type.
   *
   * @public
   */
  revision?: string | undefined;
}

/**
 * The details of the import of the metadata form type.
 *
 * @public
 */
export interface Import {
  /**
   * The name of the import.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the import.
   *
   * @public
   */
  revision: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeOutput {
  /**
   * The ID of the Amazon DataZone domain in which this metadata form type exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the metadata form type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the metadata form type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The model of the metadata form type.
   *
   * @public
   */
  model: Model | undefined;

  /**
   * The ID of the project that owns this metadata form type.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the metadata form type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The ID of the project in which this metadata form type was originally created.
   *
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * The status of the metadata form type.
   *
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * The timestamp of when this metadata form type was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created this metadata form type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The description of the metadata form type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The imports of the metadata form type.
   *
   * @public
   */
  imports?: Import[] | undefined;
}

/**
 * @public
 */
export interface GetAccountPoolInput {
  /**
   * The ID of the domain in which the account pool lives whose details are to be displayed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the account pool whose details are to be displayed.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetAccountPoolOutput {
  /**
   * The ID of the domain in which the account pool lives whose details are to be displayed.
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
   * The domain unit ID of the account pool.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetFilterInput {
  /**
   * The ID of the domain where you want to get an asset filter.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The ID of the asset filter.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionInput {
  /**
   * The ID of the domain where we get the connection.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The connection ID.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies whether a connection has a secret.
   *
   * @public
   */
  withSecret?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * Connection credentials.
   *
   * @public
   */
  connectionCredentials?: ConnectionCredentials | undefined;

  /**
   * The configurations of the connection.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * Connection description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The domain ID of the connection.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The domain unit ID of the connection.
   *
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * The ID of the environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The environment user role.
   *
   * @public
   */
  environmentUserRole?: string | undefined;

  /**
   * The name of the connection.
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
   * The ID of the project.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * Connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * The type of the connection.
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
export interface GetDataExportConfigurationInput {
  /**
   * The ID of the domain where you want to get the data export configuration details.
   *
   * @public
   */
  domainIdentifier: string | undefined;
}

/**
 * The encryption configuration details.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the KMS key to use for encryption. This field is required only when `sseAlgorithm` is set to `aws:kms`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The server-side encryption algorithm to use. Valid values are AES256 for S3-managed encryption keys, or aws:kms for Amazon Web Services KMS-managed encryption keys. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see [Permissions requirements for S3 Tables SSE-KMS encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html).
   *
   * @public
   */
  sseAlgorithm?: string | undefined;
}

/**
 * @public
 */
export interface GetDataExportConfigurationOutput {
  /**
   * Specifies whether the export is enabled.
   *
   * @public
   */
  isExportEnabled?: boolean | undefined;

  /**
   * The status of the data export configuration.
   *
   * @public
   */
  status?: ConfigurationStatus | undefined;

  /**
   * The encryption configuration as part of the data export configuration details.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Amazon S3 table bucket ARN as part of the data export configuration details.
   *
   * @public
   */
  s3TableBucketArn?: string | undefined;

  /**
   * The timestamp at which the data export configuration report was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the data export configuration report was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDesignationInput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The unique ID of the designation to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * A designation defines a named role with a Cedar permit policy that controls
 * what actions members holding this designation can perform within a project.
 * @public
 */
export interface GetDesignationOutput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation.
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
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * The ID of the Amazon DataZone domain where the environment exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the Amazon DataZone environment.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * The ID of the Amazon DataZone project in which this environment is created.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of the environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain where the environment exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon DataZone user who created the environment.
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
   * The name of the environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the environment profile with which the environment is created.
   *
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account where the environment exists.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region where the environment exists.
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
   * The actions of the environment.
   *
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * The business glossary terms that can be used in this environment.
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
   * The details of the last deployment of the environment.
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
   * The deployment properties of the environment.
   *
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * The blueprint with which the environment is created.
   *
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * The configuration ID that is used to create the environment.
   *
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * The configuration name that is used to create the environment.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentActionInput {
  /**
   * The ID of the Amazon DataZone domain in which the `GetEnvironmentAction` API is invoked.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The environment ID of the environment action.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the environment action
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentActionOutput {
  /**
   * The ID of the Amazon DataZone domain in which the environment action lives.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The environment ID of the environment action.
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
export interface GetEnvironmentBlueprintInput {
  /**
   * The identifier of the domain in which this blueprint exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of this Amazon DataZone blueprint.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintOutput {
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
   * The user parameters of this blueprint.
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
   * The category of this Amazon DataZone blueprint. The only valid value is `TOOLING`, which indicates a blueprint that provisions the tooling resources of a project.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;

  /**
   * A timestamp of when this blueprint was created.
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
export interface GetEnvironmentCredentialsInput {
  /**
   * The ID of the Amazon DataZone domain in which this environment and its credentials exist.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment whose credentials this operation gets.
   *
   * @public
   */
  environmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentCredentialsOutput {
  /**
   * The access key ID of the environment.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The secret access key of the environment credentials.
   *
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * The session token of the environment credentials.
   *
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * The expiration timestamp of the environment credentials.
   *
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileInput {
  /**
   * The ID of the Amazon DataZone domain in which this environment profile exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment profile.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileOutput {
  /**
   * The ID of the environment profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which this environment profile exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the Amazon Web Services account where this environment profile exists.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region where this environment profile exists.
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
   * The timestamp of when this environment profile was upated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of the environment profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment profile.
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
   * The user parameters of the environment profile.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the group profile.
   *
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileOutput {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile exists.
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
   * The identifier of the group profile.
   *
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * The name of the group for which the specified group profile exists.
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
export interface GetIamPortalLoginUrlInput {
  /**
   * the ID of the Amazon DataZone domain the data portal of which you want to get.
   *
   * @public
   */
  domainIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlOutput {
  /**
   * The data portal URL of the specified Amazon DataZone domain.
   *
   * @public
   */
  authCodeUrl?: string | undefined;

  /**
   * The ID of the user profile.
   *
   * @public
   */
  userProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetJobRunInput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The SQL query run details of a data lineage run.
 *
 * @public
 */
export interface LineageSqlQueryRunDetails {
  /**
   * The query start time in the SQL query run details of a data lineage run.
   *
   * @public
   */
  queryStartTime?: Date | undefined;

  /**
   * The query end time in the SQL query run details of a data lineage run.
   *
   * @public
   */
  queryEndTime?: Date | undefined;

  /**
   * The total queries processed in the SQL query run details of a data lineage run.
   *
   * @public
   */
  totalQueriesProcessed?: number | undefined;

  /**
   * The number of queries that failed in the SQL query run details of a data lineage run.
   *
   * @public
   */
  numQueriesFailed?: number | undefined;

  /**
   * The error message of the SQL query run details of a data lineage run.
   *
   * @public
   */
  errorMessages?: string[] | undefined;
}

/**
 * The data lineage run details.
 *
 * @public
 */
export interface LineageRunDetails {
  /**
   * The SQL query run details of a data lineage run.
   *
   * @public
   */
  sqlQueryRunDetails?: LineageSqlQueryRunDetails | undefined;
}

/**
 * The details of a job run.
 *
 * @public
 */
export type JobRunDetails =
  | JobRunDetails.LineageRunDetailsMember
  | JobRunDetails.$UnknownMember;

/**
 * @public
 */
export namespace JobRunDetails {
  /**
   * The data lineage details of a job run.
   *
   * @public
   */
  export interface LineageRunDetailsMember {
    lineageRunDetails: LineageRunDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lineageRunDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lineageRunDetails: (value: LineageRunDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The job run error.
 *
 * @public
 */
export interface JobRunError {
  /**
   * The job run error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetJobRunOutput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The type of the job run.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The mode of the job run.
   *
   * @public
   */
  runMode?: JobRunMode | undefined;

  /**
   * The details of the job run.
   *
   * @public
   */
  details?: JobRunDetails | undefined;

  /**
   * The status of the job run.
   *
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * The error generated if the action is not completed successfully.
   *
   * @public
   */
  error?: JobRunError | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the job run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the job run started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The timestamp of when the job run ended.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageEventInput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the lineage event.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetLineageEventOutput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the lineage event.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The lineage event details.
   *
   * @public
   */
  event?: Uint8Array | undefined;

  /**
   * The user who created the lineage event.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The progressing status of the lineage event.
   *
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * The time of the lineage event.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The timestamp of when the lineage event was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageNodeInput {
  /**
   * The ID of the domain in which you want to get the data lineage node.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data lineage node that you want to get.
   *
   * Both, a lineage node identifier generated by Amazon DataZone and a `sourceIdentifier` of the lineage node are supported. If `sourceIdentifier` is greater than 1800 characters, you can use lineage node identifier generated by Amazon DataZone to get the node details.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The event time stamp for which you want to get the data lineage node.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;
}

/**
 * The reference details for the data lineage node.
 *
 * @public
 */
export interface LineageNodeReference {
  /**
   * The ID of the data lineage node.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The event timestamp of the data lineage node.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageNodeOutput {
  /**
   * The ID of the domain where you're getting the data lineage node.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the data lineage node.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data lineage node.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the data lineage node was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data lineage node.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the data lineage node was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who updated the data lineage node.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the data lineage node.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the type of the specified data lineage node.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The revision type of the specified data lineage node.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The source identifier of the data lineage node.
   *
   * @public
   */
  sourceIdentifier?: string | undefined;

  /**
   * The timestamp of the event described in the data lineage node.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * The metadata of the specified data lineage node.
   *
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * The upstream nodes of the specified data lineage node.
   *
   * @public
   */
  upstreamNodes?: LineageNodeReference[] | undefined;

  /**
   * The downsteam nodes of the specified data lineage node.
   *
   * @public
   */
  downstreamNodes?: LineageNodeReference[] | undefined;
}

/**
 * @public
 */
export interface GetProjectInput {
  /**
   * The ID of the Amazon DataZone domain in which the project exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the project.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectOutput {
  /**
   * The ID of the Amazon DataZone domain in which the project exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * &gt;The ID of the project.
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
   * The status of the project.
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
   * The business glossary terms that can be used in the project.
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
   * The ID of the project profile of a project.
   *
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * The user parameters of a project.
   *
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * The environment deployment status of a project.
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
export interface GetProjectProfileInput {
  /**
   * The ID of the domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectProfileOutput {
  /**
   * The ID of the domain of the project profile.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the project profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the project profile.
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
   * The environment configurations of the project profile.
   *
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * The user who created the project profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the project profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when project profile was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ID of the domain unit of the project profile.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the subscription.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription.
   *
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * The timestamp of when the subscription was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The principal that owns the subscription.
   *
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * The details of the published asset for which the subscription grant is created.
   *
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * The ID of the subscription request.
   *
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * The retain permissions of the subscription.
   *
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription grant exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the subscription grant.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantOutput {
  /**
   * The ID of the subscription grant.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription grant.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription grant.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription grant exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The timestamp of when the subscription grant is created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription grant was upated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The environment ID of the subscription grant.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The subscription target ID associated with the subscription grant.
   *
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * The entity to which the subscription is granted.
   *
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * The status of the subscription grant.
   *
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * The assets for which the subscription grant is created.
   *
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * The identifier of the subscription.
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsInput {
  /**
   * The identifier of the Amazon DataZone domain in which to get the subscription request details.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the subscription request the details of which to get.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsOutput {
  /**
   * The identifier of the subscription request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription request.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The Amazon DataZone domain of the subscription request.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * The timestamp of when the specified subscription request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the subscription request.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * The subscribed principals in the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * The subscribed listings in the subscription request.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * The identifier of the Amazon DataZone user who reviewed the subscription request.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * The decision comment of the subscription request.
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
   * The metadata forms included in the subscription request.
   *
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetInput {
  /**
   * The ID of the Amazon DataZone domain in which the subscription target exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the environment associated with the subscription target.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the subscription target.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetOutput {
  /**
   * The ID of the subscription target.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The authorized principals of the subscription target.
   *
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * The ID of the Amazon DataZone domain in which the subscription target exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project associated with the subscription target.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The ID of the environment associated with the subscription target.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name of the subscription target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the subscription target.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription target.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription target.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the subscription target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription target was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The manage access role with which the subscription target was created.
   *
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * The asset types associated with the subscription target.
   *
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * The configuration of teh subscription target.
   *
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * The provider of the subscription target.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesDataPointInput {
  /**
   * The ID of the Amazon DataZone domain that houses the asset for which you want to get the data point.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset for which you want to get the data point.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset for which you want to get the data point.
   *
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * The ID of the data point that you want to get.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the time series form that houses the data point that you want to get.
   *
   * @public
   */
  formName: string | undefined;
}

/**
 * The time series data points form.
 *
 * @public
 */
export interface TimeSeriesDataPointFormOutput {
  /**
   * The name of the time series data points form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The ID of the type of the time series data points form.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision type of the time series data points form.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The timestamp of the time series data points form.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The content of the time series data points form.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The ID of the time series data points form.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesDataPointOutput {
  /**
   * The ID of the Amazon DataZone domain that houses the asset data point that you want to get.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the asset for which you want to get the data point.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The type of the asset for which you want to get the data point.
   *
   * @public
   */
  entityType?: TimeSeriesEntityType | undefined;

  /**
   * The name of the time series form that houses the data point that you want to get.
   *
   * @public
   */
  formName?: string | undefined;

  /**
   * The time series form that houses the data point that you want to get.
   *
   * @public
   */
  form?: TimeSeriesDataPointFormOutput | undefined;
}

/**
 * @public
 */
export interface GetUserProfileInput {
  /**
   * the ID of the Amazon DataZone domain the data portal of which you want to get.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the user for which you want to get the user profile.
   *
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * The type of the user profile.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The session name for IAM role sessions.
   *
   * @public
   */
  sessionName?: string | undefined;
}

/**
 * @public
 */
export interface GetUserProfileOutput {
  /**
   * the identifier of the Amazon DataZone domain of which you want to get the user profile.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the user profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the user profile.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The status of the user profile.
   *
   * @public
   */
  status?: UserProfileStatus | undefined;

  /**
   * The user profile details.
   *
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryInput {
  /**
   * The ID of the Amazon DataZone domain in which the business glossary is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the business glossary that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryOutput {}

/**
 * @public
 */
export interface GetGlossaryInput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the business glossary.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryOutput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the business glossary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the project that owns this business glossary.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The name of the business glossary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the business glossary.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the business glossary.
   *
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * The timestamp of when this business glossary was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created this business glossary.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the business glossary was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who updated the business glossary.
   *
   * @public
   */
  updatedBy?: string | undefined;

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
export interface UpdateGlossaryInput {
  /**
   * The identifier of the Amazon DataZone domain in which a business glossary is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the business glossary to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateGlossary` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to be updated as part of the `UpdateGlossary` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status to be updated as part of the `UpdateGlossary` action.
   *
   * @public
   */
  status?: GlossaryStatus | undefined;

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
export interface UpdateGlossaryOutput {
  /**
   * The identifier of the Amazon DataZone domain in which a business glossary is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the business glossary that is to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name to be updated as part of the `UpdateGlossary` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project in which to update a business glossary.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The description to be updated as part of the `UpdateGlossary` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status to be updated as part of the `UpdateGlossary` action.
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
 * @public
 */
export interface DeleteGlossaryTermInput {
  /**
   * The ID of the Amazon DataZone domain in which the business glossary term is deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the business glossary term that is deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryTermOutput {}

/**
 * @public
 */
export interface GetGlossaryTermInput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary term exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the business glossary term.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermOutput {
  /**
   * The ID of the Amazon DataZone domain in which this business glossary term exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the business glossary to which this term belongs.
   *
   * @public
   */
  glossaryId: string | undefined;

  /**
   * The ID of the business glossary term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the business glossary term.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The short decription of the business glossary term.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The long description of the business glossary term.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The relations of the business glossary term.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * The status of the business glossary term.
   *
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * The timestamp of when the business glossary term was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the business glossary.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the business glossary term was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who updated the business glossary term.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The usage restriction of a term within a restricted glossary.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlossaryTermInput {
  /**
   * The identifier of the Amazon DataZone domain in which a business glossary term is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the business glossary in which a term is to be updated.
   *
   * @public
   */
  glossaryIdentifier?: string | undefined;

  /**
   * The identifier of the business glossary term that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The short description to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The long description to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The term relations to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * The status to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  status?: GlossaryTermStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGlossaryTermOutput {
  /**
   * The identifier of the business glossary term that is to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a business glossary term is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the business glossary in which a term is to be updated.
   *
   * @public
   */
  glossaryId: string | undefined;

  /**
   * The name to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * The short description to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The long description to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The term relations to be updated as part of the `UpdateGlossaryTerm` action.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * The usage restriction of a term within a restricted glossary.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;
}

/**
 * @public
 */
export interface ListAccountPoolsInput {
  /**
   * The ID of the domain where exsting account pools are to be listed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of the account pool to be listed.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The sort by mechanism in which the existing account pools are to be listed.
   *
   * @public
   */
  sortBy?: SortFieldAccountPool | undefined;

  /**
   * The sort order in which the existing account pools are to be listed.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of account pools is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of account pools, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountPools to list the next set of account pools.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of account pools to return in a single call to ListAccountPools. When the number of account pools to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountPools to list the next set of account pools.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountPoolsOutput {
  /**
   * The results of the ListAccountPools operation.
   *
   * @public
   */
  items?: AccountPoolSummary[] | undefined;

  /**
   * When the number of account pools is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of account pools, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountPools to list the next set of account pools.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsInAccountPoolInput {
  /**
   * The ID of the domain in which the accounts in the specified account pool are to be listed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the account pool whose accounts are to be listed.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * When the number of accounts is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of accounts, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountsInAccountPool to list the next set of accounts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of accounts to return in a single call to ListAccountsInAccountPool. When the number of accounts to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountsInAccountPool to list the next set of accounts.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsInAccountPoolOutput {
  /**
   * The results of the ListAccountsInAccountPool operation.
   *
   * @public
   */
  items?: AccountInfo[] | undefined;

  /**
   * When the number of accounts is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of accounts, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountsInAccountPool to list the next set of accounts.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetFiltersInput {
  /**
   * The ID of the domain where you want to list asset filters.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The status of the asset filter.
   *
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * When the number of asset filters is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of asset filters, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListAssetFilters` to list the next set of asset filters.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of asset filters to return in a single call to `ListAssetFilters`. When the number of asset filters to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListAssetFilters` to list the next set of asset filters.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetFiltersOutput {
  /**
   * The results of the `ListAssetFilters` action.
   *
   * @public
   */
  items: AssetFilterSummary[] | undefined;

  /**
   * When the number of asset filters is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of asset filters, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListAssetFilters` to list the next set of asset filters.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetRevisionsInput {
  /**
   * The identifier of the domain.
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
   * When the number of revisions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of revisions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListAssetRevisions` to list the next set of revisions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of revisions to return in a single call to `ListAssetRevisions`. When the number of revisions to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListAssetRevisions` to list the next set of revisions.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetRevisionsOutput {
  /**
   * The results of the `ListAssetRevisions` action.
   *
   * @public
   */
  items?: AssetRevision[] | undefined;

  /**
   * When the number of revisions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of revisions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListAssetRevisions` to list the next set of revisions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsInput {
  /**
   * The ID of the domain where you want to list connections.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of connections to return in a single call to ListConnections. When the number of connections to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListConnections to list the next set of connections.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of connections is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of connections, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListConnections to list the next set of connections.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies how you want to sort the listed connections.
   *
   * @public
   */
  sortBy?: SortFieldConnection | undefined;

  /**
   * Specifies the sort order for the listed connections.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the environment where you want to list connections.
   *
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * The ID of the project where you want to list connections.
   *
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * The type of connection.
   *
   * @public
   */
  type?: ConnectionType | undefined;

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
export interface ListConnectionsOutput {
  /**
   * The results of the ListConnections action.
   *
   * @public
   */
  items: ConnectionSummary[] | undefined;

  /**
   * When the number of connections is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of connections, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListConnections to list the next set of connections.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataProductRevisionsInput {
  /**
   * The ID of the domain of the data product revisions that you want to list.
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
   * The maximum number of asset filters to return in a single call to `ListDataProductRevisions`. When the number of data product revisions to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListDataProductRevisions` to list the next set of data product revisions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of data product revisions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of data product revisions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataProductRevisions` to list the next set of data product revisions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataProductRevisionsOutput {
  /**
   * The results of the `ListDataProductRevisions` action.
   *
   * @public
   */
  items: DataProductRevision[] | undefined;

  /**
   * When the number of data product revisions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of data product revisions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataProductRevisions` to list the next set of data product revisions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesInput {
  /**
   * The identifier of the Amazon DataZone domain in which to list data source run activities.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the data source run.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The status of the data source run.
   *
   * @public
   */
  status?: DataAssetActivityStatus | undefined;

  /**
   * When the number of activities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of activities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSourceRunActivities` to list the next set of activities.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of activities to return in a single call to `ListDataSourceRunActivities`. When the number of activities to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListDataSourceRunActivities` to list the next set of activities.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesOutput {
  /**
   * The results of the `ListDataSourceRunActivities` action.
   *
   * @public
   */
  items: DataSourceRunActivity[] | undefined;

  /**
   * When the number of activities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of activities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListDataSourceRunActivities` to list the next set of activities.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDesignationsInput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designations to list.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * If the results exceed the value of `MaxResults`, the previous call returns a pagination token. Specify this token in a subsequent call to `ListDesignations` to retrieve the next set of results. If not specified, the operation returns the first page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of designations to return in a single call to `ListDesignations`. If the number of designations exceeds `MaxResults`, the response includes a `NextToken` value. Use that token in a subsequent call to `ListDesignations` to retrieve the next set of designations. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary representation of a designation returned by list operations.
 * @public
 */
export interface DesignationSummary {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation.
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
   * The classification of this designation.
   * @public
   */
  designationType?: DesignationType | undefined;

  /**
   * Whether deletion protection is enabled for this designation.
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
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDesignationsOutput {
  /**
   * The designation summaries that `ListDesignations` returned. Each item contains summary information about a designation in the domain.
   *
   * @public
   */
  items?: DesignationSummary[] | undefined;

  /**
   * A pagination token that indicates that more results are available. Pass this token to a subsequent call to `ListDesignations` to retrieve the next page of results. If there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityOwnersInput {
  /**
   * The ID of the domain where you want to list entity owners.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of the entity that you want to list.
   *
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * The ID of the entity that you want to list.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The maximum number of entities to return in a single call to `ListEntityOwners`. When the number of entities to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEntityOwners` to list the next set of entities.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of entities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of entities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEntityOwners` to list the next set of entities.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The properties of the domain unit owners group.
 *
 * @public
 */
export interface OwnerGroupPropertiesOutput {
  /**
   * The ID of the domain unit owners group.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * The properties of the owner user.
 *
 * @public
 */
export interface OwnerUserPropertiesOutput {
  /**
   * The ID of the owner user.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * The ID of the domain unit owners group.
 *
 * @public
 */
export type OwnerPropertiesOutput =
  | OwnerPropertiesOutput.GroupMember
  | OwnerPropertiesOutput.UserMember
  | OwnerPropertiesOutput.$UnknownMember;

/**
 * @public
 */
export namespace OwnerPropertiesOutput {
  /**
   * Specifies that the domain unit owner is a user.
   *
   * @public
   */
  export interface UserMember {
    user: OwnerUserPropertiesOutput;
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
    group: OwnerGroupPropertiesOutput;
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
    user: (value: OwnerUserPropertiesOutput) => T;
    group: (value: OwnerGroupPropertiesOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListEntityOwnersOutput {
  /**
   * The owners of the entity.
   *
   * @public
   */
  owners: OwnerPropertiesOutput[] | undefined;

  /**
   * When the number of entities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of entities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEntityOwners` to list the next set of entities.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentActionsInput {
  /**
   * The ID of the Amazon DataZone domain in which the environment actions are listed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the envrironment whose environment actions are listed.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * When the number of environment actions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environment actions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentActions` to list the next set of environment actions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environment actions to return in a single call to `ListEnvironmentActions`. When the number of environment actions to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEnvironmentActions` to list the next set of environment actions.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details about the specified action configured for an environment. For example, the details of the specified console links for an analytics tool that is available in this environment.
 *
 * @public
 */
export interface EnvironmentActionSummary {
  /**
   * The Amazon DataZone domain ID of the environment action.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The environment ID of the environment action.
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
   * The environment action description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentActionsOutput {
  /**
   * The results of `ListEnvironmentActions`.
   *
   * @public
   */
  items?: EnvironmentActionSummary[] | undefined;

  /**
   * When the number of environment actions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environment actions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentActions` to list the next set of environment actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of blueprints to return in a single call to `ListEnvironmentBlueprints`. When the number of blueprints to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEnvironmentBlueprints` to list the next set of blueprints.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of blueprints in the environment is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of blueprints in the environment, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentBlueprints`to list the next set of blueprints.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the Amazon DataZone environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether the environment blueprint is managed by Amazon DataZone.
   *
   * @public
   */
  managed?: boolean | undefined;
}

/**
 * The details of an environment blueprint summary.
 *
 * @public
 */
export interface EnvironmentBlueprintSummary {
  /**
   * The identifier of the blueprint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the blueprint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of a blueprint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provider of the blueprint.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The provisioning properties of the blueprint.
   *
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * The timestamp of when an environment blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the blueprint was enabled.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The category of the environment blueprint. The only valid value is `TOOLING`.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsOutput {
  /**
   * The results of the `ListEnvironmentBlueprints` action.
   *
   * @public
   */
  items: EnvironmentBlueprintSummary[] | undefined;

  /**
   * When the number of blueprints in the environment is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of blueprints in the environment, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentBlueprints`to list the next set of blueprints.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the Amazon Web Services account where you want to list environment profiles.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services region where you want to list environment profiles.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The identifier of the blueprint that was used to create the environment profiles that you want to list.
   *
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * The identifier of the Amazon DataZone project.
   *
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * @public
   */
  name?: string | undefined;

  /**
   * When the number of environment profiles is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environment profiles, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentProfiles` to list the next set of environment profiles.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environment profiles to return in a single call to `ListEnvironmentProfiles`. When the number of environment profiles to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEnvironmentProfiles` to list the next set of environment profiles.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of an environment profile.
 *
 * @public
 */
export interface EnvironmentProfileSummary {
  /**
   * The identifier of the environment profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the environment profile exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of an Amazon Web Services account in which an environment profile exists.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which an environment profile exists.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The Amazon DataZone user who created the environment profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when an environment profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the environment profile was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of the environment profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of a blueprint with which an environment profile is created.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The identifier of a project in which an environment profile exists.
   *
   * @public
   */
  projectId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesOutput {
  /**
   * The results of the `ListEnvironmentProfiles` action.
   *
   * @public
   */
  items: EnvironmentProfileSummary[] | undefined;

  /**
   * When the number of environment profiles is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environment profiles, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironmentProfiles` to list the next set of environment profiles.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the Amazon Web Services account where you want to list environments.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The status of the environments that you want to list.
   *
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * The Amazon Web Services region where you want to list environments.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The identifier of the Amazon DataZone project.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The identifier of the environment profile.
   *
   * @public
   */
  environmentProfileIdentifier?: string | undefined;

  /**
   * The identifier of the Amazon DataZone blueprint.
   *
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * The provider of the environment.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The maximum number of environments to return in a single call to `ListEnvironments`. When the number of environments to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListEnvironments` to list the next set of environments.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of environments is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environments, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironments` to list the next set of environments.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of an environment.
 *
 * @public
 */
export interface EnvironmentSummary {
  /**
   * The identifier of the project in which the environment exists.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the environment exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon DataZone user who created the environment.
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
   * The timestamp of when the environment was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the environment profile with which the environment was created.
   *
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account in which an environment exists.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which an environment exists.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The provider of the environment.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The status of the environment.
   *
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * The configuration ID with which the environment is created.
   *
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * The configuration name with which the environment is created.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * The results of the `ListEnvironments` action.
   *
   * @public
   */
  items: EnvironmentSummary[] | undefined;

  /**
   * When the number of environments is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of environments, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListEnvironments` to list the next set of environments.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteListingInput {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the listing to be deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteListingOutput {}

/**
 * @public
 */
export interface GetListingInput {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the listing.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the listing.
   *
   * @public
   */
  listingRevision?: string | undefined;
}

/**
 * The details of a listing (aka asset published in a Amazon DataZone catalog).
 *
 * @public
 */
export type ListingItem =
  | ListingItem.AssetListingMember
  | ListingItem.DataProductListingMember
  | ListingItem.$UnknownMember;

/**
 * @public
 */
export namespace ListingItem {
  /**
   * An asset published in an Amazon DataZone catalog.
   *
   * @public
   */
  export interface AssetListingMember {
    assetListing: AssetListing;
    dataProductListing?: never;
    $unknown?: never;
  }

  /**
   * The data product listing.
   *
   * @public
   */
  export interface DataProductListingMember {
    assetListing?: never;
    dataProductListing: DataProductListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    dataProductListing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assetListing: (value: AssetListing) => T;
    dataProductListing: (value: DataProductListing) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetListingOutput {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the listing.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The revision of a listing.
   *
   * @public
   */
  listingRevision: string | undefined;

  /**
   * The timestamp of when the listing was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the listing was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the listing.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The Amazon DataZone user who updated the listing.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The details of a listing.
   *
   * @public
   */
  item?: ListingItem | undefined;

  /**
   * The name of the listing.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the listing.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the listing.
   *
   * @public
   */
  status?: ListingStatus | undefined;
}

/**
 * @public
 */
export interface ListJobRunsInput {
  /**
   * The ID of the domain where you want to list job runs.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * The status of a job run.
   *
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * Specifies the order in which job runs are to be sorted.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of job runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of job runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListJobRuns to list the next set of job runs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of job runs to return in a single call to ListJobRuns. When the number of job runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListJobRuns to list the next set of job runs.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The job run summary.
 *
 * @public
 */
export interface JobRunSummary {
  /**
   * The domain ID of the job run.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The job ID of a job run.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The job type of a job run.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The run ID of a job run.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The run mode of a job run.
   *
   * @public
   */
  runMode?: JobRunMode | undefined;

  /**
   * The status of a job run.
   *
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * The error of a job run.
   *
   * @public
   */
  error?: JobRunError | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which job run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The start time of a job run.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of a job run.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobRunsOutput {
  /**
   * The results of the ListJobRuns action.
   *
   * @public
   */
  items?: JobRunSummary[] | undefined;

  /**
   * When the number of job runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of job runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListJobRuns to list the next set of job runs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLineageEventsInput {
  /**
   * The ID of the domain where you want to list lineage events.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of lineage events to return in a single call to ListLineageEvents. When the number of lineage events to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListLineageEvents to list the next set of lineage events.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The after timestamp of a lineage event.
   *
   * @public
   */
  timestampAfter?: Date | undefined;

  /**
   * The before timestamp of a lineage event.
   *
   * @public
   */
  timestampBefore?: Date | undefined;

  /**
   * The processing status of a lineage event.
   *
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * The sort order of the lineage events.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of lineage events is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of lineage events, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageEvents to list the next set of lineage events.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The name identifier.
 *
 * @public
 */
export interface NameIdentifier {
  /**
   * The name in the name identifier.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The namespace in the name identifier.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * The open lineage run event summary.
 *
 * @public
 */
export interface OpenLineageRunEventSummary {
  /**
   * The event type of the open lineage run event summary.
   *
   * @public
   */
  eventType?: OpenLineageRunState | undefined;

  /**
   * The runID of the open lineage run event summary.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The job of the open lineage run event summary.
   *
   * @public
   */
  job?: NameIdentifier | undefined;

  /**
   * The inputs of the open lineage run event summary.
   *
   * @public
   */
  inputs?: NameIdentifier[] | undefined;

  /**
   * The outputs of the open lineage run event summary.
   *
   * @public
   */
  outputs?: NameIdentifier[] | undefined;
}

/**
 * The event summary.
 *
 * @public
 */
export type EventSummary =
  | EventSummary.OpenLineageRunEventSummaryMember
  | EventSummary.$UnknownMember;

/**
 * @public
 */
export namespace EventSummary {
  /**
   * The open lineage run event summary.
   *
   * @public
   */
  export interface OpenLineageRunEventSummaryMember {
    openLineageRunEventSummary: OpenLineageRunEventSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openLineageRunEventSummary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openLineageRunEventSummary: (value: OpenLineageRunEventSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The data lineage event summary.
 *
 * @public
 */
export interface LineageEventSummary {
  /**
   * The ID of the data lineage event.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The domain ID of the lineage event.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The processing status of the data lineage event.
   *
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * The time of the data lineage event.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The summary of the data lineate event.
   *
   * @public
   */
  eventSummary?: EventSummary | undefined;

  /**
   * The user who created the data lineage event.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which data lineage event was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLineageEventsOutput {
  /**
   * The results of the ListLineageEvents action.
   *
   * @public
   */
  items?: LineageEventSummary[] | undefined;

  /**
   * When the number of lineage events is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of lineage events, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageEvents to list the next set of lineage events.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLineageNodeHistoryInput {
  /**
   * The ID of the domain where you want to list the history of the specified data lineage node.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of history items to return in a single call to ListLineageNodeHistory. When the number of memberships to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListLineageNodeHistory to list the next set of items.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of history items is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of items, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageNodeHistory to list the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the data lineage node whose history you want to list.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The direction of the data lineage node refers to the lineage node having neighbors in that direction. For example, if direction is `UPSTREAM`, the `ListLineageNodeHistory` API responds with historical versions with upstream neighbors only.
   *
   * @public
   */
  direction?: EdgeDirection | undefined;

  /**
   * Specifies whether the action is to return data lineage node history from the time after the event timestamp.
   *
   * @public
   */
  eventTimestampGTE?: Date | undefined;

  /**
   * Specifies whether the action is to return data lineage node history from the time prior of the event timestamp.
   *
   * @public
   */
  eventTimestampLTE?: Date | undefined;

  /**
   * The order by which you want data lineage node history to be sorted.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * The summary of the data lineage node.
 *
 * @public
 */
export interface LineageNodeSummary {
  /**
   * The ID of the domain of the data lineage node.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the data lineage node.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data lineage node.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the data lineage node was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data lineage node.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the data lineage node was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who updated the data lineage node.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the data lineage node.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the type of the data lineage node.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The type of the revision of the data lineage node.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The alternate ID of the data lineage node.
   *
   * @public
   */
  sourceIdentifier?: string | undefined;

  /**
   * The event timestamp of the data lineage node.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListLineageNodeHistoryOutput {
  /**
   * The nodes returned by the ListLineageNodeHistory action.
   *
   * @public
   */
  nodes?: LineageNodeSummary[] | undefined;

  /**
   * When the number of history items is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of items, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageNodeHistory to list the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of notifications.
   *
   * @public
   */
  type: NotificationType | undefined;

  /**
   * The time after which you want to list notifications.
   *
   * @public
   */
  afterTimestamp?: Date | undefined;

  /**
   * The time before which you want to list notifications.
   *
   * @public
   */
  beforeTimestamp?: Date | undefined;

  /**
   * The subjects of notifications.
   *
   * @public
   */
  subjects?: string[] | undefined;

  /**
   * The task status of notifications.
   *
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * The maximum number of notifications to return in a single call to `ListNotifications`. When the number of notifications to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListNotifications` to list the next set of notifications.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of notifications is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notifications, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotifications` to list the next set of notifications.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the resource mentioned in a notification.
 *
 * @public
 */
export interface NotificationResource {
  /**
   * The type of the resource mentioned in a notification.
   *
   * @public
   */
  type: NotificationResourceType | undefined;

  /**
   * The ID of the resource mentioned in a notification.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the resource mentioned in a notification.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The topic of the notification.
 *
 * @public
 */
export interface Topic {
  /**
   * The subject of the resource mentioned in a notification.
   *
   * @public
   */
  subject: string | undefined;

  /**
   * The details of the resource mentioned in a notification.
   *
   * @public
   */
  resource: NotificationResource | undefined;

  /**
   * The role of the resource mentioned in a notification.
   *
   * @public
   */
  role: NotificationRole | undefined;
}

/**
 * The details of a notification generated in Amazon DataZone.
 *
 * @public
 */
export interface NotificationOutput {
  /**
   * The identifier of the notification.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The identifier of a Amazon DataZone domain in which the notification exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of the notification.
   *
   * @public
   */
  type: NotificationType | undefined;

  /**
   * The topic of the notification.
   *
   * @public
   */
  topic: Topic | undefined;

  /**
   * The title of the notification.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The message included in the notification.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The status included in the notification.
   *
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * The action link included in the notification.
   *
   * @public
   */
  actionLink: string | undefined;

  /**
   * The timestamp of when a notification was created.
   *
   * @public
   */
  creationTimestamp: Date | undefined;

  /**
   * The timestamp of when the notification was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;

  /**
   * The metadata included in the notification.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * The results of the `ListNotifications` action.
   *
   * @public
   */
  notifications?: NotificationOutput[] | undefined;

  /**
   * When the number of notifications is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notifications, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotifications` to list the next set of notifications.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGrantsInput {
  /**
   * The ID of the domain where you want to list policy grants.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of entity for which you want to list policy grants.
   *
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * The ID of the entity for which you want to list policy grants.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of policy that you want to list.
   *
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * The maximum number of grants to return in a single call to `ListPolicyGrants`. When the number of grants to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListPolicyGrants` to list the next set of grants.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of grants is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of grants, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListPolicyGrants` to list the next set of grants.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A member of the policy grant list.
 *
 * @public
 */
export interface PolicyGrantMember {
  /**
   * The principal of the policy grant member.
   *
   * @public
   */
  principal?: PolicyGrantPrincipal | undefined;

  /**
   * The details of the policy grant member.
   *
   * @public
   */
  detail?: PolicyGrantDetail | undefined;

  /**
   * Specifies the timestamp at which policy grant member was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies the user who created the policy grant member.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ID of the policy grant.
   *
   * @public
   */
  grantId?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGrantsOutput {
  /**
   * The results of this action - the listed grants.
   *
   * @public
   */
  grantList: PolicyGrantMember[] | undefined;

  /**
   * When the number of grants is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of grants, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListPolicyGrants` to list the next set of grants.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectMembershipsInput {
  /**
   * The identifier of the Amazon DataZone domain in which you want to list project memberships.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project whose memberships you want to list.
   *
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * The method by which you want to sort the project memberships.
   *
   * @public
   */
  sortBy?: SortFieldProject | undefined;

  /**
   * The sort order of the project memberships.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of memberships is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of memberships, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListProjectMemberships` to list the next set of memberships.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of memberships to return in a single call to `ListProjectMemberships`. When the number of memberships to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListProjectMemberships` to list the next set of memberships.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a group in Amazon DataZone.
 *
 * @public
 */
export interface GroupDetails {
  /**
   * The identifier of the group in Amazon DataZone.
   *
   * @public
   */
  groupId: string | undefined;
}

/**
 * The user details of a project member.
 *
 * @public
 */
export interface UserDetails {
  /**
   * The identifier of the Amazon DataZone user.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * The details about a project member.
 *
 * @public
 */
export type MemberDetails =
  | MemberDetails.GroupMember
  | MemberDetails.UserMember
  | MemberDetails.$UnknownMember;

/**
 * @public
 */
export namespace MemberDetails {
  /**
   * The user details of a project member.
   *
   * @public
   */
  export interface UserMember {
    user: UserDetails;
    group?: never;
    $unknown?: never;
  }

  /**
   * The group details of a project member.
   *
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: GroupDetails;
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
    user: (value: UserDetails) => T;
    group: (value: GroupDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of a project member.
 *
 * @public
 */
export interface ProjectMember {
  /**
   * The membership details of a project member.
   *
   * @public
   */
  memberDetails: MemberDetails | undefined;

  /**
   * The designated role of a project member.
   *
   * @public
   */
  designation: UserDesignation | undefined;

  /**
   * The ID of the user-created designation held by the project member when `designation` is `USER_CREATED_DESIGNATION`.
   *
   * @public
   */
  userCreatedDesignationId?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectMembershipsOutput {
  /**
   * The members of the project.
   *
   * @public
   */
  members: ProjectMember[] | undefined;

  /**
   * When the number of memberships is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of memberships, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListProjectMemberships` to list the next set of memberships.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectProfilesInput {
  /**
   * The ID of the domain where you want to list project profiles.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The name of a project profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies by what to sort project profiles.
   *
   * @public
   */
  sortBy?: SortFieldProject | undefined;

  /**
   * Specifies the sort order of the project profiles.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of project profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of project profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectProfiles to list the next set of project profiles.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of project profiles to return in a single call to ListProjectProfiles. When the number of project profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectProfiles to list the next set of project profiles.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of a project profile.
 *
 * @public
 */
export interface ProjectProfileSummary {
  /**
   * The domain ID of the project profile.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of a project profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the project profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of a project profile.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The user who created the project profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the project profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which a project profile was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The domain unit ID of the project profile.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectProfilesOutput {
  /**
   * The results of the ListProjectProfiles action.
   *
   * @public
   */
  items?: ProjectProfileSummary[] | undefined;

  /**
   * When the number of project profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of project profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectProfiles to list the next set of project profiles.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the Amazon DataZone user.
   *
   * @public
   */
  userIdentifier?: string | undefined;

  /**
   * The identifier of a group.
   *
   * @public
   */
  groupIdentifier?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A parameter to filter projects by their category.
   *
   * @public
   */
  projectCategory?: string | undefined;

  /**
   * When the number of projects is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of projects, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListProjects` to list the next set of projects.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of projects to return in a single call to `ListProjects`. When the number of projects to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListProjects` to list the next set of projects.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a Amazon DataZone project.
 *
 * @public
 */
export interface ProjectSummary {
  /**
   * The identifier of a Amazon DataZone domain where the project exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of a project.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of a project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of a project.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the project.
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
   * The timestamp of when a project was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the project was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;

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
export interface ListProjectsOutput {
  /**
   * The results of the `ListProjects` action.
   *
   * @public
   */
  items?: ProjectSummary[] | undefined;

  /**
   * When the number of projects is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of projects, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListProjects` to list the next set of projects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionGrantsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the Amazon DataZone environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The identifier of the subscription target.
   *
   * @public
   */
  subscriptionTargetId?: string | undefined;

  /**
   * The identifier of the subscribed listing.
   *
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * The identifier of the subscription.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * The ID of the owning project of the subscription grants.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ARN of the owning IAM principal.
   *
   * @public
   */
  owningIamPrincipalArn?: string | undefined;

  /**
   * The ID of the owning user.
   *
   * @public
   */
  owningUserId?: string | undefined;

  /**
   * The ID of the owning group.
   *
   * @public
   */
  owningGroupId?: string | undefined;

  /**
   * Specifies the way of sorting the results of this action.
   *
   * @deprecated (since Jan 31 2026) Results are always sorted by updatedAt.
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * Specifies the sort order of this action.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The maximum number of subscription grants to return in a single call to `ListSubscriptionGrants`. When the number of subscription grants to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListSubscriptionGrants` to list the next set of subscription grants.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of subscription grants is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription grants, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionGrants` to list the next set of subscription grants.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the subscription grant.
 *
 * @public
 */
export interface SubscriptionGrantSummary {
  /**
   * The identifier of the subscription grant.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The datazone user who created the subscription grant.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription grant.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription grant exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The timestamp of when a subscription grant was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription grant was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The environment ID of the subscription grant.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The identifier of the target of the subscription grant.
   *
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * The entity to which the subscription is granted.
   *
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * The status of the subscription grant.
   *
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * The assets included in the subscription grant.
   *
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * The ID of the subscription.
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionGrantsOutput {
  /**
   * The results of the `ListSubscriptionGrants` action.
   *
   * @public
   */
  items: SubscriptionGrantSummary[] | undefined;

  /**
   * When the number of subscription grants is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription grants, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionGrants` to list the next set of subscription grants.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * Specifies the status of the subscription requests.
   *
   * > **Note:** This is not a required parameter, but if not specified, by default, Amazon DataZone returns only `PENDING` subscription requests.
   *
   * @public
   */
  status?: SubscriptionRequestStatus | undefined;

  /**
   * The identifier of the subscribed listing.
   *
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * The identifier of the project for the subscription requests.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ARN of the owning IAM principal.
   *
   * @public
   */
  owningIamPrincipalArn?: string | undefined;

  /**
   * The identifier of the subscription request approver's project.
   *
   * @public
   */
  approverProjectId?: string | undefined;

  /**
   * The ID of the owning user.
   *
   * @public
   */
  owningUserId?: string | undefined;

  /**
   * The ID of the owning group.
   *
   * @public
   */
  owningGroupId?: string | undefined;

  /**
   * Specifies the way to sort the results of this action.
   *
   * @deprecated (since Jan 31 2026) Results are always sorted by updatedAt.
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * Specifies the sort order for the results of this action.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The maximum number of subscription requests to return in a single call to `ListSubscriptionRequests`. When the number of subscription requests to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListSubscriptionRequests` to list the next set of subscription requests.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of subscription requests is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription requests, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionRequests` to list the next set of subscription requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of the metadata form.
 *
 * @public
 */
export interface MetadataFormSummary {
  /**
   * The form name of the metadata form.
   *
   * @public
   */
  formName?: string | undefined;

  /**
   * The type name of the metadata form.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The type revision of the metadata form.
   *
   * @public
   */
  typeRevision: string | undefined;
}

/**
 * The details of the subscription request.
 *
 * @public
 */
export interface SubscriptionRequestSummary {
  /**
   * The identifier of the subscription request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription request.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The identifier of the Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription request exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * The timestamp of when a subscription request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the subscription request.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * The principals included in the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * The listings included in the subscription request.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * The identifier of the subscription request reviewer.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * The decision comment of the subscription request.
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
   * The summary of the metadata forms.
   *
   * @public
   */
  metadataFormsSummary?: MetadataFormSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsOutput {
  /**
   * The results of the `ListSubscriptionRequests` action.
   *
   * @public
   */
  items: SubscriptionRequestSummary[] | undefined;

  /**
   * When the number of subscription requests is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription requests, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionRequests` to list the next set of subscription requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the subscription request for the subscriptions that you want to list.
   *
   * @public
   */
  subscriptionRequestIdentifier?: string | undefined;

  /**
   * The status of the subscriptions that you want to list.
   *
   * > **Note:** This is not a required parameter, but if not provided, by default, Amazon DataZone returns only `APPROVED` subscriptions.
   *
   * @public
   */
  status?: SubscriptionStatus | undefined;

  /**
   * The identifier of the subscribed listing for the subscriptions that you want to list.
   *
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * The identifier of the owning project.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The ARN of the owning IAM principal.
   *
   * @public
   */
  owningIamPrincipalArn?: string | undefined;

  /**
   * The ID of the owning user.
   *
   * @public
   */
  owningUserId?: string | undefined;

  /**
   * The ID of the owning group.
   *
   * @public
   */
  owningGroupId?: string | undefined;

  /**
   * The identifier of the project for the subscription's approver.
   *
   * @public
   */
  approverProjectId?: string | undefined;

  /**
   * Specifies the way in which the results of this action are to be sorted.
   *
   * @deprecated (since Jan 31 2026) Results are always sorted by updatedAt.
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * Specifies the sort order for the results of this action.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The maximum number of subscriptions to return in a single call to `ListSubscriptions`. When the number of subscriptions to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListSubscriptions` to list the next set of Subscriptions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of subscriptions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscriptions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptions` to list the next set of subscriptions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the subscription.
 *
 * @public
 */
export interface SubscriptionSummary {
  /**
   * The identifier of the subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription.
   *
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * The timestamp of when the subscription was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The principal included in the subscription.
   *
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * The listing included in the subscription.
   *
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * The identifier of the subscription request for the subscription.
   *
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * The retain permissions included in the subscription.
   *
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * The results of the `ListSubscriptions` action.
   *
   * @public
   */
  items: SubscriptionSummary[] | undefined;

  /**
   * When the number of subscriptions is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscriptions, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptions` to list the next set of subscriptions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsInput {
  /**
   * The identifier of the Amazon DataZone domain where you want to list subscription targets.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment where you want to list subscription targets.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * Specifies the way in which the results of this action are to be sorted.
   *
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * Specifies the sort order for the results of this action.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The maximum number of subscription targets to return in a single call to `ListSubscriptionTargets`. When the number of subscription targets to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListSubscriptionTargets` to list the next set of subscription targets.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of subscription targets is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription targets, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionTargets` to list the next set of subscription targets.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the subscription target.
 *
 * @public
 */
export interface SubscriptionTargetSummary {
  /**
   * The identifier of the subscription target.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The authorized principals included in the subscription target.
   *
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the subscription target exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project specified in the subscription target.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the environment of the subscription target.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name of the subscription target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the subscription target.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription target.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription target.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the subscription target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription target was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The manage access role specified in the subscription target.
   *
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * The asset types included in the subscription target.
   *
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * The configuration of the subscription target.
   *
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * The provider of the subscription target.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsOutput {
  /**
   * The results of the `ListSubscriptionTargets` action.
   *
   * @public
   */
  items: SubscriptionTargetSummary[] | undefined;

  /**
   * When the number of subscription targets is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of subscription targets, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListSubscriptionTargets` to list the next set of subscription targets.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource whose tags you want to list.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags of the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsInput {
  /**
   * The ID of the Amazon DataZone domain that houses the assets for which you want to list time series data points.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset for which you want to list data points.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset for which you want to list data points.
   *
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * The name of the time series data points form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The timestamp at which the data points that you want to list started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp at which the data points that you wanted to list ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * When the number of data points is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data points, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of data points to return in a single call to ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsOutput {
  /**
   * The results of the ListTimeSeriesDataPoints action.
   *
   * @public
   */
  items?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * When the number of data points is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data points, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataGenerationRunInput {
  /**
   * The ID of the Amazon DataZone domain the metadata generation run of which you want to get.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the metadata generation run.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The type of the metadata generation run.
   *
   * @public
   */
  type?: MetadataGenerationRunType | undefined;
}

/**
 * The asset for which metadata was generated.
 *
 * @public
 */
export interface MetadataGenerationRunTarget {
  /**
   * The type of the asset for which metadata was generated.
   *
   * @public
   */
  type: MetadataGenerationTargetType | undefined;

  /**
   * The ID of the metadata generation run's target.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the asset for which metadata was generated.
   *
   * @public
   */
  revision?: string | undefined;
}

/**
 * The statistics of the metadata generation run type.
 *
 * @public
 */
export interface MetadataGenerationRunTypeStat {
  /**
   * The type of the metadata generation run type statistics.
   *
   * @public
   */
  type: MetadataGenerationRunType | undefined;

  /**
   * The status of the metadata generation run type statistics.
   *
   * @public
   */
  status: MetadataGenerationRunStatus | undefined;

  /**
   * The error message displayed if the action fails to run.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataGenerationRunOutput {
  /**
   * The ID of the Amazon DataZone domain the metadata generation run of which you want to get.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the metadata generation run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The asset for which you're generating metadata.
   *
   * @public
   */
  target?: MetadataGenerationRunTarget | undefined;

  /**
   * The status of the metadata generation run.
   *
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * The type of metadata generation run.
   *
   * @deprecated (since 2025-11-21) This field is going to be deprecated, please use the 'types' field to provide the MetadataGenerationRun types.
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * The types of the metadata generation run.
   *
   * @public
   */
  types?: MetadataGenerationRunType[] | undefined;

  /**
   * The timestamp of when the metadata generation run was start.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who started the metadata generation run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ID of the project that owns the assets for which you're running metadata generation.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The type stats included in the metadata generation run output details.
   *
   * @public
   */
  typeStats?: MetadataGenerationRunTypeStat[] | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsInput {
  /**
   * The ID of the Amazon DataZone domain where you want to list metadata generation runs.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The status of the metadata generation runs.
   *
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * The type of the metadata generation runs.
   *
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * When the number of metadata generation runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of metadata generation runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of metadata generation runs to return in a single call to ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The target ID for which you want to list metadata generation runs.
   *
   * @public
   */
  targetIdentifier?: string | undefined;
}

/**
 * The metadata generation run.
 *
 * @public
 */
export interface MetadataGenerationRunItem {
  /**
   * The ID of the Amazon DataZone domain in which the metadata generation run was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the metadata generation run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The asset for which metadata was generated.
   *
   * @public
   */
  target?: MetadataGenerationRunTarget | undefined;

  /**
   * The status of the metadata generation run.
   *
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * The type of the metadata generation run.
   *
   * @deprecated (since 2025-11-21) This field is going to be deprecated, please use the 'types' field to provide the MetadataGenerationRun types.
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * The types of the metadata generation run.
   *
   * @public
   */
  types?: MetadataGenerationRunType[] | undefined;

  /**
   * The timestamp at which the metadata generation run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the metadata generation run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ID of the project that owns the asset for which the metadata generation was ran.
   *
   * @public
   */
  owningProjectId: string | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsOutput {
  /**
   * The results of the ListMetadataGenerationRuns action.
   *
   * @public
   */
  items?: MetadataGenerationRunItem[] | undefined;

  /**
   * When the number of metadata generation runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of metadata generation runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunInput {
  /**
   * The ID of the Amazon DataZone domain where you want to start a metadata generation run.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of the metadata generation run.
   *
   * @deprecated (since 2025-11-21) This field is going to be deprecated, please use the 'types' field to provide the MetadataGenerationRun types.
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * The types of the metadata generation run.
   *
   * @public
   */
  types?: MetadataGenerationRunType[] | undefined;

  /**
   * The asset for which you want to start a metadata generation run.
   *
   * @public
   */
  target: MetadataGenerationRunTarget | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the project that owns the asset for which you want to start a metadata generation run.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunOutput {
  /**
   * The ID of the Amazon DataZone domain in which the metadata generation run was started.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the metadata generation run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the metadata generation run.
   *
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * The type of the metadata generation run.
   *
   * @deprecated (since 2025-11-21) This field is going to be deprecated, please use the 'types' field to provide the MetadataGenerationRun types.
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * The types of the metadata generation run.
   *
   * @public
   */
  types?: MetadataGenerationRunType[] | undefined;

  /**
   * The timestamp at which the metadata generation run was started.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the user who started the metadata generation run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ID of the project that owns the asset for which the metadata generation run was started.
   *
   * @public
   */
  owningProjectId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookOutput {}
