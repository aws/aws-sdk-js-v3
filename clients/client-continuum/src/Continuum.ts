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
  type AssociateCollectorCommandInput,
  type AssociateCollectorCommandOutput,
  AssociateCollectorCommand,
} from "./commands/AssociateCollectorCommand";
import {
  type CreateCodeFindingCommandInput,
  type CreateCodeFindingCommandOutput,
  CreateCodeFindingCommand,
} from "./commands/CreateCodeFindingCommand";
import {
  type CreateCodeScanCommandInput,
  type CreateCodeScanCommandOutput,
  CreateCodeScanCommand,
} from "./commands/CreateCodeScanCommand";
import {
  type CreateCollectorCommandInput,
  type CreateCollectorCommandOutput,
  CreateCollectorCommand,
} from "./commands/CreateCollectorCommand";
import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type DeleteCollectorCommandInput,
  type DeleteCollectorCommandOutput,
  DeleteCollectorCommand,
} from "./commands/DeleteCollectorCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DisassociateCollectorCommandInput,
  type DisassociateCollectorCommandOutput,
  DisassociateCollectorCommand,
} from "./commands/DisassociateCollectorCommand";
import {
  type GetCodeFindingCommandInput,
  type GetCodeFindingCommandOutput,
  GetCodeFindingCommand,
} from "./commands/GetCodeFindingCommand";
import {
  type GetCodeIssueArtifactCommandInput,
  type GetCodeIssueArtifactCommandOutput,
  GetCodeIssueArtifactCommand,
} from "./commands/GetCodeIssueArtifactCommand";
import {
  type GetCodeIssueCommandInput,
  type GetCodeIssueCommandOutput,
  GetCodeIssueCommand,
} from "./commands/GetCodeIssueCommand";
import {
  type GetCodeScanCommandInput,
  type GetCodeScanCommandOutput,
  GetCodeScanCommand,
} from "./commands/GetCodeScanCommand";
import {
  type GetCollectorCommandInput,
  type GetCollectorCommandOutput,
  GetCollectorCommand,
} from "./commands/GetCollectorCommand";
import {
  type GetCollectorDataAccessAuthorizationCommandInput,
  type GetCollectorDataAccessAuthorizationCommandOutput,
  GetCollectorDataAccessAuthorizationCommand,
} from "./commands/GetCollectorDataAccessAuthorizationCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListAssociatedCollectorsCommandInput,
  type ListAssociatedCollectorsCommandOutput,
  ListAssociatedCollectorsCommand,
} from "./commands/ListAssociatedCollectorsCommand";
import {
  type ListAssociatedEnvironmentsCommandInput,
  type ListAssociatedEnvironmentsCommandOutput,
  ListAssociatedEnvironmentsCommand,
} from "./commands/ListAssociatedEnvironmentsCommand";
import {
  type ListCodeFindingsCommandInput,
  type ListCodeFindingsCommandOutput,
  ListCodeFindingsCommand,
} from "./commands/ListCodeFindingsCommand";
import {
  type ListCodeIssueArtifactsCommandInput,
  type ListCodeIssueArtifactsCommandOutput,
  ListCodeIssueArtifactsCommand,
} from "./commands/ListCodeIssueArtifactsCommand";
import {
  type ListCodeIssuesCommandInput,
  type ListCodeIssuesCommandOutput,
  ListCodeIssuesCommand,
} from "./commands/ListCodeIssuesCommand";
import {
  type ListCodeScansCommandInput,
  type ListCodeScansCommandOutput,
  ListCodeScansCommand,
} from "./commands/ListCodeScansCommand";
import {
  type ListCollectorsCommandInput,
  type ListCollectorsCommandOutput,
  ListCollectorsCommand,
} from "./commands/ListCollectorsCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListIntegrationsCommand,
} from "./commands/ListIntegrationsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type StartIntegrationAuthorizationCommandInput,
  type StartIntegrationAuthorizationCommandOutput,
  StartIntegrationAuthorizationCommand,
} from "./commands/StartIntegrationAuthorizationCommand";
import {
  type UpdateCollectorCommandInput,
  type UpdateCollectorCommandOutput,
  UpdateCollectorCommand,
} from "./commands/UpdateCollectorCommand";
import {
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationCommand,
} from "./commands/UpdateIntegrationCommand";
import { ContinuumClient } from "./ContinuumClient";
import type { ContinuumServiceException } from "./models/ContinuumServiceException";
import { paginateListAssociatedCollectors } from "./pagination/ListAssociatedCollectorsPaginator";
import { paginateListAssociatedEnvironments } from "./pagination/ListAssociatedEnvironmentsPaginator";
import { paginateListCodeFindings } from "./pagination/ListCodeFindingsPaginator";
import { paginateListCodeIssueArtifacts } from "./pagination/ListCodeIssueArtifactsPaginator";
import { paginateListCodeIssues } from "./pagination/ListCodeIssuesPaginator";
import { paginateListCodeScans } from "./pagination/ListCodeScansPaginator";
import { paginateListEnvironments } from "./pagination/ListEnvironmentsPaginator";
import { paginateListIntegrations } from "./pagination/ListIntegrationsPaginator";
import { waitUntilCodeScanSucceeded } from "./waiters/waitForCodeScanSucceeded";

