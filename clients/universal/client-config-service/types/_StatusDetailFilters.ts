/**
 * _StatusDetailFilters shape
 */
export interface _StatusDetailFilters {
  /**
   * _AccountId shape
   */
  AccountId?: string;

  /**
   * _MemberAccountRuleStatus shape
   */
  MemberAccountRuleStatus?:
    | "CREATE_SUCCESSFUL"
    | "CREATE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "UPDATE_SUCCESSFUL"
    | "UPDATE_FAILED"
    | "UPDATE_IN_PROGRESS"
    | "DELETE_SUCCESSFUL"
    | "DELETE_FAILED"
    | "DELETE_IN_PROGRESS"
    | string;
}

export type _UnmarshalledStatusDetailFilters = _StatusDetailFilters;
