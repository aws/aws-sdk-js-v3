// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ChimeSDKMeetingsClient } from "./ChimeSDKMeetingsClient";
import {
  BatchCreateAttendeeCommand,
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "./commands/BatchCreateAttendeeCommand";
import {
  BatchUpdateAttendeeCapabilitiesExceptCommand,
  BatchUpdateAttendeeCapabilitiesExceptCommandInput,
  BatchUpdateAttendeeCapabilitiesExceptCommandOutput,
} from "./commands/BatchUpdateAttendeeCapabilitiesExceptCommand";
import {
  CreateAttendeeCommand,
  CreateAttendeeCommandInput,
  CreateAttendeeCommandOutput,
} from "./commands/CreateAttendeeCommand";
import {
  CreateMeetingCommand,
  CreateMeetingCommandInput,
  CreateMeetingCommandOutput,
} from "./commands/CreateMeetingCommand";
import {
  CreateMeetingWithAttendeesCommand,
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
} from "./commands/CreateMeetingWithAttendeesCommand";
import {
  DeleteAttendeeCommand,
  DeleteAttendeeCommandInput,
  DeleteAttendeeCommandOutput,
} from "./commands/DeleteAttendeeCommand";
import {
  DeleteMeetingCommand,
  DeleteMeetingCommandInput,
  DeleteMeetingCommandOutput,
} from "./commands/DeleteMeetingCommand";
import { GetAttendeeCommand, GetAttendeeCommandInput, GetAttendeeCommandOutput } from "./commands/GetAttendeeCommand";
import { GetMeetingCommand, GetMeetingCommandInput, GetMeetingCommandOutput } from "./commands/GetMeetingCommand";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "./commands/ListAttendeesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartMeetingTranscriptionCommand,
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
} from "./commands/StartMeetingTranscriptionCommand";
import {
  StopMeetingTranscriptionCommand,
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
} from "./commands/StopMeetingTranscriptionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAttendeeCapabilitiesCommand,
  UpdateAttendeeCapabilitiesCommandInput,
  UpdateAttendeeCapabilitiesCommandOutput,
} from "./commands/UpdateAttendeeCapabilitiesCommand";

/**
 * <p>The Amazon Chime SDK meetings APIs in this section allow software developers to create Amazon Chime SDK meetings, set the AWS Regions for meetings, create and manage users, and send and
 *             receive meeting notifications. For more information about the meeting APIs, see <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Meetings.html">Amazon Chime SDK meetings</a>.</p>
 */
