import {_UnmarshalledTrafficPolicySummary} from './_TrafficPolicySummary';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPoliciesOutput {
    /**
     * <p>A list that contains one <code>TrafficPolicySummary</code> element for each traffic policy that was created by the current AWS account.</p>
     */
    TrafficPolicySummaries: Array<_UnmarshalledTrafficPolicySummary>;

    /**
     * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another <code>ListTrafficPolicies</code> request and specifying the value of <code>TrafficPolicyIdMarker</code> in the <code>TrafficPolicyIdMarker</code> request parameter.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If the value of <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy in the next group of <code>MaxItems</code> traffic policies.</p>
     */
    TrafficPolicyIdMarker: string;

    /**
     * <p>The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicies</code> request that produced the current response.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
