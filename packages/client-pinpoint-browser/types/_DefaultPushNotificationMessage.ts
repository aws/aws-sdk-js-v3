/**
 * Default Push Notification Message.
 */
export interface _DefaultPushNotificationMessage {
  /**
   * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
   */
  Action?: "OPEN_APP" | "DEEP_LINK" | "URL" | string;

  /**
   * The message body of the notification.
   */
  Body?: string;

  /**
   * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
   */
  Data?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * Indicates if the message should display on the recipient's device. You can use silent pushes for remote configuration or to deliver messages to in-app notification centers.
   */
  SilentPush?: boolean;

  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * The message title that displays above the message on the user's device.
   */
  Title?: string;

  /**
   * The URL to open in the user's mobile browser. Used if the value for Action is URL.
   */
  Url?: string;
}

export interface _UnmarshalledDefaultPushNotificationMessage
  extends _DefaultPushNotificationMessage {
  /**
   * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
   */
  Data?: { [key: string]: string };

  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?: { [key: string]: Array<string> };
}
