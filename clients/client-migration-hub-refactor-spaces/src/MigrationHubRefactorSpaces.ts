// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import { GetRouteCommand, GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListEnvironmentVpcsCommand,
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput,
} from "./commands/ListEnvironmentVpcsCommand";
import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "./commands/ListRoutesCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateRouteCommand, UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  MigrationHubRefactorSpacesClient,
  MigrationHubRefactorSpacesClientConfig,
} from "./MigrationHubRefactorSpacesClient";

const commands = {
  CreateApplicationCommand,
  CreateEnvironmentCommand,
  CreateRouteCommand,
  CreateServiceCommand,
  DeleteApplicationCommand,
  DeleteEnvironmentCommand,
  DeleteResourcePolicyCommand,
  DeleteRouteCommand,
  DeleteServiceCommand,
  GetApplicationCommand,
  GetEnvironmentCommand,
  GetResourcePolicyCommand,
  GetRouteCommand,
  GetServiceCommand,
  ListApplicationsCommand,
  ListEnvironmentsCommand,
  ListEnvironmentVpcsCommand,
  ListRoutesCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRouteCommand,
};

export interface MigrationHubRefactorSpaces {
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
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
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
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
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
   * @see {@link GetRouteCommand}
   */
  getRoute(args: GetRouteCommandInput, options?: __HttpHandlerOptions): Promise<GetRouteCommandOutput>;
  getRoute(args: GetRouteCommandInput, cb: (err: any, data?: GetRouteCommandOutput) => void): void;
  getRoute(
    args: GetRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
  getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
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
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentVpcsCommand}
   */
  listEnvironmentVpcs(
    args: ListEnvironmentVpcsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentVpcsCommandOutput>;
  listEnvironmentVpcs(
    args: ListEnvironmentVpcsCommandInput,
    cb: (err: any, data?: ListEnvironmentVpcsCommandOutput) => void
  ): void;
  listEnvironmentVpcs(
    args: ListEnvironmentVpcsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentVpcsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutesCommand}
   */
  listRoutes(args: ListRoutesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoutesCommandOutput>;
  listRoutes(args: ListRoutesCommandInput, cb: (err: any, data?: ListRoutesCommandOutput) => void): void;
  listRoutes(
    args: ListRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
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
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouteCommand}
   */
  updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
  updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
  updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Web Services Migration Hub Refactor Spaces</fullname>
 *          <p>This API reference provides descriptions, syntax, and other details about each of the
 *       actions and data types for Amazon Web Services Migration Hub Refactor Spaces (Refactor Spaces). The topic for each action shows the API
 *       request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>To share Refactor Spaces environments with other Amazon Web Services accounts or with Organizations
 *       and their OUs, use Resource Access Manager's <code>CreateResourceShare</code> API. See <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> in the <i>Amazon Web Services RAM API Reference</i>.</p>
 */
export class MigrationHubRefactorSpaces
  extends MigrationHubRefactorSpacesClient
  implements MigrationHubRefactorSpaces {}
createAggregatedClient(commands, MigrationHubRefactorSpaces);
