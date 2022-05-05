// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ConfigureLogsCommand,
  ConfigureLogsCommandInput,
  ConfigureLogsCommandOutput,
} from "./commands/ConfigureLogsCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateHarvestJobCommand,
  CreateHarvestJobCommandInput,
  CreateHarvestJobCommandOutput,
} from "./commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommand,
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "./commands/CreateOriginEndpointCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "./commands/DeleteOriginEndpointCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeHarvestJobCommand,
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput,
} from "./commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommand,
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
} from "./commands/DescribeOriginEndpointCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListHarvestJobsCommand,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
} from "./commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "./commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommand,
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
} from "./commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommand,
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
} from "./commands/RotateIngestEndpointCredentialsCommand";
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
  UpdateOriginEndpointCommand,
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "./commands/UpdateOriginEndpointCommand";
import { MediaPackageClient } from "./MediaPackageClient";

/**
 * AWS Elemental MediaPackage
 */
export class MediaPackage extends MediaPackageClient {
  /**
   * Changes the Channel's properities to configure log subscription
   */
  public configureLogs(
    args: ConfigureLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureLogsCommandOutput>;
  public configureLogs(
    args: ConfigureLogsCommandInput,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;
  public configureLogs(
    args: ConfigureLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;
  public configureLogs(
    args: ConfigureLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfigureLogsCommandOutput) => void),
    cb?: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): Promise<ConfigureLogsCommandOutput> | void {
    const command = new ConfigureLogsCommand(args);
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
   * Creates a new Channel.
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
   * Creates a new HarvestJob record.
   */
  public createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHarvestJobCommandOutput>;
  public createHarvestJob(
    args: CreateHarvestJobCommandInput,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;
  public createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;
  public createHarvestJob(
    args: CreateHarvestJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHarvestJobCommandOutput) => void),
    cb?: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): Promise<CreateHarvestJobCommandOutput> | void {
    const command = new CreateHarvestJobCommand(args);
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
   * Creates a new OriginEndpoint record.
   */
  public createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginEndpointCommandOutput>;
  public createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;
  public createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;
  public createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOriginEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): Promise<CreateOriginEndpointCommandOutput> | void {
    const command = new CreateOriginEndpointCommand(args);
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
   * Deletes an existing Channel.
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
   * Deletes an existing OriginEndpoint.
   */
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginEndpointCommandOutput>;
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOriginEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): Promise<DeleteOriginEndpointCommandOutput> | void {
    const command = new DeleteOriginEndpointCommand(args);
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
   * Gets details about a Channel.
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
   * Gets details about an existing HarvestJob.
   */
  public describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHarvestJobCommandOutput>;
  public describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;
  public describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;
  public describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHarvestJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): Promise<DescribeHarvestJobCommandOutput> | void {
    const command = new DescribeHarvestJobCommand(args);
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
   * Gets details about an existing OriginEndpoint.
   */
  public describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOriginEndpointCommandOutput>;
  public describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): void;
  public describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): void;
  public describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOriginEndpointCommandOutput) => void),
    cb?: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): Promise<DescribeOriginEndpointCommandOutput> | void {
    const command = new DescribeOriginEndpointCommand(args);
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
   * Returns a collection of Channels.
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
   * Returns a collection of HarvestJob records.
   */
  public listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHarvestJobsCommandOutput>;
  public listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;
  public listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;
  public listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHarvestJobsCommandOutput) => void),
    cb?: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): Promise<ListHarvestJobsCommandOutput> | void {
    const command = new ListHarvestJobsCommand(args);
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
   * Returns a collection of OriginEndpoint records.
   */
  public listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginEndpointsCommandOutput>;
  public listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;
  public listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;
  public listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOriginEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): Promise<ListOriginEndpointsCommandOutput> | void {
    const command = new ListOriginEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
   * @deprecated
   *
   * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
   */
  public rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateChannelCredentialsCommandOutput>;
  public rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;
  public rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;
  public rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateChannelCredentialsCommandOutput) => void),
    cb?: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): Promise<RotateChannelCredentialsCommandOutput> | void {
    const command = new RotateChannelCredentialsCommand(args);
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
   * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
   */
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateIngestEndpointCredentialsCommandOutput>;
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): void;
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): void;
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void),
    cb?: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): Promise<RotateIngestEndpointCredentialsCommandOutput> | void {
    const command = new RotateIngestEndpointCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
   * Updates an existing Channel.
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
   * Updates an existing OriginEndpoint.
   */
  public updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginEndpointCommandOutput>;
  public updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
  public updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
  public updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOriginEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): Promise<UpdateOriginEndpointCommandOutput> | void {
    const command = new UpdateOriginEndpointCommand(args);
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
