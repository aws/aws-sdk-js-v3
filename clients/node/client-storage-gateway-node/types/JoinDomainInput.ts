import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>JoinDomainInput</p>
 */
export interface JoinDomainInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN: string;

  /**
   * <p>The name of the domain that you want the gateway to join.</p>
   */
  DomainName: string;

  /**
   * <p>The organizational unit (OU) is a container with an Active Directory that can hold users, groups, computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.</p>
   */
  OrganizationalUnit?: string;

  /**
   * <p>List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number include it after the colon (“:”). For example, <code>mydc.mydomain.com:389</code>.</p>
   */
  DomainControllers?: Array<string> | Iterable<string>;

  /**
   * <p>Sets the user name of user who has permission to add the gateway to the Active Directory domain.</p>
   */
  UserName: string;

  /**
   * <p>Sets the password of the user who has permission to add the gateway to the Active Directory domain.</p>
   */
  Password: string;

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
