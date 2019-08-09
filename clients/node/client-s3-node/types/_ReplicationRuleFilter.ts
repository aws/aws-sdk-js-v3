import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _ReplicationRuleAndOperator,
  _UnmarshalledReplicationRuleAndOperator
} from "./_ReplicationRuleAndOperator";

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.</p>
 */
export interface _ReplicationRuleFilter {
  /**
   * <p>An object keyname prefix that identifies the subset of objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>A container for specifying a tag key and value. </p> <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  Tag?: _Tag;

  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: </p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag.</p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag.</p> </li> </ul>
   */
  And?: _ReplicationRuleAndOperator;
}

export interface _UnmarshalledReplicationRuleFilter
  extends _ReplicationRuleFilter {
  /**
   * <p>A container for specifying a tag key and value. </p> <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  Tag?: _UnmarshalledTag;

  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: </p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag.</p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag.</p> </li> </ul>
   */
  And?: _UnmarshalledReplicationRuleAndOperator;
}
