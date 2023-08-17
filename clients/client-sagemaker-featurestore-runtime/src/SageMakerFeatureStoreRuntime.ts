// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetRecordCommand,
  BatchGetRecordCommandInput,
  BatchGetRecordCommandOutput,
} from "./commands/BatchGetRecordCommand";
import {
  DeleteRecordCommand,
  DeleteRecordCommandInput,
  DeleteRecordCommandOutput,
} from "./commands/DeleteRecordCommand";
import { GetRecordCommand, GetRecordCommandInput, GetRecordCommandOutput } from "./commands/GetRecordCommand";
import { PutRecordCommand, PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand";
import {
  SageMakerFeatureStoreRuntimeClient,
  SageMakerFeatureStoreRuntimeClientConfig,
} from "./SageMakerFeatureStoreRuntimeClient";

const commands = {
  BatchGetRecordCommand,
  DeleteRecordCommand,
  GetRecordCommand,
  PutRecordCommand,
};

export interface SageMakerFeatureStoreRuntime {
  /**
   * @see {@link BatchGetRecordCommand}
   */
  batchGetRecord(
    args: BatchGetRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRecordCommandOutput>;
  batchGetRecord(args: BatchGetRecordCommandInput, cb: (err: any, data?: BatchGetRecordCommandOutput) => void): void;
  batchGetRecord(
    args: BatchGetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecordCommand}
   */
  deleteRecord(args: DeleteRecordCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRecordCommandOutput>;
  deleteRecord(args: DeleteRecordCommandInput, cb: (err: any, data?: DeleteRecordCommandOutput) => void): void;
  deleteRecord(
    args: DeleteRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordCommand}
   */
  getRecord(args: GetRecordCommandInput, options?: __HttpHandlerOptions): Promise<GetRecordCommandOutput>;
  getRecord(args: GetRecordCommandInput, cb: (err: any, data?: GetRecordCommandOutput) => void): void;
  getRecord(
    args: GetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(args: PutRecordCommandInput, options?: __HttpHandlerOptions): Promise<PutRecordCommandOutput>;
  putRecord(args: PutRecordCommandInput, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
  putRecord(
    args: PutRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class SageMakerFeatureStoreRuntime
  extends SageMakerFeatureStoreRuntimeClient
  implements SageMakerFeatureStoreRuntime {}
createAggregatedClient(commands, SageMakerFeatureStoreRuntime);
