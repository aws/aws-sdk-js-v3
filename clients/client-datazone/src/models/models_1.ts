// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionParameters,
  AssetFilterSummary,
  AssetFilterSummaryFilterSensitiveLog,
  AssetListing,
  AssetListingFilterSensitiveLog,
  AssetRevision,
  ConfigurableEnvironmentAction,
  ConnectionCredentials,
  ConnectionPropertiesOutput,
  ConnectionPropertiesOutputFilterSensitiveLog,
  ConnectionSummary,
  ConnectionSummaryFilterSensitiveLog,
  ConnectionType,
  CustomParameter,
  CustomParameterFilterSensitiveLog,
  DataProductItem,
  DataProductStatus,
  DataSourceConfigurationInput,
  DataSourceConfigurationOutput,
  DataSourceErrorMessage,
  DataSourceRunStatus,
  DataSourceStatus,
  DataZoneEntityType,
  Deployment,
  DeploymentProperties,
  DetailedGlossaryTerm,
  DetailedGlossaryTermFilterSensitiveLog,
  DomainStatus,
  DomainUnitOwnerProperties,
  DomainVersion,
  EnableSetting,
  EnvironmentConfiguration,
  EnvironmentConfigurationFilterSensitiveLog,
  EnvironmentConfigurationUserParameter,
  EnvironmentConfigurationUserParameterFilterSensitiveLog,
  EnvironmentDeploymentDetails,
  EnvironmentStatus,
  FilterStatus,
  FormInput,
  FormOutput,
  FormOutputFilterSensitiveLog,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GrantedEntity,
  GroupProfileStatus,
  ListingStatus,
  ManagedPolicyType,
  Member,
  Model,
  OwnerProperties,
  PhysicalEndpoint,
  PhysicalEndpointFilterSensitiveLog,
  PolicyGrantDetail,
  PolicyGrantPrincipal,
  ProjectDeletionError,
  ProjectStatus,
  ProvisioningProperties,
  RecommendationConfiguration,
  Resource,
  RuleAction,
  RuleDetail,
  RuleScope,
  RuleTarget,
  RuleTargetType,
  RuleType,
  ScheduleConfiguration,
  SingleSignOn,
  Status,
  SubscribedAsset,
  SubscribedListing,
  SubscribedListingFilterSensitiveLog,
  SubscribedPrincipal,
  SubscribedPrincipalFilterSensitiveLog,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  TermRelations,
  TimeSeriesDataPointSummaryFormOutput,
  UserDesignation,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const SubscriptionGrantOverallStatus = {
  COMPLETED: "COMPLETED",
  GRANT_AND_REVOKE_FAILED: "GRANT_AND_REVOKE_FAILED",
  GRANT_FAILED: "GRANT_FAILED",
  INACCESSIBLE: "INACCESSIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
} as const;

/**
 * @public
 */
export type SubscriptionGrantOverallStatus =
  (typeof SubscriptionGrantOverallStatus)[keyof typeof SubscriptionGrantOverallStatus];

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
   * @deprecated
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
   * <p>The identifier of the published asset for which the subscription grant is to be
   *          created.</p>
   * @public
   */
  identifier: string | undefined;
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
 * <p>The principal that is to be given a subscriptiong grant.</p>
 * @public
 */
