import { _DatabaseInput } from "./_DatabaseInput";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDatabaseInput shape
 */
export interface UpdateDatabaseInput {
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase.</p>
   */
  Name: string;

  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition of the metadata database in the catalog.</p>
   */
  DatabaseInput: _DatabaseInput;

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
