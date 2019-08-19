import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of <a>CreateDBClusterParameterGroup</a>.</p>
 */
export interface CreateDBClusterParameterGroupInput {
  /**
   * <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
   */
  DBClusterParameterGroupName: string;

  /**
   * <p>The DB cluster parameter group family name.</p>
   */
  DBParameterGroupFamily: string;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string;

  /**
   * <p>The tags to be assigned to the DB cluster parameter group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
