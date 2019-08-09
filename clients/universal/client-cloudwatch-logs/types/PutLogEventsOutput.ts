import { _UnmarshalledRejectedLogEventsInfo } from "./_RejectedLogEventsInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLogEventsOutput shape
 */
export interface PutLogEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The next sequence token.</p>
   */
  nextSequenceToken?: string;

  /**
   * <p>The rejected events.</p>
   */
  rejectedLogEventsInfo?: _UnmarshalledRejectedLogEventsInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
