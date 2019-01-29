/**
 * Apple Development Push Notification Service channel definition.
 */
export interface _APNSSandboxChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: string;

    /**
     * When was this segment created
     */
    CreationDate?: string;

    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: string;

    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: boolean;

    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: boolean;

    /**
     * Indicates whether the channel is configured with a key for APNs token authentication. Provide a token key by setting the TokenKey attribute.
     */
    HasTokenKey?: boolean;

    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: string;

    /**
     * Is this channel archived
     */
    IsArchived?: boolean;

    /**
     * Who last updated this entry
     */
    LastModifiedBy?: string;

    /**
     * Last date this was updated
     */
    LastModifiedDate?: string;

    /**
     * The platform type. Will be APNS_SANDBOX.
     */
    Platform?: string;

    /**
     * Version of channel
     */
    Version?: number;
}

export type _UnmarshalledAPNSSandboxChannelResponse = _APNSSandboxChannelResponse;