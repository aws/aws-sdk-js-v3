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
 * Endpoint response
 */
export interface _EndpointResponse {
  /**
   * The address of the endpoint as provided by your push provider. For example, the DeviceToken or RegistrationId.
   */
  Address?: string;

  /**
   * The ID of the application that is associated with the endpoint.
   */
  ApplicationId?: string;

  /**
   * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the following values: ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create segments.
   *
   * The Amazon Pinpoint console can't display attribute names that include the following characters: hash/pound sign (#), colon (:), question mark (?), backslash (\), and forward slash (/). For this reason, you should avoid using these characters in the names of custom attributes.
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
   * A number from 0-99 that represents the cohort the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an app. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for a campaign.
   */
  CohortId?: string;

  /**
   * The date and time when the endpoint was created, shown in ISO 8601 format.
   */
  CreationDate?: string;

  /**
   * The endpoint demographic attributes.
   */
  Demographic?: _EndpointDemographic;

  /**
   * The date and time when the endpoint was last updated, shown in ISO 8601 format.
   */
  EffectiveDate?: string;

  /**
   * Unused.
   */
  EndpointStatus?: string;

  /**
   * The unique ID that you assigned to the endpoint. The ID should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint IDs associated with the application.
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

export interface _UnmarshalledEndpointResponse extends _EndpointResponse {
  /**
   * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the following values: ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create segments.
   *
   * The Amazon Pinpoint console can't display attribute names that include the following characters: hash/pound sign (#), colon (:), question mark (?), backslash (\), and forward slash (/). For this reason, you should avoid using these characters in the names of custom attributes.
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
