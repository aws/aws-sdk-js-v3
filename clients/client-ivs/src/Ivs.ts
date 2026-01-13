// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetChannelCommand,
  BatchGetChannelCommandInput,
  BatchGetChannelCommandOutput,
} from "./commands/BatchGetChannelCommand";
import {
  BatchGetStreamKeyCommand,
  BatchGetStreamKeyCommandInput,
  BatchGetStreamKeyCommandOutput,
} from "./commands/BatchGetStreamKeyCommand";
import {
  BatchStartViewerSessionRevocationCommand,
  BatchStartViewerSessionRevocationCommandInput,
  BatchStartViewerSessionRevocationCommandOutput,
} from "./commands/BatchStartViewerSessionRevocationCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreatePlaybackRestrictionPolicyCommand,
  CreatePlaybackRestrictionPolicyCommandInput,
  CreatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/CreatePlaybackRestrictionPolicyCommand";
import {
  CreateRecordingConfigurationCommand,
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
} from "./commands/CreateRecordingConfigurationCommand";
import {
  CreateStreamKeyCommand,
  CreateStreamKeyCommandInput,
  CreateStreamKeyCommandOutput,
} from "./commands/CreateStreamKeyCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeletePlaybackKeyPairCommand,
  DeletePlaybackKeyPairCommandInput,
  DeletePlaybackKeyPairCommandOutput,
} from "./commands/DeletePlaybackKeyPairCommand";
import {
  DeletePlaybackRestrictionPolicyCommand,
  DeletePlaybackRestrictionPolicyCommandInput,
  DeletePlaybackRestrictionPolicyCommandOutput,
} from "./commands/DeletePlaybackRestrictionPolicyCommand";
import {
  DeleteRecordingConfigurationCommand,
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
} from "./commands/DeleteRecordingConfigurationCommand";
import {
  DeleteStreamKeyCommand,
  DeleteStreamKeyCommandInput,
  DeleteStreamKeyCommandOutput,
} from "./commands/DeleteStreamKeyCommand";
import { GetChannelCommand, GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import {
  GetPlaybackKeyPairCommand,
  GetPlaybackKeyPairCommandInput,
  GetPlaybackKeyPairCommandOutput,
} from "./commands/GetPlaybackKeyPairCommand";
import {
  GetPlaybackRestrictionPolicyCommand,
  GetPlaybackRestrictionPolicyCommandInput,
  GetPlaybackRestrictionPolicyCommandOutput,
} from "./commands/GetPlaybackRestrictionPolicyCommand";
import {
  GetRecordingConfigurationCommand,
  GetRecordingConfigurationCommandInput,
  GetRecordingConfigurationCommandOutput,
} from "./commands/GetRecordingConfigurationCommand";
import { GetStreamCommand, GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand";
import {
  GetStreamKeyCommand,
  GetStreamKeyCommandInput,
  GetStreamKeyCommandOutput,
} from "./commands/GetStreamKeyCommand";
import {
  GetStreamSessionCommand,
  GetStreamSessionCommandInput,
  GetStreamSessionCommandOutput,
} from "./commands/GetStreamSessionCommand";
import {
  ImportPlaybackKeyPairCommand,
  ImportPlaybackKeyPairCommandInput,
  ImportPlaybackKeyPairCommandOutput,
} from "./commands/ImportPlaybackKeyPairCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListPlaybackKeyPairsCommand,
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "./commands/ListPlaybackKeyPairsCommand";
import {
  ListPlaybackRestrictionPoliciesCommand,
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput,
} from "./commands/ListPlaybackRestrictionPoliciesCommand";
import {
  ListRecordingConfigurationsCommand,
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "./commands/ListRecordingConfigurationsCommand";
import {
  ListStreamKeysCommand,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
} from "./commands/ListStreamKeysCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
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
import { PutMetadataCommand, PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import {
  StartViewerSessionRevocationCommand,
  StartViewerSessionRevocationCommandInput,
  StartViewerSessionRevocationCommandOutput,
} from "./commands/StartViewerSessionRevocationCommand";
import { StopStreamCommand, StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand";
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
  UpdatePlaybackRestrictionPolicyCommand,
  UpdatePlaybackRestrictionPolicyCommandInput,
  UpdatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/UpdatePlaybackRestrictionPolicyCommand";
import { IvsClient } from "./IvsClient";

const commands = {
  BatchGetChannelCommand,
  BatchGetStreamKeyCommand,
  BatchStartViewerSessionRevocationCommand,
  CreateChannelCommand,
  CreatePlaybackRestrictionPolicyCommand,
  CreateRecordingConfigurationCommand,
  CreateStreamKeyCommand,
  DeleteChannelCommand,
  DeletePlaybackKeyPairCommand,
  DeletePlaybackRestrictionPolicyCommand,
  DeleteRecordingConfigurationCommand,
  DeleteStreamKeyCommand,
  GetChannelCommand,
  GetPlaybackKeyPairCommand,
  GetPlaybackRestrictionPolicyCommand,
  GetRecordingConfigurationCommand,
  GetStreamCommand,
  GetStreamKeyCommand,
  GetStreamSessionCommand,
  ImportPlaybackKeyPairCommand,
  ListChannelsCommand,
  ListPlaybackKeyPairsCommand,
  ListPlaybackRestrictionPoliciesCommand,
  ListRecordingConfigurationsCommand,
  ListStreamKeysCommand,
  ListStreamsCommand,
  ListStreamSessionsCommand,
  ListTagsForResourceCommand,
  PutMetadataCommand,
  StartViewerSessionRevocationCommand,
  StopStreamCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdatePlaybackRestrictionPolicyCommand,
};

export interface Ivs {
  /**
   * @see {@link BatchGetChannelCommand}
   */
  batchGetChannel(
    args: BatchGetChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetChannelCommandOutput>;
  batchGetChannel(
    args: BatchGetChannelCommandInput,
    cb: (err: any, data?: BatchGetChannelCommandOutput) => void
  ): void;
  batchGetChannel(
    args: BatchGetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetStreamKeyCommand}
   */
  batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetStreamKeyCommandOutput>;
  batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    cb: (err: any, data?: BatchGetStreamKeyCommandOutput) => void
  ): void;
  batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetStreamKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStartViewerSessionRevocationCommand}
   */
  batchStartViewerSessionRevocation(
    args: BatchStartViewerSessionRevocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStartViewerSessionRevocationCommandOutput>;
  batchStartViewerSessionRevocation(
    args: BatchStartViewerSessionRevocationCommandInput,
    cb: (err: any, data?: BatchStartViewerSessionRevocationCommandOutput) => void
  ): void;
  batchStartViewerSessionRevocation(
    args: BatchStartViewerSessionRevocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStartViewerSessionRevocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlaybackRestrictionPolicyCommand}
   */
  createPlaybackRestrictionPolicy(): Promise<CreatePlaybackRestrictionPolicyCommandOutput>;
  createPlaybackRestrictionPolicy(
    args: CreatePlaybackRestrictionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlaybackRestrictionPolicyCommandOutput>;
  createPlaybackRestrictionPolicy(
    args: CreatePlaybackRestrictionPolicyCommandInput,
    cb: (err: any, data?: CreatePlaybackRestrictionPolicyCommandOutput) => void
  ): void;
  createPlaybackRestrictionPolicy(
    args: CreatePlaybackRestrictionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlaybackRestrictionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecordingConfigurationCommand}
   */
  createRecordingConfiguration(
    args: CreateRecordingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecordingConfigurationCommandOutput>;
  createRecordingConfiguration(
    args: CreateRecordingConfigurationCommandInput,
    cb: (err: any, data?: CreateRecordingConfigurationCommandOutput) => void
  ): void;
  createRecordingConfiguration(
    args: CreateRecordingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecordingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamKeyCommand}
   */
  createStreamKey(
    args: CreateStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamKeyCommandOutput>;
  createStreamKey(
    args: CreateStreamKeyCommandInput,
    cb: (err: any, data?: CreateStreamKeyCommandOutput) => void
  ): void;
  createStreamKey(
    args: CreateStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlaybackKeyPairCommand}
   */
  deletePlaybackKeyPair(
    args: DeletePlaybackKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaybackKeyPairCommandOutput>;
  deletePlaybackKeyPair(
    args: DeletePlaybackKeyPairCommandInput,
    cb: (err: any, data?: DeletePlaybackKeyPairCommandOutput) => void
  ): void;
  deletePlaybackKeyPair(
    args: DeletePlaybackKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaybackKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlaybackRestrictionPolicyCommand}
   */
  deletePlaybackRestrictionPolicy(
    args: DeletePlaybackRestrictionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaybackRestrictionPolicyCommandOutput>;
  deletePlaybackRestrictionPolicy(
    args: DeletePlaybackRestrictionPolicyCommandInput,
    cb: (err: any, data?: DeletePlaybackRestrictionPolicyCommandOutput) => void
  ): void;
  deletePlaybackRestrictionPolicy(
    args: DeletePlaybackRestrictionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaybackRestrictionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecordingConfigurationCommand}
   */
  deleteRecordingConfiguration(
    args: DeleteRecordingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecordingConfigurationCommandOutput>;
  deleteRecordingConfiguration(
    args: DeleteRecordingConfigurationCommandInput,
    cb: (err: any, data?: DeleteRecordingConfigurationCommandOutput) => void
  ): void;
  deleteRecordingConfiguration(
    args: DeleteRecordingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecordingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamKeyCommand}
   */
  deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamKeyCommandOutput>;
  deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    cb: (err: any, data?: DeleteStreamKeyCommandOutput) => void
  ): void;
  deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelCommandOutput>;
  getChannel(
    args: GetChannelCommandInput,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;
  getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaybackKeyPairCommand}
   */
  getPlaybackKeyPair(
    args: GetPlaybackKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlaybackKeyPairCommandOutput>;
  getPlaybackKeyPair(
    args: GetPlaybackKeyPairCommandInput,
    cb: (err: any, data?: GetPlaybackKeyPairCommandOutput) => void
  ): void;
  getPlaybackKeyPair(
    args: GetPlaybackKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaybackKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaybackRestrictionPolicyCommand}
   */
  getPlaybackRestrictionPolicy(
    args: GetPlaybackRestrictionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlaybackRestrictionPolicyCommandOutput>;
  getPlaybackRestrictionPolicy(
    args: GetPlaybackRestrictionPolicyCommandInput,
    cb: (err: any, data?: GetPlaybackRestrictionPolicyCommandOutput) => void
  ): void;
  getPlaybackRestrictionPolicy(
    args: GetPlaybackRestrictionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaybackRestrictionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordingConfigurationCommand}
   */
  getRecordingConfiguration(
    args: GetRecordingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecordingConfigurationCommandOutput>;
  getRecordingConfiguration(
    args: GetRecordingConfigurationCommandInput,
    cb: (err: any, data?: GetRecordingConfigurationCommandOutput) => void
  ): void;
  getRecordingConfiguration(
    args: GetRecordingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamCommand}
   */
  getStream(
    args: GetStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamCommandOutput>;
  getStream(
    args: GetStreamCommandInput,
    cb: (err: any, data?: GetStreamCommandOutput) => void
  ): void;
  getStream(
    args: GetStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamKeyCommand}
   */
  getStreamKey(
    args: GetStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamKeyCommandOutput>;
  getStreamKey(
    args: GetStreamKeyCommandInput,
    cb: (err: any, data?: GetStreamKeyCommandOutput) => void
  ): void;
  getStreamKey(
    args: GetStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamKeyCommandOutput) => void
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
   * @see {@link ImportPlaybackKeyPairCommand}
   */
  importPlaybackKeyPair(
    args: ImportPlaybackKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportPlaybackKeyPairCommandOutput>;
  importPlaybackKeyPair(
    args: ImportPlaybackKeyPairCommandInput,
    cb: (err: any, data?: ImportPlaybackKeyPairCommandOutput) => void
  ): void;
  importPlaybackKeyPair(
    args: ImportPlaybackKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportPlaybackKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlaybackKeyPairsCommand}
   */
  listPlaybackKeyPairs(): Promise<ListPlaybackKeyPairsCommandOutput>;
  listPlaybackKeyPairs(
    args: ListPlaybackKeyPairsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaybackKeyPairsCommandOutput>;
  listPlaybackKeyPairs(
    args: ListPlaybackKeyPairsCommandInput,
    cb: (err: any, data?: ListPlaybackKeyPairsCommandOutput) => void
  ): void;
  listPlaybackKeyPairs(
    args: ListPlaybackKeyPairsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaybackKeyPairsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlaybackRestrictionPoliciesCommand}
   */
  listPlaybackRestrictionPolicies(): Promise<ListPlaybackRestrictionPoliciesCommandOutput>;
  listPlaybackRestrictionPolicies(
    args: ListPlaybackRestrictionPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaybackRestrictionPoliciesCommandOutput>;
  listPlaybackRestrictionPolicies(
    args: ListPlaybackRestrictionPoliciesCommandInput,
    cb: (err: any, data?: ListPlaybackRestrictionPoliciesCommandOutput) => void
  ): void;
  listPlaybackRestrictionPolicies(
    args: ListPlaybackRestrictionPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaybackRestrictionPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecordingConfigurationsCommand}
   */
  listRecordingConfigurations(): Promise<ListRecordingConfigurationsCommandOutput>;
  listRecordingConfigurations(
    args: ListRecordingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecordingConfigurationsCommandOutput>;
  listRecordingConfigurations(
    args: ListRecordingConfigurationsCommandInput,
    cb: (err: any, data?: ListRecordingConfigurationsCommandOutput) => void
  ): void;
  listRecordingConfigurations(
    args: ListRecordingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamKeysCommand}
   */
  listStreamKeys(
    args: ListStreamKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamKeysCommandOutput>;
  listStreamKeys(
    args: ListStreamKeysCommandInput,
    cb: (err: any, data?: ListStreamKeysCommandOutput) => void
  ): void;
  listStreamKeys(
    args: ListStreamKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
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
   * @see {@link PutMetadataCommand}
   */
  putMetadata(
    args: PutMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetadataCommandOutput>;
  putMetadata(
    args: PutMetadataCommandInput,
    cb: (err: any, data?: PutMetadataCommandOutput) => void
  ): void;
  putMetadata(
    args: PutMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link StartViewerSessionRevocationCommand}
   */
  startViewerSessionRevocation(
    args: StartViewerSessionRevocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartViewerSessionRevocationCommandOutput>;
  startViewerSessionRevocation(
    args: StartViewerSessionRevocationCommandInput,
    cb: (err: any, data?: StartViewerSessionRevocationCommandOutput) => void
  ): void;
  startViewerSessionRevocation(
    args: StartViewerSessionRevocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartViewerSessionRevocationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStreamCommand}
   */
  stopStream(
    args: StopStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStreamCommandOutput>;
  stopStream(
    args: StopStreamCommandInput,
    cb: (err: any, data?: StopStreamCommandOutput) => void
  ): void;
  stopStream(
    args: StopStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamCommandOutput) => void
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
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlaybackRestrictionPolicyCommand}
   */
  updatePlaybackRestrictionPolicy(
    args: UpdatePlaybackRestrictionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlaybackRestrictionPolicyCommandOutput>;
  updatePlaybackRestrictionPolicy(
    args: UpdatePlaybackRestrictionPolicyCommandInput,
    cb: (err: any, data?: UpdatePlaybackRestrictionPolicyCommandOutput) => void
  ): void;
  updatePlaybackRestrictionPolicy(
    args: UpdatePlaybackRestrictionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlaybackRestrictionPolicyCommandOutput) => void
  ): void;
}

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP
 *       API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both
 *       requests and responses, including errors.</p>
 *          <p>The API is an Amazon Web Services regional service. For a list of supported regions and
 *       Amazon IVS HTTPS service endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
 *           <i>Amazon Web Services General Reference</i>.</p>
 *          <p>
 *             <i>
 *                <b>All API request parameters and URLs are case sensitive.
 *         </b>
 *             </i>
 *          </p>
 *          <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document
 *       History</a>.</p>
 *          <p>
 *             <b>Allowed Header Values</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept:</b>
 *                   </code> application/json</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept-Encoding:</b>
 *                   </code> gzip, deflate</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Content-Type:</b>
 *                   </code>application/json</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Key Concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Channel</b> — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stream key</b> — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. <i>
 *                      <b>Treat the stream key like a secret, since it allows anyone to stream to the channel.</b>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Playback key pair</b> — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Recording configuration</b> — Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Playback restriction policy</b> — Restricts playback by countries and/or origin sites.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about your IVS live stream, also see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/getting-started.html">Getting Started with IVS Low-Latency Streaming</a>.</p>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services
 *       resource. A tag comprises a <i>key</i> and a <i>value</i>, both
 *       set by you. For example, you might set a tag as <code>topic:nature</code> to label a
 *       particular video category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented
 *       there.</p>
 *          <p>Tags can help you identify and organize your Amazon Web Services resources. For example,
 *       you can use the same tag for different resources to indicate that they are related. You can
 *       also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p>
 *          <p>The Amazon IVS API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
 *       resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording
 *       Configurations.</p>
 *          <p>At most 50 tags can be applied to a resource. </p>
 *          <p>
 *             <b>Authentication versus Authorization</b>
 *          </p>
 *          <p>Note the differences between these concepts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Authentication</i> is about verifying identity. You need to be
 *           authenticated to sign Amazon IVS API requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition,
 *           authorization is needed to view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon IVS private channels</a>.
 *           (Private channels are channels that are enabled for "playback authorization.")</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Authentication</b>
 *          </p>
 *          <p>All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services
 *       Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying
 *       API calls for you. However, if your application calls the Amazon IVS API directly, it’s your
 *       responsibility to sign the requests.</p>
 *          <p>You generate a signature using valid Amazon Web Services credentials that have permission
 *       to perform the requested action. For example, you must sign PutMetadata requests with a
 *       signature generated from a user account that has the <code>ivs:PutMetadata</code>
 *       permission.</p>
 *          <p>For more information:</p>
 *          <ul>
 *             <li>
 *                <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
 *               (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *             </li>
 *             <li>
 *                <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
 *           the Security page of the <i>Amazon IVS User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Resource Names (ARNs)</b>
 *          </p>
 *          <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a
 *       resource unambiguously across all of AWS, such as in IAM policies and API
 *       calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
 *         Resource Names</a> in the <i>AWS General Reference</i>.</p>
 * @public
 */
export class Ivs extends IvsClient implements Ivs {}
createAggregatedClient(commands, Ivs);
