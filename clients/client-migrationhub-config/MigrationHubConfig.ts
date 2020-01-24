import { MigrationHubConfigClient } from "./MigrationHubConfigClient";
import {
  CreateHomeRegionControlCommand,
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput
} from "./commands/CreateHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput
} from "./commands/DescribeHomeRegionControlsCommand";
import {
  GetHomeRegionCommand,
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput
} from "./commands/GetHomeRegionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <p>You can use these APIs within your home region only. If you call these APIs from outside
 *       your home region, your calls are rejected, except for the ability to register your agents and
 *       connectors. </p>
 *
 *          <p> You must call <code>GetHomeRegion</code> at least once before you call any other AWS
 *       Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration
 *       Hub home region.</p>
 *
 *          <p>The <code>StartDataCollection</code> API call in AWS Application Discovery Service allows
 *       your agents and connectors to begin collecting data that flows directly into the home region,
 *       and it will prevent you from enabling data collection information to be sent outside the home
 *       region. </p>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 *          <note>
 *             <p>The Migration Hub Home Region APIs do not support AWS Organizations.</p>
 *          </note>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateHomeRegionControlCommandOutput) => void),
    cb?: (err: any, data?: CreateHomeRegionControlCommandOutput) => void
  ): Promise<CreateHomeRegionControlCommandOutput> | void {
    const command = new CreateHomeRegionControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This API permits filtering on the <code>ControlId</code>, <code>HomeRegion</code>, and
   *         <code>RegionControlScope</code> fields.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeHomeRegionControlsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void
  ): Promise<DescribeHomeRegionControlsCommandOutput> | void {
    const command = new DescribeHomeRegionControlsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetHomeRegionCommandOutput) => void),
    cb?: (err: any, data?: GetHomeRegionCommandOutput) => void
  ): Promise<GetHomeRegionCommandOutput> | void {
    const command = new GetHomeRegionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
