// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CreateAssertionCommandInput,
  type CreateAssertionCommandOutput,
  CreateAssertionCommand,
} from "./commands/CreateAssertionCommand";
import {
  type CreateInputSourceCommandInput,
  type CreateInputSourceCommandOutput,
  CreateInputSourceCommand,
} from "./commands/CreateInputSourceCommand";
import {
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyCommand,
} from "./commands/CreatePolicyCommand";
import {
  type CreateReportCommandInput,
  type CreateReportCommandOutput,
  CreateReportCommand,
} from "./commands/CreateReportCommand";
import {
  type CreateServiceCommandInput,
  type CreateServiceCommandOutput,
  CreateServiceCommand,
} from "./commands/CreateServiceCommand";
import {
  type CreateServiceFunctionCommandInput,
  type CreateServiceFunctionCommandOutput,
  CreateServiceFunctionCommand,
} from "./commands/CreateServiceFunctionCommand";
import {
  type CreateServiceFunctionResourcesCommandInput,
  type CreateServiceFunctionResourcesCommandOutput,
  CreateServiceFunctionResourcesCommand,
} from "./commands/CreateServiceFunctionResourcesCommand";
import {
  type CreateSystemCommandInput,
  type CreateSystemCommandOutput,
  CreateSystemCommand,
} from "./commands/CreateSystemCommand";
import {
  type CreateUserJourneyCommandInput,
  type CreateUserJourneyCommandOutput,
  CreateUserJourneyCommand,
} from "./commands/CreateUserJourneyCommand";
import {
  type DeleteAssertionCommandInput,
  type DeleteAssertionCommandOutput,
  DeleteAssertionCommand,
} from "./commands/DeleteAssertionCommand";
import {
  type DeleteInputSourceCommandInput,
  type DeleteInputSourceCommandOutput,
  DeleteInputSourceCommand,
} from "./commands/DeleteInputSourceCommand";
import {
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyCommand,
} from "./commands/DeletePolicyCommand";
import {
  type DeleteServiceCommandInput,
  type DeleteServiceCommandOutput,
  DeleteServiceCommand,
} from "./commands/DeleteServiceCommand";
import {
  type DeleteServiceFunctionCommandInput,
  type DeleteServiceFunctionCommandOutput,
  DeleteServiceFunctionCommand,
} from "./commands/DeleteServiceFunctionCommand";
import {
  type DeleteServiceFunctionResourcesCommandInput,
  type DeleteServiceFunctionResourcesCommandOutput,
  DeleteServiceFunctionResourcesCommand,
} from "./commands/DeleteServiceFunctionResourcesCommand";
import {
  type DeleteSystemCommandInput,
  type DeleteSystemCommandOutput,
  DeleteSystemCommand,
} from "./commands/DeleteSystemCommand";
import {
  type DeleteUserJourneyCommandInput,
  type DeleteUserJourneyCommandOutput,
  DeleteUserJourneyCommand,
} from "./commands/DeleteUserJourneyCommand";
import {
  type GetFailureModeFindingCommandInput,
  type GetFailureModeFindingCommandOutput,
  GetFailureModeFindingCommand,
} from "./commands/GetFailureModeFindingCommand";
import { type GetPolicyCommandInput, type GetPolicyCommandOutput, GetPolicyCommand } from "./commands/GetPolicyCommand";
import {
  type GetServiceCommandInput,
  type GetServiceCommandOutput,
  GetServiceCommand,
} from "./commands/GetServiceCommand";
import { type GetSystemCommandInput, type GetSystemCommandOutput, GetSystemCommand } from "./commands/GetSystemCommand";
import {
  type GetUserJourneyCommandInput,
  type GetUserJourneyCommandOutput,
  GetUserJourneyCommand,
} from "./commands/GetUserJourneyCommand";
import { type ImportAppCommandInput, type ImportAppCommandOutput, ImportAppCommand } from "./commands/ImportAppCommand";
import {
  type ImportPolicyCommandInput,
  type ImportPolicyCommandOutput,
  ImportPolicyCommand,
} from "./commands/ImportPolicyCommand";
import {
  type ListAssertionsCommandInput,
  type ListAssertionsCommandOutput,
  ListAssertionsCommand,
} from "./commands/ListAssertionsCommand";
import {
  type ListDependenciesCommandInput,
  type ListDependenciesCommandOutput,
  ListDependenciesCommand,
} from "./commands/ListDependenciesCommand";
import {
  type ListFailureModeAssessmentsCommandInput,
  type ListFailureModeAssessmentsCommandOutput,
  ListFailureModeAssessmentsCommand,
} from "./commands/ListFailureModeAssessmentsCommand";
import {
  type ListFailureModeFindingsCommandInput,
  type ListFailureModeFindingsCommandOutput,
  ListFailureModeFindingsCommand,
} from "./commands/ListFailureModeFindingsCommand";
import {
  type ListInputSourcesCommandInput,
  type ListInputSourcesCommandOutput,
  ListInputSourcesCommand,
} from "./commands/ListInputSourcesCommand";
import {
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesCommand,
} from "./commands/ListPoliciesCommand";
import {
  type ListReportsCommandInput,
  type ListReportsCommandOutput,
  ListReportsCommand,
} from "./commands/ListReportsCommand";
import {
  type ListResourcesCommandInput,
  type ListResourcesCommandOutput,
  ListResourcesCommand,
} from "./commands/ListResourcesCommand";
import {
  type ListServiceEventsCommandInput,
  type ListServiceEventsCommandOutput,
  ListServiceEventsCommand,
} from "./commands/ListServiceEventsCommand";
import {
  type ListServiceFunctionsCommandInput,
  type ListServiceFunctionsCommandOutput,
  ListServiceFunctionsCommand,
} from "./commands/ListServiceFunctionsCommand";
import {
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListServicesCommand,
} from "./commands/ListServicesCommand";
import {
  type ListServiceTopologyEdgesCommandInput,
  type ListServiceTopologyEdgesCommandOutput,
  ListServiceTopologyEdgesCommand,
} from "./commands/ListServiceTopologyEdgesCommand";
import {
  type ListSystemEventsCommandInput,
  type ListSystemEventsCommandOutput,
  ListSystemEventsCommand,
} from "./commands/ListSystemEventsCommand";
import {
  type ListSystemsCommandInput,
  type ListSystemsCommandOutput,
  ListSystemsCommand,
} from "./commands/ListSystemsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListUserJourneysCommandInput,
  type ListUserJourneysCommandOutput,
  ListUserJourneysCommand,
} from "./commands/ListUserJourneysCommand";
import {
  type StartFailureModeAssessmentCommandInput,
  type StartFailureModeAssessmentCommandOutput,
  StartFailureModeAssessmentCommand,
} from "./commands/StartFailureModeAssessmentCommand";
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
  type UpdateAssertionCommandInput,
  type UpdateAssertionCommandOutput,
  UpdateAssertionCommand,
} from "./commands/UpdateAssertionCommand";
import {
  type UpdateDependencyCommandInput,
  type UpdateDependencyCommandOutput,
  UpdateDependencyCommand,
} from "./commands/UpdateDependencyCommand";
import {
  type UpdateFailureModeFindingCommandInput,
  type UpdateFailureModeFindingCommandOutput,
  UpdateFailureModeFindingCommand,
} from "./commands/UpdateFailureModeFindingCommand";
import {
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
  UpdatePolicyCommand,
} from "./commands/UpdatePolicyCommand";
import {
  type UpdateServiceCommandInput,
  type UpdateServiceCommandOutput,
  UpdateServiceCommand,
} from "./commands/UpdateServiceCommand";
import {
  type UpdateServiceFunctionCommandInput,
  type UpdateServiceFunctionCommandOutput,
  UpdateServiceFunctionCommand,
} from "./commands/UpdateServiceFunctionCommand";
import {
  type UpdateSystemCommandInput,
  type UpdateSystemCommandOutput,
  UpdateSystemCommand,
} from "./commands/UpdateSystemCommand";
import {
  type UpdateUserJourneyCommandInput,
  type UpdateUserJourneyCommandOutput,
  UpdateUserJourneyCommand,
} from "./commands/UpdateUserJourneyCommand";
import type { Resiliencehubv2ServiceException } from "./models/Resiliencehubv2ServiceException";
import { paginateListAssertions } from "./pagination/ListAssertionsPaginator";
import { paginateListDependencies } from "./pagination/ListDependenciesPaginator";
import { paginateListFailureModeAssessments } from "./pagination/ListFailureModeAssessmentsPaginator";
import { paginateListFailureModeFindings } from "./pagination/ListFailureModeFindingsPaginator";
import { paginateListInputSources } from "./pagination/ListInputSourcesPaginator";
import { paginateListPolicies } from "./pagination/ListPoliciesPaginator";
import { paginateListReports } from "./pagination/ListReportsPaginator";
import { paginateListResources } from "./pagination/ListResourcesPaginator";
import { paginateListServiceEvents } from "./pagination/ListServiceEventsPaginator";
import { paginateListServiceFunctions } from "./pagination/ListServiceFunctionsPaginator";
import { paginateListServices } from "./pagination/ListServicesPaginator";
import { paginateListServiceTopologyEdges } from "./pagination/ListServiceTopologyEdgesPaginator";
import { paginateListSystemEvents } from "./pagination/ListSystemEventsPaginator";
import { paginateListSystems } from "./pagination/ListSystemsPaginator";
import { paginateListUserJourneys } from "./pagination/ListUserJourneysPaginator";
import { Resiliencehubv2Client } from "./Resiliencehubv2Client";
import { waitUntilFailureModeAssessmentSuccess } from "./waiters/waitForFailureModeAssessmentSuccess";
import { waitUntilReportSucceeded } from "./waiters/waitForReportSucceeded";
import { waitUntilServiceAssessmentCompleted } from "./waiters/waitForServiceAssessmentCompleted";
import { waitUntilServiceResourceDiscoveryCompleted } from "./waiters/waitForServiceResourceDiscoveryCompleted";

