// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  BatchUpdateRecommendationResourceExclusionCommand,
  BatchUpdateRecommendationResourceExclusionCommandInput,
  BatchUpdateRecommendationResourceExclusionCommandOutput,
} from "./commands/BatchUpdateRecommendationResourceExclusionCommand";
import {
  GetOrganizationRecommendationCommand,
  GetOrganizationRecommendationCommandInput,
  GetOrganizationRecommendationCommandOutput,
} from "./commands/GetOrganizationRecommendationCommand";
import {
  GetRecommendationCommand,
  GetRecommendationCommandInput,
  GetRecommendationCommandOutput,
} from "./commands/GetRecommendationCommand";
import { ListChecksCommand, ListChecksCommandInput, ListChecksCommandOutput } from "./commands/ListChecksCommand";
import {
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput,
} from "./commands/ListOrganizationRecommendationAccountsCommand";
import {
  ListOrganizationRecommendationResourcesCommand,
  ListOrganizationRecommendationResourcesCommandInput,
  ListOrganizationRecommendationResourcesCommandOutput,
} from "./commands/ListOrganizationRecommendationResourcesCommand";
import {
  ListOrganizationRecommendationsCommand,
  ListOrganizationRecommendationsCommandInput,
  ListOrganizationRecommendationsCommandOutput,
} from "./commands/ListOrganizationRecommendationsCommand";
import {
  ListRecommendationResourcesCommand,
  ListRecommendationResourcesCommandInput,
  ListRecommendationResourcesCommandOutput,
} from "./commands/ListRecommendationResourcesCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  UpdateOrganizationRecommendationLifecycleCommand,
  UpdateOrganizationRecommendationLifecycleCommandInput,
  UpdateOrganizationRecommendationLifecycleCommandOutput,
} from "./commands/UpdateOrganizationRecommendationLifecycleCommand";
import {
  UpdateRecommendationLifecycleCommand,
  UpdateRecommendationLifecycleCommandInput,
  UpdateRecommendationLifecycleCommandOutput,
} from "./commands/UpdateRecommendationLifecycleCommand";
import { paginateListChecks } from "./pagination/ListChecksPaginator";
import {
  paginateListOrganizationRecommendationAccounts,
} from "./pagination/ListOrganizationRecommendationAccountsPaginator";
import {
  paginateListOrganizationRecommendationResources,
} from "./pagination/ListOrganizationRecommendationResourcesPaginator";
import { paginateListOrganizationRecommendations } from "./pagination/ListOrganizationRecommendationsPaginator";
import { paginateListRecommendationResources } from "./pagination/ListRecommendationResourcesPaginator";
import { paginateListRecommendations } from "./pagination/ListRecommendationsPaginator";
import { TrustedAdvisorClient } from "./TrustedAdvisorClient";

const commands = {
  BatchUpdateRecommendationResourceExclusionCommand,
  GetOrganizationRecommendationCommand,
  GetRecommendationCommand,
  ListChecksCommand,
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationResourcesCommand,
  ListOrganizationRecommendationsCommand,
  ListRecommendationResourcesCommand,
  ListRecommendationsCommand,
  UpdateOrganizationRecommendationLifecycleCommand,
  UpdateRecommendationLifecycleCommand,
};
const paginators = {
  paginateListChecks,
  paginateListOrganizationRecommendationAccounts,
  paginateListOrganizationRecommendationResources,
  paginateListOrganizationRecommendations,
  paginateListRecommendationResources,
  paginateListRecommendations,
};

