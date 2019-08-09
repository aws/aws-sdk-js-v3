import { _UnmarshalledDetectorModelSummary } from "./_DetectorModelSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDetectorModelsOutput shape
 */
export interface ListDetectorModelsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the detector models.</p>
   */
  detectorModelSummaries?: Array<_UnmarshalledDetectorModelSummary>;

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
