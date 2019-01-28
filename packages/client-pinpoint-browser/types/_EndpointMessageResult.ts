/**
 * The result from sending a message to an endpoint.
 */
export interface _EndpointMessageResult {
    /**
     * Address that endpoint message was delivered to.
     */
    Address?: string;

    /**
     * The delivery status of the message. Possible values:
     *
     * SUCCESS - The message was successfully delivered to the endpoint.
     *
     * TRANSIENT_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.
     *
     * FAILURE_PERMANENT - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.
     *
     * TIMEOUT - The message couldn't be sent within the timeout period.
     *
     * QUIET_TIME - The local time for the endpoint was within the Quiet Hours for the campaign.
     *
     * DAILY_CAP - The endpoint has received the maximum number of messages it can receive within a 24-hour period.
     *
     * HOLDOUT - The endpoint was in a hold out treatment for the campaign.
     *
     * THROTTLED - Amazon Pinpoint throttled sending to this endpoint.
     *
     * EXPIRED - The endpoint address is expired.
     *
     * CAMPAIGN_CAP - The endpoint received the maximum number of messages allowed by the campaign.
     *
     * SERVICE_FAILURE - A service-level failure prevented Amazon Pinpoint from delivering the message.
     *
     * UNKNOWN - An unknown error occurred.
     */
    DeliveryStatus?: 'SUCCESSFUL'|'THROTTLED'|'TEMPORARY_FAILURE'|'PERMANENT_FAILURE'|'UNKNOWN_FAILURE'|'OPT_OUT'|'DUPLICATE'|string;

    /**
     * Unique message identifier associated with the message that was sent.
     */
    MessageId?: string;

    /**
     * Downstream service status code.
     */
    StatusCode?: number;

    /**
     * Status message for message delivery.
     */
    StatusMessage?: string;

    /**
     * If token was updated as part of delivery. (This is GCM Specific)
     */
    UpdatedToken?: string;
}

export type _UnmarshalledEndpointMessageResult = _EndpointMessageResult;