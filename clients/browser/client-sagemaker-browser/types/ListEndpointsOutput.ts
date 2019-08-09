import { _UnmarshalledEndpointSummary } from "./_EndpointSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEndpointsOutput shape
 */
export interface ListEndpointsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: Array<_UnmarshalledEndpointSummary>;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
