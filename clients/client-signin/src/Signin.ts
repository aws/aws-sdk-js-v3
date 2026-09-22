// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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
import { SigninClient } from "./SigninClient";

const commands = {
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenWithIAMCommand,
  DeleteConsoleAuthorizationConfigurationCommand,
  DeleteResourcePermissionStatementCommand,
  GetConsoleAuthorizationConfigurationCommand,
  GetResourcePolicyCommand,
  IntrospectOAuth2TokenWithIAMCommand,
  ListResourcePermissionStatementsCommand,
  PutConsoleAuthorizationConfigurationCommand,
  PutResourcePermissionStatementCommand,
  RevokeOAuth2TokenWithIAMCommand,
};
const paginators = {
  paginateListResourcePermissionStatements,
};

/**
 * @public
 */
export interface SigninRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Signin {
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
}

/**
 * AWS Sign-In manages authentication for AWS services. This service provides
 * secure authentication flows for accessing AWS resources from the console and developer tools.
 * @public
 */
export class Signin extends SigninClient implements Signin {}
createAggregatedClient(commands, Signin, { paginators });
