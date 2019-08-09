import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClusterInput shape
 */
export interface UpdateClusterInput {
  /**
   * <p>The cluster ID of the cluster that you want to update, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this cluster. To create a role ARN, use the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>The updated description of this cluster.</p>
   */
  Description?: string;

  /**
   * <p>The updated arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: _JobResource;

  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * <p>The updated shipping option value of this cluster's <a>ShippingDetails</a> object.</p>
   */
  ShippingOption?: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: _Notification;

  /**
   * <p>The updated ID for the forwarding address for a cluster. This field is not supported in most regions.</p>
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
