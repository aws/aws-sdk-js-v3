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
 * <p>A set of AWS accounts and organizational units.</p>
 * @public
 */
export interface AccountSet {
  /**
   * <p>The list of AWS account IDs.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The AWS Organizations organizational units (OUs) in the selection.</p>
   * @public
   */
  organizationalUnits?: string[] | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * <p>Determines which accounts are in scope. Exactly one of <code>includeAll</code>, <code>include</code>, or <code>exclude</code> is set.</p>
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
   * <p>Includes all accounts. No account filtering is applied.</p>
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    include?: never;
    exclude?: never;
    $unknown?: never;
  }

  /**
   * <p>Includes only the specified accounts and organizational units.</p>
   * @public
   */
  export interface IncludeMember {
    includeAll?: never;
    include: AccountSet;
    exclude?: never;
    $unknown?: never;
  }

  /**
   * <p>Excludes the specified accounts and organizational units. All others are in scope.</p>
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
 * <p>A reference to an AWS account, with optional display metadata.</p>
 * @public
 */
export interface AccountReference {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The display name of the account.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The email address associated with the account.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * <p>Defines the firewall types that an administrator can create and manage.</p>
 * @public
 */
export interface AdminFirewallTypeScope {
  /**
   * <p>Specifies whether the administrator can manage all firewall types, except for third-party firewall types.</p>
   * @public
   */
  allFirewallTypesEnabled?: boolean | undefined;

  /**
   * <p>The list of firewall types that the administrator can manage.</p>
   * @public
   */
  firewallTypes?: PolicyFirewallType[] | undefined;
}

/**
 * <p>A reference to an AWS Organizations organizational unit (OU), with optional display metadata.</p>
 * @public
 */
export interface OrganizationalUnitReference {
  /**
   * <p>The ID of the AWS Organizations organizational unit (OU).</p>
   * @public
   */
  ouId: string | undefined;

  /**
   * <p>The display name of the organizational unit.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>A selection of accounts and organizational units. This is the reference form, which includes display metadata.</p>
 * @public
 */
export interface AdminScopeSelection {
  /**
   * <p>The AWS accounts in the selection.</p>
   * @public
   */
  accounts?: AccountReference[] | undefined;

  /**
   * <p>The AWS Organizations organizational units (OUs) in the selection.</p>
   * @public
   */
  organizationalUnits?: OrganizationalUnitReference[] | undefined;
}

/**
 * <p>Determines which accounts and organizational units are in an administrator's scope. This is the reference form, which includes display metadata.</p>
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
   * <p>All accounts and organizational units are in scope.</p>
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>Only the specified accounts and organizational units are in the administrator's scope.</p>
   * @public
   */
  export interface IncludeOnlyMember {
    includeAll?: never;
    includeOnly: AdminScopeSelection;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The accounts and organizational units to exclude from the administrator's scope. All others are in scope.</p>
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
 * <p>Defines the accounts, organizational units, and firewall types that an administrator can manage.</p>
 * @public
 */
export interface AdminScope {
  /**
   * <p>The filter that determines which accounts and organizational units are in the administrator's scope.</p>
   * @public
   */
  scopeFilter?: AdminScopeFilter | undefined;

  /**
   * <p>The firewall types that the administrator can create and manage.</p>
   * @public
   */
  firewallTypeScope?: AdminFirewallTypeScope | undefined;
}

/**
 * <p>The details of an AWS Network Security Manager administrator account.</p>
 * @public
 */
export interface AdminAccountDetails {
  /**
   * <p>The AWS account ID of the administrator account.</p>
   * @public
   */
  adminAccount: string | undefined;

  /**
   * <p>The priority assigned to the administrator account.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The administrative scope, which defines the accounts, organizational units, and firewall types that the administrator can manage.</p>
   * @public
   */
  adminScope?: AdminScope | undefined;

