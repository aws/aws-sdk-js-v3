import {_UnmarshalledQueryLoggingConfig} from './_QueryLoggingConfig';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * CreateQueryLoggingConfigOutput shape
 */
export interface CreateQueryLoggingConfigOutput {
    /**
     * <p>A complex type that contains the ID for a query logging configuration, the ID of the hosted zone that you want to log queries for, and the ARN for the log group that you want Amazon Route 53 to send query logs to.</p>
     */
    QueryLoggingConfig: _UnmarshalledQueryLoggingConfig;

    /**
     * <p>The unique URL representing the new query logging configuration.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
