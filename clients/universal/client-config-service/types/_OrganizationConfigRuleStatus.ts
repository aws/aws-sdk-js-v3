/**
 * _OrganizationConfigRuleStatus shape
 */
export interface _OrganizationConfigRuleStatus {
  /**
   * _StringWithCharLimit64 shape
   */
  OrganizationConfigRuleName: string;

  /**
   * _OrganizationRuleStatus shape
   */
  OrganizationRuleStatus:
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

export interface _UnmarshalledOrganizationConfigRuleStatus
  extends _OrganizationConfigRuleStatus {
  /**
   * _Date shape
   */
  LastUpdateTime?: Date;
}
