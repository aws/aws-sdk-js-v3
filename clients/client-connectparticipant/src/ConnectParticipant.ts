// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelParticipantAuthenticationCommand,
  CancelParticipantAuthenticationCommandInput,
  CancelParticipantAuthenticationCommandOutput,
} from "./commands/CancelParticipantAuthenticationCommand";
import {
  CompleteAttachmentUploadCommand,
  CompleteAttachmentUploadCommandInput,
  CompleteAttachmentUploadCommandOutput,
} from "./commands/CompleteAttachmentUploadCommand";
import {
  CreateParticipantConnectionCommand,
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
} from "./commands/CreateParticipantConnectionCommand";
import {
  DescribeViewCommand,
  DescribeViewCommandInput,
  DescribeViewCommandOutput,
} from "./commands/DescribeViewCommand";
import {
  DisconnectParticipantCommand,
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import {
  GetAttachmentCommand,
  GetAttachmentCommandInput,
  GetAttachmentCommandOutput,
} from "./commands/GetAttachmentCommand";
import {
  GetAuthenticationUrlCommand,
  GetAuthenticationUrlCommandInput,
  GetAuthenticationUrlCommandOutput,
} from "./commands/GetAuthenticationUrlCommand";
import {
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "./commands/GetTranscriptCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { SendMessageCommand, SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import {
  StartAttachmentUploadCommand,
  StartAttachmentUploadCommandInput,
  StartAttachmentUploadCommandOutput,
} from "./commands/StartAttachmentUploadCommand";
import { ConnectParticipantClient, ConnectParticipantClientConfig } from "./ConnectParticipantClient";

const commands = {
  CancelParticipantAuthenticationCommand,
  CompleteAttachmentUploadCommand,
  CreateParticipantConnectionCommand,
  DescribeViewCommand,
  DisconnectParticipantCommand,
  GetAttachmentCommand,
  GetAuthenticationUrlCommand,
  GetTranscriptCommand,
  SendEventCommand,
  SendMessageCommand,
  StartAttachmentUploadCommand,
};

export interface ConnectParticipant {
  /**
   * @see {@link CancelParticipantAuthenticationCommand}
   */
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelParticipantAuthenticationCommandOutput>;
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    cb: (err: any, data?: CancelParticipantAuthenticationCommandOutput) => void
  ): void;
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelParticipantAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteAttachmentUploadCommand}
   */
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteAttachmentUploadCommandOutput>;
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParticipantConnectionCommand}
   */
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantConnectionCommandOutput>;
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeViewCommand}
   */
  describeView(args: DescribeViewCommandInput, options?: __HttpHandlerOptions): Promise<DescribeViewCommandOutput>;
  describeView(args: DescribeViewCommandInput, cb: (err: any, data?: DescribeViewCommandOutput) => void): void;
  describeView(
    args: DescribeViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectParticipantCommand}
   */
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectParticipantCommandOutput>;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttachmentCommand}
   */
  getAttachment(args: GetAttachmentCommandInput, options?: __HttpHandlerOptions): Promise<GetAttachmentCommandOutput>;
  getAttachment(args: GetAttachmentCommandInput, cb: (err: any, data?: GetAttachmentCommandOutput) => void): void;
  getAttachment(
    args: GetAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthenticationUrlCommand}
   */
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthenticationUrlCommandOutput>;
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    cb: (err: any, data?: GetAuthenticationUrlCommandOutput) => void
  ): void;
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthenticationUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTranscriptCommand}
   */
  getTranscript(args: GetTranscriptCommandInput, options?: __HttpHandlerOptions): Promise<GetTranscriptCommandOutput>;
  getTranscript(args: GetTranscriptCommandInput, cb: (err: any, data?: GetTranscriptCommandOutput) => void): void;
  getTranscript(
    args: GetTranscriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTranscriptCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEventCommand}
   */
  sendEvent(args: SendEventCommandInput, options?: __HttpHandlerOptions): Promise<SendEventCommandOutput>;
  sendEvent(args: SendEventCommandInput, cb: (err: any, data?: SendEventCommandOutput) => void): void;
  sendEvent(
    args: SendEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(args: SendMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageCommandOutput>;
  sendMessage(args: SendMessageCommandInput, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAttachmentUploadCommand}
   */
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAttachmentUploadCommandOutput>;
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;
}

/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html">Participant Service actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Participant_Service.html">Participant Service data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that
 *             enables companies of any size to deliver superior customer service at a lower cost.
 *                 Amazon Connect communications capabilities make it easy for companies to deliver
 *             personalized interactions across communication channels, including chat. </p>
 *          <p>Use the Amazon Connect Participant Service to manage participants (for example,
 *             agents, customers, and managers listening in), and to send messages and events within a
 *             chat contact. The APIs in the service enable the following: sending chat messages,
 *             attachment sharing, managing a participant's connection state and message events, and
 *             retrieving chat transcripts.</p>
 * @public
 */
export class ConnectParticipant extends ConnectParticipantClient implements ConnectParticipant {}
createAggregatedClient(commands, ConnectParticipant);
