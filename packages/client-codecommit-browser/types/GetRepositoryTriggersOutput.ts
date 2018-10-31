import {_UnmarshalledRepositoryTrigger} from './_RepositoryTrigger';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersOutput {
    /**
     * <p>The system-generated unique ID for the trigger.</p>
     */
    configurationId?: string;

    /**
     * <p>The JSON block of configuration information for each trigger.</p>
     */
    triggers?: Array<_UnmarshalledRepositoryTrigger>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
