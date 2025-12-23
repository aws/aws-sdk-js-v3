// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudFrontKeyValueStoreClient } from "./CloudFrontKeyValueStoreClient";
import { DeleteKeyCommand, DeleteKeyCommandInput, DeleteKeyCommandOutput } from "./commands/DeleteKeyCommand";
import {
  DescribeKeyValueStoreCommand,
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
} from "./commands/DescribeKeyValueStoreCommand";
import { GetKeyCommand, GetKeyCommandInput, GetKeyCommandOutput } from "./commands/GetKeyCommand";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand";
import { PutKeyCommand, PutKeyCommandInput, PutKeyCommandOutput } from "./commands/PutKeyCommand";
import { UpdateKeysCommand, UpdateKeysCommandInput, UpdateKeysCommandOutput } from "./commands/UpdateKeysCommand";

const commands = {
  DeleteKeyCommand,
  DescribeKeyValueStoreCommand,
  GetKeyCommand,
  ListKeysCommand,
  PutKeyCommand,
  UpdateKeysCommand,
};

export interface CloudFrontKeyValueStore {
  /**
   * @see {@link DeleteKeyCommand}
   */
  deleteKey(
    args: DeleteKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyCommandOutput>;
  deleteKey(
    args: DeleteKeyCommandInput,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;
  deleteKey(
    args: DeleteKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyValueStoreCommand}
   */
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyValueStoreCommandOutput>;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyCommand}
   */
  getKey(
    args: GetKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyCommandOutput>;
  getKey(
    args: GetKeyCommandInput,
    cb: (err: any, data?: GetKeyCommandOutput) => void
  ): void;
  getKey(
    args: GetKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(
    args: ListKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeysCommandOutput>;
  listKeys(
    args: ListKeysCommandInput,
    cb: (err: any, data?: ListKeysCommandOutput) => void
  ): void;
  listKeys(
    args: ListKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link PutKeyCommand}
   */
  putKey(
    args: PutKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutKeyCommandOutput>;
  putKey(
    args: PutKeyCommandInput,
    cb: (err: any, data?: PutKeyCommandOutput) => void
  ): void;
  putKey(
    args: PutKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeysCommand}
   */
  updateKeys(
    args: UpdateKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeysCommandOutput>;
  updateKeys(
    args: UpdateKeysCommandInput,
    cb: (err: any, data?: UpdateKeysCommandOutput) => void
  ): void;
  updateKeys(
    args: UpdateKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeysCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon CloudFront KeyValueStore Service to View and Update Data in a KVS Resource</p>
 * @public
 */
export class CloudFrontKeyValueStore extends CloudFrontKeyValueStoreClient implements CloudFrontKeyValueStore {}
createAggregatedClient(commands, CloudFrontKeyValueStore);
