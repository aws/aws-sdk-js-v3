/**
 * <p>A complex type that contains information about the latest version of one traffic policy that is associated with the current AWS account.</p>
 */
export interface _TrafficPolicySummary {
  /**
   * <p>The ID that Amazon Route 53 assigned to the traffic policy when you created it.</p>
   */
  Id: string;

  /**
   * <p>The name that you specified for the traffic policy when you created it.</p>
   */
  Name: string;

  /**
   * <p>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.</p>
   */
  Type:
    | "SOA"
    | "A"
    | "TXT"
    | "NS"
    | "CNAME"
    | "MX"
    | "NAPTR"
    | "PTR"
    | "SRV"
    | "SPF"
    | "AAAA"
    | "CAA"
    | string;

  /**
   * <p>The version number of the latest version of the traffic policy.</p>
   */
  LatestVersion: number;

  /**
   * <p>The number of traffic policies that are associated with the current AWS account.</p>
   */
  TrafficPolicyCount: number;
}

export type _UnmarshalledTrafficPolicySummary = _TrafficPolicySummary;
