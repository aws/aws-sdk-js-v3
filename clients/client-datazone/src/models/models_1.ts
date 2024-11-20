// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionParameters,
  AssetFilterSummary,
  AssetFilterSummaryFilterSensitiveLog,
  AssetItem,
  AssetItemFilterSensitiveLog,
  AssetListing,
  AssetListingFilterSensitiveLog,
  AssetListingItem,
  AssetListingItemFilterSensitiveLog,
  AssetRevision,
  AssetTypeItem,
  AssetTypeItemFilterSensitiveLog,
  ColumnFilterConfiguration,
  ConfigurableEnvironmentAction,
  CustomParameter,
  CustomParameterFilterSensitiveLog,
  DataAssetActivityStatus,
  DataProductListing,
  DataProductListingFilterSensitiveLog,
  DataProductListingItem,
  DataProductListingItemFilterSensitiveLog,
  DataProductResultItem,
  DataProductResultItemFilterSensitiveLog,
  DataProductRevision,
  DataSourceRunActivity,
  DataSourceRunActivityFilterSensitiveLog,
  DataZoneEntityType,
  Deployment,
  DeploymentProperties,
  DomainStatus,
  DomainUnitOwnerProperties,
  EnvironmentParameter,
  EnvironmentStatus,
  FailureCause,
  FilterStatus,
  FormEntryOutput,
  FormEntryOutputFilterSensitiveLog,
  FormOutput,
  FormOutputFilterSensitiveLog,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GrantedEntity,
  GroupProfileStatus,
  ListingStatus,
  ManagedPolicyType,
  Model,
  OwnerProperties,
  PolicyGrantDetail,
  PolicyGrantPrincipal,
  ProjectDeletionError,
  ProjectStatus,
  ProvisioningProperties,
  Resource,
  RowFilterExpression,
  RuleAction,
  RuleDetail,
  RuleScope,
  RuleTarget,
  RuleTargetType,
  RuleType,
  SingleSignOn,
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
  TargetEntityType,
  TermRelations,
  TimeSeriesDataPointSummaryFormOutput,
  TimeSeriesEntityType,
  UserDesignation,
  UserProfileDetails,
  UserProfileDetailsFilterSensitiveLog,
  UserProfileStatus,
  UserProfileType,
} from "./models_0";

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
   *          Data Lake using AWS Lake Formation hybrid access mode.</p>
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
   * @deprecated
   *
   * <p>The identifier of the subscription.</p>
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
  manageAccessRole: string | undefined;

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
   * @deprecated
   *
   * <p>The ID of the subscription.</p>
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
  manageAccessRole: string | undefined;

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
export interface PostLineageEventOutput {}

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
 * @public
 * @enum
 */
