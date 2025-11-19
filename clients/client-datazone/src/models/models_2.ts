// smithy-typescript generated code
import {
  FilterStatus,
  InventorySearchScope,
  ProjectStatus,
  SearchOutputAdditionalAttribute,
  Status,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  TypesSearchScope,
  UserProfileStatus,
  UserProfileType,
} from "./enums";

import {
  AggregationListItem,
  ColumnFilterConfiguration,
  EnvironmentConfiguration,
  EnvironmentConfigurationUserParameter,
  EnvironmentDeploymentDetails,
  FailureCause,
  FormOutput,
  GrantedEntity,
  ProjectDeletionError,
  ResourceTag,
  ResourceTagParameter,
  RowFilterExpression,
  SubscribedAsset,
  SubscribedListing,
  SubscribedPrincipal,
  SubscriptionTargetForm,
  UserProfileDetails,
} from "./models_0";

import { Filter, SearchInItem, SearchSort } from "./models_1";

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
   * @deprecated Multiple subscriptions can exist for a single grant
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
