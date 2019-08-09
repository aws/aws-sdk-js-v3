import { _ParameterStringFilter } from "./_ParameterStringFilter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetParametersByPathInput shape
 */
export interface GetParametersByPathInput {
  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/) and end with the parameter name. A parameter name hierarchy can have a maximum of 15 levels. Here is an example of a hierarchy: <code>/Finance/Prod/IAD/WinServ2016/license33</code> </p>
   */
  Path: string;

  /**
   * <p>Retrieve all parameters within a hierarchy.</p> <important> <p>If a user has access to a path, then the user can access all levels of that path. For example, if a user has permission to access path <code>/a</code>, then the user can also access <code>/a/b</code>. Even if a user has explicitly been denied access in IAM for parameter <code>/a/b</code>, they can still call the GetParametersByPath API action recursively for <code>/a</code> and view <code>/a/b</code>.</p> </important>
   */
  Recursive?: boolean;

  /**
   * <p>Filters to limit the request results.</p> <note> <p>You can't filter using the parameter name.</p> </note>
   */
  ParameterFilters?:
    | Array<_ParameterStringFilter>
    | Iterable<_ParameterStringFilter>;

  /**
   * <p>Retrieve all parameters in a hierarchy with their value decrypted.</p>
   */
  WithDecryption?: boolean;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

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
