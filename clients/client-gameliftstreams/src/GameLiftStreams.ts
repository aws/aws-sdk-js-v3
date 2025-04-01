// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddStreamGroupLocationsCommand,
  AddStreamGroupLocationsCommandInput,
  AddStreamGroupLocationsCommandOutput,
} from "./commands/AddStreamGroupLocationsCommand";
import {
  AssociateApplicationsCommand,
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "./commands/AssociateApplicationsCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateStreamGroupCommand,
  CreateStreamGroupCommandInput,
  CreateStreamGroupCommandOutput,
} from "./commands/CreateStreamGroupCommand";
import {
  CreateStreamSessionConnectionCommand,
  CreateStreamSessionConnectionCommandInput,
  CreateStreamSessionConnectionCommandOutput,
} from "./commands/CreateStreamSessionConnectionCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteStreamGroupCommand,
  DeleteStreamGroupCommandInput,
  DeleteStreamGroupCommandOutput,
} from "./commands/DeleteStreamGroupCommand";
import {
  DisassociateApplicationsCommand,
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "./commands/DisassociateApplicationsCommand";
import {
  ExportStreamSessionFilesCommand,
  ExportStreamSessionFilesCommandInput,
  ExportStreamSessionFilesCommandOutput,
} from "./commands/ExportStreamSessionFilesCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetStreamGroupCommand,
  GetStreamGroupCommandInput,
  GetStreamGroupCommandOutput,
} from "./commands/GetStreamGroupCommand";
import {
  GetStreamSessionCommand,
  GetStreamSessionCommandInput,
  GetStreamSessionCommandOutput,
} from "./commands/GetStreamSessionCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListStreamGroupsCommand,
  ListStreamGroupsCommandInput,
  ListStreamGroupsCommandOutput,
} from "./commands/ListStreamGroupsCommand";
import {
  ListStreamSessionsByAccountCommand,
  ListStreamSessionsByAccountCommandInput,
  ListStreamSessionsByAccountCommandOutput,
} from "./commands/ListStreamSessionsByAccountCommand";
import {
  ListStreamSessionsCommand,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
} from "./commands/ListStreamSessionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RemoveStreamGroupLocationsCommand,
  RemoveStreamGroupLocationsCommandInput,
  RemoveStreamGroupLocationsCommandOutput,
} from "./commands/RemoveStreamGroupLocationsCommand";
import {
  StartStreamSessionCommand,
  StartStreamSessionCommandInput,
  StartStreamSessionCommandOutput,
} from "./commands/StartStreamSessionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateStreamSessionCommand,
  TerminateStreamSessionCommandInput,
  TerminateStreamSessionCommandOutput,
} from "./commands/TerminateStreamSessionCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateStreamGroupCommand,
  UpdateStreamGroupCommandInput,
  UpdateStreamGroupCommandOutput,
} from "./commands/UpdateStreamGroupCommand";
import { GameLiftStreamsClient, GameLiftStreamsClientConfig } from "./GameLiftStreamsClient";

const commands = {
  AddStreamGroupLocationsCommand,
  AssociateApplicationsCommand,
  CreateApplicationCommand,
  CreateStreamGroupCommand,
  CreateStreamSessionConnectionCommand,
  DeleteApplicationCommand,
  DeleteStreamGroupCommand,
  DisassociateApplicationsCommand,
  ExportStreamSessionFilesCommand,
  GetApplicationCommand,
  GetStreamGroupCommand,
  GetStreamSessionCommand,
  ListApplicationsCommand,
  ListStreamGroupsCommand,
  ListStreamSessionsCommand,
  ListStreamSessionsByAccountCommand,
  ListTagsForResourceCommand,
  RemoveStreamGroupLocationsCommand,
  StartStreamSessionCommand,
  TagResourceCommand,
  TerminateStreamSessionCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateStreamGroupCommand,
};

