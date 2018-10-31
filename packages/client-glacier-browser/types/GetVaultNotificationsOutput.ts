import {_UnmarshalledVaultNotificationConfig} from './_VaultNotificationConfig';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface GetVaultNotificationsOutput {
    /**
     * <p>Returns the notification configuration set on the vault.</p>
     */
    vaultNotificationConfig?: _UnmarshalledVaultNotificationConfig;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
