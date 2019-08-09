import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstancesHealthStatusOutput shape
 */
export interface GetInstancesHealthStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains the IDs and the health status of the instances that you specified in the <code>GetInstancesHealthStatus</code> request.</p>
   */
  Status?: { [key: string]: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string };

  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