const commands = {
  CreateAssertionCommand,
  CreateInputSourceCommand,
  CreatePolicyCommand,
  CreateReportCommand,
  CreateServiceCommand,
  CreateServiceFunctionCommand,
  CreateServiceFunctionResourcesCommand,
  CreateSystemCommand,
  CreateUserJourneyCommand,
  DeleteAssertionCommand,
  DeleteInputSourceCommand,
  DeletePolicyCommand,
  DeleteServiceCommand,
  DeleteServiceFunctionCommand,
  DeleteServiceFunctionResourcesCommand,
  DeleteSystemCommand,
  DeleteUserJourneyCommand,
  GetFailureModeFindingCommand,
  GetPolicyCommand,
  GetServiceCommand,
  GetSystemCommand,
  GetUserJourneyCommand,
  ImportAppCommand,
  ImportPolicyCommand,
  ListAssertionsCommand,
  ListDependenciesCommand,
  ListFailureModeAssessmentsCommand,
  ListFailureModeFindingsCommand,
  ListInputSourcesCommand,
  ListPoliciesCommand,
  ListReportsCommand,
  ListResourcesCommand,
  ListServiceEventsCommand,
  ListServiceFunctionsCommand,
  ListServicesCommand,
  ListServiceTopologyEdgesCommand,
  ListSystemEventsCommand,
  ListSystemsCommand,
  ListTagsForResourceCommand,
  ListUserJourneysCommand,
  StartFailureModeAssessmentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAssertionCommand,
  UpdateDependencyCommand,
  UpdateFailureModeFindingCommand,
  UpdatePolicyCommand,
  UpdateServiceCommand,
  UpdateServiceFunctionCommand,
  UpdateSystemCommand,
  UpdateUserJourneyCommand,
};
const paginators = {
  paginateListAssertions,
  paginateListDependencies,
  paginateListFailureModeAssessments,
  paginateListFailureModeFindings,
  paginateListInputSources,
  paginateListPolicies,
  paginateListReports,
  paginateListResources,
  paginateListServiceEvents,
  paginateListServiceFunctions,
  paginateListServices,
  paginateListServiceTopologyEdges,
  paginateListSystemEvents,
  paginateListSystems,
  paginateListUserJourneys,
};
const waiters = {
  waitUntilServiceAssessmentCompleted,
  waitUntilServiceResourceDiscoveryCompleted,
  waitUntilFailureModeAssessmentSuccess,
  waitUntilReportSucceeded,
};

