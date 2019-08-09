/**
 * <p> This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
 */
export interface _IPRange {
  /**
   * <p>Specifies the status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;

  /**
   * <p>Specifies the IP range.</p>
   */
  CIDRIP?: string;
}

export type _UnmarshalledIPRange = _IPRange;
