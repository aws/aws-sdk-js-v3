import { _JobInput } from "./_JobInput";
import { _CreateJobOutput } from "./_CreateJobOutput";
import { _CreateJobPlaylist } from "./_CreateJobPlaylist";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>CreateJobRequest</code> structure.</p>
 */
export interface CreateJobInput {
  /**
   * <p>The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.</p>
   */
  PipelineId: string;

  /**
   * <p>A section of the request body that provides information about the file that is being transcoded.</p>
   */
  Input?: _JobInput;

  /**
   * <p>A section of the request body that provides information about the files that are being transcoded.</p>
   */
  Inputs?: Array<_JobInput> | Iterable<_JobInput>;

  /**
   * <p> A section of the request body that provides information about the transcoded (target) file. We strongly recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. </p>
   */
  Output?: _CreateJobOutput;

  /**
   * <p> A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. </p>
   */
  Outputs?: Array<_CreateJobOutput> | Iterable<_CreateJobOutput>;

  /**
   * <p>The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.</p>
   */
  OutputKeyPrefix?: string;

  /**
   * <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>
   */
  Playlists?: Array<_CreateJobPlaylist> | Iterable<_CreateJobPlaylist>;

  /**
   * <p>User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.</p>
   */
  UserMetadata?: { [key: string]: string } | Iterable<[string, string]>;

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
