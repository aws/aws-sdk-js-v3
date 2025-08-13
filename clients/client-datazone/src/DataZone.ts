// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptPredictionsCommand,
  AcceptPredictionsCommandInput,
  AcceptPredictionsCommandOutput,
} from "./commands/AcceptPredictionsCommand";
import {
  AcceptSubscriptionRequestCommand,
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "./commands/AcceptSubscriptionRequestCommand";
import {
  AddEntityOwnerCommand,
  AddEntityOwnerCommandInput,
  AddEntityOwnerCommandOutput,
} from "./commands/AddEntityOwnerCommand";
import {
  AddPolicyGrantCommand,
  AddPolicyGrantCommandInput,
  AddPolicyGrantCommandOutput,
} from "./commands/AddPolicyGrantCommand";
import {
  AssociateEnvironmentRoleCommand,
  AssociateEnvironmentRoleCommandInput,
  AssociateEnvironmentRoleCommandOutput,
} from "./commands/AssociateEnvironmentRoleCommand";
import {
  CancelMetadataGenerationRunCommand,
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "./commands/CancelMetadataGenerationRunCommand";
import {
  CancelSubscriptionCommand,
  CancelSubscriptionCommandInput,
  CancelSubscriptionCommandOutput,
} from "./commands/CancelSubscriptionCommand";
import {
  CreateAccountPoolCommand,
  CreateAccountPoolCommandInput,
  CreateAccountPoolCommandOutput,
} from "./commands/CreateAccountPoolCommand";
import { CreateAssetCommand, CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import {
  CreateAssetFilterCommand,
  CreateAssetFilterCommandInput,
  CreateAssetFilterCommandOutput,
} from "./commands/CreateAssetFilterCommand";
import {
  CreateAssetRevisionCommand,
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "./commands/CreateAssetRevisionCommand";
import {
  CreateAssetTypeCommand,
  CreateAssetTypeCommandInput,
  CreateAssetTypeCommandOutput,
} from "./commands/CreateAssetTypeCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateDataProductCommand,
  CreateDataProductCommandInput,
  CreateDataProductCommandOutput,
} from "./commands/CreateDataProductCommand";
import {
  CreateDataProductRevisionCommand,
  CreateDataProductRevisionCommandInput,
  CreateDataProductRevisionCommandOutput,
} from "./commands/CreateDataProductRevisionCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateDomainUnitCommand,
  CreateDomainUnitCommandInput,
  CreateDomainUnitCommandOutput,
} from "./commands/CreateDomainUnitCommand";
import {
  CreateEnvironmentActionCommand,
  CreateEnvironmentActionCommandInput,
  CreateEnvironmentActionCommandOutput,
} from "./commands/CreateEnvironmentActionCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentProfileCommand,
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "./commands/CreateEnvironmentProfileCommand";
import {
  CreateFormTypeCommand,
  CreateFormTypeCommandInput,
  CreateFormTypeCommandOutput,
} from "./commands/CreateFormTypeCommand";
import {
  CreateGlossaryCommand,
  CreateGlossaryCommandInput,
  CreateGlossaryCommandOutput,
} from "./commands/CreateGlossaryCommand";
import {
  CreateGlossaryTermCommand,
  CreateGlossaryTermCommandInput,
  CreateGlossaryTermCommandOutput,
} from "./commands/CreateGlossaryTermCommand";
import {
  CreateGroupProfileCommand,
  CreateGroupProfileCommandInput,
  CreateGroupProfileCommandOutput,
} from "./commands/CreateGroupProfileCommand";
import {
  CreateListingChangeSetCommand,
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "./commands/CreateListingChangeSetCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateProjectMembershipCommand,
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "./commands/CreateProjectMembershipCommand";
import {
  CreateProjectProfileCommand,
  CreateProjectProfileCommandInput,
  CreateProjectProfileCommandOutput,
} from "./commands/CreateProjectProfileCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateSubscriptionGrantCommand,
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "./commands/CreateSubscriptionGrantCommand";
import {
  CreateSubscriptionRequestCommand,
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "./commands/CreateSubscriptionRequestCommand";
import {
  CreateSubscriptionTargetCommand,
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "./commands/CreateSubscriptionTargetCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import {
  DeleteAccountPoolCommand,
  DeleteAccountPoolCommandInput,
  DeleteAccountPoolCommandOutput,
} from "./commands/DeleteAccountPoolCommand";
import { DeleteAssetCommand, DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import {
  DeleteAssetFilterCommand,
  DeleteAssetFilterCommandInput,
  DeleteAssetFilterCommandOutput,
} from "./commands/DeleteAssetFilterCommand";
import {
  DeleteAssetTypeCommand,
  DeleteAssetTypeCommandInput,
  DeleteAssetTypeCommandOutput,
} from "./commands/DeleteAssetTypeCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteDataProductCommand,
  DeleteDataProductCommandInput,
  DeleteDataProductCommandOutput,
} from "./commands/DeleteDataProductCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainUnitCommand,
  DeleteDomainUnitCommandInput,
  DeleteDomainUnitCommandOutput,
} from "./commands/DeleteDomainUnitCommand";
import {
  DeleteEnvironmentActionCommand,
  DeleteEnvironmentActionCommandInput,
  DeleteEnvironmentActionCommandOutput,
} from "./commands/DeleteEnvironmentActionCommand";
import {
  DeleteEnvironmentBlueprintConfigurationCommand,
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintConfigurationCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentProfileCommand,
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "./commands/DeleteEnvironmentProfileCommand";
import {
  DeleteFormTypeCommand,
  DeleteFormTypeCommandInput,
  DeleteFormTypeCommandOutput,
} from "./commands/DeleteFormTypeCommand";
import {
  DeleteGlossaryCommand,
  DeleteGlossaryCommandInput,
  DeleteGlossaryCommandOutput,
} from "./commands/DeleteGlossaryCommand";
import {
  DeleteGlossaryTermCommand,
  DeleteGlossaryTermCommandInput,
  DeleteGlossaryTermCommandOutput,
} from "./commands/DeleteGlossaryTermCommand";
import {
  DeleteListingCommand,
  DeleteListingCommandInput,
  DeleteListingCommandOutput,
} from "./commands/DeleteListingCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteProjectMembershipCommand,
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "./commands/DeleteProjectMembershipCommand";
import {
  DeleteProjectProfileCommand,
  DeleteProjectProfileCommandInput,
  DeleteProjectProfileCommandOutput,
} from "./commands/DeleteProjectProfileCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteSubscriptionGrantCommand,
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "./commands/DeleteSubscriptionGrantCommand";
import {
  DeleteSubscriptionRequestCommand,
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "./commands/DeleteSubscriptionRequestCommand";
import {
  DeleteSubscriptionTargetCommand,
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "./commands/DeleteSubscriptionTargetCommand";
import {
  DeleteTimeSeriesDataPointsCommand,
  DeleteTimeSeriesDataPointsCommandInput,
  DeleteTimeSeriesDataPointsCommandOutput,
} from "./commands/DeleteTimeSeriesDataPointsCommand";
import {
  DisassociateEnvironmentRoleCommand,
  DisassociateEnvironmentRoleCommandInput,
  DisassociateEnvironmentRoleCommandOutput,
} from "./commands/DisassociateEnvironmentRoleCommand";
import {
  GetAccountPoolCommand,
  GetAccountPoolCommandInput,
  GetAccountPoolCommandOutput,
} from "./commands/GetAccountPoolCommand";
import { GetAssetCommand, GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import {
  GetAssetFilterCommand,
  GetAssetFilterCommandInput,
  GetAssetFilterCommandOutput,
} from "./commands/GetAssetFilterCommand";
import {
  GetAssetTypeCommand,
  GetAssetTypeCommandInput,
  GetAssetTypeCommandOutput,
} from "./commands/GetAssetTypeCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import {
  GetDataProductCommand,
  GetDataProductCommandInput,
  GetDataProductCommandOutput,
} from "./commands/GetDataProductCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetDataSourceRunCommand,
  GetDataSourceRunCommandInput,
  GetDataSourceRunCommandOutput,
} from "./commands/GetDataSourceRunCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import {
  GetDomainUnitCommand,
  GetDomainUnitCommandInput,
  GetDomainUnitCommandOutput,
} from "./commands/GetDomainUnitCommand";
import {
  GetEnvironmentActionCommand,
  GetEnvironmentActionCommandInput,
  GetEnvironmentActionCommandOutput,
} from "./commands/GetEnvironmentActionCommand";
import {
  GetEnvironmentBlueprintCommand,
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "./commands/GetEnvironmentBlueprintCommand";
import {
  GetEnvironmentBlueprintConfigurationCommand,
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/GetEnvironmentBlueprintConfigurationCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentCredentialsCommand,
  GetEnvironmentCredentialsCommandInput,
  GetEnvironmentCredentialsCommandOutput,
} from "./commands/GetEnvironmentCredentialsCommand";
import {
  GetEnvironmentProfileCommand,
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "./commands/GetEnvironmentProfileCommand";
import { GetFormTypeCommand, GetFormTypeCommandInput, GetFormTypeCommandOutput } from "./commands/GetFormTypeCommand";
import { GetGlossaryCommand, GetGlossaryCommandInput, GetGlossaryCommandOutput } from "./commands/GetGlossaryCommand";
import {
  GetGlossaryTermCommand,
  GetGlossaryTermCommandInput,
  GetGlossaryTermCommandOutput,
} from "./commands/GetGlossaryTermCommand";
import {
  GetGroupProfileCommand,
  GetGroupProfileCommandInput,
  GetGroupProfileCommandOutput,
} from "./commands/GetGroupProfileCommand";
import {
  GetIamPortalLoginUrlCommand,
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "./commands/GetIamPortalLoginUrlCommand";
import { GetJobRunCommand, GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import {
  GetLineageEventCommand,
  GetLineageEventCommandInput,
  GetLineageEventCommandOutput,
} from "./commands/GetLineageEventCommand";
import {
  GetLineageNodeCommand,
  GetLineageNodeCommandInput,
  GetLineageNodeCommandOutput,
} from "./commands/GetLineageNodeCommand";
import { GetListingCommand, GetListingCommandInput, GetListingCommandOutput } from "./commands/GetListingCommand";
import {
  GetMetadataGenerationRunCommand,
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "./commands/GetMetadataGenerationRunCommand";
import { GetProjectCommand, GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetProjectProfileCommand,
  GetProjectProfileCommandInput,
  GetProjectProfileCommandOutput,
} from "./commands/GetProjectProfileCommand";
import { GetRuleCommand, GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import {
  GetSubscriptionCommand,
  GetSubscriptionCommandInput,
  GetSubscriptionCommandOutput,
} from "./commands/GetSubscriptionCommand";
import {
  GetSubscriptionGrantCommand,
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "./commands/GetSubscriptionGrantCommand";
import {
  GetSubscriptionRequestDetailsCommand,
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "./commands/GetSubscriptionRequestDetailsCommand";
import {
  GetSubscriptionTargetCommand,
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "./commands/GetSubscriptionTargetCommand";
import {
  GetTimeSeriesDataPointCommand,
  GetTimeSeriesDataPointCommandInput,
  GetTimeSeriesDataPointCommandOutput,
} from "./commands/GetTimeSeriesDataPointCommand";
import {
  GetUserProfileCommand,
  GetUserProfileCommandInput,
  GetUserProfileCommandOutput,
} from "./commands/GetUserProfileCommand";
import {
  ListAccountPoolsCommand,
  ListAccountPoolsCommandInput,
  ListAccountPoolsCommandOutput,
} from "./commands/ListAccountPoolsCommand";
import {
  ListAccountsInAccountPoolCommand,
  ListAccountsInAccountPoolCommandInput,
  ListAccountsInAccountPoolCommandOutput,
} from "./commands/ListAccountsInAccountPoolCommand";
import {
  ListAssetFiltersCommand,
  ListAssetFiltersCommandInput,
  ListAssetFiltersCommandOutput,
} from "./commands/ListAssetFiltersCommand";
import {
  ListAssetRevisionsCommand,
  ListAssetRevisionsCommandInput,
  ListAssetRevisionsCommandOutput,
} from "./commands/ListAssetRevisionsCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListDataProductRevisionsCommand,
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput,
} from "./commands/ListDataProductRevisionsCommand";
import {
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "./commands/ListDataSourceRunActivitiesCommand";
import {
  ListDataSourceRunsCommand,
  ListDataSourceRunsCommandInput,
  ListDataSourceRunsCommandOutput,
} from "./commands/ListDataSourceRunsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListDomainUnitsForParentCommand,
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput,
} from "./commands/ListDomainUnitsForParentCommand";
import {
  ListEntityOwnersCommand,
  ListEntityOwnersCommandInput,
  ListEntityOwnersCommandOutput,
} from "./commands/ListEntityOwnersCommand";
import {
  ListEnvironmentActionsCommand,
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput,
} from "./commands/ListEnvironmentActionsCommand";
import {
  ListEnvironmentBlueprintConfigurationsCommand,
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "./commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  ListEnvironmentBlueprintsCommand,
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "./commands/ListEnvironmentBlueprintsCommand";
import {
  ListEnvironmentProfilesCommand,
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "./commands/ListEnvironmentProfilesCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import {
  ListLineageEventsCommand,
  ListLineageEventsCommandInput,
  ListLineageEventsCommandOutput,
} from "./commands/ListLineageEventsCommand";
import {
  ListLineageNodeHistoryCommand,
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput,
} from "./commands/ListLineageNodeHistoryCommand";
import {
  ListMetadataGenerationRunsCommand,
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "./commands/ListMetadataGenerationRunsCommand";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListPolicyGrantsCommand,
  ListPolicyGrantsCommandInput,
  ListPolicyGrantsCommandOutput,
} from "./commands/ListPolicyGrantsCommand";
import {
  ListProjectMembershipsCommand,
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "./commands/ListProjectMembershipsCommand";
import {
  ListProjectProfilesCommand,
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput,
} from "./commands/ListProjectProfilesCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSubscriptionGrantsCommand,
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "./commands/ListSubscriptionGrantsCommand";
import {
  ListSubscriptionRequestsCommand,
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "./commands/ListSubscriptionRequestsCommand";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "./commands/ListSubscriptionsCommand";
import {
  ListSubscriptionTargetsCommand,
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "./commands/ListSubscriptionTargetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTimeSeriesDataPointsCommand,
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput,
} from "./commands/ListTimeSeriesDataPointsCommand";
import {
  PostLineageEventCommand,
  PostLineageEventCommandInput,
  PostLineageEventCommandOutput,
} from "./commands/PostLineageEventCommand";
import {
  PostTimeSeriesDataPointsCommand,
  PostTimeSeriesDataPointsCommandInput,
  PostTimeSeriesDataPointsCommandOutput,
} from "./commands/PostTimeSeriesDataPointsCommand";
import {
  PutEnvironmentBlueprintConfigurationCommand,
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/PutEnvironmentBlueprintConfigurationCommand";
import {
  RejectPredictionsCommand,
  RejectPredictionsCommandInput,
  RejectPredictionsCommandOutput,
} from "./commands/RejectPredictionsCommand";
import {
  RejectSubscriptionRequestCommand,
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "./commands/RejectSubscriptionRequestCommand";
import {
  RemoveEntityOwnerCommand,
  RemoveEntityOwnerCommandInput,
  RemoveEntityOwnerCommandOutput,
} from "./commands/RemoveEntityOwnerCommand";
import {
  RemovePolicyGrantCommand,
  RemovePolicyGrantCommandInput,
  RemovePolicyGrantCommandOutput,
} from "./commands/RemovePolicyGrantCommand";
import {
  RevokeSubscriptionCommand,
  RevokeSubscriptionCommandInput,
  RevokeSubscriptionCommandOutput,
} from "./commands/RevokeSubscriptionCommand";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import {
  SearchGroupProfilesCommand,
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "./commands/SearchGroupProfilesCommand";
import {
  SearchListingsCommand,
  SearchListingsCommandInput,
  SearchListingsCommandOutput,
} from "./commands/SearchListingsCommand";
import { SearchTypesCommand, SearchTypesCommandInput, SearchTypesCommandOutput } from "./commands/SearchTypesCommand";
import {
  SearchUserProfilesCommand,
  SearchUserProfilesCommandInput,
  SearchUserProfilesCommandOutput,
} from "./commands/SearchUserProfilesCommand";
import {
  StartDataSourceRunCommand,
  StartDataSourceRunCommandInput,
  StartDataSourceRunCommandOutput,
} from "./commands/StartDataSourceRunCommand";
import {
  StartMetadataGenerationRunCommand,
  StartMetadataGenerationRunCommandInput,
  StartMetadataGenerationRunCommandOutput,
} from "./commands/StartMetadataGenerationRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountPoolCommand,
  UpdateAccountPoolCommandInput,
  UpdateAccountPoolCommandOutput,
} from "./commands/UpdateAccountPoolCommand";
import {
  UpdateAssetFilterCommand,
  UpdateAssetFilterCommandInput,
  UpdateAssetFilterCommandOutput,
} from "./commands/UpdateAssetFilterCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
} from "./commands/UpdateDomainCommand";
import {
  UpdateDomainUnitCommand,
  UpdateDomainUnitCommandInput,
  UpdateDomainUnitCommandOutput,
} from "./commands/UpdateDomainUnitCommand";
import {
  UpdateEnvironmentActionCommand,
  UpdateEnvironmentActionCommandInput,
  UpdateEnvironmentActionCommandOutput,
} from "./commands/UpdateEnvironmentActionCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommand,
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "./commands/UpdateEnvironmentProfileCommand";
import {
  UpdateGlossaryCommand,
  UpdateGlossaryCommandInput,
  UpdateGlossaryCommandOutput,
} from "./commands/UpdateGlossaryCommand";
import {
  UpdateGlossaryTermCommand,
  UpdateGlossaryTermCommandInput,
  UpdateGlossaryTermCommandOutput,
} from "./commands/UpdateGlossaryTermCommand";
import {
  UpdateGroupProfileCommand,
  UpdateGroupProfileCommandInput,
  UpdateGroupProfileCommandOutput,
} from "./commands/UpdateGroupProfileCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateProjectProfileCommand,
  UpdateProjectProfileCommandInput,
  UpdateProjectProfileCommandOutput,
} from "./commands/UpdateProjectProfileCommand";
import { UpdateRuleCommand, UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateSubscriptionGrantStatusCommand,
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "./commands/UpdateSubscriptionGrantStatusCommand";
import {
  UpdateSubscriptionRequestCommand,
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "./commands/UpdateSubscriptionRequestCommand";
import {
  UpdateSubscriptionTargetCommand,
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "./commands/UpdateSubscriptionTargetCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import { DataZoneClient, DataZoneClientConfig } from "./DataZoneClient";

const commands = {
  AcceptPredictionsCommand,
  AcceptSubscriptionRequestCommand,
  AddEntityOwnerCommand,
  AddPolicyGrantCommand,
  AssociateEnvironmentRoleCommand,
  CancelMetadataGenerationRunCommand,
  CancelSubscriptionCommand,
  CreateAccountPoolCommand,
  CreateAssetCommand,
  CreateAssetFilterCommand,
  CreateAssetRevisionCommand,
  CreateAssetTypeCommand,
  CreateConnectionCommand,
  CreateDataProductCommand,
  CreateDataProductRevisionCommand,
  CreateDataSourceCommand,
  CreateDomainCommand,
  CreateDomainUnitCommand,
  CreateEnvironmentCommand,
  CreateEnvironmentActionCommand,
  CreateEnvironmentProfileCommand,
  CreateFormTypeCommand,
  CreateGlossaryCommand,
  CreateGlossaryTermCommand,
  CreateGroupProfileCommand,
  CreateListingChangeSetCommand,
  CreateProjectCommand,
  CreateProjectMembershipCommand,
  CreateProjectProfileCommand,
  CreateRuleCommand,
  CreateSubscriptionGrantCommand,
  CreateSubscriptionRequestCommand,
  CreateSubscriptionTargetCommand,
  CreateUserProfileCommand,
  DeleteAccountPoolCommand,
  DeleteAssetCommand,
  DeleteAssetFilterCommand,
  DeleteAssetTypeCommand,
  DeleteConnectionCommand,
  DeleteDataProductCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteDomainUnitCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentActionCommand,
  DeleteEnvironmentBlueprintConfigurationCommand,
  DeleteEnvironmentProfileCommand,
  DeleteFormTypeCommand,
  DeleteGlossaryCommand,
  DeleteGlossaryTermCommand,
  DeleteListingCommand,
  DeleteProjectCommand,
  DeleteProjectMembershipCommand,
  DeleteProjectProfileCommand,
  DeleteRuleCommand,
  DeleteSubscriptionGrantCommand,
  DeleteSubscriptionRequestCommand,
  DeleteSubscriptionTargetCommand,
  DeleteTimeSeriesDataPointsCommand,
  DisassociateEnvironmentRoleCommand,
  GetAccountPoolCommand,
  GetAssetCommand,
  GetAssetFilterCommand,
  GetAssetTypeCommand,
  GetConnectionCommand,
  GetDataProductCommand,
  GetDataSourceCommand,
  GetDataSourceRunCommand,
  GetDomainCommand,
  GetDomainUnitCommand,
  GetEnvironmentCommand,
  GetEnvironmentActionCommand,
  GetEnvironmentBlueprintCommand,
  GetEnvironmentBlueprintConfigurationCommand,
  GetEnvironmentCredentialsCommand,
  GetEnvironmentProfileCommand,
  GetFormTypeCommand,
  GetGlossaryCommand,
  GetGlossaryTermCommand,
  GetGroupProfileCommand,
  GetIamPortalLoginUrlCommand,
  GetJobRunCommand,
  GetLineageEventCommand,
  GetLineageNodeCommand,
  GetListingCommand,
  GetMetadataGenerationRunCommand,
  GetProjectCommand,
  GetProjectProfileCommand,
  GetRuleCommand,
  GetSubscriptionCommand,
  GetSubscriptionGrantCommand,
  GetSubscriptionRequestDetailsCommand,
  GetSubscriptionTargetCommand,
  GetTimeSeriesDataPointCommand,
  GetUserProfileCommand,
  ListAccountPoolsCommand,
  ListAccountsInAccountPoolCommand,
  ListAssetFiltersCommand,
  ListAssetRevisionsCommand,
  ListConnectionsCommand,
  ListDataProductRevisionsCommand,
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunsCommand,
  ListDataSourcesCommand,
  ListDomainsCommand,
  ListDomainUnitsForParentCommand,
  ListEntityOwnersCommand,
  ListEnvironmentActionsCommand,
  ListEnvironmentBlueprintConfigurationsCommand,
  ListEnvironmentBlueprintsCommand,
  ListEnvironmentProfilesCommand,
  ListEnvironmentsCommand,
  ListJobRunsCommand,
  ListLineageEventsCommand,
  ListLineageNodeHistoryCommand,
  ListMetadataGenerationRunsCommand,
  ListNotificationsCommand,
  ListPolicyGrantsCommand,
  ListProjectMembershipsCommand,
  ListProjectProfilesCommand,
  ListProjectsCommand,
  ListRulesCommand,
  ListSubscriptionGrantsCommand,
  ListSubscriptionRequestsCommand,
  ListSubscriptionsCommand,
  ListSubscriptionTargetsCommand,
  ListTagsForResourceCommand,
  ListTimeSeriesDataPointsCommand,
  PostLineageEventCommand,
  PostTimeSeriesDataPointsCommand,
  PutEnvironmentBlueprintConfigurationCommand,
  RejectPredictionsCommand,
  RejectSubscriptionRequestCommand,
  RemoveEntityOwnerCommand,
  RemovePolicyGrantCommand,
  RevokeSubscriptionCommand,
  SearchCommand,
  SearchGroupProfilesCommand,
  SearchListingsCommand,
  SearchTypesCommand,
  SearchUserProfilesCommand,
  StartDataSourceRunCommand,
  StartMetadataGenerationRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountPoolCommand,
  UpdateAssetFilterCommand,
  UpdateConnectionCommand,
  UpdateDataSourceCommand,
  UpdateDomainCommand,
  UpdateDomainUnitCommand,
  UpdateEnvironmentCommand,
  UpdateEnvironmentActionCommand,
  UpdateEnvironmentProfileCommand,
  UpdateGlossaryCommand,
  UpdateGlossaryTermCommand,
  UpdateGroupProfileCommand,
  UpdateProjectCommand,
  UpdateProjectProfileCommand,
  UpdateRuleCommand,
  UpdateSubscriptionGrantStatusCommand,
  UpdateSubscriptionRequestCommand,
  UpdateSubscriptionTargetCommand,
  UpdateUserProfileCommand,
};

export interface DataZone {
  /**
   * @see {@link AcceptPredictionsCommand}
   */
  acceptPredictions(
    args: AcceptPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptPredictionsCommandOutput>;
  acceptPredictions(
    args: AcceptPredictionsCommandInput,
    cb: (err: any, data?: AcceptPredictionsCommandOutput) => void
  ): void;
  acceptPredictions(
    args: AcceptPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPredictionsCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptSubscriptionRequestCommand}
   */
  acceptSubscriptionRequest(
    args: AcceptSubscriptionRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptSubscriptionRequestCommandOutput>;
  acceptSubscriptionRequest(
    args: AcceptSubscriptionRequestCommandInput,
    cb: (err: any, data?: AcceptSubscriptionRequestCommandOutput) => void
  ): void;
  acceptSubscriptionRequest(
    args: AcceptSubscriptionRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptSubscriptionRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link AddEntityOwnerCommand}
   */
  addEntityOwner(
    args: AddEntityOwnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddEntityOwnerCommandOutput>;
  addEntityOwner(args: AddEntityOwnerCommandInput, cb: (err: any, data?: AddEntityOwnerCommandOutput) => void): void;
  addEntityOwner(
    args: AddEntityOwnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddEntityOwnerCommandOutput) => void
  ): void;

  /**
   * @see {@link AddPolicyGrantCommand}
   */
  addPolicyGrant(
    args: AddPolicyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddPolicyGrantCommandOutput>;
  addPolicyGrant(args: AddPolicyGrantCommandInput, cb: (err: any, data?: AddPolicyGrantCommandOutput) => void): void;
  addPolicyGrant(
    args: AddPolicyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPolicyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateEnvironmentRoleCommand}
   */
  associateEnvironmentRole(
    args: AssociateEnvironmentRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEnvironmentRoleCommandOutput>;
  associateEnvironmentRole(
    args: AssociateEnvironmentRoleCommandInput,
    cb: (err: any, data?: AssociateEnvironmentRoleCommandOutput) => void
  ): void;
  associateEnvironmentRole(
    args: AssociateEnvironmentRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEnvironmentRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMetadataGenerationRunCommand}
   */
  cancelMetadataGenerationRun(
    args: CancelMetadataGenerationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMetadataGenerationRunCommandOutput>;
  cancelMetadataGenerationRun(
    args: CancelMetadataGenerationRunCommandInput,
    cb: (err: any, data?: CancelMetadataGenerationRunCommandOutput) => void
  ): void;
  cancelMetadataGenerationRun(
    args: CancelMetadataGenerationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMetadataGenerationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSubscriptionCommand}
   */
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSubscriptionCommandOutput>;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountPoolCommand}
   */
  createAccountPool(
    args: CreateAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountPoolCommandOutput>;
  createAccountPool(
    args: CreateAccountPoolCommandInput,
    cb: (err: any, data?: CreateAccountPoolCommandOutput) => void
  ): void;
  createAccountPool(
    args: CreateAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetCommand}
   */
  createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
  createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
  createAsset(
    args: CreateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetFilterCommand}
   */
  createAssetFilter(
    args: CreateAssetFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetFilterCommandOutput>;
  createAssetFilter(
    args: CreateAssetFilterCommandInput,
    cb: (err: any, data?: CreateAssetFilterCommandOutput) => void
  ): void;
  createAssetFilter(
    args: CreateAssetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetRevisionCommand}
   */
  createAssetRevision(
    args: CreateAssetRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetRevisionCommandOutput>;
  createAssetRevision(
    args: CreateAssetRevisionCommandInput,
    cb: (err: any, data?: CreateAssetRevisionCommandOutput) => void
  ): void;
  createAssetRevision(
    args: CreateAssetRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetTypeCommand}
   */
  createAssetType(
    args: CreateAssetTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetTypeCommandOutput>;
  createAssetType(args: CreateAssetTypeCommandInput, cb: (err: any, data?: CreateAssetTypeCommandOutput) => void): void;
  createAssetType(
    args: CreateAssetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataProductCommand}
   */
  createDataProduct(
    args: CreateDataProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataProductCommandOutput>;
  createDataProduct(
    args: CreateDataProductCommandInput,
    cb: (err: any, data?: CreateDataProductCommandOutput) => void
  ): void;
  createDataProduct(
    args: CreateDataProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataProductCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataProductRevisionCommand}
   */
  createDataProductRevision(
    args: CreateDataProductRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataProductRevisionCommandOutput>;
  createDataProductRevision(
    args: CreateDataProductRevisionCommandInput,
    cb: (err: any, data?: CreateDataProductRevisionCommandOutput) => void
  ): void;
  createDataProductRevision(
    args: CreateDataProductRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataProductRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainUnitCommand}
   */
  createDomainUnit(
    args: CreateDomainUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainUnitCommandOutput>;
  createDomainUnit(
    args: CreateDomainUnitCommandInput,
    cb: (err: any, data?: CreateDomainUnitCommandOutput) => void
  ): void;
  createDomainUnit(
    args: CreateDomainUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentActionCommand}
   */
  createEnvironmentAction(
    args: CreateEnvironmentActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentActionCommandOutput>;
  createEnvironmentAction(
    args: CreateEnvironmentActionCommandInput,
    cb: (err: any, data?: CreateEnvironmentActionCommandOutput) => void
  ): void;
  createEnvironmentAction(
    args: CreateEnvironmentActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentProfileCommand}
   */
  createEnvironmentProfile(
    args: CreateEnvironmentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentProfileCommandOutput>;
  createEnvironmentProfile(
    args: CreateEnvironmentProfileCommandInput,
    cb: (err: any, data?: CreateEnvironmentProfileCommandOutput) => void
  ): void;
  createEnvironmentProfile(
    args: CreateEnvironmentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFormTypeCommand}
   */
  createFormType(
    args: CreateFormTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFormTypeCommandOutput>;
  createFormType(args: CreateFormTypeCommandInput, cb: (err: any, data?: CreateFormTypeCommandOutput) => void): void;
  createFormType(
    args: CreateFormTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlossaryCommand}
   */
  createGlossary(
    args: CreateGlossaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlossaryCommandOutput>;
  createGlossary(args: CreateGlossaryCommandInput, cb: (err: any, data?: CreateGlossaryCommandOutput) => void): void;
  createGlossary(
    args: CreateGlossaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlossaryTermCommand}
   */
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlossaryTermCommandOutput>;
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    cb: (err: any, data?: CreateGlossaryTermCommandOutput) => void
  ): void;
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupProfileCommand}
   */
  createGroupProfile(
    args: CreateGroupProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupProfileCommandOutput>;
  createGroupProfile(
    args: CreateGroupProfileCommandInput,
    cb: (err: any, data?: CreateGroupProfileCommandOutput) => void
  ): void;
  createGroupProfile(
    args: CreateGroupProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListingChangeSetCommand}
   */
  createListingChangeSet(
    args: CreateListingChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateListingChangeSetCommandOutput>;
  createListingChangeSet(
    args: CreateListingChangeSetCommandInput,
    cb: (err: any, data?: CreateListingChangeSetCommandOutput) => void
  ): void;
  createListingChangeSet(
    args: CreateListingChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListingChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectMembershipCommand}
   */
  createProjectMembership(
    args: CreateProjectMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectMembershipCommandOutput>;
  createProjectMembership(
    args: CreateProjectMembershipCommandInput,
    cb: (err: any, data?: CreateProjectMembershipCommandOutput) => void
  ): void;
  createProjectMembership(
    args: CreateProjectMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectProfileCommand}
   */
  createProjectProfile(
    args: CreateProjectProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectProfileCommandOutput>;
  createProjectProfile(
    args: CreateProjectProfileCommandInput,
    cb: (err: any, data?: CreateProjectProfileCommandOutput) => void
  ): void;
  createProjectProfile(
    args: CreateProjectProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionGrantCommand}
   */
  createSubscriptionGrant(
    args: CreateSubscriptionGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionGrantCommandOutput>;
  createSubscriptionGrant(
    args: CreateSubscriptionGrantCommandInput,
    cb: (err: any, data?: CreateSubscriptionGrantCommandOutput) => void
  ): void;
  createSubscriptionGrant(
    args: CreateSubscriptionGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionRequestCommand}
   */
  createSubscriptionRequest(
    args: CreateSubscriptionRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionRequestCommandOutput>;
  createSubscriptionRequest(
    args: CreateSubscriptionRequestCommandInput,
    cb: (err: any, data?: CreateSubscriptionRequestCommandOutput) => void
  ): void;
  createSubscriptionRequest(
    args: CreateSubscriptionRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionTargetCommand}
   */
  createSubscriptionTarget(
    args: CreateSubscriptionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionTargetCommandOutput>;
  createSubscriptionTarget(
    args: CreateSubscriptionTargetCommandInput,
    cb: (err: any, data?: CreateSubscriptionTargetCommandOutput) => void
  ): void;
  createSubscriptionTarget(
    args: CreateSubscriptionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserProfileCommand}
   */
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountPoolCommand}
   */
  deleteAccountPool(
    args: DeleteAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPoolCommandOutput>;
  deleteAccountPool(
    args: DeleteAccountPoolCommandInput,
    cb: (err: any, data?: DeleteAccountPoolCommandOutput) => void
  ): void;
  deleteAccountPool(
    args: DeleteAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
  deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetFilterCommand}
   */
  deleteAssetFilter(
    args: DeleteAssetFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetFilterCommandOutput>;
  deleteAssetFilter(
    args: DeleteAssetFilterCommandInput,
    cb: (err: any, data?: DeleteAssetFilterCommandOutput) => void
  ): void;
  deleteAssetFilter(
    args: DeleteAssetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetTypeCommand}
   */
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetTypeCommandOutput>;
  deleteAssetType(args: DeleteAssetTypeCommandInput, cb: (err: any, data?: DeleteAssetTypeCommandOutput) => void): void;
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataProductCommand}
   */
  deleteDataProduct(
    args: DeleteDataProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataProductCommandOutput>;
  deleteDataProduct(
    args: DeleteDataProductCommandInput,
    cb: (err: any, data?: DeleteDataProductCommandOutput) => void
  ): void;
  deleteDataProduct(
    args: DeleteDataProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainUnitCommand}
   */
  deleteDomainUnit(
    args: DeleteDomainUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainUnitCommandOutput>;
  deleteDomainUnit(
    args: DeleteDomainUnitCommandInput,
    cb: (err: any, data?: DeleteDomainUnitCommandOutput) => void
  ): void;
  deleteDomainUnit(
    args: DeleteDomainUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentActionCommand}
   */
  deleteEnvironmentAction(
    args: DeleteEnvironmentActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentActionCommandOutput>;
  deleteEnvironmentAction(
    args: DeleteEnvironmentActionCommandInput,
    cb: (err: any, data?: DeleteEnvironmentActionCommandOutput) => void
  ): void;
  deleteEnvironmentAction(
    args: DeleteEnvironmentActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentBlueprintConfigurationCommand}
   */
  deleteEnvironmentBlueprintConfiguration(
    args: DeleteEnvironmentBlueprintConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentBlueprintConfigurationCommandOutput>;
  deleteEnvironmentBlueprintConfiguration(
    args: DeleteEnvironmentBlueprintConfigurationCommandInput,
    cb: (err: any, data?: DeleteEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;
  deleteEnvironmentBlueprintConfiguration(
    args: DeleteEnvironmentBlueprintConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentProfileCommand}
   */
  deleteEnvironmentProfile(
    args: DeleteEnvironmentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentProfileCommandOutput>;
  deleteEnvironmentProfile(
    args: DeleteEnvironmentProfileCommandInput,
    cb: (err: any, data?: DeleteEnvironmentProfileCommandOutput) => void
  ): void;
  deleteEnvironmentProfile(
    args: DeleteEnvironmentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFormTypeCommand}
   */
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFormTypeCommandOutput>;
  deleteFormType(args: DeleteFormTypeCommandInput, cb: (err: any, data?: DeleteFormTypeCommandOutput) => void): void;
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlossaryCommand}
   */
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlossaryCommandOutput>;
  deleteGlossary(args: DeleteGlossaryCommandInput, cb: (err: any, data?: DeleteGlossaryCommandOutput) => void): void;
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlossaryTermCommand}
   */
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlossaryTermCommandOutput>;
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    cb: (err: any, data?: DeleteGlossaryTermCommandOutput) => void
  ): void;
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListingCommand}
   */
  deleteListing(args: DeleteListingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteListingCommandOutput>;
  deleteListing(args: DeleteListingCommandInput, cb: (err: any, data?: DeleteListingCommandOutput) => void): void;
  deleteListing(
    args: DeleteListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectMembershipCommand}
   */
  deleteProjectMembership(
    args: DeleteProjectMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectMembershipCommandOutput>;
  deleteProjectMembership(
    args: DeleteProjectMembershipCommandInput,
    cb: (err: any, data?: DeleteProjectMembershipCommandOutput) => void
  ): void;
  deleteProjectMembership(
    args: DeleteProjectMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectProfileCommand}
   */
  deleteProjectProfile(
    args: DeleteProjectProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectProfileCommandOutput>;
  deleteProjectProfile(
    args: DeleteProjectProfileCommandInput,
    cb: (err: any, data?: DeleteProjectProfileCommandOutput) => void
  ): void;
  deleteProjectProfile(
    args: DeleteProjectProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionGrantCommand}
   */
  deleteSubscriptionGrant(
    args: DeleteSubscriptionGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionGrantCommandOutput>;
  deleteSubscriptionGrant(
    args: DeleteSubscriptionGrantCommandInput,
    cb: (err: any, data?: DeleteSubscriptionGrantCommandOutput) => void
  ): void;
  deleteSubscriptionGrant(
    args: DeleteSubscriptionGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionRequestCommand}
   */
  deleteSubscriptionRequest(
    args: DeleteSubscriptionRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionRequestCommandOutput>;
  deleteSubscriptionRequest(
    args: DeleteSubscriptionRequestCommandInput,
    cb: (err: any, data?: DeleteSubscriptionRequestCommandOutput) => void
  ): void;
  deleteSubscriptionRequest(
    args: DeleteSubscriptionRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionTargetCommand}
   */
  deleteSubscriptionTarget(
    args: DeleteSubscriptionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionTargetCommandOutput>;
  deleteSubscriptionTarget(
    args: DeleteSubscriptionTargetCommandInput,
    cb: (err: any, data?: DeleteSubscriptionTargetCommandOutput) => void
  ): void;
  deleteSubscriptionTarget(
    args: DeleteSubscriptionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTimeSeriesDataPointsCommand}
   */
  deleteTimeSeriesDataPoints(
    args: DeleteTimeSeriesDataPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTimeSeriesDataPointsCommandOutput>;
  deleteTimeSeriesDataPoints(
    args: DeleteTimeSeriesDataPointsCommandInput,
    cb: (err: any, data?: DeleteTimeSeriesDataPointsCommandOutput) => void
  ): void;
  deleteTimeSeriesDataPoints(
    args: DeleteTimeSeriesDataPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTimeSeriesDataPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEnvironmentRoleCommand}
   */
  disassociateEnvironmentRole(
    args: DisassociateEnvironmentRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEnvironmentRoleCommandOutput>;
  disassociateEnvironmentRole(
    args: DisassociateEnvironmentRoleCommandInput,
    cb: (err: any, data?: DisassociateEnvironmentRoleCommandOutput) => void
  ): void;
  disassociateEnvironmentRole(
    args: DisassociateEnvironmentRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEnvironmentRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPoolCommand}
   */
  getAccountPool(
    args: GetAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPoolCommandOutput>;
  getAccountPool(args: GetAccountPoolCommandInput, cb: (err: any, data?: GetAccountPoolCommandOutput) => void): void;
  getAccountPool(
    args: GetAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetCommand}
   */
  getAsset(args: GetAssetCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetCommandOutput>;
  getAsset(args: GetAssetCommandInput, cb: (err: any, data?: GetAssetCommandOutput) => void): void;
  getAsset(
    args: GetAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetFilterCommand}
   */
  getAssetFilter(
    args: GetAssetFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetFilterCommandOutput>;
  getAssetFilter(args: GetAssetFilterCommandInput, cb: (err: any, data?: GetAssetFilterCommandOutput) => void): void;
  getAssetFilter(
    args: GetAssetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetTypeCommand}
   */
  getAssetType(args: GetAssetTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetTypeCommandOutput>;
  getAssetType(args: GetAssetTypeCommandInput, cb: (err: any, data?: GetAssetTypeCommandOutput) => void): void;
  getAssetType(
    args: GetAssetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProductCommand}
   */
  getDataProduct(
    args: GetDataProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProductCommandOutput>;
  getDataProduct(args: GetDataProductCommandInput, cb: (err: any, data?: GetDataProductCommandOutput) => void): void;
  getDataProduct(
    args: GetDataProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProductCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceRunCommand}
   */
  getDataSourceRun(
    args: GetDataSourceRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceRunCommandOutput>;
  getDataSourceRun(
    args: GetDataSourceRunCommandInput,
    cb: (err: any, data?: GetDataSourceRunCommandOutput) => void
  ): void;
  getDataSourceRun(
    args: GetDataSourceRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainUnitCommand}
   */
  getDomainUnit(args: GetDomainUnitCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainUnitCommandOutput>;
  getDomainUnit(args: GetDomainUnitCommandInput, cb: (err: any, data?: GetDomainUnitCommandOutput) => void): void;
  getDomainUnit(
    args: GetDomainUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentActionCommand}
   */
  getEnvironmentAction(
    args: GetEnvironmentActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentActionCommandOutput>;
  getEnvironmentAction(
    args: GetEnvironmentActionCommandInput,
    cb: (err: any, data?: GetEnvironmentActionCommandOutput) => void
  ): void;
  getEnvironmentAction(
    args: GetEnvironmentActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentBlueprintCommand}
   */
  getEnvironmentBlueprint(
    args: GetEnvironmentBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentBlueprintCommandOutput>;
  getEnvironmentBlueprint(
    args: GetEnvironmentBlueprintCommandInput,
    cb: (err: any, data?: GetEnvironmentBlueprintCommandOutput) => void
  ): void;
  getEnvironmentBlueprint(
    args: GetEnvironmentBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentBlueprintConfigurationCommand}
   */
  getEnvironmentBlueprintConfiguration(
    args: GetEnvironmentBlueprintConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentBlueprintConfigurationCommandOutput>;
  getEnvironmentBlueprintConfiguration(
    args: GetEnvironmentBlueprintConfigurationCommandInput,
    cb: (err: any, data?: GetEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;
  getEnvironmentBlueprintConfiguration(
    args: GetEnvironmentBlueprintConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCredentialsCommand}
   */
  getEnvironmentCredentials(
    args: GetEnvironmentCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCredentialsCommandOutput>;
  getEnvironmentCredentials(
    args: GetEnvironmentCredentialsCommandInput,
    cb: (err: any, data?: GetEnvironmentCredentialsCommandOutput) => void
  ): void;
  getEnvironmentCredentials(
    args: GetEnvironmentCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentProfileCommand}
   */
  getEnvironmentProfile(
    args: GetEnvironmentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentProfileCommandOutput>;
  getEnvironmentProfile(
    args: GetEnvironmentProfileCommandInput,
    cb: (err: any, data?: GetEnvironmentProfileCommandOutput) => void
  ): void;
  getEnvironmentProfile(
    args: GetEnvironmentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFormTypeCommand}
   */
  getFormType(args: GetFormTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetFormTypeCommandOutput>;
  getFormType(args: GetFormTypeCommandInput, cb: (err: any, data?: GetFormTypeCommandOutput) => void): void;
  getFormType(
    args: GetFormTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlossaryCommand}
   */
  getGlossary(args: GetGlossaryCommandInput, options?: __HttpHandlerOptions): Promise<GetGlossaryCommandOutput>;
  getGlossary(args: GetGlossaryCommandInput, cb: (err: any, data?: GetGlossaryCommandOutput) => void): void;
  getGlossary(
    args: GetGlossaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlossaryTermCommand}
   */
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlossaryTermCommandOutput>;
  getGlossaryTerm(args: GetGlossaryTermCommandInput, cb: (err: any, data?: GetGlossaryTermCommandOutput) => void): void;
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupProfileCommand}
   */
  getGroupProfile(
    args: GetGroupProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupProfileCommandOutput>;
  getGroupProfile(args: GetGroupProfileCommandInput, cb: (err: any, data?: GetGroupProfileCommandOutput) => void): void;
  getGroupProfile(
    args: GetGroupProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIamPortalLoginUrlCommand}
   */
  getIamPortalLoginUrl(
    args: GetIamPortalLoginUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIamPortalLoginUrlCommandOutput>;
  getIamPortalLoginUrl(
    args: GetIamPortalLoginUrlCommandInput,
    cb: (err: any, data?: GetIamPortalLoginUrlCommandOutput) => void
  ): void;
  getIamPortalLoginUrl(
    args: GetIamPortalLoginUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIamPortalLoginUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobRunCommand}
   */
  getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
  getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
  getJobRun(
    args: GetJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLineageEventCommand}
   */
  getLineageEvent(
    args: GetLineageEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLineageEventCommandOutput>;
  getLineageEvent(args: GetLineageEventCommandInput, cb: (err: any, data?: GetLineageEventCommandOutput) => void): void;
  getLineageEvent(
    args: GetLineageEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLineageEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLineageNodeCommand}
   */
  getLineageNode(
    args: GetLineageNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLineageNodeCommandOutput>;
  getLineageNode(args: GetLineageNodeCommandInput, cb: (err: any, data?: GetLineageNodeCommandOutput) => void): void;
  getLineageNode(
    args: GetLineageNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLineageNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListingCommand}
   */
  getListing(args: GetListingCommandInput, options?: __HttpHandlerOptions): Promise<GetListingCommandOutput>;
  getListing(args: GetListingCommandInput, cb: (err: any, data?: GetListingCommandOutput) => void): void;
  getListing(
    args: GetListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetadataGenerationRunCommand}
   */
  getMetadataGenerationRun(
    args: GetMetadataGenerationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetadataGenerationRunCommandOutput>;
  getMetadataGenerationRun(
    args: GetMetadataGenerationRunCommandInput,
    cb: (err: any, data?: GetMetadataGenerationRunCommandOutput) => void
  ): void;
  getMetadataGenerationRun(
    args: GetMetadataGenerationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetadataGenerationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectCommand}
   */
  getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectProfileCommand}
   */
  getProjectProfile(
    args: GetProjectProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProjectProfileCommandOutput>;
  getProjectProfile(
    args: GetProjectProfileCommandInput,
    cb: (err: any, data?: GetProjectProfileCommandOutput) => void
  ): void;
  getProjectProfile(
    args: GetProjectProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleCommand}
   */
  getRule(args: GetRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleCommandOutput>;
  getRule(args: GetRuleCommandInput, cb: (err: any, data?: GetRuleCommandOutput) => void): void;
  getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(args: GetSubscriptionCommandInput, cb: (err: any, data?: GetSubscriptionCommandOutput) => void): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionGrantCommand}
   */
  getSubscriptionGrant(
    args: GetSubscriptionGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionGrantCommandOutput>;
  getSubscriptionGrant(
    args: GetSubscriptionGrantCommandInput,
    cb: (err: any, data?: GetSubscriptionGrantCommandOutput) => void
  ): void;
  getSubscriptionGrant(
    args: GetSubscriptionGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionRequestDetailsCommand}
   */
  getSubscriptionRequestDetails(
    args: GetSubscriptionRequestDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionRequestDetailsCommandOutput>;
  getSubscriptionRequestDetails(
    args: GetSubscriptionRequestDetailsCommandInput,
    cb: (err: any, data?: GetSubscriptionRequestDetailsCommandOutput) => void
  ): void;
  getSubscriptionRequestDetails(
    args: GetSubscriptionRequestDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionRequestDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionTargetCommand}
   */
  getSubscriptionTarget(
    args: GetSubscriptionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionTargetCommandOutput>;
  getSubscriptionTarget(
    args: GetSubscriptionTargetCommandInput,
    cb: (err: any, data?: GetSubscriptionTargetCommandOutput) => void
  ): void;
  getSubscriptionTarget(
    args: GetSubscriptionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimeSeriesDataPointCommand}
   */
  getTimeSeriesDataPoint(
    args: GetTimeSeriesDataPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTimeSeriesDataPointCommandOutput>;
  getTimeSeriesDataPoint(
    args: GetTimeSeriesDataPointCommandInput,
    cb: (err: any, data?: GetTimeSeriesDataPointCommandOutput) => void
  ): void;
  getTimeSeriesDataPoint(
    args: GetTimeSeriesDataPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimeSeriesDataPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserProfileCommand}
   */
  getUserProfile(
    args: GetUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserProfileCommandOutput>;
  getUserProfile(args: GetUserProfileCommandInput, cb: (err: any, data?: GetUserProfileCommandOutput) => void): void;
  getUserProfile(
    args: GetUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountPoolsCommand}
   */
  listAccountPools(
    args: ListAccountPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountPoolsCommandOutput>;
  listAccountPools(
    args: ListAccountPoolsCommandInput,
    cb: (err: any, data?: ListAccountPoolsCommandOutput) => void
  ): void;
  listAccountPools(
    args: ListAccountPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsInAccountPoolCommand}
   */
  listAccountsInAccountPool(
    args: ListAccountsInAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsInAccountPoolCommandOutput>;
  listAccountsInAccountPool(
    args: ListAccountsInAccountPoolCommandInput,
    cb: (err: any, data?: ListAccountsInAccountPoolCommandOutput) => void
  ): void;
  listAccountsInAccountPool(
    args: ListAccountsInAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsInAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetFiltersCommand}
   */
  listAssetFilters(
    args: ListAssetFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetFiltersCommandOutput>;
  listAssetFilters(
    args: ListAssetFiltersCommandInput,
    cb: (err: any, data?: ListAssetFiltersCommandOutput) => void
  ): void;
  listAssetFilters(
    args: ListAssetFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetRevisionsCommand}
   */
  listAssetRevisions(
    args: ListAssetRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetRevisionsCommandOutput>;
  listAssetRevisions(
    args: ListAssetRevisionsCommandInput,
    cb: (err: any, data?: ListAssetRevisionsCommandOutput) => void
  ): void;
  listAssetRevisions(
    args: ListAssetRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataProductRevisionsCommand}
   */
  listDataProductRevisions(
    args: ListDataProductRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataProductRevisionsCommandOutput>;
  listDataProductRevisions(
    args: ListDataProductRevisionsCommandInput,
    cb: (err: any, data?: ListDataProductRevisionsCommandOutput) => void
  ): void;
  listDataProductRevisions(
    args: ListDataProductRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataProductRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourceRunActivitiesCommand}
   */
  listDataSourceRunActivities(
    args: ListDataSourceRunActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourceRunActivitiesCommandOutput>;
  listDataSourceRunActivities(
    args: ListDataSourceRunActivitiesCommandInput,
    cb: (err: any, data?: ListDataSourceRunActivitiesCommandOutput) => void
  ): void;
  listDataSourceRunActivities(
    args: ListDataSourceRunActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourceRunActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourceRunsCommand}
   */
  listDataSourceRuns(
    args: ListDataSourceRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourceRunsCommandOutput>;
  listDataSourceRuns(
    args: ListDataSourceRunsCommandInput,
    cb: (err: any, data?: ListDataSourceRunsCommandOutput) => void
  ): void;
  listDataSourceRuns(
    args: ListDataSourceRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourceRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainUnitsForParentCommand}
   */
  listDomainUnitsForParent(
    args: ListDomainUnitsForParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainUnitsForParentCommandOutput>;
  listDomainUnitsForParent(
    args: ListDomainUnitsForParentCommandInput,
    cb: (err: any, data?: ListDomainUnitsForParentCommandOutput) => void
  ): void;
  listDomainUnitsForParent(
    args: ListDomainUnitsForParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainUnitsForParentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityOwnersCommand}
   */
  listEntityOwners(
    args: ListEntityOwnersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntityOwnersCommandOutput>;
  listEntityOwners(
    args: ListEntityOwnersCommandInput,
    cb: (err: any, data?: ListEntityOwnersCommandOutput) => void
  ): void;
  listEntityOwners(
    args: ListEntityOwnersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntityOwnersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentActionsCommand}
   */
  listEnvironmentActions(
    args: ListEnvironmentActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentActionsCommandOutput>;
  listEnvironmentActions(
    args: ListEnvironmentActionsCommandInput,
    cb: (err: any, data?: ListEnvironmentActionsCommandOutput) => void
  ): void;
  listEnvironmentActions(
    args: ListEnvironmentActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentBlueprintConfigurationsCommand}
   */
  listEnvironmentBlueprintConfigurations(
    args: ListEnvironmentBlueprintConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentBlueprintConfigurationsCommandOutput>;
  listEnvironmentBlueprintConfigurations(
    args: ListEnvironmentBlueprintConfigurationsCommandInput,
    cb: (err: any, data?: ListEnvironmentBlueprintConfigurationsCommandOutput) => void
  ): void;
  listEnvironmentBlueprintConfigurations(
    args: ListEnvironmentBlueprintConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentBlueprintConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentBlueprintsCommand}
   */
  listEnvironmentBlueprints(
    args: ListEnvironmentBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentBlueprintsCommandOutput>;
  listEnvironmentBlueprints(
    args: ListEnvironmentBlueprintsCommandInput,
    cb: (err: any, data?: ListEnvironmentBlueprintsCommandOutput) => void
  ): void;
  listEnvironmentBlueprints(
    args: ListEnvironmentBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentProfilesCommand}
   */
  listEnvironmentProfiles(
    args: ListEnvironmentProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentProfilesCommandOutput>;
  listEnvironmentProfiles(
    args: ListEnvironmentProfilesCommandInput,
    cb: (err: any, data?: ListEnvironmentProfilesCommandOutput) => void
  ): void;
  listEnvironmentProfiles(
    args: ListEnvironmentProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobRunsCommand}
   */
  listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLineageEventsCommand}
   */
  listLineageEvents(
    args: ListLineageEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLineageEventsCommandOutput>;
  listLineageEvents(
    args: ListLineageEventsCommandInput,
    cb: (err: any, data?: ListLineageEventsCommandOutput) => void
  ): void;
  listLineageEvents(
    args: ListLineageEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLineageEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLineageNodeHistoryCommand}
   */
  listLineageNodeHistory(
    args: ListLineageNodeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLineageNodeHistoryCommandOutput>;
  listLineageNodeHistory(
    args: ListLineageNodeHistoryCommandInput,
    cb: (err: any, data?: ListLineageNodeHistoryCommandOutput) => void
  ): void;
  listLineageNodeHistory(
    args: ListLineageNodeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLineageNodeHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetadataGenerationRunsCommand}
   */
  listMetadataGenerationRuns(
    args: ListMetadataGenerationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetadataGenerationRunsCommandOutput>;
  listMetadataGenerationRuns(
    args: ListMetadataGenerationRunsCommandInput,
    cb: (err: any, data?: ListMetadataGenerationRunsCommandOutput) => void
  ): void;
  listMetadataGenerationRuns(
    args: ListMetadataGenerationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetadataGenerationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyGrantsCommand}
   */
  listPolicyGrants(
    args: ListPolicyGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyGrantsCommandOutput>;
  listPolicyGrants(
    args: ListPolicyGrantsCommandInput,
    cb: (err: any, data?: ListPolicyGrantsCommandOutput) => void
  ): void;
  listPolicyGrants(
    args: ListPolicyGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectMembershipsCommand}
   */
  listProjectMemberships(
    args: ListProjectMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectMembershipsCommandOutput>;
  listProjectMemberships(
    args: ListProjectMembershipsCommandInput,
    cb: (err: any, data?: ListProjectMembershipsCommandOutput) => void
  ): void;
  listProjectMemberships(
    args: ListProjectMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectProfilesCommand}
   */
  listProjectProfiles(
    args: ListProjectProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectProfilesCommandOutput>;
  listProjectProfiles(
    args: ListProjectProfilesCommandInput,
    cb: (err: any, data?: ListProjectProfilesCommandOutput) => void
  ): void;
  listProjectProfiles(
    args: ListProjectProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionGrantsCommand}
   */
  listSubscriptionGrants(
    args: ListSubscriptionGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionGrantsCommandOutput>;
  listSubscriptionGrants(
    args: ListSubscriptionGrantsCommandInput,
    cb: (err: any, data?: ListSubscriptionGrantsCommandOutput) => void
  ): void;
  listSubscriptionGrants(
    args: ListSubscriptionGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionRequestsCommand}
   */
  listSubscriptionRequests(
    args: ListSubscriptionRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionRequestsCommandOutput>;
  listSubscriptionRequests(
    args: ListSubscriptionRequestsCommandInput,
    cb: (err: any, data?: ListSubscriptionRequestsCommandOutput) => void
  ): void;
  listSubscriptionRequests(
    args: ListSubscriptionRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionTargetsCommand}
   */
  listSubscriptionTargets(
    args: ListSubscriptionTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionTargetsCommandOutput>;
  listSubscriptionTargets(
    args: ListSubscriptionTargetsCommandInput,
    cb: (err: any, data?: ListSubscriptionTargetsCommandOutput) => void
  ): void;
  listSubscriptionTargets(
    args: ListSubscriptionTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTimeSeriesDataPointsCommand}
   */
  listTimeSeriesDataPoints(
    args: ListTimeSeriesDataPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTimeSeriesDataPointsCommandOutput>;
  listTimeSeriesDataPoints(
    args: ListTimeSeriesDataPointsCommandInput,
    cb: (err: any, data?: ListTimeSeriesDataPointsCommandOutput) => void
  ): void;
  listTimeSeriesDataPoints(
    args: ListTimeSeriesDataPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTimeSeriesDataPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link PostLineageEventCommand}
   */
  postLineageEvent(
    args: PostLineageEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostLineageEventCommandOutput>;
  postLineageEvent(
    args: PostLineageEventCommandInput,
    cb: (err: any, data?: PostLineageEventCommandOutput) => void
  ): void;
  postLineageEvent(
    args: PostLineageEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostLineageEventCommandOutput) => void
  ): void;

  /**
   * @see {@link PostTimeSeriesDataPointsCommand}
   */
  postTimeSeriesDataPoints(
    args: PostTimeSeriesDataPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostTimeSeriesDataPointsCommandOutput>;
  postTimeSeriesDataPoints(
    args: PostTimeSeriesDataPointsCommandInput,
    cb: (err: any, data?: PostTimeSeriesDataPointsCommandOutput) => void
  ): void;
  postTimeSeriesDataPoints(
    args: PostTimeSeriesDataPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostTimeSeriesDataPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEnvironmentBlueprintConfigurationCommand}
   */
  putEnvironmentBlueprintConfiguration(
    args: PutEnvironmentBlueprintConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEnvironmentBlueprintConfigurationCommandOutput>;
  putEnvironmentBlueprintConfiguration(
    args: PutEnvironmentBlueprintConfigurationCommandInput,
    cb: (err: any, data?: PutEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;
  putEnvironmentBlueprintConfiguration(
    args: PutEnvironmentBlueprintConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEnvironmentBlueprintConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectPredictionsCommand}
   */
  rejectPredictions(
    args: RejectPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectPredictionsCommandOutput>;
  rejectPredictions(
    args: RejectPredictionsCommandInput,
    cb: (err: any, data?: RejectPredictionsCommandOutput) => void
  ): void;
  rejectPredictions(
    args: RejectPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectPredictionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectSubscriptionRequestCommand}
   */
  rejectSubscriptionRequest(
    args: RejectSubscriptionRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectSubscriptionRequestCommandOutput>;
  rejectSubscriptionRequest(
    args: RejectSubscriptionRequestCommandInput,
    cb: (err: any, data?: RejectSubscriptionRequestCommandOutput) => void
  ): void;
  rejectSubscriptionRequest(
    args: RejectSubscriptionRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSubscriptionRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveEntityOwnerCommand}
   */
  removeEntityOwner(
    args: RemoveEntityOwnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveEntityOwnerCommandOutput>;
  removeEntityOwner(
    args: RemoveEntityOwnerCommandInput,
    cb: (err: any, data?: RemoveEntityOwnerCommandOutput) => void
  ): void;
  removeEntityOwner(
    args: RemoveEntityOwnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveEntityOwnerCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePolicyGrantCommand}
   */
  removePolicyGrant(
    args: RemovePolicyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePolicyGrantCommandOutput>;
  removePolicyGrant(
    args: RemovePolicyGrantCommandInput,
    cb: (err: any, data?: RemovePolicyGrantCommandOutput) => void
  ): void;
  removePolicyGrant(
    args: RemovePolicyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePolicyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSubscriptionCommand}
   */
  revokeSubscription(
    args: RevokeSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSubscriptionCommandOutput>;
  revokeSubscription(
    args: RevokeSubscriptionCommandInput,
    cb: (err: any, data?: RevokeSubscriptionCommandOutput) => void
  ): void;
  revokeSubscription(
    args: RevokeSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCommand}
   */
  search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGroupProfilesCommand}
   */
  searchGroupProfiles(
    args: SearchGroupProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchGroupProfilesCommandOutput>;
  searchGroupProfiles(
    args: SearchGroupProfilesCommandInput,
    cb: (err: any, data?: SearchGroupProfilesCommandOutput) => void
  ): void;
  searchGroupProfiles(
    args: SearchGroupProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGroupProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchListingsCommand}
   */
  searchListings(
    args: SearchListingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchListingsCommandOutput>;
  searchListings(args: SearchListingsCommandInput, cb: (err: any, data?: SearchListingsCommandOutput) => void): void;
  searchListings(
    args: SearchListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTypesCommand}
   */
  searchTypes(args: SearchTypesCommandInput, options?: __HttpHandlerOptions): Promise<SearchTypesCommandOutput>;
  searchTypes(args: SearchTypesCommandInput, cb: (err: any, data?: SearchTypesCommandOutput) => void): void;
  searchTypes(
    args: SearchTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUserProfilesCommand}
   */
  searchUserProfiles(
    args: SearchUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchUserProfilesCommandOutput>;
  searchUserProfiles(
    args: SearchUserProfilesCommandInput,
    cb: (err: any, data?: SearchUserProfilesCommandOutput) => void
  ): void;
  searchUserProfiles(
    args: SearchUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUserProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataSourceRunCommand}
   */
  startDataSourceRun(
    args: StartDataSourceRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataSourceRunCommandOutput>;
  startDataSourceRun(
    args: StartDataSourceRunCommandInput,
    cb: (err: any, data?: StartDataSourceRunCommandOutput) => void
  ): void;
  startDataSourceRun(
    args: StartDataSourceRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataSourceRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMetadataGenerationRunCommand}
   */
  startMetadataGenerationRun(
    args: StartMetadataGenerationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMetadataGenerationRunCommandOutput>;
  startMetadataGenerationRun(
    args: StartMetadataGenerationRunCommandInput,
    cb: (err: any, data?: StartMetadataGenerationRunCommandOutput) => void
  ): void;
  startMetadataGenerationRun(
    args: StartMetadataGenerationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMetadataGenerationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountPoolCommand}
   */
  updateAccountPool(
    args: UpdateAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountPoolCommandOutput>;
  updateAccountPool(
    args: UpdateAccountPoolCommandInput,
    cb: (err: any, data?: UpdateAccountPoolCommandOutput) => void
  ): void;
  updateAccountPool(
    args: UpdateAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetFilterCommand}
   */
  updateAssetFilter(
    args: UpdateAssetFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetFilterCommandOutput>;
  updateAssetFilter(
    args: UpdateAssetFilterCommandInput,
    cb: (err: any, data?: UpdateAssetFilterCommandOutput) => void
  ): void;
  updateAssetFilter(
    args: UpdateAssetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
  updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainUnitCommand}
   */
  updateDomainUnit(
    args: UpdateDomainUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainUnitCommandOutput>;
  updateDomainUnit(
    args: UpdateDomainUnitCommandInput,
    cb: (err: any, data?: UpdateDomainUnitCommandOutput) => void
  ): void;
  updateDomainUnit(
    args: UpdateDomainUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentActionCommand}
   */
  updateEnvironmentAction(
    args: UpdateEnvironmentActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentActionCommandOutput>;
  updateEnvironmentAction(
    args: UpdateEnvironmentActionCommandInput,
    cb: (err: any, data?: UpdateEnvironmentActionCommandOutput) => void
  ): void;
  updateEnvironmentAction(
    args: UpdateEnvironmentActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentProfileCommand}
   */
  updateEnvironmentProfile(
    args: UpdateEnvironmentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentProfileCommandOutput>;
  updateEnvironmentProfile(
    args: UpdateEnvironmentProfileCommandInput,
    cb: (err: any, data?: UpdateEnvironmentProfileCommandOutput) => void
  ): void;
  updateEnvironmentProfile(
    args: UpdateEnvironmentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlossaryCommand}
   */
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlossaryCommandOutput>;
  updateGlossary(args: UpdateGlossaryCommandInput, cb: (err: any, data?: UpdateGlossaryCommandOutput) => void): void;
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlossaryTermCommand}
   */
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlossaryTermCommandOutput>;
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    cb: (err: any, data?: UpdateGlossaryTermCommandOutput) => void
  ): void;
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupProfileCommand}
   */
  updateGroupProfile(
    args: UpdateGroupProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupProfileCommandOutput>;
  updateGroupProfile(
    args: UpdateGroupProfileCommandInput,
    cb: (err: any, data?: UpdateGroupProfileCommandOutput) => void
  ): void;
  updateGroupProfile(
    args: UpdateGroupProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectProfileCommand}
   */
  updateProjectProfile(
    args: UpdateProjectProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectProfileCommandOutput>;
  updateProjectProfile(
    args: UpdateProjectProfileCommandInput,
    cb: (err: any, data?: UpdateProjectProfileCommandOutput) => void
  ): void;
  updateProjectProfile(
    args: UpdateProjectProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleCommand}
   */
  updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionGrantStatusCommand}
   */
  updateSubscriptionGrantStatus(
    args: UpdateSubscriptionGrantStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionGrantStatusCommandOutput>;
  updateSubscriptionGrantStatus(
    args: UpdateSubscriptionGrantStatusCommandInput,
    cb: (err: any, data?: UpdateSubscriptionGrantStatusCommandOutput) => void
  ): void;
  updateSubscriptionGrantStatus(
    args: UpdateSubscriptionGrantStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionGrantStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionRequestCommand}
   */
  updateSubscriptionRequest(
    args: UpdateSubscriptionRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionRequestCommandOutput>;
  updateSubscriptionRequest(
    args: UpdateSubscriptionRequestCommandInput,
    cb: (err: any, data?: UpdateSubscriptionRequestCommandOutput) => void
  ): void;
  updateSubscriptionRequest(
    args: UpdateSubscriptionRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionTargetCommand}
   */
  updateSubscriptionTarget(
    args: UpdateSubscriptionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionTargetCommandOutput>;
  updateSubscriptionTarget(
    args: UpdateSubscriptionTargetCommandInput,
    cb: (err: any, data?: UpdateSubscriptionTargetCommandOutput) => void
  ): void;
  updateSubscriptionTarget(
    args: UpdateSubscriptionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserProfileCommand}
   */
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon DataZone is a data management service that enables you to catalog, discover,
 *          govern, share, and analyze your data. With Amazon DataZone, you can share and access your
 *          data across accounts and supported regions. Amazon DataZone simplifies your experience
 *          across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon
 *          Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>
 * @public
 */
export class DataZone extends DataZoneClient implements DataZone {}
createAggregatedClient(commands, DataZone);
