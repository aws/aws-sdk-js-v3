/**
 * <p>A complex type that contains settings for the new traffic policy instance.</p>
 */
export interface _TrafficPolicyInstance {
  /**
   * <p>The ID that Amazon Route 53 assigned to the new traffic policy instance.</p>
   */
  Id: string;

  /**
   * <p>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</p>
   */
  HostedZoneId: string;

  /**
   * <p>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance. </p>
   */
  Name: string;

  /**
   * <p>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</p>
   */
  TTL: number;

  /**
   * <p>The value of <code>State</code> is one of the following values:</p> <dl> <dt>Applied</dt> <dd> <p>Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations.</p> </dd> <dt>Creating</dt> <dd> <p>Route 53 is creating the resource record sets. Use <code>GetTrafficPolicyInstance</code> to confirm that the <code>CreateTrafficPolicyInstance</code> request completed successfully.</p> </dd> <dt>Failed</dt> <dd> <p>Route 53 wasn't able to create or update the resource record sets. When the value of <code>State</code> is <code>Failed</code>, see <code>Message</code> for an explanation of what caused the request to fail.</p> </dd> </dl>
   */
  State: string;

  /**
   * <p>If <code>State</code> is <code>Failed</code>, an explanation of the reason for the failure. If <code>State</code> is another value, <code>Message</code> is empty.</p>
   */
  Message: string;

  /**
   * <p>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyId: string;

  /**
   * <p>The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyVersion: number;

  /**
   * <p>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. </p>
   */
  TrafficPolicyType:
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
}

export type _UnmarshalledTrafficPolicyInstance = _TrafficPolicyInstance;
