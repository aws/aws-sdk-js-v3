import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateThingGroupInput shape
 */
export interface CreateThingGroupInput {
  /**
   * <p>The thing group name to create.</p>
   */
  thingGroupName: string;

  /**
   * <p>The name of the parent thing group.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: _ThingGroupProperties;

  /**
   * <p>Metadata which can be used to manage the thing group.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
