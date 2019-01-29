/**
 * Google Cloud Messaging channel definition
 */
export interface _GCMChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: string;

    /**
     * When was this segment created
     */
    CreationDate?: string;

    /**
     * The GCM API key from Google.
     */
    Credential?: string;

    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: boolean;

    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: boolean;

    /**
     * Channel ID. Not used. Present only for backwards compatibility.
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
     * The platform type. Will be GCM
     */
    Platform?: string;

    /**
     * Version of channel
     */
    Version?: number;
}

export type _UnmarshalledGCMChannelResponse = _GCMChannelResponse;