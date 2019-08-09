import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyInstancePlacementInput shape
 */
export interface ModifyInstancePlacementInput {
  /**
   * <p>The affinity setting for the instance.</p>
   */
  Affinity?: "default" | "host" | string;

  /**
   * <p>The name of the placement group in which to place the instance. For spread placement groups, the instance must have a tenancy of <code>default</code>. For cluster and partition placement groups, the instance must have a tenancy of <code>default</code> or <code>dedicated</code>.</p> <p>To remove an instance from a placement group, specify an empty string ("").</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   */
  InstanceId: string;

  /**
   * <p>The tenancy for the instance.</p>
   */
  Tenancy?: "dedicated" | "host" | string;

  /**
   * <p>Reserved for future use.</p>
   */
  PartitionNumber?: number;

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
