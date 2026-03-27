// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateIndexCommand,
} from "./commands/CreateIndexCommand";
import {
  type CreateVectorBucketCommandInput,
  type CreateVectorBucketCommandOutput,
  CreateVectorBucketCommand,
} from "./commands/CreateVectorBucketCommand";
import {
  type DeleteIndexCommandInput,
  type DeleteIndexCommandOutput,
  DeleteIndexCommand,
} from "./commands/DeleteIndexCommand";
import {
  type DeleteVectorBucketCommandInput,
  type DeleteVectorBucketCommandOutput,
  DeleteVectorBucketCommand,
} from "./commands/DeleteVectorBucketCommand";
import {
  type DeleteVectorBucketPolicyCommandInput,
  type DeleteVectorBucketPolicyCommandOutput,
  DeleteVectorBucketPolicyCommand,
} from "./commands/DeleteVectorBucketPolicyCommand";
import {
  type DeleteVectorsCommandInput,
  type DeleteVectorsCommandOutput,
  DeleteVectorsCommand,
} from "./commands/DeleteVectorsCommand";
import { type GetIndexCommandInput, type GetIndexCommandOutput, GetIndexCommand } from "./commands/GetIndexCommand";
import {
  type GetVectorBucketCommandInput,
  type GetVectorBucketCommandOutput,
  GetVectorBucketCommand,
} from "./commands/GetVectorBucketCommand";
import {
  type GetVectorBucketPolicyCommandInput,
  type GetVectorBucketPolicyCommandOutput,
  GetVectorBucketPolicyCommand,
} from "./commands/GetVectorBucketPolicyCommand";
import {
  type GetVectorsCommandInput,
  type GetVectorsCommandOutput,
  GetVectorsCommand,
} from "./commands/GetVectorsCommand";
import {
  type ListIndexesCommandInput,
  type ListIndexesCommandOutput,
  ListIndexesCommand,
} from "./commands/ListIndexesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVectorBucketsCommandInput,
  type ListVectorBucketsCommandOutput,
  ListVectorBucketsCommand,
} from "./commands/ListVectorBucketsCommand";
import {
  type ListVectorsCommandInput,
  type ListVectorsCommandOutput,
  ListVectorsCommand,
} from "./commands/ListVectorsCommand";
import {
  type PutVectorBucketPolicyCommandInput,
  type PutVectorBucketPolicyCommandOutput,
  PutVectorBucketPolicyCommand,
} from "./commands/PutVectorBucketPolicyCommand";
import {
  type PutVectorsCommandInput,
  type PutVectorsCommandOutput,
  PutVectorsCommand,
} from "./commands/PutVectorsCommand";
import {
  type QueryVectorsCommandInput,
  type QueryVectorsCommandOutput,
  QueryVectorsCommand,
} from "./commands/QueryVectorsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { paginateListIndexes } from "./pagination/ListIndexesPaginator";
import { paginateListVectorBuckets } from "./pagination/ListVectorBucketsPaginator";
import { paginateListVectors } from "./pagination/ListVectorsPaginator";
import { S3VectorsClient } from "./S3VectorsClient";

const commands = {
  CreateIndexCommand,
  CreateVectorBucketCommand,
  DeleteIndexCommand,
  DeleteVectorBucketCommand,
  DeleteVectorBucketPolicyCommand,
  DeleteVectorsCommand,
  GetIndexCommand,
  GetVectorBucketCommand,
  GetVectorBucketPolicyCommand,
  GetVectorsCommand,
  ListIndexesCommand,
  ListTagsForResourceCommand,
  ListVectorBucketsCommand,
  ListVectorsCommand,
  PutVectorBucketPolicyCommand,
  PutVectorsCommand,
  QueryVectorsCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListIndexes,
  paginateListVectorBuckets,
  paginateListVectors,
};

