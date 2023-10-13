// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AssetItem,
  AssetItemFilterSensitiveLog,
  AssetListingItem,
  AssetListingItemFilterSensitiveLog,
  AssetTypeItem,
  AssetTypeItemFilterSensitiveLog,
  ConfigurableEnvironmentAction,
  CustomParameter,
  CustomParameterFilterSensitiveLog,
  DataProductSummary,
  DataProductSummaryFilterSensitiveLog,
  Deployment,
  DeploymentProperties,
  EnvironmentParameter,
  EnvironmentStatus,
  FailureCause,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GrantedEntity,
  GroupProfileStatus,
  Import,
  ImportFilterSensitiveLog,
  Model,
  ProvisioningProperties,
  Resource,
  SortOrder,
  SubscribedAsset,
  SubscribedListing,
  SubscribedListingFilterSensitiveLog,
  SubscribedPrincipal,
  SubscribedPrincipalFilterSensitiveLog,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  SubscriptionTargetForm,
  TermRelations,
  UserProfileDetails,
  UserProfileDetailsFilterSensitiveLog,
  UserProfileStatus,
  UserProfileType,
} from "./models_0";

/**
 * @public
 * <p>The details of the subscription target.</p>
 */
export interface SubscriptionTargetSummary {
  /**
   * @public
   * <p>The identifier of the subscription target.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The authorized principals included in the subscription target.</p>
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the subscription target exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the project specified in the subscription target.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment of the subscription target.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the subscription target.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the subscription target.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription target.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The timestamp of when the subscription target was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription target was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The manage access role specified in the subscription target.</p>
   */
  manageAccessRole: string | undefined;

  /**
   * @public
   * <p>The asset types included in the subscription target.</p>
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the subscription target.</p>
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * @public
   * <p>The provider of the subscription target.</p>
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsOutput {
  /**
   * @public
   * <p>The results of the <code>ListSubscriptionTargets</code> action.</p>
   */
  items: SubscriptionTargetSummary[] | undefined;

  /**
   * @public
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags of the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The details of the automatically generated business metadata that is rejected.</p>
 */
export interface RejectChoice {
  /**
   * @public
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          rejected.</p>
   */
  predictionTarget?: string;

  /**
   * @public
   * <p>Specifies the the automatically generated business metadata that can be rejected.</p>
   */
  predictionChoices?: number[];
}

/**
 * @public
 * @enum
 */
export const RejectRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RejectRuleBehavior = (typeof RejectRuleBehavior)[keyof typeof RejectRuleBehavior];

/**
 * @public
 * <p>Specifies the rule and the threshold under which a prediction can be rejected.</p>
 */
export interface RejectRule {
  /**
   * @public
   * <p>Specifies whether you want to reject the top prediction for all targets or none.</p>
   */
  rule?: RejectRuleBehavior;

  /**
   * @public
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          rejected.</p>
   */
  threshold?: number;
}

/**
 * @public
 */
export interface RejectPredictionsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the prediction.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  revision?: string;

  /**
   * @public
   * <p/>
   */
  rejectRule?: RejectRule;

