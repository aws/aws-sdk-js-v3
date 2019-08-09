import { _LoadPermissionModifications } from "./_LoadPermissionModifications";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyFpgaImageAttributeInput shape
 */
export interface ModifyFpgaImageAttributeInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?:
    | "description"
    | "name"
    | "loadPermission"
    | "productCodes"
    | string;

  /**
   * <p>The operation type.</p>
   */
  OperationType?: "add" | "remove" | string;

  /**
   * <p>The AWS account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserIds?: Array<string> | Iterable<string>;

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed. This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   */
  ProductCodes?: Array<string> | Iterable<string>;

  /**
   * <p>The load permission for the AFI.</p>
   */
  LoadPermission?: _LoadPermissionModifications;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;

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
