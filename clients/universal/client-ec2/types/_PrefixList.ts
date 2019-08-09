/**
 * <p>Describes prefixes for AWS services.</p>
 */
export interface _PrefixList {
  /**
   * <p>The IP address range of the AWS service.</p>
   */
  Cidrs?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

export interface _UnmarshalledPrefixList extends _PrefixList {
  /**
   * <p>The IP address range of the AWS service.</p>
   */
  Cidrs?: Array<string>;
}
