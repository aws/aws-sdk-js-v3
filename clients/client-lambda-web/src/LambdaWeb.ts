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
  type CreateWebFunctionCommandInput,
  type CreateWebFunctionCommandOutput,
  CreateWebFunctionCommand,
} from "./commands/CreateWebFunctionCommand";
import {
  type CreateWebFunctionEndpointCommandInput,
  type CreateWebFunctionEndpointCommandOutput,
  CreateWebFunctionEndpointCommand,
} from "./commands/CreateWebFunctionEndpointCommand";
import {
  type CreateWebFunctionRevisionCommandInput,
  type CreateWebFunctionRevisionCommandOutput,
  CreateWebFunctionRevisionCommand,
} from "./commands/CreateWebFunctionRevisionCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteWebFunctionCommandInput,
  type DeleteWebFunctionCommandOutput,
  DeleteWebFunctionCommand,
} from "./commands/DeleteWebFunctionCommand";
import {
  type DeleteWebFunctionEndpointCommandInput,
  type DeleteWebFunctionEndpointCommandOutput,
  DeleteWebFunctionEndpointCommand,
} from "./commands/DeleteWebFunctionEndpointCommand";
import {
  type DeleteWebFunctionRevisionCommandInput,
  type DeleteWebFunctionRevisionCommandOutput,
  DeleteWebFunctionRevisionCommand,
} from "./commands/DeleteWebFunctionRevisionCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetWebAccountSettingsCommandInput,
  type GetWebAccountSettingsCommandOutput,
  GetWebAccountSettingsCommand,
} from "./commands/GetWebAccountSettingsCommand";
import {
  type GetWebFunctionCommandInput,
  type GetWebFunctionCommandOutput,
  GetWebFunctionCommand,
} from "./commands/GetWebFunctionCommand";
import {
  type GetWebFunctionEndpointCommandInput,
  type GetWebFunctionEndpointCommandOutput,
  GetWebFunctionEndpointCommand,
} from "./commands/GetWebFunctionEndpointCommand";
import {
  type GetWebFunctionRevisionCommandInput,
  type GetWebFunctionRevisionCommandOutput,
  GetWebFunctionRevisionCommand,
} from "./commands/GetWebFunctionRevisionCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ListWebFunctionEndpointsCommandInput,
  type ListWebFunctionEndpointsCommandOutput,
  ListWebFunctionEndpointsCommand,
} from "./commands/ListWebFunctionEndpointsCommand";
import {
  type ListWebFunctionRevisionsCommandInput,
  type ListWebFunctionRevisionsCommandOutput,
  ListWebFunctionRevisionsCommand,
} from "./commands/ListWebFunctionRevisionsCommand";
import {
  type ListWebFunctionsCommandInput,
  type ListWebFunctionsCommandOutput,
  ListWebFunctionsCommand,
} from "./commands/ListWebFunctionsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
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
  type UpdateWebFunctionEndpointCommandInput,
  type UpdateWebFunctionEndpointCommandOutput,
  UpdateWebFunctionEndpointCommand,
} from "./commands/UpdateWebFunctionEndpointCommand";
import { LambdaWebClient } from "./LambdaWebClient";
import type { ResourceNotFoundException } from "./models/errors";
import type { LambdaWebServiceException } from "./models/LambdaWebServiceException";
import { paginateListWebFunctionEndpoints } from "./pagination/ListWebFunctionEndpointsPaginator";
import { paginateListWebFunctionRevisions } from "./pagination/ListWebFunctionRevisionsPaginator";
import { paginateListWebFunctions } from "./pagination/ListWebFunctionsPaginator";
import { waitUntilWebFunctionActive } from "./waiters/waitForWebFunctionActive";
import { waitUntilWebFunctionDeleted } from "./waiters/waitForWebFunctionDeleted";
import { waitUntilWebFunctionEndpointActive } from "./waiters/waitForWebFunctionEndpointActive";
import { waitUntilWebFunctionEndpointDeleted } from "./waiters/waitForWebFunctionEndpointDeleted";
import { waitUntilWebFunctionEndpointUpdated } from "./waiters/waitForWebFunctionEndpointUpdated";
import { waitUntilWebFunctionRevisionActive } from "./waiters/waitForWebFunctionRevisionActive";

