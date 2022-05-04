// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateHomeRegionControlCommand,
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
} from "./commands/CreateHomeRegionControlCommand";
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

/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
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
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 */
export class MigrationHubConfig extends MigrationHubConfigClient {
  /**
   * <p>This API sets up the home region for the calling account only.</p>
   */
  public createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHomeRegionControlCommandOutput>;
  public createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;
  public createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): void;
  public createHomeRegionControl(
    args: CreateHomeRegionControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHomeRegionControlCommandOutput) => void),
    cb?: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): Promise<CreateHomeRegionControlCommandOutput> | void {
    const command = new CreateHomeRegionControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
   *       fields.</p>
   */
  public describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHomeRegionControlsCommandOutput>;
  public describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;
  public describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): void;
  public describeHomeRegionControls(
    args: DescribeHomeRegionControlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHomeRegionControlsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): Promise<DescribeHomeRegionControlsCommandOutput> | void {
    const command = new DescribeHomeRegionControlsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
   *       services to determine the regional endpoint for calling AWS Application Discovery Service and
   *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
   *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
   *       Migration Hub home region.</p>
   */
  public getHomeRegion(
    args: GetHomeRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHomeRegionCommandOutput>;
  public getHomeRegion(
    args: GetHomeRegionCommandInput,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;
  public getHomeRegion(
    args: GetHomeRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): void;
  public getHomeRegion(
    args: GetHomeRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHomeRegionCommandOutput) => void),
    cb?: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): Promise<GetHomeRegionCommandOutput> | void {
    const command = new GetHomeRegionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
