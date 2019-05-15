import { _UnmarshalledStreamDescriptionSummary } from "./_StreamDescriptionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStreamSummaryOutput shape
 */
export interface DescribeStreamSummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>StreamDescriptionSummary</a> containing information about the stream.</p>
   */
  StreamDescriptionSummary: _UnmarshalledStreamDescriptionSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
