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
  ProjectDeletionError,
  ProjectStatus,
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
 */
export interface RejectPredictionsOutput {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p/>
   * @public
   */
  assetRevision: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
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
  decisionComment?: string;
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
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
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
  reviewerId?: string;

  /**
   * <p>The decision comment of the rejected subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

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
  retainPermissions?: boolean;
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
  updatedBy?: string;

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
  subscriptionRequestId?: string;

  /**
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   * @public
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
   * <p>A search filter value in Amazon DataZone.</p>
   * @public
   */
  value: string | undefined;
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
  order?: SortOrder;
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
  description?: string;

  /**
   * <p>The business glossary status.</p>
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * <p>The timestamp of when the glossary was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the business glossary was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   * @public
   */
  updatedBy?: string;
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
  shortDescription?: string;

  /**
   * <p>The long description of the business glossary term.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The relations of the business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations;

  /**
   * <p>The status of the business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The timestamp of when a business glossary term was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the business glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when a business glossary term was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   * @public
   */
  updatedBy?: string;
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
   * <p>The data product item included in the search results.</p>
   * @public
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
   * <p>The results of the <code>Search</code> action.</p>
   * @public
   */
  items?: SearchInventoryResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
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
   * <p>The identifier of the Amazon DataZone domain in which you want to search group
   *          profiles.</p>
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
  searchText?: string;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchGroupProfiles</code>. When the number of results to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>SearchGroupProfiles</code> to list the
   *          next set of results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
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
  domainId?: string;

  /**
   * <p>The ID of a group profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of a group profile.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The group name of a group profile.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 */
export interface SearchGroupProfilesOutput {
  /**
   * <p>The results of the <code>SearchGroupProfiles</code> action.</p>
   * @public
   */
  items?: GroupProfileSummary[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the results of the <code>SearchListings</code> action.</p>
 * @public
 */
export type SearchResultItem = SearchResultItem.AssetListingMember | SearchResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchResultItem {
  /**
   * <p>The asset listing included in the results of the <code>SearchListings</code>
   *          action.</p>
   * @public
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
   * <p>The results of the <code>SearchListings</code> action.</p>
   * @public
   */
  items?: SearchResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
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
  model?: Model;

  /**
   * <p>The status of the form type.</p>
   * @public
   */
  status?: FormTypeStatus;

  /**
   * <p>The identifier of the project that owns the form type.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The identifier of the project in which the form type was originally created.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The timestamp of when the metadata form type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created teh metadata form type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The description of the metadata form type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The imports specified in the form type.</p>
   * @public
   */
  imports?: Import[];
}

/**
 * <p>The details of the results of the <code>SearchTypes</code> action.</p>
 * @public
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
   * <p>The asset type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  export interface AssetTypeItemMember {
    assetTypeItem: AssetTypeItem;
    formTypeItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The form type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
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
   * <p>The results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  items?: SearchTypesResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
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
   * <p>The identifier of the Amazon DataZone domain in which you want to search user
   *          profiles.</p>
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
  searchText?: string;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchUserProfiles</code>. When the number of results to be listed is greater than
   *          the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value
   *          that you can use in a subsequent call to <code>SearchUserProfiles</code> to list the next
   *          set of results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
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
  domainId?: string;

  /**
   * <p>The ID of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile.</p>
   * @public
   */
  details?: UserProfileDetails;
}

/**
 * @public
 */
export interface SearchUserProfilesOutput {
  /**
   * <p>The results of the <code>SearchUserProfiles</code> action.</p>
   * @public
   */
  items?: UserProfileSummary[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
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
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];
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
  id?: string;

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
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The profile identifier of the environment.</p>
   * @public
   */
  environmentProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account in which the environment is to be
   *          updated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which the environment is updated.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The provider identifier of the environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisionedResources?: Resource[];

  /**
   * <p>The status to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  status?: EnvironmentStatus;

  /**
   * <p>The environment actions to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  userParameters?: CustomParameter[];

  /**
   * <p>The last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * <p>The blueprint identifier of the environment.</p>
   * @public
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment profile is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment profile that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[];

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   * @public
   */
  awsAccountRegion?: string;
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
   * <p>The identifier of the Amazon DataZone domain in which the environment profile is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The Amazon DataZone user who created the environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment profile was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier of the blueprint of the environment profile that is to be updated.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The identifier of the project of the environment profile that is to be updated.</p>
   * @public
   */
  projectId?: string;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  userParameters?: CustomParameter[];
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
  domainId?: string;

  /**
   * <p>The identifier of the group profile that is updated.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of the group profile that is updated.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The name of the group profile that is updated.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a project is to be updated.</p>
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
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateProject</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];
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
  description?: string;

  /**
   * Status of the project
   * @public
   */
  projectStatus?: ProjectStatus;

  /**
   * Reasons for failed project deletion
   * @public
   */
  failureReasons?: ProjectDeletionError[];

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The glossary terms of the project that are to be updated.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription grant the status of which is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of the asset the subscription grant status of which is to be
   *          updated.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureCause?: FailureCause;

  /**
   * <p>The target name to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  targetName?: string;
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
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
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
   * <p>The identifier of the subscription target whose subscription grant status is to be
   *          updated.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The granted entity to be updated as part of the
   *             <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p/>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
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
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
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
  reviewerId?: string;

  /**
   * <p>The decision comment of the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>Identifier of the subscription target that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals?: string[];

  /**
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes?: string[];

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[];

  /**
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole?: string;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  provider?: string;
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
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project in which a subscription target is to be updated.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
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
  updatedBy?: string;

  /**
   * <p>The timestamp of when a subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
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
  type?: UserProfileType;

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
  domainId?: string;

  /**
   * <p>The identifier of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails;
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
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the owning project specified for the search.</p>
   * @public
   */
  owningProjectIdentifier?: string;

  /**
   * <p>The maximum number of results to return in a single call to <code>Search</code>. When
   *          the number of results to be listed is greater than the value of <code>MaxResults</code>,
   *          the response contains a <code>NextToken</code> value that you can use in a subsequent call
   *          to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The scope of the search.</p>
   * @public
   */
  searchScope: InventorySearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p/>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>Specifies the search filters.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>Specifies the way in which the search results are to be sorted.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p>Specifies additional attributes for the <code>Search</code> action.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
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
  searchText?: string;

  /**
   * <p/>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchListings</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the filters for the search of listings.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>Specifies the way for sorting the search results.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p>Specifies additional attributes for the search.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}

/**
 * @public
 */
export interface SearchTypesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to invoke the <code>SearchTypes</code>
   *          action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchTypes</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchTypes</code> to list the next set of results.
   *       </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the scope of the search for types.</p>
   * @public
   */
  searchScope: TypesSearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p/>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>The filters for the <code>SearchTypes</code> action.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>The specifies the way to sort the <code>SearchTypes</code> results.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p/>
   * @public
   */
  managed: boolean | undefined;
}

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
