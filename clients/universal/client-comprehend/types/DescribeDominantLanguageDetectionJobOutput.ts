import { _UnmarshalledDominantLanguageDetectionJobProperties } from "./_DominantLanguageDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDominantLanguageDetectionJobOutput shape
 */
export interface DescribeDominantLanguageDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the properties associated with a dominant language detection job.</p>
   */
  DominantLanguageDetectionJobProperties?: _UnmarshalledDominantLanguageDetectionJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
