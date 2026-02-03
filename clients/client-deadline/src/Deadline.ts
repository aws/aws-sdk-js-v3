// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  AssociateMemberToFarmCommand,
  AssociateMemberToFarmCommandInput,
  AssociateMemberToFarmCommandOutput,
} from "./commands/AssociateMemberToFarmCommand";
import {
  AssociateMemberToFleetCommand,
  AssociateMemberToFleetCommandInput,
  AssociateMemberToFleetCommandOutput,
} from "./commands/AssociateMemberToFleetCommand";
import {
  AssociateMemberToJobCommand,
  AssociateMemberToJobCommandInput,
  AssociateMemberToJobCommandOutput,
} from "./commands/AssociateMemberToJobCommand";
import {
  AssociateMemberToQueueCommand,
  AssociateMemberToQueueCommandInput,
  AssociateMemberToQueueCommandOutput,
} from "./commands/AssociateMemberToQueueCommand";
import {
  AssumeFleetRoleForReadCommand,
  AssumeFleetRoleForReadCommandInput,
  AssumeFleetRoleForReadCommandOutput,
} from "./commands/AssumeFleetRoleForReadCommand";
import {
  AssumeFleetRoleForWorkerCommand,
  AssumeFleetRoleForWorkerCommandInput,
  AssumeFleetRoleForWorkerCommandOutput,
} from "./commands/AssumeFleetRoleForWorkerCommand";
import {
  AssumeQueueRoleForReadCommand,
  AssumeQueueRoleForReadCommandInput,
  AssumeQueueRoleForReadCommandOutput,
} from "./commands/AssumeQueueRoleForReadCommand";
import {
  AssumeQueueRoleForUserCommand,
  AssumeQueueRoleForUserCommandInput,
  AssumeQueueRoleForUserCommandOutput,
} from "./commands/AssumeQueueRoleForUserCommand";
import {
  AssumeQueueRoleForWorkerCommand,
  AssumeQueueRoleForWorkerCommandInput,
  AssumeQueueRoleForWorkerCommandOutput,
} from "./commands/AssumeQueueRoleForWorkerCommand";
import {
  BatchGetJobEntityCommand,
  BatchGetJobEntityCommandInput,
  BatchGetJobEntityCommandOutput,
} from "./commands/BatchGetJobEntityCommand";
import {
  CopyJobTemplateCommand,
  CopyJobTemplateCommandInput,
  CopyJobTemplateCommandOutput,
} from "./commands/CopyJobTemplateCommand";
import {
  CreateBudgetCommand,
  CreateBudgetCommandInput,
  CreateBudgetCommandOutput,
} from "./commands/CreateBudgetCommand";
import { CreateFarmCommand, CreateFarmCommandInput, CreateFarmCommandOutput } from "./commands/CreateFarmCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateLicenseEndpointCommand,
  CreateLicenseEndpointCommandInput,
  CreateLicenseEndpointCommandOutput,
} from "./commands/CreateLicenseEndpointCommand";
import { CreateLimitCommand, CreateLimitCommandInput, CreateLimitCommandOutput } from "./commands/CreateLimitCommand";
import {
  CreateMonitorCommand,
  CreateMonitorCommandInput,
  CreateMonitorCommandOutput,
} from "./commands/CreateMonitorCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  CreateQueueEnvironmentCommand,
  CreateQueueEnvironmentCommandInput,
  CreateQueueEnvironmentCommandOutput,
} from "./commands/CreateQueueEnvironmentCommand";
import {
  CreateQueueFleetAssociationCommand,
  CreateQueueFleetAssociationCommandInput,
  CreateQueueFleetAssociationCommandOutput,
} from "./commands/CreateQueueFleetAssociationCommand";
import {
  CreateQueueLimitAssociationCommand,
  CreateQueueLimitAssociationCommandInput,
  CreateQueueLimitAssociationCommandOutput,
} from "./commands/CreateQueueLimitAssociationCommand";
import {
  CreateStorageProfileCommand,
  CreateStorageProfileCommandInput,
  CreateStorageProfileCommandOutput,
} from "./commands/CreateStorageProfileCommand";
import {
  CreateWorkerCommand,
  CreateWorkerCommandInput,
  CreateWorkerCommandOutput,
} from "./commands/CreateWorkerCommand";
import {
  DeleteBudgetCommand,
  DeleteBudgetCommandInput,
  DeleteBudgetCommandOutput,
} from "./commands/DeleteBudgetCommand";
import { DeleteFarmCommand, DeleteFarmCommandInput, DeleteFarmCommandOutput } from "./commands/DeleteFarmCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteLicenseEndpointCommand,
  DeleteLicenseEndpointCommandInput,
  DeleteLicenseEndpointCommandOutput,
} from "./commands/DeleteLicenseEndpointCommand";
import { DeleteLimitCommand, DeleteLimitCommandInput, DeleteLimitCommandOutput } from "./commands/DeleteLimitCommand";
import {
  DeleteMeteredProductCommand,
  DeleteMeteredProductCommandInput,
  DeleteMeteredProductCommandOutput,
} from "./commands/DeleteMeteredProductCommand";
import {
  DeleteMonitorCommand,
  DeleteMonitorCommandInput,
  DeleteMonitorCommandOutput,
} from "./commands/DeleteMonitorCommand";
import { DeleteQueueCommand, DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import {
  DeleteQueueEnvironmentCommand,
  DeleteQueueEnvironmentCommandInput,
  DeleteQueueEnvironmentCommandOutput,
} from "./commands/DeleteQueueEnvironmentCommand";
import {
  DeleteQueueFleetAssociationCommand,
  DeleteQueueFleetAssociationCommandInput,
  DeleteQueueFleetAssociationCommandOutput,
} from "./commands/DeleteQueueFleetAssociationCommand";
import {
  DeleteQueueLimitAssociationCommand,
  DeleteQueueLimitAssociationCommandInput,
  DeleteQueueLimitAssociationCommandOutput,
} from "./commands/DeleteQueueLimitAssociationCommand";
import {
  DeleteStorageProfileCommand,
  DeleteStorageProfileCommandInput,
  DeleteStorageProfileCommandOutput,
} from "./commands/DeleteStorageProfileCommand";
import {
  DeleteWorkerCommand,
  DeleteWorkerCommandInput,
  DeleteWorkerCommandOutput,
} from "./commands/DeleteWorkerCommand";
import {
  DisassociateMemberFromFarmCommand,
  DisassociateMemberFromFarmCommandInput,
  DisassociateMemberFromFarmCommandOutput,
} from "./commands/DisassociateMemberFromFarmCommand";
import {
  DisassociateMemberFromFleetCommand,
  DisassociateMemberFromFleetCommandInput,
  DisassociateMemberFromFleetCommandOutput,
} from "./commands/DisassociateMemberFromFleetCommand";
import {
  DisassociateMemberFromJobCommand,
  DisassociateMemberFromJobCommandInput,
  DisassociateMemberFromJobCommandOutput,
} from "./commands/DisassociateMemberFromJobCommand";
import {
  DisassociateMemberFromQueueCommand,
  DisassociateMemberFromQueueCommandInput,
  DisassociateMemberFromQueueCommandOutput,
} from "./commands/DisassociateMemberFromQueueCommand";
import { GetBudgetCommand, GetBudgetCommandInput, GetBudgetCommandOutput } from "./commands/GetBudgetCommand";
import { GetFarmCommand, GetFarmCommandInput, GetFarmCommandOutput } from "./commands/GetFarmCommand";
import { GetFleetCommand, GetFleetCommandInput, GetFleetCommandOutput } from "./commands/GetFleetCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetLicenseEndpointCommand,
  GetLicenseEndpointCommandInput,
  GetLicenseEndpointCommandOutput,
} from "./commands/GetLicenseEndpointCommand";
import { GetLimitCommand, GetLimitCommandInput, GetLimitCommandOutput } from "./commands/GetLimitCommand";
import { GetMonitorCommand, GetMonitorCommandInput, GetMonitorCommandOutput } from "./commands/GetMonitorCommand";
import { GetQueueCommand, GetQueueCommandInput, GetQueueCommandOutput } from "./commands/GetQueueCommand";
import {
  GetQueueEnvironmentCommand,
  GetQueueEnvironmentCommandInput,
  GetQueueEnvironmentCommandOutput,
} from "./commands/GetQueueEnvironmentCommand";
import {
  GetQueueFleetAssociationCommand,
  GetQueueFleetAssociationCommandInput,
  GetQueueFleetAssociationCommandOutput,
} from "./commands/GetQueueFleetAssociationCommand";
import {
  GetQueueLimitAssociationCommand,
  GetQueueLimitAssociationCommandInput,
  GetQueueLimitAssociationCommandOutput,
} from "./commands/GetQueueLimitAssociationCommand";
import {
  GetSessionActionCommand,
  GetSessionActionCommandInput,
  GetSessionActionCommandOutput,
} from "./commands/GetSessionActionCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  GetSessionsStatisticsAggregationCommand,
  GetSessionsStatisticsAggregationCommandInput,
  GetSessionsStatisticsAggregationCommandOutput,
} from "./commands/GetSessionsStatisticsAggregationCommand";
import { GetStepCommand, GetStepCommandInput, GetStepCommandOutput } from "./commands/GetStepCommand";
import {
  GetStorageProfileCommand,
  GetStorageProfileCommandInput,
  GetStorageProfileCommandOutput,
} from "./commands/GetStorageProfileCommand";
import {
  GetStorageProfileForQueueCommand,
  GetStorageProfileForQueueCommandInput,
  GetStorageProfileForQueueCommandOutput,
} from "./commands/GetStorageProfileForQueueCommand";
import { GetTaskCommand, GetTaskCommandInput, GetTaskCommandOutput } from "./commands/GetTaskCommand";
import { GetWorkerCommand, GetWorkerCommandInput, GetWorkerCommandOutput } from "./commands/GetWorkerCommand";
import {
  ListAvailableMeteredProductsCommand,
  ListAvailableMeteredProductsCommandInput,
  ListAvailableMeteredProductsCommandOutput,
} from "./commands/ListAvailableMeteredProductsCommand";
import { ListBudgetsCommand, ListBudgetsCommandInput, ListBudgetsCommandOutput } from "./commands/ListBudgetsCommand";
import {
  ListFarmMembersCommand,
  ListFarmMembersCommandInput,
  ListFarmMembersCommandOutput,
} from "./commands/ListFarmMembersCommand";
import { ListFarmsCommand, ListFarmsCommandInput, ListFarmsCommandOutput } from "./commands/ListFarmsCommand";
import {
  ListFleetMembersCommand,
  ListFleetMembersCommandInput,
  ListFleetMembersCommandOutput,
} from "./commands/ListFleetMembersCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListJobMembersCommand,
  ListJobMembersCommandInput,
  ListJobMembersCommandOutput,
} from "./commands/ListJobMembersCommand";
import {
  ListJobParameterDefinitionsCommand,
  ListJobParameterDefinitionsCommandInput,
  ListJobParameterDefinitionsCommandOutput,
} from "./commands/ListJobParameterDefinitionsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListLicenseEndpointsCommand,
  ListLicenseEndpointsCommandInput,
  ListLicenseEndpointsCommandOutput,
} from "./commands/ListLicenseEndpointsCommand";
import { ListLimitsCommand, ListLimitsCommandInput, ListLimitsCommandOutput } from "./commands/ListLimitsCommand";
import {
  ListMeteredProductsCommand,
  ListMeteredProductsCommandInput,
  ListMeteredProductsCommandOutput,
} from "./commands/ListMeteredProductsCommand";
import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "./commands/ListMonitorsCommand";
import {
  ListQueueEnvironmentsCommand,
  ListQueueEnvironmentsCommandInput,
  ListQueueEnvironmentsCommandOutput,
} from "./commands/ListQueueEnvironmentsCommand";
import {
  ListQueueFleetAssociationsCommand,
  ListQueueFleetAssociationsCommandInput,
  ListQueueFleetAssociationsCommandOutput,
} from "./commands/ListQueueFleetAssociationsCommand";
import {
  ListQueueLimitAssociationsCommand,
  ListQueueLimitAssociationsCommandInput,
  ListQueueLimitAssociationsCommandOutput,
} from "./commands/ListQueueLimitAssociationsCommand";
import {
  ListQueueMembersCommand,
  ListQueueMembersCommandInput,
  ListQueueMembersCommandOutput,
} from "./commands/ListQueueMembersCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListSessionActionsCommand,
  ListSessionActionsCommandInput,
  ListSessionActionsCommandOutput,
} from "./commands/ListSessionActionsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListSessionsForWorkerCommand,
  ListSessionsForWorkerCommandInput,
  ListSessionsForWorkerCommandOutput,
} from "./commands/ListSessionsForWorkerCommand";
import {
  ListStepConsumersCommand,
  ListStepConsumersCommandInput,
  ListStepConsumersCommandOutput,
} from "./commands/ListStepConsumersCommand";
import {
  ListStepDependenciesCommand,
  ListStepDependenciesCommandInput,
  ListStepDependenciesCommandOutput,
} from "./commands/ListStepDependenciesCommand";
import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import {
  ListStorageProfilesCommand,
  ListStorageProfilesCommandInput,
  ListStorageProfilesCommandOutput,
} from "./commands/ListStorageProfilesCommand";
import {
  ListStorageProfilesForQueueCommand,
  ListStorageProfilesForQueueCommandInput,
  ListStorageProfilesForQueueCommandOutput,
} from "./commands/ListStorageProfilesForQueueCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "./commands/ListWorkersCommand";
import {
  PutMeteredProductCommand,
  PutMeteredProductCommandInput,
  PutMeteredProductCommandOutput,
} from "./commands/PutMeteredProductCommand";
import { SearchJobsCommand, SearchJobsCommandInput, SearchJobsCommandOutput } from "./commands/SearchJobsCommand";
import { SearchStepsCommand, SearchStepsCommandInput, SearchStepsCommandOutput } from "./commands/SearchStepsCommand";
import { SearchTasksCommand, SearchTasksCommandInput, SearchTasksCommandOutput } from "./commands/SearchTasksCommand";
import {
  SearchWorkersCommand,
  SearchWorkersCommandInput,
  SearchWorkersCommandOutput,
} from "./commands/SearchWorkersCommand";
import {
  StartSessionsStatisticsAggregationCommand,
  StartSessionsStatisticsAggregationCommandInput,
  StartSessionsStatisticsAggregationCommandOutput,
} from "./commands/StartSessionsStatisticsAggregationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBudgetCommand,
  UpdateBudgetCommandInput,
  UpdateBudgetCommandOutput,
} from "./commands/UpdateBudgetCommand";
import { UpdateFarmCommand, UpdateFarmCommandInput, UpdateFarmCommandOutput } from "./commands/UpdateFarmCommand";
import { UpdateFleetCommand, UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { UpdateLimitCommand, UpdateLimitCommandInput, UpdateLimitCommandOutput } from "./commands/UpdateLimitCommand";
import {
  UpdateMonitorCommand,
  UpdateMonitorCommandInput,
  UpdateMonitorCommandOutput,
} from "./commands/UpdateMonitorCommand";
import { UpdateQueueCommand, UpdateQueueCommandInput, UpdateQueueCommandOutput } from "./commands/UpdateQueueCommand";
import {
  UpdateQueueEnvironmentCommand,
  UpdateQueueEnvironmentCommandInput,
  UpdateQueueEnvironmentCommandOutput,
} from "./commands/UpdateQueueEnvironmentCommand";
import {
  UpdateQueueFleetAssociationCommand,
  UpdateQueueFleetAssociationCommandInput,
  UpdateQueueFleetAssociationCommandOutput,
} from "./commands/UpdateQueueFleetAssociationCommand";
import {
  UpdateQueueLimitAssociationCommand,
  UpdateQueueLimitAssociationCommandInput,
  UpdateQueueLimitAssociationCommandOutput,
} from "./commands/UpdateQueueLimitAssociationCommand";
import {
  UpdateSessionCommand,
  UpdateSessionCommandInput,
  UpdateSessionCommandOutput,
} from "./commands/UpdateSessionCommand";
import { UpdateStepCommand, UpdateStepCommandInput, UpdateStepCommandOutput } from "./commands/UpdateStepCommand";
import {
  UpdateStorageProfileCommand,
  UpdateStorageProfileCommandInput,
  UpdateStorageProfileCommandOutput,
} from "./commands/UpdateStorageProfileCommand";
import { UpdateTaskCommand, UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import {
  UpdateWorkerCommand,
  UpdateWorkerCommandInput,
  UpdateWorkerCommandOutput,
} from "./commands/UpdateWorkerCommand";
import {
  UpdateWorkerScheduleCommand,
  UpdateWorkerScheduleCommandInput,
  UpdateWorkerScheduleCommandOutput,
} from "./commands/UpdateWorkerScheduleCommand";
import { DeadlineClient } from "./DeadlineClient";
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
  BatchGetJobEntityCommand,
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

export interface Deadline {
  /**
   * @see {@link AssociateMemberToFarmCommand}
   */
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToFarmCommandOutput>;
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    cb: (err: any, data?: AssociateMemberToFarmCommandOutput) => void
  ): void;
  associateMemberToFarm(
    args: AssociateMemberToFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToFleetCommand}
   */
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToFleetCommandOutput>;
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    cb: (err: any, data?: AssociateMemberToFleetCommandOutput) => void
  ): void;
  associateMemberToFleet(
    args: AssociateMemberToFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToJobCommand}
   */
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToJobCommandOutput>;
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    cb: (err: any, data?: AssociateMemberToJobCommandOutput) => void
  ): void;
  associateMemberToJob(
    args: AssociateMemberToJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToJobCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToQueueCommand}
   */
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToQueueCommandOutput>;
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    cb: (err: any, data?: AssociateMemberToQueueCommandOutput) => void
  ): void;
  associateMemberToQueue(
    args: AssociateMemberToQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeFleetRoleForReadCommand}
   */
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeFleetRoleForReadCommandOutput>;
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    cb: (err: any, data?: AssumeFleetRoleForReadCommandOutput) => void
  ): void;
  assumeFleetRoleForRead(
    args: AssumeFleetRoleForReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeFleetRoleForReadCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeFleetRoleForWorkerCommand}
   */
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeFleetRoleForWorkerCommandOutput>;
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    cb: (err: any, data?: AssumeFleetRoleForWorkerCommandOutput) => void
  ): void;
  assumeFleetRoleForWorker(
    args: AssumeFleetRoleForWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeFleetRoleForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForReadCommand}
   */
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeQueueRoleForReadCommandOutput>;
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForReadCommandOutput) => void
  ): void;
  assumeQueueRoleForRead(
    args: AssumeQueueRoleForReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeQueueRoleForReadCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForUserCommand}
   */
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeQueueRoleForUserCommandOutput>;
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForUserCommandOutput) => void
  ): void;
  assumeQueueRoleForUser(
    args: AssumeQueueRoleForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeQueueRoleForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeQueueRoleForWorkerCommand}
   */
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeQueueRoleForWorkerCommandOutput>;
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    cb: (err: any, data?: AssumeQueueRoleForWorkerCommandOutput) => void
  ): void;
  assumeQueueRoleForWorker(
    args: AssumeQueueRoleForWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeQueueRoleForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetJobEntityCommand}
   */
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetJobEntityCommandOutput>;
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    cb: (err: any, data?: BatchGetJobEntityCommandOutput) => void
  ): void;
  batchGetJobEntity(
    args: BatchGetJobEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetJobEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyJobTemplateCommand}
   */
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyJobTemplateCommandOutput>;
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    cb: (err: any, data?: CopyJobTemplateCommandOutput) => void
  ): void;
  copyJobTemplate(
    args: CopyJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBudgetCommand}
   */
  createBudget(
    args: CreateBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBudgetCommandOutput>;
  createBudget(
    args: CreateBudgetCommandInput,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;
  createBudget(
    args: CreateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFarmCommand}
   */
  createFarm(
    args: CreateFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFarmCommandOutput>;
  createFarm(
    args: CreateFarmCommandInput,
    cb: (err: any, data?: CreateFarmCommandOutput) => void
  ): void;
  createFarm(
    args: CreateFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetCommandOutput>;
  createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseEndpointCommand}
   */
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseEndpointCommandOutput>;
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    cb: (err: any, data?: CreateLicenseEndpointCommandOutput) => void
  ): void;
  createLicenseEndpoint(
    args: CreateLicenseEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLimitCommand}
   */
  createLimit(
    args: CreateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLimitCommandOutput>;
  createLimit(
    args: CreateLimitCommandInput,
    cb: (err: any, data?: CreateLimitCommandOutput) => void
  ): void;
  createLimit(
    args: CreateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(
    args: CreateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitorCommandOutput>;
  createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueueCommandOutput>;
  createQueue(
    args: CreateQueueCommandInput,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueEnvironmentCommand}
   */
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueueEnvironmentCommandOutput>;
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    cb: (err: any, data?: CreateQueueEnvironmentCommandOutput) => void
  ): void;
  createQueueEnvironment(
    args: CreateQueueEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueFleetAssociationCommand}
   */
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueueFleetAssociationCommandOutput>;
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    cb: (err: any, data?: CreateQueueFleetAssociationCommandOutput) => void
  ): void;
  createQueueFleetAssociation(
    args: CreateQueueFleetAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueLimitAssociationCommand}
   */
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueueLimitAssociationCommandOutput>;
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    cb: (err: any, data?: CreateQueueLimitAssociationCommandOutput) => void
  ): void;
  createQueueLimitAssociation(
    args: CreateQueueLimitAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageProfileCommand}
   */
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageProfileCommandOutput>;
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    cb: (err: any, data?: CreateStorageProfileCommandOutput) => void
  ): void;
  createStorageProfile(
    args: CreateStorageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerCommand}
   */
  createWorker(
    args: CreateWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerCommandOutput>;
  createWorker(
    args: CreateWorkerCommandInput,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;
  createWorker(
    args: CreateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBudgetCommand}
   */
  deleteBudget(
    args: DeleteBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBudgetCommandOutput>;
  deleteBudget(
    args: DeleteBudgetCommandInput,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;
  deleteBudget(
    args: DeleteBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFarmCommand}
   */
  deleteFarm(
    args: DeleteFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFarmCommandOutput>;
  deleteFarm(
    args: DeleteFarmCommandInput,
    cb: (err: any, data?: DeleteFarmCommandOutput) => void
  ): void;
  deleteFarm(
    args: DeleteFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(
    args: DeleteFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetCommandOutput>;
  deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseEndpointCommand}
   */
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseEndpointCommandOutput>;
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    cb: (err: any, data?: DeleteLicenseEndpointCommandOutput) => void
  ): void;
  deleteLicenseEndpoint(
    args: DeleteLicenseEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLimitCommand}
   */
  deleteLimit(
    args: DeleteLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLimitCommandOutput>;
  deleteLimit(
    args: DeleteLimitCommandInput,
    cb: (err: any, data?: DeleteLimitCommandOutput) => void
  ): void;
  deleteLimit(
    args: DeleteLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMeteredProductCommand}
   */
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMeteredProductCommandOutput>;
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    cb: (err: any, data?: DeleteMeteredProductCommandOutput) => void
  ): void;
  deleteMeteredProduct(
    args: DeleteMeteredProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeteredProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueueCommandOutput>;
  deleteQueue(
    args: DeleteQueueCommandInput,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueEnvironmentCommand}
   */
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueueEnvironmentCommandOutput>;
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    cb: (err: any, data?: DeleteQueueEnvironmentCommandOutput) => void
  ): void;
  deleteQueueEnvironment(
    args: DeleteQueueEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueFleetAssociationCommand}
   */
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueueFleetAssociationCommandOutput>;
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    cb: (err: any, data?: DeleteQueueFleetAssociationCommandOutput) => void
  ): void;
  deleteQueueFleetAssociation(
    args: DeleteQueueFleetAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueLimitAssociationCommand}
   */
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueueLimitAssociationCommandOutput>;
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    cb: (err: any, data?: DeleteQueueLimitAssociationCommandOutput) => void
  ): void;
  deleteQueueLimitAssociation(
    args: DeleteQueueLimitAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageProfileCommand}
   */
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageProfileCommandOutput>;
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    cb: (err: any, data?: DeleteStorageProfileCommandOutput) => void
  ): void;
  deleteStorageProfile(
    args: DeleteStorageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerCommand}
   */
  deleteWorker(
    args: DeleteWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerCommandOutput>;
  deleteWorker(
    args: DeleteWorkerCommandInput,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;
  deleteWorker(
    args: DeleteWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromFarmCommand}
   */
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromFarmCommandOutput>;
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    cb: (err: any, data?: DisassociateMemberFromFarmCommandOutput) => void
  ): void;
  disassociateMemberFromFarm(
    args: DisassociateMemberFromFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromFleetCommand}
   */
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromFleetCommandOutput>;
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    cb: (err: any, data?: DisassociateMemberFromFleetCommandOutput) => void
  ): void;
  disassociateMemberFromFleet(
    args: DisassociateMemberFromFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromJobCommand}
   */
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromJobCommandOutput>;
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    cb: (err: any, data?: DisassociateMemberFromJobCommandOutput) => void
  ): void;
  disassociateMemberFromJob(
    args: DisassociateMemberFromJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromQueueCommand}
   */
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromQueueCommandOutput>;
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    cb: (err: any, data?: DisassociateMemberFromQueueCommandOutput) => void
  ): void;
  disassociateMemberFromQueue(
    args: DisassociateMemberFromQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBudgetCommand}
   */
  getBudget(
    args: GetBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBudgetCommandOutput>;
  getBudget(
    args: GetBudgetCommandInput,
    cb: (err: any, data?: GetBudgetCommandOutput) => void
  ): void;
  getBudget(
    args: GetBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFarmCommand}
   */
  getFarm(
    args: GetFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFarmCommandOutput>;
  getFarm(
    args: GetFarmCommandInput,
    cb: (err: any, data?: GetFarmCommandOutput) => void
  ): void;
  getFarm(
    args: GetFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFleetCommand}
   */
  getFleet(
    args: GetFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFleetCommandOutput>;
  getFleet(
    args: GetFleetCommandInput,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;
  getFleet(
    args: GetFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseEndpointCommand}
   */
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseEndpointCommandOutput>;
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    cb: (err: any, data?: GetLicenseEndpointCommandOutput) => void
  ): void;
  getLicenseEndpoint(
    args: GetLicenseEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLimitCommand}
   */
  getLimit(
    args: GetLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLimitCommandOutput>;
  getLimit(
    args: GetLimitCommandInput,
    cb: (err: any, data?: GetLimitCommandOutput) => void
  ): void;
  getLimit(
    args: GetLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorCommand}
   */
  getMonitor(
    args: GetMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMonitorCommandOutput>;
  getMonitor(
    args: GetMonitorCommandInput,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;
  getMonitor(
    args: GetMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueCommand}
   */
  getQueue(
    args: GetQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueueCommandOutput>;
  getQueue(
    args: GetQueueCommandInput,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;
  getQueue(
    args: GetQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueEnvironmentCommand}
   */
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueueEnvironmentCommandOutput>;
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    cb: (err: any, data?: GetQueueEnvironmentCommandOutput) => void
  ): void;
  getQueueEnvironment(
    args: GetQueueEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueFleetAssociationCommand}
   */
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueueFleetAssociationCommandOutput>;
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    cb: (err: any, data?: GetQueueFleetAssociationCommandOutput) => void
  ): void;
  getQueueFleetAssociation(
    args: GetQueueFleetAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueLimitAssociationCommand}
   */
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueueLimitAssociationCommandOutput>;
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    cb: (err: any, data?: GetQueueLimitAssociationCommandOutput) => void
  ): void;
  getQueueLimitAssociation(
    args: GetQueueLimitAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionActionCommand}
   */
  getSessionAction(
    args: GetSessionActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionActionCommandOutput>;
  getSessionAction(
    args: GetSessionActionCommandInput,
    cb: (err: any, data?: GetSessionActionCommandOutput) => void
  ): void;
  getSessionAction(
    args: GetSessionActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionsStatisticsAggregationCommand}
   */
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionsStatisticsAggregationCommandOutput>;
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    cb: (err: any, data?: GetSessionsStatisticsAggregationCommandOutput) => void
  ): void;
  getSessionsStatisticsAggregation(
    args: GetSessionsStatisticsAggregationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionsStatisticsAggregationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStepCommand}
   */
  getStep(
    args: GetStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStepCommandOutput>;
  getStep(
    args: GetStepCommandInput,
    cb: (err: any, data?: GetStepCommandOutput) => void
  ): void;
  getStep(
    args: GetStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageProfileCommand}
   */
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageProfileCommandOutput>;
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    cb: (err: any, data?: GetStorageProfileCommandOutput) => void
  ): void;
  getStorageProfile(
    args: GetStorageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageProfileForQueueCommand}
   */
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageProfileForQueueCommandOutput>;
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    cb: (err: any, data?: GetStorageProfileForQueueCommandOutput) => void
  ): void;
  getStorageProfileForQueue(
    args: GetStorageProfileForQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageProfileForQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaskCommand}
   */
  getTask(
    args: GetTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaskCommandOutput>;
  getTask(
    args: GetTaskCommandInput,
    cb: (err: any, data?: GetTaskCommandOutput) => void
  ): void;
  getTask(
    args: GetTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkerCommand}
   */
  getWorker(
    args: GetWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkerCommandOutput>;
  getWorker(
    args: GetWorkerCommandInput,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;
  getWorker(
    args: GetWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableMeteredProductsCommand}
   */
  listAvailableMeteredProducts(): Promise<ListAvailableMeteredProductsCommandOutput>;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableMeteredProductsCommandOutput>;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    cb: (err: any, data?: ListAvailableMeteredProductsCommandOutput) => void
  ): void;
  listAvailableMeteredProducts(
    args: ListAvailableMeteredProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableMeteredProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBudgetsCommand}
   */
  listBudgets(
    args: ListBudgetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBudgetsCommandOutput>;
  listBudgets(
    args: ListBudgetsCommandInput,
    cb: (err: any, data?: ListBudgetsCommandOutput) => void
  ): void;
  listBudgets(
    args: ListBudgetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFarmMembersCommand}
   */
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFarmMembersCommandOutput>;
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    cb: (err: any, data?: ListFarmMembersCommandOutput) => void
  ): void;
  listFarmMembers(
    args: ListFarmMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFarmMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFarmsCommand}
   */
  listFarms(): Promise<ListFarmsCommandOutput>;
  listFarms(
    args: ListFarmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFarmsCommandOutput>;
  listFarms(
    args: ListFarmsCommandInput,
    cb: (err: any, data?: ListFarmsCommandOutput) => void
  ): void;
  listFarms(
    args: ListFarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetMembersCommand}
   */
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetMembersCommandOutput>;
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    cb: (err: any, data?: ListFleetMembersCommandOutput) => void
  ): void;
  listFleetMembers(
    args: ListFleetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(
    args: ListFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobMembersCommand}
   */
  listJobMembers(
    args: ListJobMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobMembersCommandOutput>;
  listJobMembers(
    args: ListJobMembersCommandInput,
    cb: (err: any, data?: ListJobMembersCommandOutput) => void
  ): void;
  listJobMembers(
    args: ListJobMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobParameterDefinitionsCommand}
   */
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobParameterDefinitionsCommandOutput>;
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    cb: (err: any, data?: ListJobParameterDefinitionsCommandOutput) => void
  ): void;
  listJobParameterDefinitions(
    args: ListJobParameterDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobParameterDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseEndpointsCommand}
   */
  listLicenseEndpoints(): Promise<ListLicenseEndpointsCommandOutput>;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseEndpointsCommandOutput>;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    cb: (err: any, data?: ListLicenseEndpointsCommandOutput) => void
  ): void;
  listLicenseEndpoints(
    args: ListLicenseEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLimitsCommand}
   */
  listLimits(
    args: ListLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLimitsCommandOutput>;
  listLimits(
    args: ListLimitsCommandInput,
    cb: (err: any, data?: ListLimitsCommandOutput) => void
  ): void;
  listLimits(
    args: ListLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMeteredProductsCommand}
   */
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeteredProductsCommandOutput>;
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    cb: (err: any, data?: ListMeteredProductsCommandOutput) => void
  ): void;
  listMeteredProducts(
    args: ListMeteredProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeteredProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueEnvironmentsCommand}
   */
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueEnvironmentsCommandOutput>;
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    cb: (err: any, data?: ListQueueEnvironmentsCommandOutput) => void
  ): void;
  listQueueEnvironments(
    args: ListQueueEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueFleetAssociationsCommand}
   */
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueFleetAssociationsCommandOutput>;
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    cb: (err: any, data?: ListQueueFleetAssociationsCommandOutput) => void
  ): void;
  listQueueFleetAssociations(
    args: ListQueueFleetAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueFleetAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueLimitAssociationsCommand}
   */
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueLimitAssociationsCommandOutput>;
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    cb: (err: any, data?: ListQueueLimitAssociationsCommandOutput) => void
  ): void;
  listQueueLimitAssociations(
    args: ListQueueLimitAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueLimitAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueMembersCommand}
   */
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueMembersCommandOutput>;
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    cb: (err: any, data?: ListQueueMembersCommandOutput) => void
  ): void;
  listQueueMembers(
    args: ListQueueMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueuesCommandOutput>;
  listQueues(
    args: ListQueuesCommandInput,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionActionsCommand}
   */
  listSessionActions(
    args: ListSessionActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionActionsCommandOutput>;
  listSessionActions(
    args: ListSessionActionsCommandInput,
    cb: (err: any, data?: ListSessionActionsCommandOutput) => void
  ): void;
  listSessionActions(
    args: ListSessionActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsForWorkerCommand}
   */
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsForWorkerCommandOutput>;
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    cb: (err: any, data?: ListSessionsForWorkerCommandOutput) => void
  ): void;
  listSessionsForWorker(
    args: ListSessionsForWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsForWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepConsumersCommand}
   */
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStepConsumersCommandOutput>;
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    cb: (err: any, data?: ListStepConsumersCommandOutput) => void
  ): void;
  listStepConsumers(
    args: ListStepConsumersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepConsumersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepDependenciesCommand}
   */
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStepDependenciesCommandOutput>;
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    cb: (err: any, data?: ListStepDependenciesCommandOutput) => void
  ): void;
  listStepDependencies(
    args: ListStepDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepsCommand}
   */
  listSteps(
    args: ListStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStepsCommandOutput>;
  listSteps(
    args: ListStepsCommandInput,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;
  listSteps(
    args: ListStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageProfilesCommand}
   */
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageProfilesCommandOutput>;
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    cb: (err: any, data?: ListStorageProfilesCommandOutput) => void
  ): void;
  listStorageProfiles(
    args: ListStorageProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageProfilesForQueueCommand}
   */
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageProfilesForQueueCommandOutput>;
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    cb: (err: any, data?: ListStorageProfilesForQueueCommandOutput) => void
  ): void;
  listStorageProfilesForQueue(
    args: ListStorageProfilesForQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageProfilesForQueueCommandOutput) => void
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
   * @see {@link ListTasksCommand}
   */
  listTasks(
    args: ListTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkersCommand}
   */
  listWorkers(
    args: ListWorkersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkersCommandOutput>;
  listWorkers(
    args: ListWorkersCommandInput,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;
  listWorkers(
    args: ListWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMeteredProductCommand}
   */
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMeteredProductCommandOutput>;
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    cb: (err: any, data?: PutMeteredProductCommandOutput) => void
  ): void;
  putMeteredProduct(
    args: PutMeteredProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMeteredProductCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchJobsCommand}
   */
  searchJobs(
    args: SearchJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchJobsCommandOutput>;
  searchJobs(
    args: SearchJobsCommandInput,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;
  searchJobs(
    args: SearchJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchStepsCommand}
   */
  searchSteps(
    args: SearchStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchStepsCommandOutput>;
  searchSteps(
    args: SearchStepsCommandInput,
    cb: (err: any, data?: SearchStepsCommandOutput) => void
  ): void;
  searchSteps(
    args: SearchStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTasksCommand}
   */
  searchTasks(
    args: SearchTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTasksCommandOutput>;
  searchTasks(
    args: SearchTasksCommandInput,
    cb: (err: any, data?: SearchTasksCommandOutput) => void
  ): void;
  searchTasks(
    args: SearchTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchWorkersCommand}
   */
  searchWorkers(
    args: SearchWorkersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchWorkersCommandOutput>;
  searchWorkers(
    args: SearchWorkersCommandInput,
    cb: (err: any, data?: SearchWorkersCommandOutput) => void
  ): void;
  searchWorkers(
    args: SearchWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSessionsStatisticsAggregationCommand}
   */
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSessionsStatisticsAggregationCommandOutput>;
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    cb: (err: any, data?: StartSessionsStatisticsAggregationCommandOutput) => void
  ): void;
  startSessionsStatisticsAggregation(
    args: StartSessionsStatisticsAggregationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSessionsStatisticsAggregationCommandOutput) => void
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
   * @see {@link UpdateBudgetCommand}
   */
  updateBudget(
    args: UpdateBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBudgetCommandOutput>;
  updateBudget(
    args: UpdateBudgetCommandInput,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;
  updateBudget(
    args: UpdateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFarmCommand}
   */
  updateFarm(
    args: UpdateFarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFarmCommandOutput>;
  updateFarm(
    args: UpdateFarmCommandInput,
    cb: (err: any, data?: UpdateFarmCommandOutput) => void
  ): void;
  updateFarm(
    args: UpdateFarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFarmCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(
    args: UpdateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobCommandOutput>;
  updateJob(
    args: UpdateJobCommandInput,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLimitCommand}
   */
  updateLimit(
    args: UpdateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLimitCommandOutput>;
  updateLimit(
    args: UpdateLimitCommandInput,
    cb: (err: any, data?: UpdateLimitCommandOutput) => void
  ): void;
  updateLimit(
    args: UpdateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitorCommand}
   */
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitorCommandOutput>;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueCommand}
   */
  updateQueue(
    args: UpdateQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueCommandOutput>;
  updateQueue(
    args: UpdateQueueCommandInput,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;
  updateQueue(
    args: UpdateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueEnvironmentCommand}
   */
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueEnvironmentCommandOutput>;
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    cb: (err: any, data?: UpdateQueueEnvironmentCommandOutput) => void
  ): void;
  updateQueueEnvironment(
    args: UpdateQueueEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueFleetAssociationCommand}
   */
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueFleetAssociationCommandOutput>;
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    cb: (err: any, data?: UpdateQueueFleetAssociationCommandOutput) => void
  ): void;
  updateQueueFleetAssociation(
    args: UpdateQueueFleetAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueFleetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueLimitAssociationCommand}
   */
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueLimitAssociationCommandOutput>;
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    cb: (err: any, data?: UpdateQueueLimitAssociationCommandOutput) => void
  ): void;
  updateQueueLimitAssociation(
    args: UpdateQueueLimitAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueLimitAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionCommand}
   */
  updateSession(
    args: UpdateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSessionCommandOutput>;
  updateSession(
    args: UpdateSessionCommandInput,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;
  updateSession(
    args: UpdateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStepCommand}
   */
  updateStep(
    args: UpdateStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStepCommandOutput>;
  updateStep(
    args: UpdateStepCommandInput,
    cb: (err: any, data?: UpdateStepCommandOutput) => void
  ): void;
  updateStep(
    args: UpdateStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStepCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageProfileCommand}
   */
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageProfileCommandOutput>;
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    cb: (err: any, data?: UpdateStorageProfileCommandOutput) => void
  ): void;
  updateStorageProfile(
    args: UpdateStorageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskCommand}
   */
  updateTask(
    args: UpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskCommandOutput>;
  updateTask(
    args: UpdateTaskCommandInput,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
  updateTask(
    args: UpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerCommand}
   */
  updateWorker(
    args: UpdateWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkerCommandOutput>;
  updateWorker(
    args: UpdateWorkerCommandInput,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;
  updateWorker(
    args: UpdateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerScheduleCommand}
   */
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkerScheduleCommandOutput>;
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    cb: (err: any, data?: UpdateWorkerScheduleCommandOutput) => void
  ): void;
  updateWorkerSchedule(
    args: UpdateWorkerScheduleCommandInput,
    options: __HttpHandlerOptions,
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
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobCreateComplete(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobComplete(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobSucceeded(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetLicenseEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLicenseEndpointValid(
    args: GetLicenseEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetLicenseEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLicenseEndpointDeleted(
    args: GetLicenseEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetQueueCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueSchedulingBlocked(
    args: GetQueueCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetQueueCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueScheduling(
    args: GetQueueCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetQueueFleetAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueFleetAssociationStopped(
    args: GetQueueFleetAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetQueueLimitAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilQueueLimitAssociationStopped(
    args: GetQueueLimitAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Deadline>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>The Amazon Web Services Deadline Cloud API provides infrastructure and centralized management for your projects. Use the Deadline Cloud API to onboard users, assign projects, and attach permissions specific to their job function.</p> <p>With Deadline Cloud, content production teams can deploy resources for their workforce securely in the cloud, reducing the costs of added physical infrastructure. Keep your content production operations secure, while allowing your contributors to access the tools they need, such as scalable high-speed storage, licenses, and cost management services.</p>
 * @public
 */
export class Deadline extends DeadlineClient implements Deadline {}
createAggregatedClient(commands, Deadline, { paginators, waiters });
