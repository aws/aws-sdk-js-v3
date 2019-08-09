import { _StreamFile } from "./_StreamFile";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStreamInput shape
 */
export interface CreateStreamInput {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files: Array<_StreamFile> | Iterable<_StreamFile>;

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn: string;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
