// smithy-typescript generated code
import type {
  ConnectionScope,
  ConnectionType,
  DataZoneEntityType,
  EnvironmentStatus,
  FilterOperator,
  FilterStatus,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GraphEntityType,
  GroupProfileStatus,
  GroupSearchType,
  InventorySearchScope,
  ManagedPolicyType,
  NotebookRunStatus,
  NotebookStatus,
  ProjectStatus,
  RejectRuleBehavior,
  RelationDirection,
  RelationType,
  ResolutionStrategy,
  RuleAction,
  RuleTargetType,
  RuleType,
  SearchOutputAdditionalAttribute,
  SortOrder,
  Status,
  SubscriptionGrantCreationMode,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  TimeSeriesEntityType,
  TypesSearchScope,
  UserProfileStatus,
  UserProfileType,
  UserSearchType,
} from "./enums";
import type {
  AccountSource,
  ActionParameters,
  AdditionalAttributes,
  AggregationListItem,
  AggregationOutput,
  AssetItem,
  AssetListingItem,
  AssetTypeItem,
  AwsLocation,
  ColumnFilterConfiguration,
  ConfigurableEnvironmentAction,
  Configuration,
  ConnectionPropertiesOutput,
  ConnectionPropertiesPatch,
  CustomParameter,
  Deployment,
  DeploymentProperties,
  EnvironmentConfiguration,
  EnvironmentConfigurationUserParameter,
  EnvironmentDeploymentDetails,
  EnvironmentParameter,
  FormEntryOutput,
  FormOutput,
  MatchRationaleItem,
  Model,
  OwnerProperties,
  PhysicalEndpoint,
  PolicyGrantPrincipal,
  ProjectDeletionError,
  ProvisioningProperties,
  Resource,
  ResourceTag,
  ResourceTagParameter,
  RowFilterExpression,
  RuleDetail,
  RuleScope,
  RuleTarget,
  SubscribedListing,
  SubscribedPrincipal,
  TermRelations,
  UserProfileDetails,
} from "./models_0";
import type {
  DataProductListingItem,
  DataProductResultItem,
  EncryptionConfiguration,
  FailureCause,
  GrantedEntity,
  Import,
  SubscribedAsset,
  SubscriptionTargetForm,
  TimeSeriesDataPointFormOutput,
} from "./models_1";

/**
 * @public
 */
export interface StopNotebookRunOutput {
  /**
   * <p>The identifier of the notebook run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon SageMaker Unified Studio domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project that owns the notebook run.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The status of the notebook run.</p>
   * @public
   */
  status: NotebookRunStatus | undefined;
}

/**
 * @public
 */
export interface PostLineageEventInput {
  /**
   * <p>The ID of the domain where you want to post a data lineage event.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The data lineage event that you want to post. Only open-lineage run event are supported as events. </p>
   * @public
   */
  event: Uint8Array | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PostLineageEventOutput {
  /**
   * <p>The ID of the lineage event.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainId?: string | undefined;
}

/**
 * <p>The time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointFormInput {
  /**
   * <p>The name of the time series data points form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the type of the time series data points form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the time series data points form.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The timestamp of the time series data points form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the time series data points form.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data points.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to post time series data points.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to post data points.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The forms that contain the data points that you want to post.</p>
   * @public
   */
  forms: TimeSeriesDataPointFormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data points.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the asset for which you want to post time series data points.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The type of the asset for which you want to post data points.</p>
   * @public
   */
  entityType?: TimeSeriesEntityType | undefined;

  /**
   * <p>The forms that contain the data points that you have posted.</p>
   * @public
   */
  forms?: TimeSeriesDataPointFormOutput[] | undefined;
}

/**
 * @public
 */
export interface PutDataExportConfigurationInput {
  /**
   * <p>The domain ID for which you want to create data export configuration details.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies that the export is to be enabled as part of creating data export configuration details.</p>
   * @public
   */
  enableExport: boolean | undefined;

  /**
   * <p>The encryption configuration as part of creating data export configuration details.</p> <p>The KMS key provided here as part of encryptionConfiguration must have the required permissions as described in <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/adminguide/sagemaker-unified-studio-export-asset-metadata-kms-permissions.html">KMS permissions for exporting asset metadata in Amazon SageMaker Unified Studio</a>.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDataExportConfigurationOutput {}

/**
 * <p>A search filter in Amazon DataZone.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>A search filter attribute in Amazon DataZone.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>A search filter string value in Amazon DataZone.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>A search filter integer value in Amazon DataZone.</p>
   * @public
   */
  intValue?: number | undefined;

