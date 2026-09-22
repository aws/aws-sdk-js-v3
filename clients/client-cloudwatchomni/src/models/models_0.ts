// smithy-typescript generated code
import type {
  AccessGrantPermission,
  AccessGrantPrincipalType,
  AccessGrantType,
  AccessProfileType,
  AlertSortField,
  AlertSortOrder,
  AlertState,
  AssumeStatus,
  AuthType,
  Comparator,
  DomainStatus,
  EdgeType,
  EncryptionStrategy,
  IdentityProvider,
  IntegrationStatus,
  IntegrationType,
  NodeCategory,
  NodeType,
  NotificationStatus,
  NotificationTargetType,
  OrganizationCredentialType,
  OrganizationGrantPermission,
  OrganizationGrantPrincipalType,
  PrincipalType,
  QueryLanguage,
  QueryStatus,
  RowScopeOperator,
  Scope,
  Signal,
  SignalType,
  Source,
  SpaceStatus,
  TelemetryType,
  ThresholdMode,
  ViewType,
} from "./enums";

/**
 * A single attribute condition used to match principals for attribute-based
 * access.
 * @public
 */
export interface AccessGrantPrincipalAttribute {
  /**
   * The Identity Center user attribute to match on. One of userName, active,
   * userStatus, displayName, email, name.givenName, name.familyName,
   * enterprise.department, enterprise.division, enterprise.organization,
   * enterprise.costCenter, or enterprise.employeeNumber. Each key may appear
   * only once per grant.
   * @public
   */
  key: string | undefined;

  /**
   * The attribute value.
   * @public
   */
  value: string | undefined;
}

/**
 * The principal receiving the grant. Specify principalId, principalAttributes,
 * or both.
 * @public
 */
export interface AccessGrantPrincipal {
  /**
   * The type of principal receiving the grant.
   * @public
   */
  principalType: AccessGrantPrincipalType | undefined;

  /**
   * The ID of the principal receiving the grant.
   * @public
   */
  principalId?: string | undefined;

  /**
   * Attribute conditions for attribute-based access. When provided, the grant
   * targets any principal matching all specified conditions. Supported only for
   * IDC_USER principals.
   * @public
   */
  principalAttributes?: AccessGrantPrincipalAttribute[] | undefined;
}

/**
 * A single additive row-level filter on an AccessGrant. A row is visible when
 * its value for the given field matches the filter's values. Row filters are
 * additive: the visible rows are the union of all row filters across a
 * principal's matching grants.
 * @public
 */
export interface RowScope {
  /**
   * The field (column) the allowlist applies to (e.g., "serviceName", "accountId").
   * @public
   */
  field: string | undefined;

  /**
   * Match operator applied to this filter's values.
   * @public
   */
  operator: RowScopeOperator | undefined;

  /**
   * The values the field is matched against.
   * @public
   */
  values: string[] | undefined;
}

/**
 * A single resource scope entry within an AccessGrant. Associates a resource
 * type with optional ARN patterns, tag conditions, and row-level filters.
 * @public
 */
export interface ResourceScope {
  /**
   * Resource type name (e.g., "DataSet", "OmniDashboard").
   * @public
   */
  resourceType: string | undefined;

  /**
   * Specific resource ARNs or ARN patterns. When set, actions are limited to
   * these resources. When absent, defaults to "*".
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Tag-based conditions for dynamic resource scoping. Access applies only to
   * resources carrying all of the specified tag key/value pairs.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Signal types this scope's row filtering applies to.
   * Required when rowScopeGroups is set.
   * @public
   */
  signalTypes?: SignalType[] | undefined;

  /**
   * Row-level filters for this scope, as an OR of AND-groups: a row is visible
   * when it matches every filter in any one group. Requires signalTypes.
   *
   * Row filters are additive across a principal's matching grants. A signal type
   * with no matching group is unrestricted, and when rowScopeGroups is omitted
   * all rows are visible for all signal types.
   * @public
   */
  rowScopeGroups?: RowScope[][] | undefined;
}

/**
 * A group of actions within an access grant, together with the resource scopes
 * and context conditions that apply to exactly those actions.
 * @public
 */
export interface ScopedActions {
  /**
   * The actions this group applies to.
   * @public
   */
  actions: string[] | undefined;

  /**
   * Optional resource scopes constraining these actions to specific resources.
   * @public
   */
  resources?: ResourceScope[] | undefined;

  /**
   * Optional context conditions for fine-grained access control on these actions.
   * @public
   */
  contextConditions?: Record<string, string[]> | undefined;
}

/**
 * Full AccessGrant structure returned by API operations.
 * @public
 */
export interface AccessGrant {
  /**
   * The unique ID of the access grant.
   * @public
   */
  grantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   * @public
   */
  grantArn: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name?: string | undefined;

  /**
   * The AWS account ID that owns the grant.
   * @public
   */
  accountId: string | undefined;

  /**
   * The ID of the domain the grant belongs to.
   * @public
   */
  domainId: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: AccessGrantPrincipal | undefined;

  /**
   * The permission granted.
   * @public
   */
  permission: AccessGrantPermission | undefined;

  /**
   * Who manages the grant.
   * @public
   */
  grantType: AccessGrantType | undefined;

  /**
   * The principal that created the grant.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the grant was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the grant was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The space this grant applies to. Domain-scoped grants are returned by
   * ListDomainAccessGrantsForOrganization instead.
   * @public
   */
  spaceId: string | undefined;

  /**
   * Groups of actions allowed by the grant, each with the resource scopes and
   * conditions that limit those actions.
   * @public
   */
  scopedActions?: ScopedActions[] | undefined;
}

/**
 * Summary of an AccessGrant. Call GetAccessGrant for the full grant.
 * @public
 */
export interface AccessGrantSummary {
  /**
   * The unique ID of the access grant.
   * @public
   */
  grantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   * @public
   */
  grantArn: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the domain the grant belongs to.
   * @public
   */
  domainId: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: AccessGrantPrincipal | undefined;

  /**
   * The permission granted.
   * @public
   */
  permission: AccessGrantPermission | undefined;

  /**
   * Who manages the grant.
   * @public
   */
  grantType: AccessGrantType | undefined;

  /**
   * The space this grant applies to. Domain-scoped grants are returned by
   * ListDomainAccessGrantsForOrganization instead.
   * @public
   */
  spaceId: string | undefined;
}

/**
 * An Access Profile.
 * @public
 */
export interface AccessProfile {
  /**
   * The unique ID of the access profile.
   * @public
   */
  profileId: string | undefined;

  /**
   * The ID of the space the profile belongs to.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of this access profile.
   * @public
   */
  arn: string | undefined;

  /**
   * A name that identifies the access profile.
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the access profile.
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the access profile was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the access profile was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The calling principal's authorization to assume this access profile.
   * @public
   */
  assumeStatus?: AssumeStatus | undefined;

  /**
   * Who manages the access profile.
   * @public
   */
  profileType?: AccessProfileType | undefined;
}

/**
 * Summary of an access profile. Call GetAccessProfile for the full profile.
 * @public
 */
export interface AccessProfileSummary {
  /**
   * The unique ID of the access profile.
   * @public
   */
  profileId: string | undefined;

  /**
   * The ARN of this access profile.
   * @public
   */
  arn: string | undefined;

  /**
   * A name that identifies the access profile.
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the access profile.
   * @public
   */
  description?: string | undefined;

  /**
   * Who manages the access profile.
   * @public
   */
  profileType?: AccessProfileType | undefined;
}

/**
 * The destination for a notification.
 * @public
 */
export interface NotificationTarget {
  /**
   * The type of notification target.
   * @public
   */
  type: NotificationTargetType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification target. For \{@code slack\} and
   * \{@code pagerduty\}, an integration ARN as returned by \{@code ListIntegrations\}.
   * @public
   */
  arn: string | undefined;

  /**
   * Additional target-specific metadata.
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * Trigger conditions for a notification rule. \{@code stateValues\} entries
 * combine with OR semantics; empty / omitted = any state.
 * @public
 */
export interface NotificationTrigger {
  /**
   * Alert state(s) that trigger this rule. Empty / omitted = any state.
   * @public
   */
  stateValues?: AlertState[] | undefined;
}

/**
 * Single notification rule: which transitions trigger this rule and
 * where the resulting notification should be sent.
 * @public
 */
export interface NotificationRule {
  /**
   * The conditions that trigger this notification rule.
   * @public
   */
  trigger: NotificationTrigger | undefined;

  /**
   * The destination for notifications from this rule.
   * @public
   */
  target: NotificationTarget | undefined;
}

/**
 * The condition that determines when the alert fires.
 *
 * On UpdateAlert a supplied condition is replaced whole, not merged: an omitted
 * \{@code warningThreshold\} or \{@code criticalThreshold\} removes that tier, and an
 * omitted \{@code thresholdField\} clears it. A condition must keep at least one
 * tier. \{@code thresholdMode\} and \{@code comparator\} are optional at the Smithy
 * level (so a single-tier condition is expressible) but are required whenever a
 * threshold is present; enforced by the service-side validator.
 * @public
 */
export interface AlertCondition {
  /**
   * How the threshold is applied to query results.
   * @public
   */
  thresholdMode?: ThresholdMode | undefined;

  /**
   * The field the threshold is evaluated against.
   * @public
   */
  thresholdField?: string | undefined;

  /**
   * The comparison operator applied to the threshold.
   * @public
   */
  comparator?: Comparator | undefined;

  /**
   * The value at which the alert enters the WARNING state.
   * @public
   */
  warningThreshold?: number | undefined;

