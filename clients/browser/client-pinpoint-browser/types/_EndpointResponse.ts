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
 * <p>Provides information about the channel type and other settings for an endpoint.</p>
 */
export interface _EndpointResponse {
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
  Attributes?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
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
  Demographic?: _EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Not used.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</p>
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
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: _EndpointUser;
}

export interface _UnmarshalledEndpointResponse extends _EndpointResponse {
  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p>
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
