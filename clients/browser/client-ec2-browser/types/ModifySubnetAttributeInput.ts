import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifySubnetAttributeInput shape
 */
export interface ModifySubnetAttributeInput {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This includes a network interface that's created when launching an instance into the subnet (the instance therefore receives an IPv6 address). </p> <p>If you enable the IPv6 addressing feature for your subnet, your network interface or instance only receives an IPv6 address if it's created using version <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   */
  AssignIpv6AddressOnCreation?: _AttributeBooleanValue;

  /**
   * <p>Specify <code>true</code> to indicate that ENIs attached to instances created in the specified subnet should be assigned a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: _AttributeBooleanValue;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string;

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
