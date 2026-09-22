// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AssociateMemberToFarmCommandInput,
  type AssociateMemberToFarmCommandOutput,
  AssociateMemberToFarmCommand,
} from "./commands/AssociateMemberToFarmCommand";
import {
  type AssociateMemberToFleetCommandInput,
  type AssociateMemberToFleetCommandOutput,
  AssociateMemberToFleetCommand,
} from "./commands/AssociateMemberToFleetCommand";
import {
  type AssociateMemberToJobCommandInput,
  type AssociateMemberToJobCommandOutput,
  AssociateMemberToJobCommand,
} from "./commands/AssociateMemberToJobCommand";
import {
  type AssociateMemberToQueueCommandInput,
  type AssociateMemberToQueueCommandOutput,
  AssociateMemberToQueueCommand,
} from "./commands/AssociateMemberToQueueCommand";
import {
  type AssumeFleetRoleForReadCommandInput,
  type AssumeFleetRoleForReadCommandOutput,
  AssumeFleetRoleForReadCommand,
} from "./commands/AssumeFleetRoleForReadCommand";
import {
  type AssumeFleetRoleForWorkerCommandInput,
  type AssumeFleetRoleForWorkerCommandOutput,
  AssumeFleetRoleForWorkerCommand,
} from "./commands/AssumeFleetRoleForWorkerCommand";
import {
  type AssumeQueueRoleForReadCommandInput,
  type AssumeQueueRoleForReadCommandOutput,
  AssumeQueueRoleForReadCommand,
} from "./commands/AssumeQueueRoleForReadCommand";
import {
  type AssumeQueueRoleForUserCommandInput,
  type AssumeQueueRoleForUserCommandOutput,
  AssumeQueueRoleForUserCommand,
} from "./commands/AssumeQueueRoleForUserCommand";
import {
  type AssumeQueueRoleForWorkerCommandInput,
  type AssumeQueueRoleForWorkerCommandOutput,
  AssumeQueueRoleForWorkerCommand,
} from "./commands/AssumeQueueRoleForWorkerCommand";
import {
  type BatchGetJobCommandInput,
  type BatchGetJobCommandOutput,
  BatchGetJobCommand,
} from "./commands/BatchGetJobCommand";
import {
  type BatchGetJobEntityCommandInput,
  type BatchGetJobEntityCommandOutput,
  BatchGetJobEntityCommand,
} from "./commands/BatchGetJobEntityCommand";
import {
  type BatchGetSessionActionCommandInput,
  type BatchGetSessionActionCommandOutput,
  BatchGetSessionActionCommand,
} from "./commands/BatchGetSessionActionCommand";
import {
  type BatchGetSessionCommandInput,
  type BatchGetSessionCommandOutput,
  BatchGetSessionCommand,
} from "./commands/BatchGetSessionCommand";
import {
  type BatchGetStepCommandInput,
  type BatchGetStepCommandOutput,
  BatchGetStepCommand,
} from "./commands/BatchGetStepCommand";
import {
  type BatchGetTaskCommandInput,
  type BatchGetTaskCommandOutput,
  BatchGetTaskCommand,
} from "./commands/BatchGetTaskCommand";
import {
  type BatchGetWorkerCommandInput,
  type BatchGetWorkerCommandOutput,
  BatchGetWorkerCommand,
} from "./commands/BatchGetWorkerCommand";
import {
  type BatchUpdateJobCommandInput,
  type BatchUpdateJobCommandOutput,
  BatchUpdateJobCommand,
} from "./commands/BatchUpdateJobCommand";
import {
  type BatchUpdateTaskCommandInput,
  type BatchUpdateTaskCommandOutput,
  BatchUpdateTaskCommand,
} from "./commands/BatchUpdateTaskCommand";
import {
  type CopyJobTemplateCommandInput,
  type CopyJobTemplateCommandOutput,
  CopyJobTemplateCommand,
} from "./commands/CopyJobTemplateCommand";
import {
  type CreateBudgetCommandInput,
  type CreateBudgetCommandOutput,
  CreateBudgetCommand,
} from "./commands/CreateBudgetCommand";
import {
  type CreateFarmCommandInput,
  type CreateFarmCommandOutput,
  CreateFarmCommand,
} from "./commands/CreateFarmCommand";
import {
  type CreateFleetCommandInput,
  type CreateFleetCommandOutput,
  CreateFleetCommand,
} from "./commands/CreateFleetCommand";
import { type CreateJobCommandInput, type CreateJobCommandOutput, CreateJobCommand } from "./commands/CreateJobCommand";
import {
  type CreateLicenseEndpointCommandInput,
  type CreateLicenseEndpointCommandOutput,
  CreateLicenseEndpointCommand,
} from "./commands/CreateLicenseEndpointCommand";
import {
  type CreateLimitCommandInput,
  type CreateLimitCommandOutput,
  CreateLimitCommand,
} from "./commands/CreateLimitCommand";
import {
  type CreateMonitorCommandInput,
  type CreateMonitorCommandOutput,
  CreateMonitorCommand,
} from "./commands/CreateMonitorCommand";
import {
  type CreateQueueCommandInput,
  type CreateQueueCommandOutput,
  CreateQueueCommand,
} from "./commands/CreateQueueCommand";
import {
  type CreateQueueEnvironmentCommandInput,
  type CreateQueueEnvironmentCommandOutput,
  CreateQueueEnvironmentCommand,
} from "./commands/CreateQueueEnvironmentCommand";
import {
  type CreateQueueFleetAssociationCommandInput,
  type CreateQueueFleetAssociationCommandOutput,
  CreateQueueFleetAssociationCommand,
} from "./commands/CreateQueueFleetAssociationCommand";
import {
  type CreateQueueLimitAssociationCommandInput,
  type CreateQueueLimitAssociationCommandOutput,
  CreateQueueLimitAssociationCommand,
} from "./commands/CreateQueueLimitAssociationCommand";
import {
  type CreateStorageProfileCommandInput,
  type CreateStorageProfileCommandOutput,
  CreateStorageProfileCommand,
} from "./commands/CreateStorageProfileCommand";
import {
  type CreateWorkerCommandInput,
  type CreateWorkerCommandOutput,
  CreateWorkerCommand,
} from "./commands/CreateWorkerCommand";
import {
  type DeleteBudgetCommandInput,
  type DeleteBudgetCommandOutput,
  DeleteBudgetCommand,
} from "./commands/DeleteBudgetCommand";
import {
  type DeleteFarmCommandInput,
  type DeleteFarmCommandOutput,
  DeleteFarmCommand,
} from "./commands/DeleteFarmCommand";
import {
  type DeleteFleetCommandInput,
  type DeleteFleetCommandOutput,
  DeleteFleetCommand,
} from "./commands/DeleteFleetCommand";
import {
  type DeleteLicenseEndpointCommandInput,
  type DeleteLicenseEndpointCommandOutput,
  DeleteLicenseEndpointCommand,
} from "./commands/DeleteLicenseEndpointCommand";
import {
  type DeleteLimitCommandInput,
  type DeleteLimitCommandOutput,
  DeleteLimitCommand,
} from "./commands/DeleteLimitCommand";
import {
  type DeleteMeteredProductCommandInput,
  type DeleteMeteredProductCommandOutput,
  DeleteMeteredProductCommand,
} from "./commands/DeleteMeteredProductCommand";
import {
  type DeleteMonitorCommandInput,
  type DeleteMonitorCommandOutput,
  DeleteMonitorCommand,
} from "./commands/DeleteMonitorCommand";
import {
  type DeleteQueueCommandInput,
  type DeleteQueueCommandOutput,
  DeleteQueueCommand,
} from "./commands/DeleteQueueCommand";
import {
  type DeleteQueueEnvironmentCommandInput,
  type DeleteQueueEnvironmentCommandOutput,
  DeleteQueueEnvironmentCommand,
} from "./commands/DeleteQueueEnvironmentCommand";
import {
  type DeleteQueueFleetAssociationCommandInput,
  type DeleteQueueFleetAssociationCommandOutput,
  DeleteQueueFleetAssociationCommand,
} from "./commands/DeleteQueueFleetAssociationCommand";
import {
  type DeleteQueueLimitAssociationCommandInput,
  type DeleteQueueLimitAssociationCommandOutput,
  DeleteQueueLimitAssociationCommand,
} from "./commands/DeleteQueueLimitAssociationCommand";
import {
  type DeleteStorageProfileCommandInput,
  type DeleteStorageProfileCommandOutput,
  DeleteStorageProfileCommand,
} from "./commands/DeleteStorageProfileCommand";
import {
  type DeleteVolumeCommandInput,
  type DeleteVolumeCommandOutput,
  DeleteVolumeCommand,
} from "./commands/DeleteVolumeCommand";
import {
  type DeleteWorkerCommandInput,
  type DeleteWorkerCommandOutput,
  DeleteWorkerCommand,
} from "./commands/DeleteWorkerCommand";
import {
  type DisassociateMemberFromFarmCommandInput,
  type DisassociateMemberFromFarmCommandOutput,
  DisassociateMemberFromFarmCommand,
} from "./commands/DisassociateMemberFromFarmCommand";
import {
  type DisassociateMemberFromFleetCommandInput,
  type DisassociateMemberFromFleetCommandOutput,
  DisassociateMemberFromFleetCommand,
} from "./commands/DisassociateMemberFromFleetCommand";
import {
  type DisassociateMemberFromJobCommandInput,
  type DisassociateMemberFromJobCommandOutput,
  DisassociateMemberFromJobCommand,
} from "./commands/DisassociateMemberFromJobCommand";
import {
  type DisassociateMemberFromQueueCommandInput,
  type DisassociateMemberFromQueueCommandOutput,
  DisassociateMemberFromQueueCommand,
} from "./commands/DisassociateMemberFromQueueCommand";
import { type GetBudgetCommandInput, type GetBudgetCommandOutput, GetBudgetCommand } from "./commands/GetBudgetCommand";
import { type GetFarmCommandInput, type GetFarmCommandOutput, GetFarmCommand } from "./commands/GetFarmCommand";
import { type GetFleetCommandInput, type GetFleetCommandOutput, GetFleetCommand } from "./commands/GetFleetCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import {
  type GetLicenseEndpointCommandInput,
  type GetLicenseEndpointCommandOutput,
  GetLicenseEndpointCommand,
} from "./commands/GetLicenseEndpointCommand";
import { type GetLimitCommandInput, type GetLimitCommandOutput, GetLimitCommand } from "./commands/GetLimitCommand";
import {
  type GetMonitorCommandInput,
  type GetMonitorCommandOutput,
  GetMonitorCommand,
} from "./commands/GetMonitorCommand";
import {
  type GetMonitorSettingsCommandInput,
  type GetMonitorSettingsCommandOutput,
  GetMonitorSettingsCommand,
} from "./commands/GetMonitorSettingsCommand";
import { type GetQueueCommandInput, type GetQueueCommandOutput, GetQueueCommand } from "./commands/GetQueueCommand";
import {
  type GetQueueEnvironmentCommandInput,
  type GetQueueEnvironmentCommandOutput,
  GetQueueEnvironmentCommand,
} from "./commands/GetQueueEnvironmentCommand";
import {
  type GetQueueFleetAssociationCommandInput,
  type GetQueueFleetAssociationCommandOutput,
  GetQueueFleetAssociationCommand,
} from "./commands/GetQueueFleetAssociationCommand";
import {
  type GetQueueLimitAssociationCommandInput,
  type GetQueueLimitAssociationCommandOutput,
  GetQueueLimitAssociationCommand,
} from "./commands/GetQueueLimitAssociationCommand";
import {
  type GetSessionActionCommandInput,
  type GetSessionActionCommandOutput,
  GetSessionActionCommand,
} from "./commands/GetSessionActionCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type GetSessionsStatisticsAggregationCommandInput,
  type GetSessionsStatisticsAggregationCommandOutput,
  GetSessionsStatisticsAggregationCommand,
} from "./commands/GetSessionsStatisticsAggregationCommand";
import { type GetStepCommandInput, type GetStepCommandOutput, GetStepCommand } from "./commands/GetStepCommand";
import {
  type GetStorageProfileCommandInput,
  type GetStorageProfileCommandOutput,
  GetStorageProfileCommand,
} from "./commands/GetStorageProfileCommand";
import {
  type GetStorageProfileForQueueCommandInput,
  type GetStorageProfileForQueueCommandOutput,
  GetStorageProfileForQueueCommand,
} from "./commands/GetStorageProfileForQueueCommand";
import { type GetTaskCommandInput, type GetTaskCommandOutput, GetTaskCommand } from "./commands/GetTaskCommand";
import { type GetVolumeCommandInput, type GetVolumeCommandOutput, GetVolumeCommand } from "./commands/GetVolumeCommand";
import { type GetWorkerCommandInput, type GetWorkerCommandOutput, GetWorkerCommand } from "./commands/GetWorkerCommand";
import {
  type ListAvailableMeteredProductsCommandInput,
  type ListAvailableMeteredProductsCommandOutput,
  ListAvailableMeteredProductsCommand,
} from "./commands/ListAvailableMeteredProductsCommand";
import {
  type ListBudgetsCommandInput,
  type ListBudgetsCommandOutput,
  ListBudgetsCommand,
} from "./commands/ListBudgetsCommand";
import {
  type ListFarmMembersCommandInput,
  type ListFarmMembersCommandOutput,
  ListFarmMembersCommand,
} from "./commands/ListFarmMembersCommand";
import { type ListFarmsCommandInput, type ListFarmsCommandOutput, ListFarmsCommand } from "./commands/ListFarmsCommand";
import {
  type ListFleetMembersCommandInput,
  type ListFleetMembersCommandOutput,
  ListFleetMembersCommand,
} from "./commands/ListFleetMembersCommand";
import {
  type ListFleetsCommandInput,
  type ListFleetsCommandOutput,
  ListFleetsCommand,
} from "./commands/ListFleetsCommand";
import {
  type ListJobMembersCommandInput,
  type ListJobMembersCommandOutput,
  ListJobMembersCommand,
} from "./commands/ListJobMembersCommand";
import {
  type ListJobParameterDefinitionsCommandInput,
  type ListJobParameterDefinitionsCommandOutput,
  ListJobParameterDefinitionsCommand,
} from "./commands/ListJobParameterDefinitionsCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListLicenseEndpointsCommandInput,
  type ListLicenseEndpointsCommandOutput,
  ListLicenseEndpointsCommand,
} from "./commands/ListLicenseEndpointsCommand";
import {
  type ListLimitsCommandInput,
  type ListLimitsCommandOutput,
  ListLimitsCommand,
} from "./commands/ListLimitsCommand";
import {
  type ListMeteredProductsCommandInput,
  type ListMeteredProductsCommandOutput,
  ListMeteredProductsCommand,
} from "./commands/ListMeteredProductsCommand";
import {
  type ListMonitorsCommandInput,
  type ListMonitorsCommandOutput,
  ListMonitorsCommand,
} from "./commands/ListMonitorsCommand";
import {
  type ListQueueEnvironmentsCommandInput,
  type ListQueueEnvironmentsCommandOutput,
  ListQueueEnvironmentsCommand,
} from "./commands/ListQueueEnvironmentsCommand";
import {
  type ListQueueFleetAssociationsCommandInput,
  type ListQueueFleetAssociationsCommandOutput,
  ListQueueFleetAssociationsCommand,
} from "./commands/ListQueueFleetAssociationsCommand";
import {
  type ListQueueLimitAssociationsCommandInput,
  type ListQueueLimitAssociationsCommandOutput,
  ListQueueLimitAssociationsCommand,
} from "./commands/ListQueueLimitAssociationsCommand";
import {
  type ListQueueMembersCommandInput,
  type ListQueueMembersCommandOutput,
  ListQueueMembersCommand,
} from "./commands/ListQueueMembersCommand";
import {
  type ListQueuesCommandInput,
  type ListQueuesCommandOutput,
  ListQueuesCommand,
} from "./commands/ListQueuesCommand";
import {
  type ListSessionActionsCommandInput,
  type ListSessionActionsCommandOutput,
  ListSessionActionsCommand,
} from "./commands/ListSessionActionsCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
import {
  type ListSessionsForWorkerCommandInput,
  type ListSessionsForWorkerCommandOutput,
  ListSessionsForWorkerCommand,
} from "./commands/ListSessionsForWorkerCommand";
import {
  type ListStepConsumersCommandInput,
  type ListStepConsumersCommandOutput,
  ListStepConsumersCommand,
} from "./commands/ListStepConsumersCommand";
import {
  type ListStepDependenciesCommandInput,
  type ListStepDependenciesCommandOutput,
  ListStepDependenciesCommand,
} from "./commands/ListStepDependenciesCommand";
import { type ListStepsCommandInput, type ListStepsCommandOutput, ListStepsCommand } from "./commands/ListStepsCommand";
import {
  type ListStorageProfilesCommandInput,
  type ListStorageProfilesCommandOutput,
  ListStorageProfilesCommand,
} from "./commands/ListStorageProfilesCommand";
import {
  type ListStorageProfilesForQueueCommandInput,
  type ListStorageProfilesForQueueCommandOutput,
  ListStorageProfilesForQueueCommand,
} from "./commands/ListStorageProfilesForQueueCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type ListTasksCommandInput, type ListTasksCommandOutput, ListTasksCommand } from "./commands/ListTasksCommand";
import {
  type ListVolumesCommandInput,
  type ListVolumesCommandOutput,
  ListVolumesCommand,
} from "./commands/ListVolumesCommand";
import {
  type ListWorkersCommandInput,
  type ListWorkersCommandOutput,
  ListWorkersCommand,
} from "./commands/ListWorkersCommand";
import {
  type PutMeteredProductCommandInput,
  type PutMeteredProductCommandOutput,
  PutMeteredProductCommand,
} from "./commands/PutMeteredProductCommand";
import {
  type SearchJobsCommandInput,
  type SearchJobsCommandOutput,
  SearchJobsCommand,
} from "./commands/SearchJobsCommand";
import {
  type SearchStepsCommandInput,
  type SearchStepsCommandOutput,
  SearchStepsCommand,
} from "./commands/SearchStepsCommand";
import {
  type SearchTasksCommandInput,
  type SearchTasksCommandOutput,
  SearchTasksCommand,
} from "./commands/SearchTasksCommand";
import {
  type SearchWorkersCommandInput,
  type SearchWorkersCommandOutput,
  SearchWorkersCommand,
} from "./commands/SearchWorkersCommand";
import {
  type StartSessionsStatisticsAggregationCommandInput,
  type StartSessionsStatisticsAggregationCommandOutput,
  StartSessionsStatisticsAggregationCommand,
} from "./commands/StartSessionsStatisticsAggregationCommand";
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
  type UpdateBudgetCommandInput,
  type UpdateBudgetCommandOutput,
  UpdateBudgetCommand,
} from "./commands/UpdateBudgetCommand";
import {
  type UpdateFarmCommandInput,
  type UpdateFarmCommandOutput,
  UpdateFarmCommand,
} from "./commands/UpdateFarmCommand";
import {
  type UpdateFleetCommandInput,
  type UpdateFleetCommandOutput,
  UpdateFleetCommand,
} from "./commands/UpdateFleetCommand";
import { type UpdateJobCommandInput, type UpdateJobCommandOutput, UpdateJobCommand } from "./commands/UpdateJobCommand";
import {
  type UpdateLimitCommandInput,
  type UpdateLimitCommandOutput,
  UpdateLimitCommand,
} from "./commands/UpdateLimitCommand";
import {
  type UpdateMonitorCommandInput,
  type UpdateMonitorCommandOutput,
  UpdateMonitorCommand,
} from "./commands/UpdateMonitorCommand";
import {
  type UpdateMonitorSettingsCommandInput,
  type UpdateMonitorSettingsCommandOutput,
  UpdateMonitorSettingsCommand,
} from "./commands/UpdateMonitorSettingsCommand";
import {
  type UpdateQueueCommandInput,
  type UpdateQueueCommandOutput,
  UpdateQueueCommand,
} from "./commands/UpdateQueueCommand";
import {
  type UpdateQueueEnvironmentCommandInput,
  type UpdateQueueEnvironmentCommandOutput,
  UpdateQueueEnvironmentCommand,
} from "./commands/UpdateQueueEnvironmentCommand";
import {
  type UpdateQueueFleetAssociationCommandInput,
  type UpdateQueueFleetAssociationCommandOutput,
  UpdateQueueFleetAssociationCommand,
} from "./commands/UpdateQueueFleetAssociationCommand";
import {
  type UpdateQueueLimitAssociationCommandInput,
  type UpdateQueueLimitAssociationCommandOutput,
  UpdateQueueLimitAssociationCommand,
} from "./commands/UpdateQueueLimitAssociationCommand";
import {
  type UpdateSessionCommandInput,
  type UpdateSessionCommandOutput,
  UpdateSessionCommand,
} from "./commands/UpdateSessionCommand";
import {
  type UpdateStepCommandInput,
  type UpdateStepCommandOutput,
  UpdateStepCommand,
} from "./commands/UpdateStepCommand";
import {
  type UpdateStorageProfileCommandInput,
  type UpdateStorageProfileCommandOutput,
  UpdateStorageProfileCommand,
} from "./commands/UpdateStorageProfileCommand";
import {
  type UpdateTaskCommandInput,
  type UpdateTaskCommandOutput,
  UpdateTaskCommand,
} from "./commands/UpdateTaskCommand";
import {
  type UpdateWorkerCommandInput,
  type UpdateWorkerCommandOutput,
  UpdateWorkerCommand,
} from "./commands/UpdateWorkerCommand";
import {
  type UpdateWorkerScheduleCommandInput,
  type UpdateWorkerScheduleCommandOutput,
  UpdateWorkerScheduleCommand,
} from "./commands/UpdateWorkerScheduleCommand";
import { DeadlineClient } from "./DeadlineClient";
import type { DeadlineServiceException } from "./models/DeadlineServiceException";
import type { ResourceNotFoundException } from "./models/errors";
import { paginateGetSessionsStatisticsAggregation } from "./pagination/GetSessionsStatisticsAggregationPaginator";
import { paginateListAvailableMeteredProducts } from "./pagination/ListAvailableMeteredProductsPaginator";
import { paginateListBudgets } from "./pagination/ListBudgetsPaginator";
import { paginateListFarmMembers } from "./pagination/ListFarmMembersPaginator";
import { paginateListFarms } from "./pagination/ListFarmsPaginator";
import { paginateListFleetMembers } from "./pagination/ListFleetMembersPaginator";
import { paginateListFleets } from "./pagination/ListFleetsPaginator";
import { paginateListJobMembers } from "./pagination/ListJobMembersPaginator";
import { paginateListJobParameterDefinitions } from "./pagination/ListJobParameterDefinitionsPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListLicenseEndpoints } from "./pagination/ListLicenseEndpointsPaginator";
import { paginateListLimits } from "./pagination/ListLimitsPaginator";
import { paginateListMeteredProducts } from "./pagination/ListMeteredProductsPaginator";
import { paginateListMonitors } from "./pagination/ListMonitorsPaginator";
import { paginateListQueueEnvironments } from "./pagination/ListQueueEnvironmentsPaginator";
import { paginateListQueueFleetAssociations } from "./pagination/ListQueueFleetAssociationsPaginator";
import { paginateListQueueLimitAssociations } from "./pagination/ListQueueLimitAssociationsPaginator";
import { paginateListQueueMembers } from "./pagination/ListQueueMembersPaginator";
import { paginateListQueues } from "./pagination/ListQueuesPaginator";
import { paginateListSessionActions } from "./pagination/ListSessionActionsPaginator";
import { paginateListSessionsForWorker } from "./pagination/ListSessionsForWorkerPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { paginateListStepConsumers } from "./pagination/ListStepConsumersPaginator";
import { paginateListStepDependencies } from "./pagination/ListStepDependenciesPaginator";
import { paginateListSteps } from "./pagination/ListStepsPaginator";
import { paginateListStorageProfilesForQueue } from "./pagination/ListStorageProfilesForQueuePaginator";
import { paginateListStorageProfiles } from "./pagination/ListStorageProfilesPaginator";
import { paginateListTasks } from "./pagination/ListTasksPaginator";
import { paginateListVolumes } from "./pagination/ListVolumesPaginator";
import { paginateListWorkers } from "./pagination/ListWorkersPaginator";
import { waitUntilFleetActive } from "./waiters/waitForFleetActive";
import { waitUntilJobComplete } from "./waiters/waitForJobComplete";
import { waitUntilJobCreateComplete } from "./waiters/waitForJobCreateComplete";
import { waitUntilJobSucceeded } from "./waiters/waitForJobSucceeded";
import { waitUntilLicenseEndpointDeleted } from "./waiters/waitForLicenseEndpointDeleted";
import { waitUntilLicenseEndpointValid } from "./waiters/waitForLicenseEndpointValid";
import { waitUntilQueueFleetAssociationStopped } from "./waiters/waitForQueueFleetAssociationStopped";
import { waitUntilQueueLimitAssociationStopped } from "./waiters/waitForQueueLimitAssociationStopped";
import { waitUntilQueueScheduling } from "./waiters/waitForQueueScheduling";
import { waitUntilQueueSchedulingBlocked } from "./waiters/waitForQueueSchedulingBlocked";

