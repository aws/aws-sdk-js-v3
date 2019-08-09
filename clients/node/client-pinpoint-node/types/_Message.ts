/**
 * <p>Specifies the content and settings for a push notification that's sent to recipients of a campaign.</p>
 */
export interface _Message {
  /**
   * <p>The action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * <p>The body of the notification message. The maximum number of characters is 200.</p>
   */
  Body?: string;

  /**
   * <p>The URL of the image to display as the push-notification icon, such as the icon for the app.</p>
   */
  ImageIconUrl?: string;

  /**
   * <p>The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.</p>
   */
  ImageSmallIconUrl?: string;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The JSON payload to use for a silent push notification.</p>
   */
  JsonBody?: string;

  /**
   * <p>The URL of the image or video to display in the push notification.</p>
   */
  MediaUrl?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. This value overrides other values for the message.</p>
   */
  RawContent?: string;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * <p>The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>
   */
  TimeToLive?: number;

  /**
   * <p>The title to display above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export type _UnmarshalledMessage = _Message;
