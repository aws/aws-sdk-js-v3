/**
 * _MemberAccountStatus shape
 */
export interface _MemberAccountStatus {
  /**
   * _AccountId shape
   */
  AccountId: string;

  /**
   * _StringWithCharLimit64 shape
   */
  ConfigRuleName: string;

  /**
   * _MemberAccountRuleStatus shape
   */
  MemberAccountRuleStatus:
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

  /**
   * _String shape
   */
  ErrorCode?: string;

  /**
   * _String shape
   */
  ErrorMessage?: string;

  /**
   * _Date shape
   */
  LastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledMemberAccountStatus extends _MemberAccountStatus {
  /**
   * _Date shape
   */
  LastUpdateTime?: Date;
}
