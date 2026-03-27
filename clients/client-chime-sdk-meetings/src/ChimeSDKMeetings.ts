// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ChimeSDKMeetingsClient } from "./ChimeSDKMeetingsClient";
import {
  type BatchCreateAttendeeCommandInput,
  type BatchCreateAttendeeCommandOutput,
  BatchCreateAttendeeCommand,
} from "./commands/BatchCreateAttendeeCommand";
import {
  type BatchUpdateAttendeeCapabilitiesExceptCommandInput,
  type BatchUpdateAttendeeCapabilitiesExceptCommandOutput,
  BatchUpdateAttendeeCapabilitiesExceptCommand,
} from "./commands/BatchUpdateAttendeeCapabilitiesExceptCommand";
import {
  type CreateAttendeeCommandInput,
  type CreateAttendeeCommandOutput,
  CreateAttendeeCommand,
} from "./commands/CreateAttendeeCommand";
import {
  type CreateMeetingCommandInput,
  type CreateMeetingCommandOutput,
  CreateMeetingCommand,
} from "./commands/CreateMeetingCommand";
import {
  type CreateMeetingWithAttendeesCommandInput,
  type CreateMeetingWithAttendeesCommandOutput,
  CreateMeetingWithAttendeesCommand,
} from "./commands/CreateMeetingWithAttendeesCommand";
import {
  type DeleteAttendeeCommandInput,
  type DeleteAttendeeCommandOutput,
  DeleteAttendeeCommand,
} from "./commands/DeleteAttendeeCommand";
import {
  type DeleteMeetingCommandInput,
  type DeleteMeetingCommandOutput,
  DeleteMeetingCommand,
} from "./commands/DeleteMeetingCommand";
import {
  type GetAttendeeCommandInput,
  type GetAttendeeCommandOutput,
  GetAttendeeCommand,
} from "./commands/GetAttendeeCommand";
import {
  type GetMeetingCommandInput,
  type GetMeetingCommandOutput,
  GetMeetingCommand,
} from "./commands/GetMeetingCommand";
import {
  type ListAttendeesCommandInput,
  type ListAttendeesCommandOutput,
  ListAttendeesCommand,
} from "./commands/ListAttendeesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartMeetingTranscriptionCommandInput,
  type StartMeetingTranscriptionCommandOutput,
  StartMeetingTranscriptionCommand,
} from "./commands/StartMeetingTranscriptionCommand";
import {
  type StopMeetingTranscriptionCommandInput,
  type StopMeetingTranscriptionCommandOutput,
  StopMeetingTranscriptionCommand,
} from "./commands/StopMeetingTranscriptionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAttendeeCapabilitiesCommandInput,
  type UpdateAttendeeCapabilitiesCommandOutput,
  UpdateAttendeeCapabilitiesCommand,
} from "./commands/UpdateAttendeeCapabilitiesCommand";
import { paginateListAttendees } from "./pagination/ListAttendeesPaginator";

const commands = {
  BatchCreateAttendeeCommand,
  BatchUpdateAttendeeCapabilitiesExceptCommand,
  CreateAttendeeCommand,
  CreateMeetingCommand,
  CreateMeetingWithAttendeesCommand,
  DeleteAttendeeCommand,
  DeleteMeetingCommand,
  GetAttendeeCommand,
  GetMeetingCommand,
  ListAttendeesCommand,
  ListTagsForResourceCommand,
  StartMeetingTranscriptionCommand,
  StopMeetingTranscriptionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAttendeeCapabilitiesCommand,
};
const paginators = {
  paginateListAttendees,
};

export interface ChimeSDKMeetings {
  /**
   * @see {@link BatchCreateAttendeeCommand}
   */
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateAttendeeCommandOutput>;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateAttendeeCapabilitiesExceptCommand}
   */
  batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateAttendeeCapabilitiesExceptCommandOutput>;
  batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    cb: (err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void
  ): void;
  batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAttendeeCommand}
   */
  createAttendee(
    args: CreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttendeeCommandOutput>;
  createAttendee(
    args: CreateAttendeeCommandInput,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  createAttendee(
    args: CreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMeetingCommand}
   */
  createMeeting(
    args: CreateMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingCommandOutput>;
  createMeeting(
    args: CreateMeetingCommandInput,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  createMeeting(
    args: CreateMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMeetingWithAttendeesCommand}
   */
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingWithAttendeesCommandOutput>;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttendeeCommand}
   */
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttendeeCommandOutput>;
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMeetingCommand}
   */
  deleteMeeting(
    args: DeleteMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMeetingCommandOutput>;
  deleteMeeting(
    args: DeleteMeetingCommandInput,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  deleteMeeting(
    args: DeleteMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttendeeCommand}
   */
  getAttendee(
    args: GetAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttendeeCommandOutput>;
  getAttendee(
    args: GetAttendeeCommandInput,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMeetingCommand}
   */
  getMeeting(
    args: GetMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMeetingCommandOutput>;
  getMeeting(
    args: GetMeetingCommandInput,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttendeesCommand}
   */
  listAttendees(
    args: ListAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeesCommandOutput>;
  listAttendees(
    args: ListAttendeesCommandInput,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  listAttendees(
    args: ListAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
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
   * @see {@link StartMeetingTranscriptionCommand}
   */
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMeetingTranscriptionCommandOutput>;
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMeetingTranscriptionCommand}
   */
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMeetingTranscriptionCommandOutput>;
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAttendeeCapabilitiesCommand}
   */
  updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAttendeeCapabilitiesCommandOutput>;
  updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    cb: (err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void
  ): void;
  updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttendeesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttendeesCommandOutput}.
   */
  paginateListAttendees(
    args: ListAttendeesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttendeesCommandOutput>;
}

/**
 * <p>The Amazon Chime SDK meetings APIs in this section allow software developers to create Amazon Chime SDK meetings, set the Amazon Web Services Regions for meetings, create and manage users, and send and
 *             receive meeting notifications. For more information about the meeting APIs, see
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Meetings.html">Amazon Chime SDK meetings</a>.</p>
 * @public
 */
export class ChimeSDKMeetings extends ChimeSDKMeetingsClient implements ChimeSDKMeetings {}
createAggregatedClient(commands, ChimeSDKMeetings, { paginators });
