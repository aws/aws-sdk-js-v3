// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AdminAccountStatus,
  EntityStatus,
  EntityStatusFilter,
  ExistingCustomerWebACLResolution,
  IpAddressType,
  PolicyFirewallType,
  ResourceType,
  RuleFirewallType,
  RuleType,
  Scheme,
  ScopeResourceType,
  ServiceResourceType,
  SynchronizationStatus,
  TemplateFirewallType,
  WAFConfigDataType,
  WAFConflictResolutionOptions,
} from "./enums";

/**
 * A set of AWS accounts and organizational units.
 *
 * @public
 */
export interface AccountSet {
  /**
   * The list of AWS account IDs.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The AWS Organizations organizational units (OUs) in the selection.
   *
   * @public
   */
  organizationalUnits?: string[] | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * Determines which accounts are in scope. Exactly one of `includeAll`, `include`, or `exclude` is set.
 *
 * @public
 */
export type AccountFilter =
  | AccountFilter.ExcludeMember
  | AccountFilter.IncludeMember
  | AccountFilter.IncludeAllMember
  | AccountFilter.$UnknownMember;

/**
 * @public
 */
export namespace AccountFilter {
  /**
   * Includes all accounts. No account filtering is applied.
   *
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    include?: never;
    exclude?: never;
    $unknown?: never;
  }

  /**
   * Includes only the specified accounts and organizational units.
   *
   * @public
   */
  export interface IncludeMember {
    includeAll?: never;
    include: AccountSet;
    exclude?: never;
    $unknown?: never;
  }

  /**
   * Excludes the specified accounts and organizational units. All others are in scope.
   *
   * @public
   */
  export interface ExcludeMember {
    includeAll?: never;
    include?: never;
    exclude: AccountSet;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    includeAll?: never;
    include?: never;
    exclude?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    includeAll: (value: Unit) => T;
    include: (value: AccountSet) => T;
    exclude: (value: AccountSet) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A reference to an AWS account, with optional display metadata.
 *
 * @public
 */
export interface AccountReference {
  /**
   * The AWS account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The display name of the account.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The email address associated with the account.
   *
   * @public
   */
  email?: string | undefined;
}

/**
 * Defines the firewall types that an administrator can create and manage.
 *
 * @public
 */
export interface AdminFirewallTypeScope {
  /**
   * Specifies whether the administrator can manage all firewall types, except for third-party firewall types.
   *
   * @public
   */
  allFirewallTypesEnabled?: boolean | undefined;

  /**
   * The list of firewall types that the administrator can manage.
   *
   * @public
   */
  firewallTypes?: PolicyFirewallType[] | undefined;
}

/**
 * A reference to an AWS Organizations organizational unit (OU), with optional display metadata.
 *
 * @public
 */
export interface OrganizationalUnitReference {
  /**
   * The ID of the AWS Organizations organizational unit (OU).
   *
   * @public
   */
  ouId: string | undefined;

  /**
   * The display name of the organizational unit.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * A selection of accounts and organizational units. This is the reference form, which includes display metadata.
 *
 * @public
 */
export interface AdminScopeSelection {
  /**
   * The AWS accounts in the selection.
   *
   * @public
   */
  accounts?: AccountReference[] | undefined;

  /**
   * The AWS Organizations organizational units (OUs) in the selection.
   *
   * @public
   */
  organizationalUnits?: OrganizationalUnitReference[] | undefined;
}

/**
 * Determines which accounts and organizational units are in an administrator's scope. This is the reference form, which includes display metadata.
 *
 * @public
 */
export type AdminScopeFilter =
  | AdminScopeFilter.ExcludeOnlyMember
  | AdminScopeFilter.IncludeAllMember
  | AdminScopeFilter.IncludeOnlyMember
  | AdminScopeFilter.$UnknownMember;

/**
 * @public
 */
export namespace AdminScopeFilter {
  /**
   * All accounts and organizational units are in scope.
   *
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * Only the specified accounts and organizational units are in the administrator's scope.
   *
   * @public
   */
  export interface IncludeOnlyMember {
    includeAll?: never;
    includeOnly: AdminScopeSelection;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * The accounts and organizational units to exclude from the administrator's scope. All others are in scope.
   *
   * @public
   */
  export interface ExcludeOnlyMember {
    includeAll?: never;
    includeOnly?: never;
    excludeOnly: AdminScopeSelection;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    includeAll?: never;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    includeAll: (value: Unit) => T;
    includeOnly: (value: AdminScopeSelection) => T;
    excludeOnly: (value: AdminScopeSelection) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the accounts, organizational units, and firewall types that an administrator can manage.
 *
 * @public
 */
export interface AdminScope {
  /**
   * The filter that determines which accounts and organizational units are in the administrator's scope.
   *
   * @public
   */
  scopeFilter?: AdminScopeFilter | undefined;