  /**
   * <p>The status of the administrator account, either <code>ONBOARDED</code> or <code>OFFBOARDED</code>.</p>
   * @public
   */
  status?: AdminAccountStatus | undefined;
}

/**
 * <p>Summary information about an AWS Network Security Manager administrator account.</p>
 * @public
 */
export interface AdminAccountSummary {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The priority assigned to the administrator account.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The name of the administrator account.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The email address associated with the account.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * <p>A selection of accounts and organizational units. This is the input form, which uses account and organizational unit IDs.</p>
 * @public
 */
export interface AdminScopeSelectionInput {
  /**
   * <p>The AWS accounts in the selection.</p>
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * <p>The AWS Organizations organizational units (OUs) in the selection.</p>
   * @public
   */
  organizationalUnits?: string[] | undefined;
}

/**
 * <p>Determines which accounts and organizational units are in an administrator's scope. This is the input form, which uses account and organizational unit IDs.</p>
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
   * <p>All accounts and organizational units are in scope.</p>
   * @public
   */
  export interface IncludeAllMember {
    includeAll: Unit;
    includeOnly?: never;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>Only the specified accounts and organizational units are in the administrator's scope.</p>
   * @public
   */
  export interface IncludeOnlyMember {
    includeAll?: never;
    includeOnly: AdminScopeSelectionInput;
    excludeOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The accounts and organizational units to exclude from the administrator's scope. All others are in scope.</p>
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
 * <p>The administrative scope configuration provided on input, using account and organizational unit IDs.</p>
 * @public
 */
export interface AdminScopeInput {
  /**
   * <p>The filter that determines which accounts and organizational units are in the administrator's scope.</p>
   * @public
   */
  scopeFilter?: AdminScopeFilterInput | undefined;

  /**
   * <p>The firewall types that the administrator can create and manage.</p>
   * @public
   */
  firewallTypeScope?: AdminFirewallTypeScope | undefined;
}

/**
 * <p>Filter criteria specific to Application Load Balancers.</p>
 * @public
 */
export interface AlbConfiguration {
  /**
   * <p>The scheme of the Application Load Balancer, either <code>internet-facing</code> or <code>internal</code>.</p>
   * @public
   */
  scheme?: Scheme | undefined;

  /**
   * <p>The IP address type of the Application Load Balancer.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;
}

/**
 * <p>An association between a deployment and a policy, as returned in outputs. The corresponding request structure is <code>PolicyReference</code>.</p>
 * @public
 */
export interface AssociatedPolicy {
  /**
   * <p>The ARN of the associated policy, including its version qualifier when a specific published version is pinned (for example, <code>...:policy:abc123:3</code>).</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * <p>An association between a template and a rule, as returned in outputs. The corresponding request structure is <code>RuleReference</code>.</p>
 * @public
 */
export interface AssociatedRule {
  /**
   * <p>The ARN of the associated rule.</p>
   * @public
   */
  ruleArn: string | undefined;
}

/**
 * <p>An association between a deployment and a scope, as returned in outputs. The corresponding request structure is <code>ScopeReference</code>.</p>
 * @public
 */
export interface AssociatedScope {
  /**
   * <p>The ARN of the associated scope.</p>
   * @public
   */
  scopeArn: string | undefined;
}

/**
 * <p>An association between a policy and either a template or a rule, as returned in outputs. Exactly one of <code>templateArn</code> or <code>ruleArn</code> is set. The corresponding request structure is <code>TemplateOrRuleReference</code>.</p>
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
   * <p>The ARN of the associated template.</p>
   * @public
   */
  export interface TemplateArnMember {
    templateArn: string;
    ruleArn?: never;
    $unknown?: never;
  }

  /**
   * <p>The ARN of the associated rule.</p>
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
 * <p>Describes a single configuration value that does not match the intended configuration.</p>
 * @public
 */
export interface ConfigurationIssue {
  /**
   * <p>The name of the configuration setting that is in conflict.</p>
   * @public
   */
  configurationName?: string | undefined;

  /**
   * <p>The configuration value that AWS Network Security Manager expected.</p>
   * @public
   */
  expectedValue?: string | undefined;

