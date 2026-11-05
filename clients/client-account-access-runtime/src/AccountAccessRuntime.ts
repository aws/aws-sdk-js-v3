// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AccountAccessRuntimeClient } from "./AccountAccessRuntimeClient";
import {
  type GetRoleCredentialsCommandInput,
  type GetRoleCredentialsCommandOutput,
  GetRoleCredentialsCommand,
} from "./commands/GetRoleCredentialsCommand";
import { type ListRolesCommandInput, type ListRolesCommandOutput, ListRolesCommand } from "./commands/ListRolesCommand";
import { paginateListRoles } from "./pagination/ListRolesPaginator";

const commands = {
  GetRoleCredentialsCommand,
  ListRolesCommand,
};
const paginators = {
  paginateListRoles,
};

/**
 * @public
 */
export interface AccountAccessRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AccountAccessRuntime {
  /**
   * @see {@link GetRoleCredentialsCommand}
   */
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options?: AccountAccessRuntimeRequestOptions
  ): Promise<GetRoleCredentialsCommandOutput>;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options: AccountAccessRuntimeRequestOptions,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRolesCommand}
   */
  listRoles(
    args: ListRolesCommandInput,
    options?: AccountAccessRuntimeRequestOptions
  ): Promise<ListRolesCommandOutput>;
  listRoles(
    args: ListRolesCommandInput,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;
  listRoles(
    args: ListRolesCommandInput,
    options: AccountAccessRuntimeRequestOptions,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRolesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRolesCommandOutput}.
   */
  paginateListRoles(
    args: ListRolesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRolesCommandOutput>;
}

/**
 * <p>Use the Account Access Runtime API to list the roles that you can access and retrieve temporary Amazon Web Services credentials for those roles. You authenticate with a bearer token from IAM Identity Center. Each request is scoped to a tenant.</p>
 * @public
 */
export class AccountAccessRuntime extends AccountAccessRuntimeClient implements AccountAccessRuntime {}
createAggregatedClient(commands, AccountAccessRuntime, { paginators });