export interface GameLiftStreams {
  /**
   * @see {@link AddStreamGroupLocationsCommand}
   */
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddStreamGroupLocationsCommandOutput>;
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    cb: (err: any, data?: AddStreamGroupLocationsCommandOutput) => void
  ): void;
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddStreamGroupLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationsCommand}
   */
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationsCommandOutput>;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamGroupCommand}
   */
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamGroupCommandOutput>;
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    cb: (err: any, data?: CreateStreamGroupCommandOutput) => void
  ): void;
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamSessionConnectionCommand}
   */
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamSessionConnectionCommandOutput>;
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    cb: (err: any, data?: CreateStreamSessionConnectionCommandOutput) => void
  ): void;
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamSessionConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamGroupCommand}
   */
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamGroupCommandOutput>;
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    cb: (err: any, data?: DeleteStreamGroupCommandOutput) => void
  ): void;
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationsCommand}
   */
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationsCommandOutput>;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportStreamSessionFilesCommand}
   */
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportStreamSessionFilesCommandOutput>;
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    cb: (err: any, data?: ExportStreamSessionFilesCommandOutput) => void
  ): void;
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportStreamSessionFilesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamGroupCommand}
   */
  getStreamGroup(
    args: GetStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamGroupCommandOutput>;
  getStreamGroup(args: GetStreamGroupCommandInput, cb: (err: any, data?: GetStreamGroupCommandOutput) => void): void;
  getStreamGroup(
    args: GetStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamSessionCommand}
   */
  getStreamSession(
    args: GetStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamSessionCommandOutput>;
  getStreamSession(
    args: GetStreamSessionCommandInput,
    cb: (err: any, data?: GetStreamSessionCommandOutput) => void
  ): void;
  getStreamSession(
    args: GetStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamGroupsCommand}
   */
  listStreamGroups(): Promise<ListStreamGroupsCommandOutput>;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamGroupsCommandOutput>;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    cb: (err: any, data?: ListStreamGroupsCommandOutput) => void
  ): void;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamSessionsCommand}
   */
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamSessionsCommandOutput>;
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    cb: (err: any, data?: ListStreamSessionsCommandOutput) => void
  ): void;
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamSessionsByAccountCommand}
   */
  listStreamSessionsByAccount(): Promise<ListStreamSessionsByAccountCommandOutput>;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamSessionsByAccountCommandOutput>;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    cb: (err: any, data?: ListStreamSessionsByAccountCommandOutput) => void
  ): void;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamSessionsByAccountCommandOutput) => void
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
   * @see {@link RemoveStreamGroupLocationsCommand}
   */
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveStreamGroupLocationsCommandOutput>;
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    cb: (err: any, data?: RemoveStreamGroupLocationsCommandOutput) => void
  ): void;
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveStreamGroupLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamSessionCommand}
   */
  startStreamSession(
    args: StartStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamSessionCommandOutput>;
  startStreamSession(
    args: StartStreamSessionCommandInput,
    cb: (err: any, data?: StartStreamSessionCommandOutput) => void
  ): void;
  startStreamSession(
    args: StartStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamSessionCommandOutput) => void
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
   * @see {@link TerminateStreamSessionCommand}
   */
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateStreamSessionCommandOutput>;
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    cb: (err: any, data?: TerminateStreamSessionCommandOutput) => void
  ): void;
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateStreamSessionCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamGroupCommand}
   */
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamGroupCommandOutput>;
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    cb: (err: any, data?: UpdateStreamGroupCommandOutput) => void
  ): void;
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamGroupCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon GameLift Streams</fullname>
 *          <p>Amazon GameLift Streams provides a global cloud solution for content streaming experiences. Use Amazon GameLift Streams tools to upload and configure content for
 *          streaming, deploy and scale computing resources to host streams, and manage stream session placement to meet customer demand.</p>
 *          <p>This Reference Guide describes the Amazon GameLift Streams service API. You can use the API through the Amazon Web Services SDK, the Command Line Interface (AWS CLI), or by making
 *          direct REST calls through HTTPS.</p>
 *          <p>See the <i>Amazon GameLift Streams Developer Guide</i> for more information on how Amazon GameLift Streams works and how to work with it.</p>
 * @public
 */
export class GameLiftStreams extends GameLiftStreamsClient implements GameLiftStreams {}
createAggregatedClient(commands, GameLiftStreams);
