/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface _AccountLimit {
    /**
     * <p>The limit that you requested. Valid values include the following:</p> <ul> <li> <p> <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create using the current account.</p> </li> <li> <p> <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create using the current account.</p> </li> <li> <p> <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</p> </li> </ul>
     */
    Type: 'MAX_HEALTH_CHECKS_BY_OWNER'|'MAX_HOSTED_ZONES_BY_OWNER'|'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER'|'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER'|'MAX_TRAFFIC_POLICIES_BY_OWNER'|string;

    /**
     * <p>The current value for the limit that is specified by <a>AccountLimit$Type</a>.</p>
     */
    Value: number;
}

export type _UnmarshalledAccountLimit = _AccountLimit;