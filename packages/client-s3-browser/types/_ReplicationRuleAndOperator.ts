import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _ReplicationRuleAndOperator shape
 */
export interface _ReplicationRuleAndOperator {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _TagSet shape
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledReplicationRuleAndOperator extends _ReplicationRuleAndOperator {
    /**
     * _TagSet shape
     */
    Tags?: Array<_UnmarshalledTag>;
}