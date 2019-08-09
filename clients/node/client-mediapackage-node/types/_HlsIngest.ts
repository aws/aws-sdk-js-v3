import {
  _IngestEndpoint,
  _UnmarshalledIngestEndpoint
} from "./_IngestEndpoint";

/**
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 */
export interface _HlsIngest {
  /**
   * A list of endpoints to which the source stream should be sent.
   */
  IngestEndpoints?: Array<_IngestEndpoint> | Iterable<_IngestEndpoint>;
}

export interface _UnmarshalledHlsIngest extends _HlsIngest {
  /**
   * A list of endpoints to which the source stream should be sent.
   */
  IngestEndpoints?: Array<_UnmarshalledIngestEndpoint>;
}
