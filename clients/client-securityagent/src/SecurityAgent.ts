// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AddArtifactCommandInput,
  type AddArtifactCommandOutput,
  AddArtifactCommand,
} from "./commands/AddArtifactCommand";
import {
  type BatchCreateSecurityRequirementsCommandInput,
  type BatchCreateSecurityRequirementsCommandOutput,
  BatchCreateSecurityRequirementsCommand,
} from "./commands/BatchCreateSecurityRequirementsCommand";
import {
  type BatchDeleteCodeReviewsCommandInput,
  type BatchDeleteCodeReviewsCommandOutput,
  BatchDeleteCodeReviewsCommand,
} from "./commands/BatchDeleteCodeReviewsCommand";
import {
  type BatchDeletePentestsCommandInput,
  type BatchDeletePentestsCommandOutput,
  BatchDeletePentestsCommand,
} from "./commands/BatchDeletePentestsCommand";
import {
  type BatchDeleteSecurityRequirementsCommandInput,
  type BatchDeleteSecurityRequirementsCommandOutput,
  BatchDeleteSecurityRequirementsCommand,
} from "./commands/BatchDeleteSecurityRequirementsCommand";
import {
  type BatchDeleteThreatModelsCommandInput,
  type BatchDeleteThreatModelsCommandOutput,
  BatchDeleteThreatModelsCommand,
} from "./commands/BatchDeleteThreatModelsCommand";
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
  type BatchGetCodeReviewJobsCommandInput,
  type BatchGetCodeReviewJobsCommandOutput,
  BatchGetCodeReviewJobsCommand,
} from "./commands/BatchGetCodeReviewJobsCommand";
import {
  type BatchGetCodeReviewJobTasksCommandInput,
  type BatchGetCodeReviewJobTasksCommandOutput,
  BatchGetCodeReviewJobTasksCommand,
} from "./commands/BatchGetCodeReviewJobTasksCommand";
import {
  type BatchGetCodeReviewsCommandInput,
  type BatchGetCodeReviewsCommandOutput,
  BatchGetCodeReviewsCommand,
} from "./commands/BatchGetCodeReviewsCommand";
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
  type BatchGetSecurityRequirementsCommandInput,
  type BatchGetSecurityRequirementsCommandOutput,
  BatchGetSecurityRequirementsCommand,
} from "./commands/BatchGetSecurityRequirementsCommand";
import {
  type BatchGetTargetDomainsCommandInput,
  type BatchGetTargetDomainsCommandOutput,
  BatchGetTargetDomainsCommand,
} from "./commands/BatchGetTargetDomainsCommand";
import {
  type BatchGetThreatModelJobsCommandInput,
  type BatchGetThreatModelJobsCommandOutput,
  BatchGetThreatModelJobsCommand,
} from "./commands/BatchGetThreatModelJobsCommand";
import {
  type BatchGetThreatModelJobTasksCommandInput,
  type BatchGetThreatModelJobTasksCommandOutput,
  BatchGetThreatModelJobTasksCommand,
} from "./commands/BatchGetThreatModelJobTasksCommand";
import {
  type BatchGetThreatModelsCommandInput,
  type BatchGetThreatModelsCommandOutput,
  BatchGetThreatModelsCommand,
} from "./commands/BatchGetThreatModelsCommand";
import {
  type BatchGetThreatsCommandInput,
  type BatchGetThreatsCommandOutput,
  BatchGetThreatsCommand,
} from "./commands/BatchGetThreatsCommand";
import {
  type BatchUpdateSecurityRequirementsCommandInput,
  type BatchUpdateSecurityRequirementsCommandOutput,
  BatchUpdateSecurityRequirementsCommand,
} from "./commands/BatchUpdateSecurityRequirementsCommand";
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
  type CreateCodeReviewCommandInput,
  type CreateCodeReviewCommandOutput,
  CreateCodeReviewCommand,
} from "./commands/CreateCodeReviewCommand";
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
  type CreatePrivateConnectionCommandInput,
  type CreatePrivateConnectionCommandOutput,
  CreatePrivateConnectionCommand,
} from "./commands/CreatePrivateConnectionCommand";
import {
  type CreateSecurityRequirementPackCommandInput,
  type CreateSecurityRequirementPackCommandOutput,
  CreateSecurityRequirementPackCommand,
} from "./commands/CreateSecurityRequirementPackCommand";
import {
  type CreateTargetDomainCommandInput,
  type CreateTargetDomainCommandOutput,
  CreateTargetDomainCommand,
} from "./commands/CreateTargetDomainCommand";
import {
  type CreateThreatCommandInput,
  type CreateThreatCommandOutput,
  CreateThreatCommand,
} from "./commands/CreateThreatCommand";
import {
  type CreateThreatModelCommandInput,
  type CreateThreatModelCommandOutput,
  CreateThreatModelCommand,
} from "./commands/CreateThreatModelCommand";
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
  type DeletePrivateConnectionCommandInput,
  type DeletePrivateConnectionCommandOutput,
  DeletePrivateConnectionCommand,
} from "./commands/DeletePrivateConnectionCommand";
import {
  type DeleteSecurityRequirementPackCommandInput,
  type DeleteSecurityRequirementPackCommandOutput,
  DeleteSecurityRequirementPackCommand,
} from "./commands/DeleteSecurityRequirementPackCommand";
import {
  type DeleteTargetDomainCommandInput,
  type DeleteTargetDomainCommandOutput,
  DeleteTargetDomainCommand,
} from "./commands/DeleteTargetDomainCommand";
import {
  type DescribePrivateConnectionCommandInput,
  type DescribePrivateConnectionCommandOutput,
  DescribePrivateConnectionCommand,
} from "./commands/DescribePrivateConnectionCommand";
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
  type GetSecurityRequirementPackCommandInput,
  type GetSecurityRequirementPackCommandOutput,
  GetSecurityRequirementPackCommand,
} from "./commands/GetSecurityRequirementPackCommand";
import {
  type ImportSecurityRequirementsCommandInput,
  type ImportSecurityRequirementsCommandOutput,
  ImportSecurityRequirementsCommand,
} from "./commands/ImportSecurityRequirementsCommand";
import {
  type InitiateProviderRegistrationCommandInput,
  type InitiateProviderRegistrationCommandOutput,
  InitiateProviderRegistrationCommand,
} from "./commands/InitiateProviderRegistrationCommand";
import {
  type ListActorMessagesCommandInput,
  type ListActorMessagesCommandOutput,
  ListActorMessagesCommand,
} from "./commands/ListActorMessagesCommand";
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
  type ListCodeReviewJobsForCodeReviewCommandInput,
  type ListCodeReviewJobsForCodeReviewCommandOutput,
  ListCodeReviewJobsForCodeReviewCommand,
} from "./commands/ListCodeReviewJobsForCodeReviewCommand";
import {
  type ListCodeReviewJobTasksCommandInput,
  type ListCodeReviewJobTasksCommandOutput,
  ListCodeReviewJobTasksCommand,
} from "./commands/ListCodeReviewJobTasksCommand";
import {
  type ListCodeReviewsCommandInput,
  type ListCodeReviewsCommandOutput,
  ListCodeReviewsCommand,
} from "./commands/ListCodeReviewsCommand";
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
  type ListPrivateConnectionsCommandInput,
  type ListPrivateConnectionsCommandOutput,
  ListPrivateConnectionsCommand,
} from "./commands/ListPrivateConnectionsCommand";
import {
  type ListSecurityRequirementPacksCommandInput,
  type ListSecurityRequirementPacksCommandOutput,
  ListSecurityRequirementPacksCommand,
} from "./commands/ListSecurityRequirementPacksCommand";
import {
  type ListSecurityRequirementsCommandInput,
  type ListSecurityRequirementsCommandOutput,
  ListSecurityRequirementsCommand,
} from "./commands/ListSecurityRequirementsCommand";
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
  type ListThreatModelJobsCommandInput,
  type ListThreatModelJobsCommandOutput,
  ListThreatModelJobsCommand,
} from "./commands/ListThreatModelJobsCommand";
import {
  type ListThreatModelJobTasksCommandInput,
  type ListThreatModelJobTasksCommandOutput,
  ListThreatModelJobTasksCommand,
} from "./commands/ListThreatModelJobTasksCommand";
import {
  type ListThreatModelsCommandInput,
  type ListThreatModelsCommandOutput,
  ListThreatModelsCommand,
} from "./commands/ListThreatModelsCommand";
import {
  type ListThreatsCommandInput,
  type ListThreatsCommandOutput,
  ListThreatsCommand,
} from "./commands/ListThreatsCommand";
import {
  type StartCodeRemediationCommandInput,
  type StartCodeRemediationCommandOutput,
  StartCodeRemediationCommand,
} from "./commands/StartCodeRemediationCommand";
import {
  type StartCodeReviewJobCommandInput,
  type StartCodeReviewJobCommandOutput,
  StartCodeReviewJobCommand,
} from "./commands/StartCodeReviewJobCommand";
import {
  type StartPentestJobCommandInput,
  type StartPentestJobCommandOutput,
  StartPentestJobCommand,
} from "./commands/StartPentestJobCommand";
import {
  type StartThreatModelJobCommandInput,
  type StartThreatModelJobCommandOutput,
  StartThreatModelJobCommand,
} from "./commands/StartThreatModelJobCommand";
import {
  type StopCodeReviewJobCommandInput,
  type StopCodeReviewJobCommandOutput,
  StopCodeReviewJobCommand,
} from "./commands/StopCodeReviewJobCommand";
import {
  type StopPentestJobCommandInput,
  type StopPentestJobCommandOutput,
  StopPentestJobCommand,
} from "./commands/StopPentestJobCommand";
import {
  type StopThreatModelJobCommandInput,
  type StopThreatModelJobCommandOutput,
  StopThreatModelJobCommand,
} from "./commands/StopThreatModelJobCommand";
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
  type UpdateCodeReviewCommandInput,
  type UpdateCodeReviewCommandOutput,
  UpdateCodeReviewCommand,
} from "./commands/UpdateCodeReviewCommand";
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
  type UpdatePrivateConnectionCertificateCommandInput,
  type UpdatePrivateConnectionCertificateCommandOutput,
  UpdatePrivateConnectionCertificateCommand,
} from "./commands/UpdatePrivateConnectionCertificateCommand";
import {
  type UpdateSecurityRequirementPackCommandInput,
  type UpdateSecurityRequirementPackCommandOutput,
  UpdateSecurityRequirementPackCommand,
} from "./commands/UpdateSecurityRequirementPackCommand";
import {
  type UpdateTargetDomainCommandInput,
  type UpdateTargetDomainCommandOutput,
  UpdateTargetDomainCommand,
} from "./commands/UpdateTargetDomainCommand";
import {
  type UpdateThreatCommandInput,
  type UpdateThreatCommandOutput,
  UpdateThreatCommand,
} from "./commands/UpdateThreatCommand";
import {
  type UpdateThreatModelCommandInput,
  type UpdateThreatModelCommandOutput,
  UpdateThreatModelCommand,
} from "./commands/UpdateThreatModelCommand";
import {
  type VerifyTargetDomainCommandInput,
  type VerifyTargetDomainCommandOutput,
  VerifyTargetDomainCommand,
} from "./commands/VerifyTargetDomainCommand";
import { paginateListActorMessages } from "./pagination/ListActorMessagesPaginator";
import { paginateListAgentSpaces } from "./pagination/ListAgentSpacesPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListArtifacts } from "./pagination/ListArtifactsPaginator";
import { paginateListCodeReviewJobsForCodeReview } from "./pagination/ListCodeReviewJobsForCodeReviewPaginator";
import { paginateListCodeReviewJobTasks } from "./pagination/ListCodeReviewJobTasksPaginator";
import { paginateListCodeReviews } from "./pagination/ListCodeReviewsPaginator";
import { paginateListDiscoveredEndpoints } from "./pagination/ListDiscoveredEndpointsPaginator";
import { paginateListFindings } from "./pagination/ListFindingsPaginator";
import { paginateListIntegratedResources } from "./pagination/ListIntegratedResourcesPaginator";
import { paginateListIntegrations } from "./pagination/ListIntegrationsPaginator";
import { paginateListMemberships } from "./pagination/ListMembershipsPaginator";
import { paginateListPentestJobsForPentest } from "./pagination/ListPentestJobsForPentestPaginator";
import { paginateListPentestJobTasks } from "./pagination/ListPentestJobTasksPaginator";
import { paginateListPentests } from "./pagination/ListPentestsPaginator";
import { paginateListPrivateConnections } from "./pagination/ListPrivateConnectionsPaginator";
import { paginateListSecurityRequirementPacks } from "./pagination/ListSecurityRequirementPacksPaginator";
import { paginateListSecurityRequirements } from "./pagination/ListSecurityRequirementsPaginator";
import { paginateListTargetDomains } from "./pagination/ListTargetDomainsPaginator";
import { paginateListThreatModelJobs } from "./pagination/ListThreatModelJobsPaginator";
import { paginateListThreatModelJobTasks } from "./pagination/ListThreatModelJobTasksPaginator";
import { paginateListThreatModels } from "./pagination/ListThreatModelsPaginator";
import { paginateListThreats } from "./pagination/ListThreatsPaginator";
import { SecurityAgentClient } from "./SecurityAgentClient";