export type SubscribedPrincipalInput = SubscribedPrincipalInput.ProjectMember | SubscribedPrincipalInput.$UnknownMember;

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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    project: (value: SubscribedProjectInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedPrincipalInput, visitor: Visitor<T>): T => {
    if (value.project !== undefined) return visitor.project(value.project);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata form included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormInput[] | undefined;
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
 * @enum
 */
export const UserType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The details of an IAM user profile in Amazon DataZone.</p>
 * @public
 */
export interface IamUserProfileDetails {
  /**
   * <p>The ARN of an IAM user profile in Amazon DataZone.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>The single sign-on details of the user profile.</p>
 * @public
 */
export interface SsoUserProfileDetails {
  /**
   * <p>The username included in the single sign-on details of the user profile.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The first name included in the single sign-on details of the user profile.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The last name included in the single sign-on details of the user profile.</p>
   * @public
   */
  lastName?: string | undefined;
}

/**
 * <p>The details of the user profile in Amazon DataZone.</p>
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
   * <p>The IAM details included in the user profile details.</p>
   * @public
   */
  export interface IamMember {
    iam: IamUserProfileDetails;
    sso?: never;
    $unknown?: never;
  }

  /**
   * <p>The single sign-on details included in the user profile details.</p>
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

  export interface Visitor<T> {
    iam: (value: IamUserProfileDetails) => T;
    sso: (value: SsoUserProfileDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UserProfileDetails, visitor: Visitor<T>): T => {
    if (value.iam !== undefined) return visitor.iam(value.iam);
    if (value.sso !== undefined) return visitor.sso(value.sso);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
  ACTIVATED: "ACTIVATED",
  ASSIGNED: "ASSIGNED",
  DEACTIVATED: "DEACTIVATED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;

/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 * @enum
 */
export const UserProfileType = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type UserProfileType = (typeof UserProfileType)[keyof typeof UserProfileType];

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
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const DataAssetActivityStatus = {
  FAILED: "FAILED",
  PUBLISHING_FAILED: "PUBLISHING_FAILED",
  SKIPPED_ALREADY_IMPORTED: "SKIPPED_ALREADY_IMPORTED",
  SKIPPED_ARCHIVED: "SKIPPED_ARCHIVED",
  SKIPPED_NO_ACCESS: "SKIPPED_NO_ACCESS",
  SUCCEEDED_CREATED: "SUCCEEDED_CREATED",
  SUCCEEDED_UPDATED: "SUCCEEDED_UPDATED",
  UNCHANGED: "UNCHANGED",
} as const;

/**
 * @public
 */
export type DataAssetActivityStatus = (typeof DataAssetActivityStatus)[keyof typeof DataAssetActivityStatus];

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

/**
 * <p>The summary of the listing of the data product.</p>
 * @public
 */
export interface ListingSummary {
  /**
   * <p>The ID of the data product listing.</p>
   * @public
   */
  listingId?: string | undefined;

  /**
   * <p>The revision of the data product listing.</p>
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;
}

/**
 * <p>The data product listing.</p>
 * @public
 */
export interface DataProductListing {
  /**
   * <p>The ID of the data product listing.</p>
   * @public
   */
  dataProductId?: string | undefined;

  /**
   * <p>The revision of the data product listing.</p>
   * @public
   */
  dataProductRevision?: string | undefined;

  /**
   * <p>The timestamp at which the data product listing was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The metadata forms of the data product listing.</p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The glossary terms of the data product listing.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The ID of the owning project of the data product listing.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The data assets of the data product listing.</p>
   * @public
   */
  items?: ListingSummary[] | undefined;
}

/**
 * <p>The additional attributes of the asset of the data product. </p>
 * @public
 */
export interface DataProductListingItemAdditionalAttributes {
  /**
   * <p>The metadata forms of the asset of the data product. </p>
   * @public
   */
  forms?: string | undefined;
}

/**
 * <p>The results of the data product summary.</p>
 * @public
 */
export interface ListingSummaryItem {
  /**
   * <p>The ID of the data product listing.</p>
   * @public
   */
  listingId?: string | undefined;

  /**
   * <p>The revision of the data product listing.</p>
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * <p>The glossary terms of the data product listing.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;
}

/**
 * <p>The asset of the data product listing.</p>
 * @public
 */
export interface DataProductListingItem {
  /**
   * <p>The ID of the listing.</p>
   * @public
   */
  listingId?: string | undefined;

  /**
   * <p>The revision of the listing.</p>
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * <p>The name of the asset of the data product. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The entity ID of the asset of the asset of the data product. </p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the asset of the asset of the data product. </p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The description of the asset of the asset of the data product. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the asset of the data product listing was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which the listing was created.</p>
   * @public
   */
  listingCreatedBy?: string | undefined;

  /**
   * <p>The user who updated the listing.</p>
   * @public
   */
  listingUpdatedBy?: string | undefined;

  /**
   * <p>The glossary terms of the asset of the asset of the data product. </p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The ID of the owning project of the asset of the data product. </p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The additional attributes of the asset of the data product.</p>
   * @public
   */
  additionalAttributes?: DataProductListingItemAdditionalAttributes | undefined;

  /**
   * <p>The data of the asset of the data product. </p>
   * @public
   */
  items?: ListingSummaryItem[] | undefined;
}

/**
 * <p>The data product.</p>
 * @public
 */
export interface DataProductResultItem {
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
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectId: string | undefined;

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
   * <p>The timestamp at which first revision of the data product was created.</p>
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
 * <p>The data product revision.</p>
 * @public
 */
export interface DataProductRevision {
  /**
   * <p>The ID of the domain where the data product revision lives.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The data product revision.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The timestamp at which the data product revision was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product revision.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source that is deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   *
   * @deprecated
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SelfGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;

/**
 * @public
 */
export type SelfGrantStatus = (typeof SelfGrantStatus)[keyof typeof SelfGrantStatus];

/**
 * <p>The details for the self granting status.</p>
 * @public
 */
export interface SelfGrantStatusDetail {
  /**
   * <p>The name of the database used for the data source.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the schema used in the data source.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The self granting status of the data source.</p>
   * @public
   */
  status: SelfGrantStatus | undefined;

  /**
   * <p>The reason for why the operation failed.</p>
   * @public
   */
  failureCause?: string | undefined;
}

/**
 * <p>The details of the self granting status.</p>
 * @public
 */
export interface GlueSelfGrantStatusOutput {
  /**
   * <p>The details for the self granting status for a Glue data source.</p>
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * <p>The details for the self granting status for an Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftSelfGrantStatusOutput {
  /**
   * <p>The details for the self granting status for an Amazon Redshift data source.</p>
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * <p>The details for the self granting status for a data source.</p>
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
   * <p>The details for the self granting status for a Glue data source.</p>
   * @public
   */
  export interface GlueSelfGrantStatusMember {
    glueSelfGrantStatus: GlueSelfGrantStatusOutput;
    redshiftSelfGrantStatus?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for the self granting status for an Amazon Redshift data source.</p>
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

  export interface Visitor<T> {
    glueSelfGrantStatus: (value: GlueSelfGrantStatusOutput) => T;
    redshiftSelfGrantStatus: (value: RedshiftSelfGrantStatusOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelfGrantStatusOutput, visitor: Visitor<T>): T => {
    if (value.glueSelfGrantStatus !== undefined) return visitor.glueSelfGrantStatus(value.glueSelfGrantStatus);
    if (value.redshiftSelfGrantStatus !== undefined)
      return visitor.redshiftSelfGrantStatus(value.redshiftSelfGrantStatus);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface DeleteDataSourceOutput {
  /**
   * <p>The ID of the data source that is deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of this data source.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The type of this data source.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name of the data source that is deleted.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source that is deleted.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project in which this data source exists and from which it's
   *          deleted.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environemnt associated with this data source.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the connection that is deleted.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The configuration of the data source that is deleted.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * <p>The enable setting of the data source that specifies whether the data source is enabled
   *          or disabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The asset data forms associated with this data source.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The schedule of runs for this data source.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The status of the last run of this data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp of when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when this data source was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this data source was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDataSourceInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone data source.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceOutput {
  /**
   * <p>The ID of the data source.</p>
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
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project where the data source creates and publishes assets.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment where this data source creates and publishes assets,</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The configuration of the data source.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * <p>The recommendation configuration of the data source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies whether this data source is enabled or not.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The metadata forms attached to the assets created by this data source.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The status of the last run of the data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp of the last run of the data source.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The number of assets created by the data source during its last run.</p>
   * @public
   */
  lastRunAssetCount?: number | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
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

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to list the data sources.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project in which to list data sources.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment in which to list the data sources.</p>
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionIdentifier?: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of data sources to return in a single call to
   *             <code>ListDataSources</code>. When the number of data sources to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListDataSources</code> to list the
   *          next set of data sources.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of the data source.</p>
 * @public
 */
export interface DataSourceSummary {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the environment in which the data source exists.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection ID that's part of the data source summary.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The ID of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>The details of the schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The status of the last data source run.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp of when the data source run was last performed.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The count of the assets created during the last data source run.</p>
   * @public
   */
  lastRunAssetCount?: number | undefined;

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

  /**
   * <p>The data source description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesOutput {
  /**
   * <p>The results of the <code>ListDataSources</code> action.</p>
   * @public
   */
  items: DataSourceSummary[] | undefined;

  /**
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceInput {
  /**
   * <p>The identifier of the domain in which to update a data source.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  assetFormsInput?: FormInput[] | undefined;

  /**
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  configuration?: DataSourceConfigurationInput | undefined;

  /**
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceOutput {
  /**
   * <p>The identifier of the data source to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The type to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a data source is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project where data source is to be updated.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment in which a data source is to be updated.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection ID.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The last run status of the data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp of when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>The last run error message of the data source.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput | undefined;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const LineageImportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type LineageImportStatus = (typeof LineageImportStatus)[keyof typeof LineageImportStatus];

/**
 * <p>The run lineage summary of a data source.</p>
 * @public
 */
export interface DataSourceRunLineageSummary {
  /**
   * <p>The import status that's part of the run lineage summary of a data source.</p>
   * @public
   */
  importStatus?: LineageImportStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceRunType = {
  PRIORITIZED: "PRIORITIZED",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type DataSourceRunType = (typeof DataSourceRunType)[keyof typeof DataSourceRunType];

/**
 * @public
 */
export interface GetDataSourceRunInput {
  /**
   * <p>The ID of the domain in which this data source run was performed.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data source run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The asset statistics from the data source run.</p>
 * @public
 */
export interface RunStatisticsForAssets {
  /**
   * <p>The <code>added</code> statistic for the data source run.</p>
   * @public
   */
  added?: number | undefined;

  /**
   * <p>The <code>updated</code> statistic for the data source run.</p>
   * @public
   */
  updated?: number | undefined;

  /**
   * <p>The <code>unchanged</code> statistic for the data source run.</p>
   * @public
   */
  unchanged?: number | undefined;

  /**
   * <p>The <code>skipped</code> statistic for the data source run.</p>
   * @public
   */
  skipped?: number | undefined;

  /**
   * <p>The <code>failed</code> statistic for the data source run.</p>
   * @public
   */
  failed?: number | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRunOutput {
  /**
   * <p>The ID of the domain in which this data source run was performed.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data source for this data source run.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The ID of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the project in which this data source run occured.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The status of this data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The type of this data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The configuration snapshot of the data source run.</p>
   * @public
   */
  dataSourceConfigurationSnapshot?: string | undefined;

  /**
   * <p>The asset statistics from this data source run.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * <p>The summary of the data lineage.</p>
   * @public
   */
  lineageSummary?: DataSourceRunLineageSummary | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when the data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when this data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when this data source run started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp of when this data source run stopped.</p>
   * @public
   */
  stoppedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to invoke the
   *             <code>ListDataSourceRuns</code> action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceIdentifier: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceRunStatus | undefined;

  /**
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of runs to return in a single call to
   *          <code>ListDataSourceRuns</code>. When the number of runs to be listed is greater than the
   *          value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that
   *          you can use in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a data source run.</p>
 * @public
 */
export interface DataSourceRunSummary {
  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the data source of the data source run.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The type of the data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The project ID of the data source run.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The asset statistics from the data source run.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when a data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when a data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when a data source run was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp of when a data source run was stopped.</p>
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * <p>The run lineage summary of a data source.</p>
   * @public
   */
  lineageSummary?: DataSourceRunLineageSummary | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunsOutput {
  /**
   * <p>The results of the <code>ListDataSourceRuns</code> action.</p>
   * @public
   */
  items: DataSourceRunSummary[] | undefined;

  /**
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceRunInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceRunOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The type of the data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The configuration snapshot of the data source that is being run.</p>
   * @public
   */
  dataSourceConfigurationSnapshot?: string | undefined;

  /**
   * <p>Specifies run statistics for assets.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data source run was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the data source run was stopped.</p>
   * @public
   */
  stoppedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const LineageEventProcessingStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  REQUESTED: "REQUESTED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type LineageEventProcessingStatus =
  (typeof LineageEventProcessingStatus)[keyof typeof LineageEventProcessingStatus];

/**
 * <p>The data lineage information.</p>
 * @public
 */
export interface LineageInfo {
  /**
   * <p>The data lineage event ID.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>The data lineage event status.</p>
   * @public
   */
  eventStatus?: LineageEventProcessingStatus | undefined;

  /**
   * <p>The data lineage error message.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The activity details of the data source run.</p>
 * @public
 */
export interface DataSourceRunActivity {
  /**
   * <p>The database included in the data source run activity.</p>
   * @public
   */
  database: string | undefined;

  /**
   * <p>The identifier of the data source for the data source run activity.</p>
   * @public
   */
  dataSourceRunId: string | undefined;

  /**
   * <p>The technical name included in the data source run activity.</p>
   * @public
   */
  technicalName: string | undefined;

  /**
   * <p>The status of the asset included in the data source run activity.</p>
   * @public
   */
  dataAssetStatus: DataAssetActivityStatus | undefined;

  /**
   * <p>The project ID included in the data source run activity.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the asset included in the data source run activity.</p>
   * @public
   */
  dataAssetId?: string | undefined;

  /**
   * <p>The technical description included in the data source run activity.</p>
   * @public
   */
  technicalDescription?: string | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The data lineage summary.</p>
   * @public
   */
  lineageSummary?: LineageInfo | undefined;

  /**
   * <p>The timestamp of when data source run activity was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when data source run activity was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAssetFilterInput {
  /**
   * <p>The ID of the domain where you want to delete an asset filter.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The ID of the asset filter that you want to delete.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * <p>The ID of the domain where the connection is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the connection that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionOutput {
  /**
   * <p>The status of the action.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which an environment action is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment where an environment action is deleted.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment profile is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment profile that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies the optional flag to delete all child entities within the project.</p>
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
   * <p>The ID of the Amazon DataZone domain where project membership is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project the membership to which is deleted.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The project member whose project membership is deleted.</p>
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
   * <p>The ID of the domain where a project profile is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project profile that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain where the subscription grant is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription grant that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionGrantOutput {
  /**
   * <p>The ID of the subscription grant that is deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription grant that is deleted.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant that is deleted.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is deleted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant that is deleted was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant that is deleted was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ID of the subscription target associated with the subscription grant that is
   *          deleted.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is deleted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant that is deleted.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets for which the subsctiption grant that is deleted gave access.</p>
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * <p>The identifier of the subsctiption whose subscription grant is to be deleted.</p>
   *
   * @deprecated
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionRequestInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription request is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription request that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment in which the subscription target is deleted.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeSeriesEntityType = {
  ASSET: "ASSET",
  LISTING: "LISTING",
} as const;

/**
 * @public
 */
export type TimeSeriesEntityType = (typeof TimeSeriesEntityType)[keyof typeof TimeSeriesEntityType];

/**
 * @public
 */
export interface DeleteTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset for which you want to delete
   *          a time series form.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to delete a time series form.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to delete a time series form.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The name of the time series form that you want to delete.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
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
   * <p>The ID of the Amazon DataZone domain in which an environment role is disassociated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment.</p>
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
export interface DisassociateEnvironmentRoleOutput {}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * <p>The identifier of the Amazon Web Services domain that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the optional flag to delete all child entities within the domain.</p>
   * @public
   */
  skipDeletionCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * <p>The status of the domain.</p>
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the root domain in Amazon Datazone.</p>
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
   * <p>The single sing-on option of the specified Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role with which the Amazon DataZone domain is created.</p>
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * <p>The ARN of the specified Amazon DataZone domain.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The status of the specified Amazon DataZone domain.</p>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * <p>The timestamp of when the Amazon DataZone domain was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the Amazon DataZone domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the domain.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * <p>The service role of the domain.</p>
   * @public
   */
  serviceRole?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>The maximum number of domains to return in a single call to <code>ListDomains</code>.
   *          When the number of domains to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of a Amazon DataZone domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A name of an Amazon DataZone domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of an Amazon DataZone domain.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the Amazon DataZone domain.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that manages the domain.</p>
   * @public
   */
  managedAccountId: string | undefined;

  /**
   * <p>The status of the Amazon DataZone domain.</p>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p>The data portal URL for the Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * <p>A timestamp of when a Amazon DataZone domain was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A timestamp of when a Amazon DataZone domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The domain version.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * <p>The results of the <code>ListDomains</code> action.</p>
   * @public
   */
  items: DomainSummary[] | undefined;

  /**
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainInput {
  /**
   * <p>The ID of the Amazon Web Services domain that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single sign-on option to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * <p>The service role of the domain.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainOutput {
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
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single sign-on option of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * <p>The service role of the domain.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies the timestamp of when the domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDomainUnitInput {
  /**
   * <p>The ID of the domain where you want to delete a domain unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the domain unit that you want to delete.</p>
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
   * <p>The ID of the domain where you want to get a domain unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the domain unit that you want to get.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainUnitOutput {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain in which the domain unit lives.</p>
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
   * <p>The time stamp at which the domain unit was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which the domain unit was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The user who created the domain unit.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The user who last updated the domain unit.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainUnitsForParentInput {
  /**
   * <p>The ID of the domain in which you want to list domain units for a parent domain
   *          unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitIdentifier: string | undefined;

  /**
   * <p>The maximum number of domain units to return in a single call to
   *          ListDomainUnitsForParent. When the number of domain units to be listed is greater than the
   *          value of MaxResults, the response contains a NextToken value that you can use in a
   *          subsequent call to ListDomainUnitsForParent to list the next set of domain units.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of domain units is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of domain units, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set
   *          of domain units.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The summary of the domain unit.</p>
 * @public
 */
export interface DomainUnitSummary {
  /**
   * <p>The name of the domain unit summary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the domain unit summary.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListDomainUnitsForParentOutput {
  /**
   * <p>The results returned by this action.</p>
   * @public
   */
  items: DomainUnitSummary[] | undefined;

  /**
   * <p>When the number of domain units is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of domain units, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set
   *          of domain units.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainUnitInput {
  /**
   * <p>The ID of the domain where you want to update a domain unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the domain unit that you want to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The description of the domain unit that you want to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the domain unit that you want to update.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainUnitOutput {
  /**
   * <p>The ID of the domain unit that you want to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where you want to update the domain unit.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the domain unit that you want to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The owners of the domain unit that you want to update.</p>
   * @public
   */
  owners: DomainUnitOwnerProperties[] | undefined;

  /**
   * <p>The description of the domain unit that you want to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitId?: string | undefined;

  /**
   * <p>The time stamp at which the domain unit that you want to update was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which the domain unit was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The user who created the domain unit that you want to update.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The user who last updated the domain unit.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the blueprint configuration is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the blueprint the configuration of which is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>He ID of the blueprint.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * <p>The Lake Formation configuration of the Data Lake blueprint.</p>
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * <p>The role that is used to manage read/write access to the chosen Amazon S3 bucket(s) for
   *          Data Lake using Amazon Web Services Lake Formation hybrid access mode.</p>
   * @public
   */
  locationRegistrationRole?: string | undefined;

  /**
   * <p>Specifies certain Amazon S3 locations if you do not want Amazon DataZone to
   *          automatically register them in hybrid mode. </p>
   * @public
   */
  locationRegistrationExcludeS3Locations?: string[] | undefined;
}

/**
 * <p>The provisioning configuration of the blueprint.</p>
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
   * <p>The Lake Formation configuration of the Data Lake blueprint.</p>
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

  export interface Visitor<T> {
    lakeFormationConfiguration: (value: LakeFormationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProvisioningConfiguration, visitor: Visitor<T>): T => {
    if (value.lakeFormationConfiguration !== undefined)
      return visitor.lakeFormationConfiguration(value.lakeFormationConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationOutput {
  /**
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role with which this blueprint is created.</p>
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * <p>The environment role permissions boundary.</p>
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * <p>The ARN of the manage access role with which this blueprint is created.</p>
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services regions in which this blueprint is enabled.</p>
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * <p>The regional parameters of the blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The timestamp of when this blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this blueprint was upated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of blueprint configurations to return in a single call to
   *             <code>ListEnvironmentBlueprintConfigurations</code>. When the number of configurations
   *          to be listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration details of an environment blueprint.</p>
 * @public
 */
export interface EnvironmentBlueprintConfigurationItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment blueprint exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role specified in the environment blueprint
   *          configuration.</p>
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * <p>The environment role permission boundary.</p>
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * <p>The ARN of the manage access role specified in the environment blueprint
   *          configuration.</p>
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * <p>The enabled Amazon Web Services Regions specified in a blueprint configuration.</p>
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * <p>The regional parameters of the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The timestamp of when an environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the environment blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsOutput {
  /**
   * <p>The results of the <code>ListEnvironmentBlueprintConfigurations</code> action.</p>
   * @public
   */
  items?: EnvironmentBlueprintConfigurationItem[] | undefined;

  /**
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * <p>The ARN of the provisioning role.</p>
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * <p>The ARN of the manage access role.</p>
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * <p>The environment role permissions boundary.</p>
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   * @public
   */
  enabledRegions: string[] | undefined;

  /**
   * <p>The regional parameters in the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role.</p>
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * <p>The environment role permissions boundary.</p>
   * @public
   */
  environmentRolePermissionBoundary?: string | undefined;

  /**
   * <p>The ARN of the manage access role.</p>
   * @public
   */
  manageAccessRoleArn?: string | undefined;

  /**
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   * @public
   */
  enabledRegions?: string[] | undefined;

  /**
   * <p>The regional parameters in the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The timestamp of when the environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the environment blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata form type is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata form type that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata form type.</p>
   * @public
   */
  formTypeIdentifier: string | undefined;

  /**
   * <p>The revision of this metadata form type.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * <p>The details of the import of the metadata form type.</p>
 * @public
 */
export interface Import {
  /**
   * <p>The name of the import.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the import.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The model of the metadata form type.</p>
   * @public
   */
  model: Model | undefined;

  /**
   * <p>The ID of the project that owns this metadata form type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the project in which this metadata form type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The status of the metadata form type.</p>
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * <p>The timestamp of when this metadata form type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created this metadata form type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The description of the metadata form type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The imports of the metadata form type.</p>
   * @public
   */
  imports?: Import[] | undefined;
}

/**
 * @public
 */
export interface GetAssetFilterInput {
  /**
   * <p>The ID of the domain where you want to get an asset filter.</p>
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
}

/**
 * @public
 */
export interface GetConnectionInput {
  /**
   * <p>The ID of the domain where we get the connection.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The connection ID.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies whether a connection has a secret.</p>
   * @public
   */
  withSecret?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * <p>Connection credentials.</p>
   * @public
   */
  connectionCredentials?: ConnectionCredentials | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>Connection description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The domain ID of the connection.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The domain unit ID of the connection.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The environment user role.</p>
   * @public
   */
  environmentUserRole?: string | undefined;

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
   * <p>The ID of the project.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>Connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * <p>The type of the connection.</p>
   * @public
   */
  type: ConnectionType | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
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
   * <p>The timestamp of when this environment was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the environment profile with which the environment is created.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account where the environment exists.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region where the environment exists.</p>
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
   * <p>The actions of the environment.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * <p>The business glossary terms that can be used in this environment.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The details of the last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties of the environment.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The blueprint with which the environment is created.</p>
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * <p>The configuration ID that is used to create the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the <code>GetEnvironmentAction</code> API is
   *          invoked. </p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentActionOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment action lives.</p>
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
export interface GetEnvironmentBlueprintInput {
  /**
   * <p>The identifier of the domain in which this blueprint exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of this Amazon DataZone blueprint.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintOutput {
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
   * <p>The user parameters of this blueprint.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The glossary terms attached to this Amazon DataZone blueprint.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>A timestamp of when this blueprint was created.</p>
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
export interface GetEnvironmentCredentialsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment and its credentials
   *          exist.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment whose credentials this operation gets.</p>
   * @public
   */
  environmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentCredentialsOutput {
  /**
   * <p>The access key ID of the environment.</p>
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * <p>The secret access key of the environment credentials.</p>
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * <p>The session token of the environment credentials.</p>
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * <p>The expiration timestamp of the environment credentials.</p>
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment profile.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileOutput {
  /**
   * <p>The ID of the environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account where this environment profile exists.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region where this environment profile exists.</p>
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
   * <p>The timestamp of when this environment profile was upated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of the environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment profile.</p>
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
   * <p>The user parameters of the environment profile.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * <p>The name of the group for which the specified group profile exists.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlInput {
  /**
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   * @public
   */
  domainIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlOutput {
  /**
   * <p>The data portal URL of the specified Amazon DataZone domain.</p>
   * @public
   */
  authCodeUrl?: string | undefined;

  /**
   * <p>The ID of the user profile.</p>
   * @public
   */
  userProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetJobRunInput {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The SQL query run details of a data lineage run.</p>
 * @public
 */
export interface LineageSqlQueryRunDetails {
  /**
   * <p>The query start time in the SQL query run details of a data lineage run.</p>
   * @public
   */
  queryStartTime?: Date | undefined;

  /**
   * <p>The query end time in the SQL query run details of a data lineage run.</p>
   * @public
   */
  queryEndTime?: Date | undefined;

  /**
   * <p>The total queries processed in the SQL query run details of a data lineage run.</p>
   * @public
   */
  totalQueriesProcessed?: number | undefined;

  /**
   * <p>The number of queries that failed in the SQL query run details of a data lineage
   *          run.</p>
   * @public
   */
  numQueriesFailed?: number | undefined;

  /**
   * <p>The error message of the SQL query run details of a data lineage run.</p>
   * @public
   */
  errorMessages?: string[] | undefined;
}

/**
 * <p>The data lineage run details.</p>
 * @public
 */
export interface LineageRunDetails {
  /**
   * <p>The SQL query run details of a data lineage run.</p>
   * @public
   */
  sqlQueryRunDetails?: LineageSqlQueryRunDetails | undefined;
}

/**
 * <p>The details of a job run.</p>
 * @public
 */
export type JobRunDetails = JobRunDetails.LineageRunDetailsMember | JobRunDetails.$UnknownMember;

/**
 * @public
 */
export namespace JobRunDetails {
  /**
   * <p>The data lineage details of a job run.</p>
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

  export interface Visitor<T> {
    lineageRunDetails: (value: LineageRunDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobRunDetails, visitor: Visitor<T>): T => {
    if (value.lineageRunDetails !== undefined) return visitor.lineageRunDetails(value.lineageRunDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The job run error.</p>
 * @public
 */
export interface JobRunError {
  /**
   * <p>The job run error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobType = {
  LINEAGE: "LINEAGE",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobRunMode = {
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type JobRunMode = (typeof JobRunMode)[keyof typeof JobRunMode];

/**
 * @public
 * @enum
 */
export const JobRunStatus = {
  ABORTED: "ABORTED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  SCHEDULED: "SCHEDULED",
  SUCCESS: "SUCCESS",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type JobRunStatus = (typeof JobRunStatus)[keyof typeof JobRunStatus];

/**
 * @public
 */
export interface GetJobRunOutput {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The type of the job run.</p>
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * <p>The mode of the job run.</p>
   * @public
   */
  runMode?: JobRunMode | undefined;

  /**
   * <p>The details of the job run.</p>
   * @public
   */
  details?: JobRunDetails | undefined;

  /**
   * <p>The status of the job run.</p>
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * <p>The error generated if the action is not completed successfully.</p>
   * @public
   */
  error?: JobRunError | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the job run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the job run started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The timestamp of when the job run ended.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageEventInput {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the lineage event.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetLineageEventOutput {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the lineage event.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The lineage event details.</p>
   * @public
   */
  event?: Uint8Array | undefined;

  /**
   * <p>The user who created the lineage event.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The progressing status of the lineage event.</p>
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * <p>The time of the lineage event.</p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>The timestamp of when the lineage event was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageNodeInput {
  /**
   * <p>The ID of the domain in which you want to get the data lineage node.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data lineage node that you want to get.</p>
   *          <p>Both, a lineage node identifier generated by Amazon DataZone and a
   *             <code>sourceIdentifier</code> of the lineage node are supported. If
   *             <code>sourceIdentifier</code> is greater than 1800 characters, you can use lineage node
   *          identifier generated by Amazon DataZone to get the node details.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The event time stamp for which you want to get the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;
}

/**
 * <p>The reference details for the data lineage node.</p>
 * @public
 */
export interface LineageNodeReference {
  /**
   * <p>The ID of the data lineage node.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The event timestamp of the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetLineageNodeOutput {
  /**
   * <p>The ID of the domain where you're getting the data lineage node.</p>
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
   * <p>The name of the type of the specified data lineage node.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The revision type of the specified data lineage node.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The source identifier of the data lineage node.</p>
   * @public
   */
  sourceIdentifier?: string | undefined;

  /**
   * <p>The timestamp of the event described in the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * <p>The metadata of the specified data lineage node.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The upstream nodes of the specified data lineage node.</p>
   * @public
   */
  upstreamNodes?: LineageNodeReference[] | undefined;

  /**
   * <p>The downsteam nodes of the specified data lineage node.</p>
   * @public
   */
  downstreamNodes?: LineageNodeReference[] | undefined;
}

/**
 * @public
 */
export interface GetProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>&gt;The ID of the project.</p>
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
   * <p>The status of the project.</p>
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
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
   * <p>The business glossary terms that can be used in the project.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The ID of the project profile of a project.</p>
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * <p>The user parameters of a project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * <p>The environment deployment status of a project.</p>
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;
}

/**
 * @public
 */
export interface GetProjectProfileInput {
  /**
   * <p>The ID of the domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project profile.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectProfileOutput {
  /**
   * <p>The ID of the domain of the project profile.</p>
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
   * <p>The description of the project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the project profile.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The environment configurations of the project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>The user who created the project profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when project profile was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ID of the domain unit of the project profile.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The principal that owns the subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The details of the published asset for which the subscription grant is created.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The ID of the subscription request.</p>
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * <p>The retain permissions of the subscription.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantOutput {
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
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant was upated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The subscription target ID associated with the subscription grant.</p>
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
   * <p>The identifier of the subscription.</p>
   *
   * @deprecated
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to get the subscription request
   *          details.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request the details of which to get.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsOutput {
  /**
   * <p>The identifier of the subscription request.</p>
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
   * <p>The Amazon DataZone domain of the subscription request.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the specified subscription request was created.</p>
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
   * <p>The subscribed principals in the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The subscribed listings in the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who reviewed the subscription request.</p>
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
   * <p>The metadata forms included in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment associated with the subscription target.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetOutput {
  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project associated with the subscription target.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment associated with the subscription target.</p>
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
   * <p>The asset types associated with the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration of teh subscription target.</p>
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
export interface GetTimeSeriesDataPointInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset for which you want to get the
   *          data point.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to get the data point.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to get the data point.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The ID of the data point that you want to get.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the time series form that houses the data point that you want to get.</p>
   * @public
   */
  formName: string | undefined;
}

/**
 * <p>The time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointFormOutput {
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

  /**
   * <p>The ID of the time series data points form.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesDataPointOutput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset data point that you want to
   *          get.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The ID of the asset for which you want to get the data point.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The type of the asset for which you want to get the data point.</p>
   * @public
   */
  entityType?: TimeSeriesEntityType | undefined;

  /**
   * <p>The name of the time series form that houses the data point that you want to get.</p>
   * @public
   */
  formName?: string | undefined;

  /**
   * <p>The time series form that houses the data point that you want to get.</p>
   * @public
   */
  form?: TimeSeriesDataPointFormOutput | undefined;
}

/**
 * @public
 */
export interface GetUserProfileInput {
  /**
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user for which you want to get the user profile.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType | undefined;
}

/**
 * @public
 */
export interface GetUserProfileOutput {
  /**
   * <p>the identifier of the Amazon DataZone domain of which you want to get the user
   *          profile.</p>
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
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the business glossary is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the project that owns this business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the business glossary.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the business glossary.</p>
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * <p>The timestamp of when this business glossary was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created this business glossary.</p>
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
}

/**
 * @public
 */
export interface UpdateGlossaryInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the business glossary to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGlossaryOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the project in which to update a business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the business glossary term is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary term that is deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary term.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary to which this term belongs.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The ID of the business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The short decription of the business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

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
   * <p>The timestamp of when the business glossary term was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the business glossary.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the business glossary term was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGlossaryTermInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   * @public
   */
  glossaryIdentifier?: string | undefined;

  /**
   * <p>The identifier of the business glossary term that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  status?: GlossaryTermStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGlossaryTermOutput {
  /**
   * <p>The identifier of the business glossary term that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;
}

/**
 * @public
 */
export interface ListAssetFiltersInput {
  /**
   * <p>The ID of the domain where you want to list asset filters.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The status of the asset filter.</p>
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * <p>When the number of asset filters is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of asset filters, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetFilters</code> to
   *          list the next set of asset filters.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of asset filters to return in a single call to
   *             <code>ListAssetFilters</code>. When the number of asset filters to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListAssetFilters</code> to list the
   *          next set of asset filters.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetFiltersOutput {
  /**
   * <p>The results of the <code>ListAssetFilters</code> action.</p>
   * @public
   */
  items: AssetFilterSummary[] | undefined;

  /**
   * <p>When the number of asset filters is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of asset filters, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetFilters</code> to
   *          list the next set of asset filters.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetRevisionsInput {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of revisions to return in a single call to
   *             <code>ListAssetRevisions</code>. When the number of revisions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListAssetRevisions</code> to list the
   *          next set of revisions.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetRevisionsOutput {
  /**
   * <p>The results of the <code>ListAssetRevisions</code> action.</p>
   * @public
   */
  items?: AssetRevision[] | undefined;

  /**
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortFieldConnection = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type SortFieldConnection = (typeof SortFieldConnection)[keyof typeof SortFieldConnection];

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
 */
export interface ListConnectionsInput {
  /**
   * <p>The ID of the domain where you want to list connections.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of connections to return in a single call to ListConnections. When
   *          the number of connections to be listed is greater than the value of MaxResults, the
   *          response contains a NextToken value that you can use in a subsequent call to
   *          ListConnections to list the next set of connections.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of connections is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of connections, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListConnections to list the next set of
   *          connections.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies how you want to sort the listed connections.</p>
   * @public
   */
  sortBy?: SortFieldConnection | undefined;

  /**
   * <p>Specifies the sort order for the listed connections.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the environment where you want to list connections.</p>
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * <p>The ID of the project where you want to list connections.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The type of connection.</p>
   * @public
   */
  type?: ConnectionType | undefined;
}

/**
 * @public
 */
export interface ListConnectionsOutput {
  /**
   * <p>The results of the ListConnections action.</p>
   * @public
   */
  items: ConnectionSummary[] | undefined;

  /**
   * <p>When the number of connections is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of connections, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListConnections to list the next set of
   *          connections.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataProductRevisionsInput {
  /**
   * <p>The ID of the domain of the data product revisions that you want to list.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The maximum number of asset filters to return in a single call to
   *             <code>ListDataProductRevisions</code>. When the number of data product revisions to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListDataProductRevisions</code> to list the next set of data product
   *          revisions.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of data product revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data product revisions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataProductRevisions</code> to list the next set of data product
   *          revisions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataProductRevisionsOutput {
  /**
   * <p>The results of the <code>ListDataProductRevisions</code> action.</p>
   * @public
   */
  items: DataProductRevision[] | undefined;

  /**
   * <p>When the number of data product revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data product revisions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataProductRevisions</code> to list the next set of data product
   *          revisions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to list data source run
   *          activities.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status?: DataAssetActivityStatus | undefined;

  /**
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of activities to return in a single call to
   *             <code>ListDataSourceRunActivities</code>. When the number of activities to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesOutput {
  /**
   * <p>The results of the <code>ListDataSourceRunActivities</code> action.</p>
   * @public
   */
  items: DataSourceRunActivity[] | undefined;

  /**
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityOwnersInput {
  /**
   * <p>The ID of the domain where you want to list entity owners.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the entity that you want to list.</p>
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * <p>The ID of the entity that you want to list.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The maximum number of entities to return in a single call to
   *             <code>ListEntityOwners</code>. When the number of entities to be listed is greater than
   *          the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value
   *          that you can use in a subsequent call to <code>ListEntityOwners</code> to list the next set
   *          of entities.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of entities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of entities, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEntityOwners</code> to
   *          list the next set of entities.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The properties of the domain unit owners group.</p>
 * @public
 */
export interface OwnerGroupPropertiesOutput {
  /**
   * <p>The ID of the domain unit owners group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>The properties of the owner user.</p>
 * @public
 */
export interface OwnerUserPropertiesOutput {
  /**
   * <p>The ID of the owner user.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>The ID of the domain unit owners group.</p>
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
   * <p>Specifies that the domain unit owner is a user.</p>
   * @public
   */
  export interface UserMember {
    user: OwnerUserPropertiesOutput;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that the domain unit owner is a group.</p>
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

  export interface Visitor<T> {
    user: (value: OwnerUserPropertiesOutput) => T;
    group: (value: OwnerGroupPropertiesOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OwnerPropertiesOutput, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListEntityOwnersOutput {
  /**
   * <p>The owners of the entity.</p>
   * @public
   */
  owners: OwnerPropertiesOutput[] | undefined;

  /**
   * <p>When the number of entities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of entities, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEntityOwners</code> to
   *          list the next set of entities.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentActionsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment actions are listed.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the envrironment whose environment actions are listed.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>When the number of environment actions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment actions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironmentActions</code>
   *          to list the next set of environment actions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of environment actions to return in a single call to
   *             <code>ListEnvironmentActions</code>. When the number of environment actions to be listed
   *          is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentActions</code> to list the next set of environment actions.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details about the specified action configured for an environment. For example, the
 *          details of the specified console links for an analytics tool that is available in this
 *          environment.</p>
 * @public
 */
export interface EnvironmentActionSummary {
  /**
   * <p>The Amazon DataZone domain ID of the environment action.</p>
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
   * <p>The environment action description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentActionsOutput {
  /**
   * <p>The results of <code>ListEnvironmentActions</code>.</p>
   * @public
   */
  items?: EnvironmentActionSummary[] | undefined;

  /**
   * <p>When the number of environment actions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment actions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironmentActions</code>
   *          to list the next set of environment actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of blueprints to return in a single call to
   *             <code>ListEnvironmentBlueprints</code>. When the number of blueprints to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code> to list the next set of blueprints.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of blueprints in the environment is greater than the default value for
   *          the <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of blueprints in the environment,
   *          the response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code>to list the next set of blueprints.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the Amazon DataZone environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies whether the environment blueprint is managed by Amazon DataZone.</p>
   * @public
   */
  managed?: boolean | undefined;
}

/**
 * <p>The details of an environment blueprint summary.</p>
 * @public
 */
export interface EnvironmentBlueprintSummary {
  /**
   * <p>The identifier of the blueprint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a blueprint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provider of the blueprint.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioning properties of the blueprint.</p>
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * <p>The timestamp of when an environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the blueprint was enabled.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsOutput {
  /**
   * <p>The results of the <code>ListEnvironmentBlueprints</code> action.</p>
   * @public
   */
  items: EnvironmentBlueprintSummary[] | undefined;

  /**
   * <p>When the number of blueprints in the environment is greater than the default value for
   *          the <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of blueprints in the environment,
   *          the response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code>to list the next set of blueprints.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account where you want to list environment
   *          profiles.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region where you want to list environment profiles.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The identifier of the blueprint that was used to create the environment profiles that
   *          you want to list.</p>
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project.</p>
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * <p/>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When the number of environment profiles is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment profiles, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of environment profiles to return in a single call to
   *             <code>ListEnvironmentProfiles</code>. When the number of environment profiles to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of an environment profile.</p>
 * @public
 */
export interface EnvironmentProfileSummary {
  /**
   * <p>The identifier of the environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment profile exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of an Amazon Web Services account in which an environment profile exists.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which an environment profile exists.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when an environment profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of the environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of a blueprint with which an environment profile is created.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The identifier of a project in which an environment profile exists.</p>
   * @public
   */
  projectId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesOutput {
  /**
   * <p>The results of the <code>ListEnvironmentProfiles</code> action. </p>
   * @public
   */
  items: EnvironmentProfileSummary[] | undefined;

  /**
   * <p>When the number of environment profiles is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment profiles, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account where you want to list
   *          environments.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The status of the environments that you want to list.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The Amazon Web Services region where you want to list environments.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment profile.</p>
   * @public
   */
  environmentProfileIdentifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone blueprint.</p>
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * <p>The provider of the environment.</p>
   * @public
   */
  provider?: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The maximum number of environments to return in a single call to
   *             <code>ListEnvironments</code>. When the number of environments to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListEnvironments</code> to list the
   *          next set of environments.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of environments is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environments, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironments</code> to
   *          list the next set of environments.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of an environment.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The identifier of the project in which the environment exists.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment exists.</p>
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
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the environment profile with which the environment was created.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account in which an environment exists.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which an environment exists.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The provider of the environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The status of the environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The configuration ID with which the environment is created.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * <p>The results of the <code>ListEnvironments</code> action.</p>
   * @public
   */
  items: EnvironmentSummary[] | undefined;

  /**
   * <p>When the number of environments is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environments, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironments</code> to
   *          list the next set of environments.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteListingInput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the listing to be deleted.</p>
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
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the listing.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the listing.</p>
   * @public
   */
  listingRevision?: string | undefined;
}

/**
 * <p>The details of a listing (aka asset published in a Amazon DataZone catalog).</p>
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
   * <p>An asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: AssetListing;
    dataProductListing?: never;
    $unknown?: never;
  }

  /**
   * <p>The data product listing.</p>
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

  export interface Visitor<T> {
    assetListing: (value: AssetListing) => T;
    dataProductListing: (value: DataProductListing) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListingItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    if (value.dataProductListing !== undefined) return visitor.dataProductListing(value.dataProductListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetListingOutput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the listing.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of a listing.</p>
   * @public
   */
  listingRevision: string | undefined;

  /**
   * <p>The timestamp of when the listing was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the listing was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the listing.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the listing.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The details of a listing.</p>
   * @public
   */
  item?: ListingItem | undefined;

  /**
   * <p>The name of the listing.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the listing.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the listing.</p>
   * @public
   */
  status?: ListingStatus | undefined;
}

/**
 * @public
 */
export interface ListJobRunsInput {
  /**
   * <p>The ID of the domain where you want to list job runs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * <p>The status of a job run.</p>
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * <p>Specifies the order in which job runs are to be sorted.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>When the number of job runs is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of job runs, the response includes a pagination token named NextToken. You can specify this
   *          NextToken value in a subsequent call to ListJobRuns to list the next set of job
   *          runs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of job runs to return in a single call to ListJobRuns. When the
   *          number of job runs to be listed is greater than the value of MaxResults, the response
   *          contains a NextToken value that you can use in a subsequent call to ListJobRuns to list the
   *          next set of job runs.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The job run summary.</p>
 * @public
 */
export interface JobRunSummary {
  /**
   * <p>The domain ID of the job run.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The job ID of a job run.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The job type of a job run.</p>
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * <p>The run ID of a job run.</p>
   * @public
   */
  runId?: string | undefined;

  /**
   * <p>The run mode of a job run.</p>
   * @public
   */
  runMode?: JobRunMode | undefined;

  /**
   * <p>The status of a job run.</p>
   * @public
   */
  status?: JobRunStatus | undefined;

  /**
   * <p>The error of a job run.</p>
   * @public
   */
  error?: JobRunError | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which job run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The start time of a job run.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of a job run.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobRunsOutput {
  /**
   * <p>The results of the ListJobRuns action.</p>
   * @public
   */
  items?: JobRunSummary[] | undefined;

  /**
   * <p>When the number of job runs is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of job runs, the response includes a pagination token named NextToken. You can specify this
   *          NextToken value in a subsequent call to ListJobRuns to list the next set of job
   *          runs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLineageEventsInput {
  /**
   * <p>The ID of the domain where you want to list lineage events.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of lineage events to return in a single call to ListLineageEvents.
   *          When the number of lineage events to be listed is greater than the value of MaxResults, the
   *          response contains a NextToken value that you can use in a subsequent call to
   *          ListLineageEvents to list the next set of lineage events.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The after timestamp of a lineage event.</p>
   * @public
   */
  timestampAfter?: Date | undefined;

  /**
   * <p>The before timestamp of a lineage event.</p>
   * @public
   */
  timestampBefore?: Date | undefined;

  /**
   * <p>The processing status of a lineage event.</p>
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * <p>The sort order of the lineage events.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>When the number of lineage events is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of lineage events, the response includes a pagination token named NextToken. You can
   *          specify this NextToken value in a subsequent call to ListLineageEvents to list the next set
   *          of lineage events.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpenLineageRunState = {
  ABORT: "ABORT",
  COMPLETE: "COMPLETE",
  FAIL: "FAIL",
  OTHER: "OTHER",
  RUNNING: "RUNNING",
  START: "START",
} as const;

/**
 * @public
 */
export type OpenLineageRunState = (typeof OpenLineageRunState)[keyof typeof OpenLineageRunState];

/**
 * <p>The name identifier.</p>
 * @public
 */
export interface NameIdentifier {
  /**
   * <p>The name in the name identifier.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The namespace in the name identifier.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>The open lineage run event summary.</p>
 * @public
 */
export interface OpenLineageRunEventSummary {
  /**
   * <p>The event type of the open lineage run event summary.</p>
   * @public
   */
  eventType?: OpenLineageRunState | undefined;

  /**
   * <p>The runID of the open lineage run event summary.</p>
   * @public
   */
  runId?: string | undefined;

  /**
   * <p>The job of the open lineage run event summary.</p>
   * @public
   */
  job?: NameIdentifier | undefined;

  /**
   * <p>The inputs of the open lineage run event summary.</p>
   * @public
   */
  inputs?: NameIdentifier[] | undefined;

  /**
   * <p>The outputs of the open lineage run event summary.</p>
   * @public
   */
  outputs?: NameIdentifier[] | undefined;
}

/**
 * <p>The event summary.</p>
 * @public
 */
export type EventSummary = EventSummary.OpenLineageRunEventSummaryMember | EventSummary.$UnknownMember;

/**
 * @public
 */
export namespace EventSummary {
  /**
   * <p>The open lineage run event summary.</p>
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

  export interface Visitor<T> {
    openLineageRunEventSummary: (value: OpenLineageRunEventSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EventSummary, visitor: Visitor<T>): T => {
    if (value.openLineageRunEventSummary !== undefined)
      return visitor.openLineageRunEventSummary(value.openLineageRunEventSummary);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The data lineage event summary.</p>
 * @public
 */
export interface LineageEventSummary {
  /**
   * <p>The ID of the data lineage event.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The domain ID of the lineage event.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The processing status of the data lineage event.</p>
   * @public
   */
  processingStatus?: LineageEventProcessingStatus | undefined;

  /**
   * <p>The time of the data lineage event.</p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>The summary of the data lineate event.</p>
   * @public
   */
  eventSummary?: EventSummary | undefined;

  /**
   * <p>The user who created the data lineage event.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which data lineage event was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLineageEventsOutput {
  /**
   * <p>The results of the ListLineageEvents action.</p>
   * @public
   */
  items?: LineageEventSummary[] | undefined;

  /**
   * <p>When the number of lineage events is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of lineage events, the response includes a pagination token named NextToken. You can
   *          specify this NextToken value in a subsequent call to ListLineageEvents to list the next set
   *          of lineage events.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EdgeDirection = {
  DOWNSTREAM: "DOWNSTREAM",
  UPSTREAM: "UPSTREAM",
} as const;

/**
 * @public
 */
export type EdgeDirection = (typeof EdgeDirection)[keyof typeof EdgeDirection];

/**
 * @public
 */
export interface ListLineageNodeHistoryInput {
  /**
   * <p>The ID of the domain where you want to list the history of the specified data lineage
   *          node.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of history items to return in a single call to
   *          ListLineageNodeHistory. When the number of memberships to be listed is greater than the
   *          value of MaxResults, the response contains a NextToken value that you can use in a
   *          subsequent call to ListLineageNodeHistory to list the next set of items.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of history items is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of items, the response includes a pagination token named NextToken. You can specify this
   *          NextToken value in a subsequent call to ListLineageNodeHistory to list the next set of
   *          items.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the data lineage node whose history you want to list.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The direction of the data lineage node refers to the lineage node having neighbors in
   *          that direction. For example, if direction is <code>UPSTREAM</code>, the
   *             <code>ListLineageNodeHistory</code> API responds with historical versions with upstream
   *          neighbors only.</p>
   * @public
   */
  direction?: EdgeDirection | undefined;

  /**
   * <p>Specifies whether the action is to return data lineage node history from the time after
   *          the event timestamp.</p>
   * @public
   */
  eventTimestampGTE?: Date | undefined;

  /**
   * <p>Specifies whether the action is to return data lineage node history from the time prior
   *          of the event timestamp.</p>
   * @public
   */
  eventTimestampLTE?: Date | undefined;

  /**
   * <p>The order by which you want data lineage node history to be sorted.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>The summary of the data lineage node.</p>
 * @public
 */
export interface LineageNodeSummary {
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
}

/**
 * @public
 */
export interface ListLineageNodeHistoryOutput {
  /**
   * <p>The nodes returned by the ListLineageNodeHistory action.</p>
   * @public
   */
  nodes?: LineageNodeSummary[] | undefined;

  /**
   * <p>When the number of history items is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of items, the response includes a pagination token named NextToken. You can specify this
   *          NextToken value in a subsequent call to ListLineageNodeHistory to list the next set of
   *          items.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  EVENT: "EVENT",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of notifications.</p>
   * @public
   */
  type: NotificationType | undefined;

  /**
   * <p>The time after which you want to list notifications.</p>
   * @public
   */
  afterTimestamp?: Date | undefined;

  /**
   * <p>The time before which you want to list notifications.</p>
   * @public
   */
  beforeTimestamp?: Date | undefined;

  /**
   * <p>The subjects of notifications.</p>
   * @public
   */
  subjects?: string[] | undefined;

  /**
   * <p>The task status of notifications.</p>
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * <p>The maximum number of notifications to return in a single call to
   *             <code>ListNotifications</code>. When the number of notifications to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListNotifications</code> to list the
   *          next set of notifications.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of notifications is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of notifications, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListNotifications</code> to
   *          list the next set of notifications.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationResourceType = {
  PROJECT: "PROJECT",
} as const;

/**
 * @public
 */
export type NotificationResourceType = (typeof NotificationResourceType)[keyof typeof NotificationResourceType];

/**
 * <p>The details of the resource mentioned in a notification.</p>
 * @public
 */
export interface NotificationResource {
  /**
   * <p>The type of the resource mentioned in a notification.</p>
   * @public
   */
  type: NotificationResourceType | undefined;

  /**
   * <p>The ID of the resource mentioned in a notification.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the resource mentioned in a notification.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationRole = {
  DOMAIN_OWNER: "DOMAIN_OWNER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
  PROJECT_SUBSCRIBER: "PROJECT_SUBSCRIBER",
  PROJECT_VIEWER: "PROJECT_VIEWER",
} as const;

/**
 * @public
 */
export type NotificationRole = (typeof NotificationRole)[keyof typeof NotificationRole];

/**
 * <p>The topic of the notification.</p>
 * @public
 */
export interface Topic {
  /**
   * <p>The subject of the resource mentioned in a notification.</p>
   * @public
   */
  subject: string | undefined;

  /**
   * <p>The details of the resource mentioned in a notification.</p>
   * @public
   */
  resource: NotificationResource | undefined;

  /**
   * <p>The role of the resource mentioned in a notification.</p>
   * @public
   */
  role: NotificationRole | undefined;
}

/**
 * <p>The details of a notification generated in Amazon DataZone.</p>
 * @public
 */
export interface NotificationOutput {
  /**
   * <p>The identifier of the notification.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of a Amazon DataZone domain in which the notification exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the notification.</p>
   * @public
   */
  type: NotificationType | undefined;

  /**
   * <p>The topic of the notification.</p>
   * @public
   */
  topic: Topic | undefined;

  /**
   * <p>The title of the notification.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The message included in the notification.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The status included in the notification.</p>
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * <p>The action link included in the notification.</p>
   * @public
   */
  actionLink: string | undefined;

  /**
   * <p>The timestamp of when a notification was created.</p>
   * @public
   */
  creationTimestamp: Date | undefined;

  /**
   * <p>The timestamp of when the notification was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;

  /**
   * <p>The metadata included in the notification.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>The results of the <code>ListNotifications</code> action.</p>
   * @public
   */
  notifications?: NotificationOutput[] | undefined;

  /**
   * <p>When the number of notifications is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of notifications, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListNotifications</code> to
   *          list the next set of notifications.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGrantsInput {
  /**
   * <p>The ID of the domain where you want to list policy grants.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of entity for which you want to list policy grants.</p>
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * <p>The ID of the entity for which you want to list policy grants.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of policy that you want to list.</p>
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * <p>The maximum number of grants to return in a single call to
   *          <code>ListPolicyGrants</code>. When the number of grants to be listed is greater than the
   *          value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that
   *          you can use in a subsequent call to <code>ListPolicyGrants</code> to list the next set of
   *          grants.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of grants, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListPolicyGrants</code> to list the next set of
   *          grants.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A member of the policy grant list.</p>
 * @public
 */
export interface PolicyGrantMember {
  /**
   * <p>The principal of the policy grant member.</p>
   * @public
   */
  principal?: PolicyGrantPrincipal | undefined;

  /**
   * <p>The details of the policy grant member.</p>
   * @public
   */
  detail?: PolicyGrantDetail | undefined;

  /**
   * <p>Specifies the timestamp at which policy grant member was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Specifies the user who created the policy grant member.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGrantsOutput {
  /**
   * <p>The results of this action - the listed grants.</p>
   * @public
   */
  grantList: PolicyGrantMember[] | undefined;

  /**
   * <p>When the number of grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of grants, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListPolicyGrants</code> to list the next set of
   *          grants.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortFieldProject = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type SortFieldProject = (typeof SortFieldProject)[keyof typeof SortFieldProject];

/**
 * @public
 */
export interface ListProjectMembershipsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to list project
   *          memberships.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project whose memberships you want to list.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The method by which you want to sort the project memberships.</p>
   * @public
   */
  sortBy?: SortFieldProject | undefined;

  /**
   * <p>The sort order of the project memberships.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of memberships to return in a single call to
   *             <code>ListProjectMemberships</code>. When the number of memberships to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListProjectMemberships</code> to list the next set of memberships.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a group in Amazon DataZone.</p>
 * @public
 */
export interface GroupDetails {
  /**
   * <p>The identifier of the group in Amazon DataZone.</p>
   * @public
   */
  groupId: string | undefined;
}

/**
 * <p>The user details of a project member.</p>
 * @public
 */
export interface UserDetails {
  /**
   * <p>The identifier of the Amazon DataZone user.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * <p>The details about a project member.</p>
 * @public
 */
export type MemberDetails = MemberDetails.GroupMember | MemberDetails.UserMember | MemberDetails.$UnknownMember;

/**
 * @public
 */
export namespace MemberDetails {
  /**
   * <p>The user details of a project member.</p>
   * @public
   */
  export interface UserMember {
    user: UserDetails;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The group details of a project member.</p>
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

  export interface Visitor<T> {
    user: (value: UserDetails) => T;
    group: (value: GroupDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MemberDetails, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The details of a project member.</p>
 * @public
 */
export interface ProjectMember {
  /**
   * <p>The membership details of a project member.</p>
   * @public
   */
  memberDetails: MemberDetails | undefined;

  /**
   * <p>The designated role of a project member.</p>
   * @public
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface ListProjectMembershipsOutput {
  /**
   * <p>The members of the project.</p>
   * @public
   */
  members: ProjectMember[] | undefined;

  /**
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectProfilesInput {
  /**
   * <p>The ID of the domain where you want to list project profiles.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of a project profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies by what to sort project profiles.</p>
   * @public
   */
  sortBy?: SortFieldProject | undefined;

  /**
   * <p>Specifies the sort order of the project profiles.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>When the number of project profiles is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of project profiles, the response includes a pagination token named NextToken. You can
   *          specify this NextToken value in a subsequent call to ListProjectProfiles to list the next
   *          set of project profiles.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of project profiles to return in a single call to
   *          ListProjectProfiles. When the number of project profiles to be listed is greater than the
   *          value of MaxResults, the response contains a NextToken value that you can use in a
   *          subsequent call to ListProjectProfiles to list the next set of project profiles.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of a project profile.</p>
 * @public
 */
export interface ProjectProfileSummary {
  /**
   * <p>The domain ID of the project profile.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of a project profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of a project profile.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The user who created the project profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp at which a project profile was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The domain unit ID of the project profile.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectProfilesOutput {
  /**
   * <p>The results of the ListProjectProfiles action.</p>
   * @public
   */
  items?: ProjectProfileSummary[] | undefined;

  /**
   * <p>When the number of project profiles is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of project profiles, the response includes a pagination token named NextToken. You can
   *          specify this NextToken value in a subsequent call to ListProjectProfiles to list the next
   *          set of project profiles.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user.</p>
   * @public
   */
  userIdentifier?: string | undefined;

  /**
   * <p>The identifier of a group.</p>
   * @public
   */
  groupIdentifier?: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of projects to return in a single call to <code>ListProjects</code>.
   *          When the number of projects to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListProjects</code> to list the next set of
   *          projects.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a Amazon DataZone project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The identifier of a Amazon DataZone domain where the project exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of a project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of a project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[] | undefined;

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when a project was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the project was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * <p>The results of the <code>ListProjects</code> action.</p>
   * @public
   */
  items?: ProjectSummary[] | undefined;

  /**
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortKey = {
  CREATED_AT: "CREATED_AT",
  UPDATED_AT: "UPDATED_AT",
} as const;

/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

/**
 * @public
 */
export interface ListSubscriptionGrantsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The identifier of the subscription target.</p>
   * @public
   */
  subscriptionTargetId?: string | undefined;

  /**
   * <p>The identifier of the subscribed listing.</p>
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * <p>The ID of the owning project of the subscription grants.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>Specifies the way of sorting the results of this action.</p>
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * <p>Specifies the sort order of this action.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of subscription grants to return in a single call to
   *             <code>ListSubscriptionGrants</code>. When the number of subscription grants to be listed
   *          is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionGrants</code> to list the next set of subscription grants.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the subscription grant.</p>
 * @public
 */
export interface SubscriptionGrantSummary {
  /**
   * <p>The identifier of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The datazone user who created the subscription grant.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when a subscription grant was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestampf of when the subscription grant was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The identifier of the target of the subscription grant.</p>
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
   * <p>The assets included in the subscription grant.</p>
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * <p>The ID of the subscription.</p>
   *
   * @deprecated
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionGrantsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionGrants</code> action. </p>
   * @public
   */
  items: SubscriptionGrantSummary[] | undefined;

  /**
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the status of the subscription requests.</p>
   *          <note>
   *             <p>This is not a required parameter, but if not specified, by default, Amazon DataZone
   *             returns only <code>PENDING</code> subscription requests. </p>
   *          </note>
   * @public
   */
  status?: SubscriptionRequestStatus | undefined;

  /**
   * <p>The identifier of the subscribed listing.</p>
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * <p>The identifier of the project for the subscription requests.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The identifier of the subscription request approver's project.</p>
   * @public
   */
  approverProjectId?: string | undefined;

  /**
   * <p>Specifies the way to sort the results of this action.</p>
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of subscription requests to return in a single call to
   *             <code>ListSubscriptionRequests</code>. When the number of subscription requests to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The summary of the metadata form.</p>
 * @public
 */
export interface MetadataFormSummary {
  /**
   * <p>The form name of the metadata form.</p>
   * @public
   */
  formName?: string | undefined;

  /**
   * <p>The type name of the metadata form.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type revision of the metadata form.</p>
   * @public
   */
  typeRevision: string | undefined;
}

/**
 * <p>The details of the subscription request.</p>
 * @public
 */
export interface SubscriptionRequestSummary {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when a subscription request was created.</p>
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
   * <p>The principals included in the subscription request. </p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The listings included in the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the subscription request reviewer.</p>
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
   * <p>The summary of the metadata forms.</p>
   * @public
   */
  metadataFormsSummary?: MetadataFormSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionRequests</code> action. </p>
   * @public
   */
  items: SubscriptionRequestSummary[] | undefined;

  /**
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request for the subscriptions that you want to
   *          list.</p>
   * @public
   */
  subscriptionRequestIdentifier?: string | undefined;

  /**
   * <p>The status of the subscriptions that you want to list.</p>
   *          <note>
   *             <p>This is not a required parameter, but if not provided, by default, Amazon DataZone
   *             returns only <code>APPROVED</code> subscriptions. </p>
   *          </note>
   * @public
   */
  status?: SubscriptionStatus | undefined;

  /**
   * <p>The identifier of the subscribed listing for the subscriptions that you want to
   *          list.</p>
   * @public
   */
  subscribedListingId?: string | undefined;

  /**
   * <p>The identifier of the owning project.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The identifier of the project for the subscription's approver.</p>
   * @public
   */
  approverProjectId?: string | undefined;

  /**
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of subscriptions to return in a single call to
   *             <code>ListSubscriptions</code>. When the number of subscriptions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListSubscriptions</code> to list the
   *          next set of Subscriptions. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the subscription.</p>
 * @public
 */
export interface SubscriptionSummary {
  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The principal included in the subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The listing included in the subscription.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The identifier of the subscription request for the subscription.</p>
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * <p>The retain permissions included in the subscription.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * <p>The results of the <code>ListSubscriptions</code> action.</p>
   * @public
   */
  items: SubscriptionSummary[] | undefined;

  /**
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain where you want to list subscription
   *          targets.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment where you want to list subscription targets.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of subscription targets to return in a single call to
   *             <code>ListSubscriptionTargets</code>. When the number of subscription targets to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription targets.
   *       </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the subscription target.</p>
 * @public
 */
export interface SubscriptionTargetSummary {
  /**
   * <p>The identifier of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals included in the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project specified in the subscription target.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment of the subscription target.</p>
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
   * <p>The manage access role specified in the subscription target.</p>
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * <p>The asset types included in the subscription target.</p>
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
export interface ListSubscriptionTargetsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionTargets</code> action.</p>
   * @public
   */
  items: SubscriptionTargetSummary[] | undefined;

  /**
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the assets for which you want to list
   *          time series data points.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to list data points.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to list data points.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The name of the time series data points form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The timestamp at which the data points that you want to list started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp at which the data points that you wanted to list ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>When the number of data points is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of data points, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set
   *          of data points.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of data points to return in a single call to
   *          ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the
   *          value of MaxResults, the response contains a NextToken value that you can use in a
   *          subsequent call to ListTimeSeriesDataPoints to list the next set of data points.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsOutput {
  /**
   * <p>The results of the ListTimeSeriesDataPoints action. </p>
   * @public
   */
  items?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>When the number of data points is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of data points, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set
   *          of data points.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain the metadata generation run of which you want to
   *          get.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the metadata generation run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type MetadataGenerationRunStatus =
  (typeof MetadataGenerationRunStatus)[keyof typeof MetadataGenerationRunStatus];

/**
 * @public
 * @enum
 */
export const MetadataGenerationTargetType = {
  ASSET: "ASSET",
} as const;

/**
 * @public
 */
export type MetadataGenerationTargetType =
  (typeof MetadataGenerationTargetType)[keyof typeof MetadataGenerationTargetType];

/**
 * <p>The asset for which metadata was generated.</p>
 * @public
 */
export interface MetadataGenerationRunTarget {
  /**
   * <p>The type of the asset for which metadata was generated.</p>
   * @public
   */
  type: MetadataGenerationTargetType | undefined;

  /**
   * <p>The ID of the metadata generation run's target.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the asset for which metadata was generated.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunType = {
  BUSINESS_DESCRIPTIONS: "BUSINESS_DESCRIPTIONS",
} as const;

/**
 * @public
 */
export type MetadataGenerationRunType = (typeof MetadataGenerationRunType)[keyof typeof MetadataGenerationRunType];

/**
 * @public
 */
export interface GetMetadataGenerationRunOutput {
  /**
   * <p>The ID of the Amazon DataZone domain the metadata generation run of which you want to
   *          get.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The asset for which you're generating metadata.</p>
   * @public
   */
  target?: MetadataGenerationRunTarget | undefined;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * <p>The type of metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * <p>The timestamp of when the metadata generation run was start.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who started the metadata generation run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The ID of the project that owns the assets for which you're running metadata
   *          generation.</p>
   * @public
   */
  owningProjectId: string | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsInput {
  /**
   * <p>The ID of the Amazon DataZone domain where you want to list metadata generation
   *          runs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The status of the metadata generation runs.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * <p>The type of the metadata generation runs.</p>
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * <p>When the number of metadata generation runs is greater than the default value for the
   *          MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than
   *          the number of metadata generation runs, the response includes a pagination token named
   *          NextToken. You can specify this NextToken value in a subsequent call to
   *          ListMetadataGenerationRuns to list the next set of revisions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of metadata generation runs to return in a single call to
   *          ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is
   *          greater than the value of MaxResults, the response contains a NextToken value that you can
   *          use in a subsequent call to ListMetadataGenerationRuns to list the next set of
   *          revisions.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The metadata generation run.</p>
 * @public
 */
export interface MetadataGenerationRunItem {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run was
   *          created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The asset for which metadata was generated.</p>
   * @public
   */
  target?: MetadataGenerationRunTarget | undefined;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * <p>The timestamp at which the metadata generation run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the metadata generation run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The ID of the project that owns the asset for which the metadata generation was
   *          ran.</p>
   * @public
   */
  owningProjectId: string | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsOutput {
  /**
   * <p>The results of the ListMetadataGenerationRuns action.</p>
   * @public
   */
  items?: MetadataGenerationRunItem[] | undefined;

  /**
   * <p>When the number of metadata generation runs is greater than the default value for the
   *          MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than
   *          the number of metadata generation runs, the response includes a pagination token named
   *          NextToken. You can specify this NextToken value in a subsequent call to
   *          ListMetadataGenerationRuns to list the next set of revisions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain where you want to start a metadata generation
   *          run.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type: MetadataGenerationRunType | undefined;

  /**
   * <p>The asset for which you want to start a metadata generation run.</p>
   * @public
   */
  target: MetadataGenerationRunTarget | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the project that owns the asset for which you want to start a metadata
   *          generation run.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run was
   *          started.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus | undefined;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType | undefined;

  /**
   * <p>The timestamp at which the metadata generation run was started.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the user who started the metadata generation run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The ID of the project that owns the asset for which the metadata generation run was
   *          started.</p>
   * @public
   */
  owningProjectId?: string | undefined;
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
   * <p>The data lineage event that you want to post. Only open-lineage run event are supported
   *          as events. </p>
   * @public
   */
  event: Uint8Array | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data
   *          points.</p>
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data
   *          points.</p>
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
 * <p>The details of the automatically generated business metadata that is rejected.</p>
 * @public
 */
export interface RejectChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          rejected.</p>
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
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          rejected.</p>
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
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
   *          target (for example, a column name) that can be rejected.</p>
   * @public
   */
  rejectChoices?: RejectChoice[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
   * <p>The maximum number of rules to return in a single call to <code>ListRules</code>. When
   *          the number of rules to be listed is greater than the value of <code>MaxResults</code>, the
   *          response contains a <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListRules</code> to list the next set of rules.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of rules is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of rules, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListRules</code> to list the next set of rules.</p>
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
   * <p>When the number of rules is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of rules, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListRules</code> to list the next set of rules.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const CreateSubscriptionRequestInputFilterSensitiveLog = (obj: CreateSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.subscribedPrincipals && { subscribedPrincipals: obj.subscribedPrincipals.map((item) => item) }),
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.metadataForms && { metadataForms: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionRequestOutputFilterSensitiveLog = (obj: CreateSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
  ...(obj.metadataForms && { metadataForms: obj.metadataForms.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetInputFilterSensitiveLog = (obj: CreateSubscriptionTargetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetOutputFilterSensitiveLog = (obj: CreateSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SsoUserProfileDetailsFilterSensitiveLog = (obj: SsoUserProfileDetails): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileDetailsFilterSensitiveLog = (obj: UserProfileDetails): any => {
  if (obj.iam !== undefined) return { iam: obj.iam };
  if (obj.sso !== undefined) return { sso: SsoUserProfileDetailsFilterSensitiveLog(obj.sso) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateUserProfileOutputFilterSensitiveLog = (obj: CreateUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GetDataProductOutputFilterSensitiveLog = (obj: GetDataProductOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListingSummaryFilterSensitiveLog = (obj: ListingSummary): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DataProductListingFilterSensitiveLog = (obj: DataProductListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListingSummaryItemFilterSensitiveLog = (obj: ListingSummaryItem): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DataProductListingItemFilterSensitiveLog = (obj: DataProductListingItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DataProductResultItemFilterSensitiveLog = (obj: DataProductResultItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteDataSourceOutputFilterSensitiveLog = (obj: DeleteDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const GetDataSourceOutputFilterSensitiveLog = (obj: GetDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const ListDataSourcesInputFilterSensitiveLog = (obj: ListDataSourcesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSourceSummaryFilterSensitiveLog = (obj: DataSourceSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDataSourcesOutputFilterSensitiveLog = (obj: ListDataSourcesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateDataSourceInputFilterSensitiveLog = (obj: UpdateDataSourceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assetFormsInput && { assetFormsInput: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const UpdateDataSourceOutputFilterSensitiveLog = (obj: UpdateDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const DataSourceRunActivityFilterSensitiveLog = (obj: DataSourceRunActivity): any => ({
  ...obj,
  ...(obj.database && { database: SENSITIVE_STRING }),
  ...(obj.technicalName && { technicalName: SENSITIVE_STRING }),
  ...(obj.technicalDescription && { technicalDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDomainsOutputFilterSensitiveLog = (obj: ListDomainsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DomainSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDomainUnitOutputFilterSensitiveLog = (obj: GetDomainUnitOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.owners && { owners: obj.owners.map((item) => item) }),
});

/**
 * @internal
 */
export const UpdateDomainUnitInputFilterSensitiveLog = (obj: UpdateDomainUnitInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDomainUnitOutputFilterSensitiveLog = (obj: UpdateDomainUnitOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.owners && { owners: obj.owners.map((item) => item) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportFilterSensitiveLog = (obj: Import): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFormTypeOutputFilterSensitiveLog = (obj: GetFormTypeOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.imports && { imports: obj.imports.map((item) => ImportFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetConnectionOutputFilterSensitiveLog = (obj: GetConnectionOutput): any => ({
  ...obj,
  ...(obj.connectionCredentials && { connectionCredentials: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.physicalEndpoints && {
    physicalEndpoints: obj.physicalEndpoints.map((item) => PhysicalEndpointFilterSensitiveLog(item)),
  }),
  ...(obj.props && { props: ConnectionPropertiesOutputFilterSensitiveLog(obj.props) }),
});

/**
 * @internal
 */
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
  ...(obj.environmentConfigurationId && { environmentConfigurationId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEnvironmentBlueprintOutputFilterSensitiveLog = (obj: GetEnvironmentBlueprintOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetEnvironmentCredentialsOutputFilterSensitiveLog = (obj: GetEnvironmentCredentialsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentProfileOutputFilterSensitiveLog = (obj: GetEnvironmentProfileOutput): any => ({
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
export const GetGroupProfileOutputFilterSensitiveLog = (obj: GetGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLineageEventOutputFilterSensitiveLog = (obj: GetLineageEventOutput): any => ({
  ...obj,
  ...(obj.event && { event: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLineageNodeOutputFilterSensitiveLog = (obj: GetLineageNodeOutput): any => ({
  ...obj,
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetProjectOutputFilterSensitiveLog = (obj: GetProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => EnvironmentConfigurationUserParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetProjectProfileOutputFilterSensitiveLog = (obj: GetProjectProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.environmentConfigurations && {
    environmentConfigurations: obj.environmentConfigurations.map((item) =>
      EnvironmentConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetSubscriptionOutputFilterSensitiveLog = (obj: GetSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const GetSubscriptionRequestDetailsOutputFilterSensitiveLog = (
  obj: GetSubscriptionRequestDetailsOutput
): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
  ...(obj.metadataForms && { metadataForms: obj.metadataForms.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetSubscriptionTargetOutputFilterSensitiveLog = (obj: GetSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserProfileOutputFilterSensitiveLog = (obj: GetUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GetGlossaryOutputFilterSensitiveLog = (obj: GetGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryInputFilterSensitiveLog = (obj: UpdateGlossaryInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryOutputFilterSensitiveLog = (obj: UpdateGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetGlossaryTermOutputFilterSensitiveLog = (obj: GetGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermInputFilterSensitiveLog = (obj: UpdateGlossaryTermInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermOutputFilterSensitiveLog = (obj: UpdateGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAssetFiltersOutputFilterSensitiveLog = (obj: ListAssetFiltersOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => AssetFilterSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListConnectionsOutputFilterSensitiveLog = (obj: ListConnectionsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ConnectionSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListDataSourceRunActivitiesOutputFilterSensitiveLog = (obj: ListDataSourceRunActivitiesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceRunActivityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EnvironmentBlueprintSummaryFilterSensitiveLog = (obj: EnvironmentBlueprintSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const ListEnvironmentBlueprintsOutputFilterSensitiveLog = (obj: ListEnvironmentBlueprintsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentBlueprintSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListEnvironmentProfilesInputFilterSensitiveLog = (obj: ListEnvironmentProfilesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentProfileSummaryFilterSensitiveLog = (obj: EnvironmentProfileSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentProfilesOutputFilterSensitiveLog = (obj: ListEnvironmentProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.environmentConfigurationId && { environmentConfigurationId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentsOutputFilterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListingItemFilterSensitiveLog = (obj: ListingItem): any => {
  if (obj.assetListing !== undefined) return { assetListing: AssetListingFilterSensitiveLog(obj.assetListing) };
  if (obj.dataProductListing !== undefined)
    return { dataProductListing: DataProductListingFilterSensitiveLog(obj.dataProductListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetListingOutputFilterSensitiveLog = (obj: GetListingOutput): any => ({
  ...obj,
  ...(obj.item && { item: ListingItemFilterSensitiveLog(obj.item) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NotificationOutputFilterSensitiveLog = (obj: NotificationOutput): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.actionLink && { actionLink: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListNotificationsOutputFilterSensitiveLog = (obj: ListNotificationsOutput): any => ({
  ...obj,
  ...(obj.notifications && {
    notifications: obj.notifications.map((item) => NotificationOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListProjectProfilesInputFilterSensitiveLog = (obj: ListProjectProfilesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProjectProfileSummaryFilterSensitiveLog = (obj: ProjectProfileSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProjectProfilesOutputFilterSensitiveLog = (obj: ListProjectProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ProjectProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListProjectsInputFilterSensitiveLog = (obj: ListProjectsInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProjectsOutputFilterSensitiveLog = (obj: ListProjectsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ProjectSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MetadataFormSummaryFilterSensitiveLog = (obj: MetadataFormSummary): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubscriptionRequestSummaryFilterSensitiveLog = (obj: SubscriptionRequestSummary): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
  ...(obj.metadataFormsSummary && {
    metadataFormsSummary: obj.metadataFormsSummary.map((item) => MetadataFormSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListSubscriptionRequestsOutputFilterSensitiveLog = (obj: ListSubscriptionRequestsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionRequestSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionSummaryFilterSensitiveLog = (obj: SubscriptionSummary): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const ListSubscriptionsOutputFilterSensitiveLog = (obj: ListSubscriptionsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionSummaryFilterSensitiveLog(item)) }),
});

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
export const PostLineageEventInputFilterSensitiveLog = (obj: PostLineageEventInput): any => ({
  ...obj,
  ...(obj.event && { event: SENSITIVE_STRING }),
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
  ...(obj.metadataForms && { metadataForms: obj.metadataForms.map((item) => FormOutputFilterSensitiveLog(item)) }),
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
export const GetRuleOutputFilterSensitiveLog = (obj: GetRuleOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.target && { target: obj.target }),
  ...(obj.detail && { detail: obj.detail }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RuleSummaryFilterSensitiveLog = (obj: RuleSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.target && { target: obj.target }),
});

/**
 * @internal
 */
export const ListRulesOutputFilterSensitiveLog = (obj: ListRulesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => RuleSummaryFilterSensitiveLog(item)) }),
});
