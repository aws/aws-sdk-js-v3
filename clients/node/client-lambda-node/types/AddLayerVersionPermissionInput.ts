import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddLayerVersionPermissionInput shape
 */
export interface AddLayerVersionPermissionInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number;

  /**
   * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
   */
  StatementId: string;

  /**
   * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
   */
  Action: string;

  /**
   * <p>An account ID, or <code>*</code> to grant permission to all AWS accounts.</p>
   */
  Principal: string;

  /**
   * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

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