export interface Resiliencehubv2 {
  /**
   * @see {@link CreateAssertionCommand}
   */
  createAssertion(
    args: CreateAssertionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssertionCommandOutput>;
  createAssertion(
    args: CreateAssertionCommandInput,
    cb: (err: any, data?: CreateAssertionCommandOutput) => void
  ): void;
  createAssertion(
    args: CreateAssertionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssertionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputSourceCommand}
   */
  createInputSource(
    args: CreateInputSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInputSourceCommandOutput>;
  createInputSource(
    args: CreateInputSourceCommandInput,
    cb: (err: any, data?: CreateInputSourceCommandOutput) => void
  ): void;
  createInputSource(
    args: CreateInputSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  createPolicy(
    args: CreatePolicyCommandInput,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReportCommand}
   */
  createReport(
    args: CreateReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportCommandOutput>;
  createReport(
    args: CreateReportCommandInput,
    cb: (err: any, data?: CreateReportCommandOutput) => void
  ): void;
  createReport(
    args: CreateReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(
    args: CreateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceCommandOutput>;
  createService(
    args: CreateServiceCommandInput,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceFunctionCommand}
   */
  createServiceFunction(
    args: CreateServiceFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceFunctionCommandOutput>;
  createServiceFunction(
    args: CreateServiceFunctionCommandInput,
    cb: (err: any, data?: CreateServiceFunctionCommandOutput) => void
  ): void;
  createServiceFunction(
    args: CreateServiceFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceFunctionResourcesCommand}
   */
  createServiceFunctionResources(
    args: CreateServiceFunctionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceFunctionResourcesCommandOutput>;
  createServiceFunctionResources(
    args: CreateServiceFunctionResourcesCommandInput,
    cb: (err: any, data?: CreateServiceFunctionResourcesCommandOutput) => void
  ): void;
  createServiceFunctionResources(
    args: CreateServiceFunctionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceFunctionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSystemCommand}
   */
  createSystem(
    args: CreateSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSystemCommandOutput>;
  createSystem(
    args: CreateSystemCommandInput,
    cb: (err: any, data?: CreateSystemCommandOutput) => void
  ): void;
  createSystem(
    args: CreateSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserJourneyCommand}
   */
  createUserJourney(
    args: CreateUserJourneyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserJourneyCommandOutput>;
  createUserJourney(
    args: CreateUserJourneyCommandInput,
    cb: (err: any, data?: CreateUserJourneyCommandOutput) => void
  ): void;
  createUserJourney(
    args: CreateUserJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssertionCommand}
   */
  deleteAssertion(
    args: DeleteAssertionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssertionCommandOutput>;
  deleteAssertion(
    args: DeleteAssertionCommandInput,
    cb: (err: any, data?: DeleteAssertionCommandOutput) => void
  ): void;
  deleteAssertion(
    args: DeleteAssertionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssertionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputSourceCommand}
   */
  deleteInputSource(
    args: DeleteInputSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInputSourceCommandOutput>;
  deleteInputSource(
    args: DeleteInputSourceCommandInput,
    cb: (err: any, data?: DeleteInputSourceCommandOutput) => void
  ): void;
  deleteInputSource(
    args: DeleteInputSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(
    args: DeleteServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceCommandOutput>;
  deleteService(
    args: DeleteServiceCommandInput,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceFunctionCommand}
   */
  deleteServiceFunction(
    args: DeleteServiceFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceFunctionCommandOutput>;
  deleteServiceFunction(
    args: DeleteServiceFunctionCommandInput,
    cb: (err: any, data?: DeleteServiceFunctionCommandOutput) => void
  ): void;
  deleteServiceFunction(
    args: DeleteServiceFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceFunctionResourcesCommand}
   */
  deleteServiceFunctionResources(
    args: DeleteServiceFunctionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceFunctionResourcesCommandOutput>;
  deleteServiceFunctionResources(
    args: DeleteServiceFunctionResourcesCommandInput,
    cb: (err: any, data?: DeleteServiceFunctionResourcesCommandOutput) => void
  ): void;
  deleteServiceFunctionResources(
    args: DeleteServiceFunctionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceFunctionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSystemCommand}
   */
  deleteSystem(
    args: DeleteSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSystemCommandOutput>;
  deleteSystem(
    args: DeleteSystemCommandInput,
    cb: (err: any, data?: DeleteSystemCommandOutput) => void
  ): void;
  deleteSystem(
    args: DeleteSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserJourneyCommand}
   */
  deleteUserJourney(
    args: DeleteUserJourneyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserJourneyCommandOutput>;
  deleteUserJourney(
    args: DeleteUserJourneyCommandInput,
    cb: (err: any, data?: DeleteUserJourneyCommandOutput) => void
  ): void;
  deleteUserJourney(
    args: DeleteUserJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFailureModeFindingCommand}
   */
  getFailureModeFinding(
    args: GetFailureModeFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFailureModeFindingCommandOutput>;
  getFailureModeFinding(
    args: GetFailureModeFindingCommandInput,
    cb: (err: any, data?: GetFailureModeFindingCommandOutput) => void
  ): void;
  getFailureModeFinding(
    args: GetFailureModeFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFailureModeFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(
    args: GetServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceCommandOutput>;
  getService(
    args: GetServiceCommandInput,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSystemCommand}
   */
  getSystem(
    args: GetSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemCommandOutput>;
  getSystem(
    args: GetSystemCommandInput,
    cb: (err: any, data?: GetSystemCommandOutput) => void
  ): void;
  getSystem(
    args: GetSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserJourneyCommand}
   */
  getUserJourney(
    args: GetUserJourneyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserJourneyCommandOutput>;
  getUserJourney(
    args: GetUserJourneyCommandInput,
    cb: (err: any, data?: GetUserJourneyCommandOutput) => void
  ): void;
  getUserJourney(
    args: GetUserJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportAppCommand}
   */
  importApp(
    args: ImportAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportAppCommandOutput>;
  importApp(
    args: ImportAppCommandInput,
    cb: (err: any, data?: ImportAppCommandOutput) => void
  ): void;
  importApp(
    args: ImportAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportAppCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportPolicyCommand}
   */
  importPolicy(
    args: ImportPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportPolicyCommandOutput>;
  importPolicy(
    args: ImportPolicyCommandInput,
    cb: (err: any, data?: ImportPolicyCommandOutput) => void
  ): void;
  importPolicy(
    args: ImportPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssertionsCommand}
   */
  listAssertions(
    args: ListAssertionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssertionsCommandOutput>;
  listAssertions(
    args: ListAssertionsCommandInput,
    cb: (err: any, data?: ListAssertionsCommandOutput) => void
  ): void;
  listAssertions(
    args: ListAssertionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssertionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDependenciesCommand}
   */
  listDependencies(): Promise<ListDependenciesCommandOutput>;
  listDependencies(
    args: ListDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDependenciesCommandOutput>;
  listDependencies(
    args: ListDependenciesCommandInput,
    cb: (err: any, data?: ListDependenciesCommandOutput) => void
  ): void;
  listDependencies(
    args: ListDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFailureModeAssessmentsCommand}
   */
  listFailureModeAssessments(
    args: ListFailureModeAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFailureModeAssessmentsCommandOutput>;
  listFailureModeAssessments(
    args: ListFailureModeAssessmentsCommandInput,
    cb: (err: any, data?: ListFailureModeAssessmentsCommandOutput) => void
  ): void;
  listFailureModeAssessments(
    args: ListFailureModeAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFailureModeAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFailureModeFindingsCommand}
   */
  listFailureModeFindings(
    args: ListFailureModeFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFailureModeFindingsCommandOutput>;
  listFailureModeFindings(
    args: ListFailureModeFindingsCommandInput,
    cb: (err: any, data?: ListFailureModeFindingsCommandOutput) => void
  ): void;
  listFailureModeFindings(
    args: ListFailureModeFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFailureModeFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputSourcesCommand}
   */
  listInputSources(
    args: ListInputSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputSourcesCommandOutput>;
  listInputSources(
    args: ListInputSourcesCommandInput,
    cb: (err: any, data?: ListInputSourcesCommandOutput) => void
  ): void;
  listInputSources(
    args: ListInputSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsCommand}
   */
  listReports(): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(
    args: ListResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesCommandOutput>;
  listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceEventsCommand}
   */
  listServiceEvents(
    args: ListServiceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceEventsCommandOutput>;
  listServiceEvents(
    args: ListServiceEventsCommandInput,
    cb: (err: any, data?: ListServiceEventsCommandOutput) => void
  ): void;
  listServiceEvents(
    args: ListServiceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceFunctionsCommand}
   */
  listServiceFunctions(
    args: ListServiceFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceFunctionsCommandOutput>;
  listServiceFunctions(
    args: ListServiceFunctionsCommandInput,
    cb: (err: any, data?: ListServiceFunctionsCommandOutput) => void
  ): void;
  listServiceFunctions(
    args: ListServiceFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceTopologyEdgesCommand}
   */
  listServiceTopologyEdges(
    args: ListServiceTopologyEdgesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceTopologyEdgesCommandOutput>;
  listServiceTopologyEdges(
    args: ListServiceTopologyEdgesCommandInput,
    cb: (err: any, data?: ListServiceTopologyEdgesCommandOutput) => void
  ): void;
  listServiceTopologyEdges(
    args: ListServiceTopologyEdgesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceTopologyEdgesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSystemEventsCommand}
   */
  listSystemEvents(
    args: ListSystemEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSystemEventsCommandOutput>;
  listSystemEvents(
    args: ListSystemEventsCommandInput,
    cb: (err: any, data?: ListSystemEventsCommandOutput) => void
  ): void;
  listSystemEvents(
    args: ListSystemEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSystemEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSystemsCommand}
   */
  listSystems(): Promise<ListSystemsCommandOutput>;
  listSystems(
    args: ListSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSystemsCommandOutput>;
  listSystems(
    args: ListSystemsCommandInput,
    cb: (err: any, data?: ListSystemsCommandOutput) => void
  ): void;
  listSystems(
    args: ListSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSystemsCommandOutput) => void
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
   * @see {@link ListUserJourneysCommand}
   */
  listUserJourneys(
    args: ListUserJourneysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserJourneysCommandOutput>;
  listUserJourneys(
    args: ListUserJourneysCommandInput,
    cb: (err: any, data?: ListUserJourneysCommandOutput) => void
  ): void;
  listUserJourneys(
    args: ListUserJourneysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserJourneysCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFailureModeAssessmentCommand}
   */
  startFailureModeAssessment(
    args: StartFailureModeAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFailureModeAssessmentCommandOutput>;
  startFailureModeAssessment(
    args: StartFailureModeAssessmentCommandInput,
    cb: (err: any, data?: StartFailureModeAssessmentCommandOutput) => void
  ): void;
  startFailureModeAssessment(
    args: StartFailureModeAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFailureModeAssessmentCommandOutput) => void
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
   * @see {@link UpdateAssertionCommand}
   */
  updateAssertion(
    args: UpdateAssertionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssertionCommandOutput>;
  updateAssertion(
    args: UpdateAssertionCommandInput,
    cb: (err: any, data?: UpdateAssertionCommandOutput) => void
  ): void;
  updateAssertion(
    args: UpdateAssertionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssertionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDependencyCommand}
   */
  updateDependency(
    args: UpdateDependencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDependencyCommandOutput>;
  updateDependency(
    args: UpdateDependencyCommandInput,
    cb: (err: any, data?: UpdateDependencyCommandOutput) => void
  ): void;
  updateDependency(
    args: UpdateDependencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDependencyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFailureModeFindingCommand}
   */
  updateFailureModeFinding(
    args: UpdateFailureModeFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFailureModeFindingCommandOutput>;
  updateFailureModeFinding(
    args: UpdateFailureModeFindingCommandInput,
    cb: (err: any, data?: UpdateFailureModeFindingCommandOutput) => void
  ): void;
  updateFailureModeFinding(
    args: UpdateFailureModeFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFailureModeFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(
    args: UpdateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceCommandOutput>;
  updateService(
    args: UpdateServiceCommandInput,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceFunctionCommand}
   */
  updateServiceFunction(
    args: UpdateServiceFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceFunctionCommandOutput>;
  updateServiceFunction(
    args: UpdateServiceFunctionCommandInput,
    cb: (err: any, data?: UpdateServiceFunctionCommandOutput) => void
  ): void;
  updateServiceFunction(
    args: UpdateServiceFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSystemCommand}
   */
  updateSystem(
    args: UpdateSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSystemCommandOutput>;
  updateSystem(
    args: UpdateSystemCommandInput,
    cb: (err: any, data?: UpdateSystemCommandOutput) => void
  ): void;
  updateSystem(
    args: UpdateSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserJourneyCommand}
   */
  updateUserJourney(
    args: UpdateUserJourneyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserJourneyCommandOutput>;
  updateUserJourney(
    args: UpdateUserJourneyCommandInput,
    cb: (err: any, data?: UpdateUserJourneyCommandOutput) => void
  ): void;
  updateUserJourney(
    args: UpdateUserJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssertionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssertionsCommandOutput}.
   */
  paginateListAssertions(
    args: ListAssertionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssertionsCommandOutput>;

  /**
   * @see {@link ListDependenciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDependenciesCommandOutput}.
   */
  paginateListDependencies(
    args?: ListDependenciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDependenciesCommandOutput>;

  /**
   * @see {@link ListFailureModeAssessmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFailureModeAssessmentsCommandOutput}.
   */
  paginateListFailureModeAssessments(
    args: ListFailureModeAssessmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFailureModeAssessmentsCommandOutput>;

  /**
   * @see {@link ListFailureModeFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFailureModeFindingsCommandOutput}.
   */
  paginateListFailureModeFindings(
    args: ListFailureModeFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFailureModeFindingsCommandOutput>;

  /**
   * @see {@link ListInputSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInputSourcesCommandOutput}.
   */
  paginateListInputSources(
    args: ListInputSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInputSourcesCommandOutput>;

  /**
   * @see {@link ListPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPoliciesCommandOutput}.
   */
  paginateListPolicies(
    args?: ListPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPoliciesCommandOutput>;

  /**
   * @see {@link ListReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportsCommandOutput}.
   */
  paginateListReports(
    args?: ListReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportsCommandOutput>;

  /**
   * @see {@link ListResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcesCommandOutput}.
   */
  paginateListResources(
    args: ListResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcesCommandOutput>;

  /**
   * @see {@link ListServiceEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceEventsCommandOutput}.
   */
  paginateListServiceEvents(
    args: ListServiceEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceEventsCommandOutput>;

  /**
   * @see {@link ListServiceFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceFunctionsCommandOutput}.
   */
  paginateListServiceFunctions(
    args: ListServiceFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceFunctionsCommandOutput>;

  /**
   * @see {@link ListServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServicesCommandOutput}.
   */
  paginateListServices(
    args?: ListServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServicesCommandOutput>;

  /**
   * @see {@link ListServiceTopologyEdgesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceTopologyEdgesCommandOutput}.
   */
  paginateListServiceTopologyEdges(
    args: ListServiceTopologyEdgesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceTopologyEdgesCommandOutput>;

  /**
   * @see {@link ListSystemEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSystemEventsCommandOutput}.
   */
  paginateListSystemEvents(
    args: ListSystemEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSystemEventsCommandOutput>;

  /**
   * @see {@link ListSystemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSystemsCommandOutput}.
   */
  paginateListSystems(
    args?: ListSystemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSystemsCommandOutput>;

  /**
   * @see {@link ListUserJourneysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserJourneysCommandOutput}.
   */
  paginateListUserJourneys(
    args: ListUserJourneysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserJourneysCommandOutput>;

  /**
   * @see {@link GetServiceCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilServiceAssessmentCompleted(
    args: GetServiceCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Resiliencehubv2>, "client">
  ): Promise<WaiterResult<GetServiceCommandOutput>>;

  /**
   * @see {@link GetServiceCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilServiceResourceDiscoveryCompleted(
    args: GetServiceCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Resiliencehubv2>, "client">
  ): Promise<WaiterResult<GetServiceCommandOutput>>;

  /**
   * @see {@link ListFailureModeAssessmentsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFailureModeAssessmentSuccess(
    args: ListFailureModeAssessmentsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Resiliencehubv2>, "client">
  ): Promise<WaiterResult<ListFailureModeAssessmentsCommandOutput>>;

  /**
   * @see {@link ListReportsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReportSucceeded(
    args: ListReportsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Resiliencehubv2>, "client">
  ): Promise<WaiterResult<ListReportsCommandOutput>>;
}

/**
 * <p>The next generation of AWS Resilience Hub is the single location in AWS where you assess and improve the resilience of your critical applications. It helps Site Reliability Engineers (SREs) and development teams proactively reason about resilience at scale — identifying failure modes, discovering hidden dependencies, and report on progress across the enterprise. </p>
 * @public
 */
export class Resiliencehubv2 extends Resiliencehubv2Client implements Resiliencehubv2 {}
createAggregatedClient(commands, Resiliencehubv2, { paginators, waiters });
