import { _AttributeValue } from "./_AttributeValue";
import { _LaunchPermissionModifications } from "./_LaunchPermissionModifications";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 */
export interface ModifyImageAttributeInput {
  /**
   * <p>The name of the attribute to modify. The valid values are <code>description</code>, <code>launchPermission</code>, and <code>productCodes</code>.</p>
   */
  Attribute?: string;

  /**
   * <p>A new description for the AMI.</p>
   */
  Description?: _AttributeValue;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string;

  /**
   * <p>A new launch permission for the AMI.</p>
   */
  LaunchPermission?: _LaunchPermissionModifications;

  /**
   * <p>The operation type. This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OperationType?: "add" | "remove" | string;

  /**
   * <p>The DevPay product codes. After you add a product code to an AMI, it can't be removed.</p>
   */
  ProductCodes?: Array<string> | Iterable<string>;

  /**
   * <p>The user groups. This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS account IDs. This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserIds?: Array<string> | Iterable<string>;

  /**
   * <p>The value of the attribute being modified. This parameter can be used only when the <code>Attribute</code> parameter is <code>description</code> or <code>productCodes</code>.</p>
   */
  Value?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
