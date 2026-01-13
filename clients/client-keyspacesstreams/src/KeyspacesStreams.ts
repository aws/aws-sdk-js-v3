// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { GetRecordsCommand, GetRecordsCommandInput, GetRecordsCommandOutput } from "./commands/GetRecordsCommand";
import {
  GetShardIteratorCommand,
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
} from "./commands/GetShardIteratorCommand";
import { GetStreamCommand, GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import { KeyspacesStreamsClient } from "./KeyspacesStreamsClient";

const commands = {
  GetRecordsCommand,
  GetShardIteratorCommand,
  GetStreamCommand,
  ListStreamsCommand,
};

export interface KeyspacesStreams {
  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecordsCommandOutput>;
  getRecords(
    args: GetRecordsCommandInput,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
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
}

/**
 * <p>Amazon Keyspaces (for Apache Cassandra) change data capture (CDC) records change events for Amazon Keyspaces tables. The change events captured in a stream are time-ordered and de-duplicated write operations. Using stream data you can build event driven applications that incorporate near-real time change events from Amazon Keyspaces tables. </p> <p>Amazon Keyspaces CDC is serverless and scales the infrastructure for change events automatically based on the volume of changes on your table. </p> <p> This API reference describes the Amazon Keyspaces CDC stream API in detail. </p> <p>For more information about Amazon Keyspaces CDC, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cdc.html">Working with change data capture (CDC) streams in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To learn how Amazon Keyspaces CDC API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To see the metrics Amazon Keyspaces CDC sends to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/metrics-dimensions.html#keyspaces-cdc-metrics">Amazon Keyspaces change data capture (CDC) CloudWatch metrics</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 * @public
 */
export class KeyspacesStreams extends KeyspacesStreamsClient implements KeyspacesStreams {}
createAggregatedClient(commands, KeyspacesStreams);
