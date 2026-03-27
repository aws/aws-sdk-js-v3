// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultDataZoneHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptPredictionsCommandInput,
  AcceptPredictionsCommandOutput,
} from "./commands/AcceptPredictionsCommand";
import type {
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "./commands/AcceptSubscriptionRequestCommand";
import type { AddEntityOwnerCommandInput, AddEntityOwnerCommandOutput } from "./commands/AddEntityOwnerCommand";
import type { AddPolicyGrantCommandInput, AddPolicyGrantCommandOutput } from "./commands/AddPolicyGrantCommand";
import type {
  AssociateEnvironmentRoleCommandInput,
  AssociateEnvironmentRoleCommandOutput,
} from "./commands/AssociateEnvironmentRoleCommand";
import type {
  AssociateGovernedTermsCommandInput,
  AssociateGovernedTermsCommandOutput,
} from "./commands/AssociateGovernedTermsCommand";
import type {
  BatchGetAttributesMetadataCommandInput,
  BatchGetAttributesMetadataCommandOutput,
} from "./commands/BatchGetAttributesMetadataCommand";
import type {
  BatchPutAttributesMetadataCommandInput,
  BatchPutAttributesMetadataCommandOutput,
} from "./commands/BatchPutAttributesMetadataCommand";
import type {
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "./commands/CancelMetadataGenerationRunCommand";
import type {
  CancelSubscriptionCommandInput,
  CancelSubscriptionCommandOutput,
} from "./commands/CancelSubscriptionCommand";
import type {
  CreateAccountPoolCommandInput,
  CreateAccountPoolCommandOutput,
} from "./commands/CreateAccountPoolCommand";
import type { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import type {
  CreateAssetFilterCommandInput,
  CreateAssetFilterCommandOutput,
} from "./commands/CreateAssetFilterCommand";
import type {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "./commands/CreateAssetRevisionCommand";
import type { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "./commands/CreateAssetTypeCommand";
import type { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import type {
  CreateDataProductCommandInput,
  CreateDataProductCommandOutput,
} from "./commands/CreateDataProductCommand";
import type {
  CreateDataProductRevisionCommandInput,
  CreateDataProductRevisionCommandOutput,
} from "./commands/CreateDataProductRevisionCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type { CreateDomainUnitCommandInput, CreateDomainUnitCommandOutput } from "./commands/CreateDomainUnitCommand";
import type {
  CreateEnvironmentActionCommandInput,
  CreateEnvironmentActionCommandOutput,
} from "./commands/CreateEnvironmentActionCommand";
import type {
  CreateEnvironmentBlueprintCommandInput,
  CreateEnvironmentBlueprintCommandOutput,
} from "./commands/CreateEnvironmentBlueprintCommand";
import type {
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import type {
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "./commands/CreateEnvironmentProfileCommand";
import type { CreateFormTypeCommandInput, CreateFormTypeCommandOutput } from "./commands/CreateFormTypeCommand";
import type { CreateGlossaryCommandInput, CreateGlossaryCommandOutput } from "./commands/CreateGlossaryCommand";
import type {
  CreateGlossaryTermCommandInput,
  CreateGlossaryTermCommandOutput,
} from "./commands/CreateGlossaryTermCommand";
import type {
  CreateGroupProfileCommandInput,
  CreateGroupProfileCommandOutput,
} from "./commands/CreateGroupProfileCommand";
import type {
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "./commands/CreateListingChangeSetCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type {
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "./commands/CreateProjectMembershipCommand";
import type {
  CreateProjectProfileCommandInput,
  CreateProjectProfileCommandOutput,
} from "./commands/CreateProjectProfileCommand";
import type { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import type {
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "./commands/CreateSubscriptionGrantCommand";
import type {
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "./commands/CreateSubscriptionRequestCommand";
import type {
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "./commands/CreateSubscriptionTargetCommand";
import type {
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import type {
  DeleteAccountPoolCommandInput,
  DeleteAccountPoolCommandOutput,
} from "./commands/DeleteAccountPoolCommand";
import type { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import type {
  DeleteAssetFilterCommandInput,
  DeleteAssetFilterCommandOutput,
} from "./commands/DeleteAssetFilterCommand";
import type { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "./commands/DeleteAssetTypeCommand";
import type { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import type {
  DeleteDataExportConfigurationCommandInput,
  DeleteDataExportConfigurationCommandOutput,
} from "./commands/DeleteDataExportConfigurationCommand";
import type {
  DeleteDataProductCommandInput,
  DeleteDataProductCommandOutput,
} from "./commands/DeleteDataProductCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type { DeleteDomainUnitCommandInput, DeleteDomainUnitCommandOutput } from "./commands/DeleteDomainUnitCommand";
import type {
  DeleteEnvironmentActionCommandInput,
  DeleteEnvironmentActionCommandOutput,
} from "./commands/DeleteEnvironmentActionCommand";
import type {
  DeleteEnvironmentBlueprintCommandInput,
  DeleteEnvironmentBlueprintCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintCommand";
import type {
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintConfigurationCommand";
import type {
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import type {
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "./commands/DeleteEnvironmentProfileCommand";
import type { DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput } from "./commands/DeleteFormTypeCommand";
import type { DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput } from "./commands/DeleteGlossaryCommand";
import type {
  DeleteGlossaryTermCommandInput,
  DeleteGlossaryTermCommandOutput,
} from "./commands/DeleteGlossaryTermCommand";
import type { DeleteListingCommandInput, DeleteListingCommandOutput } from "./commands/DeleteListingCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type {
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "./commands/DeleteProjectMembershipCommand";
import type {
  DeleteProjectProfileCommandInput,
  DeleteProjectProfileCommandOutput,
} from "./commands/DeleteProjectProfileCommand";
import type { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import type {
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "./commands/DeleteSubscriptionGrantCommand";
import type {
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "./commands/DeleteSubscriptionRequestCommand";
import type {
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "./commands/DeleteSubscriptionTargetCommand";
import type {
  DeleteTimeSeriesDataPointsCommandInput,
  DeleteTimeSeriesDataPointsCommandOutput,
} from "./commands/DeleteTimeSeriesDataPointsCommand";
import type {
  DisassociateEnvironmentRoleCommandInput,
  DisassociateEnvironmentRoleCommandOutput,
} from "./commands/DisassociateEnvironmentRoleCommand";
import type {
  DisassociateGovernedTermsCommandInput,
  DisassociateGovernedTermsCommandOutput,
} from "./commands/DisassociateGovernedTermsCommand";
import type { GetAccountPoolCommandInput, GetAccountPoolCommandOutput } from "./commands/GetAccountPoolCommand";
import type { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import type { GetAssetFilterCommandInput, GetAssetFilterCommandOutput } from "./commands/GetAssetFilterCommand";
import type { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "./commands/GetAssetTypeCommand";
import type { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import type {
  GetDataExportConfigurationCommandInput,
  GetDataExportConfigurationCommandOutput,
} from "./commands/GetDataExportConfigurationCommand";
import type { GetDataProductCommandInput, GetDataProductCommandOutput } from "./commands/GetDataProductCommand";
import type { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import type { GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput } from "./commands/GetDataSourceRunCommand";
import type { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import type { GetDomainUnitCommandInput, GetDomainUnitCommandOutput } from "./commands/GetDomainUnitCommand";
import type {
  GetEnvironmentActionCommandInput,
  GetEnvironmentActionCommandOutput,
} from "./commands/GetEnvironmentActionCommand";
import type {
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "./commands/GetEnvironmentBlueprintCommand";
import type {
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/GetEnvironmentBlueprintConfigurationCommand";
import type { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import type {
  GetEnvironmentCredentialsCommandInput,
  GetEnvironmentCredentialsCommandOutput,
} from "./commands/GetEnvironmentCredentialsCommand";
import type {
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "./commands/GetEnvironmentProfileCommand";
import type { GetFormTypeCommandInput, GetFormTypeCommandOutput } from "./commands/GetFormTypeCommand";
import type { GetGlossaryCommandInput, GetGlossaryCommandOutput } from "./commands/GetGlossaryCommand";
import type { GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput } from "./commands/GetGlossaryTermCommand";
import type { GetGroupProfileCommandInput, GetGroupProfileCommandOutput } from "./commands/GetGroupProfileCommand";
import type {
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "./commands/GetIamPortalLoginUrlCommand";
import type { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import type { GetLineageEventCommandInput, GetLineageEventCommandOutput } from "./commands/GetLineageEventCommand";
import type { GetLineageNodeCommandInput, GetLineageNodeCommandOutput } from "./commands/GetLineageNodeCommand";
import type { GetListingCommandInput, GetListingCommandOutput } from "./commands/GetListingCommand";
import type {
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "./commands/GetMetadataGenerationRunCommand";
import type { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import type {
  GetProjectProfileCommandInput,
  GetProjectProfileCommandOutput,
} from "./commands/GetProjectProfileCommand";
import type { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import type { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "./commands/GetSubscriptionCommand";
import type {
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "./commands/GetSubscriptionGrantCommand";
import type {
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "./commands/GetSubscriptionRequestDetailsCommand";
import type {
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "./commands/GetSubscriptionTargetCommand";
import type {
  GetTimeSeriesDataPointCommandInput,
  GetTimeSeriesDataPointCommandOutput,
} from "./commands/GetTimeSeriesDataPointCommand";
import type { GetUserProfileCommandInput, GetUserProfileCommandOutput } from "./commands/GetUserProfileCommand";
import type { ListAccountPoolsCommandInput, ListAccountPoolsCommandOutput } from "./commands/ListAccountPoolsCommand";
import type {
  ListAccountsInAccountPoolCommandInput,
  ListAccountsInAccountPoolCommandOutput,
} from "./commands/ListAccountsInAccountPoolCommand";
import type { ListAssetFiltersCommandInput, ListAssetFiltersCommandOutput } from "./commands/ListAssetFiltersCommand";
import type {
  ListAssetRevisionsCommandInput,
  ListAssetRevisionsCommandOutput,
} from "./commands/ListAssetRevisionsCommand";
import type { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import type {
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput,
} from "./commands/ListDataProductRevisionsCommand";
import type {
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "./commands/ListDataSourceRunActivitiesCommand";
import type {
  ListDataSourceRunsCommandInput,
  ListDataSourceRunsCommandOutput,
} from "./commands/ListDataSourceRunsCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import type {
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput,
} from "./commands/ListDomainUnitsForParentCommand";
import type { ListEntityOwnersCommandInput, ListEntityOwnersCommandOutput } from "./commands/ListEntityOwnersCommand";
import type {
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput,
} from "./commands/ListEnvironmentActionsCommand";
import type {
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "./commands/ListEnvironmentBlueprintConfigurationsCommand";
import type {
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "./commands/ListEnvironmentBlueprintsCommand";
import type {
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "./commands/ListEnvironmentProfilesCommand";
import type { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import type { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import type {
  ListLineageEventsCommandInput,
  ListLineageEventsCommandOutput,
} from "./commands/ListLineageEventsCommand";
import type {
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput,
} from "./commands/ListLineageNodeHistoryCommand";
import type {
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "./commands/ListMetadataGenerationRunsCommand";
import type {
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import type { ListPolicyGrantsCommandInput, ListPolicyGrantsCommandOutput } from "./commands/ListPolicyGrantsCommand";
import type {
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "./commands/ListProjectMembershipsCommand";
import type {
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput,
} from "./commands/ListProjectProfilesCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import type {
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "./commands/ListSubscriptionGrantsCommand";
import type {
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "./commands/ListSubscriptionRequestsCommand";
import type {
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "./commands/ListSubscriptionsCommand";
import type {
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "./commands/ListSubscriptionTargetsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput,
} from "./commands/ListTimeSeriesDataPointsCommand";
import type { PostLineageEventCommandInput, PostLineageEventCommandOutput } from "./commands/PostLineageEventCommand";
import type {
  PostTimeSeriesDataPointsCommandInput,
  PostTimeSeriesDataPointsCommandOutput,
} from "./commands/PostTimeSeriesDataPointsCommand";
import type {
  PutDataExportConfigurationCommandInput,
  PutDataExportConfigurationCommandOutput,
} from "./commands/PutDataExportConfigurationCommand";
import type {
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/PutEnvironmentBlueprintConfigurationCommand";
import type { QueryGraphCommandInput, QueryGraphCommandOutput } from "./commands/QueryGraphCommand";
import type {
  RejectPredictionsCommandInput,
  RejectPredictionsCommandOutput,
} from "./commands/RejectPredictionsCommand";
import type {
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "./commands/RejectSubscriptionRequestCommand";
import type {
  RemoveEntityOwnerCommandInput,
  RemoveEntityOwnerCommandOutput,
} from "./commands/RemoveEntityOwnerCommand";
import type {
  RemovePolicyGrantCommandInput,
  RemovePolicyGrantCommandOutput,
} from "./commands/RemovePolicyGrantCommand";
import type {
  RevokeSubscriptionCommandInput,
  RevokeSubscriptionCommandOutput,
} from "./commands/RevokeSubscriptionCommand";
import type { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import type {
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "./commands/SearchGroupProfilesCommand";
import type { SearchListingsCommandInput, SearchListingsCommandOutput } from "./commands/SearchListingsCommand";
import type { SearchTypesCommandInput, SearchTypesCommandOutput } from "./commands/SearchTypesCommand";
import type {
  SearchUserProfilesCommandInput,
  SearchUserProfilesCommandOutput,
} from "./commands/SearchUserProfilesCommand";
import type {
  StartDataSourceRunCommandInput,
  StartDataSourceRunCommandOutput,
} from "./commands/StartDataSourceRunCommand";
import type {
  StartMetadataGenerationRunCommandInput,
  StartMetadataGenerationRunCommandOutput,
} from "./commands/StartMetadataGenerationRunCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountPoolCommandInput,
  UpdateAccountPoolCommandOutput,
} from "./commands/UpdateAccountPoolCommand";
import type {
  UpdateAssetFilterCommandInput,
  UpdateAssetFilterCommandOutput,
} from "./commands/UpdateAssetFilterCommand";
import type { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import type { UpdateDomainUnitCommandInput, UpdateDomainUnitCommandOutput } from "./commands/UpdateDomainUnitCommand";
import type {
  UpdateEnvironmentActionCommandInput,
  UpdateEnvironmentActionCommandOutput,
} from "./commands/UpdateEnvironmentActionCommand";
import type {
  UpdateEnvironmentBlueprintCommandInput,
  UpdateEnvironmentBlueprintCommandOutput,
} from "./commands/UpdateEnvironmentBlueprintCommand";
import type {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import type {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "./commands/UpdateEnvironmentProfileCommand";
import type { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "./commands/UpdateGlossaryCommand";
import type {
  UpdateGlossaryTermCommandInput,
  UpdateGlossaryTermCommandOutput,
} from "./commands/UpdateGlossaryTermCommand";
import type {
  UpdateGroupProfileCommandInput,
  UpdateGroupProfileCommandOutput,
} from "./commands/UpdateGroupProfileCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import type {
  UpdateProjectProfileCommandInput,
  UpdateProjectProfileCommandOutput,
} from "./commands/UpdateProjectProfileCommand";
import type {
  UpdateRootDomainUnitOwnerCommandInput,
  UpdateRootDomainUnitOwnerCommandOutput,
} from "./commands/UpdateRootDomainUnitOwnerCommand";
import type { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import type {
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "./commands/UpdateSubscriptionGrantStatusCommand";
import type {
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "./commands/UpdateSubscriptionRequestCommand";
import type {
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "./commands/UpdateSubscriptionTargetCommand";
import type {
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptPredictionsCommandInput
  | AcceptSubscriptionRequestCommandInput
  | AddEntityOwnerCommandInput
  | AddPolicyGrantCommandInput
  | AssociateEnvironmentRoleCommandInput
  | AssociateGovernedTermsCommandInput
  | BatchGetAttributesMetadataCommandInput
  | BatchPutAttributesMetadataCommandInput
  | CancelMetadataGenerationRunCommandInput
  | CancelSubscriptionCommandInput
  | CreateAccountPoolCommandInput
  | CreateAssetCommandInput
  | CreateAssetFilterCommandInput
  | CreateAssetRevisionCommandInput
  | CreateAssetTypeCommandInput
  | CreateConnectionCommandInput
  | CreateDataProductCommandInput
  | CreateDataProductRevisionCommandInput
  | CreateDataSourceCommandInput
  | CreateDomainCommandInput
  | CreateDomainUnitCommandInput
  | CreateEnvironmentActionCommandInput
  | CreateEnvironmentBlueprintCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentProfileCommandInput
  | CreateFormTypeCommandInput
  | CreateGlossaryCommandInput
  | CreateGlossaryTermCommandInput
  | CreateGroupProfileCommandInput
  | CreateListingChangeSetCommandInput
  | CreateProjectCommandInput
  | CreateProjectMembershipCommandInput
  | CreateProjectProfileCommandInput
  | CreateRuleCommandInput
  | CreateSubscriptionGrantCommandInput
  | CreateSubscriptionRequestCommandInput
  | CreateSubscriptionTargetCommandInput
  | CreateUserProfileCommandInput
  | DeleteAccountPoolCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetFilterCommandInput
  | DeleteAssetTypeCommandInput
  | DeleteConnectionCommandInput
  | DeleteDataExportConfigurationCommandInput
  | DeleteDataProductCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainUnitCommandInput
  | DeleteEnvironmentActionCommandInput
  | DeleteEnvironmentBlueprintCommandInput
  | DeleteEnvironmentBlueprintConfigurationCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentProfileCommandInput
  | DeleteFormTypeCommandInput
  | DeleteGlossaryCommandInput
  | DeleteGlossaryTermCommandInput
  | DeleteListingCommandInput
  | DeleteProjectCommandInput
  | DeleteProjectMembershipCommandInput
  | DeleteProjectProfileCommandInput
  | DeleteRuleCommandInput
  | DeleteSubscriptionGrantCommandInput
  | DeleteSubscriptionRequestCommandInput
  | DeleteSubscriptionTargetCommandInput
  | DeleteTimeSeriesDataPointsCommandInput
  | DisassociateEnvironmentRoleCommandInput
  | DisassociateGovernedTermsCommandInput
  | GetAccountPoolCommandInput
  | GetAssetCommandInput
  | GetAssetFilterCommandInput
  | GetAssetTypeCommandInput
  | GetConnectionCommandInput
  | GetDataExportConfigurationCommandInput
  | GetDataProductCommandInput
  | GetDataSourceCommandInput
  | GetDataSourceRunCommandInput
  | GetDomainCommandInput
  | GetDomainUnitCommandInput
  | GetEnvironmentActionCommandInput
  | GetEnvironmentBlueprintCommandInput
  | GetEnvironmentBlueprintConfigurationCommandInput
  | GetEnvironmentCommandInput
  | GetEnvironmentCredentialsCommandInput
  | GetEnvironmentProfileCommandInput
  | GetFormTypeCommandInput
  | GetGlossaryCommandInput
  | GetGlossaryTermCommandInput
  | GetGroupProfileCommandInput
  | GetIamPortalLoginUrlCommandInput
  | GetJobRunCommandInput
  | GetLineageEventCommandInput
  | GetLineageNodeCommandInput
  | GetListingCommandInput
  | GetMetadataGenerationRunCommandInput
  | GetProjectCommandInput
  | GetProjectProfileCommandInput
  | GetRuleCommandInput
  | GetSubscriptionCommandInput
  | GetSubscriptionGrantCommandInput
  | GetSubscriptionRequestDetailsCommandInput
  | GetSubscriptionTargetCommandInput
  | GetTimeSeriesDataPointCommandInput
  | GetUserProfileCommandInput
  | ListAccountPoolsCommandInput
  | ListAccountsInAccountPoolCommandInput
  | ListAssetFiltersCommandInput
  | ListAssetRevisionsCommandInput
  | ListConnectionsCommandInput
  | ListDataProductRevisionsCommandInput
  | ListDataSourceRunActivitiesCommandInput
  | ListDataSourceRunsCommandInput
  | ListDataSourcesCommandInput
  | ListDomainUnitsForParentCommandInput
  | ListDomainsCommandInput
  | ListEntityOwnersCommandInput
  | ListEnvironmentActionsCommandInput
  | ListEnvironmentBlueprintConfigurationsCommandInput
  | ListEnvironmentBlueprintsCommandInput
  | ListEnvironmentProfilesCommandInput
  | ListEnvironmentsCommandInput
  | ListJobRunsCommandInput
  | ListLineageEventsCommandInput
  | ListLineageNodeHistoryCommandInput
  | ListMetadataGenerationRunsCommandInput
  | ListNotificationsCommandInput
  | ListPolicyGrantsCommandInput
  | ListProjectMembershipsCommandInput
  | ListProjectProfilesCommandInput
  | ListProjectsCommandInput
  | ListRulesCommandInput
  | ListSubscriptionGrantsCommandInput
  | ListSubscriptionRequestsCommandInput
  | ListSubscriptionTargetsCommandInput
  | ListSubscriptionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTimeSeriesDataPointsCommandInput
  | PostLineageEventCommandInput
  | PostTimeSeriesDataPointsCommandInput
  | PutDataExportConfigurationCommandInput
  | PutEnvironmentBlueprintConfigurationCommandInput
  | QueryGraphCommandInput
  | RejectPredictionsCommandInput
  | RejectSubscriptionRequestCommandInput
  | RemoveEntityOwnerCommandInput
  | RemovePolicyGrantCommandInput
  | RevokeSubscriptionCommandInput
  | SearchCommandInput
  | SearchGroupProfilesCommandInput
  | SearchListingsCommandInput
  | SearchTypesCommandInput
  | SearchUserProfilesCommandInput
  | StartDataSourceRunCommandInput
  | StartMetadataGenerationRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountPoolCommandInput
  | UpdateAssetFilterCommandInput
  | UpdateConnectionCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDomainCommandInput
  | UpdateDomainUnitCommandInput
  | UpdateEnvironmentActionCommandInput
  | UpdateEnvironmentBlueprintCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentProfileCommandInput
  | UpdateGlossaryCommandInput
  | UpdateGlossaryTermCommandInput
  | UpdateGroupProfileCommandInput
  | UpdateProjectCommandInput
  | UpdateProjectProfileCommandInput
  | UpdateRootDomainUnitOwnerCommandInput
  | UpdateRuleCommandInput
  | UpdateSubscriptionGrantStatusCommandInput
  | UpdateSubscriptionRequestCommandInput
  | UpdateSubscriptionTargetCommandInput
  | UpdateUserProfileCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptPredictionsCommandOutput
  | AcceptSubscriptionRequestCommandOutput
  | AddEntityOwnerCommandOutput
  | AddPolicyGrantCommandOutput
  | AssociateEnvironmentRoleCommandOutput
  | AssociateGovernedTermsCommandOutput
  | BatchGetAttributesMetadataCommandOutput
  | BatchPutAttributesMetadataCommandOutput
  | CancelMetadataGenerationRunCommandOutput
  | CancelSubscriptionCommandOutput
  | CreateAccountPoolCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetFilterCommandOutput
  | CreateAssetRevisionCommandOutput
  | CreateAssetTypeCommandOutput
  | CreateConnectionCommandOutput
  | CreateDataProductCommandOutput
  | CreateDataProductRevisionCommandOutput
  | CreateDataSourceCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainUnitCommandOutput
  | CreateEnvironmentActionCommandOutput
  | CreateEnvironmentBlueprintCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentProfileCommandOutput
  | CreateFormTypeCommandOutput
  | CreateGlossaryCommandOutput
  | CreateGlossaryTermCommandOutput
  | CreateGroupProfileCommandOutput
  | CreateListingChangeSetCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectMembershipCommandOutput
  | CreateProjectProfileCommandOutput
  | CreateRuleCommandOutput
  | CreateSubscriptionGrantCommandOutput
  | CreateSubscriptionRequestCommandOutput
  | CreateSubscriptionTargetCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteAccountPoolCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetFilterCommandOutput
  | DeleteAssetTypeCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteDataExportConfigurationCommandOutput
  | DeleteDataProductCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainUnitCommandOutput
  | DeleteEnvironmentActionCommandOutput
  | DeleteEnvironmentBlueprintCommandOutput
  | DeleteEnvironmentBlueprintConfigurationCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentProfileCommandOutput
  | DeleteFormTypeCommandOutput
  | DeleteGlossaryCommandOutput
  | DeleteGlossaryTermCommandOutput
  | DeleteListingCommandOutput
  | DeleteProjectCommandOutput
  | DeleteProjectMembershipCommandOutput
  | DeleteProjectProfileCommandOutput
  | DeleteRuleCommandOutput
  | DeleteSubscriptionGrantCommandOutput
  | DeleteSubscriptionRequestCommandOutput
  | DeleteSubscriptionTargetCommandOutput
  | DeleteTimeSeriesDataPointsCommandOutput
  | DisassociateEnvironmentRoleCommandOutput
  | DisassociateGovernedTermsCommandOutput
  | GetAccountPoolCommandOutput
  | GetAssetCommandOutput
  | GetAssetFilterCommandOutput
  | GetAssetTypeCommandOutput
  | GetConnectionCommandOutput
  | GetDataExportConfigurationCommandOutput
  | GetDataProductCommandOutput
  | GetDataSourceCommandOutput
  | GetDataSourceRunCommandOutput
  | GetDomainCommandOutput
  | GetDomainUnitCommandOutput
  | GetEnvironmentActionCommandOutput
  | GetEnvironmentBlueprintCommandOutput
  | GetEnvironmentBlueprintConfigurationCommandOutput
  | GetEnvironmentCommandOutput
  | GetEnvironmentCredentialsCommandOutput
  | GetEnvironmentProfileCommandOutput
  | GetFormTypeCommandOutput
  | GetGlossaryCommandOutput
  | GetGlossaryTermCommandOutput
  | GetGroupProfileCommandOutput
  | GetIamPortalLoginUrlCommandOutput
  | GetJobRunCommandOutput
  | GetLineageEventCommandOutput
  | GetLineageNodeCommandOutput
  | GetListingCommandOutput
  | GetMetadataGenerationRunCommandOutput
  | GetProjectCommandOutput
  | GetProjectProfileCommandOutput
  | GetRuleCommandOutput
  | GetSubscriptionCommandOutput
  | GetSubscriptionGrantCommandOutput
  | GetSubscriptionRequestDetailsCommandOutput
  | GetSubscriptionTargetCommandOutput
  | GetTimeSeriesDataPointCommandOutput
  | GetUserProfileCommandOutput
  | ListAccountPoolsCommandOutput
  | ListAccountsInAccountPoolCommandOutput
  | ListAssetFiltersCommandOutput
  | ListAssetRevisionsCommandOutput
  | ListConnectionsCommandOutput
  | ListDataProductRevisionsCommandOutput
  | ListDataSourceRunActivitiesCommandOutput
  | ListDataSourceRunsCommandOutput
  | ListDataSourcesCommandOutput
  | ListDomainUnitsForParentCommandOutput
  | ListDomainsCommandOutput
  | ListEntityOwnersCommandOutput
  | ListEnvironmentActionsCommandOutput
  | ListEnvironmentBlueprintConfigurationsCommandOutput
  | ListEnvironmentBlueprintsCommandOutput
  | ListEnvironmentProfilesCommandOutput
  | ListEnvironmentsCommandOutput
  | ListJobRunsCommandOutput
  | ListLineageEventsCommandOutput
  | ListLineageNodeHistoryCommandOutput
  | ListMetadataGenerationRunsCommandOutput
  | ListNotificationsCommandOutput
  | ListPolicyGrantsCommandOutput
  | ListProjectMembershipsCommandOutput
  | ListProjectProfilesCommandOutput
  | ListProjectsCommandOutput
  | ListRulesCommandOutput
  | ListSubscriptionGrantsCommandOutput
  | ListSubscriptionRequestsCommandOutput
  | ListSubscriptionTargetsCommandOutput
  | ListSubscriptionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTimeSeriesDataPointsCommandOutput
  | PostLineageEventCommandOutput
  | PostTimeSeriesDataPointsCommandOutput
  | PutDataExportConfigurationCommandOutput
  | PutEnvironmentBlueprintConfigurationCommandOutput
  | QueryGraphCommandOutput
  | RejectPredictionsCommandOutput
  | RejectSubscriptionRequestCommandOutput
  | RemoveEntityOwnerCommandOutput
  | RemovePolicyGrantCommandOutput
  | RevokeSubscriptionCommandOutput
  | SearchCommandOutput
  | SearchGroupProfilesCommandOutput
  | SearchListingsCommandOutput
  | SearchTypesCommandOutput
  | SearchUserProfilesCommandOutput
  | StartDataSourceRunCommandOutput
  | StartMetadataGenerationRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountPoolCommandOutput
  | UpdateAssetFilterCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDomainCommandOutput
  | UpdateDomainUnitCommandOutput
  | UpdateEnvironmentActionCommandOutput
  | UpdateEnvironmentBlueprintCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentProfileCommandOutput
  | UpdateGlossaryCommandOutput
  | UpdateGlossaryTermCommandOutput
  | UpdateGroupProfileCommandOutput
  | UpdateProjectCommandOutput
  | UpdateProjectProfileCommandOutput
  | UpdateRootDomainUnitOwnerCommandOutput
  | UpdateRuleCommandOutput
  | UpdateSubscriptionGrantStatusCommandOutput
  | UpdateSubscriptionRequestCommandOutput
  | UpdateSubscriptionTargetCommandOutput
  | UpdateUserProfileCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DataZoneClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DataZoneClient class constructor that set the region, credentials and other options.
 */
export interface DataZoneClientConfig extends DataZoneClientConfigType {}

/**
 * @public
 */
export type DataZoneClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DataZoneClient class. This is resolved and normalized from the {@link DataZoneClientConfig | constructor configuration interface}.
 */
export interface DataZoneClientResolvedConfig extends DataZoneClientResolvedConfigType {}

/**
 * <p>Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>
 * @public
 */
export class DataZoneClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataZoneClientResolvedConfig
> {
  /**
   * The resolved configuration of DataZoneClient class. This is resolved and normalized from the {@link DataZoneClientConfig | constructor configuration interface}.
   */
  readonly config: DataZoneClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DataZoneClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDataZoneHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DataZoneClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