  /**
   * The firewall types that the administrator can create and manage.
   *
   * @public
   */
  firewallTypeScope?: AdminFirewallTypeScope | undefined;
}

/**
 * The details of an AWS Network Security Manager administrator account.
 *
 * @public
 */
export interface AdminAccountDetails {
  /**
   * The AWS account ID of the administrator account.
   *
   * @public
   */
  adminAccount: string | undefined;

  /**
   * The priority assigned to the administrator account.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The administrative scope, which defines the accounts, organizational units, and firewall types that the administrator can manage.
   *
   * @public
   */
  adminScope?: AdminScope | undefined;

  /**
   * The status of the administrator account, either `ONBOARDED` or `OFFBOARDED`.
   *
   * @public
   */
  status?: AdminAccountStatus | undefined;
}

/**
 * Summary information about an AWS Network Security Manager administrator account.
 *
 * @public
 */
export interface AdminAccountSummary {
  /**
   * The AWS account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The priority assigned to the administrator account.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The name of the administrator account.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The email address associated with the account.
   *
   * @public
   */
  email?: string | undefined;
}

/**
 * A selection of accounts and organizational units. This is the input form, which uses account and organizational unit IDs.
 *
 * @public
 */
export interface AdminScopeSelectionInput {
  /**
   * The AWS accounts in the selection.
   *
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * The AWS Organizations organizational units (OUs) in the selection.
   *
   * @public
   */
  organizationalUnits?: string[] | undefined;
}

/**
 * Determines which accounts and organizational units are in an administrator's scope. This is the input form, which uses account and organizational unit IDs.
 *
 * @public
 */
export type AdminScopeFilterInput =
  | AdminScopeFilterInput.ExcludeOnlyMember
  | AdminScopeFilterInput.IncludeAllMember
  | AdminScopeFilterInput.IncludeOnlyMember
  | AdminScopeFilterInput.$UnknownMember;

/**
 * @public
 */
export namespace AdminScopeFilterInput {
  /**
   * All accounts and organizational units are in scope.
   *
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * Only the specified accounts and organizational units are in the administrator's scope.
   *
   * @public
   */
  export interface IncludeOnlyMember {
    includeAll?: never;
    includeOnly: AdminScopeSelectionInput;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * The accounts and organizational units to exclude from the administrator's scope. All others are in scope.
   *
   * @public
   */
  export interface ExcludeOnlyMember {
    includeAll?: never;
    includeOnly?: never;
    excludeOnly: AdminScopeSelectionInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    includeAll?: never;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    includeAll: (value: Unit) => T;
    includeOnly: (value: AdminScopeSelectionInput) => T;
    excludeOnly: (value: AdminScopeSelectionInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The administrative scope configuration provided on input, using account and organizational unit IDs.
 *
 * @public
 */
export interface AdminScopeInput {
  /**
   * The filter that determines which accounts and organizational units are in the administrator's scope.
   *
   * @public
   */
  scopeFilter?: AdminScopeFilterInput | undefined;

  /**
   * The firewall types that the administrator can create and manage.
   *
   * @public
   */
  firewallTypeScope?: AdminFirewallTypeScope | undefined;
}

/**
 * Filter criteria specific to Application Load Balancers.
 *
 * @public
 */
export interface AlbConfiguration {
  /**
   * The scheme of the Application Load Balancer, either `internet-facing` or `internal`.
   *
   * @public
   */
  scheme?: Scheme | undefined;

  /**
   * The IP address type of the Application Load Balancer.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;
}

/**
 * An association between a deployment and a policy, as returned in outputs. The corresponding request structure is `PolicyReference`.
 *
 * @public
 */
export interface AssociatedPolicy {
  /**
   * The ARN of the associated policy, including its version qualifier when a specific published version is pinned (for example, `...:policy:abc123:3`).
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * An association between a template and a rule, as returned in outputs. The corresponding request structure is `RuleReference`.
 *
 * @public
 */
export interface AssociatedRule {
  /**
   * The ARN of the associated rule.
   *
   * @public
   */
  ruleArn: string | undefined;
}

/**
 * An association between a deployment and a scope, as returned in outputs. The corresponding request structure is `ScopeReference`.
 *
 * @public
 */
export interface AssociatedScope {
  /**
   * The ARN of the associated scope.
   *
   * @public
   */
  scopeArn: string | undefined;
}

/**
 * An association between a policy and either a template or a rule, as returned in outputs. Exactly one of `templateArn` or `ruleArn` is set. The corresponding request structure is `TemplateOrRuleReference`.
 *
 * @public
 */
export type AssociatedTemplateOrRule =
  | AssociatedTemplateOrRule.RuleArnMember
  | AssociatedTemplateOrRule.TemplateArnMember
  | AssociatedTemplateOrRule.$UnknownMember;

/**
 * @public
 */
export namespace AssociatedTemplateOrRule {
  /**
   * The ARN of the associated template.
   *
   * @public
   */
  export interface TemplateArnMember {
    templateArn: string;
    ruleArn?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the associated rule.
   *
   * @public
   */
  export interface RuleArnMember {
    templateArn?: never;
    ruleArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    templateArn?: never;
    ruleArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    templateArn: (value: string) => T;
    ruleArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes a single configuration value that does not match the intended configuration.
 *
 * @public
 */
export interface ConfigurationIssue {
  /**
   * The name of the configuration setting that is in conflict.
   *
   * @public
   */
  configurationName?: string | undefined;

  /**
   * The configuration value that AWS Network Security Manager expected.
   *
   * @public
   */
  expectedValue?: string | undefined;

  /**
   * The configuration value that was found on the resource.
   *
   * @public
   */
  actualValue?: string | undefined;
}

/**
 * A reference to a policy in a create or update request.
 *
 * @public
 */
export interface PolicyReference {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN), optionally version-qualified to pin a specific published version.
   *
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * A reference to a scope in a create or update request.
 *
 * @public
 */
export interface ScopeReference {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * Configuration settings that control a deployment's behavior.
 *
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * Specifies whether aggregate synchronization status details for the resources covered by this deployment are visible across accounts. Default: `false`.
   *
   * @public
   */
  enableCrossAccountVisibility: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList: PolicyReference[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList: ScopeReference[] | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`). Default: `true`.
   *
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * The tags to add to the resource when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Coverage information for one firewall type within a deployment. It lists the deployment's policies that have this firewall type. It also lists the resource types in the deployment's scope that the firewall type protects.
 *
 * @public
 */
export interface DeploymentCoverageEntry {
  /**
   * The firewall type that the policies in this entry share.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the deployment's policies that have this firewall type.
   *
   * @public
   */
  policyArns: string[] | undefined;

  /**
   * The resource types in the deployment's scope that this firewall type protects. This list is empty if the scope does not select any resource types that the firewall type protects.
   *
   * @public
   */
  inScopeResourceTypes: ScopeResourceType[] | undefined;
}

/**
 * A warning about a potential issue with a deployment.
 *
 * @public
 */
export interface DeploymentWarningEntry {
  /**
   * A code that identifies the type of warning.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The ARN of the policy that the warning relates to.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * A human-readable description of the warning.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * The service-generated id of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.
   *
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.
   *
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Describes a single request field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing the validation error for the field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentSnapshotInput {
  /**
   * The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the snapshot when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentSnapshotOutput {
  /**
   * The service-generated id of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A reference to either a template or a rule in a create or update request. Set exactly one of `templateIdentifier` or `ruleIdentifier`.
 *
 * @public
 */
export type TemplateOrRuleReference =
  | TemplateOrRuleReference.RuleIdentifierMember
  | TemplateOrRuleReference.TemplateIdentifierMember
  | TemplateOrRuleReference.$UnknownMember;

/**
 * @public
 */
export namespace TemplateOrRuleReference {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  export interface TemplateIdentifierMember {
    templateIdentifier: string;
    ruleIdentifier?: never;
    $unknown?: never;
  }

  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  export interface RuleIdentifierMember {
    templateIdentifier?: never;
    ruleIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    templateIdentifier?: never;
    ruleIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    templateIdentifier: (value: string) => T;
    ruleIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * AWS WAF-specific policy configuration settings.
 *
 * @public
 */
export interface WafConfig {
  /**
   * Determines how AWS Network Security Manager handles remediation when a resource already has a customer-created web ACL. Required for AWS WAF policies.
   *
   * @public
   */
  existingCustomerWebACLResolution: ExistingCustomerWebACLResolution | undefined;

  /**
   * The conflict-resolution strategy for AWS WAF policies. Required for AWS WAF policies.
   *
   * @public
   */
  conflictResolution: WAFConflictResolutionOptions | undefined;
}

/**
 * Configuration settings that control a policy's behavior.
 *
 * @public
 */
export interface PolicyConfiguration {
  /**
   * Specifies whether AWS Network Security Manager automatically remediates noncompliant resources. Default: `false`.
   *
   * @public
   */
  remediationEnabled: boolean | undefined;

  /**
   * Specifies whether AWS Network Security Manager automatically removes the resources it created when they are no longer needed. Default: `false`.
   *
   * @public
   */
  resourcesCleanUp: boolean | undefined;

  /**
   * AWS WAF-specific policy settings. This is populated only for AWS WAF policies.
   *
   * @public
   */
  wafConfig?: WafConfig | undefined;
}

/**
 * @public
 */
export interface CreatePolicyInput {
  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The templates and rules to associate with the policy. For AWS WAF policies, specify 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list must be empty.
   *
   * @public
   */
  associatedTemplateAndRuleList?: TemplateOrRuleReference[] | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration: PolicyConfiguration | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`). Default: `true`.
   *
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * The tags to add to the resource when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyOutput {
  /**
   * The service-generated id of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.
   *
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicySnapshotInput {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN).
   *
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the snapshot when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicySnapshotOutput {
  /**
   * The service-generated id of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.
   *
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRuleInput {
  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type. For an AWS WAF `INSPECTION` rule, provide an AWS WAF rule group. For an AWS WAF `CONFIGURATION` rule, provide a single web ACL setting, such as `DefaultAction` or `VisibilityConfig`; use `wafConfigDataType` to declare which setting the document contains. For the schema of each setting and complete examples, see [Writing rule configurations](https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html) in the *AWS Network Security Manager Developer Guide*.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`). Default: `true`.
   *
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * The tags to add to the resource when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleOutput {
  /**
   * The service-generated id of the rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRuleSnapshotInput {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the snapshot when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleSnapshotOutput {
  /**
   * The service-generated id of the rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A leaf condition that matches resources by tag or by resource-type-specific configuration.
 *
 * @public
 */
export type ResourceCriteria =
  | ResourceCriteria.AlbConfigMember
  | ResourceCriteria.TagsMember
  | ResourceCriteria.$UnknownMember;

/**
 * @public
 */
export namespace ResourceCriteria {
  /**
   * Tag key-value pairs used to match resources.
   *
   * @public
   */
  export interface TagsMember {
    tags: Record<string, string>;
    albConfig?: never;
    $unknown?: never;
  }

  /**
   * Filter criteria specific to Application Load Balancers.
   *
   * @public
   */
  export interface AlbConfigMember {
    tags?: never;
    albConfig: AlbConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tags?: never;
    albConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tags: (value: Record<string, string>) => T;
    albConfig: (value: AlbConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateScopeSnapshotInput {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the snapshot when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A reference to a rule in a create or update request.
 *
 * @public
 */
export interface RuleReference {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateInput {
  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList: RuleReference[] | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`). Default: `true`.
   *
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * The tags to add to the resource when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateOutput {
  /**
   * The service-generated id of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSnapshotInput {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the snapshot when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSnapshotOutput {
  /**
   * The service-generated id of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAdminAccountRequest {
  /**
   * The AWS account ID of the administrator account to remove.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyInput {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN).
   *
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleInput {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteScopeInput {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateInput {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  templateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * The service-generated id of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable), `ACTIVE` (published, in use), or `DISABLED` (deactivated; changes cannot be published until the resource is re-enabled).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.
   *
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.
   *
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results by status: `ACTIVE`, `DRAFT`, or `DISABLED`.
   *
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * Summary information about a deployment.
 *
 * @public
 */
export interface DeploymentSummary {
  /**
   * The service-generated id of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable), `ACTIVE` (published, in use), or `DISABLED` (deactivated; changes cannot be published until the resource is re-enabled).
   *
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of deployments.
   *
   * @public
   */
  deployments: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentSnapshotsInput {
  /**
   * The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentSnapshotsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The snapshots of the deployment.
   *
   * @public
   */
  snapshots: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourceSynchronizationStatusesInput {
  /**
   * The identifier of the deployment to list synchronization statuses for. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * Filters the results by synchronization status, such as `IN_SYNC` or `OUT_OF_SYNC`.
   *
   * @public
   */
  synchronizationStatus?: SynchronizationStatus | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Indicates that details are not visible because of cross-account restrictions.
 *
 * @public
 */
export interface NotVisibleMarker {
  /**
   * The reason the details are not visible.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * Details about the ways in which a firewall's configuration differs from the intended configuration.
 *
 * @public
 */
export interface InvalidFirewallReasons {
  /**
   * Single-value configuration settings whose values do not match the expected values.
   *
   * @public
   */
  incorrectSingleValueConfigurations?: ConfigurationIssue[] | undefined;

  /**
   * Appendable configuration values that are expected but missing.
   *
   * @public
   */
  missingAppendableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * Appendable configuration values that are present but not expected.
   *
   * @public
   */
  unexpectedAppendableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * Appendable configuration values that are present but in the wrong order.
   *
   * @public
   */
  incorrectAppendableConfigurationOrder?: ConfigurationIssue[] | undefined;

  /**
   * Mergeable configuration values that are expected but missing.
   *
   * @public
   */
  missingMergeableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * Mergeable configuration values that are present but not expected.
   *
   * @public
   */
  unexpectedMergeableConfigurationValues?: ConfigurationIssue[] | undefined;
}

/**
 * Describes why a firewall is out of sync. Exactly one of `missingFirewall` or `invalidFirewall` is set.
 *
 * @public
 */
export type FirewallSyncReason =
  | FirewallSyncReason.InvalidFirewallMember
  | FirewallSyncReason.MissingFirewallMember
  | FirewallSyncReason.$UnknownMember;

/**
 * @public
 */
export namespace FirewallSyncReason {
  /**
   * Indicates that an expected firewall is missing. The value describes the missing firewall.
   *
   * @public
   */
  export interface MissingFirewallMember {
    missingFirewall: string;
    invalidFirewall?: never;
    $unknown?: never;
  }

  /**
   * Details about a firewall whose configuration does not match the intended configuration.
   *
   * @public
   */
  export interface InvalidFirewallMember {
    missingFirewall?: never;
    invalidFirewall: InvalidFirewallReasons;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    missingFirewall?: never;
    invalidFirewall?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    missingFirewall: (value: string) => T;
    invalidFirewall: (value: InvalidFirewallReasons) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The out-of-sync reasons for a resource, or a marker indicating that the details are not visible. Exactly one member is set.
 *
 * @public
 */
export type OutOfSyncReasonsView =
  | OutOfSyncReasonsView.NotVisibleMember
  | OutOfSyncReasonsView.ReasonsMember
  | OutOfSyncReasonsView.$UnknownMember;

/**
 * @public
 */
export namespace OutOfSyncReasonsView {
  /**
   * The out-of-sync reasons, keyed by firewall type.
   *
   * @public
   */
  export interface ReasonsMember {
    reasons: Partial<Record<PolicyFirewallType, FirewallSyncReason>>;
    notVisible?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the details are not visible because of cross-account restrictions.
   *
   * @public
   */
  export interface NotVisibleMember {
    reasons?: never;
    notVisible: NotVisibleMarker;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    reasons?: never;
    notVisible?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    reasons: (value: Partial<Record<PolicyFirewallType, FirewallSyncReason>>) => T;
    notVisible: (value: NotVisibleMarker) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about a remediation issue for a firewall type.
 *
 * @public
 */
export interface RemediationIssueDetails {
  /**
   * The type of remediation issue.
   *
   * @public
   */
  issueType?: string | undefined;

  /**
   * A human-readable description of the remediation issue.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A recommended action for resolving the remediation issue.
   *
   * @public
   */
  correctiveAction?: string | undefined;
}

/**
 * Remediation issue details for a resource, or a marker indicating that the details are not visible. Exactly one member is set.
 *
 * @public
 */
export type RemediationIssuesView =
  | RemediationIssuesView.IssuesMember
  | RemediationIssuesView.NotVisibleMember
  | RemediationIssuesView.$UnknownMember;

/**
 * @public
 */
export namespace RemediationIssuesView {
  /**
   * The remediation issues, keyed by firewall type.
   *
   * @public
   */
  export interface IssuesMember {
    issues: Partial<Record<PolicyFirewallType, RemediationIssueDetails>>;
    notVisible?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the details are not visible because of cross-account restrictions.
   *
   * @public
   */
  export interface NotVisibleMember {
    issues?: never;
    notVisible: NotVisibleMarker;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    issues?: never;
    notVisible?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    issues: (value: Partial<Record<PolicyFirewallType, RemediationIssueDetails>>) => T;
    notVisible: (value: NotVisibleMarker) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The synchronization status of a resource covered by a deployment.
 *
 * @public
 */
export interface ResourceSynchronizationStatusSummary {
  /**
   * The synchronization status of the resource, such as `IN_SYNC` or `OUT_OF_SYNC`.
   *
   * @public
   */
  synchronizationStatus: SynchronizationStatus | undefined;

  /**
   * The AWS account ID that owns the resource.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The ARN of the resource whose synchronization status is reported.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ARN of the deployment that the synchronization status is associated with. This is absent for aggregate (cross-deployment) statuses.
   *
   * @public
   */
  deploymentArn?: string | undefined;

  /**
   * The type of the resource, in AWS CloudFormation format.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reasons the resource is out of sync, keyed by firewall type. This is null when the resource is in sync.
   *
   * @public
   */
  outOfSyncReasons?: OutOfSyncReasonsView | undefined;

  /**
   * Details about remediation issues, keyed by firewall type. This is null when there are no remediation issues.
   *
   * @public
   */
  remediationIssues?: RemediationIssuesView | undefined;

  /**
   * The time when the synchronization status was last evaluated.
   *
   * @public
   */
  evaluatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceSynchronizationStatusesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of resource synchronization statuses.
   *
   * @public
   */
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentInput {
  /**
   * The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).
   *
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList?: PolicyReference[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList?: ScopeReference[] | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`).
   *
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentOutput {
  /**
   * The service-generated id of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The configuration settings for the deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The policies associated with the deployment.
   *
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * The scope associated with the deployment. A deployment has exactly one scope.
   *
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.
   *
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.
   *
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GenerateRuleConfigurationRequest {
  /**
   * A natural-language description of the configuration that you want to generate.
   *
   * @public
   */
  prompt: string | undefined;

  /**
   * The firewall type of the rule.
   *
   * @public
   */
  ruleFirewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * For AWS WAF configuration rules, the specific AWS WAF configuration variant to generate. This is optional; if you omit it, the service selects the variant.
   *
   * @public
   */
  wafConfigDataType?: WAFConfigDataType | undefined;

  /**
   * An existing configuration to edit, as a JSON string. When you provide this value, the operation edits the configuration. When you omit it, the operation generates a new configuration.
   *
   * @public
   */
  currentConfiguration?: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GenerateRuleConfigurationResponse {
  /**
   * The generated configuration, as a JSON string. You can use this value in the `configuration` field of a rule.
   *
   * @public
   */
  configuration: string | undefined;

  /**
   * Reserved for a future human-readable description of the generated configuration. This field is currently not populated.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetAdminAccountRequest {
  /**
   * The AWS account ID of the administrator account to retrieve.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetAdminAccountResponse {
  /**
   * The details of the administrator account.
   *
   * @public
   */
  adminAccountDetails?: AdminAccountDetails | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN).
   *
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * The service-generated id of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.
   *
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRuleInput {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleOutput {
  /**
   * The service-generated id of the rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetScopeInput {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateInput {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  templateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateOutput {
  /**
   * The service-generated id of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsRequest {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsResponse {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of administrator accounts.
   *
   * @public
   */
  adminAccounts: AdminAccountSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAggregateResourceSynchronizationStatusesInput {
  /**
   * Filters the results by synchronization status, such as `IN_SYNC` or `OUT_OF_SYNC`.
   *
   * @public
   */
  synchronizationStatus?: SynchronizationStatus | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateResourceSynchronizationStatusesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of resource synchronization statuses.
   *
   * @public
   */
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesInput {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results by status, either `ACTIVE` or `DRAFT`.
   *
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * Summary information about a policy.
 *
 * @public
 */
export interface PolicySummary {
  /**
   * The service-generated id of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType?: PolicyFirewallType | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPoliciesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of policies.
   *
   * @public
   */
  policies: PolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListPolicySnapshotsInput {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN).
   *
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicySnapshotsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The snapshots of the policy.
   *
   * @public
   */
  snapshots: PolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourceAssociationsInput {
  /**
   * The identifier of the resource to list associations for. This is the resource's Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes an association between a resource and another entity.
 *
 * @public
 */
export interface ResourceAssociation {
  /**
   * The ARN of the associated resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The type of the associated resource, such as `Policy`, `Template`, or `Deployment`.
   *
   * @public
   */
  resourceType: ServiceResourceType | undefined;
}

/**
 * @public
 */
export interface ListResourceAssociationsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of resource associations.
   *
   * @public
   */
  resourceAssociations: ResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListRulesInput {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results by status, either `ACTIVE` or `DRAFT`.
   *
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * Summary information about a rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The service-generated id of the rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType?: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of rules.
   *
   * @public
   */
  rules: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRuleSnapshotsInput {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleSnapshotsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The snapshots of the rule.
   *
   * @public
   */
  snapshots: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScopesInput {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results by status: `ACTIVE`, `DRAFT`, or `DISABLED`.
   *
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * Summary information about a scope.
 *
 * @public
 */
export interface ScopeSummary {
  /**
   * The service-generated id of the scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable), `ACTIVE` (published, in use), or `DISABLED` (deactivated; changes cannot be published until the resource is re-enabled).
   *
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListScopesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of scopes.
   *
   * @public
   */
  scopes: ScopeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScopeSnapshotsInput {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScopeSnapshotsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The snapshots of the scope.
   *
   * @public
   */
  snapshots: ScopeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource to list tags for. The ARN must not include a `:DRAFT` qualifier.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags associated with the resource. Each tag is a key-value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplatesInput {
  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results by status, either `ACTIVE` or `DRAFT`.
   *
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * Summary information about a template.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * The service-generated id of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType?: TemplateFirewallType | undefined;

  /**
   * The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of templates.
   *
   * @public
   */
  templates: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateSnapshotsInput {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned `nextToken` value in a subsequent call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateSnapshotsOutput {
  /**
   * The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The snapshots of the template.
   *
   * @public
   */
  snapshots: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyInput {
  /**
   * The identifier of the policy. This is the policy's Amazon Resource Name (ARN).
   *
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The templates and rules to associate with the policy. For AWS WAF policies, specify 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list must be empty.
   *
   * @public
   */
  associatedTemplateAndRuleList?: TemplateOrRuleReference[] | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`).
   *
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyOutput {
  /**
   * The service-generated id of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The priority of the resource. A lower number indicates a higher priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.
   *
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.
   *
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountRequest {
  /**
   * The AWS account ID to set as the AWS Network Security Manager administrator account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The priority to assign to the administrator account.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The scope of accounts, organizational units, and firewall types that the administrator can manage.
   *
   * @public
   */
  adminScope?: AdminScopeInput | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountResponse {
  /**
   * The details of the administrator account that was set.
   *
   * @public
   */
  adminAccountDetails?: AdminAccountDetails | undefined;
}

/**
 * @public
 */
export interface UpdateRuleInput {
  /**
   * The identifier of the rule. This is the rule's Amazon Resource Name (ARN).
   *
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken: string | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type. For an AWS WAF `INSPECTION` rule, provide an AWS WAF rule group. For an AWS WAF `CONFIGURATION` rule, provide a single web ACL setting, such as `DefaultAction` or `VisibilityConfig`; use `wafConfigDataType` to declare which setting the document contains. For the schema of each setting and complete examples, see [Writing rule configurations](https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html) in the *AWS Network Security Manager Developer Guide*.
   *
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`).
   *
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleOutput {
  /**
   * The service-generated id of the rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * The type of the rule. `CONFIGURATION` rules contain firewall settings, and `INSPECTION` rules contain rule groups.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource to tag. The ARN must not include a `:DRAFT` qualifier.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UpdateTemplateInput {
  /**
   * The identifier of the template. This is the template's Amazon Resource Name (ARN).
   *
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList?: RuleReference[] | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`).
   *
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateOutput {
  /**
   * The service-generated id of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The rules associated with the template.
   *
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The firewall type associated with the resource.
   *
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource to remove tags from. The ARN must not include a `:DRAFT` qualifier.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * A logical expression that selects resources. Exactly one of `criteria`, `and`, `or`, or `not` is set.
 *
 * @public
 */
export type ResourceLogicalExpression =
  | ResourceLogicalExpression.AndMember
  | ResourceLogicalExpression.CriteriaMember
  | ResourceLogicalExpression.NotMember
  | ResourceLogicalExpression.OrMember
  | ResourceLogicalExpression.$UnknownMember;

/**
 * @public
 */
export namespace ResourceLogicalExpression {
  /**
   * A leaf condition that matches resources by tag or by resource-type-specific configuration.
   *
   * @public
   */
  export interface CriteriaMember {
    criteria: ResourceCriteria;
    and?: never;
    or?: never;
    not?: never;
    $unknown?: never;
  }

  /**
   * A list of subexpressions that must all match.
   *
   * @public
   */
  export interface AndMember {
    criteria?: never;
    and: ResourceLogicalExpression[];
    or?: never;
    not?: never;
    $unknown?: never;
  }

  /**
   * A list of subexpressions of which at least one must match.
   *
   * @public
   */
  export interface OrMember {
    criteria?: never;
    and?: never;
    or: ResourceLogicalExpression[];
    not?: never;
    $unknown?: never;
  }

  /**
   * A subexpression that must not match.
   *
   * @public
   */
  export interface NotMember {
    criteria?: never;
    and?: never;
    or?: never;
    not: ResourceLogicalExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    criteria?: never;
    and?: never;
    or?: never;
    not?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    criteria: (value: ResourceCriteria) => T;
    and: (value: ResourceLogicalExpression[]) => T;
    or: (value: ResourceLogicalExpression[]) => T;
    not: (value: ResourceLogicalExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A set of resources defined by explicit ARNs, a logical expression, or both.
 *
 * @public
 */
export interface ResourceSet {
  /**
   * An explicit list of resource ARNs.
   *
   * @public
   */
  explicitArns?: string[] | undefined;

  /**
   * A logical expression that selects resources by combining criteria with AND, OR, and NOT operators.
   *
   * @public
   */
  expression?: ResourceLogicalExpression | undefined;
}

/**
 * Defines which resources of a given type are in scope. Exactly one of `includeAll`, `include`, or `exclude` is set.
 *
 * @public
 */
export interface ResourceScope {
  /**
   * Includes all resources of the resource type.
   *
   * @public
   */
  includeAll?: boolean | undefined;

  /**
   * Includes the resources that match the specified criteria or explicit ARNs.
   *
   * @public
   */
  include?: ResourceSet | undefined;

  /**
   * Excludes the resources that match the specified criteria or explicit ARNs.
   *
   * @public
   */
  exclude?: ResourceSet | undefined;
}

/**
 * Defines which accounts and resources are in scope.
 *
 * @public
 */
export interface ScopeConfiguration {
  /**
   * The account filter that determines which accounts are in scope. When set, exactly one of `includeAll`, `include`, or `exclude` is set.
   *
   * Organization administrators must include an account filter in every scope configuration. Single-account administrators must omit it: a scope without an account filter applies only to the administrator's own account. The presence of an account filter is fixed when the scope is created: an update can't add an account filter to a scope that was created without one, or remove the account filter from a scope that was created with one.
   *
   * @public
   */
  accountFilter?: AccountFilter | undefined;

  /**
   * The resource-level scoping configuration, keyed by resource type, that defines which resources within the selected accounts are in scope.
   *
   * @public
   */
  resourceScopes: Partial<Record<ScopeResourceType, ResourceScope>> | undefined;
}

/**
 * @public
 */
export interface CreateScopeInput {
  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope.
   *
   * @public
   */
  scopeConfiguration: ScopeConfiguration | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`). Default: `true`.
   *
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * The tags to add to the resource when it is created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScopeOutput {
  /**
   * The service-generated id of the scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateScopeSnapshotOutput {
  /**
   * The service-generated id of the scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetScopeOutput {
  /**
   * The service-generated id of the scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable), `ACTIVE` (published, in use), or `DISABLED` (deactivated; changes cannot be published until the resource is re-enabled).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateScopeInput {
  /**
   * The identifier of the scope. This is the scope's Amazon Resource Name (ARN).
   *
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope. If you don't include this member, the scope keeps its existing configuration.
   *
   * A new configuration can change which accounts and resources are selected, but it can't add or remove the account filter itself: a scope created for multi-account use stays multi-account, and a scope created for single-account use stays single-account.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * Specifies whether to publish the resource. When `true`, the resource is saved in published (`ACTIVE`) state. When `false`, it is saved as a draft (`DRAFT`).
   *
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateScopeOutput {
  /**
   * The service-generated id of the scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The name of the scope.
   *
   * @public
   */
  scopeName: string | undefined;

  /**
   * A description of the scope.
   *
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * The configuration that defines which accounts and resources are in scope.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * The current status of the resource: `DRAFT` (unpublished, editable) or `ACTIVE` (published, in use).
   *
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * The version of the resource.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A token used for optimistic concurrency control. Each read and write returns an `updateToken`. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.
   *
   * @public
   */
  updateToken?: string | undefined;

  /**
   * Specifies whether the resource is a snapshot of a published version.
   *
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * Specifies whether a published version of the resource exists.
   *
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * The time when the resource was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}
