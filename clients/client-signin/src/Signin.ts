// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchRevokeSessionsCommandInput,
  type BatchRevokeSessionsCommandOutput,
  BatchRevokeSessionsCommand,
} from "./commands/BatchRevokeSessionsCommand";
import {
  type CreateBearerTokenCommandInput,
  type CreateBearerTokenCommandOutput,
  CreateBearerTokenCommand,
} from "./commands/CreateBearerTokenCommand";
import {
  type CreateOAuth2TokenCommandInput,
  type CreateOAuth2TokenCommandOutput,
  CreateOAuth2TokenCommand,
} from "./commands/CreateOAuth2TokenCommand";
import {
  type CreateOAuth2TokenWithIAMCommandInput,
  type CreateOAuth2TokenWithIAMCommandOutput,
  CreateOAuth2TokenWithIAMCommand,
} from "./commands/CreateOAuth2TokenWithIAMCommand";
import {
  type CreateOAuth2TokenWithTokenExchangeCommandInput,
  type CreateOAuth2TokenWithTokenExchangeCommandOutput,
  CreateOAuth2TokenWithTokenExchangeCommand,
} from "./commands/CreateOAuth2TokenWithTokenExchangeCommand";
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
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type IntrospectOAuth2TokenWithIAMCommandInput,
  type IntrospectOAuth2TokenWithIAMCommandOutput,
  IntrospectOAuth2TokenWithIAMCommand,
} from "./commands/IntrospectOAuth2TokenWithIAMCommand";
import {
  type ListResourcePermissionStatementsCommandInput,
  type ListResourcePermissionStatementsCommandOutput,
  ListResourcePermissionStatementsCommand,
} from "./commands/ListResourcePermissionStatementsCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
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
import {
  type RevokeOAuth2TokenWithIAMCommandInput,
  type RevokeOAuth2TokenWithIAMCommandOutput,
  RevokeOAuth2TokenWithIAMCommand,
} from "./commands/RevokeOAuth2TokenWithIAMCommand";
import { paginateListResourcePermissionStatements } from "./pagination/ListResourcePermissionStatementsPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { SigninClient } from "./SigninClient";

const commands = {
  BatchRevokeSessionsCommand,
  CreateBearerTokenCommand,
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenWithIAMCommand,
  CreateOAuth2TokenWithTokenExchangeCommand,
  DeleteConsoleAuthorizationConfigurationCommand,
  DeleteResourcePermissionStatementCommand,
  GetConsoleAuthorizationConfigurationCommand,
  GetResourcePolicyCommand,
  GetSessionCommand,
  IntrospectOAuth2TokenWithIAMCommand,
  ListResourcePermissionStatementsCommand,
  ListSessionsCommand,
  PutConsoleAuthorizationConfigurationCommand,
  PutResourcePermissionStatementCommand,
  RevokeOAuth2TokenWithIAMCommand,
};
const paginators = {
  paginateListResourcePermissionStatements,
  paginateListSessions,
};

/**
 * @public
 */
