import {_UnmarshalledHostedZone} from './_HostedZone';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListHostedZonesOutput shape
 */
export interface ListHostedZonesOutput {
    /**
     * <p>A complex type that contains general information about the hosted zone.</p>
     */
    HostedZones: Array<_UnmarshalledHostedZone>;

    /**
     * <p>For the second and subsequent calls to <code>ListHostedZones</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the request that produced the current response.</p>
     */
    Marker: string;

    /**
     * <p>A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get more hosted zones by submitting another <code>ListHostedZones</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first hosted zone in the next group of hosted zones. Submit another <code>ListHostedZones</code> request, and specify the value of <code>NextMarker</code> from the response in the <code>marker</code> parameter.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
     */
    NextMarker?: string;

    /**
     * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZones</code> that produced the current response.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
