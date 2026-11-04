// smithy-typescript generated code
import type {
  ActivationOverrideBehavior,
  AllowedOperation,
  CheckoutType,
  DigitalSignatureMethod,
  EntitlementDataUnit,
  EntitlementUnit,
  GrantStatus,
  GrantType,
  InventoryFilterCondition,
  LicenseAssetGroupStatus,
  LicenseConfigurationStatus,
  LicenseConversionTaskStatus,
  LicenseCountingType,
  LicenseDeletionStatus,
  LicenseStatus,
  ProductCodeType,
  ReceivedStatus,
  RenewType,
  ReportFrequencyType,
  ReportType,
  ResourceType,
  TokenType,
} from "./enums";

/**
 * @public
 */
export interface AcceptGrantRequest {
  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;
}

/**
 * @public
 */
export interface AcceptGrantResponse {
  /**
   * Grant ARN.
   *
   * @public
   */
  GrantArn?: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Matching rule statement.
 *
 * @public
 */
export interface MatchingRuleStatement {
  /**
   * Key to match.
   *
   * The following keys and are supported when the RuleStatement type is `Instance`:
   *
   * - `Platform` - The name of the platform. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `EC2BillingProduct` - The billing product code. Logical operators are `EQUALS` and `NOT_EQUALS`. Possible values are: `windows-server-enterprise` | `windows-byol` | `rhel` | `rhel-byol` | `rhel-high-availability` | `ubuntu-pro` | `suse-linux` | `sql-server-standard` | `sql-server-enterprise`.
   * - `MarketPlaceProductCode` - The Marketplace product code. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `AMIId` - The ID of the AMI. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `InstanceType` - The instance type. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `InstanceId` - The ID of the instance. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `HostId` - The ID of the host. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `AccountId` - The ID of the account. Logical operators are `EQUALS` and `NOT_EQUALS`.
   *
   * The following keys and are supported when the RuleStatement type is `License`:
   *
   * - `LicenseArn` - The ARN of a Managed Entitlement License. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `ProductSKU` - The productSKU of the license. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `Issuer` - The issuer of the license. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `Beneficiary` - The beneficiary of the license. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `LicenseStatus` - The status of the license. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `HomeRegion` - The home region of the license. Logical operators are `EQUALS` and `NOT_EQUALS`.
   *
   * The following keys and are supported when the RuleStatement type is `License Configuration`:
   *
   * - `LicenseConfigurationArn` - The ARN of a self-managed license configuration. Logical operators are `EQUALS` and `NOT_EQUALS`.
   * - `AccountId` - The account of the license configuration. Logical operators are `EQUALS` and `NOT_EQUALS`.
   *
   * @public
   */
  KeyToMatch: string | undefined;

  /**
   * Constraint.
   *
   * @public
   */
  Constraint: string | undefined;

  /**
   * Value to match.
   *
   * @public
   */
  ValueToMatch: string[] | undefined;
}

/**
 * Rule statement that uses a script to evaluate license asset conditions.
 *
 * @public
 */
export interface ScriptRuleStatement {
  /**
   * Key name to match against in the script rule evaluation.
   *
   * @public
   */
  KeyToMatch: string | undefined;

  /**
   * Script code used to evaluate the rule condition.
   *
   * @public
   */
  Script: string | undefined;
}

/**
 * AND rule statement.
 *
 * @public
 */
export interface AndRuleStatement {
  /**
   * Matching rule statements.
   *
   * @public
   */
  MatchingRuleStatements?: MatchingRuleStatement[] | undefined;

  /**
   * Script rule statements.
   *
   * @public
   */
  ScriptRuleStatements?: ScriptRuleStatement[] | undefined;
}

/**
 * Asset.
 *
 * @public
 */
export interface Asset {
  /**
   * Amazon Resource Name (ARN) of the asset.
   *
   * @public
   */
  AssetArn?: string | undefined;

  /**
   * Latest asset discovery time.
   *
   * @public
   */
  LatestAssetDiscoveryTime?: Date | undefined;
}

/**
 * Describes automated discovery.
 *
 * @public
 */
export interface AutomatedDiscoveryInformation {
  /**
   * Time that automated discovery last ran.
   *
   * @public
   */
  LastRunTime?: Date | undefined;
}

/**
 * @public
 */
export interface CheckInLicenseRequest {
  /**
   * License consumption token.
   *
   * @public
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * License beneficiary.
   *
   * @public
   */
  Beneficiary?: string | undefined;
}

/**
 * @public
 */
export interface CheckInLicenseResponse {}

/**
 * Describes key/value pairs.
 *
 * @public
 */
export interface Metadata {
  /**
   * The key name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Data associated with an entitlement resource.
 *
 * @public
 */
export interface EntitlementData {
  /**
   * Entitlement data name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Entitlement data value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Entitlement data unit.
   *
   * @public
   */
  Unit: EntitlementDataUnit | undefined;
}

/**
 * @public
 */
export interface CheckoutBorrowLicenseRequest {
  /**
   * Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * License entitlements. Partial checkouts are not supported.
   *
   * @public
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384. For more information, see [RFC 7518 Digital Signature with RSASSA-PSS](https://tools.ietf.org/html/rfc7518#section-3.5).
   *
   * @public
   */
  DigitalSignatureMethod: DigitalSignatureMethod | undefined;

  /**
   * Node ID.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * Information about constraints.
   *
   * @public
   */
  CheckoutMetadata?: Metadata[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface CheckoutBorrowLicenseResponse {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * License consumption token.
   *
   * @public
   */
  LicenseConsumptionToken?: string | undefined;

  /**
   * Allowed license entitlements.
   *
   * @public
   */
  EntitlementsAllowed?: EntitlementData[] | undefined;

  /**
   * Node ID.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * Signed token.
   *
   * @public
   */
  SignedToken?: string | undefined;

  /**
   * Date and time at which the license checkout is issued.
   *
   * @public
   */
  IssuedAt?: string | undefined;

  /**
   * Date and time at which the license checkout expires.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Information about constraints.
   *
   * @public
   */
  CheckoutMetadata?: Metadata[] | undefined;
}

/**
 * @public
 */
export interface CheckoutLicenseRequest {
  /**
   * Product SKU.
   *
   * @public
   */
  ProductSKU: string | undefined;

  /**
   * Checkout type.
   *
   * @public
   */
  CheckoutType: CheckoutType | undefined;

  /**
   * Key fingerprint identifying the license.
   *
   * @public
   */
  KeyFingerprint: string | undefined;

  /**
   * License entitlements.
   *
   * @public
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * License beneficiary.
   *
   * @public
   */
  Beneficiary?: string | undefined;

  /**
   * Node ID.
   *
   * @public
   */
  NodeId?: string | undefined;
}

/**
 * @public
 */
export interface CheckoutLicenseResponse {
  /**
   * Checkout type.
   *
   * @public
   */
  CheckoutType?: CheckoutType | undefined;

  /**
   * License consumption token.
   *
   * @public
   */
  LicenseConsumptionToken?: string | undefined;

  /**
   * Allowed license entitlements.
   *
   * @public
   */
  EntitlementsAllowed?: EntitlementData[] | undefined;

  /**
   * Signed token.
   *
   * @public
   */
  SignedToken?: string | undefined;

  /**
   * Node ID.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * Date and time at which the license checkout is issued.
   *
   * @public
   */
  IssuedAt?: string | undefined;

  /**
   * Date and time at which the license checkout expires.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the checkout license.
   *
   * @public
   */
  LicenseArn?: string | undefined;
}

/**
 * The options you can specify when you create a grant or a new version of a grant, such as activation override behavior. For more information, see [Granted licenses in License Manager](https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html) in the *License Manager User Guide*.
 *
 * @public
 */
export interface Options {
  /**
   * An activation option for your grant that determines the behavior of activating a grant. Activation options can only be used with granted licenses sourced from the Amazon Web Services Marketplace. Additionally, the operation must activate the grant. For the `CreateGrantVersion` operation, specify `ACTIVE` for the `Status` parameter. For the `CreateGrant` operation, specify `ACTIVE` for the `DesiredStatus` option.
   *
   * - As a license administrator, you can optionally specify an `ActivationOverrideBehavior` when activating a grant.
   * - As a grantor, you can optionally specify an `ActivationOverrideBehavior` when you activate a grant for a grantee account in your organization.
   * - As a grantee, if the grantor creating the distributed grant doesn’t specify an `ActivationOverrideBehavior`, you can optionally specify one when you are activating the grant.
   *
   * - **DISTRIBUTED_GRANTS_ONLY**
   *
   *   Use this value to activate a grant without replacing any member account’s active grants for the same product.
   *
   * - **ALL_GRANTS_PERMITTED_BY_ISSUER**
   *
   *   Use this value to activate a grant and disable other active grants in any member accounts for the same product. This action will also replace their previously activated grants with this activated grant.
   *
   * @public
   */
  ActivationOverrideBehavior?: ActivationOverrideBehavior | undefined;

  /**
   * The status of the grant after License Manager creates it. The only supported value is `ACTIVE`. Specify `ACTIVE` to create and activate the grant in one request.
   *
   * You can specify this option only for the `CreateGrant` operation, and only when the grant principal is an organization or an organizational unit (OU). To change the status of an existing grant, use the `Status` parameter of the `CreateGrantVersion` operation.
   *
   * @public
   */
  DesiredStatus?: GrantStatus | undefined;
}

/**
 * Details about the tags for a resource. For more information about tagging support in License Manager, see the [TagResource](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html) operation.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateGrantRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Grant name.
   *
   * @public
   */
  GrantName: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):
   *
   * - An Amazon Web Services account, which includes only the account specified.
   *
   * - An organizational unit (OU), which includes all accounts in the OU.
   *
   * - An organization, which will include all accounts across your organization.
   *
   * @public
   */
  Principals: string[] | undefined;

