import { _UnmarshalledAggregationAuthorization } from "./_AggregationAuthorization";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAggregationAuthorizationOutput shape
 */
export interface PutAggregationAuthorizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns an AggregationAuthorization object. </p>
   */
  AggregationAuthorization?: _UnmarshalledAggregationAuthorization;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
