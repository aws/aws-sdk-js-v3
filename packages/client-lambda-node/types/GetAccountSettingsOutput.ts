import {_UnmarshalledAccountLimit} from './_AccountLimit';
import {_UnmarshalledAccountUsage} from './_AccountUsage';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetAccountSettingsOutput shape
 */
export interface GetAccountSettingsOutput {
    /**
     * <p>Limits related to concurrency and code storage.</p>
     */
    AccountLimit?: _UnmarshalledAccountLimit;

    /**
     * <p>The number of functions and amount of storage in use.</p>
     */
    AccountUsage?: _UnmarshalledAccountUsage;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
