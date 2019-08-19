import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRegionsInput shape
 */
export interface GetRegionsInput {
  /**
   * <p>A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.</p>
   */
  includeAvailabilityZones?: boolean;

  /**
   * <p>&gt;A Boolean value indicating whether to also include Availability Zones for databases in your get regions request. Availability Zones are indicated with a letter (e.g., <code>us-east-2a</code>).</p>
   */
  includeRelationalDatabaseAvailabilityZones?: boolean;

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
