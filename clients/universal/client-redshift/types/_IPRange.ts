import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an IP range used in a security group.</p>
 */
export interface _IPRange {
  /**
   * <p>The status of the IP range, for example, "authorized".</p>
   */
  Status?: string;

  /**
   * <p>The IP range in Classless Inter-Domain Routing (CIDR) notation.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The list of tags for the IP range.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledIPRange extends _IPRange {
  /**
   * <p>The list of tags for the IP range.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