  /**
   * <p>Specifies the search filter operator.</p>
   * @public
   */
  operator?: FilterOperator | undefined;
}

/**
 * <p>The pattern describing the query's relational traversal.</p>
 * @public
 */
export interface RelationPattern {
  /**
   * <p>The type of relation to query.</p>
   * @public
   */
  relationType: RelationType | undefined;

  /**
   * <p>The direction to query.</p>
   * @public
   */
  relationDirection: RelationDirection | undefined;

  /**
   * <p>The number of hops to query.</p>
   * @public
   */
  maxPathLength?: number | undefined;
}

/**
 * <p>The summary and output forms of a LineageNode</p>
 * @public
 */
export interface LineageNodeItem {
  /**
   * <p>The ID of the domain of the data lineage node.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the data lineage node.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the data lineage node.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the data lineage node was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data lineage node.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the data lineage node was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who updated the data lineage node.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the data lineage node.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the type of the data lineage node.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type of the revision of the data lineage node.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The alternate ID of the data lineage node.</p>
   * @public
   */
  sourceIdentifier?: string | undefined;

  /**
   * <p>The event timestamp of the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * <p>The forms included in the additional attributes of a data lineage node.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The IDs of the upstream data lineage nodes.</p>
   * @public
   */
  upstreamLineageNodeIds?: string[] | undefined;

