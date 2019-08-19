import {
  _OrganizationManagedRuleMetadata,
  _UnmarshalledOrganizationManagedRuleMetadata
} from "./_OrganizationManagedRuleMetadata";
import {
  _OrganizationCustomRuleMetadata,
  _UnmarshalledOrganizationCustomRuleMetadata
} from "./_OrganizationCustomRuleMetadata";

/**
 * _OrganizationConfigRule shape
 */
export interface _OrganizationConfigRule {
  /**
   * _StringWithCharLimit64 shape
   */
  OrganizationConfigRuleName: string;

  /**
   * _StringWithCharLimit256 shape
   */
  OrganizationConfigRuleArn: string;

  /**
   * _OrganizationManagedRuleMetadata shape
   */
  OrganizationManagedRuleMetadata?: _OrganizationManagedRuleMetadata;

  /**
   * _OrganizationCustomRuleMetadata shape
   */
  OrganizationCustomRuleMetadata?: _OrganizationCustomRuleMetadata;

  /**
   * _ExcludedAccounts shape
   */
  ExcludedAccounts?: Array<string> | Iterable<string>;

  /**
   * _Date shape
   */
  LastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledOrganizationConfigRule
  extends _OrganizationConfigRule {
  /**
   * _OrganizationManagedRuleMetadata shape
   */
  OrganizationManagedRuleMetadata?: _UnmarshalledOrganizationManagedRuleMetadata;

  /**
   * _OrganizationCustomRuleMetadata shape
   */
  OrganizationCustomRuleMetadata?: _UnmarshalledOrganizationCustomRuleMetadata;

  /**
   * _ExcludedAccounts shape
   */
  ExcludedAccounts?: Array<string>;

  /**
   * _Date shape
   */
  LastUpdateTime?: Date;
}