  /**
   * @public
   * <p/>
   */
  rejectChoices?: RejectChoice[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface RejectPredictionsOutput {
  /**
   * @public
   * <p/>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p/>
   */
  assetRevision: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request that was rejected.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The decision comment of the rejected subscription request.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestOutput {
  /**
   * @public
   * <p>The identifier of the subscription request that was rejected.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was rejected.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was rejected.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The reason for the subscription request.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>The subscribed principals of the subscription request.</p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p>The subscribed listings of the subscription request.</p>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request reviewer.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>The decision comment of the rejected subscription request.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface RevokeSubscriptionInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the revoked subscription.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface RevokeSubscriptionOutput {
  /**
   * @public
   * <p>The identifier of the revoked subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the user who revoked the subscription.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who revoked the subscription.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the revoked subscription.</p>
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was revoked.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was revoked.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The subscribed principal of the revoked subscription.</p>
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * @public
   * <p>The subscribed listing of the revoked subscription.</p>
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request for the revoked subscription.</p>
   */
  subscriptionRequestId?: string;

  /**
   * @public
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   */
  retainPermissions?: boolean;
}

/**
 * @public
 * @enum
 */
export const SearchOutputAdditionalAttribute = {
  FORMS: "FORMS",
} as const;

/**
 * @public
 */
export type SearchOutputAdditionalAttribute =
  (typeof SearchOutputAdditionalAttribute)[keyof typeof SearchOutputAdditionalAttribute];

/**
 * @public
 * <p>A search filter in Amazon DataZone.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>A search filter attribute in Amazon DataZone.</p>
   */
  attribute: string | undefined;

  /**
   * @public
   * <p>A search filter value in Amazon DataZone.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>The details of the search.</p>
 */
export interface SearchInItem {
  /**
   * @public
   * <p>The search attribute.</p>
   */
  attribute: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InventorySearchScope = {
  ASSET: "ASSET",
  GLOSSARY: "GLOSSARY",
  GLOSSARY_TERM: "GLOSSARY_TERM",
} as const;

/**
 * @public
 */
export type InventorySearchScope = (typeof InventorySearchScope)[keyof typeof InventorySearchScope];

/**
 * @public
 * <p>The details of the way to sort search results.</p>
 */
export interface SearchSort {
  /**
   * @public
   * <p>The attribute detail of the way to sort search results.</p>
   */
  attribute: string | undefined;

  /**
   * @public
   * <p>The order detail of the wya to sort search results.</p>
   */
  order?: SortOrder;
}

/**
 * @public
 * <p>The details of a business glossary.</p>
 */
export interface GlossaryItem {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the glossary.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the glossary.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the project that owns the business glosary.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The business glossary description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The business glossary status.</p>
   */
  status: GlossaryStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the glossary was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the glossary.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the business glossary was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 * <p>The details of a business glossary term.</p>
 */
export interface GlossaryTermItem {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary to which the term belongs.</p>
   */
  glossaryId: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary term.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the business glossary term.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The short description of the business glossary term.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description of the business glossary term.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The relations of the business glossary term.</p>
   */
  termRelations?: TermRelations;

  /**
   * @public
   * <p>The status of the business glossary term.</p>
   */
  status: GlossaryTermStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when a business glossary term was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the business glossary.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when a business glossary term was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 * <p>The details of the search results.</p>
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
   * @public
   * <p>The glossary item included in the search results.</p>
   */
  export interface GlossaryItemMember {
    glossaryItem: GlossaryItem;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The glossary term item included in the search results.</p>
   */
  export interface GlossaryTermItemMember {
    glossaryItem?: never;
    glossaryTermItem: GlossaryTermItem;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The asset item included in the search results.</p>
   */
  export interface AssetItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem: AssetItem;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The data product item included in the search results.</p>
   */
  export interface DataProductItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem: DataProductSummary;
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

  export interface Visitor<T> {
    glossaryItem: (value: GlossaryItem) => T;
    glossaryTermItem: (value: GlossaryTermItem) => T;
    assetItem: (value: AssetItem) => T;
    dataProductItem: (value: DataProductSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchInventoryResultItem, visitor: Visitor<T>): T => {
    if (value.glossaryItem !== undefined) return visitor.glossaryItem(value.glossaryItem);
    if (value.glossaryTermItem !== undefined) return visitor.glossaryTermItem(value.glossaryTermItem);
    if (value.assetItem !== undefined) return visitor.assetItem(value.assetItem);
    if (value.dataProductItem !== undefined) return visitor.dataProductItem(value.dataProductItem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * @public
   * <p>The results of the <code>Search</code> action.</p>
   */
  items?: SearchInventoryResultItem[];

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Total number of search results.</p>
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const GroupSearchType = {
  DATAZONE_SSO_GROUP: "DATAZONE_SSO_GROUP",
  SSO_GROUP: "SSO_GROUP",
} as const;

/**
 * @public
 */
export type GroupSearchType = (typeof GroupSearchType)[keyof typeof GroupSearchType];

/**
 * @public
 */
export interface SearchGroupProfilesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which you want to search group
   *          profiles.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The group type for which to search.</p>
   */
  groupType: GroupSearchType | undefined;

  /**
   * @public
   * <p>Specifies the text for which to search.</p>
   */
  searchText?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchGroupProfiles</code>. When the number of results to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>SearchGroupProfiles</code> to list the
   *          next set of results. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of a group profile.</p>
 */
export interface GroupProfileSummary {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain of a group profile.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The ID of a group profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status of a group profile.</p>
   */
  status?: GroupProfileStatus;

  /**
   * @public
   * <p>The group name of a group profile.</p>
   */
  groupName?: string;
}

/**
 * @public
 */
export interface SearchGroupProfilesOutput {
  /**
   * @public
   * <p>The results of the <code>SearchGroupProfiles</code> action.</p>
   */
  items?: GroupProfileSummary[];

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of the results of the <code>SearchListings</code> action.</p>
 */
export type SearchResultItem = SearchResultItem.AssetListingMember | SearchResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchResultItem {
  /**
   * @public
   * <p>The asset listing included in the results of the <code>SearchListings</code>
   *          action.</p>
   */
  export interface AssetListingMember {
    assetListing: AssetListingItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: AssetListingItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchResultItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * @public
   * <p>The results of the <code>SearchListings</code> action.</p>
   */
  items?: SearchResultItem[];

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Total number of search results.</p>
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const TypesSearchScope = {
  ASSET_TYPE: "ASSET_TYPE",
  FORM_TYPE: "FORM_TYPE",
} as const;

/**
 * @public
 */
export type TypesSearchScope = (typeof TypesSearchScope)[keyof typeof TypesSearchScope];

/**
 * @public
 * <p>The details of the metadata form type.</p>
 */
export interface FormTypeData {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the form type exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the form type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the form type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The model of the form type.</p>
   */
  model?: Model;

  /**
   * @public
   * <p>The status of the form type.</p>
   */
  status?: FormTypeStatus;

  /**
   * @public
   * <p>The identifier of the project that owns the form type.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the form type was originally
   *          created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The identifier of the project in which the form type was originally created.</p>
   */
  originProjectId?: string;

  /**
   * @public
   * <p>The timestamp of when the metadata form type was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created teh metadata form type.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The description of the metadata form type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The imports specified in the form type.</p>
   */
  imports?: Import[];
}

/**
 * @public
 * <p>The details of the results of the <code>SearchTypes</code> action.</p>
 */
export type SearchTypesResultItem =
  | SearchTypesResultItem.AssetTypeItemMember
  | SearchTypesResultItem.FormTypeItemMember
  | SearchTypesResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchTypesResultItem {
  /**
   * @public
   * <p>The asset type included in the results of the <code>SearchTypes</code> action.</p>
   */
  export interface AssetTypeItemMember {
    assetTypeItem: AssetTypeItem;
    formTypeItem?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The form type included in the results of the <code>SearchTypes</code> action.</p>
   */
  export interface FormTypeItemMember {
    assetTypeItem?: never;
    formTypeItem: FormTypeData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetTypeItem: (value: AssetTypeItem) => T;
    formTypeItem: (value: FormTypeData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchTypesResultItem, visitor: Visitor<T>): T => {
    if (value.assetTypeItem !== undefined) return visitor.assetTypeItem(value.assetTypeItem);
    if (value.formTypeItem !== undefined) return visitor.formTypeItem(value.formTypeItem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchTypesOutput {
  /**
   * @public
   * <p>The results of the <code>SearchTypes</code> action.</p>
   */
  items?: SearchTypesResultItem[];

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Total number of search results.</p>
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const UserSearchType = {
  DATAZONE_IAM_USER: "DATAZONE_IAM_USER",
  DATAZONE_SSO_USER: "DATAZONE_SSO_USER",
  DATAZONE_USER: "DATAZONE_USER",
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserSearchType = (typeof UserSearchType)[keyof typeof UserSearchType];

/**
 * @public
 */
export interface SearchUserProfilesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which you want to search user
   *          profiles.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies the user type for the <code>SearchUserProfiles</code> action.</p>
   */
  userType: UserSearchType | undefined;

  /**
   * @public
   * <p>Specifies the text for which to search.</p>
   */
  searchText?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchUserProfiles</code>. When the number of results to be listed is greater than
   *          the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value
   *          that you can use in a subsequent call to <code>SearchUserProfiles</code> to list the next
   *          set of results. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of the user profile.</p>
 */
export interface UserProfileSummary {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain of the user profile.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The ID of the user profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The type of the user profile.</p>
   */
  type?: UserProfileType;

  /**
   * @public
   * <p>The status of the user profile.</p>
   */
  status?: UserProfileStatus;

  /**
   * @public
   * <p>The details of the user profile.</p>
   */
  details?: UserProfileDetails;
}

/**
 * @public
 */
export interface SearchUserProfilesOutput {
  /**
   * @public
   * <p>The results of the <code>SearchUserProfiles</code> action.</p>
   */
  items?: UserProfileSummary[];

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be tagged in Amazon DataZone.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the tags for the <code>TagResource</code> action.</p>
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
   * @public
   * <p>The ARN of the resource to be untagged in Amazon DataZone.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the tag keys for the <code>UntagResource</code> action.</p>
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
export interface UpdateEnvironmentInput {
  /**
   * @public
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * @public
   * <p>The project identifier of the environment.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment that is to be updated.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the environment.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The profile identifier of the environment.</p>
   */
  environmentProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account in which the environment is to be
   *          updated.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the environment is updated.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The provider identifier of the environment.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The provisioned resources to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  provisionedResources?: Resource[];

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   */
  status?: EnvironmentStatus;

  /**
   * @public
   * <p>The environment actions to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * @public
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  userParameters?: CustomParameter[];

  /**
   * @public
   * <p>The last deployment of the environment.</p>
   */
  lastDeployment?: Deployment;

  /**
   * @public
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * @public
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * @public
   * <p>The blueprint identifier of the environment.</p>
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which an environment profile is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment profile that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  userParameters?: EnvironmentParameter[];

  /**
   * @public
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   */
  awsAccountRegion?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileOutput {
  /**
   * @public
   * <p>The identifier of the environment profile that is to be udpated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the environment profile is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the environment profile.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the environment profile was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment profile was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the blueprint of the environment profile that is to be updated.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The identifier of the project of the environment profile that is to be updated.</p>
   */
  projectId?: string;

  /**
   * @public
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   */
  userParameters?: CustomParameter[];
}

/**
 * @public
 */
export interface UpdateGroupProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the group profile that is updated.</p>
   */
  groupIdentifier: string | undefined;

  /**
   * @public
   * <p>The status of the group profile that is updated.</p>
   */
  status: GroupProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the group profile that is updated.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status of the group profile that is updated.</p>
   */
  status?: GroupProfileStatus;

  /**
   * @public
   * <p>The name of the group profile that is updated.</p>
   */
  groupName?: string;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a project is to be updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the project that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateProject</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateProject</code> action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The glossary terms to be updated as part of the <code>UpdateProject</code>
   *          action.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a project is updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the project that is to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the project that is to be updated.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the project that is to be updated.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the project.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the project was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the project was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The glossary terms of the project that are to be updated.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the subscription grant the status of which is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset the subscription grant status of which is to be
   *          updated.</p>
   */
  assetIdentifier: string | undefined;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  failureCause?: FailureCause;

  /**
   * @public
   * <p>The target name to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   */
  targetName?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusOutput {
  /**
   * @public
   * <p>The identifier of the subscription grant.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone domain user who created the subscription grant status.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription grant status.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant status was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant status is to be updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The identifier of the subscription target whose subscription grant status is to be
   *          updated.</p>
   */
  subscriptionTargetId: string | undefined;

  /**
   * @public
   * <p>The granted entity to be updated as part of the
   *             <code>UpdateSubscriptionGrantStatus</code> action.</p>
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * @public
   * <p/>
   */
  assets?: SubscribedAsset[];

  /**
   * @public
   * <p>The identifier of the subscription.</p>
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   */
  requestReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestOutput {
  /**
   * @public
   * <p>The identifier of the subscription request that is to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription request.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>The subscribed principals of the subscription request.</p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p>The subscribed listings of the subscription request.</p>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone user who reviews the subscription request.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>The decision comment of the <code>UpdateSubscriptionRequest</code> action.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>Identifier of the subscription target that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  authorizedPrincipals?: string[];

  /**
   * @public
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  applicableAssetTypes?: string[];

  /**
   * @public
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[];

  /**
   * @public
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  manageAccessRole?: string;

  /**
   * @public
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  provider?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetOutput {
  /**
   * @public
   * <p>Identifier of the subscription target that is to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the project in which a subscription target is to be updated.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription target.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The timestamp of when a subscription target was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription target was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  manageAccessRole: string | undefined;

  /**
   * @public
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * @public
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * @public
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the user whose user profile is to be updated.</p>
   */
  userIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the user profile that are to be updated.</p>
   */
  type?: UserProfileType;

  /**
   * @public
   * <p>The status of the user profile that are to be updated.</p>
   */
  status: UserProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the user profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The type of the user profile.</p>
   */
  type?: UserProfileType;

  /**
   * @public
   * <p>The status of the user profile.</p>
   */
  status?: UserProfileStatus;

  /**
   * @public
   * <p>The details of the user profile in Amazon DataZone.</p>
   */
  details?: UserProfileDetails;
}

/**
 * @public
 * <p>A search filter clause in Amazon DataZone.</p>
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
   * @public
   * <p>A search filter in Amazon DataZone.</p>
   */
  export interface FilterMember {
    filter: Filter;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The 'and' search filter clause in Amazon DataZone.</p>
   */
  export interface AndMember {
    filter?: never;
    and: FilterClause[];
    or?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The 'or' search filter clause in Amazon DataZone.</p>
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

  export interface Visitor<T> {
    filter: (value: Filter) => T;
    and: (value: FilterClause[]) => T;
    or: (value: FilterClause[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FilterClause, visitor: Visitor<T>): T => {
    if (value.filter !== undefined) return visitor.filter(value.filter);
    if (value.and !== undefined) return visitor.and(value.and);
    if (value.or !== undefined) return visitor.or(value.or);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the owning project specified for the search.</p>
   */
  owningProjectIdentifier?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call to <code>Search</code>. When
   *          the number of results to be listed is greater than the value of <code>MaxResults</code>,
   *          the response contains a <code>NextToken</code> value that you can use in a subsequent call
   *          to <code>Search</code> to list the next set of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The scope of the search.</p>
   */
  searchScope: InventorySearchScope | undefined;

  /**
   * @public
   * <p>Specifies the text for which to search.</p>
   */
  searchText?: string;

  /**
   * @public
   * <p/>
   */
  searchIn?: SearchInItem[];

  /**
   * @public
   * <p>Specifies the search filters.</p>
   */
  filters?: FilterClause;

  /**
   * @public
   * <p>Specifies the way in which the search results are to be sorted.</p>
   */
  sort?: SearchSort;

  /**
   * @public
   * <p>Specifies additional attributes for the <code>Search</code> action.</p>
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * @public
   * <p>The identifier of the domain in which to search listings.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies the text for which to search.</p>
   */
  searchText?: string;

  /**
   * @public
   * <p/>
   */
  searchIn?: SearchInItem[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call to <code>SearchListings</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the filters for the search of listings.</p>
   */
  filters?: FilterClause;

  /**
   * @public
   * <p>Specifies the way for sorting the search results.</p>
   */
  sort?: SearchSort;

  /**
   * @public
   * <p>Specifies additional attributes for the search.</p>
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}

/**
 * @public
 */
export interface SearchTypesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to invoke the <code>SearchTypes</code>
   *          action.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call to <code>SearchTypes</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchTypes</code> to list the next set of results.
   *       </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the scope of the search for types.</p>
   */
  searchScope: TypesSearchScope | undefined;

  /**
   * @public
   * <p>Specifies the text for which to search.</p>
   */
  searchText?: string;

  /**
   * @public
   * <p/>
   */
  searchIn?: SearchInItem[];

  /**
   * @public
   * <p>The filters for the <code>SearchTypes</code> action.</p>
   */
  filters?: FilterClause;

  /**
   * @public
   * <p>The specifies the way to sort the <code>SearchTypes</code> results.</p>
   */
  sort?: SearchSort;

  /**
   * @public
   * <p/>
   */
  managed: boolean | undefined;
}

/**
 * @internal
 */
export const SubscriptionTargetSummaryFilterSensitiveLog = (obj: SubscriptionTargetSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSubscriptionTargetsOutputFilterSensitiveLog = (obj: ListSubscriptionTargetsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionTargetSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RejectSubscriptionRequestInputFilterSensitiveLog = (obj: RejectSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RejectSubscriptionRequestOutputFilterSensitiveLog = (obj: RejectSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RevokeSubscriptionOutputFilterSensitiveLog = (obj: RevokeSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const GlossaryItemFilterSensitiveLog = (obj: GlossaryItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GlossaryTermItemFilterSensitiveLog = (obj: GlossaryTermItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchInventoryResultItemFilterSensitiveLog = (obj: SearchInventoryResultItem): any => {
  if (obj.glossaryItem !== undefined) return { glossaryItem: GlossaryItemFilterSensitiveLog(obj.glossaryItem) };
  if (obj.glossaryTermItem !== undefined)
    return { glossaryTermItem: GlossaryTermItemFilterSensitiveLog(obj.glossaryTermItem) };
  if (obj.assetItem !== undefined) return { assetItem: AssetItemFilterSensitiveLog(obj.assetItem) };
  if (obj.dataProductItem !== undefined)
    return { dataProductItem: DataProductSummaryFilterSensitiveLog(obj.dataProductItem) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchOutputFilterSensitiveLog = (obj: SearchOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchInventoryResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchGroupProfilesInputFilterSensitiveLog = (obj: SearchGroupProfilesInput): any => ({
  ...obj,
  ...(obj.searchText && { searchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupProfileSummaryFilterSensitiveLog = (obj: GroupProfileSummary): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchGroupProfilesOutputFilterSensitiveLog = (obj: SearchGroupProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => GroupProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchResultItemFilterSensitiveLog = (obj: SearchResultItem): any => {
  if (obj.assetListing !== undefined) return { assetListing: AssetListingItemFilterSensitiveLog(obj.assetListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchListingsOutputFilterSensitiveLog = (obj: SearchListingsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FormTypeDataFilterSensitiveLog = (obj: FormTypeData): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.imports && { imports: obj.imports.map((item) => ImportFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchTypesResultItemFilterSensitiveLog = (obj: SearchTypesResultItem): any => {
  if (obj.assetTypeItem !== undefined) return { assetTypeItem: AssetTypeItemFilterSensitiveLog(obj.assetTypeItem) };
  if (obj.formTypeItem !== undefined) return { formTypeItem: FormTypeDataFilterSensitiveLog(obj.formTypeItem) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchTypesOutputFilterSensitiveLog = (obj: SearchTypesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchTypesResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchUserProfilesInputFilterSensitiveLog = (obj: SearchUserProfilesInput): any => ({
  ...obj,
  ...(obj.searchText && { searchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileSummaryFilterSensitiveLog = (obj: UserProfileSummary): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const SearchUserProfilesOutputFilterSensitiveLog = (obj: SearchUserProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => UserProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentOutputFilterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const UpdateEnvironmentProfileInputFilterSensitiveLog = (obj: UpdateEnvironmentProfileInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentProfileOutputFilterSensitiveLog = (obj: UpdateEnvironmentProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateGroupProfileOutputFilterSensitiveLog = (obj: UpdateGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProjectInputFilterSensitiveLog = (obj: UpdateProjectInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProjectOutputFilterSensitiveLog = (obj: UpdateProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionRequestInputFilterSensitiveLog = (obj: UpdateSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionRequestOutputFilterSensitiveLog = (obj: UpdateSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionTargetInputFilterSensitiveLog = (obj: UpdateSubscriptionTargetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionTargetOutputFilterSensitiveLog = (obj: UpdateSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserProfileOutputFilterSensitiveLog = (obj: UpdateUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});
