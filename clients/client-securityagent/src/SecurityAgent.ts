// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AddArtifactCommandInput,
  type AddArtifactCommandOutput,
  AddArtifactCommand,
} from "./commands/AddArtifactCommand";
import {
  type BatchDeletePentestsCommandInput,
  type BatchDeletePentestsCommandOutput,
  BatchDeletePentestsCommand,
} from "./commands/BatchDeletePentestsCommand";
import {
  type BatchGetAgentSpacesCommandInput,
  type BatchGetAgentSpacesCommandOutput,
  BatchGetAgentSpacesCommand,
} from "./commands/BatchGetAgentSpacesCommand";
import {
  type BatchGetArtifactMetadataCommandInput,
  type BatchGetArtifactMetadataCommandOutput,
  BatchGetArtifactMetadataCommand,
} from "./commands/BatchGetArtifactMetadataCommand";
import {
  type BatchGetFindingsCommandInput,
  type BatchGetFindingsCommandOutput,
  BatchGetFindingsCommand,
} from "./commands/BatchGetFindingsCommand";
import {
  type BatchGetPentestJobsCommandInput,
  type BatchGetPentestJobsCommandOutput,
  BatchGetPentestJobsCommand,
} from "./commands/BatchGetPentestJobsCommand";
import {
  type BatchGetPentestJobTasksCommandInput,
  type BatchGetPentestJobTasksCommandOutput,
  BatchGetPentestJobTasksCommand,
} from "./commands/BatchGetPentestJobTasksCommand";
import {
  type BatchGetPentestsCommandInput,
  type BatchGetPentestsCommandOutput,
  BatchGetPentestsCommand,
} from "./commands/BatchGetPentestsCommand";
import {
  type BatchGetTargetDomainsCommandInput,
  type BatchGetTargetDomainsCommandOutput,
  BatchGetTargetDomainsCommand,
} from "./commands/BatchGetTargetDomainsCommand";
import {
  type CreateAgentSpaceCommandInput,
  type CreateAgentSpaceCommandOutput,
  CreateAgentSpaceCommand,
} from "./commands/CreateAgentSpaceCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateMembershipCommandInput,
  type CreateMembershipCommandOutput,
  CreateMembershipCommand,
} from "./commands/CreateMembershipCommand";
import {
  type CreatePentestCommandInput,
  type CreatePentestCommandOutput,
  CreatePentestCommand,
} from "./commands/CreatePentestCommand";
import {
  type CreateTargetDomainCommandInput,
  type CreateTargetDomainCommandOutput,
  CreateTargetDomainCommand,
} from "./commands/CreateTargetDomainCommand";
import {
  type DeleteAgentSpaceCommandInput,
  type DeleteAgentSpaceCommandOutput,
  DeleteAgentSpaceCommand,
} from "./commands/DeleteAgentSpaceCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteArtifactCommandInput,
  type DeleteArtifactCommandOutput,
  DeleteArtifactCommand,
} from "./commands/DeleteArtifactCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteMembershipCommandInput,
  type DeleteMembershipCommandOutput,
  DeleteMembershipCommand,
} from "./commands/DeleteMembershipCommand";
import {
  type DeleteTargetDomainCommandInput,
  type DeleteTargetDomainCommandOutput,
  DeleteTargetDomainCommand,
} from "./commands/DeleteTargetDomainCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetArtifactCommandInput,
  type GetArtifactCommandOutput,
  GetArtifactCommand,
} from "./commands/GetArtifactCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type InitiateProviderRegistrationCommandInput,
  type InitiateProviderRegistrationCommandOutput,
  InitiateProviderRegistrationCommand,
} from "./commands/InitiateProviderRegistrationCommand";
import {
  type ListAgentSpacesCommandInput,
  type ListAgentSpacesCommandOutput,
  ListAgentSpacesCommand,
} from "./commands/ListAgentSpacesCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListArtifactsCommandInput,
  type ListArtifactsCommandOutput,
  ListArtifactsCommand,
} from "./commands/ListArtifactsCommand";
import {
  type ListDiscoveredEndpointsCommandInput,
  type ListDiscoveredEndpointsCommandOutput,
  ListDiscoveredEndpointsCommand,
} from "./commands/ListDiscoveredEndpointsCommand";
import {
  type ListFindingsCommandInput,
  type ListFindingsCommandOutput,
  ListFindingsCommand,
} from "./commands/ListFindingsCommand";
import {
  type ListIntegratedResourcesCommandInput,
  type ListIntegratedResourcesCommandOutput,
  ListIntegratedResourcesCommand,
} from "./commands/ListIntegratedResourcesCommand";
import {
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListIntegrationsCommand,
} from "./commands/ListIntegrationsCommand";
import {
  type ListMembershipsCommandInput,
  type ListMembershipsCommandOutput,
  ListMembershipsCommand,
} from "./commands/ListMembershipsCommand";
import {
  type ListPentestJobsForPentestCommandInput,
  type ListPentestJobsForPentestCommandOutput,
  ListPentestJobsForPentestCommand,
} from "./commands/ListPentestJobsForPentestCommand";
import {
  type ListPentestJobTasksCommandInput,
  type ListPentestJobTasksCommandOutput,
  ListPentestJobTasksCommand,
} from "./commands/ListPentestJobTasksCommand";
import {
  type ListPentestsCommandInput,
  type ListPentestsCommandOutput,
  ListPentestsCommand,
} from "./commands/ListPentestsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTargetDomainsCommandInput,
  type ListTargetDomainsCommandOutput,
  ListTargetDomainsCommand,
} from "./commands/ListTargetDomainsCommand";
import {
  type StartCodeRemediationCommandInput,
  type StartCodeRemediationCommandOutput,
  StartCodeRemediationCommand,
} from "./commands/StartCodeRemediationCommand";
import {
  type StartPentestJobCommandInput,
  type StartPentestJobCommandOutput,
  StartPentestJobCommand,
} from "./commands/StartPentestJobCommand";
import {
  type StopPentestJobCommandInput,
  type StopPentestJobCommandOutput,
  StopPentestJobCommand,
} from "./commands/StopPentestJobCommand";
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
  type UpdateAgentSpaceCommandInput,
  type UpdateAgentSpaceCommandOutput,
  UpdateAgentSpaceCommand,
} from "./commands/UpdateAgentSpaceCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateFindingCommandInput,
  type UpdateFindingCommandOutput,
  UpdateFindingCommand,
} from "./commands/UpdateFindingCommand";
import {
  type UpdateIntegratedResourcesCommandInput,
  type UpdateIntegratedResourcesCommandOutput,
  UpdateIntegratedResourcesCommand,
} from "./commands/UpdateIntegratedResourcesCommand";
import {
  type UpdatePentestCommandInput,
  type UpdatePentestCommandOutput,
  UpdatePentestCommand,
} from "./commands/UpdatePentestCommand";
import {
  type UpdateTargetDomainCommandInput,
  type UpdateTargetDomainCommandOutput,
  UpdateTargetDomainCommand,
} from "./commands/UpdateTargetDomainCommand";
import {
  type VerifyTargetDomainCommandInput,
  type VerifyTargetDomainCommandOutput,
  VerifyTargetDomainCommand,
} from "./commands/VerifyTargetDomainCommand";
import { paginateListAgentSpaces } from "./pagination/ListAgentSpacesPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListArtifacts } from "./pagination/ListArtifactsPaginator";
import { paginateListDiscoveredEndpoints } from "./pagination/ListDiscoveredEndpointsPaginator";
import { paginateListFindings } from "./pagination/ListFindingsPaginator";
import { paginateListIntegratedResources } from "./pagination/ListIntegratedResourcesPaginator";
import { paginateListIntegrations } from "./pagination/ListIntegrationsPaginator";
import { paginateListMemberships } from "./pagination/ListMembershipsPaginator";
import { paginateListPentestJobsForPentest } from "./pagination/ListPentestJobsForPentestPaginator";
import { paginateListPentestJobTasks } from "./pagination/ListPentestJobTasksPaginator";
import { paginateListPentests } from "./pagination/ListPentestsPaginator";
import { paginateListTargetDomains } from "./pagination/ListTargetDomainsPaginator";
import { SecurityAgentClient } from "./SecurityAgentClient";

