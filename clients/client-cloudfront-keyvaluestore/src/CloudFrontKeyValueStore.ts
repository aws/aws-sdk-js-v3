// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { CloudFrontKeyValueStoreClient } from "./CloudFrontKeyValueStoreClient";
import { type DeleteKeyCommandInput, type DeleteKeyCommandOutput, DeleteKeyCommand } from "./commands/DeleteKeyCommand";
import {
  type DescribeKeyValueStoreCommandInput,
  type DescribeKeyValueStoreCommandOutput,
  DescribeKeyValueStoreCommand,
} from "./commands/DescribeKeyValueStoreCommand";
import { type GetKeyCommandInput, type GetKeyCommandOutput, GetKeyCommand } from "./commands/GetKeyCommand";
import { type ListKeysCommandInput, type ListKeysCommandOutput, ListKeysCommand } from "./commands/ListKeysCommand";
import { type PutKeyCommandInput, type PutKeyCommandOutput, PutKeyCommand } from "./commands/PutKeyCommand";
import {
  type UpdateKeysCommandInput,
  type UpdateKeysCommandOutput,
  UpdateKeysCommand,
} from "./commands/UpdateKeysCommand";
import { paginateListKeys } from "./pagination/ListKeysPaginator";

const commands = {
  DeleteKeyCommand,
  DescribeKeyValueStoreCommand,
  GetKeyCommand,
  ListKeysCommand,
  PutKeyCommand,
  UpdateKeysCommand,
};
const paginators = {
  paginateListKeys,
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

  /**
   * @see {@link ListKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKeysCommandOutput}.
   */
  paginateListKeys(
    args: ListKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKeysCommandOutput>;
}

/**
 * <p>Amazon CloudFront KeyValueStore Service to View and Update Data in a KVS Resource</p>
 * @public
 */
export class CloudFrontKeyValueStore extends CloudFrontKeyValueStoreClient implements CloudFrontKeyValueStore {}
createAggregatedClient(commands, CloudFrontKeyValueStore, { paginators });