const commands = {
  AssociateCollectorCommand,
  CreateCodeFindingCommand,
  CreateCodeScanCommand,
  CreateCollectorCommand,
  CreateEnvironmentCommand,
  CreateIntegrationCommand,
  DeleteCollectorCommand,
  DeleteEnvironmentCommand,
  DeleteIntegrationCommand,
  DisassociateCollectorCommand,
  GetCodeFindingCommand,
  GetCodeIssueCommand,
  GetCodeIssueArtifactCommand,
  GetCodeScanCommand,
  GetCollectorCommand,
  GetCollectorDataAccessAuthorizationCommand,
  GetEnvironmentCommand,
  GetIntegrationCommand,
  GetResourcePolicyCommand,
  ListAssociatedCollectorsCommand,
  ListAssociatedEnvironmentsCommand,
  ListCodeFindingsCommand,
  ListCodeIssueArtifactsCommand,
  ListCodeIssuesCommand,
  ListCodeScansCommand,
  ListCollectorsCommand,
  ListEnvironmentsCommand,
  ListIntegrationsCommand,
  PutResourcePolicyCommand,
  StartIntegrationAuthorizationCommand,
  UpdateCollectorCommand,
  UpdateEnvironmentCommand,
  UpdateIntegrationCommand,
};
const paginators = {
  paginateListAssociatedCollectors,
  paginateListAssociatedEnvironments,
  paginateListCodeFindings,
  paginateListCodeIssueArtifacts,
  paginateListCodeIssues,
  paginateListCodeScans,
  paginateListEnvironments,
  paginateListIntegrations,
};
const waiters = {
  waitUntilCodeScanSucceeded,
};

/**
 * @public
 */
