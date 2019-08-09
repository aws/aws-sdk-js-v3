import { _UnmarshalledObservation } from "./_Observation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeObservationOutput shape
 */
export interface DescribeObservationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the observation.</p>
   */
  Observation?: _UnmarshalledObservation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
