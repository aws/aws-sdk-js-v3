import { _ImageIdentifier } from "./_ImageIdentifier";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetImageInput shape
 */
export interface BatchGetImageInput {
  /**
   * <p>The AWS account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string;

  /**
   * <p>A list of image ID references that correspond to images to describe. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.</p>
   */
  imageIds: Array<_ImageIdentifier> | Iterable<_ImageIdentifier>;

  /**
   * <p>The accepted media types for the request.</p> <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> | <code>application/vnd.docker.distribution.manifest.v2+json</code> | <code>application/vnd.oci.image.manifest.v1+json</code> </p>
   */
  acceptedMediaTypes?: Array<string> | Iterable<string>;

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
