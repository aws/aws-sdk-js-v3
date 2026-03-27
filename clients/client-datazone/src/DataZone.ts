// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptPredictionsCommandInput,
  type AcceptPredictionsCommandOutput,
  AcceptPredictionsCommand,
} from "./commands/AcceptPredictionsCommand";
import {
  type AcceptSubscriptionRequestCommandInput,
  type AcceptSubscriptionRequestCommandOutput,
  AcceptSubscriptionRequestCommand,
} from "./commands/AcceptSubscriptionRequestCommand";
import {
  type AddEntityOwnerCommandInput,
  type AddEntityOwnerCommandOutput,
  AddEntityOwnerCommand,
} from "./commands/AddEntityOwnerCommand";
import {
  type AddPolicyGrantCommandInput,
  type AddPolicyGrantCommandOutput,
  AddPolicyGrantCommand,
} from "./commands/AddPolicyGrantCommand";
import {
  type AssociateEnvironmentRoleCommandInput,
  type AssociateEnvironmentRoleCommandOutput,
  AssociateEnvironmentRoleCommand,
} from "./commands/AssociateEnvironmentRoleCommand";
import {
  type AssociateGovernedTermsCommandInput,
  type AssociateGovernedTermsCommandOutput,
  AssociateGovernedTermsCommand,
} from "./commands/AssociateGovernedTermsCommand";
import {
  type BatchGetAttributesMetadataCommandInput,
  type BatchGetAttributesMetadataCommandOutput,
  BatchGetAttributesMetadataCommand,
} from "./commands/BatchGetAttributesMetadataCommand";
import {
  type BatchPutAttributesMetadataCommandInput,
  type BatchPutAttributesMetadataCommandOutput,
  BatchPutAttributesMetadataCommand,
} from "./commands/BatchPutAttributesMetadataCommand";
import {
  type CancelMetadataGenerationRunCommandInput,
  type CancelMetadataGenerationRunCommandOutput,
  CancelMetadataGenerationRunCommand,
} from "./commands/CancelMetadataGenerationRunCommand";
import {
  type CancelSubscriptionCommandInput,
  type CancelSubscriptionCommandOutput,
  CancelSubscriptionCommand,
} from "./commands/CancelSubscriptionCommand";
import {
  type CreateAccountPoolCommandInput,
  type CreateAccountPoolCommandOutput,
  CreateAccountPoolCommand,
} from "./commands/CreateAccountPoolCommand";
import {
  type CreateAssetCommandInput,
  type CreateAssetCommandOutput,
  CreateAssetCommand,
} from "./commands/CreateAssetCommand";
import {
  type CreateAssetFilterCommandInput,
  type CreateAssetFilterCommandOutput,
  CreateAssetFilterCommand,
} from "./commands/CreateAssetFilterCommand";
import {
  type CreateAssetRevisionCommandInput,
  type CreateAssetRevisionCommandOutput,
  CreateAssetRevisionCommand,
} from "./commands/CreateAssetRevisionCommand";
import {
  type CreateAssetTypeCommandInput,
  type CreateAssetTypeCommandOutput,
  CreateAssetTypeCommand,
} from "./commands/CreateAssetTypeCommand";
import {
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateConnectionCommand,
} from "./commands/CreateConnectionCommand";
import {
  type CreateDataProductCommandInput,
  type CreateDataProductCommandOutput,
  CreateDataProductCommand,
} from "./commands/CreateDataProductCommand";
import {
  type CreateDataProductRevisionCommandInput,
  type CreateDataProductRevisionCommandOutput,
  CreateDataProductRevisionCommand,
} from "./commands/CreateDataProductRevisionCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type CreateDomainUnitCommandInput,
  type CreateDomainUnitCommandOutput,
  CreateDomainUnitCommand,
} from "./commands/CreateDomainUnitCommand";
import {
  type CreateEnvironmentActionCommandInput,
  type CreateEnvironmentActionCommandOutput,
  CreateEnvironmentActionCommand,
} from "./commands/CreateEnvironmentActionCommand";
import {
  type CreateEnvironmentBlueprintCommandInput,
  type CreateEnvironmentBlueprintCommandOutput,
  CreateEnvironmentBlueprintCommand,
} from "./commands/CreateEnvironmentBlueprintCommand";
import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreateEnvironmentProfileCommandInput,
  type CreateEnvironmentProfileCommandOutput,
  CreateEnvironmentProfileCommand,
} from "./commands/CreateEnvironmentProfileCommand";
import {
  type CreateFormTypeCommandInput,
  type CreateFormTypeCommandOutput,
  CreateFormTypeCommand,
} from "./commands/CreateFormTypeCommand";
import {
  type CreateGlossaryCommandInput,
  type CreateGlossaryCommandOutput,
  CreateGlossaryCommand,
} from "./commands/CreateGlossaryCommand";
import {
  type CreateGlossaryTermCommandInput,
  type CreateGlossaryTermCommandOutput,
  CreateGlossaryTermCommand,
} from "./commands/CreateGlossaryTermCommand";
import {
  type CreateGroupProfileCommandInput,
  type CreateGroupProfileCommandOutput,
  CreateGroupProfileCommand,
} from "./commands/CreateGroupProfileCommand";
import {
  type CreateListingChangeSetCommandInput,
  type CreateListingChangeSetCommandOutput,
  CreateListingChangeSetCommand,
} from "./commands/CreateListingChangeSetCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type CreateProjectMembershipCommandInput,
  type CreateProjectMembershipCommandOutput,
  CreateProjectMembershipCommand,
} from "./commands/CreateProjectMembershipCommand";
import {
  type CreateProjectProfileCommandInput,
  type CreateProjectProfileCommandOutput,
  CreateProjectProfileCommand,
} from "./commands/CreateProjectProfileCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateSubscriptionGrantCommandInput,
  type CreateSubscriptionGrantCommandOutput,
  CreateSubscriptionGrantCommand,
} from "./commands/CreateSubscriptionGrantCommand";
import {
  type CreateSubscriptionRequestCommandInput,
  type CreateSubscriptionRequestCommandOutput,
  CreateSubscriptionRequestCommand,
} from "./commands/CreateSubscriptionRequestCommand";
import {
  type CreateSubscriptionTargetCommandInput,
  type CreateSubscriptionTargetCommandOutput,
  CreateSubscriptionTargetCommand,
} from "./commands/CreateSubscriptionTargetCommand";
import {
  type CreateUserProfileCommandInput,
  type CreateUserProfileCommandOutput,
  CreateUserProfileCommand,
} from "./commands/CreateUserProfileCommand";
import {
  type DeleteAccountPoolCommandInput,
  type DeleteAccountPoolCommandOutput,
  DeleteAccountPoolCommand,
} from "./commands/DeleteAccountPoolCommand";
import {
  type DeleteAssetCommandInput,
  type DeleteAssetCommandOutput,
  DeleteAssetCommand,
} from "./commands/DeleteAssetCommand";
import {
  type DeleteAssetFilterCommandInput,
  type DeleteAssetFilterCommandOutput,
  DeleteAssetFilterCommand,
} from "./commands/DeleteAssetFilterCommand";
import {
  type DeleteAssetTypeCommandInput,
  type DeleteAssetTypeCommandOutput,
  DeleteAssetTypeCommand,
} from "./commands/DeleteAssetTypeCommand";
import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteDataExportConfigurationCommandInput,
  type DeleteDataExportConfigurationCommandOutput,
  DeleteDataExportConfigurationCommand,
} from "./commands/DeleteDataExportConfigurationCommand";
import {
  type DeleteDataProductCommandInput,
  type DeleteDataProductCommandOutput,
  DeleteDataProductCommand,
} from "./commands/DeleteDataProductCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteDomainUnitCommandInput,
  type DeleteDomainUnitCommandOutput,
  DeleteDomainUnitCommand,
} from "./commands/DeleteDomainUnitCommand";
import {
  type DeleteEnvironmentActionCommandInput,
  type DeleteEnvironmentActionCommandOutput,
  DeleteEnvironmentActionCommand,
} from "./commands/DeleteEnvironmentActionCommand";
import {
  type DeleteEnvironmentBlueprintCommandInput,
  type DeleteEnvironmentBlueprintCommandOutput,
  DeleteEnvironmentBlueprintCommand,
} from "./commands/DeleteEnvironmentBlueprintCommand";
import {
  type DeleteEnvironmentBlueprintConfigurationCommandInput,
  type DeleteEnvironmentBlueprintConfigurationCommandOutput,
  DeleteEnvironmentBlueprintConfigurationCommand,
} from "./commands/DeleteEnvironmentBlueprintConfigurationCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeleteEnvironmentProfileCommandInput,
  type DeleteEnvironmentProfileCommandOutput,
  DeleteEnvironmentProfileCommand,
} from "./commands/DeleteEnvironmentProfileCommand";
import {
  type DeleteFormTypeCommandInput,
  type DeleteFormTypeCommandOutput,
  DeleteFormTypeCommand,
} from "./commands/DeleteFormTypeCommand";
import {
  type DeleteGlossaryCommandInput,
  type DeleteGlossaryCommandOutput,
  DeleteGlossaryCommand,
} from "./commands/DeleteGlossaryCommand";
import {
  type DeleteGlossaryTermCommandInput,
  type DeleteGlossaryTermCommandOutput,
  DeleteGlossaryTermCommand,
} from "./commands/DeleteGlossaryTermCommand";
import {
  type DeleteListingCommandInput,
  type DeleteListingCommandOutput,
  DeleteListingCommand,
} from "./commands/DeleteListingCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteProjectMembershipCommandInput,
  type DeleteProjectMembershipCommandOutput,
  DeleteProjectMembershipCommand,
} from "./commands/DeleteProjectMembershipCommand";
import {
  type DeleteProjectProfileCommandInput,
  type DeleteProjectProfileCommandOutput,
  DeleteProjectProfileCommand,
} from "./commands/DeleteProjectProfileCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteSubscriptionGrantCommandInput,
  type DeleteSubscriptionGrantCommandOutput,
  DeleteSubscriptionGrantCommand,
} from "./commands/DeleteSubscriptionGrantCommand";
import {
  type DeleteSubscriptionRequestCommandInput,
  type DeleteSubscriptionRequestCommandOutput,
  DeleteSubscriptionRequestCommand,
} from "./commands/DeleteSubscriptionRequestCommand";
import {
  type DeleteSubscriptionTargetCommandInput,
  type DeleteSubscriptionTargetCommandOutput,
  DeleteSubscriptionTargetCommand,
} from "./commands/DeleteSubscriptionTargetCommand";
import {
  type DeleteTimeSeriesDataPointsCommandInput,
  type DeleteTimeSeriesDataPointsCommandOutput,
  DeleteTimeSeriesDataPointsCommand,
} from "./commands/DeleteTimeSeriesDataPointsCommand";
import {
  type DisassociateEnvironmentRoleCommandInput,
  type DisassociateEnvironmentRoleCommandOutput,
  DisassociateEnvironmentRoleCommand,
} from "./commands/DisassociateEnvironmentRoleCommand";
import {
  type DisassociateGovernedTermsCommandInput,
  type DisassociateGovernedTermsCommandOutput,
  DisassociateGovernedTermsCommand,
} from "./commands/DisassociateGovernedTermsCommand";
import {
  type GetAccountPoolCommandInput,
  type GetAccountPoolCommandOutput,
  GetAccountPoolCommand,
} from "./commands/GetAccountPoolCommand";
import { type GetAssetCommandInput, type GetAssetCommandOutput, GetAssetCommand } from "./commands/GetAssetCommand";
import {
  type GetAssetFilterCommandInput,
  type GetAssetFilterCommandOutput,
  GetAssetFilterCommand,
} from "./commands/GetAssetFilterCommand";
import {
  type GetAssetTypeCommandInput,
  type GetAssetTypeCommandOutput,
  GetAssetTypeCommand,
} from "./commands/GetAssetTypeCommand";
import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "./commands/GetConnectionCommand";
import {
  type GetDataExportConfigurationCommandInput,
  type GetDataExportConfigurationCommandOutput,
  GetDataExportConfigurationCommand,
} from "./commands/GetDataExportConfigurationCommand";
import {
  type GetDataProductCommandInput,
  type GetDataProductCommandOutput,
  GetDataProductCommand,
} from "./commands/GetDataProductCommand";
import {
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDataSourceCommand,
} from "./commands/GetDataSourceCommand";
import {
  type GetDataSourceRunCommandInput,
  type GetDataSourceRunCommandOutput,
  GetDataSourceRunCommand,
} from "./commands/GetDataSourceRunCommand";
import { type GetDomainCommandInput, type GetDomainCommandOutput, GetDomainCommand } from "./commands/GetDomainCommand";
import {
  type GetDomainUnitCommandInput,
  type GetDomainUnitCommandOutput,
  GetDomainUnitCommand,
} from "./commands/GetDomainUnitCommand";
import {
  type GetEnvironmentActionCommandInput,
  type GetEnvironmentActionCommandOutput,
  GetEnvironmentActionCommand,
} from "./commands/GetEnvironmentActionCommand";
import {
  type GetEnvironmentBlueprintCommandInput,
  type GetEnvironmentBlueprintCommandOutput,
  GetEnvironmentBlueprintCommand,
} from "./commands/GetEnvironmentBlueprintCommand";
import {
  type GetEnvironmentBlueprintConfigurationCommandInput,
  type GetEnvironmentBlueprintConfigurationCommandOutput,
  GetEnvironmentBlueprintConfigurationCommand,
} from "./commands/GetEnvironmentBlueprintConfigurationCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetEnvironmentCredentialsCommandInput,
  type GetEnvironmentCredentialsCommandOutput,
  GetEnvironmentCredentialsCommand,
} from "./commands/GetEnvironmentCredentialsCommand";
import {
  type GetEnvironmentProfileCommandInput,
  type GetEnvironmentProfileCommandOutput,
  GetEnvironmentProfileCommand,
} from "./commands/GetEnvironmentProfileCommand";
import {
  type GetFormTypeCommandInput,
  type GetFormTypeCommandOutput,
  GetFormTypeCommand,
} from "./commands/GetFormTypeCommand";
import {
  type GetGlossaryCommandInput,
  type GetGlossaryCommandOutput,
  GetGlossaryCommand,
} from "./commands/GetGlossaryCommand";
import {
  type GetGlossaryTermCommandInput,
  type GetGlossaryTermCommandOutput,
  GetGlossaryTermCommand,
} from "./commands/GetGlossaryTermCommand";
import {
  type GetGroupProfileCommandInput,
  type GetGroupProfileCommandOutput,
  GetGroupProfileCommand,
} from "./commands/GetGroupProfileCommand";
import {
  type GetIamPortalLoginUrlCommandInput,
  type GetIamPortalLoginUrlCommandOutput,
  GetIamPortalLoginUrlCommand,
} from "./commands/GetIamPortalLoginUrlCommand";
import { type GetJobRunCommandInput, type GetJobRunCommandOutput, GetJobRunCommand } from "./commands/GetJobRunCommand";
import {
  type GetLineageEventCommandInput,
  type GetLineageEventCommandOutput,
  GetLineageEventCommand,
} from "./commands/GetLineageEventCommand";
import {
  type GetLineageNodeCommandInput,
  type GetLineageNodeCommandOutput,
  GetLineageNodeCommand,
} from "./commands/GetLineageNodeCommand";
import {
  type GetListingCommandInput,
  type GetListingCommandOutput,
  GetListingCommand,
} from "./commands/GetListingCommand";
import {
  type GetMetadataGenerationRunCommandInput,
  type GetMetadataGenerationRunCommandOutput,
  GetMetadataGenerationRunCommand,
} from "./commands/GetMetadataGenerationRunCommand";
import {
  type GetProjectCommandInput,
  type GetProjectCommandOutput,
  GetProjectCommand,
} from "./commands/GetProjectCommand";
import {
  type GetProjectProfileCommandInput,
  type GetProjectProfileCommandOutput,
  GetProjectProfileCommand,
} from "./commands/GetProjectProfileCommand";
import { type GetRuleCommandInput, type GetRuleCommandOutput, GetRuleCommand } from "./commands/GetRuleCommand";
import {
  type GetSubscriptionCommandInput,
  type GetSubscriptionCommandOutput,
  GetSubscriptionCommand,
} from "./commands/GetSubscriptionCommand";
import {
  type GetSubscriptionGrantCommandInput,
  type GetSubscriptionGrantCommandOutput,
  GetSubscriptionGrantCommand,
} from "./commands/GetSubscriptionGrantCommand";
import {
  type GetSubscriptionRequestDetailsCommandInput,
  type GetSubscriptionRequestDetailsCommandOutput,
  GetSubscriptionRequestDetailsCommand,
} from "./commands/GetSubscriptionRequestDetailsCommand";
import {
  type GetSubscriptionTargetCommandInput,
  type GetSubscriptionTargetCommandOutput,
  GetSubscriptionTargetCommand,
} from "./commands/GetSubscriptionTargetCommand";
import {
  type GetTimeSeriesDataPointCommandInput,
  type GetTimeSeriesDataPointCommandOutput,
  GetTimeSeriesDataPointCommand,
} from "./commands/GetTimeSeriesDataPointCommand";
import {
  type GetUserProfileCommandInput,
  type GetUserProfileCommandOutput,
  GetUserProfileCommand,
} from "./commands/GetUserProfileCommand";
import {
  type ListAccountPoolsCommandInput,
  type ListAccountPoolsCommandOutput,
  ListAccountPoolsCommand,
} from "./commands/ListAccountPoolsCommand";
import {
  type ListAccountsInAccountPoolCommandInput,
  type ListAccountsInAccountPoolCommandOutput,
  ListAccountsInAccountPoolCommand,
} from "./commands/ListAccountsInAccountPoolCommand";
import {
  type ListAssetFiltersCommandInput,
  type ListAssetFiltersCommandOutput,
  ListAssetFiltersCommand,
} from "./commands/ListAssetFiltersCommand";
import {
  type ListAssetRevisionsCommandInput,
  type ListAssetRevisionsCommandOutput,
  ListAssetRevisionsCommand,
} from "./commands/ListAssetRevisionsCommand";
import {
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListConnectionsCommand,
} from "./commands/ListConnectionsCommand";
import {
  type ListDataProductRevisionsCommandInput,
  type ListDataProductRevisionsCommandOutput,
  ListDataProductRevisionsCommand,
} from "./commands/ListDataProductRevisionsCommand";
import {
  type ListDataSourceRunActivitiesCommandInput,
  type ListDataSourceRunActivitiesCommandOutput,
  ListDataSourceRunActivitiesCommand,
} from "./commands/ListDataSourceRunActivitiesCommand";
import {
  type ListDataSourceRunsCommandInput,
  type ListDataSourceRunsCommandOutput,
  ListDataSourceRunsCommand,
} from "./commands/ListDataSourceRunsCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
import {
  type ListDomainUnitsForParentCommandInput,
  type ListDomainUnitsForParentCommandOutput,
  ListDomainUnitsForParentCommand,
} from "./commands/ListDomainUnitsForParentCommand";
import {
  type ListEntityOwnersCommandInput,
  type ListEntityOwnersCommandOutput,
  ListEntityOwnersCommand,
} from "./commands/ListEntityOwnersCommand";
import {
  type ListEnvironmentActionsCommandInput,
  type ListEnvironmentActionsCommandOutput,
  ListEnvironmentActionsCommand,
} from "./commands/ListEnvironmentActionsCommand";
import {
  type ListEnvironmentBlueprintConfigurationsCommandInput,
  type ListEnvironmentBlueprintConfigurationsCommandOutput,
  ListEnvironmentBlueprintConfigurationsCommand,
} from "./commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  type ListEnvironmentBlueprintsCommandInput,
  type ListEnvironmentBlueprintsCommandOutput,
  ListEnvironmentBlueprintsCommand,
} from "./commands/ListEnvironmentBlueprintsCommand";
import {
  type ListEnvironmentProfilesCommandInput,
  type ListEnvironmentProfilesCommandOutput,
  ListEnvironmentProfilesCommand,
} from "./commands/ListEnvironmentProfilesCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListJobRunsCommandInput,
  type ListJobRunsCommandOutput,
  ListJobRunsCommand,
} from "./commands/ListJobRunsCommand";
import {
  type ListLineageEventsCommandInput,
  type ListLineageEventsCommandOutput,
  ListLineageEventsCommand,
} from "./commands/ListLineageEventsCommand";
import {
  type ListLineageNodeHistoryCommandInput,
  type ListLineageNodeHistoryCommandOutput,
  ListLineageNodeHistoryCommand,
} from "./commands/ListLineageNodeHistoryCommand";
import {
  type ListMetadataGenerationRunsCommandInput,
  type ListMetadataGenerationRunsCommandOutput,
  ListMetadataGenerationRunsCommand,
} from "./commands/ListMetadataGenerationRunsCommand";
import {
  type ListNotificationsCommandInput,
  type ListNotificationsCommandOutput,
  ListNotificationsCommand,
} from "./commands/ListNotificationsCommand";
import {
  type ListPolicyGrantsCommandInput,
  type ListPolicyGrantsCommandOutput,
  ListPolicyGrantsCommand,
} from "./commands/ListPolicyGrantsCommand";
import {
  type ListProjectMembershipsCommandInput,
  type ListProjectMembershipsCommandOutput,
  ListProjectMembershipsCommand,
} from "./commands/ListProjectMembershipsCommand";
import {
  type ListProjectProfilesCommandInput,
  type ListProjectProfilesCommandOutput,
  ListProjectProfilesCommand,
} from "./commands/ListProjectProfilesCommand";
import {
  type ListProjectsCommandInput,
  type ListProjectsCommandOutput,
  ListProjectsCommand,
} from "./commands/ListProjectsCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListSubscriptionGrantsCommandInput,
  type ListSubscriptionGrantsCommandOutput,
  ListSubscriptionGrantsCommand,
} from "./commands/ListSubscriptionGrantsCommand";
import {
  type ListSubscriptionRequestsCommandInput,
  type ListSubscriptionRequestsCommandOutput,
  ListSubscriptionRequestsCommand,
} from "./commands/ListSubscriptionRequestsCommand";
import {
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsCommand,
} from "./commands/ListSubscriptionsCommand";
import {
  type ListSubscriptionTargetsCommandInput,
  type ListSubscriptionTargetsCommandOutput,
  ListSubscriptionTargetsCommand,
} from "./commands/ListSubscriptionTargetsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTimeSeriesDataPointsCommandInput,
  type ListTimeSeriesDataPointsCommandOutput,
  ListTimeSeriesDataPointsCommand,
} from "./commands/ListTimeSeriesDataPointsCommand";
import {
  type PostLineageEventCommandInput,
  type PostLineageEventCommandOutput,
  PostLineageEventCommand,
} from "./commands/PostLineageEventCommand";
import {
  type PostTimeSeriesDataPointsCommandInput,
  type PostTimeSeriesDataPointsCommandOutput,
  PostTimeSeriesDataPointsCommand,
} from "./commands/PostTimeSeriesDataPointsCommand";
import {
  type PutDataExportConfigurationCommandInput,
  type PutDataExportConfigurationCommandOutput,
  PutDataExportConfigurationCommand,
} from "./commands/PutDataExportConfigurationCommand";
import {
  type PutEnvironmentBlueprintConfigurationCommandInput,
  type PutEnvironmentBlueprintConfigurationCommandOutput,
  PutEnvironmentBlueprintConfigurationCommand,
} from "./commands/PutEnvironmentBlueprintConfigurationCommand";
import {
  type QueryGraphCommandInput,
  type QueryGraphCommandOutput,
  QueryGraphCommand,
} from "./commands/QueryGraphCommand";
import {
  type RejectPredictionsCommandInput,
  type RejectPredictionsCommandOutput,
  RejectPredictionsCommand,
} from "./commands/RejectPredictionsCommand";
import {
  type RejectSubscriptionRequestCommandInput,
  type RejectSubscriptionRequestCommandOutput,
  RejectSubscriptionRequestCommand,
} from "./commands/RejectSubscriptionRequestCommand";
import {
  type RemoveEntityOwnerCommandInput,
  type RemoveEntityOwnerCommandOutput,
  RemoveEntityOwnerCommand,
} from "./commands/RemoveEntityOwnerCommand";
import {
  type RemovePolicyGrantCommandInput,
  type RemovePolicyGrantCommandOutput,
  RemovePolicyGrantCommand,
} from "./commands/RemovePolicyGrantCommand";
import {
  type RevokeSubscriptionCommandInput,
  type RevokeSubscriptionCommandOutput,
  RevokeSubscriptionCommand,
} from "./commands/RevokeSubscriptionCommand";
import { type SearchCommandInput, type SearchCommandOutput, SearchCommand } from "./commands/SearchCommand";
import {
  type SearchGroupProfilesCommandInput,
  type SearchGroupProfilesCommandOutput,
  SearchGroupProfilesCommand,
} from "./commands/SearchGroupProfilesCommand";
import {
  type SearchListingsCommandInput,
  type SearchListingsCommandOutput,
  SearchListingsCommand,
} from "./commands/SearchListingsCommand";
import {
  type SearchTypesCommandInput,
  type SearchTypesCommandOutput,
  SearchTypesCommand,
} from "./commands/SearchTypesCommand";
import {
  type SearchUserProfilesCommandInput,
  type SearchUserProfilesCommandOutput,
  SearchUserProfilesCommand,
} from "./commands/SearchUserProfilesCommand";
import {
  type StartDataSourceRunCommandInput,
  type StartDataSourceRunCommandOutput,
  StartDataSourceRunCommand,
} from "./commands/StartDataSourceRunCommand";
import {
  type StartMetadataGenerationRunCommandInput,
  type StartMetadataGenerationRunCommandOutput,
  StartMetadataGenerationRunCommand,
} from "./commands/StartMetadataGenerationRunCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccountPoolCommandInput,
  type UpdateAccountPoolCommandOutput,
  UpdateAccountPoolCommand,
} from "./commands/UpdateAccountPoolCommand";
import {
  type UpdateAssetFilterCommandInput,
  type UpdateAssetFilterCommandOutput,
  UpdateAssetFilterCommand,
} from "./commands/UpdateAssetFilterCommand";
import {
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateConnectionCommand,
} from "./commands/UpdateConnectionCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateDomainCommandInput,
  type UpdateDomainCommandOutput,
  UpdateDomainCommand,
} from "./commands/UpdateDomainCommand";
import {
  type UpdateDomainUnitCommandInput,
  type UpdateDomainUnitCommandOutput,
  UpdateDomainUnitCommand,
} from "./commands/UpdateDomainUnitCommand";
import {
  type UpdateEnvironmentActionCommandInput,
  type UpdateEnvironmentActionCommandOutput,
  UpdateEnvironmentActionCommand,
} from "./commands/UpdateEnvironmentActionCommand";
import {
  type UpdateEnvironmentBlueprintCommandInput,
  type UpdateEnvironmentBlueprintCommandOutput,
  UpdateEnvironmentBlueprintCommand,
} from "./commands/UpdateEnvironmentBlueprintCommand";
import {
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateEnvironmentProfileCommandInput,
  type UpdateEnvironmentProfileCommandOutput,
  UpdateEnvironmentProfileCommand,
} from "./commands/UpdateEnvironmentProfileCommand";
import {
  type UpdateGlossaryCommandInput,
  type UpdateGlossaryCommandOutput,
  UpdateGlossaryCommand,
} from "./commands/UpdateGlossaryCommand";
import {
  type UpdateGlossaryTermCommandInput,
  type UpdateGlossaryTermCommandOutput,
  UpdateGlossaryTermCommand,
} from "./commands/UpdateGlossaryTermCommand";
import {
  type UpdateGroupProfileCommandInput,
  type UpdateGroupProfileCommandOutput,
  UpdateGroupProfileCommand,
} from "./commands/UpdateGroupProfileCommand";
import {
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from "./commands/UpdateProjectCommand";
import {
  type UpdateProjectProfileCommandInput,
  type UpdateProjectProfileCommandOutput,
  UpdateProjectProfileCommand,
} from "./commands/UpdateProjectProfileCommand";
import {
  type UpdateRootDomainUnitOwnerCommandInput,
  type UpdateRootDomainUnitOwnerCommandOutput,
  UpdateRootDomainUnitOwnerCommand,
} from "./commands/UpdateRootDomainUnitOwnerCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import {
  type UpdateSubscriptionGrantStatusCommandInput,
  type UpdateSubscriptionGrantStatusCommandOutput,
  UpdateSubscriptionGrantStatusCommand,
} from "./commands/UpdateSubscriptionGrantStatusCommand";
import {
  type UpdateSubscriptionRequestCommandInput,
  type UpdateSubscriptionRequestCommandOutput,
  UpdateSubscriptionRequestCommand,
} from "./commands/UpdateSubscriptionRequestCommand";
import {
  type UpdateSubscriptionTargetCommandInput,
  type UpdateSubscriptionTargetCommandOutput,
  UpdateSubscriptionTargetCommand,
} from "./commands/UpdateSubscriptionTargetCommand";
import {
  type UpdateUserProfileCommandInput,
  type UpdateUserProfileCommandOutput,
  UpdateUserProfileCommand,
} from "./commands/UpdateUserProfileCommand";
import { DataZoneClient } from "./DataZoneClient";
import { paginateListAccountPools } from "./pagination/ListAccountPoolsPaginator";
import { paginateListAccountsInAccountPool } from "./pagination/ListAccountsInAccountPoolPaginator";
import { paginateListAssetFilters } from "./pagination/ListAssetFiltersPaginator";
import { paginateListAssetRevisions } from "./pagination/ListAssetRevisionsPaginator";
import { paginateListConnections } from "./pagination/ListConnectionsPaginator";
import { paginateListDataProductRevisions } from "./pagination/ListDataProductRevisionsPaginator";
import { paginateListDataSourceRunActivities } from "./pagination/ListDataSourceRunActivitiesPaginator";
import { paginateListDataSourceRuns } from "./pagination/ListDataSourceRunsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListDomainUnitsForParent } from "./pagination/ListDomainUnitsForParentPaginator";
import { paginateListEntityOwners } from "./pagination/ListEntityOwnersPaginator";
import { paginateListEnvironmentActions } from "./pagination/ListEnvironmentActionsPaginator";
import {
  paginateListEnvironmentBlueprintConfigurations,
} from "./pagination/ListEnvironmentBlueprintConfigurationsPaginator";
import { paginateListEnvironmentBlueprints } from "./pagination/ListEnvironmentBlueprintsPaginator";
import { paginateListEnvironmentProfiles } from "./pagination/ListEnvironmentProfilesPaginator";
import { paginateListEnvironments } from "./pagination/ListEnvironmentsPaginator";
import { paginateListJobRuns } from "./pagination/ListJobRunsPaginator";
import { paginateListLineageEvents } from "./pagination/ListLineageEventsPaginator";
import { paginateListLineageNodeHistory } from "./pagination/ListLineageNodeHistoryPaginator";
import { paginateListMetadataGenerationRuns } from "./pagination/ListMetadataGenerationRunsPaginator";
import { paginateListNotifications } from "./pagination/ListNotificationsPaginator";
import { paginateListPolicyGrants } from "./pagination/ListPolicyGrantsPaginator";
import { paginateListProjectMemberships } from "./pagination/ListProjectMembershipsPaginator";
import { paginateListProjectProfiles } from "./pagination/ListProjectProfilesPaginator";
import { paginateListProjects } from "./pagination/ListProjectsPaginator";
import { paginateListRules } from "./pagination/ListRulesPaginator";
import { paginateListSubscriptionGrants } from "./pagination/ListSubscriptionGrantsPaginator";
import { paginateListSubscriptionRequests } from "./pagination/ListSubscriptionRequestsPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";
import { paginateListSubscriptionTargets } from "./pagination/ListSubscriptionTargetsPaginator";
import { paginateListTimeSeriesDataPoints } from "./pagination/ListTimeSeriesDataPointsPaginator";
import { paginateQueryGraph } from "./pagination/QueryGraphPaginator";
import { paginateSearchGroupProfiles } from "./pagination/SearchGroupProfilesPaginator";
import { paginateSearchListings } from "./pagination/SearchListingsPaginator";
import { paginateSearch } from "./pagination/SearchPaginator";
import { paginateSearchTypes } from "./pagination/SearchTypesPaginator";
import { paginateSearchUserProfiles } from "./pagination/SearchUserProfilesPaginator";