export interface TrustedAdvisor {
  /**
   * @see {@link BatchUpdateRecommendationResourceExclusionCommand}
   */
  batchUpdateRecommendationResourceExclusion(
    args: BatchUpdateRecommendationResourceExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateRecommendationResourceExclusionCommandOutput>;
  batchUpdateRecommendationResourceExclusion(
    args: BatchUpdateRecommendationResourceExclusionCommandInput,
    cb: (err: any, data?: BatchUpdateRecommendationResourceExclusionCommandOutput) => void
  ): void;
  batchUpdateRecommendationResourceExclusion(
    args: BatchUpdateRecommendationResourceExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateRecommendationResourceExclusionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationRecommendationCommand}
   */
  getOrganizationRecommendation(
    args: GetOrganizationRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationRecommendationCommandOutput>;
  getOrganizationRecommendation(
    args: GetOrganizationRecommendationCommandInput,
    cb: (err: any, data?: GetOrganizationRecommendationCommandOutput) => void
  ): void;
  getOrganizationRecommendation(
    args: GetOrganizationRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationCommandOutput>;
  getRecommendation(
    args: GetRecommendationCommandInput,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;
  getRecommendation(
    args: GetRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChecksCommand}
   */
  listChecks(): Promise<ListChecksCommandOutput>;
  listChecks(
    args: ListChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChecksCommandOutput>;
  listChecks(
    args: ListChecksCommandInput,
    cb: (err: any, data?: ListChecksCommandOutput) => void
  ): void;
  listChecks(
    args: ListChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationRecommendationAccountsCommand}
   */
  listOrganizationRecommendationAccounts(
    args: ListOrganizationRecommendationAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationRecommendationAccountsCommandOutput>;
  listOrganizationRecommendationAccounts(
    args: ListOrganizationRecommendationAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationRecommendationAccountsCommandOutput) => void
  ): void;
  listOrganizationRecommendationAccounts(
    args: ListOrganizationRecommendationAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationRecommendationAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationRecommendationResourcesCommand}
   */
  listOrganizationRecommendationResources(
    args: ListOrganizationRecommendationResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationRecommendationResourcesCommandOutput>;
  listOrganizationRecommendationResources(
    args: ListOrganizationRecommendationResourcesCommandInput,
    cb: (err: any, data?: ListOrganizationRecommendationResourcesCommandOutput) => void
  ): void;
  listOrganizationRecommendationResources(
    args: ListOrganizationRecommendationResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationRecommendationResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationRecommendationsCommand}
   */
  listOrganizationRecommendations(): Promise<ListOrganizationRecommendationsCommandOutput>;
  listOrganizationRecommendations(
    args: ListOrganizationRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationRecommendationsCommandOutput>;
  listOrganizationRecommendations(
    args: ListOrganizationRecommendationsCommandInput,
    cb: (err: any, data?: ListOrganizationRecommendationsCommandOutput) => void
  ): void;
  listOrganizationRecommendations(
    args: ListOrganizationRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationResourcesCommand}
   */
  listRecommendationResources(
    args: ListRecommendationResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationResourcesCommandOutput>;
  listRecommendationResources(
    args: ListRecommendationResourcesCommandInput,
    cb: (err: any, data?: ListRecommendationResourcesCommandOutput) => void
  ): void;
  listRecommendationResources(
    args: ListRecommendationResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationRecommendationLifecycleCommand}
   */
  updateOrganizationRecommendationLifecycle(
    args: UpdateOrganizationRecommendationLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationRecommendationLifecycleCommandOutput>;
  updateOrganizationRecommendationLifecycle(
    args: UpdateOrganizationRecommendationLifecycleCommandInput,
    cb: (err: any, data?: UpdateOrganizationRecommendationLifecycleCommandOutput) => void
  ): void;
  updateOrganizationRecommendationLifecycle(
    args: UpdateOrganizationRecommendationLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationRecommendationLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommendationLifecycleCommand}
   */
  updateRecommendationLifecycle(
    args: UpdateRecommendationLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecommendationLifecycleCommandOutput>;
  updateRecommendationLifecycle(
    args: UpdateRecommendationLifecycleCommandInput,
    cb: (err: any, data?: UpdateRecommendationLifecycleCommandOutput) => void
  ): void;
  updateRecommendationLifecycle(
    args: UpdateRecommendationLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecommendationLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChecksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChecksCommandOutput}.
   */
  paginateListChecks(
    args?: ListChecksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChecksCommandOutput>;

  /**
   * @see {@link ListOrganizationRecommendationAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationRecommendationAccountsCommandOutput}.
   */
  paginateListOrganizationRecommendationAccounts(
    args: ListOrganizationRecommendationAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationRecommendationAccountsCommandOutput>;

  /**
   * @see {@link ListOrganizationRecommendationResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationRecommendationResourcesCommandOutput}.
   */
  paginateListOrganizationRecommendationResources(
    args: ListOrganizationRecommendationResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationRecommendationResourcesCommandOutput>;

  /**
   * @see {@link ListOrganizationRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationRecommendationsCommandOutput}.
   */
  paginateListOrganizationRecommendations(
    args?: ListOrganizationRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationRecommendationsCommandOutput>;

  /**
   * @see {@link ListRecommendationResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationResourcesCommandOutput}.
   */
  paginateListRecommendationResources(
    args: ListRecommendationResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationResourcesCommandOutput>;

  /**
   * @see {@link ListRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationsCommandOutput}.
   */
  paginateListRecommendations(
    args?: ListRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationsCommandOutput>;
}

/**
 * <p>TrustedAdvisor Public API</p>
 * @public
 */
export class TrustedAdvisor extends TrustedAdvisorClient implements TrustedAdvisor {}
createAggregatedClient(commands, TrustedAdvisor, { paginators });
