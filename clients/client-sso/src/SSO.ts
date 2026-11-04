// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetRoleCredentialsCommandInput,
  type GetRoleCredentialsCommandOutput,
  GetRoleCredentialsCommand,
} from "./commands/GetRoleCredentialsCommand";
import {
  type ListAccountRolesCommandInput,
  type ListAccountRolesCommandOutput,
  ListAccountRolesCommand,
} from "./commands/ListAccountRolesCommand";
import {
  type ListAccountsCommandInput,
  type ListAccountsCommandOutput,
  ListAccountsCommand,
} from "./commands/ListAccountsCommand";
import { type LogoutCommandInput, type LogoutCommandOutput, LogoutCommand } from "./commands/LogoutCommand";
import { paginateListAccountRoles } from "./pagination/ListAccountRolesPaginator";
import { paginateListAccounts } from "./pagination/ListAccountsPaginator";
import { SSOClient } from "./SSOClient";

const commands = {
  GetRoleCredentialsCommand,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand,
};
const paginators = {
  paginateListAccountRoles,
  paginateListAccounts,
};

/**
 * @public
 */
export interface SSORequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SSO {
  /**
   * @see {@link GetRoleCredentialsCommand}
   */
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options?: SSORequestOptions
  ): Promise<GetRoleCredentialsCommandOutput>;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options: SSORequestOptions,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountRolesCommand}
   */
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    options?: SSORequestOptions
  ): Promise<ListAccountRolesCommandOutput>;
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    options: SSORequestOptions,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(
    args: ListAccountsCommandInput,
    options?: SSORequestOptions
  ): Promise<ListAccountsCommandOutput>;
  listAccounts(
    args: ListAccountsCommandInput,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: SSORequestOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link LogoutCommand}
   */
  logout(
    args: LogoutCommandInput,
    options?: SSORequestOptions
  ): Promise<LogoutCommandOutput>;
  logout(
    args: LogoutCommandInput,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;
  logout(
    args: LogoutCommandInput,
    options: SSORequestOptions,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountRolesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountRolesCommandOutput}.
   */
  paginateListAccountRoles(
    args: ListAccountRolesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountRolesCommandOutput>;

  /**
   * @see {@link ListAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountsCommandOutput}.
   */
  paginateListAccounts(
    args: ListAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountsCommandOutput>;
}

/**
 * AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles assigned to them and get federated into the application.
 *
 * > **Note:** Although AWS Single Sign-On was renamed, the `sso` and `identitystore` API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see [IAM Identity Center rename](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed).
 *
 * This reference guide describes the IAM Identity Center Portal operations that you can call programatically and includes detailed information on data types and errors.
 *
 * > **Note:** AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see [Tools for Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * @public
 */
export class SSO extends SSOClient implements SSO {}
createAggregatedClient(commands, SSO, { paginators });
