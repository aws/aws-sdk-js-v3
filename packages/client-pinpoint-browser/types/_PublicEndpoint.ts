import {_EndpointDemographic, _UnmarshalledEndpointDemographic} from './_EndpointDemographic';
import {_EndpointLocation, _UnmarshalledEndpointLocation} from './_EndpointLocation';
import {_EndpointUser, _UnmarshalledEndpointUser} from './_EndpointUser';

/**
 * Public endpoint attributes.
 */
export interface _PublicEndpoint {
    /**
     * The unique identifier for the recipient. For example, an address could be a device token, email address, or mobile phone number.
     */
    Address?: string;

    /**
     * Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
     */
    Attributes?: {[key: string]: Array<string>|Iterable<string>}|Iterable<[string, Array<string>|Iterable<string>]>;

    /**
     * The channel type.
     *
     * Valid values: APNS, GCM
     */
    ChannelType?: 'GCM'|'APNS'|'APNS_SANDBOX'|'APNS_VOIP'|'APNS_VOIP_SANDBOX'|'ADM'|'SMS'|'EMAIL'|'BAIDU'|'CUSTOM'|string;

    /**
     * The endpoint demographic attributes.
     */
    Demographic?: _EndpointDemographic;

    /**
     * The date and time when the endpoint was last updated, in  ISO 8601 format.
     */
    EffectiveDate?: string;

    /**
     * The status of the endpoint. If the update fails, the value is INACTIVE. If the endpoint is updated successfully, the value is ACTIVE.
     */
    EndpointStatus?: string;

    /**
     * The endpoint location attributes.
     */
    Location?: _EndpointLocation;

    /**
     * Custom metrics that your app reports to Amazon Pinpoint.
     */
    Metrics?: {[key: string]: number}|Iterable<[string, number]>;

    /**
     * Indicates whether a user has opted out of receiving messages with one of the following values:
     *
     * ALL - User has opted out of all messages.
     *
     * NONE - Users has not opted out and receives all messages.
     */
    OptOut?: string;

    /**
     * A unique identifier that is generated each time the endpoint is updated.
     */
    RequestId?: string;

    /**
     * Custom user-specific attributes that your app reports to Amazon Pinpoint.
     */
    User?: _EndpointUser;
}

export interface _UnmarshalledPublicEndpoint extends _PublicEndpoint {
    /**
     * Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
     */
    Attributes?: {[key: string]: Array<string>};

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
    Metrics?: {[key: string]: number};

    /**
     * Custom user-specific attributes that your app reports to Amazon Pinpoint.
     */
    User?: _UnmarshalledEndpointUser;
}