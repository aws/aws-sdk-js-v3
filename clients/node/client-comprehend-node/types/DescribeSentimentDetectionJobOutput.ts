import { _UnmarshalledSentimentDetectionJobProperties } from "./_SentimentDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSentimentDetectionJobOutput shape
 */
export interface DescribeSentimentDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the properties associated with a sentiment detection job.</p>
   */
  SentimentDetectionJobProperties?: _UnmarshalledSentimentDetectionJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
