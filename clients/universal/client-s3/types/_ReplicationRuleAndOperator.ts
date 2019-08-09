import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p/>
 */
export interface _ReplicationRuleAndOperator {
  /**
   * <p/>
   */
  Prefix?: string;

  /**
   * <p/>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledReplicationRuleAndOperator
  extends _ReplicationRuleAndOperator {
  /**
   * <p/>
   */
  Tags?: Array<_UnmarshalledTag>;
}
