/**
 * Message to send
 */
export interface _Message {
  /**
   * The action that occurs if the user taps a push notification delivered by the campaign:
   * OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action.
   *
   * DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app.
   *
   * URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify.
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * The message body. Can include up to 140 characters.
   */
  Body?: string;

  /**
   * The URL that points to the icon image for the push notification icon, for example, the app icon.
   */
  ImageIconUrl?: string;

  /**
   * The URL that points to the small icon image for the push notification icon, for example, the app icon.
   */
  ImageSmallIconUrl?: string;

  /**
   * The URL that points to an image used in the push notification.
   */
  ImageUrl?: string;

  /**
   * The JSON payload used for a silent push.
   */
  JsonBody?: string;

  /**
   * The URL that points to the media resource, for example a .mp4 or .gif file.
   */
  MediaUrl?: string;

  /**
   * The Raw JSON formatted string to be used as the payload. This value overrides the message.
   */
  RawContent?: string;

  /**
   * Indicates if the message should display on the users device.
   *
   * Silent pushes can be used for Remote Configuration and Phone Home use cases.
   */
  SilentPush?: boolean;

  /**
   * This parameter specifies how long (in seconds) the message should be kept if the service is unable to deliver the notification the first time. If the value is 0, it treats the notification as if it expires immediately and does not store the notification or attempt to redeliver it. This value is converted to the expiration field when sent to the service. It only applies to APNs and GCM
   */
  TimeToLive?: number;

  /**
   * The message title that displays above the message on the user's device.
   */
  Title?: string;

  /**
   * The URL to open in the user's mobile browser. Used if the value for Action is URL.
   */
  Url?: string;
}

export type _UnmarshalledMessage = _Message;