  /**
   * Home Region of the grant.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * Allowed operations for the grant.
   *
   * @public
   */
  AllowedOperations: AllowedOperation[] | undefined;

  /**
   * Tags to add to the grant. For more information about tagging support in License Manager, see the [TagResource](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html) operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of grant to create. For more information about each type, see the preceding description of this operation. Valid values:
   *
   * - `BuyerGrant` - The default grant type if you don't specify a value. Conveys the entitlement to use the license.
   * - `DelegateGrant` - Gives the grantee read-only visibility into the licenses and grants that you have distributed to buyers, with no entitlement to use them.
   *
   * @public
   */
  GrantType?: GrantType | undefined;

  /**
   * The options for the grant: the status to set after creation, and how activating the grant affects other active grants for the same product.
   *
   * @public
   */
  Options?: Options | undefined;
}

/**
 * @public
 */
export interface CreateGrantResponse {
  /**
   * Grant ARN.
   *
   * @public
   */
  GrantArn?: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface CreateGrantVersionRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;

  /**
   * Grant name.
   *
   * @public
   */
  GrantName?: string | undefined;

  /**
   * Allowed operations for the grant.
   *
   * @public
   */
  AllowedOperations?: AllowedOperation[] | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * Grant status reason.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Current version of the grant.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * The options specified for the grant.
   *
   * @public
   */
  Options?: Options | undefined;
}

/**
 * @public
 */
export interface CreateGrantVersionResponse {
  /**
   * Grant ARN.
   *
   * @public
   */
  GrantArn?: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * New version of the grant.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Details about a borrow configuration.
 *
 * @public
 */
export interface BorrowConfiguration {
  /**
   * Indicates whether early check-ins are allowed.
   *
   * @public
   */
  AllowEarlyCheckIn: boolean | undefined;

  /**
   * Maximum time for the borrow configuration, in minutes.
   *
   * @public
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

/**
 * Details about a provisional configuration.
 *
 * @public
 */
export interface ProvisionalConfiguration {
  /**
   * Maximum time for the provisional configuration, in minutes.
   *
   * @public
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

/**
 * Details about a consumption configuration.
 *
 * @public
 */
export interface ConsumptionConfiguration {
  /**
   * Renewal frequency.
   *
   * @public
   */
  RenewType?: RenewType | undefined;

  /**
   * Details about a provisional configuration.
   *
   * @public
   */
  ProvisionalConfiguration?: ProvisionalConfiguration | undefined;

  /**
   * Details about a borrow configuration.
   *
   * @public
   */
  BorrowConfiguration?: BorrowConfiguration | undefined;
}

/**
 * Describes a resource entitled for use with a license.
 *
 * @public
 */
export interface Entitlement {
  /**
   * Entitlement name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Entitlement resource. Use only if the unit is None.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Maximum entitlement count. Use if the unit is not None.
   *
   * @public
   */
  MaxCount?: number | undefined;

  /**
   * Indicates whether overages are allowed.
   *
   * @public
   */
  Overage?: boolean | undefined;

  /**
   * Entitlement unit.
   *
   * @public
   */
  Unit: EntitlementUnit | undefined;

  /**
   * Indicates whether check-ins are allowed.
   *
   * @public
   */
  AllowCheckIn?: boolean | undefined;
}

/**
 * Details about the issuer of a license.
 *
 * @public
 */
export interface Issuer {
  /**
   * Issuer name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.
   *
   * @public
   */
  SignKey?: string | undefined;
}

/**
 * Describes a time range, in ISO8601-UTC format.
 *
 * @public
 */
export interface DatetimeRange {
  /**
   * Start of the time range.
   *
   * @public
   */
  Begin: string | undefined;

