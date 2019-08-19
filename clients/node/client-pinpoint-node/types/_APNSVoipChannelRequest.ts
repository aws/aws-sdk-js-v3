/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface _APNSVoipChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether to enable the APNs VoIP channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export type _UnmarshalledAPNSVoipChannelRequest = _APNSVoipChannelRequest;
