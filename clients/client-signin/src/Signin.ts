// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateOAuth2TokenCommandInput,
  type CreateOAuth2TokenCommandOutput,
  CreateOAuth2TokenCommand,
} from "./commands/CreateOAuth2TokenCommand";
import {
  type DeleteConsoleAuthorizationConfigurationCommandInput,
  type DeleteConsoleAuthorizationConfigurationCommandOutput,
  DeleteConsoleAuthorizationConfigurationCommand,
} from "./commands/DeleteConsoleAuthorizationConfigurationCommand";
import {
  type DeleteResourcePermissionStatementCommandInput,
  type DeleteResourcePermissionStatementCommandOutput,
  DeleteResourcePermissionStatementCommand,
} from "./commands/DeleteResourcePermissionStatementCommand";
import {
  type GetConsoleAuthorizationConfigurationCommandInput,
  type GetConsoleAuthorizationConfigurationCommandOutput,
  GetConsoleAuthorizationConfigurationCommand,
} from "./commands/GetConsoleAuthorizationConfigurationCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListResourcePermissionStatementsCommandInput,
  type ListResourcePermissionStatementsCommandOutput,
  ListResourcePermissionStatementsCommand,
} from "./commands/ListResourcePermissionStatementsCommand";
import {
  type PutConsoleAuthorizationConfigurationCommandInput,
  type PutConsoleAuthorizationConfigurationCommandOutput,
  PutConsoleAuthorizationConfigurationCommand,
} from "./commands/PutConsoleAuthorizationConfigurationCommand";
import {
  type PutResourcePermissionStatementCommandInput,
  type PutResourcePermissionStatementCommandOutput,
  PutResourcePermissionStatementCommand,
} from "./commands/PutResourcePermissionStatementCommand";
import { paginateListResourcePermissionStatements } from "./pagination/ListResourcePermissionStatementsPaginator";
import { SigninClient } from "./SigninClient";

const commands = {
  CreateOAuth2TokenCommand,
  DeleteConsoleAuthorizationConfigurationCommand,
  DeleteResourcePermissionStatementCommand,
  GetConsoleAuthorizationConfigurationCommand,
  GetResourcePolicyCommand,
  ListResourcePermissionStatementsCommand,
  PutConsoleAuthorizationConfigurationCommand,
  PutResourcePermissionStatementCommand,
};
const paginators = {
  paginateListResourcePermissionStatements,
};

export interface Signin {
  /**
   * @see {@link CreateOAuth2TokenCommand}
   */
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOAuth2TokenCommandOutput>;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConsoleAuthorizationConfigurationCommand}
   */
  deleteConsoleAuthorizationConfiguration(): Promise<DeleteConsoleAuthorizationConfigurationCommandOutput>;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConsoleAuthorizationConfigurationCommandOutput>;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: DeleteConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePermissionStatementCommand}
   */
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePermissionStatementCommandOutput>;
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    cb: (err: any, data?: DeleteResourcePermissionStatementCommandOutput) => void
  ): void;
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePermissionStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsoleAuthorizationConfigurationCommand}
   */
  getConsoleAuthorizationConfiguration(): Promise<GetConsoleAuthorizationConfigurationCommandOutput>;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsoleAuthorizationConfigurationCommandOutput>;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: GetConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePermissionStatementsCommand}
   */
  listResourcePermissionStatements(): Promise<ListResourcePermissionStatementsCommandOutput>;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcePermissionStatementsCommandOutput>;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    cb: (err: any, data?: ListResourcePermissionStatementsCommandOutput) => void
  ): void;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcePermissionStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConsoleAuthorizationConfigurationCommand}
   */
  putConsoleAuthorizationConfiguration(): Promise<PutConsoleAuthorizationConfigurationCommandOutput>;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConsoleAuthorizationConfigurationCommandOutput>;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: PutConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePermissionStatementCommand}
   */
  putResourcePermissionStatement(): Promise<PutResourcePermissionStatementCommandOutput>;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePermissionStatementCommandOutput>;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    cb: (err: any, data?: PutResourcePermissionStatementCommandOutput) => void
  ): void;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePermissionStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePermissionStatementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcePermissionStatementsCommandOutput}.
   */
  paginateListResourcePermissionStatements(
    args?: ListResourcePermissionStatementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcePermissionStatementsCommandOutput>;
}

/**
 * AWS Sign-In manages authentication for AWS services. This service provides
 * secure authentication flows for accessing AWS resources from the console and developer tools.
 * @public
 */
export class Signin extends SigninClient implements Signin {}
createAggregatedClient(commands, Signin, { paginators });