const commands = {
  AcceptPredictionsCommand,
  AcceptSubscriptionRequestCommand,
  AddEntityOwnerCommand,
  AddPolicyGrantCommand,
  AssociateEnvironmentRoleCommand,
  AssociateGovernedTermsCommand,
  BatchGetAttributesMetadataCommand,
  BatchPutAttributesMetadataCommand,
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
  CreateEnvironmentBlueprintCommand,
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
  DeleteDataExportConfigurationCommand,
  DeleteDataProductCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteDomainUnitCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentActionCommand,
  DeleteEnvironmentBlueprintCommand,
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
  DisassociateGovernedTermsCommand,
  GetAccountPoolCommand,
  GetAssetCommand,
  GetAssetFilterCommand,
  GetAssetTypeCommand,
  GetConnectionCommand,
  GetDataExportConfigurationCommand,
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
  PutDataExportConfigurationCommand,
  PutEnvironmentBlueprintConfigurationCommand,
  QueryGraphCommand,
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
  UpdateEnvironmentBlueprintCommand,
  UpdateEnvironmentProfileCommand,
  UpdateGlossaryCommand,
  UpdateGlossaryTermCommand,
  UpdateGroupProfileCommand,
  UpdateProjectCommand,
  UpdateProjectProfileCommand,
  UpdateRootDomainUnitOwnerCommand,
  UpdateRuleCommand,
  UpdateSubscriptionGrantStatusCommand,
  UpdateSubscriptionRequestCommand,
  UpdateSubscriptionTargetCommand,
  UpdateUserProfileCommand,
};
const paginators = {
  paginateListAccountPools,
  paginateListAccountsInAccountPool,
  paginateListAssetFilters,
  paginateListAssetRevisions,
  paginateListConnections,
  paginateListDataProductRevisions,
  paginateListDataSourceRunActivities,
  paginateListDataSourceRuns,
  paginateListDataSources,
  paginateListDomains,
  paginateListDomainUnitsForParent,
  paginateListEntityOwners,
  paginateListEnvironmentActions,
  paginateListEnvironmentBlueprintConfigurations,
  paginateListEnvironmentBlueprints,
  paginateListEnvironmentProfiles,
  paginateListEnvironments,
  paginateListJobRuns,
  paginateListLineageEvents,
  paginateListLineageNodeHistory,
  paginateListMetadataGenerationRuns,
  paginateListNotifications,
  paginateListPolicyGrants,
  paginateListProjectMemberships,
  paginateListProjectProfiles,
  paginateListProjects,
  paginateListRules,
  paginateListSubscriptionGrants,
  paginateListSubscriptionRequests,
  paginateListSubscriptions,
  paginateListSubscriptionTargets,
  paginateListTimeSeriesDataPoints,
  paginateQueryGraph,
  paginateSearch,
  paginateSearchGroupProfiles,
  paginateSearchListings,
  paginateSearchTypes,
  paginateSearchUserProfiles,
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
  addEntityOwner(
    args: AddEntityOwnerCommandInput,
    cb: (err: any, data?: AddEntityOwnerCommandOutput) => void
  ): void;
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
  addPolicyGrant(
    args: AddPolicyGrantCommandInput,
    cb: (err: any, data?: AddPolicyGrantCommandOutput) => void
  ): void;
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
   * @see {@link AssociateGovernedTermsCommand}
   */
  associateGovernedTerms(
    args: AssociateGovernedTermsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateGovernedTermsCommandOutput>;
  associateGovernedTerms(
    args: AssociateGovernedTermsCommandInput,
    cb: (err: any, data?: AssociateGovernedTermsCommandOutput) => void
  ): void;
  associateGovernedTerms(
    args: AssociateGovernedTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateGovernedTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAttributesMetadataCommand}
   */
  batchGetAttributesMetadata(
    args: BatchGetAttributesMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAttributesMetadataCommandOutput>;
  batchGetAttributesMetadata(
    args: BatchGetAttributesMetadataCommandInput,
    cb: (err: any, data?: BatchGetAttributesMetadataCommandOutput) => void
  ): void;
  batchGetAttributesMetadata(
    args: BatchGetAttributesMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAttributesMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutAttributesMetadataCommand}
   */
  batchPutAttributesMetadata(
    args: BatchPutAttributesMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutAttributesMetadataCommandOutput>;
  batchPutAttributesMetadata(
    args: BatchPutAttributesMetadataCommandInput,
    cb: (err: any, data?: BatchPutAttributesMetadataCommandOutput) => void
  ): void;
  batchPutAttributesMetadata(
    args: BatchPutAttributesMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutAttributesMetadataCommandOutput) => void
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
  createAsset(
    args: CreateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetCommandOutput>;
  createAsset(
    args: CreateAssetCommandInput,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
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
  createAssetType(
    args: CreateAssetTypeCommandInput,
    cb: (err: any, data?: CreateAssetTypeCommandOutput) => void
  ): void;
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
  createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
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
   * @see {@link CreateEnvironmentBlueprintCommand}
   */
  createEnvironmentBlueprint(
    args: CreateEnvironmentBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentBlueprintCommandOutput>;
  createEnvironmentBlueprint(
    args: CreateEnvironmentBlueprintCommandInput,
    cb: (err: any, data?: CreateEnvironmentBlueprintCommandOutput) => void
  ): void;
  createEnvironmentBlueprint(
    args: CreateEnvironmentBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentBlueprintCommandOutput) => void
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
  createFormType(
    args: CreateFormTypeCommandInput,
    cb: (err: any, data?: CreateFormTypeCommandOutput) => void
  ): void;
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
  createGlossary(
    args: CreateGlossaryCommandInput,
    cb: (err: any, data?: CreateGlossaryCommandOutput) => void
  ): void;
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
  createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
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
  createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
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
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
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
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    cb: (err: any, data?: DeleteAssetTypeCommandOutput) => void
  ): void;
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
   * @see {@link DeleteDataExportConfigurationCommand}
   */
  deleteDataExportConfiguration(
    args: DeleteDataExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataExportConfigurationCommandOutput>;
  deleteDataExportConfiguration(
    args: DeleteDataExportConfigurationCommandInput,
    cb: (err: any, data?: DeleteDataExportConfigurationCommandOutput) => void
  ): void;
  deleteDataExportConfiguration(
    args: DeleteDataExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataExportConfigurationCommandOutput) => void
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
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
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
   * @see {@link DeleteEnvironmentBlueprintCommand}
   */
  deleteEnvironmentBlueprint(
    args: DeleteEnvironmentBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentBlueprintCommandOutput>;
  deleteEnvironmentBlueprint(
    args: DeleteEnvironmentBlueprintCommandInput,
    cb: (err: any, data?: DeleteEnvironmentBlueprintCommandOutput) => void
  ): void;
  deleteEnvironmentBlueprint(
    args: DeleteEnvironmentBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentBlueprintCommandOutput) => void
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
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    cb: (err: any, data?: DeleteFormTypeCommandOutput) => void
  ): void;
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
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    cb: (err: any, data?: DeleteGlossaryCommandOutput) => void
  ): void;
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
  deleteListing(
    args: DeleteListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteListingCommandOutput>;
  deleteListing(
    args: DeleteListingCommandInput,
    cb: (err: any, data?: DeleteListingCommandOutput) => void
  ): void;
  deleteListing(
    args: DeleteListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
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
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
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
   * @see {@link DisassociateGovernedTermsCommand}
   */
  disassociateGovernedTerms(
    args: DisassociateGovernedTermsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateGovernedTermsCommandOutput>;
  disassociateGovernedTerms(
    args: DisassociateGovernedTermsCommandInput,
    cb: (err: any, data?: DisassociateGovernedTermsCommandOutput) => void
  ): void;
  disassociateGovernedTerms(
    args: DisassociateGovernedTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateGovernedTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPoolCommand}
   */
  getAccountPool(
    args: GetAccountPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPoolCommandOutput>;
  getAccountPool(
    args: GetAccountPoolCommandInput,
    cb: (err: any, data?: GetAccountPoolCommandOutput) => void
  ): void;
  getAccountPool(
    args: GetAccountPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetCommand}
   */
  getAsset(
    args: GetAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetCommandOutput>;
  getAsset(
    args: GetAssetCommandInput,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;
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
  getAssetFilter(
    args: GetAssetFilterCommandInput,
    cb: (err: any, data?: GetAssetFilterCommandOutput) => void
  ): void;
  getAssetFilter(
    args: GetAssetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetTypeCommand}
   */
  getAssetType(
    args: GetAssetTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetTypeCommandOutput>;
  getAssetType(
    args: GetAssetTypeCommandInput,
    cb: (err: any, data?: GetAssetTypeCommandOutput) => void
  ): void;
  getAssetType(
    args: GetAssetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataExportConfigurationCommand}
   */
  getDataExportConfiguration(
    args: GetDataExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataExportConfigurationCommandOutput>;
  getDataExportConfiguration(
    args: GetDataExportConfigurationCommandInput,
    cb: (err: any, data?: GetDataExportConfigurationCommandOutput) => void
  ): void;
  getDataExportConfiguration(
    args: GetDataExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProductCommand}
   */
  getDataProduct(
    args: GetDataProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProductCommandOutput>;
  getDataProduct(
    args: GetDataProductCommandInput,
    cb: (err: any, data?: GetDataProductCommandOutput) => void
  ): void;
  getDataProduct(
    args: GetDataProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProductCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceCommandOutput>;
  getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
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
  getDomain(
    args: GetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainUnitCommand}
   */
  getDomainUnit(
    args: GetDomainUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainUnitCommandOutput>;
  getDomainUnit(
    args: GetDomainUnitCommandInput,
    cb: (err: any, data?: GetDomainUnitCommandOutput) => void
  ): void;
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
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
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
  getFormType(
    args: GetFormTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFormTypeCommandOutput>;
  getFormType(
    args: GetFormTypeCommandInput,
    cb: (err: any, data?: GetFormTypeCommandOutput) => void
  ): void;
  getFormType(
    args: GetFormTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlossaryCommand}
   */
  getGlossary(
    args: GetGlossaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlossaryCommandOutput>;
  getGlossary(
    args: GetGlossaryCommandInput,
    cb: (err: any, data?: GetGlossaryCommandOutput) => void
  ): void;
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
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    cb: (err: any, data?: GetGlossaryTermCommandOutput) => void
  ): void;
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
  getGroupProfile(
    args: GetGroupProfileCommandInput,
    cb: (err: any, data?: GetGroupProfileCommandOutput) => void
  ): void;
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
  getJobRun(
    args: GetJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobRunCommandOutput>;
  getJobRun(
    args: GetJobRunCommandInput,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;
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
  getLineageEvent(
    args: GetLineageEventCommandInput,
    cb: (err: any, data?: GetLineageEventCommandOutput) => void
  ): void;
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
  getLineageNode(
    args: GetLineageNodeCommandInput,
    cb: (err: any, data?: GetLineageNodeCommandOutput) => void
  ): void;
  getLineageNode(
    args: GetLineageNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLineageNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListingCommand}
   */
  getListing(
    args: GetListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetListingCommandOutput>;
  getListing(
    args: GetListingCommandInput,
    cb: (err: any, data?: GetListingCommandOutput) => void
  ): void;
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
  getProject(
    args: GetProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProjectCommandOutput>;
  getProject(
    args: GetProjectCommandInput,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
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
  getRule(
    args: GetRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleCommandOutput>;
  getRule(
    args: GetRuleCommandInput,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
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
  getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
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
  getUserProfile(
    args: GetUserProfileCommandInput,
    cb: (err: any, data?: GetUserProfileCommandOutput) => void
  ): void;
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
  listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
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
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
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
  listJobRuns(
    args: ListJobRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobRunsCommandOutput>;
  listJobRuns(
    args: ListJobRunsCommandInput,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;
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
  listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
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
   * @see {@link PutDataExportConfigurationCommand}
   */
  putDataExportConfiguration(
    args: PutDataExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataExportConfigurationCommandOutput>;
  putDataExportConfiguration(
    args: PutDataExportConfigurationCommandInput,
    cb: (err: any, data?: PutDataExportConfigurationCommandOutput) => void
  ): void;
  putDataExportConfiguration(
    args: PutDataExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataExportConfigurationCommandOutput) => void
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
   * @see {@link QueryGraphCommand}
   */
  queryGraph(
    args: QueryGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryGraphCommandOutput>;
  queryGraph(
    args: QueryGraphCommandInput,
    cb: (err: any, data?: QueryGraphCommandOutput) => void
  ): void;
  queryGraph(
    args: QueryGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryGraphCommandOutput) => void
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
  search(
    args: SearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchCommandOutput>;
  search(
    args: SearchCommandInput,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;
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
  searchListings(
    args: SearchListingsCommandInput,
    cb: (err: any, data?: SearchListingsCommandOutput) => void
  ): void;
  searchListings(
    args: SearchListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTypesCommand}
   */
  searchTypes(
    args: SearchTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTypesCommandOutput>;
  searchTypes(
    args: SearchTypesCommandInput,
    cb: (err: any, data?: SearchTypesCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateDomain(
    args: UpdateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainCommandOutput>;
  updateDomain(
    args: UpdateDomainCommandInput,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
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
   * @see {@link UpdateEnvironmentBlueprintCommand}
   */
  updateEnvironmentBlueprint(
    args: UpdateEnvironmentBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentBlueprintCommandOutput>;
  updateEnvironmentBlueprint(
    args: UpdateEnvironmentBlueprintCommandInput,
    cb: (err: any, data?: UpdateEnvironmentBlueprintCommandOutput) => void
  ): void;
  updateEnvironmentBlueprint(
    args: UpdateEnvironmentBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentBlueprintCommandOutput) => void
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
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    cb: (err: any, data?: UpdateGlossaryCommandOutput) => void
  ): void;
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
  updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
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
   * @see {@link UpdateRootDomainUnitOwnerCommand}
   */
  updateRootDomainUnitOwner(
    args: UpdateRootDomainUnitOwnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRootDomainUnitOwnerCommandOutput>;
  updateRootDomainUnitOwner(
    args: UpdateRootDomainUnitOwnerCommandInput,
    cb: (err: any, data?: UpdateRootDomainUnitOwnerCommandOutput) => void
  ): void;
  updateRootDomainUnitOwner(
    args: UpdateRootDomainUnitOwnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRootDomainUnitOwnerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleCommand}
   */
  updateRule(
    args: UpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListAccountPoolsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountPoolsCommandOutput}.
   */
  paginateListAccountPools(
    args: ListAccountPoolsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountPoolsCommandOutput>;

  /**
   * @see {@link ListAccountsInAccountPoolCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountsInAccountPoolCommandOutput}.
   */
  paginateListAccountsInAccountPool(
    args: ListAccountsInAccountPoolCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountsInAccountPoolCommandOutput>;

  /**
   * @see {@link ListAssetFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetFiltersCommandOutput}.
   */
  paginateListAssetFilters(
    args: ListAssetFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetFiltersCommandOutput>;

  /**
   * @see {@link ListAssetRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetRevisionsCommandOutput}.
   */
  paginateListAssetRevisions(
    args: ListAssetRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetRevisionsCommandOutput>;

  /**
   * @see {@link ListConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionsCommandOutput}.
   */
  paginateListConnections(
    args: ListConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionsCommandOutput>;

  /**
   * @see {@link ListDataProductRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataProductRevisionsCommandOutput}.
   */
  paginateListDataProductRevisions(
    args: ListDataProductRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataProductRevisionsCommandOutput>;

  /**
   * @see {@link ListDataSourceRunActivitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourceRunActivitiesCommandOutput}.
   */
  paginateListDataSourceRunActivities(
    args: ListDataSourceRunActivitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourceRunActivitiesCommandOutput>;

  /**
   * @see {@link ListDataSourceRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourceRunsCommandOutput}.
   */
  paginateListDataSourceRuns(
    args: ListDataSourceRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourceRunsCommandOutput>;

  /**
   * @see {@link ListDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourcesCommandOutput}.
   */
  paginateListDataSources(
    args: ListDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourcesCommandOutput>;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListDomainUnitsForParentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainUnitsForParentCommandOutput}.
   */
  paginateListDomainUnitsForParent(
    args: ListDomainUnitsForParentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainUnitsForParentCommandOutput>;

  /**
   * @see {@link ListEntityOwnersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntityOwnersCommandOutput}.
   */
  paginateListEntityOwners(
    args: ListEntityOwnersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntityOwnersCommandOutput>;

  /**
   * @see {@link ListEnvironmentActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentActionsCommandOutput}.
   */
  paginateListEnvironmentActions(
    args: ListEnvironmentActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentActionsCommandOutput>;

  /**
   * @see {@link ListEnvironmentBlueprintConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentBlueprintConfigurationsCommandOutput}.
   */
  paginateListEnvironmentBlueprintConfigurations(
    args: ListEnvironmentBlueprintConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentBlueprintConfigurationsCommandOutput>;

  /**
   * @see {@link ListEnvironmentBlueprintsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentBlueprintsCommandOutput}.
   */
  paginateListEnvironmentBlueprints(
    args: ListEnvironmentBlueprintsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentBlueprintsCommandOutput>;

  /**
   * @see {@link ListEnvironmentProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentProfilesCommandOutput}.
   */
  paginateListEnvironmentProfiles(
    args: ListEnvironmentProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentProfilesCommandOutput>;

  /**
   * @see {@link ListEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentsCommandOutput}.
   */
  paginateListEnvironments(
    args: ListEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentsCommandOutput>;

  /**
   * @see {@link ListJobRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobRunsCommandOutput}.
   */
  paginateListJobRuns(
    args: ListJobRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobRunsCommandOutput>;

  /**
   * @see {@link ListLineageEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLineageEventsCommandOutput}.
   */
  paginateListLineageEvents(
    args: ListLineageEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLineageEventsCommandOutput>;

  /**
   * @see {@link ListLineageNodeHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLineageNodeHistoryCommandOutput}.
   */
  paginateListLineageNodeHistory(
    args: ListLineageNodeHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLineageNodeHistoryCommandOutput>;

  /**
   * @see {@link ListMetadataGenerationRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMetadataGenerationRunsCommandOutput}.
   */
  paginateListMetadataGenerationRuns(
    args: ListMetadataGenerationRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMetadataGenerationRunsCommandOutput>;

  /**
   * @see {@link ListNotificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationsCommandOutput}.
   */
  paginateListNotifications(
    args: ListNotificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationsCommandOutput>;

  /**
   * @see {@link ListPolicyGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyGrantsCommandOutput}.
   */
  paginateListPolicyGrants(
    args: ListPolicyGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyGrantsCommandOutput>;

  /**
   * @see {@link ListProjectMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectMembershipsCommandOutput}.
   */
  paginateListProjectMemberships(
    args: ListProjectMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectMembershipsCommandOutput>;

  /**
   * @see {@link ListProjectProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectProfilesCommandOutput}.
   */
  paginateListProjectProfiles(
    args: ListProjectProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectProfilesCommandOutput>;

  /**
   * @see {@link ListProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectsCommandOutput}.
   */
  paginateListProjects(
    args: ListProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectsCommandOutput>;

  /**
   * @see {@link ListRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesCommandOutput}.
   */
  paginateListRules(
    args: ListRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesCommandOutput>;

  /**
   * @see {@link ListSubscriptionGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionGrantsCommandOutput}.
   */
  paginateListSubscriptionGrants(
    args: ListSubscriptionGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionGrantsCommandOutput>;

  /**
   * @see {@link ListSubscriptionRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionRequestsCommandOutput}.
   */
  paginateListSubscriptionRequests(
    args: ListSubscriptionRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionRequestsCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;

  /**
   * @see {@link ListSubscriptionTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionTargetsCommandOutput}.
   */
  paginateListSubscriptionTargets(
    args: ListSubscriptionTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionTargetsCommandOutput>;

  /**
   * @see {@link ListTimeSeriesDataPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTimeSeriesDataPointsCommandOutput}.
   */
  paginateListTimeSeriesDataPoints(
    args: ListTimeSeriesDataPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTimeSeriesDataPointsCommandOutput>;

  /**
   * @see {@link QueryGraphCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link QueryGraphCommandOutput}.
   */
  paginateQueryGraph(
    args: QueryGraphCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<QueryGraphCommandOutput>;

  /**
   * @see {@link SearchCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchCommandOutput}.
   */
  paginateSearch(
    args: SearchCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchCommandOutput>;

  /**
   * @see {@link SearchGroupProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchGroupProfilesCommandOutput}.
   */
  paginateSearchGroupProfiles(
    args: SearchGroupProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchGroupProfilesCommandOutput>;

  /**
   * @see {@link SearchListingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchListingsCommandOutput}.
   */
  paginateSearchListings(
    args: SearchListingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchListingsCommandOutput>;

  /**
   * @see {@link SearchTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTypesCommandOutput}.
   */
  paginateSearchTypes(
    args: SearchTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTypesCommandOutput>;

  /**
   * @see {@link SearchUserProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchUserProfilesCommandOutput}.
   */
  paginateSearchUserProfiles(
    args: SearchUserProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchUserProfilesCommandOutput>;
}

/**
 * <p>Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>
 * @public
 */
export class DataZone extends DataZoneClient implements DataZone {}
createAggregatedClient(commands, DataZone, { paginators });