  /**
   * <p>The configuration value that was found on the resource.</p>
   * @public
   */
  actualValue?: string | undefined;
}

/**
 * <p>A reference to a policy in a create or update request.</p>
 * @public
 */
export interface PolicyReference {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN), optionally version-qualified to pin a specific published version.</p>
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * <p>A reference to a scope in a create or update request.</p>
 * @public
 */
export interface ScopeReference {
  /**
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * <p>Configuration settings that control a deployment's behavior.</p>
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * <p>Specifies whether aggregate synchronization status details for the resources covered by this deployment are visible across accounts. Default: <code>false</code>.</p>
   * @public
   */
  enableCrossAccountVisibility: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList: PolicyReference[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList: ScopeReference[] | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>). Default: <code>true</code>.</p>
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * <p>The tags to add to the resource when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Coverage information for one firewall type within a deployment. It lists the deployment's policies that have this firewall type. It also lists the resource types in the deployment's scope that the firewall type protects.</p>
 * @public
 */
export interface DeploymentCoverageEntry {
  /**
   * <p>The firewall type that the policies in this entry share.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the deployment's policies that have this firewall type.</p>
   * @public
   */
  policyArns: string[] | undefined;

  /**
   * <p>The resource types in the deployment's scope that this firewall type protects. This list is empty if the scope does not select any resource types that the firewall type protects.</p>
   * @public
   */
  inScopeResourceTypes: ScopeResourceType[] | undefined;
}

/**
 * <p>A warning about a potential issue with a deployment.</p>
 * @public
 */
export interface DeploymentWarningEntry {
  /**
   * <p>A code that identifies the type of warning.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The ARN of the policy that the warning relates to.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>A human-readable description of the warning.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * <p>The service-generated id of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.</p>
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * <p>Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.</p>
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Describes a single request field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing the validation error for the field.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentSnapshotInput {
  /**
   * <p>The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the snapshot when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentSnapshotOutput {
  /**
   * <p>The service-generated id of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A reference to either a template or a rule in a create or update request. Set exactly one of <code>templateIdentifier</code> or <code>ruleIdentifier</code>.</p>
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
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  export interface TemplateIdentifierMember {
    templateIdentifier: string;
    ruleIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
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
 * <p>AWS WAF-specific policy configuration settings.</p>
 * @public
 */
export interface WafConfig {
  /**
   * <p>Determines how AWS Network Security Manager handles remediation when a resource already has a customer-created web ACL. Required for AWS WAF policies.</p>
   * @public
   */
  existingCustomerWebACLResolution: ExistingCustomerWebACLResolution | undefined;

  /**
   * <p>The conflict-resolution strategy for AWS WAF policies. Required for AWS WAF policies.</p>
   * @public
   */
  conflictResolution: WAFConflictResolutionOptions | undefined;
}

/**
 * <p>Configuration settings that control a policy's behavior.</p>
 * @public
 */
export interface PolicyConfiguration {
  /**
   * <p>Specifies whether AWS Network Security Manager automatically remediates noncompliant resources. Default: <code>false</code>.</p>
   * @public
   */
  remediationEnabled: boolean | undefined;

  /**
   * <p>Specifies whether AWS Network Security Manager automatically removes the resources it created when they are no longer needed. Default: <code>false</code>.</p>
   * @public
   */
  resourcesCleanUp: boolean | undefined;

