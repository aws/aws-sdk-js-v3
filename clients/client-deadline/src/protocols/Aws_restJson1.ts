// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateMemberToFarmCommandInput,
  AssociateMemberToFarmCommandOutput,
} from "../commands/AssociateMemberToFarmCommand";
import {
  AssociateMemberToFleetCommandInput,
  AssociateMemberToFleetCommandOutput,
} from "../commands/AssociateMemberToFleetCommand";
import {
  AssociateMemberToJobCommandInput,
  AssociateMemberToJobCommandOutput,
} from "../commands/AssociateMemberToJobCommand";
import {
  AssociateMemberToQueueCommandInput,
  AssociateMemberToQueueCommandOutput,
} from "../commands/AssociateMemberToQueueCommand";
import {
  AssumeFleetRoleForReadCommandInput,
  AssumeFleetRoleForReadCommandOutput,
} from "../commands/AssumeFleetRoleForReadCommand";
import {
  AssumeFleetRoleForWorkerCommandInput,
  AssumeFleetRoleForWorkerCommandOutput,
} from "../commands/AssumeFleetRoleForWorkerCommand";
import {
  AssumeQueueRoleForReadCommandInput,
  AssumeQueueRoleForReadCommandOutput,
} from "../commands/AssumeQueueRoleForReadCommand";
import {
  AssumeQueueRoleForUserCommandInput,
  AssumeQueueRoleForUserCommandOutput,
} from "../commands/AssumeQueueRoleForUserCommand";
import {
  AssumeQueueRoleForWorkerCommandInput,
  AssumeQueueRoleForWorkerCommandOutput,
} from "../commands/AssumeQueueRoleForWorkerCommand";
import { BatchGetJobEntityCommandInput, BatchGetJobEntityCommandOutput } from "../commands/BatchGetJobEntityCommand";
import { CopyJobTemplateCommandInput, CopyJobTemplateCommandOutput } from "../commands/CopyJobTemplateCommand";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "../commands/CreateBudgetCommand";
import { CreateFarmCommandInput, CreateFarmCommandOutput } from "../commands/CreateFarmCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import {
  CreateLicenseEndpointCommandInput,
  CreateLicenseEndpointCommandOutput,
} from "../commands/CreateLicenseEndpointCommand";
import { CreateLimitCommandInput, CreateLimitCommandOutput } from "../commands/CreateLimitCommand";
import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "../commands/CreateMonitorCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import {
  CreateQueueEnvironmentCommandInput,
  CreateQueueEnvironmentCommandOutput,
} from "../commands/CreateQueueEnvironmentCommand";
import {
  CreateQueueFleetAssociationCommandInput,
  CreateQueueFleetAssociationCommandOutput,
} from "../commands/CreateQueueFleetAssociationCommand";
import {
  CreateQueueLimitAssociationCommandInput,
  CreateQueueLimitAssociationCommandOutput,
} from "../commands/CreateQueueLimitAssociationCommand";
import {
  CreateStorageProfileCommandInput,
  CreateStorageProfileCommandOutput,
} from "../commands/CreateStorageProfileCommand";
import { CreateWorkerCommandInput, CreateWorkerCommandOutput } from "../commands/CreateWorkerCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "../commands/DeleteBudgetCommand";
import { DeleteFarmCommandInput, DeleteFarmCommandOutput } from "../commands/DeleteFarmCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import {
  DeleteLicenseEndpointCommandInput,
  DeleteLicenseEndpointCommandOutput,
} from "../commands/DeleteLicenseEndpointCommand";
import { DeleteLimitCommandInput, DeleteLimitCommandOutput } from "../commands/DeleteLimitCommand";
import {
  DeleteMeteredProductCommandInput,
  DeleteMeteredProductCommandOutput,
} from "../commands/DeleteMeteredProductCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "../commands/DeleteMonitorCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import {
  DeleteQueueEnvironmentCommandInput,
  DeleteQueueEnvironmentCommandOutput,
} from "../commands/DeleteQueueEnvironmentCommand";
import {
  DeleteQueueFleetAssociationCommandInput,
  DeleteQueueFleetAssociationCommandOutput,
} from "../commands/DeleteQueueFleetAssociationCommand";
import {
  DeleteQueueLimitAssociationCommandInput,
  DeleteQueueLimitAssociationCommandOutput,
} from "../commands/DeleteQueueLimitAssociationCommand";
import {
  DeleteStorageProfileCommandInput,
  DeleteStorageProfileCommandOutput,
} from "../commands/DeleteStorageProfileCommand";
import { DeleteWorkerCommandInput, DeleteWorkerCommandOutput } from "../commands/DeleteWorkerCommand";
import {
  DisassociateMemberFromFarmCommandInput,
  DisassociateMemberFromFarmCommandOutput,
} from "../commands/DisassociateMemberFromFarmCommand";
import {
  DisassociateMemberFromFleetCommandInput,
  DisassociateMemberFromFleetCommandOutput,
} from "../commands/DisassociateMemberFromFleetCommand";
import {
  DisassociateMemberFromJobCommandInput,
  DisassociateMemberFromJobCommandOutput,
} from "../commands/DisassociateMemberFromJobCommand";
import {
  DisassociateMemberFromQueueCommandInput,
  DisassociateMemberFromQueueCommandOutput,
} from "../commands/DisassociateMemberFromQueueCommand";
import { GetBudgetCommandInput, GetBudgetCommandOutput } from "../commands/GetBudgetCommand";
import { GetFarmCommandInput, GetFarmCommandOutput } from "../commands/GetFarmCommand";
import { GetFleetCommandInput, GetFleetCommandOutput } from "../commands/GetFleetCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetLicenseEndpointCommandInput, GetLicenseEndpointCommandOutput } from "../commands/GetLicenseEndpointCommand";
import { GetLimitCommandInput, GetLimitCommandOutput } from "../commands/GetLimitCommand";
import { GetMonitorCommandInput, GetMonitorCommandOutput } from "../commands/GetMonitorCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "../commands/GetQueueCommand";
import {
  GetQueueEnvironmentCommandInput,
  GetQueueEnvironmentCommandOutput,
} from "../commands/GetQueueEnvironmentCommand";
import {
  GetQueueFleetAssociationCommandInput,
  GetQueueFleetAssociationCommandOutput,
} from "../commands/GetQueueFleetAssociationCommand";
import {
  GetQueueLimitAssociationCommandInput,
  GetQueueLimitAssociationCommandOutput,
} from "../commands/GetQueueLimitAssociationCommand";
import { GetSessionActionCommandInput, GetSessionActionCommandOutput } from "../commands/GetSessionActionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import {
  GetSessionsStatisticsAggregationCommandInput,
  GetSessionsStatisticsAggregationCommandOutput,
} from "../commands/GetSessionsStatisticsAggregationCommand";
import { GetStepCommandInput, GetStepCommandOutput } from "../commands/GetStepCommand";
import { GetStorageProfileCommandInput, GetStorageProfileCommandOutput } from "../commands/GetStorageProfileCommand";
import {
  GetStorageProfileForQueueCommandInput,
  GetStorageProfileForQueueCommandOutput,
} from "../commands/GetStorageProfileForQueueCommand";
import { GetTaskCommandInput, GetTaskCommandOutput } from "../commands/GetTaskCommand";
import { GetWorkerCommandInput, GetWorkerCommandOutput } from "../commands/GetWorkerCommand";
import {
  ListAvailableMeteredProductsCommandInput,
  ListAvailableMeteredProductsCommandOutput,
} from "../commands/ListAvailableMeteredProductsCommand";
import { ListBudgetsCommandInput, ListBudgetsCommandOutput } from "../commands/ListBudgetsCommand";
import { ListFarmMembersCommandInput, ListFarmMembersCommandOutput } from "../commands/ListFarmMembersCommand";
import { ListFarmsCommandInput, ListFarmsCommandOutput } from "../commands/ListFarmsCommand";
import { ListFleetMembersCommandInput, ListFleetMembersCommandOutput } from "../commands/ListFleetMembersCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { ListJobMembersCommandInput, ListJobMembersCommandOutput } from "../commands/ListJobMembersCommand";
import {
  ListJobParameterDefinitionsCommandInput,
  ListJobParameterDefinitionsCommandOutput,
} from "../commands/ListJobParameterDefinitionsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListLicenseEndpointsCommandInput,
  ListLicenseEndpointsCommandOutput,
} from "../commands/ListLicenseEndpointsCommand";
import { ListLimitsCommandInput, ListLimitsCommandOutput } from "../commands/ListLimitsCommand";
import {
  ListMeteredProductsCommandInput,
  ListMeteredProductsCommandOutput,
} from "../commands/ListMeteredProductsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "../commands/ListMonitorsCommand";
import {
  ListQueueEnvironmentsCommandInput,
  ListQueueEnvironmentsCommandOutput,
} from "../commands/ListQueueEnvironmentsCommand";
import {
  ListQueueFleetAssociationsCommandInput,
  ListQueueFleetAssociationsCommandOutput,
} from "../commands/ListQueueFleetAssociationsCommand";
import {
  ListQueueLimitAssociationsCommandInput,
  ListQueueLimitAssociationsCommandOutput,
} from "../commands/ListQueueLimitAssociationsCommand";
import { ListQueueMembersCommandInput, ListQueueMembersCommandOutput } from "../commands/ListQueueMembersCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListSessionActionsCommandInput, ListSessionActionsCommandOutput } from "../commands/ListSessionActionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import {
  ListSessionsForWorkerCommandInput,
  ListSessionsForWorkerCommandOutput,
} from "../commands/ListSessionsForWorkerCommand";
import { ListStepConsumersCommandInput, ListStepConsumersCommandOutput } from "../commands/ListStepConsumersCommand";
import {
  ListStepDependenciesCommandInput,
  ListStepDependenciesCommandOutput,
} from "../commands/ListStepDependenciesCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import {
  ListStorageProfilesCommandInput,
  ListStorageProfilesCommandOutput,
} from "../commands/ListStorageProfilesCommand";
import {
  ListStorageProfilesForQueueCommandInput,
  ListStorageProfilesForQueueCommandOutput,
} from "../commands/ListStorageProfilesForQueueCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { PutMeteredProductCommandInput, PutMeteredProductCommandOutput } from "../commands/PutMeteredProductCommand";
import { SearchJobsCommandInput, SearchJobsCommandOutput } from "../commands/SearchJobsCommand";
import { SearchStepsCommandInput, SearchStepsCommandOutput } from "../commands/SearchStepsCommand";
import { SearchTasksCommandInput, SearchTasksCommandOutput } from "../commands/SearchTasksCommand";
import { SearchWorkersCommandInput, SearchWorkersCommandOutput } from "../commands/SearchWorkersCommand";
import {
  StartSessionsStatisticsAggregationCommandInput,
  StartSessionsStatisticsAggregationCommandOutput,
} from "../commands/StartSessionsStatisticsAggregationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "../commands/UpdateBudgetCommand";
import { UpdateFarmCommandInput, UpdateFarmCommandOutput } from "../commands/UpdateFarmCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "../commands/UpdateFleetCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import { UpdateLimitCommandInput, UpdateLimitCommandOutput } from "../commands/UpdateLimitCommand";
import { UpdateMonitorCommandInput, UpdateMonitorCommandOutput } from "../commands/UpdateMonitorCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "../commands/UpdateQueueCommand";
import {
  UpdateQueueEnvironmentCommandInput,
  UpdateQueueEnvironmentCommandOutput,
} from "../commands/UpdateQueueEnvironmentCommand";
import {
  UpdateQueueFleetAssociationCommandInput,
  UpdateQueueFleetAssociationCommandOutput,
} from "../commands/UpdateQueueFleetAssociationCommand";
import {
  UpdateQueueLimitAssociationCommandInput,
  UpdateQueueLimitAssociationCommandOutput,
} from "../commands/UpdateQueueLimitAssociationCommand";
import { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "../commands/UpdateSessionCommand";
import { UpdateStepCommandInput, UpdateStepCommandOutput } from "../commands/UpdateStepCommand";
import {
  UpdateStorageProfileCommandInput,
  UpdateStorageProfileCommandOutput,
} from "../commands/UpdateStorageProfileCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "../commands/UpdateTaskCommand";
import { UpdateWorkerCommandInput, UpdateWorkerCommandOutput } from "../commands/UpdateWorkerCommand";
import {
  UpdateWorkerScheduleCommandInput,
  UpdateWorkerScheduleCommandOutput,
} from "../commands/UpdateWorkerScheduleCommand";
import { DeadlineServiceException as __BaseException } from "../models/DeadlineServiceException";
import {
  AcceleratorCapabilities,
  AcceleratorCountRange,
  AcceleratorSelection,
  AcceleratorTotalMemoryMiBRange,
  AcceleratorType,
  AccessDeniedException,
  Attachments,
  AwsCredentials,
  BudgetActionToAdd,
  BudgetActionToRemove,
  BudgetSchedule,
  BudgetSummary,
  ConflictException,
  ConsumedUsages,
  CustomerManagedFleetConfiguration,
  CustomerManagedWorkerCapabilities,
  DateTimeFilterExpression,
  Ec2EbsVolume,
  EnvironmentDetailsEntity,
  EnvironmentDetailsIdentifiers,
  FarmSummary,
  FileSystemLocation,
  FixedBudgetSchedule,
  FleetAmountCapability,
  FleetAttributeCapability,
  FleetCapabilities,
  FleetConfiguration,
  FleetSummary,
  HostConfiguration,
  HostPropertiesRequest,
  InternalServerErrorException,
  IpAddresses,
  JobAttachmentDetailsIdentifiers,
  JobAttachmentSettings,
  JobDetailsIdentifiers,
  JobEntity,
  JobEntityIdentifiersUnion,
  JobParameter,
  JobRunAsUser,
  JobSummary,
  LimitSummary,
  ManifestProperties,
  MemoryMiBRange,
  PosixUser,
  ResourceNotFoundException,
  ResponseBudgetAction,
  S3Location,
  ServiceManagedEc2FleetConfiguration,
  ServiceManagedEc2InstanceCapabilities,
  ServiceManagedEc2InstanceMarketOptions,
  ServiceQuotaExceededException,
  SessionActionSummary,
  SessionSummary,
  StepAmountCapability,
  StepDetailsEntity,
  StepDetailsIdentifiers,
  StepRequiredCapabilities,
  TaskRunManifestPropertiesRequest,
  ThrottlingException,
  UpdatedSessionActionInfo,
  UsageTrackingResource,
  ValidationException,
  VCpuCountRange,
  VpcConfiguration,
  WindowsUser,
  WorkerAmountCapability,
  WorkerAttributeCapability,
  WorkerCapabilities,
  WorkerSessionSummary,
  WorkerSummary,
} from "../models/models_0";
import {
  FieldSortExpression,
  JobSearchSummary,
  MonitorSummary,
  ParameterFilterExpression,
  ParameterSortExpression,
  QueueFleetAssociationSummary,
  QueueLimitAssociationSummary,
  QueueSummary,
  SearchFilterExpression,
  SearchGroupedFilterExpressions,
  SearchSortExpression,
  SearchTermFilterExpression,
  SessionsStatisticsResources,
  Statistics,
  Stats,
  StepSearchSummary,
  StepSummary,
  StringFilterExpression,
  TaskSearchSummary,
  TaskSummary,
  UsageGroupByField,
  UsageStatistic,
  UserJobsFirst,
  WorkerSearchSummary,
} from "../models/models_1";

/**
 * serializeAws_restJson1AssociateMemberToFarmCommand
 */
export const se_AssociateMemberToFarmCommand = async (
  input: AssociateMemberToFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      membershipLevel: [],
      principalType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateMemberToFleetCommand
 */
export const se_AssociateMemberToFleetCommand = async (
  input: AssociateMemberToFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      membershipLevel: [],
      principalType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateMemberToJobCommand
 */
export const se_AssociateMemberToJobCommand = async (
  input: AssociateMemberToJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      membershipLevel: [],
      principalType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateMemberToQueueCommand
 */
export const se_AssociateMemberToQueueCommand = async (
  input: AssociateMemberToQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      membershipLevel: [],
      principalType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssumeFleetRoleForReadCommand
 */
export const se_AssumeFleetRoleForReadCommand = async (
  input: AssumeFleetRoleForReadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssumeFleetRoleForWorkerCommand
 */
export const se_AssumeFleetRoleForWorkerCommand = async (
  input: AssumeFleetRoleForWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssumeQueueRoleForReadCommand
 */
export const se_AssumeQueueRoleForReadCommand = async (
  input: AssumeQueueRoleForReadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/read-roles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssumeQueueRoleForUserCommand
 */
export const se_AssumeQueueRoleForUserCommand = async (
  input: AssumeQueueRoleForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/user-roles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssumeQueueRoleForWorkerCommand
 */
export const se_AssumeQueueRoleForWorkerCommand = async (
  input: AssumeQueueRoleForWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  const query: any = map({
    [_qI]: [, __expectNonNull(input[_qI]!, `queueId`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetJobEntityCommand
 */
export const se_BatchGetJobEntityCommand = async (
  input: BatchGetJobEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifiers: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CopyJobTemplateCommand
 */
export const se_CopyJobTemplateCommand = async (
  input: CopyJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetS3Location: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBudgetCommand
 */
export const se_CreateBudgetCommand = async (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/budgets");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => se_BudgetActionsToAdd(_, context),
      approximateDollarLimit: (_) => __serializeFloat(_),
      description: [],
      displayName: [],
      schedule: (_) => se_BudgetSchedule(_, context),
      usageTrackingResource: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFarmCommand
 */
export const se_CreateFarmCommand = async (
  input: CreateFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      displayName: [],
      kmsKeyArn: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/fleets");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => se_FleetConfiguration(_, context),
      description: [],
      displayName: [],
      hostConfiguration: (_) => _json(_),
      maxWorkerCount: [],
      minWorkerCount: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attachments: (_) => _json(_),
      maxFailedTasksCount: [],
      maxRetriesPerTask: [],
      maxWorkerCount: [],
      parameters: (_) => _json(_),
      priority: [],
      sourceJobId: [],
      storageProfileId: [],
      targetTaskRunStatus: [],
      template: [],
      templateType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLicenseEndpointCommand
 */
export const se_CreateLicenseEndpointCommand = async (
  input: CreateLicenseEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/license-endpoints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      tags: (_) => _json(_),
      vpcId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLimitCommand
 */
export const se_CreateLimitCommand = async (
  input: CreateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/limits");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      amountRequirementName: [],
      description: [],
      displayName: [],
      maxCount: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMonitorCommand
 */
export const se_CreateMonitorCommand = async (
  input: CreateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/monitors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
      identityCenterInstanceArn: [],
      roleArn: [],
      subdomain: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedStorageProfileIds: (_) => _json(_),
      defaultBudgetAction: [],
      description: [],
      displayName: [],
      jobAttachmentSettings: (_) => _json(_),
      jobRunAsUser: (_) => _json(_),
      requiredFileSystemLocationNames: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQueueEnvironmentCommand
 */
export const se_CreateQueueEnvironmentCommand = async (
  input: CreateQueueEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/environments");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      priority: [],
      template: [],
      templateType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQueueFleetAssociationCommand
 */
export const se_CreateQueueFleetAssociationCommand = async (
  input: CreateQueueFleetAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queue-fleet-associations");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleetId: [],
      queueId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQueueLimitAssociationCommand
 */
export const se_CreateQueueLimitAssociationCommand = async (
  input: CreateQueueLimitAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queue-limit-associations");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      limitId: [],
      queueId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStorageProfileCommand
 */
export const se_CreateStorageProfileCommand = async (
  input: CreateStorageProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/storage-profiles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
      fileSystemLocations: (_) => _json(_),
      osFamily: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkerCommand
 */
export const se_CreateWorkerCommand = async (
  input: CreateWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      hostProperties: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBudgetCommand
 */
export const se_DeleteBudgetCommand = async (
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/budgets/{budgetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("budgetId", () => input.budgetId!, "{budgetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFarmCommand
 */
export const se_DeleteFarmCommand = async (
  input: DeleteFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLicenseEndpointCommand
 */
export const se_DeleteLicenseEndpointCommand = async (
  input: DeleteLicenseEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints/{licenseEndpointId}");
  b.p("licenseEndpointId", () => input.licenseEndpointId!, "{licenseEndpointId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLimitCommand
 */
export const se_DeleteLimitCommand = async (
  input: DeleteLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/limits/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMeteredProductCommand
 */
export const se_DeleteMeteredProductCommand = async (
  input: DeleteMeteredProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}");
  b.p("licenseEndpointId", () => input.licenseEndpointId!, "{licenseEndpointId}", false);
  b.p("productId", () => input.productId!, "{productId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMonitorCommand
 */
export const se_DeleteMonitorCommand = async (
  input: DeleteMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/monitors/{monitorId}");
  b.p("monitorId", () => input.monitorId!, "{monitorId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueueEnvironmentCommand
 */
export const se_DeleteQueueEnvironmentCommand = async (
  input: DeleteQueueEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("queueEnvironmentId", () => input.queueEnvironmentId!, "{queueEnvironmentId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueueFleetAssociationCommand
 */
export const se_DeleteQueueFleetAssociationCommand = async (
  input: DeleteQueueFleetAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueueLimitAssociationCommand
 */
export const se_DeleteQueueLimitAssociationCommand = async (
  input: DeleteQueueLimitAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStorageProfileCommand
 */
export const se_DeleteStorageProfileCommand = async (
  input: DeleteStorageProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("storageProfileId", () => input.storageProfileId!, "{storageProfileId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkerCommand
 */
export const se_DeleteWorkerCommand = async (
  input: DeleteWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMemberFromFarmCommand
 */
export const se_DisassociateMemberFromFarmCommand = async (
  input: DisassociateMemberFromFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMemberFromFleetCommand
 */
export const se_DisassociateMemberFromFleetCommand = async (
  input: DisassociateMemberFromFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMemberFromJobCommand
 */
export const se_DisassociateMemberFromJobCommand = async (
  input: DisassociateMemberFromJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMemberFromQueueCommand
 */
export const se_DisassociateMemberFromQueueCommand = async (
  input: DisassociateMemberFromQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("principalId", () => input.principalId!, "{principalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBudgetCommand
 */
export const se_GetBudgetCommand = async (
  input: GetBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/budgets/{budgetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("budgetId", () => input.budgetId!, "{budgetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFarmCommand
 */
export const se_GetFarmCommand = async (
  input: GetFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFleetCommand
 */
export const se_GetFleetCommand = async (
  input: GetFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLicenseEndpointCommand
 */
export const se_GetLicenseEndpointCommand = async (
  input: GetLicenseEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints/{licenseEndpointId}");
  b.p("licenseEndpointId", () => input.licenseEndpointId!, "{licenseEndpointId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLimitCommand
 */
export const se_GetLimitCommand = async (
  input: GetLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/limits/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMonitorCommand
 */
export const se_GetMonitorCommand = async (
  input: GetMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/monitors/{monitorId}");
  b.p("monitorId", () => input.monitorId!, "{monitorId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueueCommand
 */
export const se_GetQueueCommand = async (
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueueEnvironmentCommand
 */
export const se_GetQueueEnvironmentCommand = async (
  input: GetQueueEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("queueEnvironmentId", () => input.queueEnvironmentId!, "{queueEnvironmentId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueueFleetAssociationCommand
 */
export const se_GetQueueFleetAssociationCommand = async (
  input: GetQueueFleetAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueueLimitAssociationCommand
 */
export const se_GetQueueLimitAssociationCommand = async (
  input: GetQueueLimitAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionActionCommand
 */
export const se_GetSessionActionCommand = async (
  input: GetSessionActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("sessionActionId", () => input.sessionActionId!, "{sessionActionId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionsStatisticsAggregationCommand
 */
export const se_GetSessionsStatisticsAggregationCommand = async (
  input: GetSessionsStatisticsAggregationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/sessions-statistics-aggregation");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_aI]: [, __expectNonNull(input[_aI]!, `aggregationId`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStepCommand
 */
export const se_GetStepCommand = async (
  input: GetStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStorageProfileCommand
 */
export const se_GetStorageProfileCommand = async (
  input: GetStorageProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("storageProfileId", () => input.storageProfileId!, "{storageProfileId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStorageProfileForQueueCommand
 */
export const se_GetStorageProfileForQueueCommand = async (
  input: GetStorageProfileForQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("storageProfileId", () => input.storageProfileId!, "{storageProfileId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTaskCommand
 */
export const se_GetTaskCommand = async (
  input: GetTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkerCommand
 */
export const se_GetWorkerCommand = async (
  input: GetWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAvailableMeteredProductsCommand
 */
export const se_ListAvailableMeteredProductsCommand = async (
  input: ListAvailableMeteredProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/metered-products");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBudgetsCommand
 */
export const se_ListBudgetsCommand = async (
  input: ListBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/budgets");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFarmMembersCommand
 */
export const se_ListFarmMembersCommand = async (
  input: ListFarmMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/members");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFarmsCommand
 */
export const se_ListFarmsCommand = async (
  input: ListFarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_pI]: [, input[_pI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFleetMembersCommand
 */
export const se_ListFleetMembersCommand = async (
  input: ListFleetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/members");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_pI]: [, input[_pI]!],
    [_dN]: [, input[_dN]!],
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobMembersCommand
 */
export const se_ListJobMembersCommand = async (
  input: ListJobMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobParameterDefinitionsCommand
 */
export const se_ListJobParameterDefinitionsCommand = async (
  input: ListJobParameterDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/parameter-definitions");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  const query: any = map({
    [_pI]: [, input[_pI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLicenseEndpointsCommand
 */
export const se_ListLicenseEndpointsCommand = async (
  input: ListLicenseEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLimitsCommand
 */
export const se_ListLimitsCommand = async (
  input: ListLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/limits");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMeteredProductsCommand
 */
export const se_ListMeteredProductsCommand = async (
  input: ListMeteredProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products");
  b.p("licenseEndpointId", () => input.licenseEndpointId!, "{licenseEndpointId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMonitorsCommand
 */
export const se_ListMonitorsCommand = async (
  input: ListMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/monitors");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueueEnvironmentsCommand
 */
export const se_ListQueueEnvironmentsCommand = async (
  input: ListQueueEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/environments");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueueFleetAssociationsCommand
 */
export const se_ListQueueFleetAssociationsCommand = async (
  input: ListQueueFleetAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-fleet-associations");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_qI]: [, input[_qI]!],
    [_fI]: [, input[_fI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueueLimitAssociationsCommand
 */
export const se_ListQueueLimitAssociationsCommand = async (
  input: ListQueueLimitAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queue-limit-associations");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_qI]: [, input[_qI]!],
    [_lI]: [, input[_lI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueueMembersCommand
 */
export const se_ListQueueMembersCommand = async (
  input: ListQueueMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/members");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_pI]: [, input[_pI]!],
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionActionsCommand
 */
export const se_ListSessionActionsCommand = async (
  input: ListSessionActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_sI]: [, input[_sI]!],
    [_tI]: [, input[_tI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsForWorkerCommand
 */
export const se_ListSessionsForWorkerCommand = async (
  input: ListSessionsForWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStepConsumersCommand
 */
export const se_ListStepConsumersCommand = async (
  input: ListStepConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStepDependenciesCommand
 */
export const se_ListStepDependenciesCommand = async (
  input: ListStepDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStepsCommand
 */
export const se_ListStepsCommand = async (
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStorageProfilesCommand
 */
export const se_ListStorageProfilesCommand = async (
  input: ListStorageProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/storage-profiles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStorageProfilesForQueueCommand
 */
export const se_ListStorageProfilesForQueueCommand = async (
  input: ListStorageProfilesForQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  b.bp("/2023-10-12/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTasksCommand
 */
export const se_ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkersCommand
 */
export const se_ListWorkersCommand = async (
  input: ListWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutMeteredProductCommand
 */
export const se_PutMeteredProductCommand = async (
  input: PutMeteredProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}");
  b.p("licenseEndpointId", () => input.licenseEndpointId!, "{licenseEndpointId}", false);
  b.p("productId", () => input.productId!, "{productId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchJobsCommand
 */
export const se_SearchJobsCommand = async (
  input: SearchJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/search/jobs");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterExpressions: (_) => se_SearchGroupedFilterExpressions(_, context),
      itemOffset: [],
      pageSize: [],
      queueIds: (_) => _json(_),
      sortExpressions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchStepsCommand
 */
export const se_SearchStepsCommand = async (
  input: SearchStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/search/steps");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterExpressions: (_) => se_SearchGroupedFilterExpressions(_, context),
      itemOffset: [],
      jobId: [],
      pageSize: [],
      queueIds: (_) => _json(_),
      sortExpressions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchTasksCommand
 */
export const se_SearchTasksCommand = async (
  input: SearchTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/search/tasks");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterExpressions: (_) => se_SearchGroupedFilterExpressions(_, context),
      itemOffset: [],
      jobId: [],
      pageSize: [],
      queueIds: (_) => _json(_),
      sortExpressions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchWorkersCommand
 */
export const se_SearchWorkersCommand = async (
  input: SearchWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/search/workers");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterExpressions: (_) => se_SearchGroupedFilterExpressions(_, context),
      fleetIds: (_) => _json(_),
      itemOffset: [],
      pageSize: [],
      sortExpressions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSessionsStatisticsAggregationCommand
 */
export const se_StartSessionsStatisticsAggregationCommand = async (
  input: StartSessionsStatisticsAggregationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/sessions-statistics-aggregation");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      endTime: (_) => __serializeDateTime(_),
      groupBy: (_) => _json(_),
      period: [],
      resourceIds: (_) => _json(_),
      startTime: (_) => __serializeDateTime(_),
      statistics: (_) => _json(_),
      timezone: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  b.bp("/2023-10-12/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  b.bp("/2023-10-12/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBudgetCommand
 */
export const se_UpdateBudgetCommand = async (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/budgets/{budgetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("budgetId", () => input.budgetId!, "{budgetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionsToAdd: (_) => se_BudgetActionsToAdd(_, context),
      actionsToRemove: (_) => se_BudgetActionsToRemove(_, context),
      approximateDollarLimit: (_) => __serializeFloat(_),
      description: [],
      displayName: [],
      schedule: (_) => se_BudgetSchedule(_, context),
      status: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFarmCommand
 */
export const se_UpdateFarmCommand = async (
  input: UpdateFarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      displayName: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFleetCommand
 */
export const se_UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => se_FleetConfiguration(_, context),
      description: [],
      displayName: [],
      hostConfiguration: (_) => _json(_),
      maxWorkerCount: [],
      minWorkerCount: [],
      roleArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateJobCommand
 */
export const se_UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      lifecycleStatus: [],
      maxFailedTasksCount: [],
      maxRetriesPerTask: [],
      maxWorkerCount: [],
      priority: [],
      targetTaskRunStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLimitCommand
 */
export const se_UpdateLimitCommand = async (
  input: UpdateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/limits/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      displayName: [],
      maxCount: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMonitorCommand
 */
export const se_UpdateMonitorCommand = async (
  input: UpdateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/monitors/{monitorId}");
  b.p("monitorId", () => input.monitorId!, "{monitorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
      roleArn: [],
      subdomain: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueCommand
 */
export const se_UpdateQueueCommand = async (
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedStorageProfileIdsToAdd: (_) => _json(_),
      allowedStorageProfileIdsToRemove: (_) => _json(_),
      defaultBudgetAction: [],
      description: [],
      displayName: [],
      jobAttachmentSettings: (_) => _json(_),
      jobRunAsUser: (_) => _json(_),
      requiredFileSystemLocationNamesToAdd: (_) => _json(_),
      requiredFileSystemLocationNamesToRemove: (_) => _json(_),
      roleArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueEnvironmentCommand
 */
export const se_UpdateQueueEnvironmentCommand = async (
  input: UpdateQueueEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("queueEnvironmentId", () => input.queueEnvironmentId!, "{queueEnvironmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      priority: [],
      template: [],
      templateType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueFleetAssociationCommand
 */
export const se_UpdateQueueFleetAssociationCommand = async (
  input: UpdateQueueFleetAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueLimitAssociationCommand
 */
export const se_UpdateQueueLimitAssociationCommand = async (
  input: UpdateQueueLimitAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("limitId", () => input.limitId!, "{limitId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSessionCommand
 */
export const se_UpdateSessionCommand = async (
  input: UpdateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetLifecycleStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStepCommand
 */
export const se_UpdateStepCommand = async (
  input: UpdateStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetTaskRunStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStorageProfileCommand
 */
export const se_UpdateStorageProfileCommand = async (
  input: UpdateStorageProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("storageProfileId", () => input.storageProfileId!, "{storageProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
      fileSystemLocationsToAdd: (_) => _json(_),
      fileSystemLocationsToRemove: (_) => _json(_),
      osFamily: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTaskCommand
 */
export const se_UpdateTaskCommand = async (
  input: UpdateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_cT] ?? generateIdempotencyToken(),
  });
  b.bp("/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("queueId", () => input.queueId!, "{queueId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("stepId", () => input.stepId!, "{stepId}", false);
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetRunStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "management." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkerCommand
 */
export const se_UpdateWorkerCommand = async (
  input: UpdateWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capabilities: (_) => se_WorkerCapabilities(_, context),
      hostProperties: (_) => _json(_),
      status: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkerScheduleCommand
 */
export const se_UpdateWorkerScheduleCommand = async (
  input: UpdateWorkerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule");
  b.p("farmId", () => input.farmId!, "{farmId}", false);
  b.p("fleetId", () => input.fleetId!, "{fleetId}", false);
  b.p("workerId", () => input.workerId!, "{workerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      updatedSessionActions: (_) => se_UpdatedSessionActions(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "scheduling." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateMemberToFarmCommand
 */
export const de_AssociateMemberToFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToFarmCommandOutput> => {
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
 * deserializeAws_restJson1AssociateMemberToFleetCommand
 */
export const de_AssociateMemberToFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToFleetCommandOutput> => {
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
 * deserializeAws_restJson1AssociateMemberToJobCommand
 */
export const de_AssociateMemberToJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToJobCommandOutput> => {
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
 * deserializeAws_restJson1AssociateMemberToQueueCommand
 */
export const de_AssociateMemberToQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToQueueCommandOutput> => {
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
 * deserializeAws_restJson1AssumeFleetRoleForReadCommand
 */
export const de_AssumeFleetRoleForReadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeFleetRoleForReadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => de_AwsCredentials(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssumeFleetRoleForWorkerCommand
 */
export const de_AssumeFleetRoleForWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeFleetRoleForWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => de_AwsCredentials(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssumeQueueRoleForReadCommand
 */
export const de_AssumeQueueRoleForReadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeQueueRoleForReadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => de_AwsCredentials(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssumeQueueRoleForUserCommand
 */
export const de_AssumeQueueRoleForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeQueueRoleForUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => de_AwsCredentials(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssumeQueueRoleForWorkerCommand
 */
export const de_AssumeQueueRoleForWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeQueueRoleForWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => de_AwsCredentials(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetJobEntityCommand
 */
export const de_BatchGetJobEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: (_) => de_BatchGetJobEntityList(_, context),
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CopyJobTemplateCommand
 */
export const de_CopyJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    templateType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBudgetCommand
 */
export const de_CreateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    budgetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFarmCommand
 */
export const de_CreateFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFarmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    farmId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fleetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLicenseEndpointCommand
 */
export const de_CreateLicenseEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    licenseEndpointId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLimitCommand
 */
export const de_CreateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    limitId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMonitorCommand
 */
export const de_CreateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityCenterApplicationArn: __expectString,
    monitorId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queueId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQueueEnvironmentCommand
 */
export const de_CreateQueueEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queueEnvironmentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQueueFleetAssociationCommand
 */
export const de_CreateQueueFleetAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueFleetAssociationCommandOutput> => {
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
 * deserializeAws_restJson1CreateQueueLimitAssociationCommand
 */
export const de_CreateQueueLimitAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueLimitAssociationCommandOutput> => {
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
 * deserializeAws_restJson1CreateStorageProfileCommand
 */
export const de_CreateStorageProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    storageProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkerCommand
 */
export const de_CreateWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workerId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBudgetCommand
 */
export const de_DeleteBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> => {
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
 * deserializeAws_restJson1DeleteFarmCommand
 */
export const de_DeleteFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFarmCommandOutput> => {
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
 * deserializeAws_restJson1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLicenseEndpointCommand
 */
export const de_DeleteLicenseEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseEndpointCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLimitCommand
 */
export const de_DeleteLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLimitCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMeteredProductCommand
 */
export const de_DeleteMeteredProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeteredProductCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMonitorCommand
 */
export const de_DeleteMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteQueueCommand
 */
export const de_DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
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
 * deserializeAws_restJson1DeleteQueueEnvironmentCommand
 */
export const de_DeleteQueueEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueEnvironmentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteQueueFleetAssociationCommand
 */
export const de_DeleteQueueFleetAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueFleetAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteQueueLimitAssociationCommand
 */
export const de_DeleteQueueLimitAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueLimitAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStorageProfileCommand
 */
export const de_DeleteStorageProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageProfileCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWorkerCommand
 */
export const de_DeleteWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMemberFromFarmCommand
 */
export const de_DisassociateMemberFromFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromFarmCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMemberFromFleetCommand
 */
export const de_DisassociateMemberFromFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromFleetCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMemberFromJobCommand
 */
export const de_DisassociateMemberFromJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromJobCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMemberFromQueueCommand
 */
export const de_DisassociateMemberFromQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromQueueCommandOutput> => {
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
 * deserializeAws_restJson1GetBudgetCommand
 */
export const de_GetBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBudgetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actions: (_) => de_ResponseBudgetActionList(_, context),
    approximateDollarLimit: __limitedParseFloat32,
    budgetId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    displayName: __expectString,
    queueStoppedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    schedule: (_) => de_BudgetSchedule(__expectUnion(_), context),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    usageTrackingResource: (_) => _json(__expectUnion(_)),
    usages: (_) => de_ConsumedUsages(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFarmCommand
 */
export const de_GetFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFarmCommandOutput> => {
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
    displayName: __expectString,
    farmId: __expectString,
    kmsKeyArn: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFleetCommand
 */
export const de_GetFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoScalingStatus: __expectString,
    capabilities: (_) => de_FleetCapabilities(_, context),
    configuration: (_) => de_FleetConfiguration(__expectUnion(_), context),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    fleetId: __expectString,
    hostConfiguration: _json,
    maxWorkerCount: __expectInt32,
    minWorkerCount: __expectInt32,
    roleArn: __expectString,
    status: __expectString,
    targetWorkerCount: __expectInt32,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachments: _json,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    maxFailedTasksCount: __expectInt32,
    maxRetriesPerTask: __expectInt32,
    maxWorkerCount: __expectInt32,
    name: __expectString,
    parameters: _json,
    priority: __expectInt32,
    sourceJobId: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    storageProfileId: __expectString,
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLicenseEndpointCommand
 */
export const de_GetLicenseEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dnsName: __expectString,
    licenseEndpointId: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    statusMessage: __expectString,
    subnetIds: _json,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLimitCommand
 */
export const de_GetLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    amountRequirementName: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    currentCount: __expectInt32,
    description: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    limitId: __expectString,
    maxCount: __expectInt32,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMonitorCommand
 */
export const de_GetMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitorCommandOutput> => {
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
    displayName: __expectString,
    identityCenterApplicationArn: __expectString,
    identityCenterInstanceArn: __expectString,
    monitorId: __expectString,
    roleArn: __expectString,
    subdomain: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    url: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueueCommand
 */
export const de_GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedStorageProfileIds: _json,
    blockedReason: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    defaultBudgetAction: __expectString,
    description: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    jobAttachmentSettings: _json,
    jobRunAsUser: _json,
    queueId: __expectString,
    requiredFileSystemLocationNames: _json,
    roleArn: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueueEnvironmentCommand
 */
export const de_GetQueueEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueEnvironmentCommandOutput> => {
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
    name: __expectString,
    priority: __expectInt32,
    queueEnvironmentId: __expectString,
    template: __expectString,
    templateType: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueueFleetAssociationCommand
 */
export const de_GetQueueFleetAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueFleetAssociationCommandOutput> => {
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
    fleetId: __expectString,
    queueId: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueueLimitAssociationCommand
 */
export const de_GetQueueLimitAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueLimitAssociationCommandOutput> => {
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
    limitId: __expectString,
    queueId: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    fleetId: __expectString,
    hostProperties: _json,
    lifecycleStatus: __expectString,
    log: _json,
    sessionId: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetLifecycleStatus: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerId: __expectString,
    workerLog: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionActionCommand
 */
export const de_GetSessionActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    acquiredLimits: _json,
    definition: (_) => _json(__expectUnion(_)),
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    manifests: _json,
    processExitCode: __expectInt32,
    progressMessage: __expectString,
    progressPercent: __limitedParseFloat32,
    sessionActionId: __expectString,
    sessionId: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    workerUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionsStatisticsAggregationCommand
 */
export const de_GetSessionsStatisticsAggregationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionsStatisticsAggregationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    statistics: (_) => de_StatisticsList(_, context),
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStepCommand
 */
export const de_GetStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStepCommandOutput> => {
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
    dependencyCounts: _json,
    description: __expectString,
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    name: __expectString,
    parameterSpace: _json,
    requiredCapabilities: (_) => de_StepRequiredCapabilities(_, context),
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stepId: __expectString,
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStorageProfileCommand
 */
export const de_GetStorageProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageProfileCommandOutput> => {
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
    displayName: __expectString,
    fileSystemLocations: _json,
    osFamily: __expectString,
    storageProfileId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStorageProfileForQueueCommand
 */
export const de_GetStorageProfileForQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageProfileForQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    displayName: __expectString,
    fileSystemLocations: _json,
    osFamily: __expectString,
    storageProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTaskCommand
 */
export const de_GetTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskCommandOutput> => {
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
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureRetryCount: __expectInt32,
    latestSessionActionId: __expectString,
    parameters: _json,
    runStatus: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetRunStatus: __expectString,
    taskId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkerCommand
 */
export const de_GetWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkerCommandOutput> => {
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
    farmId: __expectString,
    fleetId: __expectString,
    hostProperties: _json,
    log: _json,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAvailableMeteredProductsCommand
 */
export const de_ListAvailableMeteredProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableMeteredProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    meteredProducts: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBudgetsCommand
 */
export const de_ListBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBudgetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    budgets: (_) => de_BudgetSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFarmMembersCommand
 */
export const de_ListFarmMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFarmMembersCommandOutput> => {
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
 * deserializeAws_restJson1ListFarmsCommand
 */
export const de_ListFarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFarmsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    farms: (_) => de_FarmSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFleetMembersCommand
 */
export const de_ListFleetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetMembersCommandOutput> => {
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
 * deserializeAws_restJson1ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fleets: (_) => de_FleetSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobMembersCommand
 */
export const de_ListJobMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobMembersCommandOutput> => {
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
 * deserializeAws_restJson1ListJobParameterDefinitionsCommand
 */
export const de_ListJobParameterDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobParameterDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobParameterDefinitions: (_) => de_JobParameterDefinitions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLicenseEndpointsCommand
 */
export const de_ListLicenseEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    licenseEndpoints: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLimitsCommand
 */
export const de_ListLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    limits: (_) => de_LimitSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMeteredProductsCommand
 */
export const de_ListMeteredProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeteredProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    meteredProducts: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMonitorsCommand
 */
export const de_ListMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    monitors: (_) => de_MonitorSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueEnvironmentsCommand
 */
export const de_ListQueueEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environments: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueFleetAssociationsCommand
 */
export const de_ListQueueFleetAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueFleetAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    queueFleetAssociations: (_) => de_QueueFleetAssociationSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueLimitAssociationsCommand
 */
export const de_ListQueueLimitAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueLimitAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    queueLimitAssociations: (_) => de_QueueLimitAssociationSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueMembersCommand
 */
export const de_ListQueueMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueMembersCommandOutput> => {
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
 * deserializeAws_restJson1ListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    queues: (_) => de_QueueSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionActionsCommand
 */
export const de_ListSessionActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionActions: (_) => de_SessionActionSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessions: (_) => de_SessionSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsForWorkerCommand
 */
export const de_ListSessionsForWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsForWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessions: (_) => de_ListSessionsForWorkerSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStepConsumersCommand
 */
export const de_ListStepConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepConsumersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    consumers: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStepDependenciesCommand
 */
export const de_ListStepDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dependencies: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStepsCommand
 */
export const de_ListStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    steps: (_) => de_StepSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStorageProfilesCommand
 */
export const de_ListStorageProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    storageProfiles: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStorageProfilesForQueueCommand
 */
export const de_ListStorageProfilesForQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageProfilesForQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    storageProfiles: _json,
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
 * deserializeAws_restJson1ListTasksCommand
 */
export const de_ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: (_) => de_TaskSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkersCommand
 */
export const de_ListWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workers: (_) => de_WorkerSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutMeteredProductCommand
 */
export const de_PutMeteredProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMeteredProductCommandOutput> => {
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
 * deserializeAws_restJson1SearchJobsCommand
 */
export const de_SearchJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobSearchSummaries(_, context),
    nextItemOffset: __expectInt32,
    totalResults: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchStepsCommand
 */
export const de_SearchStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextItemOffset: __expectInt32,
    steps: (_) => de_StepSearchSummaries(_, context),
    totalResults: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchTasksCommand
 */
export const de_SearchTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextItemOffset: __expectInt32,
    tasks: (_) => de_TaskSearchSummaries(_, context),
    totalResults: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchWorkersCommand
 */
export const de_SearchWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchWorkersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextItemOffset: __expectInt32,
    totalResults: __expectInt32,
    workers: (_) => de_WorkerSearchSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSessionsStatisticsAggregationCommand
 */
export const de_StartSessionsStatisticsAggregationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionsStatisticsAggregationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregationId: __expectString,
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateBudgetCommand
 */
export const de_UpdateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> => {
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
 * deserializeAws_restJson1UpdateFarmCommand
 */
export const de_UpdateFarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFarmCommandOutput> => {
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
 * deserializeAws_restJson1UpdateFleetCommand
 */
export const de_UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
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
 * deserializeAws_restJson1UpdateJobCommand
 */
export const de_UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
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
 * deserializeAws_restJson1UpdateLimitCommand
 */
export const de_UpdateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLimitCommandOutput> => {
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
 * deserializeAws_restJson1UpdateMonitorCommand
 */
export const de_UpdateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitorCommandOutput> => {
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
 * deserializeAws_restJson1UpdateQueueCommand
 */
export const de_UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
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
 * deserializeAws_restJson1UpdateQueueEnvironmentCommand
 */
export const de_UpdateQueueEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueEnvironmentCommandOutput> => {
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
 * deserializeAws_restJson1UpdateQueueFleetAssociationCommand
 */
export const de_UpdateQueueFleetAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueFleetAssociationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateQueueLimitAssociationCommand
 */
export const de_UpdateQueueLimitAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueLimitAssociationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateSessionCommand
 */
export const de_UpdateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSessionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateStepCommand
 */
export const de_UpdateStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStepCommandOutput> => {
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
 * deserializeAws_restJson1UpdateStorageProfileCommand
 */
export const de_UpdateStorageProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageProfileCommandOutput> => {
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
 * deserializeAws_restJson1UpdateTaskCommand
 */
export const de_UpdateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
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
 * deserializeAws_restJson1UpdateWorkerCommand
 */
export const de_UpdateWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    hostConfiguration: _json,
    log: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkerScheduleCommand
 */
export const de_UpdateWorkerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assignedSessions: _json,
    cancelSessionActions: _json,
    desiredWorkerStatus: __expectString,
    updateIntervalSeconds: __expectInt32,
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
    case "com.amazonaws.deadline#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.deadline#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.deadline#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.deadline#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.deadline#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.deadline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.deadline#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    context: _json,
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
    context: _json,
    message: __expectString,
    reason: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
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
    context: _json,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
    context: _json,
    message: __expectString,
    quotaCode: __expectString,
    reason: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    context: _json,
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
    context: _json,
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AcceleratorCapabilities omitted.

// se_AcceleratorCountRange omitted.

// se_AcceleratorSelection omitted.

// se_AcceleratorSelections omitted.

// se_AcceleratorTotalMemoryMiBRange omitted.

// se_AcceleratorTypes omitted.

// se_AllowedStorageProfileIds omitted.

// se_Attachments omitted.

// se_AttributeCapabilityValuesList omitted.

/**
 * serializeAws_restJson1BudgetActionsToAdd
 */
const se_BudgetActionsToAdd = (input: BudgetActionToAdd[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BudgetActionToAdd(entry, context);
    });
};

/**
 * serializeAws_restJson1BudgetActionsToRemove
 */
const se_BudgetActionsToRemove = (input: BudgetActionToRemove[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BudgetActionToRemove(entry, context);
    });
};

/**
 * serializeAws_restJson1BudgetActionToAdd
 */
const se_BudgetActionToAdd = (input: BudgetActionToAdd, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    thresholdPercentage: __serializeFloat,
    type: [],
  });
};

/**
 * serializeAws_restJson1BudgetActionToRemove
 */
const se_BudgetActionToRemove = (input: BudgetActionToRemove, context: __SerdeContext): any => {
  return take(input, {
    thresholdPercentage: __serializeFloat,
    type: [],
  });
};

/**
 * serializeAws_restJson1BudgetSchedule
 */
const se_BudgetSchedule = (input: BudgetSchedule, context: __SerdeContext): any => {
  return BudgetSchedule.visit(input, {
    fixed: (value) => ({ fixed: se_FixedBudgetSchedule(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1CustomerManagedFleetConfiguration
 */
const se_CustomerManagedFleetConfiguration = (
  input: CustomerManagedFleetConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    mode: [],
    storageProfileId: [],
    tagPropagationMode: [],
    workerCapabilities: (_) => se_CustomerManagedWorkerCapabilities(_, context),
  });
};

/**
 * serializeAws_restJson1CustomerManagedWorkerCapabilities
 */
const se_CustomerManagedWorkerCapabilities = (
  input: CustomerManagedWorkerCapabilities,
  context: __SerdeContext
): any => {
  return take(input, {
    acceleratorCount: _json,
    acceleratorTotalMemoryMiB: _json,
    acceleratorTypes: _json,
    cpuArchitectureType: [],
    customAmounts: (_) => se_CustomFleetAmountCapabilities(_, context),
    customAttributes: _json,
    memoryMiB: _json,
    osFamily: [],
    vCpuCount: _json,
  });
};

/**
 * serializeAws_restJson1CustomFleetAmountCapabilities
 */
const se_CustomFleetAmountCapabilities = (input: FleetAmountCapability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FleetAmountCapability(entry, context);
    });
};

// se_CustomFleetAttributeCapabilities omitted.

/**
 * serializeAws_restJson1DateTimeFilterExpression
 */
const se_DateTimeFilterExpression = (input: DateTimeFilterExpression, context: __SerdeContext): any => {
  return take(input, {
    dateTime: __serializeDateTime,
    name: [],
    operator: [],
  });
};

// se_Ec2EbsVolume omitted.

// se_EnvironmentDetailsIdentifiers omitted.

// se_FieldSortExpression omitted.

// se_FileSystemLocation omitted.

// se_FileSystemLocationsList omitted.

/**
 * serializeAws_restJson1FixedBudgetSchedule
 */
const se_FixedBudgetSchedule = (input: FixedBudgetSchedule, context: __SerdeContext): any => {
  return take(input, {
    endTime: __serializeDateTime,
    startTime: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1FleetAmountCapability
 */
const se_FleetAmountCapability = (input: FleetAmountCapability, context: __SerdeContext): any => {
  return take(input, {
    max: __serializeFloat,
    min: __serializeFloat,
    name: [],
  });
};

// se_FleetAttributeCapability omitted.

/**
 * serializeAws_restJson1FleetConfiguration
 */
const se_FleetConfiguration = (input: FleetConfiguration, context: __SerdeContext): any => {
  return FleetConfiguration.visit(input, {
    customerManaged: (value) => ({ customerManaged: se_CustomerManagedFleetConfiguration(value, context) }),
    serviceManagedEc2: (value) => ({ serviceManagedEc2: se_ServiceManagedEc2FleetConfiguration(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_FleetIds omitted.

// se_HostConfiguration omitted.

// se_HostPropertiesRequest omitted.

// se_InstanceTypes omitted.

// se_IpAddresses omitted.

// se_IpV4Addresses omitted.

// se_IpV6Addresses omitted.

// se_JobAttachmentDetailsIdentifiers omitted.

// se_JobAttachmentSettings omitted.

// se_JobDetailsIdentifiers omitted.

// se_JobEntityIdentifiers omitted.

// se_JobEntityIdentifiersUnion omitted.

// se_JobParameter omitted.

// se_JobParameters omitted.

// se_JobRunAsUser omitted.

// se_ManifestProperties omitted.

// se_ManifestPropertiesList omitted.

// se_MemoryMiBRange omitted.

// se_OutputRelativeDirectoriesList omitted.

// se_ParameterFilterExpression omitted.

// se_ParameterSortExpression omitted.

// se_PosixUser omitted.

// se_QueueIds omitted.

// se_RequiredFileSystemLocationNames omitted.

// se_S3Location omitted.

/**
 * serializeAws_restJson1SearchFilterExpression
 */
const se_SearchFilterExpression = (input: SearchFilterExpression, context: __SerdeContext): any => {
  return SearchFilterExpression.visit(input, {
    dateTimeFilter: (value) => ({ dateTimeFilter: se_DateTimeFilterExpression(value, context) }),
    groupFilter: (value) => ({ groupFilter: se_SearchGroupedFilterExpressions(value, context) }),
    parameterFilter: (value) => ({ parameterFilter: _json(value) }),
    searchTermFilter: (value) => ({ searchTermFilter: _json(value) }),
    stringFilter: (value) => ({ stringFilter: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1SearchFilterExpressions
 */
const se_SearchFilterExpressions = (input: SearchFilterExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchFilterExpression(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchGroupedFilterExpressions
 */
const se_SearchGroupedFilterExpressions = (input: SearchGroupedFilterExpressions, context: __SerdeContext): any => {
  return take(input, {
    filters: (_) => se_SearchFilterExpressions(_, context),
    operator: [],
  });
};

// se_SearchSortExpression omitted.

// se_SearchSortExpressions omitted.

// se_SearchTermFilterExpression omitted.

// se_SecurityGroupIdList omitted.

/**
 * serializeAws_restJson1ServiceManagedEc2FleetConfiguration
 */
const se_ServiceManagedEc2FleetConfiguration = (
  input: ServiceManagedEc2FleetConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    instanceCapabilities: (_) => se_ServiceManagedEc2InstanceCapabilities(_, context),
    instanceMarketOptions: _json,
    storageProfileId: [],
    vpcConfiguration: _json,
  });
};

/**
 * serializeAws_restJson1ServiceManagedEc2InstanceCapabilities
 */
const se_ServiceManagedEc2InstanceCapabilities = (
  input: ServiceManagedEc2InstanceCapabilities,
  context: __SerdeContext
): any => {
  return take(input, {
    acceleratorCapabilities: _json,
    allowedInstanceTypes: _json,
    cpuArchitectureType: [],
    customAmounts: (_) => se_CustomFleetAmountCapabilities(_, context),
    customAttributes: _json,
    excludedInstanceTypes: _json,
    memoryMiB: _json,
    osFamily: [],
    rootEbsVolume: _json,
    vCpuCount: _json,
  });
};

// se_ServiceManagedEc2InstanceMarketOptions omitted.

// se_SessionsStatisticsResources omitted.

// se_StepDetailsIdentifiers omitted.

// se_StringFilterExpression omitted.

// se_SubnetIdList omitted.

// se_Tags omitted.

// se_TaskRunManifestPropertiesListRequest omitted.

// se_TaskRunManifestPropertiesRequest omitted.

/**
 * serializeAws_restJson1UpdatedSessionActionInfo
 */
const se_UpdatedSessionActionInfo = (input: UpdatedSessionActionInfo, context: __SerdeContext): any => {
  return take(input, {
    completedStatus: [],
    endedAt: __serializeDateTime,
    manifests: _json,
    processExitCode: [],
    progressMessage: [],
    progressPercent: __serializeFloat,
    startedAt: __serializeDateTime,
    updatedAt: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1UpdatedSessionActions
 */
const se_UpdatedSessionActions = (input: Record<string, UpdatedSessionActionInfo>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_UpdatedSessionActionInfo(value, context);
    return acc;
  }, {});
};

// se_UsageGroupBy omitted.

// se_UsageStatistics omitted.

// se_UsageTrackingResource omitted.

// se_UserJobsFirst omitted.

// se_VCpuCountRange omitted.

// se_VpcConfiguration omitted.

// se_VpcResourceConfigurationArns omitted.

// se_WindowsUser omitted.

/**
 * serializeAws_restJson1WorkerAmountCapability
 */
const se_WorkerAmountCapability = (input: WorkerAmountCapability, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1WorkerAmountCapabilityList
 */
const se_WorkerAmountCapabilityList = (input: WorkerAmountCapability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkerAmountCapability(entry, context);
    });
};

// se_WorkerAttributeCapability omitted.

// se_WorkerAttributeCapabilityList omitted.

/**
 * serializeAws_restJson1WorkerCapabilities
 */
const se_WorkerCapabilities = (input: WorkerCapabilities, context: __SerdeContext): any => {
  return take(input, {
    amounts: (_) => se_WorkerAmountCapabilityList(_, context),
    attributes: _json,
  });
};

// de_AcceleratorCapabilities omitted.

// de_AcceleratorCountRange omitted.

// de_AcceleratorSelection omitted.

// de_AcceleratorSelections omitted.

// de_AcceleratorTotalMemoryMiBRange omitted.

// de_AcceleratorTypes omitted.

// de_AcquiredLimit omitted.

// de_AcquiredLimits omitted.

// de_AllowedStorageProfileIds omitted.

// de_AssignedEnvironmentEnterSessionActionDefinition omitted.

// de_AssignedEnvironmentExitSessionActionDefinition omitted.

// de_AssignedSession omitted.

// de_AssignedSessionAction omitted.

// de_AssignedSessionActionDefinition omitted.

// de_AssignedSessionActions omitted.

// de_AssignedSessions omitted.

// de_AssignedSyncInputJobAttachmentsSessionActionDefinition omitted.

// de_AssignedTaskRunSessionActionDefinition omitted.

// de_Attachments omitted.

// de_AttributeCapabilityValuesList omitted.

/**
 * deserializeAws_restJson1AwsCredentials
 */
const de_AwsCredentials = (output: any, context: __SerdeContext): AwsCredentials => {
  return take(output, {
    accessKeyId: __expectString,
    expiration: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    secretAccessKey: __expectString,
    sessionToken: __expectString,
  }) as any;
};

// de_BatchGetJobEntityErrors omitted.

/**
 * deserializeAws_restJson1BatchGetJobEntityList
 */
const de_BatchGetJobEntityList = (output: any, context: __SerdeContext): JobEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobEntity(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BudgetSchedule
 */
const de_BudgetSchedule = (output: any, context: __SerdeContext): BudgetSchedule => {
  if (output.fixed != null) {
    return {
      fixed: de_FixedBudgetSchedule(output.fixed, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1BudgetSummaries
 */
const de_BudgetSummaries = (output: any, context: __SerdeContext): BudgetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BudgetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BudgetSummary
 */
const de_BudgetSummary = (output: any, context: __SerdeContext): BudgetSummary => {
  return take(output, {
    approximateDollarLimit: __limitedParseFloat32,
    budgetId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    displayName: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    usageTrackingResource: (_: any) => _json(__expectUnion(_)),
    usages: (_: any) => de_ConsumedUsages(_, context),
  }) as any;
};

// de_CancelSessionActions omitted.

/**
 * deserializeAws_restJson1ConsumedUsages
 */
const de_ConsumedUsages = (output: any, context: __SerdeContext): ConsumedUsages => {
  return take(output, {
    approximateDollarUsage: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomerManagedFleetConfiguration
 */
const de_CustomerManagedFleetConfiguration = (
  output: any,
  context: __SerdeContext
): CustomerManagedFleetConfiguration => {
  return take(output, {
    mode: __expectString,
    storageProfileId: __expectString,
    tagPropagationMode: __expectString,
    workerCapabilities: (_: any) => de_CustomerManagedWorkerCapabilities(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CustomerManagedWorkerCapabilities
 */
const de_CustomerManagedWorkerCapabilities = (
  output: any,
  context: __SerdeContext
): CustomerManagedWorkerCapabilities => {
  return take(output, {
    acceleratorCount: _json,
    acceleratorTotalMemoryMiB: _json,
    acceleratorTypes: _json,
    cpuArchitectureType: __expectString,
    customAmounts: (_: any) => de_CustomFleetAmountCapabilities(_, context),
    customAttributes: _json,
    memoryMiB: _json,
    osFamily: __expectString,
    vCpuCount: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomFleetAmountCapabilities
 */
const de_CustomFleetAmountCapabilities = (output: any, context: __SerdeContext): FleetAmountCapability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FleetAmountCapability(entry, context);
    });
  return retVal;
};

// de_CustomFleetAttributeCapabilities omitted.

// de_DependenciesList omitted.

// de_DependencyCounts omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_Ec2EbsVolume omitted.

/**
 * deserializeAws_restJson1EnvironmentDetailsEntity
 */
const de_EnvironmentDetailsEntity = (output: any, context: __SerdeContext): EnvironmentDetailsEntity => {
  return take(output, {
    environmentId: __expectString,
    jobId: __expectString,
    schemaVersion: __expectString,
    template: (_: any) => de_Document(_, context),
  }) as any;
};

// de_EnvironmentDetailsError omitted.

// de_EnvironmentEnterSessionActionDefinition omitted.

// de_EnvironmentEnterSessionActionDefinitionSummary omitted.

// de_EnvironmentExitSessionActionDefinition omitted.

// de_EnvironmentExitSessionActionDefinitionSummary omitted.

// de_ExceptionContext omitted.

// de_FarmMember omitted.

// de_FarmMembers omitted.

/**
 * deserializeAws_restJson1FarmSummaries
 */
const de_FarmSummaries = (output: any, context: __SerdeContext): FarmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FarmSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FarmSummary
 */
const de_FarmSummary = (output: any, context: __SerdeContext): FarmSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    kmsKeyArn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_FileSystemLocation omitted.

// de_FileSystemLocationsList omitted.

/**
 * deserializeAws_restJson1FixedBudgetSchedule
 */
const de_FixedBudgetSchedule = (output: any, context: __SerdeContext): FixedBudgetSchedule => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1FleetAmountCapabilities
 */
const de_FleetAmountCapabilities = (output: any, context: __SerdeContext): FleetAmountCapability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FleetAmountCapability(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FleetAmountCapability
 */
const de_FleetAmountCapability = (output: any, context: __SerdeContext): FleetAmountCapability => {
  return take(output, {
    max: __limitedParseFloat32,
    min: __limitedParseFloat32,
    name: __expectString,
  }) as any;
};

// de_FleetAttributeCapabilities omitted.

// de_FleetAttributeCapability omitted.

/**
 * deserializeAws_restJson1FleetCapabilities
 */
const de_FleetCapabilities = (output: any, context: __SerdeContext): FleetCapabilities => {
  return take(output, {
    amounts: (_: any) => de_FleetAmountCapabilities(_, context),
    attributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FleetConfiguration
 */
const de_FleetConfiguration = (output: any, context: __SerdeContext): FleetConfiguration => {
  if (output.customerManaged != null) {
    return {
      customerManaged: de_CustomerManagedFleetConfiguration(output.customerManaged, context),
    };
  }
  if (output.serviceManagedEc2 != null) {
    return {
      serviceManagedEc2: de_ServiceManagedEc2FleetConfiguration(output.serviceManagedEc2, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_FleetMember omitted.

// de_FleetMembers omitted.

/**
 * deserializeAws_restJson1FleetSummaries
 */
const de_FleetSummaries = (output: any, context: __SerdeContext): FleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FleetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FleetSummary
 */
const de_FleetSummary = (output: any, context: __SerdeContext): FleetSummary => {
  return take(output, {
    autoScalingStatus: __expectString,
    configuration: (_: any) => de_FleetConfiguration(__expectUnion(_), context),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    fleetId: __expectString,
    maxWorkerCount: __expectInt32,
    minWorkerCount: __expectInt32,
    status: __expectString,
    targetWorkerCount: __expectInt32,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerCount: __expectInt32,
  }) as any;
};

// de_GetJobEntityError omitted.

// de_HostConfiguration omitted.

// de_HostPropertiesResponse omitted.

// de_InstanceTypes omitted.

// de_IpAddresses omitted.

// de_IpV4Addresses omitted.

// de_IpV6Addresses omitted.

// de_JobAttachmentDetailsEntity omitted.

// de_JobAttachmentDetailsError omitted.

// de_JobAttachmentSettings omitted.

// de_JobDetailsEntity omitted.

// de_JobDetailsError omitted.

/**
 * deserializeAws_restJson1JobEntity
 */
const de_JobEntity = (output: any, context: __SerdeContext): JobEntity => {
  if (output.environmentDetails != null) {
    return {
      environmentDetails: de_EnvironmentDetailsEntity(output.environmentDetails, context),
    };
  }
  if (output.jobAttachmentDetails != null) {
    return {
      jobAttachmentDetails: _json(output.jobAttachmentDetails),
    };
  }
  if (output.jobDetails != null) {
    return {
      jobDetails: _json(output.jobDetails),
    };
  }
  if (output.stepDetails != null) {
    return {
      stepDetails: de_StepDetailsEntity(output.stepDetails, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_JobMember omitted.

// de_JobMembers omitted.

// de_JobParameter omitted.

/**
 * deserializeAws_restJson1JobParameterDefinition
 */
const de_JobParameterDefinition = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1JobParameterDefinitions
 */
const de_JobParameterDefinitions = (output: any, context: __SerdeContext): __DocumentType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobParameterDefinition(entry, context);
    });
  return retVal;
};

// de_JobParameters omitted.

// de_JobRunAsUser omitted.

/**
 * deserializeAws_restJson1JobSearchSummaries
 */
const de_JobSearchSummaries = (output: any, context: __SerdeContext): JobSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSearchSummary
 */
const de_JobSearchSummary = (output: any, context: __SerdeContext): JobSearchSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    jobParameters: _json,
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    maxFailedTasksCount: __expectInt32,
    maxRetriesPerTask: __expectInt32,
    maxWorkerCount: __expectInt32,
    name: __expectString,
    priority: __expectInt32,
    queueId: __expectString,
    sourceJobId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobSummaries
 */
const de_JobSummaries = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    maxFailedTasksCount: __expectInt32,
    maxRetriesPerTask: __expectInt32,
    maxWorkerCount: __expectInt32,
    name: __expectString,
    priority: __expectInt32,
    sourceJobId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_LicenseEndpointSummaries omitted.

// de_LicenseEndpointSummary omitted.

/**
 * deserializeAws_restJson1LimitSummaries
 */
const de_LimitSummaries = (output: any, context: __SerdeContext): LimitSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LimitSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LimitSummary
 */
const de_LimitSummary = (output: any, context: __SerdeContext): LimitSummary => {
  return take(output, {
    amountRequirementName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    currentCount: __expectInt32,
    displayName: __expectString,
    farmId: __expectString,
    limitId: __expectString,
    maxCount: __expectInt32,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_ListAttributeCapabilityValue omitted.

/**
 * deserializeAws_restJson1ListSessionsForWorkerSummaries
 */
const de_ListSessionsForWorkerSummaries = (output: any, context: __SerdeContext): WorkerSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkerSessionSummary(entry, context);
    });
  return retVal;
};

// de_LogConfiguration omitted.

// de_LogOptions omitted.

// de_LogParameters omitted.

// de_ManifestProperties omitted.

// de_ManifestPropertiesList omitted.

// de_MemoryMiBRange omitted.

// de_MeteredProductSummary omitted.

// de_MeteredProductSummaryList omitted.

/**
 * deserializeAws_restJson1MonitorSummaries
 */
const de_MonitorSummaries = (output: any, context: __SerdeContext): MonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MonitorSummary
 */
const de_MonitorSummary = (output: any, context: __SerdeContext): MonitorSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    displayName: __expectString,
    identityCenterApplicationArn: __expectString,
    identityCenterInstanceArn: __expectString,
    monitorId: __expectString,
    roleArn: __expectString,
    subdomain: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    url: __expectString,
  }) as any;
};

// de_OutputRelativeDirectoriesList omitted.

// de_ParameterSpace omitted.

// de_PathMappingRule omitted.

// de_PathMappingRules omitted.

// de_PosixUser omitted.

// de_QueueEnvironmentSummaries omitted.

// de_QueueEnvironmentSummary omitted.

/**
 * deserializeAws_restJson1QueueFleetAssociationSummaries
 */
const de_QueueFleetAssociationSummaries = (output: any, context: __SerdeContext): QueueFleetAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueFleetAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueueFleetAssociationSummary
 */
const de_QueueFleetAssociationSummary = (output: any, context: __SerdeContext): QueueFleetAssociationSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    fleetId: __expectString,
    queueId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1QueueLimitAssociationSummaries
 */
const de_QueueLimitAssociationSummaries = (output: any, context: __SerdeContext): QueueLimitAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueLimitAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueueLimitAssociationSummary
 */
const de_QueueLimitAssociationSummary = (output: any, context: __SerdeContext): QueueLimitAssociationSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    limitId: __expectString,
    queueId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_QueueMember omitted.

// de_QueueMemberList omitted.

/**
 * deserializeAws_restJson1QueueSummaries
 */
const de_QueueSummaries = (output: any, context: __SerdeContext): QueueSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueueSummary
 */
const de_QueueSummary = (output: any, context: __SerdeContext): QueueSummary => {
  return take(output, {
    blockedReason: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    defaultBudgetAction: __expectString,
    displayName: __expectString,
    farmId: __expectString,
    queueId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_RequiredFileSystemLocationNames omitted.

/**
 * deserializeAws_restJson1ResponseBudgetAction
 */
const de_ResponseBudgetAction = (output: any, context: __SerdeContext): ResponseBudgetAction => {
  return take(output, {
    description: __expectString,
    thresholdPercentage: __limitedParseFloat32,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResponseBudgetActionList
 */
const de_ResponseBudgetActionList = (output: any, context: __SerdeContext): ResponseBudgetAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseBudgetAction(entry, context);
    });
  return retVal;
};

// de_SecurityGroupIdList omitted.

/**
 * deserializeAws_restJson1ServiceManagedEc2FleetConfiguration
 */
const de_ServiceManagedEc2FleetConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceManagedEc2FleetConfiguration => {
  return take(output, {
    instanceCapabilities: (_: any) => de_ServiceManagedEc2InstanceCapabilities(_, context),
    instanceMarketOptions: _json,
    storageProfileId: __expectString,
    vpcConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceManagedEc2InstanceCapabilities
 */
const de_ServiceManagedEc2InstanceCapabilities = (
  output: any,
  context: __SerdeContext
): ServiceManagedEc2InstanceCapabilities => {
  return take(output, {
    acceleratorCapabilities: _json,
    allowedInstanceTypes: _json,
    cpuArchitectureType: __expectString,
    customAmounts: (_: any) => de_CustomFleetAmountCapabilities(_, context),
    customAttributes: _json,
    excludedInstanceTypes: _json,
    memoryMiB: _json,
    osFamily: __expectString,
    rootEbsVolume: _json,
    vCpuCount: _json,
  }) as any;
};

// de_ServiceManagedEc2InstanceMarketOptions omitted.

// de_SessionActionDefinition omitted.

// de_SessionActionDefinitionSummary omitted.

// de_SessionActionIdList omitted.

/**
 * deserializeAws_restJson1SessionActionSummaries
 */
const de_SessionActionSummaries = (output: any, context: __SerdeContext): SessionActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionActionSummary
 */
const de_SessionActionSummary = (output: any, context: __SerdeContext): SessionActionSummary => {
  return take(output, {
    definition: (_: any) => _json(__expectUnion(_)),
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    manifests: _json,
    progressPercent: __limitedParseFloat32,
    sessionActionId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    workerUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSummaries
 */
const de_SessionSummaries = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return take(output, {
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    fleetId: __expectString,
    lifecycleStatus: __expectString,
    sessionId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetLifecycleStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return take(output, {
    aggregationEndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    aggregationStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    costInUsd: (_: any) => de_Stats(_, context),
    count: __expectInt32,
    fleetId: __expectString,
    instanceType: __expectString,
    jobId: __expectString,
    jobName: __expectString,
    licenseProduct: __expectString,
    queueId: __expectString,
    runtimeInSeconds: (_: any) => de_Stats(_, context),
    usageType: __expectString,
    userId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StatisticsList
 */
const de_StatisticsList = (output: any, context: __SerdeContext): Statistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Statistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Stats
 */
const de_Stats = (output: any, context: __SerdeContext): Stats => {
  return take(output, {
    avg: __limitedParseDouble,
    max: __limitedParseDouble,
    min: __limitedParseDouble,
    sum: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1StepAmountCapabilities
 */
const de_StepAmountCapabilities = (output: any, context: __SerdeContext): StepAmountCapability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepAmountCapability(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StepAmountCapability
 */
const de_StepAmountCapability = (output: any, context: __SerdeContext): StepAmountCapability => {
  return take(output, {
    max: __limitedParseDouble,
    min: __limitedParseDouble,
    name: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_StepAttributeCapabilities omitted.

// de_StepAttributeCapability omitted.

// de_StepConsumer omitted.

// de_StepConsumers omitted.

// de_StepDependencies omitted.

// de_StepDependency omitted.

/**
 * deserializeAws_restJson1StepDetailsEntity
 */
const de_StepDetailsEntity = (output: any, context: __SerdeContext): StepDetailsEntity => {
  return take(output, {
    dependencies: _json,
    jobId: __expectString,
    schemaVersion: __expectString,
    stepId: __expectString,
    template: (_: any) => de_Document(_, context),
  }) as any;
};

// de_StepDetailsError omitted.

// de_StepParameter omitted.

// de_StepParameterList omitted.

/**
 * deserializeAws_restJson1StepRequiredCapabilities
 */
const de_StepRequiredCapabilities = (output: any, context: __SerdeContext): StepRequiredCapabilities => {
  return take(output, {
    amounts: (_: any) => de_StepAmountCapabilities(_, context),
    attributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1StepSearchSummaries
 */
const de_StepSearchSummaries = (output: any, context: __SerdeContext): StepSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StepSearchSummary
 */
const de_StepSearchSummary = (output: any, context: __SerdeContext): StepSearchSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    name: __expectString,
    parameterSpace: _json,
    queueId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stepId: __expectString,
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StepSummaries
 */
const de_StepSummaries = (output: any, context: __SerdeContext): StepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StepSummary
 */
const de_StepSummary = (output: any, context: __SerdeContext): StepSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    dependencyCounts: _json,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStatus: __expectString,
    lifecycleStatusMessage: __expectString,
    name: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stepId: __expectString,
    targetTaskRunStatus: __expectString,
    taskFailureRetryCount: __expectInt32,
    taskRunStatus: __expectString,
    taskRunStatusCounts: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_StorageProfileSummaries omitted.

// de_StorageProfileSummary omitted.

// de_SubnetIdList omitted.

// de_SyncInputJobAttachmentsSessionActionDefinition omitted.

// de_SyncInputJobAttachmentsSessionActionDefinitionSummary omitted.

// de_Tags omitted.

// de_TaskParameters omitted.

// de_TaskParameterValue omitted.

// de_TaskRunManifestPropertiesListResponse omitted.

// de_TaskRunManifestPropertiesResponse omitted.

// de_TaskRunSessionActionDefinition omitted.

// de_TaskRunSessionActionDefinitionSummary omitted.

// de_TaskRunStatusCounts omitted.

/**
 * deserializeAws_restJson1TaskSearchSummaries
 */
const de_TaskSearchSummaries = (output: any, context: __SerdeContext): TaskSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskSearchSummary
 */
const de_TaskSearchSummary = (output: any, context: __SerdeContext): TaskSearchSummary => {
  return take(output, {
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureRetryCount: __expectInt32,
    jobId: __expectString,
    parameters: _json,
    queueId: __expectString,
    runStatus: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stepId: __expectString,
    targetRunStatus: __expectString,
    taskId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TaskSummaries
 */
const de_TaskSummaries = (output: any, context: __SerdeContext): TaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskSummary
 */
const de_TaskSummary = (output: any, context: __SerdeContext): TaskSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureRetryCount: __expectInt32,
    latestSessionActionId: __expectString,
    parameters: _json,
    runStatus: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetRunStatus: __expectString,
    taskId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_UsageTrackingResource omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VCpuCountRange omitted.

// de_VpcConfiguration omitted.

// de_VpcResourceConfigurationArns omitted.

// de_WindowsUser omitted.

/**
 * deserializeAws_restJson1WorkerSearchSummaries
 */
const de_WorkerSearchSummaries = (output: any, context: __SerdeContext): WorkerSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkerSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkerSearchSummary
 */
const de_WorkerSearchSummary = (output: any, context: __SerdeContext): WorkerSearchSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    fleetId: __expectString,
    hostProperties: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkerSessionSummary
 */
const de_WorkerSessionSummary = (output: any, context: __SerdeContext): WorkerSessionSummary => {
  return take(output, {
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    lifecycleStatus: __expectString,
    queueId: __expectString,
    sessionId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    targetLifecycleStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkerSummaries
 */
const de_WorkerSummaries = (output: any, context: __SerdeContext): WorkerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkerSummary
 */
const de_WorkerSummary = (output: any, context: __SerdeContext): WorkerSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    farmId: __expectString,
    fleetId: __expectString,
    hostProperties: _json,
    log: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    workerId: __expectString,
  }) as any;
};

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

const _aI = "aggregationId";
const _cT = "clientToken";
const _dN = "displayName";
const _fI = "fleetId";
const _lI = "limitId";
const _mR = "maxResults";
const _nT = "nextToken";
const _pI = "principalId";
const _qI = "queueId";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "status";
const _sI = "sessionId";
const _tI = "taskId";
const _tK = "tagKeys";
const _xact = "x-amz-client-token";
