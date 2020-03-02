import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot.</p>
 */
export interface Block {
  __type?: "Block";
  /**
   * <p>The block index.</p>
   */
  BlockIndex?: number;

  /**
   * <p>The block token for the block index.</p>
   */
  BlockToken?: string;
}

export namespace Block {
  export function isa(o: any): o is Block {
    return __isa(o, "Block");
  }
}

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of
 *             the same volume/snapshot lineage.</p>
 */
export interface ChangedBlock {
  __type?: "ChangedBlock";
  /**
   * <p>The block index.</p>
   */
  BlockIndex?: number;

  /**
   * <p>The block token for the block index of the <code>first snapshot ID</code> specified in
   *             the <code>list changed blocks</code> operation. This value is absent if the first
   *             snapshot does not have the changed block that is on the second snapshot.</p>
   */
  FirstBlockToken?: string;

  /**
   * <p>The block token for the block index of the <code>second snapshot ID</code> specified
   *             in the <code>list changed blocks</code> operation.</p>
   */
  SecondBlockToken?: string;
}

export namespace ChangedBlock {
  export function isa(o: any): o is ChangedBlock {
    return __isa(o, "ChangedBlock");
  }
}

export enum ChecksumAlgorithm {
  CHECKSUM_ALGORITHM_SHA256 = "SHA256"
}

export interface GetSnapshotBlockRequest {
  __type?: "GetSnapshotBlockRequest";
  /**
   * <p>The block index of the block from which to get data.</p>
   *
   *
   *         <p>Obtain the <code>block index</code> by running the <code>list changed blocks</code> or
   *                 <code>list snapshot blocks</code> operations.</p>
   */
  BlockIndex: number | undefined;

  /**
   * <p>The block token of the block from which to get data.</p>
   *
   *
   *         <p>Obtain the <code>block token</code> by running the <code>list changed blocks</code> or
   *                 <code>list snapshot blocks</code> operations.</p>
   */
  BlockToken: string | undefined;

  /**
   * <p>The ID of the snapshot containing the block from which to get data.</p>
   */
  SnapshotId: string | undefined;
}

export namespace GetSnapshotBlockRequest {
  export function isa(o: any): o is GetSnapshotBlockRequest {
    return __isa(o, "GetSnapshotBlockRequest");
  }
}

export interface GetSnapshotBlockResponse {
  __type?: "GetSnapshotBlockResponse";
  /**
   * <p>The data content of the block.</p>
   */
  BlockData?: Readable | ReadableStream | Blob;

  /**
   * <p>The checksum generated for the block.</p>
   */
  Checksum?: string;

  /**
   * <p>The algorithm used to generate the checksum for the block, such as SHA256.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * <p>The size of the data in the block.</p>
   */
  DataLength?: number;
}

export namespace GetSnapshotBlockResponse {
  export function isa(o: any): o is GetSnapshotBlockResponse {
    return __isa(o, "GetSnapshotBlockResponse");
  }
}

export interface ListChangedBlocksRequest {
  __type?: "ListChangedBlocksRequest";
  /**
   * <p>The ID of the first snapshot to use for the comparison.</p>
   */
  FirstSnapshotId?: string;

  /**
   * <p>The number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the second snapshot to use for the comparison.</p>
   */
  SecondSnapshotId: string | undefined;

  /**
   * <p>The block index from which the comparison should start.</p>
   *
   *
   *         <p>The list in the response will start from this block index or the next valid block
   *             index in the snapshots.</p>
   */
  StartingBlockIndex?: number;
}

export namespace ListChangedBlocksRequest {
  export function isa(o: any): o is ListChangedBlocksRequest {
    return __isa(o, "ListChangedBlocksRequest");
  }
}

export interface ListChangedBlocksResponse {
  __type?: "ListChangedBlocksResponse";
  /**
   * <p>The size of the block.</p>
   */
  BlockSize?: number;

  /**
   * <p>An array of objects containing information about the changed blocks.</p>
   */
  ChangedBlocks?: Array<ChangedBlock>;

  /**
   * <p>The time when the <code>block token</code> expires.</p>
   */
  ExpiryTime?: Date;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of the volume in GB.</p>
   */
  VolumeSize?: number;
}

export namespace ListChangedBlocksResponse {
  export function isa(o: any): o is ListChangedBlocksResponse {
    return __isa(o, "ListChangedBlocksResponse");
  }
}

export interface ListSnapshotBlocksRequest {
  __type?: "ListSnapshotBlocksRequest";
  /**
   * <p>The number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the snapshot from which to get block indexes and block tokens.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The block index from which the list should start. The list in the response will start
   *             from this block index or the next valid block index in the snapshot.</p>
   */
  StartingBlockIndex?: number;
}

export namespace ListSnapshotBlocksRequest {
  export function isa(o: any): o is ListSnapshotBlocksRequest {
    return __isa(o, "ListSnapshotBlocksRequest");
  }
}

export interface ListSnapshotBlocksResponse {
  __type?: "ListSnapshotBlocksResponse";
  /**
   * <p>The size of the block.</p>
   */
  BlockSize?: number;

  /**
   * <p>An array of objects containing information about the blocks.</p>
   */
  Blocks?: Array<Block>;

  /**
   * <p>The time when the <code>block token</code> expires.</p>
   */
  ExpiryTime?: Date;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of the volume in GB.</p>
   */
  VolumeSize?: number;
}

export namespace ListSnapshotBlocksResponse {
  export function isa(o: any): o is ListSnapshotBlocksResponse {
    return __isa(o, "ListSnapshotBlocksResponse");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the validation exception.</p>
   */
  Reason?: ValidationExceptionReason | string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}

export enum ValidationExceptionReason {
  INVALID_BLOCK_TOKEN = "INVALID_BLOCK_TOKEN",
  INVALID_CUSTOMER_KEY = "INVALID_CUSTOMER_KEY",
  INVALID_PAGE_TOKEN = "INVALID_PAGE_TOKEN",
  INVALID_SNAPSHOT_ID = "INVALID_SNAPSHOT_ID",
  UNRELATED_SNAPSHOTS = "UNRELATED_SNAPSHOTS"
}
