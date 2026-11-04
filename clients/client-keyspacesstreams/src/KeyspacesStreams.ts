// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetRecordsCommandInput,
  type GetRecordsCommandOutput,
  GetRecordsCommand,
} from "./commands/GetRecordsCommand";
import {
  type GetShardIteratorCommandInput,
  type GetShardIteratorCommandOutput,
  GetShardIteratorCommand,
} from "./commands/GetShardIteratorCommand";
import { type GetStreamCommandInput, type GetStreamCommandOutput, GetStreamCommand } from "./commands/GetStreamCommand";
import {
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListStreamsCommand,
} from "./commands/ListStreamsCommand";
import { KeyspacesStreamsClient } from "./KeyspacesStreamsClient";
import { paginateGetStream } from "./pagination/GetStreamPaginator";
import { paginateListStreams } from "./pagination/ListStreamsPaginator";

const commands = {
  GetRecordsCommand,
  GetShardIteratorCommand,
  GetStreamCommand,
  ListStreamsCommand,
};
const paginators = {
  paginateGetStream,
  paginateListStreams,
};

/**
 * @public
 */
export interface KeyspacesStreamsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface KeyspacesStreams {
  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsCommandInput,
    options?: KeyspacesStreamsRequestOptions
  ): Promise<GetRecordsCommandOutput>;
  getRecords(
    args: GetRecordsCommandInput,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: KeyspacesStreamsRequestOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: KeyspacesStreamsRequestOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: KeyspacesStreamsRequestOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamCommand}
   */
  getStream(
    args: GetStreamCommandInput,
    options?: KeyspacesStreamsRequestOptions
  ): Promise<GetStreamCommandOutput>;
  getStream(
    args: GetStreamCommandInput,
    cb: (err: any, data?: GetStreamCommandOutput) => void
  ): void;
  getStream(
    args: GetStreamCommandInput,
    options: KeyspacesStreamsRequestOptions,
    cb: (err: any, data?: GetStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    options?: KeyspacesStreamsRequestOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: KeyspacesStreamsRequestOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetStreamCommandOutput}.
   */
  paginateGetStream(
    args: GetStreamCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetStreamCommandOutput>;

  /**
   * @see {@link ListStreamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamsCommandOutput}.
   */
  paginateListStreams(
    args?: ListStreamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamsCommandOutput>;
}

/**
 * Amazon Keyspaces (for Apache Cassandra) change data capture (CDC) records change events for Amazon Keyspaces tables. The change events captured in a stream are time-ordered and de-duplicated write operations. Using stream data you can build event driven applications that incorporate near-real time change events from Amazon Keyspaces tables.
 *
 * Amazon Keyspaces CDC is serverless and scales the infrastructure for change events automatically based on the volume of changes on your table.
 *
 * This API reference describes the Amazon Keyspaces CDC stream API in detail.
 *
 * For more information about Amazon Keyspaces CDC, see [Working with change data capture (CDC) streams in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/cdc.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * To learn how Amazon Keyspaces CDC API actions are recorded with CloudTrail, see [Amazon Keyspaces information in CloudTrail](https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail) in the *Amazon Keyspaces Developer Guide*.
 *
 * To see the metrics Amazon Keyspaces CDC sends to Amazon CloudWatch, see [Amazon Keyspaces change data capture (CDC) CloudWatch metrics](https://docs.aws.amazon.com/keyspaces/latest/devguide/metrics-dimensions.html#keyspaces-cdc-metrics) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export class KeyspacesStreams extends KeyspacesStreamsClient implements KeyspacesStreams {}
createAggregatedClient(commands, KeyspacesStreams, { paginators });