const commands = {
  CreateWebFunctionCommand,
  CreateWebFunctionEndpointCommand,
  CreateWebFunctionRevisionCommand,
  DeleteResourcePolicyCommand,
  DeleteWebFunctionCommand,
  DeleteWebFunctionEndpointCommand,
  DeleteWebFunctionRevisionCommand,
  GetResourcePolicyCommand,
  GetWebAccountSettingsCommand,
  GetWebFunctionCommand,
  GetWebFunctionEndpointCommand,
  GetWebFunctionRevisionCommand,
  ListTagsCommand,
  ListWebFunctionEndpointsCommand,
  ListWebFunctionRevisionsCommand,
  ListWebFunctionsCommand,
  PutResourcePolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateWebFunctionEndpointCommand,
};
const paginators = {
  paginateListWebFunctionEndpoints,
  paginateListWebFunctionRevisions,
  paginateListWebFunctions,
};
const waiters = {
  waitUntilWebFunctionActive,
  waitUntilWebFunctionDeleted,
  waitUntilWebFunctionEndpointActive,
  waitUntilWebFunctionEndpointDeleted,
  waitUntilWebFunctionEndpointUpdated,
  waitUntilWebFunctionRevisionActive,
};

/**
 * @public
 */
export interface LambdaWebRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LambdaWeb {
  /**
   * @see {@link CreateWebFunctionCommand}
   */
  createWebFunction(
    args: CreateWebFunctionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<CreateWebFunctionCommandOutput>;
  createWebFunction(
    args: CreateWebFunctionCommandInput,
    cb: (err: any, data?: CreateWebFunctionCommandOutput) => void
  ): void;
  createWebFunction(
    args: CreateWebFunctionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: CreateWebFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebFunctionEndpointCommand}
   */
  createWebFunctionEndpoint(
    args: CreateWebFunctionEndpointCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<CreateWebFunctionEndpointCommandOutput>;
  createWebFunctionEndpoint(
    args: CreateWebFunctionEndpointCommandInput,
    cb: (err: any, data?: CreateWebFunctionEndpointCommandOutput) => void
  ): void;
  createWebFunctionEndpoint(
    args: CreateWebFunctionEndpointCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: CreateWebFunctionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebFunctionRevisionCommand}
   */
  createWebFunctionRevision(
    args: CreateWebFunctionRevisionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<CreateWebFunctionRevisionCommandOutput>;
  createWebFunctionRevision(
    args: CreateWebFunctionRevisionCommandInput,
    cb: (err: any, data?: CreateWebFunctionRevisionCommandOutput) => void
  ): void;
  createWebFunctionRevision(
    args: CreateWebFunctionRevisionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: CreateWebFunctionRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebFunctionCommand}
   */
  deleteWebFunction(
    args: DeleteWebFunctionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<DeleteWebFunctionCommandOutput>;
  deleteWebFunction(
    args: DeleteWebFunctionCommandInput,
    cb: (err: any, data?: DeleteWebFunctionCommandOutput) => void
  ): void;
  deleteWebFunction(
    args: DeleteWebFunctionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: DeleteWebFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebFunctionEndpointCommand}
   */
  deleteWebFunctionEndpoint(
    args: DeleteWebFunctionEndpointCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<DeleteWebFunctionEndpointCommandOutput>;
  deleteWebFunctionEndpoint(
    args: DeleteWebFunctionEndpointCommandInput,
    cb: (err: any, data?: DeleteWebFunctionEndpointCommandOutput) => void
  ): void;
  deleteWebFunctionEndpoint(
    args: DeleteWebFunctionEndpointCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: DeleteWebFunctionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebFunctionRevisionCommand}
   */
  deleteWebFunctionRevision(
    args: DeleteWebFunctionRevisionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<DeleteWebFunctionRevisionCommandOutput>;
  deleteWebFunctionRevision(
    args: DeleteWebFunctionRevisionCommandInput,
    cb: (err: any, data?: DeleteWebFunctionRevisionCommandOutput) => void
  ): void;
  deleteWebFunctionRevision(
    args: DeleteWebFunctionRevisionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: DeleteWebFunctionRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebAccountSettingsCommand}
   */
  getWebAccountSettings(): Promise<GetWebAccountSettingsCommandOutput>;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetWebAccountSettingsCommandOutput>;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    cb: (err: any, data?: GetWebAccountSettingsCommandOutput) => void
  ): void;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetWebAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebFunctionCommand}
   */
  getWebFunction(
    args: GetWebFunctionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetWebFunctionCommandOutput>;
  getWebFunction(
    args: GetWebFunctionCommandInput,
    cb: (err: any, data?: GetWebFunctionCommandOutput) => void
  ): void;
  getWebFunction(
    args: GetWebFunctionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetWebFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebFunctionEndpointCommand}
   */
  getWebFunctionEndpoint(
    args: GetWebFunctionEndpointCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetWebFunctionEndpointCommandOutput>;
  getWebFunctionEndpoint(
    args: GetWebFunctionEndpointCommandInput,
    cb: (err: any, data?: GetWebFunctionEndpointCommandOutput) => void
  ): void;
  getWebFunctionEndpoint(
    args: GetWebFunctionEndpointCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetWebFunctionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebFunctionRevisionCommand}
   */
  getWebFunctionRevision(
    args: GetWebFunctionRevisionCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetWebFunctionRevisionCommandOutput>;
  getWebFunctionRevision(
    args: GetWebFunctionRevisionCommandInput,
    cb: (err: any, data?: GetWebFunctionRevisionCommandOutput) => void
  ): void;
  getWebFunctionRevision(
    args: GetWebFunctionRevisionCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetWebFunctionRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebFunctionEndpointsCommand}
   */
  listWebFunctionEndpoints(
    args: ListWebFunctionEndpointsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<ListWebFunctionEndpointsCommandOutput>;
  listWebFunctionEndpoints(
    args: ListWebFunctionEndpointsCommandInput,
    cb: (err: any, data?: ListWebFunctionEndpointsCommandOutput) => void
  ): void;
  listWebFunctionEndpoints(
    args: ListWebFunctionEndpointsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: ListWebFunctionEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebFunctionRevisionsCommand}
   */
  listWebFunctionRevisions(
    args: ListWebFunctionRevisionsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<ListWebFunctionRevisionsCommandOutput>;
  listWebFunctionRevisions(
    args: ListWebFunctionRevisionsCommandInput,
    cb: (err: any, data?: ListWebFunctionRevisionsCommandOutput) => void
  ): void;
  listWebFunctionRevisions(
    args: ListWebFunctionRevisionsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: ListWebFunctionRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebFunctionsCommand}
   */
  listWebFunctions(): Promise<ListWebFunctionsCommandOutput>;
  listWebFunctions(
    args: ListWebFunctionsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<ListWebFunctionsCommandOutput>;
  listWebFunctions(
    args: ListWebFunctionsCommandInput,
    cb: (err: any, data?: ListWebFunctionsCommandOutput) => void
  ): void;
  listWebFunctions(
    args: ListWebFunctionsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: ListWebFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebFunctionEndpointCommand}
   */
  updateWebFunctionEndpoint(
    args: UpdateWebFunctionEndpointCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<UpdateWebFunctionEndpointCommandOutput>;
  updateWebFunctionEndpoint(
    args: UpdateWebFunctionEndpointCommandInput,
    cb: (err: any, data?: UpdateWebFunctionEndpointCommandOutput) => void
  ): void;
  updateWebFunctionEndpoint(
    args: UpdateWebFunctionEndpointCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: UpdateWebFunctionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebFunctionEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWebFunctionEndpointsCommandOutput}.
   */
  paginateListWebFunctionEndpoints(
    args: ListWebFunctionEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWebFunctionEndpointsCommandOutput>;

  /**
   * @see {@link ListWebFunctionRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWebFunctionRevisionsCommandOutput}.
   */
  paginateListWebFunctionRevisions(
    args: ListWebFunctionRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWebFunctionRevisionsCommandOutput>;

  /**
   * @see {@link ListWebFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWebFunctionsCommandOutput}.
   */
  paginateListWebFunctions(
    args?: ListWebFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWebFunctionsCommandOutput>;

  /**
   * @see {@link GetWebFunctionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionActive(
    args: GetWebFunctionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<GetWebFunctionCommandOutput>>;

  /**
   * @see {@link GetWebFunctionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionDeleted(
    args: GetWebFunctionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link GetWebFunctionEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionEndpointActive(
    args: GetWebFunctionEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<GetWebFunctionEndpointCommandOutput>>;

  /**
   * @see {@link GetWebFunctionEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionEndpointDeleted(
    args: GetWebFunctionEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link GetWebFunctionEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionEndpointUpdated(
    args: GetWebFunctionEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<GetWebFunctionEndpointCommandOutput>>;

  /**
   * @see {@link GetWebFunctionRevisionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWebFunctionRevisionActive(
    args: GetWebFunctionRevisionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaWeb>, "client">
  ): Promise<WaiterResult<GetWebFunctionRevisionCommandOutput>>;
}

/**
 * <p>AWS Lambda Web Functions let you run web applications and APIs as HTTP servers on Lambda. A web function has one or more immutable revisions (code and configuration) and one or more endpoints that expose it over HTTPS.</p>
 * @public
 */
export class LambdaWeb extends LambdaWebClient implements LambdaWeb {}
createAggregatedClient(commands, LambdaWeb, { paginators, waiters });
