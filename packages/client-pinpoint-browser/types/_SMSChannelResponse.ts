/**
 * SMS Channel Response.
 */
export interface _SMSChannelResponse {
    /**
     * The unique ID of the application to which the SMS channel belongs.
     */
    ApplicationId?: string;

    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    CreationDate?: string;

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
     * Who last updated this entry
     */
    LastModifiedBy?: string;

    /**
     * Last date this was updated
     */
    LastModifiedDate?: string;

    /**
     * Platform type. Will be "SMS"
     */
    Platform?: string;

    /**
     * Promotional messages per second that can be sent
     */
    PromotionalMessagesPerSecond?: number;

    /**
     * Sender identifier of your messages.
     */
    SenderId?: string;

    /**
     * The short code registered with the phone provider.
     */
    ShortCode?: string;

    /**
     * Transactional messages per second that can be sent
     */
    TransactionalMessagesPerSecond?: number;

    /**
     * Version of channel
     */
    Version?: number;
}

export type _UnmarshalledSMSChannelResponse = _SMSChannelResponse;