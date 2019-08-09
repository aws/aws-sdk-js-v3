import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UploadLayerPartInput shape
 */
export interface UploadLayerPartInput {
  /**
   * <p>The AWS account ID associated with the registry to which you are uploading layer parts. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which you are uploading layer parts.</p>
   */
  repositoryName: string;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to associate with the layer part upload.</p>
   */
  uploadId: string;

  /**
   * <p>The integer value of the first byte of the layer part.</p>
   */
  partFirstByte: number;

  /**
   * <p>The integer value of the last byte of the layer part.</p>
   */
  partLastByte: number;

  /**
   * <p>The base64-encoded layer part payload.</p>
   */
  layerPartBlob: ArrayBuffer | ArrayBufferView | string;

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
