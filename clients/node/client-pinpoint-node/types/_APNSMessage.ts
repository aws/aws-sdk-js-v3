/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.</p>
 */
export interface _APNSMessage {
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * <p>The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.</p>
   */
  Badge?: number;

  /**
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.</p>
   */
  Category?: string;

  /**
   * <p>An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes.</p> <p>Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.</p>
   */
  CollapseId?: string;

  /**
   * <p>The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The URL of an image or video to display in the push notification.</p>
   */
  MediaUrl?: string;

  /**
   * <p>The authentication method that you want Amazon Pinpoint to use when authenticating with Apple Push Notification service (APNs), CERTIFICATE or TOKEN.</p>
   */
  PreferredAuthenticationMethod?: string;

  /**
   * <p>para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.</p>/listitem> <li><p>10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.</p> <p>The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.</p>
   */
  Priority?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.</p>
   */
  RawContent?: string;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * <p>The key for the sound to play when the recipient receives the push notification. The value of this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * <p>The default message variables to use in the notification message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.</p>
   */
  ThreadId?: string;

  /**
   * <p>The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.</p>
   */
  TimeToLive?: number;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export interface _UnmarshalledAPNSMessage extends _APNSMessage {
  /**
   * <p>The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

  /**
   * <p>The default message variables to use in the notification message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
