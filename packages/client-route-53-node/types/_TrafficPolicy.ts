/**
 * <p>A complex type that contains settings for a traffic policy.</p>
 */
export interface _TrafficPolicy {
    /**
     * <p>The ID that Amazon Route 53 assigned to a traffic policy when you created it.</p>
     */
    Id: string;

    /**
     * <p>The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy, the value of <code>Version</code> is always 1.</p>
     */
    Version: number;

    /**
     * <p>The name that you specified when you created the traffic policy.</p>
     */
    Name: string;

    /**
     * <p>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.</p>
     */
    Type: 'SOA'|'A'|'TXT'|'NS'|'CNAME'|'MX'|'NAPTR'|'PTR'|'SRV'|'SPF'|'AAAA'|'CAA'|string;

    /**
     * <p>The definition of a traffic policy in JSON format. You specify the JSON document to use for a new traffic policy in the <code>CreateTrafficPolicy</code> request. For more information about the JSON format, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
     */
    Document: string;

    /**
     * <p>The comment that you specify in the <code>CreateTrafficPolicy</code> request, if any.</p>
     */
    Comment?: string;
}

export type _UnmarshalledTrafficPolicy = _TrafficPolicy;