export const SearchOutputAdditionalAttribute = {
  FORMS: "FORMS",
  TIME_SERIES_DATA_POINT_FORMS: "TIME_SERIES_DATA_POINT_FORMS",
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
  DATA_PRODUCT: "DATA_PRODUCT",
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
  order?: SortOrder | undefined;
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

  export interface Visitor<T> {
    glossaryItem: (value: GlossaryItem) => T;
    glossaryTermItem: (value: GlossaryTermItem) => T;
    assetItem: (value: AssetItem) => T;
    dataProductItem: (value: DataProductResultItem) => T;
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
  items?: SearchInventoryResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
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
  searchText?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchGroupProfiles</code>. When the number of results to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>SearchGroupProfiles</code> to list the
   *          next set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
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
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
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
   * <p>The asset listing included in the results of the <code>SearchListings</code>
   *          action.</p>
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

  export interface Visitor<T> {
    assetListing: (value: AssetListingItem) => T;
    dataProductListing: (value: DataProductListingItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchResultItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    if (value.dataProductListing !== undefined) return visitor.dataProductListing(value.dataProductListing);
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
  items?: SearchResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
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
 * @enum
 */
export const TypesSearchScope = {
  ASSET_TYPE: "ASSET_TYPE",
  FORM_TYPE: "FORM_TYPE",
  LINEAGE_NODE_TYPE: "LINEAGE_NODE_TYPE",
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
   * <p>The identifier of the Amazon DataZone domain in which the form type was originally
   *          created.</p>
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

  export interface Visitor<T> {
    assetTypeItem: (value: AssetTypeItem) => T;
    formTypeItem: (value: FormTypeData) => T;
    lineageNodeTypeItem: (value: LineageNodeTypeItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchTypesResultItem, visitor: Visitor<T>): T => {
    if (value.assetTypeItem !== undefined) return visitor.assetTypeItem(value.assetTypeItem);
    if (value.formTypeItem !== undefined) return visitor.formTypeItem(value.formTypeItem);
    if (value.lineageNodeTypeItem !== undefined) return visitor.lineageNodeTypeItem(value.lineageNodeTypeItem);
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
  items?: SearchTypesResultItem[] | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
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
  searchText?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchUserProfiles</code>. When the number of results to be listed is greater than
   *          the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value
   *          that you can use in a subsequent call to <code>SearchUserProfiles</code> to list the next
   *          set of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
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
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;
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
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The profile identifier of the environment.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account in which the environment is to be
   *          updated.</p>
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
   * <p>The provisioned resources to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The environment actions to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The blueprint identifier of the environment.</p>
   * @public
   */
  environmentBlueprintId?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
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
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
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
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
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
   * <p>The glossary terms to be updated as part of the <code>UpdateProject</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;
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
   * <p>The glossary terms of the project that are to be updated.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
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
  failureCause?: FailureCause | undefined;

  /**
   * <p>The target name to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
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
   * <p>The details of the asset for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * @deprecated
   *
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string | undefined;
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
  updatedBy?: string | undefined;

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
  name?: string | undefined;

  /**
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals?: string[] | undefined;

  /**
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes?: string[] | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
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
   * <p>The details of the user profile in Amazon DataZone.</p>
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

  export interface Visitor<T> {
    expression: (value: RowFilterExpression) => T;
    and: (value: RowFilter[]) => T;
    or: (value: RowFilter[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RowFilter, visitor: Visitor<T>): T => {
    if (value.expression !== undefined) return visitor.expression(value.expression);
    if (value.and !== undefined) return visitor.and(value.and);
    if (value.or !== undefined) return visitor.or(value.or);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>The maximum number of results to return in a single call to <code>Search</code>. When
   *          the number of results to be listed is greater than the value of <code>MaxResults</code>,
   *          the response contains a <code>NextToken</code> value that you can use in a subsequent call
   *          to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
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
   * <p>The maximum number of results to return in a single call to <code>SearchListings</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the filters for the search of listings.</p>
   * @public
   */
  filters?: FilterClause | undefined;

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
  maxResults?: number | undefined;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
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

  export interface Visitor<T> {
    columnConfiguration: (value: ColumnFilterConfiguration) => T;
    rowConfiguration: (value: RowFilterConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssetFilterConfiguration, visitor: Visitor<T>): T => {
    if (value.columnConfiguration !== undefined) return visitor.columnConfiguration(value.columnConfiguration);
    if (value.rowConfiguration !== undefined) return visitor.rowConfiguration(value.rowConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
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
   * <p>The error message that is displayed if the asset filter is not created
   *          successfully.</p>
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
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
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

/**
 * @internal
 */
export const UpdateRuleInputFilterSensitiveLog = (obj: UpdateRuleInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.detail && { detail: obj.detail }),
});

/**
 * @internal
 */
export const UpdateRuleOutputFilterSensitiveLog = (obj: UpdateRuleOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.target && { target: obj.target }),
  ...(obj.detail && { detail: obj.detail }),
  ...(obj.description && { description: SENSITIVE_STRING }),
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
    return { dataProductItem: DataProductResultItemFilterSensitiveLog(obj.dataProductItem) };
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
  if (obj.dataProductListing !== undefined)
    return { dataProductListing: DataProductListingItemFilterSensitiveLog(obj.dataProductListing) };
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
export const LineageNodeTypeItemFilterSensitiveLog = (obj: LineageNodeTypeItem): any => ({
  ...obj,
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SearchTypesResultItemFilterSensitiveLog = (obj: SearchTypesResultItem): any => {
  if (obj.assetTypeItem !== undefined) return { assetTypeItem: AssetTypeItemFilterSensitiveLog(obj.assetTypeItem) };
  if (obj.formTypeItem !== undefined) return { formTypeItem: FormTypeDataFilterSensitiveLog(obj.formTypeItem) };
  if (obj.lineageNodeTypeItem !== undefined)
    return { lineageNodeTypeItem: LineageNodeTypeItemFilterSensitiveLog(obj.lineageNodeTypeItem) };
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
  ...(obj.metadataForms && { metadataForms: obj.metadataForms.map((item) => FormOutputFilterSensitiveLog(item)) }),
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

/**
 * @internal
 */
export const CreateAssetFilterInputFilterSensitiveLog = (obj: CreateAssetFilterInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const CreateAssetFilterOutputFilterSensitiveLog = (obj: CreateAssetFilterOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const GetAssetFilterOutputFilterSensitiveLog = (obj: GetAssetFilterOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const UpdateAssetFilterInputFilterSensitiveLog = (obj: UpdateAssetFilterInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const UpdateAssetFilterOutputFilterSensitiveLog = (obj: UpdateAssetFilterOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});
