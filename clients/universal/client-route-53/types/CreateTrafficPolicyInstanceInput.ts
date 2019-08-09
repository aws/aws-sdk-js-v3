import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.</p>
 */
export interface CreateTrafficPolicyInstanceInput {
  /**
   * <p>The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.</p>
   */
  HostedZoneId: string;

  /**
   * <p>The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.</p>
   */
  Name: string;

  /**
   * <p>(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.</p>
   */
  TTL: number;

  /**
   * <p>The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyId: string;

  /**
   * <p>The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyVersion: number;

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
