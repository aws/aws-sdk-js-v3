import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateInstanceCustomHealthStatusInput shape
 */
export interface UpdateInstanceCustomHealthStatusInput {
  /**
   * <p>The ID of the service that includes the configuration for the custom health check that you want to change the status for.</p>
   */
  ServiceId: string;

  /**
   * <p>The ID of the instance that you want to change the health status for.</p>
   */
  InstanceId: string;

  /**
   * <p>The new status of the instance, <code>HEALTHY</code> or <code>UNHEALTHY</code>.</p>
   */
  Status: "HEALTHY" | "UNHEALTHY" | string;

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
