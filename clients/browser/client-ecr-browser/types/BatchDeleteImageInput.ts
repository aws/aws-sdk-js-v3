import { _ImageIdentifier } from "./_ImageIdentifier";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.</p>
 */
export interface BatchDeleteImageInput {
  /**
   * <p>The AWS account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the image to delete.</p>
   */
  repositoryName: string;

  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.</p>
   */
  imageIds: Array<_ImageIdentifier> | Iterable<_ImageIdentifier>;

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