const commands = {
  AddArtifactCommand,
  BatchDeletePentestsCommand,
  BatchGetAgentSpacesCommand,
  BatchGetArtifactMetadataCommand,
  BatchGetFindingsCommand,
  BatchGetPentestJobsCommand,
  BatchGetPentestJobTasksCommand,
  BatchGetPentestsCommand,
  BatchGetTargetDomainsCommand,
  CreateAgentSpaceCommand,
  CreateApplicationCommand,
  CreateIntegrationCommand,
  CreateMembershipCommand,
  CreatePentestCommand,
  CreateTargetDomainCommand,
  DeleteAgentSpaceCommand,
  DeleteApplicationCommand,
  DeleteArtifactCommand,
  DeleteIntegrationCommand,
  DeleteMembershipCommand,
  DeleteTargetDomainCommand,
  GetApplicationCommand,
  GetArtifactCommand,
  GetIntegrationCommand,
  InitiateProviderRegistrationCommand,
  ListAgentSpacesCommand,
  ListApplicationsCommand,
  ListArtifactsCommand,
  ListDiscoveredEndpointsCommand,
  ListFindingsCommand,
  ListIntegratedResourcesCommand,
  ListIntegrationsCommand,
  ListMembershipsCommand,
  ListPentestJobsForPentestCommand,
  ListPentestJobTasksCommand,
  ListPentestsCommand,
  ListTagsForResourceCommand,
  ListTargetDomainsCommand,
  StartCodeRemediationCommand,
  StartPentestJobCommand,
  StopPentestJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentSpaceCommand,
  UpdateApplicationCommand,
  UpdateFindingCommand,
  UpdateIntegratedResourcesCommand,
  UpdatePentestCommand,
  UpdateTargetDomainCommand,
  VerifyTargetDomainCommand,
};
const paginators = {
  paginateListAgentSpaces,
  paginateListApplications,
  paginateListArtifacts,
  paginateListDiscoveredEndpoints,
  paginateListFindings,
  paginateListIntegratedResources,
  paginateListIntegrations,
  paginateListMemberships,
  paginateListPentestJobsForPentest,
  paginateListPentestJobTasks,
  paginateListPentests,
  paginateListTargetDomains,
};