  /**
   * End of the time range.
   *
   * @public
   */
  End?: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseRequest {
  /**
   * License name.
   *
   * @public
   */
  LicenseName: string | undefined;

  /**
   * Product name.
   *
   * @public
   */
  ProductName: string | undefined;

  /**
   * Product SKU.
   *
   * @public
   */
  ProductSKU: string | undefined;

  /**
   * License issuer.
   *
   * @public
   */
  Issuer: Issuer | undefined;

  /**
   * Home Region for the license.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * Date and time range during which the license is valid, in ISO8601-UTC format.
   *
   * @public
   */
  Validity: DatetimeRange | undefined;

  /**
   * License entitlements.
   *
   * @public
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * License beneficiary.
   *
   * @public
   */
  Beneficiary: string | undefined;

  /**
   * Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.
   *
   * @public
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * Information about the license.
   *
   * @public
   */
  LicenseMetadata?: Metadata[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Tags to add to the license. For more information about tagging support in License Manager, see the [TagResource](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html) operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLicenseResponse {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * License status.
   *
   * @public
   */
  Status?: LicenseStatus | undefined;

  /**
   * License version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * License asset group configuration.
 *
 * @public
 */
export interface LicenseAssetGroupConfiguration {
  /**
   * License Asset Group Configuration Usage dimension.
   *
   * @public
   */
  UsageDimension?: string | undefined;
}

/**
 * License asset group property.
 *
 * @public
 */
export interface LicenseAssetGroupProperty {
  /**
   * Property key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Property value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseAssetGroupRequest {
  /**
   * License asset group name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * License asset group description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset group configurations.
   *
   * @public
   */
  LicenseAssetGroupConfigurations: LicenseAssetGroupConfiguration[] | undefined;

  /**
   * ARNs of associated license asset rulesets.
   *
   * @public
   */
  AssociatedLicenseAssetRulesetARNs: string[] | undefined;

  /**
   * License asset group properties.
   *
   * @public
   */
  Properties?: LicenseAssetGroupProperty[] | undefined;

  /**
   * Tags to add to the license asset group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseAssetGroupResponse {
  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;

  /**
   * License asset group status.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * OR rule statement.
 *
 * @public
 */
export interface OrRuleStatement {
  /**
   * Matching rule statements.
   *
   * @public
   */
  MatchingRuleStatements?: MatchingRuleStatement[] | undefined;

  /**
   * Script rule statements.
   *
   * @public
   */
  ScriptRuleStatements?: ScriptRuleStatement[] | undefined;
}

/**
 * Instance rule statement.
 *
 * @public
 */
export interface InstanceRuleStatement {
  /**
   * AND rule statement.
   *
   * @public
   */
  AndRuleStatement?: AndRuleStatement | undefined;

  /**
   * OR rule statement.
   *
   * @public
   */
  OrRuleStatement?: OrRuleStatement | undefined;

  /**
   * Matching rule statement.
   *
   * @public
   */
  MatchingRuleStatement?: MatchingRuleStatement | undefined;

  /**
   * Script rule statement.
   *
   * @public
   */
  ScriptRuleStatement?: ScriptRuleStatement | undefined;
}

/**
 * License configuration rule statement.
 *
 * @public
 */
export interface LicenseConfigurationRuleStatement {
  /**
   * AND rule statement.
   *
   * @public
   */
  AndRuleStatement?: AndRuleStatement | undefined;

  /**
   * OR rule statement.
   *
   * @public
   */
  OrRuleStatement?: OrRuleStatement | undefined;

  /**
   * Matching rule statement.
   *
   * @public
   */
  MatchingRuleStatement?: MatchingRuleStatement | undefined;
}

/**
 * License rule statement.
 *
 * @public
 */
export interface LicenseRuleStatement {
  /**
   * AND rule statement.
   *
   * @public
   */
  AndRuleStatement?: AndRuleStatement | undefined;

  /**
   * OR rule statement.
   *
   * @public
   */
  OrRuleStatement?: OrRuleStatement | undefined;

  /**
   * Matching rule statement.
   *
   * @public
   */
  MatchingRuleStatement?: MatchingRuleStatement | undefined;
}

/**
 * Rule statement.
 *
 * @public
 */
export interface RuleStatement {
  /**
   * License configuration rule statement.
   *
   * @public
   */
  LicenseConfigurationRuleStatement?: LicenseConfigurationRuleStatement | undefined;

  /**
   * License rule statement.
   *
   * @public
   */
  LicenseRuleStatement?: LicenseRuleStatement | undefined;

  /**
   * Instance rule statement.
   *
   * @public
   */
  InstanceRuleStatement?: InstanceRuleStatement | undefined;
}

/**
 * License asset rule.
 *
 * @public
 */
export interface LicenseAssetRule {
  /**
   * Rule statement.
   *
   * @public
   */
  RuleStatement: RuleStatement | undefined;
}

/**
 * @public
 */
export interface CreateLicenseAssetRulesetRequest {
  /**
   * License asset ruleset name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * License asset ruleset description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset rules.
   *
   * @public
   */
  Rules: LicenseAssetRule[] | undefined;

  /**
   * Tags to add to the license asset ruleset.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseAssetRulesetResponse {
  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;
}

/**
 * Describes product information filters.
 *
 * @public
 */
export interface ProductInformationFilter {
  /**
   * Filter name.
   *
   * @public
   */
  ProductInformationFilterName: string | undefined;

  /**
   * Filter value.
   *
   * @public
   */
  ProductInformationFilterValue?: string[] | undefined;

  /**
   * Logical operator.
   *
   * @public
   */
  ProductInformationFilterComparator: string | undefined;
}

/**
 * Describes product information for a license configuration.
 *
 * @public
 */
export interface ProductInformation {
  /**
   * Resource type. The possible values are `SSM_MANAGED` | `RDS`.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * A Product information filter consists of a `ProductInformationFilterComparator` which is a logical operator, a `ProductInformationFilterName` which specifies the type of filter being declared, and a `ProductInformationFilterValue` that specifies the value to filter on.
   *
   * Accepted values for `ProductInformationFilterName` are listed here along with descriptions and valid options for `ProductInformationFilterComparator`.
   *
   * The following filters and are supported when the resource type is `SSM_MANAGED`:
   *
   * - `Application Name` - The name of the application. Logical operator is `EQUALS`.
   * - `Application Publisher` - The publisher of the application. Logical operator is `EQUALS`.
   * - `Application Version` - The version of the application. Logical operator is `EQUALS`.
   * - `Platform Name` - The name of the platform. Logical operator is `EQUALS`.
   * - `Platform Type` - The platform type. Logical operator is `EQUALS`.
   * - `Tag:key` - The key of a tag attached to an Amazon Web Services resource you wish to exclude from automated discovery. Logical operator is `NOT_EQUALS`. The key for your tag must be appended to `Tag:` following the example: `Tag:name-of-your-key`. `ProductInformationFilterValue` is optional if you are not using values for the key.
   * - `AccountId` - The 12-digit ID of an Amazon Web Services account you wish to exclude from automated discovery. Logical operator is `NOT_EQUALS`.
   * - `License Included` - The type of license included. Logical operators are `EQUALS` and `NOT_EQUALS`. Possible values are: `sql-server-enterprise` | `sql-server-standard` | `sql-server-web` | `windows-server-datacenter`.
   *
   * The following filters and logical operators are supported when the resource type is `RDS`:
   *
   * - `Engine Edition` - The edition of the database engine. Logical operator is `EQUALS`. Possible values are: `oracle-ee` | `oracle-se` | `oracle-se1` | `oracle-se2` | `db2-se` | `db2-ae`.
   * - `License Pack` - The license pack. Logical operator is `EQUALS`. Possible values are: `data guard` | `diagnostic pack sqlt` | `tuning pack sqlt` | `ols` | `olap`.
   *
   * @public
   */
  ProductInformationFilterList: ProductInformationFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateLicenseConfigurationRequest {
  /**
   * Name of the license configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Description of the license configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Dimension used to track the license inventory.
   *
   * @public
   */
  LicenseCountingType: LicenseCountingType | undefined;

  /**
   * Number of licenses managed by the license configuration.
   *
   * @public
   */
  LicenseCount?: number | undefined;

  /**
   * Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.
   *
   * @public
   */
  LicenseCountHardLimit?: boolean | undefined;

  /**
   * License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules vary by dimension, as follows.
   *
   * - `Cores` dimension: `allowedTenancy` | `licenseAffinityToHost` | `maximumCores` | `minimumCores`
   * - `Instances` dimension: `allowedTenancy` | `maximumVcpus` | `minimumVcpus`
   * - `Sockets` dimension: `allowedTenancy` | `licenseAffinityToHost` | `maximumSockets` | `minimumSockets`
   * - `vCPUs` dimension: `allowedTenancy` | `honorVcpuOptimization` | `maximumVcpus` | `minimumVcpus`
   *
   * The unit for `licenseAffinityToHost` is days and the range is 1 to 180. The possible values for `allowedTenancy` are `EC2-Default`, `EC2-DedicatedHost`, and `EC2-DedicatedInstance`. The possible values for `honorVcpuOptimization` are `True` and `False`.
   *
   * @public
   */
  LicenseRules?: string[] | undefined;

  /**
   * Tags to add to the license configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * When true, disassociates a resource when software is uninstalled.
   *
   * @public
   */
  DisassociateWhenNotFound?: boolean | undefined;

  /**
   * Product information.
   *
   * @public
   */
  ProductInformationList?: ProductInformation[] | undefined;

  /**
   * License configuration expiry.
   *
   * @public
   */
  LicenseExpiry?: number | undefined;
}

/**
 * @public
 */
export interface CreateLicenseConfigurationResponse {
  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * A list item that contains a product code.
 *
 * @public
 */
export interface ProductCodeListItem {
  /**
   * The product code ID
   *
   * @public
   */
  ProductCodeId: string | undefined;

  /**
   * The product code type
   *
   * @public
   */
  ProductCodeType: ProductCodeType | undefined;
}

/**
 * Information about a license type conversion task.
 *
 * @public
 */
export interface LicenseConversionContext {
  /**
   * The Usage operation value that corresponds to the license type you are converting your resource from. For more information about which platforms correspond to which usage operation values see [Sample data: usage operation by platform](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info)
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * Product codes referred to in the license conversion process.
   *
   * @public
   */
  ProductCodes?: ProductCodeListItem[] | undefined;
}

/**
 * @public
 */
export interface CreateLicenseConversionTaskForResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource you are converting the license type for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Information that identifies the license type you are converting from. For the structure of the source license, see [Convert a license type using the CLI](https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli) in the *License Manager User Guide*.
   *
   * @public
   */
  SourceLicenseContext: LicenseConversionContext | undefined;

  /**
   * Information that identifies the license type you are converting to. For the structure of the destination license, see [Convert a license type using the CLI](https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli) in the *License Manager User Guide*.
   *
   * @public
   */
  DestinationLicenseContext: LicenseConversionContext | undefined;
}

/**
 * @public
 */
export interface CreateLicenseConversionTaskForResourceResponse {
  /**
   * The ID of the created license type conversion task.
   *
   * @public
   */
  LicenseConversionTaskId?: string | undefined;
}

/**
 * Details of the license configuration that this generator reports on.
 *
 * @public
 */
export interface ReportContext {
  /**
   * Amazon Resource Name (ARN) of the license configuration that this generator reports on.
   *
   * @public
   */
  licenseConfigurationArns?: string[] | undefined;

  /**
   * Amazon Resource Names (ARNs) of the license asset groups to include in the report.
   *
   * @public
   */
  licenseAssetGroupArns?: string[] | undefined;

  /**
   * Start date for the report data collection period.
   *
   * @public
   */
  reportStartDate?: Date | undefined;

  /**
   * End date for the report data collection period.
   *
   * @public
   */
  reportEndDate?: Date | undefined;
}

/**
 * Details about how frequently reports are generated.
 *
 * @public
 */
export interface ReportFrequency {
  /**
   * Number of times within the frequency period that a report is generated. The only supported value is `1`.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * Time period between each report. The period can be daily, weekly, or monthly.
   *
   * @public
   */
  period?: ReportFrequencyType | undefined;
}

/**
 * @public
 */
export interface CreateLicenseManagerReportGeneratorRequest {
  /**
   * Name of the report generator.
   *
   * @public
   */
  ReportGeneratorName: string | undefined;

  /**
   * Type of reports to generate. The following report types an be generated:
   *
   * - License configuration report - Reports the number and details of consumed licenses for a license configuration.
   * - Resource report - Reports the tracked licenses and resource consumption for a license configuration.
   *
   * @public
   */
  Type: ReportType[] | undefined;

  /**
   * Defines the type of license configuration the report generator tracks.
   *
   * @public
   */
  ReportContext: ReportContext | undefined;

  /**
   * Frequency by which reports are generated. Reports can be generated daily, monthly, or weekly.
   *
   * @public
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Description of the report generator.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags to add to the report generator.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLicenseManagerReportGeneratorResponse {
  /**
   * The Amazon Resource Name (ARN) of the new report generator.
   *
   * @public
   */
  LicenseManagerReportGeneratorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseVersionRequest {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * License name.
   *
   * @public
   */
  LicenseName: string | undefined;

  /**
   * Product name.
   *
   * @public
   */
  ProductName: string | undefined;

  /**
   * License issuer.
   *
   * @public
   */
  Issuer: Issuer | undefined;

  /**
   * Home Region of the license.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * Date and time range during which the license is valid, in ISO8601-UTC format.
   *
   * @public
   */
  Validity: DatetimeRange | undefined;

  /**
   * Information about the license.
   *
   * @public
   */
  LicenseMetadata?: Metadata[] | undefined;

  /**
   * License entitlements.
   *
   * @public
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.
   *
   * @public
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * License status.
   *
   * @public
   */
  Status: LicenseStatus | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Current version of the license.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * Specifies whether to reset the license usage for the new license version. If you don't specify a value, the license usage is not reset.
   *
   * @public
   */
  ResetUsage?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLicenseVersionResponse {
  /**
   * License ARN.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * New version of the license.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * License status.
   *
   * @public
   */
  Status?: LicenseStatus | undefined;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the JWT token.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM roles to embed in the token. License Manager does not check whether the roles are in use.
   *
   * @public
   */
  RoleArns?: string[] | undefined;

  /**
   * Token expiration, in days, counted from token creation. The default is 365 days.
   *
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * Data specified by the caller to be included in the JWT token. The data is mapped to the amr claim of the JWT token.
   *
   * @public
   */
  TokenProperties?: string[] | undefined;

  /**
   * Idempotency token, valid for 10 minutes.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * Token ID.
   *
   * @public
   */
  TokenId?: string | undefined;

  /**
   * Token type.
   *
   * @public
   */
  TokenType?: TokenType | undefined;

  /**
   * Refresh token, encoded as a JWT token.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGrantRequest {
  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;

  /**
   * The Status reason for the delete request.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Current version of the grant.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface DeleteGrantResponse {
  /**
   * Grant ARN.
   *
   * @public
   */
  GrantArn?: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseRequest {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * Current version of the license.
   *
   * @public
   */
  SourceVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseResponse {
  /**
   * License status.
   *
   * @public
   */
  Status?: LicenseDeletionStatus | undefined;

  /**
   * Date when the license is deleted.
   *
   * @public
   */
  DeletionDate?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseAssetGroupRequest {
  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseAssetGroupResponse {
  /**
   * License asset group status.
   *
   * @public
   */
  Status: LicenseAssetGroupStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseAssetRulesetRequest {
  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseAssetRulesetResponse {}

/**
 * @public
 */
export interface DeleteLicenseConfigurationRequest {
  /**
   * ID of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseConfigurationResponse {}

/**
 * @public
 */
export interface DeleteLicenseManagerReportGeneratorRequest {
  /**
   * Amazon Resource Name (ARN) of the report generator to be deleted.
   *
   * @public
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseManagerReportGeneratorResponse {}

/**
 * @public
 */
export interface DeleteTokenRequest {
  /**
   * Token ID.
   *
   * @public
   */
  TokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenResponse {}

/**
 * @public
 */
export interface ExtendLicenseConsumptionRequest {
  /**
   * License consumption token.
   *
   * @public
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ExtendLicenseConsumptionResponse {
  /**
   * License consumption token.
   *
   * @public
   */
  LicenseConsumptionToken?: string | undefined;

  /**
   * Date and time at which the license consumption expires.
   *
   * @public
   */
  Expiration?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenRequest {
  /**
   * Refresh token, encoded as a JWT token.
   *
   * @public
   */
  Token: string | undefined;

  /**
   * Token properties to validate against those present in the JWT token.
   *
   * @public
   */
  TokenProperties?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenResponse {
  /**
   * Temporary access token.
   *
   * @public
   */
  AccessToken?: string | undefined;
}

/**
 * @public
 */
export interface GetGrantRequest {
  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Describes a grant.
 *
 * @public
 */
export interface Grant {
  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;

  /**
   * Grant name.
   *
   * @public
   */
  GrantName: string | undefined;

  /**
   * Parent ARN.
   *
   * @public
   */
  ParentArn: string | undefined;

  /**
   * License ARN.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * The grantee principal ARN.
   *
   * @public
   */
  GranteePrincipalArn: string | undefined;

  /**
   * Home Region of the grant.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  GrantStatus: GrantStatus | undefined;

  /**
   * Grant status reason.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * Granted operations.
   *
   * @public
   */
  GrantedOperations: AllowedOperation[] | undefined;

  /**
   * The options specified for the grant.
   *
   * @public
   */
  Options?: Options | undefined;

  /**
   * The type of the grant. Valid values:
   *
   * - `BuyerGrant` - Grants the entitlement to use the license.
   * - `DelegateGrant` - Gives the grantee read-only visibility into the licenses and grants distributed to buyers, with no entitlement to use them.
   *
   * @public
   */
  GrantType?: GrantType | undefined;
}

/**
 * @public
 */
export interface GetGrantResponse {
  /**
   * Grant details.
   *
   * @public
   */
  Grant?: Grant | undefined;
}

/**
 * @public
 */
export interface GetLicenseRequest {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * License version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Details associated with the issuer of a license.
 *
 * @public
 */
export interface IssuerDetails {
  /**
   * Issuer name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.
   *
   * @public
   */
  SignKey?: string | undefined;

  /**
   * Issuer key fingerprint.
   *
   * @public
   */
  KeyFingerprint?: string | undefined;
}

/**
 * Software license that is managed in License Manager.
 *
 * @public
 */
export interface License {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * License name.
   *
   * @public
   */
  LicenseName?: string | undefined;

  /**
   * Product name.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * Product SKU.
   *
   * @public
   */
  ProductSKU?: string | undefined;

  /**
   * License issuer.
   *
   * @public
   */
  Issuer?: IssuerDetails | undefined;

  /**
   * Home Region of the license.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * License status.
   *
   * @public
   */
  Status?: LicenseStatus | undefined;

  /**
   * Date and time range during which the license is valid, in ISO8601-UTC format.
   *
   * @public
   */
  Validity?: DatetimeRange | undefined;

  /**
   * License beneficiary.
   *
   * @public
   */
  Beneficiary?: string | undefined;

  /**
   * License entitlements.
   *
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * Configuration for consumption of the license.
   *
   * @public
   */
  ConsumptionConfiguration?: ConsumptionConfiguration | undefined;

  /**
   * License metadata.
   *
   * @public
   */
  LicenseMetadata?: Metadata[] | undefined;

  /**
   * License creation time.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * License version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetLicenseResponse {
  /**
   * License details.
   *
   * @public
   */
  License?: License | undefined;
}

/**
 * @public
 */
export interface GetLicenseAssetGroupRequest {
  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;
}

/**
 * License asset group.
 *
 * @public
 */
export interface LicenseAssetGroup {
  /**
   * License asset group name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * License asset group description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset group configurations.
   *
   * @public
   */
  LicenseAssetGroupConfigurations?: LicenseAssetGroupConfiguration[] | undefined;

  /**
   * ARNs of associated license asset rulesets.
   *
   * @public
   */
  AssociatedLicenseAssetRulesetARNs: string[] | undefined;

  /**
   * License asset group properties.
   *
   * @public
   */
  Properties?: LicenseAssetGroupProperty[] | undefined;

  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;

  /**
   * License asset group status.
   *
   * @public
   */
  Status: LicenseAssetGroupStatus | undefined;

  /**
   * License asset group status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Latest usage analysis time.
   *
   * @public
   */
  LatestUsageAnalysisTime?: Date | undefined;

  /**
   * Latest resource discovery time.
   *
   * @public
   */
  LatestResourceDiscoveryTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLicenseAssetGroupResponse {
  /**
   * License asset group.
   *
   * @public
   */
  LicenseAssetGroup: LicenseAssetGroup | undefined;
}

/**
 * @public
 */
export interface GetLicenseAssetRulesetRequest {
  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;
}

/**
 * License asset ruleset.
 *
 * @public
 */
export interface LicenseAssetRuleset {
  /**
   * License asset ruleset name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * License asset ruleset description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset rules.
   *
   * @public
   */
  Rules: LicenseAssetRule[] | undefined;

  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;
}

/**
 * @public
 */
export interface GetLicenseAssetRulesetResponse {
  /**
   * License asset ruleset.
   *
   * @public
   */
  LicenseAssetRuleset: LicenseAssetRuleset | undefined;
}

/**
 * @public
 */
export interface GetLicenseConfigurationRequest {
  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;
}

/**
 * Details about license consumption.
 *
 * @public
 */
export interface ConsumedLicenseSummary {
  /**
   * Resource type of the resource consuming a license.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Number of licenses consumed by the resource.
   *
   * @public
   */
  ConsumedLicenses?: number | undefined;
}

/**
 * Summary information about a managed resource.
 *
 * @public
 */
export interface ManagedResourceSummary {
  /**
   * Type of resource associated with a license.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Number of resources associated with licenses.
   *
   * @public
   */
  AssociationCount?: number | undefined;
}

/**
 * @public
 */
export interface GetLicenseConfigurationResponse {
  /**
   * Unique ID for the license configuration.
   *
   * @public
   */
  LicenseConfigurationId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;

  /**
   * Name of the license configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Description of the license configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Dimension for which the licenses are counted.
   *
   * @public
   */
  LicenseCountingType?: LicenseCountingType | undefined;

  /**
   * License rules.
   *
   * @public
   */
  LicenseRules?: string[] | undefined;

  /**
   * Number of available licenses.
   *
   * @public
   */
  LicenseCount?: number | undefined;

  /**
   * Sets the number of available licenses as a hard limit.
   *
   * @public
   */
  LicenseCountHardLimit?: boolean | undefined;

  /**
   * Number of licenses assigned to resources.
   *
   * @public
   */
  ConsumedLicenses?: number | undefined;

  /**
   * License configuration status.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Account ID of the owner of the license configuration.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Summaries of the licenses consumed by resources.
   *
   * @public
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[] | undefined;

  /**
   * Summaries of the managed resources.
   *
   * @public
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[] | undefined;

  /**
   * Tags for the license configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Product information.
   *
   * @public
   */
  ProductInformationList?: ProductInformation[] | undefined;

  /**
   * Automated discovery information.
   *
   * @public
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation | undefined;

  /**
   * When true, disassociates a resource when software is uninstalled.
   *
   * @public
   */
  DisassociateWhenNotFound?: boolean | undefined;

  /**
   * License Expiry.
   *
   * @public
   */
  LicenseExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetLicenseConversionTaskRequest {
  /**
   * ID of the license type conversion task to retrieve information on.
   *
   * @public
   */
  LicenseConversionTaskId: string | undefined;
}

/**
 * @public
 */
export interface GetLicenseConversionTaskResponse {
  /**
   * ID of the license type conversion task.
   *
   * @public
   */
  LicenseConversionTaskId?: string | undefined;

  /**
   * Amazon Resource Names (ARN) of the resources the license conversion task is associated with.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Information about the license type converted from.
   *
   * @public
   */
  SourceLicenseContext?: LicenseConversionContext | undefined;

  /**
   * Information about the license type converted to.
   *
   * @public
   */
  DestinationLicenseContext?: LicenseConversionContext | undefined;

  /**
   * The status message for the conversion task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Status of the license type conversion task.
   *
   * @public
   */
  Status?: LicenseConversionTaskStatus | undefined;

  /**
   * Time at which the license type conversion task was started .
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Amount of time to complete the license type conversion.
   *
   * @public
   */
  LicenseConversionTime?: Date | undefined;

  /**
   * Time at which the license type conversion task was completed.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLicenseManagerReportGeneratorRequest {
  /**
   * Amazon Resource Name (ARN) of the report generator.
   *
   * @public
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

/**
 * Details of the S3 bucket that report generator reports are published to.
 *
 * @public
 */
export interface S3Location {
  /**
   * Name of the S3 bucket reports are published to.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * Prefix of the S3 bucket reports are published to.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * Describe the details of a report generator.
 *
 * @public
 */
export interface ReportGenerator {
  /**
   * Name of the report generator.
   *
   * @public
   */
  ReportGeneratorName?: string | undefined;

  /**
   * Type of reports that are generated.
   *
   * @public
   */
  ReportType?: ReportType[] | undefined;

  /**
   * License configuration type for this generator.
   *
   * @public
   */
  ReportContext?: ReportContext | undefined;

  /**
   * Details about how frequently reports are generated.
   *
   * @public
   */
  ReportFrequency?: ReportFrequency | undefined;

  /**
   * Amazon Resource Name (ARN) of the report generator.
   *
   * @public
   */
  LicenseManagerReportGeneratorArn?: string | undefined;

  /**
   * Status of the last report generation attempt.
   *
   * @public
   */
  LastRunStatus?: string | undefined;

  /**
   * Failure message for the last report generation attempt.
   *
   * @public
   */
  LastRunFailureReason?: string | undefined;

  /**
   * Time the last report was generated at.
   *
   * @public
   */
  LastReportGenerationTime?: string | undefined;

  /**
   * The Amazon Web Services account ID used to create the report generator.
   *
   * @public
   */
  ReportCreatorAccount?: string | undefined;

  /**
   * Description of the report generator.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Details of the S3 bucket that report generator reports are published to.
   *
   * @public
   */
  S3Location?: S3Location | undefined;

  /**
   * Time the report was created.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * Tags associated with the report generator.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseManagerReportGeneratorResponse {
  /**
   * A report generator that creates periodic reports about your license configurations.
   *
   * @public
   */
  ReportGenerator?: ReportGenerator | undefined;
}

/**
 * @public
 */
export interface GetLicenseUsageRequest {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;
}

/**
 * Usage associated with an entitlement resource.
 *
 * @public
 */
export interface EntitlementUsage {
  /**
   * Entitlement usage name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Resource usage consumed.
   *
   * @public
   */
  ConsumedValue: string | undefined;

  /**
   * Maximum entitlement usage count.
   *
   * @public
   */
  MaxCount?: string | undefined;

  /**
   * Entitlement usage unit.
   *
   * @public
   */
  Unit: EntitlementDataUnit | undefined;
}

/**
 * Describes the entitlement usage associated with a license.
 *
 * @public
 */
export interface LicenseUsage {
  /**
   * License entitlement usages.
   *
   * @public
   */
  EntitlementUsages?: EntitlementUsage[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseUsageResponse {
  /**
   * License usage details.
   *
   * @public
   */
  LicenseUsage?: LicenseUsage | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsRequest {}

/**
 * Configuration information for Organizations.
 *
 * @public
 */
export interface OrganizationConfiguration {
  /**
   * Enables Organizations integration.
   *
   * @public
   */
  EnableIntegration: boolean | undefined;
}

/**
 * Status information for cross-account discovery service.
 *
 * @public
 */
export interface CrossAccountDiscoveryServiceStatus {
  /**
   * Status message for cross-account discovery service.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Status information for a specific region.
 *
 * @public
 */
export interface RegionStatus {
  /**
   * Status value for the region.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Status information for cross-region discovery.
 *
 * @public
 */
export interface CrossRegionDiscoveryStatus {
  /**
   * Map of region status messages for cross-region discovery.
   *
   * @public
   */
  Message?: Record<string, RegionStatus> | undefined;
}

/**
 * Overall service status information for License Manager.
 *
 * @public
 */
export interface ServiceStatus {
  /**
   * Status of cross-account discovery service.
   *
   * @public
   */
  CrossAccountDiscovery?: CrossAccountDiscoveryServiceStatus | undefined;

  /**
   * Status of cross-region discovery service.
   *
   * @public
   */
  CrossRegionDiscovery?: CrossRegionDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsResponse {
  /**
   * Regional S3 bucket path for storing reports, license trail event data, discovery data, and so on.
   *
   * @public
   */
  S3BucketArn?: string | undefined;

  /**
   * SNS topic configured to receive notifications from License Manager.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * Indicates whether Organizations is integrated with License Manager for cross-account discovery.
   *
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * Indicates whether cross-account discovery is enabled.
   *
   * @public
   */
  EnableCrossAccountsDiscovery?: boolean | undefined;

  /**
   * Amazon Resource Name (ARN) of the resource share. The License Manager management account provides member accounts with access to this share.
   *
   * @public
   */
  LicenseManagerResourceShareArn?: string | undefined;

  /**
   * Cross region discovery home region.
   *
   * @public
   */
  CrossRegionDiscoveryHomeRegion?: string | undefined;

  /**
   * Cross region discovery source regions.
   *
   * @public
   */
  CrossRegionDiscoverySourceRegions?: string[] | undefined;

  /**
   * Service status.
   *
   * @public
   */
  ServiceStatus?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface ListAssetsForLicenseAssetGroupRequest {
  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;

  /**
   * Asset type. The possible values are `Instance` | `License` | `LicenseConfiguration`.
   *
   * @public
   */
  AssetType: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetsForLicenseAssetGroupResponse {
  /**
   * Assets.
   *
   * @public
   */
  Assets?: Asset[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsForLicenseConfigurationRequest {
  /**
   * Amazon Resource Name (ARN) of a license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an association with a license configuration.
 *
 * @public
 */
export interface LicenseConfigurationAssociation {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Type of server resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * ID of the Amazon Web Services account that owns the resource consuming licenses.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * Time when the license configuration was associated with the resource.
   *
   * @public
   */
  AssociationTime?: Date | undefined;

  /**
   * Scope of AMI associations. The possible value is `cross-account`.
   *
   * @public
   */
  AmiAssociationScope?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsForLicenseConfigurationResponse {
  /**
   * Information about the associations for the license configuration.
   *
   * @public
   */
  LicenseConfigurationAssociations?: LicenseConfigurationAssociation[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
 *
 * @public
 */
export interface Filter {
  /**
   * Name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the filter, which is case-sensitive. You can only specify one value for the filter.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDistributedGrantsRequest {
  /**
   * Amazon Resource Names (ARNs) of the grants.
   *
   * @public
   */
  GrantArns?: string[] | undefined;

  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `LicenseArn`
   * - `GrantStatus`
   * - `GranteePrincipalARN`
   * - `ProductSKU`
   * - `LicenseIssuerName`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributedGrantsResponse {
  /**
   * Distributed grant details.
   *
   * @public
   */
  Grants?: Grant[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * Amazon Resource Name of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the failure of a license operation.
 *
 * @public
 */
export interface LicenseOperationFailure {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Resource type.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Failure time.
   *
   * @public
   */
  FailureTime?: Date | undefined;

  /**
   * Name of the operation.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * ID of the Amazon Web Services account that owns the resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The requester is "License Manager Automated Discovery".
   *
   * @public
   */
  OperationRequestedBy?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MetadataList?: Metadata[] | undefined;
}

/**
 * @public
 */
export interface ListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * License configuration operations that failed.
   *
   * @public
   */
  LicenseOperationFailureList?: LicenseOperationFailure[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseAssetGroupsRequest {
  /**
   * Filters to scope the results. Following filters are supported
   *
   * - `LicenseAssetRulesetArn`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseAssetGroupsResponse {
  /**
   * License asset groups.
   *
   * @public
   */
  LicenseAssetGroups?: LicenseAssetGroup[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseAssetRulesetsRequest {
  /**
   * Filters to scope the results. Following filters are supported
   *
   * - `Name`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies whether to show License Manager managed license asset rulesets.
   *
   * @public
   */
  ShowAWSManagedLicenseAssetRulesets?: boolean | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseAssetRulesetsResponse {
  /**
   * License asset rulesets.
   *
   * @public
   */
  LicenseAssetRulesets?: LicenseAssetRuleset[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsRequest {
  /**
   * Amazon Resource Names (ARN) of the license configurations.
   *
   * @public
   */
  LicenseConfigurationArns?: string[] | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters to scope the results. The following filters and logical operators are supported:
   *
   * - `licenseCountingType` - The dimension for which licenses are counted. Possible values are `vCPU` | `Instance` | `Core` | `Socket`.
   * - `enforceLicenseCount` - A Boolean value that indicates whether hard license enforcement is used.
   * - `usagelimitExceeded` - A Boolean value that indicates whether the available licenses have been exceeded.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.
 *
 * @public
 */
export interface LicenseConfiguration {
  /**
   * Unique ID of the license configuration.
   *
   * @public
   */
  LicenseConfigurationId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;

  /**
   * Name of the license configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Description of the license configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Dimension to use to track the license inventory.
   *
   * @public
   */
  LicenseCountingType?: LicenseCountingType | undefined;

  /**
   * License rules.
   *
   * @public
   */
  LicenseRules?: string[] | undefined;

  /**
   * Number of licenses managed by the license configuration.
   *
   * @public
   */
  LicenseCount?: number | undefined;

  /**
   * Number of available licenses as a hard limit.
   *
   * @public
   */
  LicenseCountHardLimit?: boolean | undefined;

  /**
   * When true, disassociates a resource when software is uninstalled.
   *
   * @public
   */
  DisassociateWhenNotFound?: boolean | undefined;

  /**
   * Number of licenses consumed.
   *
   * @public
   */
  ConsumedLicenses?: number | undefined;

  /**
   * Status of the license configuration.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Account ID of the license configuration's owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Summaries for licenses consumed by various resources.
   *
   * @public
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[] | undefined;

  /**
   * Summaries for managed resources.
   *
   * @public
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[] | undefined;

  /**
   * Product information.
   *
   * @public
   */
  ProductInformationList?: ProductInformation[] | undefined;

  /**
   * Automated discovery information.
   *
   * @public
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation | undefined;

  /**
   * License configuration expiry time in Unix timestamp format.
   *
   * @public
   */
  LicenseExpiry?: number | undefined;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsResponse {
  /**
   * Information about the license configurations.
   *
   * @public
   */
  LicenseConfigurations?: LicenseConfiguration[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsForOrganizationRequest {
  /**
   * License configuration ARNs.
   *
   * @public
   */
  LicenseConfigurationArns?: string[] | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters to scope the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsForOrganizationResponse {
  /**
   * License configurations.
   *
   * @public
   */
  LicenseConfigurations?: LicenseConfiguration[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseConversionTasksRequest {
  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to scope the results. Valid filters are `ResourceArns` and `Status`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Information about a license type conversion task.
 *
 * @public
 */
export interface LicenseConversionTask {
  /**
   * The ID of the license type conversion task.
   *
   * @public
   */
  LicenseConversionTaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with the license type conversion task.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Information about the license type this conversion task converted from.
   *
   * @public
   */
  SourceLicenseContext?: LicenseConversionContext | undefined;

  /**
   * Information about the license type this conversion task converted to.
   *
   * @public
   */
  DestinationLicenseContext?: LicenseConversionContext | undefined;

  /**
   * The status of the conversion task.
   *
   * @public
   */
  Status?: LicenseConversionTaskStatus | undefined;

  /**
   * The status message for the conversion task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The time the conversion task was started at.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the usage operation value of the resource was changed.
   *
   * @public
   */
  LicenseConversionTime?: Date | undefined;

  /**
   * The time the conversion task was completed.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLicenseConversionTasksResponse {
  /**
   * Information about the license configuration tasks for your account.
   *
   * @public
   */
  LicenseConversionTasks?: LicenseConversionTask[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseManagerReportGeneratorsRequest {
  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `LicenseConfigurationArn`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLicenseManagerReportGeneratorsResponse {
  /**
   * A report generator that creates periodic reports about your license configurations.
   *
   * @public
   */
  ReportGenerators?: ReportGenerator[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicensesRequest {
  /**
   * Amazon Resource Names (ARNs) of the licenses.
   *
   * @public
   */
  LicenseArns?: string[] | undefined;

  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `Beneficiary`
   * - `ProductSKU`
   * - `Fingerprint`
   * - `Status`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLicensesResponse {
  /**
   * License details.
   *
   * @public
   */
  Licenses?: License[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseSpecificationsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) of a resource that has an associated license configuration.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details for associating a license configuration with a resource.
 *
 * @public
 */
export interface LicenseSpecification {
  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * Scope of AMI associations. The possible value is `cross-account`.
   *
   * @public
   */
  AmiAssociationScope?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseSpecificationsForResourceResponse {
  /**
   * License configurations associated with a resource.
   *
   * @public
   */
  LicenseSpecifications?: LicenseSpecification[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseVersionsRequest {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLicenseVersionsResponse {
  /**
   * License details.
   *
   * @public
   */
  Licenses?: License[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedGrantsRequest {
  /**
   * Amazon Resource Names (ARNs) of the grants.
   *
   * @public
   */
  GrantArns?: string[] | undefined;

  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `ProductSKU`
   * - `LicenseIssuerName`
   * - `LicenseArn`
   * - `GrantStatus`
   * - `GranterAccountId`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReceivedGrantsResponse {
  /**
   * Received grant details.
   *
   * @public
   */
  Grants?: Grant[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedGrantsForOrganizationRequest {
  /**
   * The Amazon Resource Name (ARN) of the received license.
   *
   * @public
   */
  LicenseArn: string | undefined;

  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `ParentArn`
   * - `GranteePrincipalArn`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReceivedGrantsForOrganizationResponse {
  /**
   * Lists the grants the organization has received.
   *
   * @public
   */
  Grants?: Grant[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedLicensesRequest {
  /**
   * Amazon Resource Names (ARNs) of the licenses.
   *
   * @public
   */
  LicenseArns?: string[] | undefined;

  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `ProductSKU`
   * - `Status`
   * - `Fingerprint`
   * - `IssuerName`
   * - `Beneficiary`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Metadata associated with received licenses and grants.
 *
 * @public
 */
export interface ReceivedMetadata {
  /**
   * Received status.
   *
   * @public
   */
  ReceivedStatus?: ReceivedStatus | undefined;

  /**
   * Received status reason.
   *
   * @public
   */
  ReceivedStatusReason?: string | undefined;

  /**
   * Allowed operations.
   *
   * @public
   */
  AllowedOperations?: AllowedOperation[] | undefined;

  /**
   * The type of the grant through which the license was received. Valid values:
   *
   * - `BuyerGrant` - Grants you the entitlement to use the license.
   * - `DelegateGrant` - Gives you read-only visibility into the licenses and grants distributed to buyers, with no entitlement to use them.
   *
   * @public
   */
  GrantType?: GrantType | undefined;
}

/**
 * Describes a license that is granted to a grantee.
 *
 * @public
 */
export interface GrantedLicense {
  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * License name.
   *
   * @public
   */
  LicenseName?: string | undefined;

  /**
   * Product name.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * Product SKU.
   *
   * @public
   */
  ProductSKU?: string | undefined;

  /**
   * Granted license issuer.
   *
   * @public
   */
  Issuer?: IssuerDetails | undefined;

  /**
   * Home Region of the granted license.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * Granted license status.
   *
   * @public
   */
  Status?: LicenseStatus | undefined;

  /**
   * Date and time range during which the granted license is valid, in ISO8601-UTC format.
   *
   * @public
   */
  Validity?: DatetimeRange | undefined;

  /**
   * Granted license beneficiary.
   *
   * @public
   */
  Beneficiary?: string | undefined;

  /**
   * License entitlements.
   *
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * Configuration for consumption of the license.
   *
   * @public
   */
  ConsumptionConfiguration?: ConsumptionConfiguration | undefined;

  /**
   * Granted license metadata.
   *
   * @public
   */
  LicenseMetadata?: Metadata[] | undefined;

  /**
   * Creation time of the granted license.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * Version of the granted license.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Granted license received metadata.
   *
   * @public
   */
  ReceivedMetadata?: ReceivedMetadata | undefined;
}

/**
 * @public
 */
export interface ListReceivedLicensesResponse {
  /**
   * Received license details.
   *
   * @public
   */
  Licenses?: GrantedLicense[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedLicensesForOrganizationRequest {
  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `Beneficiary`
   * - `ProductSKU`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReceivedLicensesForOrganizationResponse {
  /**
   * Lists the licenses the organization has received.
   *
   * @public
   */
  Licenses?: GrantedLicense[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An inventory filter.
 *
 * @public
 */
export interface InventoryFilter {
  /**
   * Name of the filter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Condition of the filter.
   *
   * @public
   */
  Condition: InventoryFilterCondition | undefined;

  /**
   * Value of the filter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceInventoryRequest {
  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters to scope the results. The following filters and logical operators are supported:
   *
   * - `account_id` - The ID of the Amazon Web Services account that owns the resource. Logical operators are `EQUALS` | `NOT_EQUALS`.
   * - `application_name` - The name of the application. Logical operators are `EQUALS` | `BEGINS_WITH`.
   * - `license_included` - The type of license included. Logical operators are `EQUALS` | `NOT_EQUALS`. Possible values are `sql-server-enterprise` | `sql-server-standard` | `sql-server-web` | `windows-server-datacenter`.
   * - `platform` - The platform of the resource. Logical operators are `EQUALS` | `BEGINS_WITH`.
   * - `resource_id` - The ID of the resource. Logical operators are `EQUALS` | `NOT_EQUALS`.
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Logical operators are `EQUALS` (single account) or `EQUALS` | `NOT_EQUALS` (cross account).
   *
   * @public
   */
  Filters?: InventoryFilter[] | undefined;
}

/**
 * Details about a resource.
 *
 * @public
 */
export interface ResourceInventory {
  /**
   * ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Platform of the resource.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * Platform version of the resource in the inventory.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * ID of the account that owns the resource.
   *
   * @public
   */
  ResourceOwningAccountId?: string | undefined;

  /**
   * List of Marketplace product codes associated with the resource.
   *
   * @public
   */
  MarketplaceProductCodes?: string[] | undefined;

  /**
   * Usage operation value that corresponds to the license type for billing purposes.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * Amazon Machine Image (AMI) ID associated with the resource.
   *
   * @public
   */
  AmiId?: string | undefined;

  /**
   * Dedicated Host ID where the resource is running.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * Region where the resource is located.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * EC2 instance type of the resource.
   *
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceInventoryResponse {
  /**
   * Information about the resources.
   *
   * @public
   */
  ResourceInventoryList?: ResourceInventory[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Information about the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTokensRequest {
  /**
   * Token IDs.
   *
   * @public
   */
  TokenIds?: string[] | undefined;

  /**
   * Filters to scope the results. The following filter is supported:
   *
   * - `LicenseArns`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a token.
 *
 * @public
 */
export interface TokenData {
  /**
   * Token ID.
   *
   * @public
   */
  TokenId?: string | undefined;

  /**
   * Type of token generated. The supported value is `REFRESH_TOKEN`.
   *
   * @public
   */
  TokenType?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the license.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * Token expiration time, in ISO8601-UTC format.
   *
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * Data specified by the caller.
   *
   * @public
   */
  TokenProperties?: string[] | undefined;

  /**
   * Amazon Resource Names (ARN) of the roles included in the token.
   *
   * @public
   */
  RoleArns?: string[] | undefined;

  /**
   * Token status. The possible values are `AVAILABLE` and `DELETED`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface ListTokensResponse {
  /**
   * Received token details.
   *
   * @public
   */
  Tokens?: TokenData[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsageForLicenseConfigurationRequest {
  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters to scope the results. The following filters and logical operators are supported:
   *
   * - `resourceArn` - The ARN of the license configuration resource.
   * - `resourceType` - The resource type (`EC2_INSTANCE` | `EC2_HOST` | `EC2_AMI` | `SYSTEMS_MANAGER_MANAGED_INSTANCE`).
   * - `resourceAccount` - The ID of the account that owns the resource.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Details about the usage of a resource associated with a license configuration.
 *
 * @public
 */
export interface LicenseConfigurationUsage {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Status of the resource.
   *
   * @public
   */
  ResourceStatus?: string | undefined;

  /**
   * ID of the account that owns the resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * Time when the license configuration was initially associated with the resource.
   *
   * @public
   */
  AssociationTime?: Date | undefined;

  /**
   * Number of licenses consumed by the resource.
   *
   * @public
   */
  ConsumedLicenses?: number | undefined;
}

/**
 * @public
 */
export interface ListUsageForLicenseConfigurationResponse {
  /**
   * Information about the license configurations.
   *
   * @public
   */
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[] | undefined;

  /**
   * Token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectGrantRequest {
  /**
   * Amazon Resource Name (ARN) of the grant.
   *
   * @public
   */
  GrantArn: string | undefined;
}

/**
 * @public
 */
export interface RejectGrantResponse {
  /**
   * Grant ARN.
   *
   * @public
   */
  GrantArn?: string | undefined;

  /**
   * Grant status.
   *
   * @public
   */
  Status?: GrantStatus | undefined;

  /**
   * Grant version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource. The following examples provide an example ARN for each supported resource in License Manager:
   *
   * - Licenses - `arn:aws:license-manager::111122223333:license:l-EXAMPLE2da7646d6861033667f20e895`
   * - Grants - `arn:aws:license-manager::111122223333:grant:g-EXAMPLE7b19f4a0ab73679b0beb52707`
   * - License configurations - `arn:aws:license-manager:us-east-1:111122223333:license-configuration:lic-EXAMPLE6a788d4c8acd4264ff0ecf2ed2d`
   * - Report generators - `arn:aws:license-manager:us-east-1:111122223333:report-generator:r-EXAMPLE825b4a4f8fe5a3e0c88824e5fc6`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys identifying the tags to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateLicenseAssetGroupRequest {
  /**
   * License asset group name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * License asset group description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset group configurations.
   *
   * @public
   */
  LicenseAssetGroupConfigurations?: LicenseAssetGroupConfiguration[] | undefined;

  /**
   * ARNs of associated license asset rulesets.
   *
   * @public
   */
  AssociatedLicenseAssetRulesetARNs: string[] | undefined;

  /**
   * License asset group properties.
   *
   * @public
   */
  Properties?: LicenseAssetGroupProperty[] | undefined;

  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;

  /**
   * License asset group status. The possible values are `ACTIVE` | `DISABLED`.
   *
   * @public
   */
  Status?: LicenseAssetGroupStatus | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseAssetGroupResponse {
  /**
   * Amazon Resource Name (ARN) of the license asset group.
   *
   * @public
   */
  LicenseAssetGroupArn: string | undefined;

  /**
   * License asset group status.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseAssetRulesetRequest {
  /**
   * License asset ruleset name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * License asset ruleset description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * License asset rules.
   *
   * @public
   */
  Rules: LicenseAssetRule[] | undefined;

  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseAssetRulesetResponse {
  /**
   * Amazon Resource Name (ARN) of the license asset ruleset.
   *
   * @public
   */
  LicenseAssetRulesetArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseConfigurationRequest {
  /**
   * Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * New status of the license configuration.
   *
   * @public
   */
  LicenseConfigurationStatus?: LicenseConfigurationStatus | undefined;

  /**
   * New license rule. The only rule that you can add after you create a license configuration is licenseAffinityToHost.
   *
   * @public
   */
  LicenseRules?: string[] | undefined;

  /**
   * New number of licenses managed by the license configuration.
   *
   * @public
   */
  LicenseCount?: number | undefined;

  /**
   * New hard limit of the number of available licenses.
   *
   * @public
   */
  LicenseCountHardLimit?: boolean | undefined;

  /**
   * New name of the license configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * New description of the license configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * New product information.
   *
   * @public
   */
  ProductInformationList?: ProductInformation[] | undefined;

  /**
   * When true, disassociates a resource when software is uninstalled.
   *
   * @public
   */
  DisassociateWhenNotFound?: boolean | undefined;

  /**
   * License configuration expiry time.
   *
   * @public
   */
  LicenseExpiry?: number | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLicenseManagerReportGeneratorRequest {
  /**
   * Amazon Resource Name (ARN) of the report generator to update.
   *
   * @public
   */
  LicenseManagerReportGeneratorArn: string | undefined;

  /**
   * Name of the report generator.
   *
   * @public
   */
  ReportGeneratorName: string | undefined;

  /**
   * Type of reports to generate. The following report types are supported:
   *
   * - License configuration report - Reports the number and details of consumed licenses for a license configuration.
   * - Resource report - Reports the tracked licenses and resource consumption for a license configuration.
   *
   * @public
   */
  Type: ReportType[] | undefined;

  /**
   * The report context.
   *
   * @public
   */
  ReportContext: ReportContext | undefined;

  /**
   * Frequency by which reports are generated.
   *
   * @public
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Description of the report generator.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseManagerReportGeneratorResponse {}

/**
 * @public
 */
export interface UpdateLicenseSpecificationsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * ARNs of the license configurations to add.
   *
   * @public
   */
  AddLicenseSpecifications?: LicenseSpecification[] | undefined;

  /**
   * ARNs of the license configurations to remove.
   *
   * @public
   */
  RemoveLicenseSpecifications?: LicenseSpecification[] | undefined;
}

/**
 * @public
 */
export interface UpdateLicenseSpecificationsForResourceResponse {}

/**
 * @public
 */
export interface UpdateServiceSettingsRequest {
  /**
   * Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.
   *
   * @public
   */
  S3BucketArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * Enables integration with Organizations for cross-account discovery.
   *
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * Activates cross-account discovery.
   *
   * @public
   */
  EnableCrossAccountsDiscovery?: boolean | undefined;

  /**
   * Cross region discovery enabled source regions.
   *
   * @public
   */
  EnabledDiscoverySourceRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSettingsResponse {}
