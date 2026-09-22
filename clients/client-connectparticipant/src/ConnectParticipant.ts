// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CancelParticipantAuthenticationCommandInput,
  type CancelParticipantAuthenticationCommandOutput,
  CancelParticipantAuthenticationCommand,
} from "./commands/CancelParticipantAuthenticationCommand";
import {
  type CompleteAttachmentUploadCommandInput,
  type CompleteAttachmentUploadCommandOutput,
  CompleteAttachmentUploadCommand,
} from "./commands/CompleteAttachmentUploadCommand";
import {
  type CreateParticipantConnectionCommandInput,
  type CreateParticipantConnectionCommandOutput,
  CreateParticipantConnectionCommand,
} from "./commands/CreateParticipantConnectionCommand";
import {
  type DescribeViewCommandInput,
  type DescribeViewCommandOutput,
  DescribeViewCommand,
} from "./commands/DescribeViewCommand";
import {
  type DisconnectParticipantCommandInput,
  type DisconnectParticipantCommandOutput,
  DisconnectParticipantCommand,
} from "./commands/DisconnectParticipantCommand";
import {
  type GetAttachmentCommandInput,
  type GetAttachmentCommandOutput,
  GetAttachmentCommand,
} from "./commands/GetAttachmentCommand";
import {
  type GetAuthenticationUrlCommandInput,
  type GetAuthenticationUrlCommandOutput,
  GetAuthenticationUrlCommand,
} from "./commands/GetAuthenticationUrlCommand";
import {
  type GetTranscriptCommandInput,
  type GetTranscriptCommandOutput,
  GetTranscriptCommand,
} from "./commands/GetTranscriptCommand";
import { type SendEventCommandInput, type SendEventCommandOutput, SendEventCommand } from "./commands/SendEventCommand";
import {
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
  SendMessageCommand,
} from "./commands/SendMessageCommand";
import {
  type StartAttachmentUploadCommandInput,
  type StartAttachmentUploadCommandOutput,
  StartAttachmentUploadCommand,
} from "./commands/StartAttachmentUploadCommand";
import { ConnectParticipantClient } from "./ConnectParticipantClient";
import { paginateGetTranscript } from "./pagination/GetTranscriptPaginator";

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
const paginators = {
  paginateGetTranscript,
};

/**
 * @public
 */
export interface ConnectParticipantRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ConnectParticipant {
  /**
   * @see {@link CancelParticipantAuthenticationCommand}
   */
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<CancelParticipantAuthenticationCommandOutput>;
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    cb: (err: any, data?: CancelParticipantAuthenticationCommandOutput) => void
  ): void;
  cancelParticipantAuthentication(
    args: CancelParticipantAuthenticationCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: CancelParticipantAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteAttachmentUploadCommand}
   */
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<CompleteAttachmentUploadCommandOutput>;
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;
  completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParticipantConnectionCommand}
   */
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<CreateParticipantConnectionCommandOutput>;
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;
  createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeViewCommand}
   */
  describeView(
    args: DescribeViewCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<DescribeViewCommandOutput>;
  describeView(
    args: DescribeViewCommandInput,
    cb: (err: any, data?: DescribeViewCommandOutput) => void
  ): void;
  describeView(
    args: DescribeViewCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: DescribeViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectParticipantCommand}
   */
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<DisconnectParticipantCommandOutput>;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttachmentCommand}
   */
  getAttachment(
    args: GetAttachmentCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<GetAttachmentCommandOutput>;
  getAttachment(
    args: GetAttachmentCommandInput,
    cb: (err: any, data?: GetAttachmentCommandOutput) => void
  ): void;
  getAttachment(
    args: GetAttachmentCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: GetAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthenticationUrlCommand}
   */
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<GetAuthenticationUrlCommandOutput>;
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    cb: (err: any, data?: GetAuthenticationUrlCommandOutput) => void
  ): void;
  getAuthenticationUrl(
    args: GetAuthenticationUrlCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: GetAuthenticationUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTranscriptCommand}
   */
  getTranscript(
    args: GetTranscriptCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<GetTranscriptCommandOutput>;
  getTranscript(
    args: GetTranscriptCommandInput,
    cb: (err: any, data?: GetTranscriptCommandOutput) => void
  ): void;
  getTranscript(
    args: GetTranscriptCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: GetTranscriptCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEventCommand}
   */
  sendEvent(
    args: SendEventCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<SendEventCommandOutput>;
  sendEvent(
    args: SendEventCommandInput,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;
  sendEvent(
    args: SendEventCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<SendMessageCommandOutput>;
  sendMessage(
    args: SendMessageCommandInput,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAttachmentUploadCommand}
   */
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options?: ConnectParticipantRequestOptions
  ): Promise<StartAttachmentUploadCommandOutput>;
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;
  startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options: ConnectParticipantRequestOptions,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTranscriptCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTranscriptCommandOutput}.
   */
  paginateGetTranscript(
    args: GetTranscriptCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTranscriptCommandOutput>;
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
 *          <p>Connect Customer is an easy-to-use omnichannel cloud contact center service that
 *             enables companies of any size to deliver superior customer service at a lower cost.
 *                 Connect Customer communications capabilities make it easy for companies to deliver
 *             personalized interactions across communication channels, including chat. </p>
 *          <p>Use the Connect Customer Participant Service to manage participants (for example,
 *             agents, customers, and managers listening in), and to send messages and events within a
 *             chat contact. The APIs in the service enable the following: sending chat messages,
 *             attachment sharing, managing a participant's connection state and message events, and
 *             retrieving chat transcripts.</p>
 * @public
 */
export class ConnectParticipant extends ConnectParticipantClient implements ConnectParticipant {}
createAggregatedClient(commands, ConnectParticipant, { paginators });
