// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SageMakerFeatureStoreRuntimeClient } from "./SageMakerFeatureStoreRuntimeClient";

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
 */
export class SageMakerFeatureStoreRuntime extends SageMakerFeatureStoreRuntimeClient {
  /**
   * <p>Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.</p>
   */
  public batchGetRecord(
    args: BatchGetRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRecordCommandOutput>;
  public batchGetRecord(
    args: BatchGetRecordCommandInput,
    cb: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): void;
  public batchGetRecord(
    args: BatchGetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): void;
  public batchGetRecord(
    args: BatchGetRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetRecordCommandOutput) => void),
    cb?: (err: any, data?: BatchGetRecordCommandOutput) => void
  ): Promise<BatchGetRecordCommandOutput> | void {
    const command = new BatchGetRecordCommand(args);
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
   * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This
   *          record will have a value of <code>True</code> in the <code>is_deleted</code> column.</p>
   */
  public deleteRecord(
    args: DeleteRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecordCommandOutput>;
  public deleteRecord(args: DeleteRecordCommandInput, cb: (err: any, data?: DeleteRecordCommandOutput) => void): void;
  public deleteRecord(
    args: DeleteRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecordCommandOutput) => void
  ): void;
  public deleteRecord(
    args: DeleteRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecordCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecordCommandOutput) => void
  ): Promise<DeleteRecordCommandOutput> | void {
    const command = new DeleteRecordCommand(args);
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
   * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
   *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
   *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
   */
  public getRecord(args: GetRecordCommandInput, options?: __HttpHandlerOptions): Promise<GetRecordCommandOutput>;
  public getRecord(args: GetRecordCommandInput, cb: (err: any, data?: GetRecordCommandOutput) => void): void;
  public getRecord(
    args: GetRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordCommandOutput) => void
  ): void;
  public getRecord(
    args: GetRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecordCommandOutput) => void),
    cb?: (err: any, data?: GetRecordCommandOutput) => void
  ): Promise<GetRecordCommandOutput> | void {
    const command = new GetRecordCommand(args);
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
   * <p>Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code>
   *          API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the
   *          record is the latest record for the <code>recordIdentifier</code>, the record is written to
   *          both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a
   *          historic record, it is written only to the <code>OfflineStore</code>.</p>
   */
  public putRecord(args: PutRecordCommandInput, options?: __HttpHandlerOptions): Promise<PutRecordCommandOutput>;
  public putRecord(args: PutRecordCommandInput, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
  public putRecord(
    args: PutRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  public putRecord(
    args: PutRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRecordCommandOutput) => void),
    cb?: (err: any, data?: PutRecordCommandOutput) => void
  ): Promise<PutRecordCommandOutput> | void {
    const command = new PutRecordCommand(args);
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