const commands = {
  AddArtifactCommand,
  BatchCreateSecurityRequirementsCommand,
  BatchDeleteCodeReviewsCommand,
  BatchDeletePentestsCommand,
  BatchDeleteSecurityRequirementsCommand,
  BatchDeleteThreatModelsCommand,
  BatchGetAgentSpacesCommand,
  BatchGetArtifactMetadataCommand,
  BatchGetCodeReviewJobsCommand,
  BatchGetCodeReviewJobTasksCommand,
  BatchGetCodeReviewsCommand,
  BatchGetFindingsCommand,
  BatchGetPentestJobsCommand,
  BatchGetPentestJobTasksCommand,
  BatchGetPentestsCommand,
  BatchGetSecurityRequirementsCommand,
  BatchGetTargetDomainsCommand,
  BatchGetThreatModelJobsCommand,
  BatchGetThreatModelJobTasksCommand,
  BatchGetThreatModelsCommand,
  BatchGetThreatsCommand,
  BatchUpdateSecurityRequirementsCommand,
  CreateAgentSpaceCommand,
  CreateApplicationCommand,
  CreateCodeReviewCommand,
  CreateIntegrationCommand,
  CreateMembershipCommand,
  CreatePentestCommand,
  CreatePrivateConnectionCommand,
  CreateSecurityRequirementPackCommand,
  CreateTargetDomainCommand,
  CreateThreatCommand,
  CreateThreatModelCommand,
  DeleteAgentSpaceCommand,
  DeleteApplicationCommand,
  DeleteArtifactCommand,
  DeleteIntegrationCommand,
  DeleteMembershipCommand,
  DeletePrivateConnectionCommand,
  DeleteSecurityRequirementPackCommand,
  DeleteTargetDomainCommand,
  DescribePrivateConnectionCommand,
  GetApplicationCommand,
  GetArtifactCommand,
  GetIntegrationCommand,
  GetSecurityRequirementPackCommand,
  ImportSecurityRequirementsCommand,
  InitiateProviderRegistrationCommand,
  ListActorMessagesCommand,
  ListAgentSpacesCommand,
  ListApplicationsCommand,
  ListArtifactsCommand,
  ListCodeReviewJobsForCodeReviewCommand,
  ListCodeReviewJobTasksCommand,
  ListCodeReviewsCommand,
  ListDiscoveredEndpointsCommand,
  ListFindingsCommand,
  ListIntegratedResourcesCommand,
  ListIntegrationsCommand,
  ListMembershipsCommand,
  ListPentestJobsForPentestCommand,
  ListPentestJobTasksCommand,
  ListPentestsCommand,
  ListPrivateConnectionsCommand,
  ListSecurityRequirementPacksCommand,
  ListSecurityRequirementsCommand,
  ListTagsForResourceCommand,
  ListTargetDomainsCommand,
  ListThreatModelJobsCommand,
  ListThreatModelJobTasksCommand,
  ListThreatModelsCommand,
  ListThreatsCommand,
  StartCodeRemediationCommand,
  StartCodeReviewJobCommand,
  StartPentestJobCommand,
  StartThreatModelJobCommand,
  StopCodeReviewJobCommand,
  StopPentestJobCommand,
  StopThreatModelJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentSpaceCommand,
  UpdateApplicationCommand,
  UpdateCodeReviewCommand,
  UpdateFindingCommand,
  UpdateIntegratedResourcesCommand,
  UpdatePentestCommand,
  UpdatePrivateConnectionCertificateCommand,
  UpdateSecurityRequirementPackCommand,
  UpdateTargetDomainCommand,
  UpdateThreatCommand,
  UpdateThreatModelCommand,
  VerifyTargetDomainCommand,
};
const paginators = {
  paginateListActorMessages,
  paginateListAgentSpaces,
  paginateListApplications,
  paginateListArtifacts,
  paginateListCodeReviewJobsForCodeReview,
  paginateListCodeReviewJobTasks,
  paginateListCodeReviews,
  paginateListDiscoveredEndpoints,
  paginateListFindings,
  paginateListIntegratedResources,
  paginateListIntegrations,
  paginateListMemberships,
  paginateListPentestJobsForPentest,
  paginateListPentestJobTasks,
  paginateListPentests,
  paginateListPrivateConnections,
  paginateListSecurityRequirementPacks,
  paginateListSecurityRequirements,
  paginateListTargetDomains,
  paginateListThreatModelJobs,
  paginateListThreatModelJobTasks,
  paginateListThreatModels,
  paginateListThreats,
};

