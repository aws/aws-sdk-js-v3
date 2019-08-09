import { _Behavior } from "./_Behavior";
import { _AlertTarget } from "./_AlertTarget";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecurityProfileInput shape
 */
export interface CreateSecurityProfileInput {
  /**
   * <p>The name you are giving to the security profile.</p>
   */
  securityProfileName: string;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<_Behavior> | Iterable<_Behavior>;

  /**
   * <p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.</p>
   */
  alertTargets?:
    | { [key in "SNS" | string]: _AlertTarget }
    | Iterable<["SNS" | string, _AlertTarget]>;

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string> | Iterable<string>;

  /**
   * <p>Metadata that can be used to manage the security profile.</p>
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
