import { _UnmarshalledEndpointConfigSummary } from "./_EndpointConfigSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEndpointConfigsOutput shape
 */
export interface ListEndpointConfigsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: Array<_UnmarshalledEndpointConfigSummary>;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
