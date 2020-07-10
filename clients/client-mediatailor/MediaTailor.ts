import { MediaTailorClient } from "./MediaTailorClient";
import {
  DeletePlaybackConfigurationCommand,
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "./commands/DeletePlaybackConfigurationCommand";
import {
  GetPlaybackConfigurationCommand,
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "./commands/GetPlaybackConfigurationCommand";
import {
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "./commands/ListPlaybackConfigurationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutPlaybackConfigurationCommand,
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "./commands/PutPlaybackConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Use the AWS Elemental MediaTailor SDK to configure scalable ad insertion for your live and VOD content. With AWS Elemental MediaTailor, you can serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the AWS Elemental MediaTailor User Guide.<p>Through the SDK, you manage AWS Elemental MediaTailor configurations the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 */
export class MediaTailor extends MediaTailorClient {
  /**
   * <p>Deletes the playback configuration for the specified name. </p>
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
   * <p>Returns the playback configuration for the specified name. </p>
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
   * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful. </p>
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
   * <p>Returns a list of the tags assigned to the specified playback configuration resource. </p>
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
   * <p>Adds a new playback configuration to AWS Elemental MediaTailor. </p>
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
   * <p>Adds tags to the specified playback configuration resource. You can specify one or more tags to add. </p>
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
   * <p>Removes tags from the specified playback configuration resource. You can specify one or more tags to remove. </p>
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
}
