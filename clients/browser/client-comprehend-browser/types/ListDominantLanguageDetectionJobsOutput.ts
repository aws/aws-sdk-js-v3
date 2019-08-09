import { _UnmarshalledDominantLanguageDetectionJobProperties } from "./_DominantLanguageDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDominantLanguageDetectionJobsOutput shape
 */
export interface ListDominantLanguageDetectionJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  DominantLanguageDetectionJobPropertiesList?: Array<
    _UnmarshalledDominantLanguageDetectionJobProperties
  >;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
