import { _StreamFile, _UnmarshalledStreamFile } from "./_StreamFile";

/**
 * <p>Information about a stream.</p>
 */
export interface _StreamInfo {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: Array<_StreamFile> | Iterable<_StreamFile>;

  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>An IAM role AWS IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

export interface _UnmarshalledStreamInfo extends _StreamInfo {
  /**
   * <p>The files to stream.</p>
   */
  files?: Array<_UnmarshalledStreamFile>;

  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;
}