/**
 * @public
 */
export interface SecurityAgentRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SecurityAgent {
  /**
   * @see {@link AddArtifactCommand}
   */
  addArtifact(
    args: AddArtifactCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<AddArtifactCommandOutput>;
  addArtifact(
    args: AddArtifactCommandInput,
    cb: (err: any, data?: AddArtifactCommandOutput) => void
  ): void;
  addArtifact(
    args: AddArtifactCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: AddArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateSecurityRequirementsCommand}
   */
  batchCreateSecurityRequirements(
    args: BatchCreateSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchCreateSecurityRequirementsCommandOutput>;
  batchCreateSecurityRequirements(
    args: BatchCreateSecurityRequirementsCommandInput,
    cb: (err: any, data?: BatchCreateSecurityRequirementsCommandOutput) => void
  ): void;
  batchCreateSecurityRequirements(
    args: BatchCreateSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchCreateSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCodeReviewsCommand}
   */
  batchDeleteCodeReviews(
    args: BatchDeleteCodeReviewsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchDeleteCodeReviewsCommandOutput>;
  batchDeleteCodeReviews(
    args: BatchDeleteCodeReviewsCommandInput,
    cb: (err: any, data?: BatchDeleteCodeReviewsCommandOutput) => void
  ): void;
  batchDeleteCodeReviews(
    args: BatchDeleteCodeReviewsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchDeleteCodeReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePentestsCommand}
   */
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchDeletePentestsCommandOutput>;
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    cb: (err: any, data?: BatchDeletePentestsCommandOutput) => void
  ): void;
  batchDeletePentests(
    args: BatchDeletePentestsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchDeletePentestsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteSecurityRequirementsCommand}
   */
  batchDeleteSecurityRequirements(
    args: BatchDeleteSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchDeleteSecurityRequirementsCommandOutput>;
  batchDeleteSecurityRequirements(
    args: BatchDeleteSecurityRequirementsCommandInput,
    cb: (err: any, data?: BatchDeleteSecurityRequirementsCommandOutput) => void
  ): void;
  batchDeleteSecurityRequirements(
    args: BatchDeleteSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchDeleteSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteThreatModelsCommand}
   */
  batchDeleteThreatModels(
    args: BatchDeleteThreatModelsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchDeleteThreatModelsCommandOutput>;
  batchDeleteThreatModels(
    args: BatchDeleteThreatModelsCommandInput,
    cb: (err: any, data?: BatchDeleteThreatModelsCommandOutput) => void
  ): void;
  batchDeleteThreatModels(
    args: BatchDeleteThreatModelsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchDeleteThreatModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAgentSpacesCommand}
   */
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetAgentSpacesCommandOutput>;
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    cb: (err: any, data?: BatchGetAgentSpacesCommandOutput) => void
  ): void;
  batchGetAgentSpaces(
    args: BatchGetAgentSpacesCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetArtifactMetadataCommand}
   */
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetArtifactMetadataCommandOutput>;
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    cb: (err: any, data?: BatchGetArtifactMetadataCommandOutput) => void
  ): void;
  batchGetArtifactMetadata(
    args: BatchGetArtifactMetadataCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetArtifactMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCodeReviewJobsCommand}
   */
  batchGetCodeReviewJobs(
    args: BatchGetCodeReviewJobsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetCodeReviewJobsCommandOutput>;
  batchGetCodeReviewJobs(
    args: BatchGetCodeReviewJobsCommandInput,
    cb: (err: any, data?: BatchGetCodeReviewJobsCommandOutput) => void
  ): void;
  batchGetCodeReviewJobs(
    args: BatchGetCodeReviewJobsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetCodeReviewJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCodeReviewJobTasksCommand}
   */
  batchGetCodeReviewJobTasks(
    args: BatchGetCodeReviewJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetCodeReviewJobTasksCommandOutput>;
  batchGetCodeReviewJobTasks(
    args: BatchGetCodeReviewJobTasksCommandInput,
    cb: (err: any, data?: BatchGetCodeReviewJobTasksCommandOutput) => void
  ): void;
  batchGetCodeReviewJobTasks(
    args: BatchGetCodeReviewJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetCodeReviewJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCodeReviewsCommand}
   */
  batchGetCodeReviews(
    args: BatchGetCodeReviewsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetCodeReviewsCommandOutput>;
  batchGetCodeReviews(
    args: BatchGetCodeReviewsCommandInput,
    cb: (err: any, data?: BatchGetCodeReviewsCommandOutput) => void
  ): void;
  batchGetCodeReviews(
    args: BatchGetCodeReviewsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetCodeReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFindingsCommand}
   */
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetFindingsCommandOutput>;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestJobsCommand}
   */
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetPentestJobsCommandOutput>;
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    cb: (err: any, data?: BatchGetPentestJobsCommandOutput) => void
  ): void;
  batchGetPentestJobs(
    args: BatchGetPentestJobsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetPentestJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestJobTasksCommand}
   */
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetPentestJobTasksCommandOutput>;
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    cb: (err: any, data?: BatchGetPentestJobTasksCommandOutput) => void
  ): void;
  batchGetPentestJobTasks(
    args: BatchGetPentestJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetPentestJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPentestsCommand}
   */
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetPentestsCommandOutput>;
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    cb: (err: any, data?: BatchGetPentestsCommandOutput) => void
  ): void;
  batchGetPentests(
    args: BatchGetPentestsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetPentestsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSecurityRequirementsCommand}
   */
  batchGetSecurityRequirements(
    args: BatchGetSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetSecurityRequirementsCommandOutput>;
  batchGetSecurityRequirements(
    args: BatchGetSecurityRequirementsCommandInput,
    cb: (err: any, data?: BatchGetSecurityRequirementsCommandOutput) => void
  ): void;
  batchGetSecurityRequirements(
    args: BatchGetSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTargetDomainsCommand}
   */
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetTargetDomainsCommandOutput>;
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    cb: (err: any, data?: BatchGetTargetDomainsCommandOutput) => void
  ): void;
  batchGetTargetDomains(
    args: BatchGetTargetDomainsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetTargetDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetThreatModelJobsCommand}
   */
  batchGetThreatModelJobs(
    args: BatchGetThreatModelJobsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetThreatModelJobsCommandOutput>;
  batchGetThreatModelJobs(
    args: BatchGetThreatModelJobsCommandInput,
    cb: (err: any, data?: BatchGetThreatModelJobsCommandOutput) => void
  ): void;
  batchGetThreatModelJobs(
    args: BatchGetThreatModelJobsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetThreatModelJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetThreatModelJobTasksCommand}
   */
  batchGetThreatModelJobTasks(
    args: BatchGetThreatModelJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetThreatModelJobTasksCommandOutput>;
  batchGetThreatModelJobTasks(
    args: BatchGetThreatModelJobTasksCommandInput,
    cb: (err: any, data?: BatchGetThreatModelJobTasksCommandOutput) => void
  ): void;
  batchGetThreatModelJobTasks(
    args: BatchGetThreatModelJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetThreatModelJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetThreatModelsCommand}
   */
  batchGetThreatModels(
    args: BatchGetThreatModelsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetThreatModelsCommandOutput>;
  batchGetThreatModels(
    args: BatchGetThreatModelsCommandInput,
    cb: (err: any, data?: BatchGetThreatModelsCommandOutput) => void
  ): void;
  batchGetThreatModels(
    args: BatchGetThreatModelsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetThreatModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetThreatsCommand}
   */
  batchGetThreats(
    args: BatchGetThreatsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchGetThreatsCommandOutput>;
  batchGetThreats(
    args: BatchGetThreatsCommandInput,
    cb: (err: any, data?: BatchGetThreatsCommandOutput) => void
  ): void;
  batchGetThreats(
    args: BatchGetThreatsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchGetThreatsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateSecurityRequirementsCommand}
   */
  batchUpdateSecurityRequirements(
    args: BatchUpdateSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<BatchUpdateSecurityRequirementsCommandOutput>;
  batchUpdateSecurityRequirements(
    args: BatchUpdateSecurityRequirementsCommandInput,
    cb: (err: any, data?: BatchUpdateSecurityRequirementsCommandOutput) => void
  ): void;
  batchUpdateSecurityRequirements(
    args: BatchUpdateSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: BatchUpdateSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentSpaceCommand}
   */
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateAgentSpaceCommandOutput>;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeReviewCommand}
   */
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateCodeReviewCommandOutput>;
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembershipCommand}
   */
  createMembership(
    args: CreateMembershipCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateMembershipCommandOutput>;
  createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  createMembership(
    args: CreateMembershipCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePentestCommand}
   */
  createPentest(
    args: CreatePentestCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreatePentestCommandOutput>;
  createPentest(
    args: CreatePentestCommandInput,
    cb: (err: any, data?: CreatePentestCommandOutput) => void
  ): void;
  createPentest(
    args: CreatePentestCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreatePentestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateConnectionCommand}
   */
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreatePrivateConnectionCommandOutput>;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityRequirementPackCommand}
   */
  createSecurityRequirementPack(
    args: CreateSecurityRequirementPackCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateSecurityRequirementPackCommandOutput>;
  createSecurityRequirementPack(
    args: CreateSecurityRequirementPackCommandInput,
    cb: (err: any, data?: CreateSecurityRequirementPackCommandOutput) => void
  ): void;
  createSecurityRequirementPack(
    args: CreateSecurityRequirementPackCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateSecurityRequirementPackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTargetDomainCommand}
   */
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateTargetDomainCommandOutput>;
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    cb: (err: any, data?: CreateTargetDomainCommandOutput) => void
  ): void;
  createTargetDomain(
    args: CreateTargetDomainCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThreatCommand}
   */
  createThreat(
    args: CreateThreatCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateThreatCommandOutput>;
  createThreat(
    args: CreateThreatCommandInput,
    cb: (err: any, data?: CreateThreatCommandOutput) => void
  ): void;
  createThreat(
    args: CreateThreatCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateThreatCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThreatModelCommand}
   */
  createThreatModel(
    args: CreateThreatModelCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<CreateThreatModelCommandOutput>;
  createThreatModel(
    args: CreateThreatModelCommandInput,
    cb: (err: any, data?: CreateThreatModelCommandOutput) => void
  ): void;
  createThreatModel(
    args: CreateThreatModelCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: CreateThreatModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentSpaceCommand}
   */
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteAgentSpaceCommandOutput>;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArtifactCommand}
   */
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteArtifactCommandOutput>;
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    cb: (err: any, data?: DeleteArtifactCommandOutput) => void
  ): void;
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembershipCommand}
   */
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteMembershipCommandOutput>;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrivateConnectionCommand}
   */
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeletePrivateConnectionCommandOutput>;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityRequirementPackCommand}
   */
  deleteSecurityRequirementPack(
    args: DeleteSecurityRequirementPackCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteSecurityRequirementPackCommandOutput>;
  deleteSecurityRequirementPack(
    args: DeleteSecurityRequirementPackCommandInput,
    cb: (err: any, data?: DeleteSecurityRequirementPackCommandOutput) => void
  ): void;
  deleteSecurityRequirementPack(
    args: DeleteSecurityRequirementPackCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteSecurityRequirementPackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetDomainCommand}
   */
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DeleteTargetDomainCommandOutput>;
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    cb: (err: any, data?: DeleteTargetDomainCommandOutput) => void
  ): void;
  deleteTargetDomain(
    args: DeleteTargetDomainCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DeleteTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrivateConnectionCommand}
   */
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<DescribePrivateConnectionCommandOutput>;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArtifactCommand}
   */
  getArtifact(
    args: GetArtifactCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<GetArtifactCommandOutput>;
  getArtifact(
    args: GetArtifactCommandInput,
    cb: (err: any, data?: GetArtifactCommandOutput) => void
  ): void;
  getArtifact(
    args: GetArtifactCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: GetArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityRequirementPackCommand}
   */
  getSecurityRequirementPack(
    args: GetSecurityRequirementPackCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<GetSecurityRequirementPackCommandOutput>;
  getSecurityRequirementPack(
    args: GetSecurityRequirementPackCommandInput,
    cb: (err: any, data?: GetSecurityRequirementPackCommandOutput) => void
  ): void;
  getSecurityRequirementPack(
    args: GetSecurityRequirementPackCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: GetSecurityRequirementPackCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSecurityRequirementsCommand}
   */
  importSecurityRequirements(
    args: ImportSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ImportSecurityRequirementsCommandOutput>;
  importSecurityRequirements(
    args: ImportSecurityRequirementsCommandInput,
    cb: (err: any, data?: ImportSecurityRequirementsCommandOutput) => void
  ): void;
  importSecurityRequirements(
    args: ImportSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ImportSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateProviderRegistrationCommand}
   */
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<InitiateProviderRegistrationCommandOutput>;
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    cb: (err: any, data?: InitiateProviderRegistrationCommandOutput) => void
  ): void;
  initiateProviderRegistration(
    args: InitiateProviderRegistrationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: InitiateProviderRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActorMessagesCommand}
   */
  listActorMessages(
    args: ListActorMessagesCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListActorMessagesCommandOutput>;
  listActorMessages(
    args: ListActorMessagesCommandInput,
    cb: (err: any, data?: ListActorMessagesCommandOutput) => void
  ): void;
  listActorMessages(
    args: ListActorMessagesCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListActorMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   */
  listAgentSpaces(): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(
    args: ListArtifactsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListArtifactsCommandOutput>;
  listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeReviewJobsForCodeReviewCommand}
   */
  listCodeReviewJobsForCodeReview(
    args: ListCodeReviewJobsForCodeReviewCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListCodeReviewJobsForCodeReviewCommandOutput>;
  listCodeReviewJobsForCodeReview(
    args: ListCodeReviewJobsForCodeReviewCommandInput,
    cb: (err: any, data?: ListCodeReviewJobsForCodeReviewCommandOutput) => void
  ): void;
  listCodeReviewJobsForCodeReview(
    args: ListCodeReviewJobsForCodeReviewCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListCodeReviewJobsForCodeReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeReviewJobTasksCommand}
   */
  listCodeReviewJobTasks(
    args: ListCodeReviewJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListCodeReviewJobTasksCommandOutput>;
  listCodeReviewJobTasks(
    args: ListCodeReviewJobTasksCommandInput,
    cb: (err: any, data?: ListCodeReviewJobTasksCommandOutput) => void
  ): void;
  listCodeReviewJobTasks(
    args: ListCodeReviewJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListCodeReviewJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeReviewsCommand}
   */
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListCodeReviewsCommandOutput>;
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredEndpointsCommand}
   */
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListDiscoveredEndpointsCommandOutput>;
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    cb: (err: any, data?: ListDiscoveredEndpointsCommandOutput) => void
  ): void;
  listDiscoveredEndpoints(
    args: ListDiscoveredEndpointsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListDiscoveredEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(
    args: ListFindingsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegratedResourcesCommand}
   */
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListIntegratedResourcesCommandOutput>;
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    cb: (err: any, data?: ListIntegratedResourcesCommandOutput) => void
  ): void;
  listIntegratedResources(
    args: ListIntegratedResourcesCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListIntegratedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestJobsForPentestCommand}
   */
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListPentestJobsForPentestCommandOutput>;
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    cb: (err: any, data?: ListPentestJobsForPentestCommandOutput) => void
  ): void;
  listPentestJobsForPentest(
    args: ListPentestJobsForPentestCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListPentestJobsForPentestCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestJobTasksCommand}
   */
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListPentestJobTasksCommandOutput>;
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    cb: (err: any, data?: ListPentestJobTasksCommandOutput) => void
  ): void;
  listPentestJobTasks(
    args: ListPentestJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListPentestJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPentestsCommand}
   */
  listPentests(
    args: ListPentestsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListPentestsCommandOutput>;
  listPentests(
    args: ListPentestsCommandInput,
    cb: (err: any, data?: ListPentestsCommandOutput) => void
  ): void;
  listPentests(
    args: ListPentestsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListPentestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivateConnectionsCommand}
   */
  listPrivateConnections(): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityRequirementPacksCommand}
   */
  listSecurityRequirementPacks(): Promise<ListSecurityRequirementPacksCommandOutput>;
  listSecurityRequirementPacks(
    args: ListSecurityRequirementPacksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListSecurityRequirementPacksCommandOutput>;
  listSecurityRequirementPacks(
    args: ListSecurityRequirementPacksCommandInput,
    cb: (err: any, data?: ListSecurityRequirementPacksCommandOutput) => void
  ): void;
  listSecurityRequirementPacks(
    args: ListSecurityRequirementPacksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListSecurityRequirementPacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityRequirementsCommand}
   */
  listSecurityRequirements(
    args: ListSecurityRequirementsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListSecurityRequirementsCommandOutput>;
  listSecurityRequirements(
    args: ListSecurityRequirementsCommandInput,
    cb: (err: any, data?: ListSecurityRequirementsCommandOutput) => void
  ): void;
  listSecurityRequirements(
    args: ListSecurityRequirementsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListSecurityRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetDomainsCommand}
   */
  listTargetDomains(): Promise<ListTargetDomainsCommandOutput>;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListTargetDomainsCommandOutput>;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    cb: (err: any, data?: ListTargetDomainsCommandOutput) => void
  ): void;
  listTargetDomains(
    args: ListTargetDomainsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListTargetDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThreatModelJobsCommand}
   */
  listThreatModelJobs(
    args: ListThreatModelJobsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListThreatModelJobsCommandOutput>;
  listThreatModelJobs(
    args: ListThreatModelJobsCommandInput,
    cb: (err: any, data?: ListThreatModelJobsCommandOutput) => void
  ): void;
  listThreatModelJobs(
    args: ListThreatModelJobsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListThreatModelJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThreatModelJobTasksCommand}
   */
  listThreatModelJobTasks(
    args: ListThreatModelJobTasksCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListThreatModelJobTasksCommandOutput>;
  listThreatModelJobTasks(
    args: ListThreatModelJobTasksCommandInput,
    cb: (err: any, data?: ListThreatModelJobTasksCommandOutput) => void
  ): void;
  listThreatModelJobTasks(
    args: ListThreatModelJobTasksCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListThreatModelJobTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThreatModelsCommand}
   */
  listThreatModels(
    args: ListThreatModelsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListThreatModelsCommandOutput>;
  listThreatModels(
    args: ListThreatModelsCommandInput,
    cb: (err: any, data?: ListThreatModelsCommandOutput) => void
  ): void;
  listThreatModels(
    args: ListThreatModelsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListThreatModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThreatsCommand}
   */
  listThreats(
    args: ListThreatsCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<ListThreatsCommandOutput>;
  listThreats(
    args: ListThreatsCommandInput,
    cb: (err: any, data?: ListThreatsCommandOutput) => void
  ): void;
  listThreats(
    args: ListThreatsCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: ListThreatsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodeRemediationCommand}
   */
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StartCodeRemediationCommandOutput>;
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    cb: (err: any, data?: StartCodeRemediationCommandOutput) => void
  ): void;
  startCodeRemediation(
    args: StartCodeRemediationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StartCodeRemediationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodeReviewJobCommand}
   */
  startCodeReviewJob(
    args: StartCodeReviewJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StartCodeReviewJobCommandOutput>;
  startCodeReviewJob(
    args: StartCodeReviewJobCommandInput,
    cb: (err: any, data?: StartCodeReviewJobCommandOutput) => void
  ): void;
  startCodeReviewJob(
    args: StartCodeReviewJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StartCodeReviewJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPentestJobCommand}
   */
  startPentestJob(
    args: StartPentestJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StartPentestJobCommandOutput>;
  startPentestJob(
    args: StartPentestJobCommandInput,
    cb: (err: any, data?: StartPentestJobCommandOutput) => void
  ): void;
  startPentestJob(
    args: StartPentestJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StartPentestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartThreatModelJobCommand}
   */
  startThreatModelJob(
    args: StartThreatModelJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StartThreatModelJobCommandOutput>;
  startThreatModelJob(
    args: StartThreatModelJobCommandInput,
    cb: (err: any, data?: StartThreatModelJobCommandOutput) => void
  ): void;
  startThreatModelJob(
    args: StartThreatModelJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StartThreatModelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCodeReviewJobCommand}
   */
  stopCodeReviewJob(
    args: StopCodeReviewJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StopCodeReviewJobCommandOutput>;
  stopCodeReviewJob(
    args: StopCodeReviewJobCommandInput,
    cb: (err: any, data?: StopCodeReviewJobCommandOutput) => void
  ): void;
  stopCodeReviewJob(
    args: StopCodeReviewJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StopCodeReviewJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPentestJobCommand}
   */
  stopPentestJob(
    args: StopPentestJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StopPentestJobCommandOutput>;
  stopPentestJob(
    args: StopPentestJobCommandInput,
    cb: (err: any, data?: StopPentestJobCommandOutput) => void
  ): void;
  stopPentestJob(
    args: StopPentestJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StopPentestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopThreatModelJobCommand}
   */
  stopThreatModelJob(
    args: StopThreatModelJobCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<StopThreatModelJobCommandOutput>;
  stopThreatModelJob(
    args: StopThreatModelJobCommandInput,
    cb: (err: any, data?: StopThreatModelJobCommandOutput) => void
  ): void;
  stopThreatModelJob(
    args: StopThreatModelJobCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: StopThreatModelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentSpaceCommand}
   */
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateAgentSpaceCommandOutput>;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCodeReviewCommand}
   */
  updateCodeReview(
    args: UpdateCodeReviewCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateCodeReviewCommandOutput>;
  updateCodeReview(
    args: UpdateCodeReviewCommandInput,
    cb: (err: any, data?: UpdateCodeReviewCommandOutput) => void
  ): void;
  updateCodeReview(
    args: UpdateCodeReviewCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateCodeReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingCommand}
   */
  updateFinding(
    args: UpdateFindingCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateFindingCommandOutput>;
  updateFinding(
    args: UpdateFindingCommandInput,
    cb: (err: any, data?: UpdateFindingCommandOutput) => void
  ): void;
  updateFinding(
    args: UpdateFindingCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegratedResourcesCommand}
   */
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateIntegratedResourcesCommandOutput>;
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    cb: (err: any, data?: UpdateIntegratedResourcesCommandOutput) => void
  ): void;
  updateIntegratedResources(
    args: UpdateIntegratedResourcesCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateIntegratedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePentestCommand}
   */
  updatePentest(
    args: UpdatePentestCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdatePentestCommandOutput>;
  updatePentest(
    args: UpdatePentestCommandInput,
    cb: (err: any, data?: UpdatePentestCommandOutput) => void
  ): void;
  updatePentest(
    args: UpdatePentestCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdatePentestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrivateConnectionCertificateCommand}
   */
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdatePrivateConnectionCertificateCommandOutput>;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityRequirementPackCommand}
   */
  updateSecurityRequirementPack(
    args: UpdateSecurityRequirementPackCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateSecurityRequirementPackCommandOutput>;
  updateSecurityRequirementPack(
    args: UpdateSecurityRequirementPackCommandInput,
    cb: (err: any, data?: UpdateSecurityRequirementPackCommandOutput) => void
  ): void;
  updateSecurityRequirementPack(
    args: UpdateSecurityRequirementPackCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateSecurityRequirementPackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTargetDomainCommand}
   */
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateTargetDomainCommandOutput>;
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    cb: (err: any, data?: UpdateTargetDomainCommandOutput) => void
  ): void;
  updateTargetDomain(
    args: UpdateTargetDomainCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThreatCommand}
   */
  updateThreat(
    args: UpdateThreatCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateThreatCommandOutput>;
  updateThreat(
    args: UpdateThreatCommandInput,
    cb: (err: any, data?: UpdateThreatCommandOutput) => void
  ): void;
  updateThreat(
    args: UpdateThreatCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateThreatCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThreatModelCommand}
   */
  updateThreatModel(
    args: UpdateThreatModelCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<UpdateThreatModelCommandOutput>;
  updateThreatModel(
    args: UpdateThreatModelCommandInput,
    cb: (err: any, data?: UpdateThreatModelCommandOutput) => void
  ): void;
  updateThreatModel(
    args: UpdateThreatModelCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: UpdateThreatModelCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyTargetDomainCommand}
   */
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    options?: SecurityAgentRequestOptions
  ): Promise<VerifyTargetDomainCommandOutput>;
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    cb: (err: any, data?: VerifyTargetDomainCommandOutput) => void
  ): void;
  verifyTargetDomain(
    args: VerifyTargetDomainCommandInput,
    options: SecurityAgentRequestOptions,
    cb: (err: any, data?: VerifyTargetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActorMessagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListActorMessagesCommandOutput}.
   */
  paginateListActorMessages(
    args: ListActorMessagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListActorMessagesCommandOutput>;

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
   * @see {@link ListCodeReviewJobsForCodeReviewCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeReviewJobsForCodeReviewCommandOutput}.
   */
  paginateListCodeReviewJobsForCodeReview(
    args: ListCodeReviewJobsForCodeReviewCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeReviewJobsForCodeReviewCommandOutput>;

  /**
   * @see {@link ListCodeReviewJobTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeReviewJobTasksCommandOutput}.
   */
  paginateListCodeReviewJobTasks(
    args: ListCodeReviewJobTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeReviewJobTasksCommandOutput>;

  /**
   * @see {@link ListCodeReviewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeReviewsCommandOutput}.
   */
  paginateListCodeReviews(
    args: ListCodeReviewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeReviewsCommandOutput>;

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
   * @see {@link ListPrivateConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrivateConnectionsCommandOutput}.
   */
  paginateListPrivateConnections(
    args?: ListPrivateConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrivateConnectionsCommandOutput>;

  /**
   * @see {@link ListSecurityRequirementPacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityRequirementPacksCommandOutput}.
   */
  paginateListSecurityRequirementPacks(
    args?: ListSecurityRequirementPacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityRequirementPacksCommandOutput>;

  /**
   * @see {@link ListSecurityRequirementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityRequirementsCommandOutput}.
   */
  paginateListSecurityRequirements(
    args: ListSecurityRequirementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityRequirementsCommandOutput>;

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

  /**
   * @see {@link ListThreatModelJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatModelJobsCommandOutput}.
   */
  paginateListThreatModelJobs(
    args: ListThreatModelJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatModelJobsCommandOutput>;

  /**
   * @see {@link ListThreatModelJobTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatModelJobTasksCommandOutput}.
   */
  paginateListThreatModelJobTasks(
    args: ListThreatModelJobTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatModelJobTasksCommandOutput>;

  /**
   * @see {@link ListThreatModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatModelsCommandOutput}.
   */
  paginateListThreatModels(
    args: ListThreatModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatModelsCommandOutput>;

  /**
   * @see {@link ListThreatsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatsCommandOutput}.
   */
  paginateListThreats(
    args: ListThreatsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatsCommandOutput>;
}

/**
 * <p>AWS Security Agent is a frontier agent that proactively secures your applications throughout the development lifecycle. It conducts automated security reviews tailored to your organizational requirements and delivers context-aware penetration testing on demand. By continuously validating security from design to deployment, AWS Security Agent helps prevent vulnerabilities early across all your environments. Key capabilities include design security review for architecture documents, code security review for pull requests in connected repositories, and on-demand penetration testing that discovers, validates, and remediates security vulnerabilities through tailored multi-step attack scenarios. For more information, see the <a href="https://docs.aws.amazon.com/securityagent/latest/userguide/what-is.html">AWS Security Agent User Guide</a>.</p>
 * @public
 */
export class SecurityAgent extends SecurityAgentClient implements SecurityAgent {}
createAggregatedClient(commands, SecurityAgent, { paginators });