export class ChimeSDKMeetings extends ChimeSDKMeetingsClient {
  /**
   * <p>Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateAttendeeCommandOutput>;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): Promise<BatchCreateAttendeeCommandOutput> | void {
    const command = new BatchCreateAttendeeCommand(args);
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
   * <p>Updates <code>AttendeeCapabilities</code> except the capabilities listed in an <code>ExcludedAttendeeIds</code> table.</p>
   *
   *         <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *
   *         <p>When using capabilities, be aware of these corner cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *             </li>
   *             <li>
   *                 <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *             </li>
   *             <li>
   *                 <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *             </li>
   *          </ul>
   */
  public batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateAttendeeCapabilitiesExceptCommandOutput>;
  public batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    cb: (err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void
  ): void;
  public batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void
  ): void;
  public batchUpdateAttendeeCapabilitiesExcept(
    args: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateAttendeeCapabilitiesExceptCommandOutput) => void
  ): Promise<BatchUpdateAttendeeCapabilitiesExceptCommandOutput> | void {
    const command = new BatchUpdateAttendeeCapabilitiesExceptCommand(args);
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
   * <p>
   *            Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *            in the
   *            <i>Amazon Chime Developer Guide</i>.
   *        </p>
   */
  public createAttendee(
    args: CreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttendeeCommandOutput>;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): Promise<CreateAttendeeCommandOutput> | void {
    const command = new CreateAttendeeCommand(args);
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
   * <p>Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   *            in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *            in the
   *            <i>Amazon Chime Developer Guide</i>.
   *        </p>
   */
  public createMeeting(
    args: CreateMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingCommandOutput>;
  public createMeeting(
    args: CreateMeetingCommandInput,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  public createMeeting(
    args: CreateMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  public createMeeting(
    args: CreateMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeetingCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingCommandOutput) => void
  ): Promise<CreateMeetingCommandOutput> | void {
    const command = new CreateMeetingCommand(args);
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
   * <p>
   *            Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   *            in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *            in the <i>Amazon Chime Developer Guide</i>.
   *        </p>
   */
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingWithAttendeesCommandOutput>;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): Promise<CreateMeetingWithAttendeesCommandOutput> | void {
    const command = new CreateMeetingWithAttendeesCommand(args);
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
   * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
   *            <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *            in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttendeeCommandOutput>;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAttendeeCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): Promise<DeleteAttendeeCommandOutput> | void {
    const command = new DeleteAttendeeCommand(args);
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
   * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
   *            joining the meeting. For more information about the Amazon Chime SDK, see
   *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
   *            <i>Amazon Chime Developer Guide</i>.</p>
   */
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMeetingCommandOutput>;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMeetingCommandOutput) => void),
    cb?: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): Promise<DeleteMeetingCommandOutput> | void {
    const command = new DeleteMeetingCommand(args);
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
   * <p>
   *             Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see
   *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *             in the <i>Amazon Chime Developer Guide</i>.
   *         </p>
   */
  public getAttendee(args: GetAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<GetAttendeeCommandOutput>;
  public getAttendee(args: GetAttendeeCommandInput, cb: (err: any, data?: GetAttendeeCommandOutput) => void): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAttendeeCommandOutput) => void),
    cb?: (err: any, data?: GetAttendeeCommandOutput) => void
  ): Promise<GetAttendeeCommandOutput> | void {
    const command = new GetAttendeeCommand(args);
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
   * <p>Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
   *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *             in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public getMeeting(args: GetMeetingCommandInput, options?: __HttpHandlerOptions): Promise<GetMeetingCommandOutput>;
  public getMeeting(args: GetMeetingCommandInput, cb: (err: any, data?: GetMeetingCommandOutput) => void): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMeetingCommandOutput) => void),
    cb?: (err: any, data?: GetMeetingCommandOutput) => void
  ): Promise<GetMeetingCommandOutput> | void {
    const command = new GetMeetingCommand(args);
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
   * <p>
   *             Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   *             in the <i>Amazon Chime Developer Guide</i>.
   *         </p>
   */
  public listAttendees(
    args: ListAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeesCommandOutput>;
  public listAttendees(
    args: ListAttendeesCommandInput,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  public listAttendees(
    args: ListAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  public listAttendees(
    args: ListAttendeesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttendeesCommandOutput) => void),
    cb?: (err: any, data?: ListAttendeesCommandOutput) => void
  ): Promise<ListAttendeesCommandOutput> | void {
    const command = new ListAttendeesCommand(args);
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
   * <p>Returns a list of the tags available for the specified resource.</p>
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
   * <p>Starts transcription for the specified <code>meetingId</code>.</p>
   */
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMeetingTranscriptionCommandOutput>;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMeetingTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): Promise<StartMeetingTranscriptionCommandOutput> | void {
    const command = new StartMeetingTranscriptionCommand(args);
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
   * <p>Stops transcription for the specified <code>meetingId</code>.</p>
   */
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMeetingTranscriptionCommandOutput>;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopMeetingTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): Promise<StopMeetingTranscriptionCommandOutput> | void {
    const command = new StopMeetingTranscriptionCommand(args);
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
   * <p>The resource that supports tags.</p>
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
   * <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you
   *                 attempt to remove tags from a resource that were already removed. Note the following:</p>
   *             <ul>
   *             <li>
   *                <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information,
   *                 see the documentation for the service whose resource you want to untag.</p>
   *             </li>
   *             <li>
   *                <p>You can only tag resources that are located in the specified AWS Region for the calling AWS account.</p>
   *             </li>
   *          </ul>
   *
   *                 <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *
   *                 <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource.
   *                 For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p>
   *
   *                <p>
   *             <code>tag:UntagResource</code>
   *          </p>
   *
   *                 <p>
   *             <code>ChimeSDKMeetings:DeleteTags</code>
   *          </p>
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
   * <p>The capabilties that you want to update.</p>
   *         <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *
   *         <p>When using capabilities, be aware of these corner cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *             </li>
   *             <li>
   *                 <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *             </li>
   *             <li>
   *                 <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *             </li>
   *          </ul>
   */
  public updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAttendeeCapabilitiesCommandOutput>;
  public updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    cb: (err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void
  ): void;
  public updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void
  ): void;
  public updateAttendeeCapabilities(
    args: UpdateAttendeeCapabilitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void),
    cb?: (err: any, data?: UpdateAttendeeCapabilitiesCommandOutput) => void
  ): Promise<UpdateAttendeeCapabilitiesCommandOutput> | void {
    const command = new UpdateAttendeeCapabilitiesCommand(args);
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
