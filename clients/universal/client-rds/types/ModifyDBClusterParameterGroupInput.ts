import { _Parameter } from "./_Parameter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyDBClusterParameterGroupInput {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   */
  Parameters: Array<_Parameter> | Iterable<_Parameter>;

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
