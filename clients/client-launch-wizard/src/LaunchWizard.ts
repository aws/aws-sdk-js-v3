// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDeploymentCommand,
} from "./commands/DeleteDeploymentCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import {
  type GetDeploymentPatternVersionCommandInput,
  type GetDeploymentPatternVersionCommandOutput,
  GetDeploymentPatternVersionCommand,
} from "./commands/GetDeploymentPatternVersionCommand";
import {
  type GetWorkloadCommandInput,
  type GetWorkloadCommandOutput,
  GetWorkloadCommand,
} from "./commands/GetWorkloadCommand";
import {
  type GetWorkloadDeploymentPatternCommandInput,
  type GetWorkloadDeploymentPatternCommandOutput,
  GetWorkloadDeploymentPatternCommand,
} from "./commands/GetWorkloadDeploymentPatternCommand";
import {
  type ListDeploymentEventsCommandInput,
  type ListDeploymentEventsCommandOutput,
  ListDeploymentEventsCommand,
} from "./commands/ListDeploymentEventsCommand";
import {
  type ListDeploymentPatternVersionsCommandInput,
  type ListDeploymentPatternVersionsCommandOutput,
  ListDeploymentPatternVersionsCommand,
} from "./commands/ListDeploymentPatternVersionsCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkloadDeploymentPatternsCommandInput,
  type ListWorkloadDeploymentPatternsCommandOutput,
  ListWorkloadDeploymentPatternsCommand,
} from "./commands/ListWorkloadDeploymentPatternsCommand";
import {
  type ListWorkloadsCommandInput,
  type ListWorkloadsCommandOutput,
  ListWorkloadsCommand,
} from "./commands/ListWorkloadsCommand";
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
  type UpdateDeploymentCommandInput,
  type UpdateDeploymentCommandOutput,
  UpdateDeploymentCommand,
} from "./commands/UpdateDeploymentCommand";
import { LaunchWizardClient } from "./LaunchWizardClient";
import { paginateListDeploymentEvents } from "./pagination/ListDeploymentEventsPaginator";
import { paginateListDeploymentPatternVersions } from "./pagination/ListDeploymentPatternVersionsPaginator";
import { paginateListDeployments } from "./pagination/ListDeploymentsPaginator";
import { paginateListWorkloadDeploymentPatterns } from "./pagination/ListWorkloadDeploymentPatternsPaginator";
import { paginateListWorkloads } from "./pagination/ListWorkloadsPaginator";

const commands = {
  CreateDeploymentCommand,
  DeleteDeploymentCommand,
  GetDeploymentCommand,
  GetDeploymentPatternVersionCommand,
  GetWorkloadCommand,
  GetWorkloadDeploymentPatternCommand,
  ListDeploymentEventsCommand,
  ListDeploymentPatternVersionsCommand,
  ListDeploymentsCommand,
  ListTagsForResourceCommand,
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeploymentCommand,
};
const paginators = {
  paginateListDeploymentEvents,
  paginateListDeploymentPatternVersions,
  paginateListDeployments,
  paginateListWorkloadDeploymentPatterns,
  paginateListWorkloads,
};

/**
 * @public
 */
export interface LaunchWizardRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LaunchWizard {
  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentPatternVersionCommand}
   */
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<GetDeploymentPatternVersionCommandOutput>;
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    cb: (err: any, data?: GetDeploymentPatternVersionCommandOutput) => void
  ): void;
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: GetDeploymentPatternVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(
    args: GetWorkloadCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<GetWorkloadCommandOutput>;
  getWorkload(
    args: GetWorkloadCommandInput,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadDeploymentPatternCommand}
   */
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<GetWorkloadDeploymentPatternCommandOutput>;
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    cb: (err: any, data?: GetWorkloadDeploymentPatternCommandOutput) => void
  ): void;
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: GetWorkloadDeploymentPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentEventsCommand}
   */
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListDeploymentEventsCommandOutput>;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentPatternVersionsCommand}
   */
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListDeploymentPatternVersionsCommandOutput>;
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    cb: (err: any, data?: ListDeploymentPatternVersionsCommandOutput) => void
  ): void;
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListDeploymentPatternVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadDeploymentPatternsCommand}
   */
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListWorkloadDeploymentPatternsCommandOutput>;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: LaunchWizardRequestOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: LaunchWizardRequestOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentEventsCommandOutput}.
   */
  paginateListDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentEventsCommandOutput>;

  /**
   * @see {@link ListDeploymentPatternVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentPatternVersionsCommandOutput}.
   */
  paginateListDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentPatternVersionsCommandOutput>;

  /**
   * @see {@link ListDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentsCommandOutput}.
   */
  paginateListDeployments(
    args?: ListDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentsCommandOutput>;

  /**
   * @see {@link ListWorkloadDeploymentPatternsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadDeploymentPatternsCommandOutput}.
   */
  paginateListWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadDeploymentPatternsCommandOutput>;

  /**
   * @see {@link ListWorkloadsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadsCommandOutput}.
   */
  paginateListWorkloads(
    args?: ListWorkloadsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadsCommandOutput>;
}

/**
 * <p>Launch Wizard offers a guided way of sizing, configuring, and deploying Amazon Web Services resources for third party applications, such as Microsoft SQL Server Always On and HANA based SAP systems, without the need to manually identify and provision individual Amazon Web Services resources.</p>
 * @public
 */
export class LaunchWizard extends LaunchWizardClient implements LaunchWizard {}
createAggregatedClient(commands, LaunchWizard, { paginators });
