import {_ReplicationRuleFilter, _UnmarshalledReplicationRuleFilter} from './_ReplicationRuleFilter';
import {_SourceSelectionCriteria, _UnmarshalledSourceSelectionCriteria} from './_SourceSelectionCriteria';
import {_Destination, _UnmarshalledDestination} from './_Destination';
import {_DeleteMarkerReplication, _UnmarshalledDeleteMarkerReplication} from './_DeleteMarkerReplication';

/**
 * <p>Container for information about a particular replication rule.</p>
 */
export interface _ReplicationRule {
    /**
     * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
     */
    ID?: string;

    /**
     * <p>The priority associated with the rule. If you specify multiple rules in a replication configuration, then Amazon S3 applies rule priority in the event there are conflicts (two or more rules identify the same object based on filter specified). The rule with higher priority takes precedence. For example,</p> <ul> <li> <p>Same object quality prefix based filter criteria If prefixes you specified in multiple rules overlap. </p> </li> <li> <p>Same object qualify tag based filter criteria specified in multiple rules</p> </li> </ul> <p>For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html">Cross-Region Replication (CRR)</a> in the Amazon S3 Developer Guide.</p>
     */
    Priority?: number;

    /**
     * <p>Object keyname prefix identifying one or more objects to which the rule applies. Maximum prefix length can be up to 1,024 characters. </p>
     */
    Prefix?: string;

    /**
     * <p>Filter that identifies subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.</p>
     */
    Filter?: _ReplicationRuleFilter;

    /**
     * <p>The rule is ignored if status is not Enabled.</p>
     */
    Status: 'Enabled'|'Disabled'|string;

    /**
     * <p> Container that describes additional filters in identifying source objects that you want to replicate. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using an AWS KMS-managed key. You can choose to enable or disable replication of these objects. </p> <p> if you want Amazon S3 to replicate objects created with server-side encryption using AWS KMS-managed keys. </p>
     */
    SourceSelectionCriteria?: _SourceSelectionCriteria;

    /**
     * <p>Container for replication destination information.</p>
     */
    Destination: _Destination;

    /**
     * <p>Specifies whether Amazon S3 should replicate delete makers.</p>
     */
    DeleteMarkerReplication?: _DeleteMarkerReplication;
}

export interface _UnmarshalledReplicationRule extends _ReplicationRule {
    /**
     * <p>Filter that identifies subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.</p>
     */
    Filter?: _UnmarshalledReplicationRuleFilter;

    /**
     * <p> Container that describes additional filters in identifying source objects that you want to replicate. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using an AWS KMS-managed key. You can choose to enable or disable replication of these objects. </p> <p> if you want Amazon S3 to replicate objects created with server-side encryption using AWS KMS-managed keys. </p>
     */
    SourceSelectionCriteria?: _UnmarshalledSourceSelectionCriteria;

    /**
     * <p>Container for replication destination information.</p>
     */
    Destination: _UnmarshalledDestination;

    /**
     * <p>Specifies whether Amazon S3 should replicate delete makers.</p>
     */
    DeleteMarkerReplication?: _UnmarshalledDeleteMarkerReplication;
}