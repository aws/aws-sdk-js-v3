/**
 * <p>Specifies the default settings and content for a push notification that's sent directly to an endpoint.</p>
 */
export interface _DefaultPushNotificationMessage {
  /**
   * <p>The default action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * <p>The default body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.</p>
   */
  SilentPush?: boolean;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The default title to display above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export interface _UnmarshalledDefaultPushNotificationMessage
  extends _DefaultPushNotificationMessage {
  /**
   * <p>The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
