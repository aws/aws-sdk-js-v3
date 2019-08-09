import { _PartitionInput } from "./_PartitionInput";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePartitionInput shape
 */
export interface CreatePartitionInput {
  /**
   * <p>The ID of the catalog in which the partion is to be created. Currently, this should be the AWS account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is to be created.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string;

  /**
   * <p>A <code>PartitionInput</code> structure defining the partition to be created.</p>
   */
  PartitionInput: _PartitionInput;

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
