import { _Parameter } from "./_Parameter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetDBParameterGroupInput shape
 */
export interface ResetDBParameterGroupInput {
  /**
   * <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>
   */
  DBParameterGroupName: string;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;

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
