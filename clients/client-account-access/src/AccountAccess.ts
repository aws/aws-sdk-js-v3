// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AccountAccessClient } from "./AccountAccessClient";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateEntitlementCommandInput,
  type CreateEntitlementCommandOutput,
  CreateEntitlementCommand,
} from "./commands/CreateEntitlementCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteEntitlementCommandInput,
  type DeleteEntitlementCommandOutput,
  DeleteEntitlementCommand,
} from "./commands/DeleteEntitlementCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetEntitlementCommandInput,
  type GetEntitlementCommandOutput,
  GetEntitlementCommand,
} from "./commands/GetEntitlementCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListEntitlementsCommandInput,
  type ListEntitlementsCommandOutput,
  ListEntitlementsCommand,
} from "./commands/ListEntitlementsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
import type { AccountAccessServiceException } from "./models/AccountAccessServiceException";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListEntitlements } from "./pagination/ListEntitlementsPaginator";
import { waitUntilApplicationActive } from "./waiters/waitForApplicationActive";

const commands = {
  CreateApplicationCommand,
  CreateEntitlementCommand,
  DeleteApplicationCommand,
  DeleteEntitlementCommand,
  GetApplicationCommand,
  GetEntitlementCommand,
  ListApplicationsCommand,
  ListEntitlementsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListApplications,
  paginateListEntitlements,
};
const waiters = {
  waitUntilApplicationActive,
};

export interface AccountAccess {
  /**
   * @see {@link CreateApplicationCommand}
   */
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
   * @see {@link CreateEntitlementCommand}
   */
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntitlementCommandOutput>;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
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
   * @see {@link DeleteEntitlementCommand}
   */
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntitlementCommandOutput>;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
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
   * @see {@link GetEntitlementCommand}
   */
  getEntitlement(
    args: GetEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntitlementCommandOutput>;
  getEntitlement(
    args: GetEntitlementCommandInput,
    cb: (err: any, data?: GetEntitlementCommandOutput) => void
  ): void;
  getEntitlement(
    args: GetEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntitlementCommandOutput) => void
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
   * @see {@link ListEntitlementsCommand}
   */
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitlementsCommandOutput>;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
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
   * @see {@link ListEntitlementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitlementsCommandOutput}.
   */
  paginateListEntitlements(
    args: ListEntitlementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitlementsCommandOutput>;

  /**
   * @see {@link GetApplicationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilApplicationActive(
    args: GetApplicationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AccountAccess>, "client">
  ): Promise<WaiterResult<GetApplicationCommandOutput>>;
}

/**
 * <p>Account access manager enables you to manage applications and entitlements that grant IAM Identity Center principals access to IAM roles across accounts.</p>
 * @public
 */
export class AccountAccess extends AccountAccessClient implements AccountAccess {}
createAggregatedClient(commands, AccountAccess, { paginators, waiters });