export interface SigninRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Signin {
  /**
   * @see {@link BatchRevokeSessionsCommand}
   */
  batchRevokeSessions(
    args: BatchRevokeSessionsCommandInput,
    options?: SigninRequestOptions
  ): Promise<BatchRevokeSessionsCommandOutput>;
  batchRevokeSessions(
    args: BatchRevokeSessionsCommandInput,
    cb: (err: any, data?: BatchRevokeSessionsCommandOutput) => void
  ): void;
  batchRevokeSessions(
    args: BatchRevokeSessionsCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: BatchRevokeSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBearerTokenCommand}
   */
  createBearerToken(
    args: CreateBearerTokenCommandInput,
    options?: SigninRequestOptions
  ): Promise<CreateBearerTokenCommandOutput>;
  createBearerToken(
    args: CreateBearerTokenCommandInput,
    cb: (err: any, data?: CreateBearerTokenCommandOutput) => void
  ): void;
  createBearerToken(
    args: CreateBearerTokenCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: CreateBearerTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOAuth2TokenCommand}
   */
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options?: SigninRequestOptions
  ): Promise<CreateOAuth2TokenCommandOutput>;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOAuth2TokenWithIAMCommand}
   */
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    options?: SigninRequestOptions
  ): Promise<CreateOAuth2TokenWithIAMCommandOutput>;
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenWithIAMCommandOutput) => void
  ): void;
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: CreateOAuth2TokenWithIAMCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOAuth2TokenWithTokenExchangeCommand}
   */
  createOAuth2TokenWithTokenExchange(
    args: CreateOAuth2TokenWithTokenExchangeCommandInput,
    options?: SigninRequestOptions
  ): Promise<CreateOAuth2TokenWithTokenExchangeCommandOutput>;
  createOAuth2TokenWithTokenExchange(
    args: CreateOAuth2TokenWithTokenExchangeCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenWithTokenExchangeCommandOutput) => void
  ): void;
  createOAuth2TokenWithTokenExchange(
    args: CreateOAuth2TokenWithTokenExchangeCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: CreateOAuth2TokenWithTokenExchangeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConsoleAuthorizationConfigurationCommand}
   */
  deleteConsoleAuthorizationConfiguration(): Promise<DeleteConsoleAuthorizationConfigurationCommandOutput>;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    options?: SigninRequestOptions
  ): Promise<DeleteConsoleAuthorizationConfigurationCommandOutput>;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: DeleteConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  deleteConsoleAuthorizationConfiguration(
    args: DeleteConsoleAuthorizationConfigurationCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: DeleteConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePermissionStatementCommand}
   */
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    options?: SigninRequestOptions
  ): Promise<DeleteResourcePermissionStatementCommandOutput>;
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    cb: (err: any, data?: DeleteResourcePermissionStatementCommandOutput) => void
  ): void;
  deleteResourcePermissionStatement(
    args: DeleteResourcePermissionStatementCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: DeleteResourcePermissionStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsoleAuthorizationConfigurationCommand}
   */
  getConsoleAuthorizationConfiguration(): Promise<GetConsoleAuthorizationConfigurationCommandOutput>;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    options?: SigninRequestOptions
  ): Promise<GetConsoleAuthorizationConfigurationCommandOutput>;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: GetConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  getConsoleAuthorizationConfiguration(
    args: GetConsoleAuthorizationConfigurationCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: GetConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: SigninRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: SigninRequestOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link IntrospectOAuth2TokenWithIAMCommand}
   */
  introspectOAuth2TokenWithIAM(
    args: IntrospectOAuth2TokenWithIAMCommandInput,
    options?: SigninRequestOptions
  ): Promise<IntrospectOAuth2TokenWithIAMCommandOutput>;
  introspectOAuth2TokenWithIAM(
    args: IntrospectOAuth2TokenWithIAMCommandInput,
    cb: (err: any, data?: IntrospectOAuth2TokenWithIAMCommandOutput) => void
  ): void;
  introspectOAuth2TokenWithIAM(
    args: IntrospectOAuth2TokenWithIAMCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: IntrospectOAuth2TokenWithIAMCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePermissionStatementsCommand}
   */
  listResourcePermissionStatements(): Promise<ListResourcePermissionStatementsCommandOutput>;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    options?: SigninRequestOptions
  ): Promise<ListResourcePermissionStatementsCommandOutput>;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    cb: (err: any, data?: ListResourcePermissionStatementsCommandOutput) => void
  ): void;
  listResourcePermissionStatements(
    args: ListResourcePermissionStatementsCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: ListResourcePermissionStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    options?: SigninRequestOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConsoleAuthorizationConfigurationCommand}
   */
  putConsoleAuthorizationConfiguration(): Promise<PutConsoleAuthorizationConfigurationCommandOutput>;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    options?: SigninRequestOptions
  ): Promise<PutConsoleAuthorizationConfigurationCommandOutput>;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    cb: (err: any, data?: PutConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;
  putConsoleAuthorizationConfiguration(
    args: PutConsoleAuthorizationConfigurationCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: PutConsoleAuthorizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePermissionStatementCommand}
   */
  putResourcePermissionStatement(): Promise<PutResourcePermissionStatementCommandOutput>;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    options?: SigninRequestOptions
  ): Promise<PutResourcePermissionStatementCommandOutput>;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    cb: (err: any, data?: PutResourcePermissionStatementCommandOutput) => void
  ): void;
  putResourcePermissionStatement(
    args: PutResourcePermissionStatementCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: PutResourcePermissionStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeOAuth2TokenWithIAMCommand}
   */
  revokeOAuth2TokenWithIAM(
    args: RevokeOAuth2TokenWithIAMCommandInput,
    options?: SigninRequestOptions
  ): Promise<RevokeOAuth2TokenWithIAMCommandOutput>;
  revokeOAuth2TokenWithIAM(
    args: RevokeOAuth2TokenWithIAMCommandInput,
    cb: (err: any, data?: RevokeOAuth2TokenWithIAMCommandOutput) => void
  ): void;
  revokeOAuth2TokenWithIAM(
    args: RevokeOAuth2TokenWithIAMCommandInput,
    options: SigninRequestOptions,
    cb: (err: any, data?: RevokeOAuth2TokenWithIAMCommandOutput) => void
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

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args?: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;
}

/**
 * AWS Sign-In manages authentication for AWS services. It implements OAuth 2.0, providing secure token exchange and refresh capabilities.
 * @public
 */
export class Signin extends SigninClient implements Signin {}
createAggregatedClient(commands, Signin, { paginators });
