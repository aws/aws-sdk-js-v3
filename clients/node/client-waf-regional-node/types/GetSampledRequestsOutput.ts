import { _UnmarshalledSampledHTTPRequest } from "./_SampledHTTPRequest";
import { _UnmarshalledTimeWindow } from "./_TimeWindow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSampledRequestsOutput shape
 */
export interface GetSampledRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains detailed information about each of the requests in the sample.</p>
   */
  SampledRequests?: Array<_UnmarshalledSampledHTTPRequest>;

  /**
   * <p>The total number of requests from which <code>GetSampledRequests</code> got a sample of <code>MaxItems</code> requests. If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your AWS resource received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request. However, if your AWS resource received more than 5,000 requests during the time range that you specified in the request, <code>GetSampledRequests</code> returns the time range for the first 5,000 requests.</p>
   */
  TimeWindow?: _UnmarshalledTimeWindow;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
