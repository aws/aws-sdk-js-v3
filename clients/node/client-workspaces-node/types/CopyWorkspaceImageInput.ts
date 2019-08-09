import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyWorkspaceImageInput shape
 */
export interface CopyWorkspaceImageInput {
  /**
   * <p>The name of the image.</p>
   */
  Name: string;

  /**
   * <p>A description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the source image.</p>
   */
  SourceImageId: string;

  /**
   * <p>The identifier of the source Region.</p>
   */
  SourceRegion: string;

  /**
   * <p>The tags for the image.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
