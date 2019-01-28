/**
 * Baidu Cloud Messaging channel definition
 */
export interface _BaiduChannelResponse {
    /**
     * Application id
     */
    ApplicationId?: string;

    /**
     * When was this segment created
     */
    CreationDate?: string;

    /**
     * The Baidu API key from Baidu.
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
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: string;

    /**
     * Is this channel archived
     */
    IsArchived?: boolean;

    /**
     * Who made the last change
     */
    LastModifiedBy?: string;

    /**
     * Last date this was updated
     */
    LastModifiedDate?: string;

    /**
     * The platform type. Will be BAIDU
     */
    Platform?: string;

    /**
     * Version of channel
     */
    Version?: number;
}

export type _UnmarshalledBaiduChannelResponse = _BaiduChannelResponse;