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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultDataZoneHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput } from "./commands/AcceptPredictionsCommand";
import {
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "./commands/AcceptSubscriptionRequestCommand";
import { AddEntityOwnerCommandInput, AddEntityOwnerCommandOutput } from "./commands/AddEntityOwnerCommand";
import { AddPolicyGrantCommandInput, AddPolicyGrantCommandOutput } from "./commands/AddPolicyGrantCommand";
import {
  AssociateEnvironmentRoleCommandInput,
  AssociateEnvironmentRoleCommandOutput,
} from "./commands/AssociateEnvironmentRoleCommand";
import {
  AssociateGovernedTermsCommandInput,
  AssociateGovernedTermsCommandOutput,
} from "./commands/AssociateGovernedTermsCommand";
import {
  BatchGetAttributesMetadataCommandInput,
  BatchGetAttributesMetadataCommandOutput,
} from "./commands/BatchGetAttributesMetadataCommand";
import {
  BatchPutAttributesMetadataCommandInput,
  BatchPutAttributesMetadataCommandOutput,
} from "./commands/BatchPutAttributesMetadataCommand";
import {
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "./commands/CancelMetadataGenerationRunCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "./commands/CancelSubscriptionCommand";
import { CreateAccountPoolCommandInput, CreateAccountPoolCommandOutput } from "./commands/CreateAccountPoolCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import { CreateAssetFilterCommandInput, CreateAssetFilterCommandOutput } from "./commands/CreateAssetFilterCommand";
import {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "./commands/CreateAssetRevisionCommand";
import { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "./commands/CreateAssetTypeCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateDataProductCommandInput, CreateDataProductCommandOutput } from "./commands/CreateDataProductCommand";
import {
  CreateDataProductRevisionCommandInput,
  CreateDataProductRevisionCommandOutput,
} from "./commands/CreateDataProductRevisionCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateDomainUnitCommandInput, CreateDomainUnitCommandOutput } from "./commands/CreateDomainUnitCommand";
import {
  CreateEnvironmentActionCommandInput,
  CreateEnvironmentActionCommandOutput,
} from "./commands/CreateEnvironmentActionCommand";
import {
  CreateEnvironmentBlueprintCommandInput,
  CreateEnvironmentBlueprintCommandOutput,
} from "./commands/CreateEnvironmentBlueprintCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "./commands/CreateEnvironmentProfileCommand";
import { CreateFormTypeCommandInput, CreateFormTypeCommandOutput } from "./commands/CreateFormTypeCommand";
import { CreateGlossaryCommandInput, CreateGlossaryCommandOutput } from "./commands/CreateGlossaryCommand";
import { CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput } from "./commands/CreateGlossaryTermCommand";
import { CreateGroupProfileCommandInput, CreateGroupProfileCommandOutput } from "./commands/CreateGroupProfileCommand";
import {
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "./commands/CreateListingChangeSetCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "./commands/CreateProjectMembershipCommand";
import {
  CreateProjectProfileCommandInput,
  CreateProjectProfileCommandOutput,
} from "./commands/CreateProjectProfileCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "./commands/CreateSubscriptionGrantCommand";
import {
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "./commands/CreateSubscriptionRequestCommand";
import {
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "./commands/CreateSubscriptionTargetCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteAccountPoolCommandInput, DeleteAccountPoolCommandOutput } from "./commands/DeleteAccountPoolCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetFilterCommandInput, DeleteAssetFilterCommandOutput } from "./commands/DeleteAssetFilterCommand";
import { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "./commands/DeleteAssetTypeCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteDataProductCommandInput, DeleteDataProductCommandOutput } from "./commands/DeleteDataProductCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainUnitCommandInput, DeleteDomainUnitCommandOutput } from "./commands/DeleteDomainUnitCommand";
import {
  DeleteEnvironmentActionCommandInput,
  DeleteEnvironmentActionCommandOutput,
} from "./commands/DeleteEnvironmentActionCommand";
import {
  DeleteEnvironmentBlueprintCommandInput,
  DeleteEnvironmentBlueprintCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintCommand";
import {
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintConfigurationCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "./commands/DeleteEnvironmentProfileCommand";
import { DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput } from "./commands/DeleteFormTypeCommand";
import { DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput } from "./commands/DeleteGlossaryCommand";
import { DeleteGlossaryTermCommandInput, DeleteGlossaryTermCommandOutput } from "./commands/DeleteGlossaryTermCommand";
import { DeleteListingCommandInput, DeleteListingCommandOutput } from "./commands/DeleteListingCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "./commands/DeleteProjectMembershipCommand";
import {
  DeleteProjectProfileCommandInput,
  DeleteProjectProfileCommandOutput,
} from "./commands/DeleteProjectProfileCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "./commands/DeleteSubscriptionGrantCommand";
import {
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "./commands/DeleteSubscriptionRequestCommand";
import {
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "./commands/DeleteSubscriptionTargetCommand";
import {
  DeleteTimeSeriesDataPointsCommandInput,
  DeleteTimeSeriesDataPointsCommandOutput,
} from "./commands/DeleteTimeSeriesDataPointsCommand";
import {
  DisassociateEnvironmentRoleCommandInput,
  DisassociateEnvironmentRoleCommandOutput,
} from "./commands/DisassociateEnvironmentRoleCommand";
import {
  DisassociateGovernedTermsCommandInput,
  DisassociateGovernedTermsCommandOutput,
} from "./commands/DisassociateGovernedTermsCommand";
import { GetAccountPoolCommandInput, GetAccountPoolCommandOutput } from "./commands/GetAccountPoolCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetAssetFilterCommandInput, GetAssetFilterCommandOutput } from "./commands/GetAssetFilterCommand";
import { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "./commands/GetAssetTypeCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import {
  GetDataExportConfigurationCommandInput,
  GetDataExportConfigurationCommandOutput,
} from "./commands/GetDataExportConfigurationCommand";
import { GetDataProductCommandInput, GetDataProductCommandOutput } from "./commands/GetDataProductCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput } from "./commands/GetDataSourceRunCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainUnitCommandInput, GetDomainUnitCommandOutput } from "./commands/GetDomainUnitCommand";
import {
  GetEnvironmentActionCommandInput,
  GetEnvironmentActionCommandOutput,
} from "./commands/GetEnvironmentActionCommand";
import {
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "./commands/GetEnvironmentBlueprintCommand";
import {
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/GetEnvironmentBlueprintConfigurationCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentCredentialsCommandInput,
  GetEnvironmentCredentialsCommandOutput,
} from "./commands/GetEnvironmentCredentialsCommand";
import {
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "./commands/GetEnvironmentProfileCommand";
import { GetFormTypeCommandInput, GetFormTypeCommandOutput } from "./commands/GetFormTypeCommand";
import { GetGlossaryCommandInput, GetGlossaryCommandOutput } from "./commands/GetGlossaryCommand";
import { GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput } from "./commands/GetGlossaryTermCommand";
import { GetGroupProfileCommandInput, GetGroupProfileCommandOutput } from "./commands/GetGroupProfileCommand";
import {
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "./commands/GetIamPortalLoginUrlCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import { GetLineageEventCommandInput, GetLineageEventCommandOutput } from "./commands/GetLineageEventCommand";
import { GetLineageNodeCommandInput, GetLineageNodeCommandOutput } from "./commands/GetLineageNodeCommand";
import { GetListingCommandInput, GetListingCommandOutput } from "./commands/GetListingCommand";
import {
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "./commands/GetMetadataGenerationRunCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import { GetProjectProfileCommandInput, GetProjectProfileCommandOutput } from "./commands/GetProjectProfileCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "./commands/GetSubscriptionCommand";
import {
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "./commands/GetSubscriptionGrantCommand";
import {
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "./commands/GetSubscriptionRequestDetailsCommand";
import {
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "./commands/GetSubscriptionTargetCommand";
import {
  GetTimeSeriesDataPointCommandInput,
  GetTimeSeriesDataPointCommandOutput,
} from "./commands/GetTimeSeriesDataPointCommand";
import { GetUserProfileCommandInput, GetUserProfileCommandOutput } from "./commands/GetUserProfileCommand";
import { ListAccountPoolsCommandInput, ListAccountPoolsCommandOutput } from "./commands/ListAccountPoolsCommand";
import {
  ListAccountsInAccountPoolCommandInput,
  ListAccountsInAccountPoolCommandOutput,
} from "./commands/ListAccountsInAccountPoolCommand";
import { ListAssetFiltersCommandInput, ListAssetFiltersCommandOutput } from "./commands/ListAssetFiltersCommand";
import { ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput } from "./commands/ListAssetRevisionsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import {
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput,
} from "./commands/ListDataProductRevisionsCommand";
import {
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "./commands/ListDataSourceRunActivitiesCommand";
import { ListDataSourceRunsCommandInput, ListDataSourceRunsCommandOutput } from "./commands/ListDataSourceRunsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput,
} from "./commands/ListDomainUnitsForParentCommand";
import { ListEntityOwnersCommandInput, ListEntityOwnersCommandOutput } from "./commands/ListEntityOwnersCommand";
import {
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput,
} from "./commands/ListEnvironmentActionsCommand";
import {
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "./commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "./commands/ListEnvironmentBlueprintsCommand";
import {
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "./commands/ListEnvironmentProfilesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListLineageEventsCommandInput, ListLineageEventsCommandOutput } from "./commands/ListLineageEventsCommand";
import {
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput,
} from "./commands/ListLineageNodeHistoryCommand";
import {
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "./commands/ListMetadataGenerationRunsCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import { ListPolicyGrantsCommandInput, ListPolicyGrantsCommandOutput } from "./commands/ListPolicyGrantsCommand";
import {
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "./commands/ListProjectMembershipsCommand";
import {
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput,
} from "./commands/ListProjectProfilesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "./commands/ListSubscriptionGrantsCommand";
import {
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "./commands/ListSubscriptionRequestsCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "./commands/ListSubscriptionsCommand";
import {
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "./commands/ListSubscriptionTargetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput,
} from "./commands/ListTimeSeriesDataPointsCommand";
import { PostLineageEventCommandInput, PostLineageEventCommandOutput } from "./commands/PostLineageEventCommand";
import {
  PostTimeSeriesDataPointsCommandInput,
  PostTimeSeriesDataPointsCommandOutput,
} from "./commands/PostTimeSeriesDataPointsCommand";
import {
  PutDataExportConfigurationCommandInput,
  PutDataExportConfigurationCommandOutput,
} from "./commands/PutDataExportConfigurationCommand";
import {
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/PutEnvironmentBlueprintConfigurationCommand";
import { RejectPredictionsCommandInput, RejectPredictionsCommandOutput } from "./commands/RejectPredictionsCommand";
import {
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "./commands/RejectSubscriptionRequestCommand";
import { RemoveEntityOwnerCommandInput, RemoveEntityOwnerCommandOutput } from "./commands/RemoveEntityOwnerCommand";
import { RemovePolicyGrantCommandInput, RemovePolicyGrantCommandOutput } from "./commands/RemovePolicyGrantCommand";
import { RevokeSubscriptionCommandInput, RevokeSubscriptionCommandOutput } from "./commands/RevokeSubscriptionCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import {
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "./commands/SearchGroupProfilesCommand";
import { SearchListingsCommandInput, SearchListingsCommandOutput } from "./commands/SearchListingsCommand";
import { SearchTypesCommandInput, SearchTypesCommandOutput } from "./commands/SearchTypesCommand";
import { SearchUserProfilesCommandInput, SearchUserProfilesCommandOutput } from "./commands/SearchUserProfilesCommand";
import { StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput } from "./commands/StartDataSourceRunCommand";
import {
  StartMetadataGenerationRunCommandInput,
  StartMetadataGenerationRunCommandOutput,
} from "./commands/StartMetadataGenerationRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountPoolCommandInput, UpdateAccountPoolCommandOutput } from "./commands/UpdateAccountPoolCommand";
import { UpdateAssetFilterCommandInput, UpdateAssetFilterCommandOutput } from "./commands/UpdateAssetFilterCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateDomainUnitCommandInput, UpdateDomainUnitCommandOutput } from "./commands/UpdateDomainUnitCommand";
import {
  UpdateEnvironmentActionCommandInput,
  UpdateEnvironmentActionCommandOutput,
} from "./commands/UpdateEnvironmentActionCommand";
import {
  UpdateEnvironmentBlueprintCommandInput,
  UpdateEnvironmentBlueprintCommandOutput,
} from "./commands/UpdateEnvironmentBlueprintCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "./commands/UpdateEnvironmentProfileCommand";
import { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "./commands/UpdateGlossaryCommand";
import { UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput } from "./commands/UpdateGlossaryTermCommand";
import { UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput } from "./commands/UpdateGroupProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  UpdateProjectProfileCommandInput,
  UpdateProjectProfileCommandOutput,
} from "./commands/UpdateProjectProfileCommand";
import {
  UpdateRootDomainUnitOwnerCommandInput,
  UpdateRootDomainUnitOwnerCommandOutput,
} from "./commands/UpdateRootDomainUnitOwnerCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "./commands/UpdateSubscriptionGrantStatusCommand";
import {
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "./commands/UpdateSubscriptionRequestCommand";
import {
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "./commands/UpdateSubscriptionTargetCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

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
