import { _BookingOptions } from "./_BookingOptions";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResourceInput shape
 */
export interface UpdateResourceInput {
  /**
   * <p>The identifier associated with the organization for which the resource is updated.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier of the resource to be updated.</p>
   */
  ResourceId: string;

  /**
   * <p>The name of the resource to be updated.</p>
   */
  Name?: string;

  /**
   * <p>The resource's booking options to be updated.</p>
   */
  BookingOptions?: _BookingOptions;

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
