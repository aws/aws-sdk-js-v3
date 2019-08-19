import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This input determines which instances to list.</p>
 */
export interface ListInstancesInput {
  /**
   * <p>The identifier of the cluster for which to list the instances.</p>
   */
  ClusterId: string;

  /**
   * <p>The identifier of the instance group for which to list the instances.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The type of instance group for which to list the instances.</p>
   */
  InstanceGroupTypes?:
    | Array<"MASTER" | "CORE" | "TASK" | string>
    | Iterable<"MASTER" | "CORE" | "TASK" | string>;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The node type of the instance fleet. For example MASTER, CORE, or TASK.</p>
   */
  InstanceFleetType?: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>A list of instance states that will filter the instances returned with this request.</p>
   */
  InstanceStates?:
    | Array<
        | "AWAITING_FULFILLMENT"
        | "PROVISIONING"
        | "BOOTSTRAPPING"
        | "RUNNING"
        | "TERMINATED"
        | string
      >
    | Iterable<
        | "AWAITING_FULFILLMENT"
        | "PROVISIONING"
        | "BOOTSTRAPPING"
        | "RUNNING"
        | "TERMINATED"
        | string
      >;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

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
