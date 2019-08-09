import { _UnmarshalledPutPartnerEventsResultEntry } from "./_PutPartnerEventsResultEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutPartnerEventsOutput shape
 */
export interface PutPartnerEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of events from this operation that couldn't be written to the partner event bus.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The list of events from this operation that were successfully written to the partner event bus.</p>
   */
  Entries?: Array<_UnmarshalledPutPartnerEventsResultEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
