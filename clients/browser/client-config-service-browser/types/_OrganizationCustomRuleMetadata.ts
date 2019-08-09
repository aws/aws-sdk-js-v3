/**
 * _OrganizationCustomRuleMetadata shape
 */
export interface _OrganizationCustomRuleMetadata {
  /**
   * _StringWithCharLimit256Min0 shape
   */
  Description?: string;

  /**
   * _StringWithCharLimit256 shape
   */
  LambdaFunctionArn: string;

  /**
   * _OrganizationConfigRuleTriggerTypes shape
   */
  OrganizationConfigRuleTriggerTypes:
    | Array<
        | "ConfigurationItemChangeNotification"
        | "OversizedConfigurationItemChangeNotification"
        | "ScheduledNotification"
        | string
      >
    | Iterable<
        | "ConfigurationItemChangeNotification"
        | "OversizedConfigurationItemChangeNotification"
        | "ScheduledNotification"
        | string
      >;

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

export interface _UnmarshalledOrganizationCustomRuleMetadata
  extends _OrganizationCustomRuleMetadata {
  /**
   * _OrganizationConfigRuleTriggerTypes shape
   */
  OrganizationConfigRuleTriggerTypes: Array<
    | "ConfigurationItemChangeNotification"
    | "OversizedConfigurationItemChangeNotification"
    | "ScheduledNotification"
    | string
  >;

  /**
   * _ResourceTypesScope shape
   */
  ResourceTypesScope?: Array<string>;
}
