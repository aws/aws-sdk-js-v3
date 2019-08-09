import { _Contributor, _UnmarshalledContributor } from "./_Contributor";

/**
 * <p>Details of the described attack.</p>
 */
export interface _AttackProperty {
  /**
   * <p>The type of distributed denial of service (DDoS) event that was observed. <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code> indicates layer 7 events.</p>
   */
  AttackLayer?: "NETWORK" | "APPLICATION" | string;

  /**
   * <p>Defines the DDoS attack property information that is provided. The <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code> values are valid only for WordPress reflective pingback DDoS attacks.</p>
   */
  AttackPropertyIdentifier?:
    | "DESTINATION_URL"
    | "REFERRER"
    | "SOURCE_ASN"
    | "SOURCE_COUNTRY"
    | "SOURCE_IP_ADDRESS"
    | "SOURCE_USER_AGENT"
    | "WORDPRESS_PINGBACK_REFLECTOR"
    | "WORDPRESS_PINGBACK_SOURCE"
    | string;

  /**
   * <p>The array of <a>Contributor</a> objects that includes the top five contributors to an attack. </p>
   */
  TopContributors?: Array<_Contributor> | Iterable<_Contributor>;

  /**
   * <p>The unit of the <code>Value</code> of the contributions.</p>
   */
  Unit?: "BITS" | "BYTES" | "PACKETS" | "REQUESTS" | string;

  /**
   * <p>The total contributions made to this attack by all contributors, not just the five listed in the <code>TopContributors</code> list.</p>
   */
  Total?: number;
}

export interface _UnmarshalledAttackProperty extends _AttackProperty {
  /**
   * <p>The array of <a>Contributor</a> objects that includes the top five contributors to an attack. </p>
   */
  TopContributors?: Array<_UnmarshalledContributor>;
}
