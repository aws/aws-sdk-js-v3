import { _HlsIngest, _UnmarshalledHlsIngest } from "./_HlsIngest";

/**
 * A Channel resource configuration.
 */
export interface _Channel {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: _HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledChannel extends _Channel {
  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: _UnmarshalledHlsIngest;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}
