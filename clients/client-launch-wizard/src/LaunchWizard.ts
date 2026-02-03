// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentPatternVersionCommand,
  GetDeploymentPatternVersionCommandInput,
  GetDeploymentPatternVersionCommandOutput,
} from "./commands/GetDeploymentPatternVersionCommand";
import { GetWorkloadCommand, GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import {
  GetWorkloadDeploymentPatternCommand,
  GetWorkloadDeploymentPatternCommandInput,
  GetWorkloadDeploymentPatternCommandOutput,
} from "./commands/GetWorkloadDeploymentPatternCommand";
import {
  ListDeploymentEventsCommand,
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput,
} from "./commands/ListDeploymentEventsCommand";
import {
  ListDeploymentPatternVersionsCommand,
  ListDeploymentPatternVersionsCommandInput,
  ListDeploymentPatternVersionsCommandOutput,
} from "./commands/ListDeploymentPatternVersionsCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput,
} from "./commands/ListWorkloadDeploymentPatternsCommand";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeploymentCommand,
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
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

export interface LaunchWizard {
  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentPatternVersionCommand}
   */
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentPatternVersionCommandOutput>;
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    cb: (err: any, data?: GetDeploymentPatternVersionCommandOutput) => void
  ): void;
  getDeploymentPatternVersion(
    args: GetDeploymentPatternVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentPatternVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(
    args: GetWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadCommandOutput>;
  getWorkload(
    args: GetWorkloadCommandInput,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadDeploymentPatternCommand}
   */
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadDeploymentPatternCommandOutput>;
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    cb: (err: any, data?: GetWorkloadDeploymentPatternCommandOutput) => void
  ): void;
  getWorkloadDeploymentPattern(
    args: GetWorkloadDeploymentPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadDeploymentPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentEventsCommand}
   */
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentEventsCommandOutput>;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentPatternVersionsCommand}
   */
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentPatternVersionsCommandOutput>;
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    cb: (err: any, data?: ListDeploymentPatternVersionsCommandOutput) => void
  ): void;
  listDeploymentPatternVersions(
    args: ListDeploymentPatternVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentPatternVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
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
   * @see {@link ListWorkloadDeploymentPatternsCommand}
   */
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadDeploymentPatternsCommandOutput>;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
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
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: __HttpHandlerOptions,
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
