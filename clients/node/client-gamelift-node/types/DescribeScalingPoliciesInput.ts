import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface DescribeScalingPoliciesInput {
  /**
   * <p>Unique identifier for a fleet to retrieve scaling policies for.</p>
   */
  FleetId: string;

  /**
   * <p>Scaling policy status to filter results on. A scaling policy is only in force when in an <code>ACTIVE</code> status.</p> <ul> <li> <p> <b>ACTIVE</b> -- The scaling policy is currently in force.</p> </li> <li> <p> <b>UPDATEREQUESTED</b> -- A request to update the scaling policy has been received.</p> </li> <li> <p> <b>UPDATING</b> -- A change is being made to the scaling policy.</p> </li> <li> <p> <b>DELETEREQUESTED</b> -- A request to delete the scaling policy has been received.</p> </li> <li> <p> <b>DELETING</b> -- The scaling policy is being deleted.</p> </li> <li> <p> <b>DELETED</b> -- The scaling policy has been deleted.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred in creating the policy. It should be removed and recreated.</p> </li> </ul>
   */
  StatusFilter?:
    | "ACTIVE"
    | "UPDATE_REQUESTED"
    | "UPDATING"
    | "DELETE_REQUESTED"
    | "DELETING"
    | "DELETED"
    | "ERROR"
    | string;

  /**
   * <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
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
