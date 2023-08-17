// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { NimbleClient, NimbleClientConfig } from "./NimbleClient";

const commands = {
  AcceptEulasCommand,
  CreateLaunchProfileCommand,
  CreateStreamingImageCommand,
  CreateStreamingSessionCommand,
  CreateStreamingSessionStreamCommand,
  CreateStudioCommand,
  CreateStudioComponentCommand,
  DeleteLaunchProfileCommand,
  DeleteLaunchProfileMemberCommand,
  DeleteStreamingImageCommand,
  DeleteStreamingSessionCommand,
  DeleteStudioCommand,
  DeleteStudioComponentCommand,
  DeleteStudioMemberCommand,
  GetEulaCommand,
  GetLaunchProfileCommand,
  GetLaunchProfileDetailsCommand,
  GetLaunchProfileInitializationCommand,
  GetLaunchProfileMemberCommand,
  GetStreamingImageCommand,
  GetStreamingSessionCommand,
  GetStreamingSessionBackupCommand,
  GetStreamingSessionStreamCommand,
  GetStudioCommand,
  GetStudioComponentCommand,
  GetStudioMemberCommand,
  ListEulaAcceptancesCommand,
  ListEulasCommand,
  ListLaunchProfileMembersCommand,
  ListLaunchProfilesCommand,
  ListStreamingImagesCommand,
  ListStreamingSessionBackupsCommand,
  ListStreamingSessionsCommand,
  ListStudioComponentsCommand,
  ListStudioMembersCommand,
  ListStudiosCommand,
  ListTagsForResourceCommand,
  PutLaunchProfileMembersCommand,
  PutStudioMembersCommand,
  StartStreamingSessionCommand,
  StartStudioSSOConfigurationRepairCommand,
  StopStreamingSessionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLaunchProfileCommand,
  UpdateLaunchProfileMemberCommand,
  UpdateStreamingImageCommand,
  UpdateStudioCommand,
  UpdateStudioComponentCommand,
};

