/**
 * Apple VoIP Developer Push Notification Service channel definition.
 */
export interface _APNSVoipSandboxChannelRequest {
    /**
     * The bundle id used for APNs Tokens.
     */
    BundleId?: string;

    /**
     * The distribution certificate from Apple.
     */
    Certificate?: string;

    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: string;

    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: boolean;

    /**
     * The certificate private key.
     */
    PrivateKey?: string;

    /**
     * The team id used for APNs Tokens.
     */
    TeamId?: string;

    /**
     * The token key used for APNs Tokens.
     */
    TokenKey?: string;

    /**
     * The token key used for APNs Tokens.
     */
    TokenKeyId?: string;
}

export type _UnmarshalledAPNSVoipSandboxChannelRequest = _APNSVoipSandboxChannelRequest;