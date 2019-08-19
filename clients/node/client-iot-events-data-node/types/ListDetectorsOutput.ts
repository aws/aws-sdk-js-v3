import { _UnmarshalledDetectorSummary } from "./_DetectorSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDetectorsOutput shape
 */
export interface ListDetectorsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of summary information about the detectors (instances).</p>
   */
  detectorSummaries?: Array<_UnmarshalledDetectorSummary>;

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
