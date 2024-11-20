// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultDataZoneHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
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
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "./commands/CancelMetadataGenerationRunCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "./commands/CancelSubscriptionCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import { CreateAssetFilterCommandInput, CreateAssetFilterCommandOutput } from "./commands/CreateAssetFilterCommand";
import {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "./commands/CreateAssetRevisionCommand";
import { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "./commands/CreateAssetTypeCommand";
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
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetFilterCommandInput, DeleteAssetFilterCommandOutput } from "./commands/DeleteAssetFilterCommand";
import { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "./commands/DeleteAssetTypeCommand";
import { DeleteDataProductCommandInput, DeleteDataProductCommandOutput } from "./commands/DeleteDataProductCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainUnitCommandInput, DeleteDomainUnitCommandOutput } from "./commands/DeleteDomainUnitCommand";
import {
  DeleteEnvironmentActionCommandInput,
  DeleteEnvironmentActionCommandOutput,
} from "./commands/DeleteEnvironmentActionCommand";
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
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetAssetFilterCommandInput, GetAssetFilterCommandOutput } from "./commands/GetAssetFilterCommand";
import { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "./commands/GetAssetTypeCommand";
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
import { GetLineageNodeCommandInput, GetLineageNodeCommandOutput } from "./commands/GetLineageNodeCommand";
import { GetListingCommandInput, GetListingCommandOutput } from "./commands/GetListingCommand";
import {
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "./commands/GetMetadataGenerationRunCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
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
import { ListAssetFiltersCommandInput, ListAssetFiltersCommandOutput } from "./commands/ListAssetFiltersCommand";
import { ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput } from "./commands/ListAssetRevisionsCommand";
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
import { UpdateAssetFilterCommandInput, UpdateAssetFilterCommandOutput } from "./commands/UpdateAssetFilterCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateDomainUnitCommandInput, UpdateDomainUnitCommandOutput } from "./commands/UpdateDomainUnitCommand";
import {
  UpdateEnvironmentActionCommandInput,
  UpdateEnvironmentActionCommandOutput,
} from "./commands/UpdateEnvironmentActionCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "./commands/UpdateEnvironmentProfileCommand";
import { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "./commands/UpdateGlossaryCommand";
import { UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput } from "./commands/UpdateGlossaryTermCommand";
import { UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput } from "./commands/UpdateGroupProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  | CancelMetadataGenerationRunCommandInput
  | CancelSubscriptionCommandInput
  | CreateAssetCommandInput
  | CreateAssetFilterCommandInput
  | CreateAssetRevisionCommandInput
  | CreateAssetTypeCommandInput
  | CreateDataProductCommandInput
  | CreateDataProductRevisionCommandInput
  | CreateDataSourceCommandInput
  | CreateDomainCommandInput
  | CreateDomainUnitCommandInput
  | CreateEnvironmentActionCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentProfileCommandInput
  | CreateFormTypeCommandInput
  | CreateGlossaryCommandInput
  | CreateGlossaryTermCommandInput
  | CreateGroupProfileCommandInput
  | CreateListingChangeSetCommandInput
  | CreateProjectCommandInput
  | CreateProjectMembershipCommandInput
  | CreateRuleCommandInput
  | CreateSubscriptionGrantCommandInput
  | CreateSubscriptionRequestCommandInput
  | CreateSubscriptionTargetCommandInput
  | CreateUserProfileCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetFilterCommandInput
  | DeleteAssetTypeCommandInput
  | DeleteDataProductCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainUnitCommandInput
  | DeleteEnvironmentActionCommandInput
  | DeleteEnvironmentBlueprintConfigurationCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentProfileCommandInput
  | DeleteFormTypeCommandInput
  | DeleteGlossaryCommandInput
  | DeleteGlossaryTermCommandInput
  | DeleteListingCommandInput
  | DeleteProjectCommandInput
  | DeleteProjectMembershipCommandInput
  | DeleteRuleCommandInput
  | DeleteSubscriptionGrantCommandInput
  | DeleteSubscriptionRequestCommandInput
  | DeleteSubscriptionTargetCommandInput
  | DeleteTimeSeriesDataPointsCommandInput
  | DisassociateEnvironmentRoleCommandInput
  | GetAssetCommandInput
  | GetAssetFilterCommandInput
  | GetAssetTypeCommandInput
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
  | GetLineageNodeCommandInput
  | GetListingCommandInput
  | GetMetadataGenerationRunCommandInput
  | GetProjectCommandInput
  | GetRuleCommandInput
  | GetSubscriptionCommandInput
  | GetSubscriptionGrantCommandInput
  | GetSubscriptionRequestDetailsCommandInput
  | GetSubscriptionTargetCommandInput
  | GetTimeSeriesDataPointCommandInput
  | GetUserProfileCommandInput
  | ListAssetFiltersCommandInput
  | ListAssetRevisionsCommandInput
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
  | ListLineageNodeHistoryCommandInput
  | ListMetadataGenerationRunsCommandInput
  | ListNotificationsCommandInput
  | ListPolicyGrantsCommandInput
  | ListProjectMembershipsCommandInput
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
  | UpdateAssetFilterCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDomainCommandInput
  | UpdateDomainUnitCommandInput
  | UpdateEnvironmentActionCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentProfileCommandInput
  | UpdateGlossaryCommandInput
  | UpdateGlossaryTermCommandInput
  | UpdateGroupProfileCommandInput
  | UpdateProjectCommandInput
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
  | CancelMetadataGenerationRunCommandOutput
  | CancelSubscriptionCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetFilterCommandOutput
  | CreateAssetRevisionCommandOutput
  | CreateAssetTypeCommandOutput
  | CreateDataProductCommandOutput
  | CreateDataProductRevisionCommandOutput
  | CreateDataSourceCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainUnitCommandOutput
  | CreateEnvironmentActionCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentProfileCommandOutput
  | CreateFormTypeCommandOutput
  | CreateGlossaryCommandOutput
  | CreateGlossaryTermCommandOutput
  | CreateGroupProfileCommandOutput
  | CreateListingChangeSetCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectMembershipCommandOutput
  | CreateRuleCommandOutput
  | CreateSubscriptionGrantCommandOutput
  | CreateSubscriptionRequestCommandOutput
  | CreateSubscriptionTargetCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetFilterCommandOutput
  | DeleteAssetTypeCommandOutput
  | DeleteDataProductCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainUnitCommandOutput
  | DeleteEnvironmentActionCommandOutput
  | DeleteEnvironmentBlueprintConfigurationCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentProfileCommandOutput
  | DeleteFormTypeCommandOutput
  | DeleteGlossaryCommandOutput
  | DeleteGlossaryTermCommandOutput
  | DeleteListingCommandOutput
  | DeleteProjectCommandOutput
  | DeleteProjectMembershipCommandOutput
  | DeleteRuleCommandOutput
  | DeleteSubscriptionGrantCommandOutput
  | DeleteSubscriptionRequestCommandOutput
  | DeleteSubscriptionTargetCommandOutput
  | DeleteTimeSeriesDataPointsCommandOutput
  | DisassociateEnvironmentRoleCommandOutput
  | GetAssetCommandOutput
  | GetAssetFilterCommandOutput
  | GetAssetTypeCommandOutput
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
  | GetLineageNodeCommandOutput
  | GetListingCommandOutput
  | GetMetadataGenerationRunCommandOutput
  | GetProjectCommandOutput
  | GetRuleCommandOutput
  | GetSubscriptionCommandOutput
  | GetSubscriptionGrantCommandOutput
  | GetSubscriptionRequestDetailsCommandOutput
  | GetSubscriptionTargetCommandOutput
  | GetTimeSeriesDataPointCommandOutput
  | GetUserProfileCommandOutput
  | ListAssetFiltersCommandOutput
  | ListAssetRevisionsCommandOutput
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
  | ListLineageNodeHistoryCommandOutput
  | ListMetadataGenerationRunsCommandOutput
  | ListNotificationsCommandOutput
  | ListPolicyGrantsCommandOutput
  | ListProjectMembershipsCommandOutput
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
  | UpdateAssetFilterCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDomainCommandOutput
  | UpdateDomainUnitCommandOutput
  | UpdateEnvironmentActionCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentProfileCommandOutput
  | UpdateGlossaryCommandOutput
  | UpdateGlossaryTermCommandOutput
  | UpdateGroupProfileCommandOutput
  | UpdateProjectCommandOutput
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
 * <p>Amazon DataZone is a data management service that enables you to catalog, discover,
 *          govern, share, and analyze your data. With Amazon DataZone, you can share and access your
 *          data across accounts and supported regions. Amazon DataZone simplifies your experience
 *          across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon
 *          Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
