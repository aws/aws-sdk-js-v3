import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>See the example below to learn how to create a request body.</p>
 */
export interface DescribeEnvironmentHealthInput {
  /**
   * <p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.</p>
   */
  AttributeNames?:
    | Array<
        | "Status"
        | "Color"
        | "Causes"
        | "ApplicationMetrics"
        | "InstancesHealth"
        | "All"
        | "HealthStatus"
        | "RefreshedAt"
        | string
      >
    | Iterable<
        | "Status"
        | "Color"
        | "Causes"
        | "ApplicationMetrics"
        | "InstancesHealth"
        | "All"
        | "HealthStatus"
        | "RefreshedAt"
        | string
      >;

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
