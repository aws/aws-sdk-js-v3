import { _Notification } from "./_Notification";
import { _JobResource } from "./_JobResource";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobInput shape
 */
export interface UpdateJobInput {
  /**
   * <p>The job ID of the job that you want to update, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this job. To create a role ARN, use the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>AWS Identity and Access Management (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: _Notification;

  /**
   * <p>The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. </p>
   */
  Resources?: _JobResource;

  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * <p>The updated shipping option value of this job's <a>ShippingDetails</a> object.</p>
   */
  ShippingOption?: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>The updated description of this job's <a>JobMetadata</a> object.</p>
   */
  Description?: string;

  /**
   * <p>The updated <code>SnowballCapacityPreference</code> of this job's <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US regions.</p>
   */
  SnowballCapacityPreference?:
    | "T50"
    | "T80"
    | "T100"
    | "T42"
    | "NoPreference"
    | string;

  /**
   * <p>The updated ID for the forwarding address for a job. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

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
