import {_UnmarshalledHealthCheckObservation} from './_HealthCheckObservation';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.</p>
 */
export interface GetHealthCheckLastFailureReasonOutput {
    /**
     * <p>A list that contains one <code>Observation</code> element for each Amazon Route 53 health checker that is reporting a last failure reason. </p>
     */
    HealthCheckObservations: Array<_UnmarshalledHealthCheckObservation>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
