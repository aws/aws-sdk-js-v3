import { _AssociationExecutionTargetsFilter } from "./_AssociationExecutionTargetsFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssociationExecutionTargetsInput shape
 */
export interface DescribeAssociationExecutionTargetsInput {
  /**
   * <p>The association ID that includes the execution for which you want to view details.</p>
   */
  AssociationId: string;

  /**
   * <p>The execution ID for which you want to view details.</p>
   */
  ExecutionId: string;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p> <p>Status (EQUAL)</p> <p>ResourceId (EQUAL)</p> <p>ResourceType (EQUAL)</p>
   */
  Filters?:
    | Array<_AssociationExecutionTargetsFilter>
    | Iterable<_AssociationExecutionTargetsFilter>;

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
