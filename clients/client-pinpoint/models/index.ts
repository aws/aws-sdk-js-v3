import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum Action {
  DEEP_LINK = "DEEP_LINK",
  OPEN_APP = "OPEN_APP",
  URL = "URL",
}

/**
 * <p>Provides information about the activities that were performed by a campaign.</p>
 */
export interface ActivitiesResponse {
  __type?: "ActivitiesResponse";
  /**
   * <p>An array of responses, one for each activity that was performed by the campaign.</p>
   */
  Item: ActivityResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace ActivitiesResponse {
  export const filterSensitiveLog = (obj: ActivitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ActivitiesResponse => __isa(o, "ActivitiesResponse");
}

/**
 * <p>Specifies the configuration and other settings for an activity in a journey.</p>
 */
export interface Activity {
  __type?: "Activity";
  /**
   * <p>The settings for a yes/no split activity. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p>
   */
  ConditionalSplit?: ConditionalSplitActivity;

  /**
   * <p>The custom description of the activity.</p>
   */
  Description?: string;

  /**
   * <p>The settings for an email activity. This type of activity sends an email message to participants.</p>
   */
  EMAIL?: EmailMessageActivity;

  /**
   * <p>The settings for a holdout activity. This type of activity stops a journey for a specified percentage of participants.</p>
   */
  Holdout?: HoldoutActivity;

  /**
   * <p>The settings for a multivariate split activity. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p>
   */
  MultiCondition?: MultiConditionalSplitActivity;

  /**
   * <p>The settings for a random split activity. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
   */
  RandomSplit?: RandomSplitActivity;

  /**
   * <p>The settings for a wait activity. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
   */
  Wait?: WaitActivity;
}

export namespace Activity {
  export const filterSensitiveLog = (obj: Activity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Activity => __isa(o, "Activity");
}

/**
 * <p>Provides information about an activity that was performed by a campaign.</p>
 */
export interface ActivityResponse {
  __type?: "ActivityResponse";
  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign that the activity applies to.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.</p>
   */
  End?: string;

  /**
   * <p>The unique identifier for the activity.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.</p>
   */
  Result?: string;

  /**
   * <p>The scheduled start time, in ISO 8601 format, for the activity.</p>
   */
  ScheduledStart?: string;

  /**
   * <p>The actual start time, in ISO 8601 format, of the activity.</p>
   */
  Start?: string;

  /**
   * <p>The current status of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.</p>
   */
  State?: string;

  /**
   * <p>The total number of endpoints that the campaign successfully delivered messages to.</p>
   */
  SuccessfulEndpointCount?: number;

  /**
   * <p>The total number of time zones that were completed.</p>
   */
  TimezonesCompletedCount?: number;

  /**
   * <p>The total number of unique time zones that are in the segment for the campaign.</p>
   */
  TimezonesTotalCount?: number;

  /**
   * <p>The total number of endpoints that the campaign attempted to deliver messages to.</p>
   */
  TotalEndpointCount?: number;

  /**
   * <p>The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentId?: string;
}

export namespace ActivityResponse {
  export const filterSensitiveLog = (obj: ActivityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ActivityResponse => __isa(o, "ActivityResponse");
}

/**
 * <p>Specifies address-based configuration settings for a message that's sent directly to an endpoint.</p>
 */
export interface AddressConfiguration {
  __type?: "AddressConfiguration";
  /**
   * <p>The message body to use instead of the default message body. This value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * <p>The channel to use when sending the message.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>An object that maps custom attributes to attributes for the address and is attached to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   */
  RawContent?: string;

  /**
   * <p>A map of the message variables to merge with the variables specified by properties of the DefaultMessage object. The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The message title to use instead of the default message title. This value overrides the default message title.</p>
   */
  TitleOverride?: string;
}

export namespace AddressConfiguration {
  export const filterSensitiveLog = (obj: AddressConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AddressConfiguration => __isa(o, "AddressConfiguration");
}

/**
 * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelRequest {
  __type?: "ADMChannelRequest";
  /**
   * <p>The Client ID that you received from Amazon to send messages by using ADM.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The Client Secret that you received from Amazon to send messages by using ADM.</p>
   */
  ClientSecret: string | undefined;

  /**
   * <p>Specifies whether to enable the ADM channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace ADMChannelRequest {
  export const filterSensitiveLog = (obj: ADMChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ADMChannelRequest => __isa(o, "ADMChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelResponse {
  __type?: "ADMChannelResponse";
  /**
   * <p>The unique identifier for the application that the ADM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the ADM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the ADM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the ADM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the ADM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the ADM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the ADM channel.</p>
   */
  Version?: number;
}

export namespace ADMChannelResponse {
  export const filterSensitiveLog = (obj: ADMChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ADMChannelResponse => __isa(o, "ADMChannelResponse");
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.</p>
 */
export interface ADMMessage {
  __type?: "ADMMessage";
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

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
  Data?: { [key: string]: string };

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
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
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
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export namespace ADMMessage {
  export const filterSensitiveLog = (obj: ADMMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ADMMessage => __isa(o, "ADMMessage");
}

/**
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.</p>
 */
export interface AndroidPushNotificationTemplate {
  __type?: "AndroidPushNotificationTemplate";
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The message body to use in a push notification that's based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   */
  ImageIconUrl?: string;

  /**
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.</p>
   */
  RawContent?: string;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export namespace AndroidPushNotificationTemplate {
  export const filterSensitiveLog = (obj: AndroidPushNotificationTemplate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AndroidPushNotificationTemplate => __isa(o, "AndroidPushNotificationTemplate");
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelRequest {
  __type?: "APNSChannelRequest";
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
   * <p>Specifies whether to enable the APNs channel for the application.</p>
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

export namespace APNSChannelRequest {
  export const filterSensitiveLog = (obj: APNSChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSChannelRequest => __isa(o, "APNSChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelResponse {
  __type?: "APNSChannelResponse";
  /**
   * <p>The unique identifier for the application that the APNs channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs channel.</p>
   */
  Version?: number;
}

export namespace APNSChannelResponse {
  export const filterSensitiveLog = (obj: APNSChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSChannelResponse => __isa(o, "APNSChannelResponse");
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.</p>
 */
export interface APNSMessage {
  __type?: "APNSMessage";
  /**
   * <p>The type of push notification to send. Valid values are:</p> <ul><li><p>alert - For a standard notification that's displayed on recipients' devices and prompts a recipient to interact with the notification.</p></li> <li><p>background - For a silent notification that delivers content in the background and isn't displayed on recipients' devices.</p></li> <li><p>complication - For a notification that contains update information for an app’s complication timeline.</p></li> <li><p>fileprovider - For a notification that signals changes to a File Provider extension.</p></li> <li><p>mdm - For a notification that tells managed devices to contact the MDM server.</p></li> <li><p>voip - For a notification that provides information about an incoming VoIP call.</p></li></ul> <p>Amazon Pinpoint specifies this value in the apns-push-type request header when it sends the notification message to APNs. If you don't specify a value for this property, Amazon Pinpoint sets the value to alert or background automatically, based on the value that you specify for the SilentPush or RawContent property of the message.</p> <p>For more information about the apns-push-type request header, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns">Sending Notification Requests to APNs</a> on the Apple Developer website.</p>
   */
  APNSPushType?: string;

  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

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
  Data?: { [key: string]: string };

  /**
   * <p>The URL of an image or video to display in the push notification.</p>
   */
  MediaUrl?: string;

  /**
   * <p>The authentication method that you want Amazon Pinpoint to use when authenticating with APNs, CERTIFICATE or TOKEN.</p>
   */
  PreferredAuthenticationMethod?: string;

  /**
   * <p>para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.</p>/listitem> <li><p>10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.</p> <p>The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.</p>
   */
  Priority?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. The value of the content-available key has to be an integer, and can only be 0 or 1. If you're sending a standard notification, set the value of content-available to 0. If you're sending a silent (background) notification, set the value of content-available to 1. Additionally, silent notification payloads can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p></note>
   */
  RawContent?: string;

  /**
   * <p>Specifies whether the notification is a silent push notification. A silent (or background) push notification isn't displayed on recipients' devices. You can use silent push notifications to make small updates to your app, or to display messages in an in-app message center.</p> <p>Amazon Pinpoint uses this property to determine the correct value for the apns-push-type request header when it sends the notification message to APNs. If you specify a value of true for this property, Amazon Pinpoint sets the value for the apns-push-type header field to background.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. For silent (background) notifications, set the value of content-available to 1. Additionally, the message payload for a silent notification can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p> <p>Apple has indicated that they will throttle "excessive" background notifications based on current traffic volumes. To prevent your notifications being throttled, Apple recommends that you send no more than 3 silent push notifications to each recipient per hour.</p></note>
   */
  SilentPush?: boolean;

  /**
   * <p>The key for the sound to play when the recipient receives the push notification. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * <p>The default message variables to use in the notification message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };

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

export namespace APNSMessage {
  export const filterSensitiveLog = (obj: APNSMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSMessage => __isa(o, "APNSMessage");
}

/**
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.</p>
 */
export interface APNSPushNotificationTemplate {
  __type?: "APNSPushNotificationTemplate";
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The message body to use in push notifications that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>The URL of an image or video to display in push notifications that are based on the message template.</p>
   */
  MediaUrl?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for push notifications that are based on the message template. If specified, this value overrides all other content for the message template.</p>
   */
  RawContent?: string;

  /**
   * <p>The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export namespace APNSPushNotificationTemplate {
  export const filterSensitiveLog = (obj: APNSPushNotificationTemplate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSPushNotificationTemplate => __isa(o, "APNSPushNotificationTemplate");
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelRequest {
  __type?: "APNSSandboxChannelRequest";
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether to enable the APNs sandbox channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
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
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSSandboxChannelRequest {
  export const filterSensitiveLog = (obj: APNSSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSSandboxChannelRequest => __isa(o, "APNSSandboxChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelResponse {
  __type?: "APNSSandboxChannelResponse";
  /**
   * <p>The unique identifier for the application that the APNs sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs sandbox channel.</p>
   */
  Version?: number;
}

export namespace APNSSandboxChannelResponse {
  export const filterSensitiveLog = (obj: APNSSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSSandboxChannelResponse => __isa(o, "APNSSandboxChannelResponse");
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelRequest {
  __type?: "APNSVoipChannelRequest";
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

export namespace APNSVoipChannelRequest {
  export const filterSensitiveLog = (obj: APNSVoipChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSVoipChannelRequest => __isa(o, "APNSVoipChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelResponse {
  __type?: "APNSVoipChannelResponse";
  /**
   * <p>The unique identifier for the application that the APNs VoIP channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs VoIP channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs VoIP channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs VoIP channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs VoIP channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP channel.</p>
   */
  Version?: number;
}

export namespace APNSVoipChannelResponse {
  export const filterSensitiveLog = (obj: APNSVoipChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSVoipChannelResponse => __isa(o, "APNSVoipChannelResponse");
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelRequest {
  __type?: "APNSVoipSandboxChannelRequest";
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
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
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSVoipSandboxChannelRequest {
  export const filterSensitiveLog = (obj: APNSVoipSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSVoipSandboxChannelRequest => __isa(o, "APNSVoipSandboxChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelResponse {
  __type?: "APNSVoipSandboxChannelResponse";
  /**
   * <p>The unique identifier for the application that the APNs VoIP sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs VoIP sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP sandbox channel.</p>
   */
  Version?: number;
}

export namespace APNSVoipSandboxChannelResponse {
  export const filterSensitiveLog = (obj: APNSVoipSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is APNSVoipSandboxChannelResponse => __isa(o, "APNSVoipSandboxChannelResponse");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
 */
export interface ApplicationDateRangeKpiResponse {
  __type?: "ApplicationDateRangeKpiResponse";
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Application Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

export namespace ApplicationDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: ApplicationDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ApplicationDateRangeKpiResponse => __isa(o, "ApplicationDateRangeKpiResponse");
}

/**
 * <p>Provides information about an application.</p>
 */
export interface ApplicationResponse {
  __type?: "ApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  Id: string | undefined;

  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ApplicationResponse {
  export const filterSensitiveLog = (obj: ApplicationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ApplicationResponse => __isa(o, "ApplicationResponse");
}

/**
 * <p>Provides information about an application, including the default settings for an application.</p>
 */
export interface ApplicationSettingsResource {
  __type?: "ApplicationSettingsResource";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application.</p>
   */
  CampaignHook?: CampaignHook;

  /**
   * <p>The date and time, in ISO 8601 format, when the application's settings were last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The default sending limits for campaigns in the application.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The default quiet time for campaigns and journeys in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;
}

export namespace ApplicationSettingsResource {
  export const filterSensitiveLog = (obj: ApplicationSettingsResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ApplicationSettingsResource => __isa(o, "ApplicationSettingsResource");
}

/**
 * <p>Provides information about all of your applications.</p>
 */
export interface ApplicationsResponse {
  __type?: "ApplicationsResponse";
  /**
   * <p>An array of responses, one for each application that was returned.</p>
   */
  Item?: ApplicationResponse[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace ApplicationsResponse {
  export const filterSensitiveLog = (obj: ApplicationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ApplicationsResponse => __isa(o, "ApplicationsResponse");
}

/**
 * <p>Specifies attribute-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface AttributeDimension {
  __type?: "AttributeDimension";
  /**
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   */
  AttributeType?: AttributeType | string;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.</p>
   */
  Values: string[] | undefined;
}

export namespace AttributeDimension {
  export const filterSensitiveLog = (obj: AttributeDimension): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttributeDimension => __isa(o, "AttributeDimension");
}

/**
 * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
 */
export interface AttributesResource {
  __type?: "AttributesResource";
  /**
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes that were removed from the endpoints. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users.</p></li></ul>
   */
  AttributeType: string | undefined;

  /**
   * <p>An array that specifies the names of the attributes that were removed from the endpoints.</p>
   */
  Attributes?: string[];
}

export namespace AttributesResource {
  export const filterSensitiveLog = (obj: AttributesResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttributesResource => __isa(o, "AttributesResource");
}

export enum AttributeType {
  EXCLUSIVE = "EXCLUSIVE",
  INCLUSIVE = "INCLUSIVE",
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

/**
 * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelRequest {
  __type?: "BaiduChannelRequest";
  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  ApiKey: string | undefined;

  /**
   * <p>Specifies whether to enable the Baidu channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The secret key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  SecretKey: string | undefined;
}

export namespace BaiduChannelRequest {
  export const filterSensitiveLog = (obj: BaiduChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BaiduChannelRequest => __isa(o, "BaiduChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelResponse {
  __type?: "BaiduChannelResponse";
  /**
   * <p>The unique identifier for the application that the Baidu channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the Baidu channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  Credential: string | undefined;

  /**
   * <p>Specifies whether the Baidu channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the Baidu channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the Baidu channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the Baidu channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the Baidu channel.</p>
   */
  Version?: number;
}

export namespace BaiduChannelResponse {
  export const filterSensitiveLog = (obj: BaiduChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BaiduChannelResponse => __isa(o, "BaiduChannelResponse");
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.</p>
 */
export interface BaiduMessage {
  __type?: "BaiduMessage";
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

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
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
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
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).</p>
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

export namespace BaiduMessage {
  export const filterSensitiveLog = (obj: BaiduMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BaiduMessage => __isa(o, "BaiduMessage");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface BaseKpiResult {
  __type?: "BaseKpiResult";
  /**
   * <p>An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
   */
  Rows: ResultRow[] | undefined;
}

export namespace BaseKpiResult {
  export const filterSensitiveLog = (obj: BaseKpiResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BaseKpiResult => __isa(o, "BaseKpiResult");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
 */
export interface CampaignDateRangeKpiResponse {
  __type?: "CampaignDateRangeKpiResponse";
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign that the metric applies to.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

export namespace CampaignDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: CampaignDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignDateRangeKpiResponse => __isa(o, "CampaignDateRangeKpiResponse");
}

/**
 * <p>Specifies the content and "From" address for an email message that's sent to recipients of a campaign.</p>
 */
export interface CampaignEmailMessage {
  __type?: "CampaignEmailMessage";
  /**
   * <p>The body of the email for recipients whose email clients don't render HTML content.</p>
   */
  Body?: string;

  /**
   * <p>The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.</p>
   */
  FromAddress?: string;

  /**
   * <p>The body of the email, in HTML format, for recipients whose email clients render HTML content.</p>
   */
  HtmlBody?: string;

  /**
   * <p>The subject line, or title, of the email.</p>
   */
  Title: string | undefined;
}

export namespace CampaignEmailMessage {
  export const filterSensitiveLog = (obj: CampaignEmailMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignEmailMessage => __isa(o, "CampaignEmailMessage");
}

/**
 * <p>Specifies the settings for events that cause a campaign to be sent.</p>
 */
export interface CampaignEventFilter {
  __type?: "CampaignEventFilter";
  /**
   * <p>The dimension settings of the event filter for the campaign.</p>
   */
  Dimensions: EventDimensions | undefined;

  /**
   * <p>The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (<link  linkend="apps-application-id-events">Events</link> resource) occurs.</p>
   */
  FilterType: FilterType | string | undefined;
}

export namespace CampaignEventFilter {
  export const filterSensitiveLog = (obj: CampaignEventFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignEventFilter => __isa(o, "CampaignEventFilter");
}

/**
 * <p>Specifies the AWS Lambda function to use as a code hook for a campaign.</p>
 */
export interface CampaignHook {
  __type?: "CampaignHook";
  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to send messages for a campaign.</p>
   */
  LambdaFunctionName?: string;

  /**
   * <p>Specifies which Lambda mode to use when invoking the AWS Lambda function.</p>
   */
  Mode?: Mode | string;

  /**
   * <p>The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.</p>
   */
  WebUrl?: string;
}

export namespace CampaignHook {
  export const filterSensitiveLog = (obj: CampaignHook): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignHook => __isa(o, "CampaignHook");
}

/**
 * <p>Specifies limits on the messages that a campaign can send.</p>
 */
export interface CampaignLimits {
  __type?: "CampaignLimits";
  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. The maximum value is 100.</p>
   */
  Daily?: number;

  /**
   * <p>The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.</p>
   */
  MaximumDuration?: number;

  /**
   * <p>The maximum number of messages that a campaign can send each second. The minimum value is 50. The maximum value is 20,000.</p>
   */
  MessagesPerSecond?: number;

  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. The maximum value is 100.</p>
   */
  Total?: number;
}

export namespace CampaignLimits {
  export const filterSensitiveLog = (obj: CampaignLimits): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignLimits => __isa(o, "CampaignLimits");
}

/**
 * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
 */
export interface CampaignResponse {
  __type?: "CampaignResponse";
  /**
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   */
  AdditionalTreatments?: TreatmentResource[];

  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment, to support A/B testing.</p>
   */
  DefaultState?: CampaignState;

  /**
   * <p>The custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>The name of the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The unique identifier for the segment that's associated with the campaign.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The version number of the segment that's associated with the campaign.</p>
   */
  SegmentVersion: number | undefined;

  /**
   * <p>The current status of the campaign.</p>
   */
  State?: CampaignState;

  /**
   * <p>The message template that’s used for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The custom description of a variation of the campaign that's used for A/B testing.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of a variation of the campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * <p>The version number of the campaign.</p>
   */
  Version?: number;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CampaignResponse {
  export const filterSensitiveLog = (obj: CampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignResponse => __isa(o, "CampaignResponse");
}

/**
 * <p>Specifies the content and settings for an SMS message that's sent to recipients of a campaign.</p>
 */
export interface CampaignSmsMessage {
  __type?: "CampaignSmsMessage";
  /**
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * <p>The type of SMS message. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message isn't critical or time-sensitive, such as a marketing message.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The sender ID to display on recipients' devices when they receive the SMS message.</p>
   */
  SenderId?: string;
}

export namespace CampaignSmsMessage {
  export const filterSensitiveLog = (obj: CampaignSmsMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignSmsMessage => __isa(o, "CampaignSmsMessage");
}

/**
 * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
 */
export interface CampaignsResponse {
  __type?: "CampaignsResponse";
  /**
   * <p>An array of responses, one for each campaign that's associated with the application.</p>
   */
  Item: CampaignResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace CampaignsResponse {
  export const filterSensitiveLog = (obj: CampaignsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignsResponse => __isa(o, "CampaignsResponse");
}

/**
 * <p>Provides information about the status of a campaign.</p>
 */
export interface CampaignState {
  __type?: "CampaignState";
  /**
   * <p>The current status of the campaign, or the current status of a treatment that belongs to an A/B test campaign. If a campaign uses A/B testing, the campaign has a status of COMPLETED only if all campaign treatments have a status of COMPLETED.</p>
   */
  CampaignStatus?: CampaignStatus | string;
}

export namespace CampaignState {
  export const filterSensitiveLog = (obj: CampaignState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CampaignState => __isa(o, "CampaignState");
}

export enum CampaignStatus {
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
  EXECUTING = "EXECUTING",
  PAUSED = "PAUSED",
  PENDING_NEXT_RUN = "PENDING_NEXT_RUN",
  SCHEDULED = "SCHEDULED",
}

/**
 * <p>Provides information about the general settings and status of a channel for an application.</p>
 */
export interface ChannelResponse {
  __type?: "ChannelResponse";
  /**
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The current version of the channel.</p>
   */
  Version?: number;
}

export namespace ChannelResponse {
  export const filterSensitiveLog = (obj: ChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ChannelResponse => __isa(o, "ChannelResponse");
}

/**
 * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
 */
export interface ChannelsResponse {
  __type?: "ChannelsResponse";
  /**
   * <p>A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.</p>
   */
  Channels: { [key: string]: ChannelResponse } | undefined;
}

export namespace ChannelsResponse {
  export const filterSensitiveLog = (obj: ChannelsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ChannelsResponse => __isa(o, "ChannelsResponse");
}

export enum ChannelType {
  ADM = "ADM",
  APNS = "APNS",
  APNS_SANDBOX = "APNS_SANDBOX",
  APNS_VOIP = "APNS_VOIP",
  APNS_VOIP_SANDBOX = "APNS_VOIP_SANDBOX",
  BAIDU = "BAIDU",
  CUSTOM = "CUSTOM",
  EMAIL = "EMAIL",
  GCM = "GCM",
  SMS = "SMS",
  VOICE = "VOICE",
}

/**
 * <p>Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.</p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>The conditions to evaluate for the activity.</p>
   */
  Conditions?: SimpleCondition[];

  /**
   * <p>Specifies how to handle multiple conditions for the activity. For example, if you specify two conditions for an activity, whether both or only one of the conditions must be met for the activity to be performed.</p>
   */
  Operator?: Operator | string;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

/**
 * <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p>
 */
export interface ConditionalSplitActivity {
  __type?: "ConditionalSplitActivity";
  /**
   * <p>The conditions that define the paths for the activity, and the relationship between the conditions.</p>
   */
  Condition?: Condition;

  /**
   * <p>The amount of time to wait before determining whether the conditions are met, or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   */
  EvaluationWaitTime?: WaitTime;

  /**
   * <p>The unique identifier for the activity to perform if the conditions aren't met.</p>
   */
  FalseActivity?: string;

  /**
   * <p>The unique identifier for the activity to perform if the conditions are met.</p>
   */
  TrueActivity?: string;
}

export namespace ConditionalSplitActivity {
  export const filterSensitiveLog = (obj: ConditionalSplitActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConditionalSplitActivity => __isa(o, "ConditionalSplitActivity");
}

/**
 * <p>Specifies the display name of an application and the tags to associate with the application.</p>
 */
export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateApplicationRequest {
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateApplicationRequest => __isa(o, "CreateApplicationRequest");
}

export interface CreateAppRequest {
  __type?: "CreateAppRequest";
  /**
   * <p>Specifies the display name of an application and the tags to associate with the application.</p>
   */
  CreateApplicationRequest: CreateApplicationRequest | undefined;
}

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAppRequest => __isa(o, "CreateAppRequest");
}

export interface CreateAppResponse {
  __type?: "CreateAppResponse";
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace CreateAppResponse {
  export const filterSensitiveLog = (obj: CreateAppResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAppResponse => __isa(o, "CreateAppResponse");
}

export interface CreateCampaignRequest {
  __type?: "CreateCampaignRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

export namespace CreateCampaignRequest {
  export const filterSensitiveLog = (obj: CreateCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCampaignRequest => __isa(o, "CreateCampaignRequest");
}

export interface CreateCampaignResponse {
  __type?: "CreateCampaignResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace CreateCampaignResponse {
  export const filterSensitiveLog = (obj: CreateCampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCampaignResponse => __isa(o, "CreateCampaignResponse");
}

export interface CreateEmailTemplateRequest {
  __type?: "CreateEmailTemplateRequest";
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateEmailTemplateRequest {
  export const filterSensitiveLog = (obj: CreateEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailTemplateRequest => __isa(o, "CreateEmailTemplateRequest");
}

export interface CreateEmailTemplateResponse {
  __type?: "CreateEmailTemplateResponse";
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateEmailTemplateResponse {
  export const filterSensitiveLog = (obj: CreateEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailTemplateResponse => __isa(o, "CreateEmailTemplateResponse");
}

export interface CreateExportJobRequest {
  __type?: "CreateExportJobRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ExportJobRequest: ExportJobRequest | undefined;
}

export namespace CreateExportJobRequest {
  export const filterSensitiveLog = (obj: CreateExportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateExportJobRequest => __isa(o, "CreateExportJobRequest");
}

export interface CreateExportJobResponse {
  __type?: "CreateExportJobResponse";
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

export namespace CreateExportJobResponse {
  export const filterSensitiveLog = (obj: CreateExportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateExportJobResponse => __isa(o, "CreateExportJobResponse");
}

export interface CreateImportJobRequest {
  __type?: "CreateImportJobRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ImportJobRequest: ImportJobRequest | undefined;
}

export namespace CreateImportJobRequest {
  export const filterSensitiveLog = (obj: CreateImportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImportJobRequest => __isa(o, "CreateImportJobRequest");
}

export interface CreateImportJobResponse {
  __type?: "CreateImportJobResponse";
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

export namespace CreateImportJobResponse {
  export const filterSensitiveLog = (obj: CreateImportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImportJobResponse => __isa(o, "CreateImportJobResponse");
}

export interface CreateJourneyRequest {
  __type?: "CreateJourneyRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

export namespace CreateJourneyRequest {
  export const filterSensitiveLog = (obj: CreateJourneyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateJourneyRequest => __isa(o, "CreateJourneyRequest");
}

export interface CreateJourneyResponse {
  __type?: "CreateJourneyResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace CreateJourneyResponse {
  export const filterSensitiveLog = (obj: CreateJourneyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateJourneyResponse => __isa(o, "CreateJourneyResponse");
}

export interface CreatePushTemplateRequest {
  __type?: "CreatePushTemplateRequest";
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreatePushTemplateRequest {
  export const filterSensitiveLog = (obj: CreatePushTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePushTemplateRequest => __isa(o, "CreatePushTemplateRequest");
}

export interface CreatePushTemplateResponse {
  __type?: "CreatePushTemplateResponse";
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreatePushTemplateResponse {
  export const filterSensitiveLog = (obj: CreatePushTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePushTemplateResponse => __isa(o, "CreatePushTemplateResponse");
}

export interface CreateSegmentRequest {
  __type?: "CreateSegmentRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

export namespace CreateSegmentRequest {
  export const filterSensitiveLog = (obj: CreateSegmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSegmentRequest => __isa(o, "CreateSegmentRequest");
}

export interface CreateSegmentResponse {
  __type?: "CreateSegmentResponse";
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace CreateSegmentResponse {
  export const filterSensitiveLog = (obj: CreateSegmentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSegmentResponse => __isa(o, "CreateSegmentResponse");
}

export interface CreateSmsTemplateRequest {
  __type?: "CreateSmsTemplateRequest";
  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateSmsTemplateRequest {
  export const filterSensitiveLog = (obj: CreateSmsTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSmsTemplateRequest => __isa(o, "CreateSmsTemplateRequest");
}

export interface CreateSmsTemplateResponse {
  __type?: "CreateSmsTemplateResponse";
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateSmsTemplateResponse {
  export const filterSensitiveLog = (obj: CreateSmsTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSmsTemplateResponse => __isa(o, "CreateSmsTemplateResponse");
}

/**
 * <p>Provides information about a request to create a message template.</p>
 */
export interface CreateTemplateMessageBody {
  __type?: "CreateTemplateMessageBody";
  /**
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   */
  Arn?: string;

  /**
   * <p>The message that's returned from the API for the request to create the message template.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request to create the message template.</p>
   */
  RequestID?: string;
}

export namespace CreateTemplateMessageBody {
  export const filterSensitiveLog = (obj: CreateTemplateMessageBody): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateTemplateMessageBody => __isa(o, "CreateTemplateMessageBody");
}

export interface CreateVoiceTemplateRequest {
  __type?: "CreateVoiceTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

export namespace CreateVoiceTemplateRequest {
  export const filterSensitiveLog = (obj: CreateVoiceTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceTemplateRequest => __isa(o, "CreateVoiceTemplateRequest");
}

export interface CreateVoiceTemplateResponse {
  __type?: "CreateVoiceTemplateResponse";
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateVoiceTemplateResponse {
  export const filterSensitiveLog = (obj: CreateVoiceTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceTemplateResponse => __isa(o, "CreateVoiceTemplateResponse");
}

/**
 * <p>Specifies the default message for all channels.</p>
 */
export interface DefaultMessage {
  __type?: "DefaultMessage";
  /**
   * <p>The default body of the message.</p>
   */
  Body?: string;

  /**
   * <p>The default message variables to use in the message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };
}

export namespace DefaultMessage {
  export const filterSensitiveLog = (obj: DefaultMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DefaultMessage => __isa(o, "DefaultMessage");
}

/**
 * <p>Specifies the default settings and content for a push notification that's sent directly to an endpoint.</p>
 */
export interface DefaultPushNotificationMessage {
  __type?: "DefaultPushNotificationMessage";
  /**
   * <p>The default action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The default body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

  /**
   * <p>Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.</p>
   */
  SilentPush?: boolean;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The default title to display above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export namespace DefaultPushNotificationMessage {
  export const filterSensitiveLog = (obj: DefaultPushNotificationMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DefaultPushNotificationMessage => __isa(o, "DefaultPushNotificationMessage");
}

/**
 * <p>Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface DefaultPushNotificationTemplate {
  __type?: "DefaultPushNotificationTemplate";
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The message body to use in push notifications that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p> <p>For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

export namespace DefaultPushNotificationTemplate {
  export const filterSensitiveLog = (obj: DefaultPushNotificationTemplate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DefaultPushNotificationTemplate => __isa(o, "DefaultPushNotificationTemplate");
}

export interface DeleteAdmChannelRequest {
  __type?: "DeleteAdmChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteAdmChannelRequest {
  export const filterSensitiveLog = (obj: DeleteAdmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAdmChannelRequest => __isa(o, "DeleteAdmChannelRequest");
}

export interface DeleteAdmChannelResponse {
  __type?: "DeleteAdmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace DeleteAdmChannelResponse {
  export const filterSensitiveLog = (obj: DeleteAdmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAdmChannelResponse => __isa(o, "DeleteAdmChannelResponse");
}

export interface DeleteApnsChannelRequest {
  __type?: "DeleteApnsChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsChannelRequest {
  export const filterSensitiveLog = (obj: DeleteApnsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsChannelRequest => __isa(o, "DeleteApnsChannelRequest");
}

export interface DeleteApnsChannelResponse {
  __type?: "DeleteApnsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace DeleteApnsChannelResponse {
  export const filterSensitiveLog = (obj: DeleteApnsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsChannelResponse => __isa(o, "DeleteApnsChannelResponse");
}

export interface DeleteApnsSandboxChannelRequest {
  __type?: "DeleteApnsSandboxChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsSandboxChannelRequest {
  export const filterSensitiveLog = (obj: DeleteApnsSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsSandboxChannelRequest => __isa(o, "DeleteApnsSandboxChannelRequest");
}

export interface DeleteApnsSandboxChannelResponse {
  __type?: "DeleteApnsSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace DeleteApnsSandboxChannelResponse {
  export const filterSensitiveLog = (obj: DeleteApnsSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsSandboxChannelResponse => __isa(o, "DeleteApnsSandboxChannelResponse");
}

export interface DeleteApnsVoipChannelRequest {
  __type?: "DeleteApnsVoipChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsVoipChannelRequest {
  export const filterSensitiveLog = (obj: DeleteApnsVoipChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsVoipChannelRequest => __isa(o, "DeleteApnsVoipChannelRequest");
}

export interface DeleteApnsVoipChannelResponse {
  __type?: "DeleteApnsVoipChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace DeleteApnsVoipChannelResponse {
  export const filterSensitiveLog = (obj: DeleteApnsVoipChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsVoipChannelResponse => __isa(o, "DeleteApnsVoipChannelResponse");
}

export interface DeleteApnsVoipSandboxChannelRequest {
  __type?: "DeleteApnsVoipSandboxChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsVoipSandboxChannelRequest {
  export const filterSensitiveLog = (obj: DeleteApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsVoipSandboxChannelRequest =>
    __isa(o, "DeleteApnsVoipSandboxChannelRequest");
}

export interface DeleteApnsVoipSandboxChannelResponse {
  __type?: "DeleteApnsVoipSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace DeleteApnsVoipSandboxChannelResponse {
  export const filterSensitiveLog = (obj: DeleteApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteApnsVoipSandboxChannelResponse =>
    __isa(o, "DeleteApnsVoipSandboxChannelResponse");
}

export interface DeleteAppRequest {
  __type?: "DeleteAppRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteAppRequest {
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAppRequest => __isa(o, "DeleteAppRequest");
}

export interface DeleteAppResponse {
  __type?: "DeleteAppResponse";
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace DeleteAppResponse {
  export const filterSensitiveLog = (obj: DeleteAppResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAppResponse => __isa(o, "DeleteAppResponse");
}

export interface DeleteBaiduChannelRequest {
  __type?: "DeleteBaiduChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteBaiduChannelRequest {
  export const filterSensitiveLog = (obj: DeleteBaiduChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBaiduChannelRequest => __isa(o, "DeleteBaiduChannelRequest");
}

export interface DeleteBaiduChannelResponse {
  __type?: "DeleteBaiduChannelResponse";
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace DeleteBaiduChannelResponse {
  export const filterSensitiveLog = (obj: DeleteBaiduChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBaiduChannelResponse => __isa(o, "DeleteBaiduChannelResponse");
}

export interface DeleteCampaignRequest {
  __type?: "DeleteCampaignRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

export namespace DeleteCampaignRequest {
  export const filterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCampaignRequest => __isa(o, "DeleteCampaignRequest");
}

export interface DeleteCampaignResponse {
  __type?: "DeleteCampaignResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace DeleteCampaignResponse {
  export const filterSensitiveLog = (obj: DeleteCampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCampaignResponse => __isa(o, "DeleteCampaignResponse");
}

export interface DeleteEmailChannelRequest {
  __type?: "DeleteEmailChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteEmailChannelRequest {
  export const filterSensitiveLog = (obj: DeleteEmailChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailChannelRequest => __isa(o, "DeleteEmailChannelRequest");
}

export interface DeleteEmailChannelResponse {
  __type?: "DeleteEmailChannelResponse";
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace DeleteEmailChannelResponse {
  export const filterSensitiveLog = (obj: DeleteEmailChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailChannelResponse => __isa(o, "DeleteEmailChannelResponse");
}

export interface DeleteEmailTemplateRequest {
  __type?: "DeleteEmailTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteEmailTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailTemplateRequest => __isa(o, "DeleteEmailTemplateRequest");
}

export interface DeleteEmailTemplateResponse {
  __type?: "DeleteEmailTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteEmailTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailTemplateResponse => __isa(o, "DeleteEmailTemplateResponse");
}

export interface DeleteEndpointRequest {
  __type?: "DeleteEndpointRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

export namespace DeleteEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEndpointRequest => __isa(o, "DeleteEndpointRequest");
}

export interface DeleteEndpointResponse {
  __type?: "DeleteEndpointResponse";
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

export namespace DeleteEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEndpointResponse => __isa(o, "DeleteEndpointResponse");
}

export interface DeleteEventStreamRequest {
  __type?: "DeleteEventStreamRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteEventStreamRequest {
  export const filterSensitiveLog = (obj: DeleteEventStreamRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEventStreamRequest => __isa(o, "DeleteEventStreamRequest");
}

export interface DeleteEventStreamResponse {
  __type?: "DeleteEventStreamResponse";
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace DeleteEventStreamResponse {
  export const filterSensitiveLog = (obj: DeleteEventStreamResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEventStreamResponse => __isa(o, "DeleteEventStreamResponse");
}

export interface DeleteGcmChannelRequest {
  __type?: "DeleteGcmChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteGcmChannelRequest {
  export const filterSensitiveLog = (obj: DeleteGcmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGcmChannelRequest => __isa(o, "DeleteGcmChannelRequest");
}

export interface DeleteGcmChannelResponse {
  __type?: "DeleteGcmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace DeleteGcmChannelResponse {
  export const filterSensitiveLog = (obj: DeleteGcmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGcmChannelResponse => __isa(o, "DeleteGcmChannelResponse");
}

export interface DeleteJourneyRequest {
  __type?: "DeleteJourneyRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

export namespace DeleteJourneyRequest {
  export const filterSensitiveLog = (obj: DeleteJourneyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteJourneyRequest => __isa(o, "DeleteJourneyRequest");
}

export interface DeleteJourneyResponse {
  __type?: "DeleteJourneyResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace DeleteJourneyResponse {
  export const filterSensitiveLog = (obj: DeleteJourneyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteJourneyResponse => __isa(o, "DeleteJourneyResponse");
}

export interface DeletePushTemplateRequest {
  __type?: "DeletePushTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeletePushTemplateRequest {
  export const filterSensitiveLog = (obj: DeletePushTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePushTemplateRequest => __isa(o, "DeletePushTemplateRequest");
}

export interface DeletePushTemplateResponse {
  __type?: "DeletePushTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeletePushTemplateResponse {
  export const filterSensitiveLog = (obj: DeletePushTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePushTemplateResponse => __isa(o, "DeletePushTemplateResponse");
}

export interface DeleteSegmentRequest {
  __type?: "DeleteSegmentRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

export namespace DeleteSegmentRequest {
  export const filterSensitiveLog = (obj: DeleteSegmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSegmentRequest => __isa(o, "DeleteSegmentRequest");
}

export interface DeleteSegmentResponse {
  __type?: "DeleteSegmentResponse";
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace DeleteSegmentResponse {
  export const filterSensitiveLog = (obj: DeleteSegmentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSegmentResponse => __isa(o, "DeleteSegmentResponse");
}

export interface DeleteSmsChannelRequest {
  __type?: "DeleteSmsChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteSmsChannelRequest {
  export const filterSensitiveLog = (obj: DeleteSmsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSmsChannelRequest => __isa(o, "DeleteSmsChannelRequest");
}

export interface DeleteSmsChannelResponse {
  __type?: "DeleteSmsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace DeleteSmsChannelResponse {
  export const filterSensitiveLog = (obj: DeleteSmsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSmsChannelResponse => __isa(o, "DeleteSmsChannelResponse");
}

export interface DeleteSmsTemplateRequest {
  __type?: "DeleteSmsTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteSmsTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteSmsTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSmsTemplateRequest => __isa(o, "DeleteSmsTemplateRequest");
}

export interface DeleteSmsTemplateResponse {
  __type?: "DeleteSmsTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteSmsTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteSmsTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSmsTemplateResponse => __isa(o, "DeleteSmsTemplateResponse");
}

export interface DeleteUserEndpointsRequest {
  __type?: "DeleteUserEndpointsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserEndpointsRequest {
  export const filterSensitiveLog = (obj: DeleteUserEndpointsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserEndpointsRequest => __isa(o, "DeleteUserEndpointsRequest");
}

export interface DeleteUserEndpointsResponse {
  __type?: "DeleteUserEndpointsResponse";
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

export namespace DeleteUserEndpointsResponse {
  export const filterSensitiveLog = (obj: DeleteUserEndpointsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserEndpointsResponse => __isa(o, "DeleteUserEndpointsResponse");
}

export interface DeleteVoiceChannelRequest {
  __type?: "DeleteVoiceChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteVoiceChannelRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceChannelRequest => __isa(o, "DeleteVoiceChannelRequest");
}

export interface DeleteVoiceChannelResponse {
  __type?: "DeleteVoiceChannelResponse";
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace DeleteVoiceChannelResponse {
  export const filterSensitiveLog = (obj: DeleteVoiceChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceChannelResponse => __isa(o, "DeleteVoiceChannelResponse");
}

export interface DeleteVoiceTemplateRequest {
  __type?: "DeleteVoiceTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteVoiceTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceTemplateRequest => __isa(o, "DeleteVoiceTemplateRequest");
}

export interface DeleteVoiceTemplateResponse {
  __type?: "DeleteVoiceTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteVoiceTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteVoiceTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceTemplateResponse => __isa(o, "DeleteVoiceTemplateResponse");
}

export enum DeliveryStatus {
  DUPLICATE = "DUPLICATE",
  OPT_OUT = "OPT_OUT",
  PERMANENT_FAILURE = "PERMANENT_FAILURE",
  SUCCESSFUL = "SUCCESSFUL",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
  THROTTLED = "THROTTLED",
  UNKNOWN_FAILURE = "UNKNOWN_FAILURE",
}

export enum DimensionType {
  EXCLUSIVE = "EXCLUSIVE",
  INCLUSIVE = "INCLUSIVE",
}

/**
 * <p>Specifies the settings and content for the default message and any default messages that you tailored for specific channels.</p>
 */
export interface DirectMessageConfiguration {
  __type?: "DirectMessageConfiguration";
  /**
   * <p>The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  ADMMessage?: ADMMessage;

  /**
   * <p>The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  APNSMessage?: APNSMessage;

  /**
   * <p>The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  BaiduMessage?: BaiduMessage;

  /**
   * <p>The default message for all channels.</p>
   */
  DefaultMessage?: DefaultMessage;

  /**
   * <p>The default push notification message for all push notification channels.</p>
   */
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage;

  /**
   * <p>The default message for the email channel. This message overrides the default message (DefaultMessage).</p>
   */
  EmailMessage?: EmailMessage;

  /**
   * <p>The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  GCMMessage?: GCMMessage;

  /**
   * <p>The default message for the SMS channel. This message overrides the default message (DefaultMessage).</p>
   */
  SMSMessage?: SMSMessage;

  /**
   * <p>The default message for the voice channel. This message overrides the default message (DefaultMessage).</p>
   */
  VoiceMessage?: VoiceMessage;
}

export namespace DirectMessageConfiguration {
  export const filterSensitiveLog = (obj: DirectMessageConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DirectMessageConfiguration => __isa(o, "DirectMessageConfiguration");
}

export enum Duration {
  DAY_14 = "DAY_14",
  DAY_30 = "DAY_30",
  DAY_7 = "DAY_7",
  HR_24 = "HR_24",
}

/**
 * <p>Specifies the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelRequest {
  __type?: "EmailChannelRequest";
  /**
   * <p>The configuration set that you want to apply to email that you send through the channel by using the <a href="emailAPIreference.html">Amazon Pinpoint Email API</a>.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>Specifies whether to enable the email channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The verified email address that you want to send email from when you send email through the channel.</p>
   */
  FromAddress: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>
   */
  RoleArn?: string;
}

export namespace EmailChannelRequest {
  export const filterSensitiveLog = (obj: EmailChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailChannelRequest => __isa(o, "EmailChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelResponse {
  __type?: "EmailChannelResponse";
  /**
   * <p>The unique identifier for the application that the email channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration set that's applied to email that's sent through the channel by using the <a href="emailAPIreference.html">Amazon Pinpoint Email API</a>.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the email channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The verified email address that you send email from when you send email through the channel.</p>
   */
  FromAddress?: string;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you use when you send email through the channel.</p>
   */
  Identity?: string;

  /**
   * <p>Specifies whether the email channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the email channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The maximum number of emails that you can send through the channel each second.</p>
   */
  MessagesPerSecond?: number;

  /**
   * <p>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current version of the email channel.</p>
   */
  Version?: number;
}

export namespace EmailChannelResponse {
  export const filterSensitiveLog = (obj: EmailChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailChannelResponse => __isa(o, "EmailChannelResponse");
}

/**
 * <p>Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.</p>
 */
export interface EmailMessage {
  __type?: "EmailMessage";
  /**
   * <p>The body of the email message.</p>
   */
  Body?: string;

  /**
   * <p>The email address to forward bounces and complaints to, if feedback forwarding is enabled.</p>
   */
  FeedbackForwardingAddress?: string;

  /**
   * <p>The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.</p>
   */
  FromAddress?: string;

  /**
   * <p>The email message, represented as a raw MIME message.</p>
   */
  RawEmail?: RawEmail;

  /**
   * <p>The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The email message, composed of a subject, a text part, and an HTML part.</p>
   */
  SimpleEmail?: SimpleEmail;

  /**
   * <p>The default message variables to use in the email message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };
}

export namespace EmailMessage {
  export const filterSensitiveLog = (obj: EmailMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailMessage => __isa(o, "EmailMessage");
}

/**
 * <p>Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.</p>
 */
export interface EmailMessageActivity {
  __type?: "EmailMessageActivity";
  /**
   * <p>The "From" address to use for the message.</p>
   */
  MessageConfig?: JourneyEmailMessage;

  /**
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   */
  NextActivity?: string;

  /**
   * <p>The name of the email template to use for the message.</p>
   */
  TemplateName?: string;

  /**
   * <p>The unique identifier for the version of the email template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active</i> version of the template. The <i>active</i> version is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  TemplateVersion?: string;
}

export namespace EmailMessageActivity {
  export const filterSensitiveLog = (obj: EmailMessageActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailMessageActivity => __isa(o, "EmailMessageActivity");
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 */
export interface EmailTemplateRequest {
  __type?: "EmailTemplateRequest";
  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: string;

  /**
   * <p>The subject line, or title, to use in email messages that are based on the message template.</p>
   */
  Subject?: string;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace EmailTemplateRequest {
  export const filterSensitiveLog = (obj: EmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailTemplateRequest => __isa(o, "EmailTemplateRequest");
}

/**
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 */
export interface EmailTemplateResponse {
  __type?: "EmailTemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message body, in HTML format, that's used in email messages that are based on the message template.</p>
   */
  HtmlPart?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The subject line, or title, that's used in email messages that are based on the message template.</p>
   */
  Subject?: string;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For an email template, this value is EMAIL.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The message body, in plain text format, that's used in email messages that are based on the message template.</p>
   */
  TextPart?: string;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace EmailTemplateResponse {
  export const filterSensitiveLog = (obj: EmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailTemplateResponse => __isa(o, "EmailTemplateResponse");
}

/**
 * <p>Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.</p>
 */
export interface EndpointBatchItem {
  __type?: "EndpointBatchItem";
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  Attributes?: { [key: string]: string[] };

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created or updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The unique identifier for the endpoint in the context of the batch.</p>
   */
  Id?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>The unique identifier for the request to create or update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace EndpointBatchItem {
  export const filterSensitiveLog = (obj: EndpointBatchItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointBatchItem => __isa(o, "EndpointBatchItem");
}

/**
 * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
 */
export interface EndpointBatchRequest {
  __type?: "EndpointBatchRequest";
  /**
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   */
  Item: EndpointBatchItem[] | undefined;
}

export namespace EndpointBatchRequest {
  export const filterSensitiveLog = (obj: EndpointBatchRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointBatchRequest => __isa(o, "EndpointBatchRequest");
}

/**
 * <p>Specifies demographic information about an endpoint, such as the applicable time zone and platform.</p>
 */
export interface EndpointDemographic {
  __type?: "EndpointDemographic";
  /**
   * <p>The version of the app that's associated with the endpoint.</p>
   */
  AppVersion?: string;

  /**
   * <p>The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.</p>
   */
  Locale?: string;

  /**
   * <p>The manufacturer of the endpoint device, such as apple or samsung.</p>
   */
  Make?: string;

  /**
   * <p>The model name or number of the endpoint device, such as iPhone or SM-G900F.</p>
   */
  Model?: string;

  /**
   * <p>The model version of the endpoint device.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The platform of the endpoint device, such as ios.</p>
   */
  Platform?: string;

  /**
   * <p>The platform version of the endpoint device.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.</p>
   */
  Timezone?: string;
}

export namespace EndpointDemographic {
  export const filterSensitiveLog = (obj: EndpointDemographic): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointDemographic => __isa(o, "EndpointDemographic");
}

/**
 * <p>Provides the status code and message that result from processing data for an endpoint.</p>
 */
export interface EndpointItemResponse {
  __type?: "EndpointItemResponse";
  /**
   * <p>The custom message that's returned in the response as a result of processing the endpoint data.</p>
   */
  Message?: string;

  /**
   * <p>The status code that's returned in the response as a result of processing the endpoint data.</p>
   */
  StatusCode?: number;
}

export namespace EndpointItemResponse {
  export const filterSensitiveLog = (obj: EndpointItemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointItemResponse => __isa(o, "EndpointItemResponse");
}

/**
 * <p>Specifies geographic information about an endpoint.</p>
 */
export interface EndpointLocation {
  __type?: "EndpointLocation";
  /**
   * <p>The name of the city where the endpoint is located.</p>
   */
  City?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.</p>
   */
  Country?: string;

  /**
   * <p>The latitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Latitude?: number;

  /**
   * <p>The longitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Longitude?: number;

  /**
   * <p>The postal or ZIP code for the area where the endpoint is located.</p>
   */
  PostalCode?: string;

  /**
   * <p>The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.</p>
   */
  Region?: string;
}

export namespace EndpointLocation {
  export const filterSensitiveLog = (obj: EndpointLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointLocation => __isa(o, "EndpointLocation");
}

/**
 * <p>Provides information about the delivery status and results of sending a message directly to an endpoint.</p>
 */
export interface EndpointMessageResult {
  __type?: "EndpointMessageResult";
  /**
   * <p>The endpoint address that the message was delivered to.</p>
   */
  Address?: string;

  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.</p></li>    <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   */
  DeliveryStatus: DeliveryStatus | string | undefined;

  /**
   * <p>The unique identifier for the message that was sent.</p>
   */
  MessageId?: string;

  /**
   * <p>The downstream service status code for delivering the message.</p>
   */
  StatusCode: number | undefined;

  /**
   * <p>The status message for delivering the message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.</p>
   */
  UpdatedToken?: string;
}

export namespace EndpointMessageResult {
  export const filterSensitiveLog = (obj: EndpointMessageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointMessageResult => __isa(o, "EndpointMessageResult");
}

/**
 * <p>Specifies the channel type and other settings for an endpoint.</p>
 */
export interface EndpointRequest {
  __type?: "EndpointRequest";
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  Attributes?: { [key: string]: string[] };

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint is updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that describe the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace EndpointRequest {
  export const filterSensitiveLog = (obj: EndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointRequest => __isa(o, "EndpointRequest");
}

/**
 * <p>Provides information about the channel type and other settings for an endpoint.</p>
 */
export interface EndpointResponse {
  __type?: "EndpointResponse";
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.</p>
   */
  Address?: string;

  /**
   * <p>The unique identifier for the application that's associated with the endpoint.</p>
   */
  ApplicationId?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p>
   */
  Attributes?: { [key: string]: string[] };

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.</p>
   */
  CohortId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</p>
   */
  Id?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace EndpointResponse {
  export const filterSensitiveLog = (obj: EndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointResponse => __isa(o, "EndpointResponse");
}

/**
 * <p>Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.</p>
 */
export interface EndpointSendConfiguration {
  __type?: "EndpointSendConfiguration";
  /**
   * <p>The body of the message. If specified, this value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * <p>A map of custom attributes to attach to the message for the address. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   */
  RawContent?: string;

  /**
   * <p>A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The title or subject line of the message. If specified, this value overrides the default message title or subject line.</p>
   */
  TitleOverride?: string;
}

export namespace EndpointSendConfiguration {
  export const filterSensitiveLog = (obj: EndpointSendConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointSendConfiguration => __isa(o, "EndpointSendConfiguration");
}

/**
 * <p>Provides information about all the endpoints that are associated with a user ID.</p>
 */
export interface EndpointsResponse {
  __type?: "EndpointsResponse";
  /**
   * <p>An array of responses, one for each endpoint that's associated with the user ID.</p>
   */
  Item: EndpointResponse[] | undefined;
}

export namespace EndpointsResponse {
  export const filterSensitiveLog = (obj: EndpointsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointsResponse => __isa(o, "EndpointsResponse");
}

/**
 * <p>Specifies data for one or more attributes that describe the user who's associated with an endpoint.</p>
 */
export interface EndpointUser {
  __type?: "EndpointUser";
  /**
   * <p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  UserAttributes?: { [key: string]: string[] };

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;
}

export namespace EndpointUser {
  export const filterSensitiveLog = (obj: EndpointUser): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointUser => __isa(o, "EndpointUser");
}

/**
 * <p>Specifies information about an event that reports data to Amazon Pinpoint.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The package name of the app that's recording the event.</p>
   */
  AppPackageName?: string;

  /**
   * <p>The title of the app that's recording the event.</p>
   */
  AppTitle?: string;

  /**
   * <p>The version number of the app that's recording the event.</p>
   */
  AppVersionCode?: string;

  /**
   * <p>One or more custom attributes that are associated with the event.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The version of the SDK that's running on the client device.</p>
   */
  ClientSdkVersion?: string;

  /**
   * <p>The name of the event.</p>
   */
  EventType: string | undefined;

  /**
   * <p>One or more custom metrics that are associated with the event.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>The name of the SDK that's being used to record the event.</p>
   */
  SdkName?: string;

  /**
   * <p>Information about the session in which the event occurred.</p>
   */
  Session?: Session;

  /**
   * <p>The date and time, in ISO 8601 format, when the event occurred.</p>
   */
  Timestamp: string | undefined;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>Specifies the conditions to evaluate for an event that applies to an activity in a journey.</p>
 */
export interface EventCondition {
  __type?: "EventCondition";
  /**
   * <p>The dimensions for the event filter to use for the activity.</p>
   */
  Dimensions: EventDimensions | undefined;

  /**
   * <p>The message identifier (message_id) for the message to use when determining whether message events meet the condition.</p>
   */
  MessageActivity?: string;
}

export namespace EventCondition {
  export const filterSensitiveLog = (obj: EventCondition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventCondition => __isa(o, "EventCondition");
}

/**
 * <p>Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.</p>
 */
export interface EventDimensions {
  __type?: "EventDimensions";
  /**
   * <p>One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.</p>
   */
  Attributes?: { [key: string]: AttributeDimension };

  /**
   * <p>The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard type of event that Amazon Pinpoint generates, such as _email.delivered, or a custom event that's specific to your application.</p>
   */
  EventType?: SetDimension;

  /**
   * <p>One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.</p>
   */
  Metrics?: { [key: string]: MetricDimension };
}

export namespace EventDimensions {
  export const filterSensitiveLog = (obj: EventDimensions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventDimensions => __isa(o, "EventDimensions");
}

/**
 * <p>Provides the status code and message that result from processing an event.</p>
 */
export interface EventItemResponse {
  __type?: "EventItemResponse";
  /**
   * <p>A custom message that's returned in the response as a result of processing the event.</p>
   */
  Message?: string;

  /**
   * <p>The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.</p>
   */
  StatusCode?: number;
}

export namespace EventItemResponse {
  export const filterSensitiveLog = (obj: EventItemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventItemResponse => __isa(o, "EventItemResponse");
}

/**
 * <p>Specifies a batch of endpoints and events to process.</p>
 */
export interface EventsBatch {
  __type?: "EventsBatch";
  /**
   * <p>A set of properties and attributes that are associated with the endpoint.</p>
   */
  Endpoint: PublicEndpoint | undefined;

  /**
   * <p>A set of properties that are associated with the event.</p>
   */
  Events: { [key: string]: Event } | undefined;
}

export namespace EventsBatch {
  export const filterSensitiveLog = (obj: EventsBatch): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventsBatch => __isa(o, "EventsBatch");
}

/**
 * <p>Specifies a batch of events to process.</p>
 */
export interface EventsRequest {
  __type?: "EventsRequest";
  /**
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   */
  BatchItem: { [key: string]: EventsBatch } | undefined;
}

export namespace EventsRequest {
  export const filterSensitiveLog = (obj: EventsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventsRequest => __isa(o, "EventsRequest");
}

/**
 * <p>Provides information about endpoints and the events that they're associated with.</p>
 */
export interface EventsResponse {
  __type?: "EventsResponse";
  /**
   * <p>A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.</p>
   */
  Results?: { [key: string]: ItemResponse };
}

export namespace EventsResponse {
  export const filterSensitiveLog = (obj: EventsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventsResponse => __isa(o, "EventsResponse");
}

/**
 * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface EventStream {
  __type?: "EventStream";
  /**
   * <p>The unique identifier for the application to publish event data for.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The date, in ISO 8601 format, when the event stream was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The IAM user who last modified the event stream.</p>
   */
  LastUpdatedBy?: string;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

export namespace EventStream {
  export const filterSensitiveLog = (obj: EventStream): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventStream => __isa(o, "EventStream");
}

/**
 * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ExportJobRequest {
  __type?: "ExportJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string | undefined;

  /**
   * <p>The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to export endpoint definitions from, if specified.</p>
   */
  SegmentVersion?: number;
}

export namespace ExportJobRequest {
  export const filterSensitiveLog = (obj: ExportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportJobRequest => __isa(o, "ExportJobRequest");
}

/**
 * <p>Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface ExportJobResource {
  __type?: "ExportJobResource";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string | undefined;

  /**
   * <p>The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment that the endpoint definitions were exported from.</p>
   */
  SegmentVersion?: number;
}

export namespace ExportJobResource {
  export const filterSensitiveLog = (obj: ExportJobResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportJobResource => __isa(o, "ExportJobResource");
}

/**
 * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface ExportJobResponse {
  __type?: "ExportJobResponse";
  /**
   * <p>The unique identifier for the application that's associated with the export job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the export job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the export job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the export job.</p>
   */
  Definition: ExportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   */
  Failures?: string[];

  /**
   * <p>The unique identifier for the export job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the export job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is EXPORT for export jobs.</p>
   */
  Type: string | undefined;
}

export namespace ExportJobResponse {
  export const filterSensitiveLog = (obj: ExportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportJobResponse => __isa(o, "ExportJobResponse");
}

/**
 * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
 */
export interface ExportJobsResponse {
  __type?: "ExportJobsResponse";
  /**
   * <p>An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).</p>
   */
  Item: ExportJobResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace ExportJobsResponse {
  export const filterSensitiveLog = (obj: ExportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportJobsResponse => __isa(o, "ExportJobsResponse");
}

export enum FilterType {
  ENDPOINT = "ENDPOINT",
  SYSTEM = "SYSTEM",
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export enum Format {
  CSV = "CSV",
  JSON = "JSON",
}

export enum Frequency {
  DAILY = "DAILY",
  EVENT = "EVENT",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
  ONCE = "ONCE",
  WEEKLY = "WEEKLY",
}

/**
 * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelRequest {
  __type?: "GCMChannelRequest";
  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  ApiKey: string | undefined;

  /**
   * <p>Specifies whether to enable the GCM channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace GCMChannelRequest {
  export const filterSensitiveLog = (obj: GCMChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GCMChannelRequest => __isa(o, "GCMChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelResponse {
  __type?: "GCMChannelResponse";
  /**
   * <p>The unique identifier for the application that the GCM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the GCM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  Credential: string | undefined;

  /**
   * <p>Specifies whether the GCM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the GCM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the GCM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the GCM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the GCM channel.</p>
   */
  Version?: number;
}

export namespace GCMChannelResponse {
  export const filterSensitiveLog = (obj: GCMChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GCMChannelResponse => __isa(o, "GCMChannelResponse");
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMMessage {
  __type?: "GCMMessage";
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

  /**
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * <p>An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active.</p> <p>Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.</p>
   */
  CollapseKey?: string;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: { [key: string]: string };

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
   * <p>para>normal - The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required.</p>/listitem> <li><p>high - The notification is sent immediately and might wake a sleeping device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM.</p> <p>The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.</p>
   */
  Priority?: string;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   */
  RawContent?: string;

  /**
   * <p>The package name of the application where registration tokens must match in order for the recipient to receive the message.</p>
   */
  RestrictedPackageName?: string;

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
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days).</p> <p>Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.</p>
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

export namespace GCMMessage {
  export const filterSensitiveLog = (obj: GCMMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GCMMessage => __isa(o, "GCMMessage");
}

export interface GetAdmChannelRequest {
  __type?: "GetAdmChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetAdmChannelRequest {
  export const filterSensitiveLog = (obj: GetAdmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAdmChannelRequest => __isa(o, "GetAdmChannelRequest");
}

export interface GetAdmChannelResponse {
  __type?: "GetAdmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace GetAdmChannelResponse {
  export const filterSensitiveLog = (obj: GetAdmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAdmChannelResponse => __isa(o, "GetAdmChannelResponse");
}

export interface GetApnsChannelRequest {
  __type?: "GetApnsChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsChannelRequest {
  export const filterSensitiveLog = (obj: GetApnsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsChannelRequest => __isa(o, "GetApnsChannelRequest");
}

export interface GetApnsChannelResponse {
  __type?: "GetApnsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace GetApnsChannelResponse {
  export const filterSensitiveLog = (obj: GetApnsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsChannelResponse => __isa(o, "GetApnsChannelResponse");
}

export interface GetApnsSandboxChannelRequest {
  __type?: "GetApnsSandboxChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsSandboxChannelRequest {
  export const filterSensitiveLog = (obj: GetApnsSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsSandboxChannelRequest => __isa(o, "GetApnsSandboxChannelRequest");
}

export interface GetApnsSandboxChannelResponse {
  __type?: "GetApnsSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace GetApnsSandboxChannelResponse {
  export const filterSensitiveLog = (obj: GetApnsSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsSandboxChannelResponse => __isa(o, "GetApnsSandboxChannelResponse");
}

export interface GetApnsVoipChannelRequest {
  __type?: "GetApnsVoipChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsVoipChannelRequest {
  export const filterSensitiveLog = (obj: GetApnsVoipChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsVoipChannelRequest => __isa(o, "GetApnsVoipChannelRequest");
}

export interface GetApnsVoipChannelResponse {
  __type?: "GetApnsVoipChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace GetApnsVoipChannelResponse {
  export const filterSensitiveLog = (obj: GetApnsVoipChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsVoipChannelResponse => __isa(o, "GetApnsVoipChannelResponse");
}

export interface GetApnsVoipSandboxChannelRequest {
  __type?: "GetApnsVoipSandboxChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsVoipSandboxChannelRequest {
  export const filterSensitiveLog = (obj: GetApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsVoipSandboxChannelRequest => __isa(o, "GetApnsVoipSandboxChannelRequest");
}

export interface GetApnsVoipSandboxChannelResponse {
  __type?: "GetApnsVoipSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace GetApnsVoipSandboxChannelResponse {
  export const filterSensitiveLog = (obj: GetApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApnsVoipSandboxChannelResponse => __isa(o, "GetApnsVoipSandboxChannelResponse");
}

export interface GetApplicationDateRangeKpiRequest {
  __type?: "GetApplicationDateRangeKpiRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

export namespace GetApplicationDateRangeKpiRequest {
  export const filterSensitiveLog = (obj: GetApplicationDateRangeKpiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApplicationDateRangeKpiRequest => __isa(o, "GetApplicationDateRangeKpiRequest");
}

export interface GetApplicationDateRangeKpiResponse {
  __type?: "GetApplicationDateRangeKpiResponse";
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
   */
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse | undefined;
}

export namespace GetApplicationDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: GetApplicationDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApplicationDateRangeKpiResponse =>
    __isa(o, "GetApplicationDateRangeKpiResponse");
}

export interface GetApplicationSettingsRequest {
  __type?: "GetApplicationSettingsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApplicationSettingsRequest {
  export const filterSensitiveLog = (obj: GetApplicationSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApplicationSettingsRequest => __isa(o, "GetApplicationSettingsRequest");
}

export interface GetApplicationSettingsResponse {
  __type?: "GetApplicationSettingsResponse";
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

export namespace GetApplicationSettingsResponse {
  export const filterSensitiveLog = (obj: GetApplicationSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetApplicationSettingsResponse => __isa(o, "GetApplicationSettingsResponse");
}

export interface GetAppRequest {
  __type?: "GetAppRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetAppRequest {
  export const filterSensitiveLog = (obj: GetAppRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAppRequest => __isa(o, "GetAppRequest");
}

export interface GetAppResponse {
  __type?: "GetAppResponse";
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace GetAppResponse {
  export const filterSensitiveLog = (obj: GetAppResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAppResponse => __isa(o, "GetAppResponse");
}

export interface GetAppsRequest {
  __type?: "GetAppsRequest";
  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetAppsRequest {
  export const filterSensitiveLog = (obj: GetAppsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAppsRequest => __isa(o, "GetAppsRequest");
}

export interface GetAppsResponse {
  __type?: "GetAppsResponse";
  /**
   * <p>Provides information about all of your applications.</p>
   */
  ApplicationsResponse: ApplicationsResponse | undefined;
}

export namespace GetAppsResponse {
  export const filterSensitiveLog = (obj: GetAppsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAppsResponse => __isa(o, "GetAppsResponse");
}

export interface GetBaiduChannelRequest {
  __type?: "GetBaiduChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetBaiduChannelRequest {
  export const filterSensitiveLog = (obj: GetBaiduChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBaiduChannelRequest => __isa(o, "GetBaiduChannelRequest");
}

export interface GetBaiduChannelResponse {
  __type?: "GetBaiduChannelResponse";
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace GetBaiduChannelResponse {
  export const filterSensitiveLog = (obj: GetBaiduChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBaiduChannelResponse => __isa(o, "GetBaiduChannelResponse");
}

export interface GetCampaignActivitiesRequest {
  __type?: "GetCampaignActivitiesRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignActivitiesRequest {
  export const filterSensitiveLog = (obj: GetCampaignActivitiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignActivitiesRequest => __isa(o, "GetCampaignActivitiesRequest");
}

export interface GetCampaignActivitiesResponse {
  __type?: "GetCampaignActivitiesResponse";
  /**
   * <p>Provides information about the activities that were performed by a campaign.</p>
   */
  ActivitiesResponse: ActivitiesResponse | undefined;
}

export namespace GetCampaignActivitiesResponse {
  export const filterSensitiveLog = (obj: GetCampaignActivitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignActivitiesResponse => __isa(o, "GetCampaignActivitiesResponse");
}

export interface GetCampaignDateRangeKpiRequest {
  __type?: "GetCampaignDateRangeKpiRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

export namespace GetCampaignDateRangeKpiRequest {
  export const filterSensitiveLog = (obj: GetCampaignDateRangeKpiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignDateRangeKpiRequest => __isa(o, "GetCampaignDateRangeKpiRequest");
}

export interface GetCampaignDateRangeKpiResponse {
  __type?: "GetCampaignDateRangeKpiResponse";
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
   */
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse | undefined;
}

export namespace GetCampaignDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: GetCampaignDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignDateRangeKpiResponse => __isa(o, "GetCampaignDateRangeKpiResponse");
}

export interface GetCampaignRequest {
  __type?: "GetCampaignRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

export namespace GetCampaignRequest {
  export const filterSensitiveLog = (obj: GetCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignRequest => __isa(o, "GetCampaignRequest");
}

export interface GetCampaignResponse {
  __type?: "GetCampaignResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace GetCampaignResponse {
  export const filterSensitiveLog = (obj: GetCampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignResponse => __isa(o, "GetCampaignResponse");
}

export interface GetCampaignsRequest {
  __type?: "GetCampaignsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignsRequest {
  export const filterSensitiveLog = (obj: GetCampaignsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignsRequest => __isa(o, "GetCampaignsRequest");
}

export interface GetCampaignsResponse {
  __type?: "GetCampaignsResponse";
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

export namespace GetCampaignsResponse {
  export const filterSensitiveLog = (obj: GetCampaignsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignsResponse => __isa(o, "GetCampaignsResponse");
}

export interface GetCampaignVersionRequest {
  __type?: "GetCampaignVersionRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}

export namespace GetCampaignVersionRequest {
  export const filterSensitiveLog = (obj: GetCampaignVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignVersionRequest => __isa(o, "GetCampaignVersionRequest");
}

export interface GetCampaignVersionResponse {
  __type?: "GetCampaignVersionResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace GetCampaignVersionResponse {
  export const filterSensitiveLog = (obj: GetCampaignVersionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignVersionResponse => __isa(o, "GetCampaignVersionResponse");
}

export interface GetCampaignVersionsRequest {
  __type?: "GetCampaignVersionsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignVersionsRequest {
  export const filterSensitiveLog = (obj: GetCampaignVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignVersionsRequest => __isa(o, "GetCampaignVersionsRequest");
}

export interface GetCampaignVersionsResponse {
  __type?: "GetCampaignVersionsResponse";
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

export namespace GetCampaignVersionsResponse {
  export const filterSensitiveLog = (obj: GetCampaignVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCampaignVersionsResponse => __isa(o, "GetCampaignVersionsResponse");
}

export interface GetChannelsRequest {
  __type?: "GetChannelsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetChannelsRequest {
  export const filterSensitiveLog = (obj: GetChannelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetChannelsRequest => __isa(o, "GetChannelsRequest");
}

export interface GetChannelsResponse {
  __type?: "GetChannelsResponse";
  /**
   * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
   */
  ChannelsResponse: ChannelsResponse | undefined;
}

export namespace GetChannelsResponse {
  export const filterSensitiveLog = (obj: GetChannelsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetChannelsResponse => __isa(o, "GetChannelsResponse");
}

export interface GetEmailChannelRequest {
  __type?: "GetEmailChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetEmailChannelRequest {
  export const filterSensitiveLog = (obj: GetEmailChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailChannelRequest => __isa(o, "GetEmailChannelRequest");
}

export interface GetEmailChannelResponse {
  __type?: "GetEmailChannelResponse";
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace GetEmailChannelResponse {
  export const filterSensitiveLog = (obj: GetEmailChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailChannelResponse => __isa(o, "GetEmailChannelResponse");
}

export interface GetEmailTemplateRequest {
  __type?: "GetEmailTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetEmailTemplateRequest {
  export const filterSensitiveLog = (obj: GetEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailTemplateRequest => __isa(o, "GetEmailTemplateRequest");
}

export interface GetEmailTemplateResponse {
  __type?: "GetEmailTemplateResponse";
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateResponse: EmailTemplateResponse | undefined;
}

export namespace GetEmailTemplateResponse {
  export const filterSensitiveLog = (obj: GetEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailTemplateResponse => __isa(o, "GetEmailTemplateResponse");
}

export interface GetEndpointRequest {
  __type?: "GetEndpointRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

export namespace GetEndpointRequest {
  export const filterSensitiveLog = (obj: GetEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEndpointRequest => __isa(o, "GetEndpointRequest");
}

export interface GetEndpointResponse {
  __type?: "GetEndpointResponse";
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

export namespace GetEndpointResponse {
  export const filterSensitiveLog = (obj: GetEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEndpointResponse => __isa(o, "GetEndpointResponse");
}

export interface GetEventStreamRequest {
  __type?: "GetEventStreamRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetEventStreamRequest {
  export const filterSensitiveLog = (obj: GetEventStreamRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventStreamRequest => __isa(o, "GetEventStreamRequest");
}

export interface GetEventStreamResponse {
  __type?: "GetEventStreamResponse";
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace GetEventStreamResponse {
  export const filterSensitiveLog = (obj: GetEventStreamResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventStreamResponse => __isa(o, "GetEventStreamResponse");
}

export interface GetExportJobRequest {
  __type?: "GetExportJobRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

export namespace GetExportJobRequest {
  export const filterSensitiveLog = (obj: GetExportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportJobRequest => __isa(o, "GetExportJobRequest");
}

export interface GetExportJobResponse {
  __type?: "GetExportJobResponse";
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

export namespace GetExportJobResponse {
  export const filterSensitiveLog = (obj: GetExportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportJobResponse => __isa(o, "GetExportJobResponse");
}

export interface GetExportJobsRequest {
  __type?: "GetExportJobsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetExportJobsRequest {
  export const filterSensitiveLog = (obj: GetExportJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportJobsRequest => __isa(o, "GetExportJobsRequest");
}

export interface GetExportJobsResponse {
  __type?: "GetExportJobsResponse";
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

export namespace GetExportJobsResponse {
  export const filterSensitiveLog = (obj: GetExportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportJobsResponse => __isa(o, "GetExportJobsResponse");
}

export interface GetGcmChannelRequest {
  __type?: "GetGcmChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetGcmChannelRequest {
  export const filterSensitiveLog = (obj: GetGcmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGcmChannelRequest => __isa(o, "GetGcmChannelRequest");
}

export interface GetGcmChannelResponse {
  __type?: "GetGcmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace GetGcmChannelResponse {
  export const filterSensitiveLog = (obj: GetGcmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGcmChannelResponse => __isa(o, "GetGcmChannelResponse");
}

export interface GetImportJobRequest {
  __type?: "GetImportJobRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

export namespace GetImportJobRequest {
  export const filterSensitiveLog = (obj: GetImportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImportJobRequest => __isa(o, "GetImportJobRequest");
}

export interface GetImportJobResponse {
  __type?: "GetImportJobResponse";
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

export namespace GetImportJobResponse {
  export const filterSensitiveLog = (obj: GetImportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImportJobResponse => __isa(o, "GetImportJobResponse");
}

export interface GetImportJobsRequest {
  __type?: "GetImportJobsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetImportJobsRequest {
  export const filterSensitiveLog = (obj: GetImportJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImportJobsRequest => __isa(o, "GetImportJobsRequest");
}

export interface GetImportJobsResponse {
  __type?: "GetImportJobsResponse";
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

export namespace GetImportJobsResponse {
  export const filterSensitiveLog = (obj: GetImportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImportJobsResponse => __isa(o, "GetImportJobsResponse");
}

export interface GetJourneyDateRangeKpiRequest {
  __type?: "GetJourneyDateRangeKpiRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format, for example: 2019-07-19T00:00:00Z for July 19, 2019 and 2019-07-19T20:00:00Z for 8:00 PM July 19, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format, for example: 2019-07-15T00:00:00Z for July 15, 2019 and 2019-07-15T16:00:00Z for 4:00 PM July 15, 2019.</p>
   */
  StartTime?: Date;
}

export namespace GetJourneyDateRangeKpiRequest {
  export const filterSensitiveLog = (obj: GetJourneyDateRangeKpiRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyDateRangeKpiRequest => __isa(o, "GetJourneyDateRangeKpiRequest");
}

export interface GetJourneyDateRangeKpiResponse {
  __type?: "GetJourneyDateRangeKpiResponse";
  /**
   * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse | undefined;
}

export namespace GetJourneyDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: GetJourneyDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyDateRangeKpiResponse => __isa(o, "GetJourneyDateRangeKpiResponse");
}

export interface GetJourneyExecutionActivityMetricsRequest {
  __type?: "GetJourneyExecutionActivityMetricsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey activity.</p>
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

export namespace GetJourneyExecutionActivityMetricsRequest {
  export const filterSensitiveLog = (obj: GetJourneyExecutionActivityMetricsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyExecutionActivityMetricsRequest =>
    __isa(o, "GetJourneyExecutionActivityMetricsRequest");
}

export interface GetJourneyExecutionActivityMetricsResponse {
  __type?: "GetJourneyExecutionActivityMetricsResponse";
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
   */
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse | undefined;
}

export namespace GetJourneyExecutionActivityMetricsResponse {
  export const filterSensitiveLog = (obj: GetJourneyExecutionActivityMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyExecutionActivityMetricsResponse =>
    __isa(o, "GetJourneyExecutionActivityMetricsResponse");
}

export interface GetJourneyExecutionMetricsRequest {
  __type?: "GetJourneyExecutionMetricsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

export namespace GetJourneyExecutionMetricsRequest {
  export const filterSensitiveLog = (obj: GetJourneyExecutionMetricsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyExecutionMetricsRequest => __isa(o, "GetJourneyExecutionMetricsRequest");
}

export interface GetJourneyExecutionMetricsResponse {
  __type?: "GetJourneyExecutionMetricsResponse";
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse | undefined;
}

export namespace GetJourneyExecutionMetricsResponse {
  export const filterSensitiveLog = (obj: GetJourneyExecutionMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyExecutionMetricsResponse =>
    __isa(o, "GetJourneyExecutionMetricsResponse");
}

export interface GetJourneyRequest {
  __type?: "GetJourneyRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

export namespace GetJourneyRequest {
  export const filterSensitiveLog = (obj: GetJourneyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyRequest => __isa(o, "GetJourneyRequest");
}

export interface GetJourneyResponse {
  __type?: "GetJourneyResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace GetJourneyResponse {
  export const filterSensitiveLog = (obj: GetJourneyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJourneyResponse => __isa(o, "GetJourneyResponse");
}

export interface GetPushTemplateRequest {
  __type?: "GetPushTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetPushTemplateRequest {
  export const filterSensitiveLog = (obj: GetPushTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPushTemplateRequest => __isa(o, "GetPushTemplateRequest");
}

export interface GetPushTemplateResponse {
  __type?: "GetPushTemplateResponse";
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateResponse: PushNotificationTemplateResponse | undefined;
}

export namespace GetPushTemplateResponse {
  export const filterSensitiveLog = (obj: GetPushTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPushTemplateResponse => __isa(o, "GetPushTemplateResponse");
}

export interface GetSegmentExportJobsRequest {
  __type?: "GetSegmentExportJobsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentExportJobsRequest {
  export const filterSensitiveLog = (obj: GetSegmentExportJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentExportJobsRequest => __isa(o, "GetSegmentExportJobsRequest");
}

export interface GetSegmentExportJobsResponse {
  __type?: "GetSegmentExportJobsResponse";
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

export namespace GetSegmentExportJobsResponse {
  export const filterSensitiveLog = (obj: GetSegmentExportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentExportJobsResponse => __isa(o, "GetSegmentExportJobsResponse");
}

export interface GetSegmentImportJobsRequest {
  __type?: "GetSegmentImportJobsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentImportJobsRequest {
  export const filterSensitiveLog = (obj: GetSegmentImportJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentImportJobsRequest => __isa(o, "GetSegmentImportJobsRequest");
}

export interface GetSegmentImportJobsResponse {
  __type?: "GetSegmentImportJobsResponse";
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

export namespace GetSegmentImportJobsResponse {
  export const filterSensitiveLog = (obj: GetSegmentImportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentImportJobsResponse => __isa(o, "GetSegmentImportJobsResponse");
}

export interface GetSegmentRequest {
  __type?: "GetSegmentRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

export namespace GetSegmentRequest {
  export const filterSensitiveLog = (obj: GetSegmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentRequest => __isa(o, "GetSegmentRequest");
}

export interface GetSegmentResponse {
  __type?: "GetSegmentResponse";
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace GetSegmentResponse {
  export const filterSensitiveLog = (obj: GetSegmentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentResponse => __isa(o, "GetSegmentResponse");
}

export interface GetSegmentsRequest {
  __type?: "GetSegmentsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentsRequest {
  export const filterSensitiveLog = (obj: GetSegmentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentsRequest => __isa(o, "GetSegmentsRequest");
}

export interface GetSegmentsResponse {
  __type?: "GetSegmentsResponse";
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

export namespace GetSegmentsResponse {
  export const filterSensitiveLog = (obj: GetSegmentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentsResponse => __isa(o, "GetSegmentsResponse");
}

export interface GetSegmentVersionRequest {
  __type?: "GetSegmentVersionRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}

export namespace GetSegmentVersionRequest {
  export const filterSensitiveLog = (obj: GetSegmentVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentVersionRequest => __isa(o, "GetSegmentVersionRequest");
}

export interface GetSegmentVersionResponse {
  __type?: "GetSegmentVersionResponse";
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace GetSegmentVersionResponse {
  export const filterSensitiveLog = (obj: GetSegmentVersionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentVersionResponse => __isa(o, "GetSegmentVersionResponse");
}

export interface GetSegmentVersionsRequest {
  __type?: "GetSegmentVersionsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentVersionsRequest {
  export const filterSensitiveLog = (obj: GetSegmentVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentVersionsRequest => __isa(o, "GetSegmentVersionsRequest");
}

export interface GetSegmentVersionsResponse {
  __type?: "GetSegmentVersionsResponse";
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

export namespace GetSegmentVersionsResponse {
  export const filterSensitiveLog = (obj: GetSegmentVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSegmentVersionsResponse => __isa(o, "GetSegmentVersionsResponse");
}

export interface GetSmsChannelRequest {
  __type?: "GetSmsChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetSmsChannelRequest {
  export const filterSensitiveLog = (obj: GetSmsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSmsChannelRequest => __isa(o, "GetSmsChannelRequest");
}

export interface GetSmsChannelResponse {
  __type?: "GetSmsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace GetSmsChannelResponse {
  export const filterSensitiveLog = (obj: GetSmsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSmsChannelResponse => __isa(o, "GetSmsChannelResponse");
}

export interface GetSmsTemplateRequest {
  __type?: "GetSmsTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetSmsTemplateRequest {
  export const filterSensitiveLog = (obj: GetSmsTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSmsTemplateRequest => __isa(o, "GetSmsTemplateRequest");
}

export interface GetSmsTemplateResponse {
  __type?: "GetSmsTemplateResponse";
  /**
   * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateResponse: SMSTemplateResponse | undefined;
}

export namespace GetSmsTemplateResponse {
  export const filterSensitiveLog = (obj: GetSmsTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSmsTemplateResponse => __isa(o, "GetSmsTemplateResponse");
}

export interface GetUserEndpointsRequest {
  __type?: "GetUserEndpointsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

export namespace GetUserEndpointsRequest {
  export const filterSensitiveLog = (obj: GetUserEndpointsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUserEndpointsRequest => __isa(o, "GetUserEndpointsRequest");
}

export interface GetUserEndpointsResponse {
  __type?: "GetUserEndpointsResponse";
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

export namespace GetUserEndpointsResponse {
  export const filterSensitiveLog = (obj: GetUserEndpointsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUserEndpointsResponse => __isa(o, "GetUserEndpointsResponse");
}

export interface GetVoiceChannelRequest {
  __type?: "GetVoiceChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetVoiceChannelRequest {
  export const filterSensitiveLog = (obj: GetVoiceChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceChannelRequest => __isa(o, "GetVoiceChannelRequest");
}

export interface GetVoiceChannelResponse {
  __type?: "GetVoiceChannelResponse";
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace GetVoiceChannelResponse {
  export const filterSensitiveLog = (obj: GetVoiceChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceChannelResponse => __isa(o, "GetVoiceChannelResponse");
}

export interface GetVoiceTemplateRequest {
  __type?: "GetVoiceTemplateRequest";
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetVoiceTemplateRequest {
  export const filterSensitiveLog = (obj: GetVoiceTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceTemplateRequest => __isa(o, "GetVoiceTemplateRequest");
}

export interface GetVoiceTemplateResponse {
  __type?: "GetVoiceTemplateResponse";
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateResponse: VoiceTemplateResponse | undefined;
}

export namespace GetVoiceTemplateResponse {
  export const filterSensitiveLog = (obj: GetVoiceTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceTemplateResponse => __isa(o, "GetVoiceTemplateResponse");
}

/**
 * <p>Specifies the GPS coordinates of a location.</p>
 */
export interface GPSCoordinates {
  __type?: "GPSCoordinates";
  /**
   * <p>The latitude coordinate of the location.</p>
   */
  Latitude: number | undefined;

  /**
   * <p>The longitude coordinate of the location.</p>
   */
  Longitude: number | undefined;
}

export namespace GPSCoordinates {
  export const filterSensitiveLog = (obj: GPSCoordinates): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GPSCoordinates => __isa(o, "GPSCoordinates");
}

/**
 * <p>Specifies GPS-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface GPSPointDimension {
  __type?: "GPSPointDimension";
  /**
   * <p>The GPS coordinates to measure distance from.</p>
   */
  Coordinates: GPSCoordinates | undefined;

  /**
   * <p>The range, in kilometers, from the GPS coordinates.</p>
   */
  RangeInKilometers?: number;
}

export namespace GPSPointDimension {
  export const filterSensitiveLog = (obj: GPSPointDimension): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GPSPointDimension => __isa(o, "GPSPointDimension");
}

/**
 * <p>Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.</p>
 */
export interface HoldoutActivity {
  __type?: "HoldoutActivity";
  /**
   * <p>The unique identifier for the next activity to perform, after performing the holdout activity.</p>
   */
  NextActivity?: string;

  /**
   * <p>The percentage of participants who shouldn't continue the journey.</p> <p>To determine which participants are held out, Amazon Pinpoint applies a probability-based algorithm to the percentage that you specify. Therefore, the actual percentage of participants who are held out may not be equal to the percentage that you specify.</p>
   */
  Percentage: number | undefined;
}

export namespace HoldoutActivity {
  export const filterSensitiveLog = (obj: HoldoutActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HoldoutActivity => __isa(o, "HoldoutActivity");
}

/**
 * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ImportJobRequest {
  __type?: "ImportJobRequest";
  /**
   * <p>Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string | undefined;

  /**
   * <p>The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * <p>The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

export namespace ImportJobRequest {
  export const filterSensitiveLog = (obj: ImportJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportJobRequest => __isa(o, "ImportJobRequest");
}

/**
 * <p>Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface ImportJobResource {
  __type?: "ImportJobResource";
  /**
   * <p>Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p> <p>If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string | undefined;

  /**
   * <p>The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * <p>The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

export namespace ImportJobResource {
  export const filterSensitiveLog = (obj: ImportJobResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportJobResource => __isa(o, "ImportJobResource");
}

/**
 * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface ImportJobResponse {
  __type?: "ImportJobResponse";
  /**
   * <p>The unique identifier for the application that's associated with the import job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the import job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the import job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the import job.</p>
   */
  Definition: ImportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   */
  Failures?: string[];

  /**
   * <p>The unique identifier for the import job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the import job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is IMPORT for import jobs.</p>
   */
  Type: string | undefined;
}

export namespace ImportJobResponse {
  export const filterSensitiveLog = (obj: ImportJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportJobResponse => __isa(o, "ImportJobResponse");
}

/**
 * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
 */
export interface ImportJobsResponse {
  __type?: "ImportJobsResponse";
  /**
   * <p>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</p>
   */
  Item: ImportJobResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace ImportJobsResponse {
  export const filterSensitiveLog = (obj: ImportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportJobsResponse => __isa(o, "ImportJobsResponse");
}

export enum Include {
  ALL = "ALL",
  ANY = "ANY",
  NONE = "NONE",
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

/**
 * <p>Provides information about the results of a request to create or update an endpoint that's associated with an event.</p>
 */
export interface ItemResponse {
  __type?: "ItemResponse";
  /**
   * <p>The response that was received after the endpoint data was accepted.</p>
   */
  EndpointItemResponse?: EndpointItemResponse;

  /**
   * <p>A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.</p>
   */
  EventsItemResponse?: { [key: string]: EventItemResponse };
}

export namespace ItemResponse {
  export const filterSensitiveLog = (obj: ItemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ItemResponse => __isa(o, "ItemResponse");
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  COMPLETING = "COMPLETING",
  CREATED = "CREATED",
  FAILED = "FAILED",
  FAILING = "FAILING",
  INITIALIZING = "INITIALIZING",
  PENDING_JOB = "PENDING_JOB",
  PREPARING_FOR_INITIALIZATION = "PREPARING_FOR_INITIALIZATION",
  PROCESSING = "PROCESSING",
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
 */
export interface JourneyDateRangeKpiResponse {
  __type?: "JourneyDateRangeKpiResponse";
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

export namespace JourneyDateRangeKpiResponse {
  export const filterSensitiveLog = (obj: JourneyDateRangeKpiResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyDateRangeKpiResponse => __isa(o, "JourneyDateRangeKpiResponse");
}

/**
 * <p>Specifies the "From" address for an email message that's sent to participants in a journey.</p>
 */
export interface JourneyEmailMessage {
  __type?: "JourneyEmailMessage";
  /**
   * <p>The verified email address to send the email message from. The default address is the FromAddress specified for the email channel for the application.</p>
   */
  FromAddress?: string;
}

export namespace JourneyEmailMessage {
  export const filterSensitiveLog = (obj: JourneyEmailMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyEmailMessage => __isa(o, "JourneyEmailMessage");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
 */
export interface JourneyExecutionActivityMetricsResponse {
  __type?: "JourneyExecutionActivityMetricsResponse";
  /**
   * <p>The type of activity that the metric applies to. Possible values are:</p> <ul><li><p>CONDITIONAL_SPLIT - For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.</p></li> <li><p>HOLDOUT - For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.</p></li> <li><p>MESSAGE - For an email activity, which is an activity that sends an email message to participants.</p></li> <li><p>MULTI_CONDITIONAL_SPLIT - For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.</p></li> <li><p>RANDOM_SPLIT - For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.</p></li> <li><p>WAIT - For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p></li></ul>
   */
  ActivityType: string | undefined;

  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the activity that the metric applies to.</p>
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity and updated the data for the metric.</p>
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. The results vary depending on the type of activity (ActivityType). For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  Metrics: { [key: string]: string } | undefined;
}

export namespace JourneyExecutionActivityMetricsResponse {
  export const filterSensitiveLog = (obj: JourneyExecutionActivityMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyExecutionActivityMetricsResponse =>
    __isa(o, "JourneyExecutionActivityMetricsResponse");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
 */
export interface JourneyExecutionMetricsResponse {
  __type?: "JourneyExecutionMetricsResponse";
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey and updated the data for the metric.</p>
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  Metrics: { [key: string]: string } | undefined;
}

export namespace JourneyExecutionMetricsResponse {
  export const filterSensitiveLog = (obj: JourneyExecutionMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyExecutionMetricsResponse => __isa(o, "JourneyExecutionMetricsResponse");
}

/**
 * <p>Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.</p>
 */
export interface JourneyLimits {
  __type?: "JourneyLimits";
  /**
   * <p>The maximum number of messages that the journey can send to a single participant during a 24-hour period. The maximum value is 100.</p>
   */
  DailyCap?: number;

  /**
   * <p>The maximum number of times that a participant can enter the journey. The maximum value is 100. To allow participants to enter the journey an unlimited number of times, set this value to 0.</p>
   */
  EndpointReentryCap?: number;

  /**
   * <p>The maximum number of messages that the journey can send each second.</p>
   */
  MessagesPerSecond?: number;
}

export namespace JourneyLimits {
  export const filterSensitiveLog = (obj: JourneyLimits): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyLimits => __isa(o, "JourneyLimits");
}

/**
 * <p>Provides information about the status, configuration, and other settings for a journey.</p>
 */
export interface JourneyResponse {
  __type?: "JourneyResponse";
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.</p>
   */
  Activities?: { [key: string]: Activity };

  /**
   * <p>The unique identifier for the application that the journey applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.</p>
   */
  LocalTime?: boolean;

  /**
   * <p>The name of the journey.</p>
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * <p>The unique identifier for the first activity in the journey.</p>
   */
  StartActivity?: string;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * <p>The current status of the journey. Possible values are:</p> <ul><li><p>DRAFT - The journey is being developed and hasn't been published yet.</p></li> <li><p>ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li> <li><p>COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.</p></li> <li><p>CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.</p></li> <li><p>CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.</p></li></ul>
   */
  State?: State | string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the journey. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace JourneyResponse {
  export const filterSensitiveLog = (obj: JourneyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyResponse => __isa(o, "JourneyResponse");
}

/**
 * <p>Specifies the schedule settings for a journey.</p>
 */
export interface JourneySchedule {
  __type?: "JourneySchedule";
  /**
   * <p>The scheduled time, in ISO 8601 format, when the journey ended or will end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The scheduled time, in ISO 8601 format, when the journey began or will begin.</p>
   */
  StartTime?: Date;

  /**
   * <p>The starting UTC offset for the journey schedule, if the value of the journey's LocalTime property is true. Valid values are: UTC,
   *                   UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30,
   *                   UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+08:45, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+12:45, UTC+13, UTC+13:45, UTC-02,
   *                   UTC-02:30, UTC-03, UTC-03:30, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09,
   *                   UTC-09:30, UTC-10, and UTC-11.</p>
   */
  Timezone?: string;
}

export namespace JourneySchedule {
  export const filterSensitiveLog = (obj: JourneySchedule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneySchedule => __isa(o, "JourneySchedule");
}

/**
 * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
 */
export interface JourneysResponse {
  __type?: "JourneysResponse";
  /**
   * <p>An array of responses, one for each journey that's associated with the application.</p>
   */
  Item: JourneyResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace JourneysResponse {
  export const filterSensitiveLog = (obj: JourneysResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneysResponse => __isa(o, "JourneysResponse");
}

/**
 * <p>Changes the status of a journey.</p>
 */
export interface JourneyStateRequest {
  __type?: "JourneyStateRequest";
  /**
   * <p>The status of the journey. Currently, the only supported value is CANCELLED.</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p>
   */
  State?: State | string;
}

export namespace JourneyStateRequest {
  export const filterSensitiveLog = (obj: JourneyStateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JourneyStateRequest => __isa(o, "JourneyStateRequest");
}

export interface ListJourneysRequest {
  __type?: "ListJourneysRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace ListJourneysRequest {
  export const filterSensitiveLog = (obj: ListJourneysRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListJourneysRequest => __isa(o, "ListJourneysRequest");
}

export interface ListJourneysResponse {
  __type?: "ListJourneysResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
   */
  JourneysResponse: JourneysResponse | undefined;
}

export namespace ListJourneysResponse {
  export const filterSensitiveLog = (obj: ListJourneysResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListJourneysResponse => __isa(o, "ListJourneysResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, journey, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListTemplatesRequest {
  __type?: "ListTemplatesRequest";
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.</p>
   */
  Prefix?: string;

  /**
   * <p>The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.</p>
   */
  TemplateType?: string;
}

export namespace ListTemplatesRequest {
  export const filterSensitiveLog = (obj: ListTemplatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTemplatesRequest => __isa(o, "ListTemplatesRequest");
}

export interface ListTemplatesResponse {
  __type?: "ListTemplatesResponse";
  /**
   * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
   */
  TemplatesResponse: TemplatesResponse | undefined;
}

export namespace ListTemplatesResponse {
  export const filterSensitiveLog = (obj: ListTemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTemplatesResponse => __isa(o, "ListTemplatesResponse");
}

export interface ListTemplateVersionsRequest {
  __type?: "ListTemplateVersionsRequest";
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is currently not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

export namespace ListTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: ListTemplateVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTemplateVersionsRequest => __isa(o, "ListTemplateVersionsRequest");
}

export interface ListTemplateVersionsResponse {
  __type?: "ListTemplateVersionsResponse";
  /**
   * <p>Provides information about all the versions of a specific message template.</p>
   */
  TemplateVersionsResponse: TemplateVersionsResponse | undefined;
}

export namespace ListTemplateVersionsResponse {
  export const filterSensitiveLog = (obj: ListTemplateVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTemplateVersionsResponse => __isa(o, "ListTemplateVersionsResponse");
}

/**
 * <p>Specifies the content and settings for a push notification that's sent to recipients of a campaign.</p>
 */
export interface Message {
  __type?: "Message";
  /**
   * <p>The action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action | string;

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
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
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

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Message => __isa(o, "Message");
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface MessageBody {
  __type?: "MessageBody";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace MessageBody {
  export const filterSensitiveLog = (obj: MessageBody): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageBody => __isa(o, "MessageBody");
}

/**
 * <p>Specifies the message configuration settings for a campaign.</p>
 */
export interface MessageConfiguration {
  __type?: "MessageConfiguration";
  /**
   * <p>The message that the campaign sends through the ADM (Amazon Device Messaging) channel. This message overrides the default message.</p>
   */
  ADMMessage?: Message;

  /**
   * <p>The message that the campaign sends through the APNs (Apple Push Notification service) channel. This message overrides the default message.</p>
   */
  APNSMessage?: Message;

  /**
   * <p>The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. This message overrides the default message.</p>
   */
  BaiduMessage?: Message;

  /**
   * <p>The default message that the campaign sends through all the channels that are configured for the campaign.</p>
   */
  DefaultMessage?: Message;

  /**
   * <p>The message that the campaign sends through the email channel.</p>
   */
  EmailMessage?: CampaignEmailMessage;

  /**
   * <p>The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default message.</p>
   */
  GCMMessage?: Message;

  /**
   * <p>The message that the campaign sends through the SMS channel.</p>
   */
  SMSMessage?: CampaignSmsMessage;
}

export namespace MessageConfiguration {
  export const filterSensitiveLog = (obj: MessageConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageConfiguration => __isa(o, "MessageConfiguration");
}

/**
 * <p>Specifies the configuration and other settings for a message.</p>
 */
export interface MessageRequest {
  __type?: "MessageRequest";
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address. You can use an AddressConfiguration object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   */
  Addresses?: { [key: string]: AddressConfiguration };

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. You can use an EndpointSendConfiguration object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   */
  Endpoints?: { [key: string]: EndpointSendConfiguration };

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;
}

export namespace MessageRequest {
  export const filterSensitiveLog = (obj: MessageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageRequest => __isa(o, "MessageRequest");
}

/**
 * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
 */
export interface MessageResponse {
  __type?: "MessageResponse";
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.</p>
   */
  EndpointResult?: { [key: string]: EndpointMessageResult };

  /**
   * <p>The identifier for the original request that the message was delivered for.</p>
   */
  RequestId?: string;

  /**
   * <p>A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.</p>
   */
  Result?: { [key: string]: MessageResult };
}

export namespace MessageResponse {
  export const filterSensitiveLog = (obj: MessageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageResponse => __isa(o, "MessageResponse");
}

/**
 * <p>Provides information about the results of sending a message directly to an endpoint address.</p>
 */
export interface MessageResult {
  __type?: "MessageResult";
  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint address.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   */
  DeliveryStatus: DeliveryStatus | string | undefined;

  /**
   * <p>The unique identifier for the message that was sent.</p>
   */
  MessageId?: string;

  /**
   * <p>The downstream service status code for delivering the message.</p>
   */
  StatusCode: number | undefined;

  /**
   * <p>The status message for delivering the message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.</p>
   */
  UpdatedToken?: string;
}

export namespace MessageResult {
  export const filterSensitiveLog = (obj: MessageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageResult => __isa(o, "MessageResult");
}

export enum MessageType {
  PROMOTIONAL = "PROMOTIONAL",
  TRANSACTIONAL = "TRANSACTIONAL",
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface MethodNotAllowedException extends __SmithyException, $MetadataBearer {
  name: "MethodNotAllowedException";
  $fault: "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace MethodNotAllowedException {
  export const filterSensitiveLog = (obj: MethodNotAllowedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MethodNotAllowedException => __isa(o, "MethodNotAllowedException");
}

/**
 * <p>Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.</p>
 */
export interface MetricDimension {
  __type?: "MetricDimension";
  /**
   * <p>The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.</p>
   */
  ComparisonOperator: string | undefined;

  /**
   * <p>The value to compare.</p>
   */
  Value: number | undefined;
}

export namespace MetricDimension {
  export const filterSensitiveLog = (obj: MetricDimension): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricDimension => __isa(o, "MetricDimension");
}

export enum Mode {
  DELIVERY = "DELIVERY",
  FILTER = "FILTER",
}

/**
 * <p>Specifies a condition to evaluate for an activity path in a journey.</p>
 */
export interface MultiConditionalBranch {
  __type?: "MultiConditionalBranch";
  /**
   * <p>The condition to evaluate for the activity path.</p>
   */
  Condition?: SimpleCondition;

  /**
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   */
  NextActivity?: string;
}

export namespace MultiConditionalBranch {
  export const filterSensitiveLog = (obj: MultiConditionalBranch): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MultiConditionalBranch => __isa(o, "MultiConditionalBranch");
}

/**
 * <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p>
 */
export interface MultiConditionalSplitActivity {
  __type?: "MultiConditionalSplitActivity";
  /**
   * <p>The paths for the activity, including the conditions for entering each path and the activity to perform for each path.</p>
   */
  Branches?: MultiConditionalBranch[];

  /**
   * <p>The unique identifier for the activity to perform for participants who don't meet any of the conditions specified for other paths in the activity.</p>
   */
  DefaultActivity?: string;

  /**
   * <p>The amount of time to wait or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   */
  EvaluationWaitTime?: WaitTime;
}

export namespace MultiConditionalSplitActivity {
  export const filterSensitiveLog = (obj: MultiConditionalSplitActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MultiConditionalSplitActivity => __isa(o, "MultiConditionalSplitActivity");
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>Specifies a phone number to validate and retrieve information about.</p>
 */
export interface NumberValidateRequest {
  __type?: "NumberValidateRequest";
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.</p>
   */
  PhoneNumber?: string;
}

export namespace NumberValidateRequest {
  export const filterSensitiveLog = (obj: NumberValidateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NumberValidateRequest => __isa(o, "NumberValidateRequest");
}

/**
 * <p>Provides information about a phone number.</p>
 */
export interface NumberValidateResponse {
  __type?: "NumberValidateResponse";
  /**
   * <p>The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.</p>
   */
  Carrier?: string;

  /**
   * <p>The name of the city where the phone number was originally registered.</p>
   */
  City?: string;

  /**
   * <p>The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberE164?: string;

  /**
   * <p>The cleansed phone number, in the format for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberNational?: string;

  /**
   * <p>The name of the country or region where the phone number was originally registered.</p>
   */
  Country?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeIso2?: string;

  /**
   * <p>The numeric code for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeNumeric?: string;

  /**
   * <p>The name of the county where the phone number was originally registered.</p>
   */
  County?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.</p>
   */
  OriginalCountryCodeIso2?: string;

  /**
   * <p>The phone number that was sent in the request body.</p>
   */
  OriginalPhoneNumber?: string;

  /**
   * <p>The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,
   *                   INVALID, PREPAID, and OTHER.</p>
   */
  PhoneType?: string;

  /**
   * <p>The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).</p>
   */
  PhoneTypeCode?: number;

  /**
   * <p>The time zone for the location where the phone number was originally registered.</p>
   */
  Timezone?: string;

  /**
   * <p>The postal or ZIP code for the location where the phone number was originally registered.</p>
   */
  ZipCode?: string;
}

export namespace NumberValidateResponse {
  export const filterSensitiveLog = (obj: NumberValidateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NumberValidateResponse => __isa(o, "NumberValidateResponse");
}

export enum Operator {
  ALL = "ALL",
  ANY = "ANY",
}

export interface PhoneNumberValidateRequest {
  __type?: "PhoneNumberValidateRequest";
  /**
   * <p>Specifies a phone number to validate and retrieve information about.</p>
   */
  NumberValidateRequest: NumberValidateRequest | undefined;
}

export namespace PhoneNumberValidateRequest {
  export const filterSensitiveLog = (obj: PhoneNumberValidateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhoneNumberValidateRequest => __isa(o, "PhoneNumberValidateRequest");
}

export interface PhoneNumberValidateResponse {
  __type?: "PhoneNumberValidateResponse";
  /**
   * <p>Provides information about a phone number.</p>
   */
  NumberValidateResponse: NumberValidateResponse | undefined;
}

export namespace PhoneNumberValidateResponse {
  export const filterSensitiveLog = (obj: PhoneNumberValidateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhoneNumberValidateResponse => __isa(o, "PhoneNumberValidateResponse");
}

/**
 * <p>Specifies the properties and attributes of an endpoint that's associated with an event.</p>
 */
export interface PublicEndpoint {
  __type?: "PublicEndpoint";
  /**
   * <p>The unique identifier for the recipient, such as a device token, email address, or mobile phone number.</p>
   */
  Address?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.</p>
   */
  Attributes?: { [key: string]: string[] };

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>A unique identifier that's generated each time the endpoint is updated.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace PublicEndpoint {
  export const filterSensitiveLog = (obj: PublicEndpoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PublicEndpoint => __isa(o, "PublicEndpoint");
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface PushNotificationTemplateRequest {
  __type?: "PushNotificationTemplateRequest";
  /**
   * <p>The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  ADM?: AndroidPushNotificationTemplate;

  /**
   * <p>The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  APNS?: APNSPushNotificationTemplate;

  /**
   * <p>The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  Baidu?: AndroidPushNotificationTemplate;

  /**
   * <p>The default message template to use for push notification channels.</p>
   */
  Default?: DefaultPushNotificationTemplate;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  GCM?: AndroidPushNotificationTemplate;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PushNotificationTemplateRequest {
  export const filterSensitiveLog = (obj: PushNotificationTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PushNotificationTemplateRequest => __isa(o, "PushNotificationTemplateRequest");
}

/**
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface PushNotificationTemplateResponse {
  __type?: "PushNotificationTemplateResponse";
  /**
   * <p>The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  ADM?: AndroidPushNotificationTemplate;

  /**
   * <p>The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  APNS?: APNSPushNotificationTemplate;

  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  Baidu?: AndroidPushNotificationTemplate;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The default message template that's used for push notification channels.</p>
   */
  Default?: DefaultPushNotificationTemplate;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  GCM?: AndroidPushNotificationTemplate;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For a push notification template, this value is PUSH.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PushNotificationTemplateResponse {
  export const filterSensitiveLog = (obj: PushNotificationTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PushNotificationTemplateResponse => __isa(o, "PushNotificationTemplateResponse");
}

export interface PutEventsRequest {
  __type?: "PutEventsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of events to process.</p>
   */
  EventsRequest: EventsRequest | undefined;
}

export namespace PutEventsRequest {
  export const filterSensitiveLog = (obj: PutEventsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventsRequest => __isa(o, "PutEventsRequest");
}

export interface PutEventsResponse {
  __type?: "PutEventsResponse";
  /**
   * <p>Provides information about endpoints and the events that they're associated with.</p>
   */
  EventsResponse: EventsResponse | undefined;
}

export namespace PutEventsResponse {
  export const filterSensitiveLog = (obj: PutEventsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventsResponse => __isa(o, "PutEventsResponse");
}

export interface PutEventStreamRequest {
  __type?: "PutEventStreamRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
   */
  WriteEventStream: WriteEventStream | undefined;
}

export namespace PutEventStreamRequest {
  export const filterSensitiveLog = (obj: PutEventStreamRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventStreamRequest => __isa(o, "PutEventStreamRequest");
}

export interface PutEventStreamResponse {
  __type?: "PutEventStreamResponse";
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace PutEventStreamResponse {
  export const filterSensitiveLog = (obj: PutEventStreamResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventStreamResponse => __isa(o, "PutEventStreamResponse");
}

/**
 * <p>Specifies the start and end times that define a time range when messages aren't sent to endpoints.</p>
 */
export interface QuietTime {
  __type?: "QuietTime";
  /**
   * <p>The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   */
  End?: string;

  /**
   * <p>The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   */
  Start?: string;
}

export namespace QuietTime {
  export const filterSensitiveLog = (obj: QuietTime): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QuietTime => __isa(o, "QuietTime");
}

/**
 * <p>Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
 */
export interface RandomSplitActivity {
  __type?: "RandomSplitActivity";
  /**
   * <p>The paths for the activity, including the percentage of participants to enter each path and the activity to perform for each path.</p>
   */
  Branches?: RandomSplitEntry[];
}

export namespace RandomSplitActivity {
  export const filterSensitiveLog = (obj: RandomSplitActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RandomSplitActivity => __isa(o, "RandomSplitActivity");
}

/**
 * <p>Specifies the settings for a path in a random split activity in a journey.</p>
 */
export interface RandomSplitEntry {
  __type?: "RandomSplitEntry";
  /**
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   */
  NextActivity?: string;

  /**
   * <p>The percentage of participants to send down the activity path.</p> <p>To determine which participants are sent down each path, Amazon Pinpoint applies a probability-based algorithm to the percentages that you specify for the paths. Therefore, the actual percentage of participants who are sent down a path may not be equal to the percentage that you specify.</p>
   */
  Percentage?: number;
}

export namespace RandomSplitEntry {
  export const filterSensitiveLog = (obj: RandomSplitEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RandomSplitEntry => __isa(o, "RandomSplitEntry");
}

/**
 * <p>Specifies the contents of an email message, represented as a raw MIME message.</p>
 */
export interface RawEmail {
  __type?: "RawEmail";
  /**
   * <p>The email message, represented as a raw MIME message. The entire message must be base64 encoded.</p>
   */
  Data?: Uint8Array;
}

export namespace RawEmail {
  export const filterSensitiveLog = (obj: RawEmail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RawEmail => __isa(o, "RawEmail");
}

/**
 * <p>Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface RecencyDimension {
  __type?: "RecencyDimension";
  /**
   * <p>The duration to use when determining whether an endpoint is active or inactive.</p>
   */
  Duration: Duration | string | undefined;

  /**
   * <p>The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.</p>
   */
  RecencyType: RecencyType | string | undefined;
}

export namespace RecencyDimension {
  export const filterSensitiveLog = (obj: RecencyDimension): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecencyDimension => __isa(o, "RecencyDimension");
}

export enum RecencyType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface RemoveAttributesRequest {
  __type?: "RemoveAttributesRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
   */
  AttributeType: string | undefined;

  /**
   * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
   */
  UpdateAttributesRequest: UpdateAttributesRequest | undefined;
}

export namespace RemoveAttributesRequest {
  export const filterSensitiveLog = (obj: RemoveAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemoveAttributesRequest => __isa(o, "RemoveAttributesRequest");
}

export interface RemoveAttributesResponse {
  __type?: "RemoveAttributesResponse";
  /**
   * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
   */
  AttributesResource: AttributesResource | undefined;
}

export namespace RemoveAttributesResponse {
  export const filterSensitiveLog = (obj: RemoveAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemoveAttributesResponse => __isa(o, "RemoveAttributesResponse");
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface ResultRow {
  __type?: "ResultRow";
  /**
   * <p>An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.</p>
   */
  GroupedBys: ResultRowValue[] | undefined;

  /**
   * <p>An array of objects that provides pre-aggregated values for a standard metric that applies to an application, campaign, or journey.</p>
   */
  Values: ResultRowValue[] | undefined;
}

export namespace ResultRow {
  export const filterSensitiveLog = (obj: ResultRow): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultRow => __isa(o, "ResultRow");
}

/**
 * <p>Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface ResultRowValue {
  __type?: "ResultRowValue";
  /**
   * <p>The friendly name of the metric whose value is specified by the Value property.</p>
   */
  Key: string | undefined;

  /**
   * <p>The data type of the value specified by the Value property.</p>
   */
  Type: string | undefined;

  /**
   * <p>In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).</p>
   */
  Value: string | undefined;
}

export namespace ResultRowValue {
  export const filterSensitiveLog = (obj: ResultRowValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultRowValue => __isa(o, "ResultRowValue");
}

/**
 * <p>Specifies the schedule settings for a campaign.</p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p>The scheduled time, in ISO 8601 format, when the campaign ended or will end.</p>
   */
  EndTime?: string;

  /**
   * <p>The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.</p>
   */
  EventFilter?: CampaignEventFilter;

  /**
   * <p>Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.</p>
   */
  Frequency?: Frequency | string;

  /**
   * <p>Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.</p>
   */
  IsLocalTime?: boolean;

  /**
   * <p>The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign.</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign.</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * <p>The scheduled time, in ISO 8601 format, when the campaign began or will begin.</p>
   */
  StartTime: string | undefined;

  /**
   * <p>The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05,
   *                   UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06,
   *                   UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.</p>
   */
  Timezone?: string;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Schedule => __isa(o, "Schedule");
}

/**
 * <p>Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface SegmentBehaviors {
  __type?: "SegmentBehaviors";
  /**
   * <p>The dimension settings that are based on how recently an endpoint was active.</p>
   */
  Recency?: RecencyDimension;
}

export namespace SegmentBehaviors {
  export const filterSensitiveLog = (obj: SegmentBehaviors): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentBehaviors => __isa(o, "SegmentBehaviors");
}

/**
 * <p>Specifies a segment to associate with an activity in a journey.</p>
 */
export interface SegmentCondition {
  __type?: "SegmentCondition";
  /**
   * <p>The unique identifier for the segment to associate with the activity.</p>
   */
  SegmentId: string | undefined;
}

export namespace SegmentCondition {
  export const filterSensitiveLog = (obj: SegmentCondition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentCondition => __isa(o, "SegmentCondition");
}

/**
 * <p>Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.</p>
 */
export interface SegmentDemographics {
  __type?: "SegmentDemographics";
  /**
   * <p>The app version criteria for the segment.</p>
   */
  AppVersion?: SetDimension;

  /**
   * <p>The channel criteria for the segment.</p>
   */
  Channel?: SetDimension;

  /**
   * <p>The device type criteria for the segment.</p>
   */
  DeviceType?: SetDimension;

  /**
   * <p>The device make criteria for the segment.</p>
   */
  Make?: SetDimension;

  /**
   * <p>The device model criteria for the segment.</p>
   */
  Model?: SetDimension;

  /**
   * <p>The device platform criteria for the segment.</p>
   */
  Platform?: SetDimension;
}

export namespace SegmentDemographics {
  export const filterSensitiveLog = (obj: SegmentDemographics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentDemographics => __isa(o, "SegmentDemographics");
}

/**
 * <p>Specifies the dimension settings for a segment.</p>
 */
export interface SegmentDimensions {
  __type?: "SegmentDimensions";
  /**
   * <p>One or more custom attributes to use as criteria for the segment.</p>
   */
  Attributes?: { [key: string]: AttributeDimension };

  /**
   * <p>The behavior-based criteria, such as how recently users have used your app, for the segment.</p>
   */
  Behavior?: SegmentBehaviors;

  /**
   * <p>The demographic-based criteria, such as device platform, for the segment.</p>
   */
  Demographic?: SegmentDemographics;

  /**
   * <p>The location-based criteria, such as region or GPS coordinates, for the segment.</p>
   */
  Location?: SegmentLocation;

  /**
   * <p>One or more custom metrics to use as criteria for the segment.</p>
   */
  Metrics?: { [key: string]: MetricDimension };

  /**
   * <p>One or more custom user attributes to use as criteria for the segment.</p>
   */
  UserAttributes?: { [key: string]: AttributeDimension };
}

export namespace SegmentDimensions {
  export const filterSensitiveLog = (obj: SegmentDimensions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentDimensions => __isa(o, "SegmentDimensions");
}

/**
 * <p>Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.</p>
 */
export interface SegmentGroup {
  __type?: "SegmentGroup";
  /**
   * <p>An array that defines the dimensions for the segment.</p>
   */
  Dimensions?: SegmentDimensions[];

  /**
   * <p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>
   */
  SourceSegments?: SegmentReference[];

  /**
   * <p>Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.</p>
   */
  Type?: Type | string;
}

export namespace SegmentGroup {
  export const filterSensitiveLog = (obj: SegmentGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentGroup => __isa(o, "SegmentGroup");
}

/**
 * <p>Specifies the settings that define the relationships between segment groups for a segment.</p>
 */
export interface SegmentGroupList {
  __type?: "SegmentGroupList";
  /**
   * <p>An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.</p>
   */
  Groups?: SegmentGroup[];

  /**
   * <p>Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.</p>
   */
  Include?: Include | string;
}

export namespace SegmentGroupList {
  export const filterSensitiveLog = (obj: SegmentGroupList): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentGroupList => __isa(o, "SegmentGroupList");
}

/**
 * <p>Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.</p>
 */
export interface SegmentImportResource {
  __type?: "SegmentImportResource";
  /**
   * <p>The number of channel types in the endpoint definitions that were imported to create the segment.</p>
   */
  ChannelCounts?: { [key: string]: number };

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId: string | undefined;

  /**
   * <p>The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.</p>
   */
  S3Url: string | undefined;

  /**
   * <p>The number of endpoint definitions that were imported successfully to create the segment.</p>
   */
  Size: number | undefined;
}

export namespace SegmentImportResource {
  export const filterSensitiveLog = (obj: SegmentImportResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentImportResource => __isa(o, "SegmentImportResource");
}

/**
 * <p>Specifies geographical dimension settings for a segment.</p>
 */
export interface SegmentLocation {
  __type?: "SegmentLocation";
  /**
   * <p>The country or region code, in ISO 3166-1 alpha-2 format, for the segment.</p>
   */
  Country?: SetDimension;

  /**
   * <p>The GPS location and range for the segment.</p>
   */
  GPSPoint?: GPSPointDimension;
}

export namespace SegmentLocation {
  export const filterSensitiveLog = (obj: SegmentLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentLocation => __isa(o, "SegmentLocation");
}

/**
 * <p>Specifies the segment identifier and version of a segment.</p>
 */
export interface SegmentReference {
  __type?: "SegmentReference";
  /**
   * <p>The unique identifier for the segment.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

export namespace SegmentReference {
  export const filterSensitiveLog = (obj: SegmentReference): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentReference => __isa(o, "SegmentReference");
}

/**
 * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
 */
export interface SegmentResponse {
  __type?: "SegmentResponse";
  /**
   * <p>The unique identifier for the application that the segment is associated with.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the segment.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time when the segment was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The dimension settings for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  Id: string | undefined;

  /**
   * <p>The settings for the import job that's associated with the segment.</p>
   */
  ImportDefinition?: SegmentImportResource;

  /**
   * <p>The date and time when the segment was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * <p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>
   */
  SegmentType: SegmentType | string | undefined;

  /**
   * <p>The version number of the segment.</p>
   */
  Version?: number;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SegmentResponse {
  export const filterSensitiveLog = (obj: SegmentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentResponse => __isa(o, "SegmentResponse");
}

/**
 * <p>Provides information about all the segments that are associated with an application.</p>
 */
export interface SegmentsResponse {
  __type?: "SegmentsResponse";
  /**
   * <p>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</p>
   */
  Item: SegmentResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace SegmentsResponse {
  export const filterSensitiveLog = (obj: SegmentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SegmentsResponse => __isa(o, "SegmentsResponse");
}

export enum SegmentType {
  DIMENSIONAL = "DIMENSIONAL",
  IMPORT = "IMPORT",
}

export interface SendMessagesRequest {
  __type?: "SendMessagesRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message.</p>
   */
  MessageRequest: MessageRequest | undefined;
}

export namespace SendMessagesRequest {
  export const filterSensitiveLog = (obj: SendMessagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendMessagesRequest => __isa(o, "SendMessagesRequest");
}

export interface SendMessagesResponse {
  __type?: "SendMessagesResponse";
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   */
  MessageResponse: MessageResponse | undefined;
}

export namespace SendMessagesResponse {
  export const filterSensitiveLog = (obj: SendMessagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendMessagesResponse => __isa(o, "SendMessagesResponse");
}

/**
 * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
 */
export interface SendUsersMessageRequest {
  __type?: "SendUsersMessageRequest";
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;

  /**
   * <p>A map that associates user IDs with EndpointSendConfiguration objects. You can use an EndpointSendConfiguration object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   */
  Users: { [key: string]: EndpointSendConfiguration } | undefined;
}

export namespace SendUsersMessageRequest {
  export const filterSensitiveLog = (obj: SendUsersMessageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendUsersMessageRequest => __isa(o, "SendUsersMessageRequest");
}

/**
 * <p>Provides information about which users and endpoints a message was sent to.</p>
 */
export interface SendUsersMessageResponse {
  __type?: "SendUsersMessageResponse";
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier that was assigned to the message request.</p>
   */
  RequestId?: string;

  /**
   * <p>An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.</p>
   */
  Result?: { [key: string]: { [key: string]: EndpointMessageResult } };
}

export namespace SendUsersMessageResponse {
  export const filterSensitiveLog = (obj: SendUsersMessageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendUsersMessageResponse => __isa(o, "SendUsersMessageResponse");
}

export interface SendUsersMessagesRequest {
  __type?: "SendUsersMessagesRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
   */
  SendUsersMessageRequest: SendUsersMessageRequest | undefined;
}

export namespace SendUsersMessagesRequest {
  export const filterSensitiveLog = (obj: SendUsersMessagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendUsersMessagesRequest => __isa(o, "SendUsersMessagesRequest");
}

export interface SendUsersMessagesResponse {
  __type?: "SendUsersMessagesResponse";
  /**
   * <p>Provides information about which users and endpoints a message was sent to.</p>
   */
  SendUsersMessageResponse: SendUsersMessageResponse | undefined;
}

export namespace SendUsersMessagesResponse {
  export const filterSensitiveLog = (obj: SendUsersMessagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendUsersMessagesResponse => __isa(o, "SendUsersMessagesResponse");
}

/**
 * <p>Provides information about a session.</p>
 */
export interface Session {
  __type?: "Session";
  /**
   * <p>The duration of the session, in milliseconds.</p>
   */
  Duration?: number;

  /**
   * <p>The unique identifier for the session.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the session began.</p>
   */
  StartTimestamp: string | undefined;

  /**
   * <p>The date and time when the session ended.</p>
   */
  StopTimestamp?: string;
}

export namespace Session {
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Session => __isa(o, "Session");
}

/**
 * <p>Specifies the dimension type and values for a segment dimension.</p>
 */
export interface SetDimension {
  __type?: "SetDimension";
  /**
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   */
  DimensionType?: DimensionType | string;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.</p>
   */
  Values: string[] | undefined;
}

export namespace SetDimension {
  export const filterSensitiveLog = (obj: SetDimension): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SetDimension => __isa(o, "SetDimension");
}

/**
 * <p>Specifies a condition to evaluate for an activity in a journey.</p>
 */
export interface SimpleCondition {
  __type?: "SimpleCondition";
  /**
   * <p>The dimension settings for the event that's associated with the activity.</p>
   */
  EventCondition?: EventCondition;

  /**
   * <p>The segment that's associated with the activity.</p>
   */
  SegmentCondition?: SegmentCondition;

  /**
   * <p>The dimension settings for the segment that's associated with the activity.</p>
   */
  SegmentDimensions?: SegmentDimensions;
}

export namespace SimpleCondition {
  export const filterSensitiveLog = (obj: SimpleCondition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleCondition => __isa(o, "SimpleCondition");
}

/**
 * <p>Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.</p>
 */
export interface SimpleEmail {
  __type?: "SimpleEmail";
  /**
   * <p>The body of the email message, in HTML format. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: SimpleEmailPart;

  /**
   * <p>The subject line, or title, of the email.</p>
   */
  Subject?: SimpleEmailPart;

  /**
   * <p>The body of the email message, in plain text format. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: SimpleEmailPart;
}

export namespace SimpleEmail {
  export const filterSensitiveLog = (obj: SimpleEmail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleEmail => __isa(o, "SimpleEmail");
}

/**
 * <p>Specifies the subject or body of an email message, represented as textual email data and the applicable character set.</p>
 */
export interface SimpleEmailPart {
  __type?: "SimpleEmailPart";
  /**
   * <p>The applicable character set for the message content.</p>
   */
  Charset?: string;

  /**
   * <p>The textual data of the message content.</p>
   */
  Data?: string;
}

export namespace SimpleEmailPart {
  export const filterSensitiveLog = (obj: SimpleEmailPart): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleEmailPart => __isa(o, "SimpleEmailPart");
}

/**
 * <p>Specifies the status and settings of the SMS channel for an application.</p>
 */
export interface SMSChannelRequest {
  __type?: "SMSChannelRequest";
  /**
   * <p>Specifies whether to enable the SMS channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The identity that you want to display on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code that you want to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;
}

export namespace SMSChannelRequest {
  export const filterSensitiveLog = (obj: SMSChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SMSChannelRequest => __isa(o, "SMSChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the SMS channel for an application.</p>
 */
export interface SMSChannelResponse {
  __type?: "SMSChannelResponse";
  /**
   * <p>The unique identifier for the application that the SMS channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the SMS channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the SMS channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the SMS channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The maximum number of promotional messages that you can send through the SMS channel each second.</p>
   */
  PromotionalMessagesPerSecond?: number;

  /**
   * <p>The identity that displays on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;

  /**
   * <p>The maximum number of transactional messages that you can send through the SMS channel each second.</p>
   */
  TransactionalMessagesPerSecond?: number;

  /**
   * <p>The current version of the SMS channel.</p>
   */
  Version?: number;
}

export namespace SMSChannelResponse {
  export const filterSensitiveLog = (obj: SMSChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SMSChannelResponse => __isa(o, "SMSChannelResponse");
}

/**
 * <p>Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.</p>
 */
export interface SMSMessage {
  __type?: "SMSMessage";
  /**
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * <p>The SMS program name that you provided to AWS Support when you requested your dedicated number.</p>
   */
  Keyword?: string;

  /**
   * <p>The SMS message type. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message is not critical or time-sensitive, such as a marketing message.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The number to send the SMS message from. This value should be one of the dedicated long or short codes that's assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message and sends the message from that code.</p>
   */
  OriginationNumber?: string;

  /**
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.</p>
   */
  SenderId?: string;

  /**
   * <p>The message variables to use in the SMS message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };
}

export namespace SMSMessage {
  export const filterSensitiveLog = (obj: SMSMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SMSMessage => __isa(o, "SMSMessage");
}

/**
 * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 */
export interface SMSTemplateRequest {
  __type?: "SMSTemplateRequest";
  /**
   * <p>The message body to use in text messages that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SMSTemplateRequest {
  export const filterSensitiveLog = (obj: SMSTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SMSTemplateRequest => __isa(o, "SMSTemplateRequest");
}

/**
 * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 */
export interface SMSTemplateResponse {
  __type?: "SMSTemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The message body that's used in text messages that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For an SMS template, this value is SMS.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SMSTemplateResponse {
  export const filterSensitiveLog = (obj: SMSTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SMSTemplateResponse => __isa(o, "SMSTemplateResponse");
}

export enum SourceType {
  ALL = "ALL",
  ANY = "ANY",
  NONE = "NONE",
}

/**
 * <p>Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.</p>
 */
export interface StartCondition {
  __type?: "StartCondition";
  /**
   * <p>The custom description of the condition.</p>
   */
  Description?: string;

  /**
   * <p>The segment that's associated with the first activity in the journey. This segment determines which users are participants in the journey.</p>
   */
  SegmentStartCondition?: SegmentCondition;
}

export namespace StartCondition {
  export const filterSensitiveLog = (obj: StartCondition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartCondition => __isa(o, "StartCondition");
}

export enum State {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
  COMPLETED = "COMPLETED",
  DRAFT = "DRAFT",
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, journey, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

/**
 * <p>Specifies the tags (keys and values) for an application, campaign, journey, message template, or segment.</p>
 */
export interface TagsModel {
  __type?: "TagsModel";
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, journey, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagsModel {
  export const filterSensitiveLog = (obj: TagsModel): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagsModel => __isa(o, "TagsModel");
}

/**
 * <p>Specifies the name and version of the message template to use for the message.</p>
 */
export interface Template {
  __type?: "Template";
  /**
   * <p>The name of the message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active</i> version of the template. The <i>active</i> version is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  Version?: string;
}

export namespace Template {
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Template => __isa(o, "Template");
}

/**
 * <p>Specifies which version of a message template to use as the active version of the template.</p>
 */
export interface TemplateActiveVersionRequest {
  __type?: "TemplateActiveVersionRequest";
  /**
   * <p>The unique identifier for the version of the message template to use as the active version of the template. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p>
   */
  Version?: string;
}

export namespace TemplateActiveVersionRequest {
  export const filterSensitiveLog = (obj: TemplateActiveVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplateActiveVersionRequest => __isa(o, "TemplateActiveVersionRequest");
}

/**
 * <p>Specifies the message template to use for the message, for each type of channel.</p>
 */
export interface TemplateConfiguration {
  __type?: "TemplateConfiguration";
  /**
   * <p>The email template to use for the message.</p>
   */
  EmailTemplate?: Template;

  /**
   * <p>The push notification template to use for the message.</p>
   */
  PushTemplate?: Template;

  /**
   * <p>The SMS template to use for the message.</p>
   */
  SMSTemplate?: Template;

  /**
   * <p>The voice template to use for the message.</p>
   */
  VoiceTemplate?: Template;
}

export namespace TemplateConfiguration {
  export const filterSensitiveLog = (obj: TemplateConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplateConfiguration => __isa(o, "TemplateConfiguration");
}

/**
 * <p>Provides information about a message template that's associated with your Amazon Pinpoint account.</p>
 */
export interface TemplateResponse {
  __type?: "TemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template.</p>
   */
  Version?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace TemplateResponse {
  export const filterSensitiveLog = (obj: TemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplateResponse => __isa(o, "TemplateResponse");
}

/**
 * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
 */
export interface TemplatesResponse {
  __type?: "TemplatesResponse";
  /**
   * <p>An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.</p>
   */
  Item: TemplateResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export namespace TemplatesResponse {
  export const filterSensitiveLog = (obj: TemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplatesResponse => __isa(o, "TemplatesResponse");
}

export enum TemplateType {
  EMAIL = "EMAIL",
  PUSH = "PUSH",
  SMS = "SMS",
  VOICE = "VOICE",
}

/**
 * <p>Provides information about a specific version of a message template.</p>
 */
export interface TemplateVersionResponse {
  __type?: "TemplateVersionResponse";
  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>A JSON object that specifies the default values that are used for message variables in the version of the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the version of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template. This value is an integer that Amazon Pinpoint automatically increments and assigns to each new version of a template.</p>
   */
  Version?: string;
}

export namespace TemplateVersionResponse {
  export const filterSensitiveLog = (obj: TemplateVersionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplateVersionResponse => __isa(o, "TemplateVersionResponse");
}

/**
 * <p>Provides information about all the versions of a specific message template.</p>
 */
export interface TemplateVersionsResponse {
  __type?: "TemplateVersionsResponse";
  /**
   * <p>An array of responses, one for each version of the message template.</p>
   */
  Item: TemplateVersionResponse[] | undefined;

  /**
   * <p>The message that's returned from the API for the request to retrieve information about all the versions of the message template.</p>
   */
  Message?: string;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for the request to retrieve information about all the versions of the message template.</p>
   */
  RequestID?: string;
}

export namespace TemplateVersionsResponse {
  export const filterSensitiveLog = (obj: TemplateVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TemplateVersionsResponse => __isa(o, "TemplateVersionsResponse");
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

/**
 * <p>Specifies the settings for a campaign treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
 */
export interface TreatmentResource {
  __type?: "TreatmentResource";
  /**
   * <p>The unique identifier for the treatment.</p>
   */
  Id: string | undefined;

  /**
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The allocated percentage of users (segment members) that the treatment is sent to.</p>
   */
  SizePercent: number | undefined;

  /**
   * <p>The current status of the treatment.</p>
   */
  State?: CampaignState;

  /**
   * <p>The message template to use for the treatment.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The custom description of the treatment.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of the treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentName?: string;
}

export namespace TreatmentResource {
  export const filterSensitiveLog = (obj: TreatmentResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TreatmentResource => __isa(o, "TreatmentResource");
}

export enum Type {
  ALL = "ALL",
  ANY = "ANY",
  NONE = "NONE",
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UpdateAdmChannelRequest {
  __type?: "UpdateAdmChannelRequest";
  /**
   * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelRequest: ADMChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateAdmChannelRequest {
  export const filterSensitiveLog = (obj: UpdateAdmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAdmChannelRequest => __isa(o, "UpdateAdmChannelRequest");
}

export interface UpdateAdmChannelResponse {
  __type?: "UpdateAdmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace UpdateAdmChannelResponse {
  export const filterSensitiveLog = (obj: UpdateAdmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAdmChannelResponse => __isa(o, "UpdateAdmChannelResponse");
}

export interface UpdateApnsChannelRequest {
  __type?: "UpdateApnsChannelRequest";
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelRequest: APNSChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsChannelRequest {
  export const filterSensitiveLog = (obj: UpdateApnsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsChannelRequest => __isa(o, "UpdateApnsChannelRequest");
}

export interface UpdateApnsChannelResponse {
  __type?: "UpdateApnsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace UpdateApnsChannelResponse {
  export const filterSensitiveLog = (obj: UpdateApnsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsChannelResponse => __isa(o, "UpdateApnsChannelResponse");
}

export interface UpdateApnsSandboxChannelRequest {
  __type?: "UpdateApnsSandboxChannelRequest";
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelRequest: APNSSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsSandboxChannelRequest {
  export const filterSensitiveLog = (obj: UpdateApnsSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsSandboxChannelRequest => __isa(o, "UpdateApnsSandboxChannelRequest");
}

export interface UpdateApnsSandboxChannelResponse {
  __type?: "UpdateApnsSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace UpdateApnsSandboxChannelResponse {
  export const filterSensitiveLog = (obj: UpdateApnsSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsSandboxChannelResponse => __isa(o, "UpdateApnsSandboxChannelResponse");
}

export interface UpdateApnsVoipChannelRequest {
  __type?: "UpdateApnsVoipChannelRequest";
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelRequest: APNSVoipChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsVoipChannelRequest {
  export const filterSensitiveLog = (obj: UpdateApnsVoipChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsVoipChannelRequest => __isa(o, "UpdateApnsVoipChannelRequest");
}

export interface UpdateApnsVoipChannelResponse {
  __type?: "UpdateApnsVoipChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace UpdateApnsVoipChannelResponse {
  export const filterSensitiveLog = (obj: UpdateApnsVoipChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsVoipChannelResponse => __isa(o, "UpdateApnsVoipChannelResponse");
}

export interface UpdateApnsVoipSandboxChannelRequest {
  __type?: "UpdateApnsVoipSandboxChannelRequest";
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsVoipSandboxChannelRequest {
  export const filterSensitiveLog = (obj: UpdateApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsVoipSandboxChannelRequest =>
    __isa(o, "UpdateApnsVoipSandboxChannelRequest");
}

export interface UpdateApnsVoipSandboxChannelResponse {
  __type?: "UpdateApnsVoipSandboxChannelResponse";
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace UpdateApnsVoipSandboxChannelResponse {
  export const filterSensitiveLog = (obj: UpdateApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApnsVoipSandboxChannelResponse =>
    __isa(o, "UpdateApnsVoipSandboxChannelResponse");
}

export interface UpdateApplicationSettingsRequest {
  __type?: "UpdateApplicationSettingsRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the default settings for an application.</p>
   */
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest | undefined;
}

export namespace UpdateApplicationSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateApplicationSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApplicationSettingsRequest => __isa(o, "UpdateApplicationSettingsRequest");
}

export interface UpdateApplicationSettingsResponse {
  __type?: "UpdateApplicationSettingsResponse";
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

export namespace UpdateApplicationSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateApplicationSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateApplicationSettingsResponse => __isa(o, "UpdateApplicationSettingsResponse");
}

/**
 * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
 */
export interface UpdateAttributesRequest {
  __type?: "UpdateAttributesRequest";
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   */
  Blacklist?: string[];
}

export namespace UpdateAttributesRequest {
  export const filterSensitiveLog = (obj: UpdateAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAttributesRequest => __isa(o, "UpdateAttributesRequest");
}

export interface UpdateBaiduChannelRequest {
  __type?: "UpdateBaiduChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelRequest: BaiduChannelRequest | undefined;
}

export namespace UpdateBaiduChannelRequest {
  export const filterSensitiveLog = (obj: UpdateBaiduChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBaiduChannelRequest => __isa(o, "UpdateBaiduChannelRequest");
}

export interface UpdateBaiduChannelResponse {
  __type?: "UpdateBaiduChannelResponse";
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace UpdateBaiduChannelResponse {
  export const filterSensitiveLog = (obj: UpdateBaiduChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBaiduChannelResponse => __isa(o, "UpdateBaiduChannelResponse");
}

export interface UpdateCampaignRequest {
  __type?: "UpdateCampaignRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

export namespace UpdateCampaignRequest {
  export const filterSensitiveLog = (obj: UpdateCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCampaignRequest => __isa(o, "UpdateCampaignRequest");
}

export interface UpdateCampaignResponse {
  __type?: "UpdateCampaignResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace UpdateCampaignResponse {
  export const filterSensitiveLog = (obj: UpdateCampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCampaignResponse => __isa(o, "UpdateCampaignResponse");
}

export interface UpdateEmailChannelRequest {
  __type?: "UpdateEmailChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the email channel for an application.</p>
   */
  EmailChannelRequest: EmailChannelRequest | undefined;
}

export namespace UpdateEmailChannelRequest {
  export const filterSensitiveLog = (obj: UpdateEmailChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailChannelRequest => __isa(o, "UpdateEmailChannelRequest");
}

export interface UpdateEmailChannelResponse {
  __type?: "UpdateEmailChannelResponse";
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace UpdateEmailChannelResponse {
  export const filterSensitiveLog = (obj: UpdateEmailChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailChannelResponse => __isa(o, "UpdateEmailChannelResponse");
}

export interface UpdateEmailTemplateRequest {
  __type?: "UpdateEmailTemplateRequest";
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to the latest existing version of the template.</p><p> If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdateEmailTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailTemplateRequest => __isa(o, "UpdateEmailTemplateRequest");
}

export interface UpdateEmailTemplateResponse {
  __type?: "UpdateEmailTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEmailTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailTemplateResponse => __isa(o, "UpdateEmailTemplateResponse");
}

export interface UpdateEndpointRequest {
  __type?: "UpdateEndpointRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>Specifies the channel type and other settings for an endpoint.</p>
   */
  EndpointRequest: EndpointRequest | undefined;
}

export namespace UpdateEndpointRequest {
  export const filterSensitiveLog = (obj: UpdateEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointRequest => __isa(o, "UpdateEndpointRequest");
}

export interface UpdateEndpointResponse {
  __type?: "UpdateEndpointResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEndpointResponse {
  export const filterSensitiveLog = (obj: UpdateEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointResponse => __isa(o, "UpdateEndpointResponse");
}

export interface UpdateEndpointsBatchRequest {
  __type?: "UpdateEndpointsBatchRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
   */
  EndpointBatchRequest: EndpointBatchRequest | undefined;
}

export namespace UpdateEndpointsBatchRequest {
  export const filterSensitiveLog = (obj: UpdateEndpointsBatchRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointsBatchRequest => __isa(o, "UpdateEndpointsBatchRequest");
}

export interface UpdateEndpointsBatchResponse {
  __type?: "UpdateEndpointsBatchResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEndpointsBatchResponse {
  export const filterSensitiveLog = (obj: UpdateEndpointsBatchResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointsBatchResponse => __isa(o, "UpdateEndpointsBatchResponse");
}

export interface UpdateGcmChannelRequest {
  __type?: "UpdateGcmChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelRequest: GCMChannelRequest | undefined;
}

export namespace UpdateGcmChannelRequest {
  export const filterSensitiveLog = (obj: UpdateGcmChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGcmChannelRequest => __isa(o, "UpdateGcmChannelRequest");
}

export interface UpdateGcmChannelResponse {
  __type?: "UpdateGcmChannelResponse";
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace UpdateGcmChannelResponse {
  export const filterSensitiveLog = (obj: UpdateGcmChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGcmChannelResponse => __isa(o, "UpdateGcmChannelResponse");
}

export interface UpdateJourneyRequest {
  __type?: "UpdateJourneyRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

export namespace UpdateJourneyRequest {
  export const filterSensitiveLog = (obj: UpdateJourneyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateJourneyRequest => __isa(o, "UpdateJourneyRequest");
}

export interface UpdateJourneyResponse {
  __type?: "UpdateJourneyResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace UpdateJourneyResponse {
  export const filterSensitiveLog = (obj: UpdateJourneyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateJourneyResponse => __isa(o, "UpdateJourneyResponse");
}

export interface UpdateJourneyStateRequest {
  __type?: "UpdateJourneyStateRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Changes the status of a journey.</p>
   */
  JourneyStateRequest: JourneyStateRequest | undefined;
}

export namespace UpdateJourneyStateRequest {
  export const filterSensitiveLog = (obj: UpdateJourneyStateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateJourneyStateRequest => __isa(o, "UpdateJourneyStateRequest");
}

export interface UpdateJourneyStateResponse {
  __type?: "UpdateJourneyStateResponse";
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace UpdateJourneyStateResponse {
  export const filterSensitiveLog = (obj: UpdateJourneyStateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateJourneyStateResponse => __isa(o, "UpdateJourneyStateResponse");
}

export interface UpdatePushTemplateRequest {
  __type?: "UpdatePushTemplateRequest";
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to the latest existing version of the template.</p><p> If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdatePushTemplateRequest {
  export const filterSensitiveLog = (obj: UpdatePushTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePushTemplateRequest => __isa(o, "UpdatePushTemplateRequest");
}

export interface UpdatePushTemplateResponse {
  __type?: "UpdatePushTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdatePushTemplateResponse {
  export const filterSensitiveLog = (obj: UpdatePushTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePushTemplateResponse => __isa(o, "UpdatePushTemplateResponse");
}

export interface UpdateSegmentRequest {
  __type?: "UpdateSegmentRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

export namespace UpdateSegmentRequest {
  export const filterSensitiveLog = (obj: UpdateSegmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSegmentRequest => __isa(o, "UpdateSegmentRequest");
}

export interface UpdateSegmentResponse {
  __type?: "UpdateSegmentResponse";
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace UpdateSegmentResponse {
  export const filterSensitiveLog = (obj: UpdateSegmentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSegmentResponse => __isa(o, "UpdateSegmentResponse");
}

export interface UpdateSmsChannelRequest {
  __type?: "UpdateSmsChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelRequest: SMSChannelRequest | undefined;
}

export namespace UpdateSmsChannelRequest {
  export const filterSensitiveLog = (obj: UpdateSmsChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSmsChannelRequest => __isa(o, "UpdateSmsChannelRequest");
}

export interface UpdateSmsChannelResponse {
  __type?: "UpdateSmsChannelResponse";
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace UpdateSmsChannelResponse {
  export const filterSensitiveLog = (obj: UpdateSmsChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSmsChannelResponse => __isa(o, "UpdateSmsChannelResponse");
}

export interface UpdateSmsTemplateRequest {
  __type?: "UpdateSmsTemplateRequest";
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to the latest existing version of the template.</p><p> If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdateSmsTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateSmsTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSmsTemplateRequest => __isa(o, "UpdateSmsTemplateRequest");
}

export interface UpdateSmsTemplateResponse {
  __type?: "UpdateSmsTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateSmsTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateSmsTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSmsTemplateResponse => __isa(o, "UpdateSmsTemplateResponse");
}

export interface UpdateTemplateActiveVersionRequest {
  __type?: "UpdateTemplateActiveVersionRequest";
  /**
   * <p>Specifies which version of a message template to use as the active version of the template.</p>
   */
  TemplateActiveVersionRequest: TemplateActiveVersionRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

export namespace UpdateTemplateActiveVersionRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateActiveVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateTemplateActiveVersionRequest =>
    __isa(o, "UpdateTemplateActiveVersionRequest");
}

export interface UpdateTemplateActiveVersionResponse {
  __type?: "UpdateTemplateActiveVersionResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateTemplateActiveVersionResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateActiveVersionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateTemplateActiveVersionResponse =>
    __isa(o, "UpdateTemplateActiveVersionResponse");
}

export interface UpdateVoiceChannelRequest {
  __type?: "UpdateVoiceChannelRequest";
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelRequest: VoiceChannelRequest | undefined;
}

export namespace UpdateVoiceChannelRequest {
  export const filterSensitiveLog = (obj: UpdateVoiceChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceChannelRequest => __isa(o, "UpdateVoiceChannelRequest");
}

export interface UpdateVoiceChannelResponse {
  __type?: "UpdateVoiceChannelResponse";
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace UpdateVoiceChannelResponse {
  export const filterSensitiveLog = (obj: UpdateVoiceChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceChannelResponse => __isa(o, "UpdateVoiceChannelResponse");
}

export interface UpdateVoiceTemplateRequest {
  __type?: "UpdateVoiceTemplateRequest";
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to the latest existing version of the template.</p><p> If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier of an existing template version. If specified for an update operation, this value must match the identifier of the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

export namespace UpdateVoiceTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateVoiceTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceTemplateRequest => __isa(o, "UpdateVoiceTemplateRequest");
}

export interface UpdateVoiceTemplateResponse {
  __type?: "UpdateVoiceTemplateResponse";
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateVoiceTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateVoiceTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceTemplateResponse => __isa(o, "UpdateVoiceTemplateResponse");
}

/**
 * <p>Specifies the status and settings of the voice channel for an application.</p>
 */
export interface VoiceChannelRequest {
  __type?: "VoiceChannelRequest";
  /**
   * <p>Specifies whether to enable the voice channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace VoiceChannelRequest {
  export const filterSensitiveLog = (obj: VoiceChannelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceChannelRequest => __isa(o, "VoiceChannelRequest");
}

/**
 * <p>Provides information about the status and settings of the voice channel for an application.</p>
 */
export interface VoiceChannelResponse {
  __type?: "VoiceChannelResponse";
  /**
   * <p>The unique identifier for the application that the voice channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the voice channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the voice channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the voice channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the voice channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the voice channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the voice channel.</p>
   */
  Version?: number;
}

export namespace VoiceChannelResponse {
  export const filterSensitiveLog = (obj: VoiceChannelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceChannelResponse => __isa(o, "VoiceChannelResponse");
}

/**
 * <p>Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.</p>
 */
export interface VoiceMessage {
  __type?: "VoiceMessage";
  /**
   * <p>The text of the script to use for the voice message.</p>
   */
  Body?: string;

  /**
   * <p>The code for the language to use when synthesizing the text of the message script. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The long code to send the voice message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code in E.164 format, for example +12065550100, to ensure prompt and accurate delivery of the message.</p>
   */
  OriginationNumber?: string;

  /**
   * <p>The default message variables to use in the voice message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: string[] };

  /**
   * <p>The name of the voice to use when delivering the message. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

export namespace VoiceMessage {
  export const filterSensitiveLog = (obj: VoiceMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceMessage => __isa(o, "VoiceMessage");
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 */
export interface VoiceTemplateRequest {
  __type?: "VoiceTemplateRequest";
  /**
   * <p>The text of the script to use in messages that are based on the message template, in plain text format.</p>
   */
  Body?: string;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace VoiceTemplateRequest {
  export const filterSensitiveLog = (obj: VoiceTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceTemplateRequest => __isa(o, "VoiceTemplateRequest");
}

/**
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 */
export interface VoiceTemplateResponse {
  __type?: "VoiceTemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The text of the script that's used in messages that are based on the message template, in plain text format.</p>
   */
  Body?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The code for the language that's used when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For a voice template, this value is VOICE.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;

  /**
   * <p>The name of the voice that's used when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace VoiceTemplateResponse {
  export const filterSensitiveLog = (obj: VoiceTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceTemplateResponse => __isa(o, "VoiceTemplateResponse");
}

/**
 * <p>Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
 */
export interface WaitActivity {
  __type?: "WaitActivity";
  /**
   * <p>The unique identifier for the next activity to perform, after performing the wait activity.</p>
   */
  NextActivity?: string;

  /**
   * <p>The amount of time to wait or the date and time when the activity moves participants to the next activity in the journey.</p>
   */
  WaitTime?: WaitTime;
}

export namespace WaitActivity {
  export const filterSensitiveLog = (obj: WaitActivity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WaitActivity => __isa(o, "WaitActivity");
}

/**
 * <p>Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.</p>
 */
export interface WaitTime {
  __type?: "WaitTime";
  /**
   * <p>The amount of time to wait, as a duration in ISO 8601 format, before determining whether the activity's conditions have been met or moving participants to the next activity in the journey.</p>
   */
  WaitFor?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint determines whether the activity's conditions have been met or the activity moves participants to the next activity in the journey.</p>
   */
  WaitUntil?: string;
}

export namespace WaitTime {
  export const filterSensitiveLog = (obj: WaitTime): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WaitTime => __isa(o, "WaitTime");
}

/**
 * <p>Specifies the default settings for an application.</p>
 */
export interface WriteApplicationSettingsRequest {
  __type?: "WriteApplicationSettingsRequest";
  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application. To override these settings for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom Lambda function settings for the campaign.</p>
   */
  CampaignHook?: CampaignHook;

  /**
   * <p>Specifies whether to enable application-related alarms in Amazon CloudWatch.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The default sending limits for campaigns in the application. To override these limits for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The default quiet time for campaigns and journeys in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>
   */
  QuietTime?: QuietTime;
}

export namespace WriteApplicationSettingsRequest {
  export const filterSensitiveLog = (obj: WriteApplicationSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteApplicationSettingsRequest => __isa(o, "WriteApplicationSettingsRequest");
}

/**
 * <p>Specifies the configuration and other settings for a campaign.</p>
 */
export interface WriteCampaignRequest {
  __type?: "WriteCampaignRequest";
  /**
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   */
  AdditionalTreatments?: WriteTreatmentResource[];

  /**
   * <p>A custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * <p>Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by setting this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>The custom name of the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The unique identifier for the segment to associate with the campaign.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to associate with the campaign.</p>
   */
  SegmentVersion?: number;

  /**
   * <p>The message template to use for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>A custom description of a variation of the campaign to use for A/B testing.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of a variation of the campaign to use for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace WriteCampaignRequest {
  export const filterSensitiveLog = (obj: WriteCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteCampaignRequest => __isa(o, "WriteCampaignRequest");
}

/**
 * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
 */
export interface WriteEventStream {
  __type?: "WriteEventStream";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

export namespace WriteEventStream {
  export const filterSensitiveLog = (obj: WriteEventStream): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteEventStream => __isa(o, "WriteEventStream");
}

/**
 * <p>Specifies the configuration and other settings for a journey.</p>
 */
export interface WriteJourneyRequest {
  __type?: "WriteJourneyRequest";
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 128 characters. The characters must be alphanumeric characters.</p>
   */
  Activities?: { [key: string]: Activity };

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.</p>
   */
  LocalTime?: boolean;

  /**
   * <p>The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.</p>
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * <p>The unique identifier for the first activity in the journey. An activity identifier can contain a maximum of 128 characters. The characters must be alphanumeric characters.</p>
   */
  StartActivity?: string;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * <p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>The CANCELLED, COMPLETED, and CLOSED values are not supported in requests to create or update a journey. To cancel a journey, use the <link  linkend="apps-application-id-journeys-journey-id-state">Journey State</link> resource.</p>
   */
  State?: State | string;
}

export namespace WriteJourneyRequest {
  export const filterSensitiveLog = (obj: WriteJourneyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteJourneyRequest => __isa(o, "WriteJourneyRequest");
}

/**
 * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
 */
export interface WriteSegmentRequest {
  __type?: "WriteSegmentRequest";
  /**
   * <p>The criteria that define the dimensions for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}

export namespace WriteSegmentRequest {
  export const filterSensitiveLog = (obj: WriteSegmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteSegmentRequest => __isa(o, "WriteSegmentRequest");
}

/**
 * <p>Specifies the settings for a campaign treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
 */
export interface WriteTreatmentResource {
  __type?: "WriteTreatmentResource";
  /**
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The allocated percentage of users (segment members) to send the treatment to.</p>
   */
  SizePercent: number | undefined;

  /**
   * <p>The message template to use for the treatment.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>A custom description of the treatment.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of the treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentName?: string;
}

export namespace WriteTreatmentResource {
  export const filterSensitiveLog = (obj: WriteTreatmentResource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WriteTreatmentResource => __isa(o, "WriteTreatmentResource");
}
