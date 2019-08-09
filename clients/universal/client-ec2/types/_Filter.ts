/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. The filters supported by a describe operation are documented with the describe operation. For example:</p> <ul> <li> <p> <a>DescribeAvailabilityZones</a> </p> </li> <li> <p> <a>DescribeImages</a> </p> </li> <li> <p> <a>DescribeInstances</a> </p> </li> <li> <p> <a>DescribeKeyPairs</a> </p> </li> <li> <p> <a>DescribeSecurityGroups</a> </p> </li> <li> <p> <a>DescribeSnapshots</a> </p> </li> <li> <p> <a>DescribeSubnets</a> </p> </li> <li> <p> <a>DescribeTags</a> </p> </li> <li> <p> <a>DescribeVolumes</a> </p> </li> <li> <p> <a>DescribeVpcs</a> </p> </li> </ul>
 */
export interface _Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  Values?: Array<string>;
}