export interface S3Vectors {
  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVectorBucketCommand}
   */
  createVectorBucket(
    args: CreateVectorBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVectorBucketCommandOutput>;
  createVectorBucket(
    args: CreateVectorBucketCommandInput,
    cb: (err: any, data?: CreateVectorBucketCommandOutput) => void
  ): void;
  createVectorBucket(
    args: CreateVectorBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVectorBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVectorBucketCommand}
   */
  deleteVectorBucket(): Promise<DeleteVectorBucketCommandOutput>;
  deleteVectorBucket(
    args: DeleteVectorBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVectorBucketCommandOutput>;
  deleteVectorBucket(
    args: DeleteVectorBucketCommandInput,
    cb: (err: any, data?: DeleteVectorBucketCommandOutput) => void
  ): void;
  deleteVectorBucket(
    args: DeleteVectorBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVectorBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVectorBucketPolicyCommand}
   */
  deleteVectorBucketPolicy(): Promise<DeleteVectorBucketPolicyCommandOutput>;
  deleteVectorBucketPolicy(
    args: DeleteVectorBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVectorBucketPolicyCommandOutput>;
  deleteVectorBucketPolicy(
    args: DeleteVectorBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteVectorBucketPolicyCommandOutput) => void
  ): void;
  deleteVectorBucketPolicy(
    args: DeleteVectorBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVectorBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVectorsCommand}
   */
  deleteVectors(
    args: DeleteVectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVectorsCommandOutput>;
  deleteVectors(
    args: DeleteVectorsCommandInput,
    cb: (err: any, data?: DeleteVectorsCommandOutput) => void
  ): void;
  deleteVectors(
    args: DeleteVectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(): Promise<GetIndexCommandOutput>;
  getIndex(
    args: GetIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexCommandOutput>;
  getIndex(
    args: GetIndexCommandInput,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;
  getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVectorBucketCommand}
   */
  getVectorBucket(): Promise<GetVectorBucketCommandOutput>;
  getVectorBucket(
    args: GetVectorBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVectorBucketCommandOutput>;
  getVectorBucket(
    args: GetVectorBucketCommandInput,
    cb: (err: any, data?: GetVectorBucketCommandOutput) => void
  ): void;
  getVectorBucket(
    args: GetVectorBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVectorBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVectorBucketPolicyCommand}
   */
  getVectorBucketPolicy(): Promise<GetVectorBucketPolicyCommandOutput>;
  getVectorBucketPolicy(
    args: GetVectorBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVectorBucketPolicyCommandOutput>;
  getVectorBucketPolicy(
    args: GetVectorBucketPolicyCommandInput,
    cb: (err: any, data?: GetVectorBucketPolicyCommandOutput) => void
  ): void;
  getVectorBucketPolicy(
    args: GetVectorBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVectorBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVectorsCommand}
   */
  getVectors(
    args: GetVectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVectorsCommandOutput>;
  getVectors(
    args: GetVectorsCommandInput,
    cb: (err: any, data?: GetVectorsCommandOutput) => void
  ): void;
  getVectors(
    args: GetVectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndexesCommand}
   */
  listIndexes(): Promise<ListIndexesCommandOutput>;
  listIndexes(
    args: ListIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndexesCommandOutput>;
  listIndexes(
    args: ListIndexesCommandInput,
    cb: (err: any, data?: ListIndexesCommandOutput) => void
  ): void;
  listIndexes(
    args: ListIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexesCommandOutput) => void
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
   * @see {@link ListVectorBucketsCommand}
   */
  listVectorBuckets(): Promise<ListVectorBucketsCommandOutput>;
  listVectorBuckets(
    args: ListVectorBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVectorBucketsCommandOutput>;
  listVectorBuckets(
    args: ListVectorBucketsCommandInput,
    cb: (err: any, data?: ListVectorBucketsCommandOutput) => void
  ): void;
  listVectorBuckets(
    args: ListVectorBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVectorBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVectorsCommand}
   */
  listVectors(): Promise<ListVectorsCommandOutput>;
  listVectors(
    args: ListVectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVectorsCommandOutput>;
  listVectors(
    args: ListVectorsCommandInput,
    cb: (err: any, data?: ListVectorsCommandOutput) => void
  ): void;
  listVectors(
    args: ListVectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVectorBucketPolicyCommand}
   */
  putVectorBucketPolicy(
    args: PutVectorBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVectorBucketPolicyCommandOutput>;
  putVectorBucketPolicy(
    args: PutVectorBucketPolicyCommandInput,
    cb: (err: any, data?: PutVectorBucketPolicyCommandOutput) => void
  ): void;
  putVectorBucketPolicy(
    args: PutVectorBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVectorBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVectorsCommand}
   */
  putVectors(
    args: PutVectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVectorsCommandOutput>;
  putVectors(
    args: PutVectorsCommandInput,
    cb: (err: any, data?: PutVectorsCommandOutput) => void
  ): void;
  putVectors(
    args: PutVectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryVectorsCommand}
   */
  queryVectors(
    args: QueryVectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryVectorsCommandOutput>;
  queryVectors(
    args: QueryVectorsCommandInput,
    cb: (err: any, data?: QueryVectorsCommandOutput) => void
  ): void;
  queryVectors(
    args: QueryVectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryVectorsCommandOutput) => void
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
   * @see {@link ListIndexesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIndexesCommandOutput}.
   */
  paginateListIndexes(
    args?: ListIndexesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIndexesCommandOutput>;

  /**
   * @see {@link ListVectorBucketsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVectorBucketsCommandOutput}.
   */
  paginateListVectorBuckets(
    args?: ListVectorBucketsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVectorBucketsCommandOutput>;

  /**
   * @see {@link ListVectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVectorsCommandOutput}.
   */
  paginateListVectors(
    args?: ListVectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVectorsCommandOutput>;
}

/**
 * <p>Amazon S3 vector buckets are a bucket type to store and search vectors with sub-second search times. They are designed to provide dedicated API operations for you to interact with vectors to do similarity search. Within a vector bucket, you use a vector index to organize and logically group your vector data. When you make a write or read request, you direct it to a single vector index. You store your vector data as vectors. A vector contains a key (a name that you assign), a multi-dimensional vector, and, optionally, metadata that describes a vector. The key uniquely identifies the vector in a vector index.</p>
 * @public
 */
export class S3Vectors extends S3VectorsClient implements S3Vectors {}
createAggregatedClient(commands, S3Vectors, { paginators });
