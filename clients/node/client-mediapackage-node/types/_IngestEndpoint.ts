/**
 * An endpoint for ingesting source content for a Channel.
 */
export interface _IngestEndpoint {
  /**
   * The system generated unique identifier for the IngestEndpoint
   */
  Id?: string;

  /**
   * The system generated password for ingest authentication.
   */
  Password?: string;

  /**
   * The ingest URL to which the source stream should be sent.
   */
  Url?: string;

  /**
   * The system generated username for ingest authentication.
   */
  Username?: string;
}

export type _UnmarshalledIngestEndpoint = _IngestEndpoint;