export interface SecurityAgent {
  /**
   * @see {@link AddArtifactCommand}
   */
  addArtifact(
    args: AddArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddArtifactCommandOutput>;
  addArtifact(
    args: AddArtifactCommandInput,
    cb: (err: any, data?: AddArtifactCommandOutput) => void
  ): void;
  addArtifact(
    args: AddArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePentestsCommand}
   */
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePentestsCommandOutput>;
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    cb: (err: any, data?: BatchDeletePentestsCommandOutput) => void
  ): void;
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePentestsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAgentSpacesCommand}
   */
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAgentSpacesCommandOutput>;
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    cb: (err: any, data?: BatchGetAgentSpacesCommandOutput) => void
  ): void;
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetArtifactMetadataCommand}
   */
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetArtifactMetadataCommandOutput>;
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    cb: (err: any, data?: BatchGetArtifactMetadataCommandOutput) => void
  ): void;
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetArtifactMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFindingsCommand}
   */
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFindingsCommandOutput>;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestJobsCommand}
   */
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPentestJobsCommandOutput>;
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    cb: (err: any, data?: BatchGetPentestJobsCommandOutput) => void
  ): void;
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPentestJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestJobTasksCommand}
   */
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPentestJobTasksCommandOutput>;
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    cb: (err: any, data?: BatchGetPentestJobTasksCommandOutput) => void
  ): void;
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPentestJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestsCommand}
   */
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPentestsCommandOutput>;
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    cb: (err: any, data?: BatchGetPentestsCommandOutput) => void
  ): void;
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPentestsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTargetDomainsCommand}
   */
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTargetDomainsCommandOutput>;
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    cb: (err: any, data?: BatchGetTargetDomainsCommandOutput) => void
  ): void;
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTargetDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentSpaceCommand}
   */
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentSpaceCommandOutput>;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembershipCommand}
   */
  createMembership(
    args: CreateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembershipCommandOutput>;
  createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  createMembership(
    args: CreateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePentestCommand}
   */
  createPentest(
    args: CreatePentestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePentestCommandOutput>;
  createPentest(
    args: CreatePentestCommandInput,
    cb: (err: any, data?: CreatePentestCommandOutput) => void
  ): void;
  createPentest(
    args: CreatePentestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePentestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTargetDomainCommand}
   */
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTargetDomainCommandOutput>;
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    cb: (err: any, data?: CreateTargetDomainCommandOutput) => void
  ): void;
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentSpaceCommand}
   */
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentSpaceCommandOutput>;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArtifactCommand}
   */
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArtifactCommandOutput>;
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    cb: (err: any, data?: DeleteArtifactCommandOutput) => void
  ): void;
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembershipCommand}
   */
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembershipCommandOutput>;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetDomainCommand}
   */
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTargetDomainCommandOutput>;
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    cb: (err: any, data?: DeleteTargetDomainCommandOutput) => void
  ): void;
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArtifactCommand}
   */
  getArtifact(
    args: GetArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArtifactCommandOutput>;
  getArtifact(
    args: GetArtifactCommandInput,
    cb: (err: any, data?: GetArtifactCommandOutput) => void
  ): void;
  getArtifact(
    args: GetArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateProviderRegistrationCommand}
   */
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateProviderRegistrationCommandOutput>;
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    cb: (err: any, data?: InitiateProviderRegistrationCommandOutput) => void
  ): void;
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateProviderRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   */
  listAgentSpaces(): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(
    args: ListArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArtifactsCommandOutput>;
  listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredEndpointsCommand}
   */
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredEndpointsCommandOutput>;
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    cb: (err: any, data?: ListDiscoveredEndpointsCommandOutput) => void
  ): void;
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegratedResourcesCommand}
   */
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegratedResourcesCommandOutput>;
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    cb: (err: any, data?: ListIntegratedResourcesCommandOutput) => void
  ): void;
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegratedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestJobsForPentestCommand}
   */
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPentestJobsForPentestCommandOutput>;
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    cb: (err: any, data?: ListPentestJobsForPentestCommandOutput) => void
  ): void;
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPentestJobsForPentestCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestJobTasksCommand}
   */
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPentestJobTasksCommandOutput>;
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    cb: (err: any, data?: ListPentestJobTasksCommandOutput) => void
  ): void;
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPentestJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestsCommand}
   */
  listPentests(
    args: ListPentestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPentestsCommandOutput>;
  listPentests(
    args: ListPentestsCommandInput,
    cb: (err: any, data?: ListPentestsCommandOutput) => void
  ): void;
  listPentests(
    args: ListPentestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPentestsCommandOutput) => void
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
   * @see {@link ListTargetDomainsCommand}
   */
  listTargetDomains(): Promise<ListTargetDomainsCommandOutput>;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetDomainsCommandOutput>;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    cb: (err: any, data?: ListTargetDomainsCommandOutput) => void
  ): void;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodeRemediationCommand}
   */
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCodeRemediationCommandOutput>;
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    cb: (err: any, data?: StartCodeRemediationCommandOutput) => void
  ): void;
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCodeRemediationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPentestJobCommand}
   */
  startPentestJob(
    args: StartPentestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPentestJobCommandOutput>;
  startPentestJob(
    args: StartPentestJobCommandInput,
    cb: (err: any, data?: StartPentestJobCommandOutput) => void
  ): void;
  startPentestJob(
    args: StartPentestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPentestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPentestJobCommand}
   */
  stopPentestJob(
    args: StopPentestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPentestJobCommandOutput>;
  stopPentestJob(
    args: StopPentestJobCommandInput,
    cb: (err: any, data?: StopPentestJobCommandOutput) => void
  ): void;
  stopPentestJob(
    args: StopPentestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPentestJobCommandOutput) => void
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
   * @see {@link UpdateAgentSpaceCommand}
   */
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentSpaceCommandOutput>;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingCommand}
   */
  updateFinding(
    args: UpdateFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingCommandOutput>;
  updateFinding(
    args: UpdateFindingCommandInput,
    cb: (err: any, data?: UpdateFindingCommandOutput) => void
  ): void;
  updateFinding(
    args: UpdateFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegratedResourcesCommand}
   */
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegratedResourcesCommandOutput>;
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    cb: (err: any, data?: UpdateIntegratedResourcesCommandOutput) => void
  ): void;
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegratedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePentestCommand}
   */
  updatePentest(
    args: UpdatePentestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePentestCommandOutput>;
  updatePentest(
    args: UpdatePentestCommandInput,
    cb: (err: any, data?: UpdatePentestCommandOutput) => void
  ): void;
  updatePentest(
    args: UpdatePentestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePentestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTargetDomainCommand}
   */
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTargetDomainCommandOutput>;
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    cb: (err: any, data?: UpdateTargetDomainCommandOutput) => void
  ): void;
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyTargetDomainCommand}
   */
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyTargetDomainCommandOutput>;
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    cb: (err: any, data?: VerifyTargetDomainCommandOutput) => void
  ): void;
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentSpacesCommandOutput}.
   */
  paginateListAgentSpaces(
    args?: ListAgentSpacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentSpacesCommandOutput>;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListArtifactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListArtifactsCommandOutput}.
   */
  paginateListArtifacts(
    args: ListArtifactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListArtifactsCommandOutput>;

  /**
   * @see {@link ListDiscoveredEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoveredEndpointsCommandOutput}.
   */
  paginateListDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoveredEndpointsCommandOutput>;

  /**
   * @see {@link ListFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFindingsCommandOutput}.
   */
  paginateListFindings(
    args: ListFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFindingsCommandOutput>;

  /**
   * @see {@link ListIntegratedResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntegratedResourcesCommandOutput}.
   */
  paginateListIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntegratedResourcesCommandOutput>;

  /**
   * @see {@link ListIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntegrationsCommandOutput}.
   */
  paginateListIntegrations(
    args?: ListIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntegrationsCommandOutput>;

  /**
   * @see {@link ListMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembershipsCommandOutput}.
   */
  paginateListMemberships(
    args: ListMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMembershipsCommandOutput>;

  /**
   * @see {@link ListPentestJobsForPentestCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPentestJobsForPentestCommandOutput}.
   */
  paginateListPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPentestJobsForPentestCommandOutput>;

  /**
   * @see {@link ListPentestJobTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPentestJobTasksCommandOutput}.
   */
  paginateListPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPentestJobTasksCommandOutput>;

  /**
   * @see {@link ListPentestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPentestsCommandOutput}.
   */
  paginateListPentests(
    args: ListPentestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPentestsCommandOutput>;

  /**
   * @see {@link ListTargetDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTargetDomainsCommandOutput}.
   */
  paginateListTargetDomains(
    args?: ListTargetDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTargetDomainsCommandOutput>;
}

/**
 * <p>AWS Security Agent is a frontier agent that proactively secures your applications throughout the development lifecycle. It conducts automated security reviews tailored to your organizational requirements and delivers context-aware penetration testing on demand. By continuously validating security from design to deployment, AWS Security Agent helps prevent vulnerabilities early across all your environments. Key capabilities include design security review for architecture documents, code security review for pull requests in connected repositories, and on-demand penetration testing that discovers, validates, and remediates security vulnerabilities through tailored multi-step attack scenarios. For more information, see the <a href="https://docs.aws.amazon.com/securityagent/latest/userguide/what-is.html">AWS Security Agent User Guide</a>.</p>
 * @public
 */
export class SecurityAgent extends SecurityAgentClient implements SecurityAgent {}
createAggregatedClient(commands, SecurityAgent, { paginators });
