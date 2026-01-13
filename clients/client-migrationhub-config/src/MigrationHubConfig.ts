// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateHomeRegionControlCommand,
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
} from "./commands/CreateHomeRegionControlCommand";
import {
  DeleteHomeRegionControlCommand,
  DeleteHomeRegionControlCommandInput,
  DeleteHomeRegionControlCommandOutput,
} from "./commands/DeleteHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "./commands/DescribeHomeRegionControlsCommand";
import {
  GetHomeRegionCommand,
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput,
} from "./commands/GetHomeRegionCommand";
import { MigrationHubConfigClient } from "./MigrationHubConfigClient";

const commands = {
  CreateHomeRegionControlCommand,
  DeleteHomeRegionControlCommand,
  DescribeHomeRegionControlsCommand,
  GetHomeRegionCommand,
};

export interface MigrationHubConfig {
  /**
   * @see {@link CreateHomeRegionControlCommand}
   */
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHomeRegionControlCommandOutput>;
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;
  createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHomeRegionControlCommand}
   */
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHomeRegionControlCommandOutput>;
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    cb: (err: any, data?: DeleteHomeRegionControlCommandOutput) => void
  ): void;
  deleteHomeRegionControl(
    args: DeleteHomeRegionControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHomeRegionControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHomeRegionControlsCommand}
   */
  describeHomeRegionControls(): Promise<DescribeHomeRegionControlsCommandOutput>;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHomeRegionControlsCommandOutput>;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;
  describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHomeRegionCommand}
   */
  getHomeRegion(): Promise<GetHomeRegionCommandOutput>;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHomeRegionCommandOutput>;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;
  getHomeRegion(
    args: GetHomeRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;
}

/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *          <ul>
 *             <li>
 *                <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *           import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *           error is returned.</p>
 *             </li>
 *             <li>
 *                <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of
 *           your home region.</p>
 *             </li>
 *             <li>
 *                <p>If you call a write API outside the home region, an <code>InvalidInputException</code>
 *           is returned.</p>
 *             </li>
 *             <li>
 *                <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub
 *           home region.</p>
 *             </li>
 *          </ul>
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 * @public
 */
export class MigrationHubConfig extends MigrationHubConfigClient implements MigrationHubConfig {}
createAggregatedClient(commands, MigrationHubConfig);