const commands = {
  AssociateMemberToFarmCommand,
  AssociateMemberToFleetCommand,
  AssociateMemberToJobCommand,
  AssociateMemberToQueueCommand,
  AssumeFleetRoleForReadCommand,
  AssumeFleetRoleForWorkerCommand,
  AssumeQueueRoleForReadCommand,
  AssumeQueueRoleForUserCommand,
  AssumeQueueRoleForWorkerCommand,
  BatchGetJobCommand,
  BatchGetJobEntityCommand,
  BatchGetSessionCommand,
  BatchGetSessionActionCommand,
  BatchGetStepCommand,
  BatchGetTaskCommand,
  BatchGetWorkerCommand,
  BatchUpdateJobCommand,
  BatchUpdateTaskCommand,
  CopyJobTemplateCommand,
  CreateBudgetCommand,
  CreateFarmCommand,
  CreateFleetCommand,
  CreateJobCommand,
  CreateLicenseEndpointCommand,
  CreateLimitCommand,
  CreateMonitorCommand,
  CreateQueueCommand,
  CreateQueueEnvironmentCommand,
  CreateQueueFleetAssociationCommand,
  CreateQueueLimitAssociationCommand,
  CreateStorageProfileCommand,
  CreateWorkerCommand,
  DeleteBudgetCommand,
  DeleteFarmCommand,
  DeleteFleetCommand,
  DeleteLicenseEndpointCommand,
  DeleteLimitCommand,
  DeleteMeteredProductCommand,
  DeleteMonitorCommand,
  DeleteQueueCommand,
  DeleteQueueEnvironmentCommand,
  DeleteQueueFleetAssociationCommand,
  DeleteQueueLimitAssociationCommand,
  DeleteStorageProfileCommand,
  DeleteVolumeCommand,
  DeleteWorkerCommand,
  DisassociateMemberFromFarmCommand,
  DisassociateMemberFromFleetCommand,
  DisassociateMemberFromJobCommand,
  DisassociateMemberFromQueueCommand,
  GetBudgetCommand,
  GetFarmCommand,
  GetFleetCommand,
  GetJobCommand,
  GetLicenseEndpointCommand,
  GetLimitCommand,
  GetMonitorCommand,
  GetMonitorSettingsCommand,
  GetQueueCommand,
  GetQueueEnvironmentCommand,
  GetQueueFleetAssociationCommand,
  GetQueueLimitAssociationCommand,
  GetSessionCommand,
  GetSessionActionCommand,
  GetSessionsStatisticsAggregationCommand,
  GetStepCommand,
  GetStorageProfileCommand,
  GetStorageProfileForQueueCommand,
  GetTaskCommand,
  GetVolumeCommand,
  GetWorkerCommand,
  ListAvailableMeteredProductsCommand,
  ListBudgetsCommand,
  ListFarmMembersCommand,
  ListFarmsCommand,
  ListFleetMembersCommand,
  ListFleetsCommand,
  ListJobMembersCommand,
  ListJobParameterDefinitionsCommand,
  ListJobsCommand,
  ListLicenseEndpointsCommand,
  ListLimitsCommand,
  ListMeteredProductsCommand,
  ListMonitorsCommand,
  ListQueueEnvironmentsCommand,
  ListQueueFleetAssociationsCommand,
  ListQueueLimitAssociationsCommand,
  ListQueueMembersCommand,
  ListQueuesCommand,
  ListSessionActionsCommand,
  ListSessionsCommand,
  ListSessionsForWorkerCommand,
  ListStepConsumersCommand,
  ListStepDependenciesCommand,
  ListStepsCommand,
  ListStorageProfilesCommand,
  ListStorageProfilesForQueueCommand,
  ListTagsForResourceCommand,
  ListTasksCommand,
  ListVolumesCommand,
  ListWorkersCommand,
  PutMeteredProductCommand,
  SearchJobsCommand,
  SearchStepsCommand,
  SearchTasksCommand,
  SearchWorkersCommand,
  StartSessionsStatisticsAggregationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBudgetCommand,
  UpdateFarmCommand,
  UpdateFleetCommand,
  UpdateJobCommand,
  UpdateLimitCommand,
  UpdateMonitorCommand,
  UpdateMonitorSettingsCommand,
  UpdateQueueCommand,
  UpdateQueueEnvironmentCommand,
  UpdateQueueFleetAssociationCommand,
  UpdateQueueLimitAssociationCommand,
  UpdateSessionCommand,
  UpdateStepCommand,
  UpdateStorageProfileCommand,
  UpdateTaskCommand,
  UpdateWorkerCommand,
  UpdateWorkerScheduleCommand,
};
const paginators = {
  paginateGetSessionsStatisticsAggregation,
  paginateListAvailableMeteredProducts,
  paginateListBudgets,
  paginateListFarmMembers,
  paginateListFarms,
  paginateListFleetMembers,
  paginateListFleets,
  paginateListJobMembers,
  paginateListJobParameterDefinitions,
  paginateListJobs,
  paginateListLicenseEndpoints,
  paginateListLimits,
  paginateListMeteredProducts,
  paginateListMonitors,
  paginateListQueueEnvironments,
  paginateListQueueFleetAssociations,
  paginateListQueueLimitAssociations,
  paginateListQueueMembers,
  paginateListQueues,
  paginateListSessionActions,
  paginateListSessions,
  paginateListSessionsForWorker,
  paginateListStepConsumers,
  paginateListStepDependencies,
  paginateListSteps,
  paginateListStorageProfiles,
  paginateListStorageProfilesForQueue,
  paginateListTasks,
  paginateListVolumes,
  paginateListWorkers,
};
const waiters = {
  waitUntilFleetActive,
  waitUntilJobCreateComplete,
  waitUntilJobComplete,
  waitUntilJobSucceeded,
  waitUntilLicenseEndpointValid,
  waitUntilLicenseEndpointDeleted,
  waitUntilQueueSchedulingBlocked,
  waitUntilQueueScheduling,
  waitUntilQueueFleetAssociationStopped,
  waitUntilQueueLimitAssociationStopped,
};

