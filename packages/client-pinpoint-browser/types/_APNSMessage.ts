/**
 * APNS Message.
 */
export interface _APNSMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: 'OPEN_APP'|'DEEP_LINK'|'URL'|string;

    /**
     * Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0.
     */
    Badge?: number;

    /**
     * The message body of the notification.
     */
    Body?: string;

    /**
     * Provide this key with a string value that represents the notification's type. This value corresponds to the value in the identifier property of one of your app's registered categories.
     */
    Category?: string;

    /**
     * An ID that, if assigned to multiple messages, causes APNs to coalesce the messages into a single push notification instead of delivering each message individually. The value must not exceed 64 bytes. Amazon Pinpoint uses this value to set the apns-collapse-id request header when it sends the message to APNs.
     */
    CollapseId?: string;

    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * The URL that points to a video used in the push notification.
     */
    MediaUrl?: string;

    /**
     * The preferred authentication method, either "CERTIFICATE" or "TOKEN"
     */
    PreferredAuthenticationMethod?: string;

    /**
     * The message priority. Amazon Pinpoint uses this value to set the apns-priority request header when it sends the message to APNs. Accepts the following values:
     *
     * "5" - Low priority. Messages might be delayed, delivered in groups, and throttled.
     *
     * "10" - High priority. Messages are sent immediately. High priority messages must cause an alert, sound, or badge on the receiving device.
     *
     * The default value is "10".
     *
     * The equivalent values for FCM or GCM messages are "normal" and "high". Amazon Pinpoint accepts these values for APNs messages and converts them.
     *
     * For more information about the apns-priority parameter, see Communicating with APNs in the APNs Local and Remote Notification Programming Guide.
     */
    Priority?: string;

    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: string;

    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: boolean;

    /**
     * Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app's main bundle or in the Library/Sounds folder of your app's data container. If the sound file cannot be found, or if you specify defaultfor the value, the system plays the default alert sound.
     */
    Sound?: string;

    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>|Iterable<string>}|Iterable<[string, Array<string>|Iterable<string>]>;

    /**
     * Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.
     */
    ThreadId?: string;

    /**
     * The length of time (in seconds) that APNs stores and attempts to deliver the message. If the value is 0, APNs does not store the message or attempt to deliver it more than once. Amazon Pinpoint uses this value to set the apns-expiration request header when it sends the message to APNs.
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

export interface _UnmarshalledAPNSMessage extends _APNSMessage {
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: {[key: string]: string};

    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>};
}