import {_Tag, _UnmarshalledTag} from './_Tag';
import {_ReplicationRuleAndOperator, _UnmarshalledReplicationRuleAndOperator} from './_ReplicationRuleAndOperator';

/**
 * <p>Filter that identifies subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.</p>
 */
export interface _ReplicationRuleFilter {
    /**
     * <p>Object keyname prefix that identifies subset of objects to which the rule applies.</p>
     */
    Prefix?: string;

    /**
     * <p>Container for specifying a tag key and value. </p> <p>The rule applies only to objects having the tag in its tagset.</p>
     */
    Tag?: _Tag;

    /**
     * <p>Container for specifying rule filters. These filters determine the subset of objects to which the rule applies. The element is required only if you specify more than one filter. For example: </p> <ul> <li> <p>You specify both a <code>Prefix</code> and a <code>Tag</code> filters. Then you wrap these in an <code>And</code> tag.</p> </li> <li> <p>You specify filter based on multiple tags. Then you wrap the <code>Tag</code> elements in an <code>And</code> tag.</p> </li> </ul>
     */
    And?: _ReplicationRuleAndOperator;
}

export interface _UnmarshalledReplicationRuleFilter extends _ReplicationRuleFilter {
    /**
     * <p>Container for specifying a tag key and value. </p> <p>The rule applies only to objects having the tag in its tagset.</p>
     */
    Tag?: _UnmarshalledTag;

    /**
     * <p>Container for specifying rule filters. These filters determine the subset of objects to which the rule applies. The element is required only if you specify more than one filter. For example: </p> <ul> <li> <p>You specify both a <code>Prefix</code> and a <code>Tag</code> filters. Then you wrap these in an <code>And</code> tag.</p> </li> <li> <p>You specify filter based on multiple tags. Then you wrap the <code>Tag</code> elements in an <code>And</code> tag.</p> </li> </ul>
     */
    And?: _UnmarshalledReplicationRuleAndOperator;
}