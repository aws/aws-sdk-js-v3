// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput } from "../commands/AcceptPredictionsCommand";
import {
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "../commands/AcceptSubscriptionRequestCommand";
import { AddEntityOwnerCommandInput, AddEntityOwnerCommandOutput } from "../commands/AddEntityOwnerCommand";
import { AddPolicyGrantCommandInput, AddPolicyGrantCommandOutput } from "../commands/AddPolicyGrantCommand";
import {
  AssociateEnvironmentRoleCommandInput,
  AssociateEnvironmentRoleCommandOutput,
} from "../commands/AssociateEnvironmentRoleCommand";
import {
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "../commands/CancelMetadataGenerationRunCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "../commands/CancelSubscriptionCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "../commands/CreateAssetCommand";
import { CreateAssetFilterCommandInput, CreateAssetFilterCommandOutput } from "../commands/CreateAssetFilterCommand";
import {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "../commands/CreateAssetRevisionCommand";
import { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "../commands/CreateAssetTypeCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateDataProductCommandInput, CreateDataProductCommandOutput } from "../commands/CreateDataProductCommand";
import {
  CreateDataProductRevisionCommandInput,
  CreateDataProductRevisionCommandOutput,
} from "../commands/CreateDataProductRevisionCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateDomainUnitCommandInput, CreateDomainUnitCommandOutput } from "../commands/CreateDomainUnitCommand";
import {
  CreateEnvironmentActionCommandInput,
  CreateEnvironmentActionCommandOutput,
} from "../commands/CreateEnvironmentActionCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "../commands/CreateEnvironmentProfileCommand";
import { CreateFormTypeCommandInput, CreateFormTypeCommandOutput } from "../commands/CreateFormTypeCommand";
import { CreateGlossaryCommandInput, CreateGlossaryCommandOutput } from "../commands/CreateGlossaryCommand";
import { CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput } from "../commands/CreateGlossaryTermCommand";
import { CreateGroupProfileCommandInput, CreateGroupProfileCommandOutput } from "../commands/CreateGroupProfileCommand";
import {
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "../commands/CreateListingChangeSetCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import {
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "../commands/CreateProjectMembershipCommand";
import {
  CreateProjectProfileCommandInput,
  CreateProjectProfileCommandOutput,
} from "../commands/CreateProjectProfileCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import {
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "../commands/CreateSubscriptionGrantCommand";
import {
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "../commands/CreateSubscriptionRequestCommand";
import {
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "../commands/CreateSubscriptionTargetCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteAssetFilterCommandInput, DeleteAssetFilterCommandOutput } from "../commands/DeleteAssetFilterCommand";
import { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "../commands/DeleteAssetTypeCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteDataProductCommandInput, DeleteDataProductCommandOutput } from "../commands/DeleteDataProductCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteDomainUnitCommandInput, DeleteDomainUnitCommandOutput } from "../commands/DeleteDomainUnitCommand";
import {
  DeleteEnvironmentActionCommandInput,
  DeleteEnvironmentActionCommandOutput,
} from "../commands/DeleteEnvironmentActionCommand";
import {
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/DeleteEnvironmentBlueprintConfigurationCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "../commands/DeleteEnvironmentProfileCommand";
import { DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput } from "../commands/DeleteFormTypeCommand";
import { DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput } from "../commands/DeleteGlossaryCommand";
import { DeleteGlossaryTermCommandInput, DeleteGlossaryTermCommandOutput } from "../commands/DeleteGlossaryTermCommand";
import { DeleteListingCommandInput, DeleteListingCommandOutput } from "../commands/DeleteListingCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "../commands/DeleteProjectMembershipCommand";
import {
  DeleteProjectProfileCommandInput,
  DeleteProjectProfileCommandOutput,
} from "../commands/DeleteProjectProfileCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import {
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "../commands/DeleteSubscriptionGrantCommand";
import {
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "../commands/DeleteSubscriptionRequestCommand";
import {
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "../commands/DeleteSubscriptionTargetCommand";
import {
  DeleteTimeSeriesDataPointsCommandInput,
  DeleteTimeSeriesDataPointsCommandOutput,
} from "../commands/DeleteTimeSeriesDataPointsCommand";
import {
  DisassociateEnvironmentRoleCommandInput,
  DisassociateEnvironmentRoleCommandOutput,
} from "../commands/DisassociateEnvironmentRoleCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "../commands/GetAssetCommand";
import { GetAssetFilterCommandInput, GetAssetFilterCommandOutput } from "../commands/GetAssetFilterCommand";
import { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "../commands/GetAssetTypeCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetDataProductCommandInput, GetDataProductCommandOutput } from "../commands/GetDataProductCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput } from "../commands/GetDataSourceRunCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import { GetDomainUnitCommandInput, GetDomainUnitCommandOutput } from "../commands/GetDomainUnitCommand";
import {
  GetEnvironmentActionCommandInput,
  GetEnvironmentActionCommandOutput,
} from "../commands/GetEnvironmentActionCommand";
import {
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "../commands/GetEnvironmentBlueprintCommand";
import {
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/GetEnvironmentBlueprintConfigurationCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetEnvironmentCredentialsCommandInput,
  GetEnvironmentCredentialsCommandOutput,
} from "../commands/GetEnvironmentCredentialsCommand";
import {
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "../commands/GetEnvironmentProfileCommand";
import { GetFormTypeCommandInput, GetFormTypeCommandOutput } from "../commands/GetFormTypeCommand";
import { GetGlossaryCommandInput, GetGlossaryCommandOutput } from "../commands/GetGlossaryCommand";
import { GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput } from "../commands/GetGlossaryTermCommand";
import { GetGroupProfileCommandInput, GetGroupProfileCommandOutput } from "../commands/GetGroupProfileCommand";
import {
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "../commands/GetIamPortalLoginUrlCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "../commands/GetJobRunCommand";
import { GetLineageEventCommandInput, GetLineageEventCommandOutput } from "../commands/GetLineageEventCommand";
import { GetLineageNodeCommandInput, GetLineageNodeCommandOutput } from "../commands/GetLineageNodeCommand";
import { GetListingCommandInput, GetListingCommandOutput } from "../commands/GetListingCommand";
import {
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "../commands/GetMetadataGenerationRunCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import { GetProjectProfileCommandInput, GetProjectProfileCommandOutput } from "../commands/GetProjectProfileCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "../commands/GetRuleCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "../commands/GetSubscriptionCommand";
import {
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "../commands/GetSubscriptionGrantCommand";
import {
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "../commands/GetSubscriptionRequestDetailsCommand";
import {
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "../commands/GetSubscriptionTargetCommand";
import {
  GetTimeSeriesDataPointCommandInput,
  GetTimeSeriesDataPointCommandOutput,
} from "../commands/GetTimeSeriesDataPointCommand";
import { GetUserProfileCommandInput, GetUserProfileCommandOutput } from "../commands/GetUserProfileCommand";
import { ListAssetFiltersCommandInput, ListAssetFiltersCommandOutput } from "../commands/ListAssetFiltersCommand";
import { ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput } from "../commands/ListAssetRevisionsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import {
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput,
} from "../commands/ListDataProductRevisionsCommand";
import {
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "../commands/ListDataSourceRunActivitiesCommand";
import { ListDataSourceRunsCommandInput, ListDataSourceRunsCommandOutput } from "../commands/ListDataSourceRunsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput,
} from "../commands/ListDomainUnitsForParentCommand";
import { ListEntityOwnersCommandInput, ListEntityOwnersCommandOutput } from "../commands/ListEntityOwnersCommand";
import {
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput,
} from "../commands/ListEnvironmentActionsCommand";
import {
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "../commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "../commands/ListEnvironmentBlueprintsCommand";
import {
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "../commands/ListEnvironmentProfilesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { ListLineageEventsCommandInput, ListLineageEventsCommandOutput } from "../commands/ListLineageEventsCommand";
import {
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput,
} from "../commands/ListLineageNodeHistoryCommand";
import {
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "../commands/ListMetadataGenerationRunsCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import { ListPolicyGrantsCommandInput, ListPolicyGrantsCommandOutput } from "../commands/ListPolicyGrantsCommand";
import {
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "../commands/ListProjectMembershipsCommand";
import {
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput,
} from "../commands/ListProjectProfilesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "../commands/ListSubscriptionGrantsCommand";
import {
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "../commands/ListSubscriptionRequestsCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "../commands/ListSubscriptionsCommand";
import {
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "../commands/ListSubscriptionTargetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput,
} from "../commands/ListTimeSeriesDataPointsCommand";
import { PostLineageEventCommandInput, PostLineageEventCommandOutput } from "../commands/PostLineageEventCommand";
import {
  PostTimeSeriesDataPointsCommandInput,
  PostTimeSeriesDataPointsCommandOutput,
} from "../commands/PostTimeSeriesDataPointsCommand";
import {
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/PutEnvironmentBlueprintConfigurationCommand";
import { RejectPredictionsCommandInput, RejectPredictionsCommandOutput } from "../commands/RejectPredictionsCommand";
import {
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "../commands/RejectSubscriptionRequestCommand";
import { RemoveEntityOwnerCommandInput, RemoveEntityOwnerCommandOutput } from "../commands/RemoveEntityOwnerCommand";
import { RemovePolicyGrantCommandInput, RemovePolicyGrantCommandOutput } from "../commands/RemovePolicyGrantCommand";
import { RevokeSubscriptionCommandInput, RevokeSubscriptionCommandOutput } from "../commands/RevokeSubscriptionCommand";
import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import {
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "../commands/SearchGroupProfilesCommand";
import { SearchListingsCommandInput, SearchListingsCommandOutput } from "../commands/SearchListingsCommand";
import { SearchTypesCommandInput, SearchTypesCommandOutput } from "../commands/SearchTypesCommand";
import { SearchUserProfilesCommandInput, SearchUserProfilesCommandOutput } from "../commands/SearchUserProfilesCommand";
import { StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput } from "../commands/StartDataSourceRunCommand";
import {
  StartMetadataGenerationRunCommandInput,
  StartMetadataGenerationRunCommandOutput,
} from "../commands/StartMetadataGenerationRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAssetFilterCommandInput, UpdateAssetFilterCommandOutput } from "../commands/UpdateAssetFilterCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateDomainUnitCommandInput, UpdateDomainUnitCommandOutput } from "../commands/UpdateDomainUnitCommand";
import {
  UpdateEnvironmentActionCommandInput,
  UpdateEnvironmentActionCommandOutput,
} from "../commands/UpdateEnvironmentActionCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "../commands/UpdateEnvironmentProfileCommand";
import { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "../commands/UpdateGlossaryCommand";
import { UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput } from "../commands/UpdateGlossaryTermCommand";
import { UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput } from "../commands/UpdateGroupProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateProjectProfileCommandInput,
  UpdateProjectProfileCommandOutput,
} from "../commands/UpdateProjectProfileCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "../commands/UpdateRuleCommand";
import {
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "../commands/UpdateSubscriptionGrantStatusCommand";
import {
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "../commands/UpdateSubscriptionRequestCommand";
import {
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "../commands/UpdateSubscriptionTargetCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { DataZoneServiceException as __BaseException } from "../models/DataZoneServiceException";
import {
  AcceptChoice,
  AcceptedAssetScope,
  AcceptRule,
  AccessDeniedException,
  ActionParameters,
  AddToProjectMemberPoolPolicyGrantDetail,
  AllDomainUnitsGrantFilter,
  AllUsersGrantFilter,
  AssetFilterSummary,
  AssetItem,
  AssetItemAdditionalAttributes,
  AssetListing,
  AssetListingItem,
  AssetListingItemAdditionalAttributes,
  AssetRevision,
  AssetTargetNameMap,
  AssetTypeItem,
  AssetTypesForRule,
  AthenaPropertiesInput,
  AthenaPropertiesPatch,
  AuthenticationConfigurationInput,
  AuthenticationConfigurationPatch,
  AuthorizationCodeProperties,
  AwsAccount,
  AwsConsoleLinkParameters,
  AwsLocation,
  BasicAuthenticationCredentials,
  BusinessNameGenerationConfiguration,
  ColumnFilterConfiguration,
  ComputeEnvironments,
  ConflictException,
  ConnectionCredentials,
  ConnectionPropertiesInput,
  ConnectionPropertiesOutput,
  ConnectionPropertiesPatch,
  ConnectionSummary,
  CreateAssetTypePolicyGrantDetail,
  CreateDomainUnitPolicyGrantDetail,
  CreateEnvironmentProfilePolicyGrantDetail,
  CreateFormTypePolicyGrantDetail,
  CreateGlossaryPolicyGrantDetail,
  CreateProjectFromProjectProfilePolicyGrantDetail,
  CreateProjectPolicyGrantDetail,
  DataProductItem,
  DataSourceConfigurationInput,
  DomainUnitFilterForProject,
  DomainUnitGrantFilter,
  DomainUnitPolicyGrantPrincipal,
  DomainUnitTarget,
  EnvironmentConfiguration,
  EnvironmentConfigurationParameter,
  EnvironmentConfigurationParametersDetails,
  EnvironmentConfigurationUserParameter,
  EnvironmentDeploymentDetails,
  EnvironmentError,
  EnvironmentParameter,
  EqualToExpression,
  FailureCause,
  FilterExpression,
  FormEntryInput,
  FormInput,
  GlueConnection,
  GlueConnectionInput,
  GlueConnectionPatch,
  GlueOAuth2Credentials,
  GluePropertiesInput,
  GluePropertiesPatch,
  GlueRunConfigurationInput,
  GrantedEntityInput,
  GreaterThanExpression,
  GreaterThanOrEqualToExpression,
  GroupPolicyGrantPrincipal,
  HyperPodPropertiesInput,
  IamPropertiesInput,
  IamPropertiesPatch,
  InExpression,
  InternalServerException,
  IsNotNullExpression,
  IsNullExpression,
  LessThanExpression,
  LessThanOrEqualToExpression,
  LikeExpression,
  LineageSyncSchedule,
  ListingRevisionInput,
  Member,
  MetadataFormEnforcementDetail,
  MetadataFormReference,
  Model,
  NotEqualToExpression,
  NotInExpression,
  NotLikeExpression,
  OAuth2ClientApplication,
  OAuth2Properties,
  OverrideDomainUnitOwnersPolicyGrantDetail,
  OverrideProjectOwnersPolicyGrantDetail,
  OwnerGroupProperties,
  OwnerProperties,
  OwnerUserProperties,
  PhysicalConnectionRequirements,
  PhysicalEndpoint,
  PolicyGrantDetail,
  PolicyGrantPrincipal,
  PredictionConfiguration,
  ProjectGrantFilter,
  ProjectPolicyGrantPrincipal,
  ProjectsForRule,
  RecommendationConfiguration,
  RedshiftClusterStorage,
  RedshiftCredentialConfiguration,
  RedshiftCredentials,
  RedshiftLineageSyncConfigurationInput,
  RedshiftPropertiesInput,
  RedshiftPropertiesPatch,
  RedshiftRunConfigurationInput,
  RedshiftServerlessStorage,
  RedshiftStorage,
  RedshiftStorageProperties,
  Region,
  RelationalFilterConfiguration,
  ResourceNotFoundException,
  RowFilterExpression,
  RuleDetail,
  RuleScope,
  RuleTarget,
  S3PropertiesInput,
  S3PropertiesPatch,
  SageMakerRunConfigurationInput,
  ScheduleConfiguration,
  ServiceQuotaExceededException,
  SingleSignOn,
  SparkEmrPropertiesInput,
  SparkEmrPropertiesOutput,
  SparkEmrPropertiesPatch,
  SparkGlueArgs,
  SparkGluePropertiesInput,
  SubscribedAsset,
  TermRelations,
  ThrottlingException,
  TimeSeriesDataPointSummaryFormOutput,
  UnauthorizedException,
  Unit,
  UseAssetTypePolicyGrantDetail,
  UsernamePassword,
  UserPolicyGrantPrincipal,
  ValidationException,
} from "../models/models_0";
import {
  DataProductListing,
  DataProductListingItem,
  DataProductResultItem,
  DataProductRevision,
  DataSourceRunActivity,
  DataSourceRunSummary,
  DataSourceSummary,
  DomainSummary,
  EnvironmentBlueprintConfigurationItem,
  EnvironmentBlueprintSummary,
  EnvironmentProfileSummary,
  EnvironmentSummary,
  JobRunDetails,
  JobRunSummary,
  LakeFormationConfiguration,
  LineageEventSummary,
  LineageNodeReference,
  LineageNodeSummary,
  LineageRunDetails,
  LineageSqlQueryRunDetails,
  ListingItem,
  MetadataGenerationRunItem,
  MetadataGenerationRunTarget,
  NotificationOutput,
  PolicyGrantMember,
  ProjectProfileSummary,
  ProjectSummary,
  ProvisioningConfiguration,
  RejectChoice,
  RejectRule,
  RuleSummary,
  SubscribedListingInput,
  SubscribedPrincipalInput,
  SubscribedProjectInput,
  SubscriptionGrantSummary,
  SubscriptionRequestSummary,
  SubscriptionSummary,
  SubscriptionTargetForm,
  SubscriptionTargetSummary,
  TimeSeriesDataPointFormInput,
  TimeSeriesDataPointFormOutput,
} from "../models/models_1";
import {
  AssetFilterConfiguration,
  Filter,
  FilterClause,
  FormTypeData,
  GlossaryItem,
  GlossaryTermItem,
  LineageNodeTypeItem,
  RowFilter,
  RowFilterConfiguration,
  SearchInItem,
  SearchInventoryResultItem,
  SearchOutputAdditionalAttribute,
  SearchResultItem,
  SearchSort,
  SearchTypesResultItem,
} from "../models/models_2";

/**
 * serializeAws_restJson1AcceptPredictionsCommand
 */
export const se_AcceptPredictionsCommand = async (
  input: AcceptPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      acceptChoices: (_) => _json(_),
      acceptRule: (_) => se_AcceptRule(_, context),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AcceptSubscriptionRequestCommand
 */
export const se_AcceptSubscriptionRequestCommand = async (
  input: AcceptSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetScopes: (_) => _json(_),
      decisionComment: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddEntityOwnerCommand
 */
export const se_AddEntityOwnerCommand = async (
  input: AddEntityOwnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/addOwner");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      owner: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddPolicyGrantCommand
 */
export const se_AddPolicyGrantCommand = async (
  input: AddPolicyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/addGrant");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      detail: (_) => _json(_),
      policyType: [],
      principal: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateEnvironmentRoleCommand
 */
export const se_AssociateEnvironmentRoleCommand = async (
  input: AssociateEnvironmentRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("environmentRoleArn", () => input.environmentRoleArn!, "{environmentRoleArn}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMetadataGenerationRunCommand
 */
export const se_CancelMetadataGenerationRunCommand = async (
  input: CancelMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSubscriptionCommand
 */
export const se_CancelSubscriptionCommand = async (
  input: CancelSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetCommand
 */
export const se_CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      externalIdentifier: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
      predictionConfiguration: (_) => _json(_),
      typeIdentifier: [],
      typeRevision: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetFilterCommand
 */
export const se_CreateAssetFilterCommand = async (
  input: CreateAssetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => se_AssetFilterConfiguration(_, context),
      description: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetRevisionCommand
 */
export const se_CreateAssetRevisionCommand = async (
  input: CreateAssetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      name: [],
      predictionConfiguration: (_) => _json(_),
      typeRevision: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetTypeCommand
 */
export const se_CreateAssetTypeCommand = async (
  input: CreateAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/asset-types");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      formsInput: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/connections");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsLocation: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      environmentIdentifier: [],
      name: [],
      props: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataProductCommand
 */
export const se_CreateDataProductCommand = async (
  input: CreateDataProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-products");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      items: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataProductRevisionCommand
 */
export const se_CreateDataProductRevisionCommand = async (
  input: CreateDataProductRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      items: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetFormsInput: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => _json(_),
      connectionIdentifier: [],
      description: [],
      enableSetting: [],
      environmentIdentifier: [],
      name: [],
      projectIdentifier: [],
      publishOnImport: [],
      recommendation: (_) => _json(_),
      schedule: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      domainExecutionRole: [],
      domainVersion: [],
      kmsKeyIdentifier: [],
      name: [],
      serviceRole: [],
      singleSignOn: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainUnitCommand
 */
export const se_CreateDomainUnitCommand = async (
  input: CreateDomainUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/domain-units");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      parentDomainUnitIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      deploymentOrder: [],
      description: [],
      environmentAccountIdentifier: [],
      environmentAccountRegion: [],
      environmentBlueprintIdentifier: [],
      environmentConfigurationId: [],
      environmentProfileIdentifier: [],
      glossaryTerms: (_) => _json(_),
      name: [],
      projectIdentifier: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentActionCommand
 */
export const se_CreateEnvironmentActionCommand = async (
  input: CreateEnvironmentActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      parameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentProfileCommand
 */
export const se_CreateEnvironmentProfileCommand = async (
  input: CreateEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsAccountId: [],
      awsAccountRegion: [],
      description: [],
      environmentBlueprintIdentifier: [],
      name: [],
      projectIdentifier: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFormTypeCommand
 */
export const se_CreateFormTypeCommand = async (
  input: CreateFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/form-types");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      model: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGlossaryCommand
 */
export const se_CreateGlossaryCommand = async (
  input: CreateGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossaries");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      owningProjectIdentifier: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGlossaryTermCommand
 */
export const se_CreateGlossaryTermCommand = async (
  input: CreateGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      glossaryIdentifier: [],
      longDescription: [],
      name: [],
      shortDescription: [],
      status: [],
      termRelations: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupProfileCommand
 */
export const se_CreateGroupProfileCommand = async (
  input: CreateGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/group-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      groupIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateListingChangeSetCommand
 */
export const se_CreateListingChangeSetCommand = async (
  input: CreateListingChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/listings/change-set");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      entityIdentifier: [],
      entityRevision: [],
      entityType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainUnitId: [],
      glossaryTerms: (_) => _json(_),
      name: [],
      projectProfileId: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectMembershipCommand
 */
export const se_CreateProjectMembershipCommand = async (
  input: CreateProjectMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      designation: [],
      member: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectProfileCommand
 */
export const se_CreateProjectProfileCommand = async (
  input: CreateProjectProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/project-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainUnitIdentifier: [],
      environmentConfigurations: (_) => _json(_),
      name: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/rules");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      detail: (_) => _json(_),
      name: [],
      scope: (_) => _json(_),
      target: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionGrantCommand
 */
export const se_CreateSubscriptionGrantCommand = async (
  input: CreateSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetTargetNames: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      environmentIdentifier: [],
      grantedEntity: (_) => _json(_),
      subscriptionTargetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionRequestCommand
 */
export const se_CreateSubscriptionRequestCommand = async (
  input: CreateSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      metadataForms: (_) => _json(_),
      requestReason: [],
      subscribedListings: (_) => _json(_),
      subscribedPrincipals: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionTargetCommand
 */
export const se_CreateSubscriptionTargetCommand = async (
  input: CreateSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicableAssetTypes: (_) => _json(_),
      authorizedPrincipals: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      manageAccessRole: [],
      name: [],
      provider: [],
      subscriptionTargetConfig: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/user-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      userIdentifier: [],
      userType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetFilterCommand
 */
export const se_DeleteAssetFilterCommand = async (
  input: DeleteAssetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetTypeCommand
 */
export const se_DeleteAssetTypeCommand = async (
  input: DeleteAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/asset-types/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/connections/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataProductCommand
 */
export const se_DeleteDataProductCommand = async (
  input: DeleteDataProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-products/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
    [_rPORF]: [() => input.retainPermissionsOnRevokeFailure !== void 0, () => input[_rPORF]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
    [_sDC]: [() => input.skipDeletionCheck !== void 0, () => input[_sDC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainUnitCommand
 */
export const se_DeleteDomainUnitCommand = async (
  input: DeleteDomainUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/domain-units/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentActionCommand
 */
export const se_DeleteEnvironmentActionCommand = async (
  input: DeleteEnvironmentActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentBlueprintConfigurationCommand
 */
export const se_DeleteEnvironmentBlueprintConfigurationCommand = async (
  input: DeleteEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentProfileCommand
 */
export const se_DeleteEnvironmentProfileCommand = async (
  input: DeleteEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFormTypeCommand
 */
export const se_DeleteFormTypeCommand = async (
  input: DeleteFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("formTypeIdentifier", () => input.formTypeIdentifier!, "{formTypeIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGlossaryCommand
 */
export const se_DeleteGlossaryCommand = async (
  input: DeleteGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGlossaryTermCommand
 */
export const se_DeleteGlossaryTermCommand = async (
  input: DeleteGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteListingCommand
 */
export const se_DeleteListingCommand = async (
  input: DeleteListingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/listings/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_sDC]: [() => input.skipDeletionCheck !== void 0, () => input[_sDC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectMembershipCommand
 */
export const se_DeleteProjectMembershipCommand = async (
  input: DeleteProjectMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      member: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectProfileCommand
 */
export const se_DeleteProjectProfileCommand = async (
  input: DeleteProjectProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/project-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/rules/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionGrantCommand
 */
export const se_DeleteSubscriptionGrantCommand = async (
  input: DeleteSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionRequestCommand
 */
export const se_DeleteSubscriptionRequestCommand = async (
  input: DeleteSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionTargetCommand
 */
export const se_DeleteSubscriptionTargetCommand = async (
  input: DeleteSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTimeSeriesDataPointsCommand
 */
export const se_DeleteTimeSeriesDataPointsCommand = async (
  input: DeleteTimeSeriesDataPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  const query: any = map({
    [_fN]: [, __expectNonNull(input[_fN]!, `formName`)],
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateEnvironmentRoleCommand
 */
export const se_DisassociateEnvironmentRoleCommand = async (
  input: DisassociateEnvironmentRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("environmentRoleArn", () => input.environmentRoleArn!, "{environmentRoleArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetCommand
 */
export const se_GetAssetCommand = async (
  input: GetAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetFilterCommand
 */
export const se_GetAssetFilterCommand = async (
  input: GetAssetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetTypeCommand
 */
export const se_GetAssetTypeCommand = async (
  input: GetAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/asset-types/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/connections/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_wS]: [() => input.withSecret !== void 0, () => input[_wS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataProductCommand
 */
export const se_GetDataProductCommand = async (
  input: GetDataProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-products/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceRunCommand
 */
export const se_GetDataSourceRunCommand = async (
  input: GetDataSourceRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-source-runs/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainUnitCommand
 */
export const se_GetDomainUnitCommand = async (
  input: GetDomainUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/domain-units/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentActionCommand
 */
export const se_GetEnvironmentActionCommand = async (
  input: GetEnvironmentActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentBlueprintCommand
 */
export const se_GetEnvironmentBlueprintCommand = async (
  input: GetEnvironmentBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentBlueprintConfigurationCommand
 */
export const se_GetEnvironmentBlueprintConfigurationCommand = async (
  input: GetEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCredentialsCommand
 */
export const se_GetEnvironmentCredentialsCommand = async (
  input: GetEnvironmentCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/credentials");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentProfileCommand
 */
export const se_GetEnvironmentProfileCommand = async (
  input: GetEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFormTypeCommand
 */
export const se_GetFormTypeCommand = async (
  input: GetFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("formTypeIdentifier", () => input.formTypeIdentifier!, "{formTypeIdentifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlossaryCommand
 */
export const se_GetGlossaryCommand = async (
  input: GetGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlossaryTermCommand
 */
export const se_GetGlossaryTermCommand = async (
  input: GetGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupProfileCommand
 */
export const se_GetGroupProfileCommand = async (
  input: GetGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("groupIdentifier", () => input.groupIdentifier!, "{groupIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIamPortalLoginUrlCommand
 */
export const se_GetIamPortalLoginUrlCommand = async (
  input: GetIamPortalLoginUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/get-portal-login-url");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetJobRunCommand
 */
export const se_GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/jobRuns/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLineageEventCommand
 */
export const se_GetLineageEventCommand = async (
  input: GetLineageEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/lineage/events/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLineageNodeCommand
 */
export const se_GetLineageNodeCommand = async (
  input: GetLineageNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_t]: [() => input.eventTimestamp !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetListingCommand
 */
export const se_GetListingCommand = async (
  input: GetListingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/listings/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_lR]: [, input[_lR]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetadataGenerationRunCommand
 */
export const se_GetMetadataGenerationRunCommand = async (
  input: GetMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProjectCommand
 */
export const se_GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProjectProfileCommand
 */
export const se_GetProjectProfileCommand = async (
  input: GetProjectProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/project-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRuleCommand
 */
export const se_GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/rules/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionCommand
 */
export const se_GetSubscriptionCommand = async (
  input: GetSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionGrantCommand
 */
export const se_GetSubscriptionGrantCommand = async (
  input: GetSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionRequestDetailsCommand
 */
export const se_GetSubscriptionRequestDetailsCommand = async (
  input: GetSubscriptionRequestDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionTargetCommand
 */
export const se_GetSubscriptionTargetCommand = async (
  input: GetSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTimeSeriesDataPointCommand
 */
export const se_GetTimeSeriesDataPointCommand = async (
  input: GetTimeSeriesDataPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_fN]: [, __expectNonNull(input[_fN]!, `formName`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserProfileCommand
 */
export const se_GetUserProfileCommand = async (
  input: GetUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("userIdentifier", () => input.userIdentifier!, "{userIdentifier}", false);
  const query: any = map({
    [_ty]: [, input[_ty]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetFiltersCommand
 */
export const se_ListAssetFiltersCommand = async (
  input: ListAssetFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetRevisionsCommand
 */
export const se_ListAssetRevisionsCommand = async (
  input: ListAssetRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/connections");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_n]: [, input[_n]!],
    [_eI]: [, input[_eI]!],
    [_pI]: [, __expectNonNull(input[_pI]!, `projectIdentifier`)],
    [_ty]: [, input[_ty]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataProductRevisionsCommand
 */
export const se_ListDataProductRevisionsCommand = async (
  input: ListDataProductRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourceRunActivitiesCommand
 */
export const se_ListDataSourceRunActivitiesCommand = async (
  input: ListDataSourceRunActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourceRunsCommand
 */
export const se_ListDataSourceRunsCommand = async (
  input: ListDataSourceRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("dataSourceIdentifier", () => input.dataSourceIdentifier!, "{dataSourceIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_pI]: [, __expectNonNull(input[_pI]!, `projectIdentifier`)],
    [_eI]: [, input[_eI]!],
    [_cI]: [, input[_cI]!],
    [_ty]: [, input[_ty]!],
    [_s]: [, input[_s]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains");
  const query: any = map({
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainUnitsForParentCommand
 */
export const se_ListDomainUnitsForParentCommand = async (
  input: ListDomainUnitsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/domain-units");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_pDUI]: [, __expectNonNull(input[_pDUI]!, `parentDomainUnitIdentifier`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEntityOwnersCommand
 */
export const se_ListEntityOwnersCommand = async (
  input: ListEntityOwnersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/owners");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentActionsCommand
 */
export const se_ListEnvironmentActionsCommand = async (
  input: ListEnvironmentActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentBlueprintConfigurationsCommand
 */
export const se_ListEnvironmentBlueprintConfigurationsCommand = async (
  input: ListEnvironmentBlueprintConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentBlueprintsCommand
 */
export const se_ListEnvironmentBlueprintsCommand = async (
  input: ListEnvironmentBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprints");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_n]: [, input[_n]!],
    [_m]: [() => input.managed !== void 0, () => input[_m]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentProfilesCommand
 */
export const se_ListEnvironmentProfilesCommand = async (
  input: ListEnvironmentProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_aAI]: [, input[_aAI]!],
    [_aAR]: [, input[_aAR]!],
    [_eBI]: [, input[_eBI]!],
    [_pI]: [, input[_pI]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_aAI]: [, input[_aAI]!],
    [_s]: [, input[_s]!],
    [_aAR]: [, input[_aAR]!],
    [_pI]: [, __expectNonNull(input[_pI]!, `projectIdentifier`)],
    [_ePI]: [, input[_ePI]!],
    [_eBI]: [, input[_eBI]!],
    [_p]: [, input[_p]!],
    [_n]: [, input[_n]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobRunsCommand
 */
export const se_ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/jobs/{jobIdentifier}/runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_sO]: [, input[_sO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLineageEventsCommand
 */
export const se_ListLineageEventsCommand = async (
  input: ListLineageEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/lineage/events");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tA]: [() => input.timestampAfter !== void 0, () => __serializeDateTime(input[_tA]!).toString()],
    [_tB]: [() => input.timestampBefore !== void 0, () => __serializeDateTime(input[_tB]!).toString()],
    [_pS]: [, input[_pS]!],
    [_sO]: [, input[_sO]!],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLineageNodeHistoryCommand
 */
export const se_ListLineageNodeHistoryCommand = async (
  input: ListLineageNodeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}/history");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_d]: [, input[_d]!],
    [_tGTE]: [() => input.eventTimestampGTE !== void 0, () => __serializeDateTime(input[_eTGTE]!).toString()],
    [_tLTE]: [() => input.eventTimestampLTE !== void 0, () => __serializeDateTime(input[_eTLTE]!).toString()],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMetadataGenerationRunsCommand
 */
export const se_ListMetadataGenerationRunsCommand = async (
  input: ListMetadataGenerationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_ty]: [, input[_ty]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationsCommand
 */
export const se_ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/notifications");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_ty]: [, __expectNonNull(input[_ty]!, `type`)],
    [_aT]: [() => input.afterTimestamp !== void 0, () => __serializeDateTime(input[_aT]!).toString()],
    [_bT]: [() => input.beforeTimestamp !== void 0, () => __serializeDateTime(input[_bT]!).toString()],
    [_su]: [() => input.subjects !== void 0, () => input[_su]! || []],
    [_tS]: [, input[_tS]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPolicyGrantsCommand
 */
export const se_ListPolicyGrantsCommand = async (
  input: ListPolicyGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/grants");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  const query: any = map({
    [_pT]: [, __expectNonNull(input[_pT]!, `policyType`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectMembershipsCommand
 */
export const se_ListProjectMembershipsCommand = async (
  input: ListProjectMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  const query: any = map({
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectProfilesCommand
 */
export const se_ListProjectProfilesCommand = async (
  input: ListProjectProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/project-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_n]: [, input[_n]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
    [_gI]: [, input[_gI]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/list-rules/{targetType}/{targetIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("targetType", () => input.targetType!, "{targetType}", false);
  b.p("targetIdentifier", () => input.targetIdentifier!, "{targetIdentifier}", false);
  const query: any = map({
    [_rT]: [, input[_rT]!],
    [_rA]: [, input[_a]!],
    [_pIr]: [() => input.projectIds !== void 0, () => input[_pIr]! || []],
    [_aTs]: [() => input.assetTypes !== void 0, () => input[_aTs]! || []],
    [_dP]: [() => input.dataProduct !== void 0, () => input[_dP]!.toString()],
    [_iC]: [() => input.includeCascaded !== void 0, () => input[_iC]!.toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionGrantsCommand
 */
export const se_ListSubscriptionGrantsCommand = async (
  input: ListSubscriptionGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_eIn]: [, input[_eIn]!],
    [_sTI]: [, input[_sTI]!],
    [_sLI]: [, input[_sLI]!],
    [_sI]: [, input[_sI]!],
    [_oPI]: [, input[_oPI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionRequestsCommand
 */
export const se_ListSubscriptionRequestsCommand = async (
  input: ListSubscriptionRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_sLI]: [, input[_sLI]!],
    [_oPI]: [, input[_oPI]!],
    [_aPI]: [, input[_aPI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionsCommand
 */
export const se_ListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_sRI]: [, input[_sRI]!],
    [_s]: [, input[_s]!],
    [_sLI]: [, input[_sLI]!],
    [_oPI]: [, input[_oPI]!],
    [_aPI]: [, input[_aPI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionTargetsCommand
 */
export const se_ListSubscriptionTargetsCommand = async (
  input: ListSubscriptionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  const query: any = map({
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTimeSeriesDataPointsCommand
 */
export const se_ListTimeSeriesDataPointsCommand = async (
  input: ListTimeSeriesDataPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  const query: any = map({
    [_fN]: [, __expectNonNull(input[_fN]!, `formName`)],
    [_sA]: [() => input.startedAt !== void 0, () => __serializeDateTime(input[_sA]!).toString()],
    [_eA]: [() => input.endedAt !== void 0, () => __serializeDateTime(input[_eA]!).toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostLineageEventCommand
 */
export const se_PostLineageEventCommand = async (
  input: PostLineageEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_ct]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/v2/domains/{domainIdentifier}/lineage/events");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  if (input.event !== undefined) {
    body = input.event;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostTimeSeriesDataPointsCommand
 */
export const se_PostTimeSeriesDataPointsCommand = async (
  input: PostTimeSeriesDataPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      forms: (_) => se_TimeSeriesDataPointFormInputList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEnvironmentBlueprintConfigurationCommand
 */
export const se_PutEnvironmentBlueprintConfigurationCommand = async (
  input: PutEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledRegions: (_) => _json(_),
      environmentRolePermissionBoundary: [],
      manageAccessRoleArn: [],
      provisioningConfigurations: (_) => _json(_),
      provisioningRoleArn: [],
      regionalParameters: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectPredictionsCommand
 */
export const se_RejectPredictionsCommand = async (
  input: RejectPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      rejectChoices: (_) => _json(_),
      rejectRule: (_) => se_RejectRule(_, context),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectSubscriptionRequestCommand
 */
export const se_RejectSubscriptionRequestCommand = async (
  input: RejectSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      decisionComment: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveEntityOwnerCommand
 */
export const se_RemoveEntityOwnerCommand = async (
  input: RemoveEntityOwnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/removeOwner");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      owner: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemovePolicyGrantCommand
 */
export const se_RemovePolicyGrantCommand = async (
  input: RemovePolicyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/removeGrant");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("entityType", () => input.entityType!, "{entityType}", false);
  b.p("entityIdentifier", () => input.entityIdentifier!, "{entityIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      policyType: [],
      principal: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeSubscriptionCommand
 */
export const se_RevokeSubscriptionCommand = async (
  input: RevokeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      retainPermissions: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAttributes: (_) => _json(_),
      filters: (_) => se_FilterClause(_, context),
      maxResults: [],
      nextToken: [],
      owningProjectIdentifier: [],
      searchIn: (_) => _json(_),
      searchScope: [],
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchGroupProfilesCommand
 */
export const se_SearchGroupProfilesCommand = async (
  input: SearchGroupProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search-group-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      groupType: [],
      maxResults: [],
      nextToken: [],
      searchText: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchListingsCommand
 */
export const se_SearchListingsCommand = async (
  input: SearchListingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/listings/search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAttributes: (_) => _json(_),
      filters: (_) => se_FilterClause(_, context),
      maxResults: [],
      nextToken: [],
      searchIn: (_) => _json(_),
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchTypesCommand
 */
export const se_SearchTypesCommand = async (
  input: SearchTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/types-search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => se_FilterClause(_, context),
      managed: [],
      maxResults: [],
      nextToken: [],
      searchIn: (_) => _json(_),
      searchScope: [],
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchUserProfilesCommand
 */
export const se_SearchUserProfilesCommand = async (
  input: SearchUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search-user-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      searchText: [],
      userType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDataSourceRunCommand
 */
export const se_StartDataSourceRunCommand = async (
  input: StartDataSourceRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("dataSourceIdentifier", () => input.dataSourceIdentifier!, "{dataSourceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMetadataGenerationRunCommand
 */
export const se_StartMetadataGenerationRunCommand = async (
  input: StartMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      owningProjectIdentifier: [],
      target: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssetFilterCommand
 */
export const se_UpdateAssetFilterCommand = async (
  input: UpdateAssetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => se_AssetFilterConfiguration(_, context),
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/connections/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsLocation: (_) => _json(_),
      description: [],
      props: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetFormsInput: (_) => _json(_),
      configuration: (_) => _json(_),
      description: [],
      enableSetting: [],
      name: [],
      publishOnImport: [],
      recommendation: (_) => _json(_),
      retainPermissionsOnRevokeFailure: [],
      schedule: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainExecutionRole: [],
      name: [],
      serviceRole: [],
      singleSignOn: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainUnitCommand
 */
export const se_UpdateDomainUnitCommand = async (
  input: UpdateDomainUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/domain-units/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintVersion: [],
      description: [],
      glossaryTerms: (_) => _json(_),
      name: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentActionCommand
 */
export const se_UpdateEnvironmentActionCommand = async (
  input: UpdateEnvironmentActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      parameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentProfileCommand
 */
export const se_UpdateEnvironmentProfileCommand = async (
  input: UpdateEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsAccountId: [],
      awsAccountRegion: [],
      description: [],
      name: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlossaryCommand
 */
export const se_UpdateGlossaryCommand = async (
  input: UpdateGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      status: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlossaryTermCommand
 */
export const se_UpdateGlossaryTermCommand = async (
  input: UpdateGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      glossaryIdentifier: [],
      longDescription: [],
      name: [],
      shortDescription: [],
      status: [],
      termRelations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupProfileCommand
 */
export const se_UpdateGroupProfileCommand = async (
  input: UpdateGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("groupIdentifier", () => input.groupIdentifier!, "{groupIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainUnitId: [],
      environmentDeploymentDetails: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      name: [],
      projectProfileVersion: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProjectProfileCommand
 */
export const se_UpdateProjectProfileCommand = async (
  input: UpdateProjectProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/project-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainUnitIdentifier: [],
      environmentConfigurations: (_) => _json(_),
      name: [],
      status: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/rules/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      detail: (_) => _json(_),
      includeChildDomainUnits: [],
      name: [],
      scope: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionGrantStatusCommand
 */
export const se_UpdateSubscriptionGrantStatusCommand = async (
  input: UpdateSubscriptionGrantStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      failureCause: (_) => _json(_),
      status: [],
      targetName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionRequestCommand
 */
export const se_UpdateSubscriptionRequestCommand = async (
  input: UpdateSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      requestReason: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionTargetCommand
 */
export const se_UpdateSubscriptionTargetCommand = async (
  input: UpdateSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicableAssetTypes: (_) => _json(_),
      authorizedPrincipals: (_) => _json(_),
      manageAccessRole: [],
      name: [],
      provider: [],
      subscriptionTargetConfig: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("userIdentifier", () => input.userIdentifier!, "{userIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptPredictionsCommand
 */
export const de_AcceptPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPredictionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    domainId: __expectString,
    revision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptSubscriptionRequestCommand
 */
export const de_AcceptSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataForms: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddEntityOwnerCommand
 */
export const de_AddEntityOwnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddEntityOwnerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddPolicyGrantCommand
 */
export const de_AddPolicyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPolicyGrantCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateEnvironmentRoleCommand
 */
export const de_AssociateEnvironmentRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEnvironmentRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMetadataGenerationRunCommand
 */
export const de_CancelMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMetadataGenerationRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSubscriptionCommand
 */
export const de_CancelSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetCommand
 */
export const de_CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    latestTimeSeriesDataPointFormsOutput: (_) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    predictionConfiguration: _json,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetFilterCommand
 */
export const de_CreateAssetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetFilterCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    configuration: (_) => de_AssetFilterConfiguration(__expectUnion(_), context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainId: __expectString,
    effectiveColumnNames: _json,
    effectiveRowFilter: __expectString,
    errorMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetRevisionCommand
 */
export const de_CreateAssetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    latestTimeSeriesDataPointFormsOutput: (_) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    predictionConfiguration: _json,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetTypeCommand
 */
export const de_CreateAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetTypeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectionId: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentId: __expectString,
    name: __expectString,
    physicalEndpoints: (_) => de_PhysicalEndpoints(_, context),
    projectId: __expectString,
    props: (_) => de_ConnectionPropertiesOutput(__expectUnion(_), context),
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataProductCommand
 */
export const de_CreateDataProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataProductCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    items: _json,
    name: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataProductRevisionCommand
 */
export const de_CreateDataProductRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataProductRevisionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    items: _json,
    name: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    connectionId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    description: __expectString,
    domainExecutionRole: __expectString,
    domainVersion: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    portalUrl: __expectString,
    rootDomainUnitId: __expectString,
    serviceRole: __expectString,
    singleSignOn: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainUnitCommand
 */
export const de_CreateDomainUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainUnitCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ancestorDomainUnitIds: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owners: _json,
    parentDomainUnitId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentConfigurationId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentActionCommand
 */
export const de_CreateEnvironmentActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentActionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    name: __expectString,
    parameters: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentProfileCommand
 */
export const de_CreateEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFormTypeCommand
 */
export const de_CreateFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFormTypeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlossaryCommand
 */
export const de_CreateGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlossaryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlossaryTermCommand
 */
export const de_CreateGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlossaryTermCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupProfileCommand
 */
export const de_CreateGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateListingChangeSetCommand
 */
export const de_CreateListingChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListingChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    listingId: __expectString,
    listingRevision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentDeploymentDetails: _json,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectProfileId: __expectString,
    projectStatus: __expectString,
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectMembershipCommand
 */
export const de_CreateProjectMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectProfileCommand
 */
export const de_CreateProjectProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentConfigurations: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    detail: (_) => _json(__expectUnion(_)),
    identifier: __expectString,
    name: __expectString,
    ruleType: __expectString,
    scope: _json,
    target: (_) => _json(__expectUnion(_)),
    targetType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionGrantCommand
 */
export const de_CreateSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionRequestCommand
 */
export const de_CreateSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataForms: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionTargetCommand
 */
export const de_CreateSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetFilterCommand
 */
export const de_DeleteAssetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetFilterCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetTypeCommand
 */
export const de_DeleteAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataProductCommand
 */
export const de_DeleteDataProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProductCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    connectionId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    retainPermissionsOnRevokeFailure: __expectBoolean,
    schedule: _json,
    selfGrantStatus: (_) => _json(__expectUnion(_)),
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainUnitCommand
 */
export const de_DeleteDomainUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainUnitCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentActionCommand
 */
export const de_DeleteEnvironmentActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentBlueprintConfigurationCommand
 */
export const de_DeleteEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentProfileCommand
 */
export const de_DeleteEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFormTypeCommand
 */
export const de_DeleteFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFormTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlossaryCommand
 */
export const de_DeleteGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlossaryCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlossaryTermCommand
 */
export const de_DeleteGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlossaryTermCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteListingCommand
 */
export const de_DeleteListingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectMembershipCommand
 */
export const de_DeleteProjectMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectProfileCommand
 */
export const de_DeleteProjectProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionGrantCommand
 */
export const de_DeleteSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionRequestCommand
 */
export const de_DeleteSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionTargetCommand
 */
export const de_DeleteSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTimeSeriesDataPointsCommand
 */
export const de_DeleteTimeSeriesDataPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimeSeriesDataPointsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateEnvironmentRoleCommand
 */
export const de_DisassociateEnvironmentRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEnvironmentRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetCommand
 */
export const de_GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    latestTimeSeriesDataPointFormsOutput: (_) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetFilterCommand
 */
export const de_GetAssetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    configuration: (_) => de_AssetFilterConfiguration(__expectUnion(_), context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainId: __expectString,
    effectiveColumnNames: _json,
    effectiveRowFilter: __expectString,
    errorMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetTypeCommand
 */
export const de_GetAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectionCredentials: (_) => de_ConnectionCredentials(_, context),
    connectionId: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentId: __expectString,
    environmentUserRole: __expectString,
    name: __expectString,
    physicalEndpoints: (_) => de_PhysicalEndpoints(_, context),
    projectId: __expectString,
    props: (_) => de_ConnectionPropertiesOutput(__expectUnion(_), context),
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataProductCommand
 */
export const de_GetDataProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    items: _json,
    name: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    connectionId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAssetCount: __expectInt32,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    schedule: _json,
    selfGrantStatus: (_) => _json(__expectUnion(_)),
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceRunCommand
 */
export const de_GetDataSourceRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceConfigurationSnapshot: __expectString,
    dataSourceId: __expectString,
    domainId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lineageSummary: _json,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainExecutionRole: __expectString,
    domainVersion: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    portalUrl: __expectString,
    rootDomainUnitId: __expectString,
    serviceRole: __expectString,
    singleSignOn: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainUnitCommand
 */
export const de_GetDomainUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainUnitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    name: __expectString,
    owners: _json,
    parentDomainUnitId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentConfigurationId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentActionCommand
 */
export const de_GetEnvironmentActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    name: __expectString,
    parameters: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentBlueprintCommand
 */
export const de_GetEnvironmentBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentBlueprintCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deploymentProperties: _json,
    description: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    name: __expectString,
    provider: __expectString,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentBlueprintConfigurationCommand
 */
export const de_GetEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    environmentRolePermissionBoundary: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningConfigurations: _json,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCredentialsCommand
 */
export const de_GetEnvironmentCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessKeyId: __expectString,
    expiration: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    secretAccessKey: __expectString,
    sessionToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentProfileCommand
 */
export const de_GetEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFormTypeCommand
 */
export const de_GetFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFormTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    imports: _json,
    model: (_) => _json(__expectUnion(_)),
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlossaryCommand
 */
export const de_GetGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlossaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlossaryTermCommand
 */
export const de_GetGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlossaryTermCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupProfileCommand
 */
export const de_GetGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIamPortalLoginUrlCommand
 */
export const de_GetIamPortalLoginUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIamPortalLoginUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authCodeUrl: __expectString,
    userProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobRunCommand
 */
export const de_GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    details: (_) => de_JobRunDetails(__expectUnion(_), context),
    domainId: __expectString,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    error: _json,
    id: __expectString,
    jobId: __expectString,
    jobType: __expectString,
    runMode: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLineageEventCommand
 */
export const de_GetLineageEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLineageEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_dI]: [, output.headers[_di]],
    [_i]: [, output.headers[_i]],
    [_cB]: [, output.headers[_cb]],
    [_pS]: [, output.headers[_ps]],
    [_eTv]: [() => void 0 !== output.headers[_et], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_et]))],
    [_cA]: [() => void 0 !== output.headers[_ca], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_ca]))],
  });
  const data: any = await collectBody(output.body, context);
  contents.event = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetLineageNodeCommand
 */
export const de_GetLineageNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLineageNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    downstreamNodes: (_) => de_LineageNodeReferenceList(_, context),
    eventTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    formsOutput: _json,
    id: __expectString,
    name: __expectString,
    sourceIdentifier: __expectString,
    typeName: __expectString,
    typeRevision: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
    upstreamNodes: (_) => de_LineageNodeReferenceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetListingCommand
 */
export const de_GetListingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    item: (_) => de_ListingItem(__expectUnion(_), context),
    listingRevision: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetadataGenerationRunCommand
 */
export const de_GetMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetadataGenerationRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    target: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentDeploymentDetails: _json,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectProfileId: __expectString,
    projectStatus: __expectString,
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectProfileCommand
 */
export const de_GetProjectProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentConfigurations: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRuleCommand
 */
export const de_GetRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    detail: (_) => _json(__expectUnion(_)),
    identifier: __expectString,
    lastUpdatedBy: __expectString,
    name: __expectString,
    revision: __expectString,
    ruleType: __expectString,
    scope: _json,
    target: (_) => _json(__expectUnion(_)),
    targetType: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionCommand
 */
export const de_GetSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionGrantCommand
 */
export const de_GetSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionRequestDetailsCommand
 */
export const de_GetSubscriptionRequestDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionRequestDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataForms: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionTargetCommand
 */
export const de_GetSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTimeSeriesDataPointCommand
 */
export const de_GetTimeSeriesDataPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesDataPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    entityId: __expectString,
    entityType: __expectString,
    form: (_) => de_TimeSeriesDataPointFormOutput(_, context),
    formName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserProfileCommand
 */
export const de_GetUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetFiltersCommand
 */
export const de_ListAssetFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AssetFilters(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetRevisionsCommand
 */
export const de_ListAssetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AssetRevisions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ConnectionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataProductRevisionsCommand
 */
export const de_ListDataProductRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataProductRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataProductRevisions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourceRunActivitiesCommand
 */
export const de_ListDataSourceRunActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceRunActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceRunActivities(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourceRunsCommand
 */
export const de_ListDataSourceRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceRunSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DomainSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainUnitsForParentCommand
 */
export const de_ListDomainUnitsForParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainUnitsForParentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEntityOwnersCommand
 */
export const de_ListEntityOwnersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityOwnersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    owners: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentActionsCommand
 */
export const de_ListEnvironmentActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentBlueprintConfigurationsCommand
 */
export const de_ListEnvironmentBlueprintConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentBlueprintConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentBlueprintConfigurations(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentBlueprintsCommand
 */
export const de_ListEnvironmentBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentBlueprintsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentBlueprintSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentProfilesCommand
 */
export const de_ListEnvironmentProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentProfileSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobRunsCommand
 */
export const de_ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_JobRunSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLineageEventsCommand
 */
export const de_ListLineageEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLineageEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_LineageEventSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLineageNodeHistoryCommand
 */
export const de_ListLineageNodeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLineageNodeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    nodes: (_) => de_LineageNodeSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMetadataGenerationRunsCommand
 */
export const de_ListMetadataGenerationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetadataGenerationRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_MetadataGenerationRuns(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationsCommand
 */
export const de_ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notifications: (_) => de_NotificationsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyGrantsCommand
 */
export const de_ListPolicyGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGrantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    grantList: (_) => de_PolicyGrantList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectMembershipsCommand
 */
export const de_ListProjectMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    members: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectProfilesCommand
 */
export const de_ListProjectProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ProjectProfileSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ProjectSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_RuleSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionGrantsCommand
 */
export const de_ListSubscriptionGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionGrantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionGrants(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionRequestsCommand
 */
export const de_ListSubscriptionRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionRequestsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionRequests(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionsCommand
 */
export const de_ListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_Subscriptions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionTargetsCommand
 */
export const de_ListSubscriptionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionTargets(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTimeSeriesDataPointsCommand
 */
export const de_ListTimeSeriesDataPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimeSeriesDataPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostLineageEventCommand
 */
export const de_PostLineageEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostLineageEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostTimeSeriesDataPointsCommand
 */
export const de_PostTimeSeriesDataPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTimeSeriesDataPointsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    entityId: __expectString,
    entityType: __expectString,
    forms: (_) => de_TimeSeriesDataPointFormOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutEnvironmentBlueprintConfigurationCommand
 */
export const de_PutEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    environmentRolePermissionBoundary: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningConfigurations: _json,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectPredictionsCommand
 */
export const de_RejectPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectPredictionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    assetRevision: __expectString,
    domainId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectSubscriptionRequestCommand
 */
export const de_RejectSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataForms: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveEntityOwnerCommand
 */
export const de_RemoveEntityOwnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveEntityOwnerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemovePolicyGrantCommand
 */
export const de_RemovePolicyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePolicyGrantCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSubscriptionCommand
 */
export const de_RevokeSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchInventoryResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchGroupProfilesCommand
 */
export const de_SearchGroupProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGroupProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchListingsCommand
 */
export const de_SearchListingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchListingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchTypesCommand
 */
export const de_SearchTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchTypesResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchUserProfilesCommand
 */
export const de_SearchUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUserProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDataSourceRunCommand
 */
export const de_StartDataSourceRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceConfigurationSnapshot: __expectString,
    dataSourceId: __expectString,
    domainId: __expectString,
    errorMessage: _json,
    id: __expectString,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMetadataGenerationRunCommand
 */
export const de_StartMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetadataGenerationRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetFilterCommand
 */
export const de_UpdateAssetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    configuration: (_) => de_AssetFilterConfiguration(__expectUnion(_), context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainId: __expectString,
    effectiveColumnNames: _json,
    effectiveRowFilter: __expectString,
    errorMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectionId: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentId: __expectString,
    name: __expectString,
    physicalEndpoints: (_) => de_PhysicalEndpoints(_, context),
    projectId: __expectString,
    props: (_) => de_ConnectionPropertiesOutput(__expectUnion(_), context),
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    connectionId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    retainPermissionsOnRevokeFailure: __expectBoolean,
    schedule: _json,
    selfGrantStatus: (_) => _json(__expectUnion(_)),
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainExecutionRole: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    rootDomainUnitId: __expectString,
    serviceRole: __expectString,
    singleSignOn: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainUnitCommand
 */
export const de_UpdateDomainUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainUnitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    name: __expectString,
    owners: _json,
    parentDomainUnitId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentConfigurationId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentActionCommand
 */
export const de_UpdateEnvironmentActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    name: __expectString,
    parameters: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentProfileCommand
 */
export const de_UpdateEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlossaryCommand
 */
export const de_UpdateGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlossaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlossaryTermCommand
 */
export const de_UpdateGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlossaryTermCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupProfileCommand
 */
export const de_UpdateGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentDeploymentDetails: _json,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectProfileId: __expectString,
    projectStatus: __expectString,
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectProfileCommand
 */
export const de_UpdateProjectProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentConfigurations: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRuleCommand
 */
export const de_UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    detail: (_) => _json(__expectUnion(_)),
    identifier: __expectString,
    lastUpdatedBy: __expectString,
    name: __expectString,
    revision: __expectString,
    ruleType: __expectString,
    scope: _json,
    target: (_) => _json(__expectUnion(_)),
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionGrantStatusCommand
 */
export const de_UpdateSubscriptionGrantStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionGrantStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionRequestCommand
 */
export const de_UpdateSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataForms: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionTargetCommand
 */
export const de_UpdateSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.datazone#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.datazone#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.datazone#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.datazone#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.datazone#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.datazone#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.datazone#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.datazone#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AcceptChoice omitted.

// se_AcceptChoices omitted.

// se_AcceptedAssetScope omitted.

// se_AcceptedAssetScopes omitted.

/**
 * serializeAws_restJson1AcceptRule
 */
const se_AcceptRule = (input: AcceptRule, context: __SerdeContext): any => {
  return take(input, {
    rule: [],
    threshold: __serializeFloat,
  });
};

// se_ActionParameters omitted.

// se_AddToProjectMemberPoolPolicyGrantDetail omitted.

// se_AllDomainUnitsGrantFilter omitted.

// se_AllUsersGrantFilter omitted.

// se_ApplicableAssetTypes omitted.

/**
 * serializeAws_restJson1AssetFilterConfiguration
 */
const se_AssetFilterConfiguration = (input: AssetFilterConfiguration, context: __SerdeContext): any => {
  return AssetFilterConfiguration.visit(input, {
    columnConfiguration: (value) => ({ columnConfiguration: _json(value) }),
    rowConfiguration: (value) => ({ rowConfiguration: se_RowFilterConfiguration(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_AssetTargetNameMap omitted.

// se_AssetTargetNames omitted.

// se_AssetTypesForRule omitted.

// se_AthenaPropertiesInput omitted.

// se_AthenaPropertiesPatch omitted.

// se_AuthenticationConfigurationInput omitted.

// se_AuthenticationConfigurationPatch omitted.

// se_AuthorizationCodeProperties omitted.

// se_AuthorizedPrincipalIdentifiers omitted.

// se_AwsAccount omitted.

// se_AwsConsoleLinkParameters omitted.

// se_AwsLocation omitted.

// se_BasicAuthenticationCredentials omitted.

// se_BusinessNameGenerationConfiguration omitted.

// se_ColumnFilterConfiguration omitted.

// se_ColumnNameList omitted.

// se_ComputeEnvironmentsList omitted.

// se_ConnectionProperties omitted.

// se_ConnectionPropertiesInput omitted.

// se_ConnectionPropertiesPatch omitted.

// se_CreateAssetTypePolicyGrantDetail omitted.

// se_CreateDomainUnitPolicyGrantDetail omitted.

// se_CreateEnvironmentProfilePolicyGrantDetail omitted.

// se_CreateFormTypePolicyGrantDetail omitted.

// se_CreateGlossaryPolicyGrantDetail omitted.

// se_CreateProjectFromProjectProfilePolicyGrantDetail omitted.

// se_CreateProjectPolicyGrantDetail omitted.

// se_CredentialMap omitted.

// se_DataProductItem omitted.

// se_DataProductItems omitted.

// se_DataSourceConfigurationInput omitted.

// se_DomainUnitFilterForProject omitted.

// se_DomainUnitGrantFilter omitted.

// se_DomainUnitPolicyGrantPrincipal omitted.

// se_DomainUnitTarget omitted.

// se_EnabledRegionList omitted.

// se_EnvironmentConfiguration omitted.

// se_EnvironmentConfigurationParameter omitted.

// se_EnvironmentConfigurationParametersDetails omitted.

// se_EnvironmentConfigurationParametersList omitted.

// se_EnvironmentConfigurationsList omitted.

// se_EnvironmentConfigurationUserParameter omitted.

// se_EnvironmentConfigurationUserParametersList omitted.

// se_EnvironmentDeploymentDetails omitted.

// se_EnvironmentError omitted.

// se_EnvironmentFailureReasons omitted.

// se_EnvironmentFailureReasonsList omitted.

// se_EnvironmentParameter omitted.

// se_EnvironmentParametersList omitted.

// se_EqualToExpression omitted.

// se_FailureCause omitted.

// se_Filter omitted.

/**
 * serializeAws_restJson1FilterClause
 */
const se_FilterClause = (input: FilterClause, context: __SerdeContext): any => {
  return FilterClause.visit(input, {
    and: (value) => ({ and: se_FilterList(value, context) }),
    filter: (value) => ({ filter: _json(value) }),
    or: (value) => ({ or: se_FilterList(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_FilterExpression omitted.

// se_FilterExpressions omitted.

// se_FilterIds omitted.

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: FilterClause[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterClause(entry, context);
    });
};

// se_FormEntryInput omitted.

// se_FormInput omitted.

// se_FormInputList omitted.

// se_FormsInputMap omitted.

// se_GlossaryTerms omitted.

// se_GlueConnectionInput omitted.

// se_GlueConnectionPatch omitted.

// se_GlueOAuth2Credentials omitted.

// se_GluePropertiesInput omitted.

// se_GluePropertiesPatch omitted.

// se_GlueRunConfigurationInput omitted.

// se_GrantedEntityInput omitted.

// se_GreaterThanExpression omitted.

// se_GreaterThanOrEqualToExpression omitted.

// se_GroupPolicyGrantPrincipal omitted.

// se_HyperPodPropertiesInput omitted.

// se_IamPropertiesInput omitted.

// se_IamPropertiesPatch omitted.

// se_InExpression omitted.

// se_IsNotNullExpression omitted.

// se_IsNullExpression omitted.

// se_ItemGlossaryTerms omitted.

// se_LakeFormationConfiguration omitted.

// se_LessThanExpression omitted.

// se_LessThanOrEqualToExpression omitted.

// se_LikeExpression omitted.

// se_LineageSyncSchedule omitted.

// se_ListingRevisionInput omitted.

// se_Member omitted.

// se_MetadataFormEnforcementDetail omitted.

// se_MetadataFormInputs omitted.

// se_MetadataFormReference omitted.

// se_MetadataGenerationRunTarget omitted.

// se_Model omitted.

// se_NotEqualToExpression omitted.

// se_NotInExpression omitted.

// se_NotLikeExpression omitted.

// se_OAuth2ClientApplication omitted.

// se_OAuth2Properties omitted.

// se_OverrideDomainUnitOwnersPolicyGrantDetail omitted.

// se_OverrideProjectOwnersPolicyGrantDetail omitted.

// se_OwnerGroupProperties omitted.

// se_OwnerProperties omitted.

// se_OwnerUserProperties omitted.

// se_PhysicalConnectionRequirements omitted.

// se_PolicyGrantDetail omitted.

// se_PolicyGrantPrincipal omitted.

// se_PredictionChoices omitted.

// se_PredictionConfiguration omitted.

// se_ProjectGrantFilter omitted.

// se_ProjectPolicyGrantPrincipal omitted.

// se_ProjectProfileList omitted.

// se_ProjectsForRule omitted.

// se_PropertyMap omitted.

// se_ProvisioningConfiguration omitted.

// se_ProvisioningConfigurationList omitted.

// se_RecommendationConfiguration omitted.

// se_RedshiftClusterStorage omitted.

// se_RedshiftCredentialConfiguration omitted.

// se_RedshiftCredentials omitted.

// se_RedshiftLineageSyncConfigurationInput omitted.

// se_RedshiftPropertiesInput omitted.

// se_RedshiftPropertiesPatch omitted.

// se_RedshiftRunConfigurationInput omitted.

// se_RedshiftServerlessStorage omitted.

// se_RedshiftStorage omitted.

// se_RedshiftStorageProperties omitted.

// se_Region omitted.

// se_RegionalParameter omitted.

// se_RegionalParameterMap omitted.

// se_RejectChoice omitted.

// se_RejectChoices omitted.

/**
 * serializeAws_restJson1RejectRule
 */
const se_RejectRule = (input: RejectRule, context: __SerdeContext): any => {
  return take(input, {
    rule: [],
    threshold: __serializeFloat,
  });
};

// se_RelationalFilterConfiguration omitted.

// se_RelationalFilterConfigurations omitted.

// se_RequiredMetadataFormList omitted.

/**
 * serializeAws_restJson1RowFilter
 */
const se_RowFilter = (input: RowFilter, context: __SerdeContext): any => {
  return RowFilter.visit(input, {
    and: (value) => ({ and: se_RowFilterList(value, context) }),
    expression: (value) => ({ expression: _json(value) }),
    or: (value) => ({ or: se_RowFilterList(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1RowFilterConfiguration
 */
const se_RowFilterConfiguration = (input: RowFilterConfiguration, context: __SerdeContext): any => {
  return take(input, {
    rowFilter: (_) => se_RowFilter(_, context),
    sensitive: [],
  });
};

// se_RowFilterExpression omitted.

/**
 * serializeAws_restJson1RowFilterList
 */
const se_RowFilterList = (input: RowFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RowFilter(entry, context);
    });
};

// se_RuleAssetTypeList omitted.

// se_RuleDetail omitted.

// se_RuleProjectIdentifierList omitted.

// se_RuleScope omitted.

// se_RuleTarget omitted.

// se_S3LocationList omitted.

// se_S3PropertiesInput omitted.

// se_S3PropertiesPatch omitted.

// se_SageMakerRunConfigurationInput omitted.

// se_ScheduleConfiguration omitted.

// se_SearchInItem omitted.

// se_SearchInList omitted.

// se_SearchOutputAdditionalAttributes omitted.

// se_SearchSort omitted.

// se_SecurityGroupIdList omitted.

// se_SingleSignOn omitted.

// se_SparkEmrPropertiesInput omitted.

// se_SparkEmrPropertiesPatch omitted.

// se_SparkGlueArgs omitted.

// se_SparkGluePropertiesInput omitted.

// se_StringList omitted.

// se_SubnetIdList omitted.

// se_SubscribedListingInput omitted.

// se_SubscribedListingInputs omitted.

// se_SubscribedPrincipalInput omitted.

// se_SubscribedPrincipalInputs omitted.

// se_SubscribedProjectInput omitted.

// se_SubscriptionTargetForm omitted.

// se_SubscriptionTargetForms omitted.

// se_Tags omitted.

// se_TermRelations omitted.

/**
 * serializeAws_restJson1TimeSeriesDataPointFormInput
 */
const se_TimeSeriesDataPointFormInput = (input: TimeSeriesDataPointFormInput, context: __SerdeContext): any => {
  return take(input, {
    content: [],
    formName: [],
    timestamp: (_) => _.getTime() / 1_000,
    typeIdentifier: [],
    typeRevision: [],
  });
};

/**
 * serializeAws_restJson1TimeSeriesDataPointFormInputList
 */
const se_TimeSeriesDataPointFormInputList = (input: TimeSeriesDataPointFormInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TimeSeriesDataPointFormInput(entry, context);
    });
};

// se_TokenUrlParametersMap omitted.

// se_TrackingAssetArns omitted.

// se_TrackingAssets omitted.

// se_Unit omitted.

// se_UseAssetTypePolicyGrantDetail omitted.

// se_UsernamePassword omitted.

// se_UserPolicyGrantPrincipal omitted.

// de_ActionParameters omitted.

// de_AddToProjectMemberPoolPolicyGrantDetail omitted.

// de_AllDomainUnitsGrantFilter omitted.

// de_AllUsersGrantFilter omitted.

// de_ApplicableAssetTypes omitted.

/**
 * deserializeAws_restJson1AssetFilterConfiguration
 */
const de_AssetFilterConfiguration = (output: any, context: __SerdeContext): AssetFilterConfiguration => {
  if (output.columnConfiguration != null) {
    return {
      columnConfiguration: _json(output.columnConfiguration),
    };
  }
  if (output.rowConfiguration != null) {
    return {
      rowConfiguration: de_RowFilterConfiguration(output.rowConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AssetFilters
 */
const de_AssetFilters = (output: any, context: __SerdeContext): AssetFilterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetFilterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetFilterSummary
 */
const de_AssetFilterSummary = (output: any, context: __SerdeContext): AssetFilterSummary => {
  return take(output, {
    assetId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainId: __expectString,
    effectiveColumnNames: _json,
    effectiveRowFilter: __expectString,
    errorMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_AssetInDataProductListingItem omitted.

// de_AssetInDataProductListingItems omitted.

/**
 * deserializeAws_restJson1AssetItem
 */
const de_AssetItem = (output: any, context: __SerdeContext): AssetItem => {
  return take(output, {
    additionalAttributes: (_: any) => de_AssetItemAdditionalAttributes(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    glossaryTerms: _json,
    identifier: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetItemAdditionalAttributes
 */
const de_AssetItemAdditionalAttributes = (output: any, context: __SerdeContext): AssetItemAdditionalAttributes => {
  return take(output, {
    formsOutput: _json,
    latestTimeSeriesDataPointFormsOutput: (_: any) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    readOnlyFormsOutput: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetListing
 */
const de_AssetListing = (output: any, context: __SerdeContext): AssetListing => {
  return take(output, {
    assetId: __expectString,
    assetRevision: __expectString,
    assetType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    forms: __expectString,
    glossaryTerms: _json,
    latestTimeSeriesDataPointForms: (_: any) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
    owningProjectId: __expectString,
  }) as any;
};

// de_AssetListingDetails omitted.

/**
 * deserializeAws_restJson1AssetListingItem
 */
const de_AssetListingItem = (output: any, context: __SerdeContext): AssetListingItem => {
  return take(output, {
    additionalAttributes: (_: any) => de_AssetListingItemAdditionalAttributes(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    entityId: __expectString,
    entityRevision: __expectString,
    entityType: __expectString,
    glossaryTerms: _json,
    listingCreatedBy: __expectString,
    listingId: __expectString,
    listingRevision: __expectString,
    listingUpdatedBy: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetListingItemAdditionalAttributes
 */
const de_AssetListingItemAdditionalAttributes = (
  output: any,
  context: __SerdeContext
): AssetListingItemAdditionalAttributes => {
  return take(output, {
    forms: __expectString,
    latestTimeSeriesDataPointForms: (_: any) => de_TimeSeriesDataPointSummaryFormOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AssetRevision
 */
const de_AssetRevision = (output: any, context: __SerdeContext): AssetRevision => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    revision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetRevisions
 */
const de_AssetRevisions = (output: any, context: __SerdeContext): AssetRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetRevision(entry, context);
    });
  return retVal;
};

// de_AssetScope omitted.

/**
 * deserializeAws_restJson1AssetTypeItem
 */
const de_AssetTypeItem = (output: any, context: __SerdeContext): AssetTypeItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_AssetTypesForRule omitted.

// de_AthenaPropertiesOutput omitted.

// de_AuthenticationConfiguration omitted.

// de_AuthorizationCodeProperties omitted.

// de_AuthorizedPrincipalIdentifiers omitted.

// de_AwsAccount omitted.

// de_AwsConsoleLinkParameters omitted.

// de_AwsLocation omitted.

// de_BusinessNameGenerationConfiguration omitted.

// de_CloudFormationProperties omitted.

// de_ColumnFilterConfiguration omitted.

// de_ColumnNameList omitted.

// de_ComputeEnvironmentsList omitted.

// de_ConfigurableActionParameter omitted.

// de_ConfigurableActionParameterList omitted.

// de_ConfigurableEnvironmentAction omitted.

/**
 * deserializeAws_restJson1ConnectionCredentials
 */
const de_ConnectionCredentials = (output: any, context: __SerdeContext): ConnectionCredentials => {
  return take(output, {
    accessKeyId: __expectString,
    expiration: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    secretAccessKey: __expectString,
    sessionToken: __expectString,
  }) as any;
};

// de_ConnectionProperties omitted.

/**
 * deserializeAws_restJson1ConnectionPropertiesOutput
 */
const de_ConnectionPropertiesOutput = (output: any, context: __SerdeContext): ConnectionPropertiesOutput => {
  if (output.athenaProperties != null) {
    return {
      athenaProperties: _json(output.athenaProperties),
    };
  }
  if (output.glueProperties != null) {
    return {
      glueProperties: _json(output.glueProperties),
    };
  }
  if (output.hyperPodProperties != null) {
    return {
      hyperPodProperties: _json(output.hyperPodProperties),
    };
  }
  if (output.iamProperties != null) {
    return {
      iamProperties: _json(output.iamProperties),
    };
  }
  if (output.redshiftProperties != null) {
    return {
      redshiftProperties: _json(output.redshiftProperties),
    };
  }
  if (output.s3Properties != null) {
    return {
      s3Properties: _json(output.s3Properties),
    };
  }
  if (output.sparkEmrProperties != null) {
    return {
      sparkEmrProperties: de_SparkEmrPropertiesOutput(output.sparkEmrProperties, context),
    };
  }
  if (output.sparkGlueProperties != null) {
    return {
      sparkGlueProperties: _json(output.sparkGlueProperties),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConnectionSummaries
 */
const de_ConnectionSummaries = (output: any, context: __SerdeContext): ConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectionSummary
 */
const de_ConnectionSummary = (output: any, context: __SerdeContext): ConnectionSummary => {
  return take(output, {
    connectionId: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    environmentId: __expectString,
    name: __expectString,
    physicalEndpoints: (_: any) => de_PhysicalEndpoints(_, context),
    projectId: __expectString,
    props: (_: any) => de_ConnectionPropertiesOutput(__expectUnion(_), context),
    type: __expectString,
  }) as any;
};

// de_CreateAssetTypePolicyGrantDetail omitted.

// de_CreateDomainUnitPolicyGrantDetail omitted.

// de_CreateEnvironmentProfilePolicyGrantDetail omitted.

// de_CreateFormTypePolicyGrantDetail omitted.

// de_CreateGlossaryPolicyGrantDetail omitted.

// de_CreateProjectFromProjectProfilePolicyGrantDetail omitted.

// de_CreateProjectPolicyGrantDetail omitted.

// de_CustomParameter omitted.

// de_CustomParameterList omitted.

// de_DataProductItem omitted.

// de_DataProductItems omitted.

/**
 * deserializeAws_restJson1DataProductListing
 */
const de_DataProductListing = (output: any, context: __SerdeContext): DataProductListing => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataProductId: __expectString,
    dataProductRevision: __expectString,
    forms: __expectString,
    glossaryTerms: _json,
    items: _json,
    owningProjectId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataProductListingItem
 */
const de_DataProductListingItem = (output: any, context: __SerdeContext): DataProductListingItem => {
  return take(output, {
    additionalAttributes: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    entityId: __expectString,
    entityRevision: __expectString,
    glossaryTerms: _json,
    items: _json,
    listingCreatedBy: __expectString,
    listingId: __expectString,
    listingRevision: __expectString,
    listingUpdatedBy: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
  }) as any;
};

// de_DataProductListingItemAdditionalAttributes omitted.

/**
 * deserializeAws_restJson1DataProductResultItem
 */
const de_DataProductResultItem = (output: any, context: __SerdeContext): DataProductResultItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    firstRevisionCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataProductRevision
 */
const de_DataProductRevision = (output: any, context: __SerdeContext): DataProductRevision => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    revision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataProductRevisions
 */
const de_DataProductRevisions = (output: any, context: __SerdeContext): DataProductRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataProductRevision(entry, context);
    });
  return retVal;
};

// de_DataSourceConfigurationOutput omitted.

// de_DataSourceErrorMessage omitted.

/**
 * deserializeAws_restJson1DataSourceRunActivities
 */
const de_DataSourceRunActivities = (output: any, context: __SerdeContext): DataSourceRunActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceRunActivity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceRunActivity
 */
const de_DataSourceRunActivity = (output: any, context: __SerdeContext): DataSourceRunActivity => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataAssetId: __expectString,
    dataAssetStatus: __expectString,
    dataSourceRunId: __expectString,
    database: __expectString,
    errorMessage: _json,
    lineageSummary: _json,
    projectId: __expectString,
    technicalDescription: __expectString,
    technicalName: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_DataSourceRunLineageSummary omitted.

/**
 * deserializeAws_restJson1DataSourceRunSummaries
 */
const de_DataSourceRunSummaries = (output: any, context: __SerdeContext): DataSourceRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceRunSummary
 */
const de_DataSourceRunSummary = (output: any, context: __SerdeContext): DataSourceRunSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lineageSummary: _json,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceSummaries
 */
const de_DataSourceSummaries = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return take(output, {
    connectionId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceId: __expectString,
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    lastRunAssetCount: __expectInt32,
    lastRunAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_Deployment omitted.

// de_DeploymentMessagesList omitted.

// de_DeploymentProperties omitted.

// de_DetailedGlossaryTerm omitted.

// de_DetailedGlossaryTerms omitted.

/**
 * deserializeAws_restJson1DomainSummaries
 */
const de_DomainSummaries = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainVersion: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    managedAccountId: __expectString,
    name: __expectString,
    portalUrl: __expectString,
    status: __expectString,
  }) as any;
};

// de_DomainUnitFilterForProject omitted.

// de_DomainUnitGrantFilter omitted.

// de_DomainUnitGroupProperties omitted.

// de_DomainUnitIds omitted.

// de_DomainUnitOwnerProperties omitted.

// de_DomainUnitOwners omitted.

// de_DomainUnitPolicyGrantPrincipal omitted.

// de_DomainUnitSummaries omitted.

// de_DomainUnitSummary omitted.

// de_DomainUnitTarget omitted.

// de_DomainUnitUserProperties omitted.

// de_EnabledRegionList omitted.

// de_EntityOwners omitted.

// de_EnvironmentActionList omitted.

// de_EnvironmentActionSummary omitted.

/**
 * deserializeAws_restJson1EnvironmentBlueprintConfigurationItem
 */
const de_EnvironmentBlueprintConfigurationItem = (
  output: any,
  context: __SerdeContext
): EnvironmentBlueprintConfigurationItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    environmentRolePermissionBoundary: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningConfigurations: _json,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintConfigurations
 */
const de_EnvironmentBlueprintConfigurations = (
  output: any,
  context: __SerdeContext
): EnvironmentBlueprintConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentBlueprintConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintSummaries
 */
const de_EnvironmentBlueprintSummaries = (output: any, context: __SerdeContext): EnvironmentBlueprintSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentBlueprintSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintSummary
 */
const de_EnvironmentBlueprintSummary = (output: any, context: __SerdeContext): EnvironmentBlueprintSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    provider: __expectString,
    provisioningProperties: (_: any) => _json(__expectUnion(_)),
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_EnvironmentConfiguration omitted.

// de_EnvironmentConfigurationParameter omitted.

// de_EnvironmentConfigurationParametersDetails omitted.

// de_EnvironmentConfigurationParametersList omitted.

// de_EnvironmentConfigurationsList omitted.

// de_EnvironmentConfigurationUserParameter omitted.

// de_EnvironmentConfigurationUserParametersList omitted.

// de_EnvironmentDeploymentDetails omitted.

// de_EnvironmentError omitted.

// de_EnvironmentFailureReasons omitted.

// de_EnvironmentFailureReasonsList omitted.

// de_EnvironmentParameter omitted.

// de_EnvironmentParametersList omitted.

/**
 * deserializeAws_restJson1EnvironmentProfileSummaries
 */
const de_EnvironmentProfileSummaries = (output: any, context: __SerdeContext): EnvironmentProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentProfileSummary
 */
const de_EnvironmentProfileSummary = (output: any, context: __SerdeContext): EnvironmentProfileSummary => {
  return take(output, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentSummaries
 */
const de_EnvironmentSummaries = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentConfigurationId: __expectString,
    environmentProfileId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_EqualToExpression omitted.

// de_EventSummary omitted.

// de_FailedQueryProcessingErrorMessages omitted.

// de_FailureCause omitted.

// de_FailureReasons omitted.

// de_FilterExpression omitted.

// de_FilterExpressions omitted.

// de_FilterIds omitted.

// de_FormEntryOutput omitted.

// de_FormOutput omitted.

// de_FormOutputList omitted.

// de_FormsOutputMap omitted.

/**
 * deserializeAws_restJson1FormTypeData
 */
const de_FormTypeData = (output: any, context: __SerdeContext): FormTypeData => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    imports: _json,
    model: (_: any) => _json(__expectUnion(_)),
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GlossaryItem
 */
const de_GlossaryItem = (output: any, context: __SerdeContext): GlossaryItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GlossaryTermItem
 */
const de_GlossaryTermItem = (output: any, context: __SerdeContext): GlossaryTermItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_GlossaryTerms omitted.

/**
 * deserializeAws_restJson1GlueConnection
 */
const de_GlueConnection = (output: any, context: __SerdeContext): GlueConnection => {
  return take(output, {
    athenaProperties: _json,
    authenticationConfiguration: _json,
    compatibleComputeEnvironments: _json,
    connectionProperties: _json,
    connectionSchemaVersion: __expectInt32,
    connectionType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastConnectionValidationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    matchCriteria: _json,
    name: __expectString,
    physicalConnectionRequirements: _json,
    pythonProperties: _json,
    sparkProperties: _json,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

// de_GlueOAuth2Credentials omitted.

// de_GluePropertiesOutput omitted.

// de_GlueRunConfigurationOutput omitted.

// de_GlueSelfGrantStatusOutput omitted.

// de_GrantedEntity omitted.

// de_GreaterThanExpression omitted.

// de_GreaterThanOrEqualToExpression omitted.

// de_GroupDetails omitted.

// de_GroupPolicyGrantPrincipal omitted.

// de_GroupProfileSummaries omitted.

// de_GroupProfileSummary omitted.

// de_HyperPodPropertiesOutput omitted.

// de_IamPropertiesOutput omitted.

// de_IamUserProfileDetails omitted.

// de_Import omitted.

// de_ImportList omitted.

// de_InExpression omitted.

// de_IsNotNullExpression omitted.

// de_IsNullExpression omitted.

// de_ItemGlossaryTerms omitted.

/**
 * deserializeAws_restJson1JobRunDetails
 */
const de_JobRunDetails = (output: any, context: __SerdeContext): JobRunDetails => {
  if (output.lineageRunDetails != null) {
    return {
      lineageRunDetails: de_LineageRunDetails(output.lineageRunDetails, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_JobRunError omitted.

/**
 * deserializeAws_restJson1JobRunSummaries
 */
const de_JobRunSummaries = (output: any, context: __SerdeContext): JobRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobRunSummary
 */
const de_JobRunSummary = (output: any, context: __SerdeContext): JobRunSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    error: _json,
    jobId: __expectString,
    jobType: __expectString,
    runId: __expectString,
    runMode: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_LakeFormationConfiguration omitted.

// de_LessThanExpression omitted.

// de_LessThanOrEqualToExpression omitted.

// de_LikeExpression omitted.

/**
 * deserializeAws_restJson1LineageEventSummaries
 */
const de_LineageEventSummaries = (output: any, context: __SerdeContext): LineageEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineageEventSummary
 */
const de_LineageEventSummary = (output: any, context: __SerdeContext): LineageEventSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    eventSummary: (_: any) => _json(__expectUnion(_)),
    eventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    processingStatus: __expectString,
  }) as any;
};

// de_LineageInfo omitted.

/**
 * deserializeAws_restJson1LineageNodeReference
 */
const de_LineageNodeReference = (output: any, context: __SerdeContext): LineageNodeReference => {
  return take(output, {
    eventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LineageNodeReferenceList
 */
const de_LineageNodeReferenceList = (output: any, context: __SerdeContext): LineageNodeReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageNodeReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineageNodeSummaries
 */
const de_LineageNodeSummaries = (output: any, context: __SerdeContext): LineageNodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageNodeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineageNodeSummary
 */
const de_LineageNodeSummary = (output: any, context: __SerdeContext): LineageNodeSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    eventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    sourceIdentifier: __expectString,
    typeName: __expectString,
    typeRevision: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LineageNodeTypeItem
 */
const de_LineageNodeTypeItem = (output: any, context: __SerdeContext): LineageNodeTypeItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    revision: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LineageRunDetails
 */
const de_LineageRunDetails = (output: any, context: __SerdeContext): LineageRunDetails => {
  return take(output, {
    sqlQueryRunDetails: (_: any) => de_LineageSqlQueryRunDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LineageSqlQueryRunDetails
 */
const de_LineageSqlQueryRunDetails = (output: any, context: __SerdeContext): LineageSqlQueryRunDetails => {
  return take(output, {
    errorMessages: _json,
    numQueriesFailed: __expectInt32,
    queryEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    queryStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    totalQueriesProcessed: __expectInt32,
  }) as any;
};

// de_LineageSyncSchedule omitted.

// de_ListEnvironmentActionSummaries omitted.

/**
 * deserializeAws_restJson1ListingItem
 */
const de_ListingItem = (output: any, context: __SerdeContext): ListingItem => {
  if (output.assetListing != null) {
    return {
      assetListing: de_AssetListing(output.assetListing, context),
    };
  }
  if (output.dataProductListing != null) {
    return {
      dataProductListing: de_DataProductListing(output.dataProductListing, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ListingRevision omitted.

// de_ListingSummaries omitted.

// de_ListingSummary omitted.

// de_ListingSummaryItem omitted.

// de_ListingSummaryItems omitted.

// de_MatchCriteria omitted.

// de_MemberDetails omitted.

// de_MetadataFormEnforcementDetail omitted.

// de_MetadataFormReference omitted.

// de_MetadataForms omitted.

// de_MetadataFormsSummary omitted.

// de_MetadataFormSummary omitted.

/**
 * deserializeAws_restJson1MetadataGenerationRunItem
 */
const de_MetadataGenerationRunItem = (output: any, context: __SerdeContext): MetadataGenerationRunItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    target: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MetadataGenerationRuns
 */
const de_MetadataGenerationRuns = (output: any, context: __SerdeContext): MetadataGenerationRunItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetadataGenerationRunItem(entry, context);
    });
  return retVal;
};

// de_MetadataGenerationRunTarget omitted.

// de_MetadataMap omitted.

// de_Model omitted.

// de_NameIdentifier omitted.

// de_NameIdentifiers omitted.

// de_NotEqualToExpression omitted.

/**
 * deserializeAws_restJson1NotificationOutput
 */
const de_NotificationOutput = (output: any, context: __SerdeContext): NotificationOutput => {
  return take(output, {
    actionLink: __expectString,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainIdentifier: __expectString,
    identifier: __expectString,
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    metadata: _json,
    status: __expectString,
    title: __expectString,
    topic: _json,
    type: __expectString,
  }) as any;
};

// de_NotificationResource omitted.

/**
 * deserializeAws_restJson1NotificationsList
 */
const de_NotificationsList = (output: any, context: __SerdeContext): NotificationOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationOutput(entry, context);
    });
  return retVal;
};

// de_NotInExpression omitted.

// de_NotLikeExpression omitted.

// de_OAuth2ClientApplication omitted.

// de_OAuth2Properties omitted.

// de_OpenLineageRunEventSummary omitted.

// de_OverrideDomainUnitOwnersPolicyGrantDetail omitted.

// de_OverrideProjectOwnersPolicyGrantDetail omitted.

// de_OwnerGroupPropertiesOutput omitted.

// de_OwnerPropertiesOutput omitted.

// de_OwnerUserPropertiesOutput omitted.

// de_PhysicalConnectionRequirements omitted.

/**
 * deserializeAws_restJson1PhysicalEndpoint
 */
const de_PhysicalEndpoint = (output: any, context: __SerdeContext): PhysicalEndpoint => {
  return take(output, {
    awsLocation: _json,
    glueConnection: (_: any) => de_GlueConnection(_, context),
    glueConnectionName: __expectString,
    host: __expectString,
    port: __expectInt32,
    protocol: __expectString,
    stage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PhysicalEndpoints
 */
const de_PhysicalEndpoints = (output: any, context: __SerdeContext): PhysicalEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhysicalEndpoint(entry, context);
    });
  return retVal;
};

// de_PolicyGrantDetail omitted.

/**
 * deserializeAws_restJson1PolicyGrantList
 */
const de_PolicyGrantList = (output: any, context: __SerdeContext): PolicyGrantMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyGrantMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyGrantMember
 */
const de_PolicyGrantMember = (output: any, context: __SerdeContext): PolicyGrantMember => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    detail: (_: any) => _json(__expectUnion(_)),
    principal: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

// de_PolicyGrantPrincipal omitted.

// de_PredictionConfiguration omitted.

// de_ProjectDeletionError omitted.

// de_ProjectGrantFilter omitted.

// de_ProjectMember omitted.

// de_ProjectMembers omitted.

// de_ProjectPolicyGrantPrincipal omitted.

// de_ProjectProfileList omitted.

/**
 * deserializeAws_restJson1ProjectProfileSummaries
 */
const de_ProjectProfileSummaries = (output: any, context: __SerdeContext): ProjectProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectProfileSummary
 */
const de_ProjectProfileSummary = (output: any, context: __SerdeContext): ProjectProfileSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_ProjectsForRule omitted.

/**
 * deserializeAws_restJson1ProjectSummaries
 */
const de_ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    domainUnitId: __expectString,
    failureReasons: _json,
    id: __expectString,
    name: __expectString,
    projectStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_PropertyMap omitted.

// de_ProvisioningConfiguration omitted.

// de_ProvisioningConfigurationList omitted.

// de_ProvisioningProperties omitted.

// de_RecommendationConfiguration omitted.

// de_RedshiftClusterStorage omitted.

// de_RedshiftCredentialConfiguration omitted.

// de_RedshiftCredentials omitted.

// de_RedshiftLineageSyncConfigurationOutput omitted.

// de_RedshiftPropertiesOutput omitted.

// de_RedshiftRunConfigurationOutput omitted.

// de_RedshiftSelfGrantStatusOutput omitted.

// de_RedshiftServerlessStorage omitted.

// de_RedshiftStorage omitted.

// de_RedshiftStorageProperties omitted.

// de_Region omitted.

// de_RegionalParameter omitted.

// de_RegionalParameterMap omitted.

// de_RelationalFilterConfiguration omitted.

// de_RelationalFilterConfigurations omitted.

// de_RequiredMetadataFormList omitted.

// de_Resource omitted.

// de_ResourceList omitted.

/**
 * deserializeAws_restJson1RowFilter
 */
const de_RowFilter = (output: any, context: __SerdeContext): RowFilter => {
  if (output.and != null) {
    return {
      and: de_RowFilterList(output.and, context),
    };
  }
  if (output.expression != null) {
    return {
      expression: _json(__expectUnion(output.expression)),
    };
  }
  if (output.or != null) {
    return {
      or: de_RowFilterList(output.or, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RowFilterConfiguration
 */
const de_RowFilterConfiguration = (output: any, context: __SerdeContext): RowFilterConfiguration => {
  return take(output, {
    rowFilter: (_: any) => de_RowFilter(__expectUnion(_), context),
    sensitive: __expectBoolean,
  }) as any;
};

// de_RowFilterExpression omitted.

/**
 * deserializeAws_restJson1RowFilterList
 */
const de_RowFilterList = (output: any, context: __SerdeContext): RowFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RowFilter(__expectUnion(entry), context);
    });
  return retVal;
};

// de_RuleAssetTypeList omitted.

// de_RuleDetail omitted.

// de_RuleProjectIdentifierList omitted.

// de_RuleScope omitted.

/**
 * deserializeAws_restJson1RuleSummaries
 */
const de_RuleSummaries = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuleSummary
 */
const de_RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return take(output, {
    action: __expectString,
    identifier: __expectString,
    lastUpdatedBy: __expectString,
    name: __expectString,
    revision: __expectString,
    ruleType: __expectString,
    scope: _json,
    target: (_: any) => _json(__expectUnion(_)),
    targetType: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_RuleTarget omitted.

// de_RunStatisticsForAssets omitted.

// de_S3LocationList omitted.

// de_S3PropertiesOutput omitted.

// de_SageMakerRunConfigurationOutput omitted.

// de_ScheduleConfiguration omitted.

/**
 * deserializeAws_restJson1SearchInventoryResultItem
 */
const de_SearchInventoryResultItem = (output: any, context: __SerdeContext): SearchInventoryResultItem => {
  if (output.assetItem != null) {
    return {
      assetItem: de_AssetItem(output.assetItem, context),
    };
  }
  if (output.dataProductItem != null) {
    return {
      dataProductItem: de_DataProductResultItem(output.dataProductItem, context),
    };
  }
  if (output.glossaryItem != null) {
    return {
      glossaryItem: de_GlossaryItem(output.glossaryItem, context),
    };
  }
  if (output.glossaryTermItem != null) {
    return {
      glossaryTermItem: de_GlossaryTermItem(output.glossaryTermItem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchInventoryResultItems
 */
const de_SearchInventoryResultItems = (output: any, context: __SerdeContext): SearchInventoryResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchInventoryResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchResultItem
 */
const de_SearchResultItem = (output: any, context: __SerdeContext): SearchResultItem => {
  if (output.assetListing != null) {
    return {
      assetListing: de_AssetListingItem(output.assetListing, context),
    };
  }
  if (output.dataProductListing != null) {
    return {
      dataProductListing: de_DataProductListingItem(output.dataProductListing, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchResultItems
 */
const de_SearchResultItems = (output: any, context: __SerdeContext): SearchResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchTypesResultItem
 */
const de_SearchTypesResultItem = (output: any, context: __SerdeContext): SearchTypesResultItem => {
  if (output.assetTypeItem != null) {
    return {
      assetTypeItem: de_AssetTypeItem(output.assetTypeItem, context),
    };
  }
  if (output.formTypeItem != null) {
    return {
      formTypeItem: de_FormTypeData(output.formTypeItem, context),
    };
  }
  if (output.lineageNodeTypeItem != null) {
    return {
      lineageNodeTypeItem: de_LineageNodeTypeItem(output.lineageNodeTypeItem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchTypesResultItems
 */
const de_SearchTypesResultItems = (output: any, context: __SerdeContext): SearchTypesResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchTypesResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

// de_SecurityGroupIdList omitted.

// de_SelfGrantStatusDetail omitted.

// de_SelfGrantStatusDetails omitted.

// de_SelfGrantStatusOutput omitted.

// de_SingleSignOn omitted.

/**
 * deserializeAws_restJson1SparkEmrPropertiesOutput
 */
const de_SparkEmrPropertiesOutput = (output: any, context: __SerdeContext): SparkEmrPropertiesOutput => {
  return take(output, {
    computeArn: __expectString,
    credentials: _json,
    credentialsExpiration: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    governanceType: __expectString,
    instanceProfileArn: __expectString,
    javaVirtualEnv: __expectString,
    livyEndpoint: __expectString,
    logUri: __expectString,
    pythonVirtualEnv: __expectString,
    runtimeRole: __expectString,
    trustedCertificatesS3Uri: __expectString,
  }) as any;
};

// de_SparkGlueArgs omitted.

// de_SparkGluePropertiesOutput omitted.

// de_SsoUserProfileDetails omitted.

// de_StringList omitted.

// de_SubnetIdList omitted.

/**
 * deserializeAws_restJson1SubscribedAsset
 */
const de_SubscribedAsset = (output: any, context: __SerdeContext): SubscribedAsset => {
  return take(output, {
    assetId: __expectString,
    assetRevision: __expectString,
    assetScope: _json,
    failureCause: _json,
    failureTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    grantedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetName: __expectString,
  }) as any;
};

// de_SubscribedAssetListing omitted.

/**
 * deserializeAws_restJson1SubscribedAssets
 */
const de_SubscribedAssets = (output: any, context: __SerdeContext): SubscribedAsset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscribedAsset(entry, context);
    });
  return retVal;
};

// de_SubscribedListing omitted.

// de_SubscribedListingItem omitted.

// de_SubscribedListings omitted.

// de_SubscribedPrincipal omitted.

// de_SubscribedPrincipals omitted.

// de_SubscribedProductListing omitted.

// de_SubscribedProject omitted.

/**
 * deserializeAws_restJson1SubscriptionGrants
 */
const de_SubscriptionGrants = (output: any, context: __SerdeContext): SubscriptionGrantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionGrantSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionGrantSummary
 */
const de_SubscriptionGrantSummary = (output: any, context: __SerdeContext): SubscriptionGrantSummary => {
  return take(output, {
    assets: (_: any) => de_SubscribedAssets(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_: any) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SubscriptionRequests
 */
const de_SubscriptionRequests = (output: any, context: __SerdeContext): SubscriptionRequestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionRequestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionRequestSummary
 */
const de_SubscriptionRequestSummary = (output: any, context: __SerdeContext): SubscriptionRequestSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    existingSubscriptionId: __expectString,
    id: __expectString,
    metadataFormsSummary: _json,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Subscriptions
 */
const de_Subscriptions = (output: any, context: __SerdeContext): SubscriptionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionSummary
 */
const de_SubscriptionSummary = (output: any, context: __SerdeContext): SubscriptionSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_: any) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_SubscriptionTargetForm omitted.

// de_SubscriptionTargetForms omitted.

/**
 * deserializeAws_restJson1SubscriptionTargets
 */
const de_SubscriptionTargets = (output: any, context: __SerdeContext): SubscriptionTargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionTargetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionTargetSummary
 */
const de_SubscriptionTargetSummary = (output: any, context: __SerdeContext): SubscriptionTargetSummary => {
  return take(output, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_Tags omitted.

// de_TermRelations omitted.

/**
 * deserializeAws_restJson1TimeSeriesDataPointFormOutput
 */
const de_TimeSeriesDataPointFormOutput = (output: any, context: __SerdeContext): TimeSeriesDataPointFormOutput => {
  return take(output, {
    content: __expectString,
    formName: __expectString,
    id: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TimeSeriesDataPointFormOutputList
 */
const de_TimeSeriesDataPointFormOutputList = (
  output: any,
  context: __SerdeContext
): TimeSeriesDataPointFormOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesDataPointFormOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimeSeriesDataPointSummaryFormOutput
 */
const de_TimeSeriesDataPointSummaryFormOutput = (
  output: any,
  context: __SerdeContext
): TimeSeriesDataPointSummaryFormOutput => {
  return take(output, {
    contentSummary: __expectString,
    formName: __expectString,
    id: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TimeSeriesDataPointSummaryFormOutputList
 */
const de_TimeSeriesDataPointSummaryFormOutputList = (
  output: any,
  context: __SerdeContext
): TimeSeriesDataPointSummaryFormOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesDataPointSummaryFormOutput(entry, context);
    });
  return retVal;
};

// de_TokenUrlParametersMap omitted.

// de_Topic omitted.

// de_TrackingAssetArns omitted.

// de_TrackingAssets omitted.

// de_Unit omitted.

// de_UseAssetTypePolicyGrantDetail omitted.

// de_UserDetails omitted.

// de_UsernamePassword omitted.

// de_UserPolicyGrantPrincipal omitted.

// de_UserProfileDetails omitted.

// de_UserProfileSummaries omitted.

// de_UserProfileSummary omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _a = "action";
const _aAI = "awsAccountId";
const _aAR = "awsAccountRegion";
const _aPI = "approverProjectId";
const _aT = "afterTimestamp";
const _aTs = "assetTypes";
const _bT = "beforeTimestamp";
const _cA = "createdAt";
const _cB = "createdBy";
const _cI = "connectionIdentifier";
const _cT = "clientToken";
const _ca = "created-at";
const _cb = "created-by";
const _ct = "client-token";
const _d = "direction";
const _dI = "domainId";
const _dP = "dataProduct";
const _di = "domain-id";
const _eA = "endedAt";
const _eBI = "environmentBlueprintIdentifier";
const _eI = "environmentIdentifier";
const _eIn = "environmentId";
const _ePI = "environmentProfileIdentifier";
const _eT = "eventTimestamp";
const _eTGTE = "eventTimestampGTE";
const _eTLTE = "eventTimestampLTE";
const _eTv = "eventTime";
const _et = "event-time";
const _fN = "formName";
const _gI = "groupIdentifier";
const _i = "id";
const _iC = "includeCascaded";
const _lR = "listingRevision";
const _m = "managed";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oPI = "owningProjectId";
const _p = "provider";
const _pDUI = "parentDomainUnitIdentifier";
const _pI = "projectIdentifier";
const _pIr = "projectIds";
const _pS = "processingStatus";
const _pT = "policyType";
const _ps = "processing-status";
const _r = "revision";
const _rA = "ruleAction";
const _rPORF = "retainPermissionsOnRevokeFailure";
const _rT = "ruleType";
const _s = "status";
const _sA = "startedAt";
const _sB = "sortBy";
const _sDC = "skipDeletionCheck";
const _sI = "subscriptionId";
const _sLI = "subscribedListingId";
const _sO = "sortOrder";
const _sRI = "subscriptionRequestIdentifier";
const _sTI = "subscriptionTargetId";
const _su = "subjects";
const _t = "timestamp";
const _tA = "timestampAfter";
const _tB = "timestampBefore";
const _tGTE = "timestampGTE";
const _tK = "tagKeys";
const _tLTE = "timestampLTE";
const _tS = "taskStatus";
const _ty = "type";
const _uI = "userIdentifier";
const _wS = "withSecret";
