/**
 * _OrganizationManagedRuleMetadata shape
 */
export interface _OrganizationManagedRuleMetadata {
  /**
   * _StringWithCharLimit256Min0 shape
   */
  Description?: string;

  /**
   * _StringWithCharLimit256 shape
   */
  RuleIdentifier: string;

  /**
   * _StringWithCharLimit2048 shape
   */
  InputParameters?: string;

  /**
   * _MaximumExecutionFrequency shape
   */
  MaximumExecutionFrequency?:
    | "One_Hour"
    | "Three_Hours"
    | "Six_Hours"
    | "Twelve_Hours"
    | "TwentyFour_Hours"
    | string;

  /**
   * _ResourceTypesScope shape
   */
  ResourceTypesScope?: Array<string> | Iterable<string>;

  /**
   * _StringWithCharLimit768 shape
   */
  ResourceIdScope?: string;

  /**
   * _StringWithCharLimit128 shape
   */
  TagKeyScope?: string;

  /**
   * _StringWithCharLimit256 shape
   */
  TagValueScope?: string;
}

export interface _UnmarshalledOrganizationManagedRuleMetadata
  extends _OrganizationManagedRuleMetadata {
  /**
   * _ResourceTypesScope shape
   */
  ResourceTypesScope?: Array<string>;
}
