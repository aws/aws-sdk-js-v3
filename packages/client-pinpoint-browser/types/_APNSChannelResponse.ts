/**
 * Apple Distribution Push Notification Service channel definition.
 */
export interface _APNSChannelResponse {
    /**
     * The ID of the application that the channel applies to.
     */
    ApplicationId?: string;

    /**
     * The date and time when this channel was created.
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
     * (Deprecated) An identifier for the channel. Retained for backwards compatibility.
     */
    Id?: string;

    /**
     * Indicates whether or not the channel is archived.
     */
    IsArchived?: boolean;

    /**
     * The user who last updated this channel.
     */
    LastModifiedBy?: string;

    /**
     * The date and time when this channel was last modified.
     */
    LastModifiedDate?: string;

    /**
     * The platform type. For this channel, the value is always "ADM."
     */
    Platform?: string;

    /**
     * The channel version.
     */
    Version?: number;
}

export type _UnmarshalledAPNSChannelResponse = _APNSChannelResponse;