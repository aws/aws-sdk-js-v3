import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutImageTagMutabilityInput shape
 */
export interface PutImageTagMutabilityInput {
  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to update the image tag mutability settings.</p>
   */
  repositoryName: string;

  /**
   * <p>The tag mutability setting for the repository. If <code>MUTABLE</code> is specified, image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.</p>
   */
  imageTagMutability: "MUTABLE" | "IMMUTABLE" | string;

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
