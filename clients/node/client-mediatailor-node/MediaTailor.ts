import { MediaTailorClient } from "./MediaTailorClient";
import { BadRequestException } from "./types/BadRequestException";
import { DeletePlaybackConfigurationInput } from "./types/DeletePlaybackConfigurationInput";
import { DeletePlaybackConfigurationOutput } from "./types/DeletePlaybackConfigurationOutput";
import { GetPlaybackConfigurationInput } from "./types/GetPlaybackConfigurationInput";
import { GetPlaybackConfigurationOutput } from "./types/GetPlaybackConfigurationOutput";
import { ListPlaybackConfigurationsInput } from "./types/ListPlaybackConfigurationsInput";
import { ListPlaybackConfigurationsOutput } from "./types/ListPlaybackConfigurationsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PutPlaybackConfigurationInput } from "./types/PutPlaybackConfigurationInput";
import { PutPlaybackConfigurationOutput } from "./types/PutPlaybackConfigurationOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { DeletePlaybackConfigurationCommand } from "./commands/DeletePlaybackConfigurationCommand";
import { GetPlaybackConfigurationCommand } from "./commands/GetPlaybackConfigurationCommand";
import { ListPlaybackConfigurationsCommand } from "./commands/ListPlaybackConfigurationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutPlaybackConfigurationCommand } from "./commands/PutPlaybackConfigurationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class MediaTailor extends MediaTailorClient {
  /**
   * <p>Deletes the playback configuration for the specified name. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationInput
  ): Promise<DeletePlaybackConfigurationOutput>;
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationInput,
    cb: (err: any, data?: DeletePlaybackConfigurationOutput) => void
  ): void;
  public deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationInput,
    cb?: (err: any, data?: DeletePlaybackConfigurationOutput) => void
  ): Promise<DeletePlaybackConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePlaybackConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the playback configuration for the specified name. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationInput
  ): Promise<GetPlaybackConfigurationOutput>;
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationInput,
    cb: (err: any, data?: GetPlaybackConfigurationOutput) => void
  ): void;
  public getPlaybackConfiguration(
    args: GetPlaybackConfigurationInput,
    cb?: (err: any, data?: GetPlaybackConfigurationOutput) => void
  ): Promise<GetPlaybackConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPlaybackConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsInput
  ): Promise<ListPlaybackConfigurationsOutput>;
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsInput,
    cb: (err: any, data?: ListPlaybackConfigurationsOutput) => void
  ): void;
  public listPlaybackConfigurations(
    args: ListPlaybackConfigurationsInput,
    cb?: (err: any, data?: ListPlaybackConfigurationsOutput) => void
  ): Promise<ListPlaybackConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPlaybackConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the tags assigned to the specified playback configuration resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Invalid request parameters.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new playback configuration to AWS Elemental MediaTailor. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationInput
  ): Promise<PutPlaybackConfigurationOutput>;
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationInput,
    cb: (err: any, data?: PutPlaybackConfigurationOutput) => void
  ): void;
  public putPlaybackConfiguration(
    args: PutPlaybackConfigurationInput,
    cb?: (err: any, data?: PutPlaybackConfigurationOutput) => void
  ): Promise<PutPlaybackConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPlaybackConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to the specified playback configuration resource. You can specify one or more tags to add. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Invalid request parameters.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from the specified playback configuration resource. You can specify one or more tags to remove. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Invalid request parameters.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
