import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateThingGroupInput shape
 */
export interface UpdateThingGroupInput {
  /**
   * <p>The thing group to update.</p>
   */
  thingGroupName: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: _ThingGroupProperties;

  /**
   * <p>The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;

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
