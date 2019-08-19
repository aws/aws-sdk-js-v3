import { _UnmarshalledDetectorModelVersionSummary } from "./_DetectorModelVersionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDetectorModelVersionsOutput shape
 */
export interface ListDetectorModelVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the detector model versions.</p>
   */
  detectorModelVersionSummaries?: Array<
    _UnmarshalledDetectorModelVersionSummary
  >;

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
