/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface _ReusableDelegationSetLimit {
    /**
     * <p>The limit that you requested: <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code>, the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Type: 'MAX_ZONES_BY_REUSABLE_DELEGATION_SET'|string;

    /**
     * <p>The current value for the <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> limit.</p>
     */
    Value: number;
}

export type _UnmarshalledReusableDelegationSetLimit = _ReusableDelegationSetLimit;