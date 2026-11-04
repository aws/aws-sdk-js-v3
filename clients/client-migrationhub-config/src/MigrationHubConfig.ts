// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateHomeRegionControlCommandInput,
  type CreateHomeRegionControlCommandOutput,
  CreateHomeRegionControlCommand,
} from "./commands/CreateHomeRegionControlCommand";
import {
  type DeleteHomeRegionControlCommandInput,
  type DeleteHomeRegionControlCommandOutput,
  DeleteHomeRegionControlCommand,
} from "./commands/DeleteHomeRegionControlCommand";
import {
  type DescribeHomeRegionControlsCommandInput,
  type DescribeHomeRegionControlsCommandOutput,
  DescribeHomeRegionControlsCommand,
} from "./commands/DescribeHomeRegionControlsCommand";
import {
  type GetHomeRegionCommandInput,
  type GetHomeRegionCommandOutput,
  GetHomeRegionCommand,
} from "./commands/GetHomeRegionCommand";
import { MigrationHubConfigClient } from "./MigrationHubConfigClient";
import { paginateDescribeHomeRegionControls } from "./pagination/DescribeHomeRegionControlsPaginator";

const commands = {
  CreateHomeRegionControlCommand,
  DeleteHomeRegionControlCommand,
  DescribeHomeRegionControlsCommand,
  GetHomeRegionCommand,
};
const paginators = {
  paginateDescribeHomeRegionControls,
};

/**
 * @public
 */
export interface MigrationHubConfigRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MigrationHubConfig {
  /**
   * @see {@link CreateHomeRegionControlCommand}
   */
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options?: MigrationHubConfigRequestOptions
  ): Promise<CreateHomeRegionControlCommandOutput>;
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options: MigrationHubConfigRequestOptions,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHomeRegionControlCommand}
   */
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    options?: MigrationHubConfigRequestOptions
  ): Promise<DeleteHomeRegionControlCommandOutput>;
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    cb: (err: any, data?: DeleteHomeRegionControlCommandOutput) => void
  ): void;
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    options: MigrationHubConfigRequestOptions,
    cb: (err: any, data?: DeleteHomeRegionControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHomeRegionControlsCommand}
   */
  describeHomeRegionControls(): Promise<DescribeHomeRegionControlsCommandOutput>;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options?: MigrationHubConfigRequestOptions
  ): Promise<DescribeHomeRegionControlsCommandOutput>;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options: MigrationHubConfigRequestOptions,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHomeRegionCommand}
   */
  getHomeRegion(): Promise<GetHomeRegionCommandOutput>;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    options?: MigrationHubConfigRequestOptions
  ): Promise<GetHomeRegionCommandOutput>;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    options: MigrationHubConfigRequestOptions,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHomeRegionControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeHomeRegionControlsCommandOutput}.
   */
  paginateDescribeHomeRegionControls(
    args?: DescribeHomeRegionControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeHomeRegionControlsCommandOutput>;
}

/**
 * The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.
 *
 * - You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a `HomeRegionNotSetException` error is returned.
 * - API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.
 * - If you call a write API outside the home region, an `InvalidInputException` is returned.
 * - You can call `GetHomeRegion` action to obtain the account's Migration Hub home region.
 *
 * For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference.
 *
 * @public
 */
export class MigrationHubConfig extends MigrationHubConfigClient implements MigrationHubConfig {}
createAggregatedClient(commands, MigrationHubConfig, { paginators });