  /**
   * The value at which the alert enters the CRITICAL state.
   * @public
   */
  criticalThreshold?: number | undefined;
}

/**
 * Evaluation cadence. \{@code intervalSeconds\} must be one of
 * \{30, 60, 120, 300, 600, 900, 1800, 3600\}; \{@code pendingDurationSeconds\} and
 * \{@code recoveryDurationSeconds\} must be multiples of \{@code intervalSeconds\}.
 * A duration of 0 means fire/clear immediately with no delay.
 *
 * On UpdateAlert a supplied evaluation block is replaced whole, not merged: an
 * omitted \{@code pendingDurationSeconds\} or \{@code recoveryDurationSeconds\} is
 * cleared to unset (no such duration), not preserved and not defaulted to 0.
 * \{@code intervalSeconds\} is required whenever the block is present. All enforced
 * server-side / by the front-door validator.
 * @public
 */
export interface AlertEvaluation {
  /**
   * The interval between evaluations, in seconds.
   * @public
   */
  intervalSeconds: number | undefined;

  /**
   * The duration a breach must persist before the alert fires, in seconds.
   * @public
   */
  pendingDurationSeconds?: number | undefined;

  /**
   * The duration a recovery must persist before the alert clears, in seconds.
   * @public
   */
  recoveryDurationSeconds?: number | undefined;
}

/**
 * Configures how the alert reacts when an evaluation produces no
 * data. \{@code treatAs\} carries the resulting state; defaults to
 * \{@code NODATA\} when omitted.
 * @public
 */
export interface NoData {
  /**
   * The state to report when an evaluation produces no data.
   * @public
   */
  treatAs: AlertState | undefined;
}

/**
 * Query expression and the language it's written in.
 * @public
 */
export interface AlertRuleQuery {
  /**
   * The query language of the expression.
   * @public
   */
  language: QueryLanguage | undefined;

  /**
   * The query expression to evaluate.
   * @public
   */
  expression: string | undefined;
}

/**
 * Telemetry-based rule: what to query, how to evaluate the result, what
 * condition makes it fire, and what to do on missing data.
 * @public
 */
export interface TelemetryRule {
  /**
   * The query expression to evaluate.
   * @public
   */
  query?: AlertRuleQuery | undefined;

  /**
   * The condition that determines when the alert fires.
   * @public
   */
  condition?: AlertCondition | undefined;

  /**
   * The evaluation cadence and durations.
   * @public
   */
  evaluation?: AlertEvaluation | undefined;