/**
 * @public
 */
export interface DeadlineRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Deadline {
  /**
   * @see {@link AssociateMemberToFarmCommand}
   */
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssociateMemberToFarmCommandOutput>;
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    cb: (err: any, data?: AssociateMemberToFarmCommandOutput) => void
  ): void;
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssociateMemberToFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToFleetCommand}
   */
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssociateMemberToFleetCommandOutput>;
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    cb: (err: any, data?: AssociateMemberToFleetCommandOutput) => void
  ): void;
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssociateMemberToFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToJobCommand}
   */
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssociateMemberToJobCommandOutput>;
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    cb: (err: any, data?: AssociateMemberToJobCommandOutput) => void
  ): void;
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssociateMemberToJobCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToQueueCommand}
   */
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssociateMemberToQueueCommandOutput>;
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    cb: (err: any, data?: AssociateMemberToQueueCommandOutput) => void
  ): void;
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssociateMemberToQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeFleetRoleForReadCommand}
   */
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssumeFleetRoleForReadCommandOutput>;
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    cb: (err: any, data?: AssumeFleetRoleForReadCommandOutput) => void
  ): void;
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssumeFleetRoleForReadCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeFleetRoleForWorkerCommand}
   */
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssumeFleetRoleForWorkerCommandOutput>;
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    cb: (err: any, data?: AssumeFleetRoleForWorkerCommandOutput) => void
  ): void;
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssumeFleetRoleForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForReadCommand}
   */
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssumeQueueRoleForReadCommandOutput>;
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForReadCommandOutput) => void
  ): void;
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssumeQueueRoleForReadCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForUserCommand}
   */
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssumeQueueRoleForUserCommandOutput>;
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForUserCommandOutput) => void
  ): void;
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssumeQueueRoleForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForWorkerCommand}
   */
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<AssumeQueueRoleForWorkerCommandOutput>;
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForWorkerCommandOutput) => void
  ): void;
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: AssumeQueueRoleForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetJobCommand}
   */
  batchGetJob(
    args: BatchGetJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetJobCommandOutput>;
  batchGetJob(
    args: BatchGetJobCommandInput,
    cb: (err: any, data?: BatchGetJobCommandOutput) => void
  ): void;
  batchGetJob(
    args: BatchGetJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetJobEntityCommand}
   */
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetJobEntityCommandOutput>;
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    cb: (err: any, data?: BatchGetJobEntityCommandOutput) => void
  ): void;
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetJobEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSessionCommand}
   */
  batchGetSession(
    args: BatchGetSessionCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetSessionCommandOutput>;
  batchGetSession(
    args: BatchGetSessionCommandInput,
    cb: (err: any, data?: BatchGetSessionCommandOutput) => void
  ): void;
  batchGetSession(
    args: BatchGetSessionCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSessionActionCommand}
   */
  batchGetSessionAction(
    args: BatchGetSessionActionCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetSessionActionCommandOutput>;
  batchGetSessionAction(
    args: BatchGetSessionActionCommandInput,
    cb: (err: any, data?: BatchGetSessionActionCommandOutput) => void
  ): void;
  batchGetSessionAction(
    args: BatchGetSessionActionCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetSessionActionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetStepCommand}
   */
  batchGetStep(
    args: BatchGetStepCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetStepCommandOutput>;
  batchGetStep(
    args: BatchGetStepCommandInput,
    cb: (err: any, data?: BatchGetStepCommandOutput) => void
  ): void;
  batchGetStep(
    args: BatchGetStepCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetStepCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTaskCommand}
   */
  batchGetTask(
    args: BatchGetTaskCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetTaskCommandOutput>;
  batchGetTask(
    args: BatchGetTaskCommandInput,
    cb: (err: any, data?: BatchGetTaskCommandOutput) => void
  ): void;
  batchGetTask(
    args: BatchGetTaskCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetWorkerCommand}
   */
  batchGetWorker(
    args: BatchGetWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchGetWorkerCommandOutput>;
  batchGetWorker(
    args: BatchGetWorkerCommandInput,
    cb: (err: any, data?: BatchGetWorkerCommandOutput) => void
  ): void;
  batchGetWorker(
    args: BatchGetWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchGetWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateJobCommand}
   */
  batchUpdateJob(
    args: BatchUpdateJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchUpdateJobCommandOutput>;
  batchUpdateJob(
    args: BatchUpdateJobCommandInput,
    cb: (err: any, data?: BatchUpdateJobCommandOutput) => void
  ): void;
  batchUpdateJob(
    args: BatchUpdateJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchUpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateTaskCommand}
   */
  batchUpdateTask(
    args: BatchUpdateTaskCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<BatchUpdateTaskCommandOutput>;
  batchUpdateTask(
    args: BatchUpdateTaskCommandInput,
    cb: (err: any, data?: BatchUpdateTaskCommandOutput) => void
  ): void;
  batchUpdateTask(
    args: BatchUpdateTaskCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: BatchUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyJobTemplateCommand}
   */
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CopyJobTemplateCommandOutput>;
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    cb: (err: any, data?: CopyJobTemplateCommandOutput) => void
  ): void;
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CopyJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBudgetCommand}
   */
  createBudget(
    args: CreateBudgetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateBudgetCommandOutput>;
  createBudget(
    args: CreateBudgetCommandInput,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;
  createBudget(
    args: CreateBudgetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFarmCommand}
   */
  createFarm(
    args: CreateFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateFarmCommandOutput>;
  createFarm(
    args: CreateFarmCommandInput,
    cb: (err: any, data?: CreateFarmCommandOutput) => void
  ): void;
  createFarm(
    args: CreateFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateFleetCommandOutput>;
  createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseEndpointCommand}
   */
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateLicenseEndpointCommandOutput>;
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    cb: (err: any, data?: CreateLicenseEndpointCommandOutput) => void
  ): void;
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLimitCommand}
   */
  createLimit(
    args: CreateLimitCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateLimitCommandOutput>;
  createLimit(
    args: CreateLimitCommandInput,
    cb: (err: any, data?: CreateLimitCommandOutput) => void
  ): void;
  createLimit(
    args: CreateLimitCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(
    args: CreateMonitorCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateMonitorCommandOutput>;
  createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateQueueCommandOutput>;
  createQueue(
    args: CreateQueueCommandInput,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueEnvironmentCommand}
   */
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateQueueEnvironmentCommandOutput>;
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    cb: (err: any, data?: CreateQueueEnvironmentCommandOutput) => void
  ): void;
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueFleetAssociationCommand}
   */
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateQueueFleetAssociationCommandOutput>;
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    cb: (err: any, data?: CreateQueueFleetAssociationCommandOutput) => void
  ): void;
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueLimitAssociationCommand}
   */
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateQueueLimitAssociationCommandOutput>;
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    cb: (err: any, data?: CreateQueueLimitAssociationCommandOutput) => void
  ): void;
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageProfileCommand}
   */
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateStorageProfileCommandOutput>;
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    cb: (err: any, data?: CreateStorageProfileCommandOutput) => void
  ): void;
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerCommand}
   */
  createWorker(
    args: CreateWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<CreateWorkerCommandOutput>;
  createWorker(
    args: CreateWorkerCommandInput,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;
  createWorker(
    args: CreateWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBudgetCommand}
   */
  deleteBudget(
    args: DeleteBudgetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteBudgetCommandOutput>;
  deleteBudget(
    args: DeleteBudgetCommandInput,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;
  deleteBudget(
    args: DeleteBudgetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFarmCommand}
   */
  deleteFarm(
    args: DeleteFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteFarmCommandOutput>;
  deleteFarm(
    args: DeleteFarmCommandInput,
    cb: (err: any, data?: DeleteFarmCommandOutput) => void
  ): void;
  deleteFarm(
    args: DeleteFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(
    args: DeleteFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteFleetCommandOutput>;
  deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseEndpointCommand}
   */
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteLicenseEndpointCommandOutput>;
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    cb: (err: any, data?: DeleteLicenseEndpointCommandOutput) => void
  ): void;
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLimitCommand}
   */
  deleteLimit(
    args: DeleteLimitCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteLimitCommandOutput>;
  deleteLimit(
    args: DeleteLimitCommandInput,
    cb: (err: any, data?: DeleteLimitCommandOutput) => void
  ): void;
  deleteLimit(
    args: DeleteLimitCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMeteredProductCommand}
   */
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteMeteredProductCommandOutput>;
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    cb: (err: any, data?: DeleteMeteredProductCommandOutput) => void
  ): void;
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteMeteredProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteQueueCommandOutput>;
  deleteQueue(
    args: DeleteQueueCommandInput,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueEnvironmentCommand}
   */
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteQueueEnvironmentCommandOutput>;
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    cb: (err: any, data?: DeleteQueueEnvironmentCommandOutput) => void
  ): void;
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueFleetAssociationCommand}
   */
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteQueueFleetAssociationCommandOutput>;
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    cb: (err: any, data?: DeleteQueueFleetAssociationCommandOutput) => void
  ): void;
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueLimitAssociationCommand}
   */
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteQueueLimitAssociationCommandOutput>;
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    cb: (err: any, data?: DeleteQueueLimitAssociationCommandOutput) => void
  ): void;
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageProfileCommand}
   */
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteStorageProfileCommandOutput>;
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    cb: (err: any, data?: DeleteStorageProfileCommandOutput) => void
  ): void;
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerCommand}
   */
  deleteWorker(
    args: DeleteWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DeleteWorkerCommandOutput>;
  deleteWorker(
    args: DeleteWorkerCommandInput,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;
  deleteWorker(
    args: DeleteWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromFarmCommand}
   */
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DisassociateMemberFromFarmCommandOutput>;
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    cb: (err: any, data?: DisassociateMemberFromFarmCommandOutput) => void
  ): void;
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DisassociateMemberFromFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromFleetCommand}
   */
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DisassociateMemberFromFleetCommandOutput>;
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    cb: (err: any, data?: DisassociateMemberFromFleetCommandOutput) => void
  ): void;
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DisassociateMemberFromFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromJobCommand}
   */
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DisassociateMemberFromJobCommandOutput>;
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    cb: (err: any, data?: DisassociateMemberFromJobCommandOutput) => void
  ): void;
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DisassociateMemberFromJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromQueueCommand}
   */
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<DisassociateMemberFromQueueCommandOutput>;
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    cb: (err: any, data?: DisassociateMemberFromQueueCommandOutput) => void
  ): void;
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: DisassociateMemberFromQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBudgetCommand}
   */
  getBudget(
    args: GetBudgetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetBudgetCommandOutput>;
  getBudget(
    args: GetBudgetCommandInput,
    cb: (err: any, data?: GetBudgetCommandOutput) => void
  ): void;
  getBudget(
    args: GetBudgetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFarmCommand}
   */
  getFarm(
    args: GetFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetFarmCommandOutput>;
  getFarm(
    args: GetFarmCommandInput,
    cb: (err: any, data?: GetFarmCommandOutput) => void
  ): void;
  getFarm(
    args: GetFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFleetCommand}
   */
  getFleet(
    args: GetFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetFleetCommandOutput>;
  getFleet(
    args: GetFleetCommandInput,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;
  getFleet(
    args: GetFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseEndpointCommand}
   */
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetLicenseEndpointCommandOutput>;
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    cb: (err: any, data?: GetLicenseEndpointCommandOutput) => void
  ): void;
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLimitCommand}
   */
  getLimit(
    args: GetLimitCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetLimitCommandOutput>;
  getLimit(
    args: GetLimitCommandInput,
    cb: (err: any, data?: GetLimitCommandOutput) => void
  ): void;
  getLimit(
    args: GetLimitCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorCommand}
   */
  getMonitor(
    args: GetMonitorCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetMonitorCommandOutput>;
  getMonitor(
    args: GetMonitorCommandInput,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;
  getMonitor(
    args: GetMonitorCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorSettingsCommand}
   */
  getMonitorSettings(
    args: GetMonitorSettingsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetMonitorSettingsCommandOutput>;
  getMonitorSettings(
    args: GetMonitorSettingsCommandInput,
    cb: (err: any, data?: GetMonitorSettingsCommandOutput) => void
  ): void;
  getMonitorSettings(
    args: GetMonitorSettingsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetMonitorSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueCommand}
   */
  getQueue(
    args: GetQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetQueueCommandOutput>;
  getQueue(
    args: GetQueueCommandInput,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;
  getQueue(
    args: GetQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueEnvironmentCommand}
   */
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetQueueEnvironmentCommandOutput>;
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    cb: (err: any, data?: GetQueueEnvironmentCommandOutput) => void
  ): void;
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueFleetAssociationCommand}
   */
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetQueueFleetAssociationCommandOutput>;
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    cb: (err: any, data?: GetQueueFleetAssociationCommandOutput) => void
  ): void;
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueLimitAssociationCommand}
   */
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetQueueLimitAssociationCommandOutput>;
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    cb: (err: any, data?: GetQueueLimitAssociationCommandOutput) => void
  ): void;
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionActionCommand}
   */
  getSessionAction(
    args: GetSessionActionCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetSessionActionCommandOutput>;
  getSessionAction(
    args: GetSessionActionCommandInput,
    cb: (err: any, data?: GetSessionActionCommandOutput) => void
  ): void;
  getSessionAction(
    args: GetSessionActionCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetSessionActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionsStatisticsAggregationCommand}
   */
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetSessionsStatisticsAggregationCommandOutput>;
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    cb: (err: any, data?: GetSessionsStatisticsAggregationCommandOutput) => void
  ): void;
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetSessionsStatisticsAggregationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStepCommand}
   */
  getStep(
    args: GetStepCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetStepCommandOutput>;
  getStep(
    args: GetStepCommandInput,
    cb: (err: any, data?: GetStepCommandOutput) => void
  ): void;
  getStep(
    args: GetStepCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageProfileCommand}
   */
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetStorageProfileCommandOutput>;
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    cb: (err: any, data?: GetStorageProfileCommandOutput) => void
  ): void;
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageProfileForQueueCommand}
   */
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetStorageProfileForQueueCommandOutput>;
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    cb: (err: any, data?: GetStorageProfileForQueueCommandOutput) => void
  ): void;
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetStorageProfileForQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaskCommand}
   */
  getTask(
    args: GetTaskCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetTaskCommandOutput>;
  getTask(
    args: GetTaskCommandInput,
    cb: (err: any, data?: GetTaskCommandOutput) => void
  ): void;
  getTask(
    args: GetTaskCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVolumeCommand}
   */
  getVolume(
    args: GetVolumeCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetVolumeCommandOutput>;
  getVolume(
    args: GetVolumeCommandInput,
    cb: (err: any, data?: GetVolumeCommandOutput) => void
  ): void;
  getVolume(
    args: GetVolumeCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkerCommand}
   */
  getWorker(
    args: GetWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<GetWorkerCommandOutput>;
  getWorker(
    args: GetWorkerCommandInput,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;
  getWorker(
    args: GetWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableMeteredProductsCommand}
   */
  listAvailableMeteredProducts(): Promise<ListAvailableMeteredProductsCommandOutput>;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListAvailableMeteredProductsCommandOutput>;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    cb: (err: any, data?: ListAvailableMeteredProductsCommandOutput) => void
  ): void;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListAvailableMeteredProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBudgetsCommand}
   */
  listBudgets(
    args: ListBudgetsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListBudgetsCommandOutput>;
  listBudgets(
    args: ListBudgetsCommandInput,
    cb: (err: any, data?: ListBudgetsCommandOutput) => void
  ): void;
  listBudgets(
    args: ListBudgetsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFarmMembersCommand}
   */
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListFarmMembersCommandOutput>;
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    cb: (err: any, data?: ListFarmMembersCommandOutput) => void
  ): void;
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListFarmMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFarmsCommand}
   */
  listFarms(): Promise<ListFarmsCommandOutput>;
  listFarms(
    args: ListFarmsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListFarmsCommandOutput>;
  listFarms(
    args: ListFarmsCommandInput,
    cb: (err: any, data?: ListFarmsCommandOutput) => void
  ): void;
  listFarms(
    args: ListFarmsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListFarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetMembersCommand}
   */
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListFleetMembersCommandOutput>;
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    cb: (err: any, data?: ListFleetMembersCommandOutput) => void
  ): void;
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListFleetMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(
    args: ListFleetsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobMembersCommand}
   */
  listJobMembers(
    args: ListJobMembersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListJobMembersCommandOutput>;
  listJobMembers(
    args: ListJobMembersCommandInput,
    cb: (err: any, data?: ListJobMembersCommandOutput) => void
  ): void;
  listJobMembers(
    args: ListJobMembersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListJobMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobParameterDefinitionsCommand}
   */
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListJobParameterDefinitionsCommandOutput>;
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    cb: (err: any, data?: ListJobParameterDefinitionsCommandOutput) => void
  ): void;
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListJobParameterDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseEndpointsCommand}
   */
  listLicenseEndpoints(): Promise<ListLicenseEndpointsCommandOutput>;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListLicenseEndpointsCommandOutput>;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    cb: (err: any, data?: ListLicenseEndpointsCommandOutput) => void
  ): void;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListLicenseEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLimitsCommand}
   */
  listLimits(
    args: ListLimitsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListLimitsCommandOutput>;
  listLimits(
    args: ListLimitsCommandInput,
    cb: (err: any, data?: ListLimitsCommandOutput) => void
  ): void;
  listLimits(
    args: ListLimitsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMeteredProductsCommand}
   */
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListMeteredProductsCommandOutput>;
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    cb: (err: any, data?: ListMeteredProductsCommandOutput) => void
  ): void;
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListMeteredProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueEnvironmentsCommand}
   */
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListQueueEnvironmentsCommandOutput>;
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    cb: (err: any, data?: ListQueueEnvironmentsCommandOutput) => void
  ): void;
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListQueueEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueFleetAssociationsCommand}
   */
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListQueueFleetAssociationsCommandOutput>;
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    cb: (err: any, data?: ListQueueFleetAssociationsCommandOutput) => void
  ): void;
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListQueueFleetAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueLimitAssociationsCommand}
   */
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListQueueLimitAssociationsCommandOutput>;
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    cb: (err: any, data?: ListQueueLimitAssociationsCommandOutput) => void
  ): void;
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListQueueLimitAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueMembersCommand}
   */
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListQueueMembersCommandOutput>;
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    cb: (err: any, data?: ListQueueMembersCommandOutput) => void
  ): void;
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListQueueMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListQueuesCommandOutput>;
  listQueues(
    args: ListQueuesCommandInput,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionActionsCommand}
   */
  listSessionActions(
    args: ListSessionActionsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListSessionActionsCommandOutput>;
  listSessionActions(
    args: ListSessionActionsCommandInput,
    cb: (err: any, data?: ListSessionActionsCommandOutput) => void
  ): void;
  listSessionActions(
    args: ListSessionActionsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListSessionActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsForWorkerCommand}
   */
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListSessionsForWorkerCommandOutput>;
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    cb: (err: any, data?: ListSessionsForWorkerCommandOutput) => void
  ): void;
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListSessionsForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepConsumersCommand}
   */
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListStepConsumersCommandOutput>;
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    cb: (err: any, data?: ListStepConsumersCommandOutput) => void
  ): void;
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListStepConsumersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepDependenciesCommand}
   */
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListStepDependenciesCommandOutput>;
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    cb: (err: any, data?: ListStepDependenciesCommandOutput) => void
  ): void;
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListStepDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepsCommand}
   */
  listSteps(
    args: ListStepsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListStepsCommandOutput>;
  listSteps(
    args: ListStepsCommandInput,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;
  listSteps(
    args: ListStepsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageProfilesCommand}
   */
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListStorageProfilesCommandOutput>;
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    cb: (err: any, data?: ListStorageProfilesCommandOutput) => void
  ): void;
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListStorageProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageProfilesForQueueCommand}
   */
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListStorageProfilesForQueueCommandOutput>;
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    cb: (err: any, data?: ListStorageProfilesForQueueCommandOutput) => void
  ): void;
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListStorageProfilesForQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(
    args: ListTasksCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  listTasks(
    args: ListTasksCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVolumesCommand}
   */
  listVolumes(
    args: ListVolumesCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListVolumesCommandOutput>;
  listVolumes(
    args: ListVolumesCommandInput,
    cb: (err: any, data?: ListVolumesCommandOutput) => void
  ): void;
  listVolumes(
    args: ListVolumesCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkersCommand}
   */
  listWorkers(
    args: ListWorkersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<ListWorkersCommandOutput>;
  listWorkers(
    args: ListWorkersCommandInput,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;
  listWorkers(
    args: ListWorkersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMeteredProductCommand}
   */
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<PutMeteredProductCommandOutput>;
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    cb: (err: any, data?: PutMeteredProductCommandOutput) => void
  ): void;
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: PutMeteredProductCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchJobsCommand}
   */
  searchJobs(
    args: SearchJobsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<SearchJobsCommandOutput>;
  searchJobs(
    args: SearchJobsCommandInput,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;
  searchJobs(
    args: SearchJobsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchStepsCommand}
   */
  searchSteps(
    args: SearchStepsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<SearchStepsCommandOutput>;
  searchSteps(
    args: SearchStepsCommandInput,
    cb: (err: any, data?: SearchStepsCommandOutput) => void
  ): void;
  searchSteps(
    args: SearchStepsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: SearchStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTasksCommand}
   */
  searchTasks(
    args: SearchTasksCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<SearchTasksCommandOutput>;
  searchTasks(
    args: SearchTasksCommandInput,
    cb: (err: any, data?: SearchTasksCommandOutput) => void
  ): void;
  searchTasks(
    args: SearchTasksCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: SearchTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchWorkersCommand}
   */
  searchWorkers(
    args: SearchWorkersCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<SearchWorkersCommandOutput>;
  searchWorkers(
    args: SearchWorkersCommandInput,
    cb: (err: any, data?: SearchWorkersCommandOutput) => void
  ): void;
  searchWorkers(
    args: SearchWorkersCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: SearchWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSessionsStatisticsAggregationCommand}
   */
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<StartSessionsStatisticsAggregationCommandOutput>;
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    cb: (err: any, data?: StartSessionsStatisticsAggregationCommandOutput) => void
  ): void;
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: StartSessionsStatisticsAggregationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBudgetCommand}
   */
  updateBudget(
    args: UpdateBudgetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateBudgetCommandOutput>;
  updateBudget(
    args: UpdateBudgetCommandInput,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;
  updateBudget(
    args: UpdateBudgetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFarmCommand}
   */
  updateFarm(
    args: UpdateFarmCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateFarmCommandOutput>;
  updateFarm(
    args: UpdateFarmCommandInput,
    cb: (err: any, data?: UpdateFarmCommandOutput) => void
  ): void;
  updateFarm(
    args: UpdateFarmCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(
    args: UpdateFleetCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateJobCommandOutput>;
  updateJob(
    args: UpdateJobCommandInput,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  updateJob(
    args: UpdateJobCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLimitCommand}
   */
  updateLimit(
    args: UpdateLimitCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateLimitCommandOutput>;
  updateLimit(
    args: UpdateLimitCommandInput,
    cb: (err: any, data?: UpdateLimitCommandOutput) => void
  ): void;
  updateLimit(
    args: UpdateLimitCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitorCommand}
   */
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateMonitorCommandOutput>;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitorSettingsCommand}
   */
  updateMonitorSettings(
    args: UpdateMonitorSettingsCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateMonitorSettingsCommandOutput>;
  updateMonitorSettings(
    args: UpdateMonitorSettingsCommandInput,
    cb: (err: any, data?: UpdateMonitorSettingsCommandOutput) => void
  ): void;
  updateMonitorSettings(
    args: UpdateMonitorSettingsCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateMonitorSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueCommand}
   */
  updateQueue(
    args: UpdateQueueCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateQueueCommandOutput>;
  updateQueue(
    args: UpdateQueueCommandInput,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;
  updateQueue(
    args: UpdateQueueCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueEnvironmentCommand}
   */
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateQueueEnvironmentCommandOutput>;
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    cb: (err: any, data?: UpdateQueueEnvironmentCommandOutput) => void
  ): void;
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueFleetAssociationCommand}
   */
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateQueueFleetAssociationCommandOutput>;
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    cb: (err: any, data?: UpdateQueueFleetAssociationCommandOutput) => void
  ): void;
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueLimitAssociationCommand}
   */
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateQueueLimitAssociationCommandOutput>;
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    cb: (err: any, data?: UpdateQueueLimitAssociationCommandOutput) => void
  ): void;
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionCommand}
   */
  updateSession(
    args: UpdateSessionCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateSessionCommandOutput>;
  updateSession(
    args: UpdateSessionCommandInput,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;
  updateSession(
    args: UpdateSessionCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStepCommand}
   */
  updateStep(
    args: UpdateStepCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateStepCommandOutput>;
  updateStep(
    args: UpdateStepCommandInput,
    cb: (err: any, data?: UpdateStepCommandOutput) => void
  ): void;
  updateStep(
    args: UpdateStepCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateStepCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageProfileCommand}
   */
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateStorageProfileCommandOutput>;
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    cb: (err: any, data?: UpdateStorageProfileCommandOutput) => void
  ): void;
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskCommand}
   */
  updateTask(
    args: UpdateTaskCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateTaskCommandOutput>;
  updateTask(
    args: UpdateTaskCommandInput,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
  updateTask(
    args: UpdateTaskCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerCommand}
   */
  updateWorker(
    args: UpdateWorkerCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateWorkerCommandOutput>;
  updateWorker(
    args: UpdateWorkerCommandInput,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;
  updateWorker(
    args: UpdateWorkerCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerScheduleCommand}
   */
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    options?: DeadlineRequestOptions
  ): Promise<UpdateWorkerScheduleCommandOutput>;
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    cb: (err: any, data?: UpdateWorkerScheduleCommandOutput) => void
  ): void;
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    options: DeadlineRequestOptions,
    cb: (err: any, data?: UpdateWorkerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionsStatisticsAggregationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSessionsStatisticsAggregationCommandOutput}.
   */
  paginateGetSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSessionsStatisticsAggregationCommandOutput>;

  /**
   * @see {@link ListAvailableMeteredProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAvailableMeteredProductsCommandOutput}.
   */
  paginateListAvailableMeteredProducts(
    args?: ListAvailableMeteredProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAvailableMeteredProductsCommandOutput>;

  /**
   * @see {@link ListBudgetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBudgetsCommandOutput}.
   */
  paginateListBudgets(
    args: ListBudgetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBudgetsCommandOutput>;

  /**
   * @see {@link ListFarmMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFarmMembersCommandOutput}.
   */
  paginateListFarmMembers(
    args: ListFarmMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFarmMembersCommandOutput>;

  /**
   * @see {@link ListFarmsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFarmsCommandOutput}.
   */
  paginateListFarms(
    args?: ListFarmsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFarmsCommandOutput>;

  /**
   * @see {@link ListFleetMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFleetMembersCommandOutput}.
   */
  paginateListFleetMembers(
    args: ListFleetMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFleetMembersCommandOutput>;

  /**
   * @see {@link ListFleetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFleetsCommandOutput}.
   */
  paginateListFleets(
    args: ListFleetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFleetsCommandOutput>;

  /**
   * @see {@link ListJobMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobMembersCommandOutput}.
   */
  paginateListJobMembers(
    args: ListJobMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobMembersCommandOutput>;

  /**
   * @see {@link ListJobParameterDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobParameterDefinitionsCommandOutput}.
   */
  paginateListJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobParameterDefinitionsCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListLicenseEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLicenseEndpointsCommandOutput}.
   */
  paginateListLicenseEndpoints(
    args?: ListLicenseEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLicenseEndpointsCommandOutput>;

  /**
   * @see {@link ListLimitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLimitsCommandOutput}.
   */
  paginateListLimits(
    args: ListLimitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLimitsCommandOutput>;

  /**
   * @see {@link ListMeteredProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMeteredProductsCommandOutput}.
   */
  paginateListMeteredProducts(
    args: ListMeteredProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMeteredProductsCommandOutput>;

  /**
   * @see {@link ListMonitorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMonitorsCommandOutput}.
   */
  paginateListMonitors(
    args?: ListMonitorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMonitorsCommandOutput>;

  /**
   * @see {@link ListQueueEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueueEnvironmentsCommandOutput}.
   */
  paginateListQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueueEnvironmentsCommandOutput>;

  /**
   * @see {@link ListQueueFleetAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueueFleetAssociationsCommandOutput}.
   */
  paginateListQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueueFleetAssociationsCommandOutput>;

  /**
   * @see {@link ListQueueLimitAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueueLimitAssociationsCommandOutput}.
   */
  paginateListQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueueLimitAssociationsCommandOutput>;

  /**
   * @see {@link ListQueueMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueueMembersCommandOutput}.
   */
  paginateListQueueMembers(
    args: ListQueueMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueueMembersCommandOutput>;

  /**
   * @see {@link ListQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueuesCommandOutput}.
   */
  paginateListQueues(
    args: ListQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueuesCommandOutput>;

  /**
   * @see {@link ListSessionActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionActionsCommandOutput}.
   */
  paginateListSessionActions(
    args: ListSessionActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionActionsCommandOutput>;

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;

  /**
   * @see {@link ListSessionsForWorkerCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsForWorkerCommandOutput}.
   */
  paginateListSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsForWorkerCommandOutput>;

  /**
   * @see {@link ListStepConsumersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStepConsumersCommandOutput}.
   */
  paginateListStepConsumers(
    args: ListStepConsumersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStepConsumersCommandOutput>;

  /**
   * @see {@link ListStepDependenciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStepDependenciesCommandOutput}.
   */
  paginateListStepDependencies(
    args: ListStepDependenciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStepDependenciesCommandOutput>;

  /**
   * @see {@link ListStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStepsCommandOutput}.
   */
  paginateListSteps(
    args: ListStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStepsCommandOutput>;

  /**
   * @see {@link ListStorageProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStorageProfilesCommandOutput}.
   */
  paginateListStorageProfiles(
    args: ListStorageProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStorageProfilesCommandOutput>;

  /**
   * @see {@link ListStorageProfilesForQueueCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStorageProfilesForQueueCommandOutput}.
   */
  paginateListStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStorageProfilesForQueueCommandOutput>;

  /**
   * @see {@link ListTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTasksCommandOutput}.
   */
  paginateListTasks(
    args: ListTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTasksCommandOutput>;

  /**
   * @see {@link ListVolumesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVolumesCommandOutput}.
   */
  paginateListVolumes(
    args: ListVolumesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVolumesCommandOutput>;

  /**
   * @see {@link ListWorkersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkersCommandOutput}.
   */
  paginateListWorkers(
    args: ListWorkersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkersCommandOutput>;

  /**
   * @see {@link GetFleetCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFleetActive(
    args: GetFleetCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetFleetCommandOutput>>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobCreateComplete(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetJobCommandOutput>>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobComplete(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetJobCommandOutput>>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobSucceeded(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetJobCommandOutput>>;

  /**
   * @see {@link GetLicenseEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLicenseEndpointValid(
    args: GetLicenseEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetLicenseEndpointCommandOutput>>;

  /**
   * @see {@link GetLicenseEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLicenseEndpointDeleted(
    args: GetLicenseEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link GetQueueCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueSchedulingBlocked(
    args: GetQueueCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetQueueCommandOutput>>;

  /**
   * @see {@link GetQueueCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueScheduling(
    args: GetQueueCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetQueueCommandOutput>>;

  /**
   * @see {@link GetQueueFleetAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueFleetAssociationStopped(
    args: GetQueueFleetAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetQueueFleetAssociationCommandOutput>>;

  /**
   * @see {@link GetQueueLimitAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueLimitAssociationStopped(
    args: GetQueueLimitAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult<GetQueueLimitAssociationCommandOutput>>;
}

/**
 * <p>The Amazon Web Services Deadline Cloud API provides infrastructure and centralized management for your projects. Use the Deadline Cloud API to onboard users, assign projects, and attach permissions specific to their job function.</p> <p>With Deadline Cloud, content production teams can deploy resources for their workforce securely in the cloud, reducing the costs of added physical infrastructure. Keep your content production operations secure, while allowing your contributors to access the tools they need, such as scalable high-speed storage, licenses, and cost management services.</p>
 * @public
 */
export class Deadline extends DeadlineClient implements Deadline {}
createAggregatedClient(commands, Deadline, { paginators, waiters });
