import {
  _DataRetrievalRule,
  _UnmarshalledDataRetrievalRule
} from "./_DataRetrievalRule";

/**
 * <p>Data retrieval policy.</p>
 */
export interface _DataRetrievalPolicy {
  /**
   * <p>The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.</p>
   */
  Rules?: Array<_DataRetrievalRule> | Iterable<_DataRetrievalRule>;
}

export interface _UnmarshalledDataRetrievalPolicy extends _DataRetrievalPolicy {
  /**
   * <p>The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.</p>
   */
  Rules?: Array<_UnmarshalledDataRetrievalRule>;
}
