import {
  _EndpointDemographic,
  _UnmarshalledEndpointDemographic
} from "./_EndpointDemographic";
import {
  _EndpointLocation,
  _UnmarshalledEndpointLocation
} from "./_EndpointLocation";
import { _EndpointUser, _UnmarshalledEndpointUser } from "./_EndpointUser";

/**
 * <p>Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.</p>
 */
export interface _EndpointBatchItem {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  Attributes?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?:
    | "GCM"
    | "APNS"
    | "APNS_SANDBOX"
    | "APNS_VOIP"
    | "APNS_VOIP_SANDBOX"
    | "ADM"
    | "SMS"
    | "VOICE"
    | "EMAIL"
    | "BAIDU"
    | "CUSTOM"
    | string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: _EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created or updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Not used.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The unique identifier for the endpoint in the context of the batch.</p>
   */
  Id?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: _EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number } | Iterable<[string, number]>;

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
  User?: _EndpointUser;
}

export interface _UnmarshalledEndpointBatchItem extends _EndpointBatchItem {
  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  Attributes?: { [key: string]: Array<string> };

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: _UnmarshalledEndpointDemographic;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: _UnmarshalledEndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: _UnmarshalledEndpointUser;
}
