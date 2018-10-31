/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface _HostedZoneLimit {
    /**
     * <p>The limit that you requested. Valid values include the following:</p> <ul> <li> <p> <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create in the specified hosted zone.</p> </li> <li> <p> <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</p> </li> </ul>
     */
    Type: 'MAX_RRSETS_BY_ZONE'|'MAX_VPCS_ASSOCIATED_BY_ZONE'|string;

    /**
     * <p>The current value for the limit that is specified by <code>Type</code>.</p>
     */
    Value: number;
}

export type _UnmarshalledHostedZoneLimit = _HostedZoneLimit;