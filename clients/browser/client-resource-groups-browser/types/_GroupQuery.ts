import { _ResourceQuery, _UnmarshalledResourceQuery } from "./_ResourceQuery";

/**
 * <p>The underlying resource query of a resource group. Resources that match query results are part of the group.</p>
 */
export interface _GroupQuery {
  /**
   * <p>The name of a resource group that is associated with a specific resource query.</p>
   */
  GroupName: string;

  /**
   * <p>The resource query which determines which AWS resources are members of the associated resource group.</p>
   */
  ResourceQuery: _ResourceQuery;
}

export interface _UnmarshalledGroupQuery extends _GroupQuery {
  /**
   * <p>The resource query which determines which AWS resources are members of the associated resource group.</p>
   */
  ResourceQuery: _UnmarshalledResourceQuery;
}
