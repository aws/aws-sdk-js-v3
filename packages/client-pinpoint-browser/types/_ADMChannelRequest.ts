/**
 * Amazon Device Messaging channel definition.
 */
export interface _ADMChannelRequest {
    /**
     * The Client ID that you obtained from the Amazon App Distribution Portal.
     */
    ClientId?: string;

    /**
     * The Client Secret that you obtained from the Amazon App Distribution Portal.
     */
    ClientSecret?: string;

    /**
     * Indicates whether or not the channel is enabled for sending messages.
     */
    Enabled?: boolean;
}

export type _UnmarshalledADMChannelRequest = _ADMChannelRequest;