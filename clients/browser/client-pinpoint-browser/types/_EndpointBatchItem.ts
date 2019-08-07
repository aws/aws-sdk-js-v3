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
 * Endpoint update request
 */
export interface _EndpointBatchItem {
  /**
   * The destination for messages that you send to this endpoint. The address varies by channel. For mobile push channels, use the token provided by the push notification service, such as the APNs device token or the FCM registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.
   */
  Address?: string;

  /**
   * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.
   *
   * The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
   */
  Attributes?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * The channel type.
   *
   * Valid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU
   */
  ChannelType?:
    | "GCM"
    | "APNS"
    | "APNS_SANDBOX"
    | "APNS_VOIP"
    | "APNS_VOIP_SANDBOX"
    | "ADM"
    | "SMS"
    | "EMAIL"
    | "BAIDU"
    | "CUSTOM"
    | string;

  /**
   * The endpoint demographic attributes.
   */
  Demographic?: _EndpointDemographic;

  /**
   * The last time the endpoint was updated. Provided in ISO 8601 format.
   */
  EffectiveDate?: string;

  /**
   * Unused.
   */
  EndpointStatus?: string;

  /**
   * The unique Id for the Endpoint in the batch.
   */
  Id?: string;

  /**
   * The endpoint location attributes.
   */
  Location?: _EndpointLocation;

  /**
   * Custom metrics that your app reports to Amazon Pinpoint.
   */
  Metrics?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * Indicates whether a user has opted out of receiving messages with one of the following values:
   *
   * ALL - User has opted out of all messages.
   *
   * NONE - Users has not opted out and receives all messages.
   */
  OptOut?: string;

  /**
   * The unique ID for the most recent request to update the endpoint.
   */
  RequestId?: string;

  /**
   * Custom user-specific attributes that your app reports to Amazon Pinpoint.
   */
  User?: _EndpointUser;
}

export interface _UnmarshalledEndpointBatchItem extends _EndpointBatchItem {
  /**
   * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.
   *
   * The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
   */
  Attributes?: { [key: string]: Array<string> };

  /**
   * The endpoint demographic attributes.
   */
  Demographic?: _UnmarshalledEndpointDemographic;

  /**
   * The endpoint location attributes.
   */
  Location?: _UnmarshalledEndpointLocation;

  /**
   * Custom metrics that your app reports to Amazon Pinpoint.
   */
  Metrics?: { [key: string]: number };

  /**
   * Custom user-specific attributes that your app reports to Amazon Pinpoint.
   */
  User?: _UnmarshalledEndpointUser;
}
