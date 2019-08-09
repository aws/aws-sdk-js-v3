import { _TableToReload } from "./_TableToReload";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReloadTablesInput shape
 */
export interface ReloadTablesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string;

  /**
   * <p>The name and schema of the table to be reloaded. </p>
   */
  TablesToReload: Array<_TableToReload> | Iterable<_TableToReload>;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate it if validation is enabled. Specify <code>validate-only</code> to re-validate the table. This option applies only when validation is enabled for the task. </p> <p>Valid values: data-reload, validate-only</p> <p>Default value is data-reload.</p>
   */
  ReloadOption?: "data-reload" | "validate-only" | string;

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
