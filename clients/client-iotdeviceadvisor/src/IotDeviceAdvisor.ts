// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateSuiteDefinitionCommand,
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "./commands/CreateSuiteDefinitionCommand";
import {
  DeleteSuiteDefinitionCommand,
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "./commands/DeleteSuiteDefinitionCommand";
import { GetEndpointCommand, GetEndpointCommandInput, GetEndpointCommandOutput } from "./commands/GetEndpointCommand";
import {
  GetSuiteDefinitionCommand,
  GetSuiteDefinitionCommandInput,
  GetSuiteDefinitionCommandOutput,
} from "./commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommand, GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "./commands/GetSuiteRunCommand";
import {
  GetSuiteRunReportCommand,
  GetSuiteRunReportCommandInput,
  GetSuiteRunReportCommandOutput,
} from "./commands/GetSuiteRunReportCommand";
import {
  ListSuiteDefinitionsCommand,
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "./commands/ListSuiteDefinitionsCommand";
import {
  ListSuiteRunsCommand,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
} from "./commands/ListSuiteRunsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartSuiteRunCommand,
  StartSuiteRunCommandInput,
  StartSuiteRunCommandOutput,
} from "./commands/StartSuiteRunCommand";
import {
  StopSuiteRunCommand,
  StopSuiteRunCommandInput,
  StopSuiteRunCommandOutput,
} from "./commands/StopSuiteRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSuiteDefinitionCommand,
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "./commands/UpdateSuiteDefinitionCommand";
import { IotDeviceAdvisorClient, IotDeviceAdvisorClientConfig } from "./IotDeviceAdvisorClient";

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
  getEndpoint(args: GetEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetEndpointCommandOutput>;
  getEndpoint(args: GetEndpointCommandInput, cb: (err: any, data?: GetEndpointCommandOutput) => void): void;
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
  getSuiteRun(args: GetSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteRunCommandOutput>;
  getSuiteRun(args: GetSuiteRunCommandInput, cb: (err: any, data?: GetSuiteRunCommandOutput) => void): void;
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
  listSuiteRuns(args: ListSuiteRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListSuiteRunsCommandOutput>;
  listSuiteRuns(args: ListSuiteRunsCommandInput, cb: (err: any, data?: ListSuiteRunsCommandOutput) => void): void;
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
  startSuiteRun(args: StartSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<StartSuiteRunCommandOutput>;
  startSuiteRun(args: StartSuiteRunCommandInput, cb: (err: any, data?: StartSuiteRunCommandOutput) => void): void;
  startSuiteRun(
    args: StartSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSuiteRunCommand}
   */
  stopSuiteRun(args: StopSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<StopSuiteRunCommandOutput>;
  stopSuiteRun(args: StopSuiteRunCommandInput, cb: (err: any, data?: StopSuiteRunCommandOutput) => void): void;
  stopSuiteRun(
    args: StopSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSuiteRunCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT
 *             devices during device software development. Device Advisor provides pre-built tests that you
 *             can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core
 *             before deploying devices to production. By using Device Advisor, you can confirm that your
 *             devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable,
 *             receive software updates from IoT Device Management. You can also download signed
 *             qualification reports to submit to the Amazon Web Services Partner Network to get your device
 *             qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in
 *             and wait for it to be tested.</p>
 */
export class IotDeviceAdvisor extends IotDeviceAdvisorClient implements IotDeviceAdvisor {}
createAggregatedClient(commands, IotDeviceAdvisor);
