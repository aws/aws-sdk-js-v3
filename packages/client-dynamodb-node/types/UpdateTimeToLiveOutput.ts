import { _UnmarshalledTimeToLiveSpecification } from "./_TimeToLiveSpecification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTimeToLiveOutput shape
 */
export interface UpdateTimeToLiveOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of an <code>UpdateTimeToLive</code> operation.</p>
   */
  TimeToLiveSpecification?: _UnmarshalledTimeToLiveSpecification;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
