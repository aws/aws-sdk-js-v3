/**
 * Baidu Message.
 */
export interface _BaiduMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: 'OPEN_APP'|'DEEP_LINK'|'URL'|string;

    /**
     * The message body of the notification.
     */
    Body?: string;

    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * The icon image name of the asset saved in your application.
     */
    IconReference?: string;

    /**
     * The URL that points to an image used as the large icon to the notification content view.
     */
    ImageIconUrl?: string;

    /**
     * The URL that points to an image used in the push notification.
     */
    ImageUrl?: string;

    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: string;

    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: boolean;

    /**
     * The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view
     */
    SmallImageIconUrl?: string;

    /**
     * Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/
     */
    Sound?: string;

    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>|Iterable<string>}|Iterable<[string, Array<string>|Iterable<string>]>;

    /**
     * This parameter specifies how long (in seconds) the message should be kept in Baidu storage if the device is offline. The and the default value and the maximum time to live supported is 7 days (604800 seconds)
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

export interface _UnmarshalledBaiduMessage extends _BaiduMessage {
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: {[key: string]: string};

    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>};
}