export interface Nimble {
  /**
   * @see {@link AcceptEulasCommand}
   */
  acceptEulas(args: AcceptEulasCommandInput, options?: __HttpHandlerOptions): Promise<AcceptEulasCommandOutput>;
  acceptEulas(args: AcceptEulasCommandInput, cb: (err: any, data?: AcceptEulasCommandOutput) => void): void;
  acceptEulas(
    args: AcceptEulasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptEulasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchProfileCommand}
   */
  createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchProfileCommandOutput>;
  createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void
  ): void;
  createLaunchProfile(
    args: CreateLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingImageCommand}
   */
  createStreamingImage(
    args: CreateStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingImageCommandOutput>;
  createStreamingImage(
    args: CreateStreamingImageCommandInput,
    cb: (err: any, data?: CreateStreamingImageCommandOutput) => void
  ): void;
  createStreamingImage(
    args: CreateStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingSessionCommand}
   */
  createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingSessionCommandOutput>;
  createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void
  ): void;
  createStreamingSession(
    args: CreateStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingSessionStreamCommand}
   */
  createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingSessionStreamCommandOutput>;
  createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void
  ): void;
  createStreamingSessionStream(
    args: CreateStreamingSessionStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStudioCommand}
   */
  createStudio(args: CreateStudioCommandInput, options?: __HttpHandlerOptions): Promise<CreateStudioCommandOutput>;
  createStudio(args: CreateStudioCommandInput, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
  createStudio(
    args: CreateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStudioComponentCommand}
   */
  createStudioComponent(
    args: CreateStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioComponentCommandOutput>;
  createStudioComponent(
    args: CreateStudioComponentCommandInput,
    cb: (err: any, data?: CreateStudioComponentCommandOutput) => void
  ): void;
  createStudioComponent(
    args: CreateStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchProfileCommand}
   */
  deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchProfileCommandOutput>;
  deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void
  ): void;
  deleteLaunchProfile(
    args: DeleteLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchProfileMemberCommand}
   */
  deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchProfileMemberCommandOutput>;
  deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void
  ): void;
  deleteLaunchProfileMember(
    args: DeleteLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamingImageCommand}
   */
  deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingImageCommandOutput>;
  deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void
  ): void;
  deleteStreamingImage(
    args: DeleteStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamingSessionCommand}
   */
  deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingSessionCommandOutput>;
  deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void
  ): void;
  deleteStreamingSession(
    args: DeleteStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioCommand}
   */
  deleteStudio(args: DeleteStudioCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStudioCommandOutput>;
  deleteStudio(args: DeleteStudioCommandInput, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
  deleteStudio(
    args: DeleteStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioComponentCommand}
   */
  deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioComponentCommandOutput>;
  deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void
  ): void;
  deleteStudioComponent(
    args: DeleteStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioMemberCommand}
   */
  deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioMemberCommandOutput>;
  deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void
  ): void;
  deleteStudioMember(
    args: DeleteStudioMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEulaCommand}
   */
  getEula(args: GetEulaCommandInput, options?: __HttpHandlerOptions): Promise<GetEulaCommandOutput>;
  getEula(args: GetEulaCommandInput, cb: (err: any, data?: GetEulaCommandOutput) => void): void;
  getEula(
    args: GetEulaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEulaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchProfileCommand}
   */
  getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileCommandOutput>;
  getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    cb: (err: any, data?: GetLaunchProfileCommandOutput) => void
  ): void;
  getLaunchProfile(
    args: GetLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchProfileDetailsCommand}
   */
  getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileDetailsCommandOutput>;
  getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void
  ): void;
  getLaunchProfileDetails(
    args: GetLaunchProfileDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchProfileInitializationCommand}
   */
  getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileInitializationCommandOutput>;
  getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void
  ): void;
  getLaunchProfileInitialization(
    args: GetLaunchProfileInitializationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchProfileMemberCommand}
   */
  getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchProfileMemberCommandOutput>;
  getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void
  ): void;
  getLaunchProfileMember(
    args: GetLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingImageCommand}
   */
  getStreamingImage(
    args: GetStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingImageCommandOutput>;
  getStreamingImage(
    args: GetStreamingImageCommandInput,
    cb: (err: any, data?: GetStreamingImageCommandOutput) => void
  ): void;
  getStreamingImage(
    args: GetStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingImageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingSessionCommand}
   */
  getStreamingSession(
    args: GetStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionCommandOutput>;
  getStreamingSession(
    args: GetStreamingSessionCommandInput,
    cb: (err: any, data?: GetStreamingSessionCommandOutput) => void
  ): void;
  getStreamingSession(
    args: GetStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingSessionBackupCommand}
   */
  getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionBackupCommandOutput>;
  getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    cb: (err: any, data?: GetStreamingSessionBackupCommandOutput) => void
  ): void;
  getStreamingSessionBackup(
    args: GetStreamingSessionBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingSessionStreamCommand}
   */
  getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingSessionStreamCommandOutput>;
  getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void
  ): void;
  getStreamingSessionStream(
    args: GetStreamingSessionStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStudioCommand}
   */
  getStudio(args: GetStudioCommandInput, options?: __HttpHandlerOptions): Promise<GetStudioCommandOutput>;
  getStudio(args: GetStudioCommandInput, cb: (err: any, data?: GetStudioCommandOutput) => void): void;
  getStudio(
    args: GetStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStudioComponentCommand}
   */
  getStudioComponent(
    args: GetStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioComponentCommandOutput>;
  getStudioComponent(
    args: GetStudioComponentCommandInput,
    cb: (err: any, data?: GetStudioComponentCommandOutput) => void
  ): void;
  getStudioComponent(
    args: GetStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStudioMemberCommand}
   */
  getStudioMember(
    args: GetStudioMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioMemberCommandOutput>;
  getStudioMember(args: GetStudioMemberCommandInput, cb: (err: any, data?: GetStudioMemberCommandOutput) => void): void;
  getStudioMember(
    args: GetStudioMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEulaAcceptancesCommand}
   */
  listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEulaAcceptancesCommandOutput>;
  listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void
  ): void;
  listEulaAcceptances(
    args: ListEulaAcceptancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEulasCommand}
   */
  listEulas(args: ListEulasCommandInput, options?: __HttpHandlerOptions): Promise<ListEulasCommandOutput>;
  listEulas(args: ListEulasCommandInput, cb: (err: any, data?: ListEulasCommandOutput) => void): void;
  listEulas(
    args: ListEulasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEulasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLaunchProfileMembersCommand}
   */
  listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchProfileMembersCommandOutput>;
  listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void
  ): void;
  listLaunchProfileMembers(
    args: ListLaunchProfileMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLaunchProfilesCommand}
   */
  listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchProfilesCommandOutput>;
  listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void
  ): void;
  listLaunchProfiles(
    args: ListLaunchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingImagesCommand}
   */
  listStreamingImages(
    args: ListStreamingImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingImagesCommandOutput>;
  listStreamingImages(
    args: ListStreamingImagesCommandInput,
    cb: (err: any, data?: ListStreamingImagesCommandOutput) => void
  ): void;
  listStreamingImages(
    args: ListStreamingImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingSessionBackupsCommand}
   */
  listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingSessionBackupsCommandOutput>;
  listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    cb: (err: any, data?: ListStreamingSessionBackupsCommandOutput) => void
  ): void;
  listStreamingSessionBackups(
    args: ListStreamingSessionBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingSessionBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingSessionsCommand}
   */
  listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingSessionsCommandOutput>;
  listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void
  ): void;
  listStreamingSessions(
    args: ListStreamingSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudioComponentsCommand}
   */
  listStudioComponents(
    args: ListStudioComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioComponentsCommandOutput>;
  listStudioComponents(
    args: ListStudioComponentsCommandInput,
    cb: (err: any, data?: ListStudioComponentsCommandOutput) => void
  ): void;
  listStudioComponents(
    args: ListStudioComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudioMembersCommand}
   */
  listStudioMembers(
    args: ListStudioMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioMembersCommandOutput>;
  listStudioMembers(
    args: ListStudioMembersCommandInput,
    cb: (err: any, data?: ListStudioMembersCommandOutput) => void
  ): void;
  listStudioMembers(
    args: ListStudioMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudiosCommand}
   */
  listStudios(args: ListStudiosCommandInput, options?: __HttpHandlerOptions): Promise<ListStudiosCommandOutput>;
  listStudios(args: ListStudiosCommandInput, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
  listStudios(
    args: ListStudiosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
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
   * @see {@link PutLaunchProfileMembersCommand}
   */
  putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLaunchProfileMembersCommandOutput>;
  putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void
  ): void;
  putLaunchProfileMembers(
    args: PutLaunchProfileMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStudioMembersCommand}
   */
  putStudioMembers(
    args: PutStudioMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStudioMembersCommandOutput>;
  putStudioMembers(
    args: PutStudioMembersCommandInput,
    cb: (err: any, data?: PutStudioMembersCommandOutput) => void
  ): void;
  putStudioMembers(
    args: PutStudioMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStudioMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamingSessionCommand}
   */
  startStreamingSession(
    args: StartStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamingSessionCommandOutput>;
  startStreamingSession(
    args: StartStreamingSessionCommandInput,
    cb: (err: any, data?: StartStreamingSessionCommandOutput) => void
  ): void;
  startStreamingSession(
    args: StartStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamingSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStudioSSOConfigurationRepairCommand}
   */
  startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStudioSSOConfigurationRepairCommandOutput>;
  startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void
  ): void;
  startStudioSSOConfigurationRepair(
    args: StartStudioSSOConfigurationRepairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStreamingSessionCommand}
   */
  stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStreamingSessionCommandOutput>;
  stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    cb: (err: any, data?: StopStreamingSessionCommandOutput) => void
  ): void;
  stopStreamingSession(
    args: StopStreamingSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamingSessionCommandOutput) => void
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
   * @see {@link UpdateLaunchProfileCommand}
   */
  updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchProfileCommandOutput>;
  updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void
  ): void;
  updateLaunchProfile(
    args: UpdateLaunchProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchProfileMemberCommand}
   */
  updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchProfileMemberCommandOutput>;
  updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void
  ): void;
  updateLaunchProfileMember(
    args: UpdateLaunchProfileMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamingImageCommand}
   */
  updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingImageCommandOutput>;
  updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void
  ): void;
  updateStreamingImage(
    args: UpdateStreamingImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStudioCommand}
   */
  updateStudio(args: UpdateStudioCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStudioCommandOutput>;
  updateStudio(args: UpdateStudioCommandInput, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
  updateStudio(
    args: UpdateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStudioComponentCommand}
   */
  updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioComponentCommandOutput>;
  updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void
  ): void;
  updateStudioComponent(
    args: UpdateStudioComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Welcome to the Amazon Nimble Studio API reference. This API reference provides
 *             methods, schema, resources, parameters, and more to help you get the most out of Nimble
 *             Studio.</p>
 *         <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and
 *             interactive content teams to create content securely within a scalable, private cloud
 *             service.</p>
 */
export class Nimble extends NimbleClient implements Nimble {}
createAggregatedClient(commands, Nimble);
