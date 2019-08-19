import { _UnmarshalledPutEventsResultEntry } from "./_PutEventsResultEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutEventsOutput shape
 */
export interface PutEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.</p>
   */
  Entries?: Array<_UnmarshalledPutEventsResultEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