export interface ContinuumRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Continuum {
  /**
   * @see {@link AssociateCollectorCommand}
   */
  associateCollector(
    args: AssociateCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<AssociateCollectorCommandOutput>;
  associateCollector(
    args: AssociateCollectorCommandInput,
    cb: (err: any, data?: AssociateCollectorCommandOutput) => void
  ): void;
  associateCollector(
    args: AssociateCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: AssociateCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeFindingCommand}
   */
  createCodeFinding(
    args: CreateCodeFindingCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<CreateCodeFindingCommandOutput>;
  createCodeFinding(
    args: CreateCodeFindingCommandInput,
    cb: (err: any, data?: CreateCodeFindingCommandOutput) => void
  ): void;
  createCodeFinding(
    args: CreateCodeFindingCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: CreateCodeFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeScanCommand}
   */
  createCodeScan(
    args: CreateCodeScanCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<CreateCodeScanCommandOutput>;
  createCodeScan(
    args: CreateCodeScanCommandInput,
    cb: (err: any, data?: CreateCodeScanCommandOutput) => void
  ): void;
  createCodeScan(
    args: CreateCodeScanCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: CreateCodeScanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectorCommand}
   */
  createCollector(): Promise<CreateCollectorCommandOutput>;
  createCollector(
    args: CreateCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<CreateCollectorCommandOutput>;
  createCollector(
    args: CreateCollectorCommandInput,
    cb: (err: any, data?: CreateCollectorCommandOutput) => void
  ): void;
  createCollector(
    args: CreateCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: CreateCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectorCommand}
   */
  deleteCollector(
    args: DeleteCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<DeleteCollectorCommandOutput>;
  deleteCollector(
    args: DeleteCollectorCommandInput,
    cb: (err: any, data?: DeleteCollectorCommandOutput) => void
  ): void;
  deleteCollector(
    args: DeleteCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: DeleteCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCollectorCommand}
   */
  disassociateCollector(
    args: DisassociateCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<DisassociateCollectorCommandOutput>;
  disassociateCollector(
    args: DisassociateCollectorCommandInput,
    cb: (err: any, data?: DisassociateCollectorCommandOutput) => void
  ): void;
  disassociateCollector(
    args: DisassociateCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: DisassociateCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeFindingCommand}
   */
  getCodeFinding(
    args: GetCodeFindingCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCodeFindingCommandOutput>;
  getCodeFinding(
    args: GetCodeFindingCommandInput,
    cb: (err: any, data?: GetCodeFindingCommandOutput) => void
  ): void;
  getCodeFinding(
    args: GetCodeFindingCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCodeFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeIssueCommand}
   */
  getCodeIssue(
    args: GetCodeIssueCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCodeIssueCommandOutput>;
  getCodeIssue(
    args: GetCodeIssueCommandInput,
    cb: (err: any, data?: GetCodeIssueCommandOutput) => void
  ): void;
  getCodeIssue(
    args: GetCodeIssueCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCodeIssueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeIssueArtifactCommand}
   */
  getCodeIssueArtifact(
    args: GetCodeIssueArtifactCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCodeIssueArtifactCommandOutput>;
  getCodeIssueArtifact(
    args: GetCodeIssueArtifactCommandInput,
    cb: (err: any, data?: GetCodeIssueArtifactCommandOutput) => void
  ): void;
  getCodeIssueArtifact(
    args: GetCodeIssueArtifactCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCodeIssueArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeScanCommand}
   */
  getCodeScan(
    args: GetCodeScanCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCodeScanCommandOutput>;
  getCodeScan(
    args: GetCodeScanCommandInput,
    cb: (err: any, data?: GetCodeScanCommandOutput) => void
  ): void;
  getCodeScan(
    args: GetCodeScanCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCodeScanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollectorCommand}
   */
  getCollector(
    args: GetCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCollectorCommandOutput>;
  getCollector(
    args: GetCollectorCommandInput,
    cb: (err: any, data?: GetCollectorCommandOutput) => void
  ): void;
  getCollector(
    args: GetCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollectorDataAccessAuthorizationCommand}
   */
  getCollectorDataAccessAuthorization(
    args: GetCollectorDataAccessAuthorizationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetCollectorDataAccessAuthorizationCommandOutput>;
  getCollectorDataAccessAuthorization(
    args: GetCollectorDataAccessAuthorizationCommandInput,
    cb: (err: any, data?: GetCollectorDataAccessAuthorizationCommandOutput) => void
  ): void;
  getCollectorDataAccessAuthorization(
    args: GetCollectorDataAccessAuthorizationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetCollectorDataAccessAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedCollectorsCommand}
   */
  listAssociatedCollectors(
    args: ListAssociatedCollectorsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListAssociatedCollectorsCommandOutput>;
  listAssociatedCollectors(
    args: ListAssociatedCollectorsCommandInput,
    cb: (err: any, data?: ListAssociatedCollectorsCommandOutput) => void
  ): void;
  listAssociatedCollectors(
    args: ListAssociatedCollectorsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListAssociatedCollectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedEnvironmentsCommand}
   */
  listAssociatedEnvironments(
    args: ListAssociatedEnvironmentsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListAssociatedEnvironmentsCommandOutput>;
  listAssociatedEnvironments(
    args: ListAssociatedEnvironmentsCommandInput,
    cb: (err: any, data?: ListAssociatedEnvironmentsCommandOutput) => void
  ): void;
  listAssociatedEnvironments(
    args: ListAssociatedEnvironmentsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListAssociatedEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeFindingsCommand}
   */
  listCodeFindings(
    args: ListCodeFindingsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListCodeFindingsCommandOutput>;
  listCodeFindings(
    args: ListCodeFindingsCommandInput,
    cb: (err: any, data?: ListCodeFindingsCommandOutput) => void
  ): void;
  listCodeFindings(
    args: ListCodeFindingsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListCodeFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeIssueArtifactsCommand}
   */
  listCodeIssueArtifacts(
    args: ListCodeIssueArtifactsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListCodeIssueArtifactsCommandOutput>;
  listCodeIssueArtifacts(
    args: ListCodeIssueArtifactsCommandInput,
    cb: (err: any, data?: ListCodeIssueArtifactsCommandOutput) => void
  ): void;
  listCodeIssueArtifacts(
    args: ListCodeIssueArtifactsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListCodeIssueArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeIssuesCommand}
   */
  listCodeIssues(
    args: ListCodeIssuesCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListCodeIssuesCommandOutput>;
  listCodeIssues(
    args: ListCodeIssuesCommandInput,
    cb: (err: any, data?: ListCodeIssuesCommandOutput) => void
  ): void;
  listCodeIssues(
    args: ListCodeIssuesCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListCodeIssuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeScansCommand}
   */
  listCodeScans(
    args: ListCodeScansCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListCodeScansCommandOutput>;
  listCodeScans(
    args: ListCodeScansCommandInput,
    cb: (err: any, data?: ListCodeScansCommandOutput) => void
  ): void;
  listCodeScans(
    args: ListCodeScansCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListCodeScansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectorsCommand}
   */
  listCollectors(): Promise<ListCollectorsCommandOutput>;
  listCollectors(
    args: ListCollectorsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListCollectorsCommandOutput>;
  listCollectors(
    args: ListCollectorsCommandInput,
    cb: (err: any, data?: ListCollectorsCommandOutput) => void
  ): void;
  listCollectors(
    args: ListCollectorsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListCollectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartIntegrationAuthorizationCommand}
   */
  startIntegrationAuthorization(
    args: StartIntegrationAuthorizationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<StartIntegrationAuthorizationCommandOutput>;
  startIntegrationAuthorization(
    args: StartIntegrationAuthorizationCommandInput,
    cb: (err: any, data?: StartIntegrationAuthorizationCommandOutput) => void
  ): void;
  startIntegrationAuthorization(
    args: StartIntegrationAuthorizationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: StartIntegrationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollectorCommand}
   */
  updateCollector(
    args: UpdateCollectorCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<UpdateCollectorCommandOutput>;
  updateCollector(
    args: UpdateCollectorCommandInput,
    cb: (err: any, data?: UpdateCollectorCommandOutput) => void
  ): void;
  updateCollector(
    args: UpdateCollectorCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: UpdateCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: ContinuumRequestOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: ContinuumRequestOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedCollectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedCollectorsCommandOutput}.
   */
  paginateListAssociatedCollectors(
    args: ListAssociatedCollectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedCollectorsCommandOutput>;

  /**
   * @see {@link ListAssociatedEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedEnvironmentsCommandOutput}.
   */
  paginateListAssociatedEnvironments(
    args: ListAssociatedEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedEnvironmentsCommandOutput>;

  /**
   * @see {@link ListCodeFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeFindingsCommandOutput}.
   */
  paginateListCodeFindings(
    args: ListCodeFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeFindingsCommandOutput>;

  /**
   * @see {@link ListCodeIssueArtifactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeIssueArtifactsCommandOutput}.
   */
  paginateListCodeIssueArtifacts(
    args: ListCodeIssueArtifactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeIssueArtifactsCommandOutput>;

  /**
   * @see {@link ListCodeIssuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeIssuesCommandOutput}.
   */
  paginateListCodeIssues(
    args: ListCodeIssuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeIssuesCommandOutput>;

  /**
   * @see {@link ListCodeScansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeScansCommandOutput}.
   */
  paginateListCodeScans(
    args: ListCodeScansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeScansCommandOutput>;

  /**
   * @see {@link ListEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentsCommandOutput}.
   */
  paginateListEnvironments(
    args?: ListEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentsCommandOutput>;

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
   * @see {@link GetCodeScanCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCodeScanSucceeded(
    args: GetCodeScanCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Continuum>, "client">
  ): Promise<WaiterResult<GetCodeScanCommandOutput>>;
}

/**
 * AWS Continuum finds, validates, prioritizes, and remediates code vulnerabilities
 * across the source repositories and AWS resources in your environments.
 * @public
 */
export class Continuum extends ContinuumClient implements Continuum {}
createAggregatedClient(commands, Continuum, { paginators, waiters });
