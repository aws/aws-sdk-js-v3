// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchGetRecordCommandInput,
  type BatchGetRecordCommandOutput,
  BatchGetRecordCommand,
} from "./commands/BatchGetRecordCommand";
import {
  type BatchWriteRecordCommandInput,
  type BatchWriteRecordCommandOutput,
  BatchWriteRecordCommand,
} from "./commands/BatchWriteRecordCommand";
import {
  type DeleteRecordCommandInput,
  type DeleteRecordCommandOutput,
  DeleteRecordCommand,
} from "./commands/DeleteRecordCommand";
import { type GetRecordCommandInput, type GetRecordCommandOutput, GetRecordCommand } from "./commands/GetRecordCommand";
import {
  type ListRecordsCommandInput,
  type ListRecordsCommandOutput,
  ListRecordsCommand,
} from "./commands/ListRecordsCommand";
import { type PutRecordCommandInput, type PutRecordCommandOutput, PutRecordCommand } from "./commands/PutRecordCommand";
import { paginateListRecords } from "./pagination/ListRecordsPaginator";
import { SageMakerFeatureStoreRuntimeClient } from "./SageMakerFeatureStoreRuntimeClient";

const commands = {
  BatchGetRecordCommand,
  BatchWriteRecordCommand,
  DeleteRecordCommand,
  GetRecordCommand,
  ListRecordsCommand,
  PutRecordCommand,
};
const paginators = {
  paginateListRecords,
};

export interface SageMakerFeatureStoreRuntime {
  /**
   * @see {@link BatchGetRecordCommand}
   */
  batchGetRecord(
    args: BatchGetRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRecordCommandOutput>;
  batchGetRecord(
    args: BatchGetRecordCommandInput,
    cb: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): void;
  batchGetRecord(
    args: BatchGetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchWriteRecordCommand}
   */
  batchWriteRecord(
    args: BatchWriteRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchWriteRecordCommandOutput>;
  batchWriteRecord(
    args: BatchWriteRecordCommandInput,
    cb: (err: any, data?: BatchWriteRecordCommandOutput) => void
  ): void;
  batchWriteRecord(
    args: BatchWriteRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecordCommand}
   */
  deleteRecord(
    args: DeleteRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecordCommandOutput>;
  deleteRecord(
    args: DeleteRecordCommandInput,
    cb: (err: any, data?: DeleteRecordCommandOutput) => void
  ): void;
  deleteRecord(
    args: DeleteRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordCommand}
   */
  getRecord(
    args: GetRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecordCommandOutput>;
  getRecord(
    args: GetRecordCommandInput,
    cb: (err: any, data?: GetRecordCommandOutput) => void
  ): void;
  getRecord(
    args: GetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecordsCommand}
   */
  listRecords(
    args: ListRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecordsCommandOutput>;
  listRecords(
    args: ListRecordsCommandInput,
    cb: (err: any, data?: ListRecordsCommandOutput) => void
  ): void;
  listRecords(
    args: ListRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(
    args: PutRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecordCommandOutput>;
  putRecord(
    args: PutRecordCommandInput,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  putRecord(
    args: PutRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecordsCommandOutput}.
   */
  paginateListRecords(
    args: ListRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecordsCommandOutput>;
}

/**
 * <p>Contains all data plane API operations and data types for the Amazon SageMaker Feature
 *          Store. Use this API to put, delete, and retrieve (get) features from a feature
 *          store.</p>
 *          <p>Use the following operations to configure your <code>OnlineStore</code> and
 *             <code>OfflineStore</code> features, and to create and manage feature groups:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class SageMakerFeatureStoreRuntime extends SageMakerFeatureStoreRuntimeClient implements SageMakerFeatureStoreRuntime {}
createAggregatedClient(commands, SageMakerFeatureStoreRuntime, { paginators });
