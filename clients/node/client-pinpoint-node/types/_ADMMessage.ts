/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.</p>
 */
export interface _ADMMessage {
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.</p>
   */
  ConsolidationKey?: string;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.</p>
   */
  ExpiresAfter?: string;

  /**
   * <p>The icon image name of the asset saved in your app.</p>
   */
  IconReference?: string;

  /**
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   */
  ImageIconUrl?: string;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.</p>
   */
  MD5?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.</p>
   */
  RawContent?: string;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export interface _UnmarshalledADMMessage extends _ADMMessage {
  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