  /**
   * <p>The IDs of the downstream data lineage nodes.</p>
   * @public
   */
  downstreamLineageNodeIds?: string[] | undefined;
}

/**
 * <p>Resulting entity from the query.</p>
 * @public
 */
export type ResultItem =
  | ResultItem.LineageNodeMember
  | ResultItem.$UnknownMember;

/**
 * @public
 */
export namespace ResultItem {
  /**
   * <p>Resulting data lineage node from the query.</p>
   * @public
   */
  export interface LineageNodeMember {
    lineageNode: LineageNodeItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lineageNode?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lineageNode: (value: LineageNodeItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface QueryGraphOutput {
  /**
   * <p>The results of the <code>QueryGraph</code> action.</p>
   * @public
   */
  items?: ResultItem[] | undefined;

  /**
   * <p>When the number of entities is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of entities, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>QueryGraph</code> to list the next set of entities.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the automatically generated business metadata that is rejected.</p>
 * @public
 */
export interface RejectChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be rejected.</p>
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * <p>Specifies the the automatically generated business metadata that can be rejected.</p>
   * @public
   */
  predictionChoices?: number[] | undefined;
}

/**
 * <p>Specifies the rule and the threshold under which a prediction can be rejected.</p>
 * @public
 */
export interface RejectRule {
  /**
   * <p>Specifies whether you want to reject the top prediction for all targets or none.</p>
   * @public
   */
  rule?: RejectRuleBehavior | undefined;

  /**
   * <p>The confidence score that specifies the condition at which a prediction can be rejected.</p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 */
export interface RejectPredictionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the prediction.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>Specifies the rule (or the conditions) under which a prediction can be rejected.</p>
   * @public
   */
  rejectRule?: RejectRule | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be rejected.</p>
   * @public
   */
  rejectChoices?: RejectChoice[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectPredictionsOutput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
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
  assetRevision: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was rejected.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request that was rejected.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The decision comment of the rejected subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request that was rejected.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The timestamp of when the subscription request was rejected.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was rejected.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the subscription request was rejected.</p>
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
   * <p>The subscribed listings of the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the subscription request reviewer.</p>
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * <p>The decision comment of the rejected subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The ID of the existing subscription.</p>
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * <p>Metadata forms included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface RemoveEntityOwnerInput {
  /**
   * <p>The ID of the domain where you want to remove an owner from an entity.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the entity from which you want to remove an owner.</p>
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * <p>The ID of the entity from which you want to remove an owner.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The owner that you want to remove from an entity.</p>
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
export interface RemoveEntityOwnerOutput {}

/**
 * @public
 */
export interface RemovePolicyGrantInput {
  /**
   * <p>The ID of the domain where you want to remove a policy grant.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the entity from which you want to remove a policy grant.</p>
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * <p>The ID of the entity from which you want to remove a policy grant.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the policy that you want to remove.</p>
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * <p>The principal from which you want to remove a policy grant.</p>
   * @public
   */
  principal: PolicyGrantPrincipal | undefined;

  /**
   * <p>The ID of the policy grant that is to be removed from a specified entity.</p>
   * @public
   */
  grantIdentifier?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RemovePolicyGrantOutput {}

/**
 * @public
 */
export interface RevokeSubscriptionInput {
  /**
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the revoked subscription.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeSubscriptionOutput {
  /**
   * <p>The identifier of the revoked subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the user who revoked the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who revoked the subscription.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the revoked subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was revoked.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was revoked.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The subscribed principal of the revoked subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The subscribed listing of the revoked subscription.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The identifier of the subscription request for the revoked subscription.</p>
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRuleInput {
  /**
   * <p>The ID of the domain that where the rule is to be deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the rule that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleOutput {}

/**
 * @public
 */
export interface GetRuleInput {
  /**
   * <p>The ID of the domain where the <code>GetRule</code> action is to be invoked.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the rule.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetRuleOutput {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the rule.</p>
   * @public
   */
  revision: string | undefined;

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
   * <p>The timestamp at which the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user who created the rule.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  lastUpdatedBy: string | undefined;
}

/**
 * @public
 */
export interface ListRulesInput {
  /**
   * <p>The ID of the domain in which the rules are to be listed.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The target type of the rule.</p>
   * @public
   */
  targetType: RuleTargetType | undefined;

  /**
   * <p>The target ID of the rule.</p>
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * <p>The type of the rule.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * <p>The IDs of projects in which rules are to be listed.</p>
   * @public
   */
  projectIds?: string[] | undefined;

  /**
   * <p>The asset types of the rule.</p>
   * @public
   */
  assetTypes?: string[] | undefined;

  /**
   * <p>The data product of the rule.</p>
   * @public
   */
  dataProduct?: boolean | undefined;

  /**
   * <p>Specifies whether to include cascading rules in the results.</p>
   * @public
   */
  includeCascaded?: boolean | undefined;

  /**
   * <p>The maximum number of rules to return in a single call to <code>ListRules</code>. When the number of rules to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>ListRules</code> to list the next set of rules.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of rules is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of rules, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListRules</code> to list the next set of rules.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The summary of the rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The revision of the rule.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The type of the rule.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The target type of the rule.</p>
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * <p>The target of the rule.</p>
   * @public
   */
  target?: RuleTarget | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * <p>The scope of the rule.</p>
   * @public
   */
  scope?: RuleScope | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesOutput {
  /**
   * <p>The results of the <code>ListRules</code> action.</p>
   * @public
   */
  items: RuleSummary[] | undefined;

  /**
   * <p>When the number of rules is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of rules, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListRules</code> to list the next set of rules.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleInput {
  /**
   * <p>The ID of the domain in which a rule is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the rule that is to be updated</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The scrope of the rule.</p>
   * @public
   */
  scope?: RuleScope | undefined;

  /**
   * <p>The detail of the rule.</p>
   * @public
   */
  detail?: RuleDetail | undefined;

  /**
   * <p>Specifies whether to update this rule in the child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRuleOutput {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the rule.</p>
   * @public
   */
  revision: string | undefined;

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
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user who created the rule.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp at which the rule was last updated.</p>
   * @public
   */
  lastUpdatedBy: string | undefined;
}

/**
 * <p>The details of the search.</p>
 * @public
 */
export interface SearchInItem {
  /**
   * <p>The search attribute.</p>
   * @public
   */
  attribute: string | undefined;
}

/**
 * <p>The details of the way to sort search results.</p>
 * @public
 */
export interface SearchSort {
  /**
   * <p>The attribute detail of the way to sort search results.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>The order detail of the wya to sort search results.</p>
   * @public
   */
  order?: SortOrder | undefined;
}

/**
 * <p>The additional attributes of an Amazon DataZone glossary.</p>
 * @public
 */
export interface GlossaryItemAdditionalAttributes {
  /**
   * <p>List of rationales indicating why this item was matched by search.</p>
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * <p>The details of a business glossary.</p>
 * @public
 */
export interface GlossaryItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the project that owns the business glosary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The business glossary description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business glossary status.</p>
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * <p>The usage restrictions associated with a goverened glossary term.</p>
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * <p>The timestamp of when the glossary was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the glossary.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the business glossary was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The additional attributes of an Amazon DataZone glossary.</p>
   * @public
   */
  additionalAttributes?: GlossaryItemAdditionalAttributes | undefined;
}

/**
 * <p>The additional attributes of an Amazon DataZone glossary term.</p>
 * @public
 */
export interface GlossaryTermItemAdditionalAttributes {
  /**
   * <p>List of rationales indicating why this item was matched by search.</p>
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * <p>The details of a business glossary term.</p>
 * @public
 */
export interface GlossaryTermItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary to which the term belongs.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The identifier of the business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The short description of the business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The usage restrictions associated with a goverened glossary term.</p>
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * <p>The long description of the business glossary term.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The relations of the business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * <p>The status of the business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The timestamp of when a business glossary term was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the business glossary.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when a business glossary term was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The additional attributes of an Amazon DataZone glossary term.</p>
   * @public
   */
  additionalAttributes?: GlossaryTermItemAdditionalAttributes | undefined;
}

/**
 * <p>The details of the search results.</p>
 * @public
 */
export type SearchInventoryResultItem =
  | SearchInventoryResultItem.AssetItemMember
  | SearchInventoryResultItem.DataProductItemMember
  | SearchInventoryResultItem.GlossaryItemMember
  | SearchInventoryResultItem.GlossaryTermItemMember
  | SearchInventoryResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchInventoryResultItem {
  /**
   * <p>The glossary item included in the search results.</p>
   * @public
   */
  export interface GlossaryItemMember {
    glossaryItem: GlossaryItem;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The glossary term item included in the search results.</p>
   * @public
   */
  export interface GlossaryTermItemMember {
    glossaryItem?: never;
    glossaryTermItem: GlossaryTermItem;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The asset item included in the search results.</p>
   * @public
   */
  export interface AssetItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem: AssetItem;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The data product.</p>
   * @public
   */
  export interface DataProductItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem: DataProductResultItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glossaryItem: (value: GlossaryItem) => T;
    glossaryTermItem: (value: GlossaryTermItem) => T;
    assetItem: (value: AssetItem) => T;
    dataProductItem: (value: DataProductResultItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * <p>The results of the <code>Search</code> action.</p>
   * @public
   */
  items?: SearchInventoryResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchGroupProfilesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to search group profiles.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The group type for which to search.</p>
   * @public
   */
  groupType: GroupSearchType | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchGroupProfiles</code>. When the number of results to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of a group profile.</p>
 * @public
 */
export interface GroupProfileSummary {
  /**
   * <p>The ID of the Amazon DataZone domain of a group profile.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of a group profile.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of a group profile.</p>
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * <p>The group name of a group profile.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The ARN of the IAM role principal. This role is associated with the group profile.</p>
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * <p>The unique identifier of the IAM role principal. This principal is associated with the group profile.</p>
   * @public
   */
  rolePrincipalId?: string | undefined;
}

/**
 * @public
 */
export interface SearchGroupProfilesOutput {
  /**
   * <p>The results of the <code>SearchGroupProfiles</code> action.</p>
   * @public
   */
  items?: GroupProfileSummary[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the results of the <code>SearchListings</code> action.</p>
 * @public
 */
export type SearchResultItem =
  | SearchResultItem.AssetListingMember
  | SearchResultItem.DataProductListingMember
  | SearchResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchResultItem {
  /**
   * <p>The asset listing included in the results of the <code>SearchListings</code> action.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: AssetListingItem;
    dataProductListing?: never;
    $unknown?: never;
  }

  /**
   * <p>The data product listing.</p>
   * @public
   */
  export interface DataProductListingMember {
    assetListing?: never;
    dataProductListing: DataProductListingItem;
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
    assetListing: (value: AssetListingItem) => T;
    dataProductListing: (value: DataProductListingItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * <p>The results of the <code>SearchListings</code> action.</p>
   * @public
   */
  items?: SearchResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchListings</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number | undefined;

  /**
   * <p>Contains computed counts grouped by field values based on the requested aggregation attributes for the matching listings.</p>
   * @public
   */
  aggregates?: AggregationOutput[] | undefined;
}

/**
 * <p>The details of the metadata form type.</p>
 * @public
 */
export interface FormTypeData {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the form type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The model of the form type.</p>
   * @public
   */
  model?: Model | undefined;

  /**
   * <p>The status of the form type.</p>
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * <p>The identifier of the project that owns the form type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the form type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The identifier of the project in which the form type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the metadata form type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created teh metadata form type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The description of the metadata form type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The imports specified in the form type.</p>
   * @public
   */
  imports?: Import[] | undefined;
}

/**
 * <p>The details of a data lineage node type.</p>
 * @public
 */
export interface LineageNodeTypeItem {
  /**
   * <p>The ID of the domain where the data lineage node type lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the data lineage node type.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the data lineage node type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the data lineage node type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data lineage node type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the data lineage node type was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who updated the data lineage node type.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The revision of the data lineage node type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The forms output of the data lineage node type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;
}

/**
 * <p>The details of the results of the <code>SearchTypes</code> action.</p>
 * @public
 */
export type SearchTypesResultItem =
  | SearchTypesResultItem.AssetTypeItemMember
  | SearchTypesResultItem.FormTypeItemMember
  | SearchTypesResultItem.LineageNodeTypeItemMember
  | SearchTypesResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchTypesResultItem {
  /**
   * <p>The asset type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  export interface AssetTypeItemMember {
    assetTypeItem: AssetTypeItem;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The form type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  export interface FormTypeItemMember {
    assetTypeItem?: never;
    formTypeItem: FormTypeData;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a data lineage node type.</p>
   * @public
   */
  export interface LineageNodeTypeItemMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem: LineageNodeTypeItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assetTypeItem: (value: AssetTypeItem) => T;
    formTypeItem: (value: FormTypeData) => T;
    lineageNodeTypeItem: (value: LineageNodeTypeItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchTypesOutput {
  /**
   * <p>The results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  items?: SearchTypesResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchTypes</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchUserProfilesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to search user profiles.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the user type for the <code>SearchUserProfiles</code> action.</p>
   * @public
   */
  userType: UserSearchType | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchUserProfiles</code>. When the number of results to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>SearchUserProfiles</code> to list the next set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the user profile.</p>
 * @public
 */
export interface UserProfileSummary {
  /**
   * <p>The ID of the Amazon DataZone domain of the user profile.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the user profile.</p>
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
   * <p>The details of the user profile.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface SearchUserProfilesOutput {
  /**
   * <p>The results of the <code>SearchUserProfiles</code> action.</p>
   * @public
   */
  items?: UserProfileSummary[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The source location for a notebook import in Amazon SageMaker Unified Studio.</p>
 * @public
 */
export type SourceLocation =
  | SourceLocation.S3Member
  | SourceLocation.$UnknownMember;

/**
 * @public
 */
export namespace SourceLocation {
  /**
   * <p>The Amazon Simple Storage Service URI of the notebook source file.</p>
   * @public
   */
  export interface S3Member {
    s3: string;
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
    s3: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartNotebookImportInput {
  /**
   * <p>The identifier of the Amazon SageMaker Unified Studio domain in which to import the notebook.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project that will own the imported notebook.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The source location of the notebook to import. This specifies the Amazon Simple Storage Service URI of the notebook file.</p>
   * @public
   */
  sourceLocation: SourceLocation | undefined;

  /**
   * <p>The name of the imported notebook. The name must be between 1 and 256 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the imported notebook.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookImportOutput {
  /**
   * <p>The identifier of the imported notebook.</p>
   * @public
   */
  notebookId?: string | undefined;

  /**
   * <p>The status of the notebook import.</p>
   * @public
   */
  status?: NotebookStatus | undefined;

  /**
   * <p>The identifier of the Amazon SageMaker Unified Studio domain.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the project that owns the imported notebook.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The name of the imported notebook.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the imported notebook.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The source location from which the notebook was imported.</p>
   * @public
   */
  sourceLocation?: SourceLocation | undefined;

  /**
   * <p>The timestamp of when the notebook import was started.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The identifier of the user who started the notebook import.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to be tagged in Amazon DataZone.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tags for the <code>TagResource</code> action.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to be untagged in Amazon DataZone.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tag keys for the <code>UntagResource</code> action.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountPoolInput {
  /**
   * <p>The domain ID where the account pool that is to be updated lives.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the account pool that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the account pool that is to be updated.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the account pool that is to be udpated.</p>
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
  accountSource?: AccountSource | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPoolOutput {
  /**
   * <p>The domain ID where the account pool that is to be updated lives.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The name of the account pool that is to be updated.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the account pool that is to be updated.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The description of the account pool that is to be udpated.</p>
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
   * <p>The domain ID in which the account pool that is to be updated lives.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionInput {
  /**
   * <p>The configurations of the connection.</p>
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * <p>The ID of the domain where a connection is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the connection to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The description of a connection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The location where a connection is to be updated.</p>
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesPatch | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionOutput {
  /**
   * <p>The configurations of the connection.</p>
   * @public
   */
  configurations?: Configuration[] | undefined;

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
   * <p>The ID of the domain where a connection is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the domain unit where a connection is to be updated.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The ID of the environment where a connection is to be updated.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The physical endpoints of the connection.</p>
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * <p>The project ID of the connection.</p>
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
export interface UpdateEnvironmentInput {
  /**
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The blueprint version to which the environment should be updated. You can only specify the following string for this parameter: <code>latest</code>.</p>
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * <p>The user parameters of the environment.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The configuration name of the environment.</p>
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * <p>The project identifier of the environment.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment that is to be updated.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the environment was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The profile identifier of the environment.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account in which the environment is to be updated.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the environment is updated.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The provider identifier of the environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The environment actions to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The blueprint identifier of the environment.</p>
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * <p>The configuration ID of the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * <p>The configuration name of the environment.</p>
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionInput {
  /**
   * <p>The domain ID of the environment action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters?: ActionParameters | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionOutput {
  /**
   * <p>The domain ID of the environment action.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
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
export interface UpdateEnvironmentBlueprintInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment blueprint is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment blueprint to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentBlueprintOutput {
  /**
   * <p>The identifier of the blueprint to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provider of the blueprint to be udpated.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironmentBlueprint</code> action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The timestamp of when the environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment profile is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment profile that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be udpated.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be updated.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileOutput {
  /**
   * <p>The identifier of the environment profile that is to be udpated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment profile is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be udpated.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be updated.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the blueprint of the environment profile that is to be updated.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The identifier of the project of the environment profile that is to be updated.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code> action.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group profile that is updated.</p>
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * <p>The status of the group profile that is updated.</p>
   * @public
   */
  status: GroupProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the group profile that is updated.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the group profile that is updated.</p>
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * <p>The name of the group profile that is updated.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The ARN of the IAM role principal. This role is associated with the updated group profile.</p>
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * <p>The unique identifier of the IAM role principal. This principal is associated with the updated group profile.</p>
   * @public
   */
  rolePrincipalId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain where a project is being updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The resource tags of the project.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The environment deployment details of the project.</p>
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;

  /**
   * <p>The user parameters of the project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * <p>The project profile version to which the project should be updated. You can only specify the following string for this parameter: <code>latest</code>.</p>
   * @public
   */
  projectProfileVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a project is updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project that is to be updated.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project that is to be updated.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the project.</p>
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
   * <p>The glossary terms of the project that are to be updated.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
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

  /**
   * <p>The environment deployment details of the project.</p>
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;

  /**
   * <p>The category of the project.</p>
   * @public
   */
  projectCategory?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectProfileInput {
  /**
   * <p>The ID of the domain where a project profile is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of a project profile that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of a project profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of a project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of a project profile.</p>
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
   * <p>The environment configurations of a project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>The ID of the domain unit where a project profile is to be updated.</p>
   * @public
   */
  domainUnitIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectProfileOutput {
  /**
   * <p>The ID of the domain where project profile is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the project profile.</p>
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
   * <p>The environment configurations of a project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>The user who created a project profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp at which a project profile is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which a project profile was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The domain unit ID of the project profile to be updated.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRootDomainUnitOwnerInput {
  /**
   * <p>The ID of the domain where the root domain unit owner is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The current owner of the root domain unit.</p>
   * @public
   */
  currentOwner: string | undefined;

  /**
   * <p>The new owner of the root domain unit.</p>
   * @public
   */
  newOwner: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRootDomainUnitOwnerOutput {}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription grant the status of which is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of the asset the subscription grant status of which is to be updated.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully completed.</p>
   * @public
   */
  failureCause?: FailureCause | undefined;

  /**
   * <p>The target name to be updated as part of the <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  targetName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusOutput {
  /**
   * <p>The identifier of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone domain user who created the subscription grant status.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant status.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant status was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant status is to be updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ID of the environment in which the subscription grant is updated.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The identifier of the subscription target whose subscription grant status is to be updated.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The granted entity to be updated as part of the <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The details of the asset for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * <p>The identifier of the subscription.</p>
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  requestReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request that is to be updated.</p>
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
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the subscription request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals of the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The subscribed listings of the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who reviews the subscription request.</p>
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * <p>The decision comment of the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The ID of the existing subscription.</p>
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * <p>Metadata forms included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be updated.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>Identifier of the subscription target that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The authorized principals to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals?: string[] | undefined;

  /**
   * <p>The applicable asset types to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes?: string[] | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The manage access role to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  provider?: string | undefined;

  /**
   * <p> Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually. </p>
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetOutput {
  /**
   * <p>Identifier of the subscription target that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals to be updated as part of the <code>UpdateSubscriptionTarget</code> action. Updates are supported in batches of 5 at a time.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project in which a subscription target is to be updated.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be updated.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
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
   * <p>The timestamp of when a subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The manage access role to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * <p>The applicable asset types to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p> Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually. </p>
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user whose user profile is to be updated.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The type of the user profile that are to be updated.</p>
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * <p>The status of the user profile that are to be updated.</p>
   * @public
   */
  status: UserProfileStatus | undefined;

  /**
   * <p>The session name for IAM role sessions.</p>
   * @public
   */
  sessionName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
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
   * <p>The results of the UpdateUserProfile action.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * <p>A search filter clause in Amazon DataZone.</p>
 * @public
 */
export type FilterClause =
  | FilterClause.AndMember
  | FilterClause.FilterMember
  | FilterClause.OrMember
  | FilterClause.$UnknownMember;

/**
 * @public
 */
export namespace FilterClause {
  /**
   * <p>A search filter in Amazon DataZone.</p>
   * @public
   */
  export interface FilterMember {
    filter: Filter;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'and' search filter clause in Amazon DataZone.</p>
   * @public
   */
  export interface AndMember {
    filter?: never;
    and: FilterClause[];
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'or' search filter clause in Amazon DataZone.</p>
   * @public
   */
  export interface OrMember {
    filter?: never;
    and?: never;
    or: FilterClause[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    filter?: never;
    and?: never;
    or?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    filter: (value: Filter) => T;
    and: (value: FilterClause[]) => T;
    or: (value: FilterClause[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The row filter.</p>
 * @public
 */
export type RowFilter =
  | RowFilter.AndMember
  | RowFilter.ExpressionMember
  | RowFilter.OrMember
  | RowFilter.$UnknownMember;

/**
 * @public
 */
export namespace RowFilter {
  /**
   * <p>The expression of the row filter.</p>
   * @public
   */
  export interface ExpressionMember {
    expression: RowFilterExpression;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'and' clause of the row filter.</p>
   * @public
   */
  export interface AndMember {
    expression?: never;
    and: RowFilter[];
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'or' clause of the row filter.</p>
   * @public
   */
  export interface OrMember {
    expression?: never;
    and?: never;
    or: RowFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    expression?: never;
    and?: never;
    or?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    expression: (value: RowFilterExpression) => T;
    and: (value: RowFilter[]) => T;
    or: (value: RowFilter[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The pattern describing the entities to be matched during the graph query.</p>
 * @public
 */
export interface EntityPattern {
  /**
   * <p>The type of entity to be matched during the graph query.</p>
   * @public
   */
  entityType: GraphEntityType | undefined;

  /**
   * <p>The identifier of the root entity to start traversal from during the graph query.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A search filter clause in Amazon DataZone.</p>
   * @public
   */
  filters?: FilterClause | undefined;
}

/**
 * <p>The row filter configuration details.</p>
 * @public
 */
export interface RowFilterConfiguration {
  /**
   * <p>The row filter.</p>
   * @public
   */
  rowFilter: RowFilter | undefined;

  /**
   * <p>Specifies whether the row filter is sensitive.</p>
   * @public
   */
  sensitive?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the owning project specified for the search.</p>
   * @public
   */
  owningProjectIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>Search</code>. When the number of results to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The scope of the search.</p>
   * @public
   */
  searchScope: InventorySearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * <p>Specifies the search filters.</p>
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * <p>Specifies the way in which the search results are to be sorted.</p>
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * <p>Specifies additional attributes for the <code>Search</code> action.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[] | undefined;
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * <p>The identifier of the domain in which to search listings.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchListings</code>. When the number of results to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>SearchListings</code> to list the next set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchListings</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the filters for the search of listings.</p>
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * <p>Enables you to specify one or more attributes to compute and return counts grouped by field values.</p>
   * @public
   */
  aggregations?: AggregationListItem[] | undefined;

  /**
   * <p>Specifies the way for sorting the search results.</p>
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * <p>Specifies additional attributes for the search.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[] | undefined;
}

/**
 * @public
 */
export interface SearchTypesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to invoke the <code>SearchTypes</code> action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchTypes</code>. When the number of results to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>SearchTypes</code> to list the next set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of results, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>SearchTypes</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the scope of the search for types.</p>
   * @public
   */
  searchScope: TypesSearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * <p>The filters for the <code>SearchTypes</code> action.</p>
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * <p>The specifies the way to sort the <code>SearchTypes</code> results.</p>
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * <p>Specifies whether the search is managed.</p>
   * @public
   */
  managed: boolean | undefined;
}

/**
 * <p>The configuration details of the asset filter.</p>
 * @public
 */
export type AssetFilterConfiguration =
  | AssetFilterConfiguration.ColumnConfigurationMember
  | AssetFilterConfiguration.RowConfigurationMember
  | AssetFilterConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AssetFilterConfiguration {
  /**
   * <p>The column configuration of the asset filter.</p>
   * @public
   */
  export interface ColumnConfigurationMember {
    columnConfiguration: ColumnFilterConfiguration;
    rowConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The row configuration of the asset filter.</p>
   * @public
   */
  export interface RowConfigurationMember {
    columnConfiguration?: never;
    rowConfiguration: RowFilterConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    columnConfiguration?: never;
    rowConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    columnConfiguration: (value: ColumnFilterConfiguration) => T;
    rowConfiguration: (value: RowFilterConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A clause to match a query pattern</p>
 * @public
 */
export type MatchClause =
  | MatchClause.EntityPatternMember
  | MatchClause.RelationPatternMember
  | MatchClause.$UnknownMember;

/**
 * @public
 */
export namespace MatchClause {
  /**
   * <p>The pattern describing the query's relational traversal.</p>
   * @public
   */
  export interface RelationPatternMember {
    relationPattern: RelationPattern;
    entityPattern?: never;
    $unknown?: never;
  }

  /**
   * <p>The pattern describing the entities for the query to traverse.</p>
   * @public
   */
  export interface EntityPatternMember {
    relationPattern?: never;
    entityPattern: EntityPattern;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    relationPattern?: never;
    entityPattern?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    relationPattern: (value: RelationPattern) => T;
    entityPattern: (value: EntityPattern) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAssetFilterInput {
  /**
   * <p>The ID of the domain in which you want to create an asset filter.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

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
   * <p>The configuration of the asset filter.</p>
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetFilterOutput {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the asset filter is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
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
   * <p>The configuration of the asset filter.</p>
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The error message that is displayed if the asset filter is not created successfully.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The column names in the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * <p>The row filter in the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetFilterOutput {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where you want to get an asset filter.</p>
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
   * <p>The configuration of the asset filter.</p>
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The error message that is displayed if the action does not complete successfully.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The column names of the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * <p>The row filter of the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetFilterInput {
  /**
   * <p>The ID of the domain where you want to update an asset filter.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the asset filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the asset filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration of the asset filter.</p>
   * @public
   */
  configuration?: AssetFilterConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAssetFilterOutput {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the asset filter was created.</p>
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
   * <p>The configuration of the asset filter.</p>
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The error message that is displayed if the action is not completed successfully.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The column names of the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * <p>The row filter of the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface QueryGraphInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>List of query match clauses.</p>
   * @public
   */
  match: MatchClause[] | undefined;

  /**
   * <p>The maximum number of entities to return in a single call to <code>QueryGraph</code>. When the number of entities to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>QueryGraph</code> to list the next set of entities.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of entities is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of entities, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>QueryGraph</code> to list the next set of entities.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Additional details on the queried entity that can be requested in the response.</p>
   * @public
   */
  additionalAttributes?: AdditionalAttributes | undefined;
}
