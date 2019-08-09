import { _PartitionValueList } from "./_PartitionValueList";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetPartitionInput shape
 */
export interface BatchGetPartitionInput {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string;

  /**
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   */
  PartitionsToGet: Array<_PartitionValueList> | Iterable<_PartitionValueList>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
