import { _UnmarshalledTrafficPolicy } from "./_TrafficPolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains one <code>TrafficPolicy</code> element for each traffic policy version that is associated with the specified traffic policy.</p>
   */
  TrafficPolicies: Array<_UnmarshalledTrafficPolicy>;

  /**
   * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another <code>ListTrafficPolicyVersions</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.</p>
   */
  IsTruncated: boolean;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>TrafficPolicyVersionMarker</code> identifies the first traffic policy that Amazon Route 53 will return if you submit another request. Call <code>ListTrafficPolicyVersions</code> again and specify the value of <code>TrafficPolicyVersionMarker</code> in the <code>TrafficPolicyVersionMarker</code> request parameter.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  TrafficPolicyVersionMarker: string;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the <code>ListTrafficPolicyVersions</code> request that produced the current response.</p>
   */
  MaxItems: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
