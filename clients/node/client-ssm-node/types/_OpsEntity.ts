import { _OpsEntityItem, _UnmarshalledOpsEntityItem } from "./_OpsEntityItem";

/**
 * <p>The result of the query.</p>
 */
export interface _OpsEntity {
  /**
   * <p>The query ID.</p>
   */
  Id?: string;

  /**
   * <p>The data returned by the query.</p>
   */
  Data?: { [key: string]: _OpsEntityItem } | Iterable<[string, _OpsEntityItem]>;
}

export interface _UnmarshalledOpsEntity extends _OpsEntity {
  /**
   * <p>The data returned by the query.</p>
   */
  Data?: { [key: string]: _UnmarshalledOpsEntityItem };
}