  /**
   * <p>AWS WAF-specific policy settings. This is populated only for AWS WAF policies.</p>
   * @public
   */
  wafConfig?: WafConfig | undefined;
}

/**
 * @public
 */
export interface CreatePolicyInput {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The templates and rules to associate with the policy. For AWS WAF policies, specify 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list must be empty.</p>
   * @public
   */
  associatedTemplateAndRuleList?: TemplateOrRuleReference[] | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration: PolicyConfiguration | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>). Default: <code>true</code>.</p>
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * <p>The tags to add to the resource when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyOutput {
  /**
   * <p>The service-generated id of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.</p>
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicySnapshotInput {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN).</p>
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the snapshot when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicySnapshotOutput {
  /**
   * <p>The service-generated id of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.</p>
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRuleInput {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type. For an AWS WAF <code>INSPECTION</code> rule, provide an AWS WAF rule group. For an AWS WAF <code>CONFIGURATION</code> rule, provide a single web ACL setting, such as <code>DefaultAction</code> or <code>VisibilityConfig</code>; use <code>wafConfigDataType</code> to declare which setting the document contains. For the schema of each setting and complete examples, see <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html">Writing rule configurations</a> in the <i>AWS Network Security Manager Developer Guide</i>.</p>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>). Default: <code>true</code>.</p>
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * <p>The tags to add to the resource when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleOutput {
  /**
   * <p>The service-generated id of the rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.</p>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRuleSnapshotInput {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the snapshot when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleSnapshotOutput {
  /**
   * <p>The service-generated id of the rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.</p>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A leaf condition that matches resources by tag or by resource-type-specific configuration.</p>
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
   * <p>Tag key-value pairs used to match resources.</p>
   * @public
   */
  export interface TagsMember {
    tags: Record<string, string>;
    albConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter criteria specific to Application Load Balancers.</p>
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
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the snapshot when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A reference to a rule in a create or update request.</p>
 * @public
 */
export interface RuleReference {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateInput {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList: RuleReference[] | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>). Default: <code>true</code>.</p>
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * <p>The tags to add to the resource when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateOutput {
  /**
   * <p>The service-generated id of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSnapshotInput {
  /**
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the snapshot when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSnapshotOutput {
  /**
   * <p>The service-generated id of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAdminAccountRequest {
  /**
   * <p>The AWS account ID of the administrator account to remove.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * <p>The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyInput {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN).</p>
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleInput {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteScopeInput {
  /**
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateInput {
  /**
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  templateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * <p>The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * <p>The service-generated id of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable), <code>ACTIVE</code> (published, in use), or <code>DISABLED</code> (deactivated; changes cannot be published until the resource is re-enabled).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.</p>
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * <p>Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.</p>
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results by status: <code>ACTIVE</code>, <code>DRAFT</code>, or <code>DISABLED</code>.</p>
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * <p>Summary information about a deployment.</p>
 * @public
 */
export interface DeploymentSummary {
  /**
   * <p>The service-generated id of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable), <code>ACTIVE</code> (published, in use), or <code>DISABLED</code> (deactivated; changes cannot be published until the resource is re-enabled).</p>
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of deployments.</p>
   * @public
   */
  deployments: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentSnapshotsInput {
  /**
   * <p>The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentSnapshotsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The snapshots of the deployment.</p>
   * @public
   */
  snapshots: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourceSynchronizationStatusesInput {
  /**
   * <p>The identifier of the deployment to list synchronization statuses for. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * <p>Filters the results by synchronization status, such as <code>IN_SYNC</code> or <code>OUT_OF_SYNC</code>.</p>
   * @public
   */
  synchronizationStatus?: SynchronizationStatus | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Indicates that details are not visible because of cross-account restrictions.</p>
 * @public
 */
export interface NotVisibleMarker {
  /**
   * <p>The reason the details are not visible.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * <p>Details about the ways in which a firewall's configuration differs from the intended configuration.</p>
 * @public
 */
export interface InvalidFirewallReasons {
  /**
   * <p>Single-value configuration settings whose values do not match the expected values.</p>
   * @public
   */
  incorrectSingleValueConfigurations?: ConfigurationIssue[] | undefined;

  /**
   * <p>Appendable configuration values that are expected but missing.</p>
   * @public
   */
  missingAppendableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * <p>Appendable configuration values that are present but not expected.</p>
   * @public
   */
  unexpectedAppendableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * <p>Appendable configuration values that are present but in the wrong order.</p>
   * @public
   */
  incorrectAppendableConfigurationOrder?: ConfigurationIssue[] | undefined;

  /**
   * <p>Mergeable configuration values that are expected but missing.</p>
   * @public
   */
  missingMergeableConfigurationValues?: ConfigurationIssue[] | undefined;

  /**
   * <p>Mergeable configuration values that are present but not expected.</p>
   * @public
   */
  unexpectedMergeableConfigurationValues?: ConfigurationIssue[] | undefined;
}

/**
 * <p>Describes why a firewall is out of sync. Exactly one of <code>missingFirewall</code> or <code>invalidFirewall</code> is set.</p>
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
   * <p>Indicates that an expected firewall is missing. The value describes the missing firewall.</p>
   * @public
   */
  export interface MissingFirewallMember {
    missingFirewall: string;
    invalidFirewall?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a firewall whose configuration does not match the intended configuration.</p>
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
 * <p>The out-of-sync reasons for a resource, or a marker indicating that the details are not visible. Exactly one member is set.</p>
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
   * <p>The out-of-sync reasons, keyed by firewall type.</p>
   * @public
   */
  export interface ReasonsMember {
    reasons: Partial<Record<PolicyFirewallType, FirewallSyncReason>>;
    notVisible?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that the details are not visible because of cross-account restrictions.</p>
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
 * <p>Details about a remediation issue for a firewall type.</p>
 * @public
 */
export interface RemediationIssueDetails {
  /**
   * <p>The type of remediation issue.</p>
   * @public
   */
  issueType?: string | undefined;

  /**
   * <p>A human-readable description of the remediation issue.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A recommended action for resolving the remediation issue.</p>
   * @public
   */
  correctiveAction?: string | undefined;
}

/**
 * <p>Remediation issue details for a resource, or a marker indicating that the details are not visible. Exactly one member is set.</p>
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
   * <p>The remediation issues, keyed by firewall type.</p>
   * @public
   */
  export interface IssuesMember {
    issues: Partial<Record<PolicyFirewallType, RemediationIssueDetails>>;
    notVisible?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that the details are not visible because of cross-account restrictions.</p>
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
 * <p>The synchronization status of a resource covered by a deployment.</p>
 * @public
 */
export interface ResourceSynchronizationStatusSummary {
  /**
   * <p>The synchronization status of the resource, such as <code>IN_SYNC</code> or <code>OUT_OF_SYNC</code>.</p>
   * @public
   */
  synchronizationStatus: SynchronizationStatus | undefined;

  /**
   * <p>The AWS account ID that owns the resource.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The ARN of the resource whose synchronization status is reported.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the deployment that the synchronization status is associated with. This is absent for aggregate (cross-deployment) statuses.</p>
   * @public
   */
  deploymentArn?: string | undefined;

  /**
   * <p>The type of the resource, in AWS CloudFormation format.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reasons the resource is out of sync, keyed by firewall type. This is null when the resource is in sync.</p>
   * @public
   */
  outOfSyncReasons?: OutOfSyncReasonsView | undefined;

  /**
   * <p>Details about remediation issues, keyed by firewall type. This is null when there are no remediation issues.</p>
   * @public
   */
  remediationIssues?: RemediationIssuesView | undefined;

  /**
   * <p>The time when the synchronization status was last evaluated.</p>
   * @public
   */
  evaluatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceSynchronizationStatusesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of resource synchronization statuses.</p>
   * @public
   */
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentInput {
  /**
   * <p>The identifier of the deployment. This is the deployment's Amazon Resource Name (ARN).</p>
   * @public
   */
  deploymentIdentifier: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList?: PolicyReference[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList?: ScopeReference[] | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>).</p>
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentOutput {
  /**
   * <p>The service-generated id of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  deploymentArn: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  deploymentName: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  deploymentDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The configuration settings for the deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The policies associated with the deployment.</p>
   * @public
   */
  associatedPolicyList: AssociatedPolicy[] | undefined;

  /**
   * <p>The scope associated with the deployment. A deployment has exactly one scope.</p>
   * @public
   */
  associatedScopeList: AssociatedScope[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The coverage information for the deployment. For each firewall type, it shows which policies have that firewall type and which in-scope resource types the firewall type protects.</p>
   * @public
   */
  deploymentCoverage?: DeploymentCoverageEntry[] | undefined;

  /**
   * <p>Warnings about potential issues, such as a policy that has no applicable resources in the deployment's scope.</p>
   * @public
   */
  warnings?: DeploymentWarningEntry[] | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GenerateRuleConfigurationRequest {
  /**
   * <p>A natural-language description of the configuration that you want to generate.</p>
   * @public
   */
  prompt: string | undefined;

  /**
   * <p>The firewall type of the rule.</p>
   * @public
   */
  ruleFirewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>For AWS WAF configuration rules, the specific AWS WAF configuration variant to generate. This is optional; if you omit it, the service selects the variant.</p>
   * @public
   */
  wafConfigDataType?: WAFConfigDataType | undefined;

  /**
   * <p>An existing configuration to edit, as a JSON string. When you provide this value, the operation edits the configuration. When you omit it, the operation generates a new configuration.</p>
   * @public
   */
  currentConfiguration?: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GenerateRuleConfigurationResponse {
  /**
   * <p>The generated configuration, as a JSON string. You can use this value in the <code>configuration</code> field of a rule.</p>
   * @public
   */
  configuration: string | undefined;

  /**
   * <p>Reserved for a future human-readable description of the generated configuration. This field is currently not populated.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetAdminAccountRequest {
  /**
   * <p>The AWS account ID of the administrator account to retrieve.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetAdminAccountResponse {
  /**
   * <p>The details of the administrator account.</p>
   * @public
   */
  adminAccountDetails?: AdminAccountDetails | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN).</p>
   * @public
   */
  policyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * <p>The service-generated id of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.</p>
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRuleInput {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleOutput {
  /**
   * <p>The service-generated id of the rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.</p>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetScopeInput {
  /**
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateInput {
  /**
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  templateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateOutput {
  /**
   * <p>The service-generated id of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsRequest {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsResponse {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of administrator accounts.</p>
   * @public
   */
  adminAccounts: AdminAccountSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAggregateResourceSynchronizationStatusesInput {
  /**
   * <p>Filters the results by synchronization status, such as <code>IN_SYNC</code> or <code>OUT_OF_SYNC</code>.</p>
   * @public
   */
  synchronizationStatus?: SynchronizationStatus | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateResourceSynchronizationStatusesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of resource synchronization statuses.</p>
   * @public
   */
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesInput {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results by status, either <code>ACTIVE</code> or <code>DRAFT</code>.</p>
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * <p>Summary information about a policy.</p>
 * @public
 */
export interface PolicySummary {
  /**
   * <p>The service-generated id of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType?: PolicyFirewallType | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPoliciesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of policies.</p>
   * @public
   */
  policies: PolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListPolicySnapshotsInput {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN).</p>
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicySnapshotsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The snapshots of the policy.</p>
   * @public
   */
  snapshots: PolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourceAssociationsInput {
  /**
   * <p>The identifier of the resource to list associations for. This is the resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes an association between a resource and another entity.</p>
 * @public
 */
export interface ResourceAssociation {
  /**
   * <p>The ARN of the associated resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The type of the associated resource, such as <code>Policy</code>, <code>Template</code>, or <code>Deployment</code>.</p>
   * @public
   */
  resourceType: ServiceResourceType | undefined;
}

/**
 * @public
 */
export interface ListResourceAssociationsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of resource associations.</p>
   * @public
   */
  resourceAssociations: ResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListRulesInput {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results by status, either <code>ACTIVE</code> or <code>DRAFT</code>.</p>
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * <p>Summary information about a rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The service-generated id of the rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType?: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of rules.</p>
   * @public
   */
  rules: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRuleSnapshotsInput {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleSnapshotsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The snapshots of the rule.</p>
   * @public
   */
  snapshots: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScopesInput {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results by status: <code>ACTIVE</code>, <code>DRAFT</code>, or <code>DISABLED</code>.</p>
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * <p>Summary information about a scope.</p>
 * @public
 */
export interface ScopeSummary {
  /**
   * <p>The service-generated id of the scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable), <code>ACTIVE</code> (published, in use), or <code>DISABLED</code> (deactivated; changes cannot be published until the resource is re-enabled).</p>
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListScopesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of scopes.</p>
   * @public
   */
  scopes: ScopeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScopeSnapshotsInput {
  /**
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScopeSnapshotsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The snapshots of the scope.</p>
   * @public
   */
  snapshots: ScopeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource to list tags for. The ARN must not include a <code>:DRAFT</code> qualifier.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags associated with the resource. Each tag is a key-value pair.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplatesInput {
  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results by status, either <code>ACTIVE</code> or <code>DRAFT</code>.</p>
   * @public
   */
  status?: EntityStatusFilter | undefined;
}

/**
 * <p>Summary information about a template.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The service-generated id of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status?: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType?: TemplateFirewallType | undefined;

  /**
   * <p>The time when the resource was last updated. For a snapshot, this is the time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of templates.</p>
   * @public
   */
  templates: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateSnapshotsInput {
  /**
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range: 1-100. To retrieve the remaining results, use the returned <code>nextToken</code> value in a subsequent call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateSnapshotsOutput {
  /**
   * <p>The token for the next page of results. To retrieve the next page, call the operation again and provide this value. When there are no more results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The snapshots of the template.</p>
   * @public
   */
  snapshots: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyInput {
  /**
   * <p>The identifier of the policy. This is the policy's Amazon Resource Name (ARN).</p>
   * @public
   */
  policyIdentifier: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The templates and rules to associate with the policy. For AWS WAF policies, specify 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list must be empty.</p>
   * @public
   */
  associatedTemplateAndRuleList?: TemplateOrRuleReference[] | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>).</p>
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyOutput {
  /**
   * <p>The service-generated id of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The priority of the resource. A lower number indicates a higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The templates and rules associated with the policy. For AWS WAF policies, this list contains 1 to 100 templates or rules, of which at most 2 can be templates. For AWS Shield Advanced policies, this list is empty.</p>
   * @public
   */
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[] | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: PolicyFirewallType | undefined;

  /**
   * <p>The configuration settings that control the policy's behavior, including remediation and firewall-type-specific settings.</p>
   * @public
   */
  policyConfiguration?: PolicyConfiguration | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountRequest {
  /**
   * <p>The AWS account ID to set as the AWS Network Security Manager administrator account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The priority to assign to the administrator account.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The scope of accounts, organizational units, and firewall types that the administrator can manage.</p>
   * @public
   */
  adminScope?: AdminScopeInput | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountResponse {
  /**
   * <p>The details of the administrator account that was set.</p>
   * @public
   */
  adminAccountDetails?: AdminAccountDetails | undefined;
}

/**
 * @public
 */
export interface UpdateRuleInput {
  /**
   * <p>The identifier of the rule. This is the rule's Amazon Resource Name (ARN).</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken: string | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type. For an AWS WAF <code>INSPECTION</code> rule, provide an AWS WAF rule group. For an AWS WAF <code>CONFIGURATION</code> rule, provide a single web ACL setting, such as <code>DefaultAction</code> or <code>VisibilityConfig</code>; use <code>wafConfigDataType</code> to declare which setting the document contains. For the schema of each setting and complete examples, see <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html">Writing rule configurations</a> in the <i>AWS Network Security Manager Developer Guide</i>.</p>
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>).</p>
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleOutput {
  /**
   * <p>The service-generated id of the rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: RuleFirewallType | undefined;

  /**
   * <p>The type of the rule. <code>CONFIGURATION</code> rules contain firewall settings, and <code>INSPECTION</code> rules contain rule groups.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  ruleDescription?: string | undefined;

  /**
   * <p>The firewall configuration for the rule, as a JSON document. The structure depends on the rule's firewall type and rule type.</p>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource to tag. The ARN must not include a <code>:DRAFT</code> qualifier.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
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
   * <p>The identifier of the template. This is the template's Amazon Resource Name (ARN).</p>
   * @public
   */
  templateIdentifier: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList?: RuleReference[] | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>).</p>
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateOutput {
  /**
   * <p>The service-generated id of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The rules associated with the template.</p>
   * @public
   */
  associatedRuleList: AssociatedRule[] | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The firewall type associated with the resource.</p>
   * @public
   */
  firewallType: TemplateFirewallType | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource to remove tags from. The ARN must not include a <code>:DRAFT</code> qualifier.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>A logical expression that selects resources. Exactly one of <code>criteria</code>, <code>and</code>, <code>or</code>, or <code>not</code> is set.</p>
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
   * <p>A leaf condition that matches resources by tag or by resource-type-specific configuration.</p>
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
   * <p>A list of subexpressions that must all match.</p>
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
   * <p>A list of subexpressions of which at least one must match.</p>
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
   * <p>A subexpression that must not match.</p>
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
 * <p>A set of resources defined by explicit ARNs, a logical expression, or both.</p>
 * @public
 */
export interface ResourceSet {
  /**
   * <p>An explicit list of resource ARNs.</p>
   * @public
   */
  explicitArns?: string[] | undefined;

  /**
   * <p>A logical expression that selects resources by combining criteria with AND, OR, and NOT operators.</p>
   * @public
   */
  expression?: ResourceLogicalExpression | undefined;
}

/**
 * <p>Defines which resources of a given type are in scope. Exactly one of <code>includeAll</code>, <code>include</code>, or <code>exclude</code> is set.</p>
 * @public
 */
export interface ResourceScope {
  /**
   * <p>Includes all resources of the resource type.</p>
   * @public
   */
  includeAll?: boolean | undefined;

  /**
   * <p>Includes the resources that match the specified criteria or explicit ARNs.</p>
   * @public
   */
  include?: ResourceSet | undefined;

  /**
   * <p>Excludes the resources that match the specified criteria or explicit ARNs.</p>
   * @public
   */
  exclude?: ResourceSet | undefined;
}

/**
 * <p>Defines which accounts and resources are in scope.</p>
 * @public
 */
export interface ScopeConfiguration {
  /**
   * <p>The account filter that determines which accounts are in scope. When set, exactly one of <code>includeAll</code>, <code>include</code>, or <code>exclude</code> is set.</p> <p>Organization administrators must include an account filter in every scope configuration. Single-account administrators must omit it: a scope without an account filter applies only to the administrator's own account. The presence of an account filter is fixed when the scope is created: an update can't add an account filter to a scope that was created without one, or remove the account filter from a scope that was created with one.</p>
   * @public
   */
  accountFilter?: AccountFilter | undefined;

  /**
   * <p>The resource-level scoping configuration, keyed by resource type, that defines which resources within the selected accounts are in scope.</p>
   * @public
   */
  resourceScopes: Partial<Record<ScopeResourceType, ResourceScope>> | undefined;
}

/**
 * @public
 */
export interface CreateScopeInput {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope.</p>
   * @public
   */
  scopeConfiguration: ScopeConfiguration | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>). Default: <code>true</code>.</p>
   * @public
   */
  isPublished?: boolean | undefined;

  /**
   * <p>The tags to add to the resource when it is created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScopeOutput {
  /**
   * <p>The service-generated id of the scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope.</p>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateScopeSnapshotOutput {
  /**
   * <p>The service-generated id of the scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope.</p>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetScopeOutput {
  /**
   * <p>The service-generated id of the scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope.</p>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable), <code>ACTIVE</code> (published, in use), or <code>DISABLED</code> (deactivated; changes cannot be published until the resource is re-enabled).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateScopeInput {
  /**
   * <p>The identifier of the scope. This is the scope's Amazon Resource Name (ARN).</p>
   * @public
   */
  scopeIdentifier: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope. If you don't include this member, the scope keeps its existing configuration.</p> <p>A new configuration can change which accounts and resources are selected, but it can't add or remove the account filter itself: a scope created for multi-account use stays multi-account, and a scope created for single-account use stays single-account.</p>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>Specifies whether to publish the resource. When <code>true</code>, the resource is saved in published (<code>ACTIVE</code>) state. When <code>false</code>, it is saved as a draft (<code>DRAFT</code>).</p>
   * @public
   */
  isPublished: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service returns the result of the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateScopeOutput {
  /**
   * <p>The service-generated id of the scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The name of the scope.</p>
   * @public
   */
  scopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  scopeDescription?: string | undefined;

  /**
   * <p>The configuration that defines which accounts and resources are in scope.</p>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>The current status of the resource: <code>DRAFT</code> (unpublished, editable) or <code>ACTIVE</code> (published, in use).</p>
   * @public
   */
  status: EntityStatus | undefined;

  /**
   * <p>The version of the resource.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A token used for optimistic concurrency control. Each read and write returns an <code>updateToken</code>. Provide the most recent value on your next update to detect and prevent conflicting concurrent modifications.</p>
   * @public
   */
  updateToken?: string | undefined;

  /**
   * <p>Specifies whether the resource is a snapshot of a published version.</p>
   * @public
   */
  isSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether a published version of the resource exists.</p>
   * @public
   */
  hasPublishedVersion?: boolean | undefined;

  /**
   * <p>The time when the resource was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}
