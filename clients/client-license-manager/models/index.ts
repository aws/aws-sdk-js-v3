import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to resource denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>The AWS user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 */
export interface AuthorizationException extends __SmithyException, $MetadataBearer {
  name: "AuthorizationException";
  $fault: "client";
  Message?: string;
}

export namespace AuthorizationException {
  export const filterSensitiveLog = (obj: AuthorizationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AuthorizationException => __isa(o, "AuthorizationException");
}

/**
 * <p>Describes automated discovery.</p>
 */
export interface AutomatedDiscoveryInformation {
  __type?: "AutomatedDiscoveryInformation";
  /**
   * <p>Time that automated discovery last ran.</p>
   */
  LastRunTime?: Date;
}

export namespace AutomatedDiscoveryInformation {
  export const filterSensitiveLog = (obj: AutomatedDiscoveryInformation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutomatedDiscoveryInformation => __isa(o, "AutomatedDiscoveryInformation");
}

/**
 * <p>Details about license consumption.</p>
 */
export interface ConsumedLicenseSummary {
  __type?: "ConsumedLicenseSummary";
  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Resource type of the resource consuming a license.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ConsumedLicenseSummary {
  export const filterSensitiveLog = (obj: ConsumedLicenseSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConsumedLicenseSummary => __isa(o, "ConsumedLicenseSummary");
}

export interface CreateLicenseConfigurationRequest {
  __type?: "CreateLicenseConfigurationRequest";
  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Indicates whether hard or soft license enforcement is used. Exceeding a hard limit
   *          blocks the launch of new instances.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Dimension used to track the license inventory.</p>
   */
  LicenseCountingType: LicenseCountingType | string | undefined;

  /**
   * <p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). Available rules vary by dimension.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cores</code> dimension: <code>allowedTenancy</code> | <code>maximumCores</code> | <code>minimumCores</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Instances</code> dimension: <code>allowedTenancy</code> |
   *                <code>maximumCores</code> | <code>minimumCores</code> |
   *                <code>maximumSockets</code> | <code>minimumSockets</code> |
   *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sockets</code> dimension: <code>allowedTenancy</code> | <code>maximumSockets</code> | <code>minimumSockets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vCPUs</code> dimension: <code>allowedTenancy</code> | <code>honorVcpuOptimization</code> | <code>maximumVcpus</code> | <code>minimumVcpus</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LicenseRules?: string[];

  /**
   * <p>Name of the license configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Tags to add to the license configuration.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLicenseConfigurationRequest => __isa(o, "CreateLicenseConfigurationRequest");
}

export interface CreateLicenseConfigurationResponse {
  __type?: "CreateLicenseConfigurationResponse";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace CreateLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLicenseConfigurationResponse =>
    __isa(o, "CreateLicenseConfigurationResponse");
}

export interface DeleteLicenseConfigurationRequest {
  __type?: "DeleteLicenseConfigurationRequest";
  /**
   * <p>ID of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace DeleteLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLicenseConfigurationRequest => __isa(o, "DeleteLicenseConfigurationRequest");
}

export interface DeleteLicenseConfigurationResponse {
  __type?: "DeleteLicenseConfigurationResponse";
}

export namespace DeleteLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLicenseConfigurationResponse =>
    __isa(o, "DeleteLicenseConfigurationResponse");
}

/**
 * <p>A dependency required to run the API is missing.</p>
 */
export interface FailedDependencyException extends __SmithyException, $MetadataBearer {
  name: "FailedDependencyException";
  $fault: "client";
  Message?: string;
}

export namespace FailedDependencyException {
  export const filterSensitiveLog = (obj: FailedDependencyException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FailedDependencyException => __isa(o, "FailedDependencyException");
}

/**
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific criteria,
 *          such as tags, attributes, or IDs.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>Name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>Filter values. Filter values are case-sensitive.</p>
   */
  Values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>The request uses too many filters or too many filter values.</p>
 */
export interface FilterLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "FilterLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace FilterLimitExceededException {
  export const filterSensitiveLog = (obj: FilterLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FilterLimitExceededException => __isa(o, "FilterLimitExceededException");
}

export interface GetLicenseConfigurationRequest {
  __type?: "GetLicenseConfigurationRequest";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace GetLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: GetLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLicenseConfigurationRequest => __isa(o, "GetLicenseConfigurationRequest");
}

export interface GetLicenseConfigurationResponse {
  __type?: "GetLicenseConfigurationResponse";
  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * <p>Summaries of the licenses consumed by resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * <p>Number of licenses assigned to resources.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Unique ID for the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Number of available licenses.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Dimension on which the licenses are counted.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Summaries of the managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Account ID of the owner of the license configuration.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>License configuration status.</p>
   */
  Status?: string;

  /**
   * <p>Tags for the license configuration.</p>
   */
  Tags?: Tag[];
}

export namespace GetLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: GetLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLicenseConfigurationResponse => __isa(o, "GetLicenseConfigurationResponse");
}

export interface GetServiceSettingsRequest {
  __type?: "GetServiceSettingsRequest";
}

export namespace GetServiceSettingsRequest {
  export const filterSensitiveLog = (obj: GetServiceSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetServiceSettingsRequest => __isa(o, "GetServiceSettingsRequest");
}

export interface GetServiceSettingsResponse {
  __type?: "GetServiceSettingsResponse";
  /**
   * <p>Indicates whether cross-account discovery has been enabled.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * <p>Amazon Resource Name (ARN) of the AWS resource share. The License Manager master account will provide member
   *          accounts with access to this share.</p>
   */
  LicenseManagerResourceShareArn?: string;

  /**
   * <p>Indicates whether AWS Organizations has been integrated with License Manager for
   *          cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * <p>Regional S3 bucket path for storing reports, license trail event data, discovery data,
   *          and so on.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>SNS topic configured to receive notifications from License Manager.</p>
   */
  SnsTopicArn?: string;
}

export namespace GetServiceSettingsResponse {
  export const filterSensitiveLog = (obj: GetServiceSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetServiceSettingsResponse => __isa(o, "GetServiceSettingsResponse");
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterValueException => __isa(o, "InvalidParameterValueException");
}

/**
 * <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourceStateException {
  export const filterSensitiveLog = (obj: InvalidResourceStateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidResourceStateException => __isa(o, "InvalidResourceStateException");
}

/**
 * <p>An inventory filter.</p>
 */
export interface InventoryFilter {
  __type?: "InventoryFilter";
  /**
   * <p>Condition of the filter.</p>
   */
  Condition: InventoryFilterCondition | string | undefined;

  /**
   * <p>Name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InventoryFilter => __isa(o, "InventoryFilter");
}

export enum InventoryFilterCondition {
  BEGINS_WITH = "BEGINS_WITH",
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
 *          must be associated with a host), and the number of licenses purchased and used.</p>
 */
export interface LicenseConfiguration {
  __type?: "LicenseConfiguration";
  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * <p>Summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * <p>Number of licenses consumed. </p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Unique ID of the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Dimension to use to track the license inventory.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Account ID of the license configuration's owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Status of the license configuration.</p>
   */
  Status?: string;
}

export namespace LicenseConfiguration {
  export const filterSensitiveLog = (obj: LicenseConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseConfiguration => __isa(o, "LicenseConfiguration");
}

/**
 * <p>Describes an association with a license configuration.</p>
 */
export interface LicenseConfigurationAssociation {
  __type?: "LicenseConfigurationAssociation";
  /**
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the AWS account that owns the resource consuming licenses.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Type of server resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace LicenseConfigurationAssociation {
  export const filterSensitiveLog = (obj: LicenseConfigurationAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseConfigurationAssociation => __isa(o, "LicenseConfigurationAssociation");
}

export enum LicenseConfigurationStatus {
  AVAILABLE = "AVAILABLE",
  DISABLED = "DISABLED",
}

/**
 * <p>Details about the usage of a resource associated with a license configuration.</p>
 */
export interface LicenseConfigurationUsage {
  __type?: "LicenseConfigurationUsage";
  /**
   * <p>Time when the license configuration was initially associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Status of the resource.</p>
   */
  ResourceStatus?: string;

  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace LicenseConfigurationUsage {
  export const filterSensitiveLog = (obj: LicenseConfigurationUsage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseConfigurationUsage => __isa(o, "LicenseConfigurationUsage");
}

export enum LicenseCountingType {
  CORE = "Core",
  INSTANCE = "Instance",
  SOCKET = "Socket",
  VCPU = "vCPU",
}

/**
 * <p>Describes the failure of a license operation.</p>
 */
export interface LicenseOperationFailure {
  __type?: "LicenseOperationFailure";
  /**
   * <p>Error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Failure time.</p>
   */
  FailureTime?: Date;

  /**
   * <p>Reserved.</p>
   */
  MetadataList?: Metadata[];

  /**
   * <p>Name of the operation.</p>
   */
  OperationName?: string;

  /**
   * <p>The requester is "License Manager Automated Discovery".</p>
   */
  OperationRequestedBy?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the AWS account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Resource type.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace LicenseOperationFailure {
  export const filterSensitiveLog = (obj: LicenseOperationFailure): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseOperationFailure => __isa(o, "LicenseOperationFailure");
}

/**
 * <p>Details for associating a license configuration with a resource.</p>
 */
export interface LicenseSpecification {
  __type?: "LicenseSpecification";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace LicenseSpecification {
  export const filterSensitiveLog = (obj: LicenseSpecification): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseSpecification => __isa(o, "LicenseSpecification");
}

/**
 * <p>You do not have enough licenses available to support a new resource launch.</p>
 */
export interface LicenseUsageException extends __SmithyException, $MetadataBearer {
  name: "LicenseUsageException";
  $fault: "client";
  Message?: string;
}

export namespace LicenseUsageException {
  export const filterSensitiveLog = (obj: LicenseUsageException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseUsageException => __isa(o, "LicenseUsageException");
}

export interface ListAssociationsForLicenseConfigurationRequest {
  __type?: "ListAssociationsForLicenseConfigurationRequest";
  /**
   * <p>Amazon Resource Name (ARN) of a license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsForLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ListAssociationsForLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssociationsForLicenseConfigurationRequest =>
    __isa(o, "ListAssociationsForLicenseConfigurationRequest");
}

export interface ListAssociationsForLicenseConfigurationResponse {
  __type?: "ListAssociationsForLicenseConfigurationResponse";
  /**
   * <p>Information about the associations for the license configuration.</p>
   */
  LicenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsForLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: ListAssociationsForLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssociationsForLicenseConfigurationResponse =>
    __isa(o, "ListAssociationsForLicenseConfigurationResponse");
}

export interface ListFailuresForLicenseConfigurationOperationsRequest {
  __type?: "ListFailuresForLicenseConfigurationOperationsRequest";
  /**
   * <p>Amazon Resource Name of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListFailuresForLicenseConfigurationOperationsRequest {
  export const filterSensitiveLog = (obj: ListFailuresForLicenseConfigurationOperationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFailuresForLicenseConfigurationOperationsRequest =>
    __isa(o, "ListFailuresForLicenseConfigurationOperationsRequest");
}

export interface ListFailuresForLicenseConfigurationOperationsResponse {
  __type?: "ListFailuresForLicenseConfigurationOperationsResponse";
  /**
   * <p>License configuration operations that failed.</p>
   */
  LicenseOperationFailureList?: LicenseOperationFailure[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListFailuresForLicenseConfigurationOperationsResponse {
  export const filterSensitiveLog = (obj: ListFailuresForLicenseConfigurationOperationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFailuresForLicenseConfigurationOperationsResponse =>
    __isa(o, "ListFailuresForLicenseConfigurationOperationsResponse");
}

export interface ListLicenseConfigurationsRequest {
  __type?: "ListLicenseConfigurationsRequest";
  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>licenseCountingType</code> - The dimension on which licenses are counted (vCPU).
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enforceLicenseCount</code> - A Boolean value that indicates whether hard license enforcement is used.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usagelimitExceeded</code> - A Boolean value that indicates whether the available licenses have been exceeded.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Amazon Resource Names (ARN) of the license configurations.</p>
   */
  LicenseConfigurationArns?: string[];

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLicenseConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListLicenseConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListLicenseConfigurationsRequest => __isa(o, "ListLicenseConfigurationsRequest");
}

export interface ListLicenseConfigurationsResponse {
  __type?: "ListLicenseConfigurationsResponse";
  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurations?: LicenseConfiguration[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLicenseConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListLicenseConfigurationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListLicenseConfigurationsResponse => __isa(o, "ListLicenseConfigurationsResponse");
}

export interface ListLicenseSpecificationsForResourceRequest {
  __type?: "ListLicenseSpecificationsForResourceRequest";
  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Amazon Resource Name (ARN) of a resource that has an associated license configuration.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListLicenseSpecificationsForResourceRequest {
  export const filterSensitiveLog = (obj: ListLicenseSpecificationsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListLicenseSpecificationsForResourceRequest =>
    __isa(o, "ListLicenseSpecificationsForResourceRequest");
}

export interface ListLicenseSpecificationsForResourceResponse {
  __type?: "ListLicenseSpecificationsForResourceResponse";
  /**
   * <p>License configurations associated with a resource.</p>
   */
  LicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLicenseSpecificationsForResourceResponse {
  export const filterSensitiveLog = (obj: ListLicenseSpecificationsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListLicenseSpecificationsForResourceResponse =>
    __isa(o, "ListLicenseSpecificationsForResourceResponse");
}

export interface ListResourceInventoryRequest {
  __type?: "ListResourceInventoryRequest";
  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account_id</code> - The ID of the AWS account that owns the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application_name</code> - The name of the application.
   *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>license_included</code> - The type of license included.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.
   *                Possible values are <code>sql-server-enterprise</code> |
   *                <code>sql-server-standard</code> |
   *                <code>sql-server-web</code> |
   *                <code>windows-server-datacenter</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform of the resource.
   *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_id</code> - The ID of the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListResourceInventoryRequest {
  export const filterSensitiveLog = (obj: ListResourceInventoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceInventoryRequest => __isa(o, "ListResourceInventoryRequest");
}

export interface ListResourceInventoryResponse {
  __type?: "ListResourceInventoryResponse";
  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the resources.</p>
   */
  ResourceInventoryList?: ResourceInventory[];
}

export namespace ListResourceInventoryResponse {
  export const filterSensitiveLog = (obj: ListResourceInventoryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceInventoryResponse => __isa(o, "ListResourceInventoryResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListUsageForLicenseConfigurationRequest {
  __type?: "ListUsageForLicenseConfigurationRequest";
  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resourceArn</code> - The ARN of the license configuration resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resourceType</code> - The resource type (EC2_INSTANCE | EC2_HOST | EC2_AMI | SYSTEMS_MANAGER_MANAGED_INSTANCE).
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resourceAccount</code> - The ID of the account that owns the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUsageForLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ListUsageForLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListUsageForLicenseConfigurationRequest =>
    __isa(o, "ListUsageForLicenseConfigurationRequest");
}

export interface ListUsageForLicenseConfigurationResponse {
  __type?: "ListUsageForLicenseConfigurationResponse";
  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUsageForLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: ListUsageForLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListUsageForLicenseConfigurationResponse =>
    __isa(o, "ListUsageForLicenseConfigurationResponse");
}

/**
 * <p>Summary information about a managed resource.</p>
 */
export interface ManagedResourceSummary {
  __type?: "ManagedResourceSummary";
  /**
   * <p>Number of resources associated with licenses.</p>
   */
  AssociationCount?: number;

  /**
   * <p>Type of resource associated with a license.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ManagedResourceSummary {
  export const filterSensitiveLog = (obj: ManagedResourceSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ManagedResourceSummary => __isa(o, "ManagedResourceSummary");
}

/**
 * <p>Reserved.</p>
 */
export interface Metadata {
  __type?: "Metadata";
  /**
   * <p>Reserved.</p>
   */
  Name?: string;

  /**
   * <p>Reserved.</p>
   */
  Value?: string;
}

export namespace Metadata {
  export const filterSensitiveLog = (obj: Metadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Metadata => __isa(o, "Metadata");
}

/**
 * <p>Configuration information for AWS Organizations.</p>
 */
export interface OrganizationConfiguration {
  __type?: "OrganizationConfiguration";
  /**
   * <p>Enables AWS Organization integration.</p>
   */
  EnableIntegration: boolean | undefined;
}

export namespace OrganizationConfiguration {
  export const filterSensitiveLog = (obj: OrganizationConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationConfiguration => __isa(o, "OrganizationConfiguration");
}

/**
 * <p>Describes product information for a license configuration.</p>
 */
export interface ProductInformation {
  __type?: "ProductInformation";
  /**
   * <p>Product information filters. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Application Name</code> - The name of the application.
   *               Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Application Publisher</code> - The publisher of the application.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Application Version</code> - The version of the application.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Platform Name</code> - The name of the platform.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Platform Type</code> - The platform type.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>License Included</code> - The type of license included.
   *                Logical operators are <code>EQUALS</code> and <code>NOT_EQUALS</code>.
   *                Possible values are <code>sql-server-enterprise</code> |
   *                <code>sql-server-standard</code> |
   *                <code>sql-server-web</code> |
   *                <code>windows-server-datacenter</code>.</p>
   *             </li>
   *          </ul>
   */
  ProductInformationFilterList: ProductInformationFilter[] | undefined;

  /**
   * <p>Resource type. The value is <code>SSM_MANAGED</code>.</p>
   */
  ResourceType: string | undefined;
}

export namespace ProductInformation {
  export const filterSensitiveLog = (obj: ProductInformation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProductInformation => __isa(o, "ProductInformation");
}

/**
 * <p>Describes product information filters.</p>
 */
export interface ProductInformationFilter {
  __type?: "ProductInformationFilter";
  /**
   * <p>Logical operator.</p>
   */
  ProductInformationFilterComparator: string | undefined;

  /**
   * <p>Filter name.</p>
   */
  ProductInformationFilterName: string | undefined;

  /**
   * <p>Filter value.</p>
   */
  ProductInformationFilterValue: string[] | undefined;
}

export namespace ProductInformationFilter {
  export const filterSensitiveLog = (obj: ProductInformationFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProductInformationFilter => __isa(o, "ProductInformationFilter");
}

/**
 * <p>Too many requests have been submitted. Try again after a brief wait.</p>
 */
export interface RateLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RateLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace RateLimitExceededException {
  export const filterSensitiveLog = (obj: RateLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RateLimitExceededException => __isa(o, "RateLimitExceededException");
}

/**
 * <p>Details about a resource.</p>
 */
export interface ResourceInventory {
  __type?: "ResourceInventory";
  /**
   * <p>Platform of the resource.</p>
   */
  Platform?: string;

  /**
   * <p>Platform version of the resource in the inventory.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwningAccountId?: string;

  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ResourceInventory {
  export const filterSensitiveLog = (obj: ResourceInventory): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceInventory => __isa(o, "ResourceInventory");
}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceLimitExceededException => __isa(o, "ResourceLimitExceededException");
}

export enum ResourceType {
  EC2_AMI = "EC2_AMI",
  EC2_HOST = "EC2_HOST",
  EC2_INSTANCE = "EC2_INSTANCE",
  RDS = "RDS",
  SYSTEMS_MANAGER_MANAGED_INSTANCE = "SYSTEMS_MANAGER_MANAGED_INSTANCE",
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
  name: "ServerInternalException";
  $fault: "server";
  Message?: string;
}

export namespace ServerInternalException {
  export const filterSensitiveLog = (obj: ServerInternalException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServerInternalException => __isa(o, "ServerInternalException");
}

/**
 * <p>Details about a tag for a license configuration.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>Tag key.</p>
   */
  Key?: string;

  /**
   * <p>Tag value.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys identifying the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateLicenseConfigurationRequest {
  __type?: "UpdateLicenseConfigurationRequest";
  /**
   * <p>New description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>New status of the license configuration.</p>
   */
  LicenseConfigurationStatus?: LicenseConfigurationStatus | string;

  /**
   * <p>New number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>New hard limit of the number of available licenses.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>New license rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>New name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>New product information.</p>
   */
  ProductInformationList?: ProductInformation[];
}

export namespace UpdateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateLicenseConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLicenseConfigurationRequest => __isa(o, "UpdateLicenseConfigurationRequest");
}

export interface UpdateLicenseConfigurationResponse {
  __type?: "UpdateLicenseConfigurationResponse";
}

export namespace UpdateLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateLicenseConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLicenseConfigurationResponse =>
    __isa(o, "UpdateLicenseConfigurationResponse");
}

export interface UpdateLicenseSpecificationsForResourceRequest {
  __type?: "UpdateLicenseSpecificationsForResourceRequest";
  /**
   * <p>ARNs of the license configurations to add.</p>
   */
  AddLicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>ARNs of the license configurations to remove.</p>
   */
  RemoveLicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>Amazon Resource Name (ARN) of the AWS resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UpdateLicenseSpecificationsForResourceRequest {
  export const filterSensitiveLog = (obj: UpdateLicenseSpecificationsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLicenseSpecificationsForResourceRequest =>
    __isa(o, "UpdateLicenseSpecificationsForResourceRequest");
}

export interface UpdateLicenseSpecificationsForResourceResponse {
  __type?: "UpdateLicenseSpecificationsForResourceResponse";
}

export namespace UpdateLicenseSpecificationsForResourceResponse {
  export const filterSensitiveLog = (obj: UpdateLicenseSpecificationsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLicenseSpecificationsForResourceResponse =>
    __isa(o, "UpdateLicenseSpecificationsForResourceResponse");
}

export interface UpdateServiceSettingsRequest {
  __type?: "UpdateServiceSettingsRequest";
  /**
   * <p>Activates cross-account discovery.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * <p>Enables integration with AWS Organizations for cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.</p>
   */
  SnsTopicArn?: string;
}

export namespace UpdateServiceSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateServiceSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateServiceSettingsRequest => __isa(o, "UpdateServiceSettingsRequest");
}

export interface UpdateServiceSettingsResponse {
  __type?: "UpdateServiceSettingsResponse";
}

export namespace UpdateServiceSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateServiceSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateServiceSettingsResponse => __isa(o, "UpdateServiceSettingsResponse");
}
