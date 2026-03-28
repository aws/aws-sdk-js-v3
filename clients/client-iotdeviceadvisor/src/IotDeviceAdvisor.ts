// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateSuiteDefinitionCommandInput,
  type CreateSuiteDefinitionCommandOutput,
  CreateSuiteDefinitionCommand,
} from "./commands/CreateSuiteDefinitionCommand";
import {
  type DeleteSuiteDefinitionCommandInput,
  type DeleteSuiteDefinitionCommandOutput,
  DeleteSuiteDefinitionCommand,
} from "./commands/DeleteSuiteDefinitionCommand";
import {
  type GetEndpointCommandInput,
  type GetEndpointCommandOutput,
  GetEndpointCommand,
} from "./commands/GetEndpointCommand";
import {
  type GetSuiteDefinitionCommandInput,
  type GetSuiteDefinitionCommandOutput,
  GetSuiteDefinitionCommand,
} from "./commands/GetSuiteDefinitionCommand";
import {
  type GetSuiteRunCommandInput,
  type GetSuiteRunCommandOutput,
  GetSuiteRunCommand,
} from "./commands/GetSuiteRunCommand";
import {
  type GetSuiteRunReportCommandInput,
  type GetSuiteRunReportCommandOutput,
  GetSuiteRunReportCommand,
} from "./commands/GetSuiteRunReportCommand";
import {
  type ListSuiteDefinitionsCommandInput,
  type ListSuiteDefinitionsCommandOutput,
  ListSuiteDefinitionsCommand,
} from "./commands/ListSuiteDefinitionsCommand";
import {
  type ListSuiteRunsCommandInput,
  type ListSuiteRunsCommandOutput,
  ListSuiteRunsCommand,
} from "./commands/ListSuiteRunsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartSuiteRunCommandInput,
  type StartSuiteRunCommandOutput,
  StartSuiteRunCommand,
} from "./commands/StartSuiteRunCommand";
import {
  type StopSuiteRunCommandInput,
  type StopSuiteRunCommandOutput,
  StopSuiteRunCommand,
} from "./commands/StopSuiteRunCommand";
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
  type UpdateSuiteDefinitionCommandInput,
  type UpdateSuiteDefinitionCommandOutput,
  UpdateSuiteDefinitionCommand,
} from "./commands/UpdateSuiteDefinitionCommand";
import { IotDeviceAdvisorClient } from "./IotDeviceAdvisorClient";
import { paginateListSuiteDefinitions } from "./pagination/ListSuiteDefinitionsPaginator";
import { paginateListSuiteRuns } from "./pagination/ListSuiteRunsPaginator";

const commands = {
  CreateSuiteDefinitionCommand,
  DeleteSuiteDefinitionCommand,
  GetEndpointCommand,
  GetSuiteDefinitionCommand,
  GetSuiteRunCommand,
  GetSuiteRunReportCommand,
  ListSuiteDefinitionsCommand,
  ListSuiteRunsCommand,
  ListTagsForResourceCommand,
  StartSuiteRunCommand,
  StopSuiteRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSuiteDefinitionCommand,
};
const paginators = {
  paginateListSuiteDefinitions,
  paginateListSuiteRuns,
};

export interface IotDeviceAdvisor {
  /**
   * @see {@link CreateSuiteDefinitionCommand}
   */
  createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSuiteDefinitionCommandOutput>;
  createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void
  ): void;
  createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSuiteDefinitionCommand}
   */
  deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuiteDefinitionCommandOutput>;
  deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void
  ): void;
  deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointCommand}
   */
  getEndpoint(): Promise<GetEndpointCommandOutput>;
  getEndpoint(
    args: GetEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEndpointCommandOutput>;
  getEndpoint(
    args: GetEndpointCommandInput,
    cb: (err: any, data?: GetEndpointCommandOutput) => void
  ): void;
  getEndpoint(
    args: GetEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuiteDefinitionCommand}
   */
  getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteDefinitionCommandOutput>;
  getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void
  ): void;
  getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuiteRunCommand}
   */
  getSuiteRun(
    args: GetSuiteRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteRunCommandOutput>;
  getSuiteRun(
    args: GetSuiteRunCommandInput,
    cb: (err: any, data?: GetSuiteRunCommandOutput) => void
  ): void;
  getSuiteRun(
    args: GetSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuiteRunReportCommand}
   */
  getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteRunReportCommandOutput>;
  getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void
  ): void;
  getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuiteDefinitionsCommand}
   */
  listSuiteDefinitions(): Promise<ListSuiteDefinitionsCommandOutput>;
  listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuiteDefinitionsCommandOutput>;
  listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void
  ): void;
  listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuiteRunsCommand}
   */
  listSuiteRuns(): Promise<ListSuiteRunsCommandOutput>;
  listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuiteRunsCommandOutput>;
  listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    cb: (err: any, data?: ListSuiteRunsCommandOutput) => void
  ): void;
  listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuiteRunsCommandOutput) => void
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
   * @see {@link StartSuiteRunCommand}
   */
  startSuiteRun(
    args: StartSuiteRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSuiteRunCommandOutput>;
  startSuiteRun(
    args: StartSuiteRunCommandInput,
    cb: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): void;
  startSuiteRun(
    args: StartSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSuiteRunCommand}
   */
  stopSuiteRun(
    args: StopSuiteRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSuiteRunCommandOutput>;
  stopSuiteRun(
    args: StopSuiteRunCommandInput,
    cb: (err: any, data?: StopSuiteRunCommandOutput) => void
  ): void;
  stopSuiteRun(
    args: StopSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSuiteRunCommandOutput) => void
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
   * @see {@link UpdateSuiteDefinitionCommand}
   */
  updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSuiteDefinitionCommandOutput>;
  updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void
  ): void;
  updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuiteDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSuiteDefinitionsCommandOutput}.
   */
  paginateListSuiteDefinitions(
    args?: ListSuiteDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSuiteDefinitionsCommandOutput>;

  /**
   * @see {@link ListSuiteRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSuiteRunsCommandOutput}.
   */
  paginateListSuiteRuns(
    args?: ListSuiteRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSuiteRunsCommandOutput>;
}

/**
 * <p>Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT
 *             devices during device software development. Device Advisor provides pre-built tests that you
 *             can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core
 *             before deploying devices to production. By using Device Advisor, you can confirm that your
 *             devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable,
 *             receive software updates from IoT Device Management. You can also download signed
 *             qualification reports to submit to the Amazon Web Services Partner Network to get your device
 *             qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in
 *             and wait for it to be tested.</p>
 * @public
 */
export class IotDeviceAdvisor extends IotDeviceAdvisorClient implements IotDeviceAdvisor {}
createAggregatedClient(commands, IotDeviceAdvisor, { paginators });
