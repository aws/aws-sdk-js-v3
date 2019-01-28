/**
 * Email Channel Response.
 */
export interface _EmailChannelResponse {
    /**
     * The unique ID of the application to which the email channel belongs.
     */
    ApplicationId?: string;

    /**
     * The configuration set that you want to use when you send email using the Pinpoint Email API.
     */
    ConfigurationSet?: string;

    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    CreationDate?: string;

    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: boolean;

    /**
     * The email address used to send emails from.
     */
    FromAddress?: string;

    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: boolean;

    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: string;

    /**
     * The ARN of an identity verified with SES.
     */
    Identity?: string;

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
     * Messages per second that can be sent
     */
    MessagesPerSecond?: number;

    /**
     * Platform type. Will be "EMAIL"
     */
    Platform?: string;

    /**
     * The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service
     */
    RoleArn?: string;

    /**
     * Version of channel
     */
    Version?: number;
}

export type _UnmarshalledEmailChannelResponse = _EmailChannelResponse;