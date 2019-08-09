import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResourceShareInput shape
 */
export interface CreateResourceShareInput {
  /**
   * <p>The name of the resource share.</p>
   */
  name: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources to associate with the resource share.</p>
   */
  resourceArns?: Array<string> | Iterable<string>;

  /**
   * <p>The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations.</p>
   */
  principals?: Array<string> | Iterable<string>;

  /**
   * <p>One or more tags.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Indicates whether principals outside your organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

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
