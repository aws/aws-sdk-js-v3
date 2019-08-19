import { _TableInput } from "./_TableInput";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTableInput shape
 */
export interface UpdateTableInput {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table in the catalog.</p>
   */
  TableInput: _TableInput;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table before updating it. If <code>skipArchive</code> is set to true, however, <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

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
