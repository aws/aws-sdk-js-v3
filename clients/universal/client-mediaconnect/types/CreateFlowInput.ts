import { _GrantEntitlementRequest } from "./_GrantEntitlementRequest";
import { _AddOutputRequest } from "./_AddOutputRequest";
import { _SetSourceRequest } from "./_SetSourceRequest";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
 */
export interface CreateFlowInput {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   */
  AvailabilityZone?: string;

  /**
   * The entitlements that you want to grant on a flow.
   */
  Entitlements?:
    | Array<_GrantEntitlementRequest>
    | Iterable<_GrantEntitlementRequest>;

  /**
   * The name of the flow.
   */
  Name: string;

  /**
   * The outputs that you want to add to this flow.
   */
  Outputs?: Array<_AddOutputRequest> | Iterable<_AddOutputRequest>;

  /**
   * The settings for the source of the flow.
   */
  Source: _SetSourceRequest;

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
