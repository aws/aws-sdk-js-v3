import { MediaTailorClient } from "./MediaTailorClient";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateProgramCommand,
  CreateProgramCommandInput,
  CreateProgramCommandOutput,
} from "./commands/CreateProgramCommand";
import {
  CreateSourceLocationCommand,
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
} from "./commands/CreateSourceLocationCommand";
import {
  CreateVodSourceCommand,
  CreateVodSourceCommandInput,
  CreateVodSourceCommandOutput,
} from "./commands/CreateVodSourceCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteChannelPolicyCommand,
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand";
import {
  DeletePlaybackConfigurationCommand,
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "./commands/DeletePlaybackConfigurationCommand";
import {
  DeleteProgramCommand,
  DeleteProgramCommandInput,
  DeleteProgramCommandOutput,
} from "./commands/DeleteProgramCommand";
import {
  DeleteSourceLocationCommand,
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "./commands/DeleteSourceLocationCommand";
import {
  DeleteVodSourceCommand,
  DeleteVodSourceCommandInput,
  DeleteVodSourceCommandOutput,
} from "./commands/DeleteVodSourceCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeProgramCommand,
  DescribeProgramCommandInput,
  DescribeProgramCommandOutput,
} from "./commands/DescribeProgramCommand";
import {
  DescribeSourceLocationCommand,
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
} from "./commands/DescribeSourceLocationCommand";
import {
  DescribeVodSourceCommand,
  DescribeVodSourceCommandInput,
  DescribeVodSourceCommandOutput,
} from "./commands/DescribeVodSourceCommand";
import {
  GetChannelPolicyCommand,
  GetChannelPolicyCommandInput,
  GetChannelPolicyCommandOutput,
} from "./commands/GetChannelPolicyCommand";
import {
  GetChannelScheduleCommand,
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput,
} from "./commands/GetChannelScheduleCommand";
import {
  GetPlaybackConfigurationCommand,
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "./commands/GetPlaybackConfigurationCommand";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "./commands/ListPlaybackConfigurationsCommand";
import {
  ListSourceLocationsCommand,
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "./commands/ListSourceLocationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVodSourcesCommand,
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput,
} from "./commands/ListVodSourcesCommand";
import {
  PutChannelPolicyCommand,
  PutChannelPolicyCommandInput,
  PutChannelPolicyCommandOutput,
} from "./commands/PutChannelPolicyCommand";
import {
  PutPlaybackConfigurationCommand,
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "./commands/PutPlaybackConfigurationCommand";
import {
  StartChannelCommand,
  StartChannelCommandInput,
  StartChannelCommandOutput,
} from "./commands/StartChannelCommand";
import { StopChannelCommand, StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateSourceLocationCommand,
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "./commands/UpdateSourceLocationCommand";
import {
  UpdateVodSourceCommand,
  UpdateVodSourceCommandInput,
  UpdateVodSourceCommandOutput,
} from "./commands/UpdateVodSourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 */
export class MediaTailor extends MediaTailorClient {
  /**
   * <p>Creates a channel.</p>
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
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
   * <p>Creates a program.</p>
   */
  public createProgram(
    args: CreateProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProgramCommandOutput>;
  public createProgram(
    args: CreateProgramCommandInput,
    cb: (err: any, data?: CreateProgramCommandOutput) => void
  ): void;
  public createProgram(
    args: CreateProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProgramCommandOutput) => void
  ): void;
  public createProgram(
    args: CreateProgramCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProgramCommandOutput) => void),
    cb?: (err: any, data?: CreateProgramCommandOutput) => void
  ): Promise<CreateProgramCommandOutput> | void {
    const command = new CreateProgramCommand(args);
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
   * <p>Creates a source location on a specific channel.</p>
   */
  public createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSourceLocationCommandOutput>;
  public createSourceLocation(
    args: CreateSourceLocationCommandInput,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;
  public createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;
  public createSourceLocation(
    args: CreateSourceLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSourceLocationCommandOutput) => void),
    cb?: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): Promise<CreateSourceLocationCommandOutput> | void {
    const command = new CreateSourceLocationCommand(args);
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
   * <p>Creates name for a specific VOD source in a source location.</p>
   */
  public createVodSource(
    args: CreateVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVodSourceCommandOutput>;
  public createVodSource(
    args: CreateVodSourceCommandInput,
    cb: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): void;
  public createVodSource(
    args: CreateVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): void;
  public createVodSource(
    args: CreateVodSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVodSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): Promise<CreateVodSourceCommandOutput> | void {
    const command = new CreateVodSourceCommand(args);
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
   * <p>Deletes a channel. You must stop the channel before it can be deleted.</p>
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
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
   * <p>Deletes a channel's IAM policy.</p>
   */
  public deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelPolicyCommandOutput>;
  public deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;
  public deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;
  public deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): Promise<DeleteChannelPolicyCommandOutput> | void {
    const command = new DeleteChannelPolicyCommand(args);
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
   * <p>Deletes the playback configuration for the specified name.</p>
   */
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaybackConfigurationCommandOutput>;
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlaybackConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): Promise<DeletePlaybackConfigurationCommandOutput> | void {
    const command = new DeletePlaybackConfigurationCommand(args);
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
   * <p>Deletes a specific program on a specific channel.</p>
   */
  public deleteProgram(
    args: DeleteProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProgramCommandOutput>;
  public deleteProgram(
    args: DeleteProgramCommandInput,
    cb: (err: any, data?: DeleteProgramCommandOutput) => void
  ): void;
  public deleteProgram(
    args: DeleteProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProgramCommandOutput) => void
  ): void;
  public deleteProgram(
    args: DeleteProgramCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProgramCommandOutput) => void),
    cb?: (err: any, data?: DeleteProgramCommandOutput) => void
  ): Promise<DeleteProgramCommandOutput> | void {
    const command = new DeleteProgramCommand(args);
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
   * <p>Deletes a source location on a specific channel.</p>
   */
  public deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceLocationCommandOutput>;
  public deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;
  public deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;
  public deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSourceLocationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): Promise<DeleteSourceLocationCommandOutput> | void {
    const command = new DeleteSourceLocationCommand(args);
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
   * <p>Deletes a specific VOD source in a specific source location.</p>
   */
  public deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVodSourceCommandOutput>;
  public deleteVodSource(
    args: DeleteVodSourceCommandInput,
    cb: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): void;
  public deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): void;
  public deleteVodSource(
    args: DeleteVodSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVodSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): Promise<DeleteVodSourceCommandOutput> | void {
    const command = new DeleteVodSourceCommand(args);
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
   * <p>Describes the properties of a specific channel.</p>
   */
  public describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  public describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelCommandOutput) => void
  ): Promise<DescribeChannelCommandOutput> | void {
    const command = new DescribeChannelCommand(args);
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
   * <p>Retrieves the properties of the requested program.</p>
   */
  public describeProgram(
    args: DescribeProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProgramCommandOutput>;
  public describeProgram(
    args: DescribeProgramCommandInput,
    cb: (err: any, data?: DescribeProgramCommandOutput) => void
  ): void;
  public describeProgram(
    args: DescribeProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProgramCommandOutput) => void
  ): void;
  public describeProgram(
    args: DescribeProgramCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProgramCommandOutput) => void),
    cb?: (err: any, data?: DescribeProgramCommandOutput) => void
  ): Promise<DescribeProgramCommandOutput> | void {
    const command = new DescribeProgramCommand(args);
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
   * <p>Retrieves the properties of the requested source location.</p>
   */
  public describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceLocationCommandOutput>;
  public describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;
  public describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;
  public describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSourceLocationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): Promise<DescribeSourceLocationCommandOutput> | void {
    const command = new DescribeSourceLocationCommand(args);
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
   * <p>Provides details about a specific VOD source in a specific source location.</p>
   */
  public describeVodSource(
    args: DescribeVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVodSourceCommandOutput>;
  public describeVodSource(
    args: DescribeVodSourceCommandInput,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;
  public describeVodSource(
    args: DescribeVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;
  public describeVodSource(
    args: DescribeVodSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVodSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): Promise<DescribeVodSourceCommandOutput> | void {
    const command = new DescribeVodSourceCommand(args);
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
   * <p>Retrieves information about a channel's IAM policy.</p>
   */
  public getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelPolicyCommandOutput>;
  public getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;
  public getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;
  public getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChannelPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): Promise<GetChannelPolicyCommandOutput> | void {
    const command = new GetChannelPolicyCommand(args);
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
   * <p>Retrieves information about your channel's schedule.</p>
   */
  public getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelScheduleCommandOutput>;
  public getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;
  public getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;
  public getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChannelScheduleCommandOutput) => void),
    cb?: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): Promise<GetChannelScheduleCommandOutput> | void {
    const command = new GetChannelScheduleCommand(args);
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
   * <p>Returns the playback configuration for the specified name.</p>
   */
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlaybackConfigurationCommandOutput>;
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlaybackConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): Promise<GetPlaybackConfigurationCommandOutput> | void {
    const command = new GetPlaybackConfigurationCommand(args);
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
   * <p>Returns a list of alerts for the given resource.</p>
   */
  public listAlerts(args: ListAlertsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlertsCommandOutput>;
  public listAlerts(args: ListAlertsCommandInput, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
  public listAlerts(
    args: ListAlertsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;
  public listAlerts(
    args: ListAlertsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlertsCommandOutput) => void),
    cb?: (err: any, data?: ListAlertsCommandOutput) => void
  ): Promise<ListAlertsCommandOutput> | void {
    const command = new ListAlertsCommand(args);
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
   * <p>Retrieves a list of channels that are associated with this account.</p>
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
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
   * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful.</p>
   */
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaybackConfigurationsCommandOutput>;
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlaybackConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): Promise<ListPlaybackConfigurationsCommandOutput> | void {
    const command = new ListPlaybackConfigurationsCommand(args);
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
   * <p>Retrieves a list of source locations.</p>
   */
  public listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceLocationsCommandOutput>;
  public listSourceLocations(
    args: ListSourceLocationsCommandInput,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): void;
  public listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): void;
  public listSourceLocations(
    args: ListSourceLocationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSourceLocationsCommandOutput) => void),
    cb?: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): Promise<ListSourceLocationsCommandOutput> | void {
    const command = new ListSourceLocationsCommand(args);
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
   * <p>Returns a list of the tags assigned to the specified playback configuration resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Lists all the VOD sources in a source location.</p>
   */
  public listVodSources(
    args: ListVodSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVodSourcesCommandOutput>;
  public listVodSources(
    args: ListVodSourcesCommandInput,
    cb: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): void;
  public listVodSources(
    args: ListVodSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): void;
  public listVodSources(
    args: ListVodSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVodSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): Promise<ListVodSourcesCommandOutput> | void {
    const command = new ListVodSourcesCommand(args);
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
   * <p>Creates an IAM policy for the channel.</p>
   */
  public putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutChannelPolicyCommandOutput>;
  public putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;
  public putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;
  public putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutChannelPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): Promise<PutChannelPolicyCommandOutput> | void {
    const command = new PutChannelPolicyCommand(args);
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
   * <p>Adds a new playback configuration to AWS Elemental MediaTailor.</p>
   */
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPlaybackConfigurationCommandOutput>;
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPlaybackConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): Promise<PutPlaybackConfigurationCommandOutput> | void {
    const command = new PutPlaybackConfigurationCommand(args);
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
   * <p>Starts a specific channel.</p>
   */
  public startChannel(
    args: StartChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChannelCommandOutput>;
  public startChannel(args: StartChannelCommandInput, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
  public startChannel(
    args: StartChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;
  public startChannel(
    args: StartChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartChannelCommandOutput) => void),
    cb?: (err: any, data?: StartChannelCommandOutput) => void
  ): Promise<StartChannelCommandOutput> | void {
    const command = new StartChannelCommand(args);
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
   * <p>Stops a specific channel.</p>
   */
  public stopChannel(args: StopChannelCommandInput, options?: __HttpHandlerOptions): Promise<StopChannelCommandOutput>;
  public stopChannel(args: StopChannelCommandInput, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
  public stopChannel(
    args: StopChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;
  public stopChannel(
    args: StopChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopChannelCommandOutput) => void),
    cb?: (err: any, data?: StopChannelCommandOutput) => void
  ): Promise<StopChannelCommandOutput> | void {
    const command = new StopChannelCommand(args);
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
   * <p>Adds tags to the specified playback configuration resource. You can specify one or more tags to add.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes tags from the specified playback configuration resource. You can specify one or more tags to remove.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates an existing channel.</p>
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
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
   * <p>Updates a source location on a specific channel.</p>
   */
  public updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceLocationCommandOutput>;
  public updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;
  public updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;
  public updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSourceLocationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): Promise<UpdateSourceLocationCommandOutput> | void {
    const command = new UpdateSourceLocationCommand(args);
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
   * <p>Updates a specific VOD source in a specific source location.</p>
   */
  public updateVodSource(
    args: UpdateVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVodSourceCommandOutput>;
  public updateVodSource(
    args: UpdateVodSourceCommandInput,
    cb: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): void;
  public updateVodSource(
    args: UpdateVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): void;
  public updateVodSource(
    args: UpdateVodSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVodSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): Promise<UpdateVodSourceCommandOutput> | void {
    const command = new UpdateVodSourceCommand(args);
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