  /**
   * How the alert behaves when a query produces no data.
   * @public
   */
  noData?: NoData | undefined;
}

/**
 * Top-level rule definition.
 *
 * \{@code telemetryRule\} members are optional at the Smithy level to support
 * PATCH semantics on UpdateAlert (send only the sub-blocks you want to
 * change). On CreateAlert, presence is enforced by the service-side validator.
 * @public
 */
export type Rule =
  | Rule.TelemetryRuleMember
  | Rule.$UnknownMember;

/**
 * @public
 */
export namespace Rule {
  /**
   * The telemetry-based rule definition.
   * @public
   */
  export interface TelemetryRuleMember {
    telemetryRule: TelemetryRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    telemetryRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    telemetryRule: (value: TelemetryRule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Counts of contributors currently breaching each severity threshold.
 * @public
 */
export interface ContributorSummary {
  /**
   * Number of contributors currently breaching the warning threshold.
   * @public
   */
  warningCount?: number | undefined;

  /**
   * Number of contributors currently breaching the critical threshold.
   * @public
   */
  criticalCount?: number | undefined;
}

/**
 * Structured detail about the current evaluation.
 * @public
 */
export interface AlertStateData {
  /**
   * For COUNT_OF_RESULTS alerts, the row count that breached; null for
   * FIELD_VALUE (multi-contributor) alerts.
   * @public
   */
  thresholdBreached?: number | undefined;
}

/**
 * Live evaluation state for an alert. Read-only, system-managed.
 * @public
 */
export interface AlertStateInfo {
  /**
   * Current flat state.
   * @public
   */
  value: AlertState | undefined;

  /**
   * When the alert transitioned to its current state.
   * @public
   */
  transitionedAt?: Date | undefined;

  /**
   * Counts of contributors currently breaching each severity threshold.
   * Present only when contributor-level tracking is active; absent until
   * the first contributor breaches a \{@code WARNING\} or \{@code CRITICAL\}
   * threshold.
   * @public
   */
  contributorSummary?: ContributorSummary | undefined;

  /**
   * Structured detail about why the alert is in its current state.
   * @public
   */
  data?: AlertStateData | undefined;
}

/**
 * Full alert entity, returned by both CreateAlert and GetAlert. A create and a read of the
 * same alert describe it identically except for \{@code state\}, which only the read paths
 * populate. UpdateAlert returns an empty response.
 * @public
 */
export interface Alert {
  /**
   * The name of the alert.
   * @public
   */
  name: string | undefined;

  /**
   * The stable alert identifier (see \{@link AlertId\}), minted on create and
   * immutable across updates. Use it (not \{@code name\}) to address the alert
   * on GetAlert/UpdateAlert/DeleteAlert; it is also the ARN's resource id.
   * @public
   */
  alertId?: string | undefined;

  /**
   * An optional description of the alert.
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS account ID that owns the alert.
   * @public
   */
  accountId: string | undefined;

  /**
   * The ID of the space the alert belongs to.
   * @public
   */
  spaceId?: string | undefined;

  /**
   * The ID of the access profile associated with the alert.
   * @public
   */
  profileId?: string | undefined;

  /**
   * The rule that defines how the alert is evaluated.
   * @public
   */
  rule: Rule | undefined;

  /**
   * Whether notifications are enabled.
   * @public
   */
  notificationStatus?: NotificationStatus | undefined;

  /**
   * Live evaluation state (read-only, system-managed). Populated by GetAlert. ListAlerts
   * reports state on `AlertSummary` instead, where it stays required.
   *
   * Absent on CreateAlert: a newly created alert has never been evaluated, so any state
   * reported there would be a default rather than an observation. Call GetAlert for live
   * state. Not @required for that reason — GetAlert always populates it.
   *
   * `contributorSummary` is nested inside this member, so it too is absent on CreateAlert.
   * @public
   */
  state?: AlertStateInfo | undefined;

  /**
   * The notification rules for the alert.
   * @public
   */
  notificationRules?: NotificationRule[] | undefined;

  /**
   * The timestamp when the alert was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the alert was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alert.
   * @public
   */
  alertArn: string | undefined;
}

/**
 * Filter criteria for ListAlerts. All members are optional; each omitted
 * member is unconstrained. At most one of \{@code names\}, \{@code namePrefix\},
 * \{@code ids\} may be provided (mutually exclusive; the service rejects more
 * than one). The remaining members combine with AND.
 * @public
 */
export interface AlertFilterCriteria {
  /**
   * Filter to alerts whose name exactly matches any entry (OR semantics).
   * Mutually exclusive with \{@code namePrefix\} and \{@code ids\}.
   * @public
   */
  names?: string[] | undefined;

  /**
   * Filter to alerts whose name starts with this prefix. Mutually exclusive
   * with \{@code names\} and \{@code ids\}.
   * @public
   */
  namePrefix?: string | undefined;

  /**
   * Filter to alerts whose \{@link AlertId\} exactly matches any entry (OR
   * semantics). Mutually exclusive with \{@code names\} and \{@code namePrefix\}.
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Filter to alerts currently in any of these states (OR semantics).
   * @public
   */
  stateValue?: AlertState[] | undefined;

  /**
   * Filter to alerts by whether notifications are enabled.
   * @public
   */
  notificationsEnabled?: boolean | undefined;
}

/**
 * Summary representation of an alert used in list responses.
 * @public
 */
export interface AlertSummary {
  /**
   * The name of the alert.
   * @public
   */
  name: string | undefined;

  /**
   * The stable alert identifier (see \{@link Alert#alertId\}). Use it to address
   * the alert; it is also the ARN's resource id.
   * @public
   */
  alertId?: string | undefined;

  /**
   * The ID of the space the alert belongs to.
   * @public
   */
  spaceId?: string | undefined;

  /**
   * The ID of the access profile associated with the alert.
   * @public
   */
  profileId?: string | undefined;

  /**
   * Whether notifications are enabled.
   * @public
   */
  notificationStatus?: NotificationStatus | undefined;

  /**
   * Live evaluation state (read-only, system-managed).
   * @public
   */
  state: AlertStateInfo | undefined;

  /**
   * The timestamp when the alert was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the alert was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alert.
   * @public
   */
  alertArn: string | undefined;
}

/**
 * An API key used to authenticate an integration with its external system.
 * @public
 */
export interface ApiKeyCredential {
  /**
   * The API key value used to authenticate with the external system.
   * @public
   */
  apiKeyValue: string | undefined;
}

/**
 * A set of temporary AWS credentials.
 * @public
 */
export interface AwsCredentials {
  /**
   * The AWS access key ID.
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The AWS secret access key.
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * The AWS session token.
   * @public
   */
  sessionToken: string | undefined;

  /**
   * The timestamp when the credentials expire.
   * @public
   */
  expiration: Date | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantInput {
  /**
   * The ID of the domain that contains the space.
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the space to scope the grant to.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: AccessGrantPrincipal | undefined;

  /**
   * The permission to grant. Exactly one permission is granted per request.
   * @public
   */
  permission: AccessGrantPermission | undefined;

  /**
   * Groups of actions to allow, each with the resource scopes and conditions
   * that limit those actions.
   * @public
   */
  scopedActions?: ScopedActions[] | undefined;

  /**
   * The tags to associate with the access grant.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantOutput {
  /**
   * The details of the created access grant.
   * @public
   */
  accessGrant: AccessGrant | undefined;
}

/**
 * @public
 */
export interface CreateAccessProfileInput {
  /**
   * The unique ID of the space to create the profile in.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A name that identifies the access profile.
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the access profile.
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to associate with the access profile.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessProfileOutput {
  /**
   * The access profile.
   * @public
   */
  accessProfile: AccessProfile | undefined;
}

/**
 * @public
 */
export interface CreateAlertInput {
  /**
   * The unique ID of the space to create the alert in.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ID of the access profile the alert uses to evaluate its query and
   * execute notifications. The caller supplies it: there is no managed
   * alert profile, and the service does not pick one on the caller's behalf.
   * @public
   */
  profileId: string | undefined;

  /**
   * Alert name, for display. Max 256 (the AlarmName budget). Not the alert's
   * identity: the backend mints a separate uuid as the \{@link AlertId\}, so the
   * name need not be unique within a space and addressing an alert never
   * depends on it. UpdateAlert accepts a new name to rename the alert.
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the alert.
   * @public
   */
  description?: string | undefined;

  /**
   * The rule that defines how the alert is evaluated.
   * @public
   */
  rule: Rule | undefined;

  /**
   * Whether actions (notifications) are enabled for this alert.
   * Defaults to true when omitted.
   * @public
   */
  notificationsEnabled?: boolean | undefined;

  /**
   * The tags to associate with the alert.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The notification rules that determine when and where notifications are sent.
   * @public
   */
  notificationRules?: NotificationRule[] | undefined;

  /**
   * Idempotency token for safe retries. Retrying with the same token
   * within the idempotency window returns the original alert instead
   * of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAlertOutput {
  /**
   * Deprecated. Use `alert.alertArn`, which carries the same value. Kept so an existing
   * caller keeps working while it moves to `alert`.
   * @public
   */
  alertArn?: string | undefined;

  /**
   * The alert that was created. The same `Alert` shape GetAlert returns, so a caller need
   * not read the alert back to learn its timestamps or its minted alert id.
   *
   * \{@code alert.state\} is absent here — see the `state` member of `Alert`. Every other
   * member is populated exactly as GetAlert populates it.
   * @public
   */
  alert: Alert | undefined;
}

/**
 * Identity Center specific configuration.
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * Identity Center instance ARN
   * @public
   */
  identityCenterInstanceArn?: string | undefined;
}

/**
 * Identity provider configuration for domain authentication.
 * Contains provider-specific configuration blocks.
 * @public
 */
export interface IdentityProviderConfiguration {
  /**
   * Identity Center configuration. Required when identityProviders includes IDC.
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * A name that identifies the domain. Must be 3-63 characters: lowercase letters,
   * numbers, and hyphens. It must begin and end with a letter or number and cannot
   * contain consecutive hyphens.
   * @public
   */
  name: string | undefined;

  /**
   * The identity providers to configure for the domain.
   * @public
   */
  identityProviders: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the domain.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The tags to associate with the domain.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Detailed information about a domain.
 * @public
 */
export interface Domain {
  /**
   * The unique ID of the domain.
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   * @public
   */
  domainArn: string | undefined;

  /**
   * A name that identifies the domain.
   * @public
   */
  name?: string | undefined;

  /**
   * The identity providers configured for the domain.
   * @public
   */
  identityProviders: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the domain.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The HTTPS endpoint URL for accessing the domain.
   * @public
   */
  domainEndpointUrl: string | undefined;

  /**
   * Additional endpoint URLs derived from the domain name.
   * @public
   */
  customEndpointUrls?: string[] | undefined;

  /**
   * The ARN of the Identity Center application. Absent for IAM-only domains.
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * The Region where this domain was created.
   * @public
   */
  region: string | undefined;

  /**
   * The timestamp when the domain was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the domain was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Current status of the domain.
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * The details of the created domain.
   * @public
   */
  domain: Domain | undefined;
}

/**
 * The principal receiving an organization-level domain access grant. Specify
 * principalId, principalAttributes, or both.
 * @public
 */
export interface OrganizationAccessGrantPrincipal {
  /**
   * The type of principal receiving the grant.
   * @public
   */
  principalType: OrganizationGrantPrincipalType | undefined;

  /**
   * The ID of the principal receiving the grant.
   * @public
   */
  principalId?: string | undefined;

  /**
   * Attribute conditions for attribute-based access. When provided, the grant
   * targets any principal matching all specified conditions. Supported only for
   * IDC_USER principals.
   * @public
   */
  principalAttributes?: AccessGrantPrincipalAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateDomainAccessGrantForOrganizationInput {
  /**
   * The ID of the organization domain to create the grant on.
   * @public
   */
  domainId: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: OrganizationAccessGrantPrincipal | undefined;

  /**
   * The permission to grant.
   * @public
   */
  permission: OrganizationGrantPermission | undefined;

  /**
   * The tags to associate with the access grant.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * An organization-scoped access grant.
 * @public
 */
export interface OrganizationAccessGrant {
  /**
   * The unique ID of the access grant.
   * @public
   */
  grantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   * @public
   */
  grantArn: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the organization domain the grant belongs to.
   * @public
   */
  domainId: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: OrganizationAccessGrantPrincipal | undefined;

  /**
   * The permission granted.
   * @public
   */
  permission: OrganizationGrantPermission | undefined;

  /**
   * Who manages the grant.
   * @public
   */
  grantType: AccessGrantType | undefined;

  /**
   * The principal that created the grant.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the grant was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the grant was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDomainAccessGrantForOrganizationOutput {
  /**
   * The details of the created organization access grant.
   * @public
   */
  accessGrant: OrganizationAccessGrant | undefined;
}

/**
 * @public
 */
export interface CreateDomainForOrganizationInput {
  /**
   * A name that identifies the organization domain. Must be 3-63 characters:
   * lowercase letters, numbers, and hyphens. It must begin and end with a letter or
   * number and cannot contain consecutive hyphens.
   * @public
   */
  name: string | undefined;

  /**
   * The identity providers to configure for the domain.
   * @public
   */
  identityProviders: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the domain.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The ARN of an IAM role in the management account used for domain access. You must
   * create this role, and its trust policy must allow the service principal to assume it.
   * @public
   */
  domainAccessRoleArn: string | undefined;

  /**
   * The tags to associate with the domain.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Detailed information about an organization domain.
 * @public
 */
export interface OrganizationDomain {
  /**
   * The unique ID of the organization domain.
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the organization domain.
   * @public
   */
  domainArn: string | undefined;

  /**
   * A name that identifies the organization domain.
   * @public
   */
  name?: string | undefined;

  /**
   * The HTTPS endpoint URL for accessing the organization domain.
   * @public
   */
  domainEndpointUrl: string | undefined;

  /**
   * Additional endpoint URLs derived from the domain name.
   * @public
   */
  customEndpointUrls?: string[] | undefined;

  /**
   * The ID of the AWS Organization that owns the domain.
   * @public
   */
  organizationId: string | undefined;

  /**
   * The AWS account ID that owns the organization domain.
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The identity providers configured for the organization domain.
   * @public
   */
  identityProviders: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the organization domain.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The ARN of the Identity Center application. Absent for IAM-only domains.
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * The Region where this organization domain was created.
   * @public
   */
  region: string | undefined;

  /**
   * Current status of the organization domain.
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * The ARN of the customer-provided IAM role in the management account used for
   * domain access.
   * @public
   */
  domainAccessRoleArn?: string | undefined;

  /**
   * The timestamp when the organization domain was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the organization domain was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDomainForOrganizationOutput {
  /**
   * The details of the created organization domain.
   * @public
   */
  organizationDomain: OrganizationDomain | undefined;
}

/**
 * Credentials for an OAuth 2.0 client-credentials grant used to authenticate
 * an integration with its external system.
 * @public
 */
export interface OAuthClientCredential {
  /**
   * The OAuth 2.0 client identifier registered with the external system.
   * @public
   */
  clientId: string | undefined;

  /**
   * The OAuth 2.0 client secret that pairs with the client identifier.
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The identifier of the OAuth provider that issued the client credentials.
   * @public
   */
  providerId?: string | undefined;
}

/**
 * Credentials for an OAuth 2.0 authorization-code grant, supplied when
 * completing the authorization of an integration.
 * @public
 */
export interface OAuthCodeCredential {
  /**
   * The OAuth 2.0 authorization code returned by the external system's
   * authorization endpoint.
   * @public
   */
  authCode: string | undefined;
}

/**
 * The credential that an integration uses to authenticate with its external
 * system. Exactly one member is set, matching the integration's authentication type.
 * @public
 */
export type IntegrationCredential =
  | IntegrationCredential.ApiKeyCredentialMember
  | IntegrationCredential.OauthClientCredentialMember
  | IntegrationCredential.OauthCodeCredentialMember
  | IntegrationCredential.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationCredential {
  /**
   * Credentials for an OAuth 2.0 authorization-code grant.
   * @public
   */
  export interface OauthCodeCredentialMember {
    oauthCodeCredential: OAuthCodeCredential;
    oauthClientCredential?: never;
    apiKeyCredential?: never;
    $unknown?: never;
  }

  /**
   * Credentials for an OAuth 2.0 client-credentials grant.
   * @public
   */
  export interface OauthClientCredentialMember {
    oauthCodeCredential?: never;
    oauthClientCredential: OAuthClientCredential;
    apiKeyCredential?: never;
    $unknown?: never;
  }

  /**
   * An API key credential.
   * @public
   */
  export interface ApiKeyCredentialMember {
    oauthCodeCredential?: never;
    oauthClientCredential?: never;
    apiKeyCredential: ApiKeyCredential;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCodeCredential?: never;
    oauthClientCredential?: never;
    apiKeyCredential?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCodeCredential: (value: OAuthCodeCredential) => T;
    oauthClientCredential: (value: OAuthClientCredential) => T;
    apiKeyCredential: (value: ApiKeyCredential) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The request for creating an integration with a third-party provider.
 * @public
 */
export interface CreateIntegrationInput {
  /**
   * The type of third-party provider to integrate with.
   * @public
   */
  integrationType: IntegrationType | undefined;

  /**
   * The name for the new integration; unique within the account.
   * @public
   */
  name: string | undefined;

  /**
   * The credential used to authenticate with the third-party provider.
   * @public
   */
  credential?: IntegrationCredential | undefined;

  /**
   * Provider-specific attributes to associate with the integration.
   * @public
   */
  integrationAttributes?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name of the IAM role assumed to access the integration.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Tags to apply to the integration at creation time (Tagris tag-on-create).
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Retrying with the same token
   * returns the original integration instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A connection between CloudWatch and an external system — such as a source of
 * telemetry or configuration data, a messaging destination, or a model provider.
 * @public
 */
export interface Integration {
  /**
   * The unique identifier of the integration.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the integration.
   * @public
   */
  integrationArn?: string | undefined;

  /**
   * The type of external system that an integration connects to, such as a
   * source of configuration data, a messaging destination, or a model provider.
   * @public
   */
  integrationType: IntegrationType | undefined;

  /**
   * The customer-provided name of the integration.
   * @public
   */
  name: string | undefined;

  /**
   * The current lifecycle state of an integration.
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * The authentication method that an integration uses to connect to its
   * external system.
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that stores the integration's
   * credentials.
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that CloudWatch assumes to
   * access the external system.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Provider-specific key/value attributes that configure the integration.
   * @public
   */
  integrationAttributes?: Record<string, string> | undefined;

  /**
   * The URL the customer visits to authorize the integration. Present while an
   * OAuth authorization is pending.
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * A human-readable description of why the integration is in an ERROR or FAILED
   * state. Present only when the integration has failed.
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The time at which the integration was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time at which the integration was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Whether this integration is account-scoped (ACCOUNT, customer-created) or organization-scoped
   * (ORGANIZATION, created by an org-enablement rule). Absent on legacy records is treated as ACCOUNT.
   * @public
   */
  scope?: Scope | undefined;
}

/**
 * The response from creating an integration.
 * @public
 */
export interface CreateIntegrationOutput {
  /**
   * The details of the created integration. This is the same object returned by
   * GetIntegration and UpdateIntegration.
   * @public
   */
  integration: Integration | undefined;
}

/**
 * @public
 */
export interface CreateOmniDashboardInput {
  /**
   * The unique ID of the space to create the dashboard in.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A name that identifies the dashboard.
   * @public
   */
  name: string | undefined;

  /**
   * The dashboard definition, as a JSON document. Maximum 1 MiB.
   * @public
   */
  body: string | undefined;

  /**
   * An optional description of the dashboard.
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to associate with the dashboard.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A dashboard within a space, including its body.
 * @public
 */
export interface OmniDashboard {
  /**
   * The unique ID of the dashboard.
   * @public
   */
  dashboardId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   * @public
   */
  arn: string | undefined;

  /**
   * A name that identifies the dashboard.
   * @public
   */
  name: string | undefined;

  /**
   * The dashboard definition.
   * @public
   */
  body: string | undefined;

  /**
   * The principal that created the dashboard.
   * @public
   */
  createdBy: string | undefined;

  /**
   * An optional description of the dashboard.
   * @public
   */
  description?: string | undefined;

  /**
   * The tags associated with the dashboard.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp when the dashboard was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dashboard was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateOmniDashboardOutput {
  /**
   * The dashboard.
   * @public
   */
  omniDashboard: OmniDashboard | undefined;
}

/**
 * @public
 */
export interface CreateOneTimeDeepLinkCodeInput {
  /**
   * The ID of the domain to generate the code for.
   * @public
   */
  domainId: string | undefined;

  /**
   * How long the code remains valid, in seconds. Defaults to 300.
   * @public
   */
  ttlSeconds?: number | undefined;

  /**
   * The URL to redirect to after the deep-link code is used. Must be an HTTPS URL in the
   * domain with a path of /auth/callback, and cannot include a query
   * string or fragment. If omitted, no redirect is applied.
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateOneTimeDeepLinkCodeOutput {
  /**
   * The one-time deep-link code.
   * @public
   */
  code: string | undefined;

  /**
   * The deep-link URL containing the one-time code.
   * @public
   */
  deepLinkUrl: string | undefined;

  /**
   * The timestamp when the code expires.
   * @public
   */
  expiresAt: Date | undefined;
}

/**
 * How a resource's data at rest is encrypted.
 *
 * `kmsKeyArn` is required when `encryptionStrategy` is CUSTOMER_MANAGED and must be
 * absent when it is AWS_OWNED; a mismatch is a ValidationException rather than a
 * silently ignored field, so a caller that selects AWS_OWNED while still passing a key
 * learns that the key was not applied.
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Which kind of key to use. Required.
   * @public
   */
  encryptionStrategy: EncryptionStrategy | undefined;

  /**
   * Customer managed KMS key ARN. Required when `encryptionStrategy` is
   * CUSTOMER_MANAGED, and must be omitted when it is AWS_OWNED. Must be a symmetric
   * ENCRYPT_DECRYPT key in the caller's account and region.
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSpaceInput {
  /**
   * A name that identifies the space. Must be 3-64 characters: lowercase letters,
   * numbers, and hyphens. It must begin and end with a letter or number and cannot
   * contain consecutive hyphens.
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the domain to create the space in.
   * @public
   */
  domainId: string | undefined;

  /**
   * The ARN of the IAM role used for data access. The role must be in the caller's
   * account.
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * The ARN of the IAM role used by AgentCore online evaluation. Must be in the
   * caller's account. Omit if the space does not use AgentCore online evaluation.
   * @public
   */
  agentCoreEvaluationRoleArn?: string | undefined;

  /**
   * How to encrypt the space's data at rest. Omit for service owned encryption,
   * which is equivalent to passing `encryptionStrategy` AWS_OWNED.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The tags to associate with the space.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Repeated requests with the same
   * token return the original result instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Detailed information about a space.
 * @public
 */
export interface Space {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A name that identifies the space.
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the space.
   * @public
   */
  spaceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain the space belongs to. Absent when
   * the space is not associated with a domain, so callers must tolerate its absence.
   * @public
   */
  domainArn?: string | undefined;

  /**
   * The region where this space was created.
   * @public
   */
  region: string | undefined;

  /**
   * AWS account ID that owns this space.
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The ARN of the IAM role used for data access.
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * The timestamp when the space was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the space was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the IAM role used by AgentCore online evaluation. Absent when the space
   * was created without one.
   * @public
   */
  agentCoreEvaluationRoleArn?: string | undefined;

  /**
   * The status of the space.
   * @public
   */
  status: SpaceStatus | undefined;

  /**
   * Reason for the current space status.
   * @public
   */
  statusReason?: string | undefined;

  /**
   * How the space's data at rest is encrypted. Always populated: a space with no
   * customer managed key reports `encryptionStrategy` AWS_OWNED and no `kmsKeyArn`.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSpaceOutput {
  /**
   * The details of the created space.
   * @public
   */
  space: Space | undefined;
}

/**
 * @public
 */
export interface CreateViewRequest {
  /**
   * The name of the view. Must begin with the "view." prefix. View names
   * must be unique within the account and region.
   * @public
   */
  name: string | undefined;

  /**
   * The SQL query that defines the view.
   * @public
   */
  definition: string | undefined;

  /**
   * A description of the view.
   * @public
   */
  description?: string | undefined;

  /**
   * Resource tags.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token for safe retries. Retrying with the same token
   * returns the original view instead of creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewResponse {
  /**
   * The name of the view.
   * @public
   */
  name: string | undefined;

  /**
   * The ownership category of the view.
   * @public
   */
  type: ViewType | undefined;

  /**
   * The description of the view.
   * @public
   */
  description?: string | undefined;

  /**
   * The SQL query that defines the view.
   * @public
   */
  definition: string | undefined;

  /**
   * The timestamp when the view was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the view was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the view.
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantInput {
  /**
   * The ID of the access grant to delete.
   * @public
   */
  grantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantOutput {}

/**
 * @public
 */
export interface DeleteAccessProfileInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the access profile to delete.
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessProfileOutput {}

/**
 * @public
 */
export interface DeleteAlertInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The alert to delete.
   * @public
   */
  alertId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlertOutput {}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * The unique ID of the domain to delete.
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainOutput {}

/**
 * @public
 */
export interface DeleteDomainAccessGrantForOrganizationInput {
  /**
   * The ID of the access grant to delete.
   * @public
   */
  grantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainAccessGrantForOrganizationOutput {}

/**
 * @public
 */
export interface DeleteDomainForOrganizationInput {
  /**
   * The ID of the organization domain to delete.
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainForOrganizationOutput {}

/**
 * Identifies a single integration by exactly one of its unique keys: the
 * integration id, the integration ARN, or the integration name.
 * @public
 */
export type IntegrationIdentifier =
  | IntegrationIdentifier.IntegrationArnMember
  | IntegrationIdentifier.IntegrationIdMember
  | IntegrationIdentifier.IntegrationNameMember
  | IntegrationIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationIdentifier {
  /**
   * The unique identifier of the integration.
   * @public
   */
  export interface IntegrationIdMember {
    integrationId: string;
    integrationArn?: never;
    integrationName?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Name of the integration.
   * @public
   */
  export interface IntegrationArnMember {
    integrationId?: never;
    integrationArn: string;
    integrationName?: never;
    $unknown?: never;
  }

  /**
   * The name of the integration; unique within the account.
   * @public
   */
  export interface IntegrationNameMember {
    integrationId?: never;
    integrationArn?: never;
    integrationName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    integrationId?: never;
    integrationArn?: never;
    integrationName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    integrationId: (value: string) => T;
    integrationArn: (value: string) => T;
    integrationName: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The request for deleting an integration.
 * @public
 */
export interface DeleteIntegrationInput {
  /**
   * Identifies the integration to delete — exactly one of integrationId,
   * integrationArn, or integrationName.
   * @public
   */
  identifier: IntegrationIdentifier | undefined;
}

/**
 * The response from deleting an integration. Empty by contract — a successful
 * call indicates the deletion was accepted (DeleteIntegration is idempotent).
 * @public
 */
export interface DeleteIntegrationOutput {}

/**
 * @public
 */
export interface DeleteOmniDashboardInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the dashboard.
   * @public
   */
  dashboardId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOmniDashboardOutput {}

/**
 * @public
 */
export interface DeleteSpaceInput {
  /**
   * The unique ID of the space to delete.
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceOutput {}

/**
 * @public
 */
export interface DeleteViewRequest {
  /**
   * The name of the view to delete.
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteViewResponse {}

/**
 * @public
 */
export interface GetAccessGrantInput {
  /**
   * The ID of the access grant to retrieve.
   * @public
   */
  grantId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantOutput {
  /**
   * The full details of the access grant.
   * @public
   */
  accessGrant: AccessGrant | undefined;
}

/**
 * @public
 */
export interface GetAccessProfileInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the access profile.
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessProfileOutput {
  /**
   * The access profile.
   * @public
   */
  accessProfile: AccessProfile | undefined;
}

/**
 * @public
 */
export interface GetAlertInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The alert to retrieve.
   * @public
   */
  alertId: string | undefined;
}

/**
 * @public
 */
export interface GetAlertOutput {
  /**
   * The full alert entity.
   * @public
   */
  alert: Alert | undefined;
}

/**
 * Key-value filter used for tags and attributes filtering.
 * Multiple KeyFilters are AND'ed. Multiple values within a single KeyFilter are OR'ed.
 * Values support pattern syntax: exact, negation (!value), wildcard (*value*, value*, *value).
 * @public
 */
export interface KeyFilter {
  /**
   * The tag or attribute key to filter on.
   * @public
   */
  key: string | undefined;

  /**
   * The values to match for this key, OR'ed together. Each supports exact,
   * negation (!value), and wildcard (*value*, value*, *value) syntax.
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Criteria for filtering edges in a context graph query.
 * @public
 */
export interface EdgeFilters {
  /**
   * Match only the edge with this identifier.
   * @public
   */
  edgeId?: string | undefined;

  /**
   * Match only edges originating from this node identifier.
   * @public
   */
  from?: string | undefined;

  /**
   * Match only edges pointing to this node identifier.
   * @public
   */
  to?: string | undefined;

  /**
   * Match only edges of this relationship kind.
   * @public
   */
  edgeType?: EdgeType | undefined;

  /**
   * Match edges carrying any of these operations.
   * @public
   */
  operations?: string[] | undefined;

  /**
   * Match edges by their OpenTelemetry (OTel) telemetry attributes. Not yet enforced:
   * currently accepted but ignored (does not filter), matching
   * nodeFilters.telemetryAttributes.
   * @public
   */
  telemetryAttributes?: KeyFilter[] | undefined;

  /**
   * Match edges contributed by any of these discovery sources.
   * @public
   */
  sources?: Source[] | undefined;
}

/**
 * Criteria for selecting nodes in a context graph query.
 * @public
 */
export interface NodeFilters {
  /**
   * Match only the node with this identifier.
   * @public
   */
  nodeId?: string | undefined;

  /**
   * Match only nodes of this type.
   * @public
   */
  nodeType?: NodeType | undefined;

  /**
   * Match only nodes with this name.
   * @public
   */
  name?: string | undefined;

  /**
   * Match nodes by the tags on the underlying resource.
   * @public
   */
  tags?: KeyFilter[] | undefined;

  /**
   * Match nodes by their OpenTelemetry (OTel) telemetry attributes.
   * @public
   */
  telemetryAttributes?: KeyFilter[] | undefined;

  /**
   * Match nodes in any of these regions.
   * @public
   */
  region?: string[] | undefined;

  /**
   * Match nodes on any of these cloud providers.
   * @public
   */
  cloudProvider?: string[] | undefined;

  /**
   * Match nodes discovered from telemetry produced by any of these accounts.
   * @public
   */
  sourceAccountId?: string[] | undefined;

  /**
   * Match nodes in any of these logical service groupings.
   * @public
   */
  namespace?: string[] | undefined;

  /**
   * Match nodes of any of these categories.
   * @public
   */
  category?: NodeCategory[] | undefined;

  /**
   * Match nodes observed in any of these deployment environments.
   * @public
   */
  stage?: string[] | undefined;

  /**
   * Match nodes contributed by any of these discovery sources.
   * @public
   */
  sources?: Source[] | undefined;
}

/**
 * The request for retrieving a slice of the context graph.
 * @public
 */
export interface GetContextGraphInput {
  /**
   * Criteria restricting which nodes are returned.
   * @public
   */
  nodeFilters?: NodeFilters | undefined;

  /**
   * Criteria restricting which edges are returned.
   * @public
   */
  edgeFilters?: EdgeFilters | undefined;

  /**
   * Start of the time range (UTC), inclusive.
   * @public
   */
  startTime: Date | undefined;

  /**
   * End of the time range (UTC), inclusive.
   * @public
   */
  endTime: Date | undefined;

  /**
   * How many hops to traverse out from the nodes matched by nodeFilters. 0 returns
   * only the matched nodes themselves.
   * @public
   */
  depth?: number | undefined;

  /**
   * The maximum number of nodes to return in a single page.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The maximum number of edges to return per node, bounding the fan-out of a
   * densely connected node.
   * @public
   */
  maxEdgesPerNode?: number | undefined;

  /**
   * Whether to return the metadata block, semantics included, on each node and
   * edge. Off by default because it costs an extra lookup per returned node.
   * @public
   */
  includeMetadata?: boolean | undefined;

  /**
   * Pagination token from a previous response, to retrieve the next page.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Additive traffic counters accumulated over an edge's observation window. Which
 * counters are populated depends on what produced the edge.
 * @public
 */
export interface EdgeTrafficStats {
  /**
   * Total bytes observed across the edge.
   * @public
   */
  bytes?: number | undefined;

  /**
   * Total packets observed across the edge.
   * @public
   */
  packets?: number | undefined;

  /**
   * Total network flows observed across the edge.
   * @public
   */
  flows?: number | undefined;

  /**
   * Total bytes sent to the destination.
   * @public
   */
  sentBytes?: number | undefined;

  /**
   * Total bytes received from the destination.
   * @public
   */
  receivedBytes?: number | undefined;
}

/**
 * Edge attributes promoted out of the flat attribute map onto typed members.
 * Which members are present depends entirely on what produced the edge, so most
 * edges carry only a few of them.
 * @public
 */
export interface EdgeProperties {
  /**
   * The IANA protocol name for the observed network traffic, such as "tcp".
   * @public
   */
  protocol?: string | undefined;

  /**
   * The source port of the observed traffic. May be a placeholder when the
   * port is unknown.
   * @public
   */
  sourcePort?: string | undefined;

  /**
   * The destination port of the observed traffic. May be a placeholder when
   * the port is unknown.
   * @public
   */
  destinationPort?: string | undefined;

  /**
   * Whether the observed network flow was denied. Absent means the edge was
   * not derived from network flow data, which is not the same as allowed.
   * @public
   */
  blocked?: boolean | undefined;

  /**
   * The error code returned when the call was attempted and refused. Its
   * presence means the edge exists but the dependency is failing.
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The HTTP status code observed on the request. Distinct from errorCode.
   * @public
   */
  httpStatusCode?: string | undefined;

  /**
   * The HTTP method observed on the request.
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * Whether the caller was an AWS service principal rather than a user or
   * role. Absent means the edge was not derived from a source that reports it.
   * @public
   */
  serviceInitiated?: boolean | undefined;

  /**
   * Traffic counters accumulated over the edge's observation window.
   * @public
   */
  trafficStats?: EdgeTrafficStats | undefined;
}

/**
 * One LOGS query selector block on a node. The `attributes` map's keys are AND'd; each selects with
 * `col = value`. Deliberately RAW/un-normalized so the selector matches the store, not the node's
 * merged identity.
 * @public
 */
export interface LogMetadata {
  /**
   * One LOGS query-selector block: EXACT store column -> raw SCALAR value (mirroring the scalar
   * MetadataAttributeMap). Keyed by the store column that carries the value (e.g.
   * `resource.attributes['service.name']`, `attributes['aws.local.service']`, `@logGroupName`) so the
   * selector matches the emitted signal. A dimension seen under several values (a service under two
   * namespaces, several log groups) becomes several blocks with the same columns and different
   * values, which the console ORs. Dedicated to the LOGS selector so its cap evolves independently of
   * the metric attribute map and the TRACES map. Selector caps are deliberately DISTINCT from the metric caps.
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * The meaning and unit of a single metric.
 * @public
 */
export interface MetricSemantics {
  /**
   * Human-readable description of what the metric measures.
   * @public
   */
  description?: string | undefined;

  /**
   * The unit the metric is reported in.
   * @public
   */
  unit?: string | undefined;
}

/**
 * A single metric observed on a context graph node.
 * @public
 */
export interface MetricMetadata {
  /**
   * The metric name as emitted, such as "Duration".
   * @public
   */
  name?: string | undefined;

  /**
   * DEPRECATED: read attributes["service.namespace"] instead. Retained (deprecated) for
   * backward compatibility with existing consumers; will be removed once they migrate. The
   * logical service grouping the metric belongs to.
   *
   * @deprecated (since 2026-08-19) Use attributes['service.namespace']; retained for backward compatibility.
   * @public
   */
  namespace?: string | undefined;

  /**
   * The statistic to chart or alarm on, such as "p99" or "Sum". Free-form and
   * frequently absent.
   * @public
   */
  preferredStat?: string | undefined;

  /**
   * OTel metric kind: "gauge", "sum", "histogram", "exponential_histogram", or "summary"
   * (CloudWatch-vended metrics carry the same kinds). Absent when the producer did not
   * report one.
   * @public
   */
  metricType?: string | undefined;

  /**
   * Per-metric qualifying attributes the console uses to query this metric's telemetry.
   * These are the RAW, store-matching values keyed by their OTel names ("service.name",
   * "service.namespace", "cloud.provider", "cloud.account.id", "cloud.region",
   * "instrumentation_scope") — deliberately NOT the node's normalized/merged identity, so
   * the query selectors match the emitted series. A merged node can carry different values
   * per metric, which is why they live here rather than on the node.
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * What the metric means and the unit it is reported in.
   * @public
   */
  semantics?: MetricSemantics | undefined;
}

/**
 * Semantic description of the service a context graph node represents.
 * @public
 */
export interface NodeSemantics {
  /**
   * What the service does.
   * @public
   */
  purpose?: string | undefined;

  /**
   * The primary programming language the service is written in.
   * @public
   */
  language?: string | undefined;

  /**
   * The application framework the service is built on.
   * @public
   */
  framework?: string | undefined;

  /**
   * The kind of workload the service is.
   * @public
   */
  kind?: string | undefined;

  /**
   * The source repository the service is built from.
   * @public
   */
  repository?: string | undefined;
}

/**
 * One TRACES query selector block on a node/edge (see LogMetadata).
 * @public
 */
export interface TraceMetadata {
  /**
   * TRACES counterpart of LogMetadataAttributeMap — a dedicated per-signal map so the two evolve
   * independently (same scalar shape and cap today).
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * Descriptive information about a context graph node or edge, as opposed to its
 * identity and structure. Returned only when the request sets includeMetadata.
 * @public
 */
export interface Metadata {
  /**
   * The metrics observed on the element.
   * @public
   */
  metrics?: MetricMetadata[] | undefined;

  /**
   * Semantic description of the node. Absent on an edge, because semantics
   * describe a service rather than a relationship.
   * @public
   */
  semantics?: NodeSemantics | undefined;

  /**
   * Per-signal LOGS query selectors: a LIST of blocks the console ORs, each an AND of exact
   * store column -> raw values. Node-level (edges carry only traces). Populated when the request
   * sets includeMetadata; derived labels (logSourceType) are added by the service projection, not
   * stored here.
   * @public
   */
  logs?: LogMetadata[] | undefined;

  /**
   * Per-signal TRACES query selectors (same block shape as logs). Present on both node and edge
   * metadata. serviceName is derived at the service projection, not stored here.
   * @public
   */
  traces?: TraceMetadata[] | undefined;
}

/**
 * A directed edge in the context graph connecting two nodes.
 * @public
 */
export interface Edge {
  /**
   * The unique identifier of the edge within the context graph.
   * @public
   */
  edgeId?: string | undefined;

  /**
   * The node identifier the edge originates from.
   * @public
   */
  from?: string | undefined;

  /**
   * The node identifier the edge points to.
   * @public
   */
  to?: string | undefined;

  /**
   * The kind of relationship the edge represents.
   * @public
   */
  edgeType?: EdgeType | undefined;

  /**
   * The operations observed on this edge.
   * @public
   */
  operations?: string[] | undefined;

  /**
   * Attributes promoted out of the flat attribute map onto typed members. Which
   * members are present depends on what produced the edge.
   * @public
   */
  edgeProperties?: EdgeProperties | undefined;

  /**
   * The edge's OpenTelemetry (OTel) attributes, as emitted by telemetry. A key
   * promoted onto an `edgeProperties` member is removed here, so no value appears twice.
   * @public
   */
  telemetryAttributes?: Record<string, string> | undefined;

  /**
   * The kinds of telemetry signal observed on this edge.
   * @public
   */
  signalTypes?: Signal[] | undefined;

  /**
   * The discovery sources that contributed this edge.
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * Descriptive metadata about the edge. Present only when the request sets
   * includeMetadata.
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * When this edge was first observed (UTC), at minute granularity. For an edge
   * that merged across sources, this is the earliest value any source reported.
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * When this edge was most recently observed (UTC), at minute granularity. For an
   * edge that merged across sources, this is the latest value any source reported.
   * @public
   */
  lastObservedAt?: Date | undefined;
}

/**
 * Node identity attributes promoted out of the flat attribute map onto typed
 * members. The first four are part of the node's merge key, so a node that merged
 * across sources reports one resolved value for each.
 * @public
 */
export interface NodeProperties {
  /**
   * The region the node runs in. Falls back to the region the telemetry was
   * ingested from when the node does not report one.
   * @public
   */
  region?: string | undefined;

  /**
   * The cloud provider hosting the node, resolved from the reported provider,
   * platform, or vendor namespace, and defaulting to "aws".
   * @public
   */
  cloudProvider?: string | undefined;

  /**
   * The account that produced the telemetry this node was discovered from.
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * The logical service grouping the node belongs to. This is not a metric
   * namespace.
   * @public
   */
  namespace?: string | undefined;

  /**
   * What kind of thing the node is, coarser than nodeType.
   * @public
   */
  category?: NodeCategory | undefined;

  /**
   * The node's deployment environment. A node may be observed in several; this is
   * the highest-precedence one. Match any of them with NodeFilters.stage.
   * @public
   */
  stage?: string | undefined;
}

/**
 * A node in the context graph representing a service, resource, or remote service.
 * @public
 */
export interface Node {
  /**
   * The unique identifier of the node within the context graph.
   * @public
   */
  nodeId?: string | undefined;

  /**
   * Whether the node is a service, a resource, or a remote service.
   * @public
   */
  nodeType?: NodeType | undefined;

  /**
   * The primary display name of the node.
   * @public
   */
  name?: string | undefined;

  /**
   * Other names this node was observed under. A node that merged across sources
   * reports one resolved name, and the names it was merged away from appear here.
   * @public
   */
  alternateNames?: string[] | undefined;

  /**
   * The tags observed on the underlying resource.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Identity attributes promoted out of the flat attribute map onto typed members.
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * The node's OpenTelemetry (OTel) attributes, as emitted by telemetry — the raw
   * values, as opposed to the normalized `nodeProperties`. A key promoted onto a
   * `nodeProperties` member is removed here, so no value appears twice.
   * @public
   */
  telemetryAttributes?: Record<string, string> | undefined;

  /**
   * The operations observed on this node, keyed by operation name. Each value
   * lists the dimension sets that identify the metric series for that operation.
   * @public
   */
  operationDetails?: Record<string, Record<string, string>[]> | undefined;

  /**
   * The kinds of telemetry signal observed on this node.
   * @public
   */
  signalTypes?: Signal[] | undefined;

  /**
   * The discovery sources that contributed this node.
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * Descriptive metadata about the node. Present only when the request sets
   * includeMetadata.
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * When this node was first observed (UTC), at minute granularity. For a node
   * that merged across sources, this is the earliest value any source reported.
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * When this node was most recently observed (UTC), at minute granularity. For a
   * node that merged across sources, this is the latest value any source reported.
   * @public
   */
  lastObservedAt?: Date | undefined;

  /**
   * Outbound edges originating from this node. Each edge carries its `from`.
   * @public
   */
  edges?: Edge[] | undefined;
}

/**
 * The response containing the requested slice of the context graph.
 * @public
 */
export interface GetContextGraphOutput {
  /**
   * The page of nodes matching the request. This is the paginated collection.
   * @public
   */
  nodes: Node[] | undefined;

  /**
   * Pagination token for the next page; absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * The unique ID of the domain.
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * The details of the domain.
   * @public
   */
  domain: Domain | undefined;
}

/**
 * @public
 */
export interface GetDomainAccessGrantForOrganizationInput {
  /**
   * The ID of the access grant to retrieve.
   * @public
   */
  grantId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainAccessGrantForOrganizationOutput {
  /**
   * The retrieved organization access grant.
   * @public
   */
  accessGrant: OrganizationAccessGrant | undefined;
}

/**
 * @public
 */
export interface GetDomainForOrganizationInput {
  /**
   * The ID of the organization domain.
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainForOrganizationOutput {
  /**
   * The details of the organization domain.
   * @public
   */
  organizationDomain: OrganizationDomain | undefined;
}

/**
 * The request for retrieving a single integration.
 * @public
 */
export interface GetIntegrationInput {
  /**
   * Identifies the integration to return — exactly one of integrationId,
   * integrationArn, or integrationName.
   * @public
   */
  identifier: IntegrationIdentifier | undefined;
}

/**
 * The response containing the requested integration.
 * @public
 */
export interface GetIntegrationOutput {
  /**
   * The details of the requested integration.
   * @public
   */
  integration: Integration | undefined;
}

/**
 * The request for retrieving the intelligence configuration of the calling account.
 * @public
 */
export interface GetIntelligenceConfigurationInput {}

/**
 * The intelligence configuration for the calling account.
 * @public
 */
export interface GetIntelligenceConfigurationOutput {
  /**
   * The AWS account ID this configuration applies to.
   * @public
   */
  accountId: string | undefined;

  /**
   * The currently active KMS key ARN for customer-managed encryption, if configured.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * ISO-8601 timestamp of the last update.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * ISO-8601 timestamp of initial creation.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface GetOmniDashboardInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the dashboard.
   * @public
   */
  dashboardId: string | undefined;
}

/**
 * @public
 */
export interface GetOmniDashboardOutput {
  /**
   * The dashboard.
   * @public
   */
  omniDashboard: OmniDashboard | undefined;
}

/**
 * @public
 */
export interface GetSpaceInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceOutput {
  /**
   * The details of the space.
   * @public
   */
  space: Space | undefined;
}

/**
 * Identifies what the credentials are for: either an existing space, or a target
 * account in a domain. Specify spaceId, or both domainId and targetAccountId.
 * @public
 */
export interface SpaceCredentialRequestContext {
  /**
   * The ID of an existing space to return credentials for.
   * @public
   */
  spaceId?: string | undefined;

  /**
   * The ID of the domain, when returning credentials for a target account that
   * does not yet have a space.
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the target member account. Required when domainId is set.
   * @public
   */
  targetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceCredentialsForOrganizationInput {
  /**
   * Context for credential resolution.
   * @public
   */
  context: SpaceCredentialRequestContext | undefined;

  /**
   * Selects which member-account credential to return. Set this to SPACE_OPERATION.
   * @public
   */
  credentialType: OrganizationCredentialType | undefined;
}

/**
 * @public
 */
export interface GetSpaceCredentialsForOrganizationOutput {
  /**
   * The temporary AWS credentials for the space.
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface GetTelemetryQueryResultsRequest {
  /**
   * The unique ID of the query.
   * @public
   */
  queryId: string | undefined;

  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of result rows to return per page.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Indicates whether a query returned partial results.
 * @public
 */
export interface PartialResults {
  /**
   * True when the query returned partial results (some data could not be read).
   * @public
   */
  partialResultsDetected?: boolean | undefined;
}

/**
 * Statistics about a telemetry query execution.
 * @public
 */
export interface QueryStatistics {
  /**
   * The number of bytes scanned by the query.
   * @public
   */
  bytesScanned?: number | undefined;

  /**
   * The percentage of the query that has completed.
   * @public
   */
  percentComplete?: number | undefined;

  /**
   * The total number of records scanned.
   * @public
   */
  recordsScanned?: number | undefined;

  /**
   * The number of records that matched the query criteria.
   * @public
   */
  recordsMatched?: number | undefined;

  /**
   * Information about whether the query returned partial results.
   * @public
   */
  partialResults?: PartialResults | undefined;
}

/**
 * @public
 */
export interface GetTelemetryQueryResultsResponse {
  /**
   * The current execution status of the query.
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * The result rows returned by the query.
   * @public
   */
  rows?: Record<string, string>[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Statistics about the query execution.
   * @public
   */
  statistics?: QueryStatistics | undefined;
}

/**
 * @public
 */
export interface GetViewRequest {
  /**
   * The name of the view.
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetViewResponse {
  /**
   * The name of the view.
   * @public
   */
  name: string | undefined;

  /**
   * The ownership category of the view.
   * @public
   */
  type: ViewType | undefined;

  /**
   * The description of the view.
   * @public
   */
  description?: string | undefined;

  /**
   * The SQL query that defines the view.
   * @public
   */
  definition: string | undefined;

  /**
   * The timestamp when the view was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the view was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the view.
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsInput {
  /**
   * Filter by domain ID.
   * @public
   */
  domainId?: string | undefined;

  /**
   * Filter by space ID.
   * @public
   */
  spaceId?: string | undefined;

  /**
   * Filter by principal ID.
   * @public
   */
  principalId?: string | undefined;

  /**
   * Filter by principal type.
   * @public
   */
  principalType?: AccessGrantPrincipalType | undefined;

  /**
   * Filter by permission level.
   * @public
   */
  permission?: AccessGrantPermission | undefined;

  /**
   * A token to retrieve the next page of results. Supply the same filters used
   * on the request that returned it. Tokens expire after 24 hours.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of access grants to return per page. Defaults to 100.
   * A page can contain fewer results than this value even when more results
   * remain; continue while nextToken is present.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsOutput {
  /**
   * The list of access grant summaries.
   * @public
   */
  items: AccessGrantSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessProfilesInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of access profiles to return per page. Defaults to 100.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessProfilesOutput {
  /**
   * The list of access profile summaries.
   * @public
   */
  items: AccessProfileSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAlertsInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * Filter criteria narrowing which alerts are returned. All members are
   * optional; the three name/id filters are mutually exclusive.
   * @public
   */
  filterCriteria?: AlertFilterCriteria | undefined;

  /**
   * The field to sort results by.
   * @public
   */
  sortBy?: AlertSortField | undefined;

  /**
   * The order in which to sort results.
   * @public
   */
  sortOrder?: AlertSortOrder | undefined;

  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of alerts to return per page.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAlertsOutput {
  /**
   * The list of alert summaries.
   * @public
   */
  items: AlertSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainAccessGrantsForOrganizationInput {
  /**
   * Filter by domain ID.
   * @public
   */
  domainId?: string | undefined;

  /**
   * Filter by principal ID.
   * @public
   */
  principalId?: string | undefined;

  /**
   * Filter by principal type.
   * @public
   */
  principalType?: OrganizationGrantPrincipalType | undefined;

  /**
   * Filter by permission level.
   * @public
   */
  permission?: OrganizationGrantPermission | undefined;

  /**
   * A token to retrieve the next page of results. Supply the same filters used
   * on the request that returned it. Tokens expire after 24 hours.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of access grants to return per page. Defaults to 100.
   * A page can contain fewer results than this value even when more results
   * remain; continue while nextToken is present.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of an organization access grant. Call
 * GetDomainAccessGrantForOrganization for the full grant.
 * @public
 */
export interface OrganizationAccessGrantSummary {
  /**
   * The unique ID of the access grant.
   * @public
   */
  grantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   * @public
   */
  grantArn: string | undefined;

  /**
   * A name that identifies the access grant.
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the organization domain the grant belongs to.
   * @public
   */
  domainId: string | undefined;

  /**
   * The principal receiving the grant.
   * @public
   */
  principal: OrganizationAccessGrantPrincipal | undefined;

  /**
   * The permission granted.
   * @public
   */
  permission: OrganizationGrantPermission | undefined;

  /**
   * Who manages the grant.
   * @public
   */
  grantType: AccessGrantType | undefined;

  /**
   * The timestamp when the access grant was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the access grant was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainAccessGrantsForOrganizationOutput {
  /**
   * The list of organization access grant summaries.
   * @public
   */
  items: OrganizationAccessGrantSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * A token to retrieve the next page of results. Tokens expire after 24 hours.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of domains to return per page. Defaults to 100.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a domain. Call GetDomain for the full domain.
 * @public
 */
export interface DomainSummary {
  /**
   * The unique ID of the domain.
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   * @public
   */
  domainArn?: string | undefined;

  /**
   * A name that identifies the domain.
   * @public
   */
  name?: string | undefined;

  /**
   * Identity Center instance ARN configured for the domain.
   * Absent for IAM-only domains.
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * The Region where this domain was created.
   * @public
   */
  region?: string | undefined;

  /**
   * The timestamp when the domain was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the domain was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Current status of the domain.
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * The list of domain summaries.
   * @public
   */
  items: DomainSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request for listing the integrations in an account.
 * @public
 */
export interface ListIntegrationsInput {
  /**
   * Returns only integrations of this provider type.
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * Returns only integrations in this status.
   * @public
   */
  status?: IntegrationStatus | undefined;

  /**
   * Returns only the integration with this exact name.
   * @public
   */
  name?: string | undefined;

  /**
   * Pagination token from a previous response; omit for the first page.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of integrations to return in one page.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response containing a page of integrations.
 * @public
 */
export interface ListIntegrationsOutput {
  /**
   * The page of integrations.
   * @public
   */
  items: Integration[] | undefined;

  /**
   * Pagination token for the next page; absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOmniDashboardsInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * Filter to dashboards whose name starts with this prefix.
   * @public
   */
  namePrefix?: string | undefined;

  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of dashboards to return per page. Defaults to 100.
   * A page can contain fewer results than this value even when more results
   * remain; continue while nextToken is present.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a dashboard. Call GetOmniDashboard for the full dashboard.
 * @public
 */
export interface OmniDashboardSummary {
  /**
   * The unique ID of the dashboard.
   * @public
   */
  dashboardId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   * @public
   */
  arn: string | undefined;

  /**
   * A name that identifies the dashboard.
   * @public
   */
  name: string | undefined;

  /**
   * The principal that created the dashboard.
   * @public
   */
  createdBy: string | undefined;

  /**
   * An optional description of the dashboard.
   * @public
   */
  description?: string | undefined;

  /**
   * The tags associated with the dashboard.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp when the dashboard was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dashboard was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListOmniDashboardsOutput {
  /**
   * The list of dashboard summaries.
   * @public
   */
  items: OmniDashboardSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesInput {
  /**
   * Filter by domain ID.
   * @public
   */
  domainId?: string | undefined;

  /**
   * A token to retrieve the next page of results. Supply the same filters used
   * on the request that returned it. Tokens expire after 24 hours.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of spaces to return per page. Defaults to 100.
   * A page can contain fewer results than this value even when more results
   * remain; continue while nextToken is present.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a space. Call GetSpace for the full space.
 * @public
 */
export interface SpaceSummary {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A name that identifies the space.
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the space.
   * @public
   */
  spaceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain the space belongs to. Absent when
   * the space is not associated with a domain, so callers must tolerate its absence.
   * @public
   */
  domainArn?: string | undefined;

  /**
   * The region where this space was created.
   * @public
   */
  region: string | undefined;

  /**
   * AWS account ID that owns this space.
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The status of the space.
   * @public
   */
  status: SpaceStatus | undefined;

  /**
   * Reason for the current space status.
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the space was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the space was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSpacesOutput {
  /**
   * The list of space summaries.
   * @public
   */
  items: SpaceSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesForOrganizationInput {
  /**
   * A token to retrieve the next page of results. Tokens expire after 24 hours.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of spaces to return per page. Defaults to 100.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSpacesForOrganizationOutput {
  /**
   * The list of space summaries.
   * @public
   */
  items: SpaceSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryFieldsRequest {
  /**
   * The name of the dataset to list fields for.
   * @public
   */
  dataSetName: string | undefined;

  /**
   * The type of telemetry to filter fields by.
   * @public
   */
  telemetryType?: TelemetryType | undefined;

  /**
   * Inclusive start of the lookback window. When omitted, the service
   * defaults to the configured lookback before endTime.
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Inclusive end of the lookback window. When omitted, the service
   * defaults to the current time.
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A token to retrieve the next page of results. Reserved for future
   * pagination; the service does not paginate at this time and returns null.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryQuerySessionsRequest {
  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of sessions to return per page.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a query session, including its identifier, name,
 * and activity timestamps.
 * @public
 */
export interface SessionSummary {
  /**
   * The unique ID of the session.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The timestamp when the session was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of the most recent activity in the session.
   * @public
   */
  lastActivityAt?: Date | undefined;

  /**
   * The human-readable name of the session. Names under `/aws/` are reserved
   * for service integrations.
   * @public
   */
  sessionName?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryQuerySessionsResponse {
  /**
   * The list of session summaries.
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * Return only views of this ownership category.
   * @public
   */
  type?: ViewType | undefined;

  /**
   * The maximum number of views to return per page.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a view. Does not include the view definition.
 * @public
 */
export interface ViewSummary {
  /**
   * The name of the view.
   * @public
   */
  name: string | undefined;

  /**
   * The ownership category of the view.
   * @public
   */
  type: ViewType | undefined;

  /**
   * The description of the view.
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the view was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the view was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListViewsResponse {
  /**
   * The list of view summaries.
   * @public
   */
  items: ViewSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request for updating the intelligence configuration of the calling account.
 * @public
 */
export interface PutIntelligenceConfigurationInput {
  /**
   * Optional KMS key ARN to configure customer-managed encryption for anomaly data.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Set to true to disassociate the configured KMS key. Mutually exclusive with
   * kmsKeyArn; the service returns ValidationException if both are provided.
   * @public
   */
  removeKmsKey?: boolean | undefined;

  /**
   * Idempotency token for safe retries. Repeating a request with the same token
   * applies the update at most once instead of reprocessing it.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The intelligence configuration for the calling account after the update.
 * @public
 */
export interface PutIntelligenceConfigurationOutput {
  /**
   * The AWS account ID this configuration applies to.
   * @public
   */
  accountId: string | undefined;

  /**
   * The currently active KMS key ARN for customer-managed encryption, if configured.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * ISO-8601 timestamp of the last update.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * ISO-8601 timestamp of initial creation.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchPrincipalsInput {
  /**
   * The ID of the domain to search within.
   * @public
   */
  domainId: string | undefined;

  /**
   * A search term to match against user names, display names, and IDs. Pass * to list
   * all principals. Maximum 128 characters.
   * @public
   */
  searchQuery: string | undefined;

  /**
   * The maximum number of results to return. Defaults to 10. Valid only when searchQuery
   * is *; other searches reject this parameter and return at most 10 results.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results. Valid only when searchQuery is *;
   * other searches do not paginate and reject this parameter. Tokens expire after
   * 24 hours.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A user or group matched by SearchPrincipals.
 * @public
 */
export interface PrincipalSearchResult {
  /**
   * The unique ID of the principal.
   * @public
   */
  principalId: string | undefined;

  /**
   * Whether the principal is a user or a group.
   * @public
   */
  principalType: PrincipalType | undefined;

  /**
   * The display name of the principal.
   * @public
   */
  displayName: string | undefined;

  /**
   * The user name of the principal. Present for users only.
   * @public
   */
  userName?: string | undefined;

  /**
   * An optional description of the principal.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface SearchPrincipalsOutput {
  /**
   * The list of matching principals.
   * @public
   */
  results: PrincipalSearchResult[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryQueryRequest {
  /**
   * The query string to execute.
   * @public
   */
  queryString: string | undefined;

  /**
   * The unique ID of the session.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryQueryResponse {
  /**
   * The unique ID of the query.
   * @public
   */
  queryId: string | undefined;

  /**
   * The unique ID of the session.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryQuerySessionRequest {
  /**
   * A human-readable name for the session. Names under `/aws/` are reserved
   * for service integrations.
   * @public
   */
  sessionName?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryQuerySessionResponse {
  /**
   * The unique ID of the session.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopTelemetryQueryRequest {
  /**
   * The unique ID of the query.
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopTelemetryQueryResponse {}

/**
 * @public
 */
export interface StopTelemetryQuerySessionRequest {
  /**
   * The unique ID of the session.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopTelemetryQuerySessionResponse {}

/**
 * @public
 */
export interface UpdateAccessProfileInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the access profile to update.
   * @public
   */
  profileId: string | undefined;

  /**
   * A new name for the access profile. Omit to leave unchanged.
   * @public
   */
  name?: string | undefined;

  /**
   * A new description of the access profile. Omit to leave unchanged.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessProfileOutput {
  /**
   * The access profile.
   * @public
   */
  accessProfile: AccessProfile | undefined;
}

/**
 * @public
 */
export interface UpdateAlertInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The alert to update.
   * @public
   */
  alertId: string | undefined;

  /**
   * The ID of the access profile associated with the alert.
   * @public
   */
  profileId?: string | undefined;

  /**
   * A new display name for the alert. Omit to leave the name unchanged
   * (apply-if-present / PATCH). Same constraints as CreateAlert.name; the
   * name is not the alert's identity, so a rename never changes the alertId.
   * @public
   */
  name?: string | undefined;

  /**
   * A new description of the alert. Omit to leave unchanged.
   * @public
   */
  description?: string | undefined;

  /**
   * The rule that defines how the alert is evaluated. Omit to leave unchanged.
   * Each sub-block is replaced whole when present: \{@code query\}, \{@code condition\},
   * \{@code evaluation\} and \{@code noData\} are applied only when supplied, and within a
   * supplied block an omitted optional member is cleared to unset (null/absent) rather
   * than preserved from the stored alert or defaulted. See \{@link AlertCondition\} and
   * \{@link AlertEvaluation\}.
   * @public
   */
  rule?: Rule | undefined;

  /**
   * Whether actions (notifications) are enabled for this alert.
   * Omitted = leave existing value unchanged.
   * @public
   */
  notificationsEnabled?: boolean | undefined;

  /**
   * Replaces the entire notification rule list when present; full-replace,
   * not merge. Omitted = leave existing rules unchanged. An empty list
   * clears all rules (the alert keeps evaluating; only notifications stop).
   * @public
   */
  notificationRules?: NotificationRule[] | undefined;
}

/**
 * @public
 */
export interface UpdateAlertOutput {}

/**
 * @public
 */
export interface UpdateDomainInput {
  /**
   * The unique ID of the domain to update.
   * @public
   */
  domainId: string | undefined;

  /**
   * A new name for the domain. Omit to leave unchanged. Must be 3-63 characters:
   * lowercase letters, numbers, and hyphens. It must begin and end with a letter or
   * number and cannot contain consecutive hyphens.
   * @public
   */
  name?: string | undefined;

  /**
   * The identity providers to configure for the domain.
   * @public
   */
  identityProviders?: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the domain.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDomainOutput {
  /**
   * The details of the updated domain.
   * @public
   */
  domain: Domain | undefined;
}

/**
 * @public
 */
export interface UpdateDomainForOrganizationInput {
  /**
   * The ID of the organization domain to update.
   * @public
   */
  domainId: string | undefined;

  /**
   * A new name for the organization domain. Omit to leave unchanged. Must be 3-63
   * characters: lowercase letters, numbers, and hyphens. It must begin and end with a
   * letter or number and cannot contain consecutive hyphens.
   * @public
   */
  name?: string | undefined;

  /**
   * The identity providers to configure for the domain. Omit to leave unchanged.
   * @public
   */
  identityProviders?: IdentityProvider[] | undefined;

  /**
   * Identity provider configuration for the domain. Omit to leave unchanged.
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDomainForOrganizationOutput {
  /**
   * The details of the updated organization domain.
   * @public
   */
  organizationDomain: OrganizationDomain | undefined;
}

/**
 * The request for updating an existing integration.
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * Identifies the integration to update — exactly one of integrationId,
   * integrationArn, or integrationName.
   * @public
   */
  identifier: IntegrationIdentifier | undefined;

  /**
   * The replacement credential used to authenticate with the provider.
   * @public
   */
  credential?: IntegrationCredential | undefined;

  /**
   * The provider-specific attributes to associate with the integration.
   * @public
   */
  integrationAttributes?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name of the IAM role assumed to access the integration.
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * The response from updating an integration.
 * @public
 */
export interface UpdateIntegrationOutput {
  /**
   * The details of the updated integration. This is the same object returned by
   * GetIntegration and CreateIntegration. Populated on a successful update; absent
   * only if the post-update read-back of the resource did not complete.
   * @public
   */
  integration?: Integration | undefined;
}

/**
 * @public
 */
export interface UpdateOmniDashboardInput {
  /**
   * The unique ID of the space.
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the dashboard.
   * @public
   */
  dashboardId: string | undefined;

  /**
   * The new dashboard definition, as a JSON document. Maximum 1 MiB. Omit to
   * leave unchanged.
   * @public
   */
  body?: string | undefined;

  /**
   * A new name for the dashboard. Omit to leave unchanged.
   * @public
   */
  name?: string | undefined;

  /**
   * A new description of the dashboard. Omit to leave unchanged.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOmniDashboardOutput {
  /**
   * The dashboard.
   * @public
   */
  omniDashboard: OmniDashboard | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceInput {
  /**
   * The unique ID of the space to update.
   * @public
   */
  spaceId: string | undefined;

  /**
   * A new name for the space. Omit to leave unchanged. Must be 3-64 characters:
   * lowercase letters, numbers, and hyphens. It must begin and end with a letter or
   * number and cannot contain consecutive hyphens.
   * @public
   */
  name?: string | undefined;

  /**
   * How to encrypt the space's data at rest. Omit to leave encryption unchanged.
   * Pass `encryptionStrategy` AWS_OWNED to stop using a customer managed key and
   * revert to service owned encryption.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceOutput {
  /**
   * The updated details of the space.
   * @public
   */
  space: Space | undefined;
}

/**
 * @public
 */
export interface UpdateViewRequest {
  /**
   * The name of the view to update.
   * @public
   */
  name: string | undefined;

  /**
   * The new SQL query that defines the view. Omit to leave unchanged.
   * @public
   */
  definition?: string | undefined;

  /**
   * The new description of the view. Omit to leave unchanged.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewResponse {
  /**
   * The name of the view.
   * @public
   */
  name: string | undefined;

  /**
   * The ownership category of the view.
   * @public
   */
  type: ViewType | undefined;

  /**
   * The description of the view.
   * @public
   */
  description?: string | undefined;

  /**
   * The SQL query that defines the view.
   * @public
   */
  definition: string | undefined;

  /**
   * The timestamp when the view was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the view was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the view.
   * @public
   */
  arn: string | undefined;
}

/**
 * A telemetry field available for use in query expressions.
 * @public
 */
export interface Field {
  /**
   * The name of the field. Field names are case-sensitive and must be used
   * exactly as returned when referencing them in query expressions.
   * @public
   */
  name: string | undefined;

  /**
   * Child fields nested under this field.
   * @public
   */
  children?: Field[] | undefined;
}

/**
 * @public
 */
export interface ListTelemetryFieldsResponse {
  /**
   * The list of fields available for queries.
   * @public
   */
  fields: Field[] | undefined;

  /**
   * A token to retrieve the next page of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}
