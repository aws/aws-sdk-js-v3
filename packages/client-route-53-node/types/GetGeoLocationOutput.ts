import {_UnmarshalledGeoLocationDetails} from './_GeoLocationDetails';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the specified geolocation code.</p>
 */
export interface GetGeoLocationOutput {
    /**
     * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.</p>
     */
    GeoLocationDetails: _UnmarshalledGeoLocationDetails;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
