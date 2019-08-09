import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyIdentityIdFormatInput shape
 */
export interface ModifyIdentityIdFormatInput {
  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of the account.</p>
   */
  PrincipalArn: string;

  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p> <p>Alternatively, use the <code>all-current</code> option to include all resource types that are currently within their opt-in period for longer IDs.</p>
   */
  Resource: string;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   */
  UseLongIds: boolean;

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
