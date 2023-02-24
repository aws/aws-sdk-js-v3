// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AcceptEulasCommand, AcceptEulasCommandInput, AcceptEulasCommandOutput } from "./commands/AcceptEulasCommand";
import {
  CreateLaunchProfileCommand,
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
} from "./commands/CreateLaunchProfileCommand";
import {
  CreateStreamingImageCommand,
  CreateStreamingImageCommandInput,
  CreateStreamingImageCommandOutput,
} from "./commands/CreateStreamingImageCommand";
import {
  CreateStreamingSessionCommand,
  CreateStreamingSessionCommandInput,
  CreateStreamingSessionCommandOutput,
} from "./commands/CreateStreamingSessionCommand";
import {
  CreateStreamingSessionStreamCommand,
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
} from "./commands/CreateStreamingSessionStreamCommand";
import {
  CreateStudioCommand,
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
} from "./commands/CreateStudioCommand";
import {
  CreateStudioComponentCommand,
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
} from "./commands/CreateStudioComponentCommand";
import {
  DeleteLaunchProfileCommand,
  DeleteLaunchProfileCommandInput,
  DeleteLaunchProfileCommandOutput,
} from "./commands/DeleteLaunchProfileCommand";
import {
  DeleteLaunchProfileMemberCommand,
  DeleteLaunchProfileMemberCommandInput,
  DeleteLaunchProfileMemberCommandOutput,
} from "./commands/DeleteLaunchProfileMemberCommand";
import {
  DeleteStreamingImageCommand,
  DeleteStreamingImageCommandInput,
  DeleteStreamingImageCommandOutput,
} from "./commands/DeleteStreamingImageCommand";
import {
  DeleteStreamingSessionCommand,
  DeleteStreamingSessionCommandInput,
  DeleteStreamingSessionCommandOutput,
} from "./commands/DeleteStreamingSessionCommand";
import {
  DeleteStudioCommand,
  DeleteStudioCommandInput,
  DeleteStudioCommandOutput,
} from "./commands/DeleteStudioCommand";
import {
  DeleteStudioComponentCommand,
  DeleteStudioComponentCommandInput,
  DeleteStudioComponentCommandOutput,
} from "./commands/DeleteStudioComponentCommand";
import {
  DeleteStudioMemberCommand,
  DeleteStudioMemberCommandInput,
  DeleteStudioMemberCommandOutput,
} from "./commands/DeleteStudioMemberCommand";
import { GetEulaCommand, GetEulaCommandInput, GetEulaCommandOutput } from "./commands/GetEulaCommand";
import {
  GetLaunchProfileCommand,
  GetLaunchProfileCommandInput,
  GetLaunchProfileCommandOutput,
} from "./commands/GetLaunchProfileCommand";
import {
  GetLaunchProfileDetailsCommand,
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
} from "./commands/GetLaunchProfileDetailsCommand";
import {
  GetLaunchProfileInitializationCommand,
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
} from "./commands/GetLaunchProfileInitializationCommand";
import {
  GetLaunchProfileMemberCommand,
  GetLaunchProfileMemberCommandInput,
  GetLaunchProfileMemberCommandOutput,
} from "./commands/GetLaunchProfileMemberCommand";
import {
  GetStreamingImageCommand,
  GetStreamingImageCommandInput,
  GetStreamingImageCommandOutput,
} from "./commands/GetStreamingImageCommand";
import {
  GetStreamingSessionBackupCommand,
  GetStreamingSessionBackupCommandInput,
  GetStreamingSessionBackupCommandOutput,
} from "./commands/GetStreamingSessionBackupCommand";
import {
  GetStreamingSessionCommand,
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
} from "./commands/GetStreamingSessionCommand";
import {
  GetStreamingSessionStreamCommand,
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
} from "./commands/GetStreamingSessionStreamCommand";
import { GetStudioCommand, GetStudioCommandInput, GetStudioCommandOutput } from "./commands/GetStudioCommand";
import {
  GetStudioComponentCommand,
  GetStudioComponentCommandInput,
  GetStudioComponentCommandOutput,
} from "./commands/GetStudioComponentCommand";
import {
  GetStudioMemberCommand,
  GetStudioMemberCommandInput,
  GetStudioMemberCommandOutput,
} from "./commands/GetStudioMemberCommand";
import {
  ListEulaAcceptancesCommand,
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "./commands/ListEulaAcceptancesCommand";
import { ListEulasCommand, ListEulasCommandInput, ListEulasCommandOutput } from "./commands/ListEulasCommand";
import {
  ListLaunchProfileMembersCommand,
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "./commands/ListLaunchProfileMembersCommand";
import {
  ListLaunchProfilesCommand,
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput,
} from "./commands/ListLaunchProfilesCommand";
import {
  ListStreamingImagesCommand,
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "./commands/ListStreamingImagesCommand";
import {
  ListStreamingSessionBackupsCommand,
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput,
} from "./commands/ListStreamingSessionBackupsCommand";
import {
  ListStreamingSessionsCommand,
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "./commands/ListStreamingSessionsCommand";
import {
  ListStudioComponentsCommand,
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "./commands/ListStudioComponentsCommand";
import {
  ListStudioMembersCommand,
  ListStudioMembersCommandInput,
  ListStudioMembersCommandOutput,
} from "./commands/ListStudioMembersCommand";
import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLaunchProfileMembersCommand,
  PutLaunchProfileMembersCommandInput,
  PutLaunchProfileMembersCommandOutput,
} from "./commands/PutLaunchProfileMembersCommand";
import {
  PutStudioMembersCommand,
  PutStudioMembersCommandInput,
  PutStudioMembersCommandOutput,
} from "./commands/PutStudioMembersCommand";
import {
  StartStreamingSessionCommand,
  StartStreamingSessionCommandInput,
  StartStreamingSessionCommandOutput,
} from "./commands/StartStreamingSessionCommand";
import {
  StartStudioSSOConfigurationRepairCommand,
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
} from "./commands/StartStudioSSOConfigurationRepairCommand";
import {
  StopStreamingSessionCommand,
  StopStreamingSessionCommandInput,
  StopStreamingSessionCommandOutput,
} from "./commands/StopStreamingSessionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLaunchProfileCommand,
  UpdateLaunchProfileCommandInput,
  UpdateLaunchProfileCommandOutput,
} from "./commands/UpdateLaunchProfileCommand";
import {
  UpdateLaunchProfileMemberCommand,
  UpdateLaunchProfileMemberCommandInput,
  UpdateLaunchProfileMemberCommandOutput,
} from "./commands/UpdateLaunchProfileMemberCommand";
import {
  UpdateStreamingImageCommand,
  UpdateStreamingImageCommandInput,
  UpdateStreamingImageCommandOutput,
} from "./commands/UpdateStreamingImageCommand";
import {
  UpdateStudioCommand,
  UpdateStudioCommandInput,
  UpdateStudioCommandOutput,
} from "./commands/UpdateStudioCommand";
import {
  UpdateStudioComponentCommand,
  UpdateStudioComponentCommandInput,
  UpdateStudioComponentCommandOutput,
} from "./commands/UpdateStudioComponentCommand";
import { NimbleClient } from "./NimbleClient";

/**
 * <p>Welcome to the Amazon Nimble Studio API reference. This API reference provides
 *             methods, schema, resources, parameters, and more to help you get the most out of Nimble
 *             Studio.</p>
 *         <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and
 *             interactive content teams to create content securely within a scalable, private cloud
 *             service.</p>
 */
export class Nimble extends NimbleClient {
  /**
   * <p>Accept EULAs.</p>
   */
  public acceptEulas(args: AcceptEulasCommandInput, options?: __HttpHandlerOptions): Promise<AcceptEulasCommandOutput>;
  public acceptEulas(args: AcceptEulasCommandInput, cb: (err: any, data?: AcceptEulasCommandOutput) => void): void;
  public acceptEulas(
    args: AcceptEulasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptEulasCommandOutput) => void
  ): void;
  public acceptEulas(
    args: AcceptEulasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptEulasCommandOutput) => void),
    cb?: (err: any, data?: AcceptEulasCommandOutput) => void
  ): Promise<AcceptEulasCommandOutput> | void {
    const command = new AcceptEulasCommand(args);
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
   * <p>Create a launch profile.</p>
   */
  public createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchProfileCommandOutput>;
  public createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void
  ): void;
  public createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void
  ): void;
  public createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchProfileCommandOutput) => void
  ): Promise<CreateLaunchProfileCommandOutput> | void {
    const command = new CreateLaunchProfileCommand(args);
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
   * <p>Creates a streaming image resource in a studio.</p>
   */
  public createStreamingImage(
    args: CreateStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingImageCommandOutput>;
  public createStreamingImage(
    args: CreateStreamingImageCommandInput,
    cb: (err: any, data?: CreateStreamingImageCommandOutput) => void
  ): void;
  public createStreamingImage(
    args: CreateStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingImageCommandOutput) => void
  ): void;
  public createStreamingImage(
    args: CreateStreamingImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingImageCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingImageCommandOutput) => void
  ): Promise<CreateStreamingImageCommandOutput> | void {
    const command = new CreateStreamingImageCommand(args);
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
   * <p>Creates a streaming session in a studio.</p>
   *         <p>After invoking this operation, you must poll GetStreamingSession until the streaming
   *             session is in the <code>READY</code> state.</p>
   */
  public createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingSessionCommandOutput>;
  public createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void
  ): void;
  public createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void
  ): void;
  public createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingSessionCommandOutput) => void
  ): Promise<CreateStreamingSessionCommandOutput> | void {
    const command = new CreateStreamingSessionCommand(args);
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
   * <p>Creates a streaming session stream for a streaming session.</p>
   *         <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId
   *             to poll the resource until it is in the <code>READY</code> state.</p>
   */
  public createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingSessionStreamCommandOutput>;
  public createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void
  ): void;
  public createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void
  ): void;
  public createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingSessionStreamCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void
  ): Promise<CreateStreamingSessionStreamCommandOutput> | void {
    const command = new CreateStreamingSessionStreamCommand(args);
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
   * <p>Create a new studio.</p>
   *         <p>When creating a studio, two IAM roles must be provided: the admin role
   *             and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p>
   *         <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy
   *             attached for the portal to function properly.</p>
   *         <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed
   *             policy attached for the portal to function properly.</p>
   *         <p>You may optionally specify a KMS key in the
   *             <code>StudioEncryptionConfiguration</code>.</p>
   *         <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other
   *             data you provide are always encrypted at rest using an KMS key. By default, this key is
   *             owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key
   *             when calling <code>CreateStudio</code> to encrypt this data using a key you own and
   *             manage.</p>
   *         <p>When providing an KMS key during studio creation, Nimble Studio creates KMS
   *             grants in your account to provide your studio user and admin roles access to these KMS
   *             keys.</p>
   *         <p>If you delete this grant, the studio will no longer be accessible to your portal
   *             users.</p>
   *         <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
   */
  public createStudio(
    args: CreateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioCommandOutput>;
  public createStudio(args: CreateStudioCommandInput, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
  public createStudio(
    args: CreateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioCommandOutput) => void
  ): void;
  public createStudio(
    args: CreateStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStudioCommandOutput) => void),
    cb?: (err: any, data?: CreateStudioCommandOutput) => void
  ): Promise<CreateStudioCommandOutput> | void {
    const command = new CreateStudioCommand(args);
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
   * <p>Creates a studio component resource.</p>
   */
  public createStudioComponent(
    args: CreateStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioComponentCommandOutput>;
  public createStudioComponent(
    args: CreateStudioComponentCommandInput,
    cb: (err: any, data?: CreateStudioComponentCommandOutput) => void
  ): void;
  public createStudioComponent(
    args: CreateStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioComponentCommandOutput) => void
  ): void;
  public createStudioComponent(
    args: CreateStudioComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStudioComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateStudioComponentCommandOutput) => void
  ): Promise<CreateStudioComponentCommandOutput> | void {
    const command = new CreateStudioComponentCommand(args);
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
   * <p>Permanently delete a launch profile.</p>
   */
  public deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchProfileCommandOutput>;
  public deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void
  ): void;
  public deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void
  ): void;
  public deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchProfileCommandOutput) => void
  ): Promise<DeleteLaunchProfileCommandOutput> | void {
    const command = new DeleteLaunchProfileCommand(args);
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
   * <p>Delete a user from launch profile membership.</p>
   */
  public deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchProfileMemberCommandOutput>;
  public deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void
  ): void;
  public deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void
  ): void;
  public deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void
  ): Promise<DeleteLaunchProfileMemberCommandOutput> | void {
    const command = new DeleteLaunchProfileMemberCommand(args);
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
   * <p>Delete streaming image.</p>
   */
  public deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingImageCommandOutput>;
  public deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void
  ): void;
  public deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void
  ): void;
  public deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamingImageCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamingImageCommandOutput) => void
  ): Promise<DeleteStreamingImageCommandOutput> | void {
    const command = new DeleteStreamingImageCommand(args);
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
   * <p>Deletes streaming session resource.</p>
   *         <p>After invoking this operation, use GetStreamingSession to poll the resource until it
   *             transitions to a <code>DELETED</code> state.</p>
   *         <p>A streaming session will count against your streaming session quota until it is marked
   *                 <code>DELETED</code>.</p>
   */
  public deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingSessionCommandOutput>;
  public deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void
  ): void;
  public deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void
  ): void;
  public deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamingSessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamingSessionCommandOutput) => void
  ): Promise<DeleteStreamingSessionCommandOutput> | void {
    const command = new DeleteStreamingSessionCommand(args);
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
   * <p>Delete a studio resource.</p>
   */
  public deleteStudio(
    args: DeleteStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioCommandOutput>;
  public deleteStudio(args: DeleteStudioCommandInput, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
  public deleteStudio(
    args: DeleteStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioCommandOutput) => void
  ): void;
  public deleteStudio(
    args: DeleteStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStudioCommandOutput) => void),
    cb?: (err: any, data?: DeleteStudioCommandOutput) => void
  ): Promise<DeleteStudioCommandOutput> | void {
    const command = new DeleteStudioCommand(args);
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
   * <p>Deletes a studio component resource.</p>
   */
  public deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioComponentCommandOutput>;
  public deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void
  ): void;
  public deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void
  ): void;
  public deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStudioComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteStudioComponentCommandOutput) => void
  ): Promise<DeleteStudioComponentCommandOutput> | void {
    const command = new DeleteStudioComponentCommand(args);
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
   * <p>Delete a user from studio membership.</p>
   */
  public deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioMemberCommandOutput>;
  public deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void
  ): void;
  public deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void
  ): void;
  public deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStudioMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteStudioMemberCommandOutput) => void
  ): Promise<DeleteStudioMemberCommandOutput> | void {
    const command = new DeleteStudioMemberCommand(args);
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
   * <p>Get EULA.</p>
   */
  public getEula(args: GetEulaCommandInput, options?: __HttpHandlerOptions): Promise<GetEulaCommandOutput>;
  public getEula(args: GetEulaCommandInput, cb: (err: any, data?: GetEulaCommandOutput) => void): void;
  public getEula(
    args: GetEulaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEulaCommandOutput) => void
  ): void;
  public getEula(
    args: GetEulaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEulaCommandOutput) => void),
    cb?: (err: any, data?: GetEulaCommandOutput) => void
  ): Promise<GetEulaCommandOutput> | void {
    const command = new GetEulaCommand(args);
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
   * <p>Get a launch profile.</p>
   */
  public getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileCommandOutput>;
  public getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    cb: (err: any, data?: GetLaunchProfileCommandOutput) => void
  ): void;
  public getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileCommandOutput) => void
  ): void;
  public getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchProfileCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchProfileCommandOutput) => void
  ): Promise<GetLaunchProfileCommandOutput> | void {
    const command = new GetLaunchProfileCommand(args);
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
   * <p>Launch profile details include the launch profile resource and summary information of
   *             resources that are used by, or available to, the launch profile. This includes the name
   *             and description of all studio components used by the launch profiles, and the name and
   *             description of streaming images that can be used with this launch profile.</p>
   */
  public getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileDetailsCommandOutput>;
  public getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void
  ): void;
  public getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void
  ): void;
  public getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchProfileDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void
  ): Promise<GetLaunchProfileDetailsCommandOutput> | void {
    const command = new GetLaunchProfileDetailsCommand(args);
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
   * <p>Get a launch profile initialization.</p>
   */
  public getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileInitializationCommandOutput>;
  public getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void
  ): void;
  public getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void
  ): void;
  public getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchProfileInitializationCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void
  ): Promise<GetLaunchProfileInitializationCommandOutput> | void {
    const command = new GetLaunchProfileInitializationCommand(args);
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
   * <p>Get a user persona in launch profile membership.</p>
   */
  public getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileMemberCommandOutput>;
  public getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void
  ): void;
  public getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void
  ): void;
  public getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchProfileMemberCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void
  ): Promise<GetLaunchProfileMemberCommandOutput> | void {
    const command = new GetLaunchProfileMemberCommand(args);
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
   * <p>Get streaming image.</p>
   */
  public getStreamingImage(
    args: GetStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingImageCommandOutput>;
  public getStreamingImage(
    args: GetStreamingImageCommandInput,
    cb: (err: any, data?: GetStreamingImageCommandOutput) => void
  ): void;
  public getStreamingImage(
    args: GetStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingImageCommandOutput) => void
  ): void;
  public getStreamingImage(
    args: GetStreamingImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingImageCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingImageCommandOutput) => void
  ): Promise<GetStreamingImageCommandOutput> | void {
    const command = new GetStreamingImageCommand(args);
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
   * <p>Gets StreamingSession resource.</p>
   *         <p>Invoke this operation to poll for a streaming session state while creating or deleting
   *             a session.</p>
   */
  public getStreamingSession(
    args: GetStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionCommandOutput>;
  public getStreamingSession(
    args: GetStreamingSessionCommandInput,
    cb: (err: any, data?: GetStreamingSessionCommandOutput) => void
  ): void;
  public getStreamingSession(
    args: GetStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionCommandOutput) => void
  ): void;
  public getStreamingSession(
    args: GetStreamingSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingSessionCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingSessionCommandOutput) => void
  ): Promise<GetStreamingSessionCommandOutput> | void {
    const command = new GetStreamingSessionCommand(args);
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
   * <p>Gets <code>StreamingSessionBackup</code> resource.</p>
   *         <p>Invoke this operation to poll for a streaming session backup while stopping a
   *             streaming session.</p>
   */
  public getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionBackupCommandOutput>;
  public getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    cb: (err: any, data?: GetStreamingSessionBackupCommandOutput) => void
  ): void;
  public getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionBackupCommandOutput) => void
  ): void;
  public getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingSessionBackupCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingSessionBackupCommandOutput) => void
  ): Promise<GetStreamingSessionBackupCommandOutput> | void {
    const command = new GetStreamingSessionBackupCommand(args);
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
   * <p>Gets a StreamingSessionStream for a streaming session.</p>
   *         <p>Invoke this operation to poll the resource after invoking
   *                 <code>CreateStreamingSessionStream</code>.</p>
   *         <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state,
   *             the url property will contain a stream to be used with the DCV streaming client.</p>
   */
  public getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionStreamCommandOutput>;
  public getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void
  ): void;
  public getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void
  ): void;
  public getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingSessionStreamCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void
  ): Promise<GetStreamingSessionStreamCommandOutput> | void {
    const command = new GetStreamingSessionStreamCommand(args);
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
   * <p>Get a studio resource.</p>
   */
  public getStudio(args: GetStudioCommandInput, options?: __HttpHandlerOptions): Promise<GetStudioCommandOutput>;
  public getStudio(args: GetStudioCommandInput, cb: (err: any, data?: GetStudioCommandOutput) => void): void;
  public getStudio(
    args: GetStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioCommandOutput) => void
  ): void;
  public getStudio(
    args: GetStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStudioCommandOutput) => void),
    cb?: (err: any, data?: GetStudioCommandOutput) => void
  ): Promise<GetStudioCommandOutput> | void {
    const command = new GetStudioCommand(args);
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
   * <p>Gets a studio component resource.</p>
   */
  public getStudioComponent(
    args: GetStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioComponentCommandOutput>;
  public getStudioComponent(
    args: GetStudioComponentCommandInput,
    cb: (err: any, data?: GetStudioComponentCommandOutput) => void
  ): void;
  public getStudioComponent(
    args: GetStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioComponentCommandOutput) => void
  ): void;
  public getStudioComponent(
    args: GetStudioComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStudioComponentCommandOutput) => void),
    cb?: (err: any, data?: GetStudioComponentCommandOutput) => void
  ): Promise<GetStudioComponentCommandOutput> | void {
    const command = new GetStudioComponentCommand(args);
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
   * <p>Get a user's membership in a studio.</p>
   */
  public getStudioMember(
    args: GetStudioMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioMemberCommandOutput>;
  public getStudioMember(
    args: GetStudioMemberCommandInput,
    cb: (err: any, data?: GetStudioMemberCommandOutput) => void
  ): void;
  public getStudioMember(
    args: GetStudioMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioMemberCommandOutput) => void
  ): void;
  public getStudioMember(
    args: GetStudioMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStudioMemberCommandOutput) => void),
    cb?: (err: any, data?: GetStudioMemberCommandOutput) => void
  ): Promise<GetStudioMemberCommandOutput> | void {
    const command = new GetStudioMemberCommand(args);
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
   * <p>List EULA acceptances.</p>
   */
  public listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEulaAcceptancesCommandOutput>;
  public listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void
  ): void;
  public listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void
  ): void;
  public listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEulaAcceptancesCommandOutput) => void),
    cb?: (err: any, data?: ListEulaAcceptancesCommandOutput) => void
  ): Promise<ListEulaAcceptancesCommandOutput> | void {
    const command = new ListEulaAcceptancesCommand(args);
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
   * <p>List EULAs.</p>
   */
  public listEulas(args: ListEulasCommandInput, options?: __HttpHandlerOptions): Promise<ListEulasCommandOutput>;
  public listEulas(args: ListEulasCommandInput, cb: (err: any, data?: ListEulasCommandOutput) => void): void;
  public listEulas(
    args: ListEulasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEulasCommandOutput) => void
  ): void;
  public listEulas(
    args: ListEulasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEulasCommandOutput) => void),
    cb?: (err: any, data?: ListEulasCommandOutput) => void
  ): Promise<ListEulasCommandOutput> | void {
    const command = new ListEulasCommand(args);
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
   * <p>Get all users in a given launch profile membership.</p>
   */
  public listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchProfileMembersCommandOutput>;
  public listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void
  ): void;
  public listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void
  ): void;
  public listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLaunchProfileMembersCommandOutput) => void),
    cb?: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void
  ): Promise<ListLaunchProfileMembersCommandOutput> | void {
    const command = new ListLaunchProfileMembersCommand(args);
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
   * <p>List all the launch profiles a studio.</p>
   */
  public listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchProfilesCommandOutput>;
  public listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void
  ): void;
  public listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void
  ): void;
  public listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLaunchProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListLaunchProfilesCommandOutput) => void
  ): Promise<ListLaunchProfilesCommandOutput> | void {
    const command = new ListLaunchProfilesCommand(args);
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
   * <p>List the streaming image resources available to this studio.</p>
   *         <p>This list will contain both images provided by Amazon Web Services, as well as
   *             streaming images that you have created in your studio.</p>
   */
  public listStreamingImages(
    args: ListStreamingImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingImagesCommandOutput>;
  public listStreamingImages(
    args: ListStreamingImagesCommandInput,
    cb: (err: any, data?: ListStreamingImagesCommandOutput) => void
  ): void;
  public listStreamingImages(
    args: ListStreamingImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingImagesCommandOutput) => void
  ): void;
  public listStreamingImages(
    args: ListStreamingImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamingImagesCommandOutput) => void),
    cb?: (err: any, data?: ListStreamingImagesCommandOutput) => void
  ): Promise<ListStreamingImagesCommandOutput> | void {
    const command = new ListStreamingImagesCommand(args);
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
   * <p>Lists the backups of a streaming session in a studio.</p>
   */
  public listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingSessionBackupsCommandOutput>;
  public listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    cb: (err: any, data?: ListStreamingSessionBackupsCommandOutput) => void
  ): void;
  public listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingSessionBackupsCommandOutput) => void
  ): void;
  public listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamingSessionBackupsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamingSessionBackupsCommandOutput) => void
  ): Promise<ListStreamingSessionBackupsCommandOutput> | void {
    const command = new ListStreamingSessionBackupsCommand(args);
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
   * <p>Lists the streaming sessions in a studio.</p>
   */
  public listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingSessionsCommandOutput>;
  public listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void
  ): void;
  public listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void
  ): void;
  public listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamingSessionsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamingSessionsCommandOutput) => void
  ): Promise<ListStreamingSessionsCommandOutput> | void {
    const command = new ListStreamingSessionsCommand(args);
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
   * <p>Lists the <code>StudioComponents</code> in a studio.</p>
   */
  public listStudioComponents(
    args: ListStudioComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioComponentsCommandOutput>;
  public listStudioComponents(
    args: ListStudioComponentsCommandInput,
    cb: (err: any, data?: ListStudioComponentsCommandOutput) => void
  ): void;
  public listStudioComponents(
    args: ListStudioComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioComponentsCommandOutput) => void
  ): void;
  public listStudioComponents(
    args: ListStudioComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStudioComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListStudioComponentsCommandOutput) => void
  ): Promise<ListStudioComponentsCommandOutput> | void {
    const command = new ListStudioComponentsCommand(args);
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
   * <p>Get all users in a given studio membership.</p>
   *         <note>
   *             <p>
   *                <code>ListStudioMembers</code> only returns admin members.</p>
   *         </note>
   */
  public listStudioMembers(
    args: ListStudioMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioMembersCommandOutput>;
  public listStudioMembers(
    args: ListStudioMembersCommandInput,
    cb: (err: any, data?: ListStudioMembersCommandOutput) => void
  ): void;
  public listStudioMembers(
    args: ListStudioMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioMembersCommandOutput) => void
  ): void;
  public listStudioMembers(
    args: ListStudioMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStudioMembersCommandOutput) => void),
    cb?: (err: any, data?: ListStudioMembersCommandOutput) => void
  ): Promise<ListStudioMembersCommandOutput> | void {
    const command = new ListStudioMembersCommand(args);
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
   * <p>List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.</p>
   */
  public listStudios(args: ListStudiosCommandInput, options?: __HttpHandlerOptions): Promise<ListStudiosCommandOutput>;
  public listStudios(args: ListStudiosCommandInput, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
  public listStudios(
    args: ListStudiosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
  ): void;
  public listStudios(
    args: ListStudiosCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStudiosCommandOutput) => void),
    cb?: (err: any, data?: ListStudiosCommandOutput) => void
  ): Promise<ListStudiosCommandOutput> | void {
    const command = new ListStudiosCommand(args);
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
   * <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p>
   *         <p>This operation supports ARNs for all resource types in Nimble Studio that support
   *             tags, including studio, studio component, launch profile, streaming image, and streaming
   *             session. All resources that can be tagged will contain an ARN property, so you do not
   *             have to create this ARN yourself.</p>
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
   * <p>Add/update users with given persona to launch profile membership.</p>
   */
  public putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLaunchProfileMembersCommandOutput>;
  public putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void
  ): void;
  public putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void
  ): void;
  public putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLaunchProfileMembersCommandOutput) => void),
    cb?: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void
  ): Promise<PutLaunchProfileMembersCommandOutput> | void {
    const command = new PutLaunchProfileMembersCommand(args);
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
   * <p>Add/update users with given persona to studio membership.</p>
   */
  public putStudioMembers(
    args: PutStudioMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStudioMembersCommandOutput>;
  public putStudioMembers(
    args: PutStudioMembersCommandInput,
    cb: (err: any, data?: PutStudioMembersCommandOutput) => void
  ): void;
  public putStudioMembers(
    args: PutStudioMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStudioMembersCommandOutput) => void
  ): void;
  public putStudioMembers(
    args: PutStudioMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutStudioMembersCommandOutput) => void),
    cb?: (err: any, data?: PutStudioMembersCommandOutput) => void
  ): Promise<PutStudioMembersCommandOutput> | void {
    const command = new PutStudioMembersCommand(args);
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
   * <p>Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code>
   *             state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the
   *                 <code>STOPPED</code> and <code>READY</code> states.</p>
   */
  public startStreamingSession(
    args: StartStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamingSessionCommandOutput>;
  public startStreamingSession(
    args: StartStreamingSessionCommandInput,
    cb: (err: any, data?: StartStreamingSessionCommandOutput) => void
  ): void;
  public startStreamingSession(
    args: StartStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamingSessionCommandOutput) => void
  ): void;
  public startStreamingSession(
    args: StartStreamingSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartStreamingSessionCommandOutput) => void),
    cb?: (err: any, data?: StartStreamingSessionCommandOutput) => void
  ): Promise<StartStreamingSessionCommandOutput> | void {
    const command = new StartStreamingSessionCommand(args);
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
   * <p>Repairs the IAM Identity Center configuration for a given studio.</p>
   *         <p>If the studio has a valid IAM Identity Center configuration currently associated with
   *             it, this operation will fail with a validation error.</p>
   *         <p>If the studio does not have a valid IAM Identity Center configuration currently
   *             associated with it, then a new IAM Identity Center application is created for the studio
   *             and the studio is changed to the <code>READY</code> state.</p>
   *         <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
   */
  public startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStudioSSOConfigurationRepairCommandOutput>;
  public startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void
  ): void;
  public startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void
  ): void;
  public startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void),
    cb?: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void
  ): Promise<StartStudioSSOConfigurationRepairCommandOutput> | void {
    const command = new StartStudioSSOConfigurationRepairCommand(args);
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
   * <p>Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code>
   *             state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the
   *                 <code>READY</code> and <code>STOPPED</code> states.</p>
   */
  public stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStreamingSessionCommandOutput>;
  public stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    cb: (err: any, data?: StopStreamingSessionCommandOutput) => void
  ): void;
  public stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamingSessionCommandOutput) => void
  ): void;
  public stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopStreamingSessionCommandOutput) => void),
    cb?: (err: any, data?: StopStreamingSessionCommandOutput) => void
  ): Promise<StopStreamingSessionCommandOutput> | void {
    const command = new StopStreamingSessionCommand(args);
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
   * <p>Creates tags for a resource, given its ARN.</p>
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
   * <p>Deletes the tags for a resource.</p>
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
   * <p>Update a launch profile.</p>
   */
  public updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchProfileCommandOutput>;
  public updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void
  ): void;
  public updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void
  ): void;
  public updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLaunchProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateLaunchProfileCommandOutput) => void
  ): Promise<UpdateLaunchProfileCommandOutput> | void {
    const command = new UpdateLaunchProfileCommand(args);
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
   * <p>Update a user persona in launch profile membership.</p>
   */
  public updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchProfileMemberCommandOutput>;
  public updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void
  ): void;
  public updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void
  ): void;
  public updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void),
    cb?: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void
  ): Promise<UpdateLaunchProfileMemberCommandOutput> | void {
    const command = new UpdateLaunchProfileMemberCommand(args);
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
   * <p>Update streaming image.</p>
   */
  public updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingImageCommandOutput>;
  public updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void
  ): void;
  public updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void
  ): void;
  public updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStreamingImageCommandOutput) => void),
    cb?: (err: any, data?: UpdateStreamingImageCommandOutput) => void
  ): Promise<UpdateStreamingImageCommandOutput> | void {
    const command = new UpdateStreamingImageCommand(args);
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
   * <p>Update a Studio resource.</p>
   *         <p>Currently, this operation only supports updating the displayName of your
   *             studio.</p>
   */
  public updateStudio(
    args: UpdateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioCommandOutput>;
  public updateStudio(args: UpdateStudioCommandInput, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
  public updateStudio(
    args: UpdateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioCommandOutput) => void
  ): void;
  public updateStudio(
    args: UpdateStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStudioCommandOutput) => void),
    cb?: (err: any, data?: UpdateStudioCommandOutput) => void
  ): Promise<UpdateStudioCommandOutput> | void {
    const command = new UpdateStudioCommand(args);
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
   * <p>Updates a studio component resource.</p>
   */
  public updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioComponentCommandOutput>;
  public updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void
  ): void;
  public updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void
  ): void;
  public updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStudioComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateStudioComponentCommandOutput) => void
  ): Promise<UpdateStudioComponentCommandOutput> | void {
    const command = new UpdateStudioComponentCommand(args);
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
